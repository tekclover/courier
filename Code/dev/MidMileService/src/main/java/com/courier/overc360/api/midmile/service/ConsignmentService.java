package com.courier.overc360.api.midmile.service;


import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.*;
import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
import com.courier.overc360.api.midmile.primary.model.itemdetails.AddItemDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.AddPieceDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.PieceDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.UpdatePieceDetails;
import com.courier.overc360.api.midmile.primary.repository.*;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.consignment.*;
import com.courier.overc360.api.midmile.replica.model.dto.*;
import com.courier.overc360.api.midmile.replica.model.imagereference.ReplicaImageReference;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaAddItemDetails;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaItemDetails;
import com.courier.overc360.api.midmile.replica.model.piecedetails.ReplicaPieceDetails;
import com.courier.overc360.api.midmile.replica.repository.*;
import com.courier.overc360.api.midmile.replica.repository.specification.*;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ConsignmentService {
    @Autowired
    private ReplicaDestinationDetailsRepository replicaDestinationDetailsRepository;
    @Autowired
    private ReplicaOriginDetailsRepository replicaOriginDetailsRepository;

    @Autowired
    ConsignmentInfoRepository consignmentInfoRepository;
    @Autowired
    ConsignmentEntityRepository consignmentEntityRepository;
    @Autowired
    ConsignmentRefRepository consignmentRefRepository;
    @Autowired
    OriginDetailsRepository originDetailsRepository;
    @Autowired
    ReturnDetailsRepository returnDetailsRepository;
    @Autowired
    DestinationDetailsRepository destinationDetailsRepository;

    @Autowired
    ReplicaConsignmentEntityRepository replicaConsignmentEntityRepository;

    @Autowired
    ReplicaPieceDetailsRepository replicaPieceDetailsRepository;

    @Autowired
    BondedManifestRepository bondedManifestRepository;

    @Autowired
    PieceDetailsService pieceDetailsService;

    @Autowired
    ReplicaItemDetailsRepository replicaItemDetailsRepository;

    @Autowired
    ItemDetailsService itemDetailsService;

    @Autowired
    NumberRangeService numberRangeService;

    @Autowired
    ImageReferenceService imageReferenceService;

    @Autowired
    ImageReferenceRepository imageReferenceRepository;

    @Autowired
    CommonService commonService;

    @Autowired
    AuthTokenService authTokenService;

    @Autowired
    ReplicaImageReferenceRepository replicaImageReferenceRepository;

    @Autowired
    ReplicaBondedManifestRepository replicaBondedManifestRepository;

    @Autowired
    PieceDetailsRepository pieceDetailsRepository;

    /*================================================PRIMARY====================================================================*/

    /**
     * Create ConsignmentEntity
     *
     * @param consignmentEntityList
     * @param loginUserId
     * @return
     */
    public List<AddConsignment> createConsignment(List<AddConsignment> consignmentEntityList, String loginUserId)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {

        List<AddConsignment> consignmentEntities = new ArrayList<>();
        String masterAirwayBill = numberRangeService.getNextNumberRange("MAWB");

        //Cassandra save
        commonService.createConsignment(consignmentEntityList, loginUserId, masterAirwayBill);

        for (AddConsignment consignmentEntity : consignmentEntityList) {

            //Null validation code
            consignmentEntity = createConsignmentNullValidation(consignmentEntity);

            // Fetching the description for a company
            IKeyValuePair iKeyValuePair = replicaConsignmentEntityRepository.getDescription(consignmentEntity.getCompanyId());

            // Fetching the product ID for the shipper
            IKeyValuePair shipperData = bondedManifestRepository.getProductId(
                    consignmentEntity.getPartnerId(),
                    iKeyValuePair.getLangId(),
                    consignmentEntity.getCompanyId()
            );

            IKeyValuePair getProductIdFromCustomer = bondedManifestRepository.getProductIdFromCustomer(
                    consignmentEntity.getPartnerId(),
                    iKeyValuePair.getLangId(),
                    consignmentEntity.getCompanyId());

            if (shipperData == null && getProductIdFromCustomer == null) {
                throw new BadRequestException("PartnerId doesn't match consignorTable and Customer Table");
            }

            ConsignmentEntity newConsignment = new ConsignmentEntity();
            String companyId = consignmentEntity.getCompanyId();
            String languageId = iKeyValuePair.getLangId();
            String partnerId = consignmentEntity.getPartnerId();
            String partnerName = consignmentEntity.getPartnerName();
            String partnerHawBill = consignmentEntity.getPartnerHouseAirwayBill();
            String partnerMawBill = consignmentEntity.getPartnerMasterAirwayBill();
            String productId = consignmentEntity.getProductId();
            String subProductId = consignmentEntity.getSubProductId();
            String length = consignmentEntity.getLength();
            String width = consignmentEntity.getWidth();
            String height = consignmentEntity.getHeight();
            String weightUnit = consignmentEntity.getWeightUnit();
            String volume = consignmentEntity.getVolume();
            String codAmount = consignmentEntity.getCodAmount();

            // Checking if the product ID and sub-product ID match
            if (productId != null && subProductId != null) {
                if (!productId.equalsIgnoreCase(shipperData.getProductId()) ||
                        !subProductId.equalsIgnoreCase(shipperData.getSubProductId())) {
                    if (getProductIdFromCustomer != null) {
                        if (!subProductId.equalsIgnoreCase(getProductIdFromCustomer.getSubProductId()) ||
                                !productId.equalsIgnoreCase(getProductIdFromCustomer.getProductId())) {
                            throw new BadRequestException("Product ID and Sub-product ID do not match.");
                        }
                    }
                }
            }

            String NUM_RAN_OBJ = null;

            if (shipperData != null && shipperData.getProductName() != null) {
                NUM_RAN_OBJ = shipperData.getProductName();
            } else if (getProductIdFromCustomer != null && getProductIdFromCustomer.getProductName() != null) {
                NUM_RAN_OBJ = getProductIdFromCustomer.getProductName();
            } else {
                throw new BadRequestException("HouseAirwayBill NumberRange is NULL Check PartnerId match in Consignor table And ProductName match in NumberRange Table");
            }

            // Generating house and master airway bills
            String houseAirwayBill = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
            if (houseAirwayBill == null) {
                throw new BadRequestException("Number Range Object " + NUM_RAN_OBJ + " Doesn't exits in NumberRangeTable");
            }

            // Duplicate Check Consignment
            Optional<ConsignmentEntity> duplicateConsignment =
                    consignmentEntityRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                            languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, 0L);

            if (duplicateConsignment.isPresent()) {
                throw new BadRequestException("Given value Getting Duplicate");
            }

            if (consignmentEntity.getLoadTypeId() != null) {
                String getLoadType = replicaBondedManifestRepository.getLoadTypeText(
                        languageId, companyId, consignmentEntity.getLoadTypeId());
                if (getLoadType != null) {
                    consignmentEntity.setLoadType(getLoadType);
                }
            }

            if (consignmentEntity.getServiceTypeId() != null) {
                String getServiceType = replicaBondedManifestRepository.getServiceTypeText(
                        languageId, companyId, consignmentEntity.getServiceTypeId());
                if (getServiceType != null) {
                    consignmentEntity.setServiceTypeText(getServiceType);
                }
            }

            //PieceDetails Count
            List<AddPieceDetails> pieceDetailsList = consignmentEntity.getPieceDetails();
            int pieceCount = pieceDetailsList != null ? pieceDetailsList.size() : 0;

            int totalItemCount = 0;
            String currency = null;
            for (AddPieceDetails pieceDetails : consignmentEntity.getPieceDetails()) {
                List<AddItemDetails> addItemDetails = pieceDetails.getItemDetails();

                int itemCount = addItemDetails != null ? addItemDetails.size() : 0;
                totalItemCount += itemCount;

                if (addItemDetails != null) {
                    for (AddItemDetails itemDetail : addItemDetails) {
                        currency = itemDetail.getCurrency();
                    }
                }

                // Set noOfPieceHawb based on the total item count
                if (totalItemCount == 0) {
                    consignmentEntity.setNoOfPieceHawb("1");
                } else {
                    consignmentEntity.setNoOfPieceHawb(String.valueOf(totalItemCount));
                }
            }

            //ServiceType Text and LoadTypeId Test
            BeanUtils.copyProperties(consignmentEntity, newConsignment, CommonUtils.getNullPropertyNames(consignmentEntity));

            if (iKeyValuePair != null) {
                newConsignment.setLanguageId(iKeyValuePair.getLangId());
                newConsignment.setLanguageDescription(iKeyValuePair.getLangDesc());
                newConsignment.setCompanyName(iKeyValuePair.getCompanyDesc());
            }
            if (shipperData != null) {
                newConsignment.setPartnerName(shipperData.getConsignorName());
                newConsignment.setProductId(shipperData.getProductId());
                newConsignment.setProductName(shipperData.getProductName());
                newConsignment.setSubProductId(shipperData.getSubProductId());
                newConsignment.setSubProductName(shipperData.getSubProductName());
            } else if (getProductIdFromCustomer != null) {
                newConsignment.setPartnerName(getProductIdFromCustomer.getConsignorName());
                newConsignment.setProductId(getProductIdFromCustomer.getProductId());
                newConsignment.setProductName(getProductIdFromCustomer.getProductName());
                newConsignment.setSubProductId(getProductIdFromCustomer.getSubProductId());
                newConsignment.setSubProductName(getProductIdFromCustomer.getSubProductName());
            }

            // Set Event Status
            Optional<IKeyValuePair> statusEventText = consignmentEntityRepository.getStatusEventText(languageId, companyId, "1", "1");
            if (statusEventText.isPresent()) {
                IKeyValuePair keyValuePair = statusEventText.get();
                newConsignment.setStatusId("1");
                newConsignment.setEventCode("1");
                newConsignment.setStatusDescription(keyValuePair.getStatusText());
                newConsignment.setEventText(keyValuePair.getEventText());
                newConsignment.setStatusTimestamp(new Date());
                newConsignment.setEventTimestamp(new Date());
            }

            if (pieceCount == 0) {
                newConsignment.setNoOfPackageHawb("1");
            } else {
                newConsignment.setNoOfPackageHawb(String.valueOf(pieceCount));
            }
            if (currency != null) {
                newConsignment.setConsignmentCurrency(currency);
            }
            newConsignment.setHouseAirwayBill(houseAirwayBill);
            newConsignment.setMasterAirwayBill(masterAirwayBill);
            newConsignment.setCreatedBy(loginUserId);
            newConsignment.setCreatedOn(new Date());
            newConsignment.setUpdatedBy(null);
            newConsignment.setUpdatedOn(null);
            newConsignment.setConsoleIndicator(0L);
            newConsignment.setManifestIndicator(0L);

            // ConsignmentInfo
            ConsignmentInfo consignmentInfo = new ConsignmentInfo();
            BeanUtils.copyProperties(consignmentEntity, consignmentInfo, CommonUtils.getNullPropertyNames(consignmentEntity));
            consignmentInfo.setCreatedOn(new Date());
            consignmentInfo.setCreatedBy(loginUserId);
            consignmentInfo.setUpdatedOn(null);
            consignmentInfo.setUpdatedBy(null);
            newConsignment.setConsignmentInfo(consignmentInfo);

            // ConsignmentRef
            ConsignmentRef consignmentRef = new ConsignmentRef();
            BeanUtils.copyProperties(consignmentEntity, consignmentRef, CommonUtils.getNullPropertyNames(consignmentEntity));
            consignmentRef.setCreatedBy(loginUserId);
            consignmentRef.setCreatedOn(new Date());
            consignmentRef.setUpdatedBy(null);
            consignmentRef.setUpdatedOn(null);
            newConsignment.setConsignmentRefs(consignmentRef);

            // Destination Details
            if (consignmentEntity.getDestinationDetails() != null) {
                DestinationDetails destinationDetails = new DestinationDetails();
                BeanUtils.copyProperties(consignmentEntity.getDestinationDetails(), destinationDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getDestinationDetails()));
                newConsignment.setDestinationDetails(destinationDetails);
                newConsignment.getDestinationDetails().setCreatedBy(loginUserId);
                newConsignment.getDestinationDetails().setCreatedOn(new Date());
                newConsignment.getDestinationDetails().setUpdatedBy(null);
                newConsignment.getDestinationDetails().setUpdatedOn(null);
            } else {
                DestinationDetails destinationDetails = new DestinationDetails();
                destinationDetails.setCreatedBy(loginUserId);
                destinationDetails.setCreatedOn(new Date());
                destinationDetails.setUpdatedBy(null);
                destinationDetails.setUpdatedOn(null);
                newConsignment.setDestinationDetails(destinationDetails);
            }

            // Origination Details
            if (consignmentEntity.getOriginDetails() != null) {
                OriginDetails originDetails = new OriginDetails();
                BeanUtils.copyProperties(consignmentEntity.getOriginDetails(), originDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getOriginDetails()));
                originDetails.setCreatedBy(loginUserId);
                originDetails.setCreatedOn(new Date());
                originDetails.setUpdatedBy(null);
                originDetails.setUpdatedOn(null);
                newConsignment.setOriginDetails(originDetails);
            } else {
                OriginDetails originDetails = new OriginDetails();
                originDetails.setCreatedBy(loginUserId);
                originDetails.setCreatedOn(new Date());
                originDetails.setUpdatedBy(null);
                originDetails.setUpdatedOn(null);
                newConsignment.setOriginDetails(originDetails);
            }

            // Return Details
            if (consignmentEntity.getReturnDetails() != null) {
                ReturnDetails newReturnDetails = new ReturnDetails();
                BeanUtils.copyProperties(consignmentEntity.getReturnDetails(), newReturnDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getReturnDetails()));
                newReturnDetails.setCreatedBy(loginUserId);
                newReturnDetails.setCreatedOn(new Date());
                newReturnDetails.setUpdatedBy(null);
                newReturnDetails.setUpdatedOn(null);
                newConsignment.setReturnDetails(newReturnDetails);
            } else {
                ReturnDetails newReturnDetails = new ReturnDetails();
                newReturnDetails.setCreatedBy(loginUserId);
                newReturnDetails.setCreatedOn(new Date());
                newReturnDetails.setUpdatedBy(null);
                newReturnDetails.setUpdatedOn(null);
                newConsignment.setReturnDetails(newReturnDetails);
            }

            ConsignmentEntity saveConsignment = consignmentEntityRepository.save(newConsignment);

            // ReferenceImageUrl Save
            List<ReferenceImageList> referenceImageList = new ArrayList<>();
            if (consignmentEntity.getReferenceImageList() != null && !consignmentEntity.getReferenceImageList().isEmpty()) {
                for (ReferenceImageList consignment : consignmentEntity.getReferenceImageList()) {
                    String downloadDocument = commonService.downLoadDocument(consignment.getReferenceImageUrl(), "document", "image");
                    if (downloadDocument != null) {
                        ImageReference imageReference = imageReferenceService.createImageReference(
                                languageId, companyId, partnerId, partnerName, houseAirwayBill, masterAirwayBill,
                                partnerHawBill, partnerMawBill, saveConsignment.getConsignmentId(), null, null, consignment.getReferenceImageUrl(), "CON_ID", downloadDocument, loginUserId);
                        //ReferenceImageList
                        ReferenceImageList refImage = new ReferenceImageList();
                        refImage.setImageRefId(imageReference.getImageRefId());
                        refImage.setReferenceImageUrl(imageReference.getReferenceImageUrl());
                        refImage.setPdfUrl(imageReference.getReferenceField2());

                        referenceImageList.add(refImage);
                    }
                }
            }


            String country = saveConsignment.getOriginDetails().getCountry();
            // PieceDetails Save
            List<AddPieceDetails> pieceDetails = pieceDetailsService.createPieceDetailsList(companyId, languageId, partnerId, masterAirwayBill, houseAirwayBill,
                    newConsignment.getCompanyName(), newConsignment.getLanguageDescription(), newConsignment.getPartnerName(), saveConsignment.getConsignmentId(),
                    partnerHawBill, partnerMawBill, consignmentEntity.getPieceDetails(), saveConsignment.getHsCode(), length, width, height, volume, weightUnit, codAmount,
                    saveConsignment.getStatusId(), saveConsignment.getEventCode(), saveConsignment.getStatusDescription(), saveConsignment.getEventText(), country, loginUserId);

            //Calculate Value
            Double consignmentValue = 0.0;
            Double consignmentLocalValue = 0.0;
            Double addIata = 0.0;
            Double addInsurance = 0.0;
            Double customsValue = 0.0;
            Double calculatedTotalDuty = 0.0;

            for (AddPieceDetails item : pieceDetails) {
                if (item.getPieceValue() != null && item.getConsignmentValueLocal() != null && item.getAddIata() != null &&
                        item.getAddInsurance() != null && item.getCustomsValue() != null && item.getCalculatedTotalDuty() != null) {

                    Double pieceValue = Double.valueOf(item.getPieceValue());
                    Double conLocalValue = Double.valueOf(item.getConsignmentValueLocal());
                    Double iataAdd = Double.valueOf(item.getAddIata());
                    Double insuranceAdd = Double.valueOf(item.getAddInsurance());
                    Double costomValue = Double.valueOf(item.getCustomsValue());
                    Double totalDuty = Double.valueOf(item.getCalculatedTotalDuty());

                    consignmentValue += pieceValue;
                    consignmentLocalValue += conLocalValue;
                    addIata += iataAdd;
                    addInsurance += insuranceAdd;
                    customsValue += costomValue;
                    calculatedTotalDuty += totalDuty;
                }
            }

            //Volume
            Double totalPieceVolume = pieceDetails.stream().map(AddPieceDetails::getVolume).filter(n -> n != null && !n.isBlank()).mapToDouble(a -> Double.valueOf(a)).sum();

            //Consignment_entity Set
            consignmentEntityRepository.updateConsignment(saveConsignment.getCompanyId(), saveConsignment.getLanguageId(),
                    saveConsignment.getPartnerId(), saveConsignment.getHouseAirwayBill(), saveConsignment.getMasterAirwayBill(),
                    String.valueOf(consignmentValue), String.valueOf(consignmentLocalValue), String.valueOf(addIata),
                    String.valueOf(addInsurance), String.valueOf(customsValue), String.valueOf(calculatedTotalDuty), String.valueOf(totalPieceVolume));


            AddConsignment newAddConsignment = new AddConsignment();
            newAddConsignment.setPieceDetails(pieceDetails);
            newAddConsignment.setReferenceImageList(referenceImageList);
            BeanUtils.copyProperties(saveConsignment, newAddConsignment);
            BeanUtils.copyProperties(saveConsignment.getConsignmentInfo() != null, newAddConsignment);
            BeanUtils.copyProperties(saveConsignment.getConsignmentRefs() != null, newAddConsignment);
            BeanUtils.copyProperties(saveConsignment.getDestinationDetails() != null, newAddConsignment.getDestinationDetails());
            BeanUtils.copyProperties(saveConsignment.getReturnDetails() != null, newAddConsignment.getReturnDetails());
            BeanUtils.copyProperties(saveConsignment.getOriginDetails() != null, newAddConsignment.getOriginDetails());

            consignmentEntities.add(newAddConsignment);
        }
        return consignmentEntities;
    }


    /**
     * UpdateConsignment
     *
     * @param consignment
     * @param loginUserID
     * @return
     */
    public List<UpdateConsignment> updateConsignmentEntity(List<UpdateConsignment> consignment, String
            loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {

        List<UpdateConsignment> addConsignmentList = new ArrayList<>();
        for (UpdateConsignment dbConsignment : consignment) {

            ConsignmentEntity dbConsignmentEntity =
                    consignmentEntityRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                            dbConsignment.getCompanyId(), dbConsignment.getLanguageId(), dbConsignment.getPartnerId(), dbConsignment.getMasterAirwayBill(), dbConsignment.getHouseAirwayBill(), 0L);

            if (dbConsignmentEntity == null) {
                throw new BadRequestException("Given Values Doesn't exist CompanyId " + dbConsignment.getCompanyId() + " LanguageId " + dbConsignment.getLanguageId() +
                        " PartnerId " + dbConsignment.getPartnerId() + " MasterAirwayBillNo " + dbConsignment.getMasterAirwayBill() + " HouseAirwayBillNo " + dbConsignment.getHouseAirwayBill());
            }

            //Null validation code
            dbConsignment = updateConsignmentNullValidation(dbConsignment);

            UpdateConsignment addConsignment = new UpdateConsignment();
            BeanUtils.copyProperties(dbConsignment, dbConsignmentEntity, CommonUtils.getNullPropertyNames(dbConsignment));
            //StatusText And EventText
            if (dbConsignment.getStatusId() != null && dbConsignment.getStatusId().equalsIgnoreCase("1")) {
                // Set Event Status
                Optional<IKeyValuePair> statusEventText = consignmentEntityRepository.getStatusEventText(dbConsignmentEntity.getLanguageId(), dbConsignmentEntity.getCompanyId(), "2", "2");
                if (statusEventText.isPresent()) {
                    IKeyValuePair keyValuePair = statusEventText.get();
                    dbConsignmentEntity.setStatusId("2");
                    dbConsignmentEntity.setEventCode("2");
                    dbConsignmentEntity.setStatusDescription(keyValuePair.getStatusText());
                    dbConsignmentEntity.setEventText(keyValuePair.getEventText());
                    dbConsignmentEntity.setStatusTimestamp(new Date());
                    dbConsignmentEntity.setEventTimestamp(new Date());
                }
            } else {
                // Set Event Status
                if (dbConsignment.getStatusId() != null) {
                    Optional<IKeyValuePair> getStatus = consignmentEntityRepository.getStatusText(dbConsignmentEntity.getLanguageId(), dbConsignmentEntity.getStatusId());

                    if (getStatus.isPresent()) {
                        IKeyValuePair ikey = getStatus.get();
                        dbConsignmentEntity.setStatusId(dbConsignmentEntity.getStatusId());
                        dbConsignmentEntity.setStatusDescription(ikey.getStatusText());
                        dbConsignmentEntity.setStatusTimestamp(new Date());
                    }
                }

                if (dbConsignment.getEventCode() != null) {
                    Optional<IKeyValuePair> getEvent = consignmentEntityRepository.getEventText(dbConsignmentEntity.getLanguageId(), dbConsignmentEntity.getCompanyId(), dbConsignmentEntity.getEventCode());

                    if (getEvent.isPresent()) {
                        IKeyValuePair ikey = getEvent.get();
                        dbConsignmentEntity.setEventCode(dbConsignmentEntity.getEventCode());
                        dbConsignmentEntity.setEventText(ikey.getEventText());
                        dbConsignmentEntity.setEventTimestamp(new Date());
                    }
                }
            }
            dbConsignmentEntity.setDeletionIndicator(0L);
            dbConsignmentEntity.setUpdatedBy(loginUserID);
            dbConsignmentEntity.setUpdatedOn(new Date());

            if (dbConsignmentEntity.getConsignmentInfo() != null) {
                BeanUtils.copyProperties(dbConsignment, dbConsignmentEntity.getConsignmentInfo(), CommonUtils.getNullPropertyNames(dbConsignment));
                dbConsignmentEntity.getConsignmentInfo().setUpdatedOn(new Date());
                dbConsignmentEntity.getConsignmentInfo().setUpdatedBy(loginUserID);
            }

            if (dbConsignmentEntity.getConsignmentRefs() != null) {
                BeanUtils.copyProperties(dbConsignment, dbConsignmentEntity.getConsignmentRefs(), CommonUtils.getNullPropertyNames(dbConsignment));
                dbConsignmentEntity.getConsignmentRefs().setUpdatedOn(new Date());
                dbConsignmentEntity.getConsignmentRefs().setUpdatedBy(loginUserID);
            }

            if (dbConsignment.getDestinationDetails() != null && dbConsignmentEntity.getDestinationDetails() != null) {
                BeanUtils.copyProperties(dbConsignment.getDestinationDetails(), dbConsignmentEntity.getDestinationDetails(),
                        CommonUtils.getNullPropertyNames(dbConsignment.getDestinationDetails()));
                dbConsignmentEntity.getDestinationDetails().setUpdatedOn(new Date());
                dbConsignmentEntity.getDestinationDetails().setUpdatedBy(loginUserID);
            }

            if (dbConsignment.getReturnDetails() != null && dbConsignmentEntity.getReturnDetails() != null) {
                BeanUtils.copyProperties(dbConsignment.getReturnDetails(), dbConsignmentEntity.getReturnDetails(),
                        CommonUtils.getNullPropertyNames(dbConsignment.getReturnDetails()));
                dbConsignmentEntity.getReturnDetails().setUpdatedOn(new Date());
                dbConsignmentEntity.getReturnDetails().setUpdatedBy(loginUserID);
            }

            if (dbConsignment.getOriginDetails() != null && dbConsignmentEntity.getOriginDetails() != null) {
                BeanUtils.copyProperties(dbConsignment.getOriginDetails(), dbConsignmentEntity.getOriginDetails(),
                        CommonUtils.getNullPropertyNames(dbConsignment.getOriginDetails()));
                dbConsignmentEntity.getOriginDetails().setUpdatedOn(new Date());
                dbConsignmentEntity.getOriginDetails().setUpdatedBy(loginUserID);
            }

            ConsignmentEntity savedConsignment = consignmentEntityRepository.save(dbConsignmentEntity);

            //Update ReferenceImage
            List<ReferenceImageList> referenceImageLists = new ArrayList<>();
            if (dbConsignment.getReferenceImageList() != null && !dbConsignment.getReferenceImageList().isEmpty()) {
                for (ReferenceImageList image : dbConsignment.getReferenceImageList()) {

                    ReferenceImageList newRefImageList = new ReferenceImageList();
                    String downloadDocument = commonService.downLoadDocument(image.getReferenceImageUrl(), "document", "image");
                    ImageReference imageReference = imageReferenceRepository.findByImageRefIdAndDeletionIndicator(image.getImageRefId(), 0L);
                    if (imageReference == null) {
                        throw new BadRequestException(" ImageReferenceId doesn't exist" + image.getImageRefId());
                    }
                    imageReference.setReferenceImageUrl(image.getReferenceImageUrl());
                    imageReference.setReferenceField2(downloadDocument);
                    imageReference.setUpdatedBy(loginUserID);
                    imageReference.setUpdatedOn(new Date());
                    ImageReference imageRef = imageReferenceRepository.save(imageReference);
                    BeanUtils.copyProperties(imageRef, newRefImageList);
                    referenceImageLists.add(newRefImageList);
                    addConsignment.setReferenceImageList(referenceImageLists);
                }
                addConsignment.setReferenceImageList(referenceImageLists);
            }

            //PieceDetails Update
            if (dbConsignment.getPieceDetails() != null && !dbConsignment.getPieceDetails().isEmpty()) {
                List<UpdatePieceDetails> savedPieceDetails = pieceDetailsService.updatePieceDetails(dbConsignment.getLanguageId(), dbConsignment.getCompanyId(), dbConsignment.getPartnerId(),
                        dbConsignment.getMasterAirwayBill(), dbConsignment.getHouseAirwayBill(), dbConsignment.getPieceDetails(), loginUserID);
                addConsignment.setPieceDetails(savedPieceDetails);
                BeanUtils.copyProperties(savedPieceDetails, addConsignment.getPieceDetails());
            }

            BeanUtils.copyProperties(savedConsignment, addConsignment);

            if (savedConsignment.getConsignmentInfo() != null) {
                BeanUtils.copyProperties(savedConsignment.getConsignmentInfo(), addConsignment);
            }
            if (savedConsignment.getConsignmentRefs() != null) {
                BeanUtils.copyProperties(savedConsignment.getConsignmentRefs(), addConsignment);
            }
            if (savedConsignment.getDestinationDetails() != null) {
                BeanUtils.copyProperties(savedConsignment.getDestinationDetails(), addConsignment.getDestinationDetails());
            }
            if (savedConsignment.getReturnDetails() != null) {
                BeanUtils.copyProperties(savedConsignment.getReturnDetails(), addConsignment.getReturnDetails());
            }
            if (savedConsignment.getOriginDetails() != null) {
                BeanUtils.copyProperties(savedConsignment.getOriginDetails(), addConsignment.getOriginDetails());
            }
            addConsignmentList.add(addConsignment);

        }
        return addConsignmentList;
    }

    /**
     * @param companyId
     * @param languageId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     */
    public void deleteConsignmentEntity(String companyId, String languageId, String partnerId, String
            masterAirwayBill,
                                        String houseAirwayBill, String pieceId, String pieceItemId, String imageRefId, String loginUserID) {

        if (pieceId.isEmpty() && pieceItemId.isEmpty() && imageRefId.isEmpty()) {
            ConsignmentEntity dbConsignmentEntity = consignmentEntityRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                    companyId, languageId, partnerId, masterAirwayBill, houseAirwayBill, 0L);

            if (dbConsignmentEntity == null) {
                throw new BadRequestException(" Given values doesn't exits CompanyId - " + companyId + " LanguageId " + languageId + " PartnerId " + partnerId +
                        " MasterAirwayBill " + masterAirwayBill + " HouseAirwayBill " + houseAirwayBill);
            } else {
                dbConsignmentEntity.setDeletionIndicator(1L);
                dbConsignmentEntity.setUpdatedBy(loginUserID);
                dbConsignmentEntity.setUpdatedOn(new Date());
                //MultipleImageDelete
                imageReferenceService.deleteImageReference(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, loginUserID);
                //MultiplePiece
                pieceDetailsService.deletePieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, loginUserID);
                consignmentEntityRepository.save(dbConsignmentEntity);
            }
        }
        if (pieceItemId.isEmpty() && !pieceId.isEmpty()) {
            pieceDetailsService.deletePieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, loginUserID);
        }
        if (!pieceItemId.isEmpty() && !pieceId.isEmpty()) {
            itemDetailsService.deleteItemDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId, loginUserID);
        }
        if (imageRefId != null && !imageRefId.isEmpty()) {
            imageReferenceService.deleteImageReference(imageRefId, loginUserID);
        }
    }


    //MultipleConsignment Delete

    /**
     * @param consignmentDeletes
     * @param loginUserID
     */
    public void deleteConsignmentEntity(List<ConsignmentDelete> consignmentDeletes, String loginUserID) {

        for (ConsignmentDelete con : consignmentDeletes) {
            String pieceId = con.getPieceId();
            String pieceItemId = con.getPieceItemId();
            String companyId = con.getCompanyId();
            String languageId = con.getLanguageId();
            String partnerId = con.getPartnerId();
            String imageRefId = con.getImageRefId();
            String houseAirwayBill = con.getHouseAirwayBill();
            String masterAirwayBill = con.getMasterAirwayBill();

            if (pieceId == null && pieceItemId == null && imageRefId == null) {
                ConsignmentEntity dbConsignmentEntity = consignmentEntityRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                        companyId, languageId, partnerId, masterAirwayBill, houseAirwayBill, 0L);

                if (dbConsignmentEntity == null) {
                    throw new BadRequestException(" Given values doesn't exits CompanyId - " + companyId + " LanguageId " + languageId + " PartnerId " + partnerId +
                            " MasterAirwayBill " + masterAirwayBill + " HouseAirwayBill " + houseAirwayBill);
                } else {
                    dbConsignmentEntity.setDeletionIndicator(1L);
                    dbConsignmentEntity.setUpdatedBy(loginUserID);
                    dbConsignmentEntity.setUpdatedOn(new Date());
                    //MultipleImageDelete
                    imageReferenceService.deleteImageReference(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, loginUserID);
                    //MultiplePiece
                    pieceDetailsService.deletePieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, loginUserID);
                    consignmentEntityRepository.save(dbConsignmentEntity);
                }
            }
            if (pieceId != null && pieceItemId == null) {
                pieceDetailsService.deletePieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, loginUserID);
            }
            if (pieceItemId != null && pieceId != null) {
                itemDetailsService.deleteItemDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId, loginUserID);
            }
            if (imageRefId != null) {
                imageReferenceService.deleteImageReference(imageRefId, loginUserID);
            }
        }
    }

    /*===============================================Replica===================================================================*/

    // GetAll
    public List<ReplicaConsignmentEntity> getAll() {
        List<ReplicaConsignmentEntity> consignmentEntityList = replicaConsignmentEntityRepository.findAll();
        consignmentEntityList = consignmentEntityList.stream().filter(n -> n.getDeletionIndicator() == 0).collect(Collectors.toList());
        return consignmentEntityList;
    }


    /**
     * FindConsignmentEntity
     *
     * @param findConsignment
     * @return
     */
    public List<ReplicaConsignmentEntity> findConsignmentEntity(FindConsignment findConsignment) {
        ReplicaConsignmentSpecification spec = new ReplicaConsignmentSpecification(findConsignment);
        List<ReplicaConsignmentEntity> results = replicaConsignmentEntityRepository.findAll(spec);
        log.info("found Cities -->" + results);
        return results;
    }


//    public List<ReplicaAddConsignment> findReplicaFindConsignmet(FindConsignment findConsignment) {
//
//        ReplicaConsignmentSpecification consignmentSpec = new ReplicaConsignmentSpecification(findConsignment);
//        ReplicaConsPieceDetailsSpecification pieceSpec = new ReplicaConsPieceDetailsSpecification(findConsignment);
//        ReplicaItemDetailsSpecification itemSpec = new ReplicaItemDetailsSpecification(findConsignment);
//        ReplicaImageReferenceSpecification imageSpec = new ReplicaImageReferenceSpecification(findConsignment);
//
//        // Fetch all results
//        List<ReplicaConsignmentEntity> consignmentResults = replicaConsignmentEntityRepository.findAll(consignmentSpec);
//        List<ReplicaPieceDetails> pieceResults = replicaPieceDetailsRepository.findAll(pieceSpec);
//        List<ReplicaItemDetails> itemDetailsResults = replicaItemDetailsRepository.findAll(itemSpec);
//        List<ReplicaImageReference> imageReferenceResults = replicaImageReferenceRepository.findAll(imageSpec);
//
//        // Use parallelStream for processing consignment results
//        List<ReplicaAddConsignment> consignmentList = consignmentResults.parallelStream().map(consignmentEntity -> {
//                    ReplicaAddConsignment newConsignmentEntity = new ReplicaAddConsignment();
//                    BeanUtils.copyProperties(consignmentEntity, newConsignmentEntity);
//                    BeanUtils.copyProperties(consignmentEntity.getConsignmentInfo() != null, newConsignmentEntity);
//                    BeanUtils.copyProperties(consignmentEntity.getConsignmentRefs() != null, newConsignmentEntity);
//                    BeanUtils.copyProperties(consignmentEntity.getOriginDetails() != null, newConsignmentEntity.getOriginDetails());
//                    BeanUtils.copyProperties(consignmentEntity.getDestinationDetails() != null, newConsignmentEntity.getDestinationDetails());
//                    BeanUtils.copyProperties(consignmentEntity.getReturnDetails() != null, newConsignmentEntity.getReturnDetails());
//
//                        List<ReplicaImageReference> referenceImageUl = imageReferenceResults.stream().filter(imageRef -> imageRef != null &&
//                                        imageRef.getConsignmentId() != null &&
//                                        imageRef.getConsignmentId().equals(consignmentEntity.getConsignmentId()) &&
//                                        imageRef.getReferenceField1().equalsIgnoreCase("CON_ID"))
//                                .collect(Collectors.toList());
//
//            List<ReferenceImageList> referenceImageLists = new ArrayList<>();
//            for (ReplicaImageReference imageReference : referenceImageUl) {
//                ReferenceImageList imageList = new ReferenceImageList();
//                imageList.setImageRefId(imageReference.getImageRefId());
//                imageList.setReferenceImageUrl(imageReference.getReferenceImageUrl());
//                imageList.setPdfUrl(imageReference.getReferenceField2());
//
//                referenceImageLists.add(imageList);
//
//            }
//            newConsignmentEntity.setReferenceImageList(referenceImageLists);
//            // Use parallelStream for processing piece details
//            List<ReplicaAddPieceDetails> filteredPieceDetails = pieceResults.parallelStream()
//                    .filter(piece -> piece.getConsignmentId().equals(consignmentEntity.getConsignmentId()))
//                    .map(piece -> {
//                        ReplicaAddPieceDetails pieceDetail = new ReplicaAddPieceDetails();
//                        BeanUtils.copyProperties(piece, pieceDetail);
//
//
//                        List<ReplicaImageReference> imageRef = imageReferenceResults.stream()
//                                .filter(image -> image != null && image.getPieceId() != null && image.getPieceId().equals(piece.getPieceId()) &&
//                                        image.getReferenceField1().equalsIgnoreCase("P_ID"))
////                                .map(ReplicaImageReference::getReferenceImageUrl)
//                                .collect(Collectors.toList());
//
//                        List<ReferenceImageList> imageLists = new ArrayList<>();
//                        if (imageRef != null) {
//                            for (ReplicaImageReference imageReference : imageRef) {
//                                ReferenceImageList imageList = new ReferenceImageList();
//                                imageList.setImageRefId(imageReference.getImageRefId());
//                                imageList.setReferenceImageUrl(imageReference.getReferenceImageUrl());
//                                imageList.setPdfUrl(imageReference.getReferenceField2());
//
//                                imageLists.add(imageList);
//                            }
//                        }
//
//                        // Use parallelStream for processing item details
//                        List<ReplicaAddItemDetails> filteredItemDetails = itemDetailsResults.parallelStream()
//                                .filter(item -> item.getPieceId().equals(piece.getPieceId()))
//                                .map(item -> {
//                                    ReplicaAddItemDetails itemDetails = new ReplicaAddItemDetails();
//                                    BeanUtils.copyProperties(item, itemDetails);
//
//                                    List<ReplicaImageReference> imageRefe = imageReferenceResults.stream()
//                                            .filter(image -> image != null && image.getPieceItemId() != null && image.getPieceItemId().equals(item.getPieceItemId()) &&
//                                                    image.getReferenceField1().equalsIgnoreCase("PI_ID"))
//                                            .collect(Collectors.toList());
//
//                                    List<ReferenceImageList> imageRe = new ArrayList<>();
//                                    if(imageRefe != null) {
//                                        for (ReplicaImageReference imageReference : imageRefe) {
//                                            ReferenceImageList imageList = new ReferenceImageList();
//                                            imageList.setImageRefId(imageReference.getImageRefId());
//                                            imageList.setReferenceImageUrl(imageReference.getReferenceImageUrl());
//                                            imageList.setPdfUrl(imageReference.getReferenceField2());
//                                            imageRe.add(imageList);
//                                        }
//                                    }
//                                    itemDetails.setReferenceImageList(imageRe);
//
//                                    return itemDetails;
//                                })
//                                .collect(Collectors.toList());
//
//                        pieceDetail.setReferenceImageList(imageLists);
//                        pieceDetail.setItemDetails(filteredItemDetails);
//                        return pieceDetail;
//                    })
//                    .collect(Collectors.toList());
//
//            newConsignmentEntity.setPieceDetails(filteredPieceDetails);
//            return newConsignmentEntity;
//        }).collect(Collectors.toList());
//
//        return consignmentList;
//    }

    /**
     * FindConsignment
     *
     * @param findConsignment
     * @return
     */
    public List<ReplicaAddConsignment> findReplicaFindConsignment(FindConsignment findConsignment) {
        ReplicaConsignmentSpecification consignmentSpec = new ReplicaConsignmentSpecification(findConsignment);
        ReplicaConsPieceDetailsSpecification pieceSpec = new ReplicaConsPieceDetailsSpecification(findConsignment);
        ReplicaItemDetailsSpecification itemSpec = new ReplicaItemDetailsSpecification(findConsignment);
        ReplicaImageReferenceSpecification imageSpec = new ReplicaImageReferenceSpecification(findConsignment);

        // Fetch all results
        List<ReplicaConsignmentEntity> consignmentResults = replicaConsignmentEntityRepository.findAll(consignmentSpec);
        List<ReplicaPieceDetails> pieceResults = replicaPieceDetailsRepository.findAll(pieceSpec);
        List<ReplicaItemDetails> itemDetailsResults = replicaItemDetailsRepository.findAll(itemSpec);
        List<ReplicaImageReference> imageReferenceResults = replicaImageReferenceRepository.findAll(imageSpec);

        // Use parallelStream for processing consignment results
        List<ReplicaAddConsignment> consignmentList = consignmentResults.parallelStream().map(consignmentEntity -> {
            ReplicaAddConsignment newConsignmentEntity = new ReplicaAddConsignment();

            if (consignmentEntity != null) {
                BeanUtils.copyProperties(consignmentEntity, newConsignmentEntity);

                if (consignmentEntity.getConsignmentInfo() != null) {
                    BeanUtils.copyProperties(consignmentEntity.getConsignmentInfo(), newConsignmentEntity);
                }
                if (consignmentEntity.getConsignmentRefs() != null) {
                    BeanUtils.copyProperties(consignmentEntity.getConsignmentRefs(), newConsignmentEntity);
                }
                if (consignmentEntity.getOriginDetails() != null) {
                    BeanUtils.copyProperties(consignmentEntity.getOriginDetails(), newConsignmentEntity.getOriginDetails());
                }
                if (consignmentEntity.getDestinationDetails() != null) {
                    BeanUtils.copyProperties(consignmentEntity.getDestinationDetails(), newConsignmentEntity.getDestinationDetails());
                }
                if (consignmentEntity.getReturnDetails() != null) {
                    BeanUtils.copyProperties(consignmentEntity.getReturnDetails(), newConsignmentEntity.getReturnDetails());
                }
            }

            List<ReplicaImageReference> referenceImageUl = imageReferenceResults.stream()
                    .filter(imageRef -> imageRef != null && imageRef.getConsignmentId() != null &&
                            imageRef.getConsignmentId().equals(consignmentEntity.getConsignmentId()) &&
                            imageRef.getReferenceField1().equalsIgnoreCase("CON_ID"))
                    .collect(Collectors.toList());

            List<ReferenceImageList> referenceImageLists = new ArrayList<>();
            for (ReplicaImageReference imageReference : referenceImageUl) {
                ReferenceImageList imageList = new ReferenceImageList();
                imageList.setImageRefId(imageReference.getImageRefId());
                imageList.setReferenceImageUrl(imageReference.getReferenceImageUrl());
                imageList.setPdfUrl(imageReference.getReferenceField2());

                referenceImageLists.add(imageList);
            }
            newConsignmentEntity.setReferenceImageList(referenceImageLists);

            // Use parallelStream for processing piece details
            List<ReplicaAddPieceDetails> filteredPieceDetails = pieceResults.parallelStream()
                    .filter(piece -> piece.getConsignmentId().equals(consignmentEntity.getConsignmentId()))
                    .map(piece -> {
                        ReplicaAddPieceDetails pieceDetail = new ReplicaAddPieceDetails();
                        BeanUtils.copyProperties(piece, pieceDetail);

                        List<ReplicaImageReference> imageRef = imageReferenceResults.stream()
                                .filter(image -> image != null && image.getPieceId() != null && image.getPieceId().equals(piece.getPieceId()) &&
                                        image.getReferenceField1().equalsIgnoreCase("P_ID"))
                                .collect(Collectors.toList());

                        List<ReferenceImageList> imageLists = new ArrayList<>();
                        if (imageRef != null) {
                            for (ReplicaImageReference imageReference : imageRef) {
                                ReferenceImageList imageList = new ReferenceImageList();
                                imageList.setImageRefId(imageReference.getImageRefId());
                                imageList.setReferenceImageUrl(imageReference.getReferenceImageUrl());
                                imageList.setPdfUrl(imageReference.getReferenceField2());

                                imageLists.add(imageList);
                            }
                        }
                        pieceDetail.setReferenceImageList(imageLists);

                        // Use parallelStream for processing item details
                        List<ReplicaAddItemDetails> filteredItemDetails = itemDetailsResults.parallelStream()
                                .filter(item -> item.getPieceId().equals(piece.getPieceId()))
                                .map(item -> {
                                    ReplicaAddItemDetails itemDetails = new ReplicaAddItemDetails();
                                    BeanUtils.copyProperties(item, itemDetails);

                                    List<ReplicaImageReference> imageRefe = imageReferenceResults.stream()
                                            .filter(image -> image != null && image.getPieceItemId() != null &&
                                                    image.getPieceItemId().equals(item.getPieceItemId()) &&
                                                    image.getReferenceField1().equalsIgnoreCase("PI_ID"))
                                            .collect(Collectors.toList());

                                    List<ReferenceImageList> imageRe = new ArrayList<>();
                                    if (imageRefe != null) {
                                        for (ReplicaImageReference imageReference : imageRefe) {
                                            ReferenceImageList imageList = new ReferenceImageList();
                                            imageList.setImageRefId(imageReference.getImageRefId());
                                            imageList.setReferenceImageUrl(imageReference.getReferenceImageUrl());
                                            imageList.setPdfUrl(imageReference.getReferenceField2());
                                            imageRe.add(imageList);
                                        }
                                    }
                                    itemDetails.setReferenceImageList(imageRe);

                                    return itemDetails;
                                })
                                .collect(Collectors.toList());

                        pieceDetail.setItemDetails(filteredItemDetails);
                        return pieceDetail;
                    })
                    .collect(Collectors.toList());

            newConsignmentEntity.setPieceDetails(filteredPieceDetails);
            return newConsignmentEntity;
        }).collect(Collectors.toList());

        return consignmentList;
    }

    //===================================================================Null validation columns=================================================================================//

    /**
     * null validation colum find
     *
     * @param findConsignment
     * @return
     */
    public List<IConsignment> findIConsignment(FindIConsignment findConsignment) {

        if (findConsignment.getConsignmentId() != null && findConsignment.getConsignmentId().isEmpty()) {
            findConsignment.setConsignmentId(null);
        }
        if (findConsignment.getLanguageId() != null && findConsignment.getLanguageId().isEmpty()) {
            findConsignment.setLanguageId(null);
        }
        if (findConsignment.getCompanyId() != null && findConsignment.getCompanyId().isEmpty()) {
            findConsignment.setCompanyId(null);
        }
        if (findConsignment.getPartnerId() != null && findConsignment.getPartnerId().isEmpty()) {
            findConsignment.setPartnerId(null);
        }
        if (findConsignment.getMasterAirwayBill() != null && findConsignment.getMasterAirwayBill().isEmpty()) {
            findConsignment.setMasterAirwayBill(null);
        }
        if (findConsignment.getHouseAirwayBill() != null && findConsignment.getHouseAirwayBill().isEmpty()) {
            findConsignment.setHouseAirwayBill(null);
        }
        if (findConsignment.getStatusId() != null && findConsignment.getStatusId().isEmpty()) {
            findConsignment.setStatusId(null);
        }
        if (findConsignment.getShipperId() != null && findConsignment.getShipperId().isEmpty()) {
            findConsignment.setShipperId(null);
        }
        if (findConsignment.getPartnerHouseAirwayBill() != null && findConsignment.getPartnerHouseAirwayBill().isEmpty()) {
            findConsignment.setPartnerHouseAirwayBill(null);
        }
        if (findConsignment.getPartnerMasterAirwayBill() != null && findConsignment.getPartnerMasterAirwayBill().isEmpty()) {
            findConsignment.setPartnerMasterAirwayBill(null);
        }
        log.info("Search Input - consignment(Null validation): " + findConsignment);
        List<IConsignment> consignmentList = new ArrayList<>();
        List<ConsignmentImpl> iconsignmentList = replicaConsignmentEntityRepository.getConsignmentImpl(
                findConsignment.getConsignmentId(),
                findConsignment.getLanguageId(),
                findConsignment.getCompanyId(),
                findConsignment.getPartnerId(),
                findConsignment.getMasterAirwayBill(),
                findConsignment.getHouseAirwayBill(),
                findConsignment.getStatusId(),
                findConsignment.getShipperId(),
                findConsignment.getPartnerHouseAirwayBill(),
                findConsignment.getPartnerMasterAirwayBill());
        log.info("Consignment List: " + iconsignmentList.size());
        if (iconsignmentList != null && !iconsignmentList.isEmpty()) {
            iconsignmentList.forEach(n -> {
                IConsignment dbConsignment = new IConsignment();
                BeanUtils.copyProperties(n, dbConsignment, CommonUtils.getNullPropertyNames(n));
                OriginDetailsImpl originDetails = replicaOriginDetailsRepository.getOriginDetailsImpl(n.getConsignmentId());
                DestinationDetailsImpl destinationDetails = replicaDestinationDetailsRepository.getDestinationDetailsImpl(n.getConsignmentId());
                List<PieceDetailsImpl> pieceDetails = replicaPieceDetailsRepository.getPieceDetailsImpl(n.getConsignmentId());
                List<ReplicaPieceDetails> replicaPieceDetailsList = new ArrayList<>();
                if (originDetails != null) {
                    dbConsignment.setOriginDetails(originDetails);
                }
                if (destinationDetails != null) {
                    dbConsignment.setDestinationDetails(destinationDetails);
                }
                if (pieceDetails != null && !pieceDetails.isEmpty()) {
                    pieceDetails.stream().forEach(a -> {
                        ReplicaPieceDetails replicaPieceDetails = new ReplicaPieceDetails();
                        BeanUtils.copyProperties(a, replicaPieceDetails, CommonUtils.getNullPropertyNames(a));
                        replicaPieceDetailsList.add(replicaPieceDetails);
                    });
                    dbConsignment.setPieceDetails(replicaPieceDetailsList);
                }
                consignmentList.add(dbConsignment);
            });
        }
        return consignmentList;
    }

    /**
     * @param addConsignment
     * @return
     */
    public AddConsignment createConsignmentNullValidation(AddConsignment addConsignment) {
        log.info("Consignment null validaiton input: " + addConsignment);
        List<String> nullValidationCheck = new ArrayList<>();
        if (addConsignment != null) {
            if (addConsignment.getOriginDetails() != null) {
                if (addConsignment.getOriginDetails().getName() != null && addConsignment.getOriginDetails().getPhone() != null &&
                        addConsignment.getOriginDetails().getAddressLine1() != null && addConsignment.getOriginDetails().getAddressLine2() != null &&
                        addConsignment.getOriginDetails().getCity() != null && addConsignment.getOriginDetails().getCountry() != null) {
                    nullValidationCheck.add("true");
                } else {
                    nullValidationCheck.add("false");
                }
            }
            if (addConsignment.getDestinationDetails() != null) {
                if (addConsignment.getDestinationDetails().getName() != null && addConsignment.getDestinationDetails().getPhone() != null &&
                        addConsignment.getDestinationDetails().getAddressLine1() != null && addConsignment.getDestinationDetails().getAddressLine2() != null &&
                        addConsignment.getDestinationDetails().getCity() != null && addConsignment.getDestinationDetails().getCountry() != null) {
                    nullValidationCheck.add("true");
                } else {
                    nullValidationCheck.add("false");
                }
            }
            if (addConsignment.getPieceDetails() != null && !addConsignment.getPieceDetails().isEmpty()) {
                for (AddPieceDetails pieceDetails : addConsignment.getPieceDetails()) {
                    if (pieceDetails.getPartnerHouseAirwayBill() != null && pieceDetails.getDescription() != null &&
                            pieceDetails.getDeclaredValue() != null && pieceDetails.getWeight() != null && pieceDetails.getHsCode() != null) {
                        nullValidationCheck.add("true");
                    } else {
                        nullValidationCheck.add("false");
                    }
                }
            }
            int nullValidationCheckSize = nullValidationCheck.size();
            long nullValidation = nullValidationCheck.stream().filter(n -> n.equalsIgnoreCase("true")).count();
            boolean pass = nullValidationCheckSize == nullValidation;
            if (pass) {
                addConsignment.setPreAlertValidationIndicator(0L);
            }
            if (!pass) {
                addConsignment.setPreAlertValidationIndicator(1L);
            }
        }
        log.info("Consignment null validaiton output: " + addConsignment);
        return addConsignment;
    }

    /**
     * @param updateConsignment
     * @return
     */
    public UpdateConsignment updateConsignmentNullValidation(UpdateConsignment updateConsignment) {
        log.info("Consignment null validaiton input: " + updateConsignment);
        List<String> nullValidationCheck = new ArrayList<>();
        if (updateConsignment != null) {
            if (updateConsignment.getOriginDetails() != null) {
                if (updateConsignment.getOriginDetails().getName() != null && updateConsignment.getOriginDetails().getPhone() != null &&
                        updateConsignment.getOriginDetails().getAddressLine1() != null && updateConsignment.getOriginDetails().getAddressLine2() != null &&
                        updateConsignment.getOriginDetails().getCity() != null && updateConsignment.getOriginDetails().getCountry() != null) {
                    nullValidationCheck.add("true");
                } else {
                    nullValidationCheck.add("false");
                }
            }
            if (updateConsignment.getDestinationDetails() != null) {
                if (updateConsignment.getDestinationDetails().getName() != null && updateConsignment.getDestinationDetails().getPhone() != null &&
                        updateConsignment.getDestinationDetails().getAddressLine1() != null && updateConsignment.getDestinationDetails().getAddressLine2() != null &&
                        updateConsignment.getDestinationDetails().getCity() != null && updateConsignment.getDestinationDetails().getCountry() != null) {
                    nullValidationCheck.add("true");
                } else {
                    nullValidationCheck.add("false");
                }
            }
            if (updateConsignment.getPieceDetails() != null && !updateConsignment.getPieceDetails().isEmpty()) {
                for (UpdatePieceDetails pieceDetails : updateConsignment.getPieceDetails()) {
                    if (pieceDetails.getPartnerHouseAirwayBill() != null && pieceDetails.getDescription() != null &&
                            pieceDetails.getDeclaredValue() != null && pieceDetails.getWeight() != null && pieceDetails.getHsCode() != null) {
                        nullValidationCheck.add("true");
                    } else {
                        nullValidationCheck.add("false");
                    }
                }
            }
            int nullValidationCheckSize = nullValidationCheck.size();
            long nullValidation = nullValidationCheck.stream().filter(n -> n.equalsIgnoreCase("true")).count();
            boolean pass = nullValidationCheckSize == nullValidation;
            if (pass) {
                updateConsignment.setPreAlertValidationIndicator(0L);
            }
            if (!pass) {
                updateConsignment.setPreAlertValidationIndicator(1L);
            }
        }
        log.info("Consignment null validaiton output: " + updateConsignment);
        return updateConsignment;
    }

    /**
     * @param findPreAlertManifest
     * @return
     */
    public List<PreAlertManifestConsignment> findPreAlertManifest(FindPreAlertManifest findPreAlertManifest) {
        if (findPreAlertManifest.getManifestIndicator() == null) {
            findPreAlertManifest.setManifestIndicator(Collections.singletonList(0L));
        }
        if (findPreAlertManifest.getConsoleIndicator() == null) {
            findPreAlertManifest.setConsoleIndicator(Collections.singletonList(0L));
        }
        log.info("findPreAlertManifest: " + findPreAlertManifest);
        PreAlertManifestConsignmentSpecification specification = new PreAlertManifestConsignmentSpecification(findPreAlertManifest);
        List<ReplicaConsignmentEntity> results = replicaConsignmentEntityRepository.findAll(specification);
        List<PreAlertManifestConsignment> consignmentList = new ArrayList<>();
        if (results != null && !results.isEmpty()) {
            results.forEach(n -> {
                PreAlertManifestConsignment dbReplicaAddConsignment = new PreAlertManifestConsignment();
                BeanUtils.copyProperties(n, dbReplicaAddConsignment, CommonUtils.getNullPropertyNames(n));
                if (n.getConsignmentInfo() != null) {
                    BeanUtils.copyProperties(n.getConsignmentInfo(), dbReplicaAddConsignment);
                }
                if (n.getConsignmentRefs() != null) {
                    BeanUtils.copyProperties(n.getConsignmentRefs(), dbReplicaAddConsignment);
                }
                if (n.getOriginDetails() != null) {
                    BeanUtils.copyProperties(n.getOriginDetails(), dbReplicaAddConsignment.getOriginDetails());
                }
                if (n.getDestinationDetails() != null) {
                    BeanUtils.copyProperties(n.getDestinationDetails(), dbReplicaAddConsignment.getDestinationDetails());
                }
                if (n.getReturnDetails() != null) {
                    BeanUtils.copyProperties(n.getReturnDetails(), dbReplicaAddConsignment.getReturnDetails());
                }
                List<ReplicaPieceDetails> replicaAddPieceDetailsList = pieceDetailsService.getReplicaPieceDetailsForPreAlertManifest(n.getLanguageId(), n.getCompanyId(), n.getConsignmentId());
                List<PreAlertManifestPieceDetails> pieceDetailsList = new ArrayList<>();
                if (replicaAddPieceDetailsList != null && !replicaAddPieceDetailsList.isEmpty()) {
                    replicaAddPieceDetailsList.forEach(a -> {
                        PreAlertManifestPieceDetails replicaAddPieceDetails = new PreAlertManifestPieceDetails();
                        BeanUtils.copyProperties(a, replicaAddPieceDetails, CommonUtils.getNullPropertyNames(a));
                        List<ReplicaItemDetails> replicaItemDetailsList = itemDetailsService.replicaGetItemDetails(a.getLanguageId(), a.getCompanyId(), a.getPieceId());
                        if (replicaItemDetailsList != null && !replicaItemDetailsList.isEmpty()) {
                            replicaAddPieceDetails.setItemDetails(replicaItemDetailsList);
                        }
                        pieceDetailsList.add(replicaAddPieceDetails);
                    });
                    dbReplicaAddConsignment.setPieceDetails(pieceDetailsList);
                }
                consignmentList.add(dbReplicaAddConsignment);
            });
        }
        return consignmentList;
    }

    /**
     * FindConsignmentInvoice
     *
     * @param findConsignmentInvoice
     * @return
     */
    public List<ConsignmentInvoice> findConsignmentInvoice(FindConsignmentInvoice findConsignmentInvoice) {
        List<ConsignmentInvoice> results = replicaConsignmentEntityRepository.getConsignmentInvoice(findConsignmentInvoice.getHouseAirwayBill(), findConsignmentInvoice.getPartnerHouseAirwayBill(), findConsignmentInvoice.getPartnerMasterAirwayBill(), findConsignmentInvoice.getCompanyId());
        log.info("found Consignments -->" + results);
        return results;
    }

    public List<InvoiceForm> ConsignmentInvoicePdfGenerate(FindConsignmentInvoice findConsignmentInvoice) {
        List<ConsignmentInvoice> results = replicaConsignmentEntityRepository.getConsignmentInvoiceHeader(findConsignmentInvoice.getHouseAirwayBill(),
                findConsignmentInvoice.getPartnerHouseAirwayBill(), findConsignmentInvoice.getPartnerMasterAirwayBill(), findConsignmentInvoice.getCompanyId());
        List<InvoiceForm> invoiceFormList = new ArrayList<>();
        if (results != null && !results.isEmpty()) {
            results.forEach(n -> {
                InvoiceForm dbInvoiceHeader = new InvoiceForm();
                BeanUtils.copyProperties(n, dbInvoiceHeader, CommonUtils.getNullPropertyNames(n));
                List<ConsignmentInvoice> lineResults = replicaConsignmentEntityRepository.getConsignmentInvoiceLine(n.getConsignmentId());
                if (lineResults != null && !lineResults.isEmpty()) {
                    dbInvoiceHeader.setInvoiceFormLines(lineResults);
                }
                invoiceFormList.add(dbInvoiceHeader);
            });
        }
        log.info("found Consignments -->" + results.size());
        return invoiceFormList;
    }
}
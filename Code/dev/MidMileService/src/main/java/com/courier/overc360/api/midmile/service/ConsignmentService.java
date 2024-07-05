package com.courier.overc360.api.midmile.service;


import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.*;
import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
import com.courier.overc360.api.midmile.primary.model.piecedetails.AddPieceDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.UpdatePieceDetails;
import com.courier.overc360.api.midmile.primary.repository.*;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.consignment.FindConsignment;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaAddConsignment;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaAddPieceDetails;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.imagereference.ReplicaImageReference;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaAddItemDetails;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaItemDetails;
import com.courier.overc360.api.midmile.replica.model.piecedetails.ReplicaPieceDetails;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsignmentEntityRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaImageReferenceRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaItemDetailsRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaPieceDetailsRepository;
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
        for (AddConsignment consignmentEntity : consignmentEntityList) {

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
            } else if(getProductIdFromCustomer != null && getProductIdFromCustomer.getProductName() != null) {
                NUM_RAN_OBJ = getProductIdFromCustomer.getProductName();
            } else {
                throw new BadRequestException("HouseAirwayBill NumberRange is NULL Check PartnerId match in Consignor table And ProductName match in NumberRange Table");
            }

            // Generating house and master airway bills
            String houseAirwayBill = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
            if(houseAirwayBill == null) {
                throw new BadRequestException("Number Range Object " + NUM_RAN_OBJ + " Doesn't exits in NumberRangeTable");
            }

            // Duplicate Check Consignment
            Optional<ConsignmentEntity> duplicateConsignment =
                    consignmentEntityRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                            languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, 0L);

            if (duplicateConsignment.isPresent()) {
                throw new BadRequestException("Given value Getting Duplicate");
            }

            BeanUtils.copyProperties(consignmentEntity, newConsignment, CommonUtils.getNullPropertyNames(consignmentEntity));

            if (iKeyValuePair != null) {
                newConsignment.setLanguageId(iKeyValuePair.getLangId());
                newConsignment.setLanguageDescription(iKeyValuePair.getLangId() + " - " + iKeyValuePair.getLangDesc());
                newConsignment.setCompanyName(companyId + " - " + iKeyValuePair.getCompanyDesc());
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

            newConsignment.setHouseAirwayBill(houseAirwayBill);
            newConsignment.setMasterAirwayBill(masterAirwayBill);
            newConsignment.setStatusId("1");
            newConsignment.setEventCode("1");
            newConsignment.setStatusDescription("Consignment Created");
            newConsignment.setEventText("Prealert Received");
            newConsignment.setCreatedBy(loginUserId);
            newConsignment.setEventTimestamp(new Date());
            newConsignment.setCreatedOn(new Date());
            newConsignment.setUpdatedBy(null);
            newConsignment.setUpdatedOn(null);
            newConsignment.setConsoleIndicator(0L);
            newConsignment.setManifestIndicator(0L);

            // ConsignmentInfo
            ConsignmentInfo consignmentInfo = new ConsignmentInfo();
            BeanUtils.copyProperties(consignmentEntity, consignmentInfo, CommonUtils.getNullPropertyNames(consignmentEntity));
            newConsignment.setConsignmentInfo(consignmentInfo);
            newConsignment.getConsignmentInfo().setCreatedOn(new Date());
            newConsignment.getConsignmentInfo().setCreatedBy(loginUserId);
            newConsignment.getConsignmentInfo().setUpdatedOn(null);
            newConsignment.getConsignmentInfo().setUpdatedBy(null);

            // ConsignmentRef
            ConsignmentRef consignmentRef = new ConsignmentRef();
            BeanUtils.copyProperties(consignmentEntity, consignmentRef, CommonUtils.getNullPropertyNames(consignmentEntity));
            newConsignment.setConsignmentRefs(consignmentRef);
            newConsignment.getConsignmentRefs().setCreatedBy(loginUserId);
            newConsignment.getConsignmentRefs().setCreatedOn(new Date());
            newConsignment.getConsignmentRefs().setUpdatedBy(null);
            newConsignment.getConsignmentRefs().setUpdatedOn(null);

            // Destination Details
            if (consignmentEntity.getDestinationDetails() != null) {
                DestinationDetails destinationDetails = new DestinationDetails();
                BeanUtils.copyProperties(consignmentEntity.getDestinationDetails(), destinationDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getDestinationDetails()));
                newConsignment.setDestinationDetails(destinationDetails);
                newConsignment.getDestinationDetails().setCreatedBy(loginUserId);
                newConsignment.getDestinationDetails().setCreatedOn(new Date());
                newConsignment.getDestinationDetails().setUpdatedBy(null);
                newConsignment.getDestinationDetails().setUpdatedOn(null);
            }

            // Origination Details
            if (consignmentEntity.getOriginDetails() != null) {
                OriginDetails originDetails = new OriginDetails();
                BeanUtils.copyProperties(consignmentEntity.getOriginDetails(), originDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getOriginDetails()));
                newConsignment.setOriginDetails(originDetails);
                newConsignment.getOriginDetails().setCreatedBy(loginUserId);
                newConsignment.getOriginDetails().setCreatedOn(new Date());
                newConsignment.getOriginDetails().setUpdatedBy(null);
                newConsignment.getOriginDetails().setUpdatedOn(null);
            }

            // Return Details
            if (consignmentEntity.getReturnDetails() != null) {
                ReturnDetails newReturnDetails = new ReturnDetails();
                BeanUtils.copyProperties(consignmentEntity.getReturnDetails(), newReturnDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getReturnDetails()));
                newConsignment.setReturnDetails(newReturnDetails);
                newConsignment.getReturnDetails().setCreatedBy(loginUserId);
                newConsignment.getReturnDetails().setCreatedOn(new Date());
                newConsignment.getReturnDetails().setUpdatedBy(null);
                newConsignment.getReturnDetails().setUpdatedOn(null);
            }

            ConsignmentEntity saveConsignment = consignmentEntityRepository.save(newConsignment);

            // ReferenceImageUrl Save
            List<ReferenceImageList> referenceImageList = new ArrayList<>();
            if (consignmentEntity.getReferenceImageList() != null && !consignmentEntity.getReferenceImageList().isEmpty()) {
                for (ReferenceImageList consignment : consignmentEntity.getReferenceImageList()) {
                    String downloadDocument = commonService.downLoadDocument(consignment.getReferenceImageUrl(), "document", "image");
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

            // PieceDetails Save
            List<AddPieceDetails> pieceDetails = pieceDetailsService.createPieceDetailsList(companyId, languageId, partnerId, masterAirwayBill, houseAirwayBill,
                    newConsignment.getCompanyName(), newConsignment.getLanguageDescription(), newConsignment.getPartnerName(), saveConsignment.getConsignmentId(),
                    partnerHawBill, partnerMawBill, consignmentEntity.getPieceDetails(), saveConsignment.getHsCode(), width, height, volume, weightUnit, codAmount, loginUserId);

            List<AddPieceDetails> addPieceDetailsList = new ArrayList<>();
            for (AddPieceDetails pd : pieceDetails) {
                AddPieceDetails addPieceDetails = new AddPieceDetails();
                BeanUtils.copyProperties(pd, addPieceDetails);
                addPieceDetailsList.add(addPieceDetails);
            }

            AddConsignment newAddConsignment = new AddConsignment();
            newAddConsignment.setPieceDetails(addPieceDetailsList);
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
    public List<UpdateConsignment> updateConsignmentEntity(List<UpdateConsignment> consignment, String loginUserID)
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

            UpdateConsignment addConsignment = new UpdateConsignment();
            BeanUtils.copyProperties(dbConsignment, dbConsignmentEntity, CommonUtils.getNullPropertyNames(dbConsignment));
            dbConsignmentEntity.setStatusId("2");
            dbConsignmentEntity.setDeletionIndicator(0L);
            dbConsignmentEntity.setStatusDescription("Consignment Updated");
            dbConsignmentEntity.setUpdatedBy(loginUserID);
            dbConsignmentEntity.setUpdatedOn(new Date());

            if(dbConsignmentEntity.getConsignmentInfo() != null) {
                BeanUtils.copyProperties(dbConsignment, dbConsignmentEntity.getConsignmentInfo() , CommonUtils.getNullPropertyNames(dbConsignment));
                dbConsignmentEntity.getConsignmentInfo().setUpdatedOn(new Date());
                dbConsignmentEntity.getConsignmentInfo().setUpdatedBy(loginUserID);
            }

            if(dbConsignmentEntity.getConsignmentRefs() != null) {
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
                        dbConsignment.getMasterAirwayBill(), dbConsignment.getHouseAirwayBill(), dbConsignment.getPieceDetails(), loginUserID );
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


    public void deleteConsignmentEntity(String companyId, String languageId, String partnerId, String masterAirwayBill,
                                        String houseAirwayBill, String pieceId, String pieceItemId, String imageRefId, String loginUserID) {

        if (pieceId.isEmpty() && pieceItemId.isEmpty()) {
            ConsignmentEntity dbConsignmentEntity = consignmentEntityRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                    companyId, languageId, partnerId, masterAirwayBill, houseAirwayBill, 0L);

            if (dbConsignmentEntity == null) {
                throw new BadRequestException(" Given values doesn't exits CompanyId - " + companyId + " LanguageId " + languageId + " PartnerId " + partnerId +
                        " MasterAirwayBill " + masterAirwayBill + " HouseAirwayBill " + houseAirwayBill);
            } else {
                dbConsignmentEntity.setDeletionIndicator(1L);
                dbConsignmentEntity.setUpdatedBy(loginUserID);
                dbConsignmentEntity.setUpdatedOn(new Date());
                imageReferenceService.deleteImageReference(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, loginUserID);
                pieceDetailsService.deletePieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, loginUserID);
                consignmentEntityRepository.save(dbConsignmentEntity);
            }
        }
        if (!pieceId.isEmpty() && pieceItemId == null) {
            pieceDetailsService.deletePieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, loginUserID);
        }
        if (!pieceItemId.isEmpty() && pieceItemId != null) {
            itemDetailsService.deleteItemDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId, loginUserID);
        }
        if (imageRefId != null) {
            imageReferenceService.deleteImageReference(imageRefId, loginUserID);
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

}
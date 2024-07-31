package com.courier.overc360.api.midmile.service;


import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.*;
import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
import com.courier.overc360.api.midmile.primary.model.itemdetails.ItemDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.PieceDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.UpdatePieceDetails;
import com.courier.overc360.api.midmile.primary.repository.*;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.console.FindConsole;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import com.courier.overc360.api.midmile.replica.repository.ReplicaBondedManifestRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsignmentEntityRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaImageReferenceRepository;
import com.courier.overc360.api.midmile.replica.repository.specification.ReplicaConsignmentSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.*;
import java.util.List;

@Service
@Slf4j
public class ConsignmentService {


    @Autowired
    ConsignmentEntityRepository consignmentEntityRepository;

    @Autowired
    NumberRangeService numberRangeService;

    @Autowired
    ReplicaConsignmentEntityRepository replicaConsignmentEntityRepository;

    @Autowired
    BondedManifestRepository bondedManifestRepository;

    @Autowired
    ReplicaBondedManifestRepository replicaBondedManifestRepository;

    @Autowired
    PieceDetailsService pieceDetailsService;

    @Autowired
    CommonService commonService;

    @Autowired
    ReplicaImageReferenceRepository replicaImageReferenceRepository;

    @Autowired
    ImageReferenceService imageReferenceService;

    @Autowired
    ImageReferenceRepository imageReferenceRepository;

    @Autowired
    PieceDetailsRepository pieceDetailsRepository;

    @Autowired
    ItemDetailsRepository itemDetailsRepository;

    @Autowired
    ItemDetailsService itemDetailsService;

    /*===================================================================================================================================================*/


    //GetALl
    public List<ConsignmentEntity> findAll() {
        List<ConsignmentEntity> getAll = consignmentEntityRepository.findAll();
        return getAll;
    }


    //Consignment Create

    /**
     * @param consignmentEntityList
     * @param loginUserID
     * @return
     */
    public List<ConsignmentEntity> createConsignmentEntity(List<ConsignmentEntity> consignmentEntityList, String loginUserID) throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        List<ConsignmentEntity> consignmentEntities = new ArrayList<>();
        String masterAirwayBill = numberRangeService.getNextNumberRange("MAWB");


        for (ConsignmentEntity consignmentEntity : consignmentEntityList) {

            //Null validation code
//            consignmentEntity = createConsignmentNullValidation(consignmentEntity);

            ConsignmentEntity newConsignment = new ConsignmentEntity();
            // Fetching the description for a company
            IKeyValuePair iKeyValuePair = replicaConsignmentEntityRepository.getDescription(consignmentEntity.getCompanyId());

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

            // Set LoadType
            if (consignmentEntity.getLoadTypeId() != null) {
                String getLoadType = replicaBondedManifestRepository.getLoadTypeText(
                        languageId, companyId, consignmentEntity.getLoadTypeId());
                if (getLoadType != null) {
                    consignmentEntity.setLoadType(getLoadType);
                }
            }

            // Set ServiceType
            if (consignmentEntity.getServiceTypeId() != null) {
                String getServiceType = replicaBondedManifestRepository.getServiceTypeText(
                        languageId, companyId, consignmentEntity.getServiceTypeId());
                if (getServiceType != null) {
                    consignmentEntity.setServiceTypeText(getServiceType);
                }
            }

            //PieceDetails Count
            List<PieceDetails> pieceDetailsList = consignmentEntity.getPieceDetails();
            int pieceCount = pieceDetailsList != null ? pieceDetailsList.size() : 0;

            int totalItemCount = 0;
            String currency = null;
            for (PieceDetails pieceDetails : consignmentEntity.getPieceDetails()) {
                List<ItemDetails> addItemDetails = pieceDetails.getItemDetails();

                int itemCount = addItemDetails != null ? addItemDetails.size() : 0;
                totalItemCount += itemCount;

                if (addItemDetails != null) {
                    for (ItemDetails itemDetail : addItemDetails) {
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
            newConsignment.setCreatedBy(loginUserID);
            newConsignment.setCreatedOn(new Date());
            newConsignment.setUpdatedBy(null);
            newConsignment.setUpdatedOn(null);
            newConsignment.setConsoleIndicator(0L);
            newConsignment.setManifestIndicator(0L);

            // Destination Details
            if (consignmentEntity.getDestinationDetails() != null) {
                DestinationDetails destinationDetails = new DestinationDetails();
                BeanUtils.copyProperties(consignmentEntity.getDestinationDetails(), destinationDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getDestinationDetails()));
                destinationDetails.setCreatedBy(loginUserID);
                destinationDetails.setCreatedOn(new Date());
                destinationDetails.setUpdatedBy(null);
                destinationDetails.setUpdatedOn(null);
                newConsignment.setDestinationDetails(destinationDetails);
            } else {
                DestinationDetails destinationDetails = new DestinationDetails();
                destinationDetails.setCreatedBy(loginUserID);
                destinationDetails.setCreatedOn(new Date());
                destinationDetails.setUpdatedBy(null);
                destinationDetails.setUpdatedOn(null);
                newConsignment.setDestinationDetails(destinationDetails);
            }

            // Origination Details
            if (consignmentEntity.getOriginDetails() != null) {
                OriginDetails originDetails = new OriginDetails();
                BeanUtils.copyProperties(consignmentEntity.getOriginDetails(), originDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getOriginDetails()));
                originDetails.setCreatedBy(loginUserID);
                originDetails.setCreatedOn(new Date());
                originDetails.setUpdatedBy(null);
                originDetails.setUpdatedOn(null);
                newConsignment.setOriginDetails(originDetails);
            } else {
                OriginDetails originDetails = new OriginDetails();
                originDetails.setCreatedBy(loginUserID);
                originDetails.setCreatedOn(new Date());
                originDetails.setUpdatedBy(null);
                originDetails.setUpdatedOn(null);
                newConsignment.setOriginDetails(originDetails);
            }

            // Return Details
            if (consignmentEntity.getReturnDetails() != null) {
                ReturnDetails newReturnDetails = new ReturnDetails();
                BeanUtils.copyProperties(consignmentEntity.getReturnDetails(), newReturnDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getReturnDetails()));
                newReturnDetails.setCreatedBy(loginUserID);
                newReturnDetails.setCreatedOn(new Date());
                newReturnDetails.setUpdatedBy(null);
                newReturnDetails.setUpdatedOn(null);
                newConsignment.setReturnDetails(newReturnDetails);
            } else {
                ReturnDetails newReturnDetails = new ReturnDetails();
                newReturnDetails.setCreatedBy(loginUserID);
                newReturnDetails.setCreatedOn(new Date());
                newReturnDetails.setUpdatedBy(null);
                newReturnDetails.setUpdatedOn(null);
                newConsignment.setReturnDetails(newReturnDetails);
            }

            //HAWB_TYPE
            newConsignment.setHawbType("STATUS");
            newConsignment.setHawbTypeId("1");
            Optional<String> statusText = consignmentEntityRepository.statusEventText(newConsignment.getCompanyId(), newConsignment.getLanguageId(), "1");
            if (statusText.isPresent()) {
                String ikey = statusText.get();
                newConsignment.setHawbTypeDescription(ikey);
                newConsignment.setHawbTimeStamp(new Date());
            }

            // CON_IMAGE
            Set<ImageReference> imageReferenceSet = new HashSet<>();
            if (consignmentEntity.getReferenceImageList() != null && !consignmentEntity.getReferenceImageList().isEmpty()) {
                for (ImageReference imageReference : consignmentEntity.getReferenceImageList()) {
                    String downloadDocument = commonService.downLoadDocument(imageReference.getReferenceImageUrl(), "document", "image");
                    if (downloadDocument != null) {
                        ImageReference saveImage = imageReferenceService.createImageReference(
                                languageId, companyId, partnerId, partnerName, houseAirwayBill, masterAirwayBill,
                                partnerHawBill, partnerMawBill, null, null, imageReference.getReferenceImageUrl(), "CON_ID", "downloadDocument", loginUserID);

                        imageReferenceSet.add(saveImage);
                    }
                    newConsignment.setReferenceImageList(imageReferenceSet);
                }
            }
            String country = consignmentEntity.getOriginDetails().getCountry();

            // PieceDetails Save
            List<PieceDetails> pieceDetails = pieceDetailsService.createPieceDetailsList(companyId, languageId, partnerId, masterAirwayBill, houseAirwayBill,
                    newConsignment.getCompanyName(), newConsignment.getLanguageDescription(), newConsignment.getPartnerName(), partnerHawBill, partnerMawBill,
                    consignmentEntity.getPieceDetails(), newConsignment.getHsCode(), length, width, height, volume, weightUnit, codAmount,
                    newConsignment.getStatusId(), newConsignment.getEventCode(), newConsignment.getStatusDescription(), newConsignment.getEventText(), country, loginUserID);

            newConsignment.setPieceDetails(pieceDetails);
            ConsignmentEntity saveConsignment = consignmentEntityRepository.save(newConsignment);
            consignmentEntities.add(saveConsignment);
        }

        return consignmentEntities;
    }


    // Update

    /**
     * UpdateConsignment
     *
     * @param consignment
     * @param loginUserID
     * @return
     */
    public List<ConsignmentEntity> updateConsignmentEntity(List<ConsignmentEntity> consignment, String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {

        List<ConsignmentEntity> addConsignmentList = new ArrayList<>();
        for (ConsignmentEntity dbConsignment : consignment) {

            // Get Consignment
            ConsignmentEntity dbConsignmentEntity =
                    consignmentEntityRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                            dbConsignment.getCompanyId(), dbConsignment.getLanguageId(), dbConsignment.getPartnerId(), dbConsignment.getMasterAirwayBill(), dbConsignment.getHouseAirwayBill(), 0L);

            if (dbConsignmentEntity == null) {
                throw new BadRequestException("Given Values Doesn't exist CompanyId " + dbConsignment.getCompanyId() + " LanguageId " + dbConsignment.getLanguageId() +
                        " PartnerId " + dbConsignment.getPartnerId() + " MasterAirwayBillNo " + dbConsignment.getMasterAirwayBill() + " HouseAirwayBillNo " + dbConsignment.getHouseAirwayBill());
            }

            BeanUtils.copyProperties(dbConsignment, dbConsignmentEntity, CommonUtils.getNullPropertyNames(dbConsignment));

            // Set ServiceType Description
            if (dbConsignment.getServiceTypeId() != null) {
                String getServiceType = replicaBondedManifestRepository.getServiceTypeText(
                        dbConsignmentEntity.getLanguageId(), dbConsignmentEntity.getCompanyId(), dbConsignmentEntity.getServiceTypeId());
                if (getServiceType != null) {
                    dbConsignmentEntity.setServiceTypeText(getServiceType);
                }
            }

            // Set LoadType Description
            if (dbConsignment.getLoadTypeId() != null) {
                String getLoadType = replicaBondedManifestRepository.getLoadTypeText(
                        dbConsignmentEntity.getLanguageId(), dbConsignmentEntity.getCompanyId(), dbConsignmentEntity.getLoadTypeId());
                if (getLoadType != null) {
                    dbConsignmentEntity.setLoadType(getLoadType);
                }
            }

            dbConsignmentEntity.setDeletionIndicator(0L);
            dbConsignmentEntity.setUpdatedBy(loginUserID);
            dbConsignmentEntity.setUpdatedOn(new Date());

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

            //Update ReferenceImage
            Set<ImageReference> referenceImageLists = new HashSet<>();
            if (dbConsignment.getReferenceImageList() != null && !dbConsignment.getReferenceImageList().isEmpty()) {
                for (ImageReference image : dbConsignment.getReferenceImageList()) {

                    String downloadDocument = commonService.downLoadDocument(image.getReferenceImageUrl(), "document", "image");
                    image.setReferenceImageUrl(image.getReferenceImageUrl());
                    image.setReferenceField2(downloadDocument);
                    image.setUpdatedBy(loginUserID);
                    image.setUpdatedOn(new Date());
                    referenceImageLists.add(imageReferenceRepository.save(image));
                    referenceImageLists.add(image);
                }
                dbConsignment.setReferenceImageList(referenceImageLists);
            }

            //PieceDetails Update
            if (dbConsignment.getPieceDetails() != null && !dbConsignment.getPieceDetails().isEmpty()) {
                if (dbConsignmentEntity.getPieceDetails() != null && !dbConsignmentEntity.getPieceDetails().isEmpty()) {
//                    List<PieceDetails> savedPieceDetails = pieceDetailsService.updatePieceDetails(
//                            dbConsignmentEntity.getPieceDetails(), dbConsignment.getPieceDetails(), loginUserID);
                    List<PieceDetails> pieceDetailsList = new ArrayList<>();

                    for (PieceDetails pieceDetails : dbConsignment.getPieceDetails()) {
                        for (PieceDetails dbPiece : dbConsignmentEntity.getPieceDetails()) {
                            if (Objects.equals(pieceDetails.getPieceId(), dbPiece.getPieceId())) {

                                BeanUtils.copyProperties(pieceDetails, dbPiece, CommonUtils.getNullPropertyNames(pieceDetails));

                                //Update ReferenceImage
                                Set<ImageReference> pieceImage = new HashSet<>();
                                if (pieceDetails.getReferenceImageList() != null && !pieceDetails.getReferenceImageList().isEmpty()) {
                                    for (ImageReference image : pieceDetails.getReferenceImageList()) {

                                        String downloadDocument = commonService.downLoadDocument(image.getReferenceImageUrl(), "document", "image");
                                        ImageReference imageReferenceRecord = imageReferenceRepository.findByImageRefIdAndDeletionIndicator(image.getImageRefId(), 0L);
                                        if (imageReferenceRecord == null) {
                                            log.info("ImageReference doesn't exist" + image.getImageRefId());
                                        }
                                        imageReferenceRecord.setReferenceImageUrl(image.getReferenceImageUrl());
                                        imageReferenceRecord.setReferenceField2(downloadDocument);
                                        imageReferenceRecord.setDeletionIndicator(0L);
                                        imageReferenceRecord.setUpdatedBy(loginUserID);
                                        imageReferenceRecord.setUpdatedOn(new Date());
                                        ImageReference imageRef = imageReferenceRepository.save(imageReferenceRecord);
                                        pieceImage.add(imageRef);
                                    }
                                }
                                dbPiece.setReferenceImageList(referenceImageLists);

                                // UpdateItemDetails
                                if (pieceDetails.getItemDetails() != null && !pieceDetails.getItemDetails().isEmpty()) {

                                    List<ItemDetails> itemDetailsList = new ArrayList<>();
                                    for (ItemDetails itemDetails : pieceDetails.getItemDetails()) {
                                        for (ItemDetails dbItem : dbPiece.getItemDetails()) {
                                            if (Objects.equals(itemDetails.getPieceItemId(), dbItem.getPieceItemId())) {
                                                BeanUtils.copyProperties(itemDetails, dbItem, CommonUtils.getNullPropertyNames(itemDetails));
                                                dbItem.setUpdatedBy(loginUserID);
                                                dbItem.setUpdatedOn(new Date());
                                                itemDetailsList.add(itemDetailsRepository.save(dbItem));
                                            }
                                        }
                                    }
                                    dbPiece.setItemDetails(itemDetailsList);
                                }
                                dbPiece.setDeletionIndicator(0L);
                                dbPiece.setUpdatedBy(loginUserID);
                                dbPiece.setUpdatedOn(new Date());
                                pieceDetailsList.add(pieceDetailsRepository.save(dbPiece));
                            }
                        }

                        dbConsignment.setPieceDetails(pieceDetailsList);
                    }
                }
                consignmentEntityRepository.save(dbConsignment);
                addConsignmentList.add(dbConsignment);
            }

        }
        return addConsignmentList;
    }

    /**
     * Find Consignment
     *
     * @param findConsignment
     * @return
     * @throws Exception
     */
    public List<ReplicaConsignmentEntity> findConsignmentEntity(FindConsignment findConsignment) throws Exception {

        log.info("given Params to fetch Consoles -- > {}", findConsignment);
        ReplicaConsignmentSpecification spec = new ReplicaConsignmentSpecification(findConsignment);
        List<ReplicaConsignmentEntity> consignmentEntities = replicaConsignmentEntityRepository.findAll();
        return consignmentEntities;
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

}

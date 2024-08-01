package com.courier.overc360.api.midmile.service;


import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.*;
import com.courier.overc360.api.midmile.primary.model.imagereference.AddImageReference;
import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
import com.courier.overc360.api.midmile.primary.model.imagereference.UpdateImageReference;
import com.courier.overc360.api.midmile.primary.model.itemdetails.AddItemDetails;
import com.courier.overc360.api.midmile.primary.model.itemdetails.ItemDetails;
import com.courier.overc360.api.midmile.primary.model.itemdetails.UpdateItemDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.AddPieceDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.PieceDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.UpdatePieceDetails;
import com.courier.overc360.api.midmile.primary.repository.*;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.consignment.FindConsignmentInvoice;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.console.FindConsole;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import com.courier.overc360.api.midmile.replica.model.dto.*;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaItemDetails;
import com.courier.overc360.api.midmile.replica.model.piecedetails.ReplicaPieceDetails;
import com.courier.overc360.api.midmile.replica.repository.*;
import com.courier.overc360.api.midmile.replica.repository.specification.PreAlertManifestConsignmentSpecification;
import com.courier.overc360.api.midmile.replica.repository.specification.ReplicaConsignmentSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
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

    @Autowired
    ReplicaOriginDetailsRepository replicaOriginDetailsRepository;

    @Autowired
    ReplicaDestinationDetailsRepository replicaDestinationDetailsRepository;

    @Autowired
    ReplicaPieceDetailsRepository replicaPieceDetailsRepository;


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
    public List<ConsignmentEntity> createConsignmentEntity(List<AddConsignment> consignmentEntityList, String loginUserID) throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        List<ConsignmentEntity> consignmentEntities = new ArrayList<>();

        String masterAirwayBill = numberRangeService.getNextNumberRange("MAWB");

        //Cassandra save
        commonService.createConsignment(consignmentEntityList, loginUserID, masterAirwayBill);

        for (AddConsignment consignmentEntity : consignmentEntityList) {

            //Null validation code
            consignmentEntity = createConsignmentNullValidation(consignmentEntity);

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

            //PieceDetails Count
            List<AddPieceDetails> pieceDetailsList = consignmentEntity.getPieceDetails();
            int pieceCount = pieceDetailsList != null ? pieceDetailsList.size() : 0;
            int totalItemCount = 0;
            String currency = null;

            // Set LoadType Text
            if (consignmentEntity.getLoadTypeId() != null) {
                String getLoadType = replicaBondedManifestRepository.getLoadTypeText(
                        languageId, companyId, consignmentEntity.getLoadTypeId());
                if (getLoadType != null) {
                    consignmentEntity.setLoadType(getLoadType);
                }
            }

            // Set ServiceType Text
            if (consignmentEntity.getServiceTypeId() != null) {
                String getServiceType = replicaBondedManifestRepository.getServiceTypeText(
                        languageId, companyId, consignmentEntity.getServiceTypeId());
                if (getServiceType != null) {
                    consignmentEntity.setServiceTypeText(getServiceType);
                }
            }

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
                for (AddImageReference imageReference : consignmentEntity.getReferenceImageList()) {
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

            ConsignmentEntity saveConsignment = consignmentEntityRepository.save(newConsignment);

            // PieceDetails Save
            List<PieceDetails> pieceDetails = pieceDetailsService.createPieceDetailsList(companyId, languageId, partnerId, masterAirwayBill, houseAirwayBill,
                    saveConsignment.getCompanyName(), saveConsignment.getLanguageDescription(), saveConsignment.getPartnerName(), partnerHawBill, partnerMawBill,
                    consignmentEntity.getPieceDetails(), saveConsignment.getHsCode(), length, width, height, volume, weightUnit, codAmount,
                    saveConsignment.getStatusId(), saveConsignment.getEventCode(), saveConsignment.getStatusDescription(), saveConsignment.getEventText(), country, loginUserID);

            //Volume
            Double totalPieceVolume = pieceDetails.stream().map(PieceDetails::getVolume).filter(n -> n != null && !n.isBlank()).mapToDouble(a -> Double.valueOf(a)).sum();

            //Consignment_entity Set
            consignmentEntityRepository.updateConsignment(saveConsignment.getCompanyId(), saveConsignment.getLanguageId(),
                    saveConsignment.getPartnerId(), saveConsignment.getHouseAirwayBill(), saveConsignment.getMasterAirwayBill(),
                    String.valueOf(totalPieceVolume));

            consignmentEntities.add(saveConsignment);
        }

        return consignmentEntities;
    }


    /**
     * Update ConsignmentEntity
     *
     * @param consignmentList
     * @param loginUserID
     * @return
     * @throws IOException
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     * @throws CsvException
     */
    public List<ConsignmentEntity> updateConsignmentEntity(List<UpdateConsignment> consignmentList, String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {

        List<ConsignmentEntity> updatedConsignmentList = new ArrayList<>();
        for (UpdateConsignment consignment : consignmentList) {

            // Get existing Consignment
            ConsignmentEntity existingConsignmentEntity =
                    consignmentEntityRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                            consignment.getCompanyId(), consignment.getLanguageId(), consignment.getPartnerId(), consignment.getMasterAirwayBill(), consignment.getHouseAirwayBill(), 0L);

            if (existingConsignmentEntity == null) {
                throw new BadRequestException("Given Values Doesn't exist CompanyId " + consignment.getCompanyId() + " LanguageId " + consignment.getLanguageId() +
                        " PartnerId " + consignment.getPartnerId() + " MasterAirwayBillNo " + consignment.getMasterAirwayBill() + " HouseAirwayBillNo " + consignment.getHouseAirwayBill());
            }

            //Null validation code
            consignment = updateConsignmentNullValidation(consignment);

            // Update Consignment fields
            BeanUtils.copyProperties(consignment, existingConsignmentEntity, CommonUtils.getNullPropertyNames(consignment));
            existingConsignmentEntity.setDeletionIndicator(0L);
            existingConsignmentEntity.setUpdatedBy(loginUserID);
            existingConsignmentEntity.setUpdatedOn(new Date());

            if (consignment.getDestinationDetails() != null && existingConsignmentEntity.getDestinationDetails() != null) {
                BeanUtils.copyProperties(consignment.getDestinationDetails(), existingConsignmentEntity.getDestinationDetails(), CommonUtils.getNullPropertyNames(consignment.getDestinationDetails()));
                existingConsignmentEntity.getDestinationDetails().setUpdatedOn(new Date());
                existingConsignmentEntity.getDestinationDetails().setUpdatedBy(loginUserID);
            }

            if (consignment.getReturnDetails() != null && existingConsignmentEntity.getReturnDetails() != null) {
                BeanUtils.copyProperties(consignment.getReturnDetails(), existingConsignmentEntity.getReturnDetails(), CommonUtils.getNullPropertyNames(consignment.getReturnDetails()));
                existingConsignmentEntity.getReturnDetails().setUpdatedOn(new Date());
                existingConsignmentEntity.getReturnDetails().setUpdatedBy(loginUserID);
            }

            if (consignment.getOriginDetails() != null && existingConsignmentEntity.getOriginDetails() != null) {
                BeanUtils.copyProperties(consignment.getOriginDetails(), existingConsignmentEntity.getOriginDetails(), CommonUtils.getNullPropertyNames(consignment.getOriginDetails()));
                existingConsignmentEntity.getOriginDetails().setUpdatedOn(new Date());
                existingConsignmentEntity.getOriginDetails().setUpdatedBy(loginUserID);
            }

            // Update ReferenceImage
            Set<ImageReference> referenceImageLists = new HashSet<>();
            if (consignment.getReferenceImageList() != null && !consignment.getReferenceImageList().isEmpty()) {
                for (UpdateImageReference image : consignment.getReferenceImageList()) {
                    String downloadDocument = commonService.downLoadDocument(image.getReferenceImageUrl(), "document", "image");
                    ImageReference imageReferenceRecord = imageReferenceRepository.findByImageRefIdAndDeletionIndicator(image.getImageRefId(), 0L);
                    if (imageReferenceRecord == null) {
                        log.info("ImageReference doesn't exist" + image.getImageRefId());
                        continue;
                    }
                    imageReferenceRecord.setReferenceImageUrl(image.getReferenceImageUrl());
                    imageReferenceRecord.setReferenceField2(downloadDocument);
                    imageReferenceRecord.setDeletionIndicator(0L);
                    imageReferenceRecord.setUpdatedBy(loginUserID);
                    imageReferenceRecord.setUpdatedOn(new Date());
                    referenceImageLists.add(imageReferenceRepository.save(imageReferenceRecord));

                }
                existingConsignmentEntity.setReferenceImageList(referenceImageLists);
            }

            // Update PieceDetails
            if (consignment.getPieceDetails() != null && !consignment.getPieceDetails().isEmpty()) {
                List<PieceDetails> updatedPieceDetailsList = new ArrayList<>();
                for (UpdatePieceDetails pieceDetails : consignment.getPieceDetails()) {
                    Optional<PieceDetails> existingPieceOpt = existingConsignmentEntity.getPieceDetails().stream()
                            .filter(dbPiece -> Objects.equals(dbPiece.getPieceId(), pieceDetails.getPieceId()))
                            .findFirst();

                    if (existingPieceOpt.isPresent()) {
                        PieceDetails existingPiece = existingPieceOpt.get();
                        BeanUtils.copyProperties(pieceDetails, existingPiece, CommonUtils.getNullPropertyNames(pieceDetails));

                        // Update Piece ReferenceImage
                        Set<ImageReference> pieceImage = new HashSet<>();
                        if (pieceDetails.getReferenceImageList() != null && !pieceDetails.getReferenceImageList().isEmpty()) {
                            for (UpdateImageReference image : pieceDetails.getReferenceImageList()) {
                                String downloadDocument = commonService.downLoadDocument(image.getReferenceImageUrl(), "document", "image");
                                ImageReference imageReferenceRecord = imageReferenceRepository.findByImageRefIdAndDeletionIndicator(image.getImageRefId(), 0L);
                                if (imageReferenceRecord == null) {
                                    log.info("ImageReference doesn't exist" + image.getImageRefId());
                                    continue;
                                }
                                imageReferenceRecord.setReferenceImageUrl(image.getReferenceImageUrl());
                                imageReferenceRecord.setReferenceField2(downloadDocument);
                                imageReferenceRecord.setDeletionIndicator(0L);
                                imageReferenceRecord.setUpdatedBy(loginUserID);
                                imageReferenceRecord.setUpdatedOn(new Date());
                                pieceImage.add(imageReferenceRepository.save(imageReferenceRecord));
                            }
                        }
                        existingPiece.setReferenceImageList(pieceImage);

                        // Update ItemDetails
                        List<ItemDetails> updatedItemDetailsList = new ArrayList<>();
                        if (pieceDetails.getItemDetails() != null && !pieceDetails.getItemDetails().isEmpty()) {
                            for (UpdateItemDetails itemDetails : pieceDetails.getItemDetails()) {
                                Optional<ItemDetails> existingItemOpt = existingPiece.getItemDetails().stream()
                                        .filter(dbItem -> Objects.equals(dbItem.getPieceItemId(), itemDetails.getPieceItemId()))
                                        .findFirst();

                                if (existingItemOpt.isPresent()) {
                                    ItemDetails existingItem = existingItemOpt.get();
                                    BeanUtils.copyProperties(itemDetails, existingItem, CommonUtils.getNullPropertyNames(itemDetails));
                                    existingItem.setUpdatedBy(loginUserID);
                                    existingItem.setUpdatedOn(new Date());

                                    // Update Item ReferenceImage
                                    Set<ImageReference> itemImage = new HashSet<>();
                                    if (itemDetails.getReferenceImageList() != null && !itemDetails.getReferenceImageList().isEmpty()) {
                                        for (UpdateImageReference image : pieceDetails.getReferenceImageList()) {
                                            String downloadDocument = commonService.downLoadDocument(image.getReferenceImageUrl(), "document", "image");
                                            ImageReference imageReferenceRecord = imageReferenceRepository.findByImageRefIdAndDeletionIndicator(image.getImageRefId(), 0L);
                                            if (imageReferenceRecord == null) {
                                                log.info("ImageReference doesn't exist" + image.getImageRefId());
                                                continue;
                                            }
                                            imageReferenceRecord.setReferenceImageUrl(image.getReferenceImageUrl());
                                            imageReferenceRecord.setReferenceField2(downloadDocument);
                                            imageReferenceRecord.setDeletionIndicator(0L);
                                            imageReferenceRecord.setUpdatedBy(loginUserID);
                                            imageReferenceRecord.setUpdatedOn(new Date());
                                            itemImage.add(imageReferenceRepository.save(imageReferenceRecord));
                                        }
                                    }
                                    existingItem.setReferenceImageList(itemImage);
                                    updatedItemDetailsList.add(itemDetailsRepository.save(existingItem));
                                }
                            }
                        }
                        existingPiece.setItemDetails(updatedItemDetailsList);
                        existingPiece.setDeletionIndicator(0L);
                        existingPiece.setUpdatedBy(loginUserID);
                        existingPiece.setUpdatedOn(new Date());
                        updatedPieceDetailsList.add(pieceDetailsRepository.save(existingPiece));
                    }
                }
                existingConsignmentEntity.setPieceDetails(updatedPieceDetailsList);
            }
            // Save updated consignment entity
            updatedConsignmentList.add(consignmentEntityRepository.save(existingConsignmentEntity));
        }

        return updatedConsignmentList;
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
        return replicaConsignmentEntityRepository.findAll(spec);
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
}

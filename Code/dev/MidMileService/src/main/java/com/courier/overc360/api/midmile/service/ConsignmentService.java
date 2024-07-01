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
        for (AddConsignment consignmentEntity : consignmentEntityList) {

            // Fetching the description for a company
            IKeyValuePair iKeyValuePair = replicaConsignmentEntityRepository.getDescription(consignmentEntity.getCompanyId());
//            IKeyValuePair iKeyValuePair1 = replicaConsignmentEntityRepository.getStatusDescription(consignmentEntity.getStatusId());

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

            if(shipperData == null && getProductIdFromCustomer == null) {
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

            // Checking if the product ID and sub-product ID match
            if(productId != null && subProductId != null) {
                if (!productId.equalsIgnoreCase(shipperData.getProductId()) ||
                        !subProductId.equalsIgnoreCase(shipperData.getSubProductId())) {
                    if (!subProductId.equalsIgnoreCase(getProductIdFromCustomer.getSubProductId()) ||
                            !productId.equalsIgnoreCase(getProductIdFromCustomer.getProductId())) {
                        throw new BadRequestException("Product ID and Sub-product ID do not match.");
                    }
                }
            }

            //Setting the number range object based on product ID
            String NUM_RAN_OBJ = null;
            if (productId.equalsIgnoreCase("1")) {
                NUM_RAN_OBJ = "INTERNATIONALINBOUND";
            } else if (productId.equalsIgnoreCase("2")) {
                NUM_RAN_OBJ = "INTERNATIONALOUTBOUND";
            } else if (productId.equalsIgnoreCase("3")) {
                NUM_RAN_OBJ = "DOMESTIC";
            } else {
                log.info("ProductId given not 1 or 2 or 3");
            }

            // Generating house and master airway bills
            String houseAirwayBill = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
            String masterAirwayBill = numberRangeService.getNextNumberRange("MAWB");

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
//                newConsignment.setStatusDescription(iKeyValuePair1.getStatusId() + " - " + iKeyValuePair1.getStatusDesc());
//                newConsignment.setProductName(shipperData.getProductId() + " - " + shipperData.getProductName());
//                newConsignment.setSubProductName(shipperData.getSubProductId() + " - " + shipperData.getSubProductName());
//                newConsignment.setShipperName(shipperData.getConsignorName());
            }
            if(shipperData != null) {
                newConsignment.setPartnerName(shipperData.getConsignorName());
                newConsignment.setProductId(shipperData.getProductId());
                newConsignment.setProductName(shipperData.getProductName());
                newConsignment.setSubProductId(shipperData.getSubProductId());
                newConsignment.setSubProductName(shipperData.getSubProductName());
            } else if(getProductIdFromCustomer != null) {
                newConsignment.setPartnerName(getProductIdFromCustomer.getConsignorName());
                newConsignment.setProductId(getProductIdFromCustomer.getProductId());
                newConsignment.setProductName(getProductIdFromCustomer.getProductName());
                newConsignment.setSubProductId(getProductIdFromCustomer.getSubProductId());
                newConsignment.setSubProductName(getProductIdFromCustomer.getSubProductName());
            }

            newConsignment.setHouseAirwayBill(houseAirwayBill);
            newConsignment.setMasterAirwayBill(masterAirwayBill);
            newConsignment.setCreatedBy(loginUserId);
            newConsignment.setUpdatedBy(loginUserId);
            newConsignment.setCreatedOn(new Date());
            newConsignment.setUpdatedOn(new Date());

            // ConsignmentInfo
            ConsignmentInfo consignmentInfo = new ConsignmentInfo();
            BeanUtils.copyProperties(consignmentEntity, consignmentInfo, CommonUtils.getNullPropertyNames(consignmentEntity));
            newConsignment.setConsignmentInfo(consignmentInfo);
            newConsignment.getConsignmentInfo().setCreatedOn(new Date());
            newConsignment.getConsignmentInfo().setUpdatedOn(new Date());
            newConsignment.getConsignmentInfo().setUpdatedBy(loginUserId);
            newConsignment.getConsignmentInfo().setCreatedBy(loginUserId);

            // ConsignmentRef
            ConsignmentRef consignmentRef = new ConsignmentRef();
            BeanUtils.copyProperties(consignmentEntity, consignmentRef, CommonUtils.getNullPropertyNames(consignmentEntity));
            newConsignment.setConsignmentRefs(consignmentRef);
            newConsignment.getConsignmentRefs().setCreatedBy(loginUserId);
            newConsignment.getConsignmentRefs().setUpdatedBy(loginUserId);
            newConsignment.getConsignmentRefs().setUpdatedOn(new Date());
            newConsignment.getConsignmentRefs().setUpdatedOn(new Date());

            // Destination Details
            if (consignmentEntity.getDestinationDetails() != null) {
                DestinationDetails destinationDetails = new DestinationDetails();
                BeanUtils.copyProperties(consignmentEntity.getDestinationDetails(), destinationDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getDestinationDetails()));
                newConsignment.setDestinationDetails(destinationDetails);
                newConsignment.getDestinationDetails().setCreatedBy(loginUserId);
                newConsignment.getDestinationDetails().setUpdatedBy(loginUserId);
                newConsignment.getDestinationDetails().setCreatedOn(new Date());
                newConsignment.getDestinationDetails().setUpdatedOn(new Date());
            }

            // Origination Details
            if (consignmentEntity.getOriginDetails() != null) {
                OriginDetails originDetails = new OriginDetails();
                BeanUtils.copyProperties(consignmentEntity.getOriginDetails(), originDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getOriginDetails()));
                newConsignment.setOriginDetails(originDetails);
                newConsignment.getOriginDetails().setCreatedBy(loginUserId);
                newConsignment.getOriginDetails().setUpdatedBy(loginUserId);
                newConsignment.getOriginDetails().setCreatedOn(new Date());
                newConsignment.getOriginDetails().setUpdatedOn(new Date());
            }

            // Return Details
            if (consignmentEntity.getReturnDetails() != null) {
                ReturnDetails newReturnDetails = new ReturnDetails();
                BeanUtils.copyProperties(consignmentEntity.getReturnDetails(), newReturnDetails, CommonUtils.getNullPropertyNames(consignmentEntity.getReturnDetails()));
                newConsignment.setReturnDetails(newReturnDetails);
                newConsignment.getReturnDetails().setCreatedBy(loginUserId);
                newConsignment.getReturnDetails().setUpdatedBy(loginUserId);
                newConsignment.getReturnDetails().setCreatedOn(new Date());
                newConsignment.getReturnDetails().setUpdatedOn(new Date());
            }

            ConsignmentEntity saveConsignment = consignmentEntityRepository.save(newConsignment);

            // ReferenceImageUrl Save
            List<ReferenceImageList> referenceImageList = new ArrayList<>();
            if (consignmentEntity.getReferenceImageList() != null) {
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
            List<AddPieceDetails> pieceDetails = pieceDetailsService.createPieceDetailsList(
                    companyId, languageId, partnerId, masterAirwayBill, houseAirwayBill,
                    newConsignment.getCompanyName(), newConsignment.getLanguageDescription(),
                    newConsignment.getPartnerName(), saveConsignment.getConsignmentId(),
                    partnerHawBill, partnerMawBill, consignmentEntity.getPieceDetails(), loginUserId
            );

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
            BeanUtils.copyProperties(saveConsignment.getConsignmentInfo(), newAddConsignment);
            BeanUtils.copyProperties(saveConsignment.getConsignmentRefs(), newAddConsignment);
            BeanUtils.copyProperties(saveConsignment.getDestinationDetails(), newAddConsignment.getDestinationDetails());
            BeanUtils.copyProperties(saveConsignment.getReturnDetails(), newAddConsignment.getReturnDetails());
            BeanUtils.copyProperties(saveConsignment.getOriginDetails(), newAddConsignment.getOriginDetails());

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

            if (dbConsignmentEntity != null) {

                UpdateConsignment addConsignment = new UpdateConsignment();
                BeanUtils.copyProperties(dbConsignment, dbConsignmentEntity, CommonUtils.getNullPropertyNames(dbConsignment));
                dbConsignmentEntity.setUpdatedBy(loginUserID);
                dbConsignmentEntity.setUpdatedOn(new Date());

                BeanUtils.copyProperties(dbConsignment, dbConsignmentEntity.getConsignmentInfo(), CommonUtils.getNullPropertyNames(dbConsignment));
                dbConsignmentEntity.getConsignmentInfo().setUpdatedOn(new Date());
                dbConsignmentEntity.getConsignmentInfo().setUpdatedBy(loginUserID);

                BeanUtils.copyProperties(dbConsignment, dbConsignmentEntity.getConsignmentRefs(), CommonUtils.getNullPropertyNames(dbConsignment));
                dbConsignmentEntity.getConsignmentRefs().setUpdatedOn(new Date());
                dbConsignmentEntity.getConsignmentRefs().setUpdatedBy(loginUserID);

                BeanUtils.copyProperties(dbConsignment.getDestinationDetails(), dbConsignmentEntity.getDestinationDetails(),
                        CommonUtils.getNullPropertyNames(dbConsignment.getDestinationDetails()));
                dbConsignmentEntity.getDestinationDetails().setUpdatedOn(new Date());
                dbConsignmentEntity.getDestinationDetails().setUpdatedBy(loginUserID);

                BeanUtils.copyProperties(dbConsignment.getReturnDetails(), dbConsignmentEntity.getReturnDetails(),
                        CommonUtils.getNullPropertyNames(dbConsignment.getReturnDetails()));
                dbConsignmentEntity.getReturnDetails().setUpdatedOn(new Date());
                dbConsignmentEntity.getReturnDetails().setUpdatedBy(loginUserID);

                BeanUtils.copyProperties(dbConsignment.getOriginDetails(), dbConsignmentEntity.getOriginDetails(),
                        CommonUtils.getNullPropertyNames(dbConsignment.getOriginDetails()));
                dbConsignmentEntity.getOriginDetails().setUpdatedOn(new Date());
                dbConsignmentEntity.getOriginDetails().setUpdatedBy(loginUserID);

                ConsignmentEntity savedConsignment = consignmentEntityRepository.save(dbConsignmentEntity);

                //Update ReferenceImage
                List<ReferenceImageList> referenceImageLists = new ArrayList<>();
                for (ReferenceImageList image : dbConsignment.getReferenceImageList()) {

                    ReferenceImageList newRefImageList = new ReferenceImageList();
                    String downloadDocument = commonService.downLoadDocument(image.getReferenceImageUrl(), "document", "image");
                    ImageReference imageReference = imageReferenceRepository.findByImageRefIdAndDeletionIndicator(image.getImageRefId(), 0L);

                    imageReference.setReferenceImageUrl(image.getReferenceImageUrl());
                    imageReference.setReferenceField2(downloadDocument);
                    imageReference.setUpdatedBy(loginUserID);
                    imageReference.setUpdatedOn(new Date());
                    ImageReference imageRef = imageReferenceRepository.save(imageReference);
                    BeanUtils.copyProperties(imageRef, newRefImageList);
                    referenceImageLists.add(newRefImageList);
                }
                addConsignment.setReferenceImageList(referenceImageLists);

                //PieceDetails Update
                if (dbConsignment.getPieceDetails() != null) {
                    List<UpdatePieceDetails> savedPieceDetails = pieceDetailsService.updatePieceDetails(dbConsignment.getLanguageId(), dbConsignment.getCompanyId(), dbConsignment.getPartnerId(),
                            dbConsignment.getMasterAirwayBill(), dbConsignment.getHouseAirwayBill(), dbConsignment.getPieceDetails(), loginUserID);
                    addConsignment.setPieceDetails(savedPieceDetails);
                    BeanUtils.copyProperties(savedPieceDetails, addConsignment.getPieceDetails());
                }

                BeanUtils.copyProperties(savedConsignment, addConsignment);
                BeanUtils.copyProperties(savedConsignment.getConsignmentInfo(), addConsignment);
                BeanUtils.copyProperties(savedConsignment.getConsignmentRefs(), addConsignment);
                BeanUtils.copyProperties(savedConsignment.getDestinationDetails(), addConsignment.getDestinationDetails());
                BeanUtils.copyProperties(savedConsignment.getReturnDetails(), addConsignment.getReturnDetails());
                BeanUtils.copyProperties(savedConsignment.getOriginDetails(), addConsignment.getOriginDetails());
                addConsignmentList.add(addConsignment);

            }
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
                throw new BadRequestException(" Given values doesn't exit");
            }
            dbConsignmentEntity.setDeletionIndicator(1L);
            dbConsignmentEntity.setUpdatedBy(loginUserID);
            dbConsignmentEntity.setUpdatedOn(new Date());
            pieceDetailsService.deletePieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, loginUserID);
            consignmentEntityRepository.save(dbConsignmentEntity);
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


    // FindConsignmentEntity

    /**
     * @param findConsignment
     * @return
     */
//    public List<ReplicaAddConsignment> findReplicaFindConsignment(FindConsignment findConsignment) {
//
//        ReplicaConsignmentSpecification consignmentSpec = new ReplicaConsignmentSpecification(findConsignment);
//        ReplicaConsPieceDetailsSpecification pieceSpec = new ReplicaConsPieceDetailsSpecification(findConsignment);
//        ReplicaItemDetailsSpecification itemSpec = new ReplicaItemDetailsSpecification(findConsignment);
//        ReplicaImageReferenceSpecification imageSpec = new ReplicaImageReferenceSpecification(findConsignment);
//
//        List<ReplicaConsignmentEntity> consignmentResults = replicaConsignmentEntityRepository.findAll(consignmentSpec);
//        List<ReplicaPieceDetails> pieceResults = replicaPieceDetailsRepository.findAll(pieceSpec);
//        List<ReplicaItemDetails> itemDetailsResults = replicaItemDetailsRepository.findAll(itemSpec);
//        List<ReplicaImageReference> imageReferenceResults = replicaImageReferenceRepository.findAll(imageSpec);
//
//        List<ReplicaAddConsignment> consignmentList = new ArrayList<>();
//        for (ReplicaConsignmentEntity consignmentEntity : consignmentResults) {
//            ReplicaAddConsignment newConsignmentEntity = new ReplicaAddConsignment();
//            BeanUtils.copyProperties(consignmentEntity, newConsignmentEntity);
//            BeanUtils.copyProperties(consignmentEntity.getConsignmentInfo(), newConsignmentEntity);
//            BeanUtils.copyProperties(consignmentEntity.getConsignmentRefs(), newConsignmentEntity);
//            BeanUtils.copyProperties(consignmentEntity.getOriginDetails(), newConsignmentEntity.getOriginDetails());
//            BeanUtils.copyProperties(consignmentEntity.getDestinationDetails(), newConsignmentEntity.getDestinationDetails());
//            BeanUtils.copyProperties(consignmentEntity.getReturnDetails(), newConsignmentEntity.getReturnDetails());
//
//            List<String> referenceImageUl = imageReferenceResults.stream()
//                    .filter(image -> image.getReferenceField1() != null && image.getReferenceField1().equalsIgnoreCase("CON_ID"))
//                    .map(ReplicaImageReference::getReferenceImageUrl).toList();
//            newConsignmentEntity.setReferenceImageList(referenceImageUl);
////            List<ReplicaImageReference> filteredImageReference = imageReferenceResults.stream().filter(image -> image.getReferenceField1().equalsIgnoreCase("CON_ID")).collect(Collectors.toList());
////            List<String> imageList = new ArrayList<>();
////            for(ReplicaImageReference imageUrl : filteredImageReference){
////                imageList.add(imageUrl.getReferenceImageUrl());
////            }
////            newConsignmentEntity.setReferenceImageList(imageList);
//
//
//            List<ReplicaAddPieceDetails> filteredPieceDetails = pieceResults.stream()
//                    .filter(piece -> piece.getConsignmentId().equals(consignmentEntity.getConsignmentId()))
//                    .map(piece -> {
//                        ReplicaAddPieceDetails pieceDetail = new ReplicaAddPieceDetails();
//                        BeanUtils.copyProperties(piece, pieceDetail);
//
//                        // Filtering and mapping image references to a list of URLs
//                        List<String> imageRef = imageReferenceResults.stream()
//                                .filter(image -> image != null && image.getPieceId() != null && image.getPieceId().equals(piece.getPieceId()) &&
//                                        image.getReferenceField1().equalsIgnoreCase("P_ID"))
//                                .map(ReplicaImageReference::getReferenceImageUrl)
//                                .collect(Collectors.toList());
//
//                        // Filtering item details
//                        List<ReplicaAddItemDetails> filteredItemDetails = itemDetailsResults.stream()
//                                .filter(item -> item != null && item.getPieceId() != null && item.getPieceId().equals(piece.getPieceId()))
//                                .map(item -> {
//                                    ReplicaAddItemDetails itemDetails = new ReplicaAddItemDetails();
//                                    BeanUtils.copyProperties(item, itemDetails);
//
//                                    //Filtering and mapping image reference to list of urls
//                                    List<String> imageRefe = imageReferenceResults.stream().filter(image -> image.getReferenceField1() != null &&
//                                            image.getReferenceField1().equalsIgnoreCase("PI_ID"))
//                                            .map(ReplicaImageReference::getReferenceImageUrl).collect(Collectors.toList());
//                                    itemDetails.setReferenceImageList(imageRefe);
//                                    return itemDetails;
//                                })
//                                .collect(Collectors.toList());
//
//                        pieceDetail.setReferenceImageList(imageRef);
//                        pieceDetail.setItemDetails(filteredItemDetails);
//                        return pieceDetail;
//                    })
//                    .collect(Collectors.toList());
//
//            newConsignmentEntity.setPieceDetails(filteredPieceDetails);
//            consignmentList.add(newConsignmentEntity);
//        }
//        return consignmentList;
//    }


//    public List<ReplicaAddConsignment> findReplicaFindConsignment(FindConsignment findConsignment) {
//
//        ReplicaConsignmentSpecification consignmentSpec = new ReplicaConsignmentSpecification(findConsignment);
//        ReplicaConsPieceDetailsSpecification pieceSpec = new ReplicaConsPieceDetailsSpecification(findConsignment);
//        ReplicaItemDetailsSpecification itemSpec = new ReplicaItemDetailsSpecification(findConsignment);
//        ReplicaImageReferenceSpecification imageSpec = new ReplicaImageReferenceSpecification(findConsignment);
//
//        List<ReplicaConsignmentEntity> consignmentResults = replicaConsignmentEntityRepository.findAll(consignmentSpec);
//        List<ReplicaPieceDetails> pieceResults = replicaPieceDetailsRepository.findAll(pieceSpec);
//        List<ReplicaItemDetails> itemDetailsResults = replicaItemDetailsRepository.findAll(itemSpec);
//        List<ReplicaImageReference> imageReferenceResults = replicaImageReferenceRepository.findAll(imageSpec);
//
//        // Pre-filter image references into a map
//        Map<String, List<String>> imageRefMap = imageReferenceResults.stream()
//                .filter(image -> image != null && image.getReferenceField1() != null)
//                .collect(Collectors.groupingBy(
//                        ReplicaImageReference::getReferenceField1,
//                        Collectors.mapping(ReplicaImageReference::getReferenceImageUrl, Collectors.toList())
//                ));
//
//        // Pre-filter item details into a map
//        Map<String, List<ReplicaItemDetails>> itemDetailsMap = itemDetailsResults.stream()
//                .filter(item -> item != null && item.getPieceId() != null)
//                .collect(Collectors.groupingBy(ReplicaItemDetails::getPieceId));
//
//        List<ReplicaAddConsignment> consignmentList = consignmentResults.stream().parallel().map(consignmentEntity -> {
//            ReplicaAddConsignment newConsignmentEntity = new ReplicaAddConsignment();
//            BeanUtils.copyProperties(consignmentEntity, newConsignmentEntity);
//            BeanUtils.copyProperties(consignmentEntity.getConsignmentInfo(), newConsignmentEntity);
//            BeanUtils.copyProperties(consignmentEntity.getConsignmentRefs(), newConsignmentEntity);
//            BeanUtils.copyProperties(consignmentEntity.getOriginDetails(), newConsignmentEntity.getOriginDetails());
//            BeanUtils.copyProperties(consignmentEntity.getDestinationDetails(), newConsignmentEntity.getDestinationDetails());
//            BeanUtils.copyProperties(consignmentEntity.getReturnDetails(), newConsignmentEntity.getReturnDetails());
//
//            List<String> referenceImageUl = imageRefMap.getOrDefault("CON_ID", List.of());
//            newConsignmentEntity.setReferenceImageList(referenceImageUl);
//
//            List<ReplicaAddPieceDetails> filteredPieceDetails = pieceResults.stream().parallel()
//                    .filter(piece -> piece.getConsignmentId().equals(consignmentEntity.getConsignmentId()))
//                    .map(piece -> {
//                        ReplicaAddPieceDetails pieceDetail = new ReplicaAddPieceDetails();
//                        BeanUtils.copyProperties(piece, pieceDetail);
//
//                        List<String> imageRef = imageReferenceResults.stream()
//                                .filter(image -> image != null && image.getPieceId() != null && image.getPieceId().equals(piece.getPieceId()) &&
//                                        image.getReferenceField1().equalsIgnoreCase("P_ID"))
//                                .map(ReplicaImageReference::getReferenceImageUrl)
//                                .collect(Collectors.toList());
//
//                        List<ReplicaAddItemDetails> filteredItemDetails = itemDetailsMap.getOrDefault(piece.getPieceId(), List.of()).stream().parallel()
//                                .map(item -> {
//                                    ReplicaAddItemDetails itemDetails = new ReplicaAddItemDetails();
//                                    BeanUtils.copyProperties(item, itemDetails);
//
//                                    List<String> imageRefe = imageRefMap.getOrDefault("PI_ID", List.of());
//                                    itemDetails.setReferenceImageList(imageRefe);
//                                    return itemDetails;
//                                })
//                                .collect(Collectors.toList());
//
//                        pieceDetail.setReferenceImageList(imageRef);
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
            BeanUtils.copyProperties(consignmentEntity, newConsignmentEntity);
            BeanUtils.copyProperties(consignmentEntity.getConsignmentInfo(), newConsignmentEntity);
            BeanUtils.copyProperties(consignmentEntity.getConsignmentRefs(), newConsignmentEntity);
            BeanUtils.copyProperties(consignmentEntity.getOriginDetails(), newConsignmentEntity.getOriginDetails());
            BeanUtils.copyProperties(consignmentEntity.getDestinationDetails(), newConsignmentEntity.getDestinationDetails());
            BeanUtils.copyProperties(consignmentEntity.getReturnDetails(), newConsignmentEntity.getReturnDetails());

            List<ReplicaImageReference> referenceImageUl = imageReferenceResults.stream().filter(imageRef -> imageRef != null &&
                            imageRef.getConsignmentId() != null &&
                            imageRef.getConsignmentId().equals(consignmentEntity.getConsignmentId()) &&
                            imageRef.getReferenceField1().equalsIgnoreCase("CON_ID"))
//                    .map(ReplicaImageReference::getReferenceImageUrl)
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
//                                .map(ReplicaImageReference::getReferenceImageUrl)
                                .collect(Collectors.toList());

                        List<ReferenceImageList> imageLists = new ArrayList<>();
                        for (ReplicaImageReference imageReference : imageRef) {
                            ReferenceImageList imageList = new ReferenceImageList();
                            imageList.setImageRefId(imageReference.getImageRefId());
                            imageList.setReferenceImageUrl(imageReference.getReferenceImageUrl());
                            imageList.setPdfUrl(imageReference.getReferenceField2());

                            imageLists.add(imageList);

                        }

                        // Use parallelStream for processing item details
                        List<ReplicaAddItemDetails> filteredItemDetails = itemDetailsResults.parallelStream()
                                .filter(item -> item.getPieceId().equals(piece.getPieceId()))
                                .map(item -> {
                                    ReplicaAddItemDetails itemDetails = new ReplicaAddItemDetails();
                                    BeanUtils.copyProperties(item, itemDetails);

                                    List<ReplicaImageReference> imageRefe = imageReferenceResults.stream()
                                            .filter(image -> image != null && image.getPieceItemId() != null && image.getPieceItemId().equals(item.getPieceItemId()) &&
                                                    image.getReferenceField1().equalsIgnoreCase("PI_ID"))
//                                .map(ReplicaImageReference::getReferenceImageUrl)
                                            .collect(Collectors.toList());

                                    List<ReferenceImageList> imageRe = new ArrayList<>();
                                    for (ReplicaImageReference imageReference : imageRefe) {
                                        ReferenceImageList imageList = new ReferenceImageList();
                                        imageList.setImageRefId(imageReference.getImageRefId());
                                        imageList.setReferenceImageUrl(imageReference.getReferenceImageUrl());
                                        imageList.setPdfUrl(imageReference.getReferenceField2());

                                        imageRe.add(imageList);

                                    }
                                    itemDetails.setReferenceImageList(imageRe);

                                    return itemDetails;
                                })
                                .collect(Collectors.toList());

                        pieceDetail.setReferenceImageList(imageLists);
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
package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.ReferenceImageList;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
import com.courier.overc360.api.midmile.primary.model.itemdetails.AddItemDetails;
import com.courier.overc360.api.midmile.primary.model.itemdetails.ItemDetails;
import com.courier.overc360.api.midmile.primary.model.itemdetails.UpdateItemDetails;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.repository.ImageReferenceRepository;
import com.courier.overc360.api.midmile.primary.repository.ItemDetailsRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.consignment.FindConsignment;
import com.courier.overc360.api.midmile.replica.model.itemdetails.FindItemDetails;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaItemDetails;
import com.courier.overc360.api.midmile.replica.repository.ReplicaItemDetailsRepository;
import com.courier.overc360.api.midmile.replica.repository.specification.ReplicaItemDetailsSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ItemDetailsService {

    @Autowired
    private ItemDetailsRepository itemDetailsRepository;

    @Autowired
    private ReplicaItemDetailsRepository replicaItemDetailsRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    @Autowired
    private ImageReferenceService imageReferenceService;

    @Autowired
    private ImageReferenceRepository imageReferenceRepository;

    @Autowired
    CommonService commonService;

    /*--------------------------------------------------------PRIMARY------------------------------------------------------------------------*/

    /**
     * Get ItemDetails
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param pieceItemId
     * @return
     */
    public ItemDetails getItemDetails(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                      String houseAirwayBill, String pieceId, String pieceItemId) {
        Optional<ItemDetails> dbItemDetails = itemDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId, 0L);
        if (dbItemDetails.isEmpty()) {
            // Error Log
            createItemDetailsLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId,
                    "The given values - LanguageId: " + languageId + ", CompanyId: " + companyId + ", PartnerId: " + partnerId +
                            ", MasterAirwayBill: " + masterAirwayBill + ",HouseAirwayBill: " + houseAirwayBill +
                            ", PieceId: " + pieceId + " and PieceItemId: " + pieceItemId + " and doesn't exists");

            throw new BadRequestException("The given values - LanguageId: " + languageId + ", CompanyId: " + companyId + ", PartnerId: "
                    + partnerId + ", MasterAirwayBill: " + masterAirwayBill + ", HouseAirwayBill: " + houseAirwayBill + ", PieceId: " + pieceId +
                    " and PieceItemId: " + pieceItemId + " and doesn't exists");
        }
        return dbItemDetails.get();
    }

//    /**
//     * Create ItemDetails
//     *
//     * @param addItemDetails
//     * @param loginUserID
//     * @return
//     * @throws IllegalAccessException
//     * @throws InvocationTargetException
//     */
//    @Transactional
//    public ItemDetails createItemDetails(AddItemDetails addItemDetails, String loginUserID)
//            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
//        try {
//            Optional<ItemDetails> duplicateItemDetails = itemDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
//                    addItemDetails.getLanguageId(), addItemDetails.getCompanyId(), addItemDetails.getPartnerId(),
//                    addItemDetails.getMasterAirwayBill(), addItemDetails.getHouseAirwayBill(), addItemDetails.getPieceId(),
//                    addItemDetails.getPieceItemId(), 0L);
//
//            if (duplicateItemDetails.isPresent()) {
//                throw new BadRequestException("Record is getting Duplicated with the given values : pieceItemId -" + addItemDetails.getPieceItemId());
//            } else {
//                log.info("new ItemDetails --> " + addItemDetails);
//                IKeyValuePair iKeyValuePair = itemDetailsRepository.getDescription(addItemDetails.getLanguageId(), addItemDetails.getCompanyId());
//                ItemDetails newItemDetails = new ItemDetails();
//                BeanUtils.copyProperties(addItemDetails, newItemDetails, CommonUtils.getNullPropertyNames(addItemDetails));
//                if (addItemDetails.getPieceItemId() == null || addItemDetails.getPieceItemId().isBlank()) {
//                    String NUM_RAN_OBJ = "ITEMDETAILS";
//                    String PIECE_ITEM_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
//                    log.info("next Value from NumberRange for PIECE_ITEM_ID : " + PIECE_ITEM_ID);
//                    newItemDetails.setPieceItemId(PIECE_ITEM_ID);
//                }
//                if (iKeyValuePair != null) {
//                    newItemDetails.setLanguageDescription(iKeyValuePair.getLangDesc());
//                    newItemDetails.setCompanyName(iKeyValuePair.getCompanyDesc());
//                }
//                newItemDetails.setDeletionIndicator(0L);
//                newItemDetails.setCreatedBy(loginUserID);
//                newItemDetails.setCreatedOn(new Date());
//                newItemDetails.setUpdatedBy(loginUserID);
//                newItemDetails.setUpdatedOn(new Date());
//                return itemDetailsRepository.save(newItemDetails);
//            }
//        } catch (Exception e) {
//            // Error Log
//            createItemDetailsLog2(addItemDetails, e.toString());
//            e.printStackTrace();
//            throw new RuntimeException(e);
//        }
//    }

    /**
     * Update ItemDetails
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param pieceItemId
     * @param loginUserID
     * @param updateItemDetails
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     */
    @Transactional
    public ItemDetails updateItemDetails(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                         String houseAirwayBill, String pieceId, String pieceItemId,
                                         String loginUserID, UpdateItemDetails updateItemDetails)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            ItemDetails dbItemDetails = getItemDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId);
            BeanUtils.copyProperties(updateItemDetails, dbItemDetails, CommonUtils.getNullPropertyNames(updateItemDetails));
            dbItemDetails.setUpdatedBy(loginUserID);
            dbItemDetails.setUpdatedOn(new Date());
            return itemDetailsRepository.save(dbItemDetails);
        } catch (Exception e) {
            // Error Log
            createItemDetailsLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }


    /**
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param loginUserID
     * @param updateItemDetails
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public List<UpdateItemDetails> updateItemDetails(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                                     String houseAirwayBill, String pieceId, String loginUserID, List<UpdateItemDetails> updateItemDetails)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<UpdateItemDetails> itemDetailsList = new ArrayList<>();
        try {
            for (UpdateItemDetails itemDetails : updateItemDetails) {
                UpdateItemDetails newItemDetails = new UpdateItemDetails();
                ItemDetails dbItemDetails = getItemDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, itemDetails.getPieceItemId());
                BeanUtils.copyProperties(updateItemDetails, dbItemDetails, CommonUtils.getNullPropertyNames(updateItemDetails));
                dbItemDetails.setUpdatedBy(loginUserID);
                dbItemDetails.setUpdatedOn(new Date());
                ItemDetails savedItemDetails = itemDetailsRepository.save(dbItemDetails);

                //Update ReferenceImage
                List<ReferenceImageList> referenceImageLists = new ArrayList<>();
                if (itemDetails.getReferenceImageList() != null && !itemDetails.getReferenceImageList().isEmpty()) {
                    for (ReferenceImageList image : itemDetails.getReferenceImageList()) {

                        ReferenceImageList newRefImageList = new ReferenceImageList();
                        String downloadDocument = commonService.downLoadDocument(image.getReferenceImageUrl(), "document", "image");
                        ImageReference imageReferenceRecord = imageReferenceRepository.findByImageRefIdAndDeletionIndicator(image.getImageRefId(), 0L);
                        if (imageReferenceRecord == null) {
                            throw new BadRequestException(" ImageReferenceId doesn't exist" + image.getImageRefId());
                        }

                        imageReferenceRecord.setReferenceImageUrl(image.getReferenceImageUrl());
                        imageReferenceRecord.setReferenceField2(downloadDocument);
                        imageReferenceRecord.setDeletionIndicator(0L);
                        imageReferenceRecord.setUpdatedBy(loginUserID);
                        imageReferenceRecord.setUpdatedOn(new Date());
                        ImageReference imageRef = imageReferenceRepository.save(imageReferenceRecord);
                        BeanUtils.copyProperties(imageRef, newRefImageList);
                        referenceImageLists.add(newRefImageList);
                    }
                }
                newItemDetails.setReferenceImageList(referenceImageLists);

                BeanUtils.copyProperties(savedItemDetails, newItemDetails);
                itemDetailsList.add(newItemDetails);
            }
        } catch (Exception e) {
            // Error Log
            createItemDetailsLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        return itemDetailsList;
    }

    /**
     * Delete ItemDetails
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param pieceItemId
     * @param loginUserID
     */
    public void deleteItemDetails(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                  String houseAirwayBill, String pieceId, String pieceItemId, String loginUserID) {
        ItemDetails dbItemDetails = getItemDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId);
        if (dbItemDetails != null) {
            dbItemDetails.setDeletionIndicator(1L);
            dbItemDetails.setUpdatedBy(loginUserID);
            dbItemDetails.setUpdatedOn(new Date());
            // MultipleImage
            imageReferenceService.deleteImageReference(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId, loginUserID);
            itemDetailsRepository.save(dbItemDetails);
        } else {
            // Error Log
            createItemDetailsLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId, "Error in deleting PieceItemId - " + pieceItemId);
            throw new BadRequestException("Error in deleting PieceItemId - " + pieceItemId);
        }
    }

    /**
     * Delete ItemDetails
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param loginUserID
     */
    public void deleteItemDetails(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                  String houseAirwayBill, String pieceId, String loginUserID) {
        List<ItemDetails> dbItemDetails = itemDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndDeletionIndicator(
                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, 0L);
        if (dbItemDetails != null) {
            for (ItemDetails itemDetails : dbItemDetails) {
                itemDetails.setDeletionIndicator(1L);
                itemDetails.setUpdatedBy(loginUserID);
                itemDetails.setUpdatedOn(new Date());

                //MultipleImage
                imageReferenceRepository.updateImageTable(itemDetails.getCompanyId(), itemDetails.getLanguageId(), itemDetails.getPartnerId(),
                        itemDetails.getHouseAirwayBill(), itemDetails.getMasterAirwayBill(), itemDetails.getPieceId(), loginUserID);
                itemDetailsRepository.save(itemDetails);
            }
        } else {
            // Error Log
            createItemDetailsLog3(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, "Error in deleting ItemId " );
            throw new BadRequestException("Error in deleting PieceId - " + pieceId);
        }
    }


    /**
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param loginUserID
     */
    public void deleteItemDetails(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String loginUserID) {

        List<ItemDetails> itemDetails = itemDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, 0L);

        if (itemDetails != null && !itemDetails.isEmpty()) {
            for (ItemDetails dbItemDetails : itemDetails) {
                if (dbItemDetails != null) {
                    dbItemDetails.setDeletionIndicator(1L);
                    dbItemDetails.setUpdatedBy(loginUserID);
                    dbItemDetails.setUpdatedOn(new Date());
                    //MultipleImage
                    imageReferenceRepository.updateImageTable(companyId, languageId, partnerId, houseAirwayBill, masterAirwayBill, loginUserID);
                    itemDetailsRepository.save(dbItemDetails);
                }
            }
        } else {
            for (ItemDetails details : itemDetails) {
                createItemDetailsLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill,
                        details.getPieceId(), details.getPieceItemId(), "Error deleting ItemId ");
            }
        }


    }
    /*======================================================REPLICA=====================================================*/

    /**
     * Get All ItemDetails
     *
     * @return
     */
    public List<ReplicaItemDetails> getAllItemDetails() {
        List<ReplicaItemDetails> itemDetailsList = replicaItemDetailsRepository.findAll();
        itemDetailsList = itemDetailsList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return itemDetailsList;
    }

    /**
     * Get Item Details
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param pieceItemId
     * @return
     */
    public ReplicaItemDetails replicaGetItemDetails(String languageId, String companyId, String partnerId, String
            masterAirwayBill, String houseAirwayBill, String pieceId, String pieceItemId) {
        Optional<ReplicaItemDetails> dbItemDetails = replicaItemDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId, 0L);
        if (dbItemDetails.isEmpty()) {
            throw new BadRequestException("The given values - LanguageId: " + languageId + ", CompanyId: " + companyId + ", PartnerId: "
                    + partnerId + ", MasterAirwayBill: " + masterAirwayBill + ", HouseAirwayBill: " + houseAirwayBill + ", PieceId: " + pieceId + "and PieceItemId: " + pieceItemId + " doesn't exists");
        }
        return dbItemDetails.get();
    }

    /**
     * for PreAlertManifest
     * @param languageId
     * @param companyId
     * @param pieceId
     * @return
     */
    public List<ReplicaItemDetails> replicaGetItemDetails(String languageId, String companyId, String pieceId) {
        List<ReplicaItemDetails> dbItemDetails = replicaItemDetailsRepository.findByLanguageIdAndCompanyIdAndPieceIdAndDeletionIndicator(
                languageId, companyId, pieceId, 0L);
        if (dbItemDetails.isEmpty()) {
            throw new BadRequestException("The given values - LanguageId: " + languageId + ", CompanyId: " + companyId + ", PieceId: " + pieceId + " doesn't exists");
        }
        return dbItemDetails;
    }

    /**
     * Find ItemDetails
     *
     * @param findItemDetails
     * @return
     */
    public List<ReplicaItemDetails> findItemDetails(FindConsignment findItemDetails) {

        ReplicaItemDetailsSpecification spec = new ReplicaItemDetailsSpecification(findItemDetails);
        List<ReplicaItemDetails> results = replicaItemDetailsRepository.findAll(spec);
        log.info("found Cities --> " + results);
        return results;
    }


    //=============================================ItemDetails_ErrorLog=======================================================
    private void createItemDetailsLog(String languageId, String companyId, String partnerId, String
            masterAirwayBill, String houseAirwayBill, String pieceId, String pieceItemId,
                                      String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(pieceItemId);
        errorLog.setReferenceField1(partnerId);
        errorLog.setReferenceField2(masterAirwayBill);
        errorLog.setReferenceField3(houseAirwayBill);
        errorLog.setReferenceField4(pieceId);
        errorLog.setMethod("Exception thrown in updateItemDetails");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    /**
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param pieceItemId
     * @param error
     */
    private void createItemDetailsLog1(String languageId, String companyId, String partnerId, String
            masterAirwayBill, String houseAirwayBill, String pieceId, String pieceItemId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(pieceItemId);
        errorLog.setReferenceField1(partnerId);
        errorLog.setReferenceField2(masterAirwayBill);
        errorLog.setReferenceField3(houseAirwayBill);
        errorLog.setReferenceField4(pieceId);
        errorLog.setMethod("Exception thrown in getItemDetails");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

//    private void createItemDetailsLog2(AddItemDetails addItemDetails, String error) throws IOException, CsvException {
//
//        List<ErrorLog> errorLogList = new ArrayList<>();
//        ErrorLog errorLog = new ErrorLog();
//        errorLog.setLogDate(new Date());
//        errorLog.setLanguageId(addItemDetails.getLanguageId());
//        errorLog.setCompanyId(addItemDetails.getCompanyId());
//        errorLog.setRefDocNumber(addItemDetails.getPieceItemId());
//        errorLog.setReferenceField1(addItemDetails.getPieceId());
//        errorLog.setReferenceField2(addItemDetails.getPartnerId());
//        errorLog.setReferenceField3(addItemDetails.getMasterAirwayBill());
//        errorLog.setReferenceField4(addItemDetails.getHouseAirwayBill());
//        errorLog.setMethod("Exception thrown in createItemDetails");
//        errorLog.setErrorMessage(error);
//        errorLog.setCreatedBy("Admin");
//        errorLogRepository.save(errorLog);
//        errorLogList.add(errorLog);
//        errorLogService.writeLog(errorLogList);
//    }

    /**
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param error
     */
    private void createItemDetailsLog3(String languageId, String companyId, String partnerId, String
            masterAirwayBill, String houseAirwayBill, String pieceId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(pieceId);
        errorLog.setReferenceField1(partnerId);
        errorLog.setReferenceField2(masterAirwayBill);
        errorLog.setReferenceField3(houseAirwayBill);
        errorLog.setReferenceField4(pieceId);
        errorLog.setMethod("Exception thrown in getItemDetails");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }


    /**
     * @param companyId
     * @param languageId
     * @param companyName
     * @param languageName
     * @param partnerName
     * @param houseAirwayBill
     * @param masterAirwayBill
     * @param pieceId
     * @param partnerId
     * @param addItemDetailsList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public List<AddItemDetails> createItemDetailsList(String companyId, String languageId, String companyName, String languageName,
                                                      String partnerName, String houseAirwayBill, String masterAirwayBill,
                                                      String pieceId, String partnerId, List<AddItemDetails> addItemDetailsList,
                                                      Long consignmentId, String partnerHawBill, String hsCode, String partnerMawBill,
                                                      String width, String height, String weightUnit, String volume, String codAmount, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<AddItemDetails> itemDetailsList = new ArrayList<>();
        try {
            Long itemDetails = 1L;
            if (addItemDetailsList != null && !addItemDetailsList.isEmpty()) {
                for (AddItemDetails addItemDetails : addItemDetailsList) {
                    Optional<ItemDetails> duplicateItemDetails =
                            itemDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
                                    languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, addItemDetails.getPieceItemId(), 0L);

                    if (duplicateItemDetails.isPresent()) {
                        throw new BadRequestException("Record is getting Duplicated with the given values : pieceItemId -" + addItemDetails.getPieceItemId());
                    } else {

                        String PIECE_ITEM_ID = pieceId + String.format("%03d", itemDetails++);
                        ItemDetails newItemDetails = new ItemDetails();
//                    String PIECE_ITEM_ID = pieceId + "01";
                        BeanUtils.copyProperties(addItemDetails, newItemDetails, CommonUtils.getNullPropertyNames(addItemDetails));
                        newItemDetails.setPieceItemId(PIECE_ITEM_ID);
                        newItemDetails.setCompanyId(companyId);
                        newItemDetails.setLanguageId(languageId);
                        newItemDetails.setPartnerId(partnerId);
                        newItemDetails.setPieceId(pieceId);
                        newItemDetails.setHouseAirwayBill(houseAirwayBill);
                        newItemDetails.setMasterAirwayBill(masterAirwayBill);
                        newItemDetails.setCompanyName(companyName);
                        newItemDetails.setLanguageDescription(languageName);
                        newItemDetails.setPartnerName(partnerName);
                        newItemDetails.setPartnerHouseAirwayBill(partnerHawBill);
                        newItemDetails.setPartnerMasterAirwayBill(partnerMawBill);
                        newItemDetails.setConsignmentId(consignmentId);

                        if (addItemDetails.getHsCode() == null && hsCode != null) {
                            newItemDetails.setHsCode(hsCode);
                        }
                        //ImageReference Created
                        List<ReferenceImageList> imageReferenceList = new ArrayList<>();
                        if (addItemDetails.getReferenceImageList() != null) {
                            for (ReferenceImageList imageReference : addItemDetails.getReferenceImageList()) {
                                //CommonService
                                String downloadDocument = commonService.downLoadDocument(imageReference.getReferenceImageUrl(), "document", "image");
                                if (downloadDocument != null) {
                                    ImageReference dbImage = imageReferenceService.createImageReference(languageId, companyId, partnerId,
                                            partnerName, houseAirwayBill, masterAirwayBill, partnerHawBill, partnerMawBill, null, pieceId,
                                            PIECE_ITEM_ID, imageReference.getReferenceImageUrl(), "PI_ID", downloadDocument, loginUserID);

                                    //ReferenceImage Set
                                    ReferenceImageList newImage = new ReferenceImageList();
                                    newImage.setImageRefId(dbImage.getImageRefId());
                                    newImage.setReferenceImageUrl(dbImage.getReferenceImageUrl());
                                    newImage.setPdfUrl(dbImage.getReferenceField2());

                                    imageReferenceList.add(newImage);
                                }
                            }
                        }

                        newItemDetails.setDeletionIndicator(0L);
                        newItemDetails.setCreatedBy(loginUserID);
                        newItemDetails.setCreatedOn(new Date());
                        newItemDetails.setUpdatedBy(null);
                        newItemDetails.setUpdatedOn(null);
                        AddItemDetails newAddItemDetails = new AddItemDetails();
                        ItemDetails savedItemDetails = itemDetailsRepository.save(newItemDetails);
                        BeanUtils.copyProperties(savedItemDetails, newAddItemDetails);
                        newAddItemDetails.setReferenceImageList(imageReferenceList);
                        itemDetailsList.add(newAddItemDetails);
                    }
                }
            } else {
                String PIECE_ITEM_ID = pieceId + String.format("%03d", itemDetails++);
                ItemDetails newItemDetails = new ItemDetails();
                newItemDetails.setPieceItemId(PIECE_ITEM_ID);
                newItemDetails.setCompanyId(companyId);
                newItemDetails.setLanguageId(languageId);
                newItemDetails.setPartnerId(partnerId);
                newItemDetails.setPieceId(pieceId);
                newItemDetails.setHouseAirwayBill(houseAirwayBill);
                newItemDetails.setMasterAirwayBill(masterAirwayBill);
                newItemDetails.setCompanyName(companyName);
                newItemDetails.setLanguageDescription(languageName);
                newItemDetails.setPartnerName(partnerName);
                newItemDetails.setPartnerHouseAirwayBill(partnerHawBill);
                newItemDetails.setPartnerMasterAirwayBill(partnerMawBill);
                newItemDetails.setConsignmentId(consignmentId);
                newItemDetails.setHsCode(hsCode);
                newItemDetails.setHeight(height);
                newItemDetails.setWidth(width);
                newItemDetails.setVolume(volume);
                newItemDetails.setCodAmount(codAmount);
                newItemDetails.setWeightUnit(weightUnit);
                newItemDetails.setDeletionIndicator(0L);
                newItemDetails.setCreatedBy(loginUserID);
                newItemDetails.setCreatedOn(new Date());
                newItemDetails.setUpdatedBy(null);
                newItemDetails.setUpdatedOn(null);

                AddItemDetails newAddItemDetails = new AddItemDetails();
                ItemDetails savedItemDetails = itemDetailsRepository.save(newItemDetails);
                BeanUtils.copyProperties(savedItemDetails, newAddItemDetails);
                itemDetailsList.add(newAddItemDetails);
            }
        } catch (Exception e) {
            // Error Log
            for (AddItemDetails itemDetails : addItemDetailsList) {
//                createItemDetailsLog2(itemDetails, e.toString());
                e.printStackTrace();
                throw new RuntimeException(e);
            }
        }
        return itemDetailsList;
    }

}


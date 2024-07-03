package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.ReferenceImageList;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
import com.courier.overc360.api.midmile.primary.model.itemdetails.AddItemDetails;
import com.courier.overc360.api.midmile.primary.model.itemdetails.ItemDetails;
import com.courier.overc360.api.midmile.primary.model.itemdetails.UpdateItemDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.AddPieceDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.PieceDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.UpdatePieceDetails;
import com.courier.overc360.api.midmile.primary.repository.ConsignmentEntityRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.repository.ImageReferenceRepository;
import com.courier.overc360.api.midmile.primary.repository.PieceDetailsRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.piecedetails.FindPieceDetails;
import com.courier.overc360.api.midmile.replica.model.piecedetails.ReplicaPieceDetails;
import com.courier.overc360.api.midmile.replica.repository.ReplicaPieceDetailsRepository;
import com.courier.overc360.api.midmile.replica.repository.specification.ReplicaPieceDetailsSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
public class PieceDetailsService {

    @Autowired
    private PieceDetailsRepository pieceDetailsRepository;

    @Autowired
    private ReplicaPieceDetailsRepository replicaPieceDetailsRepository;

    @Autowired
    private ConsignmentEntityRepository consignmentEntityRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    @Autowired
    ItemDetailsService itemDetailsService;

    @Autowired
    ImageReferenceService imageReferenceService;

    @Autowired
    ImageReferenceRepository imageReferenceRepository;

    @Autowired
    CommonService commonService;
    /*======================================================PRIMARY=============================================================*/

    /**
     * Get
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @return
     */
    public PieceDetails getPieceDetails(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                        String houseAirwayBill, String pieceId) {

        Optional<PieceDetails> dbPieceDetails = pieceDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndDeletionIndicator
                (languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, 0l);

        if (dbPieceDetails.isEmpty()) {
            // Error Log
            createPieceDetailsLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, "The given values : languageId - " + languageId +
                    ", companyId - " + companyId + " , partnerId - " + partnerId + ", MasterAirwayBill: " + masterAirwayBill +
                    ", HouseAirwayBill: " + houseAirwayBill + " and PieceId: " + pieceId + "  doesn't exists");
            throw new BadRequestException("The given values - LanguageId: " + languageId + ", CompanyId: " + companyId + ", PartnerId: "
                    + partnerId + ", MasterAirwayBill: " + masterAirwayBill + ", HouseAirwayBill: " + houseAirwayBill + " and PieceId: " + pieceId + "  doesn't exists");
        }
        return dbPieceDetails.get();
    }

    /**
     * Create
     *
     * @param addPieceDetails
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public PieceDetails createPieceDetails(AddPieceDetails addPieceDetails, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {

            Optional<PieceDetails> duplicatePieceDetails = pieceDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndDeletionIndicator
                    (addPieceDetails.getLanguageId(), addPieceDetails.getCompanyId(), addPieceDetails.getPartnerId(),
                            addPieceDetails.getMasterAirwayBill(), addPieceDetails.getHouseAirwayBill(), addPieceDetails.getPieceId(), 0l);

            if (duplicatePieceDetails.isPresent()) {
                throw new BadRequestException("Record is getting Duplicated with the given values : pieceId - " + addPieceDetails.getPieceId());
            } else {
                log.info("new PieceDetails --> " + addPieceDetails);
                IKeyValuePair iKeyValuePair = replicaPieceDetailsRepository.getDescription(
                        addPieceDetails.getLanguageId(), addPieceDetails.getCompanyId());

                PieceDetails newPieceDetails = new PieceDetails();
                BeanUtils.copyProperties(addPieceDetails, newPieceDetails, CommonUtils.getNullPropertyNames(addPieceDetails));
                if (addPieceDetails.getPieceId() == null || addPieceDetails.getPieceId().isBlank()) {
                    String NUM_RAN_OBJ = "PIECEDETAILS";
                    String PIECE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for PIECE_ID : " + PIECE_ID);
                    newPieceDetails.setPieceId(PIECE_ID);
                }
                if (iKeyValuePair != null) {
                    newPieceDetails.setLanguageDescription(iKeyValuePair.getLangDesc());
                    newPieceDetails.setCompanyName(iKeyValuePair.getCompanyDesc());
                }

                newPieceDetails.setDeletionIndicator(0L);
                newPieceDetails.setCreatedBy(loginUserID);
                newPieceDetails.setCreatedOn(new Date());
                newPieceDetails.setUpdatedBy(loginUserID);
                newPieceDetails.setUpdatedOn(new Date());
                return pieceDetailsRepository.save(newPieceDetails);
            }
        } catch (Exception e) {
            // Error Log
            createPieceDetailsLog2(addPieceDetails, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Create
     *
     * @param addPieceDetailsList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public List<AddPieceDetails> createPieceDetailsList(String companyId, String languageId, String partnerId, String masterAirwayBill,
                                                        String houseAirwayBill, String companyName, String languageName, String partnerName,
                                                        Long consignmentId, String partnerHawBill, String partnerMawBill, List<AddPieceDetails> addPieceDetailsList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<AddPieceDetails> pieceDetailsList = new ArrayList<>();
        try {
            Long pieceCounter = 1L;
            if (addPieceDetailsList != null && !addPieceDetailsList.isEmpty()) {
                for (AddPieceDetails addPieceDetails : addPieceDetailsList) {
                    Optional<PieceDetails> duplicatePieceDetails =
                            pieceDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndDeletionIndicator(
                                    languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, addPieceDetails.getPieceId(), 0l);

                    if (duplicatePieceDetails.isPresent()) {
                        throw new BadRequestException("Record is getting Duplicated with the given values : pieceId - " + addPieceDetails.getPieceId());
                    } else {

                        String PIECE_ID = houseAirwayBill + String.format("%03d", pieceCounter++);
//                    String PIECE_ID = houseAirwayBill + "001";
                        PieceDetails newPieceDetails = new PieceDetails();
                        BeanUtils.copyProperties(addPieceDetails, newPieceDetails, CommonUtils.getNullPropertyNames(addPieceDetails));

                        newPieceDetails.setPieceId(PIECE_ID);
                        newPieceDetails.setCompanyId(companyId);
                        newPieceDetails.setLanguageId(languageId);
                        newPieceDetails.setPartnerId(partnerId);
                        newPieceDetails.setHouseAirwayBill(houseAirwayBill);
                        newPieceDetails.setMasterAirwayBill(masterAirwayBill);
                        newPieceDetails.setPartnerHouseAirwayBill(partnerHawBill);
                        newPieceDetails.setPartnerMasterAirwayBill(partnerMawBill);
                        newPieceDetails.setCompanyName(companyName);
                        newPieceDetails.setLanguageDescription(languageName);
                        newPieceDetails.setPartnerName(partnerName);
                        newPieceDetails.setConsignmentId(consignmentId);
                        newPieceDetails.setDeletionIndicator(0L);
                        newPieceDetails.setCreatedBy(loginUserID);
                        newPieceDetails.setCreatedOn(new Date());
                        newPieceDetails.setUpdatedBy(loginUserID);
                        newPieceDetails.setUpdatedOn(new Date());

                        //ItemDetails Create
                        List<AddItemDetails> itemDetails = itemDetailsService.createItemDetailsList(companyId, languageId,
                                companyName, languageName, partnerName, houseAirwayBill, masterAirwayBill,
                                PIECE_ID, partnerId, addPieceDetails.getItemDetails(), consignmentId,
                                partnerHawBill, addPieceDetails.getHsCode(), partnerMawBill, loginUserID);

                        //ReferenceImage Create
                        List<ReferenceImageList> referenceImageList = new ArrayList<>();
                        if (addPieceDetails.getReferenceImageList() != null) {
                            for (ReferenceImageList refImage : addPieceDetails.getReferenceImageList()) {
                                //CommonService GetFileName
                                String downloadDocument = commonService.downLoadDocument(refImage.getReferenceImageUrl(), "document", "image");
                                ImageReference imageReference = imageReferenceService.createImageReference(
                                        languageId, companyId, partnerId, partnerName, houseAirwayBill, masterAirwayBill, partnerHawBill, partnerMawBill, null,
                                        PIECE_ID, null, refImage.getReferenceImageUrl(), "P_ID", downloadDocument, loginUserID);

                                //ReferenceImage set
                                ReferenceImageList refImageList = new ReferenceImageList();
                                refImageList.setImageRefId(imageReference.getImageRefId());
                                refImageList.setReferenceImageUrl(imageReference.getReferenceImageUrl());
                                refImageList.setPdfUrl(imageReference.getReferenceField2());

                                referenceImageList.add(refImageList);
                            }
                        }

                        //Save PieceDetails
                        PieceDetails savePieceDetails = pieceDetailsRepository.save(newPieceDetails);
                        AddPieceDetails pieceDetails = new AddPieceDetails();
                        BeanUtils.copyProperties(savePieceDetails, pieceDetails);
                        pieceDetails.setReferenceImageList(referenceImageList);
                        pieceDetails.setItemDetails(itemDetails);
                        pieceDetailsList.add(pieceDetails);
                    }
                }
            } else {

                String PIECE_ID = houseAirwayBill + String.format("%03d", pieceCounter++);
                PieceDetails newPieceDetails = new PieceDetails();

                newPieceDetails.setPieceId(PIECE_ID);
                newPieceDetails.setCompanyId(companyId);
                newPieceDetails.setLanguageId(languageId);
                newPieceDetails.setPartnerId(partnerId);
                newPieceDetails.setHouseAirwayBill(houseAirwayBill);
                newPieceDetails.setMasterAirwayBill(masterAirwayBill);
                newPieceDetails.setPartnerHouseAirwayBill(partnerHawBill);
                newPieceDetails.setPartnerMasterAirwayBill(partnerMawBill);
                newPieceDetails.setCompanyName(companyName);
                newPieceDetails.setLanguageDescription(languageName);
                newPieceDetails.setPartnerName(partnerName);
                newPieceDetails.setConsignmentId(consignmentId);
                newPieceDetails.setDeletionIndicator(0L);
                newPieceDetails.setCreatedBy(loginUserID);
                newPieceDetails.setCreatedOn(new Date());
                newPieceDetails.setUpdatedBy(loginUserID);
                newPieceDetails.setUpdatedOn(new Date());

                //ItemDetails Create
                List<AddItemDetails> itemDetails = itemDetailsService.createItemDetailsList(companyId, languageId,
                        companyName, languageName, partnerName, houseAirwayBill, masterAirwayBill,
                        PIECE_ID, partnerId, null, consignmentId,
                        partnerHawBill, null, partnerMawBill, loginUserID);

                //ReferenceImage Create
                List<ReferenceImageList> referenceImageList = new ArrayList<>();

                //Save PieceDetails
                PieceDetails savePieceDetails = pieceDetailsRepository.save(newPieceDetails);
                AddPieceDetails pieceDetails = new AddPieceDetails();
                BeanUtils.copyProperties(savePieceDetails, pieceDetails);
                pieceDetails.setReferenceImageList(referenceImageList);
                pieceDetails.setItemDetails(itemDetails);
                pieceDetailsList.add(pieceDetails);
            }
        } catch (Exception e) {
            for (AddPieceDetails addPieceDetails : addPieceDetailsList) {
                // Error Log
                createPieceDetailsLog2(addPieceDetails, e.toString());
                e.printStackTrace();
                throw new RuntimeException(e);
            }
        }
        return pieceDetailsList;
    }

    /**
     * Update
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param updatePieceDetails
     * @param loginUserID
     * @return
     */
    public PieceDetails updatePieceDetails(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                           String pieceId, UpdatePieceDetails updatePieceDetails, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            PieceDetails dbPieceDetails = getPieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId);
            BeanUtils.copyProperties(updatePieceDetails, dbPieceDetails, CommonUtils.getNullPropertyNames(updatePieceDetails));
            dbPieceDetails.setUpdatedBy(loginUserID);
            dbPieceDetails.setUpdatedOn(new Date());
            return pieceDetailsRepository.save(dbPieceDetails);
        } catch (Exception e) {
            // Error Log
            createPieceDetailsLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Update
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param updatePieceDetails
     * @param loginUserID
     * @return
     */
    public List<UpdatePieceDetails> updatePieceDetails(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                                       List<UpdatePieceDetails> updatePieceDetails, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<UpdatePieceDetails> pieceDetailsList = new ArrayList<>();

        try {
            for (UpdatePieceDetails pieceDetails : updatePieceDetails) {
                UpdatePieceDetails addPieceDetails = new UpdatePieceDetails();
                PieceDetails dbPieceDetails = getPieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceDetails.getPieceId());
                BeanUtils.copyProperties(pieceDetails, dbPieceDetails, CommonUtils.getNullPropertyNames(updatePieceDetails));
                dbPieceDetails.setUpdatedBy(loginUserID);
                dbPieceDetails.setUpdatedOn(new Date());

                //Update ReferenceImage
                List<ReferenceImageList> referenceImageLists = new ArrayList<>();
                for (ReferenceImageList image : pieceDetails.getReferenceImageList()) {

                    ReferenceImageList newRefImageList = new ReferenceImageList();
                    String downloadDocument = commonService.downLoadDocument(image.getReferenceImageUrl(), "document", "image");
                    ImageReference imageReferenceRecord = imageReferenceRepository.findByImageRefIdAndDeletionIndicator(image.getImageRefId(), 0L);

                    imageReferenceRecord.setReferenceImageUrl(image.getReferenceImageUrl());
                    imageReferenceRecord.setReferenceField2(downloadDocument);
                    imageReferenceRecord.setUpdatedBy(loginUserID);
                    imageReferenceRecord.setUpdatedOn(new Date());
                    ImageReference imageRef = imageReferenceRepository.save(imageReferenceRecord);
                    BeanUtils.copyProperties(imageRef, newRefImageList);
                    referenceImageLists.add(newRefImageList);
                }
                addPieceDetails.setReferenceImageList(referenceImageLists);


                // UpdateItemDetails
                if (pieceDetails.getItemDetails() != null && !pieceDetails.getItemDetails().isEmpty()) {
                    List<UpdateItemDetails> dbItemDetails = itemDetailsService.updateItemDetails(languageId, companyId, partnerId, masterAirwayBill,
                            houseAirwayBill, pieceDetails.getPieceId(), loginUserID, pieceDetails.getItemDetails());
                    addPieceDetails.setItemDetails(dbItemDetails);
                }
                PieceDetails savedPiece = pieceDetailsRepository.save(dbPieceDetails);
                BeanUtils.copyProperties(savedPiece, addPieceDetails);

                pieceDetailsList.add(addPieceDetails);
            }
        } catch (Exception e) {
            // Error Log
            createPieceDetailsLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, "pieceDetails.getpi", e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        return pieceDetailsList;
    }

    /**
     * Delete
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param loginUserID
     */
    public void deletePieceDetails(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                   String pieceId, String loginUserID) {
        PieceDetails dbPieceDetails = getPieceDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId);
        if (dbPieceDetails != null) {
            dbPieceDetails.setDeletionIndicator(1L);
            dbPieceDetails.setUpdatedBy(loginUserID);
            dbPieceDetails.setUpdatedOn(new Date());

            //Delete ItemDetails
            itemDetailsService.deleteItemDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, loginUserID);
            pieceDetailsRepository.save(dbPieceDetails);

        } else {
            // Error Log
            createPieceDetailsLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, "Error in deleting PieceId - " + pieceId);
            throw new BadRequestException("Error in deleting PartnerId - " + partnerId);
        }
    }

    /**
     * Delete
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param loginUserID
     */
    public void deletePieceDetails(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String loginUserID) {
        List<PieceDetails> pieceDetails = pieceDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, 0L);

        for (PieceDetails dbPieceDetails : pieceDetails) {
            if (dbPieceDetails != null) {
                dbPieceDetails.setDeletionIndicator(1L);
                dbPieceDetails.setUpdatedBy(loginUserID);
                dbPieceDetails.setUpdatedOn(new Date());

                //Delete ItemDetails
                itemDetailsService.deleteItemDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, loginUserID);
                pieceDetailsRepository.save(dbPieceDetails);

            } else {
                // Error Log
                createPieceDetailsLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, dbPieceDetails.getPieceId(), "Error in deleting PieceId - " + dbPieceDetails.getPieceId());
                throw new BadRequestException("Error in deleting PartnerId - " + partnerId);
            }
        }
    }


    /*=================================================REPLICA=============================================================*/

    /**
     * Get all
     *
     * @return
     */
    public List<ReplicaPieceDetails> getAllPieceDetails() {
        List<ReplicaPieceDetails> pieceDetailsList = replicaPieceDetailsRepository.findAll();
        pieceDetailsList = pieceDetailsList.stream().filter(n -> n.getDeletionIndicator() == 0).collect(Collectors.toList());
        return pieceDetailsList;
    }

    /**
     * Get
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @return
     */
    public ReplicaPieceDetails getReplicaPieceDetails(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                                      String houseAirwayBill, String pieceId) {

        Optional<ReplicaPieceDetails> dbPieceDetails = replicaPieceDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndDeletionIndicator
                (languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, 0l);

        if (dbPieceDetails.isEmpty()) {
            createPieceDetailsLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, "The given values : languageId - " + languageId +
                    ", companyId - " + companyId + " , partnerId - " + partnerId + ", MasterAirwayBill: " + masterAirwayBill +
                    ", HouseAirwayBill: " + houseAirwayBill + " and PieceId: " + pieceId + "  doesn't exists");
            throw new BadRequestException("The given values - LanguageId: " + languageId + ", CompanyId: " + companyId + ", PartnerId: "
                    + partnerId + ", MasterAirwayBill: " + masterAirwayBill + ", HouseAirwayBill: " + houseAirwayBill + " and PieceId: " + pieceId + "  doesn't exists");
        }
        return dbPieceDetails.get();
    }

    /**
     * Find
     *
     * @param findPieceDetails
     * @return
     */
    public List<ReplicaPieceDetails> findPieceDetails(FindPieceDetails findPieceDetails) throws ParseException {
        ReplicaPieceDetailsSpecification spec = new ReplicaPieceDetailsSpecification(findPieceDetails);
        List<ReplicaPieceDetails> results = replicaPieceDetailsRepository.findAll(spec);
        log.info("found Piecedetails--> " + results);
        return results;
    }

    //========================================PieceDetails_ErrorLog=================================================
    private void createPieceDetailsLog(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                       String houseAirwayBill, String pieceId, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(pieceId);
        errorLog.setReferenceField1(partnerId);
        errorLog.setReferenceField2(masterAirwayBill);
        errorLog.setReferenceField3(houseAirwayBill);
        errorLog.setMethod("Exception thrown in updatePieceDetails");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createPieceDetailsLog1(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                        String houseAirwayBill, String pieceId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(pieceId);
        errorLog.setReferenceField1(partnerId);
        errorLog.setReferenceField2(masterAirwayBill);
        errorLog.setReferenceField3(houseAirwayBill);
        errorLog.setMethod("Exception thrown in getPieceDetails");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createPieceDetailsLog2(AddPieceDetails addPieceDetails, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addPieceDetails.getLanguageId());
        errorLog.setCompanyId(addPieceDetails.getCompanyId());
        errorLog.setRefDocNumber(addPieceDetails.getPieceId());
        errorLog.setReferenceField1(addPieceDetails.getPartnerId());
        errorLog.setReferenceField2(addPieceDetails.getMasterAirwayBill());
        errorLog.setReferenceField3(addPieceDetails.getHouseAirwayBill());
        errorLog.setMethod("Exception thrown in createPieceDetails");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }
}



















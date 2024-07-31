package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
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
import com.courier.overc360.api.midmile.replica.repository.ReplicaPieceDetailsRepository;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.*;

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

    @Autowired
    ConsignmentStatusService consignmentStatusService;

    @Autowired
    ConsignmentService consignmentService;
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
                (languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, 0L);

        if (dbPieceDetails.isEmpty()) {
            // Error Log
//            createPieceDetailsLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, "The given values : languageId - " + languageId +
//                    ", companyId - " + companyId + " , partnerId - " + partnerId + ", MasterAirwayBill: " + masterAirwayBill +
//                    ", HouseAirwayBill: " + houseAirwayBill + " and PieceId: " + pieceId + "  doesn't exists");
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
//                IKeyValuePair iKeyValuePair = replicaPieceDetailsRepository.getDescription(
//                        addPieceDetails.getLanguageId(), addPieceDetails.getCompanyId());

                PieceDetails newPieceDetails = new PieceDetails();
                BeanUtils.copyProperties(addPieceDetails, newPieceDetails, CommonUtils.getNullPropertyNames(addPieceDetails));
                if (addPieceDetails.getPieceId() == null || addPieceDetails.getPieceId().isBlank()) {
                    String NUM_RAN_OBJ = "PIECEDETAILS";
                    String PIECE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for PIECE_ID : " + PIECE_ID);
                    newPieceDetails.setPieceId(PIECE_ID);
                }
//                if (iKeyValuePair != null) {
//                    newPieceDetails.setLanguageDescription(iKeyValuePair.getLangDesc());
//                    newPieceDetails.setCompanyName(iKeyValuePair.getCompanyDesc());
//                }

                newPieceDetails.setDeletionIndicator(0L);
                newPieceDetails.setCreatedBy(loginUserID);
                newPieceDetails.setCreatedOn(new Date());
                newPieceDetails.setUpdatedBy(loginUserID);
                newPieceDetails.setUpdatedOn(new Date());
                return pieceDetailsRepository.save(newPieceDetails);
            }
        } catch (Exception e) {
            // Error Log
//            createPieceDetailsLog2(addPieceDetails, e.toString());
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
    public List<PieceDetails> createPieceDetailsList(String companyId, String languageId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                                     String companyName, String languageName, String partnerName, String partnerHawBill,
                                                     String partnerMawBill, List<PieceDetails> addPieceDetailsList, String hsCode, String length, String width, String height,
                                                     String volume, String weightUnit, String codAmount, String statusId, String eventCode, String statusText,
                                                     String eventText, String country, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<PieceDetails> pieceDetailsList = new ArrayList<>();
        try {
            Long pieceCounter = 1L;
            Double totalWeight = 0.0;
            if (addPieceDetailsList != null && !addPieceDetailsList.isEmpty()) {
                for (PieceDetails addPieceDetails : addPieceDetailsList) {

                    List<ItemDetails> itemDetailsList = addPieceDetails.getItemDetails();
                    int itemCount = itemDetailsList != null ? itemDetailsList.size() : 0; // Count the item details

                    Optional<PieceDetails> duplicatePieceDetails =
                            pieceDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndDeletionIndicator(
                                    languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, addPieceDetails.getPieceId(), 0l);

                    if (duplicatePieceDetails.isPresent()) {
                        log.info("Record is getting Duplicated with the given values : pieceId - " + addPieceDetails.getPieceId());
                    } else {

                        String PIECE_ID = houseAirwayBill + String.format("%03d", pieceCounter++);
                        PieceDetails newPieceDetails = new PieceDetails();
                        BeanUtils.copyProperties(addPieceDetails, newPieceDetails, CommonUtils.getNullPropertyNames(addPieceDetails));

                        //Add all piece's weight
                        Double pieceWeight = Double.valueOf(addPieceDetails.getWeight());
                        if (pieceWeight != null) {
                            totalWeight = totalWeight + pieceWeight;
                        }
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
                        newPieceDetails.setPieceStatusId(statusId);
                        newPieceDetails.setPieceEventCode(eventCode);
                        newPieceDetails.setPieceStatusText(statusText);
                        newPieceDetails.setPieceEventText(eventText);
                        newPieceDetails.setPieceStatusTimestamp(new Date());
                        newPieceDetails.setPieceEventTimestamp(new Date());
                        newPieceDetails.setTags(String.valueOf(itemCount));
                        if (hsCode != null) {
                            newPieceDetails.setHsCode(hsCode);
                        }
                        newPieceDetails.setDeletionIndicator(0L);
                        newPieceDetails.setCreatedBy(loginUserID);
                        newPieceDetails.setCreatedOn(new Date());
                        newPieceDetails.setUpdatedBy(loginUserID);
                        newPieceDetails.setUpdatedOn(new Date());

                        //ReferenceImage Create
                        Set<ImageReference> imageReferenceSet = new HashSet<>();
                        if (addPieceDetails.getReferenceImageList() != null) {
                            for (ImageReference refImage : addPieceDetails.getReferenceImageList()) {
                                //CommonService GetFileName
                                String downloadDocument = commonService.downLoadDocument(refImage.getReferenceImageUrl(), "document", "image");
                                if (downloadDocument != null) {
                                    ImageReference imageReference = imageReferenceService.createImageReference(
                                            languageId, companyId, partnerId, partnerName, houseAirwayBill, masterAirwayBill, partnerHawBill, partnerMawBill,
                                            PIECE_ID, null, refImage.getReferenceImageUrl(), "P_ID", downloadDocument, loginUserID);

                                    imageReferenceSet.add(imageReference);
                                }
                            }
                            newPieceDetails.setReferenceImageList(imageReferenceSet);
                        }

                        //ItemDetails Create
                        List<ItemDetails> itemDetails = itemDetailsService.createItemDetailsList(companyId, languageId, companyName, languageName,
                                partnerName, houseAirwayBill, masterAirwayBill, PIECE_ID, partnerId, addPieceDetails.getItemDetails(),
                                partnerHawBill, hsCode, partnerMawBill, length, width, height, weightUnit, volume, codAmount, country, loginUserID);

                        Double totalItemVolume = itemDetails.stream()
                                .map(ItemDetails::getVolume)
                                .filter(n -> n != null && !n.isBlank())
                                .mapToDouble(a -> Double.valueOf(a))
                                .sum();
                        newPieceDetails.setVolume(String.valueOf(totalItemVolume));

                        // Calculate the total declared value
                        Double pieceValue = 0.0;
                        Double consignmentLocalValue = 0.0;
                        Double addIata = 0.0;
                        Double addInsurance = 0.0;
                        Double customsValue = 0.0;
                        Double calculatedTotalDuty = 0.0;
                        String currency = null;
                        for (ItemDetails item : itemDetails) {
                            if (item.getDeclaredValue() != null && item.getConsignmentValueLocal() != null && item.getAddIata() != null &&
                                    item.getAddInsurance() != null && item.getCustomsValue() != null && item.getCalculatedTotalDuty() != null) {
                                Double declaredValue = Double.valueOf(item.getDeclaredValue());
                                Double conLocalValue = Double.valueOf(item.getConsignmentValueLocal());
                                Double iataAdd = Double.valueOf(item.getAddIata());
                                Double insuranceAdd = Double.valueOf(item.getAddInsurance());
                                Double costomValue = Double.valueOf(item.getCustomsValue());
                                Double totalDuty = Double.valueOf(item.getCalculatedTotalDuty());

                                pieceValue += declaredValue;
                                consignmentLocalValue += conLocalValue;
                                addIata += iataAdd;
                                addInsurance += insuranceAdd;
                                customsValue += costomValue;
                                calculatedTotalDuty += totalDuty;
                                currency = item.getCurrency();
                            }

                        }

                        newPieceDetails.setPieceCurrency(currency);
                        newPieceDetails.setPieceValue(String.valueOf(pieceValue));
                        newPieceDetails.setConsignmentValueLocal(String.valueOf(consignmentLocalValue));
                        newPieceDetails.setAddIata(String.valueOf(addIata));
                        newPieceDetails.setAddInsurance(String.valueOf(addInsurance));
                        newPieceDetails.setCustomsValue(String.valueOf(customsValue));
                        newPieceDetails.setCalculatedTotalDuty(String.valueOf(calculatedTotalDuty));
                        newPieceDetails.setItemDetails(itemDetails);
                        //Save PieceDetails
                        PieceDetails savePieceDetails = pieceDetailsRepository.save(newPieceDetails);

                        // Save ConsignmentStatus
                        consignmentStatusService.insertConsignmentStatusRecord(savePieceDetails.getLanguageId(), savePieceDetails.getLanguageDescription(),
                                savePieceDetails.getCompanyId(), savePieceDetails.getCompanyName(), savePieceDetails.getPieceId(), savePieceDetails.getMasterAirwayBill(),
                                savePieceDetails.getHouseAirwayBill(), savePieceDetails.getPieceType(), savePieceDetails.getPieceTypeId(), savePieceDetails.getPieceTypeDescription(),
                                savePieceDetails.getPieceTimeStamp(), savePieceDetails.getPieceType(), savePieceDetails.getPieceTypeId(), savePieceDetails.getPieceTypeDescription(),
                                savePieceDetails.getPieceTimeStamp(), loginUserID, savePieceDetails.getPartnerHouseAirwayBill(), savePieceDetails.getPartnerMasterAirwayBill());

                        pieceDetailsList.add(savePieceDetails);
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
                newPieceDetails.setTags("1");
                if (hsCode != null) {
                    newPieceDetails.setHsCode(hsCode);
                }
                newPieceDetails.setLength(length);
                newPieceDetails.setWidth(width);
                newPieceDetails.setWeight_unit(weightUnit);
                newPieceDetails.setHeight(height);
                if (volume != null && !volume.isBlank()) {
                    newPieceDetails.setVolume(volume);
                } else {
                    //volume calculation
                    if ((length != null && !length.isBlank()) && (width != null && !width.isBlank()) && (height != null && !height.isBlank())) {
                        Double itemVolumeCalculation = Double.valueOf(length) * Double.valueOf(width) * Double.valueOf(height);
                        newPieceDetails.setVolume(String.valueOf(itemVolumeCalculation));
                    }
                }
                newPieceDetails.setCodAmount(codAmount);
                newPieceDetails.setPieceStatusId(statusId);
                newPieceDetails.setPieceEventCode(eventCode);
                newPieceDetails.setPieceStatusText(statusText);
                newPieceDetails.setPieceEventText(eventText);
                newPieceDetails.setPieceStatusTimestamp(new Date());
                newPieceDetails.setPieceEventTimestamp(new Date());
                newPieceDetails.setDeletionIndicator(0L);
                newPieceDetails.setCreatedBy(loginUserID);
                newPieceDetails.setCreatedOn(new Date());
                newPieceDetails.setUpdatedBy(null);
                newPieceDetails.setUpdatedOn(null);


                //ReferenceImage Create
                Set<ImageReference> referenceImageList = new HashSet<>();


                //ItemDetails Create
                List<ItemDetails> itemDetails = itemDetailsService.createItemDetailsList(companyId, languageId,
                        companyName, languageName, partnerName, houseAirwayBill, masterAirwayBill,
                        PIECE_ID, partnerId, null, partnerHawBill, hsCode,
                        partnerMawBill, length, width, height, weightUnit, volume, codAmount, country, loginUserID);

                newPieceDetails.setItemDetails(itemDetails);
                //Save PieceDetails
                PieceDetails savePieceDetails = pieceDetailsRepository.save(newPieceDetails);

                // Save ConsignmentStatus
                consignmentStatusService.insertConsignmentStatusRecord(savePieceDetails.getLanguageId(), savePieceDetails.getLanguageDescription(),
                        savePieceDetails.getCompanyId(), savePieceDetails.getCompanyName(), savePieceDetails.getPieceId(), savePieceDetails.getMasterAirwayBill(),
                        savePieceDetails.getHouseAirwayBill(), savePieceDetails.getPieceType(), savePieceDetails.getPieceTypeId(), savePieceDetails.getPieceTypeDescription(),
                        savePieceDetails.getPieceTimeStamp(), savePieceDetails.getPieceType(), savePieceDetails.getPieceTypeId(), savePieceDetails.getPieceTypeDescription(),
                        savePieceDetails.getPieceTimeStamp(), loginUserID, savePieceDetails.getPartnerHouseAirwayBill(), savePieceDetails.getPartnerMasterAirwayBill());
            }

        } catch (Exception e) {
            for (PieceDetails addPieceDetails : addPieceDetailsList) {
                // Error Log
//                createPieceDetailsLog2(addPieceDetails, e.toString());
                e.printStackTrace();
                throw new RuntimeException(e);
            }

        }
        return pieceDetailsList;
    }


    /**
     * @param getPieceDetails
     * @param updatePieceDetails
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    public List<PieceDetails> updatePieceDetails(List<PieceDetails> getPieceDetails, List<PieceDetails> updatePieceDetails, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<PieceDetails> pieceDetailsList = new ArrayList<>();

        try {
            for (PieceDetails pieceDetails : updatePieceDetails) {
                for (PieceDetails dbPiece : getPieceDetails) {
                    if (Objects.equals(pieceDetails.getPieceId(), dbPiece.getPieceId())) {

                        BeanUtils.copyProperties(pieceDetails, dbPiece, CommonUtils.getNullPropertyNames(pieceDetails));

                        //Update ReferenceImage
                        Set<ImageReference> referenceImageLists = new HashSet<>();
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
                                referenceImageLists.add(imageRef);
                            }
                        }
                        dbPiece.setReferenceImageList(referenceImageLists);

                        // UpdateItemDetails
                        if (pieceDetails.getItemDetails() != null && !pieceDetails.getItemDetails().isEmpty()) {
                            List<ItemDetails> dbItemDetails = itemDetailsService.updateItemDetails(dbPiece.getItemDetails(), pieceDetails.getItemDetails(), loginUserID);
                            dbPiece.setItemDetails(dbItemDetails);
                        }

                        dbPiece.setDeletionIndicator(0L);
                        dbPiece.setUpdatedBy(loginUserID);
                        dbPiece.setUpdatedOn(new Date());
                        pieceDetailsList.add(pieceDetailsRepository.save(dbPiece));
//                        pieceDetailsList.add(dbPiece);
                    }
                }
            }
        } catch (Exception e) {
            // Error Log
//            createPieceDetailsLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, "pieceDetails.getpi", e.toString());
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

            //Multiple ImageDelete
            imageReferenceRepository.updateImageTable(companyId, languageId, partnerId, houseAirwayBill, masterAirwayBill, pieceId, loginUserID);

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

        if (!pieceDetails.isEmpty() && pieceDetails != null) {
            for (PieceDetails dbPieceDetails : pieceDetails) {
                if (dbPieceDetails != null) {
                    dbPieceDetails.setDeletionIndicator(1L);
                    dbPieceDetails.setUpdatedBy(loginUserID);
                    dbPieceDetails.setUpdatedOn(new Date());

                    //MultipleItem Delete
                    itemDetailsService.deleteItemDetails(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, loginUserID);

                    //MultipleImage Delete
                    imageReferenceRepository.updateImageTable(companyId, languageId, partnerId, houseAirwayBill, masterAirwayBill, loginUserID);

                    pieceDetailsRepository.save(dbPieceDetails);

                } else {
                    // Error Log
                    createPieceDetailsLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, dbPieceDetails.getPieceId(), "Error in deleting PieceId - " + dbPieceDetails.getPieceId());
                    throw new BadRequestException("Error in deleting PartnerId - " + partnerId);
                }
            }
        } else {
            log.info("PieceDetails Doesn't exists");
        }
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

    private void createPieceDetailsLog(String languageId, String companyId, String pieceId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(pieceId);
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



















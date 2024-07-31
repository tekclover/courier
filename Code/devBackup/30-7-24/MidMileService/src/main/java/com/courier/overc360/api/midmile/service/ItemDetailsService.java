package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
import com.courier.overc360.api.midmile.primary.model.itemdetails.ItemDetails;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.repository.ImageReferenceRepository;
import com.courier.overc360.api.midmile.primary.repository.ItemDetailsRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.repository.ReplicaBondedManifestRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaCcrRepository;
//import com.courier.overc360.api.midmile.replica.repository.ReplicaItemDetailsRepository;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.text.DecimalFormat;
import java.util.*;

@Service
@Slf4j
public class ItemDetailsService {

    @Autowired
    private ItemDetailsRepository itemDetailsRepository;

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

    @Autowired
    ReplicaBondedManifestRepository replicaBondedManifestRepository;

    @Autowired
    ReplicaCcrRepository replicaCcrRepository;


    //Decimal Format
    DecimalFormat decimalFormat = new DecimalFormat("#.###");
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

    /**
     * @param getItemDetails
     * @param updateItemDetails
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public List<ItemDetails> updateItemDetails(List<ItemDetails> getItemDetails, List<ItemDetails> updateItemDetails, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<ItemDetails> itemDetailsList = new ArrayList<>();
            for (ItemDetails itemDetails : updateItemDetails) {
                for (ItemDetails dbItem : getItemDetails) {
                    if (Objects.equals(itemDetails.getPieceItemId(), dbItem.getPieceItemId())) {
                        BeanUtils.copyProperties(itemDetails, dbItem, CommonUtils.getNullPropertyNames(itemDetails));
                        dbItem.setUpdatedBy(loginUserID);
                        dbItem.setUpdatedOn(new Date());
                        itemDetailsList.add(itemDetailsRepository.save(dbItem));
//                        itemDetailsList.add(dbItem);
                    }
                }
            }
            return itemDetailsList;
        } catch (Exception e) {
            // Error Log
//            createItemDetailsLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
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
            createItemDetailsLog3(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, "Error in deleting ItemId ");
            throw new BadRequestException("Error in deleting PieceId - " + pieceId);
        }
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
    public List<ItemDetails> createItemDetailsList(String companyId, String languageId, String companyName, String languageName, String partnerName,
                                                   String houseAirwayBill, String masterAirwayBill, String pieceId, String partnerId,
                                                   List<ItemDetails> addItemDetailsList, String partnerHawBill, String hsCode,
                                                   String partnerMawBill, String length, String width, String height, String weightUnit, String volume,
                                                   String codAmount, String country, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<ItemDetails> itemDetailsList = new ArrayList<>();
        try {
            Long itemDetails = 1L;
            Double totalLength = 0.0;
            Double totalWeight = 0.0;
            Double totalHeight = 0.0;
            Double totalVolume = 0.0;
            if (addItemDetailsList != null && !addItemDetailsList.isEmpty()) {
                for (ItemDetails addItemDetails : addItemDetailsList) {
                    Optional<ItemDetails> duplicateItemDetails =
                            itemDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
                                    languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, addItemDetails.getPieceItemId(), 0L);

                    if (duplicateItemDetails.isPresent()) {
                        throw new BadRequestException("Record is getting Duplicated with the given values : pieceItemId -" + addItemDetails.getPieceItemId());
                    } else {

                        String PIECE_ITEM_ID = pieceId + String.format("%03d", itemDetails++);
                        ItemDetails newItemDetails = new ItemDetails();

                        //Add all item's length
                        Double itemLength = 0.0;
                        if (addItemDetails.getLength() != null && !addItemDetails.getLength().isEmpty()) {
                            itemLength = Double.valueOf(addItemDetails.getLength());
                            totalLength = totalLength + itemLength;
                        }

                        //Add all item's weight
                        Double itemWeight = 0.0;
                        if (addItemDetails.getWeight() != null && !addItemDetails.getWeight().isEmpty()) {
                            itemWeight = Double.valueOf(addItemDetails.getWeight());
                            totalWeight = totalWeight + itemWeight;
                        }

                        //Add all item's height
                        Double itemHeight = 0.0;
                        if (addItemDetails.getHeight() != null && !addItemDetails.getHeight().isEmpty()) {
                            itemHeight = Double.valueOf(addItemDetails.getHeight());
                            totalHeight = totalHeight + itemHeight;
                        }

                        //Add all item's volume
                        Double itemVolume = 0.0;
                        if (addItemDetails.getVolume() != null && !addItemDetails.getVolume().isEmpty()) {
                            itemVolume = Double.valueOf(addItemDetails.getVolume());
                            totalVolume = totalVolume + itemVolume;
                        }

                        // Get Iatakd
                        Optional<IKeyValuePair> optionalIKeyValuePair =
                                replicaCcrRepository.getIataCurrencyValue(companyId, languageId, addItemDetails.getCurrency(), country);

                        //DeclaredValue calculation
                        Double totalValue = 0.0;
                        if (addItemDetails.getUnitValue() != null && addItemDetails.getQuantity() != null) {
                            Double unitValue = Double.valueOf(addItemDetails.getUnitValue());
                            Double quantity = Double.valueOf(addItemDetails.getQuantity());
                            totalValue = unitValue * quantity;
                        }

                        addItemDetails.setDeclaredValue(String.valueOf(totalValue));

                        //ExchangeCurrencyRate
                        if (optionalIKeyValuePair.isPresent()) {
                            IKeyValuePair iKeyValuePair = optionalIKeyValuePair.get();
                            if (iKeyValuePair.getCurrencyValue() != null) {
                                addItemDetails.setExchangeRate(iKeyValuePair.getCurrencyValue());
                            }
                            if (iKeyValuePair.getIataKd() != null) {
                                addItemDetails.setIata(iKeyValuePair.getIataKd());
                            }
                        }

                        //Hardcode CustomsCurrency
                        if (addItemDetails.getCustomsInsurance() == null) {
                            addItemDetails.setCustomsInsurance("1");
                        }
                        //HardCode Duty
                        if (addItemDetails.getDuty() == null) {
                            addItemDetails.setDuty("5");
                        }

                        BeanUtils.copyProperties(addItemDetails, newItemDetails, CommonUtils.getNullPropertyNames(addItemDetails));

                        Double declaredValue = 0.0;
                        Double exchangeRate = 0.0;
                        Double consignmentValue = 0.0;

                        //Consignment Value
                        if (newItemDetails.getExchangeRate() != null) {
                            declaredValue = totalValue;
                            exchangeRate = Double.valueOf(newItemDetails.getExchangeRate());
                            consignmentValue = declaredValue * exchangeRate;
                        }

                        String formatConsignmentValue = decimalFormat.format(consignmentValue);
                        newItemDetails.setConsignmentValueLocal(formatConsignmentValue);
                        if (newItemDetails.getIata() != null) {
                            Double iata = Double.valueOf(newItemDetails.getIata());
                            newItemDetails.setAddIata(String.valueOf(iata + consignmentValue));
                        }
                        if (newItemDetails.getAddIata() != null && newItemDetails.getCustomsInsurance() != null) {
                            Double addIata = Double.valueOf(newItemDetails.getAddIata());

                            Double addInsure = addIata * 0.01;
                            //Decimal Format
                            String formatInsurance = decimalFormat.format(addInsure);
                            newItemDetails.setAddInsurance(formatInsurance);

                            if (newItemDetails.getAddInsurance() != null) {
                                Double addInsurance = Double.valueOf(newItemDetails.getAddInsurance());
                                newItemDetails.setCustomsValue(String.valueOf(addIata + addInsurance));

                                if (newItemDetails.getDuty() != null) {
                                    Double duty = Double.valueOf(newItemDetails.getDuty());
                                    Double customsValue = Double.valueOf(newItemDetails.getCustomsValue());

                                    Double totalDuty = customsValue + (customsValue * 0.05);
                                    //Decimal Format
                                    String formatTotalDuty = decimalFormat.format(totalDuty);
                                    newItemDetails.setCalculatedTotalDuty(formatTotalDuty);
                                }
                            }
                        }
                        //volume calculation
                        if ((newItemDetails.getLength() != null && !newItemDetails.getLength().isBlank()) &&
                                (newItemDetails.getWidth() != null && !newItemDetails.getWidth().isBlank()) &&
                                (newItemDetails.getHeight() != null && !newItemDetails.getHeight().isBlank())) {
                            Double itemVolumeCalculation = Double.valueOf(newItemDetails.getLength()) * Double.valueOf(newItemDetails.getWidth()) * Double.valueOf(newItemDetails.getHeight());
                            newItemDetails.setVolume(String.valueOf(itemVolumeCalculation));
                        }

                        newItemDetails.setConsignmentValue(String.valueOf(consignmentValue));
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
                        if (addItemDetails.getHsCode() == null && hsCode != null) {
                            newItemDetails.setHsCode(hsCode);
                        }
                        //ImageReference Created
                        Set<ImageReference> imageReferenceList = new HashSet<>();
                        if (addItemDetails.getReferenceImageList() != null) {
                            for (ImageReference imageReference : addItemDetails.getReferenceImageList()) {
                                //CommonService
                                String downloadDocument = commonService.downLoadDocument(imageReference.getReferenceImageUrl(), "document", "image");
                                if (downloadDocument != null) {
                                    ImageReference dbImage = imageReferenceService.createImageReference(languageId, companyId, partnerId,
                                            partnerName, houseAirwayBill, masterAirwayBill, partnerHawBill, partnerMawBill, pieceId,
                                            PIECE_ITEM_ID, imageReference.getReferenceImageUrl(), "PI_ID", downloadDocument, loginUserID);


                                    imageReferenceList.add(dbImage);
                                }
                            }
                        }

                        newItemDetails.setDeletionIndicator(0L);
                        newItemDetails.setCreatedBy(loginUserID);
                        newItemDetails.setCreatedOn(new Date());
                        newItemDetails.setUpdatedBy(null);
                        newItemDetails.setUpdatedOn(null);
                        newItemDetails.setReferenceImageList(imageReferenceList);
                        ItemDetails savedItemDetails = itemDetailsRepository.save(newItemDetails);
                        itemDetailsList.add(savedItemDetails);
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
                newItemDetails.setHsCode(hsCode);
                newItemDetails.setLength(length);
                newItemDetails.setHeight(height);
                newItemDetails.setWidth(width);
                if (volume != null && !volume.isBlank()) {
                    newItemDetails.setVolume(volume);
                } else {
                    //volume calculation
                    if ((length != null && !length.isBlank()) && (width != null && !width.isBlank()) && (height != null && !height.isBlank())) {
                        Double itemVolumeCalculation = Double.valueOf(length) * Double.valueOf(width) * Double.valueOf(height);
                        newItemDetails.setVolume(String.valueOf(itemVolumeCalculation));
                    }
                }
                newItemDetails.setCodAmount(codAmount);
                newItemDetails.setWeightUnit(weightUnit);
                newItemDetails.setDeletionIndicator(0L);
                newItemDetails.setCreatedBy(loginUserID);
                newItemDetails.setCreatedOn(new Date());
                newItemDetails.setUpdatedBy(null);
                newItemDetails.setUpdatedOn(null);

                ItemDetails savedItemDetails = itemDetailsRepository.save(newItemDetails);
                itemDetailsList.add(savedItemDetails);
            }
            itemDetailsRepository.updatePiece(companyId, languageId, pieceId, houseAirwayBill, masterAirwayBill, String.valueOf(totalLength), String.valueOf(totalHeight), String.valueOf(totalWeight), String.valueOf(totalVolume));
        } catch (Exception e) {
            // Error Log
            for (ItemDetails itemDetails : addItemDetailsList) {
//                createItemDetailsLog2(itemDetails, e.toString());
                e.printStackTrace();
                throw new RuntimeException(e);
            }
        }
        return itemDetailsList;
    }

}

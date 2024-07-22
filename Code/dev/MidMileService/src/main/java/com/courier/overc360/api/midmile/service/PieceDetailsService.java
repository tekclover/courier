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
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.dto.LabelFormInput;
import com.courier.overc360.api.midmile.replica.model.dto.LabelFormOutput;
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
    public List<AddPieceDetails> createPieceDetailsList(String companyId, String languageId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                                        String companyName, String languageName, String partnerName, Long consignmentId, String partnerHawBill,
                                                        String partnerMawBill, List<AddPieceDetails> addPieceDetailsList, String hsCode, String length, String width, String height,
                                                        String volume, String weightUnit, String codAmount, String hawbTypeId, String hawbType, String hawbDescription,
                                                         String country, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<AddPieceDetails> pieceDetailsList = new ArrayList<>();
        try {
            Long pieceCounter = 1L;
            Double totalWeight = 0.0;
            if (addPieceDetailsList != null && !addPieceDetailsList.isEmpty()) {
                for (AddPieceDetails addPieceDetails : addPieceDetailsList) {

                    List<AddItemDetails> itemDetailsList = addPieceDetails.getItemDetails();
                    int itemCount = itemDetailsList != null ? itemDetailsList.size() : 0; // Count the item details

                    Optional<PieceDetails> duplicatePieceDetails =
                            pieceDetailsRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndDeletionIndicator(
                                    languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, addPieceDetails.getPieceId(), 0l);

                    if (duplicatePieceDetails.isPresent()) {
                        throw new BadRequestException("Record is getting Duplicated with the given values : pieceId - " + addPieceDetails.getPieceId());
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
                        newPieceDetails.setConsignmentId(consignmentId);
                        //HawbPieceStatus
                        newPieceDetails.setPieceTypeId(hawbTypeId);
                        newPieceDetails.setPieceType(hawbType);
                        newPieceDetails.setPieceTypeDescription(hawbDescription);
                        newPieceDetails.setPieceTimeStamp(new Date());
                        newPieceDetails.setTags(String.valueOf(itemCount));
                        if(hsCode != null) {
                            newPieceDetails.setHsCode(hsCode);
                        }
                        newPieceDetails.setDeletionIndicator(0L);
                        newPieceDetails.setCreatedBy(loginUserID);
                        newPieceDetails.setCreatedOn(new Date());
                        newPieceDetails.setUpdatedBy(loginUserID);
                        newPieceDetails.setUpdatedOn(new Date());

                        //ReferenceImage Create
                        List<ReferenceImageList> referenceImageList = new ArrayList<>();
                        if (addPieceDetails.getReferenceImageList() != null) {
                            for (ReferenceImageList refImage : addPieceDetails.getReferenceImageList()) {
                                //CommonService GetFileName
                                String downloadDocument = commonService.downLoadDocument(refImage.getReferenceImageUrl(), "document", "image");
                                if (downloadDocument != null) {
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
                        }


                        //ItemDetails Create
                        List<AddItemDetails> itemDetails = itemDetailsService.createItemDetailsList(companyId, languageId, companyName, languageName,
                                partnerName, houseAirwayBill, masterAirwayBill, PIECE_ID, partnerId, addPieceDetails.getItemDetails(), consignmentId,
                                partnerHawBill, hsCode, partnerMawBill, length, width, height, weightUnit, volume, codAmount, country, loginUserID);

                        Double totalItemVolume = itemDetails.stream().map(AddItemDetails::getVolume)
                                .filter(n -> n != null && !n.isBlank())
                                .mapToDouble(a -> Double.valueOf(a)).sum();
                        newPieceDetails.setVolume(String.valueOf(totalItemVolume));

                        // Calculate the total declared value
                        Double pieceValue = 0.0;
                        Double consignmentLocalValue = 0.0;
                        Double addIata = 0.0;
                        Double addInsurance = 0.0;
                        Double customsValue = 0.0;
                        Double calculatedTotalDuty = 0.0;
                        String currency = null;
                        for (AddItemDetails item : itemDetails) {
                            if(item.getDeclaredValue() != null && item.getConsignmentValueLocal() != null && item.getAddIata() != null &&
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
                        //Save PieceDetails
                        PieceDetails savePieceDetails = pieceDetailsRepository.save(newPieceDetails);

                        // Update PieceTable TotalDeclared value
//                        consignmentEntityRepository.updatePieceValue(savePieceDetails.getCompanyId(), savePieceDetails.getLanguageId(),
//                                savePieceDetails.getPartnerId(), savePieceDetails.getHouseAirwayBill(), savePieceDetails.getMasterAirwayBill(),
//                                savePieceDetails.getPieceCurrency(), String.valueOf(pieceValue));

                        // Save ConsignmentStatus
                        consignmentStatusService.insertConsignmentStatusRecord(savePieceDetails.getLanguageId(), savePieceDetails.getLanguageDescription(),
                                savePieceDetails.getCompanyId(), savePieceDetails.getCompanyName(), savePieceDetails.getPieceId(), savePieceDetails.getMasterAirwayBill(),
                                savePieceDetails.getHouseAirwayBill(), savePieceDetails.getPieceType(), savePieceDetails.getPieceTypeId(), savePieceDetails.getPieceTypeDescription(),
                                savePieceDetails.getPieceTimeStamp(), savePieceDetails.getPieceType(), savePieceDetails.getPieceTypeId(), savePieceDetails.getPieceTypeDescription(),
                                savePieceDetails.getPieceTimeStamp(),loginUserID, savePieceDetails.getPartnerHouseAirwayBill(), savePieceDetails.getPartnerMasterAirwayBill());

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
                newPieceDetails.setTags("1");
                if(hsCode != null) {
                    newPieceDetails.setHsCode(hsCode);
                }
                newPieceDetails.setLength(length);
                newPieceDetails.setWidth(width);
                newPieceDetails.setWeight_unit(weightUnit);
                newPieceDetails.setHeight(height);
                if(volume != null && !volume.isBlank()) {
                newPieceDetails.setVolume(volume);
                } else {
                    //volume calculation
                    if((length != null && !length.isBlank()) && (width != null && !width.isBlank()) && (height != null && !height.isBlank())) {
                        Double itemVolumeCalculation = Double.valueOf(length) * Double.valueOf(width) * Double.valueOf(height);
                        newPieceDetails.setVolume(String.valueOf(itemVolumeCalculation));
                    }
                }
                newPieceDetails.setCodAmount(codAmount);

                newPieceDetails.setPieceTypeId(hawbTypeId);
                newPieceDetails.setPieceType(hawbType);
                newPieceDetails.setPieceTypeDescription(hawbDescription);
                newPieceDetails.setPieceTimeStamp(new Date());
                newPieceDetails.setDeletionIndicator(0L);
                newPieceDetails.setCreatedBy(loginUserID);
                newPieceDetails.setCreatedOn(new Date());
                newPieceDetails.setUpdatedBy(null);
                newPieceDetails.setUpdatedOn(null);


                //ReferenceImage Create
                List<ReferenceImageList> referenceImageList = new ArrayList<>();

                //Save PieceDetails
                PieceDetails savePieceDetails = pieceDetailsRepository.save(newPieceDetails);

                //ItemDetails Create
                List<AddItemDetails> itemDetails = itemDetailsService.createItemDetailsList(companyId, languageId,
                        companyName, languageName, partnerName, houseAirwayBill, masterAirwayBill,
                        PIECE_ID, partnerId, null, consignmentId,
                        partnerHawBill, savePieceDetails.getHsCode(), partnerMawBill, length, width, height, weightUnit, volume, codAmount,country, loginUserID);

                // Save ConsignmentStatus
                consignmentStatusService.insertConsignmentStatusRecord(savePieceDetails.getLanguageId(), savePieceDetails.getLanguageDescription(),
                        savePieceDetails.getCompanyId(), savePieceDetails.getCompanyName(), savePieceDetails.getPieceId(), savePieceDetails.getMasterAirwayBill(),
                        savePieceDetails.getHouseAirwayBill(), savePieceDetails.getPieceType(), savePieceDetails.getPieceTypeId(), savePieceDetails.getPieceTypeDescription(),
                        savePieceDetails.getPieceTimeStamp(), savePieceDetails.getPieceType(), savePieceDetails.getPieceTypeId(), savePieceDetails.getPieceTypeDescription(),
                        savePieceDetails.getPieceTimeStamp(),loginUserID, savePieceDetails.getPartnerHouseAirwayBill(), savePieceDetails.getPartnerMasterAirwayBill() );

                AddPieceDetails pieceDetails = new AddPieceDetails();
                BeanUtils.copyProperties(savePieceDetails, pieceDetails);
                pieceDetails.setReferenceImageList(referenceImageList);
                pieceDetails.setItemDetails(itemDetails);
                pieceDetailsList.add(pieceDetails);
            }
            pieceDetailsRepository.updateConsignment(companyId,languageId,consignmentId,houseAirwayBill,masterAirwayBill,String.valueOf(totalWeight));
            pieceDetailsRepository.updateConsignmentInfo(consignmentId,String.valueOf(totalWeight));

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
                dbPieceDetails.setDeletionIndicator(0L);
                dbPieceDetails.setUpdatedBy(loginUserID);
                dbPieceDetails.setUpdatedOn(new Date());

                //Update ReferenceImage
                List<ReferenceImageList> referenceImageLists = new ArrayList<>();
                if (pieceDetails.getReferenceImageList() != null && !pieceDetails.getReferenceImageList().isEmpty()) {
                    for (ReferenceImageList image : pieceDetails.getReferenceImageList()) {

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
     *
     * @param labelFormInput
     * @return
     */
    public List<LabelFormOutput> getLabelFormOutput(LabelFormInput labelFormInput) {

        log.info("labelFormInput : " + labelFormInput);
        List<LabelFormOutput> labelFormOutputList = replicaPieceDetailsRepository.getLabelPdfOutput(
                labelFormInput.getLanguageId(),
                labelFormInput.getCompanyId(),
                labelFormInput.getPieceId(),
                labelFormInput.getHouseAirwayBill(),
                new Date());
        log.info("labelForm output: " + labelFormOutputList.size());
        return labelFormOutputList;
    }

    /**
     * for PreAlertManifest
     * @param languageId
     * @param companyId
     * @param consignmentId
     * @return
     */
    public List<ReplicaPieceDetails> getReplicaPieceDetailsForPreAlertManifest(String languageId, String companyId, Long consignmentId) {

        List<ReplicaPieceDetails> dbPieceDetails = replicaPieceDetailsRepository.findByLanguageIdAndCompanyIdAndConsignmentIdAndDeletionIndicator
                (languageId, companyId, consignmentId, 0l);

        if (dbPieceDetails == null || dbPieceDetails.isEmpty()) {
            createPieceDetailsLog(languageId, companyId, String.valueOf(consignmentId), "The given values : languageId - " + languageId +
                    ", companyId - " + companyId + " and PieceId: " + consignmentId + "  doesn't exists");
            throw new BadRequestException("The given values - LanguageId: " + languageId + ", CompanyId: " + companyId + " and consignmentId: " + consignmentId + "  doesn't exists");
        }

        return dbPieceDetails;
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



















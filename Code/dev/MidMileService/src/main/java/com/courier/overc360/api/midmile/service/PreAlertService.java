package com.courier.overc360.api.midmile.service;


import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.ConsignmentEntity;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.model.prealert.PreAlert;
import com.courier.overc360.api.midmile.primary.model.prealert.PreAlertDeleteInput;
import com.courier.overc360.api.midmile.primary.model.prealert.UpdatePreAlert;
import com.courier.overc360.api.midmile.primary.repository.ConsignmentEntityRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.repository.PreAlertRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import com.courier.overc360.api.midmile.replica.model.prealert.FindPreAlert;
import com.courier.overc360.api.midmile.replica.model.prealert.ReplicaPreAlert;
import com.courier.overc360.api.midmile.replica.repository.*;
import com.courier.overc360.api.midmile.replica.repository.specification.PreAlertSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class PreAlertService {

    @Autowired
    PreAlertRepository preAlertRepository;

    @Autowired
    ReplicaPreAlertRepository replicaPreAlertRepository;

    @Autowired
    ConsignmentEntityRepository consignmentEntityRepository;

    @Autowired
    private ErrorLogService errorLogService;

    @Autowired
    ReplicaConsignmentEntityRepository replicaConsignmentEntityRepository;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ReplicaCcrRepository replicaCcrRepository;

    @Autowired
    private ReplicaPieceDetailsRepository replicaPieceDetailsRepository;

    @Autowired
    private ConsignmentStatusService consignmentStatusService;

    @Autowired
    private ReplicaBondedManifestRepository replicaBondedManifestRepository;


    //Decimal Format
    DecimalFormat decimalFormat = new DecimalFormat("#.###");


    /**
     * Get
     *
     * @param companyId
     * @param languageId
     * @param partnerId
     * @param partnerMasterAirwayBill
     * @param partnerHouseAirwayBill
     * @return
     */
    private PreAlert getPreAlert(String companyId, String languageId, String partnerId, String partnerMasterAirwayBill, String partnerHouseAirwayBill) {
        Optional<PreAlert> dbPreAlert = preAlertRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator
                (companyId, languageId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, 0L);
        if (dbPreAlert.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", partnerMasterAirwayBill - " + partnerMasterAirwayBill
                    + " and partnerHouseAirwayBill - " + partnerHouseAirwayBill + " doesn't exists";
            // Error Log
            createPreAlertLog(languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbPreAlert.get();
    }

    /**
     * Create
     *
     * @param preAlert
     * @param loginUserID
     * @return
     */
    public List<PreAlert> createPreAlertService(List<PreAlert> preAlert, String loginUserID) {

        List<PreAlert> preAlertList = new ArrayList<>();
        for (PreAlert dbPreAlert : preAlert) {

            // Fetching the description for a company
            IKeyValuePair iKeyValuePair = replicaConsignmentEntityRepository.getDescription(dbPreAlert.getCompanyId());

            Optional<PreAlert> preAlertOptional =
                    preAlertRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator
                            (dbPreAlert.getCompanyId(), iKeyValuePair.getLangId(), dbPreAlert.getPartnerId(),
                                    dbPreAlert.getPartnerMasterAirwayBill(), dbPreAlert.getPartnerHouseAirwayBill(), 0L);

            if (!preAlertOptional.isPresent()) {
                ConsignmentEntity consignment =
                        consignmentEntityRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerHouseAirwayBillAndDeletionIndicator(
                                iKeyValuePair.getLangId(), dbPreAlert.getCompanyId(), dbPreAlert.getPartnerId(), dbPreAlert.getPartnerHouseAirwayBill(), 0L);

                log.info("companyId" + dbPreAlert.getCompanyId() + "languageId" + iKeyValuePair.getLangId() + "partner" + dbPreAlert.getPartnerId());
                if (consignment == null) {
                    throw new BadRequestException("Consignment Doesn't exist PartnerHouseAirwayBill - " + dbPreAlert.getPartnerHouseAirwayBill() + " CompanyId - " + dbPreAlert.getCompanyId() +
                            " LanguageId - " + iKeyValuePair.getLangId() + " PartnerId - " + dbPreAlert.getPartnerId());
                }


                // Get Iatakd
                IKeyValuePair optionalIKeyValuePair =
                        replicaBondedManifestRepository.getToCurrencyValue(dbPreAlert.getCompanyId(), dbPreAlert.getCurrency());
                IKeyValuePair ikeyIata = replicaCcrRepository.getIataKd(dbPreAlert.getOriginCode(), iKeyValuePair.getLangId(), dbPreAlert.getCompanyId());

                //ExchangeCurrencyRate
                if (optionalIKeyValuePair != null && optionalIKeyValuePair.getCurrencyValue() != null) {

                    dbPreAlert.setExchangeRate(optionalIKeyValuePair.getCurrencyValue());
                    dbPreAlert.setConsignmentLocalId(optionalIKeyValuePair.getCurrencyId());
                    if (dbPreAlert.getIata() != null && ikeyIata != null && ikeyIata.getIataKd() != null) {
                        dbPreAlert.setIata(ikeyIata.getIataKd());
                    }
                }

                //Hardcode CustomsCurrency
                if (dbPreAlert.getCustomsInsurance() == null) {
                    dbPreAlert.setCustomsInsurance("1");
                }
                //HardCode Duty
                if (dbPreAlert.getDuty() == null) {
                    dbPreAlert.setDuty("5");
                }

                Double declaredValue = 0.0;
                Double exchangeRate = 0.0;
                Double consignmentValue = 0.0;

                //Consignment Value
                if (dbPreAlert.getExchangeRate() != null && dbPreAlert.getConsignmentValueLocal().isEmpty()) {
                    declaredValue = Double.valueOf(dbPreAlert.getConsignmentValue());
                    exchangeRate = Double.valueOf(dbPreAlert.getExchangeRate());
                    consignmentValue = declaredValue * exchangeRate;

                    String formatConsignmentValue = decimalFormat.format(consignmentValue);
                    dbPreAlert.setConsignmentValueLocal(formatConsignmentValue);
                }
                if (!dbPreAlert.getIata().isEmpty() && dbPreAlert.getIata() != null) {
                    Double iata = Double.valueOf(dbPreAlert.getIata());
                    dbPreAlert.setAddIata(String.valueOf(iata + consignmentValue));
                }
                if (dbPreAlert.getAddIata() != null && dbPreAlert.getCustomsInsurance() != null) {
                    Double addIata = Double.valueOf(dbPreAlert.getAddIata());

                    Double addInsure = addIata * 0.01;
                    //Decimal Format
                    String formatInsurance = decimalFormat.format(addInsure);
                    dbPreAlert.setAddInsurance(formatInsurance);

                    if (dbPreAlert.getAddInsurance() != null) {
                        Double addInsurance = Double.valueOf(dbPreAlert.getAddInsurance());
                        dbPreAlert.setCustomsValue(String.valueOf(addIata + addInsurance));

                        if (dbPreAlert.getDuty() != null) {
                            Double customsValue = Double.valueOf(dbPreAlert.getCustomsValue());

                            Double totalDuty = customsValue + (customsValue * 0.05);
                            //Decimal Format
                            String formatTotalDuty = decimalFormat.format(totalDuty);
                            dbPreAlert.setCalculatedTotalDuty(formatTotalDuty);
                        }
                    }
                }

                //HAWB_TYPE
                dbPreAlert.setHawbType("EVENT");
                dbPreAlert.setHawbTypeId("3");
                Optional<IKeyValuePair> statusText = consignmentEntityRepository.getEventText(iKeyValuePair.getLangId(), dbPreAlert.getCompanyId(), "3");
                if (statusText.isPresent()) {
                    IKeyValuePair ikey = statusText.get();
                    dbPreAlert.setHawbTypeDescription(ikey.getEventText());
                    dbPreAlert.setHawbTimeStamp(new Date());
                }

                PreAlert newPreAlert = new PreAlert();
                BeanUtils.copyProperties(dbPreAlert, newPreAlert, CommonUtils.getNullPropertyNames(dbPreAlert));
                newPreAlert.setLanguageId(iKeyValuePair.getLangId());
                newPreAlert.setLanguageDescription(iKeyValuePair.getLangDesc());
                newPreAlert.setCompanyName(iKeyValuePair.getCompanyDesc());
                newPreAlert.setCreatedBy(loginUserID);
                newPreAlert.setUpdatedBy(null);
                newPreAlert.setCreatedOn(new Date());
                newPreAlert.setUpdatedOn(null);
                PreAlert savedPreAlert = preAlertRepository.save(newPreAlert);

                if (savedPreAlert != null) {
                    //Update Consignment-entity
                    consignmentEntityRepository.updateConsignment(savedPreAlert.getCompanyId(), savedPreAlert.getLanguageId(),
                            savedPreAlert.getPartnerId(), savedPreAlert.getPartnerHouseAirwayBill(), savedPreAlert.getPartnerMasterAirwayBill(),
                            savedPreAlert.getConsignmentValue(), savedPreAlert.getExchangeRate(), savedPreAlert.getIata(),
                            savedPreAlert.getConsignmentValueLocal(), savedPreAlert.getAddIata(), savedPreAlert.getAddInsurance(),
                            savedPreAlert.getCustomsValue(), savedPreAlert.getCalculatedTotalDuty());
                    log.info("consignment updated");

                    consignmentEntityRepository.updatePieceId(savedPreAlert.getCompanyId(), savedPreAlert.getLanguageId(),
                            savedPreAlert.getPartnerId(), savedPreAlert.getPartnerHouseAirwayBill(),
                            savedPreAlert.getPartnerMasterAirwayBill());
                    log.info("Piece updated");

                    List<String> piece = replicaPieceDetailsRepository.getPieceId(savedPreAlert.getLanguageId(), savedPreAlert.getCompanyId(),
                            savedPreAlert.getPartnerId(), savedPreAlert.getPartnerHouseAirwayBill());
                    if (piece != null) {
                        for (String pieceId : piece) {
                            consignmentStatusService.insertConsignmentStatusRecord(savedPreAlert.getLanguageId(), savedPreAlert.getLanguageDescription(),
                                    savedPreAlert.getCompanyId(), savedPreAlert.getCompanyName(), pieceId, savedPreAlert.getPartnerMasterAirwayBill(),
                                    savedPreAlert.getPartnerHouseAirwayBill(), savedPreAlert.getHawbType(), savedPreAlert.getHawbTypeId(), savedPreAlert.getHawbTypeDescription(),
                                    savedPreAlert.getHawbTimeStamp(), savedPreAlert.getHawbType(), savedPreAlert.getHawbTypeId(), savedPreAlert.getHawbTypeDescription(),
                                    savedPreAlert.getHawbTimeStamp(), loginUserID);
                        }
                    }
                }
                preAlertList.add(savedPreAlert);
            } else {
                log.info("PreAlert Record is Duplicated ");
                continue;
            }
        }
        return preAlertList;
    }

    /**
     * Update
     *
     * @param updatePreAlertList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    public List<PreAlert> updatePreAlert(List<UpdatePreAlert> updatePreAlertList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<PreAlert> updatedPreAlertList = new ArrayList<>();
            for (UpdatePreAlert updatePreAlert : updatePreAlertList) {
                PreAlert dbPreAlert = getPreAlert(
                        updatePreAlert.getCompanyId(), updatePreAlert.getLanguageId(),
                        updatePreAlert.getPartnerId(), updatePreAlert.getPartnerMasterAirwayBill(),
                        updatePreAlert.getPartnerHouseAirwayBill());

                BeanUtils.copyProperties(updatePreAlert, dbPreAlert, CommonUtils.getNullPropertyNames(updatePreAlert));
                dbPreAlert.setUpdatedBy(loginUserID);
                dbPreAlert.setUpdatedOn(new Date());
                updatedPreAlertList.add(preAlertRepository.save(dbPreAlert));
            }
            return updatedPreAlertList;
        } catch (
                Exception e) {
            // Error Log
            createPreAlertLog3(updatePreAlertList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete
     *
     * @param deleteInputList
     * @param loginUserID
     * @throws IOException
     * @throws CsvException
     */
    public void deletePreAlert(List<PreAlertDeleteInput> deleteInputList, String loginUserID) throws IOException, CsvException {
        try {
            if (deleteInputList != null || !deleteInputList.isEmpty()) {
                for (PreAlertDeleteInput deleteInput : deleteInputList) {
                    PreAlert dbPreAlert = getPreAlert(deleteInput.getCompanyId(), deleteInput.getLanguageId(),
                            deleteInput.getPartnerId(), deleteInput.getPartnerMasterAirwayBill(), deleteInput.getPartnerHouseAirwayBill());

                    if (dbPreAlert != null) {
                        dbPreAlert.setDeletionIndicator(1L);
                        dbPreAlert.setUpdatedBy(loginUserID);
                        dbPreAlert.setUpdatedOn(new Date());

                        preAlertRepository.save(dbPreAlert);
                    }
                }
            }
        } catch (Exception e) {
            // Error Log
            createPreAlertLog4(deleteInputList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /*---------------------------------------------------REPLICA-----------------------------------------------------*/

    public List<ReplicaPreAlert> getAllPreAlert() {
        List<ReplicaPreAlert> preAlertList = replicaPreAlertRepository.findAll();
        preAlertList = preAlertList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return preAlertList;
    }

    /**
     * get
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param partnerMasterAirwayBill
     * @param partnerHouseAirwayBill
     * @return
     */
    public ReplicaPreAlert getPreAlertReplica(String languageId, String companyId, String partnerId, String partnerMasterAirwayBill,
                                              String partnerHouseAirwayBill) {
        Optional<ReplicaPreAlert> dbPreAlert =
                replicaPreAlertRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator
                        (companyId, languageId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, 0L);
        if (dbPreAlert.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", partnerMasterAirwayBill - " + partnerMasterAirwayBill
                    + " and partnerHouseAirwayBill - " + partnerHouseAirwayBill + " doesn't exists";
            // Error Log
            createPreAlertLog(languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbPreAlert.get();
    }

    /**
     * Find
     *
     * @param findPreAlert
     * @return
     */
    public List<ReplicaPreAlert> findPreAlert(FindPreAlert findPreAlert) {
        PreAlertSpecification spec = new PreAlertSpecification(findPreAlert);
        List<ReplicaPreAlert> results = replicaPreAlertRepository.findAll(spec);
        return results;
    }


    //==========================================PreAlert_ErrorLog================================================
    private void createPreAlertLog(String languageId, String companyId, String partnerId, String partnerMasterAirwayBill,
                                   String partnerHouseAirwayBill, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(partnerMasterAirwayBill);
        errorLog.setMethod("Exception thrown in getPreAlert");
        errorLog.setReferenceField1(partnerHouseAirwayBill);
        errorLog.setReferenceField2(partnerId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createPreAlertLog3(List<UpdatePreAlert> updatePreAlertList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (UpdatePreAlert updatePreAlert : updatePreAlertList) {
            ErrorLog errorLog = new ErrorLog();
            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(updatePreAlert.getLanguageId());
            errorLog.setCompanyId(updatePreAlert.getCompanyId());
            errorLog.setRefDocNumber(updatePreAlert.getPartnerMasterAirwayBill());
            errorLog.setMethod("Exception thrown in updatePreAlert");
            errorLog.setReferenceField1(updatePreAlert.getPartnerId());
            errorLog.setReferenceField2(updatePreAlert.getPartnerHouseAirwayBill());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }


    private void createPreAlertLog4(List<PreAlertDeleteInput> deleteInputList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (PreAlertDeleteInput deleteInput : deleteInputList) {
            ErrorLog errorLog = new ErrorLog();
            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(deleteInput.getLanguageId());
            errorLog.setCompanyId(deleteInput.getCompanyId());
            errorLog.setRefDocNumber(deleteInput.getPartnerMasterAirwayBill());
            errorLog.setMethod("Exception thrown in deletePreAlert");
            errorLog.setReferenceField1(deleteInput.getPartnerId());
            errorLog.setReferenceField2(deleteInput.getPartnerHouseAirwayBill());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }
}



package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.ccr.*;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.repository.BondedManifestLineRepository;
import com.courier.overc360.api.midmile.primary.repository.CcrRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.replica.model.ccr.FindCcr;
import com.courier.overc360.api.midmile.replica.model.ccr.ReplicaCcr;
import com.courier.overc360.api.midmile.replica.repository.ReplicaCcrRepository;
import com.courier.overc360.api.midmile.replica.repository.specification.CcrSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;

import org.springframework.beans.BeanUtils;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
public class CcrService {

    @Autowired
    private CcrRepository ccrRepository;

    @Autowired
    private ReplicaCcrRepository replicaCcrRepository;

    @Autowired
    private BondedManifestLineRepository bondedManifestLineRepository;

    @Autowired
    private ErrorLogService errorLogService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    /*---------------------------------------------------PRIMARY-----------------------------------------------------*/

    /**
     * Get Ccr
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param consoleId
     * @param customsCcrNo
     * @return
     */
    public Ccr getCcr(String languageId, String companyId, String partnerId, String masterAirwayBill,
                      String houseAirwayBill, String consoleId, String ccrId, String customsCcrNo) {
        Optional<Ccr> dbCcr =
                ccrRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndCcrIdAndCustomsCcrNoAndDeletionIndicator(
                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, ccrId, customsCcrNo, 0L);
        if (dbCcr.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill + ", houseAirwayBill - "
                    + houseAirwayBill + " , consoleId - " + consoleId + ", ccrId - " + ccrId + " and customsCcrNo - " + customsCcrNo + " doesn't exists";
            // Error Log
            createCcrLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, ccrId, customsCcrNo, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbCcr.get();
    }

    /**
     * Create Ccr
     *
     * @param addCcrList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public List<Ccr> createCcr(List<AddCcr> addCcrList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Ccr> createdCcrList = new ArrayList<>();

            for (AddCcr addCcr : addCcrList) {

                boolean duplicate = replicaCcrRepository.duplicateExists(
                        addCcr.getLanguageId(), addCcr.getCompanyId(),
                        addCcr.getPartnerId(), addCcr.getMasterAirwayBill(),
                        addCcr.getHouseAirwayBill(), addCcr.getConsoleId(), addCcr.getCustomsCcrNo()) == 1;

               //Calculate TotalDuty value
                IKeyValuePair iKeyValuePair = bondedManifestLineRepository.getToCurrencyValue(addCcr.getFreightCurrency());
                Double freightCharge = Double.valueOf(addCcr.getFreightCharges());
                Double toCurrencyValue = Double.valueOf(iKeyValuePair.getCurrencyValue());
                String incoTerms = addCcr.getIncoTerms();

                Double totalDuty = null;
                if (toCurrencyValue != null && freightCharge != null) {
                    totalDuty = toCurrencyValue * freightCharge;
                    if (totalDuty > 100) {
                        totalDuty += totalDuty * 0.05;
                    }
                    if (incoTerms != null && incoTerms.equalsIgnoreCase("DDU")) {
                        totalDuty += 4;
                    }
                }

                if (duplicate) {
                    throw new BadRequestException("Record is getting Duplicated with given values : customsCcrNo - " + addCcr.getCustomsCcrNo());
                }

                Ccr newCcr = new Ccr();
                BeanUtils.copyProperties(addCcr, newCcr, CommonUtils.getNullPropertyNames(addCcr));

                String STATUS_ID = "2 - Ccr Created";
                String NUM_RAN_OBJ = "CCR_ID";
                String CCR_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                log.info("next Value from NumberRange for CCR_ID : " + CCR_ID);
                newCcr.setCcrId(CCR_ID);

                IKeyValuePair lAndCDesc = ccrRepository.getLAndCDescription(
                        addCcr.getLanguageId(), addCcr.getCompanyId());

                if (lAndCDesc != null) {
                    newCcr.setLanguageDescription(lAndCDesc.getLangDesc());
                    newCcr.setCompanyName(lAndCDesc.getCompanyDesc());
                }
                newCcr.setTotalDuty(String.valueOf(totalDuty));
                newCcr.setStatusId(STATUS_ID);
                newCcr.setDeletionIndicator(0L);
                newCcr.setCreatedBy(loginUserID);
                newCcr.setCreatedOn(new Date());
                newCcr.setUpdatedBy(loginUserID);
                newCcr.setUpdatedOn(new Date());

                Ccr createdCcr = ccrRepository.save(newCcr);
                createdCcrList.add(createdCcr);
            }
            return createdCcrList;
        } catch (Exception e) {
            // Error Log
            createCcrLog2(addCcrList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Update Ccr
     *
     * @param updateCcrList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public List<Ccr> updateCcr(List<UpdateCcr> updateCcrList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Ccr> updatedCcrList = new ArrayList<>();

            for (UpdateCcr updateCcr : updateCcrList) {

                Ccr dbCcr = getCcr(
                        updateCcr.getLanguageId(), updateCcr.getCompanyId(),
                        updateCcr.getPartnerId(), updateCcr.getMasterAirwayBill(),
                        updateCcr.getHouseAirwayBill(), updateCcr.getConsoleId(), updateCcr.getCcrId(), updateCcr.getCustomsCcrNo());


                BeanUtils.copyProperties(updateCcr, dbCcr, CommonUtils.getNullPropertyNames(updateCcr));
                dbCcr.setUpdatedBy(loginUserID);
                dbCcr.setUpdatedOn(new Date());

                Ccr updatedBondedManifest = ccrRepository.save(dbCcr);
                updatedCcrList.add(updatedBondedManifest);
            }
            return updatedCcrList;
        } catch (Exception e) {
            // Error Log
            createCcrLog3(updateCcrList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete Ccr
     *
     * @param deleteInputList
     * @param loginUserID
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public void deleteCcr(List<CcrDeleteInput> deleteInputList, String loginUserID) throws IOException, CsvException {
        try {
            if (deleteInputList != null || !deleteInputList.isEmpty()) {
                for (CcrDeleteInput deleteInput : deleteInputList) {

                    Ccr dbCcr = getCcr(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                            deleteInput.getPartnerId(), deleteInput.getMasterAirwayBill(), deleteInput.getHouseAirwayBill(), deleteInput.getConsoleId(), deleteInput.getCcrId(), deleteInput.getCustomsCcrNo());

                    if (dbCcr != null) {
                        dbCcr.setDeletionIndicator(1L);
                        dbCcr.setUpdatedBy(loginUserID);
                        dbCcr.setUpdatedOn(new Date());


                        ccrRepository.save(dbCcr);
                    }
                }
            }
        } catch (Exception e) {
            // Error Log
            createCcrLog4(deleteInputList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
    /*---------------------------------------------------REPLICA-----------------------------------------------------*/

    /**
     * Get All CcrDetails
     *
     * @return
     */
    public List<ReplicaCcr> getAllCcr() {
        List<ReplicaCcr> ccrList = replicaCcrRepository.findAll();
        ccrList = ccrList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return ccrList;
    }

    /**
     * Get Ccr - Replica
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param ccrId
     * @param consoleId
     * @param customsCcrNo
     * @return
     */
    public ReplicaCcr getCcrReplica(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                    String houseAirwayBill, String consoleId, String ccrId, String customsCcrNo) {
        Optional<ReplicaCcr> dbCcr =
                replicaCcrRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndCcrIdAndCustomsCcrNoAndDeletionIndicator(
                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, ccrId, customsCcrNo, 0L);
        if (dbCcr.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill
                    + ", houseAirwayBill - " + houseAirwayBill + " ,consoleId - " + consoleId + ", ccrId - " + ccrId + " and customsCcrNo - " + customsCcrNo + " doesn't exists";
            // Error Log
            createCcrLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, ccrId, customsCcrNo, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbCcr.get();
    }

    /**
     * Find Ccr
     *
     * @param findCcr
     * @return
     * @throws Exception
     */
    public List<ReplicaCcr> findCcr(FindCcr findCcr) throws Exception {

        CcrSpecification spec = new CcrSpecification(findCcr);
        List<ReplicaCcr> results = replicaCcrRepository.findAll(spec);
        log.info("found Ccr  --> " + results);
        return results;
    }


    //==========================================Ccr_ErrorLog================================================
    private void createCcrLog(String languageId, String companyId, String partnerId, String masterAirwayBill,
                              String houseAirwayBill, String consoleId, String ccrId, String customCcrNo, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(masterAirwayBill);
        errorLog.setMethod("Exception thrown in getCcr");
        errorLog.setReferenceField1(houseAirwayBill);
        errorLog.setReferenceField2(partnerId);
        errorLog.setReferenceField3(ccrId);
        errorLog.setReferenceField4(customCcrNo);
        errorLog.setReferenceField5(consoleId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }


    private void createCcrLog2(List<AddCcr> addCcrList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (AddCcr addCcr : addCcrList) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(addCcr.getLanguageId());
            errorLog.setCompanyId(addCcr.getCompanyId());
            errorLog.setRefDocNumber(addCcr.getMasterAirwayBill());
            errorLog.setMethod("Exception thrown in createCcr");
            errorLog.setReferenceField1(addCcr.getPartnerId());
            errorLog.setReferenceField2(addCcr.getHouseAirwayBill());
            errorLog.setReferenceField4(addCcr.getConsoleId());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

    private void createCcrLog3(List<UpdateCcr> updateCcrList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (UpdateCcr updateCcr : updateCcrList) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(updateCcr.getLanguageId());
            errorLog.setCompanyId(updateCcr.getCompanyId());
            errorLog.setRefDocNumber(updateCcr.getMasterAirwayBill());
            errorLog.setMethod("Exception thrown in updateCcr");
            errorLog.setReferenceField1(updateCcr.getPartnerId());
            errorLog.setReferenceField2(updateCcr.getHouseAirwayBill());
            errorLog.setReferenceField3(updateCcr.getCcrId());
            errorLog.setReferenceField5(updateCcr.getCustomsCcrNo());
            errorLog.setReferenceField6(updateCcr.getConsoleId());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

    private void createCcrLog4(List<CcrDeleteInput> deleteInputList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (CcrDeleteInput deleteInput : deleteInputList) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(deleteInput.getLanguageId());
            errorLog.setCompanyId(deleteInput.getCompanyId());
            errorLog.setRefDocNumber(deleteInput.getMasterAirwayBill());
            errorLog.setMethod("Exception thrown in deleteCcr");
            errorLog.setReferenceField1(deleteInput.getPartnerId());
            errorLog.setReferenceField2(deleteInput.getHouseAirwayBill());
            errorLog.setReferenceField3(deleteInput.getCcrId());
            errorLog.setReferenceField4(deleteInput.getCustomsCcrNo());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }
}

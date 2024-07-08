package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.ccr.*;
import com.courier.overc360.api.midmile.primary.model.console.AddConsole;
import com.courier.overc360.api.midmile.primary.model.console.Console;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.repository.BondedManifestRepository;
import com.courier.overc360.api.midmile.primary.repository.CcrRepository;
import com.courier.overc360.api.midmile.primary.repository.ConsignmentEntityRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.replica.model.ccr.FindCcr;
import com.courier.overc360.api.midmile.replica.model.ccr.ReplicaCcr;
import com.courier.overc360.api.midmile.replica.model.ccr.UpdateCCR;
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
    private BondedManifestRepository bondedManifestRepository;

    @Autowired
    private ErrorLogService errorLogService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    ConsignmentEntityRepository consignmentEntityRepository;

    @Autowired
    ConsignmentStatusService consignmentStatusService;
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
     * @return
     */
    public Ccr getCcr(String languageId, String companyId, String partnerId, String masterAirwayBill,
                      String houseAirwayBill, String consoleId, String ccrId) {
        Optional<Ccr> dbCcr =
                ccrRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndCcrIdAndDeletionIndicator(
                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, ccrId, 0L);
        if (dbCcr.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill + ", houseAirwayBill - "
                    + houseAirwayBill + " , consoleId - " + consoleId + ", and ccrId - " + ccrId + " doesn't exists";
            // Error Log
            createCcrLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, ccrId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbCcr.get();
    }


    //Create ConsoleCcr
    @Transactional
    public List<Ccr> createConsoleCcr(List<Console> addCcrList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Ccr> createdCcrList = new ArrayList<>();

            String NUM_RAN_OBJ = "CCRID";
            String CCR_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
            log.info("next Value from NumberRange for CCR_ID : " + CCR_ID);

            for (Console addCcr : addCcrList) {

                Optional<Ccr> duplicateConsole =  ccrRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                        addCcr.getCompanyId(), addCcr.getLanguageId(), addCcr.getPartnerId(), addCcr.getMasterAirwayBill(), addCcr.getHouseAirwayBill(), 0L);
                if(duplicateConsole.isPresent()) {
                    throw new BadRequestException("Record is getting Duplicated with given value CompanyId " + addCcr.getCompanyId() +
                            " LanguageId " + addCcr.getLanguageId() + " PartnerId " + addCcr.getPartnerId() + " MasterAirwayBill " + addCcr.getMasterAirwayBill() +
                            " HouseAirwayBill " + addCcr.getHouseAirwayBill());
                }

                Double customsValue = null;
                if(addCcr.getCustomsValue() != null) {
                     customsValue = Double.valueOf(addCcr.getCustomsValue());
                }
                Ccr newCcr = new Ccr();
                BeanUtils.copyProperties(addCcr, newCcr, CommonUtils.getNullPropertyNames(addCcr));

                if(customsValue != null && customsValue < 100){
                    newCcr.setIsExempted("yes");
                }else {
                    newCcr.setIsExempted("No");
                }
                newCcr.setCcrId(CCR_ID);

                IKeyValuePair eventStatus =  consignmentEntityRepository.getStatusEventText(addCcr.getCompanyId(), "6", "11");

                if(eventStatus != null) {
                    newCcr.setStatusId("6");
                    newCcr.setEventCode("11");
                    newCcr.setStatusText(eventStatus.getStatusText());
                    newCcr.setEventText(eventStatus.getEventText());
                    newCcr.setEventTimestamp(new Date());
                    newCcr.setStatusTimestamp(new Date());
                }

                newCcr.setDeletionIndicator(0L);
                newCcr.setCreatedBy(loginUserID);
                newCcr.setCreatedOn(new Date());
                newCcr.setUpdatedBy(loginUserID);
                newCcr.setUpdatedOn(new Date());

                Ccr createdCcr = ccrRepository.save(newCcr);

                // Save ConsignmentStatus
                consignmentStatusService.createConsignmentStatusParams(createdCcr.getCompanyId(), createdCcr.getCompanyName(),
                        createdCcr.getLanguageId(), createdCcr.getLanguageDescription(), createdCcr.getPieceId(), createdCcr.getStatusId(),
                        createdCcr.getMasterAirwayBill(), createdCcr.getHouseAirwayBill(), createdCcr.getStatusText(), createdCcr.getStatusId(),
                        createdCcr.getStatusText(), createdCcr.getEventCode(), createdCcr.getEventText(), createdCcr.getEventCode(),
                        createdCcr.getEventText(), createdCcr.getEventTimestamp(), createdCcr.getEventTimestamp(), createdCcr.getStatusTimestamp(), loginUserID );

                if (createdCcr != null) {
                    ccrRepository.updateEventCodeFromConsignment(createdCcr.getCompanyId(), createdCcr.getLanguageId(), createdCcr.getPartnerId(),
                            createdCcr.getHouseAirwayBill(), createdCcr.getMasterAirwayBill(), createdCcr.getEventCode(), createdCcr.getEventText(),
                            createdCcr.getStatusId(), createdCcr.getStatusText());
                    log.info("CCR Created <-----------------------> Consignment Event Updated");
                }
                createdCcrList.add(createdCcr);
            }
            return createdCcrList;
        } catch (Exception e) {
            // Error Log
            createCcrLog5(addCcrList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
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
                        addCcr.getHouseAirwayBill(), addCcr.getConsoleId()) == 1;

                //Check IsExempted status and throw error
                if (addCcr.getIsExempted().equalsIgnoreCase("Yes")) {
                    if (addCcr.getExemptionFor() == null || addCcr.getExemptionBeneficiary() == null || addCcr.getExemptionReference() == null) {
                        throw new BadRequestException(" ExemptionFor - " + addCcr.getExemptionFor() + " , ExemptionBeneficiary - "
                                + addCcr.getExemptionBeneficiary() + " and ExemptionReference - " + addCcr.getExemptionReference() + " is mandatory ");
                    }
                } else if (addCcr.getIsExempted().equalsIgnoreCase("No")) {
                    if (addCcr.getConsigneeName() == null || addCcr.getInvoiceDate() == null || addCcr.getInvoiceType() == null ||
                            addCcr.getCurrency() == null || addCcr.getInvoiceSupplierName() == null || addCcr.getFreightCurrency() == null ||
                            addCcr.getFreightCharges() == null || addCcr.getCountryOfOrigin() == null) {

                        throw new BadRequestException(" ConsigneeName -  " + addCcr.getConsigneeName() + ",InvoiceDate - " + addCcr.getInvoiceDate() +
                                ", InvoiceType - " + addCcr.getInvoiceType() + ", Currency - " + addCcr.getCurrency() + ", InvoiceSupplierName - " + addCcr.getInvoiceSupplierName() +
                                ", FreightCurrency - " + addCcr.getFreightCurrency() + ", FreightCharges - " + addCcr.getFreightCharges() +
                                " and CountryOfOrigin - " + addCcr.getCountryOfOrigin() + " is mandatory ");
                    }
                }

                //Get Iatakd
                IKeyValuePair iataData = ccrRepository.getIataKd(addCcr.getCountryOfOrigin(),
                        addCcr.getLanguageId(), addCcr.getCompanyId());

                //Calculate TotalDuty value
//                IKeyValuePair iKeyValuePair = bondedManifestRepository.getToCurrencyValue(addCcr.getFreightCurrency());
//                Double freightCharge = Double.valueOf(addCcr.getFreightCharges());
//                Double toCurrencyValue = Double.valueOf(iKeyValuePair.getCurrencyValue());
//                String incoTerms = addCcr.getIncoTerms();
//
//                Double totalDuty = null;
//                if (toCurrencyValue != null && freightCharge != null) {
//                    totalDuty = toCurrencyValue * freightCharge;
//                    if (totalDuty > 100) {
//                        totalDuty += totalDuty * 0.05;
//                    }
//                    if (incoTerms != null && incoTerms.equalsIgnoreCase("DDU")) {
//                        totalDuty += 4;
//                    }
//                }

                if (duplicate) {
                    throw new BadRequestException("Record is getting Duplicated with given values : houseAirwayBill - " + addCcr.getHouseAirwayBill());
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
                newCcr.setIataKd(iataData.getIataKd());
                //   newCcr.setTotalDuty(String.valueOf(totalDuty));
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
                        updateCcr.getHouseAirwayBill(), updateCcr.getConsoleId(), updateCcr.getCcrId());


                BeanUtils.copyProperties(updateCcr, dbCcr, CommonUtils.getNullPropertyNames(updateCcr));
                dbCcr.setUpdatedBy(loginUserID);
                dbCcr.setUpdatedOn(new Date());

                Ccr updatedCcr = ccrRepository.save(dbCcr);
                updatedCcrList.add(updatedCcr);
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
                            deleteInput.getPartnerId(), deleteInput.getMasterAirwayBill(), deleteInput.getHouseAirwayBill(), deleteInput.getConsoleId(), deleteInput.getCcrId());

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
     * @return
     */
    public ReplicaCcr getCcrReplica(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                    String houseAirwayBill, String consoleId, String ccrId) {
        Optional<ReplicaCcr> dbCcr =
                replicaCcrRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndCcrIdAndDeletionIndicator(
                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, ccrId, 0L);
        if (dbCcr.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill
                    + ", houseAirwayBill - " + houseAirwayBill + " ,consoleId - " + consoleId + " , and ccrId - " + ccrId +  " doesn't exists";
            // Error Log
            createCcrLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, ccrId, errMsg);
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
                              String houseAirwayBill, String consoleId, String ccrId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(masterAirwayBill);
        errorLog.setMethod("Exception thrown in getCcr");
        errorLog.setReferenceField1(houseAirwayBill);
        errorLog.setReferenceField2(partnerId);
        errorLog.setReferenceField3(ccrId);
        errorLog.setReferenceField4(consoleId);
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

    private void createCcrLog5(List<Console> addCcrList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (Console addCcr : addCcrList) {
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

    //==========================================update CCR from Bayan PDF================================================

    /**
     * Get Ccr - Replica
     * @param ccrId
     * @return
     */
    public List<Ccr> getCcr(String ccrId) {
        List<Ccr> dbCcrList = ccrRepository.findAllByCcrIdAndDeletionIndicator(ccrId, 0L);
        return dbCcrList;
    }
    /**
     *
     * @param updateCcrList
     * @return
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public String updateCCRFromBayan(List<UpdateCCR> updateCcrList) throws IOException, CsvException {
        try {
            List<Ccr> updatedCcrList = new ArrayList<>();
            for (UpdateCCR updateCcr : updateCcrList) {
                List<Ccr> dbCcrList = getCcr(updateCcr.getCcrId());
                if (dbCcrList != null && !dbCcrList.isEmpty()) {
                    for (Ccr dbCcr : dbCcrList) {
                        if (dbCcr.getCcrId().equalsIgnoreCase(updateCcr.getCcrId()) &&
                                dbCcr.getHsCode().equalsIgnoreCase(updateCcr.getHsCode()) &&
                                dbCcr.getConsignmentValue().equalsIgnoreCase(updateCcr.getConsignmentValue())) {
                            dbCcr.setCustomsCcrNo(updateCcr.getCustomsCcrNo());
                            dbCcr.setPrimaryDo(updateCcr.getPrimaryDo());
                            dbCcr.setCustomsKd(updateCcr.getCustomsKd());
                            dbCcr.setUpdatedBy("Bayan");
                            dbCcr.setUpdatedOn(new Date());
                            Ccr updatedCcr = ccrRepository.save(dbCcr);
                            updatedCcrList.add(updatedCcr);
                        }
                    }
                }
            }
            return "Update Success";
        } catch (Exception e) {
            // Error Log
            createCcrLog(updateCcrList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
    /**
     *
     * @param updateCcrList
     * @param error
     * @throws IOException
     * @throws CsvException
     */
    private void createCcrLog(List<UpdateCCR> updateCcrList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (UpdateCCR updateCcr : updateCcrList) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setRefDocNumber(updateCcr.getCcrId());
            errorLog.setMethod("Exception thrown in updateCcr from bayan PDF");
            errorLog.setReferenceField1(updateCcr.getCustomsCcrNo());
            errorLog.setReferenceField2(updateCcr.getPrimaryDo());
            errorLog.setReferenceField3(updateCcr.getHsCode());
            errorLog.setReferenceField5(updateCcr.getConsignmentValue());
            errorLog.setReferenceField6(updateCcr.getCustomsKd());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }
}

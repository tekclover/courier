package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.company.Company;
import com.courier.overc360.api.idmaster.primary.model.currencyExchangeRate.AddCurrencyExchangeRate;
import com.courier.overc360.api.idmaster.primary.model.currencyExchangeRate.CurrenyExchangeRate;
import com.courier.overc360.api.idmaster.primary.model.currencyExchangeRate.UpdateCurrencyExchangeRate;
import com.courier.overc360.api.idmaster.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.idmaster.primary.repository.CompanyRepository;
import com.courier.overc360.api.idmaster.primary.repository.CurrencyExchangeRateRepository;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.currencyExchangeRate.FindCurrencyExchangeRate;
import com.courier.overc360.api.idmaster.replica.model.currencyExchangeRate.ReplicaCurrencyExchangeRate;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaCompanyRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaCurrencyExchangeRateRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaStatusRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaCurrencyExchangeRateSpecification;
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
public class CurrencyExchangeRateService {

    @Autowired
    private ReplicaStatusRepository replicaStatusRepository;

    @Autowired
    private ReplicaCompanyRepository replicaCompanyRepository;

    @Autowired
    private CurrencyExchangeRateRepository currencyExchangeRateRepository;

    @Autowired
    private ReplicaCurrencyExchangeRateRepository replicaCurrencyExchangeRateRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;


    /*--------------------------------------------------------PRIMARY------------------------------------------------------------------------*/

    /**
     * Get
     *
     * @param languageId
     * @param companyId
     * @param fromCurrencyId
     * @param toCurrencyId
     * @return
     */
    public CurrenyExchangeRate getCurrencyExchangeRate(String languageId, String companyId, String fromCurrencyId, String toCurrencyId) {

        Optional<CurrenyExchangeRate> dbCurrencyExchangeRate = currencyExchangeRateRepository.findByLanguageIdAndCompanyIdAndFromCurrencyIdAndToCurrencyIdAndDeletionIndicator
                (languageId, companyId, fromCurrencyId, toCurrencyId, 0L);
        if (dbCurrencyExchangeRate.isEmpty()) {
            // Error Log
            createCurrencyExchangeRateLog1(languageId, companyId, fromCurrencyId, toCurrencyId, "FromCurrencyId - " + fromCurrencyId + " and given values doesn't exists");
            throw new BadRequestException("FromCurrencyId - " + fromCurrencyId + " and given values doesn't exists");
        }
        return dbCurrencyExchangeRate.get();
    }

    /**
     * Create
     *
     * @param addCurrencyExchangeRate
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */

    @Transactional
    public CurrenyExchangeRate createCurrencyExchangeRate(AddCurrencyExchangeRate addCurrencyExchangeRate, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Optional<Company> dbCompany = companyRepository.findByCompanyIdAndLanguageIdAndDeletionIndicator(
                    addCurrencyExchangeRate.getCompanyId(), addCurrencyExchangeRate.getLanguageId(), 0L);

            Optional<CurrenyExchangeRate> duplicateCurrencyExchangeRate = currencyExchangeRateRepository.findByLanguageIdAndCompanyIdAndFromCurrencyIdAndToCurrencyIdAndDeletionIndicator(
                    addCurrencyExchangeRate.getLanguageId(), addCurrencyExchangeRate.getCompanyId(), addCurrencyExchangeRate.getFromCurrencyId(), addCurrencyExchangeRate.getToCurrencyId(), 0l);

            if (dbCompany.isEmpty()) {
                throw new BadRequestException("CompanyId - " + addCurrencyExchangeRate.getCompanyId()
                        + " and languageId - " + addCurrencyExchangeRate.getLanguageId() + " doesn't exists");
            } else if (duplicateCurrencyExchangeRate.isPresent()) {
                throw new BadRequestException("Record is getting Duplicated with the given values : fromCurrencyId - " + addCurrencyExchangeRate.getFromCurrencyId());
            } else {
                log.info("new CurrencyExchangeRate --> " + addCurrencyExchangeRate);
                IKeyValuePair iKeyValuePair = replicaCompanyRepository.getDescription(
                        addCurrencyExchangeRate.getLanguageId(), addCurrencyExchangeRate.getCompanyId());

                CurrenyExchangeRate newCurrencyExchangeRate = new CurrenyExchangeRate();
                BeanUtils.copyProperties(addCurrencyExchangeRate, newCurrencyExchangeRate, CommonUtils.getNullPropertyNames(addCurrencyExchangeRate));
                if (addCurrencyExchangeRate.getFromCurrencyId() == null || addCurrencyExchangeRate.getFromCurrencyId().isBlank()) {
                    String NUM_RAN_OBJ = "CURRENCYEXCHANGERATE";
                    String FROM_CURRENCY_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for FROM_CURRENCY_ID : " + FROM_CURRENCY_ID);
                    newCurrencyExchangeRate.setFromCurrencyId(FROM_CURRENCY_ID);
                }
                if (iKeyValuePair != null) {
                    newCurrencyExchangeRate.setLanguageDescription(iKeyValuePair.getLangDesc());
                    newCurrencyExchangeRate.setCompanyName(iKeyValuePair.getCompanyDesc());
                }
                String statusDesc = replicaStatusRepository.getStatusDescription(addCurrencyExchangeRate.getStatusId());
                if (statusDesc != null) {
                    newCurrencyExchangeRate.setStatusDescription(statusDesc);
                }
                newCurrencyExchangeRate.setDeletionIndicator(0L);
                newCurrencyExchangeRate.setCreatedBy(loginUserID);
                newCurrencyExchangeRate.setCreatedOn(new Date());
                newCurrencyExchangeRate.setUpdatedBy(loginUserID);
                newCurrencyExchangeRate.setUpdatedOn(new Date());
                return currencyExchangeRateRepository.save(newCurrencyExchangeRate);
            }
        } catch (Exception e) {
            // Error Log
            createCurrencyExchangeRateLog2(addCurrencyExchangeRate, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Upadte
     *
     * @param languageId
     * @param companyId
     * @param fromCurrencyId
     * @param toCurrencyId
     * @param updateCurrencyExchangeRate
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public CurrenyExchangeRate updateCurrencyExchangeRate(String languageId, String companyId, String fromCurrencyId,
                                                          String toCurrencyId, UpdateCurrencyExchangeRate updateCurrencyExchangeRate, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            CurrenyExchangeRate dbCurrencyExchangeRate = getCurrencyExchangeRate(languageId, companyId, fromCurrencyId, toCurrencyId);
            BeanUtils.copyProperties(updateCurrencyExchangeRate, dbCurrencyExchangeRate, CommonUtils.getNullPropertyNames(updateCurrencyExchangeRate));
            if (updateCurrencyExchangeRate.getStatusId() != null) {
                String statusDesc = replicaStatusRepository.getStatusDescription(updateCurrencyExchangeRate.getStatusId());
                if (statusDesc != null) {
                    dbCurrencyExchangeRate.setStatusDescription(statusDesc);
                }
            }
            dbCurrencyExchangeRate.setUpdatedBy(loginUserID);
            dbCurrencyExchangeRate.setUpdatedOn(new Date());
            return currencyExchangeRateRepository.save(dbCurrencyExchangeRate);
        } catch (Exception e) {
            // Error Log
            createCurrencyExchangeRateLog(languageId, companyId, fromCurrencyId, toCurrencyId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete
     *
     * @param languageId
     * @param companyId
     * @param fromCurrencyId
     * @param toCurrencyId
     * @param loginUserID
     */
    public void deleteCurrencyExchangeRate(String languageId, String companyId, String fromCurrencyId, String toCurrencyId, String loginUserID) {

        CurrenyExchangeRate dbCurrencyExchangeRate = getCurrencyExchangeRate(languageId, companyId, fromCurrencyId, toCurrencyId);
        if (dbCurrencyExchangeRate != null) {
            dbCurrencyExchangeRate.setDeletionIndicator(1L);
            dbCurrencyExchangeRate.setUpdatedBy(loginUserID);
            dbCurrencyExchangeRate.setUpdatedOn(new Date());
            currencyExchangeRateRepository.save(dbCurrencyExchangeRate);
        } else {
            // Error Log
            createCurrencyExchangeRateLog1(languageId, companyId, fromCurrencyId, toCurrencyId, "Error in deleting FromCurrencyId - " + fromCurrencyId);
            throw new BadRequestException("Error in deleting FromCurrencyId - " + fromCurrencyId);
        }
    }

    //===============================================Replica==================================================

    /**
     * Get All CurrencyExchangeRate Details
     *
     * @return
     */
    public List<ReplicaCurrencyExchangeRate> getAllCurrencyExchangeRate() {
        List<ReplicaCurrencyExchangeRate> currencyExchangeRateList = replicaCurrencyExchangeRateRepository.findAll();
        currencyExchangeRateList = currencyExchangeRateList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return currencyExchangeRateList;
    }

    /**
     * Get
     *
     * @param languageId
     * @param companyId
     * @param fromCurrencyId
     * @param toCurrencyId
     * @return
     */
    public ReplicaCurrencyExchangeRate replicaGetCurrencyExchangeRate(String languageId, String companyId, String fromCurrencyId, String toCurrencyId) {

        Optional<ReplicaCurrencyExchangeRate> dbCurrencyExchangeRate = replicaCurrencyExchangeRateRepository.findByLanguageIdAndCompanyIdAndFromCurrencyIdAndToCurrencyIdAndDeletionIndicator
                (languageId, companyId, fromCurrencyId, toCurrencyId, 0L);
        if (dbCurrencyExchangeRate.isEmpty()) {
            // Error Log
            createCurrencyExchangeRateLog1(languageId, companyId, fromCurrencyId, toCurrencyId, "FromCurrencyId - " + fromCurrencyId + " and given values doesn't exists");
            throw new BadRequestException("FromCurrencyId - " + fromCurrencyId + " and given values doesn't exists");
        }
        return dbCurrencyExchangeRate.get();
    }

    /**
     * Find
     *
     * @param findCurrencyExchangeRate
     * @return
     * @throws Exception
     */
    public List<ReplicaCurrencyExchangeRate> findCurrencyExchangeRate(FindCurrencyExchangeRate findCurrencyExchangeRate) throws Exception {

        ReplicaCurrencyExchangeRateSpecification spec = new ReplicaCurrencyExchangeRateSpecification(findCurrencyExchangeRate);
        List<ReplicaCurrencyExchangeRate> results = replicaCurrencyExchangeRateRepository.findAll(spec);
        log.info("found CurrencyExchangeRate --> " + results);
        return results;
    }

    //=============================================CurrencyExchangeRate_ErrorLog====================================================


    private void createCurrencyExchangeRateLog(String languageId, String companyId, String fromCurrencyId, String toCurrencyId, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(fromCurrencyId);
        errorLog.setReferenceField1(toCurrencyId);
        errorLog.setMethod("Exception thrown in updateCurrencyExchangeRate");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createCurrencyExchangeRateLog1(String languageId, String companyId, String fromCurrencyId, String toCurrencyId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(fromCurrencyId);
        errorLog.setReferenceField1(toCurrencyId);
        errorLog.setMethod("Exception thrown in getCurrencyExchangeRate");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createCurrencyExchangeRateLog2(AddCurrencyExchangeRate addCurrencyExchangeRate, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addCurrencyExchangeRate.getLanguageId());
        errorLog.setCompanyId(addCurrencyExchangeRate.getCompanyId());
        errorLog.setRefDocNumber(addCurrencyExchangeRate.getFromCurrencyId());
        errorLog.setReferenceField1(addCurrencyExchangeRate.getToCurrencyId());
        errorLog.setMethod("Exception thrown in createCurrencyExchangeRate");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

}

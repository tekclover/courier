package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.replica.model.company.FindCompany;
import com.courier.overc360.api.idmaster.replica.model.company.ReplicaCompany;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaCompanyRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaCompanySpecification;
import com.opencsv.exceptions.CsvException;
import com.courier.overc360.api.idmaster.primary.model.company.AddCompany;
import com.courier.overc360.api.idmaster.primary.model.company.Company;
import com.courier.overc360.api.idmaster.primary.model.company.UpdateCompany;
import com.courier.overc360.api.idmaster.primary.model.language.Language;
import com.courier.overc360.api.idmaster.primary.repository.CompanyRepository;
import com.courier.overc360.api.idmaster.primary.repository.LanguageRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
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

@Slf4j
@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private LanguageRepository languageRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    @Autowired
    private ReplicaCompanyRepository replicaCompanyRepository;


    /*--------------------------------------------------------PRIMARY------------------------------------------------------------------------*/

    /**
     * Get Company
     *
     * @param companyId
     * @param languageId
     * @return
     */
    public Company getCompany(String companyId, String languageId) {

        Optional<Company> dbCompany = companyRepository.findByCompanyIdAndLanguageIdAndDeletionIndicator(
                companyId, languageId, 0L);
        if (dbCompany.isEmpty()) {
            // Error Log
            createCompanyLog1(languageId, companyId, "CompanyId - " + companyId + " and languageId - " + languageId + " doesn't exists");
            throw new BadRequestException("CompanyId - " + companyId + " and languageId - " + languageId + " doesn't exists");
        }
        return dbCompany.get();
    }

    /**
     * Create Company
     *
     * @param addCompany
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Company createCompany(AddCompany addCompany, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Optional<Language> dbLanguage = languageRepository.findByLanguageIdAndDeletionIndicator(
                    addCompany.getLanguageId(), 0L);

            Optional<Company> duplicateCompany = companyRepository.findByCompanyIdAndLanguageIdAndDeletionIndicator(
                    addCompany.getCompanyId(), addCompany.getLanguageId(), 0L);

            if (dbLanguage.isEmpty()) {
                throw new BadRequestException("LanguageId - " + addCompany.getLanguageId() + " doesn't exists");
            } else if (duplicateCompany.isPresent()) {
                throw new BadRequestException("Record is getting Duplicated with given values : companyId - " + addCompany.getCompanyId());
            } else {
                log.info("new Company --> " + addCompany);
                Company newCompany = new Company();
                BeanUtils.copyProperties(addCompany, newCompany, CommonUtils.getNullPropertyNames(addCompany));
                if (addCompany.getCompanyId() == null || addCompany.getCompanyId().isBlank()) {
                    String NUM_RAN_OBJ = "COMPANY";
                    String C_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for C_ID : " + C_ID);
                    newCompany.setCompanyId(C_ID);
                }
                newCompany.setLanguageDescription(dbLanguage.get().getLanguageDescription());
                newCompany.setDeletionIndicator(0L);
                newCompany.setCreatedBy(loginUserID);
                newCompany.setCreatedOn(new Date());
                newCompany.setUpdatedBy(loginUserID);
                newCompany.setUpdatedOn(new Date());
                return companyRepository.save(newCompany);
            }
        } catch (Exception e) {
            // Error Log
            createCompanyLog2(addCompany, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Update Company
     *
     * @param companyId
     * @param languageId
     * @param loginUserID
     * @param updateCompany
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Company updateCompany(String companyId, String languageId, String loginUserID, UpdateCompany updateCompany)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Company dbCompany = getCompany(companyId, languageId);
            BeanUtils.copyProperties(updateCompany, dbCompany, CommonUtils.getNullPropertyNames(updateCompany));
            dbCompany.setUpdatedBy(loginUserID);
            dbCompany.setUpdatedOn(new Date());
            return companyRepository.save(dbCompany);
        } catch (Exception e) {
            // Error Log
            createCompanyLog(languageId, companyId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete Company
     *
     * @param companyId
     * @param languageId
     * @param loginUserID
     */
    public void deleteCompany(String companyId, String languageId, String loginUserID) {
        Company dbCompany = getCompany(companyId, languageId);
        if (dbCompany != null) {
            dbCompany.setDeletionIndicator(1L);
            dbCompany.setUpdatedBy(loginUserID);
            dbCompany.setUpdatedOn(new Date());
            companyRepository.save(dbCompany);
        } else {
            // Error Log
            createCompanyLog1(languageId, companyId, "Error in deleting CompanyId - " + companyId);
            throw new BadRequestException("Error in deleting CompanyId - " + companyId);
        }
    }

    /*======================================================REPLICA=====================================================*/

    /**
     * Get All Company Details
     *
     * @return
     */
    public List<ReplicaCompany> getAllCompanyDetails() {
        List<ReplicaCompany> companyList = replicaCompanyRepository.findAll();
        companyList = companyList.stream().filter(n -> n.getDeletionIndicator() == 0).collect(Collectors.toList());
        return companyList;
    }

    /**
     * Get Company
     *
     * @param companyId
     * @param languageId
     * @return
     */
    public ReplicaCompany replicaGetCompany(String companyId, String languageId) {

        Optional<ReplicaCompany> dbCompany = replicaCompanyRepository.findByCompanyIdAndLanguageIdAndDeletionIndicator(
                companyId, languageId, 0L);
        if (dbCompany.isEmpty()) {
            // Error Log
            createCompanyLog1(languageId, companyId, "CompanyId - " + companyId + " and languageId - " + languageId + " doesn't exists");
            throw new BadRequestException("CompanyId - " + companyId + " and languageId - " + languageId + " doesn't exists");
        }
        return dbCompany.get();
    }


    /**
     * Find Company
     *
     * @param findCompany
     * @return
     */
    public List<ReplicaCompany> findCompany(FindCompany findCompany) {

        ReplicaCompanySpecification spec = new ReplicaCompanySpecification(findCompany);
        List<ReplicaCompany> results = replicaCompanyRepository.findAll(spec);
        log.info("found Companies --> " + results);
        return results;
    }

    //===========================================Company_ErrorLog======================================================
    private void createCompanyLog(String languageId, String companyId, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(companyId);
        errorLog.setMethod("Exception thrown in updateCompany");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
//        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createCompanyLog1(String languageId, String companyId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(companyId);
        errorLog.setMethod("Exception thrown in getCompany");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createCompanyLog2(AddCompany addCompany, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addCompany.getLanguageId());
        errorLog.setCompanyId(addCompany.getCompanyId());
        errorLog.setRefDocNumber(addCompany.getCompanyId());
        errorLog.setMethod("Exception thrown in createCompany");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
//        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

}

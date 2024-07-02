package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.idmaster.primary.model.hsCode.AddHSCode;
import com.courier.overc360.api.idmaster.primary.model.hsCode.HSCode;
import com.courier.overc360.api.idmaster.primary.model.hsCode.UpdateHSCode;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.primary.repository.HSCodeRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.hsCode.FindHSCode;
import com.courier.overc360.api.idmaster.replica.model.hsCode.ReplicaHSCode;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaCompanyRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaHSCodeRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaHSCodeSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
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
public class HSCodeService {

    @Autowired
    private ReplicaCompanyRepository replicaCompanyRepository;

    @Autowired
    private HSCodeRepository hsCodeRepository;

    @Autowired
    private ReplicaHSCodeRepository replicaHSCodeRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;


    /*--------------------------------------------------------PRIMARY------------------------------------------------------------------------*/

    /**
     * Get HSCode
     *
     * @param languageId
     * @param companyId
     * @param hsCode
     * @return
     */
    public HSCode getHsCode(String languageId, String companyId, String hsCode) {

        Optional<HSCode> dbHsCode = hsCodeRepository.findByLanguageIdAndCompanyIdAndHsCodeAndDeletionIndicator(
                languageId, companyId, hsCode, 0L);
        if (dbHsCode.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId
                    + ", companyId - " + companyId + " and HSCode - " + hsCode + " and doesn't exists";
            // Error Log
            createHSCodeLog1(languageId, companyId, hsCode, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbHsCode.get();
    }

    /**
     * Create HSCode
     *
     * @param addHSCode
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public HSCode createHsCode(AddHSCode addHSCode, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            boolean dbCompanyPresent = replicaCompanyRepository.existsByCompanyIdAndLanguageIdAndDeletionIndicator(
                    addHSCode.getCompanyId(), addHSCode.getLanguageId(), 0L);
            if (!dbCompanyPresent) {
                throw new BadRequestException("CompanyId - " + addHSCode.getCompanyId() + " and languageId - " + addHSCode.getLanguageId() + " doesn't exists");
            }

            boolean duplicateHsCodePresent = replicaHSCodeRepository.existsByLanguageIdAndCompanyIdAndHsCodeAndDeletionIndicator(
                    addHSCode.getLanguageId(), addHSCode.getCompanyId(), addHSCode.getHsCode(), 0L);
            if (duplicateHsCodePresent) {
                throw new BadRequestException("Record is getting Duplicated with the given values : hsCode - " + addHSCode.getHsCode());
            }
            log.info("new HSCode --> {}", addHSCode);
            IKeyValuePair iKeyValuePair = replicaCompanyRepository.getDescription(addHSCode.getLanguageId(), addHSCode.getCompanyId());
            HSCode newHsCode = new HSCode();
            BeanUtils.copyProperties(addHSCode, newHsCode, CommonUtils.getNullPropertyNames(addHSCode));
            if ((addHSCode.getHsCode() != null &&
                    (addHSCode.getReferenceField10() != null && addHSCode.getReferenceField10().equalsIgnoreCase("true"))) ||
                    addHSCode.getHsCode() == null || addHSCode.getHsCode().isBlank()) {
                String NUM_RAN_OBJ = "HSCODE";
                String HS_CODE = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                log.info("next Value from NumberRange for HS_CODE : " + HS_CODE);
                newHsCode.setHsCode(HS_CODE);
            }
            if (iKeyValuePair != null) {
                newHsCode.setLanguageDescription(iKeyValuePair.getLangDesc());
                newHsCode.setCompanyName(iKeyValuePair.getCompanyDesc());
            }
            if (addHSCode.getSpecialApprovalId() != null) {
                String specialApprovalDesc = replicaHSCodeRepository.getSpecialApprovalDesc(addHSCode.getSpecialApprovalId(),
                        addHSCode.getLanguageId(), addHSCode.getCompanyId());
                if (specialApprovalDesc != null) {
                    newHsCode.setSpecialApprovalText(specialApprovalDesc);
                }
            }
            newHsCode.setDeletionIndicator(0L);
            newHsCode.setCreatedBy(loginUserID);
            newHsCode.setCreatedOn(new Date());
            newHsCode.setUpdatedBy(loginUserID);
            newHsCode.setUpdatedOn(new Date());
            return hsCodeRepository.save(newHsCode);
        } catch (Exception e) {
            // Error Log
            createHSCodeLog2(addHSCode, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Update HSCode
     *
     * @param languageId
     * @param companyId
     * @param hsCode
     * @param updateHSCode
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public HSCode updateHsCode(String languageId, String companyId, String hsCode, UpdateHSCode updateHSCode, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            HSCode dbHSCode = getHsCode(languageId, companyId, hsCode);
            BeanUtils.copyProperties(updateHSCode, dbHSCode, CommonUtils.getNullPropertyNames(updateHSCode));
            dbHSCode.setUpdatedBy(loginUserID);
            dbHSCode.setUpdatedOn(new Date());
            return hsCodeRepository.save(dbHSCode);
        } catch (Exception e) {
            // Error Log
            createHSCodeLog(languageId, companyId, hsCode, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete HSCode
     *
     * @param languageId
     * @param companyId
     * @param hsCode
     * @param loginUserID
     */
    public void deleteHsCode(String languageId, String companyId, String hsCode, String loginUserID) {

        HSCode dbHSCode = getHsCode(languageId, companyId, hsCode);
        if (dbHSCode != null) {
            dbHSCode.setDeletionIndicator(1L);
            dbHSCode.setUpdatedBy(loginUserID);
            dbHSCode.setUpdatedOn(new Date());
            hsCodeRepository.save(dbHSCode);
        } else {
            // Error Log
            createHSCodeLog1(languageId, companyId, hsCode, "Error in deleting HSCode - " + hsCode);
            throw new BadRequestException("Error in deleting HSCode - " + hsCode);
        }
    }

    //===============================================Replica==================================================

    /**
     * /**
     * Get All HSCode Details
     *
     * @return
     */
    public List<ReplicaHSCode> getAllHsCodes() {
        List<ReplicaHSCode> hsCodeList = replicaHSCodeRepository.findAll();
        hsCodeList = hsCodeList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return hsCodeList;
    }

    /**
     * Get HSCode
     *
     * @param languageId
     * @param companyId
     * @param hsCode
     * @return
     */
    public ReplicaHSCode replicaGetHsCode(String languageId, String companyId, String hsCode) {

        Optional<ReplicaHSCode> dbHsCode = replicaHSCodeRepository.findByLanguageIdAndCompanyIdAndHsCodeAndDeletionIndicator(
                languageId, companyId, hsCode, 0L);
        if (dbHsCode.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId
                    + ", companyId - " + companyId + " and HSCode - " + hsCode + " and doesn't exists";
            // Error Log
            createHSCodeLog1(languageId, companyId, hsCode, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbHsCode.get();
    }

    /**
     * Find HSCodes
     *
     * @param findHSCode
     * @return
     * @throws ParseException
     */
    public List<ReplicaHSCode> findHsCodes(FindHSCode findHSCode) throws ParseException {

        ReplicaHSCodeSpecification spec = new ReplicaHSCodeSpecification(findHSCode);
        List<ReplicaHSCode> results = replicaHSCodeRepository.findAll(spec);
        log.info("found HSCodes --> " + results);
        return results;
    }

    //=============================================HSCode_ErrorLog=====================================================
    private void createHSCodeLog(String languageId, String companyId, String hsCode, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(hsCode);
        errorLog.setMethod("Exception thrown in updateHSCode");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createHSCodeLog1(String languageId, String companyId, String hsCode, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(hsCode);
        errorLog.setMethod("Exception thrown in getHSCode");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createHSCodeLog2(AddHSCode addHSCode, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addHSCode.getLanguageId());
        errorLog.setCompanyId(addHSCode.getCompanyId());
        errorLog.setRefDocNumber(addHSCode.getHsCode());
        errorLog.setMethod("Exception thrown in createHSCode");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

}

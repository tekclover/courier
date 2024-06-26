package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.company.Company;
import com.courier.overc360.api.idmaster.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.idmaster.primary.model.subproject.AddSubProduct;
import com.courier.overc360.api.idmaster.primary.model.subproject.SubProduct;
import com.courier.overc360.api.idmaster.primary.model.subproject.UpdateSubProduct;
import com.courier.overc360.api.idmaster.primary.repository.CompanyRepository;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.primary.repository.SubProductRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.subproduct.FindSubProduct;
import com.courier.overc360.api.idmaster.replica.model.subproduct.ReplicaSubProduct;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaCompanyRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaStatusRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaSubProductRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaSubProductSpecification;
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

@Slf4j
@Service
public class SubProductService {

    @Autowired
    private ReplicaStatusRepository replicaStatusRepository;

    @Autowired
    private ReplicaCompanyRepository replicaCompanyRepository;

    @Autowired
    private SubProductRepository subProductRepository;

    @Autowired
    private ReplicaSubProductRepository replicaSubProductRepository;

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
     * Get SubProduct
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @return
     */
    public SubProduct getSubProduct(String languageId, String companyId, String subProductId) {

        Optional<SubProduct> dbSubProduct = subProductRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndDeletionIndicator(
                languageId, companyId, subProductId, 0L);
        if (dbSubProduct.isEmpty()) {
            // Error Log
            createSubProductLog1(languageId, companyId, subProductId, "SubProductId - " + subProductId + " and given values doesn't exists");
            throw new BadRequestException("SubProductId - " + subProductId + " and given values doesn't exists");
        }
        return dbSubProduct.get();
    }

    /**
     * Create SubProduct
     *
     * @param addSubProduct
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     */
    @Transactional
    public SubProduct createSubProduct(AddSubProduct addSubProduct, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Optional<Company> dbCompany = companyRepository.findByCompanyIdAndLanguageIdAndDeletionIndicator(
                    addSubProduct.getCompanyId(), addSubProduct.getLanguageId(), 0L);

            Optional<SubProduct> duplicateSubProduct = subProductRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndDeletionIndicator(
                    addSubProduct.getLanguageId(), addSubProduct.getCompanyId(), addSubProduct.getSubProductId(), 0L);

            if (dbCompany.isEmpty()) {
                throw new BadRequestException("CompanyId - " + addSubProduct.getCompanyId() + " and languageId - " +
                        addSubProduct.getLanguageId() + " doesn't exists");
            } else if (duplicateSubProduct.isPresent()) {
                throw new BadRequestException("Record is getting Duplicated with the given values : subProductId - " + addSubProduct.getSubProductId());
            } else {
                log.info("new SubProduct --> " + addSubProduct);
                IKeyValuePair iKeyValuePair = replicaCompanyRepository.getDescription(addSubProduct.getLanguageId(), addSubProduct.getCompanyId());
                SubProduct newSubProduct = new SubProduct();
                BeanUtils.copyProperties(addSubProduct, newSubProduct, CommonUtils.getNullPropertyNames(addSubProduct));
                if (addSubProduct.getSubProductId() == null || addSubProduct.getSubProductId().isBlank()) {
                    String NUM_RAN_OBJ = "SUBPRODUCT";
                    String SUB_PRODUCT_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for SUB_PRODUCT_ID : " + SUB_PRODUCT_ID);
                    newSubProduct.setSubProductId(SUB_PRODUCT_ID);
                }
                if (iKeyValuePair != null) {
                    newSubProduct.setLanguageDescription(iKeyValuePair.getLangDesc());
                    newSubProduct.setCompanyName(iKeyValuePair.getCompanyDesc());
                }
                String statusDesc = replicaStatusRepository.getStatusDescription(addSubProduct.getStatusId());
                if (statusDesc != null) {
                    newSubProduct.setStatusDescription(statusDesc);
                }
                newSubProduct.setDeletionIndicator(0L);
                newSubProduct.setCreatedBy(loginUserID);
                newSubProduct.setCreatedOn(new Date());
                newSubProduct.setUpdatedBy(loginUserID);
                newSubProduct.setUpdatedOn(new Date());
                return subProductRepository.save(newSubProduct);
            }
        } catch (Exception e) {
            // Error Log
            createSubProductLog2(addSubProduct, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Update SubProduct
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param updateSubProduct
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     */
    @Transactional
    public SubProduct updateSubProduct(String languageId, String companyId, String subProductId, UpdateSubProduct updateSubProduct, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            SubProduct dbSubProduct = getSubProduct(languageId, companyId, subProductId);
//            if (updateSubProduct.getSubProductName() != null) {
//                if (updateSubProduct.getSubProductName().isBlank()) {
//                    throw new BadRequestException("SubProduct Name cannot be blank");
//                }
//                boolean isSubProductNameChanged = !dbSubProduct.getSubProductName().equalsIgnoreCase(updateSubProduct.getSubProductName());
//                if (isSubProductNameChanged) {
//                    String oldSubProductDesc = dbSubProduct.getSubProductName();
//                    BeanUtils.copyProperties(updateSubProduct, dbSubProduct, CommonUtils.getNullPropertyNames(updateSubProduct));
//                    dbSubProduct.setUpdatedBy(loginUserID);
//                    dbSubProduct.setUpdatedOn(new Date());
//                    SubProduct updatedSubProduct = subProductRepository.save(dbSubProduct);
//
//                    // Updating subProductName in Product, Customer & Consignor Tables using Stored Procedure
//                    subProductRepository.subProductDescUpdateProc(languageId, companyId, subProductId, oldSubProductDesc, updateSubProduct.getSubProductName());
//                    return updatedSubProduct;
//                }
//            }
            BeanUtils.copyProperties(updateSubProduct, dbSubProduct, CommonUtils.getNullPropertyNames(updateSubProduct));
            if (updateSubProduct.getStatusId() != null) {
                String statusDesc = replicaStatusRepository.getStatusDescription(updateSubProduct.getStatusId());
                if (statusDesc != null) {
                    dbSubProduct.setStatusDescription(statusDesc);
                }
            }
            dbSubProduct.setUpdatedBy(loginUserID);
            dbSubProduct.setUpdatedOn(new Date());
            return subProductRepository.save(dbSubProduct);
        } catch (Exception e) {
            // Error Log
            createSubProductLog(languageId, companyId, subProductId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete SubProduct
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param loginUserID
     */
    public void deleteSubProduct(String languageId, String companyId, String subProductId, String loginUserID) {

        SubProduct dbSubProduct = getSubProduct(languageId, companyId, subProductId);
        if (dbSubProduct != null) {
            dbSubProduct.setDeletionIndicator(1L);
            dbSubProduct.setUpdatedBy(loginUserID);
            dbSubProduct.setUpdatedOn(new Date());
            subProductRepository.save(dbSubProduct);
        } else {
            // Error Log
            createSubProductLog1(languageId, companyId, subProductId, "Error in deleting SubProductId - " + subProductId);
            throw new BadRequestException("Error in deleting SubProductId - " + subProductId);
        }
    }

    //===============================================Replica==================================================

    /**
     * Get SubProduct
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @return
     */
    public ReplicaSubProduct replicaGetSubProduct(String languageId, String companyId, String subProductId) {

        Optional<ReplicaSubProduct> dbSubProduct = replicaSubProductRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndDeletionIndicator(
                languageId, companyId, subProductId, 0L);
        if (dbSubProduct.isEmpty()) {
            // Error Log
            createSubProductLog1(languageId, companyId, subProductId, "SubProductId - " + subProductId + " and given values doesn't exists");
            throw new BadRequestException("SubProductId - " + subProductId + " and given values doesn't exists");
        }
        return dbSubProduct.get();
    }

    /**
     * Get All SubProduct Details
     *
     * @return
     */
    public List<ReplicaSubProduct> getAllSubProducts() {
        List<ReplicaSubProduct> subProductList = replicaSubProductRepository.findAll();
        subProductList = subProductList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return subProductList;
    }


    /**
     * Find SubProduct
     *
     * @param findSubProduct
     * @return
     */
    public List<ReplicaSubProduct> findSubProducts(FindSubProduct findSubProduct) {

        ReplicaSubProductSpecification spec = new ReplicaSubProductSpecification(findSubProduct);
        List<ReplicaSubProduct> results = replicaSubProductRepository.findAll(spec);
        log.info("found subProducts --> " + results);
        return results;
    }

    //==========================================SubProduct_ErrorLog====================================================
    private void createSubProductLog(String languageId, String companyId, String subProductId, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(subProductId);
        errorLog.setMethod("Exception thrown in updateSubProduct");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createSubProductLog1(String languageId, String companyId, String subProductId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(subProductId);
        errorLog.setMethod("Exception thrown in getSubProduct");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createSubProductLog2(AddSubProduct addSubProduct, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addSubProduct.getLanguageId());
        errorLog.setCompanyId(addSubProduct.getCompanyId());
        errorLog.setRefDocNumber(addSubProduct.getSubProductId());
        errorLog.setMethod("Exception thrown in createSubProduct");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

}

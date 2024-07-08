package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.consignor.AddConsignor;
import com.courier.overc360.api.idmaster.primary.model.consignor.Consignor;
import com.courier.overc360.api.idmaster.primary.model.consignor.ConsignorDeleteInput;
import com.courier.overc360.api.idmaster.primary.model.consignor.UpdateConsignor;
import com.courier.overc360.api.idmaster.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.idmaster.primary.repository.ConsignorRepository;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.consignor.FindConsignor;
import com.courier.overc360.api.idmaster.replica.model.consignor.ReplicaConsignor;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaConsignorRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaCustomerRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaStatusRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaConsignorSpecification;
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
public class ConsignorService {

    @Autowired
    private ReplicaStatusRepository replicaStatusRepository;

    @Autowired
    private ReplicaCustomerRepository replicaCustomerRepository;

    @Autowired
    private ConsignorRepository consignorRepository;

    @Autowired
    private ReplicaConsignorRepository replicaConsignorRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    /*--------------------------------------------------PRIMARY------------------------------------------------------*/

    /**
     * Get Consignor
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param customerId
     * @param consignorId
     * @return
     */
    public Consignor getConsignor(String languageId, String companyId, String subProductId, String subProductValue,
                                  String productId, String customerId, String consignorId) {

        Optional<Consignor> dbConsignor = consignorRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndCustomerIdAndConsignorIdAndDeletionIndicator(
                languageId, companyId, subProductId, subProductValue, productId, customerId, consignorId, 0L);
        if (dbConsignor.isEmpty()) {
            String errMsg = "The given values : consignorId - " + consignorId + ", customerId - " + customerId + ", productId - " + productId
                    + ", subProductId - " + subProductId + ", subProductValue - " + subProductValue
                    + ", companyId - " + companyId + " and languageId - " + languageId + " doesn't exists";
            // Error Log
            createConsignorLog1(languageId, companyId, subProductId, subProductValue, productId, customerId, consignorId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsignor.get();
    }

    /**
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param subProductValue
     * @param productId
     * @param consignorId
     * @return
     */
    public List<Consignor> getConsignorList(String languageId, String companyId, String subProductId, String subProductValue,
                                            String productId, String consignorId) {

        List<Consignor> dbConsignorList = consignorRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndConsignorIdAndDeletionIndicator(
                languageId, companyId, subProductId, subProductValue, productId, consignorId, 0L);
        if (dbConsignorList.isEmpty()) {
            String errMsg = "The given values : consignorId - " + consignorId + ", productId - " + productId
                    + ", subProductId - " + subProductId + ", subProductValue - " + subProductValue
                    + ", companyId - " + companyId + " and languageId - " + languageId + " doesn't exists";
            // Error Log
            createConsignorLog5(languageId, companyId, subProductId, subProductValue, productId, consignorId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsignorList;
    }

    /**
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param subProductValue
     * @param consignorId
     * @return
     */
    public List<Consignor> getConsignorList1(String languageId, String companyId, String subProductId,
                                             String subProductValue, String consignorId) {

        List<Consignor> dbConsignorList = consignorRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndConsignorIdAndDeletionIndicator(
                languageId, companyId, subProductId, subProductValue, consignorId, 0L);
        if (dbConsignorList.isEmpty()) {
            String errMsg = "The given values : consignorId - " + consignorId + ", subProductId - " + subProductId
                    + ", subProductValue - " + subProductValue + ", companyId - " + companyId
                    + " and languageId - " + languageId + " doesn't exists";
            // Error Log
            createConsignorLog6(languageId, companyId, subProductId, subProductValue, consignorId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsignorList;
    }

    /**
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param consignorId
     * @return
     */
    public List<Consignor> getConsignorList2(String languageId, String companyId, String subProductId, String consignorId) {

        List<Consignor> dbConsignorList = consignorRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndConsignorIdAndDeletionIndicator(
                languageId, companyId, subProductId, consignorId, 0L);
        if (dbConsignorList.isEmpty()) {
            String errMsg = "The given values : consignorId - " + consignorId + ", subProductId - " + subProductId
                    + ", companyId - " + companyId + " and languageId - " + languageId + " doesn't exists";
            // Error Log
            createConsignorLog7(languageId, companyId, subProductId, consignorId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsignorList;
    }

    /**
     * @param languageId
     * @param companyId
     * @param consignorId
     * @return
     */
    public List<Consignor> getConsignorList3(String languageId, String companyId, String consignorId) {

        List<Consignor> dbConsignorList = consignorRepository.findByLanguageIdAndCompanyIdAndConsignorIdAndDeletionIndicator(
                languageId, companyId, consignorId, 0L);
        if (dbConsignorList.isEmpty()) {
            String errMsg = "The given values : consignorId - " + consignorId + ", companyId - " + companyId
                    + " and languageId - " + languageId + " doesn't exists";
            // Error Log
            createConsignorLog8(languageId, companyId, consignorId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsignorList;
    }

    /**
     * Create new Consignor
     *
     * @param addConsignor
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Consignor createConsignor(AddConsignor addConsignor, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            boolean dbCustomerPresent = replicaCustomerRepository.existsByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndCustomerIdAndDeletionIndicator(
                    addConsignor.getLanguageId(), addConsignor.getCompanyId(), addConsignor.getSubProductId(), addConsignor.getSubProductValue(),
                    addConsignor.getProductId(), addConsignor.getCustomerId(), 0L);
            if (!dbCustomerPresent) {
                throw new BadRequestException("CustomerId - " + addConsignor.getCustomerId() + ", productId - " + addConsignor.getProductId()
                        + ", subProductId - " + addConsignor.getSubProductId() + ", subProductValue - " + addConsignor.getSubProductValue()
                        + ", companyId - " + addConsignor.getCompanyId() + " and languageId - " + addConsignor.getLanguageId() + " doesn't exists");
            }

            boolean duplicateConsignorPresent = replicaConsignorRepository.existsByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndCustomerIdAndConsignorIdAndDeletionIndicator(
                    addConsignor.getLanguageId(), addConsignor.getCompanyId(), addConsignor.getSubProductId(), addConsignor.getSubProductValue(),
                    addConsignor.getProductId(), addConsignor.getCustomerId(), addConsignor.getConsignorId(), 0L);
            if (duplicateConsignorPresent) {
                throw new BadRequestException("Record is getting Duplicated with the given values : consignorId - " + addConsignor.getConsignorId());
            }

            log.info("new Consignor --> " + addConsignor);
            IKeyValuePair iKeyValuePair = replicaCustomerRepository.getDescription(addConsignor.getLanguageId(), addConsignor.getCompanyId(),
                    addConsignor.getSubProductId(), addConsignor.getSubProductValue(), addConsignor.getProductId(), addConsignor.getCustomerId());
            Consignor newConsignor = new Consignor();
            BeanUtils.copyProperties(addConsignor, newConsignor, CommonUtils.getNullPropertyNames(addConsignor));
            if ((addConsignor.getConsignorId() != null &&
                    (addConsignor.getReferenceField10() != null && addConsignor.getReferenceField10().equalsIgnoreCase("true"))) ||
                    addConsignor.getConsignorId() == null || addConsignor.getConsignorId().isBlank()) {
                String NUM_RAN_OBJ = "CONSIGNOR";
                String CONSIGNOR_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                log.info("next Value from NumberRange for CONSIGNOR : " + CONSIGNOR_ID);
                newConsignor.setConsignorId(CONSIGNOR_ID);
            }
            if (iKeyValuePair != null) {
                newConsignor.setLanguageDescription(iKeyValuePair.getLangDesc());
                newConsignor.setCompanyName(iKeyValuePair.getCompanyDesc());
                newConsignor.setSubProductName(iKeyValuePair.getSubProductDesc());
                newConsignor.setProductName(iKeyValuePair.getProductDesc());
                newConsignor.setCustomerName(iKeyValuePair.getCustomerDesc());
                newConsignor.setReferenceField1(iKeyValuePair.getSubProductValue());
                newConsignor.setProductText(iKeyValuePair.getProductText());
            }
            String statusDesc = replicaStatusRepository.getStatusDescription(addConsignor.getStatusId());
            if (statusDesc != null) {
                newConsignor.setStatusDescription(statusDesc);
            }
            newConsignor.setDeletionIndicator(0L);
            newConsignor.setCreatedBy(loginUserID);
            newConsignor.setCreatedOn(new Date());
            newConsignor.setUpdatedBy(loginUserID);
            newConsignor.setUpdatedOn(new Date());
            return consignorRepository.save(newConsignor);
        } catch (Exception e) {
            // Error Log
            createConsignorLog2(addConsignor, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Create Consignors - bulk
     *
     * @param addConsignorList
     * @param loginUserID
     * @return
     * @throws IOException
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     * @throws CsvException
     */
//    public List<Consignor> createConsignorBulk(List<AddConsignor> addConsignorList, String loginUserID)
//            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
//
//        List<Consignor> createdConsignorList = new ArrayList<>();
//        for (AddConsignor addConsignor : addConsignorList) {
//            Consignor newConsignor = createConsignor(addConsignor, loginUserID);
//            createdConsignorList.add(newConsignor);
//        }
//        return createdConsignorList;
//    }
    public List<Consignor> createConsignorBulk(List<AddConsignor> addConsignorList, String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        try {
            List<Consignor> createdConsignorList = new ArrayList<>();

            String NUM_RAN_OBJ = "CONSIGNOR";
            String CONSIGNOR_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
            log.info("next Value from NumberRange for CONSIGNOR : " + CONSIGNOR_ID);

            for (AddConsignor addConsignor : addConsignorList) {
                boolean dbCustomerPresent = replicaCustomerRepository.existsByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndCustomerIdAndDeletionIndicator(
                        addConsignor.getLanguageId(), addConsignor.getCompanyId(), addConsignor.getSubProductId(), addConsignor.getSubProductValue(),
                        addConsignor.getProductId(), addConsignor.getCustomerId(), 0L);
                if (!dbCustomerPresent) {
                    throw new BadRequestException("CustomerId - " + addConsignor.getCustomerId() + ", productId - " + addConsignor.getProductId()
                            + ", subProductId - " + addConsignor.getSubProductId() + ", subProductValue - " + addConsignor.getSubProductValue()
                            + ", companyId - " + addConsignor.getCompanyId() + " and languageId - " + addConsignor.getLanguageId() + " doesn't exists");
                }

                boolean duplicateConsignorPresent = replicaConsignorRepository.existsByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndCustomerIdAndConsignorIdAndDeletionIndicator(
                        addConsignor.getLanguageId(), addConsignor.getCompanyId(), addConsignor.getSubProductId(), addConsignor.getSubProductValue(),
                        addConsignor.getProductId(), addConsignor.getCustomerId(), addConsignor.getConsignorId(), 0L);
                if (duplicateConsignorPresent) {
                    throw new BadRequestException("Record is getting Duplicated with the given values : consignorId - " + addConsignor.getConsignorId());
                }

                log.info("new Consignor --> " + addConsignor);
                IKeyValuePair iKeyValuePair = replicaCustomerRepository.getDescription(addConsignor.getLanguageId(), addConsignor.getCompanyId(),
                        addConsignor.getSubProductId(), addConsignor.getSubProductValue(), addConsignor.getProductId(), addConsignor.getCustomerId());
                Consignor newConsignor = new Consignor();
                BeanUtils.copyProperties(addConsignor, newConsignor, CommonUtils.getNullPropertyNames(addConsignor));
                if ((addConsignor.getConsignorId() != null &&
                        (addConsignor.getReferenceField10() != null && addConsignor.getReferenceField10().equalsIgnoreCase("true"))) ||
                        addConsignor.getConsignorId() == null || addConsignor.getConsignorId().isBlank()) {
                    newConsignor.setConsignorId(CONSIGNOR_ID);
                }
                if (iKeyValuePair != null) {
                    newConsignor.setLanguageDescription(iKeyValuePair.getLangDesc());
                    newConsignor.setCompanyName(iKeyValuePair.getCompanyDesc());
                    newConsignor.setSubProductName(iKeyValuePair.getSubProductDesc());
                    newConsignor.setProductName(iKeyValuePair.getProductDesc());
                    newConsignor.setCustomerName(iKeyValuePair.getCustomerDesc());
                    newConsignor.setReferenceField1(iKeyValuePair.getSubProductValue());
                    newConsignor.setProductText(iKeyValuePair.getProductText());
                }
                String statusDesc = replicaStatusRepository.getStatusDescription(addConsignor.getStatusId());
                if (statusDesc != null) {
                    newConsignor.setStatusDescription(statusDesc);
                }
                newConsignor.setDeletionIndicator(0L);
                newConsignor.setCreatedBy(loginUserID);
                newConsignor.setCreatedOn(new Date());
                newConsignor.setUpdatedBy(loginUserID);
                newConsignor.setUpdatedOn(new Date());
                Consignor consignor = consignorRepository.save(newConsignor);
                createdConsignorList.add(consignor);
            }
            return createdConsignorList;
        } catch (Exception e) {
            // Error Log
            createConsignorLog3(addConsignorList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Update Consignor
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param customerId
     * @param consignorId
     * @param updateConsignor
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Consignor updateConsignor(String languageId, String companyId, String subProductId, String subProductValue, String productId,
                                     String customerId, String consignorId, UpdateConsignor updateConsignor, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Consignor dbConsignor = getConsignor(languageId, companyId, subProductId, subProductValue, productId, customerId, consignorId);
            BeanUtils.copyProperties(updateConsignor, dbConsignor, CommonUtils.getNullPropertyNames(updateConsignor));
            if (updateConsignor.getStatusId() != null && !updateConsignor.getStatusId().isEmpty()) {
                String statusDesc = replicaStatusRepository.getStatusDescription(updateConsignor.getStatusId());
                if (statusDesc != null) {
                    dbConsignor.setStatusDescription(statusDesc);
                }
            }
            dbConsignor.setUpdatedBy(loginUserID);
            dbConsignor.setUpdatedOn(new Date());
            return consignorRepository.save(dbConsignor);
        } catch (Exception e) {
            // Error Log
            createConsignorLog(languageId, companyId, subProductId, subProductValue, productId, customerId, consignorId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

//    public List<Consignor> updateConsignorBulk(List<UpdateConsignor> updateConsignorList, String loginUserID)
//            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
//
//        List<Consignor> updatedConsignorList = new ArrayList<>();
//        for (UpdateConsignor updateConsignor : updateConsignorList) {
//            Consignor dbConsignor = updateConsignor(updateConsignor.getLanguageId(), updateConsignor.getCompanyId(),
//                    updateConsignor.getSubProductId(), updateConsignor.getSubProductValue(), updateConsignor.getProductId(),
//                    updateConsignor.getCustomerId(), updateConsignor.getConsignorId(), updateConsignor, loginUserID);
//            updatedConsignorList.add(dbConsignor);
//        }
//        return updatedConsignorList;
//    }

    /**
     * Update Consignors - bulk
     *
     * @param updateConsignorList
     * @param loginUserID
     * @return
     * @throws IOException
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     * @throws CsvException
     */
    @Transactional
    public List<Consignor> updateConsignorBulk(List<UpdateConsignor> updateConsignorList, String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        try {
            List<Consignor> updatedConsignorList = new ArrayList<>();

            for (UpdateConsignor updateConsignor : updateConsignorList) {
                List<Consignor> dbConsignorList =
                        consignorRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndCustomerIdAndConsignorIdAndDeletionIndicator(
                                updateConsignor.getLanguageId(), updateConsignor.getCompanyId(),
                                updateConsignor.getSubProductId(), updateConsignor.getProductId(),
                                updateConsignor.getCustomerId(), updateConsignor.getConsignorId(), 0L);
                if (dbConsignorList != null && !dbConsignorList.isEmpty()) {
                    consignorRepository.deleteAll(dbConsignorList);
                }
            }

            for (UpdateConsignor updateConsignor : updateConsignorList) {

                Consignor newConsignor = new Consignor();
                BeanUtils.copyProperties(updateConsignor, newConsignor, CommonUtils.getNullPropertyNames(updateConsignor));
                IKeyValuePair iKeyValuePair = replicaCustomerRepository.getDescription(
                        updateConsignor.getLanguageId(), updateConsignor.getCompanyId(), updateConsignor.getSubProductId(),
                        updateConsignor.getSubProductValue(), updateConsignor.getProductId(), updateConsignor.getCustomerId());

                if (iKeyValuePair != null) {
                    newConsignor.setLanguageDescription(iKeyValuePair.getLangDesc());
                    newConsignor.setCompanyName(iKeyValuePair.getCompanyDesc());
                    newConsignor.setSubProductName(iKeyValuePair.getSubProductDesc());
                    newConsignor.setProductName(iKeyValuePair.getProductDesc());
                    newConsignor.setCustomerName(iKeyValuePair.getCustomerDesc());
                    newConsignor.setReferenceField1(iKeyValuePair.getSubProductValue());
                    newConsignor.setProductText(iKeyValuePair.getProductText());
                }
                if (updateConsignor.getStatusId() != null && !updateConsignor.getStatusId().isEmpty()) {
                    String statusDesc = replicaStatusRepository.getStatusDescription(updateConsignor.getStatusId());
                    if (statusDesc != null) {
                        newConsignor.setStatusDescription(statusDesc);
                    }
                }
                newConsignor.setDeletionIndicator(0L);
                newConsignor.setCreatedBy(loginUserID);
                newConsignor.setCreatedOn(new Date());
                newConsignor.setUpdatedBy(loginUserID);
                newConsignor.setUpdatedOn(new Date());
                Consignor consignor = consignorRepository.save(newConsignor);
                log.info("Created Consignor --> {}", consignor);
                updatedConsignorList.add(consignor);
            }
            return updatedConsignorList;
        } catch (Exception e) {
            // Error Log
            createConsignorLog4(updateConsignorList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    // Delete Consignor Properties
    private void deleteConsignorProperties(Consignor dbConsignor, String loginUserID) {
        dbConsignor.setDeletionIndicator(1L);
        dbConsignor.setUpdatedBy(loginUserID);
        dbConsignor.setUpdatedOn(new Date());
        consignorRepository.save(dbConsignor);
    }

    /**
     * Delete Consignor
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param customerId
     * @param consignorId
     * @param loginUserID
     */
    public void deleteConsignor(String languageId, String companyId, String subProductId, String subProductValue, String productId,
                                String customerId, String consignorId, String loginUserID) {

        Consignor dbConsignor = getConsignor(languageId, companyId, subProductId, subProductValue, productId, customerId, consignorId);
        if (dbConsignor != null) {
            deleteConsignorProperties(dbConsignor, loginUserID);
        } else {
            // Error Log
            createConsignorLog1(languageId, companyId, subProductId, subProductValue, productId, customerId, consignorId,
                    "Error in deleting consignorId - " + consignorId);
            throw new BadRequestException("Error in deleting consignorId - " + consignorId);
        }
    }

    /**
     * Delete Consignors - bulk
     *
     * @param consignorDeleteInputList
     * @param loginUserID
     */
    public void deleteConsignorBulk(List<ConsignorDeleteInput> consignorDeleteInputList, String loginUserID) {

        if (consignorDeleteInputList != null && !consignorDeleteInputList.isEmpty()) {
            for (ConsignorDeleteInput deleteInput : consignorDeleteInputList) {

                if (deleteInput.getSubProductId() != null && !deleteInput.getSubProductId().isEmpty()
                        && deleteInput.getSubProductValue() != null && !deleteInput.getSubProductValue().isEmpty()
                        && deleteInput.getProductId() != null && !deleteInput.getProductId().isEmpty()
                        && deleteInput.getCustomerId() != null && !deleteInput.getCustomerId().isEmpty()) {
                    // Call normal delete API
                    deleteConsignor(deleteInput.getLanguageId(), deleteInput.getCompanyId(), deleteInput.getSubProductId(),
                            deleteInput.getSubProductValue(), deleteInput.getProductId(),
                            deleteInput.getCustomerId(), deleteInput.getConsignorId(), loginUserID);
                } else if (deleteInput.getSubProductId() != null && !deleteInput.getSubProductId().isEmpty()
                        && deleteInput.getSubProductValue() != null && !deleteInput.getSubProductValue().isEmpty()
                        && deleteInput.getProductId() != null && !deleteInput.getProductId().isEmpty()) {
                    List<Consignor> dbConsignorList = getConsignorList(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                            deleteInput.getSubProductId(), deleteInput.getSubProductValue(),
                            deleteInput.getProductId(), deleteInput.getConsignorId());
                    for (Consignor dbConsignor : dbConsignorList) {
                        deleteConsignorProperties(dbConsignor, loginUserID);
                    }
                } else if (deleteInput.getSubProductId() != null && !deleteInput.getSubProductId().isEmpty() &&
                        deleteInput.getSubProductValue() != null && !deleteInput.getSubProductValue().isEmpty()) {
                    List<Consignor> dbConsignorList = getConsignorList1(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                            deleteInput.getSubProductId(), deleteInput.getSubProductValue(), deleteInput.getConsignorId());
                    for (Consignor dbConsignor : dbConsignorList) {
                        deleteConsignorProperties(dbConsignor, loginUserID);
                    }
                } else if (deleteInput.getSubProductId() != null && !deleteInput.getSubProductId().isEmpty()) {
                    List<Consignor> dbConsignorList = getConsignorList2(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                            deleteInput.getSubProductId(), deleteInput.getConsignorId());
                    for (Consignor dbConsignor : dbConsignorList) {
                        deleteConsignorProperties(dbConsignor, loginUserID);
                    }
                } else {
                    List<Consignor> dbConsignorList = getConsignorList3(deleteInput.getLanguageId(),
                            deleteInput.getCompanyId(), deleteInput.getConsignorId());
                    for (Consignor dbConsignor : dbConsignorList) {
                        deleteConsignorProperties(dbConsignor, loginUserID);
                    }
                }
            }
        }
    }

    /*--------------------------------------------------REPLICA------------------------------------------------------*/

    /**
     * Get All Consignor Details
     *
     * @return
     */
    public List<ReplicaConsignor> getAllConsignors() {
        List<ReplicaConsignor> consignorList = replicaConsignorRepository.findAll();
        consignorList = consignorList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return consignorList;
    }

    /**
     * Get Consignor
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param customerId
     * @param consignorId
     * @return
     */
    public ReplicaConsignor getConsignorReplica(String languageId, String companyId, String subProductId, String subProductValue,
                                                String productId, String customerId, String consignorId) {

        Optional<ReplicaConsignor> dbConsignor = replicaConsignorRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndCustomerIdAndConsignorIdAndDeletionIndicator(
                languageId, companyId, subProductId, subProductValue, productId, customerId, consignorId, 0L);
        if (dbConsignor.isEmpty()) {
            String errMsg = "The given values : consignorId - " + consignorId + ", customerId - " + customerId + ", productId - " + productId
                    + ", subProductId - " + subProductId + ", subProductValue - " + subProductValue
                    + ", companyId - " + companyId + " and languageId - " + languageId + " doesn't exists";
            // Error Log
            createConsignorLog1(languageId, companyId, subProductId, subProductValue, productId, customerId, consignorId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsignor.get();
    }

    /**
     * Find Consignors
     *
     * @param findConsignor
     * @return
     * @throws ParseException
     */
    public List<ReplicaConsignor> findConsignors(FindConsignor findConsignor) throws ParseException {

        ReplicaConsignorSpecification spec = new ReplicaConsignorSpecification(findConsignor);
        List<ReplicaConsignor> results = replicaConsignorRepository.findAll(spec);
        log.info("found Consignors --> " + results);
        return results;
    }

    //============================================Consignor_ErrorLog===================================================
    private void createConsignorLog(String languageId, String companyId, String subProductId, String subProductValue, String productId,
                                    String customerId, String consignorId, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(consignorId);
        errorLog.setMethod("Exception thrown in updateConsignor");
        errorLog.setReferenceField1(subProductId);
        errorLog.setReferenceField2(productId);
        errorLog.setReferenceField3(customerId);
        errorLog.setReferenceField4(subProductValue);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createConsignorLog1(String languageId, String companyId, String subProductId, String subProductValue,
                                     String productId, String customerId, String consignorId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(consignorId);
        errorLog.setMethod("Exception thrown in getConsignor");
        errorLog.setReferenceField1(subProductId);
        errorLog.setReferenceField2(productId);
        errorLog.setReferenceField3(customerId);
        errorLog.setReferenceField4(subProductValue);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createConsignorLog2(AddConsignor addConsignor, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addConsignor.getLanguageId());
        errorLog.setCompanyId(addConsignor.getCompanyId());
        errorLog.setRefDocNumber(addConsignor.getConsignorId());
        errorLog.setMethod("Exception thrown in createConsignor");
        errorLog.setReferenceField1(addConsignor.getSubProductId());
        errorLog.setReferenceField2(addConsignor.getProductId());
        errorLog.setReferenceField3(addConsignor.getCustomerId());
        errorLog.setReferenceField4(addConsignor.getSubProductValue());
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createConsignorLog3(List<AddConsignor> addConsignorList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (AddConsignor addConsignor : addConsignorList) {
            ErrorLog errorLog = new ErrorLog();
            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(addConsignor.getLanguageId());
            errorLog.setCompanyId(addConsignor.getCompanyId());
            errorLog.setRefDocNumber(addConsignor.getConsignorId());
            errorLog.setMethod("Exception thrown in createConsignor");
            errorLog.setReferenceField1(addConsignor.getSubProductId());
            errorLog.setReferenceField2(addConsignor.getProductId());
            errorLog.setReferenceField3(addConsignor.getCustomerId());
            errorLog.setReferenceField4(addConsignor.getSubProductValue());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

    private void createConsignorLog4(List<UpdateConsignor> updateConsignorList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (UpdateConsignor updateConsignor : updateConsignorList) {
            ErrorLog errorLog = new ErrorLog();
            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(updateConsignor.getLanguageId());
            errorLog.setCompanyId(updateConsignor.getCompanyId());
            errorLog.setRefDocNumber(updateConsignor.getConsignorId());
            errorLog.setMethod("Exception thrown in createConsignor");
            errorLog.setReferenceField1(updateConsignor.getSubProductId());
            errorLog.setReferenceField2(updateConsignor.getProductId());
            errorLog.setReferenceField3(updateConsignor.getCustomerId());
            errorLog.setReferenceField4(updateConsignor.getSubProductValue());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

    private void createConsignorLog5(String languageId, String companyId, String subProductId, String subProductValue,
                                     String productId, String consignorId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(consignorId);
        errorLog.setMethod("Exception thrown in getConsignorList");
        errorLog.setReferenceField1(subProductId);
        errorLog.setReferenceField2(productId);
        errorLog.setReferenceField3(subProductValue);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createConsignorLog6(String languageId, String companyId, String subProductId,
                                     String subProductValue, String consignorId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(consignorId);
        errorLog.setMethod("Exception thrown in getConsignorList1");
        errorLog.setReferenceField1(subProductId);
        errorLog.setReferenceField2(subProductValue);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createConsignorLog7(String languageId, String companyId, String subProductId,
                                     String consignorId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(consignorId);
        errorLog.setMethod("Exception thrown in getConsignorList2");
        errorLog.setReferenceField1(subProductId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createConsignorLog8(String languageId, String companyId, String consignorId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(consignorId);
        errorLog.setMethod("Exception thrown in getConsignorList3");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

}

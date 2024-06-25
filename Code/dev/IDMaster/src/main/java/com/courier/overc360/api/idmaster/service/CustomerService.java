package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.customer.AddCustomer;
import com.courier.overc360.api.idmaster.primary.model.customer.Customer;
import com.courier.overc360.api.idmaster.primary.model.customer.UpdateCustomer;
import com.courier.overc360.api.idmaster.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.idmaster.primary.model.product.Product;
import com.courier.overc360.api.idmaster.primary.repository.ConsignorRepository;
import com.courier.overc360.api.idmaster.primary.repository.CustomerRepository;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.primary.repository.ProductRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.customer.FindCustomer;
import com.courier.overc360.api.idmaster.replica.model.customer.ReplicaCustomer;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaCustomerRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaProductRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaCustomerSpecification;
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

@Service
@Slf4j
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ReplicaCustomerRepository replicaCustomerRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ConsignorRepository consignorRepository;

    @Autowired
    private ReplicaProductRepository replicaProductRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    /*--------------------------------------------------------PRIMARY------------------------------------------------------------------------*/

    /**
     * Get Customer
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param customerId
     * @return
     */
    public Customer getCustomer(String languageId, String companyId, String customerId, String productId, String subProductId) {

        Optional<Customer> dbCustomer = customerRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndCustomerIdAndDeletionIndicator(
                languageId, companyId, subProductId, productId, customerId, 0L);
        if (dbCustomer.isEmpty()) {
            // Error Log
            createCustomerLog1(languageId, companyId, subProductId, productId, customerId,
                    "CustomerId - " + customerId + " and given values doesn't exists");
            throw new BadRequestException("CustomerId - " + customerId + " and given values doesn't exists");
        }
        return dbCustomer.get();
    }

    /**
     * Create Customer
     *
     * @param addCustomer
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Customer createCustomer(AddCustomer addCustomer, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Optional<Product> dbProduct = productRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndDeletionIndicator(
                    addCustomer.getLanguageId(), addCustomer.getCompanyId(), addCustomer.getSubProductId(), addCustomer.getProductId(), 0L);

            Optional<Customer> duplicateCustomer = customerRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndCustomerIdAndDeletionIndicator(
                    addCustomer.getLanguageId(), addCustomer.getCompanyId(), addCustomer.getSubProductId(),
                    addCustomer.getProductId(), addCustomer.getCustomerId(), 0L);

            if (dbProduct.isEmpty()) {
                throw new BadRequestException("ProductId - " + addCustomer.getProductId() + ", subProductId - " + addCustomer.getSubProductId() +
                        ", companyId - " + addCustomer.getCompanyId() + " and languageId - " + addCustomer.getLanguageId() + " doesn't exists");
            } else if (duplicateCustomer.isPresent()) {
                throw new BadRequestException("Record is getting Duplicated with the given values : customerId - " + addCustomer.getCustomerId());
            } else {
                log.info("new Customer --> " + addCustomer);
                IKeyValuePair iKeyValuePair = replicaProductRepository.getDescription(addCustomer.getLanguageId(), addCustomer.getCompanyId(),
                        addCustomer.getSubProductId(), addCustomer.getProductId());
                Customer newCustomer = new Customer();
                BeanUtils.copyProperties(addCustomer, newCustomer, CommonUtils.getNullPropertyNames(addCustomer));
                if (addCustomer.getCustomerId() == null || addCustomer.getCustomerId().isBlank()) {
                    String NUM_RAN_OBJ = "CUSTOMER";
                    String CUSTOMER_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for CUSTOMER_ID : " + CUSTOMER_ID);
                    newCustomer.setCustomerId(CUSTOMER_ID);
                }
                if (iKeyValuePair != null) {
                    newCustomer.setLanguageDescription(iKeyValuePair.getLangDesc());
                    newCustomer.setCompanyName(iKeyValuePair.getCompanyDesc());
                    newCustomer.setSubProductName(iKeyValuePair.getSubProductDesc());
                    newCustomer.setProductName(iKeyValuePair.getProductDesc());
                }
                newCustomer.setDeletionIndicator(0L);
                newCustomer.setCreatedBy(loginUserID);
                newCustomer.setCreatedOn(new Date());
                newCustomer.setUpdatedBy(loginUserID);
                newCustomer.setUpdatedOn(new Date());
                return customerRepository.save(newCustomer);
            }
        } catch (Exception e) {
            // Error Log
            createCustomerLog2(addCustomer, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Update Customer
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param customerId
     * @param updateCustomer
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Customer updateCustomer(String languageId, String companyId, String subProductId, String productId,
                                   String customerId, UpdateCustomer updateCustomer, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Customer dbCustomer = getCustomer(languageId, companyId, customerId, productId, subProductId);

//            if (updateCustomer.getCustomerName() != null) {
//                if (updateCustomer.getCustomerName().isBlank()) {
//                    throw new BadRequestException("Customer Name cannot be blank");
//                }
//                boolean isCustomerNameChanged = !dbCustomer.getCustomerName().equalsIgnoreCase(updateCustomer.getCustomerName());
//                if (isCustomerNameChanged) {
//                    String oldCustomerDesc = dbCustomer.getCustomerName();
//                    BeanUtils.copyProperties(updateCustomer, dbCustomer, CommonUtils.getNullPropertyNames(updateCustomer));
//                    dbCustomer.setUpdatedBy(loginUserID);
//                    dbCustomer.setUpdatedOn(new Date());
//                    Customer updatedCustomer = customerRepository.save(dbCustomer);
//
//                    // Updating customerName in ConsignorTable using Stored Procedure
//                    customerRepository.customerDescUpdateProc(languageId, companyId, subProductId, productId, customerId, oldCustomerDesc, updateCustomer.getCustomerName());
//                    return updatedCustomer;
//                }
//            }
            BeanUtils.copyProperties(updateCustomer, dbCustomer, CommonUtils.getNullPropertyNames(updateCustomer));
            dbCustomer.setUpdatedBy(loginUserID);
            dbCustomer.setUpdatedOn(new Date());
            return customerRepository.save(dbCustomer);
        } catch (Exception e) {
            // Error Log
            createCustomerLog(languageId, companyId, subProductId, productId, customerId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete Customer
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param customerId
     * @param loginUserID
     */
    public void deleteCustomer(String languageId, String companyId, String subProductId, String productId,
                               String customerId, String loginUserID) {

//        List<Consignor> consignorList = consignorRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndCustomerIdAndDeletionIndicator(
//                languageId, companyId, subProductId, productId, customerId, 0L);
//        if (!consignorList.isEmpty()) {
//            // Error Log
//            createCustomerLog1(languageId, companyId, subProductId, productId, customerId,
//                    "There are records present in Consignor Table with customerId - " + customerId);
//            throw new BadRequestException("There are records present in Consignor Table with customerId - " + customerId);
//        }
        Customer dbCustomer = getCustomer(languageId, companyId, customerId, productId, subProductId);
        if (dbCustomer != null) {
            dbCustomer.setDeletionIndicator(1L);
            dbCustomer.setUpdatedBy(loginUserID);
            dbCustomer.setUpdatedOn(new Date());
            customerRepository.save(dbCustomer);
        } else {
            // Error Log
            createCustomerLog1(languageId, companyId, subProductId, productId, customerId,
                    "Error in deleting CustomerId - " + customerId);
            throw new BadRequestException("Error in deleting CustomerId - " + customerId);
        }
    }

    /*======================================================REPLICA=====================================================*/

    /**
     * Get All Customers
     *
     * @return
     */
    public List<ReplicaCustomer> getAllCustomers() {
        List<ReplicaCustomer> customerList = replicaCustomerRepository.findAll();
        customerList = customerList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return customerList;
    }

    /**
     * Get Customer
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param customerId
     * @return
     */
    public ReplicaCustomer getReplicaCustomer(String languageId, String companyId, String customerId, String productId, String subProductId) {

        Optional<ReplicaCustomer> dbCustomer = replicaCustomerRepository.findByLanguageIdAndCompanyIdAndCustomerIdAndProductIdAndSubProductIdAndDeletionIndicator(
                languageId, companyId, customerId, productId, subProductId, 0L);
        if (dbCustomer.isEmpty()) {
            // Error Log
            createCustomerLog1(languageId, companyId, subProductId, productId, customerId,
                    "CustomerId - " + customerId + " and given values doesn't exists");
            throw new BadRequestException("CustomerId - " + customerId + " and given values doesn't exists");
        }
        return dbCustomer.get();
    }

    /**
     * Find All Customers
     *
     * @param findCustomer
     * @return
     * @throws ParseException
     */
    public List<ReplicaCustomer> findCustomers(FindCustomer findCustomer) throws ParseException {

        ReplicaCustomerSpecification spec = new ReplicaCustomerSpecification(findCustomer);
        List<ReplicaCustomer> results = replicaCustomerRepository.findAll(spec);
        log.info("found Customers --> " + results);
        return results;
    }

    //===========================================Customer_ErrorLog=====================================================
    private void createCustomerLog(String languageId, String companyId, String subProductId, String productId,
                                   String customerId, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(customerId);
        errorLog.setMethod("Exception thrown in updateCustomer");
        errorLog.setReferenceField1(subProductId);
        errorLog.setReferenceField2(productId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createCustomerLog1(String languageId, String companyId, String subProductId, String productId,
                                    String customerId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(customerId);
        errorLog.setMethod("Exception thrown in getCustomer");
        errorLog.setReferenceField1(subProductId);
        errorLog.setReferenceField2(productId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createCustomerLog2(AddCustomer addCustomer, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addCustomer.getLanguageId());
        errorLog.setCompanyId(addCustomer.getCompanyId());
        errorLog.setRefDocNumber(addCustomer.getCustomerId());
        errorLog.setMethod("Exception thrown in createCustomer");
        errorLog.setReferenceField1(addCustomer.getSubProductId());
        errorLog.setReferenceField2(addCustomer.getProductId());
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }


}

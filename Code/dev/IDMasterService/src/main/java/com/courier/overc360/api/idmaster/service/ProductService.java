package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.idmaster.primary.model.product.AddProduct;
import com.courier.overc360.api.idmaster.primary.model.product.Product;
import com.courier.overc360.api.idmaster.primary.model.product.ProductDeleteInput;
import com.courier.overc360.api.idmaster.primary.model.product.UpdateProduct;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.primary.repository.ProductRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.product.FindProduct;
import com.courier.overc360.api.idmaster.replica.model.product.ReplicaProduct;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaProductRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaStatusRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaSubProductRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaProductSpecification;
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
public class ProductService {

    @Autowired
    private ReplicaStatusRepository replicaStatusRepository;

    @Autowired
    private ReplicaSubProductRepository replicaSubProductRepository;

    @Autowired
    private ProductRepository productRepository;

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
     * Get Product
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @return
     */
    public Product getProduct(String languageId, String companyId, String subProductId, String productId) {

        Optional<Product> dbProduct = productRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndDeletionIndicator(
                languageId, companyId, subProductId, productId, 0L);
        if (dbProduct.isEmpty()) {
            // Error Log
            createProductLog1(languageId, companyId, subProductId, productId, "ProductId - " + productId + " and given values doesn't exists");
            throw new BadRequestException("ProductId - " + productId + " and given values doesn't exists");
        }
        return dbProduct.get();
    }

    /**
     * Create Product
     *
     * @param addProduct
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Product createProduct(AddProduct addProduct, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            boolean dbSubProductPresent = replicaSubProductRepository.existsByLanguageIdAndCompanyIdAndSubProductIdAndDeletionIndicator(
                    addProduct.getLanguageId(), addProduct.getCompanyId(), addProduct.getSubProductId(), 0L);
            if (!dbSubProductPresent) {
                throw new BadRequestException("SubProductId - " + addProduct.getSubProductId() + ", companyId - " +
                        addProduct.getCompanyId() + " and languageId - " + addProduct.getLanguageId() + " doesn't exists");
            }

            boolean duplicateProductPresent = replicaProductRepository.existsByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndDeletionIndicator(
                    addProduct.getLanguageId(), addProduct.getCompanyId(), addProduct.getSubProductId(), addProduct.getProductId(), 0L);
            if (duplicateProductPresent) {
                throw new BadRequestException("Record is getting Duplicated with the given values : productId - " + addProduct.getProductId());
            }

            log.info("new Product --> " + addProduct);
            IKeyValuePair iKeyValuePair = replicaSubProductRepository.getDescription(addProduct.getLanguageId(),
                    addProduct.getCompanyId(), addProduct.getSubProductId());
            Product newProduct = new Product();
            BeanUtils.copyProperties(addProduct, newProduct, CommonUtils.getNullPropertyNames(addProduct));
            if (addProduct.getProductId() == null || addProduct.getProductId().isBlank()) {
                String NUM_RAN_OBJ = "PRODUCT";
                String PRODUCT_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                log.info("next Value from NumberRange for PRODUCT : " + PRODUCT_ID);
                newProduct.setProductId(PRODUCT_ID);
            }
            if (iKeyValuePair != null) {
                newProduct.setLanguageDescription(iKeyValuePair.getLangDesc());
                newProduct.setCompanyName(iKeyValuePair.getCompanyDesc());
                newProduct.setSubProductName(iKeyValuePair.getSubProductDesc());
                newProduct.setSubProductValue(iKeyValuePair.getSubProductValue());
            }
            String statusDesc = replicaStatusRepository.getStatusDescription(addProduct.getStatusId());
            if (statusDesc != null) {
                newProduct.setStatusDescription(statusDesc);
            }
            newProduct.setDeletionIndicator(0L);
            newProduct.setCreatedBy(loginUserID);
            newProduct.setCreatedOn(new Date());
            newProduct.setUpdatedBy(loginUserID);
            newProduct.setUpdatedOn(new Date());
            return productRepository.save(newProduct);
        } catch (Exception e) {
            // Error Log
            createProductLog2(addProduct, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Create Products - bulk
     *
     * @param addProductList
     * @param loginUserID
     * @return
     * @throws IOException
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     * @throws CsvException
     */
    public List<Product> createProductBulk(List<AddProduct> addProductList, String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {

        List<Product> createdProductList = new ArrayList<>();
        for (AddProduct addProduct : addProductList) {
            Product newProduct = createProduct(addProduct, loginUserID);
            createdProductList.add(newProduct);
        }
        return createdProductList;
    }

    /**
     * Update Product
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param updateProduct
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Product updateProduct(String languageId, String companyId, String subProductId, String productId, UpdateProduct updateProduct, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Product dbProduct = getProduct(languageId, companyId, subProductId, productId);

//            if (updateProduct.getProductName() != null) {
//                if (updateProduct.getProductName().isBlank()) {
//                    throw new BadRequestException("Product Name cannot be blank");
//                }
//                boolean isProductNameChanged = !dbProduct.getProductName().equalsIgnoreCase(updateProduct.getProductName());
//                if (isProductNameChanged) {
//                    String oldProductDesc = dbProduct.getProductName();
//                    BeanUtils.copyProperties(updateProduct, dbProduct, CommonUtils.getNullPropertyNames(updateProduct));
//                    dbProduct.setUpdatedBy(loginUserID);
//                    dbProduct.setUpdatedOn(new Date());
//                    Product updatedProduct = productRepository.save(dbProduct);
//
//                    // Updating productName in Consignor & Customer Tables using Stored Procedure
//                    productRepository.productDescUpdateProc(languageId, companyId, subProductId, productId, oldProductDesc, updateProduct.getProductName());
//                    return updatedProduct;
//                }
//            }
            BeanUtils.copyProperties(updateProduct, dbProduct, CommonUtils.getNullPropertyNames(updateProduct));
            if (updateProduct.getStatusId() != null) {
                String statusDesc = replicaStatusRepository.getStatusDescription(updateProduct.getStatusId());
                if (statusDesc != null) {
                    dbProduct.setStatusDescription(statusDesc);
                }
            }
            dbProduct.setUpdatedBy(loginUserID);
            dbProduct.setUpdatedOn(new Date());
            return productRepository.save(dbProduct);
        } catch (Exception e) {
            // Error Log
            createProductLog(languageId, companyId, subProductId, productId, e.toString());
            throw new RuntimeException(e);
        }
    }

    /**
     * Update Products - bulk
     *
     * @param updateProductList
     * @param loginUserID
     * @return
     * @throws IOException
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     * @throws CsvException
     */
    public List<Product> updateProductBulk(List<UpdateProduct> updateProductList, String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {

        List<Product> updatedProductList = new ArrayList<>();
        for (UpdateProduct updateProduct : updateProductList) {
            Product dbProduct = updateProduct(updateProduct.getLanguageId(), updateProduct.getCompanyId(),
                    updateProduct.getSubProductId(), updateProduct.getProductId(), updateProduct, loginUserID);
            updatedProductList.add(dbProduct);
        }
        return updatedProductList;
    }

    /**
     * Delete Product
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @param loginUserID
     */
    public void deleteProduct(String languageId, String companyId, String subProductId, String productId, String loginUserID) {

        Product dbProduct = getProduct(languageId, companyId, subProductId, productId);
        if (dbProduct != null) {
            dbProduct.setDeletionIndicator(1L);
            dbProduct.setUpdatedBy(loginUserID);
            dbProduct.setUpdatedOn(new Date());
            productRepository.save(dbProduct);
        } else {
            // Error Log
            createProductLog1(languageId, companyId, subProductId, productId, "Error in deleting ProductId - " + productId);
            throw new BadRequestException("Error in deleting ProductId - " + productId);
        }
    }

    /**
     * Delete Products - Bulk
     *
     * @param productDeleteInputList
     * @param loginUserID
     */
    public void deleteProductBulk(List<ProductDeleteInput> productDeleteInputList, String loginUserID) {

        for (ProductDeleteInput deleteInput : productDeleteInputList) {
            deleteProduct(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                    deleteInput.getSubProductId(), deleteInput.getProductId(), loginUserID);
        }
    }

    /*================================================REPLICA========================================================*/

    /**
     * Get All Product Details
     *
     * @return
     */
    public List<ReplicaProduct> getAllProducts() {
        List<ReplicaProduct> productList = replicaProductRepository.findAll();
        productList = productList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return productList;
    }

    /**
     * Get Product
     *
     * @param languageId
     * @param companyId
     * @param subProductId
     * @param productId
     * @return
     */
    public ReplicaProduct getReplicaProduct(String languageId, String companyId, String subProductId, String productId) {

        Optional<ReplicaProduct> dbProduct = replicaProductRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndDeletionIndicator(
                languageId, companyId, subProductId, productId, 0L);
        if (dbProduct.isEmpty()) {
            // Error Log
            createProductLog1(languageId, companyId, subProductId, productId, "ProductId - " + productId + " and given values doesn't exists");
            throw new BadRequestException("ProductId - " + productId + " and given values doesn't exists");
        }
        return dbProduct.get();
    }

    public List<ReplicaProduct> findProduct(FindProduct findProduct) throws ParseException {
        ReplicaProductSpecification spec = new ReplicaProductSpecification(findProduct);
        List<ReplicaProduct> results = replicaProductRepository.findAll(spec);
        log.info("found Products --> " + results);
        return results;
    }

    //=============================================Product_ErrorLog====================================================
    private void createProductLog(String languageId, String companyId, String subProductId, String productId, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(productId);
        errorLog.setMethod("Exception thrown in updateProduct");
        errorLog.setReferenceField1(subProductId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createProductLog1(String languageId, String companyId, String subProductId, String productId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(productId);
        errorLog.setMethod("Exception thrown in getProduct");
        errorLog.setReferenceField1(subProductId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createProductLog2(AddProduct addProduct, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addProduct.getLanguageId());
        errorLog.setCompanyId(addProduct.getCompanyId());
        errorLog.setRefDocNumber(addProduct.getProductId());
        errorLog.setMethod("Exception thrown in createProduct");
        errorLog.setReferenceField1(addProduct.getSubProductId());
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

}

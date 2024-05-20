package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.primary.model.product.AddProduct;
import com.courier.overc360.api.idmaster.primary.model.product.Product;
import com.courier.overc360.api.idmaster.primary.model.product.UpdateProduct;
import com.courier.overc360.api.idmaster.primary.model.subproject.SubProduct;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.primary.repository.ProductRepository;
import com.courier.overc360.api.idmaster.primary.repository.SubProductRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.product.FindProduct;
import com.courier.overc360.api.idmaster.replica.model.product.ReplicaProduct;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaProductRepository;
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
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ReplicaProductRepository replicaProductRepository;

    @Autowired
    private SubProductRepository subProductRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    /*--------------------------------------------------------PRIMARY------------------------------------------------------------------------*/

    /**
     *
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
            // createProductLog1(languageId, companyId, subProductId, productId, "ProductId - " + productId + " and given values doesn't exists");
            throw new BadRequestException("ProductId - " + productId + " and given values doesn't exists");
        }
        return dbProduct.get();
    }

    /**
     *
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
            Optional<SubProduct> dbSubProduct = subProductRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndDeletionIndicator(
                    addProduct.getLanguageId(), addProduct.getCompanyId(), addProduct.getSubProductId(), 0L);

            Optional<Product> duplicateProduct = productRepository.findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndDeletionIndicator(
                    addProduct.getLanguageId(), addProduct.getCompanyId(), addProduct.getSubProductId(), addProduct.getProductId(), 0L);

            if (dbSubProduct.isEmpty()) {
                throw new BadRequestException("SubProductId - " + addProduct.getSubProductId() + ", companyId - " +
                        addProduct.getCompanyId() + " and languageId - " + addProduct.getLanguageId() + " doesn't exists");
            } else if (duplicateProduct.isPresent()) {
                throw new BadRequestException("Record is getting Duplicated with the given values");
            } else {
                log.info("new Product --> " + addProduct);
                IKeyValuePair iKeyValuePair = subProductRepository.getDescription(addProduct.getLanguageId(), addProduct.getCompanyId(), addProduct.getSubProductId());
                Product newProduct = new Product();
                BeanUtils.copyProperties(addProduct, newProduct, CommonUtils.getNullPropertyNames(addProduct));
                if (addProduct.getProductId() == null) {
                    String NUM_RAN_OBJ = "PRODUCT";
                    String PRODUCT_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for PRODUCT_ID : " + PRODUCT_ID);
                    newProduct.setProductId(PRODUCT_ID);
                }
                if (iKeyValuePair != null) {
                    newProduct.setLanguageDescription(iKeyValuePair.getLangDesc());
                    newProduct.setCompanyName(iKeyValuePair.getCompanyDesc());
                    newProduct.setSubProductName(iKeyValuePair.getSubProductDesc());
                }
                newProduct.setDeletionIndicator(0L);
                newProduct.setCreatedBy(loginUserID);
                newProduct.setCreatedOn(new Date());
                newProduct.setUpdatedBy(loginUserID);
                newProduct.setUpdatedOn(new Date());
                return productRepository.save(newProduct);
            }
        } catch (Exception e) {
            // Error Log
            // createProductLog2(addProduct, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     *
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
            BeanUtils.copyProperties(updateProduct, dbProduct, CommonUtils.getNullPropertyNames(updateProduct));
            dbProduct.setUpdatedBy(loginUserID);
            dbProduct.setUpdatedOn(new Date());
            return productRepository.save(dbProduct);
        } catch (Exception e) {
            // Error Log
            // createProductLog(languageId, companyId, subProductId, productId, e.toString());
            throw new RuntimeException(e);
        }
    }

    /**
     *
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
            // createProductLog1(languageId, companyId, subProductId, productId, "Error in deleting ProductId - " + productId);
            throw new BadRequestException("Error in deleting ProductId - " + productId);
        }
    }

    /*======================================================REPLICA=====================================================*/

    /**
     *
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
     *
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
            // createProductLog1(languageId, companyId, subProductId, productId, "ProductId - " + productId + " and given values doesn't exists");
            throw new BadRequestException("ProductId - " + productId + " and given values doesn't exists");
        }
        return dbProduct.get();
    }

    public List<ReplicaProduct> findProduct(FindProduct findProduct) throws ParseException {
        ReplicaProductSpecification spec = new ReplicaProductSpecification(findProduct);
        List<ReplicaProduct> results = replicaProductRepository.findAll(spec);
        log.info("found Replica Product --> " + results);
        return results;
    }

}

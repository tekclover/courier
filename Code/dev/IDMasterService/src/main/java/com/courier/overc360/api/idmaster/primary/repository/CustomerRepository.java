package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface CustomerRepository extends JpaRepository<Customer, String>, JpaSpecificationExecutor<Customer> {

    Optional<Customer> findByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndCustomerIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String subProductValue,
            String productId, String customerId, Long deletionIndicator);

    Customer findByLanguageIdAndCompanyIdAndSubProductValueAndSubProductIdAndProductIdAndCustomerIdAndDeletionIndicator(
            String languageId, String companyId, String subProductValue, String subProductId,
            String productId, String customerId, Long deletionIndicator);


    // Updating customerName in ConsignorTable using Stored Procedure
    @Transactional
    @Procedure(procedureName = "customer_desc_update_proc")
    void updateCustomerDescProc(
            @Param(value = "languageId") String languageId,
            @Param(value = "companyId") String companyId,
            @Param(value = "subProductId") String subProductId,
            @Param(value = "productId") String productId,
            @Param(value = "customerId") String customerId,
            @Param(value = "oldCustomerDesc") String oldCustomerDesc,
            @Param(value = "newCustomerDesc") String newCustomerDesc);

    // Updating Customer Name in Consignor Table using SQL Query
    @Modifying
    @Query(value = "Update tblconsignor \n" +
            "Set CUSTOMER_NAME = :newCustomerDesc \n" +
            "Where \n" +
            "LANG_ID = :languageId and \n" +
            "C_ID = :companyId and \n" +
            "SUB_PRODUCT_ID = :subProductId and \n" +
            "SUB_PRODUCT_VALUE = :subProductValue and \n" +
            "PRODUCT_ID = :productId and \n" +
            "CUSTOMER_ID = :customerId and \n" +
            "CUSTOMER_NAME = :oldCustomerDesc and \n" +
            "IS_DELETED = 0", nativeQuery = true)
    long updateCustomerName(
            @Param(value = "languageId") String languageId,
            @Param(value = "companyId") String companyId,
            @Param(value = "subProductId") String subProductId,
            @Param(value = "productId") String productId,
            @Param(value = "customerId") String customerId,
            @Param(value = "oldCustomerDesc") String oldCustomerDesc,
            @Param(value = "newCustomerDesc") String newCustomerDesc);


}

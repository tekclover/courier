package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface CustomerRepository extends JpaRepository<Customer, String>, JpaSpecificationExecutor<Customer> {

    Optional<Customer> findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndCustomerIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String productId, String customerId, Long deletionIndicator);

    // Updating customerName in ConsignorTable using Stored Procedure
    @Transactional
    @Procedure(procedureName = "customer_desc_update_proc")
    void customerDescUpdateProc(
            @Param(value = "languageId") String languageId,
            @Param(value = "companyId") String companyId,
            @Param(value = "subProductId") String subProductId,
            @Param(value = "productId") String productId,
            @Param(value = "customerId") String customerId,
            @Param(value = "oldCustomerDesc") String oldCustomerDesc,
            @Param(value = "newCustomerDesc") String newCustomerDesc);

    List<Customer> findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String productId, Long deletionIndicator);


}

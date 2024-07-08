package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.consignor.Consignor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ConsignorRepository extends JpaRepository<Consignor, String>, JpaSpecificationExecutor<Consignor> {

    Optional<Consignor> findByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndCustomerIdAndConsignorIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String subProductValue,
            String productId, String customerId, String consignorId, Long deletionIndicator);

    List<Consignor> findByLanguageIdAndCompanyIdAndConsignorIdAndDeletionIndicator(
            String languageId, String companyId, String consignorId, Long deletionIndicator);


    // Get Consignors With Query
    @Query(value = "Select * From tblconsignor tc \n" +
            "Where tc.IS_DELETED = 0 \n" +
            "AND COALESCE(:languageId, tc.LANG_ID) = tc.LANG_ID \n" +
            "AND COALESCE(:companyId, tc.C_ID) = tc.C_ID \n" +
            "AND COALESCE(:subProductId, tc.SUB_PRODUCT_ID) = tc.SUB_PRODUCT_ID \n" +
            "AND COALESCE(:subProductValue, tc.SUB_PRODUCT_VALUE) = tc.SUB_PRODUCT_VALUE \n" +
            "AND COALESCE(:productId, tc.PRODUCT_ID) = tc.PRODUCT_ID \n" +
            "AND COALESCE(:customerId, tc.CUSTOMER_ID) = tc.CUSTOMER_ID \n" +
            "AND COALESCE(:consignorId, tc.CONSIGNOR_ID) = tc.CONSIGNOR_ID", nativeQuery = true)
    List<Consignor> getConsignorsWithQry(
            @Param("languageId") String languageId,
            @Param("companyId") String companyId,
            @Param("subProductId") String subProductId,
            @Param("subProductValue") String subProductValue,
            @Param("productId") String productId,
            @Param("customerId") String customerId,
            @Param("consignorId") String consignorId);


}

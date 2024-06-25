package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.customer.ReplicaCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaCustomerRepository extends JpaRepository<ReplicaCustomer, String>, JpaSpecificationExecutor<ReplicaCustomer> {

    Optional<ReplicaCustomer> findByLanguageIdAndCompanyIdAndCustomerIdAndProductIdAndSubProductIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String productId, String customerId, Long deletionIndicator);

    // Get Description
    @Query(value = "Select \n" +
            "CONCAT (tl.LANG_ID, ' - ', tl.LANG_TEXT) As langDesc, \n" +
            "CONCAT (tcm.C_ID, ' - ', tcm.C_NAME) As companyDesc, \n" +
            "CONCAT (tsp.SUB_PRODUCT_ID, ' - ', tsp.SUB_PRODUCT_NAME) As subProductDesc, \n" +
            "CONCAT (tp.PRODUCT_ID, ' - ', tp.PRODUCT_NAME) As productDesc, \n" +
            "CONCAT (tct.CUSTOMER_ID, ' - ', tct.CUSTOMER_NAME) As customerDesc \n" +
            "From tbllanguage tl \n" +
            "Join tblcompany tcm on tl.LANG_ID = tcm.LANG_ID \n" +
            "Join tblsubproduct tsp on tsp.LANG_ID = tl.LANG_ID and tsp.C_ID = tcm.C_ID \n" +
            "Join tblproduct tp on tp.LANG_ID = tl.LANG_ID and tp.C_ID = tcm.C_ID and tsp.SUB_PRODUCT_ID = tp.SUB_PRODUCT_ID \n" +
            "Join tblcustomer tct on tl.LANG_ID = tct.LANG_ID and tcm.C_ID = tct.C_ID and tsp.SUB_PRODUCT_ID = tct.SUB_PRODUCT_ID and tp.PRODUCT_ID = tct.PRODUCT_ID \n" +
            "Where \n" +
            "tl.LANG_ID IN (:languageId) and \n" +
            "tcm.C_ID IN (:companyId) and \n" +
            "tsp.SUB_PRODUCT_ID IN (:subProductId) and \n" +
            "tp.PRODUCT_ID IN (:productId) and \n" +
            "tct.CUSTOMER_ID IN (:customerId) and \n" +
            "tl.IS_DELETED = 0 and \n" +
            "tcm.IS_DELETED = 0 and \n" +
            "tsp.IS_DELETED = 0 and \n" +
            "tp.IS_DELETED = 0 and \n" +
            "tct.IS_DELETED = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "languageId") String languageId,
                                 @Param(value = "companyId") String companyId,
                                 @Param(value = "subProductId") String subProductId,
                                 @Param(value = "productId") String productId,
                                 @Param(value = "customerId") String customerId);

}

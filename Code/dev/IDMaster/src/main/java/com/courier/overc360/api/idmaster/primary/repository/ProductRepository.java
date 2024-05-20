package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.primary.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product, String>, JpaSpecificationExecutor<Product> {

    Optional<Product> findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String productId, Long deletionIndicator);

    // Get Description
    @Query(value = "Select \n" +
            "tl.lang_text langDesc, \n" +
            "tc.c_name companyDesc, \n" +
            "tsp.sub_product_name subProductDesc, \n" +
            "tp.product_name productDesc \n" +
            "From tbllanguage tl \n" +
            "Join tblcompany tc on tl.lang_id = tc.lang_id \n" +
            "Join tblsubproduct tsp on tsp.lang_id = tl.lang_id and tsp.c_id = tc.c_id \n" +
            "Join tblproduct tp on tp.lang_id = tl.lang_id and tp.c_id = tc.c_id and tsp.sub_product_id = tp.sub_product_id \n" +
            "Where \n" +
            "tl.lang_id IN (:languageId) and \n" +
            "tc.c_id IN (:companyId) and \n" +
            "tsp.sub_product_id IN (:subProductId) and\n" +
            "tp.product_id IN (:productId) and \n" +
            "tc.is_deleted = 0 and \n" +
            "tl.is_deleted = 0 and \n" +
            "tsp.is_deleted = 0 and \n" +
            "tp.is_deleted = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "languageId") String languageId,
                                 @Param(value = "companyId") String companyId,
                                 @Param(value = "subProductId") String subProductId,
                                 @Param(value = "productId") String productId);

}

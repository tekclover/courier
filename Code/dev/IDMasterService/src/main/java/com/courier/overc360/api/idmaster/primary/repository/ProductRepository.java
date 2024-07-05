package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.product.Product;
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
public interface ProductRepository extends JpaRepository<Product, String>, JpaSpecificationExecutor<Product> {

    Optional<Product> findByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String subProductValue, String productId, Long deletionIndicator);

    Product findByLanguageIdAndCompanyIdAndProductIdAndSubProductIdAndDeletionIndicator(
            String languageId, String companyId, String productId, String subProductId, Long deletionIndicator);

    List<Product> findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String productId, Long deletionIndicator);

    List<Product> findByLanguageIdAndCompanyIdAndProductIdAndDeletionIndicator(
            String languageId, String companyId, String productId, Long deletionIndicator);


    // Updating productName in Consignor & Customer Tables using Stored Procedure
    @Transactional
    @Procedure(procedureName = "product_desc_update_proc")
    void updateProductDescProc(
            @Param(value = "languageId") String languageId,
            @Param(value = "companyId") String companyId,
            @Param(value = "subProductId") String subProductId,
            @Param(value = "productId") String productId,
            @Param(value = "oldProductDesc") String oldProductDesc,
            @Param(value = "newProductDesc") String newProductDesc);

}

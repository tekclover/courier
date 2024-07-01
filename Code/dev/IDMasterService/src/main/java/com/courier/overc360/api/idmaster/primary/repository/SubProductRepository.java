package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.subproject.SubProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface SubProductRepository extends JpaRepository<SubProduct, String>, JpaSpecificationExecutor<SubProduct> {

    Optional<SubProduct> findByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String subProductValue, Long deletionIndicator);

    // Updating subProductName in Product, Customer & Consignor Tables using Stored Procedure
    @Transactional
    @Procedure(procedureName = "subproduct_desc_update_proc")
    void subProductDescUpdateProc(
            @Param(value = "languageId") String languageId,
            @Param(value = "companyId") String companyId,
            @Param(value = "subProductId") String subProductId,
            @Param(value = "oldSubProductDesc") String oldSubProductDesc,
            @Param(value = "newSubProductDesc") String newSubProductDesc);

}

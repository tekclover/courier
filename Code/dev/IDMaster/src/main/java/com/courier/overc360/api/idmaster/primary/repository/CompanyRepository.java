package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.company.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface CompanyRepository extends JpaRepository<Company, String>, JpaSpecificationExecutor<Company> {

    Optional<Company> findByCompanyIdAndLanguageIdAndDeletionIndicator(
            String companyId, String languageId, Long deletionIndicator);

    @Query(value = "Select \n" +
            "tl.currency_text currencyDesc \n" +
            "From tblcurrency tl \n" +
            "Where \n" +
            "tl.currency_id IN (:currencyId) and \n" +
            "tl.is_deleted = 0", nativeQuery = true)
    String getCurrencyDesc(@Param("currencyId") String currencyId);

    // Update Company Name in all Masters Tables
    @Transactional
    @Procedure(procedureName = "company_desc_update_proc")
    void companyDescUpdateProc(
            @Param(value = "languageId") String languageId,
            @Param(value = "companyId") String companyId,
            @Param(value = "oldLanguageDesc") String oldLanguageDesc,
            @Param(value = "newLanguageDesc") String newLanguageDesc);

    List<Company> findByLanguageIdAndDeletionIndicator(String languageId, Long deletionIndicator);

}
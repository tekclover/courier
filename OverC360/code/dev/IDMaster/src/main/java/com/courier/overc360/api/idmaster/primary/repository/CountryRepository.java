package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.primary.model.country.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface CountryRepository extends JpaRepository<Country, String>, JpaSpecificationExecutor<Country> {

    Optional<Country> findByLanguageIdAndCompanyIdAndCountryIdAndDeletionIndicator(
            String languageId, String companyId, String countryId, Long deletionIndicator);

    // Get Description
    @Query(value = "Select \n" +
            "tl.lang_text langDesc, \n" +
            "tcm.c_name companyDesc, \n" +
            "tcn.country_name countryDesc \n" +
            "From tbllanguage tl \n" +
            "Join tblcompany tcm on tcm.lang_id = tl.lang_id \n" +
            "Join tblcountry tcn on tcn.lang_id = tl.lang_id and tcn.c_id = tcm.c_id \n" +
            "Where \n" +
            "tl.lang_id IN (:languageId) and \n" +
            "tcm.c_id IN (:companyId) and \n" +
            "tcn.country_id IN (:countryId) and \n" +
            "tl.is_deleted = 0 and \n" +
            "tcm.is_deleted = 0 and \n" +
            "tcn.is_deleted = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "languageId") String languageId,
                                 @Param(value = "companyId") String companyId,
                                 @Param(value = "countryId") String countryId);

}

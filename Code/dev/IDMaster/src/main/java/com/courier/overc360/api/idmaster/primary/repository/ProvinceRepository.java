package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.primary.model.province.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ProvinceRepository extends JpaRepository<Province, String>, JpaSpecificationExecutor<Province> {

    Optional<Province> findByLanguageIdAndCompanyIdAndCountryIdAndProvinceIdAndDeletionIndicator(
            String languageId, String companyId, String countryId, String provinceId, Long deletionIndicator);

    @Query(value = "Select \n" +
            "tp.province_name provinceDesc \n" +
            "From tblprovince tp \n" +
            "Where \n" +
            "tp.province_id IN (:provinceId) and \n" +
            "tp.is_deleted = 0", nativeQuery = true)
    IKeyValuePair getProvinceDescription(@Param(value = "provinceId") String provinceId);

    Optional<Province> findByLanguageIdAndCompanyIdAndProvinceIdAndDeletionIndicator(
            String languageId, String companyId, String provinceId, Long deletionIndicator);

}

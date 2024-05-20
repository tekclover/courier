package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.primary.model.city.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface CityRepository extends JpaRepository<City, String>, JpaSpecificationExecutor<City> {

    Optional<City> findByLanguageIdAndCompanyIdAndCountryIdAndProvinceIdAndCityIdAndDeletionIndicator(
            String languageId, String companyId, String countryId, String provinceId, String cityId, Long deletionIndicator);


    // Get Description
    @Query(value = "select \n" +
            "tl.lang_text langDesc,\n" +
            "tc.c_name companyDesc,\n" +
            "tcn.country_name countryDesc, \n" +
            "tp.province_name provinceDesc \n" +
            "from tbllanguage tl \n" +
            "join tblcompany tc on tl.lang_id=tc.lang_id \n" +
            "join tblcountry tcn on tl.lang_id=tcn.lang_id and tc.c_id=tcn.c_id \n" +
            "join tblprovince tp on tl.lang_id=tp.lang_id and tc.c_id=tp.c_id and tcn.country_id=tp.country_id \n" +
            "where \n" +
            "tl.lang_id IN (:languageId) and \n" +
            "tc.c_id IN (:companyId) and \n" +
            "tcn.country_id IN (:countryId) and \n" +
            "tp.province_id IN (:provinceId) and \n" +
            "tl.is_deleted = 0 and \n" +
            "tc.is_deleted = 0 and \n" +
            "tcn.is_deleted = 0 and \n" +
            "tp.is_deleted = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "languageId") String languageId,
                                 @Param(value = "companyId") String companyId,
                                 @Param(value = "countryId") String countryId,
                                 @Param(value = "provinceId") String provinceId);

//Company Query
    @Query(value = "select top 1 lang_text from tbllanguage where (lang_id = :languageId) and is_deleted =0", nativeQuery = true)
    String getLanguageDesc (@Param("languageId") String languageId);

    @Query(value = "select top 1 city_name from tblcity where (city_id = :cityId) and is_deleted = 0", nativeQuery = true)
    String getCityDesc (@Param("cityId") String cityId);

    @Query(value = "select top 1 country_name from tblcountry where (country_id = :countryId) and is_deleted = 0", nativeQuery = true)
    String getCountryDesc(@Param("countryId") String countryId);

    @Query(value = "select top 1 province_name from tblprovince where ( province_id = :provinceId) and is_deleted = 0", nativeQuery = true)
    String getProvinceDesc(@Param("provinceId") String provinceId);
}

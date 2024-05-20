package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.primary.model.country.Country;
import com.courier.overc360.api.idmaster.primary.model.province.AddProvince;
import com.courier.overc360.api.idmaster.primary.model.province.Province;
import com.courier.overc360.api.idmaster.primary.model.province.UpdateProvince;
import com.courier.overc360.api.idmaster.primary.repository.CountryRepository;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.primary.repository.ProvinceRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.province.FindProvince;
import com.courier.overc360.api.idmaster.replica.model.province.ReplicaProvince;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaProvinceRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaProvinceSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ProvinceService {

    @Autowired
    private ProvinceRepository provinceRepository;

    @Autowired
    private ReplicaProvinceRepository replicaProvinceRepository;

    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    /*--------------------------------------------------------PRIMARY------------------------------------------------------------------------*/

    /**
     *
     * Get Province
     *
     * @param languageId
     * @param companyId
     * @param countryId
     * @param provinceId
     * @return
     */
    public Province getProvince(String languageId, String companyId, String countryId, String provinceId) {

        Optional<Province> dbProvince = provinceRepository.findByLanguageIdAndCompanyIdAndCountryIdAndProvinceIdAndDeletionIndicator(
                languageId, companyId, countryId, provinceId, 0L);
        if (dbProvince.isEmpty()) {
            // Error Log
//            createProvinceLog1(languageId, companyId, countryId, provinceId, "ProvinceId - " + provinceId + " and given values doesn't exists");
            throw new BadRequestException("Province with Id - " + provinceId + " and given values doesn't exists");
        }
        return dbProvince.get();
    }

    /**
     *
     * Create Province
     *
     * @param addProvince
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Province createProvince(AddProvince addProvince, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Optional<Country> dbCountry = countryRepository.findByLanguageIdAndCompanyIdAndCountryIdAndDeletionIndicator(
                    addProvince.getLanguageId(), addProvince.getCompanyId(), addProvince.getCountryId(), 0L);

            Optional<Province> duplicateProvince = provinceRepository.findByLanguageIdAndCompanyIdAndCountryIdAndProvinceIdAndDeletionIndicator(
                    addProvince.getLanguageId(), addProvince.getCompanyId(), addProvince.getCountryId(), addProvince.getProvinceId(), 0L);

            if (dbCountry.isEmpty()) {
                throw new BadRequestException("CountryId - " + addProvince.getCountryId() + ", companyId - " + addProvince.getCompanyId() +
                        " and languageId - " + addProvince.getLanguageId() + " doesn't exists");
            } else if (duplicateProvince.isPresent()) {
                throw new BadRequestException("Record is getting Duplicated with the given values");
            } else {
                log.info("new Province --> " + addProvince);
                Province newProvince = new Province();
                IKeyValuePair iKeyValuePair = countryRepository.getDescription(addProvince.getLanguageId(), addProvince.getCompanyId(), addProvince.getCountryId());
                BeanUtils.copyProperties(addProvince, newProvince, CommonUtils.getNullPropertyNames(addProvince));
                if (addProvince.getProvinceId() == null) {

                    String NUM_RAN_OBJ = "PROVINCE";
                    String PROVINCE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for PROVINCE_ID : " + PROVINCE_ID);
                    newProvince.setProvinceId(PROVINCE_ID);
                }
                if (iKeyValuePair != null) {
                    newProvince.setLanguageDescription(iKeyValuePair.getLangDesc());
                    newProvince.setCompanyName(iKeyValuePair.getCompanyDesc());
                    newProvince.setCountryName(iKeyValuePair.getCountryDesc());
                }
                newProvince.setDeletionIndicator(0L);
                newProvince.setCreatedBy(loginUserID);
                newProvince.setCreatedOn(new Date());
                newProvince.setUpdatedBy(loginUserID);
                newProvince.setUpdatedOn(new Date());
                return provinceRepository.save(newProvince);
            }
        } catch (Exception e) {
            // Error Log
//            createProvinceLog2(addProvince, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     *
     * Update Province
     *
     * @param languageId
     * @param companyId
     * @param countryId
     * @param provinceId
     * @param updateProvince
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public Province updateProvince(String languageId, String companyId, String countryId, String provinceId, UpdateProvince updateProvince, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Province dbProvince = getProvince(languageId, companyId, countryId, provinceId);
            BeanUtils.copyProperties(updateProvince, dbProvince, CommonUtils.getNullPropertyNames(updateProvince));
            dbProvince.setUpdatedBy(loginUserID);
            dbProvince.setUpdatedOn(new Date());
            return provinceRepository.save(dbProvince);
        } catch (Exception e) {
            // Error Log
            //createProvinceLog(languageId, companyId, countryId, provinceId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     *
     * Delete Province
     *
     * @param languageId
     * @param companyId
     * @param countryId
     * @param provinceId
     * @param loginUserID
     */
    public void deleteProvince(String languageId, String companyId, String countryId, String provinceId, String loginUserID) {

        Province dbProvince = getProvince(languageId, companyId, countryId, provinceId);
        if (dbProvince != null) {
            dbProvince.setDeletionIndicator(1L);
            dbProvince.setUpdatedBy(loginUserID);
            dbProvince.setUpdatedOn(new Date());
            provinceRepository.save(dbProvince);
        } else {
            // Error Log
            //createProvinceLog1(languageId, companyId, countryId, provinceId, "Error in deleting ProvinceId - " + provinceId);
            throw new BadRequestException("Error in deleting ProvinceId - " + provinceId);
        }
    }

    /*======================================================REPLICA=====================================================*/

    /**
     *
     * Get All Province
     *
     * @return
     */
    public List<ReplicaProvince> getAllProvinces() {
        List<ReplicaProvince> provinceList = replicaProvinceRepository.findAll();
        provinceList = provinceList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return provinceList;
    }

    /**
     *
     * Get Province
     *
     * @param languageId
     * @param companyId
     * @param countryId
     * @param provinceId
     * @return
     */
    public ReplicaProvince getReplicaProvince(String languageId, String companyId, String countryId, String provinceId) {

        Optional<ReplicaProvince> dbProvince = replicaProvinceRepository.findByLanguageIdAndCompanyIdAndCountryIdAndProvinceIdAndDeletionIndicator(
                languageId, companyId, countryId, provinceId, 0L);
        if (dbProvince.isEmpty()) {
            // Error Log
            //createProvinceLog1(languageId, companyId, countryId, provinceId, "ProvinceId - " + provinceId + " and given values doesn't exists");
            throw new BadRequestException("Province with Id - " + provinceId + " and given values doesn't exists");
        }
        return dbProvince.get();
    }

    /**
     *
     * Find Province
     *
     * @param findProvince
     * @return
     * @throws ParseException
     */
    public List<ReplicaProvince> replicaFindProvinces(FindProvince findProvince) throws ParseException {

        ReplicaProvinceSpecification spec = new ReplicaProvinceSpecification(findProvince);
        List<ReplicaProvince> results = replicaProvinceRepository.findAll(spec);
        log.info("found ReplicaProvinces --> " + results);
        return results;
    }
}

package com.courier.overc360.api.midmile.primary.repository;

import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.ccr.Ccr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface CcrRepository extends JpaRepository<Ccr, String>,
        JpaSpecificationExecutor<Ccr> {

    // Get Description
    @Query(value = "Select \n" +
            "tl.lang_text langDesc, \n" +
            "tc.c_name companyDesc \n" +
            "From tbllanguage tl \n" +
            "Join tblcompany tc on tl.lang_id = tc.lang_id \n" +
            "Where \n" +
            "tl.lang_id IN (:languageId) and \n" +
            "tc.c_id IN (:companyId) and \n" +
            "tl.is_deleted = 0 and \n" +
            "tc.is_deleted = 0", nativeQuery = true)
    IKeyValuePair getLAndCDescription(@Param(value = "languageId") String languageId,
                                      @Param(value = "companyId") String companyId);

    Optional<Ccr> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndCcrIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String consoleId, String ccrId, Long deletionIndicator);

    boolean existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndCustomsCcrNoAndDeletionIndicator(
            String languageId, String companYId, String partnerId, String masterAirwayBill, String houseAirwayBill, String customsCcrNo, Long deletionIndicator
    );

    //Get IataKd
    @Query(value = "Select \n" +
            "IATA_KD iataKd \n" +
            "From tbliata  \n" +
            "Where \n" +
            "ORIGIN_CODE IN (:countryOfOrigin) and \n" +
            "LANG_ID IN (:languageId) and \n" +
            "C_ID IN (:companyId) and \n" +
            "is_deleted = 0", nativeQuery = true)
    IKeyValuePair getIataKd(@Param(value = "countryOfOrigin") String countryOfOrigin,
                            @Param(value = "languageId") String languageId,
                            @Param(value = "companyId") String companyId);

    Optional<Ccr> findByHouseAirwayBill(String houseAirwayBill);
    List<Ccr> findAllByCcrIdAndDeletionIndicator(String ccrId, Long deletionIndicator);

    Optional<Ccr> findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
            String companyId, String languageId, String partnerId, String masterAirwayBill, String houseAirwayBill, Long deletionIndicator);

    @Transactional
    @Modifying
    @Query(value = "UPDATE tblconsignment_entity " +
            "SET event_code = :eventCode, " +
            "event_text = :eventText, " +
            "status_id = :statusId, " +
            "status_text = :statusText, " +
            "status_timestamp = getDate(), " +
            "EVENT_TIMESTAMP = getDate() " +
            "WHERE c_id = :companyId " +
            "AND lang_id = :languageId " +
            "AND partner_id = :partnerId " +
            "AND HOUSE_AIRWAY_BILL = :houseAirwayBill " +
            "AND MASTER_AIRWAY_BILL = :masterAirwayBill " +
            "AND is_deleted = 0",
            nativeQuery = true)
    public void updateEventCodeFromConsignment(@Param("companyId") String companyId,
                                               @Param("languageId") String languageId,
                                               @Param("partnerId") String partnerId,
                                               @Param("houseAirwayBill") String houseAirwayBill,
                                               @Param("masterAirwayBill") String masterAirwayBill,
                                               @Param("eventCode") String eventCode,
                                               @Param("eventText") String eventText,
                                               @Param("statusId") String statusId,
                                               @Param("statusText") String statusText);

}


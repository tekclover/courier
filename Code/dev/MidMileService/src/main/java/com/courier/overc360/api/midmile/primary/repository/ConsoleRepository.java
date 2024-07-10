package com.courier.overc360.api.midmile.primary.repository;

import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.console.Console;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Repository
public interface ConsoleRepository extends JpaRepository<Console, String>,
        JpaSpecificationExecutor<Console> {

    Optional<Console> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String consoleId, Long deletionIndicator);

    boolean existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, Long deletionIndicator);


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

    @Query(value = "Select * From tblconsole tc \n" +
            "Where \n" +
            "tc.CONSOLE_ID IN (:consoleId) and \n" +
            "tc.is_deleted = 0 ", nativeQuery = true)
    List<Console> getConsoleData(@Param(value = "consoleId") String consoleId);

    Console findByHouseAirwayBillAndConsoleIdAndDeletionIndicator(String houseAirwayBill, String fromConsole, Long deletionIndicator);

    boolean existsByConsoleIdAndDeletionIndicator(String toConsoleId, Long deletionIndicator);

    @Transactional
    @Modifying
    @Query(value = "UPDATE tblconsignment_entity " +
            "SET event_code = 6, " +
            "CONSOLE_INDICATOR = 1, " +
            "event_text = 'Console Created', " +
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
                                               @Param("masterAirwayBill") String masterAirwayBill);

    @Transactional
    @Modifying
    @Query(value = "UPDATE tblconsignment_entity " +
            "SET event_code = :eventCode, " +
            "event_text = :eventText, " +
            "STATUS_ID = :statusCode, " +
            "STATUS_TEXT = :statusText, " +
            "STATUS_TIMESTAMP = getDate(), " +
            "EVENT_TIMESTAMP = getDate() " +
            "WHERE c_id = :companyId " +
            "AND lang_id = :languageId " +
            "AND partner_id = :partnerId " +
            "AND HOUSE_AIRWAY_BILL = :houseAirwayBill " +
            "AND MASTER_AIRWAY_BILL = :masterAirwayBill " +
            "AND is_deleted = 0",
            nativeQuery = true)
    public void conUpdateBasedOnConsoleUpdate(@Param("companyId") String companyId,
                                              @Param("languageId") String languageId,
                                              @Param("partnerId") String partnerId,
                                              @Param("houseAirwayBill") String houseAirwayBill,
                                              @Param("masterAirwayBill") String masterAirwayBill,
                                              @Param("statusCode") String statusCode,
                                              @Param("eventCode") String eventCode,
                                              @Param("statusText") String statusText,
                                              @Param("eventText") String eventText);

    @Transactional
    @Modifying
    @Query(value = "UPDATE tblconsole " +
            "SET event_code = :eventCode, " +
            "event_text = :eventText, " +
            "STATUS_ID = :statusCode, " +
            "STATUS_TEXT = :statusText, " +
            "STATUS_TIMESTAMP = getDate(), " +
            "EVENT_TIMESTAMP = getDate() " +
            "WHERE c_id = :companyId " +
            "AND lang_id = :languageId " +
            "AND partner_id = :partnerId " +
            "AND HOUSE_AIRWAY_BILL = :houseAirwayBill " +
            "AND MASTER_AIRWAY_BILL = :masterAirwayBill " +
            "AND CONSOLE_ID = :consoleId " +
            "AND is_deleted = 0",
            nativeQuery = true)
    public void consoleUpdateBasedOnCCRUpdate(@Param("companyId") String companyId,
                                              @Param("languageId") String languageId,
                                              @Param("partnerId") String partnerId,
                                              @Param("houseAirwayBill") String houseAirwayBill,
                                              @Param("masterAirwayBill") String masterAirwayBill,
                                              @Param("statusCode") String statusCode,
                                              @Param("eventCode") String eventCode,
                                              @Param("statusText") String statusText,
                                              @Param("eventText") String eventText,
                                              @Param("consoleId") String consoleId);

    Optional<Console> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndPieceIdAndPieceItemIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String consoleId, String pieceId, String pieceItemId, Long deletionIndicator);
}
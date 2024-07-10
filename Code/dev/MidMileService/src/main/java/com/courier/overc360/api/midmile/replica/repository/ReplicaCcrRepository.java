package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.replica.model.ccr.ReplicaCcr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ReplicaCcrRepository extends JpaRepository<ReplicaCcr, String>,
        JpaSpecificationExecutor<ReplicaCcr> {

    Optional<ReplicaCcr> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndCcrIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String consoleId, String ccrId, Long deletionIndicator);

    Optional<ReplicaCcr> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndCcrIdAndPieceIdAndPieceItemIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String consoleId, String ccrId, String pieceId, String pieceItemId, Long deletionIndicator);

//    boolean existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndCustomsCcrNoAndDeletionIndicator(
//            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String customsCcrNo, Long deletionIndicator
//    );

    // Duplicate Header Check
    @Query(value = "Select \n" +
            "Case When Exists \n" +
            "(Select 1 From tblccr h \n" +
            "Where \n" +
            "h.LANG_ID = :languageId and \n" +
            "h.C_ID = :companyId and \n" +
            "h.PARTNER_ID = :partnerId and \n" +
            "h.Master_Airway_Bill = :masterAirwayBill and \n" +
            "h.HOUSE_AIRWAY_BILL = :houseAirwayBill and \n" +
            "h.CONSOLE_ID = :consoleId and \n " +
            "h.IS_DELETED =0) \n" +
            "Then 1 \n" +
            "Else 0 \n" +
            "End", nativeQuery = true)
    Long duplicateExists(@Param(value = "languageId") String languageId,
                         @Param(value = "companyId") String companyId,
                         @Param(value = "partnerId") String partnerId,
                         @Param(value = "masterAirwayBill") String masterAirwayBill,
                         @Param(value = "houseAirwayBill") String houseAirwayBill,
                         @Param(value = "consoleId") String consoleId);

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

    @Query(value = "select \n" +
            "(select to_currency_value currencyValue from tblcurrencyexchangerate where " +
            "c_id = :companyId and from_currency_id = :currencyId and is_deleted = 0) as currencyValue, \n" +
            "(select iata_kd iataKd from tbliata where " +
            "origin_code = :originCode and lang_id = :languageId and c_id = :companyId and is_deleted = 0) as iataKd",
            nativeQuery = true)
    Optional<IKeyValuePair> getIataCurrencyValue(@Param("companyId") String companyId,
                                                 @Param("languageId") String languageId,
                                                 @Param("currencyId") String currencyId,
                                                 @Param("originCode") String originCode);


    // Find CCRs with given Params Only
    @Query(value = "SELECT * FROM tblccr tc \n" +
            "WHERE tc.IS_DELETED = 0 \n" +
            "AND (COALESCE(:languageId, NULL) IS NULL OR tc.LANG_ID IN (:languageId)) \n" +
            "AND (COALESCE(:companyId, NULL) IS NULL OR tc.C_ID IN (:companyId)) \n" +
            "AND (COALESCE(:partnerId, NULL) IS NULL OR tc.PARTNER_ID IN (:partnerId)) \n" +
            "AND (COALESCE(:masterAirwayBill, NULL) IS NULL OR tc.MASTER_AIRWAY_BILL IN (:masterAirwayBill)) \n" +
            "AND (COALESCE(:houseAirwayBill, NULL) IS NULL OR tc.HOUSE_AIRWAY_BILL IN (:houseAirwayBill)) \n" +
            "AND (COALESCE(:ccrId, NULL) IS NULL OR tc.CCR_ID IN (:ccrId)) \n" +
            "AND (COALESCE(:consoleId, NULL) IS NULL OR tc.CONSOLE_ID IN (:consoleId))", nativeQuery = true)
    List<ReplicaCcr> findCCRsWithQry(
            @Param("languageId") List<String> languageId,
            @Param("companyId") List<String> companyId,
            @Param("partnerId") List<String> partnerId,
            @Param("masterAirwayBill") List<String> masterAirwayBill,
            @Param("houseAirwayBill") List<String> houseAirwayBill,
            @Param("ccrId") List<String> ccrId,
            @Param("consoleId") List<String> consoleId);


}

package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.primary.model.console.MobileApp;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReplicaConsoleRepository extends JpaRepository<ReplicaConsole, String>,
        JpaSpecificationExecutor<ReplicaConsole> {

    Optional<ReplicaConsole> findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndConsoleIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String partnerMasterAirwayBill, String partnerHouseAirwayBill, String consoleId, Long deletionIndicator);

    boolean existsByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String pieceId, Long deletionIndicator);

    // Duplicate Header Check
    @Query(value = "Select \n" +
            "Case When Exists \n" +
            "(Select 1 From tblconsole h \n" +
            "Where \n" +
            "h.LANG_ID = :languageId and \n" +
            "h.C_ID = :companyId and \n" +
            "h.PARTNER_ID = :partnerId and \n" +
            "h.Partner_Master_Airway_Bill = :partnerMasterAirwayBill and \n" +
            "h.PARTNER_HOUSE_AIRWAY_BILL = :partnerHouseAirwayBill and \n" +
            "h.IS_DELETED =0) \n" +
            "Then 1 \n" +
            "Else 0 \n" +
            "End", nativeQuery = true)
    Long duplicateExists(@Param(value = "languageId") String languageId,
                         @Param(value = "companyId") String companyId,
                         @Param(value = "partnerId") String partnerId,
                         @Param(value = "partnerMasterAirwayBill") String partnerMasterAirwayBill,
                         @Param(value = "partnerHouseAirwayBill") String partnerHouseAirwayBill);


    @Query(value = "select special_approval_id from tblhscode where " +
            "c_id in (:companyId) and hs_code in (:hsCode) and is_deleted = 0", nativeQuery = true)
    public String getSpecialApproval(@Param(value = "companyId") String companyId,
                                     @Param(value = "hsCode") String hsCode);


    // Find Consoles with given Params Only
    @Query(value = "SELECT * FROM tblconsole tc \n" +
            "WHERE tc.IS_DELETED = 0 \n" +
            "AND (COALESCE(:languageId, NULL) IS NULL OR tc.LANG_ID IN (:languageId)) \n" +
            "AND (COALESCE(:companyId, NULL) IS NULL OR tc.C_ID IN (:companyId)) \n" +
            "AND (COALESCE(:partnerId, NULL) IS NULL OR tc.PARTNER_ID IN (:partnerId)) \n" +
            "AND (COALESCE(:partnerMasterAirwayBill, NULL) IS NULL OR tc.PARTNER_MASTER_AIRWAY_BILL IN (:partnerMasterAirwayBill)) \n" +
            "AND (COALESCE(:partnerHouseAirwayBill, NULL) IS NULL OR tc.PARTNER_HOUSE_AIRWAY_BILL IN (:partnerHouseAirwayBill)) \n" +
            "AND (COALESCE(:consoleId, NULL) IS NULL OR tc.CONSOLE_ID IN (:consoleId))", nativeQuery = true)
    List<ReplicaConsole> findConsolesWithQry(
            @Param("languageId") List<String> languageId,
            @Param("companyId") List<String> companyId,
            @Param("partnerId") List<String> partnerId,
            @Param("partnerMasterAirwayBill") List<String> partnerMasterAirwayBill,
            @Param("partnerHouseAirwayBill") List<String> partnerHouseAirwayBill,
            @Param("consoleId") List<String> consoleId);

    @Query(value = "SELECT t.PARTNER_MASTER_AIRWAY_BILL AS partnerMasterAirwayBill, " +
            "t.PARTNER_ID AS partnerId, " +
            "t.PARTNER_NAME AS partnerName, " +
            "t.CTD_ON AS createdOn " +
            "FROM tblconsole t " +
            "INNER JOIN ( " +
            "    SELECT PARTNER_MASTER_AIRWAY_BILL, MAX(CTD_ON) AS max_date " +
            "    FROM tblconsole " +
            "    WHERE STATUS_ID != 5 AND is_deleted = 0 " +
            "    GROUP BY PARTNER_MASTER_AIRWAY_BILL " +
            ") sub ON t.PARTNER_MASTER_AIRWAY_BILL = sub.PARTNER_MASTER_AIRWAY_BILL AND t.CTD_ON = sub.max_date " +
            "WHERE t.STATUS_ID != 5 AND t.is_deleted = 0",
            nativeQuery = true)
    List<MobileApp> getMobileApp();

}

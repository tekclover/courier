package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.console.Console;
import com.courier.overc360.api.midmile.primary.model.console.MobileApp;
import com.courier.overc360.api.midmile.replica.model.console.ConsoleImpl;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ReplicaConsoleRepository extends JpaRepository<ReplicaConsole, String>,
        JpaSpecificationExecutor<ReplicaConsole> {

    Optional<ReplicaConsole> findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndConsoleIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String partnerMasterAirwayBill, String partnerHouseAirwayBill, String consoleId, Long deletionIndicator);

    Console findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
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
    @Query(value = "SELECT * FROM tblconsole tc\n" +
            "WHERE tc.IS_DELETED = 0\n" +
            "AND (COALESCE(:languageId, NULL) IS NULL OR tc.LANG_ID IN (:languageId))\n" +
            "AND (COALESCE(:companyId, NULL) IS NULL OR tc.C_ID IN (:companyId))\n" +
            "AND (COALESCE(:partnerId, NULL) IS NULL OR tc.PARTNER_ID IN (:partnerId))\n" +
            "AND (COALESCE(:partnerMasterAirwayBill, NULL) IS NULL OR tc.PARTNER_MASTER_AIRWAY_BILL IN (:partnerMasterAirwayBill))\n" +
            "AND (COALESCE(:partnerHouseAirwayBill, NULL) IS NULL OR tc.PARTNER_HOUSE_AIRWAY_BILL IN (:partnerHouseAirwayBill))\n" +
            "AND (COALESCE(:consoleId, NULL) IS NULL OR tc.CONSOLE_ID IN (:consoleId))", nativeQuery = true)
    List<ReplicaConsole> findConsolesWithQry(
            @Param("languageId") List<String> languageId,
            @Param("companyId") List<String> companyId,
            @Param("partnerId") List<String> partnerId,
            @Param("partnerMasterAirwayBill") List<String> partnerMasterAirwayBill,
            @Param("partnerHouseAirwayBill") List<String> partnerHouseAirwayBill,
            @Param("consoleId") List<String> consoleId);


    // Find Consoles By Automatic Pagination - SQL Qry
    @Query(value = "SELECT * FROM tblconsole tc\n" +
            "WHERE tc.IS_DELETED = 0\n" +
            "AND (COALESCE(:languageId, NULL) IS NULL OR tc.LANG_ID IN (:languageId))\n" +
            "AND (COALESCE(:companyId, NULL) IS NULL OR tc.C_ID IN (:companyId))\n" +
            "AND (COALESCE(:partnerId, NULL) IS NULL OR tc.PARTNER_ID IN (:partnerId))\n" +
            "AND (COALESCE(:partnerMasterAirwayBill, NULL) IS NULL OR tc.PARTNER_MASTER_AIRWAY_BILL IN (:partnerMasterAirwayBill))\n" +
            "AND (COALESCE(:partnerHouseAirwayBill, NULL) IS NULL OR tc.PARTNER_HOUSE_AIRWAY_BILL IN (:partnerHouseAirwayBill))\n" +
            "AND (COALESCE(:consoleId, NULL) IS NULL OR tc.CONSOLE_ID IN (:consoleId))\n" +
//            "ORDER BY CTD_ON DESC\n" +
            "ORDER BY (SELECT NULL) \n" +
            "OFFSET :offset ROWS FETCH NEXT :limit ROWS ONLY", nativeQuery = true)
    List<ReplicaConsole> findConsolesByPagination(
            @Param("languageId") List<String> languageId,
            @Param("companyId") List<String> companyId,
            @Param("partnerId") List<String> partnerId,
            @Param("partnerMasterAirwayBill") List<String> partnerMasterAirwayBill,
            @Param("partnerHouseAirwayBill") List<String> partnerHouseAirwayBill,
            @Param("consoleId") List<String> consoleId,
            @Param("limit") int limit,
            @Param("offset") int offset);


    @Query(value = "SELECT t.PARTNER_MASTER_AIRWAY_BILL AS partnerMasterAirwayBill, " +
            "t.PARTNER_ID AS partnerId, " +
            "t.PARTNER_NAME AS partnerName, " +
            "t.CTD_ON AS createdOn " +
            "FROM tblconsole t " +
            "INNER JOIN ( " +
            "    SELECT PARTNER_MASTER_AIRWAY_BILL, MAX(CTD_ON) AS max_date " +
            "    FROM tblconsole " +
            "    WHERE HAWB_TYP_ID = 45 AND HAWB_TYP = 'EVENT' AND is_deleted = 0 " +
            "    GROUP BY PARTNER_MASTER_AIRWAY_BILL " +
            ") sub ON t.PARTNER_MASTER_AIRWAY_BILL = sub.PARTNER_MASTER_AIRWAY_BILL AND t.CTD_ON = sub.max_date " +
            "WHERE t.HAWB_TYP_ID = 45 AND HAWB_TYP = 'EVENT' AND t.is_deleted = 0",
            nativeQuery = true)
    List<MobileApp> getMobileApp();

    @Query(value = "select invoice_type invoiceType, " +
            " invoice_number invoiceNumber, " +
            " invoice_date invoiceDate from tblconsignment_entity where " +
            " partner_house_ab = :partnerHouseAB and " +
            " partner_master_ab = :partnerMasterAB and " +
            " partner_id = :partnerId and " +
            " c_id = :companyId and " +
            " lang_id = :languageId ", nativeQuery = true)
    Optional<IKeyValuePair> getInvoice(@Param("companyId") String companyId,
                                       @Param("languageId") String languageId,
                                       @Param("partnerId") String partnerId,
                                       @Param("partnerHouseAB") String partnerHouseAB,
                                       @Param("partnerMasterAB") String partnerMasterAB);

    List<Console> findByConsoleIdAndDeletionIndicator(String consoleId, Long deletionIndicator);


    // Get Mobile Dashboard Count
    @Query(value = "Select COUNT(*) From (\n" +
            "Select COUNT(*) As consoleCount\n" +
            "From tblconsole tc \n" +
            "Where tc.IS_DELETED=0\n" +
            "And tc.LANG_ID = :languageId\n" +
            "And tc.C_ID = :companyId\n" +
            "And tc.HAWB_TYP_ID = :hawbTypeId\n" +
            "Group By tc.PARTNER_MASTER_AIRWAY_BILL\n" +
            ") x", nativeQuery = true)
    long getMobileDashboardCount(@Param("languageId") String languageId,
                                 @Param("companyId") String companyId,
                                 @Param("hawbTypeId") String hawbTypeId);

    boolean existsByLanguageIdAndCompanyIdAndPartnerMasterAirwayBillAndConsoleIdAndDeletionIndicator(
            String languageId, String companyId, String partnerMasterAirwayBill, String consoleId, Long deletionIndicator);


    // Get total Sum of NetWeight and TotalQuantity
    @Query(value = "SELECT\n" +
            "COALESCE(SUM(TRY_CONVERT(float, tc.NET_WEIGHT)), 0) AS totalWeight,\n" +
            "COALESCE(SUM(TRY_CONVERT(int, tc.TOTAL_QUANTITY)), 0) AS totalQuantity\n" +
            "FROM tblconsole tc\n" +
            "WHERE tc.IS_DELETED = 0\n" +
            "AND tc.LANG_ID = :languageId\n" +
            "AND tc.C_ID = :companyId\n" +
            "AND tc.PARTNER_ID = :partnerId\n" +
            "AND tc.CONSOLE_ID = :consoleId\n" +
            "AND tc.PARTNER_MASTER_AIRWAY_BILL = :partnerMasterAB", nativeQuery = true)
    ConsoleImpl getSumValues(@Param("languageId") String languageId,
                             @Param("companyId") String companyId,
                             @Param("partnerId") String partnerId,
                             @Param("consoleId") String consoleId,
                             @Param("partnerMasterAB") String partnerMasterAB);


    // Get Location Sheet values
    @Query(value = "Select Top 1 \n" +
            "tc.LANG_TEXT As langDesc, \n" +
            "tc.C_NAME As companyDesc,\n" +
            "tc.PARTNER_NAME As partnerName,\n" +
            "tc.PARTNER_TYPE As partnerType,\n" +
            "tc.CONSIGNEE_NAME As consigneeName,\n" +
//            "tc.MASTER_AIRWAY_BILL As masterAirwayBill,\n" +
            "tc.COUNTRY_OF_ORIGIN As origin\n" +
            "From tblconsole tc\n" +
            "Where tc.IS_DELETED=0\n" +
            "AND tc.LANG_ID = :languageId\n" +
            "AND tc.C_ID = :companyId\n" +
            "AND tc.PARTNER_ID = :partnerId\n" +
            "AND tc.CONSOLE_ID = :consoleId\n" +
            "AND tc.PARTNER_MASTER_AIRWAY_BILL = :partnerMasterAB", nativeQuery = true)
    ConsoleImpl getLocationSheetValues(@Param("languageId") String languageId,
                                       @Param("companyId") String companyId,
                                       @Param("partnerId") String partnerId,
                                       @Param("consoleId") String consoleId,
                                       @Param("partnerMasterAB") String partnerMasterAB);


    // Get No of Consoles
    @Query(value = "Select COUNT(*) From tblconsole\n" +
            "Where IS_DELETED=0\n" +
            "And LANG_ID = :languageId\n" +
            "And C_ID = :companyId\n" +
            "And PARTNER_ID = :partnerId\n" +
            "And PARTNER_MASTER_AIRWAY_BILL = :partnerMasterAB\n" +
            "And PARTNER_HOUSE_AIRWAY_BILL = :partnerHouseAB\n" +
            "And UNCONSOLIDATED = :unconsolidatedIndicator\n" +
            "And CTD_ON between COALESCE(:fromDate, NULL) And COALESCE(:toDate, NULL)", nativeQuery = true)
    long getNoOfConsoles(@Param("languageId") List<String> languageId,
                         @Param("companyId") List<String> companyId,
                         @Param("partnerId") List<String> partnerId,
                         @Param("partnerMasterAB") List<String> partnerMasterAB,
                         @Param("partnerHouseAB") List<String> partnerHouseAB,
                         @Param("unconsolidatedIndicator") Long unconsolidatedIndicator,
                         @Param("fromDate") Date fromDate,
                         @Param("toDate") Date toDate);


    // Get Scanning Officer and Time
    @Query(value = "Select Top 1\n" +
            "tc.UTD_BY As updatedBy,\n" +
            "tc.UTD_ON As updatedOn\n" +
            "From tblconsole tc\n" +
            "Where tc.IS_DELETED=0\n" +
            "And tc.LANG_ID = :languageId\n" +
            "And tc.C_ID = :companyId\n" +
            "And tc.PARTNER_ID = :partnerId\n" +
            "And tc.PARTNER_MASTER_AIRWAY_BILL = :partnerMasterAB\n" +
            "And tc.REF_FIELD_10 = 'SCAN'\n" +
            "ORDER BY UTD_ON DESC", nativeQuery = true)
    ConsoleImpl getScanValues(@Param("languageId") String languageId,
                              @Param("companyId") String companyId,
                              @Param("partnerId") String partnerId,
                              @Param("partnerMasterAB") String partnerMasterAB);

}

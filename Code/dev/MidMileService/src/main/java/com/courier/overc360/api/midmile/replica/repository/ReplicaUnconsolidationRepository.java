package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.replica.model.console.unconsolidation.ReplicaUnconsolidation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ReplicaUnconsolidationRepository extends JpaRepository<ReplicaUnconsolidation, String>, JpaSpecificationExecutor<ReplicaUnconsolidation> {

    Optional<ReplicaUnconsolidation> findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String partnerMasterAirwayBill,
            String partnerHouseAirwayBill, String pieceId, Long deletionIndicator);

    boolean existsByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String partnerMasterAirwayBill,
            String partnerHouseAirwayBill, String pieceId, Long deletionIndicator);


    // Get Description
    @Query(value = "Select\n" +
            "tl.LANG_TEXT langDesc,\n" +
            "tc.C_NAME companyDesc\n" +
            "From tbllanguage tl\n" +
            "Join tblcompany tc on tl.LANG_ID = tc.LANG_ID\n" +
            "Where\n" +
            "tl.LANG_ID IN (:languageId) and\n" +
            "tc.C_ID IN (:companyId) and\n" +
            "tl.IS_DELETED = 0 and\n" +
            "tc.IS_DELETED = 0", nativeQuery = true)
    IKeyValuePair getLAndCDescription(@Param(value = "languageId") String languageId,
                                      @Param(value = "companyId") String companyId);


    // Get All Non-deleted Unconsolidations
    @Query(value = "Select * From tblunconsolidation\n" +
            "Where IS_DELETED=0", nativeQuery = true)
    List<ReplicaUnconsolidation> getAllNonDeletedUnconsolidations();


    // Find Unconsolidations with given Params Only
    @Query(value = "SELECT * FROM tblunconsolidation tc\n" +
            "WHERE tc.IS_DELETED=0\n" +
            "AND (COALESCE(:languageId, NULL) IS NULL OR tc.LANG_ID IN (:languageId))\n" +
            "AND (COALESCE(:companyId, NULL) IS NULL OR tc.C_ID IN (:companyId))\n" +
            "AND (COALESCE(:partnerMasterAirwayBill, NULL) IS NULL OR tc.PARTNER_MASTER_AIRWAY_BILL IN (:partnerMasterAirwayBill))\n" +
            "AND (COALESCE(:partnerHouseAirwayBill, NULL) IS NULL OR tc.PARTNER_HOUSE_AIRWAY_BILL IN (:partnerHouseAirwayBill))\n" +
            "AND (COALESCE(:partnerId, NULL) IS NULL OR tc.PARTNER_ID IN (:partnerId))", nativeQuery = true)
    List<ReplicaUnconsolidation> findUnconsolidationsWithQry(
            @Param("languageId") List<String> languageId,
            @Param("companyId") List<String> companyId,
            @Param("partnerId") List<String> partnerId,
            @Param("partnerMasterAirwayBill") List<String> partnerMasterAirwayBill,
            @Param("partnerHouseAirwayBill") List<String> partnerHouseAirwayBill);


    // Get No of Unconsolidated Shipments
    @Query(value = "Select COUNT(*) From tblunconsolidation\n" +
            "Where IS_DELETED=0\n" +
            "And LANG_ID = :languageId\n" +
            "And C_ID = :companyId\n" +
            "And PARTNER_ID = :partnerId\n" +
            "And PARTNER_MASTER_AIRWAY_BILL = :partnerMasterAB\n" +
            "And PARTNER_HOUSE_AIRWAY_BILL = :partnerHouseAB\n" +
            "And UNCONSOLIDATED = :unconsolidatedIndicator\n" +
            "And CTD_ON between COALESCE(:fromDate, NULL) And COALESCE(:toDate, NULL)", nativeQuery = true)
    long getNoOfUnconsolidatedShipments(@Param("languageId") List<String> languageId,
                                        @Param("companyId") List<String> companyId,
                                        @Param("partnerId") List<String> partnerId,
                                        @Param("partnerMasterAB") List<String> partnerMasterAB,
                                        @Param("partnerHouseAB") List<String> partnerHouseAB,
                                        @Param("unconsolidatedIndicator") Long unconsolidatedIndicator,
                                        @Param("fromDate") Date fromDate,
                                        @Param("toDate") Date toDate);

}

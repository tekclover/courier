package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.replica.model.dto.ConsignmentImpl;
import com.courier.overc360.api.midmile.replica.model.prealert.ReplicaPreAlert;
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
public interface ReplicaPreAlertRepository extends JpaRepository<ReplicaPreAlert, String>, JpaSpecificationExecutor<ReplicaPreAlert> {

    Optional<ReplicaPreAlert> findByCompanyIdAndLanguageIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator(
            String companyId, String languageId, String partnerId, String partnerMasterAirwayBill, String partnerHouseAirwayBill, Long deletionIndicator);


    // Get Partner Name
    @Query(value = "Select Top 1 tc.PARTNER_NAME\n" +
            "From tblconsignment_entity tc\n" +
            "Where tc.IS_DELETED=0\n" +
            "AND tc.LANG_ID = :languageId\n" +
            "AND tc.C_ID = :companyId\n" +
            "AND tc.PARTNER_ID = :partnerId\n" +
//            "AND tc.PARTNER_MASTER_AB = :partnerMasterAirwayBill\n" +
            "AND tc.PARTNER_HOUSE_AB = :partnerHouseAirwayBill", nativeQuery = true)
    Optional<String> getPartnerName(
            @Param("languageId") String languageId,
            @Param("companyId") String companyId,
            @Param("partnerId") String partnerId,
//            @Param("partnerMasterAirwayBill") String partnerMasterAirwayBill,
            @Param("partnerHouseAirwayBill") String partnerHouseAirwayBill);


    // Get No of Shipments Scanned
    @Query(value = "Select COUNT(*) From tblprealert tp\n" +
            "Where tp.IS_DELETED=0\n" +
            "AND (COALESCE(:languageId, NULL) IS NULL OR tp.LANG_ID IN (:languageId))\n" +
            "AND (COALESCE(:companyId, NULL) IS NULL OR tp.C_ID IN (:companyId))\n" +
//            "AND (COALESCE(:partnerId, NULL) IS NULL OR tp.PARTNER_ID IN (:partnerId))\n" +
            "AND (COALESCE(:partnerMasterAirwayBill, NULL) IS NULL OR tp.PARTNER_MASTER_AIRWAY_BILL IN (:partnerMasterAirwayBill))\n" +
            "AND (COALESCE(:partnerHouseAirwayBill, NULL) IS NULL OR tp.PARTNER_HOUSE_AIRWAY_BILL IN (:partnerHouseAirwayBill))\n" +
            "And (COALESCE(:fromDate, NULL) IS NULL OR tp.CTD_ON between COALESCE(:fromDate, NULL) And COALESCE(:toDate, NULL))", nativeQuery = true)
    long getNoOfShipmentsScanned(
            @Param("languageId") String languageId,
            @Param("companyId") String companyId,
//            @Param("partnerId") String partnerId,
            @Param("partnerMasterAirwayBill") String partnerMasterAirwayBill,
            @Param("partnerHouseAirwayBill") String partnerHouseAirwayBill,
            @Param("fromDate") Date fromDate,
            @Param("toDate") Date toDate);


    // Get All PARTNER_MASTER_AIRWAY_BILL count
    @Query(value = "SELECT tp.PARTNER_MASTER_AIRWAY_BILL As partnerMasterAirwayBill, COUNT(*) AS pMawbCount\n" +
            "FROM tblprealert tp\n" +
            "WHERE tp.IS_DELETED = 0\n" +
            "And tp.HAWB_TYP_ID != 9\n" +
            "AND (COALESCE(:languageId, NULL) IS NULL OR tp.LANG_ID IN (:languageId))\n" +
            "AND (COALESCE(:companyId, NULL) IS NULL OR tp.C_ID IN (:companyId))\n" +
            "GROUP BY tp.PARTNER_MASTER_AIRWAY_BILL", nativeQuery = true)
    List<ConsignmentImpl> getAllPMawbCount(@Param("languageId") String languageId,
                                           @Param("companyId") String companyId);


    boolean existsByLanguageIdAndCompanyIdAndDeletionIndicator(
            String languageId, String companyId, Long deletionIndicator);

}

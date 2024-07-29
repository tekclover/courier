package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.replica.model.prealert.ReplicaPreAlert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaPreAlertRepository extends JpaRepository<ReplicaPreAlert, String>, JpaSpecificationExecutor<ReplicaPreAlert> {

    Optional<ReplicaPreAlert> findByCompanyIdAndLanguageIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator(
            String companyId, String languageId, String partnerId, String partnerMasterAirwayBill, String partnerHouseAirwayBill, Long deletionIndicator);


    // Get Partner Name
    @Query(value = "Select\n" +
            "tc.PARTNER_NAME\n" +
            "From tblconsignment_entity tc\n" +
            "Where tc.IS_DELETED=0\n" +
            "AND tc.LANG_ID = :languageId\n" +
            "AND tc.C_ID = :companyId\n" +
            "AND tc.PARTNER_ID = :partnerId\n" +
            "AND tc.PARTNER_MASTER_AB = :partnerMasterAirwayBill\n" +
            "AND tc.PARTNER_HOUSE_AB = :partnerHouseAirwayBill", nativeQuery = true)
    Optional<String> getPartnerName(
            @Param("languageId") String languageId,
            @Param("companyId") String companyId,
            @Param("partnerId") String partnerId,
            @Param("partnerMasterAirwayBill") String partnerMasterAirwayBill,
            @Param("partnerHouseAirwayBill") String partnerHouseAirwayBill);

}

package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ReplicaConsoleRepository extends JpaRepository<ReplicaConsole, String>,
        JpaSpecificationExecutor<ReplicaConsole> {

    Optional<ReplicaConsole> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String consoleId, Long deletionIndicator);

    boolean existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, Long deletionIndicator);

    // Duplicate Header Check
    @Query(value = "Select \n" +
            "Case When Exists \n" +
            "(Select 1 From tblconsole h \n" +
            "Where \n" +
            "h.LANG_ID = :languageId and \n" +
            "h.C_ID = :companyId and \n" +
            "h.PARTNER_ID = :partnerId and \n" +
            "h.Master_Airway_Bill = :masterAirwayBill and \n" +
            "h.HOUSE_AIRWAY_BILL = :houseAirwayBill and \n" +
            "h.IS_DELETED =0) \n" +
            "Then 1 \n" +
            "Else 0 \n" +
            "End", nativeQuery = true)
    Long duplicateExists(@Param(value = "languageId") String languageId,
                         @Param(value = "companyId") String companyId,
                         @Param(value = "partnerId") String partnerId,
                         @Param(value = "masterAirwayBill") String masterAirwayBill,
                         @Param(value = "houseAirwayBill") String houseAirwayBill);


    @Query(value = "select special_approval_id from tblhscode where " +
            "c_id in (:companyId) and hs_code in (:hsCode) and is_deleted = 0", nativeQuery = true)
    public String getSpecialApproval(@Param(value = "companyId") String companyId,
                                     @Param(value = "hsCode") String hsCode);

}

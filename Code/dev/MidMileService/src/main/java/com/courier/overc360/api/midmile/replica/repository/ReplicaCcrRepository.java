package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.replica.model.ccr.ReplicaCcr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaCcrRepository extends JpaRepository<ReplicaCcr, String>,
        JpaSpecificationExecutor<ReplicaCcr> {

    Optional<ReplicaCcr> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndCcrIdAndCustomsCcrNoAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String consoleId, String ccrId, String customsCcrNo, Long deletionIndicator);

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
            "h.CUSTOMS_CCR_NO = :customsCcrNo and \n" +
            "h.IS_DELETED =0) \n" +
            "Then 1 \n" +
            "Else 0 \n" +
            "End", nativeQuery = true)
    Long duplicateExists(@Param(value = "languageId") String languageId,
                               @Param(value = "companyId") String companyId,
                               @Param(value = "partnerId") String partnerId,
                               @Param(value = "masterAirwayBill") String masterAirwayBill,
                               @Param(value = "houseAirwayBill") String houseAirwayBill,
                                @Param(value = "consoleId") String consoleId,
                                @Param(value = "customsCcrNo") String customsCcrNo);

}

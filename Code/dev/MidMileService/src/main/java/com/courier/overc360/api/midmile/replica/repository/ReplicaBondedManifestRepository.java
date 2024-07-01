package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifest;
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
public interface ReplicaBondedManifestRepository extends JpaRepository<ReplicaBondedManifest, String>,
        JpaSpecificationExecutor<ReplicaBondedManifest> {

    Optional<ReplicaBondedManifest> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndBondedIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String bondedId, Long deletionIndicator);

    // Company Table records check
    @Query(value = "Select COUNT (*) From tblcompany \n" +
            "Where \n" +
            "LANG_ID IN (:languageId) and \n" +
            "C_ID IN (:companyId) and \n" +
            "IS_DELETED = 0", nativeQuery = true)
    Long companyRecordCount(@Param(value = "languageId") String languageId,
                            @Param(value = "companyId") String companyId);

    // Duplicate  Check
    @Query(value = "Select \n" +
            "Case When Exists \n" +
            "(Select 1 From tblbondedmanifest h \n" +
            "Where \n" +
            "h.LANG_ID = :languageId and \n" +
            "h.C_ID = :companyId and \n" +
            "h.PARTNER_ID = :partnerId and \n" +
            "h.MASTER_AIRWAY_BILL = :masterAirwayBill and \n" +
            "h.HOUSE_AIRWAY_BILL = :houseAirwayBill and \n" +
            "h.IS_DELETED = 0) \n" +
            "Then 1 \n" +
            "Else 0 \n" +
            "End", nativeQuery = true)
    Long duplicateExists(@Param(value = "languageId") String languageId,
                               @Param(value = "companyId") String companyId,
                               @Param(value = "partnerId") String partnerId,
                               @Param(value = "masterAirwayBill") String masterAirwayBill,
                               @Param(value = "houseAirwayBill") String houseAirwayBill);

    boolean existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndBondedIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String bondedId, Long deletionIndicator);

    @Query(value = "Select * From tblbondedmanifest h \n" +
            "Where h.IS_DELETED = 0", nativeQuery = true)
    List<ReplicaBondedManifest> getAllNonDeleted();

}

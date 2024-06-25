package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifestLine;
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
public interface ReplicaBondedManifestLineRepository extends JpaRepository<ReplicaBondedManifestLine, String>,
        JpaSpecificationExecutor<ReplicaBondedManifestLine> {

    Optional<ReplicaBondedManifestLine> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndLineNoAndBondedIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill,
            String houseAirwayBill, String lineNo, String bondedId, Long deletionIndicator);

    List<ReplicaBondedManifestLine> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndBondedIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill,
            String houseAirwayBill, String bondedId, Long deletionIndicator);

    // Duplicate line Check
    @Query(value = "Select \n" +
            "Case When Exists \n" +
            "(Select 1 From tblbondedmanifestline l \n" +
            "Where \n" +
            "l.LANG_ID = :languageId and \n" +
            "l.C_ID = :companyId and \n" +
            "l.PARTNER_ID = :partnerId and \n" +
            "l.MASTER_AIRWAY_BILL = :masterAirwayBill and \n" +
            "l.HOUSE_AIRWAY_BILL = :houseAirwayBill and \n" +
            "l.LINE_NO = :lineNo and \n" +
            "l.IS_DELETED = 0) \n" +
            "Then 1 \n" +
            "Else 0 \n" +
            "End", nativeQuery = true)
    Long duplicateLineExists(@Param(value = "languageId") String languageId,
                             @Param(value = "companyId") String companyId,
                             @Param(value = "partnerId") String partnerId,
                             @Param(value = "masterAirwayBill") String masterAirwayBill,
                             @Param(value = "houseAirwayBill") String houseAirwayBill,
                             @Param(value = "lineNo") String lineNo);

    boolean existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndLineNoAndBondedIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill,
            String houseAirwayBill, String lineNo, String bondedId, Long deletionIndicator);

    @Query(value = "Select * From tblbondedmanifestline l \n" +
            "Where l.IS_DELETED = 0", nativeQuery = true)
    List<ReplicaBondedManifestLine> getAllNonDeletedLines();

}

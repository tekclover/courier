package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
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

    @Query(value = "Select \n" +
            "TO_CURRENCY_VALUE currencyValue, \n" +
            "TO_CURRENCY_ID currencyId \n " +
            "From tblcurrencyexchangerate  \n" +
            "Where \n" +
            "C_ID IN (:companyId) and \n" +
            "FROM_CURRENCY_ID IN (:freightCurrency) and \n" +
            "is_deleted = 0", nativeQuery = true)
    IKeyValuePair getToCurrencyValue(@Param(value = "companyId") String companyId,
                                     @Param(value = "freightCurrency") String freightCurrency);

    boolean existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndBondedIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String bondedId, Long deletionIndicator);

    @Query(value = "Select * From tblbondedmanifest h \n" +
            "Where h.IS_DELETED = 0", nativeQuery = true)
    List<ReplicaBondedManifest> getAllNonDeleted();


    // Find BondedManifests with given Params Only
    @Query(value = "SELECT * FROM tblbondedmanifest tm \n" +
            "WHERE tm.IS_DELETED = 0 \n" +
            "AND (:#{#languageId == null ? 1 : 0} = 1 OR tm.LANG_ID IN (:languageId)) \n" +
            "AND (:#{#companyId == null ? 1 : 0} = 1 OR tm.C_ID IN (:companyId)) \n" +
            "AND (:#{#partnerId == null ? 1 : 0} = 1 OR tm.PARTNER_ID IN (:partnerId)) \n" +
            "AND (:#{#masterAirwayBill == null ? 1 : 0} = 1 OR tm.MASTER_AIRWAY_BILL IN (:masterAirwayBill)) \n" +
            "AND (:#{#houseAirwayBill == null ? 1 : 0} = 1 OR tm.HOUSE_AIRWAY_BILL IN (:houseAirwayBill)) \n" +
            "AND (:#{#hsCode == null ? 1 : 0} = 1 OR tm.HS_CODE IN (:hsCode)) \n" +
            "AND (:#{#pieceId == null ? 1 : 0} = 1 OR tm.PIECE_ID IN (:pieceId)) \n" +
            "AND (:#{#pieceItemId == null ? 1 : 0} = 1 OR tm.PIECE_ITEM_ID IN (:pieceItemId)) \n" +
            "AND (:#{#bondedId == null ? 1 : 0} = 1 OR tm.BONDED_ID IN (:bondedId))", nativeQuery = true)
    List<ReplicaBondedManifest> findBondedManifestsWithQry(
            @Param("languageId") List<String> languageId,
            @Param("companyId") List<String> companyId,
            @Param("partnerId") List<String> partnerId,
            @Param("masterAirwayBill") List<String> masterAirwayBill,
            @Param("houseAirwayBill") List<String> houseAirwayBill,
            @Param("bondedId") List<String> bondedId,
            @Param("hsCode") List<String> hsCode,
            @Param("pieceId") List<String> pieceId,
            @Param("pieceItemId") List<String> pieceItemId);

}

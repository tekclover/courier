package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.replica.model.dto.PieceDetailsImpl;
import com.courier.overc360.api.midmile.replica.model.piecedetails.ReplicaPieceDetails;
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
public interface ReplicaPieceDetailsRepository extends JpaRepository<ReplicaPieceDetails,String >, JpaSpecificationExecutor<ReplicaPieceDetails> {

    Optional<ReplicaPieceDetails> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndDeletionIndicator
            (String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String pieceId, Long deletionIndicator);


    // Get Description
    @Query(value = "Select \n" +
            "tl.lang_text langDesc, \n" +
            "tc.c_name companyDesc \n" +
            "From tbllanguage tl \n" +
            "Join tblcompany tc on tl.lang_id = tc.lang_id \n" +
            "Where \n" +
            "tl.lang_id IN (:languageId) and \n" +
            "tc.c_id IN (:companyId) and \n" +
            "tl.is_deleted = 0 and \n" +
            "tc.is_deleted = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "languageId") String languageId,
                                 @Param(value = "companyId") String companyId);

    @Query(value = "Select \n" +
            "(case when PARTNER_HOUSE_AIRWAY_BILL = '1' then null else PARTNER_HOUSE_AIRWAY_BILL end) partnerHouseAirwayBill,\n" +
            "(case when DESCRIPTION = '1' then null else DESCRIPTION end) description,\n" +
            "(case when DECLARED_VALUE = '1' then null else DECLARED_VALUE end) declaredValue,\n" +
            "(case when WEIGHT = '1' then null else WEIGHT end) weight,\n" +
            "(case when HS_CODE = '1' then null else HS_CODE end) hsCode,\n" +
            "(case when CONSIGNMENT_ID = '1' then null else CONSIGNMENT_ID end) consignmentId from tblpiecedetails where \n" +
            "CONSIGNMENT_ID = :consignmentId and \n" +
            "is_deleted = 0", nativeQuery = true)
    List<PieceDetailsImpl> getPieceDetailsImpl(@Param(value = "consignmentId") Long consignmentId);

}


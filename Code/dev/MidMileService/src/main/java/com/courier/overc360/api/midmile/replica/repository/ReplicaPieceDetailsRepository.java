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
            "PARTNER_HOUSE_AIRWAY_BILL partnerHouseAirwayBill,\n" +
            "DESCRIPTION description,\n" +
            "DECLARED_VALUE declaredValue,\n" +
            "WEIGHT weight,\n" +
            "HS_CODE hsCode,\n" +
            "CONSIGNMENT_ID consignmentId from tblpiecedetails where \n" +
            "CONSIGNMENT_ID = :consignmentId and \n" +
            "is_deleted = 0", nativeQuery = true)
    List<PieceDetailsImpl> getPieceDetailsImpl(@Param(value = "consignmentId") Long consignmentId);

    List<ReplicaPieceDetails> findByLanguageIdAndCompanyIdAndPieceIdAndDeletionIndicator(
            String languageId, String companyId, String pieceId, Long deletionIndicator);

    List<ReplicaPieceDetails> findByLanguageIdAndCompanyIdAndConsignmentIdAndDeletionIndicator(String languageId, String companyId, Long consignmentId, Long deletionIndicator);
}


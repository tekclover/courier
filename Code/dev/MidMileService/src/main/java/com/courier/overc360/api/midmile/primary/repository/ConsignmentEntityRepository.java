package com.courier.overc360.api.midmile.primary.repository;


import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.ConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ConsignmentEntityRepository extends JpaRepository<ConsignmentEntity, Long> {

    Optional<ConsignmentEntity> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String mawb, String hawb, Long deletionIndicator);

    ConsignmentEntity findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
            String companyId, String languageId, String partnerId, String mawb, String hawb, Long deletionIndicator);

//    @Query(value = "SELECT status_code AS statusId, status_text AS statusText, event_text AS eventText " +
//            "FROM tblevent " +
//            "WHERE C_ID = :companyId AND " +
//            "STATUS_CODE = :statusCode AND " +
//            "EVENT_CODE = :eventCode AND " +
//            "IS_DELETED = 0", nativeQuery = true)
//    IKeyValuePair getStatusEventText(@Param("companyId") String companyId,
//                                               @Param("statusCode") String statusCode,
//                                               @Param("eventCode") String eventCode);

    @Query(value = "SELECT " +
            "(SELECT status_text FROM tblstatus WHERE " +
            "lang_id = :languageId AND status_id = :statusId AND is_deleted = 0) AS statusText, " +
            "(SELECT event_text FROM tblevent WHERE " +
            "c_id = :companyId AND event_code = :eventCode AND lang_id = :languageId AND is_deleted = 0) AS eventText",
            nativeQuery = true)
    Optional<IKeyValuePair> getStatusEventText(@Param("languageId") String languageId,
                                               @Param("companyId") String companyId,
                                               @Param("statusId") String statusId,
                                               @Param("eventCode") String eventCode);

    @Transactional
    @Modifying
    @Query(value = "UPDATE tblpiecedetails " +
            "SET PIECE_VALUE = :pieceValue " +
            "WHERE c_id = :companyId " +
            "AND lang_id = :languageId " +
            "AND partner_id = :partnerId " +
            "AND HOUSE_AIRWAY_BILL = :houseAirwayBill " +
            "AND MASTER_AIRWAY_BILL = :masterAirwayBill " +
            "AND PIECE_ID = :pieceId " +
            "AND is_deleted = 0",
            nativeQuery = true)
    public void updatePieceValue(@Param("companyId") String companyId,
                                 @Param("languageId") String languageId,
                                 @Param("partnerId") String partnerId,
                                 @Param("houseAirwayBill") String houseAirwayBill,
                                 @Param("masterAirwayBill") String masterAirwayBill,
                                 @Param("pieceId") String pieceId,
                                 @Param("pieceValue") String pieceValue);

    @Transactional
    @Modifying
    @Query(value = "UPDATE tblconsignment_entity " +
            "SET CONSIGNMENT_VALUE = :consignmentValue " +
            "WHERE c_id = :companyId " +
            "AND lang_id = :languageId " +
            "AND partner_id = :partnerId " +
            "AND HOUSE_AIRWAY_BILL = :houseAirwayBill " +
            "AND MASTER_AIRWAY_BILL = :masterAirwayBill " +
            "AND is_deleted = 0",
            nativeQuery = true)
    public void updateConsignment(@Param("companyId") String companyId,
                                  @Param("languageId") String languageId,
                                  @Param("partnerId") String partnerId,
                                  @Param("houseAirwayBill") String houseAirwayBill,
                                  @Param("masterAirwayBill") String masterAirwayBill,
                                  @Param("consignmentValue") String consignmentValue);
}

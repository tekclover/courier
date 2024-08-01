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

    Optional<ConsignmentEntity> findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator(
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

//    @Query(value = "SELECT " +
//            "(SELECT status_text FROM tblstatus WHERE " +
//            "lang_id = :languageId AND status_id = :statusId AND is_deleted = 0) AS statusText, " +
//            "(SELECT event_text FROM tblevent WHERE " +
//            "c_id = :companyId AND event_code = :eventCode AND lang_id = :languageId AND is_deleted = 0) AS eventText",
//            nativeQuery = true)
//    Optional<IKeyValuePair> getStatusEventText(@Param("languageId") String languageId,
//                                               @Param("companyId") String companyId,
//                                               @Param("statusId") String statusId,
//                                               @Param("eventCode") String eventCode);

//    @Query(value = "select status_text as statusText from tblstatus " +
//            "where lang_id = :languageId AND status_id = :statusId AND is_deleted = 0", nativeQuery = true)
//    Optional<IKeyValuePair> getStatusText(@Param("languageId") String languageId,
//                                          @Param("statusId") String statusId);

//    @Query(value = "SELECT event_text as eventText FROM tblevent WHERE " +
//            " c_id = :companyId AND event_code = :eventCode AND lang_id = :languageId AND is_deleted = 0", nativeQuery = true)
//Optional<IKeyValuePair> getEventText(@Param("languageId") String languageId,
//                                     @Param("companyId") String companyId,
//                                     @Param("eventCode") String eventCode);


    @Query(value = "select type as type, type_text as typeText from tblstatusevent where c_id = :companyId and \n" +
            "lang_id = :languageId and type_id = :typeId and is_deleted = 0", nativeQuery = true)
    Optional<IKeyValuePair> statusText(@Param("companyId") String companyId,
                                     @Param("languageId") String languageId,
                                     @Param("typeId") String typeId);

    @Query(value = "select type_text as typeText from tblstatusevent where c_id = :companyId and \n" +
            "lang_id = :languageId and type_id = :typeId and is_deleted = 0", nativeQuery = true)
     Optional<String> statusEventText(@Param("companyId") String companyId,
                                  @Param("languageId") String languageId,
                                  @Param("typeId") String typeId);

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
            "SET CONSIGNMENT_VALUE = :consignmentValue, " +
            "CONSIGNMENT_VALUE_LOCAL = :consignmentValueLocal, " +
            "ADD_IATA = :addIata, " +
            "ADD_INSURANCE = :addInsurance, " +
            "CUSTOMS_VALUE = :customsValue, " +
            "VOLUME = :volume, " +
            "CALCULATED_TOTAL_DUTY = :calculatedDuty " +
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
                                  @Param("consignmentValue") String consignmentValue,
                                  @Param("consignmentValueLocal") String consignmentValueLocal,
                                  @Param("addIata") String addIata,
                                  @Param("addInsurance") String addInsurance,
                                  @Param("customsValue") String customsValue,
                                  @Param("calculatedDuty") String calculatedDuty,
                                  @Param("volume") String volume);

    @Transactional
    @Modifying
    @Query(value = "UPDATE tblconsignment_entity " +
            "SET VOLUME = :volume " +
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
                                  @Param("volume") String volume);


    @Modifying
    @Query(value = "update tblconsignment_entity " +
            "set PARTNER_MASTER_AB = :partnerMasterAB," +
            "CONSIGNMENT_VALUE = :consignmentValue, " +
            "EXCHANGE_RATE = :exchangeRate," +
            "IATA_CHARGE = :iata," +
            "CONSIGNMENT_VALUE_LOCAL = :consignmentLocalValue," +
            "ADD_IATA = :addIata," +
            "ADD_INSURANCE = :addInsurance," +
            "CUSTOMS_VALUE = :customsValue," +
            "CALCULATED_TOTAL_DUTY = :calculatedTotalDuty," +
            "CUSTOMS_INSURANCE = :customsInsurance where " +
            "c_id in (:companyId) and lang_id in (:languageId) and " +
            "partner_id in (:partnerId) and partner_house_ab in (:partnerHouseAB) and " +
            "is_deleted = 0 ", nativeQuery = true)
    public void updateConsignment(@Param(value = "companyId") String companyId,
                                  @Param("languageId") String languageId,
                                  @Param("partnerId") String partnerId,
                                  @Param("partnerHouseAB") String partnerHouseAB,
                                  @Param("partnerMasterAB") String partnerMasterAB,
                                  @Param("consignmentValue") String consignmentValue,
                                  @Param("exchangeRate") String exchangeRate,
                                  @Param("iata") String iata,
                                  @Param("consignmentLocalValue") String consignmentLocalValue,
                                  @Param("addIata") String addIata,
                                  @Param("addInsurance") String addInsurance,
                                  @Param("customsValue") String customsValue,
                                  @Param("calculatedTotalDuty") String calculatedTotalDuty,
                                  @Param("customsInsurance") String customsInsurance);

    @Modifying
    @Query(value = "update tblpiecedetails " +
            "set PARTNER_MASTER_AIRWAY_BILL = :partnerMasterAB where " +
            "c_id in (:companyId) and lang_id in (:languageId) and " +
            "partner_id in (:partnerId) and PARTNER_HOUSE_AIRWAY_BILL in (:partnerHouseAB) and " +
            "is_deleted = 0 ", nativeQuery = true)
    public void updatePieceId(@Param("companyId") String companyId,
                                  @Param("languageId") String languageId,
                                  @Param("partnerId") String partnerId,
                                  @Param("partnerHouseAB") String partnerHouseAB,
                                  @Param("partnerMasterAB") String partnerMasterAB);


    ConsignmentEntity findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerHouseAirwayBillAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String partnerHouseAirwayBill, Long deletionIndicator);
}

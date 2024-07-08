package com.courier.overc360.api.midmile.replica.repository;


import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.dto.ConsignmentImpl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface ReplicaConsignmentEntityRepository extends JpaRepository<ReplicaConsignmentEntity, Long>, JpaSpecificationExecutor<ReplicaConsignmentEntity> {


    @Query(value = "Select \n" +
            "tc.lang_id langId, \n" +
            "tc.lang_text langDesc, \n" +
            "tc.c_name companyDesc " +
            "from tblcompany tc \n" +
            "Where \n " +
            "tc.c_id in (:companyId) and \n" +
            "tc.is_deleted = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "companyId") String companyId);

    @Query(value = "Select \n" +
            "STATUS_ID statusId, \n" +
            "STATUS_TEXT statusDesc \n" +
            "from tblstatus \n" +
            "where \n" +
            "STATUS_ID in (:statusId) and \n" +
            "IS_DELETED = 0", nativeQuery = true)
    IKeyValuePair getStatusDescription(@Param(value = "statusId") String statusId);

    @Query(value = "Select \n" +
            "CONSIGNMENT_ID consignmentId,\n" +
            "NO_OF_PIECE_HAWB noOfPieceHawb,\n" +
            "PARTNER_HOUSE_AB partnerHouseAirwayBill,\n" +
            "NO_OF_PACKAGE_HAWB noOfPackageHawb,\n" +
            "DECLARED_VALUE declaredValue,\n" +
            "CONSIGNMENT_CURRENCY consignmentCurrency,\n" +
            "INCO_TERMS incoTerms,\n" +
            "COUNTRY_OF_ORIGIN countryOfOrigin,\n" +
            "GROSS_WEIGHT grossWeight,\n" +
            "PAYMENT_TYPE paymentType,\n" +
            "CTD_ON createdOn from tblconsignment_entity where \n" +
            "(COALESCE(:consignmentId, null) IS NULL OR (CONSIGNMENT_ID IN (:consignmentId))) and \n" +
            "(COALESCE(:languageId, null) IS NULL OR (LANG_ID IN (:languageId))) and \n" +
            "(COALESCE(:companyId, null) IS NULL OR (C_ID IN (:companyId))) and \n" +
            "(COALESCE(:partnerId, null) IS NULL OR (PARTNER_ID IN (:partnerId))) and \n" +
            "(COALESCE(:masterAirwayBill, null) IS NULL OR (MASTER_AIRWAY_BILL IN (:masterAirwayBill))) and \n" +
            "(COALESCE(:houseAirwayBill, null) IS NULL OR (HOUSE_AIRWAY_BILL IN (:houseAirwayBill))) and \n" +
            "(COALESCE(:statusId, null) IS NULL OR (STATUS_ID IN (:statusId))) and \n" +
            "(COALESCE(:shipperId, null) IS NULL OR (SHIPPER_ID IN (:shipperId))) and \n" +
            "(COALESCE(:partnerHouseAirwayBill, null) IS NULL OR (PARTNER_HOUSE_AB IN (:partnerHouseAirwayBill))) and \n" +
            "(COALESCE(:partnerMasterAirwayBill, null) IS NULL OR (PARTNER_MASTER_AB IN (:partnerMasterAirwayBill))) and \n" +
            "is_deleted = 0", nativeQuery = true)
    List<ConsignmentImpl> getConsignmentImpl(@Param(value = "consignmentId") List<Long> consignmentId,
                                       @Param(value = "languageId") List<String> languageId,
                                       @Param(value = "companyId") List<String> companyId,
                                       @Param(value = "partnerId") List<String> partnerId,
                                       @Param(value = "masterAirwayBill") List<String> masterAirwayBill,
                                       @Param(value = "houseAirwayBill") List<String> houseAirwayBill,
                                       @Param(value = "statusId") List<String> statusId,
                                       @Param(value = "shipperId") List<String> shipperId,
                                       @Param(value = "partnerHouseAirwayBill") List<String> partnerHouseAirwayBill,
                                       @Param(value = "partnerMasterAirwayBill") List<String> partnerMasterAirwayBill);
    
    ReplicaConsignmentEntity findByConsignmentIdAndDeletionIndicator(Long consignmentId, Long deletionIndicator);
}

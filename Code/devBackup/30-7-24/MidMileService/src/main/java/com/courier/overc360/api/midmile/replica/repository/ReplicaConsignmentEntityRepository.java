package com.courier.overc360.api.midmile.replica.repository;


import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.ConsignmentInvoice;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.dto.ConsignmentImpl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
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


    @Query(value = "Select \n" +
            "tl.COMPANY_NAME orgName, tl.ADDRESS_LINE_1 orgAddressLine1, tl.ADDRESS_LINE_2 orgAddressLine2, tl.CITY orgCity, tl.COUNTRY orgCountry, tl.PHONE orgPhone, \n" +
            "td.COMPANY_NAME destName, td.ADDRESS_LINE_1 destAddressLine1, td.ADDRESS_LINE_2 destAddressLine2, td.CITY destCity, td.COUNTRY destCountry, td.PHONE destPhone, \n" +
            "ti.HS_CODE hsCode, ti.DESCRIPTION goodsDescription, ti.WEIGHT itemWeight, ti.DECLARED_VALUE unitValue, ti.DECLARED_VALUE totalValue, \n" +
            "tc.NO_OF_PIECE_HAWB quantity, tc.CONSIGNMENT_CURRENCY currency, tc.COUNTRY_OF_ORIGIN countryOfOrigin, tc.INCO_TERMS incoTerms, \n" +
            "tc.NO_OF_PACKAGE_HAWB pieces, tc.GROSS_WEIGHT weight, tc.CTD_ON createdOn, tc.PARTNER_HOUSE_AB awb, tc.CONSIGNMENT_VALUE totalCiv, \n" +
            "CASE WHEN tc.PAYMENT_TYPE = 'prepaid' THEN tc.CONSIGNMENT_VALUE ELSE '0' END AS prepaid \n" +
            "From tblconsignment_entity tc \n" +
            "Join tblitemdetails ti on tc.CONSIGNMENT_ID = ti.CONSIGNMENT_ID \n" +
            "Join tbldestdetails td on tc.CONSIGNMENT_ID = td.DEST_DETAIL_ID \n" +
            "Join tblorigindetails tl on tc.CONSIGNMENT_ID = tl.ORIGIN_ID \n" +
            "Where \n" +
            "(COALESCE(:houseAirwayBill, null) IS NULL OR tc.HOUSE_AIRWAY_BILL IN (:houseAirwayBill)) and \n" +
            "(COALESCE(:partnerHouseAirwayBill, null) IS NULL OR tc.PARTNER_HOUSE_AB IN (:partnerHouseAirwayBill)) and \n" +
            "(COALESCE(:partnerMasterAirwayBill, null) IS NULL OR tc.PARTNER_MASTER_AB IN (:partnerMasterAirwayBill)) and \n" +
            "(COALESCE(:companyId, null) IS NULL OR tc.C_ID IN (:companyId)) and \n" +
            "tc.is_deleted = 0",
            nativeQuery = true)
    List<ConsignmentInvoice> getConsignmentInvoice(@Param("houseAirwayBill") List<String> houseAirwayBill,
                                                   @Param("partnerHouseAirwayBill") List<String> partnerHouseAirwayBill,
                                                   @Param("partnerMasterAirwayBill") List<String> partnerMasterAirwayBill,
                                                   @Param("companyId") List<String> companyId);

    @Query(value = "Select \n" +
            "tl.COMPANY_NAME orgName, concat(tl.address_line_1,',',tl.address_line_2) originAddress, tl.CITY orgCity, tl.COUNTRY orgCountry, tl.PHONE orgPhone, \n" +
            "td.COMPANY_NAME destName, concat(td.address_line_1,',',td.address_line_2) destinationAddress, td.CITY destCity, td.COUNTRY destCountry, td.PHONE destPhone, \n" +
            "tc.CONSIGNMENT_ID consignmentId, tc.HOUSE_AIRWAY_BILL houseAirwayBill, \n" +
            "tc.NO_OF_PIECE_HAWB quantity, tc.CONSIGNMENT_CURRENCY currency, tc.COUNTRY_OF_ORIGIN countryOfOrigin, tc.INCO_TERMS incoTerms, \n" +
            "tc.NO_OF_PACKAGE_HAWB pieces, tc.GROSS_WEIGHT weight, tc.CTD_ON createdOn, tc.PARTNER_HOUSE_AB awb, tc.CONSIGNMENT_VALUE totalCiv, \n" +
            "CASE WHEN tc.PAYMENT_TYPE = 'prepaid' THEN tc.CONSIGNMENT_VALUE ELSE '0' END AS prepaid \n" +
            "From tblconsignment_entity tc \n" +
            "Join tbldestdetails td on tc.CONSIGNMENT_ID = td.DEST_DETAIL_ID \n" +
            "Join tblorigindetails tl on tc.CONSIGNMENT_ID = tl.ORIGIN_ID \n" +
            "Where \n" +
            "(COALESCE(:houseAirwayBill, null) IS NULL OR tc.HOUSE_AIRWAY_BILL IN (:houseAirwayBill)) and \n" +
            "(COALESCE(:partnerHouseAirwayBill, null) IS NULL OR tc.PARTNER_HOUSE_AB IN (:partnerHouseAirwayBill)) and \n" +
            "(COALESCE(:partnerMasterAirwayBill, null) IS NULL OR tc.PARTNER_MASTER_AB IN (:partnerMasterAirwayBill)) and \n" +
            "(COALESCE(:companyId, null) IS NULL OR tc.C_ID IN (:companyId)) and \n" +
            "tc.is_deleted = 0", nativeQuery = true)
    List<ConsignmentInvoice> getConsignmentInvoiceHeader(@Param("houseAirwayBill") List<String> houseAirwayBill,
                                                         @Param("partnerHouseAirwayBill") List<String> partnerHouseAirwayBill,
                                                         @Param("partnerMasterAirwayBill") List<String> partnerMasterAirwayBill,
                                                         @Param("companyId") List<String> companyId);

    @Query(value = "Select \n" +
            "ti.HS_CODE hsCode, ti.DESCRIPTION goodsDescription, ti.WEIGHT itemWeight, ti.DECLARED_VALUE unitValue, ti.DECLARED_VALUE totalValue \n" +
            "From tblitemdetails ti \n" +
            "Where \n" +
            "ti.CONSIGNMENT_ID IN (:consignmentId) and \n" +
            "ti.is_deleted = 0", nativeQuery = true)
    List<ConsignmentInvoice> getConsignmentInvoiceLine(@Param("consignmentId") Long consignmentId);


    @Query(value = "select MASTER_AIRWAY_BILL as masterAirwayBill from tblconsignment_entity " +
            " where LANG_ID in (:languageId) and C_ID in (:companyId) and PARTNER_HOUSE_AB in (:partnerHouseAB)" +
            " and partner_id in (:partnerId) and is_deleted = 0 ", nativeQuery = true)
    public String getMasterAirwayBill(@Param("languageId") String languageId,
                                      @Param("companyId") String companyId,
                                      @Param("partnerId") String partnerId,
                                      @Param("partnerHouseAB") String partnerHouseAB);


    ReplicaConsignmentEntity findByConsignmentIdAndDeletionIndicator(Long consignmentId, Long deletionIndicator);


}

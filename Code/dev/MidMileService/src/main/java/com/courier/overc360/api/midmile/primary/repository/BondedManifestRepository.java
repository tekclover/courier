package com.courier.overc360.api.midmile.primary.repository;

import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.BondedManifest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface BondedManifestRepository extends JpaRepository<BondedManifest, String>,
        JpaSpecificationExecutor<BondedManifest> {

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
    IKeyValuePair getLAndCDescription(@Param(value = "languageId") String languageId,
                                      @Param(value = "companyId") String companyId);

    Optional<BondedManifest> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndBondedIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String bondedId, Long deletionIndicator);

    @Query(value = "Select \n" +
            "CONSIGNOR_NAME consignorName, \n" +
            "PRODUCT_ID productId, \n" +
            "SUB_PRODUCT_ID subProductId, \n" +
            "PRODUCT_NAME productName, \n" +
            "SUB_PRODUCT_NAME subProductName \n" +
            "From tblconsignor  \n" +
            "Where \n" +
            "CONSIGNOR_ID IN (:shipperId) and \n" +
            "LANG_ID IN (:languageId) and \n" +
            "C_ID IN (:companyId) and \n" +
            "is_deleted = 0", nativeQuery = true)
    IKeyValuePair getProductId(@Param(value = "shipperId") String shipperId,
                               @Param(value = "languageId") String languageId,
                               @Param(value = "companyId") String companyId);

    @Query(value = "select customer_name customerName, \n" +
            " product_id productId, product_name productName, \n " +
            " sub_product_id subProductId, sub_product_name subProductName \n " +
            " from tblcustomer where customer_id in (:customerId) and \n " +
            " lang_id in (:languageId) and \n " +
            " c_id in (:companyId) and is_deleted = 0 ", nativeQuery = true)
    IKeyValuePair getProductIdFromCustomer(@Param(value = "customerId") String customerId,
                                           @Param(value = "languageId") String languageId,
                                           @Param(value = "companyId") String companyId);

    @Query(value = "Select * From tblbondedmanifestheader h \n" +
            "Where h.IS_DELETED = 0", nativeQuery = true)
    List<BondedManifest> getAllNonDeletedHeaders();

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

    @Transactional
    @Modifying
    @Query(value = "UPDATE tblconsignment_entity " +
            "SET event_code = 4, " +
            "MANIFEST_INDICATOR = 1, " +
            "event_text = :eventText, " +
            "EVENT_TIMESTAMP = getDate() " +
            "WHERE c_id = :companyId " +
            "AND lang_id = :languageId " +
            "AND partner_id = :partnerId " +
            "AND HOUSE_AIRWAY_BILL = :houseAirwayBill " +
            "AND MASTER_AIRWAY_BILL = :masterAirwayBill " +
            "AND is_deleted = 0",
            nativeQuery = true)
    public void updateEventCodeFromConsignment(@Param("companyId") String companyId,
                                               @Param("languageId") String languageId,
                                               @Param("partnerId") String partnerId,
                                               @Param("houseAirwayBill") String houseAirwayBill,
                                               @Param("masterAirwayBill") String masterAirwayBill,
                                               @Param("eventText") String eventText);


}

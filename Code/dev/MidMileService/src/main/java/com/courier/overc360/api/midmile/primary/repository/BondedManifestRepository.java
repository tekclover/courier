package com.courier.overc360.api.midmile.primary.repository;

import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.BondedManifest;
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

    @Query(value = "Select * From tblbondedmanifestheader h \n" +
            "Where h.IS_DELETED = 0", nativeQuery = true)
    List<BondedManifest> getAllNonDeletedHeaders();

    @Query(value = "Select \n" +
            "TO_CURRENCY_VALUE currencyValue, \n" +
            "TO_CURRENCY_ID currencyId \n " +
            "From tblcurrencyexchangerate  \n" +
            "Where \n" +
            "FROM_CURRENCY_ID IN (:freightCurrency) and \n" +
            "is_deleted = 0", nativeQuery = true)
    IKeyValuePair getToCurrencyValue(@Param(value = "freightCurrency") String freightCurrency);
}

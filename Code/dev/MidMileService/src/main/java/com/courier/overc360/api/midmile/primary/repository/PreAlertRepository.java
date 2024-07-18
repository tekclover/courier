package com.courier.overc360.api.midmile.primary.repository;


import com.courier.overc360.api.midmile.primary.model.prealert.PreAlert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface PreAlertRepository extends JpaRepository<PreAlert, String> {

    Optional<PreAlert> findByCompanyIdAndLanguageIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator(
            String companyId, String languageId, String partnerId, String partnerMasterAirwayBill, String partnerHouseAirwayBill,Long deletionIndicator);
}

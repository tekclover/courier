package com.courier.overc360.api.midmile.replica.repository;


import com.courier.overc360.api.midmile.replica.model.prealert.ReplicaPreAlert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaPreAlertRepository extends JpaRepository<ReplicaPreAlert, String>, JpaSpecificationExecutor<ReplicaPreAlert> {


    Optional<ReplicaPreAlert> findByCompanyIdAndLanguageIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator(
            String companyId, String languageId, String partnerId, String partnerMasterAirwayBill, String partnerHouseAirwayBill, Long deletionIndicator);
}

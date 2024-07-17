package com.courier.overc360.api.midmile.replica.repository;


import com.courier.overc360.api.midmile.primary.model.consignment.PreAlert;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaPreAlert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaPreAlertRepository extends JpaRepository<ReplicaPreAlert, String>, JpaSpecificationExecutor<ReplicaPreAlert> {


    Optional<ReplicaPreAlert> findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator(
            String companyId, String languageId, String partnerId, String masterAirwayBill, String partnerHouseAirwayBill, Long deletionIndicator);
}

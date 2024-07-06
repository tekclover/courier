package com.courier.overc360.api.midmile.primary.repository;


import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.ConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
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

    @Query(value = "SELECT status_text AS statusText, event_text AS eventText " +
            "FROM tblevent " +
            "WHERE C_ID = :companyId AND " +
            "STATUS_CODE = :statusCode AND " +
            "EVENT_CODE = :eventCode AND " +
            "IS_DELETED = 0", nativeQuery = true)
    IKeyValuePair getStatusEventText(@Param("companyId") String companyId,
                                               @Param("statusCode") String statusCode,
                                               @Param("eventCode") String eventCode);

}

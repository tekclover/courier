package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.event.ReplicaEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaEventRepository extends JpaRepository<ReplicaEvent, String>, JpaSpecificationExecutor<ReplicaEvent> {

    Optional<ReplicaEvent> findByLanguageIdAndCompanyIdAndStatusCodeAndEventCodeAndDeletionIndicator(
            String languageId, String companyId, String statusCode, String eventCode, Long deletionIndicator);

}

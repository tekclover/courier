package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.status.ReplicaStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaStatusRepository extends JpaRepository<ReplicaStatus, String>, JpaSpecificationExecutor<ReplicaStatus> {

    Optional<ReplicaStatus> findByLanguageIdAndStatusIdAndDeletionIndicator(
            String languageId, String statusId, Long deletionIndicator);


    // Get Description
    @Query(value = "Select \n" +
            "lang_text langDesc, \n" +
            "From tbllanguage  \n" +
            "Where \n" +
            "lang_id IN (:languageId) and \n" +
            "is_deleted = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "languageId") String languageId);

    // Get Description
    @Query(value = "Select \n" +
            "status_text statusDesc, \n" +
            "From tblstatus  \n" +
            "Where \n" +
            "status_id IN (:statusId) and \n" +
            "is_deleted = 0", nativeQuery = true)
    IKeyValuePair getStatusDescription(@Param(value = "statusId") String statusId);
}

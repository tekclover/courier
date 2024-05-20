package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.primary.model.status.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface StatusRepository extends JpaRepository<Status, String>, JpaSpecificationExecutor<Status> {

    Optional<Status> findByLanguageIdAndStatusIdAndDeletionIndicator(
            String languageId, String statusId, Long deletionIndicator);


    // Get Description
    @Query(value = "Select \n" +
            "status_text statusDesc, \n" +
            "From tblstatus  \n" +
            "Where \n" +
            "status_id IN (:statusId) and \n" +
            "is_deleted = 0", nativeQuery = true)
    IKeyValuePair getStatusDescription(@Param(value = "statusId") String statusId);
}

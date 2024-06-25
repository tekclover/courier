package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.opStatus.ReplicaOpStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaOpStatusRepository extends JpaRepository<ReplicaOpStatus, String>, JpaSpecificationExecutor<ReplicaOpStatus> {

    Optional<ReplicaOpStatus> findByLanguageIdAndCompanyIdAndStatusCodeAndDeletionIndicator(
            String languageId, String companyId, String statusCode, Long deletionIndicator);

    // Get Description
    @Query(value = "Select \n" +
            "CONCAT (tl.LANG_ID, ' - ', tl.LANG_TEXT) As langDesc, \n" +
            "CONCAT (tc.C_ID, ' - ', tc.C_NAME) As companyDesc, \n" +
            "CONCAT (ts.STATUS_CODE, ' - ', ts.STATUS_TEXT) As statusDesc \n" +
            "From tbllanguage tl \n" +
            "Join tblcompany tc on tl.LANG_ID=tc.LANG_ID \n" +
            "Join tblopstatus ts on tl.LANG_ID=ts.LANG_ID and tc.C_ID=ts.C_ID \n" +
            "Where \n" +
            "tl.LANG_ID IN (:languageId) and \n" +
            "tc.C_ID IN (:companyId) and \n" +
            "ts.STATUS_CODE IN (:statusCode) and \n" +
            "tl.IS_DELETED = 0 and \n" +
            "tc.IS_DELETED = 0 and \n" +
            "ts.IS_DELETED = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "languageId") String languageId,
                                 @Param(value = "companyId") String companyId,
                                 @Param(value = "statusCode") String statusCode);

}

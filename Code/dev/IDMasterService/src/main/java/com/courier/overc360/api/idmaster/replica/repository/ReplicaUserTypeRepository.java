package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.usertype.ReplicaUserType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaUserTypeRepository extends JpaRepository<ReplicaUserType, Long>, JpaSpecificationExecutor<ReplicaUserType> {

    Optional<ReplicaUserType> findByCompanyIdAndUserTypeIdAndLanguageIdAndDeletionIndicator(
            String companyId, Long userTypeId, String languageId, Long deletionIndicator);

    @Query(value = "Select \n" +
            "CONCAT (tl.USR_TYP_ID, ' - ', tl.USR_TYP_TEXT) As userTypeDesc \n" +
            " from tblusertype tl \n" +
            " WHERE \n" +
            "tl.USR_TYP_ID IN (:userTypeId) and \n" +
            "tl.IS_DELETED=0 ", nativeQuery = true)
    IKeyValuePair getUserTypeDesc(@Param(value = "userTypeId") Long userTypeId);

}
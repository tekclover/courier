package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.roleaccess.ReplicaRoleAccess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaRoleAccessRepository extends JpaRepository<ReplicaRoleAccess, Long>, JpaSpecificationExecutor<ReplicaRoleAccess> {

    Optional<ReplicaRoleAccess> findByLanguageIdAndCompanyIdAndRoleIdAndMenuIdAndSubMenuIdAndDeletionIndicator
            (String languageId, String companyId, Long roleId, Long menuId, Long subMenuId, Long deletionIndicator);

    @Query(value = "Select \n" +
            "CONCAT (tl.USR_ROLE_ID, ' - ', tl.USR_ROLE_NM) As userRoleDesc \n" +
            "From tblroleaccess tl \n" +
            "WHERE \n" +
            "tl.USR_ROLE_ID IN (:userRoleId) and \n" +
            "tl.IS_DELETED=0 ", nativeQuery = true)
    IKeyValuePair getRoleDesc(@Param(value = "userRoleId") Long userRoleId);

}


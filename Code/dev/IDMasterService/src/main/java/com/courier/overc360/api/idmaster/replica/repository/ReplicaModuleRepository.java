package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.module.ReplicaModule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ReplicaModuleRepository extends JpaRepository<ReplicaModule, Long>, JpaSpecificationExecutor<ReplicaModule> {

    Optional<ReplicaModule> findByCompanyIdAndAndLanguageIdAndModuleIdAndMenuIdAndSubMenuIdAndDeletionIndicator
            (String companyId, String languageId, String moduleId, Long menuId, Long subMenuId, Long deletionIndicator);

    List<ReplicaModule> findByCompanyIdAndAndLanguageIdAndModuleIdAndDeletionIndicator
            (String companyId, String languageId, String moduleId, Long deletionIndicator);

    // Get Description
    @Query(value = "Select \n" +
            "CONCAT (tl.LANG_ID, ' - ', tl.LANG_TEXT) As langDesc, \n" +
            "CONCAT (tc.C_ID, ' - ', tc.C_NAME) As companyDesc, \n" +
            "CONCAT (tm.MENU_ID, ' - ', tm.MENU_TEXT) As menuDesc, \n" +
            "CONCAT (tm.SUB_MENU_ID, ' - ', tm.SUB_MENU_TEXT) As subMenuDesc \n" +
            "From tbllanguage tl \n" +
            "Join tblcompany tc on tc.LANG_ID = tl.LANG_ID \n" +
            "Join tblmenu tm on tm.LANG_ID = tc.LANG_ID and tm.C_ID = tc.C_ID \n" +
            "Where \n" +
            "tl.LANG_ID IN (:languageId) and \n" +
            "tc.C_ID IN (:companyId) and \n" +
            "tm.MENU_ID IN (:menuId) and \n" +
            "tm.SUB_MENU_ID IN (:subMenuId) and \n" +
            "tl.IS_DELETED = 0 and \n " +
            "tc.IS_DELETED = 0 and \n " +
            "tm.IS_DELETED = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "languageId") String languageId,
                                 @Param(value = "companyId") String companyId,
                                 @Param(value = "menuId") Long menuId,
                                 @Param(value = "subMenuId") Long subMenuId);


}
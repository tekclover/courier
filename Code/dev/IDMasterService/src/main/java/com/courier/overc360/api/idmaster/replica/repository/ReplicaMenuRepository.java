package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.menu.ReplicaMenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ReplicaMenuRepository extends JpaRepository<ReplicaMenu, Long>, JpaSpecificationExecutor<ReplicaMenu> {

    Optional<ReplicaMenu> findByLanguageIdAndCompanyIdAndMenuIdAndSubMenuIdAndAuthorizationObjectIdAndDeletionIndicator(
            String languageId, String companyCode, Long menuId, Long subMenuId, Long authorizationObjectId, Long deletionIndicator);

    List<ReplicaMenu> findByMenuId(Long menuId);

    List<ReplicaMenu> findBySubMenuId(Long subMenuId);

}
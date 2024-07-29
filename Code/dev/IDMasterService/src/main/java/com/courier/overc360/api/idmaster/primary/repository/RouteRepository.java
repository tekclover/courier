package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.route.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface RouteRepository extends JpaRepository<Route, String>, JpaSpecificationExecutor<Route> {

    Optional<Route> findByCompanyIdAndLanguageIdAndRouteIdAndLegIdAndDeletionIndicator
            (String companyId, String languageId, String routeId, String legId, Long deletionIndicator);
}

package com.courier.overc360.api.midmile.replica.repository.specification;

import com.courier.overc360.api.midmile.replica.model.console.FindConsole;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class ConsoleSpecification implements Specification<ReplicaConsole> {

    FindConsole findConsoleHeader;

    public ConsoleSpecification(FindConsole inputSearchParams) {
        this.findConsoleHeader = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaConsole> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findConsoleHeader.getLanguageId() != null && !findConsoleHeader.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findConsoleHeader.getLanguageId()));
        }
        if (findConsoleHeader.getCompanyId() != null && !findConsoleHeader.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findConsoleHeader.getCompanyId()));
        }
        if (findConsoleHeader.getPartnerId() != null && !findConsoleHeader.getPartnerId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("partnerId");
            predicates.add(group.in(findConsoleHeader.getPartnerId()));
        }
        if (findConsoleHeader.getPartnerMasterAirwayBill() != null && !findConsoleHeader.getPartnerMasterAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("partnerMasterAirwayBill");
            predicates.add(group.in(findConsoleHeader.getPartnerMasterAirwayBill()));
        }
        if (findConsoleHeader.getPartnerHouseAirwayBill() != null && !findConsoleHeader.getPartnerHouseAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("partnerHouseAirwayBill");
            predicates.add(group.in(findConsoleHeader.getPartnerHouseAirwayBill()));
        }
        if (findConsoleHeader.getConsoleId() != null && !findConsoleHeader.getConsoleId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("consoleId");
            predicates.add(group.in(findConsoleHeader.getConsoleId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }

}

package com.courier.overc360.api.midmile.replica.repository.specification;


import com.courier.overc360.api.midmile.replica.model.console.FindConsole;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
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
        if (findConsoleHeader.getMasterAirwayBill() != null && !findConsoleHeader.getMasterAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("masterAirwayBill");
            predicates.add(group.in(findConsoleHeader.getMasterAirwayBill()));
        }
        if (findConsoleHeader.getHouseAirwayBill() != null && !findConsoleHeader.getHouseAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("houseAirwayBill");
            predicates.add(group.in(findConsoleHeader.getHouseAirwayBill()));
        }
        if (findConsoleHeader.getConsoleId() != null && !findConsoleHeader.getConsoleId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("consoleId");
            predicates.add(group.in(findConsoleHeader.getConsoleId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }
    }




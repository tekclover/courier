package com.courier.overc360.api.idmaster.replica.repository.specification;

import com.courier.overc360.api.idmaster.replica.model.consignmentType.FindConsignmentType;
import com.courier.overc360.api.idmaster.replica.model.consignmentType.ReplicaConsignmentType;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class ReplicaConsignmentTypeSpecification implements Specification<ReplicaConsignmentType> {

    FindConsignmentType findConsignmentType;

    public ReplicaConsignmentTypeSpecification(FindConsignmentType inputSearchParams) {
        this.findConsignmentType = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaConsignmentType> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findConsignmentType.getConsignmentTypeId() != null && !findConsignmentType.getConsignmentTypeId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("consignmentTypeId");
            predicates.add(group.in(findConsignmentType.getConsignmentTypeId()));
        }
        if (findConsignmentType.getLanguageId() != null && !findConsignmentType.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findConsignmentType.getLanguageId()));
        }
        if (findConsignmentType.getCompanyId() != null && !findConsignmentType.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findConsignmentType.getCompanyId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }

}

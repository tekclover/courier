package com.courier.overc360.api.idmaster.replica.repository.specification;

import com.courier.overc360.api.idmaster.replica.model.company.FindCompany;
import com.courier.overc360.api.idmaster.replica.model.company.ReplicaCompany;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class ReplicaCompanySpecification implements Specification<ReplicaCompany> {

    FindCompany findCompany;

    public ReplicaCompanySpecification(FindCompany inputSearchParams) {
        this.findCompany = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaCompany> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findCompany.getCompanyId() != null && !findCompany.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findCompany.getCompanyId()));
        }
        if (findCompany.getLanguageId() != null && !findCompany.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findCompany.getLanguageId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }
}
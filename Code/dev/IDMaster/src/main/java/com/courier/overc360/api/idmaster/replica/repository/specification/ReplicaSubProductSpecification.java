package com.courier.overc360.api.idmaster.replica.repository.specification;

import com.courier.overc360.api.idmaster.replica.model.subproduct.ReplicaSubProduct;
import com.courier.overc360.api.idmaster.replica.model.subproduct.FindSubProduct;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;


import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class ReplicaSubProductSpecification implements Specification<ReplicaSubProduct> {

    FindSubProduct findSubProduct;

    public ReplicaSubProductSpecification(FindSubProduct inputSearchParams) {
        this.findSubProduct = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaSubProduct> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findSubProduct.getLanguageId() != null && !findSubProduct.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findSubProduct.getLanguageId()));
        }
        if (findSubProduct.getCompanyId() != null && !findSubProduct.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findSubProduct.getCompanyId()));
        }
        if (findSubProduct.getSubProductId() != null && !findSubProduct.getSubProductId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("subProductId");
            predicates.add(group.in(findSubProduct.getSubProductId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }

}

package com.courier.overc360.api.idmaster.replica.repository.specification;

import com.courier.overc360.api.idmaster.replica.model.product.FindProduct;
import com.courier.overc360.api.idmaster.replica.model.product.ReplicaProduct;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class ReplicaProductSpecification implements Specification<ReplicaProduct> {

    FindProduct findProduct;

    public ReplicaProductSpecification(FindProduct inputSearchParams) {
        this.findProduct = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaProduct> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findProduct.getLanguageId() != null && !findProduct.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findProduct.getLanguageId()));
        }
        if (findProduct.getCompanyId() != null && !findProduct.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findProduct.getCompanyId()));
        }
        if (findProduct.getSubProductId() != null && !findProduct.getSubProductId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("subProductId");
            predicates.add(group.in(findProduct.getSubProductId()));
        }
        if (findProduct.getProductId() != null && !findProduct.getProductId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("productId");
            predicates.add(group.in(findProduct.getProductId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }


}

package com.courier.overc360.api.idmaster.replica.repository.specification;

import com.courier.overc360.api.idmaster.replica.model.currency.FindCurrency;
import com.courier.overc360.api.idmaster.replica.model.currency.ReplicaCurrency;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class ReplicaCurrencySpecification implements Specification<ReplicaCurrency> {

    FindCurrency findCurrency;

    public ReplicaCurrencySpecification(FindCurrency inputSearchParams) {
        this.findCurrency = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaCurrency> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findCurrency.getCurrencyId() != null && !findCurrency.getCurrencyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("currencyId");
            predicates.add(group.in(findCurrency.getCurrencyId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }
}




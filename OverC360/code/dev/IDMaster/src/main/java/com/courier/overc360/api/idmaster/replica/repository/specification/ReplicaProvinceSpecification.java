package com.courier.overc360.api.idmaster.replica.repository.specification;

import com.courier.overc360.api.idmaster.replica.model.province.FindProvince;
import com.courier.overc360.api.idmaster.replica.model.province.ReplicaProvince;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class ReplicaProvinceSpecification implements Specification<ReplicaProvince> {

    FindProvince findProvince;

    public ReplicaProvinceSpecification(FindProvince inputSearchParams) {
        this.findProvince = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaProvince> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findProvince.getLanguageId() != null && !findProvince.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findProvince.getLanguageId()));
        }
        if (findProvince.getCountryId() != null && !findProvince.getCountryId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("countryId");
            predicates.add(group.in(findProvince.getCountryId()));
        }
        if (findProvince.getProvinceId() != null && !findProvince.getProvinceId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("provinceId");
            predicates.add(group.in(findProvince.getProvinceId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }
}

package com.courier.overc360.api.idmaster.replica.repository.specification;

import com.courier.overc360.api.idmaster.replica.model.countryMapping.FindCountryMapping;
import com.courier.overc360.api.idmaster.replica.model.countryMapping.ReplicaCountryMapping;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class ReplicaCountryMappingSpecification implements Specification<ReplicaCountryMapping> {

    FindCountryMapping findCountryMapping;
    public ReplicaCountryMappingSpecification(FindCountryMapping inputSearchParams) {
        this.findCountryMapping = inputSearchParams;
    }
    @Override
    public Predicate toPredicate(Root<ReplicaCountryMapping> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();
        if (findCountryMapping.getCountryId() != null && !findCountryMapping.getCountryId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("countryId");
            predicates.add(group.in(findCountryMapping.getCountryId()));
        }
        if (findCountryMapping.getLanguageId() != null && !findCountryMapping.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findCountryMapping.getLanguageId()));
        }
        if (findCountryMapping.getCompanyId() != null && !findCountryMapping.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findCountryMapping.getCompanyId()));
        }
        if (findCountryMapping.getPartnerId() != null && !findCountryMapping.getPartnerId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("partnerId");
            predicates.add(group.in(findCountryMapping.getPartnerId()));
        }

        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[] {}));
    }

}

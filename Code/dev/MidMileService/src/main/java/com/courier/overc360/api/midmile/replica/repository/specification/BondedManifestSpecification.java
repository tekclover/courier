package com.courier.overc360.api.midmile.replica.repository.specification;

import com.courier.overc360.api.midmile.replica.model.bondedmanifest.FindBondedManifest;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifest;
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
public class BondedManifestSpecification implements Specification<ReplicaBondedManifest> {

    FindBondedManifest findBondedManifest;

    public BondedManifestSpecification(FindBondedManifest inputSearchParams) {
        this.findBondedManifest = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaBondedManifest> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findBondedManifest.getLanguageId() != null && !findBondedManifest.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findBondedManifest.getLanguageId()));
        }
        if (findBondedManifest.getCompanyId() != null && !findBondedManifest.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findBondedManifest.getCompanyId()));
        }
        if (findBondedManifest.getPartnerId() != null && !findBondedManifest.getPartnerId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("partnerId");
            predicates.add(group.in(findBondedManifest.getPartnerId()));
        }
        if (findBondedManifest.getMasterAirwayBill() != null && !findBondedManifest.getMasterAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("masterAirwayBill");
            predicates.add(group.in(findBondedManifest.getMasterAirwayBill()));
        }
        if (findBondedManifest.getHouseAirwayBill() != null && !findBondedManifest.getHouseAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("houseAirwayBill");
            predicates.add(group.in(findBondedManifest.getHouseAirwayBill()));
        }
        if (findBondedManifest.getBondedId() != null && !findBondedManifest.getBondedId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("bondedId");
            predicates.add(group.in(findBondedManifest.getBondedId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }

}

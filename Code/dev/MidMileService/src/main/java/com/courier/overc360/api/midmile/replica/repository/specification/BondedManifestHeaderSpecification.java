package com.courier.overc360.api.midmile.replica.repository.specification;

import com.courier.overc360.api.midmile.replica.model.bondedmanifest.FindBondedManifestHeader;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifestHeader;
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
public class BondedManifestHeaderSpecification implements Specification<ReplicaBondedManifestHeader> {

    FindBondedManifestHeader findBondedManifestHeader;

    public BondedManifestHeaderSpecification(FindBondedManifestHeader inputSearchParams) {
        this.findBondedManifestHeader = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaBondedManifestHeader> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findBondedManifestHeader.getLanguageId() != null && !findBondedManifestHeader.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findBondedManifestHeader.getLanguageId()));
        }
        if (findBondedManifestHeader.getCompanyId() != null && !findBondedManifestHeader.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findBondedManifestHeader.getCompanyId()));
        }
        if (findBondedManifestHeader.getPartnerId() != null && !findBondedManifestHeader.getPartnerId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("partnerId");
            predicates.add(group.in(findBondedManifestHeader.getPartnerId()));
        }
        if (findBondedManifestHeader.getMasterAirwayBill() != null && !findBondedManifestHeader.getMasterAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("masterAirwayBill");
            predicates.add(group.in(findBondedManifestHeader.getMasterAirwayBill()));
        }
        if (findBondedManifestHeader.getHouseAirwayBill() != null && !findBondedManifestHeader.getHouseAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("houseAirwayBill");
            predicates.add(group.in(findBondedManifestHeader.getHouseAirwayBill()));
        }
        if (findBondedManifestHeader.getBondedId() != null && !findBondedManifestHeader.getBondedId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("bondedId");
            predicates.add(group.in(findBondedManifestHeader.getBondedId()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }

}

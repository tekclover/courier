package com.courier.overc360.api.midmile.replica.repository.specification;

import com.courier.overc360.api.midmile.replica.model.bondedmanifest.FindBondedManifestLine;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifestLine;
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
public class BondedManifestLineSpecification implements Specification<ReplicaBondedManifestLine> {

    FindBondedManifestLine findBondedManifestLine;

    public BondedManifestLineSpecification(FindBondedManifestLine inputSearchParams) {
        this.findBondedManifestLine = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaBondedManifestLine> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findBondedManifestLine.getLanguageId() != null && !findBondedManifestLine.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findBondedManifestLine.getLanguageId()));
        }
        if (findBondedManifestLine.getCompanyId() != null && !findBondedManifestLine.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findBondedManifestLine.getCompanyId()));
        }
        if (findBondedManifestLine.getPartnerId() != null && !findBondedManifestLine.getPartnerId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("partnerId");
            predicates.add(group.in(findBondedManifestLine.getPartnerId()));
        }
        if (findBondedManifestLine.getMasterAirwayBill() != null && !findBondedManifestLine.getMasterAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("masterAirwayBill");
            predicates.add(group.in(findBondedManifestLine.getMasterAirwayBill()));
        }
        if (findBondedManifestLine.getBondedId() != null && !findBondedManifestLine.getBondedId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("bondedId");
            predicates.add(group.in(findBondedManifestLine.getBondedId()));
        }
        if (findBondedManifestLine.getHouseAirwayBill() != null && !findBondedManifestLine.getHouseAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("houseAirwayBill");
            predicates.add(group.in(findBondedManifestLine.getHouseAirwayBill()));
        }
        if (findBondedManifestLine.getLineNo() != null && !findBondedManifestLine.getLineNo().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("lineNo");
            predicates.add(group.in(findBondedManifestLine.getLineNo()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }

}

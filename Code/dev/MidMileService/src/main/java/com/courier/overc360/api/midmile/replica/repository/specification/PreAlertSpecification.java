package com.courier.overc360.api.midmile.replica.repository.specification;


import com.courier.overc360.api.midmile.replica.model.bondedmanifest.FindBondedManifest;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifest;
import com.courier.overc360.api.midmile.replica.model.consignment.FindPreAlert;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaPreAlert;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class PreAlertSpecification implements Specification<ReplicaPreAlert> {

    FindPreAlert findPreAlert;

    public PreAlertSpecification(FindPreAlert inputSearchParams) {
        this.findPreAlert = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaPreAlert> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findPreAlert.getLanguageId() != null && !findPreAlert.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findPreAlert.getLanguageId()));
        }
        if (findPreAlert.getCompanyId() != null && !findPreAlert.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findPreAlert.getCompanyId()));
        }
        if (findPreAlert.getPartnerId() != null && !findPreAlert.getPartnerId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("partnerId");
            predicates.add(group.in(findPreAlert.getPartnerId()));
        }
        if (findPreAlert.getMasterAirwayBill() != null && !findPreAlert.getMasterAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("masterAirwayBill");
            predicates.add(group.in(findPreAlert.getMasterAirwayBill()));
        }
//        if (findPreAlert.getHouseAirwayBill() != null && !findPreAlert.getHouseAirwayBill().isEmpty()) {
//            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("houseAirwayBill");
//            predicates.add(group.in(findPreAlert.getHouseAirwayBill()));
//        }
        if (findPreAlert.getHsCode() != null && !findPreAlert.getHsCode().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("hsCode");
            predicates.add(group.in(findPreAlert.getHsCode()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }
}

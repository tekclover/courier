package com.courier.overc360.api.midmile.replica.repository.specification;


import com.courier.overc360.api.midmile.replica.model.consignment.FindConsignment;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaItemDetails;
import com.courier.overc360.api.midmile.replica.model.piecedetails.ReplicaPieceDetails;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class ReplicaConsItemDetailsSpecification implements Specification<ReplicaItemDetails> {

    FindConsignment findConsignment;

    public ReplicaConsItemDetailsSpecification(FindConsignment inputSearchParams) {
        this.findConsignment = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaItemDetails> root, CriteriaQuery<?> query, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findConsignment.getLanguageId() != null && !findConsignment.getLanguageId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("languageId");
            predicates.add(group.in(findConsignment.getLanguageId()));
        }
        if (findConsignment.getCompanyId() != null && !findConsignment.getCompanyId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("companyId");
            predicates.add(group.in(findConsignment.getCompanyId()));
        }
        if (findConsignment.getMasterAirwayBill() != null && !findConsignment.getMasterAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("masterAirwayBill");
            predicates.add(group.in(findConsignment.getMasterAirwayBill()));
        }
        if (findConsignment.getHouseAirwayBill() != null && !findConsignment.getHouseAirwayBill().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("houseAirwayBill");
            predicates.add(group.in(findConsignment.getHouseAirwayBill()));
        }
        if (findConsignment.getPartnerId() != null && !findConsignment.getPartnerId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("partnerId");
            predicates.add(group.in(findConsignment.getPartnerId()));
        }
        if (findConsignment.getPieceId() != null && !findConsignment.getPieceId() .isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("pieceId");
            predicates.add(group.in(findConsignment.getPieceId() ));
        }
        if (findConsignment.getPieceItemId() != null && !findConsignment.getPieceItemId() .isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group>get("pieceItemId");
            predicates.add(group.in(findConsignment.getPieceItemId() ));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[]{}));
    }

}

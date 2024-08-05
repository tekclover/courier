package com.courier.overc360.api.idmaster.replica.repository.specification;


import com.courier.overc360.api.idmaster.replica.model.hhtnotification.FindNotificationMessage;
import com.courier.overc360.api.idmaster.replica.model.hhtnotification.ReplicaNotificationMessage;
import org.springframework.context.annotation.DeferredImportSelector;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
public class NotificationMessageSpecification implements Specification<ReplicaNotificationMessage> {

    FindNotificationMessage findNotificationMessage;

    public NotificationMessageSpecification(FindNotificationMessage inputSearchParams) {
        this.findNotificationMessage = inputSearchParams;
    }

    @Override
    public Predicate toPredicate(Root<ReplicaNotificationMessage> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
        List<Predicate> predicates = new ArrayList<Predicate>();

        if (findNotificationMessage.getNotificationId() != null && !findNotificationMessage.getNotificationId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group> get("notificationId");
            predicates.add(group.in(findNotificationMessage.getNotificationId()));
        }
        if (findNotificationMessage.getClientId() != null && !findNotificationMessage.getClientId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group> get("clientId");
            predicates.add(group.in(findNotificationMessage.getClientId()));
        }
        if (findNotificationMessage.getClassId() != null && !findNotificationMessage.getClassId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group> get("classId");
            predicates.add(group.in(findNotificationMessage.getClassId()));
        }
        if (findNotificationMessage.getClientUserId() != null && !findNotificationMessage.getClientUserId().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group> get("clientUserId");
            predicates.add(group.in(findNotificationMessage.getClientUserId()));
        }
        if (findNotificationMessage.getOrderType() != null && !findNotificationMessage.getOrderType().isEmpty()) {
            final Path<DeferredImportSelector.Group> group = root.<DeferredImportSelector.Group> get("orderType");
            predicates.add(group.in(findNotificationMessage.getOrderType()));
        }
        if (findNotificationMessage.getStartDate() != null && findNotificationMessage.getEndDate() != null) {
            predicates.add(cb.between(root.get("createdOn"), findNotificationMessage.getStartDate(), findNotificationMessage.getEndDate()));
        }
        predicates.add(cb.equal(root.get("deletionIndicator"), 0L));
        return cb.and(predicates.toArray(new Predicate[] {}));
    }
}

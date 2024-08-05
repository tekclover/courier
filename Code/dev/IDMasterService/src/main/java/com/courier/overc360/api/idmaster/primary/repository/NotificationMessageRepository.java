package com.courier.overc360.api.idmaster.primary.repository;


import com.courier.overc360.api.idmaster.primary.model.hhtnotification.NotificationMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface NotificationMessageRepository extends JpaRepository<NotificationMessage, Long>, JpaSpecificationExecutor<NotificationMessage> {


    List<NotificationMessage> findByClassIdAndClientIdAndDeletionIndicator(String classId, String clientId, Long deletionIndicator);

    List<NotificationMessage> findByNotificationIdAndDeletionIndicator(Long notificationId, Long deletionIndicator);

    NotificationMessage findByNotificationId(Long notificationId);

    Long countByClientIdAndOrderType(String clientId, String orderType);
    Long countByClientIdAndOrderTypeAndTab(String clientId, String orderType, Boolean tab);
    Long countByClientIdAndMenu(String clientId, Boolean menu);
    Long countByClientUserIdAndMenu(String clientUserId, Boolean menu);
    Long countByClientUserIdAndOrderTypeAndMenu(String clientUserId, String orderType, Boolean menu);

    List<NotificationMessage> findByClassIdAndClientIdAndMessageAndOrderTypeAndMenu(
            String classId, String clientId, String message, String orderType, Boolean menu);


 List<NotificationMessage> findByClassIdAndClientIdAndMessageAndOrderTypeAndReceiptNo(
            String classId, String clientId, String message, String orderType, String receiptNo);

    List<NotificationMessage> findByDocumentIdAndClassIdAndClientIdAndMessageAndOrderType(
            Long documentId, String classId, String clientId, String message, String orderType);

    List<NotificationMessage> findByClassIdAndClientIdAndMessageAndOrderTypeAndQuotationNo(
            String classId, String clientId, String message, String orderType, String quotationHeaderNo);
}

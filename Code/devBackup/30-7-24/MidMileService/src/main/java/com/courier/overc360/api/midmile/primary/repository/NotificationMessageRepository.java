package com.courier.overc360.api.midmile.primary.repository;


import com.courier.overc360.api.midmile.primary.model.notificationmessage.NotificationMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface NotificationMessageRepository extends JpaRepository<NotificationMessage, Long>, JpaSpecificationExecutor<NotificationMessage> {


    List<NotificationMessage> findByClassIdAndClientIdAndMessageAndOrderTypeAndMenu(
            String classId, String clientId, String message, String orderType, Boolean menu);


    List<NotificationMessage> findByClassIdAndClientIdAndMessageAndOrderTypeAndReceiptNo(
            String classId, String clientId, String message, String orderType, String receiptNo);

    List<NotificationMessage> findByDocumentIdAndClassIdAndClientIdAndMessageAndOrderType(
            Long documentId, String classId, String clientId, String message, String orderType);

    List<NotificationMessage> findByClassIdAndClientIdAndMessageAndOrderTypeAndQuotationNo(
            String classId, String clientId, String message, String orderType, String quotationHeaderNo);

}

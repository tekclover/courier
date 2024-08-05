package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.primary.model.notificationmessage.NotificationMessage;
import com.courier.overc360.api.midmile.primary.repository.NotificationMessageRepository;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Iterator;
import java.util.List;

@Service
@Slf4j
public class PushNotificationService {

    @Autowired
    private FirebaseMessaging firebaseMessaging;

    @Autowired
    private NotificationMessageRepository notificationMessageRepository;

    /*=================================================================================================================*/

    /**
     * SendPushNotification
     *
     * @param tokens
     * @param title
     * @param message
     * @return
     * @throws FirebaseMessagingException
     */
    public String sendPushNotification(List<String> tokens, String title, String message) {

        Iterator<String> iterator = tokens.iterator();
        while (iterator.hasNext()) {
            String token = iterator.next();
            if (token == null || token.isEmpty()) {
                iterator.remove();
                continue;
            }
            try {
                Message pushMessage = Message.builder()
                        .setToken(token)
                        .setNotification(Notification.builder()
                                .setTitle(title)
                                .setBody(message)
                                .build())
                        .build();
                firebaseMessaging.send(pushMessage);
            } catch (FirebaseMessagingException e) {
                iterator.remove();
                e.printStackTrace();
            }
        }
//        List<NotificationMessage> existingMessage = notificationMessageRepository.findByConsoleIdAnd(
//                String.valueOf(classId), clientId, message, orderType, receiptNo);

//        if (existingMessage.isEmpty()) {
//            saveNotificationMessage(classId, clientId, title, message, null, orderType, null, receiptNo);
//        }
        return "OK";
    }


//    // Save Notification Message
//    /**
//     *
//     * @param classId
//     * @param clientId
//     * @param title
//     * @param message
//     * @param orderType
//     */
//    public void saveNotificationMessage(Long classId, String clientId, String title, String message,
//                                        String clientUserId, String orderType, String quotationHeaderNo, String receiptNo) {
//        log.info("SaveNotification process start");
//
////        Boolean menu = false;
////        List<NotificationMessage> existingMessage = notificationMessageRepository.findByClassIdAndClientIdAndMessageAndOrderTypeAndMenu(
////                String.valueOf(classId), clientId, message, orderType, menu);
//
////        if (existingMessage.isEmpty()) {
//        NotificationMessage notificationMessage = new NotificationMessage();
//        notificationMessage.setClientUserId(clientUserId);
//        notificationMessage.setClassId(String.valueOf(classId));
//        notificationMessage.setClientId(clientId);
//        notificationMessage.setTitle(title);
//        notificationMessage.setQuotationNo(quotationHeaderNo);
//        notificationMessage.setMessage(message);
//        notificationMessage.setReceiptNo(receiptNo);
//        notificationMessage.setOrderType(orderType);
//        notificationMessage.setDeletionIndicator(0L);
//        notificationMessage.setCreatedOn(new Date());
//        notificationMessageRepository.save(notificationMessage);
//        log.info(orderType + " Notification Message saved successfully ");
////        } else {
////            log.info("Similar notification message already exists, skipping saving...");
////        }
//    }
}
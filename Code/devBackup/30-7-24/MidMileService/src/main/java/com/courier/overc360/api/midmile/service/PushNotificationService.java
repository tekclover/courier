package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.primary.model.notificationmessage.NotificationMessage;
import com.courier.overc360.api.midmile.primary.repository.CcrRepository;
import com.courier.overc360.api.midmile.primary.repository.NotificationMessageRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaCcrRepository;
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

    @Autowired
    CcrRepository ccrRepository;

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
    public String sendPushNotification(List<String> tokens, String title, String message, String companyId,
                                       String languageId, String houseAirwayBill, String consoleId ) {

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

                List<NotificationMessage> existingMessage =
                        notificationMessageRepository.findByCompanyIdAndLanguageIdAndConsoleIdAndHouseAirwayBillAndDeletionIndicator(
                                companyId, languageId, consoleId, houseAirwayBill, 0L);

                if (existingMessage.isEmpty()) {
                    saveNotificationMessage(companyId, languageId, consoleId, houseAirwayBill, title, message);
                }
            } catch (FirebaseMessagingException e) {
                iterator.remove();
                ccrRepository.deleteNotAccessToken(token);
                e.printStackTrace();
            }
        }
        return "OK";
    }


    // Save Notification Message

    /**
     *
     * @param companyId
     * @param languageId
     * @param consoleId
     * @param houseAirwayBill
     * @param title
     * @param message
     */
    public void saveNotificationMessage(String companyId, String languageId, String consoleId, String houseAirwayBill, String title, String message) {
        log.info("SaveNotification process start");

//        Boolean menu = false;
//        List<NotificationMessage> existingMessage = notificationMessageRepository.findByClassIdAndClientIdAndMessageAndOrderTypeAndMenu(
//                String.valueOf(classId), clientId, message, orderType, menu);

//        if (existingMessage.isEmpty()) {
        NotificationMessage notificationMessage = new NotificationMessage();
        notificationMessage.setCompanyId(companyId);
        notificationMessage.setLanguageId(languageId);
        notificationMessage.setHouseAirwayBill(houseAirwayBill);
        notificationMessage.setConsoleId(consoleId);
        notificationMessage.setTitle(title);
        notificationMessage.setMessage(message);
        notificationMessage.setDeletionIndicator(0L);
        notificationMessage.setCreatedOn(new Date());
        notificationMessageRepository.save(notificationMessage);
        log.info(consoleId + " Notification Message saved successfully ");
//        } else {
//            log.info("Similar notification message already exists, skipping saving...");
//        }
    }
}
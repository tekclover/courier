package com.courier.overc360.api.midmile.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
public class PushNotificationService {

    @Autowired
    private FirebaseMessaging firebaseMessaging;

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
    public String sendPushNotification(List<String> tokens, String title, String message)  {

        Iterator<String> iterator = tokens.iterator() ;
        while (iterator.hasNext()) {
            String token = iterator.next();
            if(token == null || token.isEmpty()) {
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
        return "OK";
    }
}

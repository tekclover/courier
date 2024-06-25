package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.notification.ReplicaNotification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaNotificationRepository extends JpaRepository<ReplicaNotification, String>, JpaSpecificationExecutor<ReplicaNotification> {

    Optional<ReplicaNotification> findByLanguageIdAndCompanyIdAndNotificationIdAndDeletionIndicator
            (String languageId, String companyId, String notificationId, Long deletionIndicator);


    // Get Service Type Desc
    @Query(value = "Select \n" +
            "CONCAT (tst.SERVICE_TYPE_ID, ' - ', tst.SERVICE_TYPE_TEXT) \n" +
            "From tblservicetype tst \n" +
            "Where \n" +
            "tst.SERVICE_TYPE_ID IN (:serviceTypeId) and \n" +
            "tst.IS_DELETED = 0", nativeQuery = true)
    String getServiceTypeDesc(@Param(value = "serviceTypeId") String serviceTypeId);

    // Get Product Desc
    @Query(value = "Select \n" +
            "CONCAT (tp.PRODUCT_ID, ' - ', tp.PRODUCT_NAME) \n" +
            "From tblproduct tp \n" +
            "Where \n" +
            "tp.PRODUCT_ID IN (:productId) and \n" +
            "tp.IS_DELETED = 0", nativeQuery = true)
    String getProductDesc(@Param(value = "productId") String productId);

    // Get SubProduct Desc
    @Query(value = "Select \n" +
            "CONCAT (tp.SUB_PRODUCT_ID, ' - ', tp.SUB_PRODUCT_NAME) \n" +
            "From tblsubproduct tp \n" +
            "Where \n" +
            "tp.SUB_PRODUCT_ID IN (:subProductId) and \n" +
            "tp.IS_DELETED = 0", nativeQuery = true)
    String getSubProductDesc(@Param(value = "subProductId") String subProductId);

}

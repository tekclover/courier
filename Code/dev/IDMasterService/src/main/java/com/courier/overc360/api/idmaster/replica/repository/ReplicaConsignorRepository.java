package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.consignor.ReplicaConsignor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaConsignorRepository extends JpaRepository<ReplicaConsignor, String>, JpaSpecificationExecutor<ReplicaConsignor> {

    Optional<ReplicaConsignor> findByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndCustomerIdAndConsignorIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String productId, String customerId, String consignorId, Long deletionIndicator);

    boolean existsByLanguageIdAndCompanyIdAndSubProductIdAndProductIdAndCustomerIdAndConsignorIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String productId, String customerId, String consignorId, Long deletionIndicator);

}

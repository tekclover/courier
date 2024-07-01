package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.consignor.Consignor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ConsignorRepository extends JpaRepository<Consignor, String>, JpaSpecificationExecutor<Consignor> {

    Optional<Consignor> findByLanguageIdAndCompanyIdAndSubProductIdAndSubProductValueAndProductIdAndCustomerIdAndConsignorIdAndDeletionIndicator(
            String languageId, String companyId, String subProductId, String subProductValue, String productId, String customerId, String consignorId, Long deletionIndicator);


}

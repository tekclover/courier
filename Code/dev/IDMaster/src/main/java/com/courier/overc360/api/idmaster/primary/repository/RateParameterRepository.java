package com.courier.overc360.api.idmaster.primary.repository;

import com.courier.overc360.api.idmaster.primary.model.rateparameter.RateParameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface RateParameterRepository extends JpaRepository<RateParameter, String>, JpaSpecificationExecutor<RateParameter> {

    Optional<RateParameter> findByLanguageIdAndCompanyIdAndRateParameterIdAndDeletionIndicator(
            String languageId, String companyId, String rateParameterId, Long DeletionIndicator);

//    Optional<Status> findByLanguageIdAndCompanyIdAndDeletionIndicator(
//            String languageId, String companyId,String StatusId, Long DeletionIndicator);


    // Get Description
//    @Query(value = "Select \n" +
//            "status_text statusDesc, \n" +
//            "From tblstatus  \n" +
//            "Where \n" +
//            "status_id IN (:statusId) and \n" +
//            "is_deleted = 0", nativeQuery = true)
//    IKeyValuePair getStatusDescription(@Param(value = "statusId") String statusId);

}

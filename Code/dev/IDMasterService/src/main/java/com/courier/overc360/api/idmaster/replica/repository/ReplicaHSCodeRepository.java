package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.hsCode.ReplicaHSCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaHSCodeRepository extends JpaRepository<ReplicaHSCode, String>, JpaSpecificationExecutor<ReplicaHSCode> {

    Optional<ReplicaHSCode> findByLanguageIdAndCompanyIdAndHsCodeAndDeletionIndicator(
            String languageId, String companyId, String hsCode, Long deletionIndicator);

}


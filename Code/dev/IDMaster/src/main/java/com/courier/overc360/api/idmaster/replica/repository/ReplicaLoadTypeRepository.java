package com.courier.overc360.api.idmaster.replica.repository;

import com.courier.overc360.api.idmaster.replica.model.loadtype.ReplicaLoadType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaLoadTypeRepository extends JpaRepository<ReplicaLoadType, String>, JpaSpecificationExecutor<ReplicaLoadType> {

    Optional<ReplicaLoadType> findByLoadTypeIdAndLanguageIdAndCompanyIdAndDeletionIndicator
            (String loadTypeId, String languageId, String companyId, Long DeletionIndicator);

}



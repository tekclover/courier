package com.courier.overc360.api.midmile.replica.repository;


import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaDestinationDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface ReplicaDestinationDetailsRepository extends JpaRepository<ReplicaDestinationDetails, Long> {
}

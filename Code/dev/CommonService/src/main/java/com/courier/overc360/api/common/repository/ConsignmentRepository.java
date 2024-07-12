package com.courier.overc360.api.common.repository;

import com.courier.overc360.api.common.model.consignment.Consignment;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsignmentRepository extends CassandraRepository<Consignment, Long> {

}
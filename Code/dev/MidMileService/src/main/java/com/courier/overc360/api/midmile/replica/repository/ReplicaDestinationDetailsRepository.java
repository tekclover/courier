package com.courier.overc360.api.midmile.replica.repository;


import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaDestinationDetails;
import com.courier.overc360.api.midmile.replica.model.dto.DestinationDetailsImpl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface ReplicaDestinationDetailsRepository extends JpaRepository<ReplicaDestinationDetails, Long> {

    @Query(value = "Select \n" +
            "(case when NAME = '1' then null else NAME end) name,\n" +
            "(case when PHONE = '1' then null else PHONE end) phone,\n" +
            "(case when ADDRESS_LINE_1 = '1' then null else ADDRESS_LINE_1 end) addressLine1,\n" +
            "(case when ADDRESS_LINE_2 = '1' then null else ADDRESS_LINE_2 end) addressLine2,\n" +
            "(case when CITY = '1' then null else CITY end) city,\n" +
            "(case when COUNTRY = '1' then null else COUNTRY end) country from tbldestdetails where \n" +
            "DEST_DETAIL_ID = :consignmentId", nativeQuery = true)
    DestinationDetailsImpl getDestinationDetailsImpl(@Param(value = "consignmentId") Long consignmentId);
}

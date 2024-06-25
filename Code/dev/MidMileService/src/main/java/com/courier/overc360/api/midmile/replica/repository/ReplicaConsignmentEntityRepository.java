package com.courier.overc360.api.midmile.replica.repository;


import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ReplicaConsignmentEntityRepository extends JpaRepository<ReplicaConsignmentEntity, Long>, JpaSpecificationExecutor<ReplicaConsignmentEntity> {


    @Query(value = "Select \n" +
            "tc.lang_id langId, \n" +
            "tc.lang_text langDesc, \n" +
            "tc.c_name companyDesc " +
            "from tblcompany tc \n" +
            "Where \n " +
            "tc.c_id in (:companyId) and \n" +
            "tc.is_deleted = 0", nativeQuery = true)
    IKeyValuePair getDescription(@Param(value = "companyId") String companyId);

    @Query(value = "Select \n" +
            "STATUS_ID statusId, \n" +
            "STATUS_TEXT statusDesc \n" +
            "from tblstatus \n" +
            "where \n" +
            "STATUS_ID in (:statusId) and \n" +
            "IS_DELETED = 0", nativeQuery = true)
    IKeyValuePair getStatusDescription(@Param(value = "statusId") String statusId);
}

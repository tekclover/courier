package com.courier.overc360.api.midmile.replica.repository;

import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaItemDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ReplicaItemDetailsRepository extends JpaRepository<ReplicaItemDetails, String>, JpaSpecificationExecutor<ReplicaItemDetails> {

    Optional<ReplicaItemDetails> findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
            String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String pieceId, String pieceItemId, Long deletionIndicator);

    List<ReplicaItemDetails> findByLanguageIdAndCompanyIdAndPieceIdAndDeletionIndicator(
            String languageId, String companyId, String pieceId, Long deletionIndicator);
}

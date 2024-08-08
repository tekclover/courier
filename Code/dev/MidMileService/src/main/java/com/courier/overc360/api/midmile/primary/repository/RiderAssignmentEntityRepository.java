package com.courier.overc360.api.midmile.primary.repository;

import com.courier.overc360.api.midmile.primary.model.riderassignment.RiderAssignmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface RiderAssignmentEntityRepository extends JpaRepository<RiderAssignmentEntity, Long> {

    Optional<RiderAssignmentEntity> findByCompanyIdAndLanguageIdAndPartnerIdAndHouseAirwayBillAndPickUpIdAndDeletionIndicator(
            String companyId, String languageId, String partnerId, String houseAirwayBill, String pickUpId, Long deletionIndicator);

}

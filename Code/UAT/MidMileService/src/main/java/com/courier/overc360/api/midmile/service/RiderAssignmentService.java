package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.riderassignment.*;
import com.courier.overc360.api.midmile.primary.repository.RiderAssignmentEntityRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
@Slf4j
public class RiderAssignmentService {

    @Autowired
    RiderAssignmentEntityRepository riderAssignmentEntityRepository;

    /*===================================================PRIMARY================================================================================================*/


    //GetALl
    public List<RiderAssignmentEntity> getAll() {
        List<RiderAssignmentEntity> getAll = riderAssignmentEntityRepository.findAll();
        return getAll;
    }


//    /**
//     * Create RiderAssignment
//     *
//     * @param addRiderAssignments
//     * @param loginUserID
//     * @return
//     */
//    public List<RiderAssignmentEntity> createRiderAssignment(List<AddRiderAssignment> addRiderAssignments, String loginUserID) {
//
//        List<RiderAssignmentEntity> riderAssignmentEntityList = new ArrayList<>();
//
//        addRiderAssignments.stream().forEach(addRiderAssignment -> {
//
//            // Checking fo duplicate entry
//            riderAssignmentEntityRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndHouseAirwayBillAndPickUpIdAndDeletionIndicator(
//                    addRiderAssignment.getCompanyId(), addRiderAssignment.getLanguageId(), addRiderAssignment.getPartnerId(), addRiderAssignment.getHouseAirwayBill(),
//                    addRiderAssignment.getPickupId(), 0L).ifPresent(existingAssignment -> {
//                        throw new BadRequestException("Given Values Getting Duplicated ");
//                    });
//
//            // Create new RiderAssignmentEntity and related entities
//            RiderAssignmentEntity newRiderAssignment = new RiderAssignmentEntity();
//            BeanUtils.copyProperties(addRiderAssignment, newRiderAssignment, CommonUtils.getNullPropertyNames(addRiderAssignment));
//            newRiderAssignment.setCreatedBy(loginUserID);
//            newRiderAssignment.setCreatedOn(new Date());
//            newRiderAssignment.setUpdatedBy(null);
//            newRiderAssignment.setUpdatedOn(null);
//
//            // Set DestinationDetails
//            newRiderAssignment.getDestinationDetails().setCreatedBy(loginUserID);
//            newRiderAssignment.getDestinationDetails().setCreatedOn(new Date());
//            newRiderAssignment.getDestinationDetails().setUpdatedBy(null);
//            newRiderAssignment.getDestinationDetails().setUpdatedOn(null);
//
//            // Set OriginDetails
//            newRiderAssignment.getOriginDetails().setCreatedBy(loginUserID);
//            newRiderAssignment.getOriginDetails().setCreatedOn(new Date());
//            newRiderAssignment.getOriginDetails().setUpdatedBy(null);
//            newRiderAssignment.getOriginDetails().setUpdatedOn(null);
//
//            // Set PickupDetails
//            newRiderAssignment.getPickupDetails().setCreatedBy(loginUserID);
//            newRiderAssignment.getPickupDetails().setCreatedOn(new Date());
//            newRiderAssignment.getPickupDetails().setUpdatedBy(null);
//            newRiderAssignment.getPickupDetails().setUpdatedOn(null);
//
//            riderAssignmentEntityList.add(riderAssignmentEntityRepository.save(newRiderAssignment));
//        });
//        return riderAssignmentEntityList;
//    }


}

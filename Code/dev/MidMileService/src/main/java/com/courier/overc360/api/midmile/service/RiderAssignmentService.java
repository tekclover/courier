package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.consignment.AddConsignment;
import com.courier.overc360.api.midmile.primary.model.consignment.ConsignmentEntity;
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

    /**
     * RiderAssignment Create Based On Consignment Response
     *
     * @param consignmentEntities
     * @param loginUserID
     * @return
     */
    public List<RiderAssignmentEntity> createRiderConsignment(List<AddConsignment> consignmentEntities, String loginUserID) {

        List<RiderAssignmentEntity> riderAssignmentEntityList = new ArrayList<>();
        try {
            consignmentEntities.stream().forEach(consignmentRes -> {

                AddRiderAssignment newRider = new AddRiderAssignment();
                BeanUtils.copyProperties(consignmentRes, newRider);
                riderAssignmentEntityList.add(createRiderAssignment(newRider, loginUserID));
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
        return riderAssignmentEntityList;
    }


    /**
     * Create RiderAssignment
     *
     * @param addRiderAssignment
     * @param loginUserID
     * @return
     */
    public RiderAssignmentEntity createRiderAssignment(AddRiderAssignment addRiderAssignment, String loginUserID) {

        // Checking fo duplicate entry
        riderAssignmentEntityRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndHouseAirwayBillAndPickUpIdAndDeletionIndicator(
                addRiderAssignment.getCompanyId(), addRiderAssignment.getLanguageId(), addRiderAssignment.getPartnerId(),
                addRiderAssignment.getHouseAirwayBill(), addRiderAssignment.getPickupId(), 0L).ifPresent(existingAssignment -> {
            throw new BadRequestException("Given Values Getting Duplicated ");
        });

        // Create new RiderAssignmentEntity and related entities
        RiderAssignmentEntity newRiderAssignment = new RiderAssignmentEntity();
        BeanUtils.copyProperties(addRiderAssignment, newRiderAssignment, CommonUtils.getNullPropertyNames(addRiderAssignment));
        newRiderAssignment.setCreatedBy(loginUserID);
        newRiderAssignment.setCreatedOn(new Date());
        newRiderAssignment.setUpdatedBy(null);
        newRiderAssignment.setUpdatedOn(null);

        // Set DestinationDetails
        newRiderAssignment.getDestinationDetails().setCreatedBy(loginUserID);
        newRiderAssignment.getDestinationDetails().setCreatedOn(new Date());
        newRiderAssignment.getDestinationDetails().setUpdatedBy(null);
        newRiderAssignment.getDestinationDetails().setUpdatedOn(null);

        // Set OriginDetails
        newRiderAssignment.getOriginDetails().setCreatedBy(loginUserID);
        newRiderAssignment.getOriginDetails().setCreatedOn(new Date());
        newRiderAssignment.getOriginDetails().setUpdatedBy(null);
        newRiderAssignment.getOriginDetails().setUpdatedOn(null);

        // Set PickupDetails
        newRiderAssignment.getPickupDetails().setCreatedBy(loginUserID);
        newRiderAssignment.getPickupDetails().setCreatedOn(new Date());
        newRiderAssignment.getPickupDetails().setUpdatedBy(null);
        newRiderAssignment.getPickupDetails().setUpdatedOn(null);
        return riderAssignmentEntityRepository.save(newRiderAssignment);
    }


}

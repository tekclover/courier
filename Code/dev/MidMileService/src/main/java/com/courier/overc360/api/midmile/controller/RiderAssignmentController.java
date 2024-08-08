package com.courier.overc360.api.midmile.controller;


import com.courier.overc360.api.midmile.primary.model.consignment.AddConsignment;
import com.courier.overc360.api.midmile.primary.model.riderassignment.RiderAssignmentEntity;
import com.courier.overc360.api.midmile.service.RiderAssignmentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@Api(tags = {"RiderAssignment"}, value = "Rider Assignment Operations Related to Controller")
@SwaggerDefinition(tags = {@Tag(name = "Rider Assignment", description = " Operation related to Rider Assignment")})
@RequestMapping("/riderassignment")
public class RiderAssignmentController {

    @Autowired
    RiderAssignmentService riderAssignmentService;


    /*====================================================Primary=========================================================================*/


    @ApiOperation(response = RiderAssignmentEntity.class, value = "Create Rider Assignment")
    @PostMapping("")
    public ResponseEntity<?> createRiderAssignmentEntity(@Valid @RequestBody List<AddConsignment> consignmentList,
                                                         @RequestParam String loginUserID) {
        List<RiderAssignmentEntity> dbRider = riderAssignmentService.createRiderConsignment(consignmentList, loginUserID);
        return new ResponseEntity<>(dbRider, HttpStatus.OK);
    }



}

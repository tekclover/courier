package com.courier.overc360.api.midmile.controller;


import com.courier.overc360.api.midmile.service.RiderAssignmentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@Api(tags = {"RiderAssignment"}, value = "Rider Assignment Operations Related to Controller")
@SwaggerDefinition(tags = {@Tag(name = "Rider Assignment", description = " Operation related to Rider Assignment")})
@RequestMapping("/riderassignment")
public class RiderAssignmentController {

    @Autowired
    RiderAssignmentService riderAssignmentService;


    /*====================================================Primary=========================================================================*/


//    @ApiOperation(response = RiderAssignmentEntity.class, value = "Create Rider Assignmetnt")
//    @PostMapping("")
//    public ResponseEntity<?> createRiderAssignmentEntity(@RequestBody List<AddConsignment> consignmentList, @RequestParam String loginUserID) {
//
//
//
//    }



}

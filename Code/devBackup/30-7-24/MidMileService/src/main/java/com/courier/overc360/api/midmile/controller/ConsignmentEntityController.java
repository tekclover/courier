package com.courier.overc360.api.midmile.controller;


import com.courier.overc360.api.midmile.primary.model.UploadResponse;
import com.courier.overc360.api.midmile.primary.model.consignment.AddConsignment;
import com.courier.overc360.api.midmile.primary.model.consignment.ConsignmentEntity;
import com.courier.overc360.api.midmile.primary.model.consignment.FindConsignment;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import com.courier.overc360.api.midmile.service.ConsignmentService;
import com.opencsv.exceptions.CsvException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Validated
@Api(tags = {"Consignment"}, value = "Consignment Operations related to ConsignmentController") // label for swagger
@SwaggerDefinition(tags = {@Tag(name = "Consignment", description = "Operations related to Consignment")})
@RequestMapping("/consignment")
@RestController
public class ConsignmentEntityController {

    @Autowired
    private ConsignmentService consignmentService;

        @ApiOperation(response = ConsignmentEntity.class, value = "Get ConsignmentEntity")
    @GetMapping()
    public ResponseEntity<?> getAll() {
        List<ConsignmentEntity> find = consignmentService.findAll();
        return new ResponseEntity<>(find, HttpStatus.OK);
    }

    // Create ConsignmentEntity
    @ApiOperation(response = ConsignmentEntity.class, value = "Create Consignment Entity")
    @PostMapping("")
    public ResponseEntity<?> createConsignmentEntity(@Valid @RequestBody List<ConsignmentEntity> consignmentEntityList,
                                                     @RequestParam String loginUserID) throws IOException,
            InvocationTargetException, IllegalAccessException, CsvException {
        List<ConsignmentEntity> dbConsignment = consignmentService.createConsignmentEntity(consignmentEntityList, loginUserID);
        return new ResponseEntity<>(dbConsignment, HttpStatus.OK);
    }

    //Consignment Upload
    @ApiOperation(response = AddConsignment.class, value = "Upload Consignment")
    @PostMapping("/upload")
    public ResponseEntity<?> consignmentUpload(@Valid @RequestBody List<ConsignmentEntity> addConsignments, @RequestParam String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        List<UploadResponse> uploadResponseList = new ArrayList<>();
        List<ConsignmentEntity> addConsignment = consignmentService.createConsignmentEntity(addConsignments, loginUserID);
        if(!addConsignment.isEmpty()){
            UploadResponse uploadResponse = new UploadResponse();
            uploadResponse.setStatusCode("200");
            uploadResponse.setStatusCode("Consignment Upload Successfully");
            uploadResponseList.add(uploadResponse);
        }
        return new ResponseEntity<>(uploadResponseList, HttpStatus.OK);
    }

    // Update Consignment
    @ApiOperation(response = ConsignmentEntity.class, value = "Update ConsignmentEntity")
    @PatchMapping("/updateConsignment")
    public ResponseEntity<?> updateConsignmentEntity(@Valid @RequestBody List<ConsignmentEntity> updateConsignment,
                                                     @RequestParam String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        List<ConsignmentEntity> updateConsignments = consignmentService.updateConsignmentEntity(updateConsignment, loginUserID);
        return new ResponseEntity<>(updateConsignments, HttpStatus.OK);
    }

    // Find Consignement
    @ApiOperation(response = ReplicaConsignmentEntity.class, value = "Find ConsignmentEntity") // label for swagger
    @PostMapping("/find")
    public ResponseEntity<?> findImageReference(@RequestBody FindConsignment findConsignment) throws Exception {
        List<ReplicaConsignmentEntity> consignmentEntityList = consignmentService.findConsignmentEntity(findConsignment);
        return new ResponseEntity<>(consignmentEntityList, HttpStatus.OK);
    }


}

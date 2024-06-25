package com.courier.overc360.api.midmile.controller;


import com.courier.overc360.api.midmile.primary.model.consignment.AddConsignment;
import com.courier.overc360.api.midmile.primary.model.consignment.ConsignmentEntity;
import com.courier.overc360.api.midmile.primary.model.consignment.UpdateConsignment;
import com.courier.overc360.api.midmile.replica.model.consignment.FindConsignment;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaAddConsignment;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.imagereference.FindImageReference;
import com.courier.overc360.api.midmile.replica.model.imagereference.ReplicaImageReference;
import com.courier.overc360.api.midmile.service.CommonService;
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
import java.util.List;


@Slf4j
@Validated
@Api(tags = {"Consignment"}, value = "Consignment Operations related to ConsignmentController") // label for swagger
@SwaggerDefinition(tags = {@Tag(name = "Consignment", description = "Operations related to Consignment")})
@RequestMapping("/consignment")
@RestController
public class ConsignmentController {

    @Autowired
    ConsignmentService consignmentService;

    @Autowired
    CommonService commonService;

    //GetAll
    @ApiOperation(response = ConsignmentEntity.class, value = "Get ALl Consignment") // label for swagger
    @GetMapping("")
    public ResponseEntity<?> getAllConsignment() {
        List<ReplicaConsignmentEntity> getAllConsignment = consignmentService.getAll();
        return new ResponseEntity<>(getAllConsignment, HttpStatus.OK);
    }

    // Create Company
    @ApiOperation(response = AddConsignment.class, value = "Create new Consignment") // label for swagger
    @PostMapping("")
    public ResponseEntity<?> postCompany(@Valid @RequestBody List<AddConsignment> addCompany, @RequestParam String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<AddConsignment> createdCompany = consignmentService.createConsignment(addCompany, loginUserID);
        return new ResponseEntity<>(createdCompany, HttpStatus.OK);
    }

    // Find ImageReference
    @ApiOperation(response = ReplicaConsignmentEntity.class, value = "Find ConsignmentEntity") // label for swagger
    @PostMapping("/find")
    public ResponseEntity<?> findImageReference(@RequestBody FindConsignment findConsignment) throws Exception {
        List<ReplicaAddConsignment> consignmentEntityList = consignmentService.findReplicaFindConsignment(findConsignment);
        return new ResponseEntity<>(consignmentEntityList, HttpStatus.OK);
    }

    @ApiOperation(response = UpdateConsignment.class, value = "Update ConsignmentEntity")
    @PatchMapping("/updateConsignment")
    public ResponseEntity<?> updateConsignmentEntity(@Valid @RequestBody List<UpdateConsignment> updateConsignment, @RequestParam String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        List<UpdateConsignment> updateConsignments = consignmentService.updateConsignmentEntity(updateConsignment, loginUserID);
        return new ResponseEntity<>(updateConsignments, HttpStatus.OK);
    }

    //DeleteConsignment
    @ApiOperation(response = ConsignmentEntity.class, value = "Delete ConsignmentEntity")
    @DeleteMapping("")
    public ResponseEntity<?> deleteConsignmentEntity(@RequestParam String companyId, @RequestParam String languageId, @RequestParam String partnerId,
                                                     @RequestParam String houseAirwayBill, @RequestParam String masterAirwayBill,
                                                     @RequestParam(required = false) String pieceId, @RequestParam(required = false) String pieceItemId,
                                                     @RequestParam(required = false) String imageRefId, @RequestParam String loginUserID) {
        consignmentService.deleteConsignmentEntity(companyId, languageId, partnerId, masterAirwayBill, houseAirwayBill, pieceId, pieceItemId,imageRefId, loginUserID );
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/v2/download")
    public ResponseEntity<?> downloadDocument(@RequestParam String sourceUrl, @RequestParam String destinationDir,
                                   @RequestParam String documentName) {
        String filePathWithName = commonService.downLoadDocument(sourceUrl, destinationDir, documentName);
        return new ResponseEntity<>(filePathWithName, HttpStatus.OK);
    }

}

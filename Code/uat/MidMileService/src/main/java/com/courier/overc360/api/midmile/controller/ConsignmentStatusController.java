package com.courier.overc360.api.midmile.controller;

import com.courier.overc360.api.midmile.primary.model.consignmentstatus.AddConsignmentStatus;
import com.courier.overc360.api.midmile.primary.model.consignmentstatus.ConsignmentStatus;
import com.courier.overc360.api.midmile.primary.model.consignmentstatus.UpdateConsignmentStatus;
import com.courier.overc360.api.midmile.replica.model.consignmentstatus.FindConsignmentStatus;
import com.courier.overc360.api.midmile.replica.model.consignmentstatus.ReplicaConsignmentStatus;
import com.courier.overc360.api.midmile.service.ConsignmentStatusService;
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
@Api(tags = {"ConsignmentStatus"}, value = "ConsignmentStatus Operations related to ConsignmentStatus")
// label for swagger
@SwaggerDefinition(tags = {@Tag(name = "ConsignmentStatus", description = "Operations related to ConsignmentStatus")})
@RequestMapping("/consignmentStatus")
@RestController
public class ConsignmentStatusController {

    @Autowired
    ConsignmentStatusService consignmentStatusService;

    /*========================================PRIMARY==================================================================*/

    //Create Consignment Status
    @ApiOperation(response = ConsignmentStatus.class, value = "Create ConsignmentStatus")
    @PostMapping("")
    public ResponseEntity<?> postConsignmentStatus(@Valid @RequestBody AddConsignmentStatus addConsignmentStatus, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        ConsignmentStatus createConsignmentStatus = consignmentStatusService.createConsignmentStatus(addConsignmentStatus, loginUserID);
        return new ResponseEntity<>(createConsignmentStatus, HttpStatus.OK);
    }

    //Update Consignment Status
    @ApiOperation(response = ConsignmentStatus.class, value = "Update ConsignmentStatus")
    @PatchMapping("/{statusId}")
    public ResponseEntity<?> patchConsignmentStatus(@PathVariable String statusId, @RequestParam String languageId, @RequestParam String companyId,
                                                    @RequestParam String pieceId, @RequestParam String houseAirwayBill, @RequestParam String eventCode,
                                                    @RequestBody UpdateConsignmentStatus updateConsignmentStatus, @RequestParam String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        ConsignmentStatus updatedConsignmentStatus = consignmentStatusService.updateConsignmentStatus(languageId, companyId,
                houseAirwayBill, pieceId, statusId, eventCode, updateConsignmentStatus, loginUserID);
        return new ResponseEntity<>(updatedConsignmentStatus, HttpStatus.OK);
    }

    // Delete ConsignmentStatus
    @ApiOperation(response = ConsignmentStatus.class, value = "Delete ConsignmentStatus") // label for swagger
    @DeleteMapping("/{statusId}")
    public ResponseEntity<?> deleteConsignmentStatus(@PathVariable String statusId, @RequestParam String languageId,
                                                     @RequestParam String companyId, @RequestParam String houseAirwayBill,
                                                     @RequestParam String pieceId, @RequestParam String eventCode, @RequestParam String loginUserID) {
        consignmentStatusService.deleteConsignmentDetails(languageId, companyId, houseAirwayBill, pieceId, statusId, eventCode, loginUserID);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*========================================REPLICA==================================================================*/

    //Get All
    @ApiOperation(response = ReplicaConsignmentStatus.class, value = "Get All ConsignmentStatus")
    @GetMapping("")
    public ResponseEntity<?> getAllConsignmentStatus() {
        List<ReplicaConsignmentStatus> consignmentStatusList = consignmentStatusService.getAllConsignmentStatus();
        return new ResponseEntity<>(consignmentStatusList, HttpStatus.OK);
    }

    //Get ConsignmentStatus
    @ApiOperation(response = ReplicaConsignmentStatus.class, value = "Get ConsignmentStatus")
    @GetMapping("/{statusId}")
    public ResponseEntity<?> getConsignmentStatus(@PathVariable String statusId, @RequestParam String languageId, @RequestParam String companyId,
                                                  @RequestParam String pieceId, @RequestParam String houseAirwayBill, @RequestParam String eventCode) {
        ReplicaConsignmentStatus dbConsignmentStatus =
                consignmentStatusService.getReplicaConsignmentStatus(languageId, companyId, houseAirwayBill, pieceId, statusId, eventCode);
        return new ResponseEntity<>(dbConsignmentStatus, HttpStatus.OK);
    }

    //Find ConsignmentStatus
    @ApiOperation(response = ReplicaConsignmentStatus.class, value = "Find ConsignmentStatus")
    @PostMapping("/find")
    public ResponseEntity<?> findConsignmentStatus(@Valid @RequestBody FindConsignmentStatus findConsignmentStatus) throws Exception {
        List<ReplicaConsignmentStatus> consignmentStatusList = consignmentStatusService.findConsignmentStatus(findConsignmentStatus);
        return new ResponseEntity<>(consignmentStatusList, HttpStatus.OK);
    }

}

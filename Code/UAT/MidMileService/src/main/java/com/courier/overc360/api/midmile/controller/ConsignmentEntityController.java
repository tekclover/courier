package com.courier.overc360.api.midmile.controller;


import com.courier.overc360.api.midmile.primary.model.UploadResponse;
import com.courier.overc360.api.midmile.primary.model.consignment.*;
import com.courier.overc360.api.midmile.primary.model.prealert.PreAlert;
import com.courier.overc360.api.midmile.replica.model.consignment.FindConsignmentInvoice;
import com.courier.overc360.api.midmile.replica.model.consignment.FindConsignmentMobileApp;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.dto.FindIConsignment;
import com.courier.overc360.api.midmile.replica.model.dto.FindPreAlertManifest;
import com.courier.overc360.api.midmile.replica.model.dto.IConsignment;
import com.courier.overc360.api.midmile.replica.model.dto.PreAlertManifestConsignment;
import com.courier.overc360.api.midmile.service.CommonService;
import com.courier.overc360.api.midmile.service.ConsignmentService;
import com.courier.overc360.api.midmile.service.PreAlertService;
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

    @Autowired
    private CommonService commonService;

    @Autowired
    private PreAlertService preAlertService;

    @ApiOperation(response = ConsignmentEntity.class, value = "Get ConsignmentEntity")
    @GetMapping()
    public ResponseEntity<?> getAll() {
        List<ConsignmentEntity> find = consignmentService.findAll();
        return new ResponseEntity<>(find, HttpStatus.OK);
    }

    // Create ConsignmentEntity
    @ApiOperation(response = ConsignmentEntity.class, value = "Create Consignment Entity")
    @PostMapping("")
    public ResponseEntity<?> createConsignmentEntity(@Valid @RequestBody List<AddConsignment> consignmentEntityList,
                                                     @RequestParam String loginUserID) throws IOException,
            InvocationTargetException, IllegalAccessException, CsvException {
        List<ConsignmentEntity> dbConsignment = consignmentService.createConsignmentEntity(consignmentEntityList, loginUserID);
        return new ResponseEntity<>(dbConsignment, HttpStatus.OK);
    }

    //Consignment Upload
    @ApiOperation(response = AddConsignment.class, value = "Upload Consignment")
    @PostMapping("/upload")
    public ResponseEntity<?> consignmentUpload(@Valid @RequestBody List<AddConsignment> addConsignments, @RequestParam String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        List<UploadResponse> uploadResponseList = new ArrayList<>();
        List<ConsignmentEntity> addConsignment = consignmentService.createConsignmentEntity(addConsignments, loginUserID);
        if (!addConsignment.isEmpty()) {
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
    public ResponseEntity<?> updateConsignmentEntity(@Valid @RequestBody List<UpdateConsignment> updateConsignment,
                                                     @RequestParam String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        List<ConsignmentEntity> updateConsignments = consignmentService.updateConsignmentEntity(updateConsignment, loginUserID);
        return new ResponseEntity<>(updateConsignments, HttpStatus.OK);
    }

    // Find Consignment
    @ApiOperation(response = ReplicaConsignmentEntity.class, value = "Find ConsignmentEntity") // label for swagger
    @PostMapping("/find")
    public ResponseEntity<?> findImageReference(@Valid @RequestBody FindConsignment findConsignment) throws Exception {
        List<ReplicaConsignmentEntity> consignmentEntityList = consignmentService.findConsignmentEntity(findConsignment);
        return new ResponseEntity<>(consignmentEntityList, HttpStatus.OK);
    }

    // Find Consignment - MobileApp
    @ApiOperation(response = ReplicaConsignmentEntity.class, value = "Find Consignment - MobileApp")
    @PostMapping("/find/mobileApp")
    public ResponseEntity<?> findConsignmentMobileApp(@Valid @RequestBody List<FindConsignmentMobileApp> findConsignments) throws Exception {
        List<ReplicaConsignmentEntity> consignmentEntityList = consignmentService.findConsignmentMobileApp(findConsignments);
        return new ResponseEntity<>(consignmentEntityList, HttpStatus.OK);
    }

    //DeleteConsignment
    @ApiOperation(response = ConsignmentEntity.class, value = "Delete ConsignmentEntity")
    @PostMapping("/delete/list")
    public ResponseEntity<?> deleteConsignmentEntity(@Valid @RequestBody List<ConsignmentDelete> consignmentDeletes, @RequestParam String loginUserID) {
        consignmentService.deleteConsignmentEntity(consignmentDeletes, loginUserID);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/v2/download")
    public ResponseEntity<?> downloadDocument(@RequestParam String sourceUrl, @RequestParam String destinationDir,
                                              @RequestParam String documentName) {
        String filePathWithName = commonService.downLoadDocument(sourceUrl, destinationDir, documentName);
        return new ResponseEntity<>(filePathWithName, HttpStatus.OK);
    }

    //========================================================null validation column==================================================//
    // Find
    @ApiOperation(response = IConsignment.class, value = "Find IConsignmentEntity") // label for swagger
    @PostMapping("/find/v2")
    public ResponseEntity<?> findIConsignment(@RequestBody FindIConsignment findConsignment) throws Exception {
        List<IConsignment> consignmentEntityList = consignmentService.findIConsignment(findConsignment);
        return new ResponseEntity<>(consignmentEntityList, HttpStatus.OK);
    }

    //Find PreAlert Manifest
    @ApiOperation(response = ReplicaConsignmentEntity.class, value = "Find Pre Alert Manifest") // label for swagger
    @PostMapping("/findPreAlertManifest")
    public ResponseEntity<?> findPreAlertManifest(@RequestBody FindPreAlertManifest findPreAlertManifest) throws Exception {
        List<PreAlertManifestConsignment> consignmentEntityList = consignmentService.findPreAlertManifest(findPreAlertManifest);
        return new ResponseEntity<>(consignmentEntityList, HttpStatus.OK);
    }

    // Consignment Invoice
    @ApiOperation(response = ConsignmentInvoice.class, value = "Find ConsignmentInvoice")
    @PostMapping("/findConsignmentInvoice")
    public ResponseEntity<?> findConsignmentInvoice(@Valid @RequestBody FindConsignmentInvoice findConsignmentInvoice) throws Exception {
        List<ConsignmentInvoice> consignmentInvoiceList = consignmentService.findConsignmentInvoice(findConsignmentInvoice);
        return new ResponseEntity<>(consignmentInvoiceList, HttpStatus.OK);
    }

    // Consignment Invoice
    @ApiOperation(response = InvoiceForm.class, value = "Find ConsignmentInvoice Header Line")
    @PostMapping("/consignmentInvoiceGenerate")
    public ResponseEntity<?> findConsignmentInvoiceGenerate(@Valid @RequestBody FindConsignmentInvoice findConsignmentInvoice) throws Exception {
        List<InvoiceForm> consignmentInvoiceList = consignmentService.ConsignmentInvoicePdfGenerate(findConsignmentInvoice);
        return new ResponseEntity<>(consignmentInvoiceList, HttpStatus.OK);
    }

    // PreAlert Create
    @ApiOperation(response = PreAlert.class, value = "PreAlert Create")
    @PostMapping("/post/prealert")
    public ResponseEntity<?> createPreAlert(@Valid @RequestBody List<PreAlert> preAlert, @RequestParam String loginUserID) {
        List<PreAlert> dbPreAlert = preAlertService.createPreAlertService(preAlert, loginUserID);
        return new ResponseEntity<>(dbPreAlert, HttpStatus.OK);
    }

//    // Find PreAlert
//    @ApiOperation(response = PreAlert.class, value = "Find PreAlert")
//    @PostMapping("/find/prealert")
//    public ResponseEntity<?> postPreAlert(@Valid @RequestBody FindPreAlert findPreAlert) {
//        List<ReplicaPreAlert> dbPreAlert = preAlertService.findPreAlert(findPreAlert);
//        return new ResponseEntity<>(dbPreAlert, HttpStatus.OK);
//    }

//    @ApiOperation(value = "PushNotification")
//    @PostMapping("notification")
//    public ResponseEntity<?> pushNotification(@RequestParam List<String> tokens) {
//    String title = "PUSH_NOTIFICATION";
//    String message = "TEST CHECKING";
//    pushNotificationService.sendPushNotification(tokens, title, message);
//    return new ResponseEntity<>("Success", HttpStatus.OK);
//
//    }


}

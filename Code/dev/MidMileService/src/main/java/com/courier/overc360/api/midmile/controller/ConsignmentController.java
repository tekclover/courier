package com.courier.overc360.api.midmile.controller;


import com.courier.overc360.api.midmile.primary.model.UploadResponse;
import com.courier.overc360.api.midmile.primary.model.consignment.*;
import com.courier.overc360.api.midmile.replica.model.consignment.*;
import com.courier.overc360.api.midmile.replica.model.dto.FindIConsignment;
import com.courier.overc360.api.midmile.replica.model.dto.FindPreAlertManifest;
import com.courier.overc360.api.midmile.replica.model.dto.IConsignment;
import com.courier.overc360.api.midmile.replica.model.dto.PreAlertManifestConsignment;
import com.courier.overc360.api.midmile.replica.model.imagereference.FindImageReference;
import com.courier.overc360.api.midmile.replica.model.imagereference.ReplicaImageReference;
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
public class ConsignmentController {

    @Autowired
    ConsignmentService consignmentService;

    @Autowired
    CommonService commonService;

    @Autowired
    PreAlertService preAlertService;

    /*=====================================================================================================================*/

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

    //DeleteConsignment
    @ApiOperation(response = ConsignmentEntity.class, value = "Delete ConsignmentEntity")
    @PostMapping("/delete/list")
    public ResponseEntity<?> deleteConsignmentEntity(@Valid @RequestBody List<ConsignmentDelete> consignmentDeletes, @RequestParam String loginUserID) {
        consignmentService.deleteConsignmentEntity(consignmentDeletes, loginUserID );
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/v2/download")
    public ResponseEntity<?> downloadDocument(@RequestParam String sourceUrl, @RequestParam String destinationDir,
                                   @RequestParam String documentName) {
        String filePathWithName = commonService.downLoadDocument(sourceUrl, destinationDir, documentName);
        return new ResponseEntity<>(filePathWithName, HttpStatus.OK);
    }

    //Consignment Upload
    @ApiOperation(response = AddConsignment.class, value = "Upload Consignment")
    @PostMapping("/upload")
    public ResponseEntity<?> consignmentUpload(@Valid @RequestBody List<AddConsignment> addConsignments, @RequestParam String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        List<UploadResponse> uploadResponseList = new ArrayList<>();
        List<AddConsignment> addConsignment = consignmentService.createConsignment(addConsignments, loginUserID);
        if(!addConsignment.isEmpty()){
            UploadResponse uploadResponse = new UploadResponse();
            uploadResponse.setStatusCode("200");
            uploadResponse.setStatusCode("Consignment Upload Successfully");
            uploadResponseList.add(uploadResponse);
        }
        return new ResponseEntity<>(uploadResponseList, HttpStatus.OK);
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

    // Find PreAlert
    @ApiOperation(response = PreAlert.class, value = "Find PreAlert")
    @PostMapping("/find/prealert")
    public ResponseEntity<?> postPreAlert(@Valid @RequestBody FindPreAlert findPreAlert) {
        List<ReplicaPreAlert> dbPreAlert = preAlertService.findPreAlert(findPreAlert);
        return new ResponseEntity<>(dbPreAlert, HttpStatus.OK);
    }
}

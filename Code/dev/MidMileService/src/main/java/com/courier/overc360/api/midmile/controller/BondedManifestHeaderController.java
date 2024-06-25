package com.courier.overc360.api.midmile.controller;

import com.courier.overc360.api.midmile.primary.model.bondedmanifest.AddBondedManifestHeader;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.BondedManifestDeleteInput;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.BondedManifestHeader;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.UpdateBondedManifestHeader;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.FindBondedManifestHeader;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.FindBondedManifestLine;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifestHeader;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifestLine;
import com.courier.overc360.api.midmile.service.BondedManifestHeaderService;
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
@Api(tags = {"BondedManifestHeader"}, value = "BondedManifestHeader Operations related to BondedManifestHeaderController")
// label for swagger
@SwaggerDefinition(tags = {@Tag(name = "BondedManifestHeader", description = "Operations related to BondedManifestHeader")})
@RequestMapping("/bondedManifest")
@RestController
public class BondedManifestHeaderController {

    @Autowired
    BondedManifestHeaderService bondedManifestHeaderService;

    /*---------------------------------------------------PRIMARY-----------------------------------------------------*/

    // Create new BondedManifestHeader
    @ApiOperation(response = BondedManifestHeader.class, value = "Create new BondedManifestHeader") // label for swagger
    @PostMapping("/create/list")
    public ResponseEntity<?> postBondedManifestHeaders(@Valid @RequestBody List<AddBondedManifestHeader> addBondedManifestHeaderList,
                                                       @RequestParam String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<BondedManifestHeader> bondedManifestHeaders = bondedManifestHeaderService.createBondedManifestHeaders(addBondedManifestHeaderList, loginUserID);
        return new ResponseEntity<>(bondedManifestHeaders, HttpStatus.OK);
    }

    // Update BondedManifestHeader
    @ApiOperation(response = BondedManifestHeader.class, value = "Update BondedManifestHeader") // label for Swagger
    @PatchMapping("/update/list")
    public ResponseEntity<?> patchBondedManifestHeaders(@Valid @RequestBody List<UpdateBondedManifestHeader> updateBondedManifestHeaderList,
                                                        @RequestParam String loginUserID)
            throws InvocationTargetException, IllegalAccessException, IOException, CsvException {
        List<BondedManifestHeader> bondedManifestHeaders = bondedManifestHeaderService.updateBondedManifestHeaders(updateBondedManifestHeaderList, loginUserID);
        return new ResponseEntity<>(bondedManifestHeaders, HttpStatus.OK);
    }

    // Delete BondedManifestHeader
    @ApiOperation(response = BondedManifestHeader.class, value = "Delete BondedManifestHeader") // label for Swagger
    @PostMapping("/delete/list")
    public ResponseEntity<?> deleteBondedManifestHeaders(@Valid @RequestBody List<BondedManifestDeleteInput> bondedManifestDeleteInputs,
                                                         @RequestParam String loginUserID) throws IOException, CsvException {
        bondedManifestHeaderService.deleteBondedManifestHeaders(bondedManifestDeleteInputs, loginUserID);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*---------------------------------------------------REPLICA-----------------------------------------------------*/

    // Get All BondedManifestHeader Details
    @ApiOperation(response = ReplicaBondedManifestHeader.class, value = "Get all BondedManifestHeader Details")
    // label for swagger
    @GetMapping("/allHeaders")
    public ResponseEntity<?> getAllBondedManifestHeaders() {
        List<ReplicaBondedManifestHeader> bondedManifestHeaders = bondedManifestHeaderService.getAllBondedManifestHeaders();
        return new ResponseEntity<>(bondedManifestHeaders, HttpStatus.OK);
    }
//    @ApiOperation(response = BondedManifestHeader.class, value = "Get all BondedManifestHeader Details")
//    // label for swagger
//    @GetMapping("/allHeaders")
//    public ResponseEntity<?> getAllBondedManifestHeaders() {
//        List<BondedManifestHeader> bondedManifestHeaders = bondedManifestHeaderService.getAllBondedManifestHeaders();
//        return new ResponseEntity<>(bondedManifestHeaders, HttpStatus.OK);
//    }

    // Get All BondedManifestLine Details
    @ApiOperation(response = ReplicaBondedManifestLine.class, value = "Get all BondedManifestLine Details")
    // label for swagger
    @GetMapping("/allLines")
    public ResponseEntity<?> getAllBondedManifestLines() {
        List<ReplicaBondedManifestLine> bondedManifestLines = bondedManifestHeaderService.getAllBondedManifestLines();
        return new ResponseEntity<>(bondedManifestLines, HttpStatus.OK);
    }

    // Get BondedManifestHeader
    @ApiOperation(response = ReplicaBondedManifestHeader.class, value = "Get a BondedManifestHeader")
    @GetMapping("/{bondedId}")
    public ResponseEntity<?> getBondedManifestHeader(@PathVariable String bondedId, @RequestParam String languageId,
                                                     @RequestParam String companyId, @RequestParam String partnerId,
                                                     @RequestParam String masterAirwayBill, @RequestParam String houseAirwayBill) {
        ReplicaBondedManifestHeader bondedManifestHeader = bondedManifestHeaderService.getBondedManifestHeaderReplica(
                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId);
        return new ResponseEntity<>(bondedManifestHeader, HttpStatus.OK);
    }
//    @ApiOperation(response = BondedManifestHeader.class, value = "Get a BondedManifestHeader")
//    @GetMapping("/{bondedId}")
//    public ResponseEntity<?> getBondedManifestHeader(@PathVariable String bondedId, @RequestParam String languageId,
//                                                     @RequestParam String companyId, @RequestParam String partnerId,
//                                                     @RequestParam String masterAirwayBill, @RequestParam String houseAirwayBill) {
//        BondedManifestHeader bondedManifestHeader = bondedManifestHeaderService.getBondedManifestHeaderReplica(
//                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId);
//        return new ResponseEntity<>(bondedManifestHeader, HttpStatus.OK);
//    }

    // Find BondedManifestHeaders
    @ApiOperation(response = ReplicaBondedManifestLine.class, value = "Find BondedManifestHeaders") // label for swagger
    @PostMapping("/findBondedManifestHeader")
    public ResponseEntity<?> findBondedManifestHeaders(@Valid @RequestBody FindBondedManifestHeader findBondedManifestHeader) throws Exception {
        List<ReplicaBondedManifestHeader> bondedManifestHeaderList = bondedManifestHeaderService.findBondedManifestHeaders(findBondedManifestHeader);
        return new ResponseEntity<>(bondedManifestHeaderList, HttpStatus.OK);
    }

    // Find BondedManifestLines
    @ApiOperation(response = ReplicaBondedManifestLine.class, value = "Find BondedManifestLines") // label for swagger
    @PostMapping("/findBondedManifestLine")
    public ResponseEntity<?> findBondedManifestLines(@Valid @RequestBody FindBondedManifestLine findBondedManifestLine) throws Exception {
        List<ReplicaBondedManifestLine> bondedManifestLineList = bondedManifestHeaderService.findBondedManifestLines(findBondedManifestLine);
        return new ResponseEntity<>(bondedManifestLineList, HttpStatus.OK);
    }

}

package com.courier.overc360.api.idmaster.controller;

import com.courier.overc360.api.idmaster.primary.model.hsCode.AddHSCode;
import com.courier.overc360.api.idmaster.primary.model.hsCode.HSCode;
import com.courier.overc360.api.idmaster.primary.model.hsCode.UpdateHSCode;
import com.courier.overc360.api.idmaster.replica.model.hsCode.FindHSCode;
import com.courier.overc360.api.idmaster.replica.model.hsCode.ReplicaHSCode;
import com.courier.overc360.api.idmaster.service.HSCodeService;
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
@Api(tags = {"HSCode"}, value = "HSCode Operations related to HSCodeController") // label for swagger
@SwaggerDefinition(tags = {@Tag(name = "HSCode", description = "Operations related to HSCode")})
@RequestMapping("/hsCode")
@RestController
public class HSCodeController {

    @Autowired
    HSCodeService hsCodeService;


    /*-------------------------------------------PRIMARY------------------------------------------------------------*/


    // Create HSCode
    @ApiOperation(response = HSCode.class, value = "Create new HSCode") // label for swagger
    @PostMapping("")
    public ResponseEntity<?> postHSCode(@Valid @RequestBody AddHSCode addHSCode, @RequestParam String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        HSCode hsCode = hsCodeService.createHsCode(addHSCode, loginUserID);
        return new ResponseEntity<>(hsCode, HttpStatus.OK);
    }

    // Update HSCode
    @ApiOperation(response = HSCode.class, value = "Update HSCode") // label for swagger
    @PatchMapping("/{hsCode}")
    public ResponseEntity<?> patchHSCode(@PathVariable String hsCode, @RequestParam String languageId, @RequestParam String loginUserID,
                                         @RequestParam String companyId, @Valid @RequestBody UpdateHSCode updateHSCode)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        HSCode updatedHsCode = hsCodeService.updateHsCode(languageId, companyId, hsCode, updateHSCode, loginUserID);
        return new ResponseEntity<>(updatedHsCode, HttpStatus.OK);
    }

    // Delete HSCode
    @ApiOperation(response = HSCode.class, value = "Delete HSCode") // label for swagger
    @DeleteMapping("/{hsCode}")
    public ResponseEntity<?> deleteHSCode(@PathVariable String hsCode, @RequestParam String languageId,
                                          @RequestParam String companyId, @RequestParam String loginUserID) {
        hsCodeService.deleteHsCode(languageId, companyId, hsCode, loginUserID);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    /*-----------------------------------------------REPLICA---------------------------------------------------*/


    // Get All HSCode Details
    @ApiOperation(response = ReplicaHSCode.class, value = "Get all HSCode details") // label for swagger
    @GetMapping("")
    public ResponseEntity<?> getAllHSCodeDetails() {
        List<ReplicaHSCode> hsCodeList = hsCodeService.getAllHsCodes();
        return new ResponseEntity<>(hsCodeList, HttpStatus.OK);
    }

    // Get HSCode
    @ApiOperation(response = ReplicaHSCode.class, value = "Get a HSCode") // label for swagger
    @GetMapping("/{hsCode}")
    public ResponseEntity<?> getHSCode(@PathVariable String hsCode, @RequestParam String languageId, @RequestParam String companyId) {
        ReplicaHSCode dbHSCode = hsCodeService.replicaGetHsCode(languageId, companyId, hsCode);
        return new ResponseEntity<>(dbHSCode, HttpStatus.OK);
    }

    // Find HSCode
    @ApiOperation(response = ReplicaHSCode.class, value = "Find HSCode") // label for swagger
    @PostMapping("/find")
    public ResponseEntity<?> findHSCodes(@Valid @RequestBody FindHSCode findHSCode) throws Exception {
        List<ReplicaHSCode> hsCodeList = hsCodeService.findHsCodes(findHSCode);
        return new ResponseEntity<>(hsCodeList, HttpStatus.OK);
    }
}

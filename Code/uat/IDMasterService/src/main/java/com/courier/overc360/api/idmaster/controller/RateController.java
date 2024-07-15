package com.courier.overc360.api.idmaster.controller;

import com.courier.overc360.api.idmaster.primary.model.rate.AddRate;
import com.courier.overc360.api.idmaster.primary.model.rate.Rate;
import com.courier.overc360.api.idmaster.primary.model.rate.UpdateRate;
import com.courier.overc360.api.idmaster.replica.model.rate.FindRate;
import com.courier.overc360.api.idmaster.replica.model.rate.ReplicaRate;
import com.courier.overc360.api.idmaster.service.RateService;
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
@Api(tags = {"Rates"}, value = "Rate related to RateController") // label for swagger
@SwaggerDefinition(tags = {@Tag(name = "Rate", description = "Operations related to Rate")})
@RequestMapping("/rate")
@RestController
public class RateController {

    @Autowired
    RateService rateService;

    /*-------------------------------------------PRIMARY-------------------------------------------------------------------*/

    // Create Rate
    @ApiOperation(response = Rate.class, value = "Create new Rate")
    @PostMapping("")
    public ResponseEntity<?> postRate(@Valid @RequestBody AddRate addRate, @RequestParam String loginUserID) throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        Rate newRate = rateService.createRate(addRate, loginUserID);
        return new ResponseEntity<>(newRate, HttpStatus.OK);
    }

    // Update Rate
    @ApiOperation(response = Rate.class, value = "Update Rate")
    @PatchMapping("/{partnerId}")
    public ResponseEntity<?> patchRate(@RequestParam String rateParameterId, @RequestParam String companyId, @PathVariable String partnerId,
                                       @RequestParam String languageId, @RequestParam String loginUserID, @RequestBody UpdateRate updateRate)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {

        Rate updatedRate = rateService.updateRate(rateParameterId, companyId, partnerId, languageId, loginUserID, updateRate);
        return new ResponseEntity<>(updatedRate, HttpStatus.OK);
    }

    // Delete Rate
    @ApiOperation(response = Rate.class, value = "Delete Rate")
    @DeleteMapping("/{partnerId}")
    public ResponseEntity<?> deleteRate(@RequestParam String rateParameterId, @RequestParam String companyId, @PathVariable String partnerId, @RequestParam String languageId, @RequestParam String loginUserID) {

        rateService.deleteRate(rateParameterId, companyId, partnerId, languageId, loginUserID);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*-----------------------------------------------REPLICA---------------------------------------------------------------*/

    // Get All Rate Details
    @ApiOperation(response = ReplicaRate.class, value = "Get all Rate Details")
    @GetMapping("")
    public ResponseEntity<?> getAllRateDetails() {
        List<ReplicaRate> rateList = rateService.getAllRates();
        return new ResponseEntity<>(rateList, HttpStatus.OK);
    }

    // Get Rate Details
    @ApiOperation(response = ReplicaRate.class, value = "Get a Rate") // label for swagger
    @GetMapping("/{partnerId}")
    public ResponseEntity<?> getRate(@RequestParam String rateParameterId, @RequestParam String companyId, @RequestParam String languageId, @PathVariable String partnerId) {
        ReplicaRate dbRate = rateService.getReplicaRate(rateParameterId, companyId, languageId, partnerId);
        return new ResponseEntity<>(dbRate, HttpStatus.OK);
    }

    // Find Rate
    @ApiOperation(response = ReplicaRate.class, value = "Find Rate")
    @PostMapping("/find")
    public ResponseEntity<?> findRate(@Valid @RequestBody FindRate findRate) throws Exception {
        List<ReplicaRate> rateList = rateService.findRate(findRate);
        return new ResponseEntity<>(rateList, HttpStatus.OK);
    }

}

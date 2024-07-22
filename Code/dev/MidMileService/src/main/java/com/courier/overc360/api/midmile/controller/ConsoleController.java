package com.courier.overc360.api.midmile.controller;

import com.courier.overc360.api.midmile.primary.model.console.*;
import com.courier.overc360.api.midmile.primary.model.prealert.PreAlert;
import com.courier.overc360.api.midmile.replica.model.console.FindConsole;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import com.courier.overc360.api.midmile.service.ConsoleService;
import com.opencsv.exceptions.CsvException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
@Api(tags = {"Console"}, value = "Console Operations related to ConsoleController")
// label for swagger
@SwaggerDefinition(tags = {@Tag(name = "Console", description = "Operations related to Console")})
@RequestMapping("/console")
@RestController
public class ConsoleController {


    @Autowired
    ConsoleService consoleService;

    /*---------------------------------------------------PRIMARY-----------------------------------------------------*/

    // Create new Console
    @ApiOperation(response = Console.class, value = "Create new Console") // label for swagger
    @PostMapping("/create/list")
    public ResponseEntity<?> postConsole(@Valid @RequestBody List<AddConsole> addConsoleList,
                                         @RequestParam String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<Console> console = consoleService.createConsoleNormal(addConsoleList, loginUserID);
        return new ResponseEntity<>(console, HttpStatus.OK);
    }

//    // Create new Console
//    @ApiOperation(response = Console.class, value = "Create new Console") // label for swagger
//    @PostMapping("/create/list/con")
//    public ResponseEntity<?> postConsoleCon(@Valid @RequestBody List<ReplicaAddConsignment> addConsoleList,
//                                         @RequestParam String loginUserID)
//            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
//        List<Console> console = consoleService.createConsoleInConsign(addConsoleList, loginUserID);
//        return new ResponseEntity<>(console, HttpStatus.OK);
//    }

    // Create new Console
    @ApiOperation(response = Console.class, value = "Create new Console") // label for swagger
    @PostMapping("/create/list/con")
    public ResponseEntity<?> postConsoleCon(@Valid @RequestBody List<PreAlert> preAlerts,
                                            @RequestParam String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<Console> console = consoleService.createConsoleBasedOnPreAlertResponse(preAlerts, loginUserID);
        return new ResponseEntity<>(console, HttpStatus.OK);
    }

    // Update Console - CCR Create
    @ApiOperation(response = Console.class, value = "Update Console CCR Create") // label for Swagger
    @PatchMapping("/update/list")
    public ResponseEntity<?> patchConsole(@Valid @RequestBody List<UpdateConsole> updateConsoleList,
                                          @RequestParam String loginUserID)
            throws InvocationTargetException, IllegalAccessException, IOException, CsvException {
        List<Console> console = consoleService.updateConsoleCcrCreate(updateConsoleList, loginUserID);
        return new ResponseEntity<>(console, HttpStatus.OK);
    }

    // Update Console For Mobile App
    @ApiOperation(response = Console.class, value = "Update Console For Mobile App") // label for Swagger
    @PatchMapping("/update/list/mobile")
    public ResponseEntity<?> patchConsoleForMobileApp(@Valid @RequestBody List<UpdateConsole> updateConsoleList,
                                                      @RequestParam String loginUserID)
            throws InvocationTargetException, IllegalAccessException, IOException, CsvException {
        List<Console> console = consoleService.updateConsoleForMobileApp(updateConsoleList, loginUserID);
        return new ResponseEntity<>(console, HttpStatus.OK);
    }

    // Update Console - Normal
    @ApiOperation(response = Console.class, value = "Update Console")
    @PatchMapping("/update/list/normal")
    public ResponseEntity<?> patchConsoleList(@Valid @RequestBody List<UpdateConsole> updateConsoleList, @RequestParam String loginUserID) {
        List<Console> dbConsole = consoleService.updateConsoleList(updateConsoleList, loginUserID);
        return new ResponseEntity<>(dbConsole, HttpStatus.OK);
    }

    // Delete Console
    @ApiOperation(response = Console.class, value = "Delete Console") // label for Swagger
    @PostMapping("/delete/list")
    public ResponseEntity<?> deleteConsole(@Valid @RequestBody List<ConsoleDeleteInput> consoleDeleteInputs,
                                           @RequestParam String loginUserID) throws IOException, CsvException {
        consoleService.deleteConsole(consoleDeleteInputs, loginUserID);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //Transfer Console
    @ApiOperation(response = Console.class, value = "Console Transfer")
    @PostMapping("/transfer")
    public ResponseEntity<?> consoleTransfer(@Valid @RequestBody List<TransferConsole> transferConsole, @RequestParam String loginUserID) {
        List<Console> dbConsole = consoleService.transferConsole(transferConsole, loginUserID);
        return new ResponseEntity<>(dbConsole, HttpStatus.OK);
    }
    /*---------------------------------------------------REPLICA-----------------------------------------------------*/

    // Get All Console Details
    @ApiOperation(response = ReplicaConsole.class, value = "Get all Console Details")
    // label for swagger
    @GetMapping(" ")
    public ResponseEntity<?> getAllReplicaConsole() {
        List<ReplicaConsole> console = consoleService.getAllConsole();
        return new ResponseEntity<>(console, HttpStatus.OK);
    }

    // Get a Console
    @ApiOperation(response = ReplicaConsole.class, value = "Get a Console")
    @GetMapping("/{consoleId}")
    public ResponseEntity<?> getConsoleReplica(@PathVariable String consoleId, @RequestParam String languageId,
                                               @RequestParam String companyId, @RequestParam String partnerId,
                                               @RequestParam String partnerMasterAirwayBill, @RequestParam String partnerHouseAirwayBill) {
        ReplicaConsole console = consoleService.getConsoleReplica(
                languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, consoleId);
        return new ResponseEntity<>(console, HttpStatus.OK);
    }


    // Find Console - normal
    @ApiOperation(response = ReplicaConsole.class, value = "Find Console") // label for swagger
    @PostMapping("/findConsole")
    public ResponseEntity<?> fetchConsoles(@Valid @RequestBody FindConsole findConsole) throws Exception {
        List<ReplicaConsole> consoleList = consoleService.findConsoles(findConsole);
        return new ResponseEntity<>(consoleList, HttpStatus.OK);
    }

    // Find Console
    @ApiOperation(response = ReplicaConsole.class, value = "Find Consoles by Pagination") // label for swagger
    @PostMapping("/findConsole/pagination")
    public ResponseEntity<?> findConsolesByPagination(@Valid @RequestBody FindConsole findConsole,
                                                      @RequestParam(defaultValue = "0") Integer pageNo,
                                                      @RequestParam(defaultValue = "10") Integer pageSize,
                                                      @RequestParam(defaultValue = "consoleId") String sortBy) throws Exception {
        Page<ReplicaConsole> consoleList = consoleService.findConsolesByPagination(findConsole, pageNo, pageSize, sortBy);
        return new ResponseEntity<>(consoleList, HttpStatus.OK);
    }

    @ApiOperation(response = MobileApp.class, value = "Find Console For MobileApp")
    @GetMapping("/find/mobileapp")
    public ResponseEntity<?> findMobileApp() {
        List<MobileApp> dbMobileApp = consoleService.getAllMobileApp();
        return new ResponseEntity<>(dbMobileApp, HttpStatus.OK);
    }

    @ApiOperation(response = Console.class, value = "Console Status Event Update")
    @PostMapping("/update/status")
    public ResponseEntity<?> updateConsoleStatus(@Valid @RequestBody List<ConsoleStatus> consoleStatuses,
                                                 @RequestParam String loginUserID) {
        List<Console> dbConsoleStatus = consoleService.updateConsoleStatus(consoleStatuses, loginUserID);
        return new ResponseEntity<>(dbConsoleStatus, HttpStatus.OK);
    }

    // GET MobileDashboard - Console count
    @ApiOperation(response = MobileDashboard.class, value = "Get Mobile Dashboard Count") // label for swagger
    @GetMapping("/mobileDashboard/get")
    public ResponseEntity<?> getMobileDashboard(@RequestParam String languageId, @RequestParam String companyId,
                                                @RequestParam String partnerMasterAirwayBill) throws Exception {
        MobileDashboard consolesCount = consoleService.getMobileDashboard(languageId, companyId, partnerMasterAirwayBill);
        return new ResponseEntity<>(consolesCount, HttpStatus.OK);
    }

}

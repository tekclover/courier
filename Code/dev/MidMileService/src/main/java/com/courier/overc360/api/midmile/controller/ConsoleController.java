package com.courier.overc360.api.midmile.controller;

import com.courier.overc360.api.midmile.primary.model.console.AddConsole;
import com.courier.overc360.api.midmile.primary.model.console.ConsoleDeleteInput;
import com.courier.overc360.api.midmile.primary.model.console.Console;
import com.courier.overc360.api.midmile.primary.model.console.UpdateConsole;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaAddConsignment;
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
        List<Console> console = consoleService.createConsoleList(addConsoleList, loginUserID);
        return new ResponseEntity<>(console, HttpStatus.OK);
    }

    // Create new Console
    @ApiOperation(response = Console.class, value = "Create new Console") // label for swagger
    @PostMapping("/create/list/con")
    public ResponseEntity<?> postConsoleCon(@Valid @RequestBody List<ReplicaAddConsignment> addConsoleList,
                                         @RequestParam String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<Console> console = consoleService.createConsoleInConsign(addConsoleList, loginUserID);
        return new ResponseEntity<>(console, HttpStatus.OK);
    }

    // Update Console
    @ApiOperation(response = Console.class, value = "Update Console") // label for Swagger
    @PatchMapping("/update/list")
    public ResponseEntity<?> patchConsole(@RequestBody List<UpdateConsole> updateConsoleList,
                                          @RequestParam String loginUserID)
            throws InvocationTargetException, IllegalAccessException, IOException, CsvException {
        List<Console> console = consoleService.updateConsole(updateConsoleList, loginUserID);
        return new ResponseEntity<>(console, HttpStatus.OK);
    }

    // Delete Console
    @ApiOperation(response = Console.class, value = "Delete Console") // label for Swagger
    @PostMapping("/delete/list")
    public ResponseEntity<?> deleteConsole(@Valid @RequestBody List<ConsoleDeleteInput> consoleDeleteInputs,
                                           @RequestParam String loginUserID) throws IOException, CsvException {
        consoleService.deleteConsole(consoleDeleteInputs, loginUserID);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
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
                                               @RequestParam String masterAirwayBill, @RequestParam String houseAirwayBill) {
        ReplicaConsole console = consoleService.getConsoleReplica(
                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId);
        return new ResponseEntity<>(console, HttpStatus.OK);
    }


    // Find Console
    @ApiOperation(response = ReplicaConsole.class, value = "Find Console") // label for swagger
    @PostMapping("/findConsole")
    public ResponseEntity<?> findConsole(@Valid @RequestBody FindConsole findConsole) throws Exception {
        List<ReplicaConsole> consoleList = consoleService.findConsole(findConsole);
        return new ResponseEntity<>(consoleList, HttpStatus.OK);
    }

}




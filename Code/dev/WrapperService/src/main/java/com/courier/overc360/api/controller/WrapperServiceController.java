package com.courier.overc360.api.controller;

import com.courier.overc360.api.batch.scheduler.BatchJobScheduler;
import com.courier.overc360.api.config.PropertiesConfig;
import com.courier.overc360.api.model.auth.AuthToken;
import com.courier.overc360.api.model.auth.AuthTokenRequest;
import com.courier.overc360.api.service.CommonService;
import com.courier.overc360.api.service.RegisterService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@Api(tags = {"Wrapper Service"}, value = "Wrapper Service Operations") // label for swagger
@SwaggerDefinition(tags = {@Tag(name = "User", description = "Operations related to User")})
public class WrapperServiceController {

    @Autowired
    BatchJobScheduler batchJobScheduler;

    @Autowired
    CommonService commonService;

//	@Autowired
//	ReportService reportService;

    @Autowired
    RegisterService registerService;

    @Autowired
    PropertiesConfig propertiesConfig;

//    @ApiOperation(response = Optional.class, value = "TestAXAPI") // label for swagger
//    @PostMapping("/testAXAPI")
//    public ResponseEntity<?> testAXAPI() {
//        commonService.generateAXOAuthToken();
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
//
//    /**
//     * This endpoint is for registering thrd party clients to get the Client ID and Secret Key
//     *
//     * @param clientName
//     * @return
//     */
//    @ApiOperation(response = Optional.class, value = "Register Client") // label for swagger
//    @PostMapping("/register-app-client")
//    public ResponseEntity<?> registerClient(String clientName) {
//        // Generate Unique ID for each client
//        // Store Client Unique ID and send Client Secret ID along with RegistrationID
//        NewUser registeredUser = registerService.registerNewUser(clientName);
//        return new ResponseEntity<>(registeredUser, HttpStatus.OK);
//    }
//
//    @ApiOperation(response = Optional.class, value = "Get Client Secret Key") // label for swagger
//    @RequestMapping(value = "/client-secret-key", method = RequestMethod.POST, produces = "application/json")
//    public ResponseEntity<?> getClientSecretKey(@Valid @RequestBody RegisteredUser registeredUser) {
//        try {
//            String secretKey = registerService.validateRegisteredUser(registeredUser);
//            Map<String, String> responseMap = Collections.singletonMap("client-secret-key", secretKey);
//            return new ResponseEntity<>(responseMap, HttpStatus.OK);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return new ResponseEntity<>("Error on getting Client Secret key: " + e.getLocalizedMessage(), HttpStatus.BAD_REQUEST);
//        }
//    }

    @ApiOperation(response = Optional.class, value = "OAuth Token") // label for swagger
    @PostMapping("/auth-token")
    public ResponseEntity<?> authToken(@Valid @RequestBody AuthTokenRequest authTokenRequest) {
        AuthToken authToken = registerService.getAuthToken(authTokenRequest);
        return new ResponseEntity<>(authToken, HttpStatus.OK);
    }

    //========================================ErrorLog==================================================
    @ApiOperation(response = Optional.class, value = "Error Log - Write to db") // label for swagger
    @PostMapping("/errorLog/toDB")
    public ResponseEntity<String> errorLogToDataBase() throws Exception {
        try {
            batchJobScheduler.runErrorLogJob();
            return ResponseEntity.ok("Success");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to write in db : " + e.getMessage());
        }
    }

}
package com.courier.overc360.api.controller;

import com.courier.overc360.api.batch.scheduler.BatchJobScheduler;
import com.courier.overc360.api.model.auth.AuthToken;
import com.courier.overc360.api.model.auth.AuthTokenRequest;
import com.courier.overc360.api.model.dto.PDFMerger;
import com.courier.overc360.api.model.transaction.UploadApiResponse;
import com.courier.overc360.api.service.CommonService;
import com.courier.overc360.api.service.FileStorageService;
import com.courier.overc360.api.service.RegisterService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
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
    RegisterService registerService;

    @Autowired
    FileStorageService fileStorageService;

    @Autowired
    CommonService commonService;

    @ApiOperation(response = Optional.class, value = "OAuth Token") // label for swagger
    @PostMapping("/auth-token")
    public ResponseEntity<?> authToken(@Valid @RequestBody AuthTokenRequest authTokenRequest) {
        AuthToken authToken = registerService.getAuthToken(authTokenRequest);
        return new ResponseEntity<>(authToken, HttpStatus.OK);
    }

    //========================================ErrorLog==================================================
    @ApiOperation(response = Optional.class, value = "ErrorLogs - Write to DB") // label for swagger
    @PostMapping("/errorLog/toDB")
    public ResponseEntity<String> errorLogToDataBase() throws Exception {
        try {
            batchJobScheduler.runErrorLogJob();
            return ResponseEntity.ok("Success");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to write in db : " + e.getMessage());
        }
    }

    /*========================================PDF===============================================================*/

    @ApiOperation(response = Optional.class, value = "PDF Extract content") // label for swagger
    @PostMapping("/pdf/extract")
    public ResponseEntity<?> extractPdf(@RequestParam("file") MultipartFile file, @RequestParam String filePath) throws Exception {

        try {
            String response = fileStorageService.storeFile(file, filePath);
            String fileWithPath = filePath + "/" + response;
            commonService.extractPdf(fileWithPath);
//            return ResponseEntity.ok(response + " - Extracted Successfully");
            return new ResponseEntity <> (response + " - Extracted Successfully", HttpStatus.OK) ;
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to Extract PDF" + e.getMessage());
        }
    }

    @ApiOperation(response = Optional.class, value = "PDF Merge") // label for swagger
    @PostMapping("/pdf/merge")
    public ResponseEntity<byte[]> mergePdf(@RequestBody PDFMerger pdfMerger) throws Exception {

        try {
            byte[] mergePdf = commonService.mergePdf(pdfMerger);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"merged.pdf\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(mergePdf);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(("Failed to Merge PDF" + e.getMessage()).getBytes());
        }
    }

    @ApiOperation(response = Optional.class, value = "PDF Download") // label for swagger
    @PostMapping("/pdf/download")
    public ResponseEntity<?> downloadPdf(@RequestParam String sourceUrl, @RequestParam String destinationDir, @RequestParam String documentName) throws Exception {

        try {
            String response = commonService.downloadPdf(sourceUrl, destinationDir, documentName);
            return new ResponseEntity <> (response, HttpStatus.OK) ;
        } catch (Exception e) {
            return ResponseEntity.status(500).body(("Failed to download PDF" + e.getMessage()));
        }
    }

    @ApiOperation(response = Optional.class, value = "Document Storage Download") // label for swagger
    @GetMapping("/doc-storage/download")
    public ResponseEntity<?> docStorageDownload(@RequestParam String location, @RequestParam String fileName)
            throws Exception {
        String filePath = fileStorageService.getQualifiedFilePath (location, fileName);
        File file = new File (filePath);
        Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

        HttpHeaders header = new HttpHeaders();
        header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + file.getName());
        header.add("Cache-Control", "no-cache, no-store, must-revalidate");
        header.add("Pragma", "no-cache");
        header.add("Expires", "0");
        return ResponseEntity.ok()
                .headers(header)
                .contentLength(file.length())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(resource);
    }

    // Consignment-Upload
    @ApiOperation(response = UploadApiResponse.class, value = " Consignment Upload")
    @PostMapping("/consignment/Upload")
    public ResponseEntity<?> consignmentUpload(@RequestParam("file") MultipartFile file) {

        Map<String, String> response = fileStorageService.processConsignmentOrders(file);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
package com.courier.overc360.api.common.service;

import com.courier.overc360.api.common.config.PropertiesConfig;
import com.courier.overc360.api.common.controller.exception.BadRequestException;
import com.courier.overc360.api.common.model.pdf.PDFMerger;
import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.multipdf.PDFMergerUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@Service
@Slf4j
public class PDFMergeService {

    @Autowired
    PropertiesConfig propertiesConfig;

    private Path fileStorageLocation = null;

    private static final String GHOSTSCRIPT_PATH = "/snap/bin/gs";  // Update with your Ghostscript path

    public byte[] mergePdfs(List<InputStream> pdfs, String outputPath) throws IOException, InterruptedException {
        PDFMergerUtility mergerUtility = new PDFMergerUtility();
        for (InputStream pdf : pdfs) {
            mergerUtility.addSource(pdf);
        }
        try (ByteArrayOutputStream mergedOutput = new ByteArrayOutputStream()) {
            mergerUtility.setDestinationStream(mergedOutput);
            mergerUtility.mergeDocuments(null);
            byte[] mergedBytes = mergedOutput.toByteArray();
            // Try saving merged pdf in local
            try (FileOutputStream fos = new FileOutputStream(outputPath)) {
                fos.write(mergedBytes);
            }

            // Compress the merged PDF
            String compressedOutputPath = outputPath.replace(".pdf", "_compressed.pdf");
            compressPdf(outputPath, compressedOutputPath);

            // Read the compressed file back into a byte array
            byte[] compressedBytes = Files.readAllBytes(Paths.get(compressedOutputPath));

            // Return the compressed PDF bytes
            return compressedBytes;
        }
    }
    /**
     * @param request
     * @return
     */
    public byte[] pdfMerger(PDFMerger request) throws IOException, InterruptedException {
        System.out.println("Received filePaths: " + request.getFilePaths());
        System.out.println("Received outputPath: " + request.getOutputPath());
        List<InputStream> pdfStreams = new ArrayList<>();
        for (String path : request.getFilePaths()) {
            try {
                String filePath = getQualifiedFilePath(path);
                pdfStreams.add(Files.newInputStream(Paths.get(filePath)));
            } catch (IOException e) {
                e.printStackTrace();
                throw new BadRequestException("Failed to Read the PDF" + e);
            }
        }
        String fileOuputStoragePath = getQualifiedFilePath(request.getOutputPath());
        int location = fileOuputStoragePath.lastIndexOf("/");
        String directoryCreate = fileOuputStoragePath.substring(0,location);
        this.fileStorageLocation = Paths.get(directoryCreate).toAbsolutePath().normalize();
        if (!Files.exists(fileStorageLocation)) {
            try {
                Files.createDirectories(this.fileStorageLocation);
            } catch (Exception ex) {
                throw new BadRequestException(
                        "Could not create the directory where the merged files will be stored.");
            }
        }
        byte[] mergePdf = mergePdfs(pdfStreams, fileOuputStoragePath);
        return mergePdf;
    }

    /**
     *
     * @param request
     * @return
     * @throws IOException
     * @throws InterruptedException
     */
    public List<byte[]> pdfMerge(PDFMerger request) throws IOException, InterruptedException {
        List<InputStream> pdfStreams = new ArrayList<>();
        for (String path : request.getFilePaths()) {
            try {
                String filePath = getQualifiedFilePath(path);
                pdfStreams.add(Files.newInputStream(Paths.get(filePath)));
            } catch (IOException e) {
                e.printStackTrace();
                throw new BadRequestException("Failed to Read the PDF: " + e);
            }
        }
        String fileOutputStoragePath = getQualifiedFilePath(request.getOutputPath());
        int location = fileOutputStoragePath.lastIndexOf("/");
        String directoryCreate = fileOutputStoragePath.substring(0, location);
        this.fileStorageLocation = Paths.get(directoryCreate).toAbsolutePath().normalize();
        if (!Files.exists(fileStorageLocation)) {
            try {
                Files.createDirectories(this.fileStorageLocation);
            } catch (Exception ex) {
                throw new BadRequestException("Could not create the directory where the merged files will be stored.");
            }
        }

        List<String> outputPaths = new ArrayList<>();
        int totalFiles = request.getFilePaths().size();
        int numBatches = (int) Math.ceil((double) totalFiles / 5);  // Adjust the batch size as needed

        for (int i = 0; i < numBatches; i++) {
            outputPaths.add(fileOutputStoragePath.replace(".pdf", "_batch" + (i + 1) + ".pdf"));
        }

        processInBatches(request.getFilePaths(), outputPaths);

        List<byte[]> mergedPdfs = new ArrayList<>();
        for (String outputPath : outputPaths) {
            byte[] mergedPdf = Files.readAllBytes(Paths.get(outputPath));
            mergedPdfs.add(mergedPdf);
        }

        return mergedPdfs;
    }

    /**
     *
     * @param filePaths
     * @return
     */
    private List<List<String>> groupFilesByNumber(List<String> filePaths) {
        Map<String, List<String>> groupedFiles = new TreeMap<>();

        for (String filePath : filePaths) {
            String number = extractNumber(filePath);
            groupedFiles.computeIfAbsent(number, k -> new ArrayList<>()).add(filePath);
        }

        return new ArrayList<>(groupedFiles.values());
    }

    /**
     *
     * @param groupedFiles
     * @return
     */
    private List<List<String>> createBatches(List<List<String>> groupedFiles) {
        List<List<String>> batches = new ArrayList<>();
        List<String> currentBatch = new ArrayList<>();
        int batchSize = 5;  // Adjust the batch size as needed

        for (List<String> group : groupedFiles) {
            if (currentBatch.size() + group.size() > batchSize) {
                batches.add(new ArrayList<>(currentBatch));
                currentBatch.clear();
            }
            currentBatch.addAll(group);
        }

        if (!currentBatch.isEmpty()) {
            batches.add(currentBatch);
        }

        return batches;
    }

    /**
     *
     * @param fileName
     * @return
     */
    private String extractNumber(String fileName) {
        int underscoreIndex = fileName.lastIndexOf('_');
        if (underscoreIndex != -1) {
            return fileName.substring(0, underscoreIndex);
        }
        return fileName;
    }

    /**
     *
     * @param inputFilePaths
     * @param outputPaths
     * @throws IOException
     * @throws InterruptedException
     */
    private void processInBatches(List<String> inputFilePaths, List<String> outputPaths) throws IOException, InterruptedException {
        List<List<String>> groupedFiles = groupFilesByNumber(inputFilePaths);
        List<List<String>> batches = createBatches(groupedFiles);

        for (int i = 0; i < batches.size(); i++) {
            List<String> batch = batches.get(i);
            List<InputStream> pdfStreams = new ArrayList<>();
            for (String path : batch) {
                String filePath = getQualifiedFilePath(path);
                pdfStreams.add(Files.newInputStream(Paths.get(filePath)));
            }

            String batchOutputPath = outputPaths.get(i);
            byte[] mergePdf = mergePdfs(pdfStreams, batchOutputPath);

            // Clean up streams
            for (InputStream stream : pdfStreams) {
                stream.close();
            }
        }
    }

    /**
     *
     * @param pdfMergerList
     * @throws IOException
     */
    public List<String> batchPdfMerge(List<PDFMerger> pdfMergerList) throws IOException, InterruptedException {
        try {
            List<String> fileNameWithPath = new ArrayList<>();
            for (PDFMerger request : pdfMergerList) {
                List<InputStream> pdfStreams = new ArrayList<>();
                for (String path : request.getFilePaths()) {
                    try {
                        String filePath = getQualifiedFilePath(path);
                        pdfStreams.add(Files.newInputStream(Paths.get(filePath)));
                    } catch (IOException e) {
                        e.printStackTrace();
                        throw new BadRequestException("Failed to Read the PDF" + e);
                    }
                }
                String fileOuputStoragePath = getQualifiedFilePath(request.getOutputPath());
                int location = fileOuputStoragePath.lastIndexOf("/");
                String directoryCreate = fileOuputStoragePath.substring(0, location);
                this.fileStorageLocation = Paths.get(directoryCreate).toAbsolutePath().normalize();
                if (!Files.exists(fileStorageLocation)) {
                    try {
                        Files.createDirectories(this.fileStorageLocation);
                    } catch (Exception ex) {
                        throw new BadRequestException(
                                "Could not create the directory where the merged files will be stored.");
                    }
                }
                byte[] mergePdf = mergePdfs(pdfStreams, fileOuputStoragePath);
                fileNameWithPath.add(fileOuputStoragePath);
    //            copyToTempFolder(mergePdf);
            }
            return fileNameWithPath;
        } catch (Exception e) {
            e.printStackTrace();
            throw new BadRequestException("Exception : " + e);
        }
    }
    /**
     *
     * @param location
     * @return
     */
    public String getQualifiedFilePath(String location) {
        String filePath = propertiesConfig.getDocStorageBasePath();
        if (location.startsWith("/")) {
            filePath = filePath + location;
        } else {
            filePath = filePath + "/" + location;
        }
        return filePath;
    }
    /**
     *
     * @param pdfDocument
     * @throws IOException
     */
    public void copyToTempFolder(byte[] pdfDocument) throws IOException {
        String filePath = propertiesConfig.getDocStorageBasePath();
        filePath = filePath + "/temp";
        this.fileStorageLocation = Paths.get(filePath).toAbsolutePath().normalize();
        try {
            Files.deleteIfExists(fileStorageLocation);
        } catch (IOException e) {
            throw new BadRequestException("Could not delete the directory");
        }
        if (!Files.exists(fileStorageLocation)) {
            try {
                Files.createDirectories(this.fileStorageLocation);
            } catch (Exception ex) {
                throw new BadRequestException("Could not create the directory where the merged files will be stored.");
            }
        }
        try (FileOutputStream fos = new FileOutputStream(filePath)) {
            fos.write(pdfDocument);
        }
    }

    /**
     * Compress Pdfs
     *
     * @param inputPath
     * @param outputPath
     * @throws IOException
     * @throws InterruptedException
     */
    public void compressPdf(String inputPath, String outputPath) throws IOException, InterruptedException {
        Process process = new ProcessBuilder(
                GHOSTSCRIPT_PATH,
                "-sDEVICE=pdfwrite",
                "-dCompatibilityLevel=1.4",
                "-dPDFSETTINGS=/screen",
                "-dDownsampleColorImages=true",
                "-dDownsampleGrayImages=true",
                "-dDownsampleMonoImages=true",
                "-dColorImageResolution=360",  // Adjusted resolution for color images
                "-dGrayImageResolution=360",   // Adjusted resolution for grayscale images
                "-dMonoImageResolution=300",   // Adjusted resolution for monochrome images
                "-dNOPAUSE",
                "-dQUIET",
                "-dBATCH",
                "-sOutputFile=" + outputPath, inputPath).start();
        process.waitFor();
    }


}
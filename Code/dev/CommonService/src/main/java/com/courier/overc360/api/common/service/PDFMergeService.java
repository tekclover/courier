package com.courier.overc360.api.common.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.multipdf.PDFMergerUtility;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
@Slf4j
public class PDFMergeService {

    public byte[] mergePdfs(List<InputStream> pdfs, String outputPath) throws IOException {
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

            return mergedBytes;
        }
    }
}

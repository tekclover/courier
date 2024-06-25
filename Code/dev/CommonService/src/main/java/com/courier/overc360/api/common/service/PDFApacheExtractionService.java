package com.courier.overc360.api.common.service;

import com.courier.overc360.api.common.config.PropertiesConfig;
import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@Slf4j
public class PDFApacheExtractionService {

    @Autowired
    PropertiesConfig propertiesConfig;

    public List<String> extractDetailsFromPdf(String filePath) throws IOException {
        List<String> detailsList = new ArrayList<>();
        filePath = propertiesConfig.getDocStorageBasePath() + filePath;
        try (PDDocument document = PDDocument.load(new File(filePath))) {
            PDFTextStripper pdfStripper = new PDFTextStripper();
            pdfStripper.setSortByPosition(true);

            // Iterate through each page
            for (int page = 1; page <= document.getNumberOfPages(); page++) {
                List<String> ccrFoundList = new ArrayList<>();
                pdfStripper.setStartPage(page);
                pdfStripper.setEndPage(page);
                String pageText = pdfStripper.getText(document);

                // Extract CCR and table details
                String[] lines = pageText.split("\\r?\\n");
                String ccrValue = "";
                for (String line : lines) {
                    if (line.contains("CCR/")) {
                        ccrValue = extractCCRNumber(line);
//                        ccrFound = true;
                        ccrFoundList.add("True");
                    }

                    if ((ccrFoundList.size() == 1) && line.matches(".*\\d{4}\\.\\d{2}\\.\\d{2}.*")) {
                        String details = extractDetailsFromLine(line);
                        detailsList.add("CCRno - " + ccrValue + " , " + details);
                    }
                }
                if (ccrFoundList.size() == 1) {
                    pdfStripper.setStartPage(page + 1);
                    pdfStripper.setEndPage(page + 1);
                    String pageContinuousText = pdfStripper.getText(document);
                    // Extract CCR and table details
                    String[] pageContinuousLines = pageContinuousText.split("\\r?\\n");
                    for (String line : pageContinuousLines) {
                        if (line.contains("CCR/")) {
                            ccrFoundList.add("True");
                        }
                        if (ccrFoundList.size() == 2) {
                            break;
                        }
                        if ((ccrFoundList.size() == 1) && line.matches(".*\\d{4}\\.\\d{2}\\.\\d{2}.*")) {
                            String details = extractDetailsFromLine(line);
                            detailsList.add("CCRno - " + ccrValue + " , " + details);
                        }
                    }
                }
            }
        }

        FileWriter fileWriter = new FileWriter("sampleTextFile.txt");
        for (String str : detailsList) {
            fileWriter.write(str + System.lineSeparator());
        }
        fileWriter.close();
        return detailsList;
    }

    private String extractCCRNumber(String line) {
        // Extract the CCR number from the line (Assuming it follows "CCR/")
        int index = line.indexOf("CCR/");
        if (index != -1) {
            String ccrPart = line.substring(index + 4).trim();
            String[] parts = ccrPart.split("\\s+");
            return parts[0]; // Assuming the first part after "CCR/" is the CCR number
        }
        return null;
    }

    private String extractDetailsFromLine(String line) {
        // Extract relevant details from the line
        String[] parts = line.split("\\s+");
        String totalDuty = parts.length > 0 ? parts[0] : "-";
        String dRate = parts.length > 1 ? parts[1] : "-";
        String cifLocalValue = parts.length > 2 ? parts[2] : "-";
        String rate = parts.length > 3 ? parts[3] : "-";
        String type = parts.length > 4 ? parts[4] : "-";
        String foreignValue = parts.length > 5 ? parts[5] : "-";
        String goodsDescription = parts.length > 6 ? parts[6] : "-";
        String hsCode = parts.length > 7 ? parts[parts.length - 1] : "-";
//        String hsCode = parts.length > 7 ? extractHSCode(parts[7]) : "-";

        return String.format("TotalDuty - %s D.Rate - %s CIF Local Value - %s Rate - %s Type - %s ForeignValue - %s GoodsDescription - %s HSCode - %s",
                totalDuty, dRate, cifLocalValue, rate, type, foreignValue, goodsDescription, hsCode);
    }

    private String extractHSCode(String input) {
        Pattern pattern = Pattern.compile("\\d{4}\\.\\d{2}\\.\\d{2}");
        Matcher matcher = pattern.matcher(input);
        if (matcher.find()) {
            return matcher.group();
        }
        return "-";
    }
}

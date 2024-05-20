package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.config.PropertiesConfig;
import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import com.opencsv.exceptions.CsvException;
import com.courier.overc360.api.idmaster.primary.util.DateUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Slf4j
@Service
public class ErrorLogService {

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    PropertiesConfig propertiesConfig;

    private Path fileStorageLocation = null;

    /**
     * Get All ErrorLogs
     *
     * @return
     */
    public List<ErrorLog> getAllErrorLogs() {
        List<ErrorLog> errorLogList = errorLogRepository.findAll();
        return errorLogList;
    }

//    /**
//     * Find ErrorLog
//     *
//     * @param findErrorLog
//     * @return
//     * @throws ParseException
//     */
//    public List<ErrorLog> findErrorLogs(FindErrorLog findErrorLog) throws ParseException {
//
//        if (findErrorLog.getFromLogDate() != null && findErrorLog.getToLogDate() != null) {
//            Date[] dates = DateUtils.addTimeToDatesForSearch(findErrorLog.getFromLogDate(), findErrorLog.getToLogDate());
//            findErrorLog.setFromLogDate(dates[0]);
//            findErrorLog.setToLogDate(dates[1]);
//        }
//
//        ErrorLogSpecification spec = new ErrorLogSpecification(findErrorLog);
//        List<ErrorLog> results = errorLogRepository.findAll(spec);
//        log.info("found ErrorLogs --> " + results);
//        return results;
//    }

    /**
     * @param errorLogList
     * @throws IOException
     * @throws CsvException
     */
    public void writeLog(List<ErrorLog> errorLogList) throws IOException, CsvException {

        String folderPath = propertiesConfig.getErrorLogFolderName();
        this.fileStorageLocation = Paths.get(folderPath).toAbsolutePath().normalize();
        if (!Files.exists(fileStorageLocation)) {
            try {
                Files.createDirectories(this.fileStorageLocation);
            } catch (Exception ex) {
                throw new BadRequestException("Could not create the directory where the uploaded files will be stored");
            }
        }
        log.info("fileStorageLocation --> " + fileStorageLocation);
        FileWriter fout = new FileWriter(this.fileStorageLocation + "/error_log.csv", true);

        // Using custom delimiter and quote character
        CSVWriter csvWriter = new CSVWriter(fout);

        Long lines = noOfLogRecords();
        List<String[]> data = toStringArray(errorLogList, lines);
        csvWriter.writeAll(data);
        csvWriter.close();
    }

    public Long noOfLogRecords() throws IOException, CsvException {
        CSVReader reader = new CSVReader(new FileReader(this.fileStorageLocation + "/error_log.csv"));
        List<String[]> rows = reader.readAll();
        Long size = 0L;
        for (String[] row : rows) {
            size++;
        }
        return size;
    }

    /**
     * @param errorLogList
     * @param lines
     * @return
     */
    private static List<String[]> toStringArray(List<ErrorLog> errorLogList, Long lines) {

        List<String[]> logRecords = new ArrayList<String[]>();
        if (lines < 1) {
            // writing Header record
            logRecords.add(new String[]{"logId", "logDate", "errorMessage", "languageId", "companyId", "refDocNumber", "method",
                    "referenceField1", "referenceField2", "referenceField3", "referenceField4", "referenceField5", "createdBy"});
        }

        Iterator<ErrorLog> it = errorLogList.iterator();
        while (it.hasNext()) {
            ErrorLog errLog = it.next();
            logRecords.add(new String[]{
                    String.valueOf(errLog.getLogId()),
                    DateUtils.convertDateToStr(errLog.getLogDate()),
                    errLog.getErrorMessage(),
                    errLog.getLanguageId(),
                    errLog.getCompanyId(),
                    errLog.getRefDocNumber(),
                    errLog.getMethod(),
                    errLog.getReferenceField1(),
                    errLog.getReferenceField2(),
                    errLog.getReferenceField3(),
                    errLog.getReferenceField4(),
                    errLog.getReferenceField5(),
                    errLog.getCreatedBy()
            });
        }
        return logRecords;
    }

}

package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.model.reports.ConsoleTrackingReportInput;
import com.courier.overc360.api.midmile.primary.model.reports.ConsoleTrackingReportOutput;
import com.courier.overc360.api.midmile.primary.model.reports.LocationSheetInput;
import com.courier.overc360.api.midmile.primary.model.reports.LocationSheetOutput;
import com.courier.overc360.api.midmile.primary.model.reports.MobileDashboard;
import com.courier.overc360.api.midmile.primary.model.reports.MobileDashboardRequest;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.primary.util.DateUtils;
import com.courier.overc360.api.midmile.replica.model.console.ConsoleImpl;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsignmentEntityRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsoleRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaUnconsolidationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Slf4j
@Service
public class ReportsService {

    @Autowired
    private ReplicaUnconsolidationRepository replicaUnconsolidationRepository;

    @Autowired
    private ReplicaConsignmentEntityRepository replicaConsignmentEntityRepository;

    @Autowired
    private ReplicaConsoleRepository replicaConsoleRepository;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    /*---------------------------------------------------------------------------------------------------------------*/

    /**
     * Get Mobile Dashboard
     *
     * @param mobileDashboardRequest
     * @return
     */
    public MobileDashboard getMobileDashboard(MobileDashboardRequest mobileDashboardRequest) {

        MobileDashboard mobileDashboard = new MobileDashboard();
        long consoleCount = replicaConsoleRepository.getMobileDashboardCount(
                mobileDashboardRequest.getLanguageId(), mobileDashboardRequest.getCompanyId(), "5");
        log.info("consoleCount --> {}", consoleCount);
        mobileDashboard.setConsoleCount(consoleCount);
        return mobileDashboard;
    }

    /**
     * Generate Location Sheet
     *
     * @param locationSheetInputList
     * @param loginUserID
     * @return
     */
    public List<LocationSheetOutput> generateLocationSheet(List<LocationSheetInput> locationSheetInputList, String loginUserID) {

//        List<LocationSheetOutput> createdLocationSheetOutputList = new ArrayList<>();
//        for (LocationSheetInput sheetInput : locationSheetInputList) {

        List<LocationSheetOutput> createdLocationSheetOutputList = locationSheetInputList.stream().map(sheetInput -> {

            boolean consolesPresent = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerMasterAirwayBillAndConsoleIdAndDeletionIndicator(
                    sheetInput.getLanguageId(), sheetInput.getCompanyId(), sheetInput.getPartnerMasterAirwayBill(),
                    sheetInput.getConsoleId(), 0L);
            if (!consolesPresent) {
                throw new BadRequestException("No console Data found for given inputs : " + sheetInput);
            }
            log.info("given Inputs to generate locationSheet --> {}", sheetInput);

            LocationSheetOutput sheetOutput = new LocationSheetOutput();
            BeanUtils.copyProperties(sheetInput, sheetOutput, CommonUtils.getNullPropertyNames(sheetInput));

            // Get total Sum of NetWeight and TotalQuantity
            ConsoleImpl sumValues = replicaConsoleRepository.getSumValues(sheetInput.getLanguageId(), sheetInput.getCompanyId(),
                    sheetInput.getPartnerId(), sheetInput.getConsoleId(), sheetInput.getPartnerMasterAirwayBill());
            if (sumValues != null) {
                sheetOutput.setTotalNoOfPieces(sumValues.getTotalQuantity());
                sheetOutput.setTotalSumOfWeights(sumValues.getTotalWeight());
            }

            // Get Location Sheet values
            ConsoleImpl locationSheetValues = replicaConsoleRepository.getLocationSheetValues(sheetInput.getLanguageId(), sheetInput.getCompanyId(),
                    sheetInput.getPartnerId(), sheetInput.getConsoleId(), sheetInput.getPartnerMasterAirwayBill());
            if (locationSheetValues != null) {
                sheetOutput.setLanguageDescription(locationSheetValues.getLangDesc());
                sheetOutput.setCompanyName(locationSheetValues.getCompanyDesc());
                sheetOutput.setPartnerName(locationSheetValues.getPartnerName());
                sheetOutput.setPartnerType(locationSheetValues.getPartnerType());

                sheetOutput.setOrigin(locationSheetValues.getOrigin());
                sheetOutput.setConsigneeName(locationSheetValues.getConsigneeName());
//                sheetOutput.setMasterAirwayBill(locationSheetValues.getMasterAirwayBill());
            }

            sheetOutput.setNatureOfGoods("COURIER MATERIALS");
            sheetOutput.setLocationSheetTimeStamp(new Date());

//            log.info("sheetOutput --> {}", sheetOutput);
            return sheetOutput;
        }).filter(Objects::nonNull).collect(Collectors.toList());

//        }

//        Set<String> uniqueKeyList = new HashSet<>();
//        List<LocationSheetOutput> filteredOutputList = new ArrayList<>();

        Set<String> uniqueKeyList = ConcurrentHashMap.newKeySet();
        List<LocationSheetOutput> filteredOutputList = createdLocationSheetOutputList
                .stream()
                .filter(sheetOutput -> uniqueKeyList.add(generateUniqueKey(sheetOutput)))
                .collect(Collectors.toList());
        log.info("uniqueKeyList --> {}", uniqueKeyList);

//        for (LocationSheetOutput sheetOutput : createdLocationSheetOutputList) {
//            String uniqueKey = generateUniqueKey(sheetOutput);
//            if (!uniqueKeyList.contains(uniqueKey)) {
//                uniqueKeyList.add(uniqueKey);
//                filteredOutputList.add(sheetOutput);
//            }
//        }

        return filteredOutputList;
    }

    private String generateUniqueKey(LocationSheetOutput sheetOutput) {
        String uniqueKey = sheetOutput.getLanguageId() + "-" + sheetOutput.getCompanyId() + "-" + sheetOutput.getPartnerId()
                + "-" + sheetOutput.getPartnerMasterAirwayBill() + "-" + sheetOutput.getConsoleId();
//        log.info("uniqueKey --> {}", uniqueKey);
        return uniqueKey;
    }

    /**
     * Generate Console Tracking Report
     *
     * @param reportInputList
     * @param loginUserID
     * @return
     */
    public List<ConsoleTrackingReportOutput> generateConsoleTrackingReport(List<ConsoleTrackingReportInput> reportInputList,
                                                                           String loginUserID) throws ParseException {

        List<ConsoleTrackingReportOutput> createdConsoleTrackingReportOutputList = new ArrayList<>();

        for (ConsoleTrackingReportInput reportInput : reportInputList) {

            if (reportInput.getFromDate() != null && reportInput.getToDate() != null) {
                Date[] dates = DateUtils.addTimeToDatesForSearch(reportInput.getFromDate(), reportInput.getToDate());
                reportInput.setFromDate(dates[0]);
                reportInput.setToDate(dates[1]);
            }
            log.info("given Inputs to generate ConsoleTrackingReport --> {}", reportInput);

            long noOfShipments = replicaConsignmentEntityRepository.getNoOfShipmentsScanned(
                    reportInput.getLanguageId(), reportInput.getCompanyId(), reportInput.getPartnerId(),
                    reportInput.getPartnerMasterAirwayBill(), 1L, reportInput.getFromDate(), reportInput.getToDate());
            log.info("No Of Shipments Scanned --> {}", noOfShipments);

            long noOfConsoles = replicaConsoleRepository.getNoOfConsoles(
                    reportInput.getLanguageId(), reportInput.getCompanyId(), reportInput.getPartnerId(),
                    reportInput.getPartnerMasterAirwayBill(), 0L, reportInput.getFromDate(), reportInput.getToDate());
            log.info("No Of Consoles --> {}", noOfConsoles);

            long noOfUnconsolidatedShipments = replicaUnconsolidationRepository.getNoOfUnconsolidatedShipments(
                    reportInput.getLanguageId(), reportInput.getCompanyId(), reportInput.getPartnerId(),
                    reportInput.getPartnerMasterAirwayBill(), 1L, reportInput.getFromDate(), reportInput.getToDate());
            log.info("No Of Unconsolidated Shipments --> {}", noOfUnconsolidatedShipments);

            ConsoleTrackingReportOutput reportOutput = new ConsoleTrackingReportOutput();

            reportOutput.setNoOfShipmentsScanned(noOfShipments);
            reportOutput.setNoOfConsoles(noOfConsoles);
            reportOutput.setNoOfUnconsolidatedShipments(noOfUnconsolidatedShipments);

            ConsoleImpl scanValues = replicaConsoleRepository.getScanValues(reportInput.getLanguageId(),
                    reportInput.getCompanyId(), reportInput.getPartnerId(), reportInput.getPartnerMasterAirwayBill());
            log.info("Scanning Officer --> {}", scanValues);
            if (scanValues != null) {
                reportOutput.setScanningOfficer(scanValues.getUpdatedBy());
                reportOutput.setScanningDate(scanValues.getUpdatedOn());
            }

            createdConsoleTrackingReportOutputList.add(reportOutput);
        }
        return createdConsoleTrackingReportOutputList;
    }

    //============================================Reports_ErrorLog=====================================================
    private void createReportLog(List<LocationSheetInput> locationSheetInputs, String error) {

//        List<ErrorLog> errorLogList = new ArrayList<>();
        for (LocationSheetInput sheetInput : locationSheetInputs) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(sheetInput.getLanguageId());
            errorLog.setCompanyId(sheetInput.getCompanyId());
            errorLog.setRefDocNumber(sheetInput.getPartnerMasterAirwayBill());
            errorLog.setMethod("Exception thrown in generateLocationSheet");
            errorLog.setReferenceField1(sheetInput.getConsoleId());
            errorLog.setReferenceField2(sheetInput.getLocation());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
//            errorLogList.add(errorLog);
        }
//        errorLogService.writeLog(errorLogList);
    }

}

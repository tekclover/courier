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
import com.courier.overc360.api.midmile.replica.model.dto.ConsignmentImpl;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsignmentEntityRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsoleRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaPreAlertRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaUnconsolidationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Duration;
import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
public class ReportsService {

    @Autowired
    private ReplicaPreAlertRepository replicaPreAlertRepository;

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

        Set<String> processedKeys = new HashSet<>();
        List<LocationSheetOutput> createdLocationSheetOutputList = new ArrayList<>();

        for (LocationSheetInput sheetInput : locationSheetInputList) {
            String uniqueKey = generateUniqueKey(sheetInput);
            if (processedKeys.contains(uniqueKey)) {
                continue; // Skip this sheetInput if it has already been processed
            }

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
            }

            sheetOutput.setNatureOfGoods("COURIER MATERIALS");
            sheetOutput.setLocationSheetTimeStamp(new Date());

            createdLocationSheetOutputList.add(sheetOutput);
            processedKeys.add(uniqueKey); // Mark this uniqueKey as processed
            log.info("uniqueKey - {}", uniqueKey);
        }

        return createdLocationSheetOutputList;
    }

    private String generateUniqueKey(LocationSheetInput sheetInput) {
        String uniqueKey = "languageId-" + sheetInput.getLanguageId() + "-" + "companyId-" + sheetInput.getCompanyId()
                + "-" + "partnerId-" + sheetInput.getPartnerId() + "-" + "consoleId-" + sheetInput.getConsoleId()
                + "-" + "partnerMasterAirwayBill-" + sheetInput.getPartnerMasterAirwayBill();
        return uniqueKey;
    }

    private List<String> getNonNullStringList(List<String> stringList) {
        return stringList != null ? stringList : Collections.singletonList(null);
    }

    /**
     * Generate Console Tracking Report
     *
     * @param reportInput
     * @param loginUserID
     * @return
     */
    public List<ConsoleTrackingReportOutput> generateConsoleTracking(ConsoleTrackingReportInput reportInput,
                                                                     String loginUserID) throws ParseException {
        Instant startTime = Instant.now();
        List<ConsoleTrackingReportOutput> createdConsoleTrackingOutputList = new ArrayList<>();

        if (reportInput.getLanguageId() == null || reportInput.getCompanyId() == null) {
            throw new BadRequestException("LanguageId or companyId cannot be null");
        }

        List<String> langIdList = getNonNullStringList(reportInput.getLanguageId());
        List<String> cIdList = getNonNullStringList(reportInput.getCompanyId());
//        List<String> pIdList = getNonNullStringList(reportInput.getPartnerId());
        List<String> pMawbList = getNonNullStringList(reportInput.getPartnerMasterAirwayBill());
        List<String> pHawbList = getNonNullStringList(reportInput.getPartnerHouseAirwayBill());

        if (reportInput.getFromDate() != null && reportInput.getToDate() != null) {
            Date[] dates = DateUtils.addTimeToDatesForSearch(reportInput.getFromDate(), reportInput.getToDate());
            reportInput.setFromDate(dates[0]);
            reportInput.setToDate(dates[1]);
        }

        log.info("given Inputs to generate ConsoleTracking --> {}", reportInput);

        if ((reportInput.getLanguageId() != null && reportInput.getCompanyId() != null) &&
                (reportInput.getPartnerMasterAirwayBill() == null && reportInput.getPartnerHouseAirwayBill() == null)) {

            createdConsoleTrackingOutputList = postConsoleTrackingListPage(langIdList, cIdList, loginUserID);

        } else {

            for (String langId : langIdList) {
                for (String cId : cIdList) {
//                    for (String pId : pIdList) {
                    for (String pMawb : pMawbList) {
                        for (String pHawb : pHawbList) {

                            if (pMawbList != null && pHawbList != null) {
                                boolean isPresent = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator(
                                        langId, cId, pMawb, pHawb, 0L);
                                if (!isPresent) {
                                    log.info("No data found for given partnerMasterAirwayBill : {}, partnerHouseAirwayBill : {}", pMawb, pHawb);
                                    continue;
                                }
                            }

                            long noOfShipments = replicaPreAlertRepository.getNoOfShipmentsScanned(
                                    langId, cId, pMawb, pHawb,
                                    reportInput.getFromDate(), reportInput.getToDate());

                            long noOfConsoles = replicaConsoleRepository.getNoOfConsoles(
                                    langId, cId, pMawb, pHawb, 0L,
                                    reportInput.getFromDate(), reportInput.getToDate());

                            long noOfUnconsolidatedShipments = replicaUnconsolidationRepository.getNoOfUnconsolidatedShipments(
                                    langId, cId, pMawb, pHawb, 1L,
                                    reportInput.getFromDate(), reportInput.getToDate());

                            ConsoleImpl scanValues = replicaConsoleRepository.getScanValues(langId, cId, pMawb, pHawb);

                            if (noOfShipments != 0 || noOfConsoles != 0 || noOfUnconsolidatedShipments != 0) {

                                ConsoleTrackingReportOutput reportOutput = new ConsoleTrackingReportOutput();

                                reportOutput.setLanguageId(langId);
                                reportOutput.setCompanyId(cId);
//                                    reportOutput.setPartnerId(pId);
                                reportOutput.setPartnerMasterAirwayBill(pMawb);
                                reportOutput.setPartnerHouseAirwayBill(pHawb);

                                log.info("No Of Shipments Scanned --> {}", noOfShipments);
                                reportOutput.setNoOfShipmentsScanned(noOfShipments);

                                log.info("No Of Consoles --> {}", noOfConsoles);
                                reportOutput.setNoOfConsoles(noOfConsoles);

                                log.info("No Of Unconsolidated Shipments --> {}", noOfUnconsolidatedShipments);
                                reportOutput.setNoOfUnconsolidatedShipments(noOfUnconsolidatedShipments);

                                if (scanValues != null) {
                                    reportOutput.setScanningOfficer(scanValues.getScannedBy());
                                    reportOutput.setScanningDate(scanValues.getScannedOn());
                                }

                                createdConsoleTrackingOutputList.add(reportOutput);
                            }
                        }
                    }
//                    }
                }
            }
        }
        Instant endTime = Instant.now();
        log.info("Time to load ConsoleTracking --> {}ms", Duration.between(startTime, endTime).toMillis());
        return createdConsoleTrackingOutputList;
    }

    public List<ConsoleTrackingReportOutput> postConsoleTrackingListPage(List<String> languageIdList, List<String> companyIdList,
                                                                         String loginUserID) throws ParseException {
        List<ConsoleTrackingReportOutput> createdConsoleTrackingOutputList = new ArrayList<>();

        List<ConsignmentImpl> allPMawbValuesList = replicaPreAlertRepository.getAllPMawbCount(languageIdList, companyIdList);
        if (allPMawbValuesList != null && !allPMawbValuesList.isEmpty()) {

            List<Object[]> consoleCountResults = replicaConsoleRepository.getConsoleCountByPMawb(languageIdList, companyIdList);
            List<Object[]> unconsolidatedCountResults = replicaUnconsolidationRepository.getUnconsolidatedCountByPMawb(languageIdList, companyIdList);

            Map<String, Long> consoleCountMap = convertToMap(consoleCountResults);
            Map<String, Long> unconsolidatedCountMap = convertToMap(unconsolidatedCountResults);

//            for (ConsignmentImpl pMawbValues : allPMawbValuesList) {
////                boolean isLAndCPresent = replicaPreAlertRepository.existsByLanguageIdAndCompanyIdAndDeletionIndicator(
////                        pMawbValues.getLanguageId(), pMawbValues.getCompanyId(), 0L);
////                if (isLAndCPresent) {
//                String pMawb = pMawbValues.getPartnerMasterAirwayBill();
//                String key = pMawb + "_" + pMawbValues.getLanguageId() + "_" + pMawbValues.getCompanyId();
//
//                long consolesCount = consoleCountMap.getOrDefault(key, 0L);
//                long unconsolidatedCount = unconsolidatedCountMap.getOrDefault(key, 0L);
//
//                ConsoleTrackingReportOutput reportOutput = new ConsoleTrackingReportOutput();
//                reportOutput.setLanguageId(pMawbValues.getLanguageId());
//                reportOutput.setCompanyId(pMawbValues.getCompanyId());
//                reportOutput.setPartnerMasterAirwayBill(pMawb);
//                reportOutput.setNoOfShipmentsScanned(pMawbValues.getPMawbCount());
//                reportOutput.setNoOfConsoles(consolesCount);
//                reportOutput.setNoOfUnconsolidatedShipments(unconsolidatedCount);
//
//                createdConsoleTrackingOutputList.add(reportOutput);
////                }
//            }
//        }
            createdConsoleTrackingOutputList = allPMawbValuesList
                    .stream()
                    .map(pMawbValues -> {
                        String pMawb = pMawbValues.getPartnerMasterAirwayBill();
                        String key = pMawb + "_" + pMawbValues.getLanguageId() + "_" + pMawbValues.getCompanyId();
                        long consolesCount = consoleCountMap.getOrDefault(key, 0L);
                        long unconsolidatedCount = unconsolidatedCountMap.getOrDefault(key, 0L);

                        ConsoleTrackingReportOutput reportOutput = new ConsoleTrackingReportOutput();
                        reportOutput.setLanguageId(pMawbValues.getLanguageId());
                        reportOutput.setCompanyId(pMawbValues.getCompanyId());
                        reportOutput.setPartnerMasterAirwayBill(pMawb);
                        reportOutput.setNoOfShipmentsScanned(pMawbValues.getPMawbCount());
                        reportOutput.setNoOfConsoles(consolesCount);
                        reportOutput.setNoOfUnconsolidatedShipments(unconsolidatedCount);

                        return reportOutput;
                    })
                    .collect(Collectors.toList());
        }
        return createdConsoleTrackingOutputList;
    }

    private Map<String, Long> convertToMap(List<Object[]> results) {
        return results
                .stream()
                .collect(Collectors.toMap(
                        result -> result[0] + "_" + result[1] + "_" + result[2],
                        result -> ((Number) result[3]).longValue()
                ));
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

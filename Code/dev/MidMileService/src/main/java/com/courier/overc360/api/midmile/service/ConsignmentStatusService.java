package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.consignmentstatus.AddConsignmentStatus;
import com.courier.overc360.api.midmile.primary.model.consignmentstatus.ConsignmentStatus;
import com.courier.overc360.api.midmile.primary.model.consignmentstatus.UpdateConsignmentStatus;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.repository.ConsignmentStatusRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.consignmentstatus.FindConsignmentStatus;
import com.courier.overc360.api.midmile.replica.model.consignmentstatus.ReplicaConsignmentStatus;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsignmentStatusRepository;
import com.courier.overc360.api.midmile.replica.repository.specification.ReplicaConsignmentStatusSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
public class ConsignmentStatusService {

    @Autowired
    private ConsignmentStatusRepository consignmentStatusRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ReplicaConsignmentStatusRepository replicaConsignmentStatusRepository;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    /*---------------------------------------------------PRIMARY-----------------------------------------------------*/

    /**
     * Get ConsignmentStatus
     *
     * @param languageId
     * @param companyId
     * @param houseAirwayBill
     * @param pieceId
     * @return
     */
    public ConsignmentStatus getConsignmentStatus(String languageId, String companyId, String houseAirwayBill, String pieceId) {

        Optional<ConsignmentStatus> dbConsignmentStatus = consignmentStatusRepository.findByLanguageIdAndCompanyIdAndHouseAirwayBillAndPieceIdAndDeletionIndicator(
                languageId, companyId, houseAirwayBill, pieceId, 0L);
        if (dbConsignmentStatus.isEmpty()) {
            String errMsg = "The given values - languageId: " + languageId + ", companyId: " + companyId + ", houseAirwayBill: " + houseAirwayBill +
                    ", pieceId: " + pieceId + " doesn't exists";
            // Error Log
            getConsignmentStatusLog(languageId, companyId, houseAirwayBill, pieceId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsignmentStatus.get();
    }

    @Transactional
    public void insertConsignmentStatusRecord(String languageId, String languageDesc, String companyId, String companyName,
                                              String pieceId, String masterAirwayBill, String houseAirwayBill,
                                              String hawbType, String hawbTypeId, String hawbTypeDescription, Date hawbTimeStamp,
                                              String pieceType, String pieceTypeId, String pieceTypeDescription, Date pieceTimeStamp,
                                              String loginUserID, String partnerHouseAirwayBill, String partnerMasterAirwayBill) {
        try {
            if (languageId != null && companyId != null && pieceId != null && houseAirwayBill != null) {
                ConsignmentStatus newConsignmentStatus = new ConsignmentStatus();

                Long statusId = consignmentStatusRepository.statusId();

                if(statusId == null || statusId == 0) {
                    statusId = 1L;
                } else {
                    statusId ++;
                }
                newConsignmentStatus.setConsignmentStatusId(statusId);
                newConsignmentStatus.setLanguageId(languageId);
                newConsignmentStatus.setLanguageDescription(languageDesc);
                newConsignmentStatus.setCompanyId(companyId);
                newConsignmentStatus.setCompanyName(companyName);

                newConsignmentStatus.setPieceId(pieceId);
                newConsignmentStatus.setPartnerHouseAirwayBill(partnerHouseAirwayBill);
                newConsignmentStatus.setPartnerMasterAirwayBill(partnerMasterAirwayBill);
                newConsignmentStatus.setMasterAirwayBill(masterAirwayBill);
                newConsignmentStatus.setHouseAirwayBill(houseAirwayBill);

                newConsignmentStatus.setHawbType(hawbType);
                newConsignmentStatus.setHawbTypeId(hawbTypeId);
                newConsignmentStatus.setHawbTypeDescription(hawbTypeDescription);
                newConsignmentStatus.setHawbTimeStamp(hawbTimeStamp);

                newConsignmentStatus.setPieceType(pieceType);
                newConsignmentStatus.setPieceTypeId(pieceTypeId);
                newConsignmentStatus.setPieceTypeDescription(pieceTypeDescription);
                newConsignmentStatus.setPieceTimeStamp(pieceTimeStamp);

                newConsignmentStatus.setDeletionIndicator(0L);
                newConsignmentStatus.setCreatedBy(loginUserID);
                newConsignmentStatus.setCreatedOn(new Date());
                newConsignmentStatus.setUpdatedBy(loginUserID);
                newConsignmentStatus.setUpdatedOn(new Date());
                consignmentStatusRepository.save(newConsignmentStatus);
                log.info("Consignment Status Table save {}", houseAirwayBill);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    /**
     * Create ConsignmentStatus using params
     *
     * @param companyId
     * @param languageId
     * @param pieceId
     * @param statusId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param statusText
     * @param pieceStatusId
     * @param pieceStatusText
     * @param eventCode
     * @param eventText
     * @param pieceEventCode
     * @param pieceEventText
     * @param pieceEventTimestamp
     * @param eventTimestamp
     * @param statusTimestamp
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public void createConsignmentStatusParams(String companyId, String companyName, String languageId, String languageDesc,
                                              String pieceId, String statusId, String masterAirwayBill, String houseAirwayBill,
                                              String statusText, String pieceStatusId, String pieceStatusText, String eventCode,
                                              String eventText, String pieceEventCode, String pieceEventText, Date pieceEventTimestamp,
                                              Date eventTimestamp, Date statusTimestamp, String loginUserID) {
        try {
            if (companyId != null && pieceId != null && languageId != null && houseAirwayBill != null && statusId != null && eventCode != null) {
                ConsignmentStatus newConsignmentStatus = new ConsignmentStatus();
                newConsignmentStatus.setCompanyId(companyId);
                newConsignmentStatus.setCompanyName(companyName);
                newConsignmentStatus.setLanguageId(languageId);
                newConsignmentStatus.setLanguageDescription(languageDesc);
                newConsignmentStatus.setPieceId(pieceId);
//                newConsignmentStatus.setStatusId(statusId);
                newConsignmentStatus.setMasterAirwayBill(masterAirwayBill);
                newConsignmentStatus.setHouseAirwayBill(houseAirwayBill);
//                newConsignmentStatus.setStatusText(statusText);
//                newConsignmentStatus.setEventCode(eventCode);
//                newConsignmentStatus.setPieceStatusId(pieceStatusId);
//                newConsignmentStatus.setPieceStatusText(pieceStatusText);
//                newConsignmentStatus.setEventText(eventText);
//                newConsignmentStatus.setPieceEventCode(pieceEventCode);
//                newConsignmentStatus.setPieceEventText(pieceEventText);
//                newConsignmentStatus.setPieceEventTimestamp(pieceEventTimestamp);
//                newConsignmentStatus.setEventTimestamp(eventTimestamp);
//                newConsignmentStatus.setStatusTimestamp(statusTimestamp);

                newConsignmentStatus.setDeletionIndicator(0L);
                newConsignmentStatus.setCreatedBy(loginUserID);
                newConsignmentStatus.setCreatedOn(new Date());
                newConsignmentStatus.setUpdatedBy(loginUserID);
                newConsignmentStatus.setUpdatedOn(new Date());
                consignmentStatusRepository.save(newConsignmentStatus);
                log.info("Consignment Status Table save {}", houseAirwayBill);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Create ConsignmentStatus
     *
     * @param addConsignmentStatus
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public ConsignmentStatus createConsignmentStatus(AddConsignmentStatus addConsignmentStatus, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Optional<ConsignmentStatus> dbConsignmentStatus = consignmentStatusRepository.findByLanguageIdAndCompanyIdAndHouseAirwayBillAndPieceIdAndDeletionIndicator(
                    addConsignmentStatus.getLanguageId(), addConsignmentStatus.getCompanyId(), addConsignmentStatus.getHouseAirwayBill(),
                    addConsignmentStatus.getPieceId(), 0L);

            // Check if duplicate record exists
            if (dbConsignmentStatus.isPresent()) {
                throw new BadRequestException("Record is getting duplicated with the given values : houseAirwayBill - " + addConsignmentStatus.getHouseAirwayBill());
            }
            log.info("new Consignment status --> {}", addConsignmentStatus);

            ConsignmentStatus newConsignmentStatus = new ConsignmentStatus();
            BeanUtils.copyProperties(addConsignmentStatus, newConsignmentStatus, CommonUtils.getNullPropertyNames(addConsignmentStatus));

            newConsignmentStatus.setDeletionIndicator(0L);
            newConsignmentStatus.setCreatedBy(loginUserID);
            newConsignmentStatus.setCreatedOn(new Date());
            newConsignmentStatus.setUpdatedBy(loginUserID);
            newConsignmentStatus.setUpdatedOn(new Date());
            return consignmentStatusRepository.save(newConsignmentStatus);
        } catch (Exception e) {
            // Error Log
            createConsignmentStatusLog(addConsignmentStatus, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }

    }

    /**
     * Update ConsignmentStatus
     *
     * @param languageId
     * @param companyId
     * @param houseAirwayBill
     * @param pieceId
     * @return
     */
    @Transactional
    public ConsignmentStatus updateConsignmentStatus(String languageId, String companyId, String houseAirwayBill, String pieceId,
                                                     UpdateConsignmentStatus updateConsignmentStatus, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {

        try {
            ConsignmentStatus dbConsignmentStatus = getConsignmentStatus(languageId, companyId, houseAirwayBill, pieceId);
            BeanUtils.copyProperties(updateConsignmentStatus, dbConsignmentStatus, CommonUtils.getNullPropertyNames(updateConsignmentStatus));
            dbConsignmentStatus.setUpdatedBy(loginUserID);
            dbConsignmentStatus.setUpdatedOn(new Date());
            return consignmentStatusRepository.save(dbConsignmentStatus);
        } catch (Exception e) {
            // Error Log
            updateConsignmentStatusLog(languageId, companyId, houseAirwayBill, pieceId, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }

    }

    /**
     * Delete ConsignmentDetails
     *
     * @param languageId
     * @param companyId
     * @param houseAirwayBill
     * @param pieceId
     * @param loginUserID
     */
    public void deleteConsignmentDetails(String languageId, String companyId, String houseAirwayBill, String pieceId, String loginUserID) {

        ConsignmentStatus dbConsignmentStatus = getConsignmentStatus(languageId, companyId, houseAirwayBill, pieceId);
        if (dbConsignmentStatus != null) {
            dbConsignmentStatus.setDeletionIndicator(1L);
            dbConsignmentStatus.setUpdatedBy(loginUserID);
            dbConsignmentStatus.setUpdatedOn(new Date());
            consignmentStatusRepository.save(dbConsignmentStatus);
        } else {
            // Error Log
            deleteConsignmentLog(languageId, companyId, houseAirwayBill, pieceId, "Error in deleting houseAirwayBill type - " + houseAirwayBill);
            throw new BadRequestException("Error in deleting houseAirwayBill type - " + houseAirwayBill);
        }
    }
    /*=================================================REPLICA=============================================================*/

    /**
     * Get all ConsignmentStatus
     *
     * @return
     */
    public List<ReplicaConsignmentStatus> getAllConsignmentStatus() {
        List<ReplicaConsignmentStatus> consignmentStatusList = replicaConsignmentStatusRepository.findAll();
        consignmentStatusList = consignmentStatusList.stream().filter(n -> n.getDeletionIndicator() == 0).collect(Collectors.toList());
        return consignmentStatusList;
    }

    /**
     * Get ConsignmentStatus
     *
     * @param languageId
     * @param companyId
     * @param houseAirwayBill
     * @param pieceId
     * @return
     */
    public ReplicaConsignmentStatus getReplicaConsignmentStatus(String languageId, String companyId, String houseAirwayBill, String pieceId) {

        Optional<ReplicaConsignmentStatus> dbConsignmentStatus =
                replicaConsignmentStatusRepository.findByLanguageIdAndCompanyIdAndHouseAirwayBillAndPieceIdAndDeletionIndicator(
                        languageId, companyId, houseAirwayBill, pieceId, 0L);
        if (dbConsignmentStatus.isEmpty()) {
            String errMsg = "The given values - languageId: " + languageId + ", companyId: " + companyId + ", houseAirwayBill: " + houseAirwayBill +
                    ", pieceId: " + pieceId + " doesn't exists";
            // Error Log
            getConsignmentStatusLog(languageId, companyId, houseAirwayBill, pieceId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsignmentStatus.get();
    }

    /**
     * Find ConsignmentStatus
     *
     * @param findConsignmentStatus
     * @return
     */
    public List<ReplicaConsignmentStatus> findConsignmentStatus(FindConsignmentStatus findConsignmentStatus) throws ParseException {

        log.info("given params for find --> {}", findConsignmentStatus);
        ReplicaConsignmentStatusSpecification spec = new ReplicaConsignmentStatusSpecification(findConsignmentStatus);
        List<ReplicaConsignmentStatus> results = replicaConsignmentStatusRepository.findAll(spec);
        log.info("found ConsignmentStatus --> {}", results);
        return results;
    }

    //==========================================ConsignmentStatus_ErrorLog================================================
    // getConsignmentStatus errorLog
    private void getConsignmentStatusLog(String languageId, String companyId, String houseAirwayBill,
                                         String pieceId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(houseAirwayBill);
        errorLog.setMethod("Exception thrown in getConsignmentStatus");
        errorLog.setReferenceField1(pieceId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    //createConsignmentStatus errorLog
    private void createConsignmentStatusLog(AddConsignmentStatus addConsignmentStatus, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addConsignmentStatus.getLanguageId());
        errorLog.setCompanyId(addConsignmentStatus.getCompanyId());
        errorLog.setRefDocNumber(addConsignmentStatus.getHouseAirwayBill());
        errorLog.setMethod("Exception thrown in createConsignmentStatus");
        errorLog.setReferenceField1(addConsignmentStatus.getPieceId());
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    //updateConsignmentStatus errorLog
    private void updateConsignmentStatusLog(String languageId, String companyId, String houseAirwayBill,
                                            String pieceId, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(houseAirwayBill);
        errorLog.setMethod("Exception thrown in updateConsignmentStatus");
        errorLog.setReferenceField1(pieceId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    //deleteConsignment errorLog
    private void deleteConsignmentLog(String languageId, String companyId, String houseAirwayBill, String pieceId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(houseAirwayBill);
        errorLog.setMethod("Exception thrown in deleteConsignmentStatus");
        errorLog.setReferenceField1(pieceId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

}

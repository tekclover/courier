package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.console.*;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.repository.BondedManifestHeaderRepository;
import com.courier.overc360.api.midmile.primary.repository.BondedManifestLineRepository;
import com.courier.overc360.api.midmile.primary.repository.ConsoleRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaAddConsignment;
import com.courier.overc360.api.midmile.replica.model.console.FindConsole;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsoleRepository;
import com.courier.overc360.api.midmile.replica.repository.specification.ConsoleSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
public class ConsoleService {

    @Autowired
    private ConsoleRepository consoleRepository;

    @Autowired
    private ReplicaConsoleRepository replicaConsoleRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogService errorLogService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private BondedManifestLineRepository bondedManifestLineRepository;

    /*---------------------------------------------------PRIMARY-----------------------------------------------------*/

    /**
     * Get Console
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param consoleId
     * @return
     */
    private Console getConsole(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String consoleId) {
        Optional<Console> dbConsole = consoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndDeletionIndicator(
                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, 0L);
        if (dbConsole.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill
                    + ", houseAirwayBill - " + houseAirwayBill + " and consoleId - " + consoleId + " doesn't exists";
            // Error Log
            createConsoleLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsole.get();
    }

    /**
     * Create Console
     *
     * @param addConsoleList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public List<Console> createConsole(List<AddConsole> addConsoleList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Console> createdConsoleList = new ArrayList<>();

            for (AddConsole addConsole : addConsoleList) {

                boolean duplicateConsole = replicaConsoleRepository.duplicateExists(
                        addConsole.getLanguageId(), addConsole.getCompanyId(),
                        addConsole.getPartnerId(), addConsole.getMasterAirwayBill(),
                        addConsole.getHouseAirwayBill()) == 1;
                if (duplicateConsole) {
                    throw new BadRequestException("Record is getting Duplicated with given values : houseAirwayBill - " + addConsole.getHouseAirwayBill());
                }

                Console newConsole = new Console();
                BeanUtils.copyProperties(addConsole, newConsole, CommonUtils.getNullPropertyNames(addConsole));

                String STATUS_ID = "2 - Console Created";

                String NUM_RAN_OBJ = "CONSOLE_ID";
                String CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                log.info("next Value from NumberRange for CONSOLE_ID : " + CONSOLE_ID);
                newConsole.setConsoleId(CONSOLE_ID);

                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
                        addConsole.getLanguageId(), addConsole.getCompanyId());

                if (lAndCDesc != null) {
                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
                }
                newConsole.setStatusId(STATUS_ID);
                newConsole.setDeletionIndicator(0L);
                newConsole.setCreatedBy(loginUserID);
                newConsole.setCreatedOn(new Date());
                newConsole.setUpdatedBy(loginUserID);
                newConsole.setUpdatedOn(new Date());

                Console createdConsole = consoleRepository.save(newConsole);
                createdConsoleList.add(createdConsole);
            }
            return createdConsoleList;
        } catch (Exception e) {
            // Error Log
            createConsoleLog2(addConsoleList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * @param addConsoleList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    public List<Console> createConsoleList(List<AddConsole> addConsoleList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        List<Console> createdConsoleList = new ArrayList<>();
        // Create a map to group consignments by hsCode
        Map<String, List<AddConsole>> groupedByHsCode = addConsoleList.stream()
                .collect(Collectors.groupingBy(AddConsole::getHsCode));


        // Iterate over the grouped consignments
        for (Map.Entry<String, List<AddConsole>> entry : groupedByHsCode.entrySet()) {
            String hsCode = entry.getKey();
            List<AddConsole> consoleList = entry.getValue();
            // 100 record above create another console

            for (AddConsole console : consoleList) {
                boolean duplicateConsole = replicaConsoleRepository.duplicateExists(
                        console.getLanguageId(), console.getCompanyId(),
                        console.getPartnerId(), console.getMasterAirwayBill(),
                        console.getHouseAirwayBill()) == 1;
                if (duplicateConsole) {
                    throw new BadRequestException("Record is getting Duplicated with given values : houseAirwayBill - " + console.getHouseAirwayBill());
                }

                // Pass ConsignmentCurrency
                IKeyValuePair iKeyValuePair = bondedManifestLineRepository.getToCurrencyValue(console.getConsignmentCurrency());

                Console newConsole = new Console();
                BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));

                String STATUS_ID = "2 - Console Created";
                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
                        console.getLanguageId(), console.getCompanyId());

                if (lAndCDesc != null) {
                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
                }

                //Customs Value set multiply formula
                String CUS_VAL = null;
                if (console.getConsignmentValue() != null && iKeyValuePair.getCurrencyValue() != null) {
                    Double CON_VAL = Double.valueOf(console.getConsignmentValue());
                    Double CURR_VAL = Double.valueOf(iKeyValuePair.getCurrencyValue());
                    CUS_VAL = String.valueOf(CON_VAL * CURR_VAL);
                }

                // Set TotalDuty Value
                IKeyValuePair iKeyValue = bondedManifestLineRepository.getToCurrencyValue(console.getFreightCurrency());
                Double freightCharge = Double.valueOf(console.getFreightCharges());
                String incoTerms = console.getIncoTerms();

                Double totalDuty = null;
                if (iKeyValue.getCurrencyValue() != null) {
                    Double toCurrencyValue = Double.valueOf(iKeyValue.getCurrencyValue());
                    if (toCurrencyValue != null && freightCharge != null) {
                        totalDuty = toCurrencyValue * freightCharge;
                        if (totalDuty > 100) {
                            totalDuty += totalDuty * 0.05;
                        }
                        if (incoTerms != null && incoTerms.equalsIgnoreCase("DDU")) {
                            totalDuty += 4;
                        }
                    }
                }

                newConsole.setExpectedDuty(String.valueOf(totalDuty));
                newConsole.setCustomsValue(CUS_VAL);
                newConsole.setCustomsCurrency(iKeyValuePair.getCurrencyId());
                newConsole.setConsoleId(hsCode);
                newConsole.setStatusId(STATUS_ID);
                newConsole.setDeletionIndicator(0L);
                newConsole.setCreatedBy(loginUserID);
                newConsole.setCreatedOn(new Date());
                newConsole.setUpdatedBy(loginUserID);
                newConsole.setUpdatedOn(new Date());

                Console createdConsole = consoleRepository.save(newConsole);
                createdConsoleList.add(createdConsole);
            }
        }

        return createdConsoleList;
    }

    // /**
    //     * Create Console
    //     *
    //     * @param addConsoleList
    //     * @param loginUserID
    //     * @return
    //     * @throws IllegalAccessException
    //     * @throws InvocationTargetException
    //     * @throws IOException
    //     * @throws CsvException
    //     */
    //    @Transactional
    //    public List<Console> createConsole(List<AddConsole> addConsoleList, String loginUserID)
    //            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
    //        try {
    //            List<Console> createdConsoleList = new ArrayList<>();
    //
    //            for (AddConsole addConsole : addConsoleList) {
    //
    //                boolean duplicateConsole = replicaConsoleRepository.duplicateExists(
    //                        addConsole.getLanguageId(), addConsole.getCompanyId(),
    //                        addConsole.getPartnerId(), addConsole.getMasterAirwayBill(),
    //                        addConsole.getHouseAirwayBill()) == 1;
    //                if (duplicateConsole) {
    //                    throw new BadRequestException("Record is getting Duplicated with given values : houseAirwayBill - " + addConsole.getHouseAirwayBill());
    //                }
    //
    //                Console newConsole = new Console();
    //                BeanUtils.copyProperties(addConsole, newConsole, CommonUtils.getNullPropertyNames(addConsole));
    //
    //                String STATUS_ID = "2 - Console Created";
    //
    //                String NUM_RAN_OBJ = "CONSOLE_ID";
    //                String CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
    //                log.info("next Value from NumberRange for CONSOLE_ID : " + CONSOLE_ID);
    //                newConsole.setConsoleId(CONSOLE_ID);
    //
    //                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
    //                        addConsole.getLanguageId(), addConsole.getCompanyId());
    //
    //                if (lAndCDesc != null) {
    //                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
    //                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
    //                }
    //                newConsole.setStatusId(STATUS_ID);
    //                newConsole.setDeletionIndicator(0L);
    //                newConsole.setCreatedBy(loginUserID);
    //                newConsole.setCreatedOn(new Date());
    //                newConsole.setUpdatedBy(loginUserID);
    //                newConsole.setUpdatedOn(new Date());
    //
    //                Console createdConsole = consoleRepository.save(newConsole);
    //                createdConsoleList.add(createdConsole);
    //            }
    //            return createdConsoleList;
    //        } catch (Exception e) {
    //            // Error Log
    //            createConsoleLog2(addConsoleList, e.toString());
    //            e.printStackTrace();
    //            throw new RuntimeException(e);
    //        }
    //    }


//    /**
//     * CreateConsole
//     *
//     * @param replicaAddConsignment
//     * @param loginUserID
//     * @return
//     */
//    public List<Console> createConsoleInConsign(List<ReplicaAddConsignment> replicaAddConsignment, String loginUserID) {
//        // Create a map to group consignments by hsCode
//        Map<String, List<ReplicaAddConsignment>> groupedByHsCode = replicaAddConsignment.stream()
//                .collect(Collectors.groupingBy(ReplicaAddConsignment::getHsCode));
//
//        // Create a list to hold the Console objects
//        List<Console> consoles = new ArrayList<>();
//
//        // Iterate over the grouped consignments
//        for (Map.Entry<String, List<ReplicaAddConsignment>> entry : groupedByHsCode.entrySet()) {
//            String hsCode = entry.getKey();
//            List<ReplicaAddConsignment> consignments = entry.getValue();
//
//            for(ReplicaAddConsignment con : consignments) {
//                Console console = new Console();
//
//                BeanUtils.copyProperties(con, console, CommonUtils.getNullPropertyNames(con));
//                console.setConsoleId(hsCode);
//                console.setCreatedBy(loginUserID);
//                console.setCreatedOn(new Date());
//                console.setUpdatedBy(loginUserID);
//                console.setUpdatedOn(new Date());
////                console.setConsoleId(hsCode);
////                console.setCompanyId(con.getCompanyId());
//////                console.setLanguageId(con.getLanguageId());
////                console.setHouseAirwayBill(con.getHouseAirwayBill());
////                console.setMasterAirwayBill(con.getMasterAirwayBill());
////                console.setPartnerId(con.getPartnerId());
////                console.setPartnerMasterAirwayBill(con.getPartnerMasterAirwayBill());
////                console.setPartnerHouseAirwayBill(con.getPartnerHouseAirwayBill());
////                console.setPartnerName(con.getPartnerName());
////                console.setPartnerType(con.getPartnerType());
////                console.setHsCode(con.getHsCode());
//////                console.setNoOfPieceHawb(con.getNoOfPieceHawb());
//////                console.setNoOfPackageMawb(con.getNoOfPackageMawb());
////                console.setGrossWeight(con.getGrossWeight());
//////                console.setTareWeight(con.getTareWeight());
//////                console.setManifestedQuantity(con.getManifestedQuantity());
////                console.setTotalQuantity(con.getTotalQuantity());
////                console.setVolume(con.getVolume());
////                console.setFinalDestination(con.getDescription());
////                console.setNotifyParty(con.getNotifyParty());
////                console.setConsigneeName(con.getConsigneeName());
////                console.setShipperName(con.getShipperName());
////                console.setRemarks(con.getRemark());
////                console.setIsConsolidatedShipment(con.getIsConsolidatedShipment());
////                console.setIsSplitBillOfLading(con.getIsSplitBillOfLading());
////                console.setIsPendingShipment(con.getIsPendingShipment());
////                console.setGoodsType(con.getGoodsType());
////                console.setCountryOfOrigin(con.getCountryOfOrigin());
////                console.setConsignmentCurrency(con.getConsignementCurrency());
////                console.setConsignmentValue();
////
////                console.setHouseAirwayBill();
////                console.setConsignments(consignments);
//                    Console savedConsole = consoleRepository.save(console);
//                // Add the console object to the list
//                consoles.add(savedConsole);
//            }
//        }
//
//        return consoles;
//    }

    /**
     * Update Console
     *
     * @param updateConsoleList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     */
    @Transactional
    public List<Console> updateConsole(List<UpdateConsole> updateConsoleList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Console> updatedConsoleList = new ArrayList<>();

            for (UpdateConsole updateConsole : updateConsoleList) {

                Console dbConsole = getConsole(
                        updateConsole.getLanguageId(), updateConsole.getCompanyId(),
                        updateConsole.getPartnerId(), updateConsole.getMasterAirwayBill(),
                        updateConsole.getHouseAirwayBill(), updateConsole.getConsoleId());


                BeanUtils.copyProperties(updateConsole, dbConsole, CommonUtils.getNullPropertyNames(updateConsole));
                dbConsole.setUpdatedBy(loginUserID);
                dbConsole.setUpdatedOn(new Date());

                Console updatedConsole = consoleRepository.save(dbConsole);
                updatedConsoleList.add(updatedConsole);
            }
            return updatedConsoleList;
        } catch (
                Exception e) {

            // Error Log
            createConsoleLog3(updateConsoleList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete Console
     *
     * @param deleteInputList
     * @param loginUserID
     */
    @Transactional
    public void deleteConsole(List<ConsoleDeleteInput> deleteInputList, String loginUserID) throws
            IOException, CsvException {
        try {
            if (deleteInputList != null || !deleteInputList.isEmpty()) {
                for (ConsoleDeleteInput deleteInput : deleteInputList) {

                    Console dbConsole = getConsole(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                            deleteInput.getPartnerId(), deleteInput.getMasterAirwayBill(), deleteInput.getHouseAirwayBill(), deleteInput.getConsoleId());

                    if (dbConsole != null) {
                        dbConsole.setDeletionIndicator(1L);
                        dbConsole.setUpdatedBy(loginUserID);
                        dbConsole.setUpdatedOn(new Date());


                        consoleRepository.save(dbConsole);
                    }
                }
            }
        } catch (Exception e) {
            // Error Log
            createConsoleLog4(deleteInputList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /*---------------------------------------------------REPLICA-----------------------------------------------------*/

    /**
     * Get All Console Details
     *
     * @return
     */
    public List<ReplicaConsole> getAllConsole() {
        List<ReplicaConsole> consoleList = replicaConsoleRepository.findAll();
        consoleList = consoleList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return consoleList;
    }

    /**
     * Get Console - Replica
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param consoleId
     * @return
     */
    public ReplicaConsole getConsoleReplica(String languageId, String companyId, String
            partnerId, String masterAirwayBill,
                                            String houseAirwayBill, String consoleId) {
        Optional<ReplicaConsole> dbConsole =
                replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndDeletionIndicator(
                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, 0L);
        if (dbConsole.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill
                    + ", houseAirwayBill - " + houseAirwayBill + " and consoleId - " + consoleId + " doesn't exists";
            // Error Log
            createConsoleLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsole.get();
    }

    /**
     * Find Console
     *
     * @param findConsole
     * @return
     * @throws Exception
     */
    public List<ReplicaConsole> findConsole(FindConsole findConsole) throws Exception {

        ConsoleSpecification spec = new ConsoleSpecification(findConsole);
        List<ReplicaConsole> results = replicaConsoleRepository.findAll(spec);
        log.info("found Console --> " + results);
        return results;
    }

    //==========================================Console_ErrorLog================================================
    private void createConsoleLog(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                  String houseAirwayBill, String consoleId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(masterAirwayBill);
        errorLog.setMethod("Exception thrown in getConsole");
        errorLog.setReferenceField1(houseAirwayBill);
        errorLog.setReferenceField2(partnerId);
        errorLog.setReferenceField3(consoleId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createConsoleLog2(List<AddConsole> addConsoleList, String error) throws
            IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (AddConsole addConsole : addConsoleList) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(addConsole.getLanguageId());
            errorLog.setCompanyId(addConsole.getCompanyId());
            errorLog.setRefDocNumber(addConsole.getMasterAirwayBill());
            errorLog.setMethod("Exception thrown in createConsole");
            errorLog.setReferenceField1(addConsole.getPartnerId());
            errorLog.setReferenceField2(addConsole.getHouseAirwayBill());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

    private void createConsoleLog3(List<UpdateConsole> updateConsoleList, String error) throws
            IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (UpdateConsole updateConsole : updateConsoleList) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(updateConsole.getLanguageId());
            errorLog.setCompanyId(updateConsole.getCompanyId());
            errorLog.setRefDocNumber(updateConsole.getMasterAirwayBill());
            errorLog.setMethod("Exception thrown in updateConsole");
            errorLog.setReferenceField1(updateConsole.getPartnerId());
            errorLog.setReferenceField2(updateConsole.getHouseAirwayBill());
            errorLog.setReferenceField3(updateConsole.getConsoleId());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

    private void createConsoleLog4(List<ConsoleDeleteInput> deleteInputList, String error) throws
            IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (ConsoleDeleteInput deleteInput : deleteInputList) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(deleteInput.getLanguageId());
            errorLog.setCompanyId(deleteInput.getCompanyId());
            errorLog.setRefDocNumber(deleteInput.getMasterAirwayBill());
            errorLog.setMethod("Exception thrown in deleteConsole");
            errorLog.setReferenceField1(deleteInput.getPartnerId());
            errorLog.setReferenceField2(deleteInput.getHouseAirwayBill());
            errorLog.setReferenceField3(deleteInput.getConsoleId());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

}






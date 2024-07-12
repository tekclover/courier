package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.console.AddConsole;
import com.courier.overc360.api.midmile.primary.model.console.Console;
import com.courier.overc360.api.midmile.primary.model.console.ConsoleDeleteInput;
import com.courier.overc360.api.midmile.primary.model.console.TransferConsole;
import com.courier.overc360.api.midmile.primary.model.console.UpdateConsole;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.repository.ConsignmentEntityRepository;
import com.courier.overc360.api.midmile.primary.repository.ConsoleRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaAddConsignment;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaAddPieceDetails;
import com.courier.overc360.api.midmile.replica.model.console.FindConsole;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaAddItemDetails;
import com.courier.overc360.api.midmile.replica.repository.ReplicaBondedManifestRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaCcrRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsoleRepository;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
public class ConsoleService {

    @Autowired
    private ConsoleRepository consoleRepository;

    @Autowired
    private ReplicaCcrRepository ccrRepository;

    @Autowired
    private ReplicaConsoleRepository replicaConsoleRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogService errorLogService;

    @Autowired
    private ReplicaBondedManifestRepository replicaBondedManifestRepository;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private CcrService ccrService;

    @Autowired
    private ConsignmentEntityRepository consignmentEntityRepository;

    @Autowired
    ConsignmentStatusService consignmentStatusService;
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
    private Console getConsole(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                               String consoleId, String pieceId, String pieceItemId) {
        Optional<Console> dbConsole = consoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndConsoleIdAndPieceIdAndPieceItemIdAndDeletionIndicator(
                languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, consoleId, pieceId, pieceItemId, 0L);
        if (dbConsole.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill
                    + ", houseAirwayBill - " + houseAirwayBill + " and consoleId - " + consoleId + " and pieceId " + pieceId + " pieceItemId " + pieceItemId + " doesn't exists";
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

//    /**
//     * @param addConsoleList
//     * @param loginUserID
//     * @return
//     * @throws IllegalAccessException
//     * @throws InvocationTargetException
//     * @throws IOException
//     * @throws CsvException
//     */
//    public List<Console> createConsList(List<AddConsole> addConsoleList, String loginUserID)
//            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
//        List<Console> createdConsoleList = new ArrayList<>();
//        // Create a map to group consignments by hsCode
//        Map<String, List<AddConsole>> groupedByHsCode = addConsoleList.stream()
//                .collect(Collectors.groupingBy(AddConsole::getHsCode));
//
//
//        // Iterate over the grouped consignments
//        for (Map.Entry<String, List<AddConsole>> entry : groupedByHsCode.entrySet()) {
////            String hsCode = entry.getKey();
//            String NUM_RAN_OBJ = "CONSOLE_ID";
//            String CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
//            List<AddConsole> consoleList = entry.getValue();
//            // 100 record above create another console 99
//            // 5000 ----4999
//            for (AddConsole console : consoleList) {
//                boolean duplicateConsole = replicaConsoleRepository.duplicateExists(
//                        console.getLanguageId(), console.getCompanyId(),
//                        console.getPartnerId(), console.getMasterAirwayBill(),
//                        console.getHouseAirwayBill()) == 1;
//                if (duplicateConsole) {
//                    throw new BadRequestException("Record is getting Duplicated with given values : houseAirwayBill - " + console.getHouseAirwayBill());
//                }
//
//                // Pass ConsignmentCurrency
//                IKeyValuePair iKeyValuePair = bondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());
//
//                Console newConsole = new Console();
//                BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));
//
//                String STATUS_ID = "2 - Console Created";
//                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
//                        console.getLanguageId(), console.getCompanyId());
//
//                if (lAndCDesc != null) {
//                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
//                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
//                }
//
//                //Customs Value set multiply formula
//                String CUS_VAL = null;
//                if (console.getConsignmentValue() != null && iKeyValuePair.getCurrencyValue() != null) {
//                    Double CON_VAL = Double.valueOf(console.getConsignmentValue());
//                    Double CURR_VAL = Double.valueOf(iKeyValuePair.getCurrencyValue());
//                    CUS_VAL = String.valueOf(CON_VAL * CURR_VAL);
//                }
//
//                // Set TotalDuty Value
//                IKeyValuePair iKeyValue = bondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getFreightCurrency());
//                Double freightCharge = Double.valueOf(console.getFreightCharges());
//                String incoTerms = console.getIncoTerms();
//
//                Double totalDuty = null;
//                if (iKeyValue.getCurrencyValue() != null) {
//                    Double toCurrencyValue = Double.valueOf(iKeyValue.getCurrencyValue());
//                    if (toCurrencyValue != null && freightCharge != null) {
//                        totalDuty = toCurrencyValue * freightCharge;
//                        if (totalDuty > 100) {
//                            totalDuty += totalDuty * 0.05;
//                        }
//                        if (incoTerms != null && incoTerms.equalsIgnoreCase("DDU")) {
//                            totalDuty += 4;
//                        }
//                    }
//                }
//
//                newConsole.setExpectedDuty(String.valueOf(totalDuty));
//                newConsole.setCustomsValue(CUS_VAL);
//                newConsole.setCustomsCurrency(iKeyValuePair.getCurrencyId());
//                newConsole.setConsoleId(CONSOLE_ID);
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
//        }
//
//        return createdConsoleList;
//    }


    /**
     * CreateConsole
     *
     * @param replicaAddConsignment
     * @param loginUserID
     * @return
     */
    public List<Console> createConsoleInConsign(List<ReplicaAddConsignment> replicaAddConsignment, String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
        List<AddConsole> consoles = new ArrayList<>();
        for (ReplicaAddConsignment consignment : replicaAddConsignment) {
            for (ReplicaAddPieceDetails replicaAddPieceDetails : consignment.getPieceDetails()) {
                for (ReplicaAddItemDetails replicaAddItemDetails : replicaAddPieceDetails.getItemDetails()) {
                    AddConsole itemConsole = new AddConsole();
                    itemConsole.setConsigneeName(consignment.getDestinationDetails().getName());
                    itemConsole.setCountryOfOrigin(consignment.getOriginDetails().getCountry());
                    itemConsole.setShipperId(consignment.getPartnerId());
                    itemConsole.setShipperName(consignment.getPartnerName());
                    BeanUtils.copyProperties(consignment, itemConsole, CommonUtils.getNullPropertyNames(consignment));
                    BeanUtils.copyProperties(replicaAddItemDetails, itemConsole, CommonUtils.getNullPropertyNames(replicaAddItemDetails));
                    consoles.add(itemConsole);
                }
            }
        }
        return createConsoleList(consoles, loginUserID);
    }

//    /**
//     *
//     *
//     * @param addConsoleList
//     * @param loginUserID
//     * @return
//     * @throws IllegalAccessException
//     * @throws InvocationTargetException
//     * @throws IOException
//     * @throws CsvException
//     */
//    public List<Console> createConsoleList(List<AddConsole> addConsoleList, String loginUserID)
//            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
//        List<Console> createdConsoleList = new ArrayList<>();
//
//        // Create a map to group consignments by hsCode
//        Map<String, List<AddConsole>> groupedByHsCode = addConsoleList.stream()
//                .collect(Collectors.groupingBy(AddConsole::getHsCode));
//
//
//        for (Map.Entry<String, List<AddConsole>> entry : groupedByHsCode.entrySet()) {
//            List<AddConsole> consoleList = entry.getValue();
//
//            // Split groups greater than 99 records into smaller subgroups
//            List<AddConsole> smallerGroups = new ArrayList<>();
//            for (int i = 0; i < consoleList.size(); i += 99) {      // 99
//                smallerGroups.addAll(consoleList.subList(i, Math.min(i + 99, consoleList.size())));         //99
//            }
//
//            // Further group the consignments based on the total value condition
//            List<List<AddConsole>> subGroups = new ArrayList<>();
//            List<AddConsole> currentSubGroup = new ArrayList<>();
//            Double currentSubGroupValue = 0.0;
//
//            for (AddConsole console : smallerGroups) {
//                Double freightCharge = Double.parseDouble(console.getFreightCharges());
//                IKeyValuePair iKeyValue = bondedManifestRepository.getToCurrencyValue(console.getFreightCurrency());
//                Double toCurrencyValue = Double.parseDouble(iKeyValue.getCurrencyValue());
//                Double totalDuty = toCurrencyValue * freightCharge;
//                if (totalDuty > 100) {
//                    totalDuty += totalDuty * 0.05;
//                }
//                if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
//                    totalDuty += 4;
//                }
//
//                Double iataValue = Double.parseDouble(ccrRepository.getIataKd(console.getCountryOfOrigin(), console.getLanguageId(), console.getCompanyId()).getIataKd());
//                Double recordValue = iataValue + totalDuty;
//
//                if (currentSubGroupValue + recordValue > 5000) {  // 5000
//                    subGroups.add(currentSubGroup);
//                    currentSubGroup = new ArrayList<>();
//                    currentSubGroupValue = 0.0;
//                }
//
//                currentSubGroup.add(console);
//                currentSubGroupValue += recordValue;
//            }
//
//            if (!currentSubGroup.isEmpty()) {
//                subGroups.add(currentSubGroup);
//            }
//
//            // Process each subgroup
//            for (List<AddConsole> subGroup : subGroups) {
//                // Generate a new CONSOLE_ID for each subgroup
//                String NUM_RAN_OBJ = "CONSOLE_ID";
//                String CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
//
//                for (AddConsole console : subGroup) {
//                    boolean duplicateConsole = replicaConsoleRepository.duplicateExists(
//                            console.getLanguageId(), console.getCompanyId(),
//                            console.getPartnerId(), console.getMasterAirwayBill(),
//                            console.getHouseAirwayBill()) == 1;
//                    if (duplicateConsole) {
//                        throw new BadRequestException("Record is getting Duplicated with given values : houseAirwayBill - " + console.getHouseAirwayBill());
//                    }
//
//                    // Pass ConsignmentCurrency
//                    IKeyValuePair iKeyValuePair = bondedManifestRepository.getToCurrencyValue(console.getConsignmentCurrency());
//
//                    Console newConsole = new Console();
//                    BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));
//
//                    String STATUS_ID = "2 - Console Created";
//                    IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
//                            console.getLanguageId(), console.getCompanyId());
//
//                    if (lAndCDesc != null) {
//                        newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
//                        newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
//                    }
//
//                    // Customs Value set multiply formula
//                    String CUS_VAL = null;
//                    if (console.getConsignmentValue() != null && iKeyValuePair.getCurrencyValue() != null) {
//                        Double CON_VAL = Double.valueOf(console.getConsignmentValue());
//                        Double CURR_VAL = Double.valueOf(iKeyValuePair.getCurrencyValue());
//                        CUS_VAL = String.valueOf(CON_VAL * CURR_VAL);
//                    }
//
//                    //Get Iatakd
//                    IKeyValuePair iataData = ccrRepository.getIataKd(console.getCountryOfOrigin(),
//                            console.getLanguageId(), console.getCompanyId());
//
//                    Double freightCharge = Double.valueOf(console.getFreightCharges());
//                    // Set TotalDuty Value
//                    double totalDuty = 0;
//                    if (iKeyValuePair.getCurrencyValue() != null) {
//                        double toCurrencyValue = Double.parseDouble(iKeyValuePair.getCurrencyValue());
//                        if (toCurrencyValue != 0 && freightCharge != 0) {
//                            totalDuty = toCurrencyValue * freightCharge;
//                            if (totalDuty > 100) {
//                                totalDuty += totalDuty * 0.05;
//                            }
//                            if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
//                                totalDuty += 4;
//                            }
//                        }
//                    }
//
//                    newConsole.setIataKd(iataData.getCurrencyValue());
//                    newConsole.setExpectedDuty(String.valueOf(totalDuty));
//                    newConsole.setCustomsValue(CUS_VAL);
//                    newConsole.setCustomsCurrency(iKeyValuePair.getCurrencyId());
//                    newConsole.setConsoleId(CONSOLE_ID);
//                    newConsole.setStatusId(STATUS_ID);
//                    newConsole.setDeletionIndicator(0L);
//                    newConsole.setCreatedBy(loginUserID);
//                    newConsole.setCreatedOn(new Date());
//                    newConsole.setUpdatedBy(loginUserID);
//                    newConsole.setUpdatedOn(new Date());
//
//                    Console createdConsole = consoleRepository.save(newConsole);
//                    createdConsoleList.add(createdConsole);
//                }
//            }
//        }
//
//        return createdConsoleList;
//    }


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

        // Separate records where hsCode is null
        List<AddConsole> nullHsCodeList = addConsoleList.stream()
                .filter(console -> console.getHsCode().isEmpty())
                .collect(Collectors.toList());

        // Create a map to group consignments by hsCode
        Map<String, List<AddConsole>> groupedByHsCode = addConsoleList.stream()
                .filter(console -> !console.getHsCode().isEmpty())
                .collect(Collectors.groupingBy(AddConsole::getHsCode));

        if(!nullHsCodeList.isEmpty()){
           List<Console> addConsole = createConsoleNormal(nullHsCodeList, loginUserID);
           for(Console console : addConsole) {
               createdConsoleList.add(console);
           }
        }

        Map<String, Map<String, List<AddConsole>>> groupedBySpecialApproval = new HashMap<>();

        for (Map.Entry<String, List<AddConsole>> entry : groupedByHsCode.entrySet()) {
            List<AddConsole> consoleList = entry.getValue();
            String hsCode = entry.getKey();

            String specialApproval = null;
            for (AddConsole getCompany : consoleList) {
                specialApproval = replicaConsoleRepository.getSpecialApproval(getCompany.getCompanyId(), hsCode);
            }
            if (specialApproval != null) {
                if (specialApproval != null && !specialApproval.isBlank()) {
                    groupedBySpecialApproval
                            .computeIfAbsent(hsCode, k -> new HashMap<>())
                            .computeIfAbsent(specialApproval, k -> new ArrayList<>())
                            .addAll(consoleList);
                }
                for (Map.Entry<String, Map<String, List<AddConsole>>> hsCodeEntry : groupedBySpecialApproval.entrySet()) {
                    Map<String, List<AddConsole>> specialApprovalGroup = hsCodeEntry.getValue();

                    for (Map.Entry<String, List<AddConsole>> specialApprovalEntry : specialApprovalGroup.entrySet()) {
                        List<AddConsole> consoleEntryList = specialApprovalEntry.getValue();

                        String NUM_RAN_OBJ = "CONSOLEID";
                        String CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                        for (AddConsole console : consoleEntryList) {

                            boolean duplicateConsole = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getMasterAirwayBill(), console.getHouseAirwayBill(), console.getPieceId(), console.getPieceItemId(), 0L);

                            if (duplicateConsole) {
                                throw new BadRequestException("Given Values Getting Duplicated  HouseAirwayBillNo " + console.getHouseAirwayBill());
                            }

                            // Pass ConsignmentCurrency
                            IKeyValuePair iKeyValuePair = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());
                            IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
                                    console.getLanguageId(), console.getCompanyId());

                            Console newConsole = new Console();
                            BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));

                            Double consignmentValue = null;
                            if (console.getConsignmentValue() != null) {
                                consignmentValue = Double.valueOf(console.getConsignmentValue());
                            }
                            // Set TotalDuty Value
                            double totalDuty = 0;
                            if (iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
                                double toCurrencyValue = Double.parseDouble(iKeyValuePair.getCurrencyValue());
                                if (toCurrencyValue != 0 && consignmentValue != 0 && consignmentValue != null) {
                                    totalDuty = toCurrencyValue * consignmentValue;
                                    if (totalDuty > 100) {
                                        totalDuty += totalDuty * 0.05;
                                    }
                                    if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
                                        totalDuty += 4;
                                    }
                                }
                            }
//                            if (iataData != null && iataData.getIataKd() != null) {
//                                newConsole.setIataKd(iataData.getIataKd());
//                            }
                            if (lAndCDesc != null) {
                                newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
                                newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
                            }

                            Optional<IKeyValuePair> eventStatus = consignmentEntityRepository.getStatusEventText(console.getLanguageId(), console.getCompanyId(), "1", "6");

                            if (eventStatus.isPresent()) {
                                IKeyValuePair ikey = eventStatus.get();
                                newConsole.setStatusId("1");
                                newConsole.setEventCode("6");
                                newConsole.setStatusText(ikey.getStatusText());
                                newConsole.setEventText(ikey.getEventText());
                                newConsole.setEventTimestamp(new Date());
                                newConsole.setStatusTimestamp(new Date());
                            }
                            newConsole.setExpectedDuty(String.valueOf(totalDuty));
                            newConsole.setConsoleId(CONSOLE_ID);
                            newConsole.setDeletionIndicator(0L);
                            newConsole.setCreatedBy(loginUserID);
                            newConsole.setCreatedOn(new Date());
                            newConsole.setUpdatedBy(loginUserID);
                            newConsole.setUpdatedOn(new Date());

                            Console createdConsole = consoleRepository.save(newConsole);

                            if (createdConsole != null) {
                                // Save ConsignmentStatus
                                consignmentStatusService.createConsignmentStatusParams(createdConsole.getCompanyId(), createdConsole.getCompanyName(),
                                        createdConsole.getLanguageId(), createdConsole.getLanguageDescription(), createdConsole.getPieceId(), createdConsole.getStatusId(),
                                        createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getStatusText(), createdConsole.getStatusId(),
                                        createdConsole.getStatusText(), createdConsole.getEventCode(), createdConsole.getEventText(), createdConsole.getEventCode(),
                                        createdConsole.getEventText(), createdConsole.getEventTimestamp(), createdConsole.getEventTimestamp(), createdConsole.getStatusTimestamp(), loginUserID);

                                // Update ConsignmentEntity
                                consoleRepository.updateEventCodeFromConsignment(createdConsole.getCompanyId(),
                                        createdConsole.getLanguageId(), createdConsole.getPartnerId(),
                                        createdConsole.getHouseAirwayBill(), createdConsole.getMasterAirwayBill());
                                log.info("Console Created <-----------------------> Consignment Event AND Console_Indicator Updated");
                            }
                            createdConsoleList.add(createdConsole);
                        }
                    }
                }
            } else {
                // Further group the consignments into smaller groups of up to 6 records each
                List<List<AddConsole>> smallerGroups = new ArrayList<>();
                for (int i = 0; i < consoleList.size(); i += 99) {
                    List<AddConsole> subList = consoleList.subList(i, Math.min(i + 99, consoleList.size()));
                    smallerGroups.add(subList);
                }

                // Process each smaller group
                for (List<AddConsole> smallerGroup : smallerGroups) {
                    // Generate a new CONSOLE_ID for each smaller group
//                    String CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);

                    // Further group the consignments based on the total value condition
                    List<List<AddConsole>> subGroups = new ArrayList<>();
                    List<AddConsole> currentSubGroup = new ArrayList<>();
                    Double currentSubGroupValue = 0.0;

                    for (AddConsole console : smallerGroup) {
                        Double consignmentValue = null;

                        IKeyValuePair iKeyValue = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());

                        Double toCurrencyValue = 0.0;
                        if (iKeyValue != null && iKeyValue.getCurrencyValue() != null) {
                            toCurrencyValue = Double.parseDouble(iKeyValue.getCurrencyValue());
                        }
                        Double totalDuty = 0.0;
                        if (console.getConsignmentValue() != null) {
                            consignmentValue = Double.parseDouble(console.getConsignmentValue());
                            totalDuty = toCurrencyValue * consignmentValue;
                        }
                        if (totalDuty > 100) {
                            totalDuty += totalDuty * 0.05;
                        }
                        if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
                            totalDuty += 4;
                        }

//                        IKeyValuePair iataValue = ccrRepository.getIataKd(console.getCountryOfOrigin(), console.getLanguageId(), console.getCompanyId());
                        Double iataKd = 0.0;
                        if (console.getIata() != null) {
                            iataKd = Double.valueOf(console.getIata());
                        }
                        Double recordValue = iataKd + totalDuty;

                        if (currentSubGroupValue + recordValue > 5000) {
                            subGroups.add(currentSubGroup);
                            currentSubGroup = new ArrayList<>();
                            currentSubGroupValue = 0.0;
                        }

                        currentSubGroup.add(console);
                        currentSubGroupValue += recordValue;
                    }

                    if (!currentSubGroup.isEmpty()) {
                        subGroups.add(currentSubGroup);
                    }

                    // Process each subgroup
                    for (List<AddConsole> subGroup : subGroups) {
                        // Generate a new CONSOLE_ID for each subgroup
                        String NUM_RAN_OBJ = "CONSOLEID";
                        String SUB_CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);

                        for (AddConsole console : subGroup) {
                            // Duplicate Check
                            boolean duplicateConsole = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getMasterAirwayBill(), console.getHouseAirwayBill(), console.getPieceId(), console.getPieceItemId(), 0L);

                            if (duplicateConsole) {
                                throw new BadRequestException("Given Values Getting Duplicated  HouseAirwayBillNo " + console.getHouseAirwayBill());
                            }

                            // Pass ConsignmentCurrency
                            IKeyValuePair iKeyValuePair = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());

                            Console newConsole = new Console();
                            BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));

                            IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(console.getLanguageId(), console.getCompanyId());
                            Optional<IKeyValuePair> eventStatus = consignmentEntityRepository.getStatusEventText(console.getLanguageId(), console.getCompanyId(), "1", "6");

                            if (lAndCDesc != null) {
                                newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
                                newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
                            }

                            // Customs Value set multiply formula
//                            String CUS_VAL = null;
//                            if (console.getConsignmentValue() != null && iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
//                                Double CON_VAL = Double.valueOf(console.getConsignmentValue());
//                                Double CURR_VAL = Double.valueOf(iKeyValuePair.getCurrencyValue());
//                                CUS_VAL = String.valueOf(CON_VAL * CURR_VAL);
//                                newConsole.setCustomsCurrency(iKeyValuePair.getCurrencyId());
//                            }

                            // Get Iatakd
//                            IKeyValuePair iataData = ccrRepository.getIataKd(console.getCountryOfOrigin(),
//                                    console.getLanguageId(), console.getCompanyId());

                            Double consignmentValue = null;
                            if (console.getConsignmentValue() != null) {
                                consignmentValue = Double.valueOf(console.getConsignmentValue());
                            }
                            // Set TotalDuty Value
                            double totalDuty = 0;
                            if (iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
                                double toCurrencyValue = Double.parseDouble(iKeyValuePair.getCurrencyValue());
                                if (toCurrencyValue != 0 && consignmentValue != 0 && consignmentValue != null) {
                                    totalDuty = toCurrencyValue * consignmentValue;
                                    if (totalDuty > 100) {
                                        totalDuty += totalDuty * 0.05;
                                    }
                                    if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
                                        totalDuty += 4;
                                    }
                                }
                            }

                            if (eventStatus.isPresent()) {
                                IKeyValuePair ikey = eventStatus.get();
                                newConsole.setStatusId("1");
                                newConsole.setEventCode("6");
                                newConsole.setStatusText(ikey.getStatusText());
                                newConsole.setEventText(ikey.getEventText());
                                newConsole.setEventTimestamp(new Date());
                                newConsole.setStatusTimestamp(new Date());
                            }
                            newConsole.setExpectedDuty(String.valueOf(totalDuty));
//                            newConsole.setCustomsValue(CUS_VAL);
                            newConsole.setConsoleId(SUB_CONSOLE_ID);
                            newConsole.setDeletionIndicator(0L);
                            newConsole.setCreatedBy(loginUserID);
                            newConsole.setCreatedOn(new Date());
                            newConsole.setUpdatedBy(loginUserID);
                            newConsole.setUpdatedOn(new Date());

                            Console createdConsole = consoleRepository.save(newConsole);

                            if (createdConsole != null) {
                                // Save ConsignmentStatus
                                consignmentStatusService.createConsignmentStatusParams(createdConsole.getCompanyId(), createdConsole.getCompanyName(),
                                        createdConsole.getLanguageId(), createdConsole.getLanguageDescription(), createdConsole.getPieceId(), createdConsole.getStatusId(),
                                        createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getStatusText(), createdConsole.getStatusId(),
                                        createdConsole.getStatusText(), createdConsole.getEventCode(), createdConsole.getEventText(), createdConsole.getEventCode(),
                                        createdConsole.getEventText(), createdConsole.getEventTimestamp(), createdConsole.getEventTimestamp(), createdConsole.getStatusTimestamp(), loginUserID);

                                // Save ConsignmentEntity
                                consoleRepository.updateEventCodeFromConsignment(createdConsole.getCompanyId(),
                                        createdConsole.getLanguageId(), createdConsole.getPartnerId(),
                                        createdConsole.getHouseAirwayBill(), createdConsole.getMasterAirwayBill());
                                log.info("Console Created<----------------------->Consignment Event Updated");
                            }
                            createdConsoleList.add(createdConsole);
                        }
                    }
                }
            }
        }
        return createdConsoleList;
    }

    // /**
    //     * @param addConsoleList
    //     * @param loginUserID
    //     * @return
    //     * @throws IllegalAccessException
    //     * @throws InvocationTargetException
    //     * @throws IOException
    //     * @throws CsvException
    //     */
    //    public List<Console> createConsoleList(List<AddConsole> addConsoleList, String loginUserID)
    //            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
    //        List<Console> createdConsoleList = new ArrayList<>();
    //
    //        // Create a map to group consignments by hsCode
    //        Map<String, List<AddConsole>> groupedByHsCode = addConsoleList.stream().collect(Collectors.groupingBy(AddConsole::getHsCode));
    //
    //        Map<String, Map<String, List<AddConsole>>> groupedBySpecialApproval = new HashMap<>();
    //
    //        for (Map.Entry<String, List<AddConsole>> entry : groupedByHsCode.entrySet()) {
    //            List<AddConsole> consoleList = entry.getValue();
    //            String hsCode = entry.getKey();
    //
    //            String specialApproval = null;
    //            for (AddConsole getCompany : consoleList) {
    //                specialApproval = replicaConsoleRepository.getSpecialApproval(getCompany.getCompanyId(), hsCode);
    //            }
    //            if (specialApproval != null) {
    //                if (specialApproval != null && !specialApproval.isBlank()) {
    //                    groupedBySpecialApproval
    //                            .computeIfAbsent(hsCode, k -> new HashMap<>())
    //                            .computeIfAbsent(specialApproval, k -> new ArrayList<>())
    //                            .addAll(consoleList);
    //                }
    //                for (Map.Entry<String, Map<String, List<AddConsole>>> hsCodeEntry : groupedBySpecialApproval.entrySet()) {
    //                    Map<String, List<AddConsole>> specialApprovalGroup = hsCodeEntry.getValue();
    //
    //                    for (Map.Entry<String, List<AddConsole>> specialApprovalEntry : specialApprovalGroup.entrySet()) {
    //                        List<AddConsole> consoleEntryList = specialApprovalEntry.getValue();
    //
    //                        String NUM_RAN_OBJ = "CONSOLEID";
    //                        String CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
    //                        for (AddConsole console : consoleEntryList) {
    //
    //                            boolean duplicateConsole = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
    //                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getMasterAirwayBill(), console.getHouseAirwayBill(), console.getPieceId(), console.getPieceItemId(), 0L);
    //
    //                            if (duplicateConsole) {
    //                                throw new BadRequestException("Given Values Getting Duplicated  HouseAirwayBillNo " + console.getHouseAirwayBill());
    //                            }
    //
    //                            // Pass ConsignmentCurrency
    //                            IKeyValuePair iKeyValuePair = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());
    //                            IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
    //                                    console.getLanguageId(), console.getCompanyId());
    //                            // Get Iatakd
    //                            IKeyValuePair iataData = ccrRepository.getIataKd(console.getCountryOfOrigin(),
    //                                    console.getLanguageId(), console.getCompanyId());
    //
    //                            Console newConsole = new Console();
    //                            BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));
    //
    //                            // Customs Value set multiply formula
    //                            String CUS_VAL = null;
    //                            if (iKeyValuePair != null && console.getConsignmentValue() != null && iKeyValuePair.getCurrencyValue() != null) {
    //                                Double CON_VAL = Double.valueOf(console.getConsignmentValue());
    //                                Double CURR_VAL = Double.valueOf(iKeyValuePair.getCurrencyValue());
    //                                newConsole.setCustomsCurrency(iKeyValuePair.getCurrencyId());
    //                                newConsole.setExchangeRate(iKeyValuePair.getCurrencyValue());
    //                                CUS_VAL = String.valueOf(CON_VAL * CURR_VAL);
    //                            }
    //
    //                            Double consignmentValue = null;
    //                            if (console.getConsignmentValue() != null) {
    //                                consignmentValue = Double.valueOf(console.getConsignmentValue());
    //                            }
    //                            // Set TotalDuty Value
    //                            double totalDuty = 0;
    //                            if (iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
    //                                double toCurrencyValue = Double.parseDouble(iKeyValuePair.getCurrencyValue());
    //                                if (toCurrencyValue != 0 && consignmentValue != 0 && consignmentValue != null) {
    //                                    totalDuty = toCurrencyValue * consignmentValue;
    //                                    if (totalDuty > 100) {
    //                                        totalDuty += totalDuty * 0.05;
    //                                    }
    //                                    if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
    //                                        totalDuty += 4;
    //                                    }
    //                                }
    //                            }
    //
    //                            if (iataData != null && iataData.getIataKd() != null) {
    //                                newConsole.setIataKd(iataData.getIataKd());
    //                            }
    //                            if (lAndCDesc != null) {
    //                                newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
    //                                newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
    //                            }
    //
    //                            Optional<IKeyValuePair> eventStatus = consignmentEntityRepository.getStatusEventText(console.getLanguageId(), console.getCompanyId(), "1", "6");
    //
    //                            if (eventStatus.isPresent()) {
    //                                IKeyValuePair ikey = eventStatus.get();
    //                                newConsole.setStatusId("1");
    //                                newConsole.setEventCode("6");
    //                                newConsole.setStatusText(ikey.getStatusText());
    //                                newConsole.setEventText(ikey.getEventText());
    //                                newConsole.setEventTimestamp(new Date());
    //                                newConsole.setStatusTimestamp(new Date());
    //                            }
    //                            newConsole.setExpectedDuty(String.valueOf(totalDuty));
    //                            newConsole.setCustomsValue(CUS_VAL);
    //                            newConsole.setConsoleId(CONSOLE_ID);
    //                            newConsole.setDeletionIndicator(0L);
    //                            newConsole.setCreatedBy(loginUserID);
    //                            newConsole.setCreatedOn(new Date());
    //                            newConsole.setUpdatedBy(loginUserID);
    //                            newConsole.setUpdatedOn(new Date());
    //
    //                            Console createdConsole = consoleRepository.save(newConsole);
    //
    //                            if (createdConsole != null) {
    //                            // Save ConsignmentStatus
    //                            consignmentStatusService.createConsignmentStatusParams(createdConsole.getCompanyId(), createdConsole.getCompanyName(),
    //                                    createdConsole.getLanguageId(), createdConsole.getLanguageDescription(), createdConsole.getPieceId(), createdConsole.getStatusId(),
    //                                    createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getStatusText(), createdConsole.getStatusId(),
    //                                    createdConsole.getStatusText(), createdConsole.getEventCode(), createdConsole.getEventText(), createdConsole.getEventCode(),
    //                                    createdConsole.getEventText(), createdConsole.getEventTimestamp(), createdConsole.getEventTimestamp(), createdConsole.getStatusTimestamp(), loginUserID );
    //
    //                            // Update ConsignmentEntity
    //                                consoleRepository.updateEventCodeFromConsignment(createdConsole.getCompanyId(),
    //                                        createdConsole.getLanguageId(), createdConsole.getPartnerId(),
    //                                        createdConsole.getHouseAirwayBill(), createdConsole.getMasterAirwayBill());
    //                                log.info("Console Created <-----------------------> Consignment Event AND Console_Indicator Updated");
    //                            }
    //                            createdConsoleList.add(createdConsole);
    //                        }
    //                    }
    //                }
    //            } else {
    //                // Further group the consignments into smaller groups of up to 6 records each
    //                List<List<AddConsole>> smallerGroups = new ArrayList<>();
    //                for (int i = 0; i < consoleList.size(); i += 99) {
    //                    List<AddConsole> subList = consoleList.subList(i, Math.min(i + 99, consoleList.size()));
    //                    smallerGroups.add(subList);
    //                }
    //
    //                // Process each smaller group
    //                for (List<AddConsole> smallerGroup : smallerGroups) {
    //                    // Generate a new CONSOLE_ID for each smaller group
    ////                    String CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
    //
    //                    // Further group the consignments based on the total value condition
    //                    List<List<AddConsole>> subGroups = new ArrayList<>();
    //                    List<AddConsole> currentSubGroup = new ArrayList<>();
    //                    Double currentSubGroupValue = 0.0;
    //
    //                    for (AddConsole console : smallerGroup) {
    //                        Double consignmentValue = null;
    //
    //                        IKeyValuePair iKeyValue = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());
    //
    //                        Double toCurrencyValue = 0.0;
    //                        if (iKeyValue != null && iKeyValue.getCurrencyValue() != null) {
    //                            toCurrencyValue = Double.parseDouble(iKeyValue.getCurrencyValue());
    //                        }
    //                        Double totalDuty = 0.0;
    //                        if (console.getConsignmentValue() != null) {
    //                            consignmentValue = Double.parseDouble(console.getConsignmentValue());
    //                            totalDuty = toCurrencyValue * consignmentValue;
    //                        }
    //                        if (totalDuty > 100) {
    //                            totalDuty += totalDuty * 0.05;
    //                        }
    //                        if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
    //                            totalDuty += 4;
    //                        }
    //
    //                        IKeyValuePair iataValue = ccrRepository.getIataKd(console.getCountryOfOrigin(), console.getLanguageId(), console.getCompanyId());
    //                        Double iataKd = 0.0;
    //                        if (iataValue != null && iataValue.getIataKd() != null) {
    //                            iataKd = Double.valueOf(iataValue.getIataKd());
    //                        }
    //                        Double recordValue = iataKd + totalDuty;
    //
    //                        if (currentSubGroupValue + recordValue > 5000) {
    //                            subGroups.add(currentSubGroup);
    //                            currentSubGroup = new ArrayList<>();
    //                            currentSubGroupValue = 0.0;
    //                        }
    //
    //                        currentSubGroup.add(console);
    //                        currentSubGroupValue += recordValue;
    //                    }
    //
    //                    if (!currentSubGroup.isEmpty()) {
    //                        subGroups.add(currentSubGroup);
    //                    }
    //
    //                    // Process each subgroup
    //                    for (List<AddConsole> subGroup : subGroups) {
    //                        // Generate a new CONSOLE_ID for each subgroup
    //                        String NUM_RAN_OBJ = "CONSOLEID";
    //                        String SUB_CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
    //
    //                        for (AddConsole console : subGroup) {
    //                            // Duplicate Check
    //                            boolean duplicateConsole = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
    //                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getMasterAirwayBill(), console.getHouseAirwayBill(), console.getPieceId(), console.getPieceItemId(), 0L);
    //
    //                            if (duplicateConsole) {
    //                                throw new BadRequestException("Given Values Getting Duplicated  HouseAirwayBillNo " + console.getHouseAirwayBill());
    //                            }
    //
    //                            // Pass ConsignmentCurrency
    //                            IKeyValuePair iKeyValuePair = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());
    //
    //                            Console newConsole = new Console();
    //                            BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));
    //
    //                            IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(console.getLanguageId(), console.getCompanyId());
    //                            Optional<IKeyValuePair> eventStatus = consignmentEntityRepository.getStatusEventText(console.getLanguageId(), console.getCompanyId(), "1", "6");
    //
    //                            if (lAndCDesc != null) {
    //                                newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
    //                                newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
    //                            }
    //
    //                            // Customs Value set multiply formula
    //                            String CUS_VAL = null;
    //                            if (console.getConsignmentValue() != null && iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
    //                                Double CON_VAL = Double.valueOf(console.getConsignmentValue());
    //                                Double CURR_VAL = Double.valueOf(iKeyValuePair.getCurrencyValue());
    //                                CUS_VAL = String.valueOf(CON_VAL * CURR_VAL);
    //                                newConsole.setCustomsCurrency(iKeyValuePair.getCurrencyId());
    //                            }
    //
    //                            // Get Iatakd
    //                            IKeyValuePair iataData = ccrRepository.getIataKd(console.getCountryOfOrigin(),
    //                                    console.getLanguageId(), console.getCompanyId());
    //
    //                            Double consignmentValue = null;
    //                            if (console.getConsignmentValue() != null) {
    //                                consignmentValue = Double.valueOf(console.getConsignmentValue());
    //                            }
    //                            // Set TotalDuty Value
    //                            double totalDuty = 0;
    //                            if (iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
    //                                double toCurrencyValue = Double.parseDouble(iKeyValuePair.getCurrencyValue());
    //                                if (toCurrencyValue != 0 && consignmentValue != 0 && consignmentValue != null) {
    //                                    totalDuty = toCurrencyValue * consignmentValue;
    //                                    if (totalDuty > 100) {
    //                                        totalDuty += totalDuty * 0.05;
    //                                    }
    //                                    if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
    //                                        totalDuty += 4;
    //                                    }
    //                                }
    //                            }
    //
    //                            if (iataData != null && iataData.getIataKd() != null) {
    //                                newConsole.setIataKd(iataData.getIataKd());
    //                            }
    //
    //                            if (eventStatus.isPresent()) {
    //                                IKeyValuePair ikey = eventStatus.get();
    //                                newConsole.setStatusId("1");
    //                                newConsole.setEventCode("6");
    //                                newConsole.setStatusText(ikey.getStatusText());
    //                                newConsole.setEventText(ikey.getEventText());
    //                                newConsole.setEventTimestamp(new Date());
    //                                newConsole.setStatusTimestamp(new Date());
    //                            }
    //                            newConsole.setExpectedDuty(String.valueOf(totalDuty));
    //                            newConsole.setCustomsValue(CUS_VAL);
    //                            newConsole.setConsoleId(SUB_CONSOLE_ID);
    //                            newConsole.setDeletionIndicator(0L);
    //                            newConsole.setCreatedBy(loginUserID);
    //                            newConsole.setCreatedOn(new Date());
    //                            newConsole.setUpdatedBy(loginUserID);
    //                            newConsole.setUpdatedOn(new Date());
    //
    //                            Console createdConsole = consoleRepository.save(newConsole);
    //
    //                            if (createdConsole != null) {
    //                            // Save ConsignmentStatus
    //                            consignmentStatusService.createConsignmentStatusParams(createdConsole.getCompanyId(), createdConsole.getCompanyName(),
    //                                    createdConsole.getLanguageId(), createdConsole.getLanguageDescription(), createdConsole.getPieceId(), createdConsole.getStatusId(),
    //                                    createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getStatusText(), createdConsole.getStatusId(),
    //                                    createdConsole.getStatusText(), createdConsole.getEventCode(), createdConsole.getEventText(), createdConsole.getEventCode(),
    //                                    createdConsole.getEventText(), createdConsole.getEventTimestamp(), createdConsole.getEventTimestamp(), createdConsole.getStatusTimestamp(), loginUserID );
    //
    //                            // Save ConsignmentEntity
    //                                consoleRepository.updateEventCodeFromConsignment(createdConsole.getCompanyId(),
    //                                        createdConsole.getLanguageId(), createdConsole.getPartnerId(),
    //                                        createdConsole.getHouseAirwayBill(), createdConsole.getMasterAirwayBill());
    //                                log.info("Console Created<----------------------->Consignment Event Updated");
    //                            }
    //                            createdConsoleList.add(createdConsole);
    //                        }
    //                    }
    //                }
    //            }
    //        }
    //        return createdConsoleList;
    //    }


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
    public List<Console> createConsoleNormal(List<AddConsole> addConsoleList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Console> createdConsoleList = new ArrayList<>();

            for (AddConsole addConsole : addConsoleList) {

                boolean duplicateConsole = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndPieceIdAndPieceItemIdAndDeletionIndicator(
                        addConsole.getLanguageId(), addConsole.getCompanyId(), addConsole.getPartnerId(),
                        addConsole.getMasterAirwayBill(), addConsole.getHouseAirwayBill(),
                        addConsole.getPieceId(), addConsole.getPieceItemId(), 0L);
                if (duplicateConsole) {
                    throw new BadRequestException("Record is getting Duplicated with given values : houseAirwayBill - " + addConsole.getHouseAirwayBill());
                }

                Console newConsole = new Console();
                BeanUtils.copyProperties(addConsole, newConsole, CommonUtils.getNullPropertyNames(addConsole));

                Optional<IKeyValuePair> eventStatus = consignmentEntityRepository.getStatusEventText(newConsole.getLanguageId(), newConsole.getCompanyId(), "1", "6");

                if (eventStatus.isPresent()) {
                    IKeyValuePair ikey = eventStatus.get();
                    newConsole.setStatusId("1");
                    newConsole.setEventCode("6");
                    newConsole.setStatusText(ikey.getStatusText());
                    newConsole.setEventText(ikey.getEventText());
                    newConsole.setEventTimestamp(new Date());
                    newConsole.setStatusTimestamp(new Date());
                }

                String NUM_RAN_OBJ = "CONSOLEID";
                String CONSOLE_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                log.info("next Value from NumberRange for CONSOLE_ID : " + CONSOLE_ID);
                newConsole.setConsoleId(CONSOLE_ID);

                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
                        addConsole.getLanguageId(), addConsole.getCompanyId());

                if (lAndCDesc != null) {
                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
                }
                newConsole.setDeletionIndicator(0L);
                newConsole.setCreatedBy(loginUserID);
                newConsole.setCreatedOn(new Date());
                newConsole.setUpdatedBy(loginUserID);
                newConsole.setUpdatedOn(new Date());

                Console createdConsole = consoleRepository.save(newConsole);

                if (createdConsole != null) {
                    // Save ConsignmentStatus
                    consignmentStatusService.createConsignmentStatusParams(createdConsole.getCompanyId(), createdConsole.getCompanyName(),
                            createdConsole.getLanguageId(), createdConsole.getLanguageDescription(), createdConsole.getPieceId(), createdConsole.getStatusId(),
                            createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getStatusText(), createdConsole.getStatusId(),
                            createdConsole.getStatusText(), createdConsole.getEventCode(), createdConsole.getEventText(), createdConsole.getEventCode(),
                            createdConsole.getEventText(), createdConsole.getEventTimestamp(), createdConsole.getEventTimestamp(), createdConsole.getStatusTimestamp(), loginUserID);

                    // Save ConsignmentEntity
                    consoleRepository.updateEventCodeFromConsignment(createdConsole.getCompanyId(),
                            createdConsole.getLanguageId(), createdConsole.getPartnerId(),
                            createdConsole.getHouseAirwayBill(), createdConsole.getMasterAirwayBill());
                    log.info("Console Created<----------------------->Consignment Event Updated");
                }
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
                        updateConsole.getHouseAirwayBill(), updateConsole.getConsoleId(),
                        updateConsole.getPieceId(), updateConsole.getPieceItemId());

                BeanUtils.copyProperties(updateConsole, dbConsole, CommonUtils.getNullPropertyNames(updateConsole));
                dbConsole.setUpdatedBy(loginUserID);
                dbConsole.setUpdatedOn(new Date());
                // Set Event Status
                if (updateConsole.getStatusId() != null ) {
                    Optional<IKeyValuePair> getStatus = consignmentEntityRepository.getStatusText(updateConsole.getLanguageId(), updateConsole.getStatusId());

                    if (getStatus.isPresent()) {
                        IKeyValuePair ikey = getStatus.get();
                        dbConsole.setStatusId(dbConsole.getStatusId());
                        dbConsole.setStatusText(ikey.getStatusText());
                        dbConsole.setStatusTimestamp(new Date());
                    }
                }

                if (updateConsole.getEventCode() != null ) {
                    Optional<IKeyValuePair> getEvent = consignmentEntityRepository.getEventText(updateConsole.getLanguageId(),
                            updateConsole.getCompanyId(), updateConsole.getEventCode());

                    if (getEvent.isPresent()) {
                        IKeyValuePair ikey = getEvent.get();
                        dbConsole.setEventCode(dbConsole.getEventCode());
                        dbConsole.setEventText(ikey.getEventText());
                        dbConsole.setEventTimestamp(new Date());
                    }
                }

                Console updatedConsole = consoleRepository.save(dbConsole);

                if (updatedConsole != null) {
                    //Consignment Update
                    consoleRepository.conUpdateBasedOnConsoleUpdate(updatedConsole.getCompanyId(), updatedConsole.getLanguageId(), updatedConsole.getPartnerId(),
                            updatedConsole.getHouseAirwayBill(), updatedConsole.getMasterAirwayBill(), updatedConsole.getStatusId(), updatedConsole.getEventCode(),
                            updatedConsole.getStatusText(), updatedConsole.getEventText());

                    // Save ConsignmentStatus
                    consignmentStatusService.createConsignmentStatusParams(updatedConsole.getCompanyId(), updatedConsole.getCompanyName(),
                            updatedConsole.getLanguageId(), updatedConsole.getLanguageDescription(), updatedConsole.getPieceId(), updatedConsole.getPieceId(),
                            updatedConsole.getMasterAirwayBill(), updatedConsole.getHouseAirwayBill(), updatedConsole.getStatusText(), updatedConsole.getStatusId(),
                            updatedConsole.getStatusText(), updatedConsole.getEventCode(), updatedConsole.getEventText(), updatedConsole.getEventCode(),
                            updatedConsole.getEventText(), updatedConsole.getEventTimestamp(), updatedConsole.getEventTimestamp(), updatedConsole.getStatusTimestamp(), loginUserID);
                }

                if (updateConsole.getEventCode() != null) {
                    if ((updatedConsole.getEventCode()).equalsIgnoreCase("10")) {
                        //Fetch the console records based on houseAirwayBill
                        List<Console> consoleData = consoleRepository.getConsoleData(updatedConsole.getConsoleId());

                        if (consoleData != null && !consoleData.isEmpty()) {
                            //Check whether all the consoleData's eventcode is equal to 10
                            boolean allEventCodes = consoleData.stream()
                                    .allMatch(console -> "10".equalsIgnoreCase(console.getEventCode()));

                            if (allEventCodes) {
                                ccrService.createConsoleCcr(consoleData, loginUserID);
                                log.info("Console to CCR Created");
                            }
                        }
                    }
                }


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
                            deleteInput.getPartnerId(), deleteInput.getMasterAirwayBill(), deleteInput.getHouseAirwayBill(),
                            deleteInput.getConsoleId(), deleteInput.getPieceId(), deleteInput.getPieceItemId());

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


    //TransferConsole

    /**
     * @param transferConsole
     * @param loginUserID
     * @return
     */
    public List<Console> transferConsole(List<TransferConsole> transferConsole, String loginUserID) {

        List<Console> consoleList = new ArrayList<>();
        for (TransferConsole transfer : transferConsole) {
            Console newConsole = new Console();
            Console dbConsole = consoleRepository.findByHouseAirwayBillAndConsoleIdAndPieceIdAndPieceItemIdAndDeletionIndicator(
                    transfer.getHouseAirwayBill(), transfer.getFromConsoleId(), transfer.getPieceId(), transfer.getPieceItemId(), 0L);

            if (dbConsole == null) {
                throw new BadRequestException("FromConsole ID Not found " + transfer.getFromConsoleId() + "HouseAirwayBill" + transfer.getHouseAirwayBill());
            }
            boolean toConsole = consoleRepository.existsByConsoleIdAndDeletionIndicator(transfer.getToConsoleId(), 0L);
            if (!toConsole) {
                throw new BadRequestException("ToConsole ID Not found " + transfer.getToConsoleId());
            } else {
                BeanUtils.copyProperties(dbConsole, newConsole, CommonUtils.getNullPropertyNames(dbConsole));
                newConsole.setConsoleId(transfer.getToConsoleId());
                newConsole.setCreatedBy(loginUserID);
                newConsole.setCreatedOn(new Date());
                consoleList.add(consoleRepository.save(newConsole));
            }
            dbConsole.setDeletionIndicator(1L);
            dbConsole.setUpdatedBy(loginUserID);
            dbConsole.setUpdatedOn(new Date());
            consoleRepository.save(dbConsole);
        }
        return consoleList;
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
//    public List<ReplicaConsole> findConsole(FindConsole findConsole) throws Exception {
//
//        ConsoleSpecification spec = new ConsoleSpecification(findConsole);
//        List<ReplicaConsole> results = replicaConsoleRepository.findAll(spec);
//        log.info("found Consoles --> {}", results);
//        return results;
//    }
    public List<ReplicaConsole> findConsole(FindConsole findConsole) throws Exception {

        log.info("given Params for find -- > {}", findConsole);
        List<ReplicaConsole> consoleList = replicaConsoleRepository.findConsolesWithQry(
                findConsole.getLanguageId(), findConsole.getCompanyId(), findConsole.getPartnerId(),
                findConsole.getMasterAirwayBill(), findConsole.getHouseAirwayBill(), findConsole.getConsoleId());
//        log.info("found Consoles --> {}", consoleList);
        return consoleList;
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






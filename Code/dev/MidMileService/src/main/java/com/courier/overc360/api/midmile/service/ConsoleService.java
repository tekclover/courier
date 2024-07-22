package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.console.*;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.model.prealert.PreAlert;
import com.courier.overc360.api.midmile.primary.repository.ConsignmentEntityRepository;
import com.courier.overc360.api.midmile.primary.repository.ConsoleRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.console.FindConsole;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import com.courier.overc360.api.midmile.replica.repository.ReplicaBondedManifestRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaCcrRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsoleRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaPieceDetailsRepository;
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

    @Autowired
    ReplicaPieceDetailsRepository replicaPieceDetailsRepository;

    @Autowired
    ReplicaCcrRepository replicaCcrRepository;

    /*---------------------------------------------------PRIMARY-----------------------------------------------------*/

    /**
     * Get Console
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param partnerMasterAirwayBill
     * @param partnerHouseAirwayBill
     * @param consoleId
     * @return
     */
    private Console getConsole(String languageId, String companyId, String partnerId, String partnerMasterAirwayBill, String partnerHouseAirwayBill,
                               String consoleId, String pieceId) {
        Console dbConsole = consoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndConsoleIdAndPieceIdAndDeletionIndicator(
                languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, consoleId, pieceId, 0L);
        if (dbConsole == null) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + partnerMasterAirwayBill
                    + ", houseAirwayBill - " + partnerHouseAirwayBill + " and consoleId - " + consoleId + " and pieceId " + pieceId + " doesn't exists";
            // Error Log
            createConsoleLog(languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, consoleId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbConsole;
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
                        addConsole.getPartnerId(), addConsole.getPartnerMasterAirwayBill(),
                        addConsole.getPartnerHouseAirwayBill()) == 1;
                if (duplicateConsole) {
                    throw new BadRequestException("Record is getting Duplicated with given values : houseAirwayBill - " + addConsole.getPartnerHouseAirwayBill());
                }

                Console newConsole = new Console();
                BeanUtils.copyProperties(addConsole, newConsole, CommonUtils.getNullPropertyNames(addConsole));

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


//    /**
//     * CreateConsole
//     *
//     * @param replicaAddConsignment
//     * @param loginUserID
//     * @return
//     */
//    public List<Console> createConsoleInConsign(List<ReplicaAddConsignment> replicaAddConsignment, String loginUserID)
//            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
//        List<AddConsole> consoles = new ArrayList<>();
//        for (ReplicaAddConsignment consignment : replicaAddConsignment) {
//            for (ReplicaAddPieceDetails replicaAddPieceDetails : consignment.getPieceDetails()) {
//                for (ReplicaAddItemDetails replicaAddItemDetails : replicaAddPieceDetails.getItemDetails()) {
//                    AddConsole itemConsole = new AddConsole();
//                    itemConsole.setConsigneeName(consignment.getDestinationDetails().getName());
//                    itemConsole.setCountryOfOrigin(consignment.getOriginDetails().getCountry());
//                    itemConsole.setShipperId(consignment.getPartnerId());
//                    itemConsole.setShipperName(consignment.getPartnerName());
//                    BeanUtils.copyProperties(consignment, itemConsole, CommonUtils.getNullPropertyNames(consignment));
//                    BeanUtils.copyProperties(replicaAddItemDetails, itemConsole, CommonUtils.getNullPropertyNames(replicaAddItemDetails));
//                    consoles.add(itemConsole);
//                }
//            }
//        }
//        return createConsoleList(consoles, loginUserID);
//    }


    /**
     * @param preAlerts
     * @param loginUserID
     * @return
     * @throws IOException
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     * @throws CsvException
     */
    public List<Console> createConsoleBasedOnPreAlertResponse(List<PreAlert> preAlerts, String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {

        List<AddConsole> consoleList = new ArrayList<>();

        for (PreAlert preAlert : preAlerts) {
            AddConsole newConsole = new AddConsole();
            BeanUtils.copyProperties(preAlert, newConsole, CommonUtils.getNullPropertyNames(preAlert));
            // weight
            newConsole.setTareWeight(preAlert.getTotalWeight());
            newConsole.setGrossWeight(preAlert.getTotalWeight());
            newConsole.setManifestedGrossWeight(preAlert.getTotalWeight());
            newConsole.setNetWeight(preAlert.getTotalWeight());

            // no_piece
            newConsole.setManifestedQuantity(preAlert.getNoOfPieces());
            newConsole.setLandedQuantity(preAlert.getNoOfPieces());
            newConsole.setTotalQuantity(preAlert.getNoOfPieces());
            newConsole.setCustomsCurrency(preAlert.getCurrency());
            newConsole.setGoodsDescription(preAlert.getDescription());
            newConsole.setShipperName(preAlert.getShipper());

            newConsole.setAirportOriginCode(preAlert.getOrigin());
            newConsole.setCountryOfOrigin(preAlert.getOriginCode());

            consoleList.add(newConsole);

        }
        return createConsoleList(consoleList, loginUserID);
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

        // Separate records where hsCode is null
        List<AddConsole> nullHsCodeList = addConsoleList.stream()
                .filter(console -> console.getHsCode().isEmpty())
                .collect(Collectors.toList());

        // Create a map to group consignments by hsCode
        Map<String, List<AddConsole>> groupedByHsCode = addConsoleList.stream()
                .filter(console -> !console.getHsCode().isEmpty())
                .collect(Collectors.groupingBy(AddConsole::getHsCode));

        if (!nullHsCodeList.isEmpty()) {
            List<Console> addConsole = createConsoleNormal(nullHsCodeList, loginUserID);
            for (Console console : addConsole) {
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


                        String CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
                        String CONSOLE_NAME = numberRangeService.getNextNumberRange("CONSOLENAME");

                        for (AddConsole console : consoleEntryList) {

                            boolean duplicateConsole = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getPartnerMasterAirwayBill(),
                                    console.getPartnerHouseAirwayBill(), console.getPieceId(), 0L);

                            if (duplicateConsole) {
                                System.out.println("Duplicate found for PartnerHouseAirwayBillNo: " + console.getPartnerHouseAirwayBill());
                                continue;
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

                            Optional<IKeyValuePair> eventDescOpt = consignmentEntityRepository.getEventText(
                                    console.getLanguageId(), console.getCompanyId(), "5");
                            if (eventDescOpt.isPresent()) {
                                IKeyValuePair ikey = eventDescOpt.get();

                                newConsole.setHawbType("EVENT");
                                newConsole.setHawbTypeId("5");
                                newConsole.setHawbTypeDescription(ikey.getEventText());
                                newConsole.setHawbTimeStamp(new Date());
                            }

                            newConsole.setExpectedDuty(String.valueOf(totalDuty));
                            newConsole.setConsoleId(CONSOLE_ID);
                            newConsole.setConsoleName("Console - " + CONSOLE_NAME);
                            newConsole.setDeletionIndicator(0L);
                            newConsole.setCreatedBy(loginUserID);
                            newConsole.setCreatedOn(new Date());
                            newConsole.setUpdatedBy(loginUserID);
                            newConsole.setUpdatedOn(new Date());

                            // Get Piece
                            List<String> piece = replicaPieceDetailsRepository.getPieceId(newConsole.getLanguageId(), newConsole.getCompanyId(),
                                    newConsole.getPartnerId(), newConsole.getPartnerHouseAirwayBill(), newConsole.getPartnerMasterAirwayBill());

                            if (piece != null) {
                                for (String pieceId : piece) {

                                    newConsole.setPieceId(pieceId);

                                    if (eventDescOpt.isPresent()) {
                                        IKeyValuePair ikey = eventDescOpt.get();

                                        newConsole.setPieceType("EVENT");
                                        newConsole.setPieceTypeId("5");
                                        newConsole.setPieceTypeDescription(ikey.getEventText());
                                        newConsole.setPieceTimeStamp(new Date());
                                    }

                                    Console createdConsole = consoleRepository.save(newConsole);

                                    if (createdConsole != null) {
                                        // Save ConsignmentStatus
                                        consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
                                                createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
                                                createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
                                                createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
                                                createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
                                                createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
                                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());

                                        // Update ConsignmentEntity Table
                                        consoleRepository.updateConsignmentOnConsoleCreate(
                                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
                                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());

                                        // Update PreAlert Table
                                        consoleRepository.updatePreAlertOnConsoleCreate(
                                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
                                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
                                                createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType());

                                        log.info("Console Created <-----------------------> Consignment Status Insert and Console_Indicator Updated");
                                    }
                                    createdConsoleList.add(createdConsole);
                                }
                            } else {
                                log.info("Piece Not Available in the CompanyId " + newConsole.getCompanyId() + " LanguageId " + newConsole.getConsoleId() +
                                        " PartnerId " + newConsole.getPartnerId() + " PartnerHouseAirwayBill " + newConsole.getPartnerMasterAirwayBill() +
                                        " PartnerMasterAirwayBill " + newConsole.getPartnerMasterAirwayBill() + " Doesn't exist");

                            }
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

                        String SUB_CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
                        String SUB_CONSOLE_NAME = numberRangeService.getNextNumberRange("CONSOLENAME");

                        for (AddConsole console : subGroup) {
                            // Duplicate Check
                            boolean duplicateConsole = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getPartnerMasterAirwayBill(), console.getPartnerHouseAirwayBill(), console.getPieceId(), 0L);

                            if (duplicateConsole) {
                                // Log the duplicate and skip the record
                                System.out.println("Duplicate found for PartnerHouseAirwayBillNo: " + console.getPartnerHouseAirwayBill());
//                                continue;
                            }

                            // Pass ConsignmentCurrency
                            IKeyValuePair iKeyValuePair = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());

                            Console newConsole = new Console();
                            BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));

                            IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(console.getLanguageId(), console.getCompanyId());

                            if (lAndCDesc != null) {
                                newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
                                newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
                            }
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

                            Optional<IKeyValuePair> eventDescOpt = consignmentEntityRepository.getEventText(
                                    console.getLanguageId(), console.getCompanyId(), "5");
                            if (eventDescOpt.isPresent()) {
                                IKeyValuePair ikey = eventDescOpt.get();

                                newConsole.setHawbType("EVENT");
                                newConsole.setHawbTypeId("5");
                                newConsole.setHawbTypeDescription(ikey.getEventText());
                                newConsole.setHawbTimeStamp(new Date());
                            }

                            newConsole.setExpectedDuty(String.valueOf(totalDuty));
//                            newConsole.setCustomsValue(CUS_VAL);
                            newConsole.setConsoleId(SUB_CONSOLE_ID);
                            newConsole.setConsoleName("Console - " + SUB_CONSOLE_NAME);
                            newConsole.setDeletionIndicator(0L);
                            newConsole.setCreatedBy(loginUserID);
                            newConsole.setCreatedOn(new Date());
                            newConsole.setUpdatedBy(loginUserID);
                            newConsole.setUpdatedOn(new Date());

                            // Get Piece
                            List<String> piece = replicaPieceDetailsRepository.getPieceId(newConsole.getLanguageId(), newConsole.getCompanyId(),
                                    newConsole.getPartnerId(), newConsole.getPartnerHouseAirwayBill(), newConsole.getPartnerMasterAirwayBill());

                            if (piece != null) {
                                for (String pieceId : piece) {
                                    newConsole.setPieceId(pieceId);
                                    Console createdConsole = consoleRepository.save(newConsole);

                                    if (eventDescOpt.isPresent()) {
                                        IKeyValuePair ikey = eventDescOpt.get();

                                        newConsole.setPieceType("EVENT");
                                        newConsole.setPieceTypeId("5");
                                        newConsole.setPieceTypeDescription(ikey.getEventText());
                                        newConsole.setPieceTimeStamp(new Date());
                                    }

                                    if (createdConsole != null) {
                                        // Save ConsignmentStatus
                                        consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
                                                createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
                                                createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
                                                createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
                                                createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
                                                createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
                                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());

                                        // Update ConsignmentEntity Table
                                        consoleRepository.updateConsignmentOnConsoleCreate(
                                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
                                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());

                                        // Update PreAlert Table
                                        consoleRepository.updatePreAlertOnConsoleCreate(
                                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
                                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
                                                createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType());

                                        // Update PieceDetails Table
//                                        consoleRepository.updatePieceDetailsOnConsoleCreate(
//                                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
//                                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
//                                                createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType(),
//                                                createdConsole.getPieceId());

                                        log.info("Console Created<----------------------->Consignment Event Updated");
                                    }
                                    createdConsoleList.add(createdConsole);
                                }
                            } else {
                                log.info("Piece Not Available in the CompanyId " + newConsole.getCompanyId() + " LanguageId " + newConsole.getConsoleId() +
                                        " PartnerId " + newConsole.getPartnerId() + " PartnerHouseAirwayBill " + newConsole.getPartnerMasterAirwayBill() +
                                        " PartnerMasterAirwayBill " + newConsole.getPartnerMasterAirwayBill() + " Doesn't exist");
                            }

                        }
                    }
                }
            }
        }
        return createdConsoleList;
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
    public List<Console> createConsoleNormal(List<AddConsole> addConsoleList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Console> createdConsoleList = new ArrayList<>();


            String CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
            String CONSOLE_NAME = numberRangeService.getNextNumberRange("CONSOLENAME");
            log.info("next Value from NumberRange for CONSOLE_ID : " + CONSOLE_ID);
            for (AddConsole addConsole : addConsoleList) {

                boolean duplicateConsole = replicaConsoleRepository.existsByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
                        addConsole.getLanguageId(), addConsole.getCompanyId(), addConsole.getPartnerId(), addConsole.getPartnerMasterAirwayBill(), addConsole.getPartnerHouseAirwayBill(),
                        addConsole.getPieceId(), 0L);
                if (duplicateConsole) {
//                    throw new BadRequestException("Record is getting Duplicated with given values : PartnerHouseAirwayBill - " + addConsole.getPartnerHouseAirwayBill());
                log.info("Record is getting Duplicated with given values : PartnerHouseAirwayBill - " + addConsole.getPartnerHouseAirwayBill());
                }

                Console newConsole = new Console();
                BeanUtils.copyProperties(addConsole, newConsole, CommonUtils.getNullPropertyNames(addConsole));

                Optional<IKeyValuePair> eventDescOpt = consignmentEntityRepository.getEventText(
                        addConsole.getLanguageId(), addConsole.getCompanyId(), "5");
                if (eventDescOpt.isPresent()) {
                    IKeyValuePair ikey = eventDescOpt.get();

                    newConsole.setHawbType("EVENT");
                    newConsole.setHawbTypeId("5");
                    newConsole.setHawbTypeDescription(ikey.getEventText());
                    newConsole.setHawbTimeStamp(new Date());

                    newConsole.setPieceType("EVENT");
                    newConsole.setPieceTypeId("5");
                    newConsole.setPieceTypeDescription(ikey.getEventText());
                    newConsole.setPieceTimeStamp(new Date());
                }

                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
                        addConsole.getLanguageId(), addConsole.getCompanyId());

                if (lAndCDesc != null) {
                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
                }
                newConsole.setConsoleId(CONSOLE_ID);
                newConsole.setConsoleName("Console - " + CONSOLE_NAME);
                newConsole.setDeletionIndicator(0L);
                newConsole.setCreatedBy(loginUserID);
                newConsole.setCreatedOn(new Date());
                newConsole.setUpdatedBy(loginUserID);
                newConsole.setUpdatedOn(new Date());

                Console createdConsole = consoleRepository.save(newConsole);

                if (createdConsole != null) {
                    // Save ConsignmentStatus
                    consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
                            createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
                            createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
                            createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
                            createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
                            createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
                            createdConsole.getPartnerHouseAirwayBill(), createdConsole.getMasterAirwayBill());

                    // Update ConsignmentEntity Table
                    consoleRepository.updateConsignmentOnConsoleCreate(
                            createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
                            createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());

                    // Update PreAlert Table
                    consoleRepository.updatePreAlertOnConsoleCreate(
                            createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
                            createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
                            createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType());

                    // Update PieceDetails Table
//                    consoleRepository.updatePieceDetailsOnConsoleCreate(
//                            createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
//                            createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
//                            createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType(),
//                            createdConsole.getPieceId());

                    log.info("Console Created<----------------------->Consignment Status Created");
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
    public List<Console> updateConsoleCcrCreate(List<UpdateConsole> updateConsoleList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Console> updatedConsoleList = new ArrayList<>();

            for (UpdateConsole updateConsole : updateConsoleList) {

                Console dbConsole = getConsole(updateConsole.getLanguageId(), updateConsole.getCompanyId(), updateConsole.getPartnerId(),
                        updateConsole.getPartnerMasterAirwayBill(), updateConsole.getPartnerHouseAirwayBill(), updateConsole.getConsoleId(), updateConsole.getPieceId());

                BeanUtils.copyProperties(updateConsole, dbConsole, CommonUtils.getNullPropertyNames(updateConsole));

//                Optional<IKeyValuePair> statusID5DescOpt = consignmentEntityRepository.getStatusText(updateConsole.getLanguageId(), "5");
//                if (statusID5DescOpt.isPresent()) {
//                    IKeyValuePair ikey = statusID5DescOpt.get();
//
//                    dbConsole.setHawbType("STATUS");
//                    dbConsole.setHawbTypeId("5");
//                    dbConsole.setHawbTypeDescription(ikey.getStatusText());
//                    dbConsole.setHawbTimeStamp(new Date());
//
//                    dbConsole.setPieceType("STATUS");
//                    dbConsole.setPieceTypeId("5");
//                    dbConsole.setPieceTypeDescription(ikey.getStatusText());
//                    dbConsole.setPieceTimeStamp(new Date());
//                }

                Optional<IKeyValuePair> ikey = replicaConsoleRepository.getInvoice(updateConsole.getCompanyId(),
                        updateConsole.getLanguageId(), updateConsole.getPartnerId(), updateConsole.getPartnerHouseAirwayBill(),
                        updateConsole.getPartnerMasterAirwayBill());

                if (ikey.isPresent()) {
                    IKeyValuePair invoice = ikey.get();
                    dbConsole.setInvoiceType(invoice.getInvoiceType());
                    dbConsole.setInvoiceNumber(invoice.getInvoiceNumber());
                    dbConsole.setInvoiceDate(invoice.getInvoiceDate());
                }
                dbConsole.setUpdatedBy(loginUserID);
                dbConsole.setUpdatedOn(new Date());

                if (updateConsole.getCustomsValue() != null) {
                    Double customsValue = Double.valueOf(updateConsole.getCustomsValue());

                    if (customsValue != null && customsValue < 100) {
                        dbConsole.setIsExempted("yes");
                        dbConsole.setExemptionFor("Regulation 94-2020");
                        dbConsole.setExemptionBeneficiary("others");
                        dbConsole.setExemptionReference("99");
                    } else {
                        dbConsole.setIsExempted("No");
                    }
                }

                Console updatetedConsole = consoleRepository.save(dbConsole);

                if (updatetedConsole != null) {
                    List<Console> consoleData = consoleRepository.getConsoleData(updatetedConsole.getConsoleId());

                    if (consoleData != null && !consoleData.isEmpty()) {
                        ccrService.createConsoleCcr(consoleData, loginUserID);
                        log.info("Console to CCR Created");
                    }
                    updatedConsoleList.add(updatetedConsole);
                }
            }
            return updatedConsoleList;
        } catch (Exception e) {
            // Error Log
            createConsoleLog3(updateConsoleList, e.toString());
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
    public List<Console> updateConsoleForMobileApp(List<UpdateConsole> updateConsoleList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Console> updatedConsoleList = new ArrayList<>();

            for (UpdateConsole updateConsole : updateConsoleList) {

                Console dbConsole = getConsole(updateConsole.getLanguageId(), updateConsole.getCompanyId(), updateConsole.getPartnerId(),
                        updateConsole.getPartnerMasterAirwayBill(), updateConsole.getPartnerHouseAirwayBill(), updateConsole.getConsoleId(), updateConsole.getPieceId());

                BeanUtils.copyProperties(updateConsole, dbConsole, CommonUtils.getNullPropertyNames(updateConsole));

                Optional<IKeyValuePair> statusID5DescOpt = consignmentEntityRepository.getStatusText(updateConsole.getLanguageId(), "5");
                if (statusID5DescOpt.isPresent()) {
                    IKeyValuePair ikey = statusID5DescOpt.get();

                    dbConsole.setHawbType("STATUS");
                    dbConsole.setHawbTypeId("5");
                    dbConsole.setHawbTypeDescription(ikey.getStatusText());
                    dbConsole.setHawbTimeStamp(new Date());

                    dbConsole.setPieceType("STATUS");
                    dbConsole.setPieceTypeId("5");
                    dbConsole.setPieceTypeDescription(ikey.getStatusText());
                    dbConsole.setPieceTimeStamp(new Date());
                }

                dbConsole.setUpdatedBy(loginUserID);
                dbConsole.setUpdatedOn(new Date());
                Console updatetedConsole = consoleRepository.save(dbConsole);

                if (updatetedConsole != null) {

                    Optional<IKeyValuePair> statusID4DescOpt = consignmentEntityRepository.getStatusText(updateConsole.getLanguageId(), "4");
                    if (statusID4DescOpt.isPresent()) {
                        IKeyValuePair ikey = statusID4DescOpt.get();

                        // Create Consignment Status Table record with StatusID - 4
                        consignmentStatusService.insertConsignmentStatusRecord(updatetedConsole.getLanguageId(), updatetedConsole.getLanguageDescription(),
                                updatetedConsole.getCompanyId(), updatetedConsole.getCompanyName(), updatetedConsole.getPieceId(),
                                updatetedConsole.getMasterAirwayBill(), updatetedConsole.getHouseAirwayBill(), updatetedConsole.getHawbType(),
                                updatetedConsole.getHawbTypeId(), ikey.getStatusText(), updatetedConsole.getHawbTimeStamp(), updatetedConsole.getPieceType(),
                                updatetedConsole.getPieceTypeId(), ikey.getStatusText(), updatetedConsole.getPieceTimeStamp(), loginUserID,
                                updatetedConsole.getPartnerHouseAirwayBill(), updatetedConsole.getPartnerMasterAirwayBill());
                    }

                    // Create Consignment Status Table record with StatusID - 5
                    consignmentStatusService.insertConsignmentStatusRecord(updatetedConsole.getLanguageId(), updatetedConsole.getLanguageDescription(),
                            updatetedConsole.getCompanyId(), updatetedConsole.getCompanyName(), updatetedConsole.getPieceId(),
                            updatetedConsole.getMasterAirwayBill(), updatetedConsole.getHouseAirwayBill(), updatetedConsole.getHawbType(),
                            updatetedConsole.getHawbTypeId(), updatetedConsole.getHawbTypeDescription(),
                            updatetedConsole.getHawbTimeStamp(), updatetedConsole.getPieceType(), updatetedConsole.getPieceTypeId(),
                            updatetedConsole.getPieceTypeDescription(), updatetedConsole.getPieceTimeStamp(), loginUserID,
                            updatetedConsole.getPartnerHouseAirwayBill(), updatetedConsole.getPartnerMasterAirwayBill());

                    // Update ConsignmentEntity Table
                    consoleRepository.updateConsignmentOnConsoleCreate(
                            updatetedConsole.getLanguageId(), updatetedConsole.getCompanyId(), updatetedConsole.getPartnerId(),
                            updatetedConsole.getPartnerMasterAirwayBill(), updatetedConsole.getPartnerMasterAirwayBill(),
                            updatetedConsole.getHawbTypeDescription(), updatetedConsole.getHawbTypeId(), updatetedConsole.getHawbType(), updateConsole.getHubCode());

                    // Update PreAlert Table
                    consoleRepository.updatePreAlertOnConsoleCreate(
                            updatetedConsole.getLanguageId(), updatetedConsole.getCompanyId(), updatetedConsole.getPartnerId(),
                            updatetedConsole.getPartnerHouseAirwayBill(), updatetedConsole.getPartnerMasterAirwayBill(),
                            updatetedConsole.getHawbTypeDescription(), updatetedConsole.getHawbTypeId(), updatetedConsole.getHawbType(),
                            updatetedConsole.getPieceId());

                    // Update PieceDetails Table
                    consoleRepository.updatePieceDetailsOnConsoleCreate(
                            updatetedConsole.getLanguageId(), updatetedConsole.getCompanyId(), updatetedConsole.getPartnerId(),
                            updatetedConsole.getPartnerHouseAirwayBill(), updatetedConsole.getPartnerMasterAirwayBill(),
                            updatetedConsole.getHawbTypeDescription(), updatetedConsole.getHawbTypeId(), updatetedConsole.getHawbType(),
                            updatetedConsole.getPieceId());

                    updatedConsoleList.add(updatetedConsole);
                }
            }
            return updatedConsoleList;
        } catch (Exception e) {
            // Error Log
            createConsoleLog3(updateConsoleList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }


    /**
     * UpdateConsole
     *
     * @param updateConsoleList
     * @param loginUserID
     * @return
     */
    public List<Console> updateConsoleList(List<UpdateConsole> updateConsoleList, String loginUserID) {

        List<Console> consoleList = new ArrayList<>();

        for (UpdateConsole updateConsole : updateConsoleList) {
            Console dbConsole = getConsole(
                    updateConsole.getLanguageId(), updateConsole.getCompanyId(),
                    updateConsole.getPartnerId(), updateConsole.getPartnerMasterAirwayBill(),
                    updateConsole.getPartnerHouseAirwayBill(), updateConsole.getConsoleId(),
                    updateConsole.getPieceId());

            BeanUtils.copyProperties(updateConsole, dbConsole, CommonUtils.getNullPropertyNames(updateConsole));
            dbConsole.setUpdatedBy(loginUserID);
            dbConsole.setUpdatedOn(new Date());

            // Get Status Desc
            if (updateConsole.getHawbType().equalsIgnoreCase("STATUS")) {
                Optional<IKeyValuePair> getStatusOpt =
                        consignmentEntityRepository.getStatusText(updateConsole.getLanguageId(), updateConsole.getHawbTypeId());

                if (getStatusOpt.isPresent()) {
                    IKeyValuePair ikey = getStatusOpt.get();

                    dbConsole.setHawbType("STATUS");
                    dbConsole.setHawbTypeId(updateConsole.getHawbTypeId());
                    dbConsole.setHawbTypeDescription(ikey.getStatusText());
                    dbConsole.setHawbTimeStamp(new Date());

                    dbConsole.setPieceType("STATUS");
                    dbConsole.setPieceTypeId(updateConsole.getHawbTypeId());
                    dbConsole.setPieceTypeDescription(ikey.getStatusText());
                    dbConsole.setPieceTimeStamp(new Date());
                }
            } else if (updateConsole.getHawbType().equalsIgnoreCase("EVENT")) {
                Optional<IKeyValuePair> getEventStats =
                        consignmentEntityRepository.getEventText(updateConsole.getLanguageId(), updateConsole.getCompanyId(), updateConsole.getHawbTypeId());

                if (getEventStats.isPresent()) {
                    IKeyValuePair ikey = getEventStats.get();

                    dbConsole.setHawbType("EVENT");
                    dbConsole.setHawbTypeId(updateConsole.getHawbTypeId());
                    dbConsole.setHawbTypeDescription(ikey.getEventText());
                    dbConsole.setHawbTimeStamp(new Date());

                    dbConsole.setPieceType("EVENT");
                    dbConsole.setPieceTypeId(updateConsole.getHawbTypeId());
                    dbConsole.setPieceTypeDescription(ikey.getEventText());
                    dbConsole.setPieceTimeStamp(new Date());
                }
            }
            Console updatedConsole = consoleRepository.save(dbConsole);

            if (updatedConsole != null) {
                // Update ConsignmentEntity Table
                consoleRepository.updateConsignmentOnConsoleCreate(
                        updatedConsole.getLanguageId(), updatedConsole.getCompanyId(), updatedConsole.getPartnerId(),
                        updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(),
                        updatedConsole.getHawbTypeDescription(), updatedConsole.getHawbTypeId(), updatedConsole.getHawbType(),
                        updatedConsole.getHubCode());

                // Update PreAlert Table
                consoleRepository.updatePreAlertOnConsoleCreate(
                        updatedConsole.getLanguageId(), updatedConsole.getCompanyId(), updatedConsole.getPartnerId(),
                        updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(),
                        updatedConsole.getHawbTypeDescription(), updatedConsole.getHawbTypeId(), updatedConsole.getHawbType());

                // Update PieceDetails Table
                consoleRepository.updatePieceDetailsOnConsoleCreate(
                        updatedConsole.getLanguageId(), updatedConsole.getCompanyId(), updatedConsole.getPartnerId(),
                        updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(),
                        updatedConsole.getHawbTypeDescription(), updatedConsole.getHawbTypeId(), updatedConsole.getHawbType(),
                        updatedConsole.getPieceId());

                //Insert ConsignmentStatus
                consignmentStatusService.insertConsignmentStatusRecord(updatedConsole.getLanguageId(), updatedConsole.getLanguageDescription(),
                        updatedConsole.getCompanyId(), updatedConsole.getCompanyName(), updatedConsole.getPieceId(),
                        updatedConsole.getMasterAirwayBill(), updatedConsole.getHouseAirwayBill(), updatedConsole.getHawbType(),
                        updatedConsole.getHawbTypeId(), updatedConsole.getHawbTypeDescription(),
                        updatedConsole.getHawbTimeStamp(), updatedConsole.getPieceType(), updatedConsole.getPieceTypeId(),
                        updatedConsole.getPieceTypeDescription(), updatedConsole.getPieceTimeStamp(), loginUserID,
                        updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill());


                consoleList.add(updatedConsole);
            }
        }
        return consoleList;
    }


    /**
     * UpdateConsole
     *
     * @param updateConsoleList
     * @param loginUserID
     * @return
     */
    public List<Console> updateConsoleStatus(List<ConsoleStatus> updateConsoleList, String loginUserID) {

        List<Console> consoleList = new ArrayList<>();

        for (ConsoleStatus updateConsole : updateConsoleList) {

            Console dbConsole =
                    consoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndConsoleIdAndPieceIdAndDeletionIndicator(
                            updateConsole.getLanguageId(), updateConsole.getCompanyId(), updateConsole.getPartnerId(), updateConsole.getPartnerMasterAirwayBill(),
                            updateConsole.getPartnerHouseAirwayBill(), updateConsole.getConsoleId(), updateConsole.getPieceId(), 0L);

            if (dbConsole == null) {
                log.info("Given values doesn't exist");
            }

            // Get Status Desc
            if (updateConsole.getHawbType().equalsIgnoreCase("STATUS")) {
                Optional<IKeyValuePair> getStatusOpt =
                        consignmentEntityRepository.getStatusText(updateConsole.getLanguageId(), updateConsole.getHawbTypeId());

                if (getStatusOpt.isPresent()) {
                    IKeyValuePair ikey = getStatusOpt.get();

                    dbConsole.setHawbType("STATUS");
                    dbConsole.setHawbTypeId(updateConsole.getHawbTypeId());
                    dbConsole.setHawbTypeDescription(ikey.getStatusText());
                    dbConsole.setHawbTimeStamp(new Date());

                    dbConsole.setPieceType("STATUS");
                    dbConsole.setPieceTypeId(updateConsole.getHawbTypeId());
                    dbConsole.setPieceTypeDescription(ikey.getStatusText());
                    dbConsole.setPieceTimeStamp(new Date());
                }
            } else if (updateConsole.getHawbType().equalsIgnoreCase("EVENT")) {
                Optional<IKeyValuePair> getEventStats =
                        consignmentEntityRepository.getEventText(updateConsole.getLanguageId(), updateConsole.getCompanyId(), updateConsole.getHawbTypeId());

                if (getEventStats.isPresent()) {
                    IKeyValuePair ikey = getEventStats.get();

                    dbConsole.setHawbType("EVENT");
                    dbConsole.setHawbTypeId(updateConsole.getHawbTypeId());
                    dbConsole.setHawbTypeDescription(ikey.getEventText());
                    dbConsole.setHawbTimeStamp(new Date());

                    dbConsole.setPieceType("EVENT");
                    dbConsole.setPieceTypeId(updateConsole.getHawbTypeId());
                    dbConsole.setPieceTypeDescription(ikey.getEventText());
                    dbConsole.setPieceTimeStamp(new Date());
                }
            }


            BeanUtils.copyProperties(updateConsole, dbConsole, CommonUtils.getNullPropertyNames(updateConsole));
            dbConsole.setUpdatedBy(loginUserID);
            dbConsole.setUpdatedOn(new Date());

            Console updatedConsole = consoleRepository.save(dbConsole);

            if (updatedConsole != null) {
                // Update ConsignmentEntity Table
                if (updatedConsole.getHawbType().equalsIgnoreCase("STATUS")) {
                    consoleRepository.updateConsignmentOnConsoleCreate(
                            updatedConsole.getLanguageId(), updatedConsole.getCompanyId(), updatedConsole.getPartnerId(),
                            updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(),
                            updatedConsole.getHawbTypeDescription(), updatedConsole.getHawbTypeId(), updatedConsole.getHawbType(),
                            updatedConsole.getHubCode());
                }

                // Update PreAlert Table
                consoleRepository.updatePreAlertOnConsoleCreate(
                        updatedConsole.getLanguageId(), updatedConsole.getCompanyId(), updatedConsole.getPartnerId(),
                        updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(),
                        updatedConsole.getHawbTypeDescription(), updatedConsole.getHawbTypeId(), updatedConsole.getHawbType());

                // Update PieceDetails Table
                consoleRepository.updatePieceDetailsOnConsoleCreate(
                        updatedConsole.getLanguageId(), updatedConsole.getCompanyId(), updatedConsole.getPartnerId(),
                        updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(),
                        updatedConsole.getHawbTypeDescription(), updatedConsole.getHawbTypeId(), updatedConsole.getHawbType(),
                        updatedConsole.getPieceId());

                // Create Consignment Status Table record with StatusID - 5
                consignmentStatusService.insertConsignmentStatusRecord(updatedConsole.getLanguageId(), updatedConsole.getLanguageDescription(),
                        updatedConsole.getCompanyId(), updatedConsole.getCompanyName(), updatedConsole.getPieceId(),
                        updatedConsole.getMasterAirwayBill(), updatedConsole.getHouseAirwayBill(), updatedConsole.getHawbType(),
                        updatedConsole.getHawbTypeId(), updatedConsole.getHawbTypeDescription(),
                        updatedConsole.getHawbTimeStamp(), updatedConsole.getPieceType(), updatedConsole.getPieceTypeId(),
                        updatedConsole.getPieceTypeDescription(), updatedConsole.getPieceTimeStamp(), loginUserID,
                        updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill());

                consoleList.add(updatedConsole);
            }
        }
        return consoleList;
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
                            deleteInput.getPartnerId(), deleteInput.getPartnerMasterAirwayBill(), deleteInput.getPartnerHouseAirwayBill(),
                            deleteInput.getConsoleId(), deleteInput.getPieceId());

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
            Console dbConsole = consoleRepository.findByPartnerHouseAirwayBillAndConsoleIdAndPieceIdAndDeletionIndicator(
                    transfer.getPartnerHouseAirwayBill(), transfer.getFromConsoleId(), transfer.getPieceId(), 0L);

            if (dbConsole == null) {
                throw new BadRequestException("FromConsole ID Not found " + transfer.getFromConsoleId() + "HouseAirwayBill" + transfer.getPartnerHouseAirwayBill());
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
     * @param partnerMasterAirwayBill
     * @param consoleId
     * @return
     */
    public ReplicaConsole getConsoleReplica(String languageId, String companyId, String partnerId,
                                            String partnerMasterAirwayBill, String partnerHouseAirwayBill, String consoleId) {
        Optional<ReplicaConsole> dbConsole =
                replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndConsoleIdAndDeletionIndicator(
                        languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, consoleId, 0L);
        if (dbConsole.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + partnerMasterAirwayBill
                    + ", houseAirwayBill - " + partnerHouseAirwayBill + " and consoleId - " + consoleId + " doesn't exists";
            // Error Log
            createConsoleLog(languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, consoleId, errMsg);
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
                findConsole.getPartnerMasterAirwayBill(), findConsole.getPartnerHouseAirwayBill(), findConsole.getConsoleId());
//        log.info("found Consoles --> {}", consoleList);
        return consoleList;
    }

    //==========================================Console_ErrorLog================================================
    private void createConsoleLog(String languageId, String companyId, String partnerId, String
            masterAirwayBill,
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
            errorLog.setRefDocNumber(addConsole.getPartnerMasterAirwayBill());
            errorLog.setMethod("Exception thrown in createConsole");
            errorLog.setReferenceField1(addConsole.getPartnerId());
            errorLog.setReferenceField2(addConsole.getPartnerHouseAirwayBill());
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
            errorLog.setRefDocNumber(updateConsole.getPartnerMasterAirwayBill());
            errorLog.setMethod("Exception thrown in updateConsole");
            errorLog.setReferenceField1(updateConsole.getPartnerId());
            errorLog.setReferenceField2(updateConsole.getPartnerHouseAirwayBill());
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
            errorLog.setRefDocNumber(deleteInput.getPartnerMasterAirwayBill());
            errorLog.setMethod("Exception thrown in deleteConsole");
            errorLog.setReferenceField1(deleteInput.getPartnerId());
            errorLog.setReferenceField2(deleteInput.getPartnerHouseAirwayBill());
            errorLog.setReferenceField3(deleteInput.getConsoleId());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }


    //Mobile App
    public List<MobileApp> getAllMobileApp() {
        List<MobileApp> consoles = replicaConsoleRepository.getMobileApp();
        return consoles;
    }

    public List<Console> getConsole(String consoleId) {
        List<Console> getConsoleId = replicaConsoleRepository.findByConsoleIdAndDeletionIndicator(consoleId, 0L);
        return getConsoleId;
    }

}






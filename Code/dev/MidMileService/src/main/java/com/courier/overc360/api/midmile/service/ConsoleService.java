package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.ConsignmentEntity;
import com.courier.overc360.api.midmile.primary.model.console.*;
import com.courier.overc360.api.midmile.primary.model.console.unconsolidation.AddUnconsolidation;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.model.prealert.PreAlert;
import com.courier.overc360.api.midmile.primary.repository.CcrRepository;
import com.courier.overc360.api.midmile.primary.repository.ConsignmentEntityRepository;
import com.courier.overc360.api.midmile.primary.repository.ConsoleRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.consignmentstatus.ReplicaConsignmentStatus;
import com.courier.overc360.api.midmile.replica.model.console.FindConsole;
import com.courier.overc360.api.midmile.replica.model.console.ReplicaConsole;
import com.courier.overc360.api.midmile.replica.repository.ReplicaBondedManifestRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaCcrRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsignmentStatusRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsoleRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaPieceDetailsRepository;
import com.courier.overc360.api.midmile.replica.repository.specification.ConsoleSpecification;
import com.opencsv.exceptions.CsvException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    private CcrRepository ccrRepository;

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

    @Autowired
    ReplicaConsignmentStatusRepository replicaConsignmentStatusRepository;

    @Autowired
    private UnconsolidationService unconsolidationService;

    @Autowired
    PushNotificationService pushNotificationService;

    private Set<String> processedConsoleCreate = new HashSet<>();
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


//    /**
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
//        Map<String, Integer> consoleNameCounterMap = new HashMap<>();
//        Map<String, Integer> consoleIdNameMap = new HashMap<>();
//        AtomicInteger consoleNameCounter = new AtomicInteger(1);
//
//        // Separate records where hsCode is null
//        List<AddConsole> nullHsCodeList = addConsoleList.stream()
//                .filter(console -> console.getHsCode().isEmpty())
//                .collect(Collectors.toList());
//
//        // Create a map to group consignments by hsCode
//        Map<String, List<AddConsole>> groupedByHsCode = addConsoleList.stream()
//                .filter(console -> !console.getHsCode().isEmpty())
//                .collect(Collectors.groupingBy(AddConsole::getHsCode));
//
//        //If HsCode is null
//        if (!nullHsCodeList.isEmpty()) {
//            String CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
//            log.info("next Value from NumberRange for CONSOLE_ID : " + CONSOLE_ID);
//            for (AddConsole addConsole : nullHsCodeList) {
//
//                Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
//                        addConsole.getLanguageId(), addConsole.getCompanyId(), addConsole.getPartnerId(), addConsole.getPartnerMasterAirwayBill(), addConsole.getPartnerHouseAirwayBill(),
//                        addConsole.getPieceId(), 0L);
//                if (duplicateConsole == null) {
//
//                    Console newConsole = new Console();
//                    BeanUtils.copyProperties(addConsole, newConsole, CommonUtils.getNullPropertyNames(addConsole));
//
//                    Optional<IKeyValuePair> eventDescOpt = consignmentEntityRepository.getEventText(
//                            addConsole.getLanguageId(), addConsole.getCompanyId(), "5");
//                    if (eventDescOpt.isPresent()) {
//                        IKeyValuePair ikey = eventDescOpt.get();
//
//                        newConsole.setHawbType("EVENT");
//                        newConsole.setHawbTypeId("5");
//                        newConsole.setHawbTypeDescription(ikey.getEventText());
//                        newConsole.setHawbTimeStamp(new Date());
//
//                        newConsole.setPieceType("EVENT");
//                        newConsole.setPieceTypeId("5");
//                        newConsole.setPieceTypeDescription(ikey.getEventText());
//                        newConsole.setPieceTimeStamp(new Date());
//                    }
//
//                    IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
//                            addConsole.getLanguageId(), addConsole.getCompanyId());
//
//                    if (lAndCDesc != null) {
//                        newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
//                        newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
//                    }
//                    newConsole.setConsoleId(CONSOLE_ID);
//
//                    // Use the consoleIdNameMap to set the consoleName
//                    int currentConsoleName = consoleIdNameMap.computeIfAbsent(CONSOLE_ID, k -> consoleNameCounter.getAndIncrement());
//                    newConsole.setConsoleName("Console - " + currentConsoleName);
//
//                    newConsole.setDeletionIndicator(0L);
//                    newConsole.setCreatedBy(loginUserID);
//                    newConsole.setCreatedOn(new Date());
//                    newConsole.setUpdatedBy(loginUserID);
//                    newConsole.setUpdatedOn(new Date());
//
//                    Console createdConsole = consoleRepository.save(newConsole);
//
//                    if (createdConsole != null) {
//                        // Save ConsignmentStatus
//                        consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
//                                createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
//                                createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
//                                createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
//                                createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
//                                createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
//                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getMasterAirwayBill());
//
//                        // Update ConsignmentEntity Table
//                        consoleRepository.updateConsignmentOnConsoleCreate(
//                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
//                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
//
//                        // Update PreAlert Table
//                        consoleRepository.updatePreAlertOnConsoleCreate(
//                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
//                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
//                                createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType());
//
//                        log.info("Console Created<----------------------->Consignment Status Created");
//                    }
//                    createdConsoleList.add(createdConsole);
//                } else {
//                    createdConsoleList.add(duplicateConsole);
//                }
//            }
//        }
//
//        Map<String, Map<String, List<AddConsole>>> groupedBySpecialApproval = new HashMap<>();
//
//        //GROUP BY HSCODE
//        for (Map.Entry<String, List<AddConsole>> entry : groupedByHsCode.entrySet()) {
//            List<AddConsole> consoleList = entry.getValue();
//            String hsCode = entry.getKey();
//
//            String specialApproval = null;
//            for (AddConsole getCompany : consoleList) {
//                specialApproval = replicaConsoleRepository.getSpecialApproval(getCompany.getCompanyId(), hsCode);
//            }
//
//            //SPECIAL APPROVAL
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
//                        String CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
//                        for (AddConsole console : consoleEntryList) {
//
//                            Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
//                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getPartnerMasterAirwayBill(),
//                                    console.getPartnerHouseAirwayBill(), console.getPieceId(), 0L);
//
//                            if (duplicateConsole == null) {
//
//                                // Pass ConsignmentCurrency
//                                IKeyValuePair iKeyValuePair = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());
//                                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
//                                        console.getLanguageId(), console.getCompanyId());
//
//                                Console newConsole = new Console();
//                                BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));
//
//                                Double consignmentValue = null;
//                                if (console.getConsignmentValue() != null) {
//                                    consignmentValue = Double.valueOf(console.getConsignmentValue());
//                                }
//                                // Set TotalDuty Value
//                                double totalDuty = 0;
//                                if (iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
//                                    double toCurrencyValue = Double.parseDouble(iKeyValuePair.getCurrencyValue());
//                                    if (toCurrencyValue != 0 && consignmentValue != 0 && consignmentValue != null) {
//                                        totalDuty = toCurrencyValue * consignmentValue;
//                                        if (totalDuty > 100) {
//                                            totalDuty += totalDuty * 0.05;
//                                        }
//                                        if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
//                                            totalDuty += 4;
//                                        }
//                                    }
//                                }
//                                if (lAndCDesc != null) {
//                                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
//                                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
//                                }
//
//                                Optional<IKeyValuePair> eventDescOpt = consignmentEntityRepository.getEventText(
//                                        console.getLanguageId(), console.getCompanyId(), "5");
//                                if (eventDescOpt.isPresent()) {
//                                    IKeyValuePair ikey = eventDescOpt.get();
//
//                                    newConsole.setHawbType("EVENT");
//                                    newConsole.setHawbTypeId("5");
//                                    newConsole.setHawbTypeDescription(ikey.getEventText());
//                                    newConsole.setHawbTimeStamp(new Date());
//                                }
//
//                                newConsole.setExpectedDuty(String.valueOf(totalDuty));
//                                newConsole.setConsoleId(CONSOLE_ID);
//
//                                // Set consoleName based on consoleId
////                                int currentConsoleName = consoleNameCounterMap.getOrDefault(CONSOLE_ID, 0) + 1;
////                                newConsole.setConsoleName(String.valueOf(currentConsoleName));
////                                consoleNameCounterMap.put(CONSOLE_ID, currentConsoleName);
//
////                                newConsole.setConsoleName("Console - " + consoleCount);
//                                newConsole.setDeletionIndicator(0L);
//                                newConsole.setCreatedBy(loginUserID);
//                                newConsole.setCreatedOn(new Date());
//                                newConsole.setUpdatedBy(loginUserID);
//                                newConsole.setUpdatedOn(new Date());
//
//                                // Get Piece
//                                List<String> piece = replicaPieceDetailsRepository.getPieceId(newConsole.getLanguageId(), newConsole.getCompanyId(),
//                                        newConsole.getPartnerId(), newConsole.getPartnerHouseAirwayBill(), newConsole.getPartnerMasterAirwayBill());
//
//                                if (piece != null) {
//                                    for (String pieceId : piece) {
//
//                                        newConsole.setPieceId(pieceId);
//
//                                        if (eventDescOpt.isPresent()) {
//                                            IKeyValuePair ikey = eventDescOpt.get();
//
//                                            newConsole.setPieceType("EVENT");
//                                            newConsole.setPieceTypeId("5");
//                                            newConsole.setPieceTypeDescription(ikey.getEventText());
//                                            newConsole.setPieceTimeStamp(new Date());
//                                        }
//
//                                        Console createdConsole = consoleRepository.save(newConsole);
//
//                                        if (createdConsole != null) {
//                                            // Save ConsignmentStatus
//                                            consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
//                                                    createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
//                                                    createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
//                                                    createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
//                                                    createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
//                                                    createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
//                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
//
//                                            // Update ConsignmentEntity Table
//                                            consoleRepository.updateConsignmentOnConsoleCreate(
//                                                    createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
//                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
//
//                                            // Update PreAlert Table
//                                            consoleRepository.updatePreAlertOnConsoleCreate(
//                                                    createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
//                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
//                                                    createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType());
//
//                                            log.info("Console Created <-----------------------> Consignment Status Insert and Console_Indicator Updated");
//                                        }
//                                        createdConsoleList.add(createdConsole);
//                                    }
//                                } else {
//                                    log.info("Piece Not Available in the CompanyId " + newConsole.getCompanyId() + " LanguageId " + newConsole.getConsoleId() +
//                                            " PartnerId " + newConsole.getPartnerId() + " PartnerHouseAirwayBill " + newConsole.getPartnerMasterAirwayBill() +
//                                            " PartnerMasterAirwayBill " + newConsole.getPartnerMasterAirwayBill() + " Doesn't exist");
//
//                                }
//                            } else {
//                                createdConsoleList.add(duplicateConsole);
//                            }
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
//                        Double iataKd = 0.0;
//                        if (console.getIata() != null) {
//                            iataKd = Double.valueOf(console.getIata());
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
//
//                        String SUB_CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
//
//                        for (AddConsole console : subGroup) {
//                            // Duplicate Check
//                            Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
//                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getPartnerMasterAirwayBill(), console.getPartnerHouseAirwayBill(), console.getPieceId(), 0L);
//
//                            if (duplicateConsole == null) {
//
//                                // Pass ConsignmentCurrency
//                                IKeyValuePair iKeyValuePair = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());
//
//                                Console newConsole = new Console();
//                                BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));
//
//                                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(console.getLanguageId(), console.getCompanyId());
//
//                                if (lAndCDesc != null) {
//                                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
//                                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
//                                }
//                                Double consignmentValue = null;
//                                if (console.getConsignmentValue() != null) {
//                                    consignmentValue = Double.valueOf(console.getConsignmentValue());
//                                }
//                                // Set TotalDuty Value
//                                double totalDuty = 0;
//                                if (iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
//                                    double toCurrencyValue = Double.parseDouble(iKeyValuePair.getCurrencyValue());
//                                    if (toCurrencyValue != 0 && consignmentValue != 0 && consignmentValue != null) {
//                                        totalDuty = toCurrencyValue * consignmentValue;
//                                        if (totalDuty > 100) {
//                                            totalDuty += totalDuty * 0.05;
//                                        }
//                                        if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
//                                            totalDuty += 4;
//                                        }
//                                    }
//                                }
//
//                                Optional<IKeyValuePair> eventDescOpt = consignmentEntityRepository.getEventText(
//                                        console.getLanguageId(), console.getCompanyId(), "5");
//                                if (eventDescOpt.isPresent()) {
//                                    IKeyValuePair ikey = eventDescOpt.get();
//
//                                    newConsole.setHawbType("EVENT");
//                                    newConsole.setHawbTypeId("5");
//                                    newConsole.setHawbTypeDescription(ikey.getEventText());
//                                    newConsole.setHawbTimeStamp(new Date());
//                                }
//
//                                newConsole.setExpectedDuty(String.valueOf(totalDuty));
////                            newConsole.setCustomsValue(CUS_VAL);
//                                newConsole.setConsoleId(SUB_CONSOLE_ID);
//                                // Increment consoleName counter for the given consoleId
//                                int currentConsoleName = consoleNameCounterMap.getOrDefault(SUB_CONSOLE_ID, 0) + 1;
//                                newConsole.setConsoleName("Console - " + currentConsoleName);
//                                consoleNameCounterMap.put(SUB_CONSOLE_ID, currentConsoleName);
//
//                                newConsole.setDeletionIndicator(0L);
//                                newConsole.setCreatedBy(loginUserID);
//                                newConsole.setCreatedOn(new Date());
//                                newConsole.setUpdatedBy(loginUserID);
//                                newConsole.setUpdatedOn(new Date());
//
//                                // Get Piece
//                                List<String> piece = replicaPieceDetailsRepository.getPieceId(newConsole.getLanguageId(), newConsole.getCompanyId(),
//                                        newConsole.getPartnerId(), newConsole.getPartnerHouseAirwayBill(), newConsole.getPartnerMasterAirwayBill());
//
//                                if (piece != null) {
//                                    for (String pieceId : piece) {
//                                        newConsole.setPieceId(pieceId);
//                                        Console createdConsole = consoleRepository.save(newConsole);
//
//                                        if (eventDescOpt.isPresent()) {
//                                            IKeyValuePair ikey = eventDescOpt.get();
//
//                                            newConsole.setPieceType("EVENT");
//                                            newConsole.setPieceTypeId("5");
//                                            newConsole.setPieceTypeDescription(ikey.getEventText());
//                                            newConsole.setPieceTimeStamp(new Date());
//                                        }
//
//                                        if (createdConsole != null) {
//                                            // Save ConsignmentStatus
//                                            consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
//                                                    createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
//                                                    createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
//                                                    createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
//                                                    createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
//                                                    createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
//                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
//
//                                            // Update ConsignmentEntity Table
//                                            consoleRepository.updateConsignmentOnConsoleCreate(
//                                                    createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
//                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
//
//                                            // Update PreAlert Table
//                                            consoleRepository.updatePreAlertOnConsoleCreate(
//                                                    createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
//                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
//                                                    createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType());
//
//                                            log.info("Console Created<----------------------->Consignment Event Updated");
//                                        }
//                                        createdConsoleList.add(createdConsole);
//                                    }
//                                } else {
//                                    log.info("Piece Not Available in the CompanyId " + newConsole.getCompanyId() + " LanguageId " + newConsole.getConsoleId() +
//                                            " PartnerId " + newConsole.getPartnerId() + " PartnerHouseAirwayBill " + newConsole.getPartnerMasterAirwayBill() +
//                                            " PartnerMasterAirwayBill " + newConsole.getPartnerMasterAirwayBill() + " Doesn't exist");
//                                }
//                            } else {
//                                createdConsoleList.add(duplicateConsole);
//                            }
//                        }
//                    }
//                }
//            }
//        }
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
        List<AddConsole> nullHsCodeList = addConsoleList.stream().filter(console -> console.getHsCode().isEmpty()).collect(Collectors.toList());

        // Create a map to group consignments by hsCode
        Map<String, List<AddConsole>> groupedByHsCode = addConsoleList.stream()
                .filter(console -> !console.getHsCode().isEmpty())
                .collect(Collectors.groupingBy(AddConsole::getHsCode));

        //If HsCode is null
        if (!nullHsCodeList.isEmpty()) {
            String CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
            log.info("next Value from NumberRange for CONSOLE_ID : " + CONSOLE_ID);
            for (AddConsole addConsole : nullHsCodeList) {

                Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
                        addConsole.getLanguageId(), addConsole.getCompanyId(), addConsole.getPartnerId(), addConsole.getPartnerMasterAirwayBill(), addConsole.getPartnerHouseAirwayBill(),
                        addConsole.getPieceId(), 0L);
                if (duplicateConsole == null) {

                    Console newConsole = new Console();
                    BeanUtils.copyProperties(addConsole, newConsole, CommonUtils.getNullPropertyNames(addConsole));

                    Optional<String> eventDescOpt = consignmentEntityRepository.statusEventText(
                            addConsole.getCompanyId(), addConsole.getLanguageId(), "45");
                    if (eventDescOpt.isPresent()) {
                        String ikey = eventDescOpt.get();

                        newConsole.setHawbType("EVENT");
                        newConsole.setHawbTypeId("45");
                        newConsole.setHawbTypeDescription(ikey);
                        newConsole.setHawbTimeStamp(new Date());

                        newConsole.setPieceType("EVENT");
                        newConsole.setPieceTypeId("45");
                        newConsole.setPieceTypeDescription(ikey);
                        newConsole.setPieceTimeStamp(new Date());
                    }

                    IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
                            addConsole.getLanguageId(), addConsole.getCompanyId());

                    if (lAndCDesc != null) {
                        newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
                        newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
                    }
                    newConsole.setConsoleId(CONSOLE_ID);
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
                                String ikey = eventDescOpt.get();

                                newConsole.setPieceType("EVENT");
                                newConsole.setPieceTypeId("45");
                                newConsole.setPieceTypeDescription(ikey);
                                newConsole.setPieceTimeStamp(new Date());
                            }
                            createdConsoleList.add(newConsole);
                        }
                    }
                } else {
                    createdConsoleList.add(duplicateConsole);
                }
            }
        }

        Map<String, Map<String, List<AddConsole>>> groupedBySpecialApproval = new HashMap<>();

        //GROUP BY HSCODE
        for (Map.Entry<String, List<AddConsole>> entry : groupedByHsCode.entrySet()) {
            List<AddConsole> consoleList = entry.getValue();
            String hsCode = entry.getKey();

            String specialApproval = null;
            for (AddConsole getCompany : consoleList) {
                specialApproval = replicaConsoleRepository.getSpecialApproval(getCompany.getCompanyId(), hsCode);
            }

            //SPECIAL APPROVAL
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
                        for (AddConsole console : consoleEntryList) {

                            Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getPartnerMasterAirwayBill(),
                                    console.getPartnerHouseAirwayBill(), console.getPieceId(), 0L);

                            if (duplicateConsole == null) {

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
                                if (lAndCDesc != null) {
                                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
                                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
                                }

                                Optional<String> eventDescOpt = consignmentEntityRepository.statusEventText(
                                        console.getCompanyId(), console.getLanguageId(), "45");
                                if (eventDescOpt.isPresent()) {
                                    String ikey = eventDescOpt.get();

                                    newConsole.setHawbType("EVENT");
                                    newConsole.setHawbTypeId("45");
                                    newConsole.setHawbTypeDescription(ikey);
                                    newConsole.setHawbTimeStamp(new Date());
                                }

                                newConsole.setExpectedDuty(String.valueOf(totalDuty));
                                newConsole.setConsoleId(CONSOLE_ID);
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
                                            String ikey = eventDescOpt.get();

                                            newConsole.setPieceType("EVENT");
                                            newConsole.setPieceTypeId("45");
                                            newConsole.setPieceTypeDescription(ikey);
                                            newConsole.setPieceTimeStamp(new Date());
                                        }
                                        createdConsoleList.add(newConsole);
                                    }
                                } else {
                                    log.info("Piece Not Available in the CompanyId " + newConsole.getCompanyId() + " LanguageId " + newConsole.getConsoleId() +
                                            " PartnerId " + newConsole.getPartnerId() + " PartnerHouseAirwayBill " + newConsole.getPartnerMasterAirwayBill() +
                                            " PartnerMasterAirwayBill " + newConsole.getPartnerMasterAirwayBill() + " Doesn't exist");

                                }
                            } else {
                                createdConsoleList.add(duplicateConsole);
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

                        for (AddConsole console : subGroup) {
                            // Duplicate Check
                            Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getPartnerMasterAirwayBill(), console.getPartnerHouseAirwayBill(), console.getPieceId(), 0L);

                            if (duplicateConsole == null) {

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

                                Optional<String> eventDescOpt = consignmentEntityRepository.statusEventText(
                                        console.getCompanyId(), console.getLanguageId(), "45");
                                if (eventDescOpt.isPresent()) {
                                    String ikey = eventDescOpt.get();

                                    newConsole.setHawbType("EVENT");
                                    newConsole.setHawbTypeId("45");
                                    newConsole.setHawbTypeDescription(ikey);
                                    newConsole.setHawbTimeStamp(new Date());
                                }

                                newConsole.setExpectedDuty(String.valueOf(totalDuty));
//                            newConsole.setCustomsValue(CUS_VAL);
                                newConsole.setConsoleId(SUB_CONSOLE_ID);
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
//                                        Console createdConsole = consoleRepository.save(newConsole);

                                        if (eventDescOpt.isPresent()) {
                                            String ikey = eventDescOpt.get();

                                            newConsole.setPieceType("EVENT");
                                            newConsole.setPieceTypeId("45");
                                            newConsole.setPieceTypeDescription(ikey);
                                            newConsole.setPieceTimeStamp(new Date());
                                        }
                                        createdConsoleList.add(newConsole);
                                    }
                                } else {
                                    log.info("Piece Not Available in the CompanyId " + newConsole.getCompanyId() + " LanguageId " + newConsole.getConsoleId() +
                                            " PartnerId " + newConsole.getPartnerId() + " PartnerHouseAirwayBill " + newConsole.getPartnerMasterAirwayBill() +
                                            " PartnerMasterAirwayBill " + newConsole.getPartnerMasterAirwayBill() + " Doesn't exist");
                                }
                            } else {
                                createdConsoleList.add(duplicateConsole);
                            }
                        }
                    }
                }
            }
        }
        return setConsoleName(createdConsoleList, loginUserID);
    }


    // SetConsoleName
    public List<Console> setConsoleName(List<Console> consoleList, String loginUserID) {

        List<Console> multiConsole = new ArrayList<>();
        // Create a map to group consignments by consoleId
        int consoleName = 1;
        Map<String, List<Console>> groupByConsoleId = consoleList.stream()
                .collect(Collectors.groupingBy(Console::getConsoleId));

        for (Map.Entry<String, List<Console>> entry : groupByConsoleId.entrySet()) {
            List<Console> listConsole = entry.getValue();

            String currentConsoleName = "ConsoleName - " + consoleName;
            for (Console console : listConsole) {
                console.setConsoleName(currentConsoleName);
                log.info("CONSOLE_ID ----------->" + console.getConsoleId() + "------------CONSOLE_NAME---" + currentConsoleName);

                Console createdConsole = consoleRepository.save(console);

                // Send Notification
                sendNotificationForConsoleCreate(createdConsole.getCompanyId(), createdConsole.getLanguageId(),
                        createdConsole.getConsoleId(), createdConsole.getHouseAirwayBill(), createdConsole.getConsoleGroupName(),
                        createdConsole.getConsoleName());

                if (createdConsole != null) {
                    // Save ConsignmentStatus
                    consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
                            createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(), createdConsole.getMasterAirwayBill(),
                            createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(), createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
                            createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
                            createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
                            createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(), null,
                            createdConsole.getHubCode(), createdConsole.getHubName());

                    // Update ConsignmentEntity Table
                    consoleRepository.updateConsignmentOnConsoleCreate(
                            createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
                            createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill()
                    );

                    // Update PreAlert Table
                    consoleRepository.updatePreAlertOnConsoleCreate(
                            createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
                            createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
                            createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType()
                    );

                    log.info("Console Created<----------------------->Consignment Status Created");
                    multiConsole.add(createdConsole);
                }
            }
            consoleName++;
        }
        return multiConsole;
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
            Long CONSOLE_NAME = 1L;
            log.info("next Value from NumberRange for CONSOLE_ID : " + CONSOLE_ID);
            for (AddConsole addConsole : addConsoleList) {

                Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
                        addConsole.getLanguageId(), addConsole.getCompanyId(), addConsole.getPartnerId(), addConsole.getPartnerMasterAirwayBill(), addConsole.getPartnerHouseAirwayBill(),
                        addConsole.getPieceId(), 0L);
                if (duplicateConsole == null) {

                    Console newConsole = new Console();
                    BeanUtils.copyProperties(addConsole, newConsole, CommonUtils.getNullPropertyNames(addConsole));

                    Optional<String> eventDescOpt = consignmentEntityRepository.statusEventText(
                            addConsole.getCompanyId(), addConsole.getLanguageId(), "45");
                    if (eventDescOpt.isPresent()) {
                        String ikey = eventDescOpt.get();

                        newConsole.setHawbType("EVENT");
                        newConsole.setHawbTypeId("45");
                        newConsole.setHawbTypeDescription(ikey);
                        newConsole.setHawbTimeStamp(new Date());

                        newConsole.setPieceType("EVENT");
                        newConsole.setPieceTypeId("45");
                        newConsole.setPieceTypeDescription(ikey);
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

                    CONSOLE_NAME++;

                    Console createdConsole = consoleRepository.save(newConsole);

                    if (createdConsole != null) {
                        // Save ConsignmentStatus
                        consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
                                createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
                                createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
                                createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
                                createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
                                createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(), null,
                                createdConsole.getHubCode(), createdConsole.getHubName());

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
                } else {
                    createdConsoleList.add(duplicateConsole);
                }
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

                Optional<IKeyValuePair> ikey = replicaConsoleRepository.getInvoice(updateConsole.getCompanyId(),
                        updateConsole.getLanguageId(), updateConsole.getPartnerId(), updateConsole.getPartnerHouseAirwayBill(),
                        updateConsole.getPartnerMasterAirwayBill());

                if (ikey.isPresent()) {
                    IKeyValuePair invoice = ikey.get();
                    dbConsole.setInvoiceNumber(invoice.getInvoiceNumber());
                    dbConsole.setInvoiceDate(invoice.getInvoiceDate());
                }
                dbConsole.setInvoiceType("FOB");
                dbConsole.setFreightCurrency("KWD");
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
                log.info("Console Id <-------------------------------> {}", updateConsole);

                // UnConsolidation Create
                if (updateConsole.getUnconsolidatedFlag() == 1L) {
                    AddUnconsolidation addUnconsolidation = new AddUnconsolidation();
                    BeanUtils.copyProperties(updateConsole, addUnconsolidation, CommonUtils.getNullPropertyNames(updateConsole));
                    unconsolidationService.generateUnconsolidation(addUnconsolidation, loginUserID);
                    return Collections.emptyList();
                } else {

                    log.info("UnConsolidatedFlag <---------------------------------------------> {} ", updateConsole.getUnconsolidatedFlag());
                    Console dbConsole = getConsole(updateConsole.getLanguageId(), updateConsole.getCompanyId(), updateConsole.getPartnerId(),
                            updateConsole.getPartnerMasterAirwayBill(), updateConsole.getPartnerHouseAirwayBill(), updateConsole.getConsoleId(), updateConsole.getPieceId());

                    BeanUtils.copyProperties(updateConsole, dbConsole, CommonUtils.getNullPropertyNames(updateConsole));
                    log.info("Console HawbTypeId: {} ", updateConsole.getHawbTypeId());

                    Optional<String> statusID5DescOpt = consignmentEntityRepository.statusEventText(updateConsole.getCompanyId(), updateConsole.getLanguageId(), "5");
                    if (statusID5DescOpt.isPresent()) {
                        String ikey = statusID5DescOpt.get();

                        dbConsole.setHawbType("STATUS");
                        dbConsole.setHawbTypeId("5");
                        dbConsole.setHawbTypeDescription(ikey);
                        dbConsole.setHawbTimeStamp(new Date());

                        dbConsole.setPieceType("STATUS");
                        dbConsole.setPieceTypeId("5");
                        dbConsole.setPieceTypeDescription(ikey);
                        dbConsole.setPieceTimeStamp(new Date());
                    }

                    if (updateConsole.getUnconsolidatedFlag() != null) {
                        if (updateConsole.getUnconsolidatedFlag() == 1L) {
                            AddUnconsolidation addUnconsolidation = new AddUnconsolidation();
                            BeanUtils.copyProperties(updateConsole, addUnconsolidation, CommonUtils.getNullPropertyNames(updateConsole));
                            // Create Unconsolidation record
                            unconsolidationService.generateUnconsolidation(addUnconsolidation, loginUserID);
                        }
                    }

                    dbConsole.setScannedBy(loginUserID);
                    dbConsole.setScannedOn(new Date());

                    dbConsole.setUpdatedBy(loginUserID);
                    dbConsole.setUpdatedOn(new Date());
                    Console updatedConsole = consoleRepository.save(dbConsole);

                    // BagId
                    Long BAG_ID = 0L;
                    ConsignmentEntity dbConsignment = consignmentEntityRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndDeletionIndicator(
                            updatedConsole.getCompanyId(), updatedConsole.getLanguageId(), updatedConsole.getPartnerId(), updatedConsole.getMasterAirwayBill(), updatedConsole.getHouseAirwayBill(), 0L);

                    if (dbConsignment.getConsignmentBagId() == null) {
                        BAG_ID = Long.valueOf(numberRangeService.getNextNumberRange("BAGID"));
                    } else {
                        BAG_ID = dbConsignment.getConsignmentBagId();
                    }

                    if (updatedConsole != null) {

                        Optional<String> statusID4DescOpt = consignmentEntityRepository.statusEventText(updateConsole.getCompanyId(), updateConsole.getLanguageId(), "4");
                        if (statusID4DescOpt.isPresent()) {
                            String ikey = statusID4DescOpt.get();

                            // Create Consignment Status Table record with StatusID - 4
                            consignmentStatusService.insertConsignmentStatusRecord(updatedConsole.getLanguageId(), updatedConsole.getLanguageDescription(),
                                    updatedConsole.getCompanyId(), updatedConsole.getCompanyName(), updatedConsole.getPieceId(),
                                    updatedConsole.getMasterAirwayBill(), updatedConsole.getHouseAirwayBill(), updatedConsole.getHawbType(),
                                    "4", ikey, updatedConsole.getHawbTimeStamp(), updatedConsole.getPieceType(),
                                    "4", ikey, updatedConsole.getPieceTimeStamp(), loginUserID,
                                    updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(), BAG_ID,
                                    updateConsole.getHubCode(), updateConsole.getHubName());
                        }

                        // Create Consignment Status Table record with StatusID - 5
                        consignmentStatusService.insertConsignmentStatusRecord(updatedConsole.getLanguageId(), updatedConsole.getLanguageDescription(),
                                updatedConsole.getCompanyId(), updatedConsole.getCompanyName(), updatedConsole.getPieceId(),
                                updatedConsole.getMasterAirwayBill(), updatedConsole.getHouseAirwayBill(), updatedConsole.getHawbType(),
                                updatedConsole.getHawbTypeId(), updatedConsole.getHawbTypeDescription(),
                                updatedConsole.getHawbTimeStamp(), updatedConsole.getPieceType(), updatedConsole.getPieceTypeId(),
                                updatedConsole.getPieceTypeDescription(), updatedConsole.getPieceTimeStamp(), loginUserID,
                                updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(), BAG_ID,
                                updateConsole.getHubCode(), updateConsole.getHubName());

                        // Update ConsignmentEntity Table
                        consoleRepository.updateConsignmentOnConsoleCreate(
                                updatedConsole.getLanguageId(), updatedConsole.getCompanyId(), updatedConsole.getPartnerId(),
                                updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(),
                                updatedConsole.getHawbTypeDescription(), updatedConsole.getHawbTypeId(), updatedConsole.getHawbType(),
                                updateConsole.getHubCode(), BAG_ID);

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

                        updatedConsoleList.add(updatedConsole);
                    }
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

            Optional<IKeyValuePair> getStatusOpt =
                    consignmentEntityRepository.statusText(updateConsole.getCompanyId(), updateConsole.getLanguageId(), updateConsole.getHawbTypeId());

            if (getStatusOpt.isPresent()) {
                IKeyValuePair ikey = getStatusOpt.get();

                dbConsole.setHawbType(ikey.getType());
                dbConsole.setHawbTypeId(updateConsole.getHawbTypeId());
                dbConsole.setHawbTypeDescription(ikey.getTypeText());
                dbConsole.setHawbTimeStamp(new Date());

                dbConsole.setPieceType(ikey.getType());
                dbConsole.setPieceTypeId(updateConsole.getHawbTypeId());
                dbConsole.setPieceTypeDescription(ikey.getTypeText());
                dbConsole.setPieceTimeStamp(new Date());
            }

            Console updatedConsole = consoleRepository.save(dbConsole);

            if (updatedConsole != null) {
                // Update ConsignmentEntity Table
                if (updatedConsole.getHawbType().equalsIgnoreCase("STATUS")) {
                    consoleRepository.updateConsignmentOnConsoleUpdate(
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

                //Insert ConsignmentStatus
                consignmentStatusService.insertConsignmentStatusRecord(updatedConsole.getLanguageId(), updatedConsole.getLanguageDescription(),
                        updatedConsole.getCompanyId(), updatedConsole.getCompanyName(), updatedConsole.getPieceId(),
                        updatedConsole.getMasterAirwayBill(), updatedConsole.getHouseAirwayBill(), updatedConsole.getHawbType(),
                        updatedConsole.getHawbTypeId(), updatedConsole.getHawbTypeDescription(),
                        updatedConsole.getHawbTimeStamp(), updatedConsole.getPieceType(), updatedConsole.getPieceTypeId(),
                        updatedConsole.getPieceTypeDescription(), updatedConsole.getPieceTimeStamp(), loginUserID,
                        updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(), null,
                        updatedConsole.getHubCode(), updatedConsole.getHubName());

                consoleList.add(updatedConsole);
            }
        }
        return consoleList;
    }


    /**
     * Update Mobile App & Status Event Update Mobile App Join API
     *
     * @param updateConsoleList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    public List<Console> updateConsoleStatusOrForMobileApp(List<UpdateConsole> updateConsoleList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<Console> result = new ArrayList<>();
            List<UpdateConsole> statusUpdateList = new ArrayList<>();
            List<UpdateConsole> mobileAppUpdateList = new ArrayList<>();

            // Separate consoles based on hawbTypeId
            for (UpdateConsole updateConsole : updateConsoleList) {
                log.info(" HAWB_TYPE " + updateConsole.getHawbTypeId());
                log.info(" Update Console: {}" , updateConsole);
                if ("45".equals(updateConsole.getHawbTypeId()) || updateConsole.getHawbTypeId() == null) {
                    mobileAppUpdateList.add(updateConsole);
                } else {
                    statusUpdateList.add(updateConsole);
                }
            }

            // Call updateConsoleForMobileApp for consoles with hawbTypeId 45 or null
            if (!mobileAppUpdateList.isEmpty()) {
                result.addAll(updateConsoleForMobileApp(mobileAppUpdateList, loginUserID));
            }

            // Manually map UpdateConsole to ConsoleStatus
            List<ConsoleStatus> consoleStatuses = new ArrayList<>();
            for (UpdateConsole updateConsole : statusUpdateList) {
                ConsoleStatus consoleStatus = new ConsoleStatus();
                consoleStatus.setLanguageId(updateConsole.getLanguageId());
                consoleStatus.setCompanyId(updateConsole.getCompanyId());
                consoleStatus.setPartnerId(updateConsole.getPartnerId());
                consoleStatus.setPartnerMasterAirwayBill(updateConsole.getPartnerMasterAirwayBill());
                consoleStatus.setPartnerHouseAirwayBill(updateConsole.getPartnerHouseAirwayBill());
                consoleStatus.setConsoleId(updateConsole.getConsoleId());
                consoleStatus.setPieceId(updateConsole.getPieceId());
                consoleStatus.setHawbTypeId(updateConsole.getHawbTypeId());
                consoleStatus.setHubCode(updateConsole.getHubCode());
                if(updateConsole.getUnconsolidatedFlag() == 1) {
                    consoleStatus.setUnconsolidatedFlag(1L);
                }
                consoleStatuses.add(consoleStatus);
            }

            // Call updateConsoleStatus for other consoles
            if (!consoleStatuses.isEmpty()) {
                result.addAll(updateConsoleStatus(consoleStatuses, loginUserID));
            }
            log.info(" Updated Console: {}", result);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            throw new BadRequestException("Exception : " + e);
        }
    }

    /**
     * UpdateConsole
     *
     * @param updateConsoleList
     * @param loginUserID
     * @return
     */
    public List<Console> updateConsoleStatus(List<ConsoleStatus> updateConsoleList, String loginUserID) throws IOException, InvocationTargetException,
            IllegalAccessException, CsvException {

        try {
            List<Console> consoleList = new ArrayList<>();

            for (ConsoleStatus updateConsole : updateConsoleList) {
                log.info("UpdateConsole : {}" , updateConsole );
                // UnConsolidation Create
                if (updateConsole.getUnconsolidatedFlag() == 1L) {
                    AddUnconsolidation addUnconsolidation = new AddUnconsolidation();
                    BeanUtils.copyProperties(updateConsole, addUnconsolidation, CommonUtils.getNullPropertyNames(updateConsole));
                    unconsolidationService.generateUnconsolidation(addUnconsolidation, loginUserID);
                    return Collections.emptyList();
                } else {
                    log.info("UnConsolidatedFlag <---------------------------------------------> {} ", updateConsole.getUnconsolidatedFlag());

                    Console dbConsole =
                            consoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndConsoleIdAndPieceIdAndDeletionIndicator(
                                    updateConsole.getLanguageId(), updateConsole.getCompanyId(), updateConsole.getPartnerId(), updateConsole.getPartnerMasterAirwayBill(),
                                    updateConsole.getPartnerHouseAirwayBill(), updateConsole.getConsoleId(), updateConsole.getPieceId(), 0L);

                    if (dbConsole == null) {
                        throw new BadRequestException("Given Values Doesn't exist");
                    }
                    log.info("Console Update HwbTypeId: {} ", updateConsole.getHawbTypeId());
                    BeanUtils.copyProperties(updateConsole, dbConsole, CommonUtils.getNullPropertyNames(updateConsole));

                    Optional<IKeyValuePair> getStatusOpt =
                            consignmentEntityRepository.statusText(dbConsole.getCompanyId(), dbConsole.getLanguageId(), dbConsole.getHawbTypeId());

                    if (getStatusOpt.isPresent()) {
                        IKeyValuePair ikey = getStatusOpt.get();

                        dbConsole.setHawbType(ikey.getType());
                        dbConsole.setHawbTypeId(updateConsole.getHawbTypeId());
                        dbConsole.setHawbTypeDescription(ikey.getTypeText());
                        dbConsole.setHawbTimeStamp(new Date());

                        dbConsole.setPieceType(ikey.getType());
                        dbConsole.setPieceTypeId(updateConsole.getHawbTypeId());
                        dbConsole.setPieceTypeDescription(ikey.getTypeText());
                        dbConsole.setPieceTimeStamp(new Date());
                    }

                    // HubName
                    if (dbConsole.getHubCode() != null) {
                        String hubCodeDesc = consoleRepository.getHubName(
                                dbConsole.getCompanyId(), dbConsole.getLanguageId(), dbConsole.getHubCode());
                        if (hubCodeDesc != null) {
                            dbConsole.setHubName(hubCodeDesc);
                        }
                    }
                    dbConsole.setUpdatedBy(loginUserID);
                    dbConsole.setUpdatedOn(new Date());

                    if (dbConsole.getHawbTypeId().equalsIgnoreCase("6") || dbConsole.getHawbTypeId().equalsIgnoreCase("7")
                            || dbConsole.getHawbTypeId().equalsIgnoreCase("8")) {

                        List<ReplicaConsignmentStatus> dbConsignment = replicaConsignmentStatusRepository.findByCompanyIdAndLanguageIdAndHouseAirwayBillAndPieceIdAndDeletionIndicator(
                                dbConsole.getCompanyId(), dbConsole.getLanguageId(), dbConsole.getHouseAirwayBill(), dbConsole.getPieceId(), 0L);

                        boolean hawbTypeIdFound = dbConsignment.stream()
                                .anyMatch(status -> status.getHawbTypeId() != null && status.getHawbTypeId()
                                        .equalsIgnoreCase("5"));
                        if (!hawbTypeIdFound) {
                            throw new BadRequestException("No Record Found with TypeId 5 And TypeText " + dbConsole.getHawbType());
                        }
                    }

                    Console updatedConsole = consoleRepository.save(dbConsole);

                    if (updatedConsole != null) {
                        // Update ConsignmentEntity Table
                        if (updatedConsole.getHawbType().equalsIgnoreCase("STATUS")) {
                            consoleRepository.updateConsignmentOnConsoleUpdate(
                                    updatedConsole.getLanguageId(), updatedConsole.getCompanyId(), updatedConsole.getPartnerId(),
                                    updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(),
                                    updatedConsole.getHawbTypeDescription(), updatedConsole.getHawbTypeId(), updatedConsole.getHawbType(),
                                    updatedConsole.getHubCode(), updatedConsole.getHubName());
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
                                updatedConsole.getPartnerHouseAirwayBill(), updatedConsole.getPartnerMasterAirwayBill(), updateConsole.getBagId(),
                                updateConsole.getHubCode(), updatedConsole.getHubName());

                        consoleList.add(updatedConsole);
                    }
                }
            }
            return consoleList;
        } catch (Exception e) {
            e.printStackTrace();
            throw new BadRequestException("Exception : " + e);
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
                log.info("Console List ------------------------->" + deleteInputList);
                for (ConsoleDeleteInput deleteInput : deleteInputList) {

                    Console dbConsole = getConsole(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                            deleteInput.getPartnerId(), deleteInput.getPartnerMasterAirwayBill(), deleteInput.getPartnerHouseAirwayBill(),
                            deleteInput.getConsoleId(), deleteInput.getPieceId());

                    if (dbConsole != null) {
                        dbConsole.setDeletionIndicator(1L);
                        dbConsole.setUpdatedBy(loginUserID);
                        dbConsole.setUpdatedOn(new Date());

                        consoleRepository.save(dbConsole);
                        log.info("Delete Console List---------------------------> " + dbConsole);
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
     * Find Consoles by Pagination
     *
     * @param findConsole
     * @param pageNo
     * @param pageSize
     * @param sortBy
     * @return
     * @throws Exception
     */
    public Page<ReplicaConsole> findConsolesByPagination(FindConsole findConsole, Integer pageNo, Integer
            pageSize, String sortBy) throws Exception {

        log.info("given Params to fetch Consoles by Pagination --> {}", findConsole);
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy).descending());
        ConsoleSpecification spec = new ConsoleSpecification(findConsole);
        Page<ReplicaConsole> results = replicaConsoleRepository.findAll(spec, paging);
//        log.info("no of Consoles fetched --> {}", results.getSize());
        return results;
    }

    /**
     * Find Consoles - normal
     *
     * @param findConsole
     * @return
     * @throws Exception
     */
    public List<ReplicaConsole> findConsoles(FindConsole findConsole) throws Exception {

        log.info("given Params to fetch Consoles with Qry -- > {}", findConsole);
        List<ReplicaConsole> consoleList = replicaConsoleRepository.findConsolesWithQry(
                findConsole.getLanguageId(), findConsole.getCompanyId(), findConsole.getPartnerId(), findConsole.getPartnerMasterAirwayBill(),
                findConsole.getPartnerHouseAirwayBill(), findConsole.getConsoleId(), findConsole.getUnconsolidatedFlag(), findConsole.getHawbTypeId());
        return consoleList;
    }
//    public List<ReplicaConsole> findConsoles(FindConsole findConsole) throws Exception {
//
//        log.info("given Params to fetch Consoles -- > {}", findConsole);
//        ConsoleSpecification spec = new ConsoleSpecification(findConsole);
//        List<ReplicaConsole> consoleList = replicaConsoleRepository.findAll(spec);
//        return consoleList;
//    }

    /**
     * Find Consoles - MobileApp
     *
     * @param findConsole
     * @return
     * @throws Exception
     */
    public List<ReplicaConsole> findConsolesMobileApp(FindConsole findConsole) throws Exception {

        if (findConsole.getShippingLabelNo() == null) {
            throw new BadRequestException("ShippingLabelNo cannot be null");
        }
        log.info("given Params to fetch Consoles for Mobile App with Qry --> {}", findConsole);

        List<String> languageId = findConsole.getLanguageId();
        List<String> companyId = findConsole.getCompanyId();
        List<String> partnerId = findConsole.getPartnerId();
        List<String> partnerMasterAirwayBill = findConsole.getPartnerMasterAirwayBill();
        List<String> partnerHouseAirwayBill = findConsole.getPartnerHouseAirwayBill();
        List<String> shippingLabelNo = findConsole.getShippingLabelNo();
        List<String> consoleId = findConsole.getConsoleId();
        List<Long> unconsolidatedFlag = findConsole.getUnconsolidatedFlag();
        List<String> hawbTypeId = findConsole.getHawbTypeId();

        // Initially pass shippingLabelNo to partnerHouseAirwayBill
        List<ReplicaConsole> consoleList = replicaConsoleRepository.findConsolesWithQry(
                languageId, companyId, partnerId, partnerMasterAirwayBill, shippingLabelNo, consoleId, unconsolidatedFlag, hawbTypeId);

        if (consoleList == null || consoleList.isEmpty()) {
            // Else pass shippingLabelNo to consoleId
            consoleList = replicaConsoleRepository.findConsolesWithQry(
                    languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, shippingLabelNo, unconsolidatedFlag, hawbTypeId);
        }
        if (consoleList == null || consoleList.isEmpty()) {
//            throw new BadRequestException("No console Data found for given params : shippingLabelNo - " + findConsole.getShippingLabelNo());
            log.warn("No console data found for given params: shippingLabelNo - {}", findConsole.getShippingLabelNo());
            return Collections.emptyList();
        }
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
        List<Console> getConsoleId = consoleRepository.findByConsoleIdAndDeletionIndicator(consoleId, 0L);
        return getConsoleId;
    }


    // public List<Console> createConsoleList(List<AddConsole> addConsoleList, String loginUserID)
    //            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
    //        List<Console> createdConsoleList = new ArrayList<>();
    //
    //        int consoleCounter = 1;
    //
    //        // Separate records where hsCode is null
    //        List<AddConsole> nullHsCodeList = addConsoleList.stream()
    //                .filter(console -> console.getHsCode().isEmpty())
    //                .collect(Collectors.toList());
    //
    //        // Create a map to group consignments by hsCode
    //        Map<String, List<AddConsole>> groupedByHsCode = addConsoleList.stream()
    //                .filter(console -> !console.getHsCode().isEmpty())
    //                .collect(Collectors.groupingBy(AddConsole::getHsCode));
    //
    //        if (!nullHsCodeList.isEmpty()) {
    //            List<Console> addConsole = createConsoleNormal(nullHsCodeList, loginUserID);
    //            for (Console console : addConsole) {
    //                createdConsoleList.add(console);
    //            }
    //        }
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
    //
    //                        String CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
    //                        int CONSOLE_NAME = 1;
    //
    //                        for (AddConsole console : consoleEntryList) {
    //
    //                            Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
    //                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getPartnerMasterAirwayBill(),
    //                                    console.getPartnerHouseAirwayBill(), console.getPieceId(), 0L);
    //
    //                            if (duplicateConsole == null) {
    //
    //                                // Pass ConsignmentCurrency
    //                                IKeyValuePair iKeyValuePair = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());
    //                                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
    //                                        console.getLanguageId(), console.getCompanyId());
    //
    //                                Console newConsole = new Console();
    //                                BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));
    //
    //                                Double consignmentValue = null;
    //                                if (console.getConsignmentValue() != null) {
    //                                    consignmentValue = Double.valueOf(console.getConsignmentValue());
    //                                }
    //                                // Set TotalDuty Value
    //                                double totalDuty = 0;
    //                                if (iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
    //                                    double toCurrencyValue = Double.parseDouble(iKeyValuePair.getCurrencyValue());
    //                                    if (toCurrencyValue != 0 && consignmentValue != 0 && consignmentValue != null) {
    //                                        totalDuty = toCurrencyValue * consignmentValue;
    //                                        if (totalDuty > 100) {
    //                                            totalDuty += totalDuty * 0.05;
    //                                        }
    //                                        if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
    //                                            totalDuty += 4;
    //                                        }
    //                                    }
    //                                }
    ////                            if (iataData != null && iataData.getIataKd() != null) {
    ////                                newConsole.setIataKd(iataData.getIataKd());
    ////                            }
    //                                if (lAndCDesc != null) {
    //                                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
    //                                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
    //                                }
    //
    //                                Optional<IKeyValuePair> eventDescOpt = consignmentEntityRepository.getEventText(
    //                                        console.getLanguageId(), console.getCompanyId(), "5");
    //                                if (eventDescOpt.isPresent()) {
    //                                    IKeyValuePair ikey = eventDescOpt.get();
    //
    //                                    newConsole.setHawbType("EVENT");
    //                                    newConsole.setHawbTypeId("5");
    //                                    newConsole.setHawbTypeDescription(ikey.getEventText());
    //                                    newConsole.setHawbTimeStamp(new Date());
    //                                }
    //
    //                                newConsole.setExpectedDuty(String.valueOf(totalDuty));
    //                                newConsole.setConsoleId(CONSOLE_ID);
    //                                newConsole.setConsoleName("Console - " + CONSOLE_NAME);
    //                                newConsole.setDeletionIndicator(0L);
    //                                newConsole.setCreatedBy(loginUserID);
    //                                newConsole.setCreatedOn(new Date());
    //                                newConsole.setUpdatedBy(loginUserID);
    //                                newConsole.setUpdatedOn(new Date());
    //
    //                                // Get Piece
    //                                List<String> piece = replicaPieceDetailsRepository.getPieceId(newConsole.getLanguageId(), newConsole.getCompanyId(),
    //                                        newConsole.getPartnerId(), newConsole.getPartnerHouseAirwayBill(), newConsole.getPartnerMasterAirwayBill());
    //
    //                                if (piece != null) {
    //                                    for (String pieceId : piece) {
    //
    //                                        newConsole.setPieceId(pieceId);
    //
    //                                        if (eventDescOpt.isPresent()) {
    //                                            IKeyValuePair ikey = eventDescOpt.get();
    //
    //                                            newConsole.setPieceType("EVENT");
    //                                            newConsole.setPieceTypeId("5");
    //                                            newConsole.setPieceTypeDescription(ikey.getEventText());
    //                                            newConsole.setPieceTimeStamp(new Date());
    //                                        }
    //
    //                                        Console createdConsole = consoleRepository.save(newConsole);
    //
    //                                        if (createdConsole != null) {
    //                                            // Save ConsignmentStatus
    //                                            consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
    //                                                    createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
    //                                                    createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
    //                                                    createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
    //                                                    createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
    //                                                    createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
    //                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
    //
    //                                            // Update ConsignmentEntity Table
    //                                            consoleRepository.updateConsignmentOnConsoleCreate(
    //                                                    createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
    //                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
    //
    //                                            // Update PreAlert Table
    //                                            consoleRepository.updatePreAlertOnConsoleCreate(
    //                                                    createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
    //                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
    //                                                    createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType());
    //
    //                                            log.info("Console Created <-----------------------> Consignment Status Insert and Console_Indicator Updated");
    //                                        }
    //                                        createdConsoleList.add(createdConsole);
    //                                    }
    //                                } else {
    //                                    log.info("Piece Not Available in the CompanyId " + newConsole.getCompanyId() + " LanguageId " + newConsole.getConsoleId() +
    //                                            " PartnerId " + newConsole.getPartnerId() + " PartnerHouseAirwayBill " + newConsole.getPartnerMasterAirwayBill() +
    //                                            " PartnerMasterAirwayBill " + newConsole.getPartnerMasterAirwayBill() + " Doesn't exist");
    //
    //                                }
    //                            } else {
    //                                createdConsoleList.add(duplicateConsole);
    //                            }
    //                        }
    //                        CONSOLE_NAME++;
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
    ////                        IKeyValuePair iataValue = ccrRepository.getIataKd(console.getCountryOfOrigin(), console.getLanguageId(), console.getCompanyId());
    //                        Double iataKd = 0.0;
    //                        if (console.getIata() != null) {
    //                            iataKd = Double.valueOf(console.getIata());
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
    //
    //                        String SUB_CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
    //                        Long SUB_CONSOLE_NAME = 1L;
    //
    //                        for (AddConsole console : subGroup) {
    //                            // Duplicate Check
    //                            Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
    //                                    console.getLanguageId(), console.getCompanyId(), console.getPartnerId(), console.getPartnerMasterAirwayBill(), console.getPartnerHouseAirwayBill(), console.getPieceId(), 0L);
    //
    //                            if (duplicateConsole == null) {
    //
    //                                // Pass ConsignmentCurrency
    //                                IKeyValuePair iKeyValuePair = replicaBondedManifestRepository.getToCurrencyValue(console.getCompanyId(), console.getConsignmentCurrency());
    //
    //                                Console newConsole = new Console();
    //                                BeanUtils.copyProperties(console, newConsole, CommonUtils.getNullPropertyNames(console));
    //
    //                                IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(console.getLanguageId(), console.getCompanyId());
    //
    //                                if (lAndCDesc != null) {
    //                                    newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
    //                                    newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
    //                                }
    //                                Double consignmentValue = null;
    //                                if (console.getConsignmentValue() != null) {
    //                                    consignmentValue = Double.valueOf(console.getConsignmentValue());
    //                                }
    //                                // Set TotalDuty Value
    //                                double totalDuty = 0;
    //                                if (iKeyValuePair != null && iKeyValuePair.getCurrencyValue() != null) {
    //                                    double toCurrencyValue = Double.parseDouble(iKeyValuePair.getCurrencyValue());
    //                                    if (toCurrencyValue != 0 && consignmentValue != 0 && consignmentValue != null) {
    //                                        totalDuty = toCurrencyValue * consignmentValue;
    //                                        if (totalDuty > 100) {
    //                                            totalDuty += totalDuty * 0.05;
    //                                        }
    //                                        if (console.getIncoTerms() != null && console.getIncoTerms().equalsIgnoreCase("DDU")) {
    //                                            totalDuty += 4;
    //                                        }
    //                                    }
    //                                }
    //
    //                                Optional<IKeyValuePair> eventDescOpt = consignmentEntityRepository.getEventText(
    //                                        console.getLanguageId(), console.getCompanyId(), "5");
    //                                if (eventDescOpt.isPresent()) {
    //                                    IKeyValuePair ikey = eventDescOpt.get();
    //
    //                                    newConsole.setHawbType("EVENT");
    //                                    newConsole.setHawbTypeId("5");
    //                                    newConsole.setHawbTypeDescription(ikey.getEventText());
    //                                    newConsole.setHawbTimeStamp(new Date());
    //                                }
    //
    //                                newConsole.setExpectedDuty(String.valueOf(totalDuty));
    ////                            newConsole.setCustomsValue(CUS_VAL);
    //                                newConsole.setConsoleId(SUB_CONSOLE_ID);
    //                                newConsole.setConsoleName("Console - " + SUB_CONSOLE_NAME);
    //                                newConsole.setDeletionIndicator(0L);
    //                                newConsole.setCreatedBy(loginUserID);
    //                                newConsole.setCreatedOn(new Date());
    //                                newConsole.setUpdatedBy(loginUserID);
    //                                newConsole.setUpdatedOn(new Date());
    //
    //                                // Get Piece
    //                                List<String> piece = replicaPieceDetailsRepository.getPieceId(newConsole.getLanguageId(), newConsole.getCompanyId(),
    //                                        newConsole.getPartnerId(), newConsole.getPartnerHouseAirwayBill(), newConsole.getPartnerMasterAirwayBill());
    //
    //                                if (piece != null) {
    //                                    for (String pieceId : piece) {
    //                                        newConsole.setPieceId(pieceId);
    //                                        Console createdConsole = consoleRepository.save(newConsole);
    //
    //                                        if (eventDescOpt.isPresent()) {
    //                                            IKeyValuePair ikey = eventDescOpt.get();
    //
    //                                            newConsole.setPieceType("EVENT");
    //                                            newConsole.setPieceTypeId("5");
    //                                            newConsole.setPieceTypeDescription(ikey.getEventText());
    //                                            newConsole.setPieceTimeStamp(new Date());
    //                                        }
    //
    //                                        if (createdConsole != null) {
    //                                            // Save ConsignmentStatus
    //                                            consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
    //                                                    createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
    //                                                    createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
    //                                                    createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
    //                                                    createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
    //                                                    createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
    //                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
    //
    //                                            // Update ConsignmentEntity Table
    //                                            consoleRepository.updateConsignmentOnConsoleCreate(
    //                                                    createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
    //                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
    //
    //                                            // Update PreAlert Table
    //                                            consoleRepository.updatePreAlertOnConsoleCreate(
    //                                                    createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
    //                                                    createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
    //                                                    createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType());
    //
    //                                            // Update PieceDetails Table
    ////                                        consoleRepository.updatePieceDetailsOnConsoleCreate(
    ////                                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
    ////                                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
    ////                                                createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType(),
    ////                                                createdConsole.getPieceId());
    //
    //                                            log.info("Console Created<----------------------->Consignment Event Updated");
    //                                        }
    //                                        createdConsoleList.add(createdConsole);
    //                                    }
    //                                } else {
    //                                    log.info("Piece Not Available in the CompanyId " + newConsole.getCompanyId() + " LanguageId " + newConsole.getConsoleId() +
    //                                            " PartnerId " + newConsole.getPartnerId() + " PartnerHouseAirwayBill " + newConsole.getPartnerMasterAirwayBill() +
    //                                            " PartnerMasterAirwayBill " + newConsole.getPartnerMasterAirwayBill() + " Doesn't exist");
    //                                }
    //
    //                            } else {
    //                                createdConsoleList.add(duplicateConsole);
    //                            }
    //                        }
    //                        SUB_CONSOLE_NAME ++;
    //                    }
    //                }
    //            }
    //        }
    //        return createdConsoleList;
    //    }
    //
    //
    //    /**
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
    //    public List<Console> createConsoleNormal(List<AddConsole> addConsoleList, String loginUserID)
    //            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
    //        try {
    //            List<Console> createdConsoleList = new ArrayList<>();
    //
    //            String CONSOLE_ID = numberRangeService.getNextNumberRange("CONSOLEID");
    //            log.info("next Value from NumberRange for CONSOLE_ID : " + CONSOLE_ID);
    //            for (AddConsole addConsole : addConsoleList) {
    //
    //                Console duplicateConsole = replicaConsoleRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndPieceIdAndDeletionIndicator(
    //                        addConsole.getLanguageId(), addConsole.getCompanyId(), addConsole.getPartnerId(), addConsole.getPartnerMasterAirwayBill(), addConsole.getPartnerHouseAirwayBill(),
    //                        addConsole.getPieceId(), 0L);
    //                if (duplicateConsole == null) {
    //
    //                    Console newConsole = new Console();
    //                    BeanUtils.copyProperties(addConsole, newConsole, CommonUtils.getNullPropertyNames(addConsole));
    //
    //                    Optional<IKeyValuePair> eventDescOpt = consignmentEntityRepository.getEventText(
    //                            addConsole.getLanguageId(), addConsole.getCompanyId(), "5");
    //                    if (eventDescOpt.isPresent()) {
    //                        IKeyValuePair ikey = eventDescOpt.get();
    //
    //                        newConsole.setHawbType("EVENT");
    //                        newConsole.setHawbTypeId("5");
    //                        newConsole.setHawbTypeDescription(ikey.getEventText());
    //                        newConsole.setHawbTimeStamp(new Date());
    //
    //                        newConsole.setPieceType("EVENT");
    //                        newConsole.setPieceTypeId("5");
    //                        newConsole.setPieceTypeDescription(ikey.getEventText());
    //                        newConsole.setPieceTimeStamp(new Date());
    //                    }
    //
    //                    IKeyValuePair lAndCDesc = consoleRepository.getLAndCDescription(
    //                            addConsole.getLanguageId(), addConsole.getCompanyId());
    //
    //                    if (lAndCDesc != null) {
    //                        newConsole.setLanguageDescription(lAndCDesc.getLangDesc());
    //                        newConsole.setCompanyName(lAndCDesc.getCompanyDesc());
    //                    }
    //                    newConsole.setConsoleId(CONSOLE_ID);
    //                    newConsole.setConsoleName("Console - " + );
    //                    newConsole.setDeletionIndicator(0L);
    //                    newConsole.setCreatedBy(loginUserID);
    //                    newConsole.setCreatedOn(new Date());
    //                    newConsole.setUpdatedBy(loginUserID);
    //                    newConsole.setUpdatedOn(new Date());
    //
    //                    CONSOLE_NAME ++;
    //
    //                    Console createdConsole = consoleRepository.save(newConsole);
    //
    //                    if (createdConsole != null) {
    //                        // Save ConsignmentStatus
    //                        consignmentStatusService.insertConsignmentStatusRecord(createdConsole.getLanguageId(), createdConsole.getLanguageDescription(),
    //                                createdConsole.getCompanyId(), createdConsole.getCompanyName(), createdConsole.getPieceId(),
    //                                createdConsole.getMasterAirwayBill(), createdConsole.getHouseAirwayBill(), createdConsole.getHawbType(),
    //                                createdConsole.getHawbTypeId(), createdConsole.getHawbTypeDescription(),
    //                                createdConsole.getHawbTimeStamp(), createdConsole.getPieceType(), createdConsole.getPieceTypeId(),
    //                                createdConsole.getPieceTypeDescription(), createdConsole.getPieceTimeStamp(), loginUserID,
    //                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getMasterAirwayBill());
    //
    //                        // Update ConsignmentEntity Table
    //                        consoleRepository.updateConsignmentOnConsoleCreate(
    //                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
    //                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill());
    //
    //                        // Update PreAlert Table
    //                        consoleRepository.updatePreAlertOnConsoleCreate(
    //                                createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
    //                                createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
    //                                createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType());
    //
    //                        // Update PieceDetails Table
    ////                    consoleRepository.updatePieceDetailsOnConsoleCreate(
    ////                            createdConsole.getLanguageId(), createdConsole.getCompanyId(), createdConsole.getPartnerId(),
    ////                            createdConsole.getPartnerHouseAirwayBill(), createdConsole.getPartnerMasterAirwayBill(),
    ////                            createdConsole.getHawbTypeDescription(), createdConsole.getHawbTypeId(), createdConsole.getHawbType(),
    ////                            createdConsole.getPieceId());
    //
    //                        log.info("Console Created<----------------------->Consignment Status Created");
    //                    }
    //                    createdConsoleList.add(createdConsole);
    //                } else {
    //                    createdConsoleList.add(duplicateConsole);
    //                }
    //            }
    //            return createdConsoleList;
    //        } catch (Exception e) {
    //            // Error Log
    //            createConsoleLog2(addConsoleList, e.toString());
    //            e.printStackTrace();
    //            throw new RuntimeException(e);
    //        }
    //    }


    /**
     * ManualCreateConsole
     *
     * @param consoles
     * @param loginUserId
     * @return
     * @throws IOException
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     * @throws CsvException
     */
    public List<Console> manualCreateConsole(List<Console> consoles, String loginUserId) throws IOException,
            InvocationTargetException, IllegalAccessException, CsvException {
        List<AddConsole> consoleList = new ArrayList<>();

        consoles.stream().forEach(exConsole -> {
            AddConsole addConsole = new AddConsole();
            Console dbConsole = getConsole(exConsole.getLanguageId(), exConsole.getCompanyId(), exConsole.getPartnerId(),
                    exConsole.getPartnerMasterAirwayBill(), exConsole.getPartnerHouseAirwayBill(), exConsole.getConsoleId(),
                    exConsole.getPieceId());
            dbConsole.setDeletionIndicator(1L);
            dbConsole.setUpdatedBy(loginUserId);
            dbConsole.setUpdatedOn(new Date());
            Console saveConsole = consoleRepository.save(dbConsole);
            BeanUtils.copyProperties(saveConsole, addConsole);
            consoleList.add(addConsole);
        });
        return createConsoleList(consoleList, loginUserId);
    }


    // Send Notification
    /**
     * @param companyId
     * @param languageId
     * @param consoleId
     * @param houseAirwayBill
     */
    public void sendNotificationForConsoleCreate(String companyId, String languageId, String consoleId, String
            houseAirwayBill,
                                                 String consoleGroupName, String consoleName) {

        // Check if consoleId has already been processed
        if (processedConsoleCreate.contains(consoleId)) {
            log.warn("Console ID {} has already been processed. Skipping notification.", consoleId);
            return;
        }

        try {
            // Get NotificationId
            IKeyValuePair notifyId = replicaCcrRepository.getNotificationId(companyId, languageId, "2");

            if (notifyId == null || notifyId.getUserRole() == null) {
                log.warn("Notification ID or User Role not found for companyId: {}, languageId: {}", companyId, languageId);
                return;
            }

            List<String> userIds = replicaCcrRepository.getUserId(companyId, languageId, notifyId.getUserRole());
            if (userIds.isEmpty()) {
                log.warn("No Users found for the specified role: {}, companyId: {}", notifyId.getUserRole(), companyId);
                return;
            }

            List<String> deviceToken = replicaCcrRepository.getToken(companyId, userIds);
            if (deviceToken == null || deviceToken.isEmpty()) {
                log.warn("No device token found for users : {}", userIds);
                return;
            }

            String title = "Console";
            String message = notifyId.getNotificationText() + "(Console Id / " + consoleId + " Console GroupName / " + consoleGroupName + " Console Name / " + consoleName + " )";
            String response = pushNotificationService.sendPushNotification(
                    deviceToken, title, message, companyId, languageId, houseAirwayBill, consoleId);

            if (response.equalsIgnoreCase("OK")) {
                log.info("Notification sent successfully. Updating console table. ");
                ccrRepository.updateNotificationInConsoleTable(companyId, languageId, consoleId);
            } else {
                log.warn("Failed to send notification. Response: {}", response);
            }
        } catch (Exception e) {
            log.error("Exception occurred while sending notification for Console Create", e);
        }
    }
}
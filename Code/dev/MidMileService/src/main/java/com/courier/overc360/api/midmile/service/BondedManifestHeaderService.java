package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.*;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.repository.BondedManifestHeaderRepository;
import com.courier.overc360.api.midmile.primary.repository.BondedManifestLineRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.FindBondedManifestHeader;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.FindBondedManifestLine;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifestHeader;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifestLine;
import com.courier.overc360.api.midmile.replica.repository.ReplicaBondedManifestHeaderRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaBondedManifestLineRepository;
import com.courier.overc360.api.midmile.replica.repository.specification.BondedManifestHeaderSpecification;
import com.courier.overc360.api.midmile.replica.repository.specification.BondedManifestLineSpecification;
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
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
public class BondedManifestHeaderService {

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private BondedManifestLineRepository bondedManifestLineRepository;

    @Autowired
    private BondedManifestHeaderRepository bondedManifestHeaderRepository;

    @Autowired
    private ReplicaBondedManifestLineRepository replicaBondedManifestLineRepository;

    @Autowired
    private ReplicaBondedManifestHeaderRepository replicaBondedManifestHeaderRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogService errorLogService;

    /*---------------------------------------------------PRIMARY-----------------------------------------------------*/

    /**
     * Get BondedManifestHeader
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param bondedId
     * @return
     */
    private BondedManifestHeader getBondedManifestHeader(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                                         String houseAirwayBill, String bondedId) {
        Optional<BondedManifestHeader> dbBondedManifestHeader =
                bondedManifestHeaderRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndBondedIdAndDeletionIndicator(
                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId, 0L);
        if (dbBondedManifestHeader.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill
                    + ", houseAirwayBill - " + houseAirwayBill + " and bondedId - " + bondedId + " doesn't exists";
            // Error Log
            createBondedManifestLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbBondedManifestHeader.get();
    }

    /**
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param bondedId
     * @param lineNo
     * @return
     */
    private BondedManifestLine getBondedManifestLine(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                                     String houseAirwayBill, String bondedId, String lineNo) {
        Optional<BondedManifestLine> dbBondedManifestLine =
                bondedManifestLineRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndLineNoAndBondedIdAndDeletionIndicator(
                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, lineNo, bondedId, 0L);
        if (dbBondedManifestLine.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill + ", lineNo - " + lineNo
                    + ", houseAirwayBill - " + houseAirwayBill + " and bondedId - " + bondedId + " doesn't exists";
            // Error Log
            createBondedManifestLog1(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId, lineNo, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbBondedManifestLine.get();
    }

    /**
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param bondedId
     * @return
     */
    private List<BondedManifestLine> getBondedManifestLineList(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                                               String houseAirwayBill, String bondedId) {
        List<BondedManifestLine> dbBondedManifestLineList =
                bondedManifestLineRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndBondedIdAndDeletionIndicator(
                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId, 0L);
        if (dbBondedManifestLineList.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill
                    + ", houseAirwayBill - " + houseAirwayBill + " and bondedId - " + bondedId + " doesn't exists";
            // Error Log
            createBondedManifestLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbBondedManifestLineList;
    }

    /**
     * Create BondedManifestHeaders
     *
     * @param addBondedManifestHeaderList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     */
    @Transactional
    public List<BondedManifestHeader> createBondedManifestHeaders(List<AddBondedManifestHeader> addBondedManifestHeaderList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<BondedManifestHeader> createdBondedManifestHeaderList = new ArrayList<>();

            for (AddBondedManifestHeader addBondedManifestHeader : addBondedManifestHeaderList) {
                // If ShipperId matches with consignorId then create
                IKeyValuePair shipperData = bondedManifestHeaderRepository.getProductId(addBondedManifestHeader.getShipperId(),
                        addBondedManifestHeader.getLanguageId(), addBondedManifestHeader.getCompanyId());

                if (addBondedManifestHeader.getProductId().equalsIgnoreCase(shipperData.getProductId()) &&
                        addBondedManifestHeader.getSubProductId().equalsIgnoreCase(shipperData.getSubProductId())) {

//                    Long companyCount = replicaBondedManifestHeaderRepository.companyRecordCount(
//                            addBondedManifestHeader.getLanguageId(), addBondedManifestHeader.getCompanyId());
//                    if (companyCount == null || companyCount == 0) {
//                        throw new BadRequestException("LanguageId - " + addBondedManifestHeader.getLanguageId()
//                                + " and companyId - " + addBondedManifestHeader.getCompanyId() + " doesn't exists");
//                    }

                    //Check Duplicate
                    boolean duplicateHeader = replicaBondedManifestHeaderRepository.duplicateHeaderExists(
                            addBondedManifestHeader.getLanguageId(), addBondedManifestHeader.getCompanyId(),
                            addBondedManifestHeader.getPartnerId(), addBondedManifestHeader.getMasterAirwayBill(),
                            addBondedManifestHeader.getHouseAirwayBill()) == 1;
                    if (duplicateHeader) {
                        throw new BadRequestException("Record is getting Duplicated with given values : houseAirwayBill - " + addBondedManifestHeader.getHouseAirwayBill());
                    }

                    List<AddBondedManifestLine> addBondedManifestLineList = addBondedManifestHeader.getAddBondedManifestLines();

                    BondedManifestHeader newBondedManifestHeader = new BondedManifestHeader();
                    BeanUtils.copyProperties(addBondedManifestHeader, newBondedManifestHeader, CommonUtils.getNullPropertyNames(addBondedManifestHeader));

                    List<BondedManifestLine> newBondedManifestLineList = new ArrayList<>();
                    String STATUS_ID = "2 - Bonded Manifest Created";

                    String NUM_RAN_OBJ = "BONDED_ID";
                    String BONDED_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for BONDED_ID : " + BONDED_ID);
                    newBondedManifestHeader.setBondedId(BONDED_ID);

                    IKeyValuePair lAndCDesc = bondedManifestHeaderRepository.getLAndCDescription(
                            addBondedManifestHeader.getLanguageId(), addBondedManifestHeader.getCompanyId());

                    for (AddBondedManifestLine addBondedManifestLine : addBondedManifestLineList) {

                        boolean duplicateLine = replicaBondedManifestLineRepository.duplicateLineExists(
                                addBondedManifestHeader.getLanguageId(), addBondedManifestHeader.getCompanyId(),
                                addBondedManifestHeader.getPartnerId(), addBondedManifestHeader.getMasterAirwayBill(),
                                addBondedManifestHeader.getHouseAirwayBill(), addBondedManifestLine.getLineNo()) == 1;

                        // Set TotalDuty Value
                        IKeyValuePair iKeyValuePair = bondedManifestLineRepository.getToCurrencyValue(addBondedManifestLine.getFreightCurrency());
                        Double freightCharge = Double.valueOf(addBondedManifestLine.getFreightCharges());
                        String incoTerms = addBondedManifestLine.getIncoTerms();

                        Double totalDuty = null;
                        if (iKeyValuePair.getCurrencyValue() != null) {
                            Double toCurrencyValue = Double.valueOf(iKeyValuePair.getCurrencyValue());
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

                        if (duplicateLine) {
                            throw new BadRequestException("Line record is getting Duplicated with lineNo - " + addBondedManifestLine.getLineNo());
                        }
                        BondedManifestLine newBondedManifestLine = new BondedManifestLine();
                        BeanUtils.copyProperties(addBondedManifestLine, newBondedManifestLine, CommonUtils.getNullPropertyNames(addBondedManifestLine));

                        if (addBondedManifestHeader.getPartnerMasterAirwayBill() != null) {
                            newBondedManifestLine.setPartnerMasterAirwayBill(addBondedManifestHeader.getPartnerMasterAirwayBill());
                        }
                        if (addBondedManifestHeader.getPartnerHouseAirwayBill() != null) {
                            newBondedManifestLine.setPartnerHouseAirwayBill(addBondedManifestHeader.getPartnerHouseAirwayBill());
                        }

                        newBondedManifestLine.setTotalDuty(String.valueOf(totalDuty));
                        newBondedManifestLine.setMasterAirwayBill(addBondedManifestHeader.getMasterAirwayBill());
                        newBondedManifestLine.setHouseAirwayBill(addBondedManifestHeader.getHouseAirwayBill());
                        newBondedManifestLine.setPartnerId(addBondedManifestHeader.getPartnerId());
                        newBondedManifestLine.setPartnerType(addBondedManifestHeader.getPartnerType());
                        newBondedManifestLine.setPartnerName(addBondedManifestHeader.getPartnerName());
                        newBondedManifestLine.setLanguageId(addBondedManifestHeader.getLanguageId());
                        newBondedManifestLine.setCompanyId(addBondedManifestHeader.getCompanyId());
                        if (lAndCDesc != null) {
                            newBondedManifestLine.setLanguageDescription(lAndCDesc.getLangDesc());
                            newBondedManifestLine.setCompanyName(lAndCDesc.getCompanyDesc());
                        }
                        newBondedManifestLine.setBondedId(BONDED_ID);
                        newBondedManifestLine.setStatusId(STATUS_ID);
                        newBondedManifestLine.setDeletionIndicator(0L);
                        newBondedManifestLine.setCreatedBy(loginUserID);
                        newBondedManifestLine.setCreatedOn(new Date());
                        newBondedManifestLine.setUpdatedBy(loginUserID);
                        newBondedManifestLine.setUpdatedOn(new Date());
                        bondedManifestLineRepository.save(newBondedManifestLine);
                        newBondedManifestLineList.add(newBondedManifestLine);
                    }
                    newBondedManifestHeader.setBondedManifestLines(newBondedManifestLineList);

                    if (lAndCDesc != null) {
                        newBondedManifestHeader.setLanguageDescription(lAndCDesc.getLangDesc());
                        newBondedManifestHeader.setCompanyName(lAndCDesc.getCompanyDesc());
                    }
                    newBondedManifestHeader.setProductName(shipperData.getProductName());
                    newBondedManifestHeader.setSubProductName(shipperData.getSubProductName());
                    newBondedManifestHeader.setStatusId(STATUS_ID);
                    newBondedManifestHeader.setDeletionIndicator(0L);
                    newBondedManifestHeader.setCreatedBy(loginUserID);
                    newBondedManifestHeader.setCreatedOn(new Date());
                    newBondedManifestHeader.setUpdatedBy(loginUserID);
                    newBondedManifestHeader.setUpdatedOn(new Date());

                    BondedManifestHeader createdBondedManifestHeader = bondedManifestHeaderRepository.save(newBondedManifestHeader);
//                newBondedManifestHeader.setBondedManifestLines(newBondedManifestLineList);
//                createdBondedManifestHeaderList.add(newBondedManifestHeader);
                    createdBondedManifestHeaderList.add(createdBondedManifestHeader);
                } else
                    throw new BadRequestException("ProductId " + addBondedManifestHeader.getProductId() + " and SubProductId " +
                            addBondedManifestHeader.getSubProductId() + " doesn't match");

            }
            return createdBondedManifestHeaderList;
        } catch (Exception e) {
            // Error Log
            createBondedManifestLog2(addBondedManifestHeaderList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Update BondedManifestHeaders
     *
     * @param updateBondedManifestHeaderList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public List<BondedManifestHeader> updateBondedManifestHeaders(List<UpdateBondedManifestHeader> updateBondedManifestHeaderList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<BondedManifestHeader> updatedBondedManifestHeaderList = new ArrayList<>();

            for (UpdateBondedManifestHeader updateBondedManifestHeader : updateBondedManifestHeaderList) {

                BondedManifestHeader dbBondedManifestHeader = getBondedManifestHeader(
                        updateBondedManifestHeader.getLanguageId(), updateBondedManifestHeader.getCompanyId(),
                        updateBondedManifestHeader.getPartnerId(), updateBondedManifestHeader.getMasterAirwayBill(),
                        updateBondedManifestHeader.getHouseAirwayBill(), updateBondedManifestHeader.getBondedId());

                List<BondedManifestLine> dbBondedManifestLineList = dbBondedManifestHeader.getBondedManifestLines();
                Map<String, BondedManifestLine> dbBondedManifestLineMap = dbBondedManifestLineList
                        .stream()
                        .collect(Collectors.toMap(BondedManifestLine::getLineNo, line -> line));

                List<BondedManifestLine> updatedLines = new ArrayList<>();

                for (UpdateBondedManifestLine updateBondedManifestLine : updateBondedManifestHeader.getUpdateBondedManifestLines()) {
                    BondedManifestLine dbLine = dbBondedManifestLineMap.get(updateBondedManifestLine.getLineNo());
                    if (dbLine != null) {
                        BeanUtils.copyProperties(updateBondedManifestLine, dbLine, CommonUtils.getNullPropertyNames(updateBondedManifestLine));
                        dbLine.setUpdatedBy(loginUserID);
                        dbLine.setUpdatedOn(new Date());
                        updatedLines.add(dbLine);
                    }
                }

                // Update partner-related fields in all lines if they are changed
                if (updateBondedManifestHeader.getPartnerName() != null) {
                    dbBondedManifestLineList.parallelStream().forEach(line -> line.setPartnerName(updateBondedManifestHeader.getPartnerName()));
                }
                if (updateBondedManifestHeader.getPartnerType() != null) {
                    dbBondedManifestLineList.parallelStream().forEach(line -> line.setPartnerType(updateBondedManifestHeader.getPartnerType()));
                }
                if (updateBondedManifestHeader.getPartnerMasterAirwayBill() != null) {
                    dbBondedManifestLineList.parallelStream().forEach(line -> line.setPartnerMasterAirwayBill(updateBondedManifestHeader.getPartnerMasterAirwayBill()));
                }
                if (updateBondedManifestHeader.getPartnerHouseAirwayBill() != null) {
                    dbBondedManifestLineList.parallelStream().forEach(line -> line.setPartnerHouseAirwayBill(updateBondedManifestHeader.getPartnerHouseAirwayBill()));
                }

                // set the updated lines to dbBondedManifestHeader
                dbBondedManifestHeader.setBondedManifestLines(new ArrayList<>(dbBondedManifestLineMap.values()));

                BeanUtils.copyProperties(updateBondedManifestHeader, dbBondedManifestHeader, CommonUtils.getNullPropertyNames(updateBondedManifestHeader));
                dbBondedManifestHeader.setUpdatedBy(loginUserID);
                dbBondedManifestHeader.setUpdatedOn(new Date());

                BondedManifestHeader updatedBondedManifestHeader = bondedManifestHeaderRepository.save(dbBondedManifestHeader);
                updatedBondedManifestHeaderList.add(updatedBondedManifestHeader);
            }
            return updatedBondedManifestHeaderList;
        } catch (Exception e) {
            // Error Log
            createBondedManifestLog3(updateBondedManifestHeaderList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }


    /**
     * Delete BondedManifestHeaders
     *
     * @param deleteInputList
     * @param loginUserID
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public void deleteBondedManifestHeaders(List<BondedManifestDeleteInput> deleteInputList, String loginUserID) throws IOException, CsvException {
        try {
            if (deleteInputList != null || !deleteInputList.isEmpty()) {
                for (BondedManifestDeleteInput deleteInput : deleteInputList) {
                    if (deleteInput.getLineNo() != null) {
                        BondedManifestLine bondedManifestLine = getBondedManifestLine(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                                deleteInput.getPartnerId(), deleteInput.getMasterAirwayBill(), deleteInput.getHouseAirwayBill(),
                                deleteInput.getBondedId(), deleteInput.getLineNo());

                        if (bondedManifestLine != null) {
                            bondedManifestLine.setDeletionIndicator(1L);
                            bondedManifestLine.setUpdatedBy(loginUserID);
                            bondedManifestLine.setUpdatedOn(new Date());
                            bondedManifestLineRepository.save(bondedManifestLine);
                        }
                    } else {
                        BondedManifestHeader dbBondedManifestHeader = getBondedManifestHeader(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                                deleteInput.getPartnerId(), deleteInput.getMasterAirwayBill(), deleteInput.getHouseAirwayBill(), deleteInput.getBondedId());

                        if (dbBondedManifestHeader != null) {
                            dbBondedManifestHeader.setDeletionIndicator(1L);
                            dbBondedManifestHeader.setUpdatedBy(loginUserID);
                            dbBondedManifestHeader.setUpdatedOn(new Date());

                            List<BondedManifestLine> bondedManifestLineList = getBondedManifestLineList(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                                    deleteInput.getPartnerId(), deleteInput.getMasterAirwayBill(), deleteInput.getHouseAirwayBill(), deleteInput.getBondedId());
                            //                    List<BondedManifestLine> bondedManifestLineList = dbBondedManifestHeader.getBondedManifestLines();

                            for (BondedManifestLine bondedManifestLine : dbBondedManifestHeader.getBondedManifestLines()) {
                                if (bondedManifestLine != null) {
                                    bondedManifestLine.setDeletionIndicator(1L);
                                    bondedManifestLine.setUpdatedBy(loginUserID);
                                    bondedManifestLine.setUpdatedOn(new Date());
                                    bondedManifestLineList.add(bondedManifestLine);
                                }
                            }
                            dbBondedManifestHeader.setBondedManifestLines(bondedManifestLineList);
                            bondedManifestHeaderRepository.save(dbBondedManifestHeader);
                        }
                    }
                }
            }
        } catch (Exception e) {
            // Error Log
            createBondedManifestLog4(deleteInputList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /*---------------------------------------------------REPLICA-----------------------------------------------------*/

    /**
     * Get All BondedManifestHeader Details
     *
     * @return
     */
//    public List<ReplicaBondedManifestHeader> getAllBondedManifestHeaders() {
//        List<ReplicaBondedManifestHeader> bondedManifestHeaderList = replicaBondedManifestHeaderRepository.findAll();
//        bondedManifestHeaderList = bondedManifestHeaderList.parallelStream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
//        return bondedManifestHeaderList;
//    }
    public List<ReplicaBondedManifestHeader> getAllBondedManifestHeaders() {
        List<ReplicaBondedManifestHeader> bondedManifestHeaderList = replicaBondedManifestHeaderRepository.getAllNonDeletedHeaders();
        return bondedManifestHeaderList;
    }
//    public List<BondedManifestHeader> getAllBondedManifestHeaders() {
//        List<BondedManifestHeader> bondedManifestHeaderList = bondedManifestHeaderRepository.getAllNonDeletedHeaders();
//        return bondedManifestHeaderList;
//    }

    /**
     * Get All BondedManifestLine Details
     *
     * @return
     */
//    public List<ReplicaBondedManifestLine> getAllBondedManifestLines() {
//        List<ReplicaBondedManifestLine> bondedManifestLineList = replicaBondedManifestLineRepository.findAll();
//        bondedManifestLineList = bondedManifestLineList.parallelStream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
//        return bondedManifestLineList;
//    }
    public List<ReplicaBondedManifestLine> getAllBondedManifestLines() {
        List<ReplicaBondedManifestLine> bondedManifestLineList = replicaBondedManifestLineRepository.getAllNonDeletedLines();
        return bondedManifestLineList;
    }

    /**
     * Get BondedManifestHeader - Replica
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param bondedId
     * @return
     */
    public ReplicaBondedManifestHeader getBondedManifestHeaderReplica(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                                                      String houseAirwayBill, String bondedId) {
        Optional<ReplicaBondedManifestHeader> dbBondedManifestHeader =
                replicaBondedManifestHeaderRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndBondedIdAndDeletionIndicator(
                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId, 0L);
        if (dbBondedManifestHeader.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill
                    + ", houseAirwayBill - " + houseAirwayBill + " and bondedId - " + bondedId + " doesn't exists";
            // Error Log
            createBondedManifestLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbBondedManifestHeader.get();
    }
//    public BondedManifestHeader getBondedManifestHeaderReplica(String languageId, String companyId, String partnerId, String masterAirwayBill,
//                                                               String houseAirwayBill, String bondedId) {
//        Optional<BondedManifestHeader> dbBondedManifestHeader =
//                bondedManifestHeaderRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndMasterAirwayBillAndHouseAirwayBillAndBondedIdAndDeletionIndicator(
//                        languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId, 0L);
//        if (dbBondedManifestHeader.isEmpty()) {
//            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
//                    + ", partnerId - " + partnerId + ", masterAirwayBill - " + masterAirwayBill
//                    + ", houseAirwayBill - " + houseAirwayBill + " and bondedId - " + bondedId + " doesn't exists";
//            // Error Log
//            createBondedManifestLog(languageId, companyId, partnerId, masterAirwayBill, houseAirwayBill, bondedId, errMsg);
//            throw new BadRequestException(errMsg);
//        }
//        return dbBondedManifestHeader.get();
//    }

    /**
     * Find BondedManifestHeaders
     *
     * @param findBondedManifestHeader
     * @return
     * @throws Exception
     */
    public List<ReplicaBondedManifestHeader> findBondedManifestHeaders(FindBondedManifestHeader findBondedManifestHeader) throws Exception {

        BondedManifestHeaderSpecification spec = new BondedManifestHeaderSpecification(findBondedManifestHeader);
        List<ReplicaBondedManifestHeader> results = replicaBondedManifestHeaderRepository.findAll(spec);
        log.info("found BondedManifest Headers --> " + results);
        return results;
    }

    /**
     * Find BondedManifestLines
     *
     * @param findBondedManifestLine
     * @return
     * @throws Exception
     */
    public List<ReplicaBondedManifestLine> findBondedManifestLines(FindBondedManifestLine findBondedManifestLine) throws Exception {

        BondedManifestLineSpecification spec = new BondedManifestLineSpecification(findBondedManifestLine);
        List<ReplicaBondedManifestLine> results = replicaBondedManifestLineRepository.findAll(spec);
        log.info("found BondedManifest Lines --> " + results);
        return results;
    }

    //==========================================BondedManifest_ErrorLog================================================
    private void createBondedManifestLog(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                         String houseAirwayBill, String bondedId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(masterAirwayBill);
        errorLog.setMethod("Exception thrown in getBondedManifestHeader");
        errorLog.setReferenceField1(houseAirwayBill);
        errorLog.setReferenceField2(partnerId);
        errorLog.setReferenceField3(bondedId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createBondedManifestLog1(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                          String houseAirwayBill, String bondedId, String lineNo, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(masterAirwayBill);
        errorLog.setMethod("Exception thrown in getBondedManifestLine");
        errorLog.setReferenceField1(houseAirwayBill);
        errorLog.setReferenceField2(partnerId);
        errorLog.setReferenceField3(bondedId);
        errorLog.setReferenceField4(lineNo);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createBondedManifestLog2(List<AddBondedManifestHeader> addBondedManifestHeaderList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (AddBondedManifestHeader addBondedManifestHeader : addBondedManifestHeaderList) {
            for (AddBondedManifestLine addBondedManifestLine : addBondedManifestHeader.getAddBondedManifestLines()) {
                ErrorLog errorLog = new ErrorLog();

                errorLog.setLogDate(new Date());
                errorLog.setLanguageId(addBondedManifestHeader.getLanguageId());
                errorLog.setCompanyId(addBondedManifestHeader.getCompanyId());
                errorLog.setRefDocNumber(addBondedManifestHeader.getMasterAirwayBill());
                errorLog.setMethod("Exception thrown in createBondedManifestHeader");
                errorLog.setReferenceField1(addBondedManifestHeader.getPartnerId());
                errorLog.setReferenceField2(addBondedManifestHeader.getHouseAirwayBill());
                errorLog.setReferenceField3(addBondedManifestLine.getLineNo());
                errorLog.setErrorMessage(error);
                errorLog.setCreatedBy("Admin");
                errorLogRepository.save(errorLog);
                errorLogList.add(errorLog);
            }
        }
        errorLogService.writeLog(errorLogList);
    }

    private void createBondedManifestLog3(List<UpdateBondedManifestHeader> updateBondedManifestHeaderList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (UpdateBondedManifestHeader updateBondedManifestHeader : updateBondedManifestHeaderList) {
            for (UpdateBondedManifestLine updateBondedManifestLine : updateBondedManifestHeader.getUpdateBondedManifestLines()) {
                ErrorLog errorLog = new ErrorLog();

                errorLog.setLogDate(new Date());
                errorLog.setLanguageId(updateBondedManifestHeader.getLanguageId());
                errorLog.setCompanyId(updateBondedManifestHeader.getCompanyId());
                errorLog.setRefDocNumber(updateBondedManifestHeader.getMasterAirwayBill());
                errorLog.setMethod("Exception thrown in updateBondedManifestHeader");
                errorLog.setReferenceField1(updateBondedManifestHeader.getPartnerId());
                errorLog.setReferenceField2(updateBondedManifestHeader.getHouseAirwayBill());
                errorLog.setReferenceField3(updateBondedManifestHeader.getBondedId());
                errorLog.setReferenceField4(updateBondedManifestLine.getLineNo());
                errorLog.setErrorMessage(error);
                errorLog.setCreatedBy("Admin");
                errorLogRepository.save(errorLog);
                errorLogList.add(errorLog);
            }
        }
        errorLogService.writeLog(errorLogList);
    }

    private void createBondedManifestLog4(List<BondedManifestDeleteInput> deleteInputList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (BondedManifestDeleteInput deleteInput : deleteInputList) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(deleteInput.getLanguageId());
            errorLog.setCompanyId(deleteInput.getCompanyId());
            errorLog.setRefDocNumber(deleteInput.getMasterAirwayBill());
            errorLog.setMethod("Exception thrown in deleteBondedManifestHeader");
            errorLog.setReferenceField1(deleteInput.getPartnerId());
            errorLog.setReferenceField2(deleteInput.getHouseAirwayBill());
            errorLog.setReferenceField3(deleteInput.getBondedId());
            if (deleteInput.getLineNo() != null) {
                errorLog.setReferenceField4(deleteInput.getLineNo());
            }
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

}

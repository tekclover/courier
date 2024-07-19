package com.courier.overc360.api.midmile.service;

import com.courier.overc360.api.midmile.controller.exception.BadRequestException;
import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.AddBondedManifest;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.BondedManifest;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.BondedManifestDeleteInput;
import com.courier.overc360.api.midmile.primary.model.bondedmanifest.UpdateBondedManifest;
import com.courier.overc360.api.midmile.primary.model.consignment.AddConsignment;
import com.courier.overc360.api.midmile.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.midmile.primary.model.itemdetails.AddItemDetails;
import com.courier.overc360.api.midmile.primary.model.piecedetails.AddPieceDetails;
import com.courier.overc360.api.midmile.primary.model.prealert.PreAlert;
import com.courier.overc360.api.midmile.primary.repository.BondedManifestRepository;
import com.courier.overc360.api.midmile.primary.repository.ConsignmentEntityRepository;
import com.courier.overc360.api.midmile.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.FindBondedManifest;
import com.courier.overc360.api.midmile.replica.model.bondedmanifest.ReplicaBondedManifest;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaConsignmentEntity;
import com.courier.overc360.api.midmile.replica.model.prealert.ReplicaPreAlert;
import com.courier.overc360.api.midmile.replica.repository.ReplicaBondedManifestRepository;
import com.courier.overc360.api.midmile.replica.repository.ReplicaPreAlertRepository;
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
import java.util.Optional;

@Slf4j
@Service
public class BondedManifestService {

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private BondedManifestRepository bondedManifestRepository;

    @Autowired
    private ReplicaBondedManifestRepository replicaBondedManifestRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogService errorLogService;

    @Autowired
    private ConsignmentEntityRepository consignmentEntityRepository;

    @Autowired
    private ConsignmentStatusService consignmentStatusService;

    @Autowired
    private ReplicaPreAlertRepository replicaPreAlertRepository;

    /*---------------------------------------------------PRIMARY-----------------------------------------------------*/

    /**
     * Get bondedmanifest
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param partnerMasterAirwayBill
     * @param partnerHouseAirwayBill
     * @param bondedId
     * @return
     */
    private BondedManifest getBondedManifest(String languageId, String companyId, String partnerId, String partnerMasterAirwayBill,
                                             String partnerHouseAirwayBill, String bondedId) {
        Optional<BondedManifest> dbBondedManifest =
                bondedManifestRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndBondedIdAndDeletionIndicator
                        (languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, bondedId, 0L);
        if (dbBondedManifest.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", partnerMasterAirwayBill - " + partnerMasterAirwayBill
                    + ", partnerHouseAirwayBill - " + partnerHouseAirwayBill + " and bondedId - " + bondedId + " doesn't exists";
            // Error Log
            createBondedManifestLog(languageId, companyId, partnerId,partnerMasterAirwayBill, partnerHouseAirwayBill, bondedId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbBondedManifest.get();
    }


//    /**
//     * @param addConsignments
//     * @param loginUserID
//     * @return
//     * @throws IOException
//     * @throws InvocationTargetException
//     * @throws IllegalAccessException
//     * @throws CsvException
//     */
//    public List<BondedManifest> createBondedManifestBasedOnConsignmentInput(List<AddConsignment> addConsignments, String loginUserID) throws IOException, InvocationTargetException, IllegalAccessException, CsvException {
//
//        List<AddBondedManifest> addBondedManifest = new ArrayList<>();
//        for (AddConsignment consignment : addConsignments) {
//
//            for (AddPieceDetails pieceDetails : consignment.getPieceDetails()) {
//                for (AddItemDetails itemDetails : pieceDetails.getItemDetails()) {
//                    AddBondedManifest bondedManifest = new AddBondedManifest();
////                    bondedManifest.setConsigneeName(consignment.getDestinationDetails().getName());
////                    bondedManifest.setCountryOfOrigin(consignment.getOriginDetails().getCountry());
////                    bondedManifest.setShipperId(consignment.getPartnerId());
////                    bondedManifest.setShipperName(consignment.getPartnerName());
////                    bondedManifest.setFinalDestination(consignment.getCountryOfDestination());
//                    BeanUtils.copyProperties(consignment, bondedManifest, CommonUtils.getNullPropertyNames(consignment));
//                    BeanUtils.copyProperties(itemDetails, bondedManifest, CommonUtils.getNullPropertyNames(itemDetails));
//
//                    Optional<ReplicaPreAlert> replicaPreAlert = replicaPreAlertRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator(
//                            bondedManifest.getCompanyId(), bondedManifest.getLanguageId(), bondedManifest.getPartnerId(),
//                            bondedManifest.getMasterAirwayBill(), bondedManifest.getPartnerHouseAirwayBill(), 0L);
//
//                    if (replicaPreAlert.isPresent()) {
//                        ReplicaPreAlert dbReplica = replicaPreAlert.get();
//                        bondedManifest.setGrossWeight(dbReplica.getTotalWeight());
//                        bondedManifest.setNetWeight(dbReplica.getTotalWeight());
//                        bondedManifest.setManifestedGrossWeight(dbReplica.getTotalWeight());
//                        bondedManifest.setTareWeight(dbReplica.getTotalWeight());
//
//                        bondedManifest.setManifestedQuantity(dbReplica.getNoOfPieces());
//                        bondedManifest.setLandedQuantity(dbReplica.getNoOfPieces());
//                        bondedManifest.setTotalQuantity(dbReplica.getNoOfPieces());
//
//                        bondedManifest.setConsignmentValue(dbReplica.getConsignmentValue());
//                        bondedManifest.setBayanHV(dbReplica.getBayanHv());
//                        bondedManifest.setCurrency(dbReplica.getCurrency());
//                        bondedManifest.setGoodsDescription(dbReplica.getDescription());
//                        bondedManifest.setConsigneeName(dbReplica.getConsigneeName());
//                        bondedManifest.setShipperName(dbReplica.getShipper());
//
//                    }
//                    addBondedManifest.add(bondedManifest);
//                }
//            }
//        }
//
//        return createBondedManifest(addBondedManifest, loginUserID);
//    }

    /**
     * @param preAlertInputList
     * @param loginUserID
     * @return
     * @throws IOException
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     * @throws CsvException
     */
    public List<BondedManifest> createBondedManifestListsOnPreAlertInput(List<PreAlert> preAlertInputList, String loginUserID)
            throws IOException, InvocationTargetException, IllegalAccessException, CsvException {

        List<AddBondedManifest> addBondedManifestList = new ArrayList<>();

        for (PreAlert preAlertInput : preAlertInputList) {

            AddBondedManifest addBondedManifest = new AddBondedManifest();
            BeanUtils.copyProperties(preAlertInput, addBondedManifest, CommonUtils.getNullPropertyNames(preAlertInput));

            addBondedManifest.setGrossWeight(preAlertInput.getTotalWeight());
            addBondedManifest.setNetWeight(preAlertInput.getTotalWeight());
            addBondedManifest.setManifestedGrossWeight(preAlertInput.getTotalWeight());
            addBondedManifest.setTareWeight(preAlertInput.getTotalWeight());

            addBondedManifest.setManifestedQuantity(preAlertInput.getNoOfPieces());
            addBondedManifest.setLandedQuantity(preAlertInput.getNoOfPieces());
            addBondedManifest.setTotalQuantity(preAlertInput.getNoOfPieces());
            addBondedManifest.setNotifyParty(preAlertInput.getConsigneeName());
            addBondedManifest.setEstimatedTimeOfArrival(preAlertInput.getEstimatedTimeOfArrival());
            addBondedManifest.setConsigneeFreeText(preAlertInput.getConsigneeName());

//            addBondedManifest.setConsignmentValue(preAlertInput.getConsignmentValue());
            addBondedManifest.setBayanHV(preAlertInput.getBayanHv());
//            addBondedManifest.setCurrency(preAlertInput.getCurrency());
            addBondedManifest.setGoodsDescription(preAlertInput.getDescription());
//            addBondedManifest.setConsigneeName(preAlertInput.getConsigneeName());
            addBondedManifest.setShipperName(preAlertInput.getShipper());

            addBondedManifest.setAirportOriginCode(preAlertInput.getOrigin());
            addBondedManifest.setCountryOfOrigin(preAlertInput.getOriginCode());

            addBondedManifestList.add(addBondedManifest);
        }

        return createBondedManifest(addBondedManifestList, loginUserID);
    }

    /**
     * Create BondedManifest
     *
     * @param addBondedManifestList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     */
    @Transactional
    public List<BondedManifest> createBondedManifest(List<AddBondedManifest> addBondedManifestList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<BondedManifest> createdBondedManifestList = new ArrayList<>();

            String NUM_RAN_OBJ = "BONDEDID";
            String BONDED_ID = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
            log.info("next Value from NumberRange for BONDED_ID : " + BONDED_ID);

            for (AddBondedManifest addBondedManifest : addBondedManifestList) {
                // Check Duplicate
                boolean duplicateRecord = bondedManifestRepository.existsByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndDeletionIndicator
                        (addBondedManifest.getLanguageId(), addBondedManifest.getCompanyId(), addBondedManifest.getPartnerId(),
                        addBondedManifest.getPartnerMasterAirwayBill(), addBondedManifest.getPartnerHouseAirwayBill(), 0L);

                if (duplicateRecord) {
                    throw new BadRequestException("Record is getting Duplicated with given values : partnerHouseAirwayBill - " + addBondedManifest.getPartnerHouseAirwayBill());
                }

                BondedManifest newBondedManifest = new BondedManifest();
                BeanUtils.copyProperties(addBondedManifest, newBondedManifest, CommonUtils.getNullPropertyNames(addBondedManifest));
                IKeyValuePair lAndCDesc = bondedManifestRepository.getLAndCDescription(
                        addBondedManifest.getLanguageId(), addBondedManifest.getCompanyId());
                Optional<IKeyValuePair> eventStatus = consignmentEntityRepository.getStatusEventText(newBondedManifest.getLanguageId(),
                        newBondedManifest.getCompanyId(), "1", "4");

                if (lAndCDesc != null) {
                    newBondedManifest.setLanguageDescription(lAndCDesc.getLangDesc());
                    newBondedManifest.setCompanyName(lAndCDesc.getCompanyDesc());
                }
                if (eventStatus.isPresent()) {
                    IKeyValuePair iKeyValuePair = eventStatus.get();
                    newBondedManifest.setStatusId("1");
                    newBondedManifest.setEventCode("4");
                    newBondedManifest.setStatusText(iKeyValuePair.getStatusText());
                    newBondedManifest.setEventText(iKeyValuePair.getEventText());
                    newBondedManifest.setEventTimestamp(new Date());
                    newBondedManifest.setStatusTimestamp(new Date());
                }

//                Optional<ReplicaConsignmentEntity> consignmentValuesOpt = replicaBondedManifestRepository.getConsignmentValues(
//                        newBondedManifest.getLanguageId(), newBondedManifest.getCompanyId(), newBondedManifest.getPartnerId(),
//                        newBondedManifest.getPartnerMasterAirwayBill(), newBondedManifest.getPartnerHouseAirwayBill());
//                if (consignmentValuesOpt.isPresent()) {
//                    ReplicaConsignmentEntity consignmentEntity = consignmentValuesOpt.get();
//
//                    newBondedManifest.setNoOfPackageMawb(consignmentEntity.getNoOfPackageMawb());
//                    newBondedManifest.setNoOfPieceHawb(consignmentEntity.getNoOfPieceHawb());
//                    newBondedManifest.setPrimaryDo(consignmentEntity.getPrimaryDo());
//                    newBondedManifest.setSecondaryDo(consignmentEntity.getSecondaryDo());
//
//                    newBondedManifest.setNotifyParty(consignmentEntity.getNotifyParty());
//                    newBondedManifest.setPaymentType(consignmentEntity.getPaymentType());
//                    newBondedManifest.setLineNo(consignmentEntity.getLineNo());
//                    newBondedManifest.setIncoTerms(consignmentEntity.getIncoTerms());
//
//                    newBondedManifest.setInvoiceNumber(consignmentEntity.getInvoiceNumber());
//                    newBondedManifest.setInvoiceType(consignmentEntity.getInvoiceType());
//                    newBondedManifest.setInvoiceDate(consignmentEntity.getInvoiceDate());
//                    newBondedManifest.setInvoiceSupplierName(consignmentEntity.getInvoiceSupplierName());
//
////                    newBondedManifest.setGoodsDescription(consignmentEntity.getGoodsDescription());
//                    newBondedManifest.setQuantity(consignmentEntity.getQuantity());
//                    newBondedManifest.setFreightCurrency(consignmentEntity.getFreightCurrency());
//                    newBondedManifest.setFreightCharges(consignmentEntity.getFreightCharges());
//
//                    newBondedManifest.setConsignmentValue(consignmentEntity.getConsignmentValue());
//                    newBondedManifest.setConsignmentCurrency(consignmentEntity.getConsignmentCurrency());
//                    newBondedManifest.setActualCurrency(consignmentEntity.getActualCurrency());
//                    newBondedManifest.setTotalDuty(consignmentEntity.getTotalDuty());
//                    newBondedManifest.setSpecialApprovalValue(consignmentEntity.getSpecialApprovalValue());
//                    newBondedManifest.setDeclaredValue(consignmentEntity.getDeclaredValue());
//                }

                newBondedManifest.setBondedId(BONDED_ID);
                newBondedManifest.setBillOfLadingFor("Import");
                newBondedManifest.setDeletionIndicator(0L);
                newBondedManifest.setCreatedBy(loginUserID);
                newBondedManifest.setCreatedOn(new Date());
                newBondedManifest.setUpdatedBy(loginUserID);
                newBondedManifest.setUpdatedOn(new Date());
                BondedManifest createdBondedManifest = bondedManifestRepository.save(newBondedManifest);

                if (createdBondedManifest != null) {
                    // Save ConsignmentStatus
                    consignmentStatusService.createConsignmentStatusParams(createdBondedManifest.getCompanyId(), createdBondedManifest.getCompanyName(),
                            createdBondedManifest.getLanguageId(), createdBondedManifest.getLanguageDescription(), createdBondedManifest.getPieceId(), createdBondedManifest.getStatusId(),
                            createdBondedManifest.getPartnerMasterAirwayBill(), createdBondedManifest.getPartnerHouseAirwayBill(), createdBondedManifest.getStatusText(), createdBondedManifest.getStatusId(),
                            createdBondedManifest.getStatusText(), createdBondedManifest.getEventCode(), createdBondedManifest.getEventText(), createdBondedManifest.getEventCode(),
                            createdBondedManifest.getEventText(), createdBondedManifest.getEventTimestamp(), createdBondedManifest.getEventTimestamp(), createdBondedManifest.getStatusTimestamp(), loginUserID);

                    //Update Event From consignment
                    bondedManifestRepository.updateEventCodeFromConsignment(createdBondedManifest.getCompanyId(),
                            createdBondedManifest.getLanguageId(), createdBondedManifest.getPartnerId(),
                            createdBondedManifest.getPartnerHouseAirwayBill(), createdBondedManifest.getPartnerMasterAirwayBill(),
                            createdBondedManifest.getEventText());
                }
                createdBondedManifestList.add(createdBondedManifest);
            }
            return createdBondedManifestList;
        } catch (Exception e) {
            // Error Log
            createBondedManifestLog2(addBondedManifestList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Update BondedManifest
     *
     * @param updateBondedManifestList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public List<BondedManifest> updateBondedManifest(List<UpdateBondedManifest> updateBondedManifestList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            List<BondedManifest> updatedBondedManifestList = new ArrayList<>();

            for (UpdateBondedManifest updateBondedManifest : updateBondedManifestList) {

                BondedManifest dbBondedManifest = getBondedManifest(
                        updateBondedManifest.getLanguageId(), updateBondedManifest.getCompanyId(),
                        updateBondedManifest.getPartnerId(), updateBondedManifest.getPartnerMasterAirwayBill(),
                        updateBondedManifest.getPartnerHouseAirwayBill(), updateBondedManifest.getBondedId());

                BeanUtils.copyProperties(updateBondedManifest, dbBondedManifest, CommonUtils.getNullPropertyNames(updateBondedManifest));

//                Optional<IKeyValuePair> eventStatus = consignmentEntityRepository.getStatusEventText(dbBondedManifest.getLanguageId(),
//                        dbBondedManifest.getCompanyId(), "2", dbBondedManifest.getEventCode());
//
//                if (eventStatus.isPresent()) {
//                    IKeyValuePair iKeyValuePair = eventStatus.get();
//                    dbBondedManifest.setStatusId("2");
//                    if (dbBondedManifest.getEventCode() != null) {
//                        dbBondedManifest.setEventCode(dbBondedManifest.getEventCode());
//                    }
//                    dbBondedManifest.setStatusText(iKeyValuePair.getStatusText());
//                    dbBondedManifest.setEventText(iKeyValuePair.getEventText());
//                    dbBondedManifest.setEventTimestamp(new Date());
//                    dbBondedManifest.setStatusTimestamp(new Date());
//                }

                // Set Event Status
                Optional<IKeyValuePair> getStatus = consignmentEntityRepository.getStatusText(dbBondedManifest.getLanguageId(), "2");

                if (getStatus.isPresent()) {
                    IKeyValuePair ikey = getStatus.get();
                    dbBondedManifest.setStatusId("2");
                    dbBondedManifest.setStatusText(ikey.getStatusText());
                    dbBondedManifest.setStatusTimestamp(new Date());
                }

                if (updateBondedManifest.getEventCode() != null) {
                    Optional<IKeyValuePair> getEvent = consignmentEntityRepository.getEventText(updateBondedManifest.getLanguageId(),
                            updateBondedManifest.getCompanyId(), updateBondedManifest.getEventCode());

                    if (getEvent.isPresent()) {
                        IKeyValuePair ikey = getEvent.get();
                        dbBondedManifest.setEventCode(dbBondedManifest.getEventCode());
                        dbBondedManifest.setEventText(ikey.getEventText());
                        dbBondedManifest.setEventTimestamp(new Date());
                    }
                }

                dbBondedManifest.setUpdatedBy(loginUserID);
                dbBondedManifest.setUpdatedOn(new Date());

                BondedManifest updatedBondedManifest = bondedManifestRepository.save(dbBondedManifest);

                // Save ConsignmentStatus
                consignmentStatusService.createConsignmentStatusParams(updatedBondedManifest.getCompanyId(), updatedBondedManifest.getCompanyName(),
                        updatedBondedManifest.getLanguageId(), updatedBondedManifest.getLanguageDescription(), updatedBondedManifest.getPieceId(), updatedBondedManifest.getStatusId(),
                        updatedBondedManifest.getPartnerMasterAirwayBill(), updatedBondedManifest.getPartnerHouseAirwayBill(), updatedBondedManifest.getStatusText(), updatedBondedManifest.getStatusId(),
                        updatedBondedManifest.getStatusText(), updatedBondedManifest.getEventCode(), updatedBondedManifest.getEventText(), updatedBondedManifest.getEventCode(),
                        updatedBondedManifest.getEventText(), updatedBondedManifest.getEventTimestamp(), updatedBondedManifest.getEventTimestamp(), updatedBondedManifest.getStatusTimestamp(), loginUserID);

                if (updatedBondedManifest != null) {
                    //Update Event From consignment
                    bondedManifestRepository.updateEventCodeFromConsignment(updatedBondedManifest.getCompanyId(),
                            updatedBondedManifest.getLanguageId(), updatedBondedManifest.getPartnerId(),
                            updatedBondedManifest.getPartnerHouseAirwayBill(), updatedBondedManifest.getPartnerMasterAirwayBill(),
                            updatedBondedManifest.getEventText());
                }

                updatedBondedManifestList.add(updatedBondedManifest);
            }
            return updatedBondedManifestList;
        } catch (Exception e) {
            // Error Log
            createBondedManifestLog3(updateBondedManifestList, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }


    /**
     * Delete BondedManifest
     *
     * @param deleteInputList
     * @param loginUserID
     * @throws IOException
     * @throws CsvException
     */
    @Transactional
    public void deleteBondedManifest(List<BondedManifestDeleteInput> deleteInputList, String loginUserID) throws IOException, CsvException {
        try {
            if (deleteInputList != null && !deleteInputList.isEmpty()) {
                for (BondedManifestDeleteInput deleteInput : deleteInputList) {

                    BondedManifest dbBondedManifest = getBondedManifest(deleteInput.getLanguageId(), deleteInput.getCompanyId(),
                            deleteInput.getPartnerId(), deleteInput.getPartnerMasterAirwayBill(), deleteInput.getPartnerHouseAirwayBill(), deleteInput.getBondedId());

                    dbBondedManifest.setDeletionIndicator(1L);
                    dbBondedManifest.setUpdatedBy(loginUserID);
                    dbBondedManifest.setUpdatedOn(new Date());
                    bondedManifestRepository.save(dbBondedManifest);
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
    public List<ReplicaBondedManifest> getAllBondedManifest() {
        List<ReplicaBondedManifest> bondedManifestList = replicaBondedManifestRepository.getAllNonDeletedBondedManifests();
        return bondedManifestList;
    }

    /**
     * Get BondedManifestHeader - Replica
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param partnerMasterAirwayBill
     * @param partnerHouseAirwayBill
     * @param bondedId
     * @return
     */
    public ReplicaBondedManifest getBondedManifestReplica(String languageId, String companyId, String partnerId, String partnerMasterAirwayBill,
                                                          String partnerHouseAirwayBill, String bondedId) {
        Optional<ReplicaBondedManifest> dbBondedManifest =
                replicaBondedManifestRepository.findByLanguageIdAndCompanyIdAndPartnerIdAndPartnerMasterAirwayBillAndPartnerHouseAirwayBillAndBondedIdAndDeletionIndicator
                        (languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, bondedId, 0L);
        if (dbBondedManifest.isEmpty()) {
            String errMsg = "The given values : languageId - " + languageId + ", companyId - " + companyId
                    + ", partnerId - " + partnerId + ", partnerMasterAirwayBill - " + partnerMasterAirwayBill
                    + ", partnerHouseAirwayBill - " + partnerHouseAirwayBill + " and bondedId - " + bondedId + " doesn't exists";
            // Error Log
            createBondedManifestLog(languageId, companyId, partnerId, partnerMasterAirwayBill, partnerHouseAirwayBill, bondedId, errMsg);
            throw new BadRequestException(errMsg);
        }
        return dbBondedManifest.get();
    }

    /**
     * Find BondedManifest
     *
     * @param findBondedManifest
     * @return
     * @throws Exception
     */
//    public List<ReplicaBondedManifest> findBondedManifest(FindBondedManifest findBondedManifest) throws Exception {
//
//        log.info("given Params for find -- > {}", findBondedManifest);
//        BondedManifestSpecification spec = new BondedManifestSpecification(findBondedManifest);
//        List<ReplicaBondedManifest> results = replicaBondedManifestRepository.findAll(spec);
//        log.info("found BondedManifests  --> {}", results);
//        return results;
//    }
    public List<ReplicaBondedManifest> findBondedManifest(FindBondedManifest findBondedManifest) throws Exception {

        log.info("given Params for find -- > {}", findBondedManifest);
        List<ReplicaBondedManifest> bondedManifestList = replicaBondedManifestRepository.findBondedManifestsWithQry(
                findBondedManifest.getLanguageId(), findBondedManifest.getCompanyId(), findBondedManifest.getPartnerId(),
                findBondedManifest.getPartnerMasterAirwayBill(), findBondedManifest.getPartnerHouseAirwayBill(), findBondedManifest.getBondedId(),
                findBondedManifest.getHsCode(), findBondedManifest.getPieceId(), findBondedManifest.getPieceItemId());
//        log.info("found BondedManifests  --> {}", bondedManifestList);
        return bondedManifestList;
    }


    //==========================================BondedManifest_ErrorLog================================================
    private void createBondedManifestLog(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                         String houseAirwayBill, String bondedId, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(masterAirwayBill);
        errorLog.setMethod("Exception thrown in getBondedManifest");
        errorLog.setReferenceField1(houseAirwayBill);
        errorLog.setReferenceField2(partnerId);
        errorLog.setReferenceField3(bondedId);
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }


    private void createBondedManifestLog2(List<AddBondedManifest> addBondedManifestList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (AddBondedManifest addBondedManifest : addBondedManifestList) {
            ErrorLog errorLog = new ErrorLog();

            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(addBondedManifest.getLanguageId());
            errorLog.setCompanyId(addBondedManifest.getCompanyId());
            errorLog.setRefDocNumber(addBondedManifest.getPartnerMasterAirwayBill());
            errorLog.setMethod("Exception thrown in createBondedManifest");
            errorLog.setReferenceField1(addBondedManifest.getPartnerId());
            errorLog.setReferenceField2(addBondedManifest.getPartnerHouseAirwayBill());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

    private void createBondedManifestLog3(List<UpdateBondedManifest> updateBondedManifestList, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        for (UpdateBondedManifest updateBondedManifest : updateBondedManifestList) {
            ErrorLog errorLog = new ErrorLog();
            errorLog.setLogDate(new Date());
            errorLog.setLanguageId(updateBondedManifest.getLanguageId());
            errorLog.setCompanyId(updateBondedManifest.getCompanyId());
            errorLog.setRefDocNumber(updateBondedManifest.getPartnerMasterAirwayBill());
            errorLog.setMethod("Exception thrown in updateBondedManifest");
            errorLog.setReferenceField1(updateBondedManifest.getPartnerId());
            errorLog.setReferenceField2(updateBondedManifest.getPartnerHouseAirwayBill());
            errorLog.setReferenceField3(updateBondedManifest.getBondedId());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
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
            errorLog.setRefDocNumber(deleteInput.getPartnerMasterAirwayBill());
            errorLog.setMethod("Exception thrown in deleteBondedManifest");
            errorLog.setReferenceField1(deleteInput.getPartnerId());
            errorLog.setReferenceField2(deleteInput.getPartnerHouseAirwayBill());
            errorLog.setReferenceField3(deleteInput.getBondedId());
            errorLog.setErrorMessage(error);
            errorLog.setCreatedBy("Admin");
            errorLogRepository.save(errorLog);
            errorLogList.add(errorLog);
        }
        errorLogService.writeLog(errorLogList);
    }

}

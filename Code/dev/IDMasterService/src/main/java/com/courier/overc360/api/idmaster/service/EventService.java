package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.errorlog.ErrorLog;
import com.courier.overc360.api.idmaster.primary.model.event.AddEvent;
import com.courier.overc360.api.idmaster.primary.model.event.Event;
import com.courier.overc360.api.idmaster.primary.model.event.UpdateEvent;
import com.courier.overc360.api.idmaster.primary.model.opstatus.OpStatus;
import com.courier.overc360.api.idmaster.primary.repository.ErrorLogRepository;
import com.courier.overc360.api.idmaster.primary.repository.EventRepository;
import com.courier.overc360.api.idmaster.primary.repository.OpStatusRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.event.FindEvent;
import com.courier.overc360.api.idmaster.replica.model.event.ReplicaEvent;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaEventRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaOpStatusRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaEventSpecification;
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
import java.util.stream.Collectors;

@Service
@Slf4j
public class EventService {

    @Autowired
    private ReplicaOpStatusRepository replicaOpStatusRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private OpStatusRepository opStatusRepository;

    @Autowired
    private ReplicaEventRepository replicaEventRepository;

    @Autowired
    private NumberRangeService numberRangeService;

    @Autowired
    private ErrorLogRepository errorLogRepository;

    @Autowired
    private ErrorLogService errorLogService;

    /*--------------------------------------------------------PRIMARY------------------------------------------------------------------------*/

    /**
     * Get City Details
     *
     * @param languageId
     * @param companyId
     * @param statusCode
     * @param eventCode
     * @return
     */

    public Event getEvent(String languageId, String companyId, String statusCode, String eventCode) {
        Optional<Event> dbEvent = eventRepository.findByLanguageIdAndCompanyIdAndStatusCodeAndEventCodeAndDeletionIndicator(languageId, companyId, statusCode, eventCode, 0L);
        if (dbEvent.isEmpty()) {
            throw new BadRequestException("The given values - " + " LanguageId: " + languageId + " CompanyId: " + companyId + " StatusCode: " + statusCode + "EventCode: " + eventCode + " and given values doesn't exists");
        }
        return dbEvent.get();
    }


    /**
     * Create Event
     *
     * @param addEvent
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     */
    @Transactional
    public Event createEvent(AddEvent addEvent, String loginUserID) throws IllegalAccessException, InvocationTargetException,
            IOException, CsvException {
        try {
            Optional<Event> duplicateEvent = eventRepository.findByLanguageIdAndCompanyIdAndStatusCodeAndEventCodeAndDeletionIndicator
                    (addEvent.getLanguageId(), addEvent.getCompanyId(), addEvent.getStatusCode(), addEvent.getEventCode(), 0L);
            Optional<OpStatus> dbOpStatus = opStatusRepository.findByLanguageIdAndCompanyIdAndStatusCodeAndDeletionIndicator
                    (addEvent.getLanguageId(), addEvent.getCompanyId(), addEvent.getStatusCode(), 0L);


            if (dbOpStatus.isEmpty()) {
                throw new BadRequestException("The given values - LanguageId: " + addEvent.getLanguageId() + ", CompanyId: " + addEvent.getCompanyId() +
                        ", StatusCode: " + addEvent.getStatusCode() + " doesn't exists");
            } else if (duplicateEvent.isPresent()) {
                throw new BadRequestException("Record is getting Duplicated with the given values : EventCode - " + addEvent.getEventCode());
            } else {
                log.info("new Event --> " + addEvent);
                IKeyValuePair iKeyValuePair = replicaOpStatusRepository.getDescription(addEvent.getLanguageId(),
                        addEvent.getCompanyId(), addEvent.getStatusCode());
                Event newEvent = new Event();
                BeanUtils.copyProperties(addEvent, newEvent, CommonUtils.getNullPropertyNames(addEvent));
                if ((addEvent.getEventCode() != null &&
                        (addEvent.getReferenceField10() != null && addEvent.getReferenceField10().equalsIgnoreCase("true"))) ||
                        addEvent.getEventCode() == null || addEvent.getEventCode().isBlank()) {
                    String NUM_RAN_OBJ = "EVENT";
                    String EVENT_CODE = numberRangeService.getNextNumberRange(NUM_RAN_OBJ);
                    log.info("next Value from NumberRange for EVENT_CODE : " + EVENT_CODE);
                    newEvent.setEventCode(EVENT_CODE);
                }
                if (iKeyValuePair != null) {
                    newEvent.setLanguageDescription(iKeyValuePair.getLangDesc());
                    newEvent.setCompanyName(iKeyValuePair.getCompanyDesc());
                    newEvent.setOpStatusDescription(iKeyValuePair.getStatusDesc());
                }
                newEvent.setDeletionIndicator(0L);
                newEvent.setCreatedBy(loginUserID);
                newEvent.setCreatedOn(new Date());
                newEvent.setUpdatedBy(loginUserID);
                newEvent.setUpdatedOn(new Date());
                return eventRepository.save(newEvent);
            }
        } catch (Exception e) {
            // Error Log
            createEventLog2(addEvent, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }


    /**
     * Update Event
     *
     * @param languageId
     * @param companyId
     * @param statusCode
     * @param eventCode
     * @param updateEvent
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     */
    @Transactional
    public Event updateEvent(String languageId, String companyId, String statusCode, String eventCode, String loginUserID, UpdateEvent updateEvent)
            throws IllegalAccessException, InvocationTargetException, IOException, CsvException {
        try {
            Event dbEvent = getEvent(languageId, companyId, statusCode, eventCode);
            BeanUtils.copyProperties(updateEvent, dbEvent, CommonUtils.getNullPropertyNames(updateEvent));
            dbEvent.setUpdatedBy(loginUserID);
            dbEvent.setUpdatedOn(new Date());
            return eventRepository.save(dbEvent);
        } catch (Exception e) {
            //Error log
            createEventLog(languageId, companyId, statusCode, eventCode, e.toString());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete Event
     *
     * @param languageId
     * @param companyId
     * @param statusCode
     * @param eventCode
     * @param loginUserID
     */
    public void deleteEvent(String languageId, String companyId, String statusCode, String eventCode, String loginUserID) {
        Event dbEvent = getEvent(languageId, companyId, statusCode, eventCode);
        if (dbEvent != null) {
            dbEvent.setDeletionIndicator(1L);
            dbEvent.setUpdatedBy(loginUserID);
            dbEvent.setUpdatedOn(new Date());
            eventRepository.save(dbEvent);
        } else {
            // Error Log
            createEventLog1(languageId, companyId, statusCode, eventCode, "Error in deleting EventId - " + eventCode);
            throw new BadRequestException("Error in deleting EventId - " + eventCode);
        }
    }

    /*======================================================REPLICA=====================================================*/

    /**
     * Get All Event Details
     *
     * @return
     */
    public List<ReplicaEvent> getAllEvents() {
        List<ReplicaEvent> EventList = replicaEventRepository.findAll();
        EventList = EventList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return EventList;
    }

    /**
     * Get City Details
     *
     * @param languageId
     * @param companyId
     * @param statusCode
     * @param eventCode
     * @return
     */

    public ReplicaEvent replicaGetEvent(String languageId, String companyId, String statusCode, String eventCode) {
        Optional<ReplicaEvent> dbEvent = replicaEventRepository.findByLanguageIdAndCompanyIdAndStatusCodeAndEventCodeAndDeletionIndicator(
                languageId, companyId, statusCode, eventCode, 0L);
        if (dbEvent.isEmpty()) {
            throw new BadRequestException("The given values - " + " LanguageId: " + languageId + " CompanyId: " + companyId +
                    " StatusCode: " + statusCode + "EventCode: " + eventCode + " and given values doesn't exists");
        }
        return dbEvent.get();
    }

    /**
     * Find Event
     *
     * @param findEvent
     * @return
     */

    public List<ReplicaEvent> findEvent(FindEvent findEvent) {

        ReplicaEventSpecification spec = new ReplicaEventSpecification(findEvent);
        List<ReplicaEvent> result = replicaEventRepository.findAll(spec);
        log.info("found Event --> " + result);
        return result;
    }

    //=============================================Event_ErrorLog=======================================================
    private void createEventLog(String languageId, String companyId, String statusCode, String eventCode,
                                String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(eventCode);
        errorLog.setReferenceField1(statusCode);
        errorLog.setMethod("Exception thrown in updateEvent");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

    private void createEventLog1(String languageId, String companyId, String statusCode, String eventCode, String error) {

        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(languageId);
        errorLog.setCompanyId(companyId);
        errorLog.setRefDocNumber(eventCode);
        errorLog.setReferenceField1(statusCode);
        errorLog.setMethod("Exception thrown in getEvent");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
    }

    private void createEventLog2(AddEvent addEvent, String error) throws IOException, CsvException {

        List<ErrorLog> errorLogList = new ArrayList<>();
        ErrorLog errorLog = new ErrorLog();
        errorLog.setLogDate(new Date());
        errorLog.setLanguageId(addEvent.getLanguageId());
        errorLog.setCompanyId(addEvent.getCompanyId());
        errorLog.setRefDocNumber(addEvent.getEventCode());
        errorLog.setReferenceField1(addEvent.getStatusCode());
        errorLog.setMethod("Exception thrown in createEvent");
        errorLog.setErrorMessage(error);
        errorLog.setCreatedBy("Admin");
        errorLogRepository.save(errorLog);
        errorLogList.add(errorLog);
        errorLogService.writeLog(errorLogList);
    }

}


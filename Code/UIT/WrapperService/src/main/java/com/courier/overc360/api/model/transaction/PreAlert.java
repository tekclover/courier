package com.courier.overc360.api.model.transaction;

import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data

public class PreAlert {

    private String companyId;

    private String languageId;

    private String partnerId;

    private String masterAirwayBill;

    private String partnerHouseAirwayBill;

    private String partnerMasterAirwayBill;

    private String totalWeight;

    private String flightNo;

    private Long consoleIndicator;

    private String consignmentValueLocal;

    private Long manifestIndicator;

    private String flightName;

    private Date estimatedTimeOfDeparture;

    private Date estimatedTimeOfArrival;

    private String noOfPieces;

    private String consignmentValue;

    private String exchangeRate;

    private String iata;

    private String customsInsurance;

    private String duty;

    private String addIata;

    private String addInsurance;

    private String customsValue;

    private String calculatedTotalDuty;

    private String bayanHv;

    private String currency;

    private String description;

    private String consigneeName;

    private String shipper;

    private String origin;

    private String originCode;

//    private String consignmentValueKd;

    private String hsCode;

    private String partnerType;

    private String incoTerm;

    private String hawbType;

    private String hawbTypeId;

    private String hawbTypeDescription;

    private String companyName;

    private String languageDescription;

    private Date hawbTimeStamp = new Date();

    private String consignmentLocalId;

    private String houseAirwayBill;

    private String referenceField1;

    private String referenceField2;

    private String referenceField3;

    private String referenceField4;

    private String referenceField5;

    private String referenceField6;

    private String referenceField7;

    private String referenceField8;

    private String referenceField9;

    private String referenceField10;

    private String createdBy;

    private Date createdOn = new Date();

    private String updatedBy;

    private Date updatedOn = new Date();
}

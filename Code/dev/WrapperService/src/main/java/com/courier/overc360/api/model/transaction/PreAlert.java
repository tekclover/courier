package com.courier.overc360.api.model.transaction;

import lombok.Data;

import java.util.Date;

@Data

public class PreAlert {

    private String companyId;

    private String languageId;

    private String partnerId;

    private String partnerType;

    private String masterAirwayBill;

    private String houseAirwayBill;

    private String partnerHouseAirwayBill;

    private String partnerMasterAirwayBill;

    private String flightNo;

    private String flightName;

    private Date estimatedTimeOfDeparture;

    private Date estimatedTimeTravel;

    private String totalWeight;

    private String noOfPieces;

    private String consignmentValue;

    private String bayanHv;

    private String currency;

    private String description;

    private String consigneeName;

    private String shipper;

    private String origin;

    private String  originCode;

    private String consignmentValueKd;

    private String iata;

    private String hsCode;

    private String incoTerm;

    private Long deletionIndicator = 0L;

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

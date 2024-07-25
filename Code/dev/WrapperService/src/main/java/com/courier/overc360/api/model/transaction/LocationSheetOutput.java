package com.courier.overc360.api.model.transaction;

import lombok.Data;

import java.util.Date;

@Data
public class LocationSheetOutput {

    private String languageId;
    private String companyId;
    private String partnerMasterAirwayBill;
    //    private String houseAirwayBill;
    private String consoleId;
    private String location;

    private String languageDescription;
    private String companyName;
    private String partnerName;
    private String partnerType;

    private String totalNoOfPieces;
    private String totalSumOfWeights;
    private String origin;
    private String consigneeName;
    private String masterAirwayBill;
    private String natureOfGoods;
    private Date locationSheetTimeStamp;

}

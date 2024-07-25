package com.courier.overc360.api.model.transaction;

import lombok.Data;

import java.util.Date;

@Data
public class ConsoleTrackingReportInput {

    private String languageId;
    private String companyId;
    private String partnerId;
    private String partnerMasterAirwayBill;
    private String partnerHouseAirwayBill;

    private Date fromDate;
    private Date toDate;

}

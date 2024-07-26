package com.courier.overc360.api.midmile.replica.model.console.unconsolidation;

import lombok.Data;

import java.util.List;

@Data
public class FindUnconsolidation {

    private List<String> languageId;
    private List<String> companyId;
    private List<String> partnerId;
    private List<String> partnerMasterAirwayBill;
    private List<String> partnerHouseAirwayBill;
//    private List<String> consoleId;
}

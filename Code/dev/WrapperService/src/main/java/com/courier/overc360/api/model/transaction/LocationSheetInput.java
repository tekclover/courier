package com.courier.overc360.api.model.transaction;

import lombok.Data;

@Data
public class LocationSheetInput {

    private String languageId;
    private String companyId;
    private String partnerMasterAirwayBill;
    //    private String houseAirwayBill;
    private String consoleId;
    private String location;

}

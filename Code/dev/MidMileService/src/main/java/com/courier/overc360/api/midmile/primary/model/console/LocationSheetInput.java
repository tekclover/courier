package com.courier.overc360.api.midmile.primary.model.console;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class LocationSheetInput {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerMaster Airway Bill is mandatory")
    private String partnerMasterAirwayBill;

    //    private String houseAirwayBill;

    @NotBlank(message = "ConsoleID is mandatory")
    private String consoleId;

    private String location;

}

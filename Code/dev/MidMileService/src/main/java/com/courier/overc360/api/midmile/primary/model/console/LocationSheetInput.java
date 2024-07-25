package com.courier.overc360.api.midmile.primary.model.console;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class LocationSheetInput {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    @NotBlank(message = "Partner Master Airway Bill is mandatory")
    private String partnerMasterAirwayBill;

    @NotBlank(message = "ConsoleID is mandatory")
    private String consoleId;

    private String location;

    //    private String houseAirwayBill;

}

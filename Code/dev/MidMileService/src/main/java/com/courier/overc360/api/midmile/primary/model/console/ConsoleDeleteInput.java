package com.courier.overc360.api.midmile.primary.model.console;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ConsoleDeleteInput {
    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    @NotBlank(message = "Master Airway Bill is mandatory")
    private String masterAirwayBill;

    @NotBlank(message = "Console Id is mandatory")
    private String consoleId;

    @NotBlank(message = "House Airway Bill is mandatory")
    private String houseAirwayBill;

}

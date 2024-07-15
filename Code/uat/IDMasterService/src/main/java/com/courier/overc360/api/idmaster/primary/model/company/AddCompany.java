package com.courier.overc360.api.idmaster.primary.model.company;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class AddCompany {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    private String companyId;

    @NotBlank(message = "Company Name is mandatory")
    private String companyName;

    @NotBlank(message = "AddressLine1 is mandatory")
    private String addressLine1;

    private String addressLine2;

    private String addressLine3;

    private String addressLine4;

    private String cityId;

    private String provinceId;

    private String countryId;

    private String districtId;

    @NotBlank(message = "StatusId is mandatory")
    private String statusId;

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

}

package com.courier.overc360.api.idmaster.primary.model.rate;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class AddRate {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    @NotBlank(message = "PartnerName is mandatory")
    private String partnerName;

    @NotBlank(message = "PartnerType is mandatory")
    private String partnerType;

    @NotBlank(message = "RateParameterId is mandatory")
    private String rateParameterId;

    @NotBlank(message = "Rate is mandatory")
    private String rate;

    @NotBlank(message = "RateUnit is mandatory")
    private String rateUnit;

    @NotBlank(message = "RateParameterUnit is mandatory")
    private String rateParameterUnit;

    @NotBlank(message = "RangeFrom is mandatory")
    private String rangeFrom;

    @NotBlank(message = "RangeTo is mandatory")
    private String rangeTo;

    private String remark;

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

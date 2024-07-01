package com.courier.overc360.api.idmaster.primary.model.city;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class AddCity {

    @NotBlank(message = "Language Id is mandatory")
    private String languageId;

    @NotBlank(message = "Company Id is mandatory")
    private String companyId;

    @NotBlank(message = "Country Id is mandatory")
    private String countryId;

    @NotBlank(message = "Province Id is mandatory")
    private String provinceId;

    @NotBlank(message = "District Id is mandatory")
    private String districtId;

    @NotBlank(message = "City Id is mandatory")
    private String cityId;

    @NotBlank(message = "City Name is mandatory")
    private String cityName;

    @NotBlank(message = "StatusId is mandatory")
    private String statusId;

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

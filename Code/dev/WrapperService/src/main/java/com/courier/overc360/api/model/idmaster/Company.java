package com.courier.overc360.api.model.idmaster;

import lombok.Data;

import javax.persistence.Column;
import java.util.Date;

@Data
public class Company {

    private String companyId;

    private String languageId;

    private String languageDescription;

    private String companyName;

    private String addressLine1;

    private String addressLine2;

    private String addressLine3;

    private String addressLine4;

    private String cityId;

    private String cityName;

    private String provinceId;

    private String provinceName;

    private String countryId;

    private String countryName;

    private String statusId;

    private String statusDescription;

    private Long deletionIndicator;

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

    private String createdBy;

    private Date createdOn = new Date();

    private String updatedBy;

    private Date updatedOn = new Date();
}

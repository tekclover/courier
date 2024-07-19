package com.courier.overc360.api.model.idmaster;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
public class AirportCode {

    private String languageId;

    private String companyId;

    private String airportCode;

    private String languageDescription;

    private String companyName;

    private String airportText;

    private String countryId;

    private String countryName;

    private String statusId;

    private String statusDescription;

    private String remark;

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

    private Date createdOn;

    private Date updatedOn;

    private String updatedBy;

}
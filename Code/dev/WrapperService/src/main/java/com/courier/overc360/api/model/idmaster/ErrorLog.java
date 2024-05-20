package com.courier.overc360.api.model.idmaster;

import lombok.Data;

import java.util.Date;

@Data
public class ErrorLog {

    private Long logId;

    private Date logDate;

    private String errorMessage;

    private String languageId;

    private String companyId;

    private String refDocNumber;

    private String method;

    private String referenceField1;

    private String referenceField2;

    private String referenceField3;

    private String referenceField4;

    private String referenceField5;

    private String createdBy;

}

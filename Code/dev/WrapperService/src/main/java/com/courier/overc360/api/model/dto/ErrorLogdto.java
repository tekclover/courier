package com.courier.overc360.api.model.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ErrorLogdto {

    private String logId;
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

    public ErrorLogdto(
            String logId, Date logDate, String errorMessage, String languageId, String companyId, String refDocNumber,
            String method, String referenceField1, String referenceField2, String referenceField3,
            String referenceField4, String referenceField5, String createdBy
    ) {
        this.logId = logId;
        this.logDate = logDate;
        this.errorMessage = errorMessage;
        this.languageId = languageId;
        this.companyId = companyId;
        this.refDocNumber = refDocNumber;
        this.method = method;
        this.referenceField1 = referenceField1;
        this.referenceField2 = referenceField2;
        this.referenceField3 = referenceField3;
        this.referenceField4 = referenceField4;
        this.referenceField5 = referenceField5;
        this.createdBy = createdBy;
    }

}

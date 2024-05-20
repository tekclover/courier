package com.courier.overc360.api.idmaster.primary.model.errorlog;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tblerrorlog")
public class ErrorLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LOG_ID")
    private Long logId;

    @Column(name = "LOG_DATE")
    private Date logDate;

    @Column(name = "ERR_MSG", columnDefinition = "nvarchar(3999)")
    private String errorMessage;

    @Column(name = "LANG_ID", columnDefinition = "nvarchar(50)")
    private String languageId;

    @Column(name = "C_ID", columnDefinition = "nvarchar(50)")
    private String companyId;

    @Column(name = "ORIGIN", columnDefinition = "nvarchar(50)")
    private String origin;

    @Column(name = "ORIGIN_CODE", columnDefinition = "nvarchar(50)")
    private String originCode;

    @Column(name = "REF_DOC_NO", columnDefinition = "nvarchar(50)")
    private String refDocNumber;

    @Column(name = "METHOD", columnDefinition = "nvarchar(500)")
    private String method;

    @Column(name = "REF_FIELD_1", columnDefinition = "nvarchar(500)")
    private String referenceField1;

    @Column(name = "REF_FIELD_2", columnDefinition = "nvarchar(500)")
    private String referenceField2;

    @Column(name = "REF_FIELD_3", columnDefinition = "nvarchar(500)")
    private String referenceField3;

    @Column(name = "REF_FIELD_4", columnDefinition = "nvarchar(500)")
    private String referenceField4;

    @Column(name = "REF_FIELD_5", columnDefinition = "nvarchar(500)")
    private String referenceField5;

    @Column(name = "CTD_BY", columnDefinition = "nvarchar(50)")
    private String createdBy;

}

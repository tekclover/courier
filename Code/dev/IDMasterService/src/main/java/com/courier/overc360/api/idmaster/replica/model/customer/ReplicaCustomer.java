package com.courier.overc360.api.idmaster.replica.model.customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
/*
 * `LANG_ID`, `C_ID`, `CUSTOMER_ID`, `PRODUCT_ID`, `SUB_PRODUCT_ID`, `SUB_PRODUCT_VALUE`
 */
@Table(name = "tblcustomer",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "unique_key_customer",
                        columnNames = {"LANG_ID", "C_ID", "CUSTOMER_ID", "PRODUCT_ID", "SUB_PRODUCT_ID", "SUB_PRODUCT_VALUE"}
                )
        }
)
@IdClass(ReplicaCustomerCompositeKey.class)
public class ReplicaCustomer {

    @Id
    @Column(name = "LANG_ID", columnDefinition = "nvarchar(50)")
    private String languageId;

    @Column(name = "LANG_TEXT", columnDefinition = "nvarchar(50)")
    private String languageDescription;

    @Id
    @Column(name = "C_ID", columnDefinition = "nvarchar(50)")
    private String companyId;

    @Column(name = "C_NAME", columnDefinition = "nvarhcar(50)")
    private String companyName;

    @Id
    @Column(name = "CUSTOMER_ID", columnDefinition = "nvarchar(50)")
    private String customerId;

    @Column(name = "CUSTOMER_NAME", columnDefinition = "nvarchar(50)")
    private String customerName;

    @Id
    @Column(name = "PRODUCT_ID", columnDefinition = "nvarchar(50)")
    private String productId;

    @Column(name = "PRODUCT_NAME", columnDefinition = "nvarchar(50)")
    private String productName;

    @Id
    @Column(name = "SUB_PRODUCT_ID", columnDefinition = "nvarchar(50)")
    private String subProductId;

    @Column(name = "SUB_PRODUCT_NAME", columnDefinition = "nvarchar(50)")
    private String subProductName;

    @Id
    @Column(name = "SUB_PRODUCT_VALUE", columnDefinition = "nvarchar(50)")
    private String subProductValue;

    @Column(name = "REMARK", columnDefinition = "nvarchar(50)")
    private String remark;

    @Column(name = "IS_DELETED")
    private Long deletionIndicator = 0L;

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

    @Column(name = "REF_FIELD_6", columnDefinition = "nvarchar(500)")
    private String referenceField6;

    @Column(name = "REF_FIELD_7", columnDefinition = "nvarchar(500)")
    private String referenceField7;

    @Column(name = "REF_FIELD_8", columnDefinition = "nvarchar(500)")
    private String referenceField8;

    @Column(name = "REF_FIELD_9", columnDefinition = "nvarchar(500)")
    private String referenceField9;

    @Column(name = "REF_FIELD_10", columnDefinition = "nvarchar(500)")
    private String referenceField10;

    @Column(name = "CTD_BY", columnDefinition = "nvarchar(50)")
    private String createdBy;

    @Column(name = "CTD_ON")
    private Date createdOn = new Date();

    @Column(name = "UTD_BY", columnDefinition = "nvarchar(50)")
    private String updatedBy;

    @Column(name = "UTD_ON")
    private Date updatedOn = new Date();
}

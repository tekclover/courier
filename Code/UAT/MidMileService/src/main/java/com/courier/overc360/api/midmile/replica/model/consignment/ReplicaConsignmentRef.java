package com.courier.overc360.api.midmile.replica.model.consignment;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "tblconsignment_ref")
public class ReplicaConsignmentRef{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CON_REF_ID" )
    private Long consignmentRefId;

    @Column(name = "PACK_DETAILS", columnDefinition = "nvarchar(50)")
    private String packDetails;

    @Column(name = "DESCRIPTION", columnDefinition = "nvarchar(500)")
    private String description;

    @Column(name = "REF_NUMBER", columnDefinition = "nvarchar(50)")
    private String referenceNumber;

    @Column(name = "STORAGE_LOCATION", columnDefinition = "nvarchar(50)")
    private String storageLocation;

    @Column(name = "IS_EXCHANGE", columnDefinition = "nvarchar(50)")
    private String isExchange;

    @Column(name = "REVERSE_REASON")
    private String reverseReason;

    @Column(name = "REF_FIELD_1", columnDefinition = "nvarchar(200)")
    private String referenceField1;
    @Column(name = "REF_FIELD_2", columnDefinition = "nvarchar(200)")
    private String referenceField2;
    @Column(name = "REF_FIELD_3", columnDefinition = "nvarchar(200)")
    private String referenceField3;
    @Column(name = "REF_FIELD_4", columnDefinition = "nvarchar(200)")
    private String referenceField4;
    @Column(name = "REF_FIELD_5", columnDefinition = "nvarchar(200)")
    private String referenceField5;
    @Column(name = "REF_FIELD_6", columnDefinition = "nvarchar(200)")
    private String referenceField6;
    @Column(name = "REF_FIELD_7", columnDefinition = "nvarchar(200)")
    private String referenceField7;
    @Column(name = "REF_FIELD_8", columnDefinition = "nvarchar(200)")
    private String referenceField8;
    @Column(name = "REF_FIELD_9", columnDefinition = "nvarchar(200)")
    private String referenceField9;
    @Column(name = "REF_FIELD_10", columnDefinition = "nvarchar(200)")
    private String referenceField10;
    @Column(name = "REF_FIELD_11", columnDefinition = "nvarchar(200)")
    private String referenceField11;
    @Column(name = "REF_FIELD_12", columnDefinition = "nvarchar(200)")
    private String referenceField12;
    @Column(name = "REF_FIELD_13", columnDefinition = "nvarchar(200)")
    private String referenceField13;
    @Column(name = "REF_FIELD_14", columnDefinition = "nvarchar(200)")
    private String referenceField14;
    @Column(name = "REF_FIELD_15", columnDefinition = "nvarchar(200)")
    private String referenceField15;
    @Column(name = "REF_FIELD_16", columnDefinition = "nvarchar(200)")
    private String referenceField16;
    @Column(name = "REF_FIELD_17", columnDefinition = "nvarchar(200)")
    private String referenceField17;
    @Column(name = "REF_FIELD_18", columnDefinition = "nvarchar(200)")
    private String referenceField18;
    @Column(name = "REF_FIELD_19", columnDefinition = "nvarchar(200)")
    private String referenceField19;
    @Column(name = "REF_FIELD_20", columnDefinition = "nvarchar(200)")
    private String referenceField20;
    @Column(name = "REF_FIELD_21", columnDefinition = "nvarchar(200)")
    private String referenceField21;
    @Column(name = "REF_FIELD_22", columnDefinition = "nvarchar(200)")
    private String referenceField22;
    @Column(name = "REF_FIELD_23", columnDefinition = "nvarchar(200)")
    private String referenceField23;
    @Column(name = "REF_FIELD_24", columnDefinition = "nvarchar(200)")
    private String referenceField24;
    @Column(name = "REF_FIELD_25", columnDefinition = "nvarchar(200)")
    private String referenceField25;
    @Column(name = "REF_FIELD_26", columnDefinition = "nvarchar(200)")
    private String referenceField26;
    @Column(name = "REF_FIELD_27", columnDefinition = "nvarchar(200)")
    private String referenceField27;
    @Column(name = "REF_FIELD_28", columnDefinition = "nvarchar(200)")
    private String referenceField28;
    @Column(name = "REF_FIELD_29", columnDefinition = "nvarchar(200)")
    private String referenceField29;
    @Column(name = "REF_FIELD_30", columnDefinition = "nvarchar(200)")
    private String referenceField30;
    @Column(name = "REF_FIELD_31", columnDefinition = "nvarchar(200)")
    private String referenceField31;
    @Column(name = "REF_FIELD_32", columnDefinition = "nvarchar(200)")
    private String referenceField32;
    @Column(name = "REF_FIELD_33", columnDefinition = "nvarchar(200)")
    private String referenceField33;
    @Column(name = "REF_FIELD_34", columnDefinition = "nvarchar(200)")
    private String referenceField34;
    @Column(name = "REF_FIELD_35", columnDefinition = "nvarchar(200)")
    private String referenceField35;
    @Column(name = "REF_FIELD_36", columnDefinition = "nvarchar(200)")
    private String referenceField36;
    @Column(name = "REF_FIELD_37", columnDefinition = "nvarchar(200)")
    private String referenceField37;
    @Column(name = "REF_FIELD_38", columnDefinition = "nvarchar(200)")
    private String referenceField38;
    @Column(name = "REF_FIELD_39", columnDefinition = "nvarchar(200)")
    private String referenceField39;
    @Column(name = "REF_FIELD_40", columnDefinition = "nvarchar(200)")
    private String referenceField40;
    @Column(name = "REF_FIELD_41", columnDefinition = "nvarchar(200)")
    private String referenceField41;
    @Column(name = "REF_FIELD_42", columnDefinition = "nvarchar(200)")
    private String referenceField42;
    @Column(name = "REF_FIELD_43", columnDefinition = "nvarchar(200)")
    private String referenceField43;
    @Column(name = "REF_FIELD_44", columnDefinition = "nvarchar(200)")
    private String referenceField44;
    @Column(name = "REF_FIELD_45", columnDefinition = "nvarchar(200)")
    private String referenceField45;
    @Column(name = "REF_FIELD_46", columnDefinition = "nvarchar(200)")
    private String referenceField46;
    @Column(name = "REF_FIELD_47", columnDefinition = "nvarchar(200)")
    private String referenceField47;
    @Column(name = "REF_FIELD_48", columnDefinition = "nvarchar(200)")
    private String referenceField48;
    @Column(name = "REF_FIELD_49", columnDefinition = "nvarchar(200)")
    private String referenceField49;
    @Column(name = "Ref_FIELD_50", columnDefinition = "nvarchar(200)")
    private String referenceField50;
    @Column(name = "CTD_BY", columnDefinition = "nvarchar(50)")
    private String createdBy;
    @Column(name = "CTD_ON")
    private Date createdOn = new Date();
    @Column(name = "UTD_BY", columnDefinition = "nvarchar(50)")
    private String updatedBy;
    @Column(name = "UTD_ON")
    private Date updatedOn = new Date();

}

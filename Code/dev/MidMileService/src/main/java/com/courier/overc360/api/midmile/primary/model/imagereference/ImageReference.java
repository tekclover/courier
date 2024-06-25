package com.courier.overc360.api.midmile.primary.model.imagereference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
/*
 * `LANG_ID`, `C_ID`, `PARTNER_ID` , `MASTER_AIRWAY_BILL` , `HOUSE_AIRWAY_BILL` , `PIECE_ID` ,`PIECE_ITEM_ID` , `IMAGE_REF_ID`
 */
@Table(
        name = "tblimagereference",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "unique_key_imagereference",
                        columnNames = { "LANG_ID", "C_ID", "PARTNER_ID", "MASTER_AIRWAY_BILL", "HOUSE_AIRWAY_BILL", "IMAGE_REF_ID" }
                )
        }
)
@IdClass(ImageReferenceCompositeKey.class)
public class ImageReference {

    @Id
    @Column(name="IMAGE_REF_ID" , columnDefinition = "nvarchar(50)")
    private String imageRefId;

    @Id
    @Column(name = "LANG_ID" , columnDefinition = "nvarchar(50)")
    private String languageId;

    @Id
    @Column(name = "C_ID" , columnDefinition = "nvarchar(50)")
    private String companyId;

    @Id
    @Column(name = "PARTNER_ID" , columnDefinition = "nvarchar(100)")
    private String partnerId;

    @Id
    @Column(name = "MASTER_AIRWAY_BILL" , columnDefinition = "nvarchar(50)")
    private String masterAirwayBill;

    @Id
    @Column(name = "HOUSE_AIRWAY_BILL" , columnDefinition = "nvarchar(50)")
    private String houseAirwayBill;

    @Column(name = "PIECE_ID" , columnDefinition = "nvarchar(50)")
    private String pieceId;

    @Column(name = "PIECE_ITEM_ID" , columnDefinition = "nvarchar(50)")
    private String pieceItemId;

    @Column(name = "LANG_TEXT" , columnDefinition = "nvarchar(100)")
    private String languageDescription;

    @Column(name = "C_NAME" , columnDefinition = "nvarchar(100)")
    private String companyName;

    @Column(name = "PARTNER_TYPE" , columnDefinition = "nvarchar(50)")
    private String partnerType;

    @Column(name = "PARTNER_NAME" , columnDefinition = "nvarchar(100)")
    private String partnerName;

    @Column(name = "IMAGE_REF" , columnDefinition = "nvarchar(500)")
    private String imageRef;

    @Column(name = "PARTNER_MASTER_AIRWAY_BILL" , columnDefinition = "nvarchar(50)")
    private String partnerMasterAirwayBill;

    @Column(name = "PARTNER_HOUSE_AIRWAY_BILL" , columnDefinition = "nvarchar(50)")
    private String partnerHouseAirwayBill;

    @Column(name = "REF_IMAGE_URL", columnDefinition = "nvarchar(200)")
    private String referenceImageUrl;

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

    @Column(name = "REF_FIELD_11", columnDefinition = "nvarchar(500)")
    private String referenceField11;

    @Column(name = "REF_FIELD_12", columnDefinition = "nvarchar(500)")
    private String referenceField12;

    @Column(name = "REF_FIELD_13", columnDefinition = "nvarchar(500)")
    private String referenceField13;

    @Column(name = "REF_FIELD_14", columnDefinition = "nvarchar(500)")
    private String referenceField14;

    @Column(name = "REF_FIELD_15", columnDefinition = "nvarchar(500)")
    private String referenceField15;

    @Column(name = "REF_FIELD_16", columnDefinition = "nvarchar(500)")
    private String referenceField16;

    @Column(name = "REF_FIELD_17", columnDefinition = "nvarchar(500)")
    private String referenceField17;

    @Column(name = "REF_FIELD_18", columnDefinition = "nvarchar(500)")
    private String referenceField18;

    @Column(name = "REF_FIELD_19", columnDefinition = "nvarchar(500)")
    private String referenceField19;

    @Column(name = "REF_FIELD_20", columnDefinition = "nvarchar(500)")
    private String referenceField20;

    @Column(name = "CTD_BY", columnDefinition = "nvarchar(50)")
    private String createdBy;

    @Column(name = "CTD_ON")
    private Date createdOn = new Date();

    @Column(name = "UTD_BY", columnDefinition = "nvarchar(50)")
    private String updatedBy;

    @Column(name = "UTD_ON")
    private Date updatedOn = new Date();
}

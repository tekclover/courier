package com.courier.overc360.api.midmile.replica.model.piecedetails;


import com.courier.overc360.api.midmile.replica.model.imagereference.ReplicaImageReference;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaItemDetails;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tblpiecedetails")
public class ReplicaPieceDetails implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PIECE_DETAILS_ID")
    private Long pieceDetailsId;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "PIECE_DETAILS_ID")
    private List<ReplicaItemDetails> itemDetails;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "PIECE_DETAILS_ID")
    private Set<ReplicaImageReference> referenceImageList = new HashSet<>();

    @Column(name = "LANG_ID", columnDefinition = "nvarchar(50)")
    private String languageId;

    @Column(name = "C_ID", columnDefinition = "nvarchar(50)")
    private String companyId;

    @Column(name = "PARTNER_ID", columnDefinition = "nvarchar(50)")
    private String partnerId;

    @Column(name = "MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String masterAirwayBill;

    @Column(name = "HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String houseAirwayBill;

    @Column(name = "PIECE_ID", columnDefinition = "nvarchar(50)")
    private String pieceId;

    @Column(name = "PIECE_TYP", columnDefinition = "nvarchar(50)")
    private String pieceType;

    @Column(name = "PIECE_TYP_ID", columnDefinition = "nvarchar(50)")
    private String pieceTypeId;

    @Column(name = "PIECE_TYP_TXT", columnDefinition = "nvarchar(100)")
    private String pieceTypeDescription;

    @Column(name = "PIECE_TIMESTAMP")
    private Date pieceTimeStamp = new Date();

    @Column(name = "PARTNER_MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerMasterAirwayBill;

    @Column(name = "PARTNER_HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerHouseAirwayBill;

    @Column(name = "CONSIGNMENT_ID")
    private Long consignmentId;

    @Column(name = "LANG_TEXT", columnDefinition = "nvarchar(100)")
    private String languageDescription;

    @Column(name = "C_NAME", columnDefinition = "nvarchar(50)")
    private String companyName;

    @Column(name = "PARTNER_TYPE", columnDefinition = "nvarchar(50)")
    private String partnerType;

    @Column(name = "PARTNER_NAME", columnDefinition = "nvarchar(50)")
    private String partnerName;

    @Column(name = "PIECE_PRODUCT_CODE", columnDefinition = "nvarchar(50)")
    private String pieceProductCode;

    @Column(name = "DESCRIPTION", columnDefinition = "nvarchar(500)")
    private String description;

    @Column(name = "DECLARED_VALUE", columnDefinition = "nvarchar(50)")
    private String declaredValue;

    @Column(name = "COD_AMOUNT", columnDefinition = "nvarchar(50)")
    private String codAmount;

    @Column(name = "LENGTH", columnDefinition = "nvarchar(50)")
    private String length;

    @Column(name = "DIMENSION_UNIT", columnDefinition = "nvarchar(50)")
    private String dimensionUnit;

    @Column(name = "HS_CODE", columnDefinition = "nvarchar(50)")
    private String hsCode;

    @Column(name = "WIDTH", columnDefinition = "nvarchar(50)")
    private String width;

    @Column(name = "HEIGHT", columnDefinition = "nvarchar(50)")
    private String height;

    @Column(name = "WEIGHT", columnDefinition = "nvarchar(50)")
    private String weight;

    @Column(name = "WEIGHT_UNIT", columnDefinition = "nvarchar(50)")
    private String weight_unit;

    @Column(name = "VOLUME", columnDefinition = "nvarchar(50)")
    private String volume;

    @Column(name = "VOLUME_UNIT", columnDefinition = "nvarchar(50)")
    private String volumeUnit;

    @Column(name = "CONSIGNMENT_VALUE_LOCAL", columnDefinition = "nvarchar(50)")
    private String consignmentValueLocal;

    @Column(name = "ADD_IATA", columnDefinition = "nvarchar(50)")
    private String addIata;

    @Column(name = "ADD_INSURANCE", columnDefinition = "nvarchar(50)")
    private String addInsurance;

    @Column(name = "CUSTOMS_VALUE", columnDefinition = "nvarchar(50)")
    private String customsValue;

    @Column(name = "CALCULATED_TOTAL_DUTY", columnDefinition = "nvarchar(50)")
    private String calculatedTotalDuty;

    @Column(name = "PACK_REFERENCE_NUMBER", columnDefinition = "nvarchar(50)")
    private String packReferenceNumber;

    @Column(name = "TAGS", columnDefinition = "nvarchar(50)")
    private String tags;

    @Column(name = "PIECE_STATUS_ID", columnDefinition = "nvarchar(50)")
    private String pieceStatusId;

    @Column(name = "PIECE_STATUS_TIMESTAMP")
    private Date pieceStatusTimestamp;

    @Column(name = "PIECE_STATUS_TEXT", columnDefinition = "nvarchar(50)")
    private String pieceStatusText;

    @Column(name = "PIECE_EVENT_CODE", columnDefinition = "nvarchar(50)")
    private String pieceEventCode;

    @Column(name = "PIECE_EVENT_TEXT", columnDefinition = "nvarchar(50)")
    private String pieceEventText;

    @Column(name = "PIECE_EVENT_TIMESTAMP")
    private Date pieceEventTimestamp;

    @Column(name = "PIECE_VALUE", columnDefinition = "nvarchar(50)")
    private String pieceValue;

    @Column(name = "PIECE_CURRENCY", columnDefinition = "nvarchar(50)")
    private String pieceCurrency;

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



















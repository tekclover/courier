package com.courier.overc360.api.midmile.primary.model.itemdetails;

import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tblitemdetails")
public class ItemDetails implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ITEM_DETAILS_ID")
    private Long itemDetailsId;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "ITEM_DETAILS_ID", referencedColumnName = "ITEM_DETAILS_ID")
    private Set<ImageReference> referenceImageList = new HashSet<>();

    @Column(name = "LANG_ID", columnDefinition = "nvarchar(50)")
    private String languageId;

    @Column(name = "C_ID", columnDefinition = "nvarchar(50)")
    private String companyId;

    @Column(name = "PARTNER_ID", columnDefinition = "nvarchar(50)")
    private String partnerId;

    @Column(name = "PIECE_ID", columnDefinition = "nvarchar(50)")
    private String pieceId;

    @Column(name = "MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String masterAirwayBill;

    @Column(name = "HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String houseAirwayBill;

    @Column(name = "PIECE_ITEM_ID", columnDefinition = "nvarchar(50)")
    private String pieceItemId;

    @Column(name = "IMAGE_REF_ID", columnDefinition = "nvarchar(50)")
    private String imageRefId;

    @Column(name = "QUANTITY", columnDefinition = "nvarchar(50)")
    private String quantity;

    @Column(name = "UNITVALUE", columnDefinition = "nvarchar(50)")
    private String unitValue;

    @Column(name = "CURRENCY", columnDefinition = "nvarchar(50)")
    private String currency;

    @Column(name = "LANG_TEXT", columnDefinition = "nvarchar(100)")
    private String languageDescription;

    @Column(name = "C_NAME", columnDefinition = "nvarchar(100)")
    private String companyName;

    @Column(name = "PARTNER_TYPE", columnDefinition = "nvarchar(50)")
    private String partnerType;

    @Column(name = "PARTNER_NAME", columnDefinition = "nvarchar(50)")
    private String partnerName;

    @Column(name = "PARTNER_MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerMasterAirwayBill;

    @Column(name = "PARTNER_HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerHouseAirwayBill;

    @Column(name = "DESCRIPTION", columnDefinition = "nvarchar(500)")
    private String description;

    @Column(name = "CONSIGNMENT_CURRENCY", columnDefinition = "nvarchar(50)")
    private String consignmentCurrency;

    @Column(name = "CONSIGNMENT_VALUE", columnDefinition = "nvarchar(50)")
    private String consignmentValue;

    @Column(name = "EXCHANGE_RATE", columnDefinition = "nvarchar(50)")
    private String exchangeRate;

    @Column(name = "IATA", columnDefinition = "nvarchar(50)")
    private String iata;

    @Column(name = "CUSTOMS_INSURANCE", columnDefinition = "nvarchar(50)")
    private String customsInsurance;

    @Column(name = "DUTY", columnDefinition = "nvarchar(50)")
    private String duty;

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

    @Column(name = "ITEM_CODE", columnDefinition = "nvarchar(50)")
    private String itemCode;

    @Column(name = "HS_CODE", columnDefinition = "nvarchar(50)")
    private String hsCode;

    @Column(name = "DECLARED_VALUE", columnDefinition = "nvarchar(50)")
    private String declaredValue;

    @Column(name = "COD_AMOUNT", columnDefinition = "nvarchar(50)")
    private String codAmount;

    @Column(name = "LENGTH", columnDefinition = "nvarchar(50)")
    private String length;

    @Column(name = "DIMENSION_UNIT", columnDefinition = "nvarchar(50)")
    private String dimensionUnit;

    @Column(name = "WIDTH", columnDefinition = "nvarchar(50)")
    private String width;

    @Column(name = "HEIGHT", columnDefinition = "nvarchar(50)")
    private String height;

    @Column(name = "WEIGHT", columnDefinition = "nvarchar(50)")
    private String weight;

    @Column(name = "WEIGHT_UNIT", columnDefinition = "nvarchar(50)")
    private String weightUnit;

    @Column(name = "VOLUME", columnDefinition = "nvarchar(50)")
    private String volume;

    @Column(name = "VOLUME_UNIT", columnDefinition = "nvarchar(50)")
    private String volumeUnit;

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

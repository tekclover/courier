package com.courier.overc360.api.midmile.primary.model.bondedmanifest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tblbondedmanifestheader")
public class BondedManifestHeader {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BONDED_MANIFEST_HEADER_ID")
    private Long bondedManifestHeaderId;

    @Column(name = "LANG_ID", columnDefinition = "nvarchar(50)")
    private String languageId;

    @Column(name = "LANG_TEXT", columnDefinition = "nvarchar(100)")
    private String languageDescription;

    @Column(name = "C_ID", columnDefinition = "nvarchar(50)")
    private String companyId;

    @Column(name = "C_NAME", columnDefinition = "nvarchar(100)")
    private String companyName;

    @Column(name = "PARTNER_ID", columnDefinition = "nvarchar(50)")
    private String partnerId;

    @Column(name = "PARTNER_TYP", columnDefinition = "nvarchar(50)")
    private String partnerType;

    @Column(name = "PARTNER_NAME", columnDefinition = "nvarchar(100)")
    private String partnerName;

    @Column(name = "STATUS_ID", columnDefinition = "nvarchar(50)")
    private String statusId;

    @Column(name = "MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String masterAirwayBill;

    @Column(name = "HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String houseAirwayBill;

    @Column(name = "NO_OF_PACKAGES_MAWB", columnDefinition = "nvarchar(50)")
    private String noOfPackagesMawb;

    @Column(name = "PARTNER_MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerMasterAirwayBill;

    @Column(name = "PARTNER_HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerHouseAirwayBill;

    @Column(name = "BONDED_ID", columnDefinition = "nvarchar(50)")
    private String bondedId;

    @Column(name = "DESCRIPTION", columnDefinition = "nvarchar(500)")
    private String description;

    @Column(name = "NET_WEIGHT", columnDefinition = "nvarchar(50)")
    private String netWeight;

    @Column(name = "MANIFESTED_GROSS_WEIGHT", columnDefinition = "nvarchar(50)")
    private String manifestedGrossWeight;

    @Column(name = "GROSS_WEIGHT", columnDefinition = "nvarchar(50)")
    private String grossWeight;

    @Column(name = "TARE_WEIGHT", columnDefinition = "nvarchar(50)")
    private String tareWeight;

    @Column(name = "MANIFESTED_QTY", columnDefinition = "nvarchar(50)")
    private String manifestedQuantity;

    @Column(name = "LANDED_QTY", columnDefinition = "nvarchar(50)")
    private String landedQuantity;

    @Column(name = "TOTAL_QTY", columnDefinition = "nvarchar(50)")
    private String totalQuantity;

    @Column(name = "VOLUME", columnDefinition = "nvarchar(50)")
    private String volume;

    @Column(name = "FINAL_DESTINATION", columnDefinition = "nvarchar(50)")
    private String finalDestination;

    @Column(name = "NOTIFY_PARTY", columnDefinition = "nvarchar(50)")
    private String notifyParty;

    @Column(name = "CONSIGNEE_NAME", columnDefinition = "nvarchar(50)")
    private String consigneeName;

    @Column(name = "PRODUCT_ID", columnDefinition = "nvarchar(50)")
    private String productId;

    @Column(name = "PRODUCT_NAME", columnDefinition = "nvarchar(50)")
    private String productName;

    @Column(name = "SUB_PRODUCT_ID", columnDefinition = "nvarchar(50)")
    private String subProductId;

    @Column(name = "SUB_PRODUCT_NAME", columnDefinition = "nvarchar(50)")
    private String subProductName;

    @Column(name = "SERVICE_TYPE_ID", columnDefinition = "nvarchar(50)")
    private String serviceTypeId;

    @Column(name = "SERVICE_TYPE_TEXT", columnDefinition = "nvarchar(50)")
    private String serviceTypeName;

    @Column(name = "SHIPPER_ID", columnDefinition = "nvarchar(50)")
    private String shipperId;

    @Column(name = "SHIPPER_NAME", columnDefinition = "nvarchar(100)")
    private String shipperName;

    @Column(name = "REMARKS", columnDefinition = "nvarchar(100)")
    private String remarks;

    @Column(name = "IS_CONSOLIDATED_SHIPMENT", columnDefinition = "nvarchar(50)")
    private String isConsolidatedShipment;

    @Column(name = "IS_SPLIT_BILL_OF_LADING", columnDefinition = "nvarchar(50)")
    private String isSplitBillOfLading;

    @Column(name = "IS_PENDING_SHIPMENT", columnDefinition = "nvarchar(50)")
    private String isPendingShipment;

    @Column(name = "BWH_INVESTOR", columnDefinition = "nvarchar(50)")
    private String bwhInvestor;

    @Column(name = "KIND", columnDefinition = "nvarchar(50)")
    private String kind;

    @Column(name = "GOODS_TYP", columnDefinition = "nvarchar(50)")
    private String goodsType;

    @Column(name = "FCL_LCL", columnDefinition = "nvarchar(500)")
    private String fclLcl;

    @Column(name = "CONTAINER_NO", columnDefinition = "nvarchar(50)")
    private String containerNo;

    @Column(name = "CONTAINER_TYP", columnDefinition = "nvarchar(50)")
    private String containerType;

    @Column(name = "CONTAINER_SIZE", columnDefinition = "nvarchar(50)")
    private String containerSize;

    @Column(name = "MARK_ID", columnDefinition = "nvarchar(50)")
    private String markId;

    @Column(name = "MARK_TYP", columnDefinition = "nvarchar(50)")
    private String markType;

    @Column(name = "SEAL_NO", columnDefinition = "nvarchar(50)")
    private String sealNo;

    @Column(name = "VEHICLE_MODEL", columnDefinition = "nvarchar(500)")
    private String vehicleModel;

    @Column(name = "VEHICLE_TYP", columnDefinition = "nvarchar(50)")
    private String vehicleType;

    @Column(name = "CHASIS_NO", columnDefinition = "nvarchar(50)")
    private String chasisNo;

    @Column(name = "ENGINE_NO", columnDefinition = "nvarchar(50)")
    private String engineNo;

    @Column(name = "YR_OF_MANUFACTURE", columnDefinition = "nvarchar(50)")
    private String yearOfManufacture;

    @Column(name = "VEHICLE_BODY_COLOR", columnDefinition = "nvarchar(50)")
    private String vehicleBodyColor;

    @Column(name = "VEHICLE_BRAND", columnDefinition = "nvarchar(50)")
    private String vehicleBrand;

    @Column(name = "VEHICLE_NATIONALITY", columnDefinition = "nvarchar(50)")
    private String vehicleNationality;

    @Column(name = "LOAD", columnDefinition = "nvarchar(50)")
    private String load;

    @Column(name = "PASSENGER", columnDefinition = "nvarchar(50)")
    private String passenger;

    @Column(name = "ENGINE_POWER", columnDefinition = "nvarchar(50)")
    private String enginePower;

    @Column(name = "NO_OF_CYLINDERS", columnDefinition = "nvarchar(50)")
    private String numberOfCylinders;

    @Column(name = "COUNTRY_OF_ORIGIN", columnDefinition = "nvarchar(50)")
    private String countryOfOrigin;

    @Column(name = "IS_DELETED")
    private Long deletionIndicator = 0L;

    @Column(name = "CTD_BY", columnDefinition = "nvarchar(50)")
    private String createdBy;

    @Column(name = "CTD_ON")
    private Date createdOn = new Date();

    @Column(name = "UTD_BY", columnDefinition = "nvarchar(50)")
    private String updatedBy;

    @Column(name = "UTD_ON")
    private Date updatedOn = new Date();


    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "BONDED_MANIFEST_HEADER_ID")
    private List<BondedManifestLine> bondedManifestLines;

}

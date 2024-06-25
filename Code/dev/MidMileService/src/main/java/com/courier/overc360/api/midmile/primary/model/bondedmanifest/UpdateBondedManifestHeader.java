package com.courier.overc360.api.midmile.primary.model.bondedmanifest;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class UpdateBondedManifestHeader {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    @NotBlank(message = "Master Airway Bill is mandatory")
    private String masterAirwayBill;

    @NotBlank(message = "House Airway Bill is mandatory")
    private String houseAirwayBill;

    @NotBlank(message = "BondedId is mandatory")
    private String bondedId;

    private String partnerType;

    private String partnerName;

    private String partnerMasterAirwayBill;

    private String partnerHouseAirwayBill;

    private String noOfPackagesMawb;

    private String description;

    private String netWeight;

    private String manifestedGrossWeight;

    private String grossWeight;

    private String tareWeight;

    private String manifestedQuantity;

    private String landedQuantity;

    private String totalQuantity;

    private String volume;

    private String finalDestination;

    private String notifyParty;

    private String consigneeName;

    private String productId;

    private String productName;

    private String subProductId;

    private String subproductName;

    private String serviceTypeId;

    private String serviceTypeName;

    private String shipperId;

    private String shipperName;

    private String remarks;

    private String isConsolidatedShipment;

    private String isSplitBillOfLading;

    private String isPendingShipment;

    private String bwhInvestor;

    private String kind;

    private String goodsType;

    private String fclLcl;

    private String containerNo;

    private String containerType;

    private String containerSize;

    private String markId;

    private String markType;

    private String sealNo;

    private String vehicleModel;

    private String vehicleType;

    private String chasisNo;

    private String engineNo;

    private String yearOfManufacture;

    private String vehicleBodyColor;

    private String vehicleBrand;

    private String vehicleNationality;

    private String load;

    private String passenger;

    private String enginePower;

    private String numberOfCylinders;

    private String countryOfOrigin;

    private Long deletionIndicator;


    private List<UpdateBondedManifestLine> updateBondedManifestLines;

}

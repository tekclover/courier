package com.courier.overc360.api.midmile.primary.model.ccr;

import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
public class UpdateCcr {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    @NotBlank(message = "House Airway Bill is mandatory")
    private String houseAirwayBill;

    @NotBlank(message = "Master Airway Bill is mandatory")
    private String masterAirwayBill;

    @NotBlank(message = "Customs Ccr No is mandatory")
    private String customsCcrNo;

    @NotBlank(message = "CcrId is mandatory")
    private String ccrId;

    @NotBlank(message = "ConsoleId is mandatory")
    private String consoleId;

    private String partnerType;

    private String paymentType;

    private String eventCode;

    private String eventText;

    private Date eventTimestamp;

    private Date statusTimestamp;

    private String partnerName;

    private String partnerHouseAirwayBill;

    private String partnerMasterAirwayBill;

    private String noOfPackageMawb;

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

    private String shipperId;

    private String shipperName;

    private String remarks;

    private String isConsolidatedShipment;

    private String isSplitBillOfLading;

    private String isPendingShipment;

    private String goodsType;

    private String countryOfOrigin;

    private String manufacturer;

    private String packageType;

    private String noOfPieceHawb;

    private String airportOriginCode;

    private String consignmentCurrency;

    private String consignmentValue;

    private String actualCurrency;

    private String totalDuty;

    private String specialApprovalValue;

    private String customsKd;

    private String iataKd;

    private String productId;

    private String productName;

    private String subProductId;

    private String subProductName;

    private String serviceTypeId;

    private String serviceTypeName;

    private String consigneeCivilId;

    private String incoTerms;

    private String invoiceNumber;

    private String invoiceDate;

    private String invoiceType;

    private String invoiceSupplierName;

    private String hsCode;

    private String goodsDescription;

    private String quantity;

    private String freightCurrency;

    private String freightCharges;

    private String declaredValue;

    private String currency;

    private String isExempted;

    private String exemptionFor;

    private String exemptionBeneficiary;

    private String exemptionReference;

    private String flightNo;

    private String flightArrivalTime;

    private Long deletionIndicator;

    private String referenceField1;

    private String referenceField2;

    private String referenceField3;

    private String referenceField4;

    private String referenceField5;

    private String referenceField6;

    private String referenceField7;

    private String referenceField8;

    private String referenceField9;

    private String referenceField10;

    private String referenceField11;

    private String referenceField12;

    private String referenceField13;

    private String referenceField14;

    private String referenceField15;

    private String referenceField16;

    private String referenceField17;

    private String referenceField18;

    private String referenceField19;

    private String referenceField20;


}

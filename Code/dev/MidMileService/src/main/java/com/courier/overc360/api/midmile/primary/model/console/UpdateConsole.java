package com.courier.overc360.api.midmile.primary.model.console;

import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
public class UpdateConsole {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    @NotBlank(message = "PartnerMasterAirwayBill is mandatory")
    private String partnerMasterAirwayBill;

    @NotBlank(message = "PartnerHouseAirwayBill is mandatory")
    private String partnerHouseAirwayBill;

    @NotBlank(message = "ConsoleId is mandatory")
    private String consoleId;

    private String partnerType;

    private String consignmentCurrency;

    private String consoleName;

    private String consoleGroupName;

    private String consignmentValue;

    private String exchangeRate;

    private String iata;

    private String customsInsurance;

    private String duty;

    private String consignmentValueLocal;

    private String addIata;

    private String addInsurance;

    private String customsValue;

    private String calculatedTotalDuty;

    private String expectedDuty;

    private String customsCurrency;

    private String partnerName;

    private String description;

    private String dutyPercentage;

    private String iataCharge;

    private String noOfPieces;

    private String dduCharge;

    private String specialApprovalCharge;

    private String netWeight;

    private String primaryDo;

    private String secondaryDo;

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

    private String paymentType;

//    private String eventCode;
//
//    private String eventText;
//
//    private Date eventTimestamp;
//
//    private Date statusTimestamp;

    private String isConsolidatedShipment;

    private String isSplitBillOfLading;

    private String isPendingShipment;

    private String goodsType;

    private String countryOfOrigin;

    private String noOfPieceHawb;

    private String airportOriginCode;

    private String customsKd;

    private String noOfPackageMawb;

    private String companyName;

    private String pieceId;

//    private String pieceItemId;

    private String languageDescription;

//    private String statusId;
//
//    private String statusText;

    private String bondedId;

    private Long shipmentBagId;

    private String actualCurrency;

    private String actualValue;

    private String specialApprovalValue;

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

    private String consignmentLocalId;

    private String isExempted;

    private String exemptionFor;

    private String hubCode;

    private String exemptionBeneficiary;

    private String exemptionReference;

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

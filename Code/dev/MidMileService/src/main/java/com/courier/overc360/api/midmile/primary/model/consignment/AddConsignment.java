package com.courier.overc360.api.midmile.primary.model.consignment;


import com.courier.overc360.api.midmile.primary.model.piecedetails.AddPieceDetails;
import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class AddConsignment {

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    private String languageId;

//    @NotBlank(message = "PartnerType is mandatory")
    private String partnerType;

//    @NotBlank(message = "PartnerName is mandatory")
    private String partnerName;

    private String masterAirwayBill;

    private String houseAirwayBill;

    private String statusId;

    private String statusDescription;

    private String partnerMasterAirwayBill;

    private String partnerHouseAirwayBill;

    private String productId;

//    private String productName;

    private String paymentType;

    private String eventCode;

    private String eventText;

    private Date eventTimestamp;

    private Date statusTimestamp;

    private String subProductId;

    private String airportDestinationCode;

//    private String subProductName;

    private String serviceTypeId;

    private String serviceTypeText;

//    @NotBlank(message = "ShipperId is mandatory")
    private String shipperId;

    private String shipperName;

    private String noOfPieceHawb;

    private String noOfPackageMawb;

    private String noOfPackageHawb;

    private String lineNo;

    private String flightNo;

    private String flightName;

    private Date flightArrivalTime;

    private String consigneeName;

    private String consigneeCivilId;

    private String invoiceSupplierName;

    private String freightCurrency;

    private String freightCharges;

    private String countryOfSupply;

    private String remark;

    private String primaryDo;

    private String secondaryDo;

    private Long consoleIndicator;

    private Long manifestIndicator;

//    @NotBlank(message = "InvoiceAmount is mandatory")
    private String invoiceAmount;

//    @NotBlank(message = "Invoice Number is mandatory")
    private String invoiceNumber;

//    @NotBlank(message = "Invoice Date is mandatory")
    private String invoiceDate;

    private String invoiceType;

//    @NotBlank(message = "InvoiceUrl is mandatory")
    private String invoiceUrl;

//    @NotBlank(message = "HsCode is mandatory")
    private String hsCode;

    private String exchangeRate;

    private String customsCurrency;

    private String dutyPercentage;

    private String iataCharge;

    private String dduCharge;

    private String specialApprovalCharge;

//    @NotBlank(message = "Currency is mandatory")
    private String currency;

//    @NotBlank(message = "IncoTerms is mandatory")
    private String incoTerms;

    private String goodsDescription;

    private String countryOfOrigin;

    private String manufacturer;

    private String noOfPackages;

    private String itemTotalPrice;

    private String packageType;

    private String quantity;

//    @NotBlank(message = "NetWeight is mandatory")
    private String netWeight;

//    @NotBlank(message = "GrossWeight is mandatory")
    private String grossWeight;

    private String notifyParty;

    private String isExempted;

    private String exemptionFor;

    private String exemptionBeneficiary;

    private String exemptionReference;

    private String airportOriginCode;

    private Date estimatedDepartureTime;

//    @NotBlank(message = "ReferenceNumber is mandatory")
    private String referenceNumber;

//    @NotBlank(message = "CustomerCode is mandatory")
    private String customerCode;

//    @NotBlank(message = "Customer ReferenceNumber is mandatory")
    private String customerReferenceNumber;

//    @NotBlank(message = "HusCode is mandatory")
    private String hubCode;

//    @NotBlank(message = "ConsignmentType is mandatory")
    private String consignmentType;

    private String actionType;

//    @NotBlank(message = "MovementType is mandatory")
    private String movementType;

//    @NotBlank(message = "ForwardReference Number is mandatory")
    private String forwardReferenceNumber;

    private String workerCode;

    private String loadType;

    private String description;

    private String notes;

//    @NotBlank(message = "Cod Amount is mandatory")
    private String codAmount;

//    @NotBlank(message = "CodeFavor Of is mandatory")
    private String codFavorOf;

//    @NotBlank(message = "Cod CollectionMode is mandatory")
    private String codCollectionMode;

//    @NotBlank(message = "DeclaredValue is mandatory")
    private String declaredValue;

    private String consignmentCurrency;

    private String consignmentValue;

    private String actualCurrency;

    private String totalDuty;

    private String specialApprovalValue;

//    @NotBlank(message = "DeclaredValueWithout Tax is mandatory")
    private String declaredValueWithoutTax;

//    @NotBlank(message = "Length is mandatory")
    private String length;

//    @NotBlank(message = "DimensionUnit is mandatory")
    private String dimensionUnit;

//    @NotBlank(message = "Width is mandatory")
    private String width;

//    @NotBlank(message = "Height is mandatory")
    private String height;

//    @NotBlank(message = "Weight is mandatory")
    private String weight;

//    @NotBlank(message = "WeightUnit is mandatory")
    private String weightUnit;

//    @NotBlank(message = "Volume is mandatory")
    private String volume;

//    @NotBlank(message = "Volume Unit is mandatory")
    private String volumeUnit;

//    @NotBlank(message = "UpStream CreationTime is mandatory")
    private String upstreamCreationTime;

//    @NotBlank(message = "UpStream Creation is mandatory")
    private String upstreamCreationSource;

//    @NotBlank(message = "Allocation Time is mandatory")
    private String allocationTime;

//    @NotBlank(message = "Auto Allocate is mandatory")
    private String autoAllocate;

//    @NotBlank(message = "Priority is mandatory")
    private String priority;

//    @NotBlank(message = "Courier Partner is mandatory")
    private String courierPartner;

//    @NotBlank(message = "Courier Account is mandatory")
    private String courierAccount;

//    @NotBlank(message = "Courier Partner Reference Number is mandatory")
    private String courierPartnerReferenceNumber;

    private String pickupOtp;

    private String deliveryOtp;

    private String rtoOtp;

    private String tags;

//    @NotBlank(message = "Service Time is mandatory")
    private String serviceTime;

//    @NotBlank(message = "PickupService Time is mandatory")
    private String pickupServiceTime;

//    @NotBlank(message = "Delivery Service Time is mandatory")
    private String deliveryServiceTime;

//    @NotBlank(message = "PickupTimeSlot Start is mandatory")
    private String pickupTimeSlotStart;

//    @NotBlank(message = "PickupTimeSlot End is mandatory ")
    private String pickupTimeSlotEnd;

//    @NotBlank(message = "DeliveryTimeSlot Start is mandatory")
    private String deliveryTimeSlotStart;

//    @NotBlank(message = "DeliveryTimeSlot End is mandatory")
    private String deliveryTimeSlotEnd;

//    @NotBlank(message = "Scheduled At is mandatory")
    private String scheduledAt;

    private String workerTipAmount;

    private String workerEligiblePayout;

    private String constraintTags;

    private String countryOfDestination;

    private String totalWeightHawb;

    private String noOfCrt;

    private String totalShipmentWeight;

//    @NotBlank(message = "EWayBill is mandatory")
    private String ewayBill;

//    @NotBlank(message = "Product Code is mandatory")
    private String productCode;

//    @NotBlank(message = "Customs Value is mandatory")
    private String customsValue;

//    @NotBlank(message = "Amount is mandatory")
    private String amount;

//    @NotBlank(message = "IsCustoms Declarable is mandatory")
    private String isCustomsDeclarable;

//    @NotBlank(message = "PackDetails is mandatory")
    private String packDetails;

    private String storageLocation;

    private List<ReferenceImageList> referenceImageList;
    private String imageReferenceId;

    private String isExchange;

    private String reverseReason;

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
    private String referenceField21;
    private String referenceField22;
    private String referenceField23;
    private String referenceField24;
    private String referenceField25;
    private String referenceField26;
    private String referenceField27;
    private String referenceField28;
    private String referenceField29;
    private String referenceField30;
    private String referenceField31;
    private String referenceField32;
    private String referenceField33;
    private String referenceField34;
    private String referenceField35;
    private String referenceField36;
    private String referenceField37;
    private String referenceField38;
    private String referenceField39;
    private String referenceField40;
    private String referenceField41;
    private String referenceField42;
    private String referenceField43;
    private String referenceField44;
    private String referenceField45;
    private String referenceField46;
    private String referenceField47;
    private String referenceField48;
    private String referenceField49;
    private String referenceField50;

    private Long preAlertValidationIndicator;
    private AddDestinationDetails destinationDetails = new AddDestinationDetails();

    private AddOriginDetails originDetails = new AddOriginDetails();

    private AddReturnDetails returnDetails = new AddReturnDetails();

    private List<AddPieceDetails> pieceDetails = new ArrayList<>();
}

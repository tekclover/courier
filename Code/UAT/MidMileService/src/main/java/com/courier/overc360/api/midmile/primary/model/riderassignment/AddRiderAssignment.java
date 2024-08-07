package com.courier.overc360.api.midmile.primary.model.riderassignment;

import lombok.Data;

import java.util.Date;

@Data
public class AddRiderAssignment {

    private Long riderAssignmentId;

    private String consignmentBagId;

    private String languageId;

    private String languageDescription;

    private String companyId;

    private String companyName;

    private String statusId;

    private String statusDescription;

    private String partnerHouseAirwayBill;

    private String partnerMasterAirwayBill;

    private String partnerType;

    private String partnerId;

    private String partnerName;

    private String hawbType;

    private String hawbId;

    private String hawbDescription;

    private Date hawbTimeStamp;

    private String pieceType;

    private String pieceTypeId;

    private String pieceTypeDescription;

    private Date pieceTimeStamp = new Date();

    private String paymentType;

    private String countryOfDestination;

    private String noOfCrt;

    private String primaryDo;

    private String secondaryDo;

    private String insurance;

    private String noOfPackageMawb;

    private String totalConsignmentValueMawb;

    private String totalShipmentWeight;

    private String productId;

    private String productName;

    private String subProductId;

    private String subProductName;

    private String serviceTypeId;

    private String serviceTypeText;

    private String houseAirwayBill;

    private String totalWeightHawb;

    private String shipperId;

    private String shipperName;

    private String consigneeName;

    private String consigneeCivilId;

    private String countryOfOrigin;

    private String incoTerms;

    private String remarks;

    private String itemTotalPrice;

    private String hsCode;

    private String invoiceNumber;

    private String invoiceDate;

    private String invoiceSupplierName;

    private String goodsDescription;

    private String quantity;

    private String netWeight;

    private String grossWeight;

    private String notifyParty;

    private String customsCurrency;

    private String freightCurrency;

    private String freightCharges;

    private String countryOfSupply;

    private String declaredValue;

    private String consignmentCurrency;

    private String consignmentValue;

    private String actualCurrency;

    private String actualValue;

    private String totalDuty;

    private String specialApprovalValue;

    private String currency;

    private String airportOriginCode;

    private String flightNo;

    private Date estimatedDepartureTime = new Date();

    private Date flightArrivalTime = new Date();

    private String noOfPackages;

    private String flightName;

    private String packageType;

    private String customerCode;

    private String customerReferenceNumber;

    private String hubCode;

    private String hubName;

    private String manufacturer;

    private String consignmentType;

    private String actionType;

    private String movementType;

    private String forwardReferenceNumber;

    private String workerCode;

    private String loadType;

    private String description;

    private String notes;

    private String codAmount;

    private String codFavorOf;

    private String codCollectionMode;

    private String declaredValueWithoutTax;

    private String length;

    private String dimentionUnit;

    private String width;

    private String height;

    private String weight;

    private String weightUnit;

    private String volume;

    private String volumeUnit;

    private String upstreamCreationTime;

    private String upstreamCreationSource;

    private String allocationTime;

    private String autoAllocate;

    private String priority;

    private String courierPartner;

    private String courierAccount;

    private String courierPartnerReferenceNumber;

    private String pickupType;

    private String pickupOtp;

    private String deliveryOtp;

    private String rtoOtp;

    private String tags;

    private String serviceTime;

    private String pickupServiceTime;

    private String deliveryServiceTime;

    private Date customerPickupDate;

    private String pickupTimeSlotStart;

    private String pickupTimeSlotEnd;

    private String pickupId;

    private String riderId;

    private String riderName;

    private String assignedHubCode;

    private String vehicleRegNumber;

    private String routeId;

    private String riderType;

    private String deliveryAttemptCount;

    private String deliveryTimeSlotStart;

    private String deliveryTimeSlotEnd;

    private String scheduledAt;

    private String workerTipAmount;

    private String workerEligiblePayout;

    private String constraintTag;

    private String invoiceAmount;

    private String invoiceUrl;

    private String productCode;

    private String customsValue;

    private String isCustomsDeclarable;

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

    private Long deletionIndicator = 0L;

    private String createdBy;

    private Date createdOn = new Date();

    private String updatedBy;

    private Date updatedOn = new Date();

    private RiderAssignmentDestinationDetails destinationDetails;

    private RiderAssignmentOriginDetails originDetails;

    private RiderAssignmentPickupDetails pickupDetails;

}

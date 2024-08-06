package com.courier.overc360.api.midmile.primary.model.consignment;


import com.courier.overc360.api.midmile.primary.model.imagereference.AddImageReference;
import com.courier.overc360.api.midmile.primary.model.imagereference.ImageReference;
import com.courier.overc360.api.midmile.primary.model.piecedetails.AddPieceDetails;
import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
public class AddConsignment {

    private Long consignmentId;
    private String languageId;
    private String languageDescription;
    private String companyId;
    private String companyName;
    private String statusId;
    private String statusDescription;
    private String partnerId;
    private String partnerType;
    private String partnerName;
    private String masterAirwayBill;
    private String houseAirwayBill;
    private String noOfPieceHawb;
    private String partnerMasterAirwayBill;
    private String partnerHouseAirwayBill;
    private String productId;
    private String productName;
    private String subProductId;
    private String subProductName;
    private String serviceTypeId;
    private String serviceTypeText;
    private String shipperId;
    private String shipperName;
    private String noOfPackageMawb;
    private String noOfPackageHawb;
    private String flightNo;
    private String lineNo;
    private String flightName;
    private Date flightArrivalTime;
    private String countryOfSupply;
    private String remark;
    private String currency;
    private String invoiceAmount;
    private String declaredValue;
    private String consignmentCurrency;
    private String consignmentValue;
    private String actualCurrency;
    private String totalDuty;
    private Long consignmentBagId;
    private String consignmentValueLocal;
    private String addIata;
    private String addInsurance;
    private String customsValue;
    private String calculatedTotalDuty;
    private String countryOfDestination;
    private Date estimatedDepartureTime;
    private String airportOriginCode;
    private String airportDestinationCode;
    private String invoiceNumber;
    private String invoiceDate;
    private String invoiceType;
    private String invoiceUrl;
    private String volume;
    private String incoTerms;
    private String hsCode;
    private String goodsDescription;
    private String countryOfOrigin;
    private String manufacturer;
    private String noOfPackages;
    private String quantity;
    private String netWeight;
    private String grossWeight;
    private String isExempted;
    private String customerCode;
    private String customerReferenceNumber;
    private String hubCode;
    private String hubName;
    private String pieceId;
    private String consignmentType;
    private String actionType;
    private String movementType;
    private String forwardReferenceNumber;
    private String paymentType;
    private String eventCode;
    private String eventText;
    private Date eventTimestamp;
    private Date statusTimestamp;
    private String primaryDo;
    private String exchangeRate;
    private String customsCurrency;
    private String dutyPercentage;
    private String iataCharge;
    private String dduCharge;
    private String specialApprovalCharge;
    private String secondaryDo;
    private Long consoleIndicator;
    private Long manifestIndicator;
    private String modeOfTransport;
    private String insurance;
    private String loadTypeId;
    private String loadType;
    private String description;
    private String notes;
    private String codAmount;
    private String codFavorOf;
    private String codCollectionMode;
    private String declaredValueWithoutTax;
    private String length;
    private String dimensionUnit;
    private String width;
    private String height;
    private String weight;
    private String weightUnit;
    private String volumeUnit;
    private String priority;
    private String courierPartner;
    private String courierAccount;
    private String courierPartnerReferenceNumber;
    private String pickupOtp;
    private String deliveryOtp;
    private String rtoOtp;
    private String tags;
    private String serviceTime;
    private String pickupServiceTime;
    private String deliveryServiceTime;
    private String pickupTimeSlotStart;
    private String pickupTimeSlotEnd;
    private String scheduledAt;
    private String ewayBill;
    private String productCode;
    private String amount;
    private String isCustomsDeclarable;
    private String exemptionFor;
    private String exemptionBeneficiary;
    private String exemptionReference;
    private String packDetails;
    private String storageLocation;
    private String isExchange;
    private String reverseReason;
    private String hawbType;
    private String hawbTypeId;
    private String hawbTypeDescription;
    private Date hawbTimeStamp = new Date();
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
    private Long preAlertValidationIndicator;
    private DestinationDetails destinationDetails;
    private OriginDetails originDetails;
    private ReturnDetails returnDetails;
    private List<AddPieceDetails> pieceDetails;
    private Set<AddImageReference> referenceImageList ;

}

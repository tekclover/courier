package com.courier.overc360.api.midmile.replica.model.consignment;

import com.courier.overc360.api.midmile.replica.model.imagereference.ReplicaImageReference;
import com.courier.overc360.api.midmile.replica.model.piecedetails.ReplicaPieceDetails;
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
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tblconsignment_entity")
public class ReplicaConsignmentEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CONSIGNMENT_ID")
    private Long consignmentId;

    @Column(name = "LANG_ID", columnDefinition = "nvarchar(50)")
    private String languageId;

    @Column(name = "LANG_TEXT", columnDefinition = "nvarchar(50)")
    private String languageDescription;

    @Column(name = "C_ID", columnDefinition = "nvarchar(50)")
    private String companyId;

    @Column(name = "C_NAME", columnDefinition = "nvarchar(50)")
    private String companyName;

    @Column(name = "STATUS_ID", columnDefinition = "nvarchar(50)")
    private String statusId;

    @Column(name = "STATUS_TEXT", columnDefinition = "nvarchar(100)")
    private String statusDescription;

    @Column(name = "PARTNER_ID", columnDefinition = "nvarchar(50)")
    private String partnerId;

    @Column(name = "PARTNER_TYPE", columnDefinition = "nvarchar(50)")
    private String partnerType;

    @Column(name = "PARTNER_NAME", columnDefinition = "nvarchar(50)")
    private String partnerName;

    @Column(name = "MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String masterAirwayBill;

    @Column(name = "HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String houseAirwayBill;

    @Column(name = "NO_OF_PIECE_HAWB", columnDefinition = "nvarchar(50)")
    private String noOfPieceHawb;

    @Column(name = "PARTNER_MASTER_AB", columnDefinition = "nvarchar(50)")
    private String partnerMasterAirwayBill;

    @Column(name = "PARTNER_HOUSE_AB", columnDefinition = "nvarchar(50)")
    private String partnerHouseAirwayBill;

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
    private String serviceTypeText;

    @Column(name = "SHIPPER_ID", columnDefinition = "nvarchar(50)")
    private String shipperId;

    @Column(name = "SHIPPER_NAME", columnDefinition = "nvarchar(50)")
    private String shipperName;

    @Column(name = "NO_OF_PACKAGE_MAWB", columnDefinition = "nvarchar(50)")
    private String noOfPackageMawb;

    @Column(name = "NO_OF_PACKAGE_HAWB", columnDefinition = "nvarchar(50)")
    private String noOfPackageHawb;

    @Column(name = "FLIGHT_NO", columnDefinition = "nvarchar(50)")
    private String flightNo;

    @Column(name = "LINE_NO", columnDefinition = "nvarchar(50)")
    private String lineNo;

    @Column(name = "FLIGHT_NAME", columnDefinition = "nvarchar(50)")
    private String flightName;

    @Column(name = "FLIGHT_ARRIVAL_TIME")
    private Date flightArrivalTime;

    @Column(name = "COUNTRY_OF_SUPPLY", columnDefinition = "nvarchar(50)")
    private String countryOfSupply;

    @Column(name = "REMARK", columnDefinition = "nvarchar(2000)")
    private String remark;

    @Column(name = "CURRENCY", columnDefinition = "nvarchar(50)")
    private String currency;

    @Column(name = "INVOICE_AMOUNT", columnDefinition = "nvarchar(50)")
    private String invoiceAmount;

    @Column(name = "DECLARED_VALUE", columnDefinition = "nvarchar(50)")
    private String declaredValue;

    @Column(name = "CONSIGNMENT_CURRENCY", columnDefinition = "nvarchar(50)")
    private String consignmentCurrency;

    @Column(name = "CONSIGNMENT_VALUE", columnDefinition = "nvarchar(50)")
    private String consignmentValue;

    @Column(name = "ACTUAL_CURRENCY", columnDefinition = "nvarchar(50)")
    private String actualCurrency;

    @Column(name = "TOTAL_DUTY", columnDefinition = "nvarchar(50)")
    private String totalDuty;

    @Column(name = "CONS_BAG_ID")
    private Long consignmentBagId;

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

    @Column(name = "COUNTRY_OF_DESTINATION", columnDefinition = "nvarchar(50)")
    private String countryOfDestination;

    @Column(name = "CUSTOMS_INSURANCE", columnDefinition = "nvarchar(50)")
    private String customsInsurance;

    @Column(name = "ESTIMATED_DEPARTURE_TIME")
    private Date estimatedDepartureTime;

    @Column(name = "AIRPORT_ORIGIN_CODE", columnDefinition = "nvarchar(50)")
    private String airportOriginCode;

    @Column(name = "AIRPORT_DESTINATION_CODE", columnDefinition = "nvarchar(50)")
    private String airportDestinationCode;

    @Column(name = "INVOICE_NUMBER", columnDefinition = "nvarchar(50)")
    private String invoiceNumber;

    @Column(name = "INVOICE_DATE", columnDefinition = "nvarchar(50)")
    private String invoiceDate;

    @Column(name = "INVOICE_Type", columnDefinition = "nvarchar(50)")
    private String invoiceType;

    @Column(name = "INVOICE_URL", columnDefinition = "nvarchar(500)")
    private String invoiceUrl;

    @Column(name = "VOLUME", columnDefinition = "nvarchar(50)")
    private String volume;

    @Column(name = "INCO_TERMS", columnDefinition = "nvarchar(50)")
    private String incoTerms;

    @Column(name = "HS_CODE", columnDefinition = "nvarchar(50)")
    private String hsCode;

    @Column(name = "GOODS_DESCRIPTION", columnDefinition = "nvarchar(500)")
    private String goodsDescription;

    @Column(name = "COUNTRY_OF_ORIGIN", columnDefinition = "nvarchar(50)")
    private String countryOfOrigin;

    @Column(name = "MANUFACTURER", columnDefinition = "nvarchar(50)")
    private String manufacturer;

    @Column(name = "NO_OF_Packages", columnDefinition = "nvarchar(50)")
    private String noOfPackages;

    @Column(name = "QUANTITY", columnDefinition = "nvarchar(50)")
    private String quantity;

    @Column(name = "NET_WEIGHT", columnDefinition = "nvarchar(50)")
    private String netWeight;

    @Column(name = "GROSS_WEIGHT", columnDefinition = "nvarchar(50)")
    private String grossWeight;

    @Column(name = "IS_EXEMPTED", columnDefinition = "nvarchar(50)")
    private String isExempted;

    @Column(name = "CUSTOMER_CODE", columnDefinition = "nvarchar(50)")
    private String customerCode;

    @Column(name = "CUSTOMER_REFERENCE_NUMBER", columnDefinition = "nvarchar(50)")
    private String customerReferenceNumber;

    @Column(name = "HUB_CODE", columnDefinition = "nvarchar(50)")
    private String hubCode;

    @Column(name = "CONSIGNMENT_TYPE", columnDefinition = "nvarchar(50)")
    private String consignmentType;

    @Column(name = "ACTIONTYPE", columnDefinition = "nvarchar(50)")
    private String actionType;

    @Column(name = "MOVEMENT_TYPE", columnDefinition = "nvarchar(50)")
    private String movementType;

    @Column(name = "FORWARD_REFERENCE_NUMBER", columnDefinition = "nvarchar(50)")
    private String forwardReferenceNumber;

    @Column(name = "PAYMENT_TYPE", columnDefinition = "nvarchar(50)")
    private String paymentType;

    @Column(name = "EVENT_CODE", columnDefinition = "nvarchar(50)")
    private String eventCode;

    @Column(name = "EVENT_TEXT", columnDefinition = "nvarchar(50)")
    private String eventText;

    @Column(name = "EVENT_TIMESTAMP")
    private Date eventTimestamp;

    @Column(name = "STATUS_TIMESTAMP")
    private Date statusTimestamp;

    @Column(name = "PRIMARY_DO", columnDefinition = "nvarchar(50)")
    private String primaryDo;

    @Column(name = "EXCHANGE_RATE", columnDefinition = "nvarchar(50)")
    private String exchangeRate;

    @Column(name = "CUSTOMS_CURRENCY", columnDefinition = "nvarchar(50)")
    private String customsCurrency;

    @Column(name = "DUTY_PERCENTAGE", columnDefinition = "nvarchar(50)")
    private String dutyPercentage;

    @Column(name = "IATA_CHARGE", columnDefinition = "nvarchar(50)")
    private String iataCharge;

    @Column(name = "DDU_CHARGE", columnDefinition = "nvarchar(50)")
    private String dduCharge;

    @Column(name = "SPECIAL_APPROVAL_CHARGE", columnDefinition = "nvarchar(50)")
    private String specialApprovalCharge;

    @Column(name = "SECONDARY_DO", columnDefinition = "nvarchar(50)")
    private String secondaryDo;

    @Column(name = "CONSOLE_INDICATOR")
    private Long consoleIndicator;

    @Column(name = "MANIFEST_INDICATOR")
    private Long manifestIndicator;

    @Column(name = "MODE_OF_TRANSPORT", columnDefinition = "nvarchar(50)")
    private String modeOfTransport;

    @Column(name = "INSURANCE", columnDefinition = "nvarchar(50)")
    private String insurance;

    @Column(name = "LOAD_TYPE_ID", columnDefinition = "nvarchar(50)")
    private String loadTypeId;

    @Column(name = "LOAD_TYPE", columnDefinition = "nvarchar(50)")
    private String loadType;

    @Column(name = "DESCRIPTION", columnDefinition = "nvarchar(500)")
    private String description;

    @Column(name = "NOTES", columnDefinition = "nvarchar(500)")
    private String notes;

    @Column(name = "COD_AMOUNT", columnDefinition = "nvarchar(50)")
    private String codAmount;

    @Column(name = "COD_FAVOR_OF", columnDefinition = "nvarchar(50)")
    private String codFavorOf;

    @Column(name = "COD_COLLECTION_MODE", columnDefinition = "nvarchar(50)")
    private String codCollectionMode;

    @Column(name = "DECLARED_VALUE_WITHOUT_TAX", columnDefinition = "nvarchar(50)")
    private String declaredValueWithoutTax;

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

    @Column(name = "VOLUME_UNIT", columnDefinition = "nvarchar(50)")
    private String volumeUnit;

    @Column(name = "PRIORITY", columnDefinition = "nvarchar(50)")
    private String priority;

    @Column(name = "COURIER_PARTNER", columnDefinition = "nvarchar(50)")
    private String courierPartner;

    @Column(name = "COURIER_ACCOUNT", columnDefinition = "nvarchar(50)")
    private String courierAccount;

    @Column(name = "COURIER_PARTNER_REFERENCE_NUMBER", columnDefinition = "nvarchar(50)")
    private String courierPartnerReferenceNumber;

    @Column(name = "PICKUP_OTP", columnDefinition = "nvarchar(50)")
    private String pickupOtp;

    @Column(name = "DELIVERY_OTP", columnDefinition = "nvarchar(50)")
    private String deliveryOtp;

    @Column(name = "RTO_OTP", columnDefinition = "nvarchar(50)")
    private String rtoOtp;

    @Column(name = "TAGS", columnDefinition = "nvarchar(500)")
    private String tags;

    @Column(name = "SERVICE_TIME", columnDefinition = "nvarchar(50)")
    private String serviceTime;

    @Column(name = "PICKUP_SERVICE_TIME", columnDefinition = "nvarchar(50)")
    private String pickupServiceTime;

    @Column(name = "DELIVERY_SERVICE_TIME", columnDefinition = "nvarchar(50)")
    private String deliveryServiceTime;

    @Column(name = "PICKUP_TIME_SLOT_START", columnDefinition = "nvarchar(50)")
    private String pickupTimeSlotStart;

    @Column(name = "PICKUP_TIME_SLOT_END", columnDefinition = "nvarchar(50)")
    private String pickupTimeSlotEnd;

    @Column(name = "SCHEDULED_AT", columnDefinition = "nvarchar(50)")
    private String scheduledAt;

    @Column(name = "EWAY_BILL", columnDefinition = "nvarchar(50)")
    private String ewayBill;

    @Column(name = "PRODUCT_CODE", columnDefinition = "nvarchar(50)")
    private String productCode;

    @Column(name = "AMOUNT", columnDefinition = "nvarchar(50)")
    private String amount;

    @Column(name = "IS_CUSTOMS_DECLARABLE", columnDefinition = "nvarchar(50)")
    private String isCustomsDeclarable;

    @Column(name = "EXEMPTION_FOR", columnDefinition = "nvarchar(50)")
    private String exemptionFor;

    @Column(name = "EXEMPTION_BENEFICIARY", columnDefinition = "nvarchar(50)")
    private String exemptionBeneficiary;

    @Column(name = "EXEMPTION_REFERENCE", columnDefinition = "nvarchar(50)")
    private String exemptionReference;

    @Column(name = "PACK_DETAILS", columnDefinition = "nvarchar(50)")
    private String packDetails;

    @Column(name = "STORAGE_LOCATION", columnDefinition = "nvarchar(50)")
    private String storageLocation;

    @Column(name = "IS_EXCHANGE", columnDefinition = "nvarchar(50)")
    private String isExchange;

    @Column(name = "REVERSE_REASON")
    private String reverseReason;

    @Column(name = "HAWB_TYP", columnDefinition = "nvarchar(50)")
    private String hawbType;

    @Column(name = "HAWB_TYP_ID", columnDefinition = "nvarchar(50)")
    private String hawbTypeId;

    @Column(name = "HAWB_TYP_TXT", columnDefinition = "nvarchar(100)")
    private String hawbTypeDescription;

    @Column(name = "HAWB_TIMESTAMP")
    private Date hawbTimeStamp = new Date();

    @Column(name = "REF_FIELD_1", columnDefinition = "nvarchar(200)")
    private String referenceField1;

    @Column(name = "REF_FIELD_2", columnDefinition = "nvarchar(200)")
    private String referenceField2;

    @Column(name = "REF_FIELD_3", columnDefinition = "nvarchar(200)")
    private String referenceField3;

    @Column(name = "REF_FIELD_4", columnDefinition = "nvarchar(200)")
    private String referenceField4;

    @Column(name = "REF_FIELD_5", columnDefinition = "nvarchar(200)")
    private String referenceField5;

    @Column(name = "REF_FIELD_6", columnDefinition = "nvarchar(200)")
    private String referenceField6;

    @Column(name = "REF_FIELD_7", columnDefinition = "nvarchar(200)")
    private String referenceField7;

    @Column(name = "REF_FIELD_8", columnDefinition = "nvarchar(200)")
    private String referenceField8;

    @Column(name = "REF_FIELD_9", columnDefinition = "nvarchar(200)")
    private String referenceField9;

    @Column(name = "REF_FIELD_10", columnDefinition = "nvarchar(200)")
    private String referenceField10;

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

    // unconsolidation
    @Column(name = "UNCONSOLIDATED")
    private Long unconsolidatedFlag = 0L;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "CONSIGNMENT_ID", referencedColumnName = "CONSIGNMENT_ID")
    private ReplicaDestinationDetails destinationDetails;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "CONSIGNMENT_ID", referencedColumnName = "CONSIGNMENT_ID")
    private ReplicaOriginDetails originDetails;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "CONSIGNMENT_ID", referencedColumnName = "CONSIGNMENT_ID")
    private ReplicaReturnDetails returnDetails;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "CONSIGNMENT_ID")
    private List<ReplicaPieceDetails> pieceDetails;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "CONSIGNMENT_ID", referencedColumnName = "CONSIGNMENT_ID")
    private Set<ReplicaImageReference> referenceImageList = new HashSet<>();

}

package com.courier.overc360.api.midmile.replica.model.riderassignment;

import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaDestinationDetails;
import com.courier.overc360.api.midmile.replica.model.consignment.ReplicaOriginDetails;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tblriderassignment_entity")
public class ReplicaRiderAssignmentEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RIDER_ASSIGNMENT_ID")
    private Long riderAssignmentId;

    @Column(name = "CONSIGNMENT_BAG_ID")
    private String consignmentBagId;

    @Column(name = "LANG_ID", columnDefinition = "nvarchar(50)")
    private String languageId;

    @Column(name = "LANG_TEXT", columnDefinition = "nvarchar(100)")
    private String languageDescription;

    @Column(name = "C_ID", columnDefinition = "nvarchar(50)")
    private String companyId;

    @Column(name = "C_NAME", columnDefinition = "nvarchar(100)")
    private String companyName;

    @Column(name = "STATUS_ID", columnDefinition = "nvarchar(50)")
    private String statusId;

    @Column(name = "STATUS_TEXT", columnDefinition = "nvarchar(100)")
    private String statusDescription;

    @Column(name = "PARTNER_HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerHouseAirwayBill;

    @Column(name = "PARTNER_MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerMasterAirwayBill;

    @Column(name = "PARTNER_TYPE", columnDefinition = "nvarchar(50)")
    private String partnerType;

    @Column(name = "PARTNER_ID", columnDefinition = "nvarchar(50)")
    private String partnerId;

    @Column(name = "PARTNER_NAME", columnDefinition = "nvarchar(50)")
    private String partnerName;

    @Column(name = "HOUSE_AIRWAY_BILL_TYPE", columnDefinition = "nvarchar(50)")
    private String hawbType;

    @Column(name = "HOUSE_AIRWAY_BILL_ID", columnDefinition = "nvarchar(50)")
    private String hawbId;

    @Column(name = "HOUSE_AIRWAY_BILL_DESCRIPTION", columnDefinition = "nvarchar(50)")
    private String hawbDescription;

    @Column(name = "HOUSE_AIRWAY_BILL_TIMESTAMP", columnDefinition = "nvarchar(50)")
    private Date hawbTimeStamp = new Date();

    @Column(name = "PIECE_TYPE", columnDefinition = "nvarchar(50)")
    private String pieceType;

    @Column(name = "PIECE_TYPE_ID", columnDefinition = "nvarchar(50)")
    private String pieceTypeId;

    @Column(name = "PIECE_TYPE_DESCRIPTION", columnDefinition = "nvarchar(50)")
    private String pieceTypeDescription;

    @Column(name = "PIECE_TIMESTAMP", columnDefinition = "nvarchar(50)")
    private Date pieceTimeStamp = new Date();

    @Column(name = "PAYMENT_TYPE", columnDefinition = "nvarchar(50)")
    private String paymentType;

    @Column(name = "COUNTRY_OF_DESTINATION", columnDefinition = "nvarchar(50)")
    private String countryOfDestination;

    @Column(name = "NO_OF_CRT", columnDefinition = "nvarchar(50)")
    private String noOfCrt;

    @Column(name = "PRIMARY_DO", columnDefinition = "nvarchar(50)")
    private String primaryDo;

    @Column(name = "SECONDARY_DO", columnDefinition = "nvarchar(50)")
    private String secondaryDo;

    @Column(name = "INSURANCE", columnDefinition = "nvarchar(50)")
    private String insurance;

    @Column(name = "NO_OF_PACKAGE_MAWB", columnDefinition = "nvarchar(50)")
    private String noOfPackageMawb;

    @Column(name = "TOTAL_CONSIGNMENT_VALUE_MAWB", columnDefinition = "nvarchar(50)")
    private String totalConsignmentValueMawb;

    @Column(name = "TOTAL_SHIPMENT_WEIGHT", columnDefinition = "nvarchar(50)")
    private String totalShipmentWeight;

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

    @Column(name = "HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String houseAirwayBill;

    @Column(name = "TOTAL_WEIGHT_HAWB", columnDefinition = "nvarchar(50)")
    private String totalWeightHawb;

    @Column(name = "SHIPPER_ID", columnDefinition = "nvarchar(50)")
    private String shipperId;

    @Column(name = "SHIPPER_NAME", columnDefinition = "nvarchar(50)")
    private String shipperName;

    @Column(name = "CONSIGNEE_NAME", columnDefinition = "nvarchar(50)")
    private String consigneeName;

    @Column(name = "CONSIGNEE_CIVIL_ID", columnDefinition = "nvarchar(50)")
    private String consigneeCivilId;

    @Column(name = "COUNTRY_OF_ORIGIN", columnDefinition = "nvarchar(50)")
    private String countryOfOrigin;

    @Column(name = "INCO_TERMS", columnDefinition = "nvarchar(50)")
    private String incoTerms;

    @Column(name = "REMARKS", columnDefinition = "nvarchar(500)")
    private String remarks;

    @Column(name = "ITEM_TOTAL_PRICE", columnDefinition = "nvarchar(500)")
    private String itemTotalPrice;

    @Column(name = "HS_CODE", columnDefinition = "nvarchar(50)")
    private String hsCode;

    @Column(name = "INVOICE_NUMBER", columnDefinition = "nvarchar(50)")
    private String invoiceNumber;

    @Column(name = "INVOICE_DATE", columnDefinition = "nvarchar(50)")
    private String invoiceDate;

    @Column(name = "INVOICE_SUPPLIER_NAME", columnDefinition = "nvarchar(50)")
    private String invoiceSupplierName;

    @Column(name = "GOODS_DESCRIPTION", columnDefinition = "nvarchar(500)")
    private String goodsDescription;

    @Column(name = "QUANTITY", columnDefinition = "nvarchar(50)")
    private String quantity;

    @Column(name = "NET_WEIGHT", columnDefinition = "nvarchar(50)")
    private String netWeight;

    @Column(name = "GROSS_WEIGHT", columnDefinition = "nvarchar(50)")
    private String grossWeight;

    @Column(name = "NOTIFY_PARTY", columnDefinition = "nvarchar(50)")
    private String notifyParty;

    @Column(name = "CUSTOMS_CURRENCY", columnDefinition = "nvarchar(50)")
    private String customsCurrency;

    @Column(name = "FREIGHT_CURRENCY", columnDefinition = "nvarchar(50)")
    private String freightCurrency;

    @Column(name = "FREIGHT_CHARGES", columnDefinition = "nvarchar(50)")
    private String freightCharges;

    @Column(name = "COUNTRY_OF_SUPPLY", columnDefinition = "nvarchar(50)")
    private String countryOfSupply;

    @Column(name = "DECLARED_VALUE", columnDefinition = "nvarchar(50)")
    private String declaredValue;

    @Column(name = "CONSIGNMENT_CURRENCY", columnDefinition = "nvarchar(50)")
    private String consignmentCurrency;

    @Column(name = "CONSIGNMENT_VALUE", columnDefinition = "nvarchar(50)")
    private String consignmentValue;

    @Column(name = "ACTUAL_CURRENCY", columnDefinition = "nvarchar(50)")
    private String actualCurrency;

    @Column(name = "ACTUAL_VALUE", columnDefinition = "nvarchar(50)")
    private String actualValue;

    @Column(name = "TOTAL_DUTY", columnDefinition = "nvarchar(50)")
    private String totalDuty;

    @Column(name = "SPECIAL_APPROVAL_VALUE", columnDefinition = "nvarchar(50)")
    private String specialApprovalValue;

    @Column(name = "CURRENCY", columnDefinition = "nvarchar(50)")
    private String currency;

    @Column(name = "AIRPORT_ORIGIN_CODE", columnDefinition = "nvarchar(50)")
    private String airportOriginCode;

    @Column(name = "FLIGHT_NO", columnDefinition = "nvarchar(50)")
    private String flightNo;

    @Column(name = "ESTIMATED_DEPARTURE_TIME", columnDefinition = "nvarchar(50)")
    private Date estimatedDepartureTime = new Date();

    @Column(name = "FLIGHT_ARRIVAL_TIME", columnDefinition = "nvarchar(50)")
    private Date flightArrivalTime = new Date();

    @Column(name = "NO_OF_PACKAGES", columnDefinition = "nvarchar(50)")
    private String noOfPackages;

    @Column(name = "FLIGHT_NAME", columnDefinition = "nvarchar(50)")
    private String flightName;

    @Column(name = "PACKAGE_TYPE", columnDefinition = "nvarchar(50)")
    private String packageType;

    @Column(name = "CUSTOMER_CODE", columnDefinition = "nvarchar(50)")
    private String customerCode;

    @Column(name = "CUSTOMER_REFERENCE_NUMBER", columnDefinition = "nvarchar(50)")
    private String customerReferenceNumber;

    @Column(name = "HUB_CODE", columnDefinition = "nvarchar(50)")
    private String hubCode;

    @Column(name = "HUB_NAME", columnDefinition = "nvarchar(50)")
    private String hubName;

    @Column(name = "MANUFACTURER", columnDefinition = "nvarchar(50)")
    private String manufacturer;

    @Column(name = "CONSIGNMENT_TYPE", columnDefinition = "nvarchar(50)")
    private String consignmentType;

    @Column(name = "ACTION_TYPE", columnDefinition = "nvarchar(50)")
    private String actionType;

    @Column(name = "MOVEMENT_TYPE", columnDefinition = "nvarchar(50)")
    private String movementType;

    @Column(name = "FORWARD_REFERENCE_NUMBER", columnDefinition = "nvarchar(50)")
    private String forwardReferenceNumber;

    @Column(name = "WORKER_CODE", columnDefinition = "nvarchar(50)")
    private String workerCode;

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
    private String dimentionUnit;

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

    @Column(name = "UPSTREAM_CREATION_TIME", columnDefinition = "nvarchar(50)")
    private String upstreamCreationTime;

    @Column(name = "UPSTREAM_CREATION_SOURCE", columnDefinition = "nvarchar(50)")
    private String upstreamCreationSource;

    @Column(name = "ALLOCATION_TIME", columnDefinition = "nvarchar(50)")
    private String allocationTime;

    @Column(name = "AUTO_ALLOCATE", columnDefinition = "nvarchar(50)")
    private String autoAllocate;

    @Column(name = "PRIORITY", columnDefinition = "nvarchar(50)")
    private String priority;

    @Column(name = "COURIER_PARTNER", columnDefinition = "nvarchar(50)")
    private String courierPartner;

    @Column(name = "COURIER_ACCOUNT", columnDefinition = "nvarchar(50)")
    private String courierAccount;

    @Column(name = "COURIER_PARTNER_REFERENCE_NUMBER", columnDefinition = "nvarchar(50)")
    private String courierPartnerReferenceNumber;

    @Column(name = "PICKUP_TYPE", columnDefinition = "nvarchar(50)")
    private String pickupType;

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

    @Column(name = "CUSTOMER_PICKUP_DATE", columnDefinition = "nvarchar(50)")
    private Date customerPickupDate;

    @Column(name = "PICKUP_TIME_SLOT_START", columnDefinition = "nvarchar(50)")
    private String pickupTimeSlotStart;

    @Column(name = "PICKUP_TIME_SLOT_END", columnDefinition = "nvarchar(50)")
    private String pickupTimeSlotEnd;

    @Column(name = "PICKUP_ID", columnDefinition = "nvarchar(50)")
    private String pickUpId;

    @Column(name = "RIDER_ID", columnDefinition = "nvarchar(50)")
    private String riderId;

    @Column(name = "RIDER_NAME", columnDefinition = "nvarchar(50)")
    private String riderName;

    @Column(name = "ASSIGNED_HUB_CODE", columnDefinition = "nvarchar(50)")
    private String assignedHubCode;

    @Column(name = "VEHICLE_REG_NUMBER", columnDefinition = "nvarchar(50)")
    private String vehicleRegNumber;

    @Column(name = "ROUTE_ID", columnDefinition = "nvarchar(50)")
    private String routeId;

    @Column(name = "RIDER_TYPE", columnDefinition = "nvarchar(50)")
    private String riderType;

    @Column(name = "DELIVERY_ATTEMPT_COUNT", columnDefinition = "nvarchar(50)")
    private String deliveryAttemptCount;

    @Column(name = "DELIVERY_TIME_SLOT_START", columnDefinition = "nvarchar(50)")
    private String deliveryTimeSlotStart;

    @Column(name = "DELIVERY_TIME_SLOT_END", columnDefinition = "nvarchar(50)")
    private String deliveryTimeSlotEnd;

    @Column(name = "SCHEDULED_AT", columnDefinition = "nvarchar(50)")
    private String scheduledAt;

    @Column(name = "WORKER_TIP_AMOUNT", columnDefinition = "nvarchar(50)")
    private String workerTipAmount;

    @Column(name = "WORKER_ELIGIBLE_PAYOUT", columnDefinition = "nvarchar(50)")
    private String workerEligiblePayout;

    @Column(name = "CONSTRAINT_TAGS", columnDefinition = "nvarchar(50)")
    private String constraintTag;

    @Column(name = "INVOICE_AMOUNT", columnDefinition = "nvarchar(50)")
    private String invoiceAmount;

    @Column(name = "INVOICE_URL", columnDefinition = "nvarchar(500)")
    private String invoiceUrl;

    @Column(name = "PRODUCT_CODE", columnDefinition = "nvarchar(50)")
    private String productCode;

    @Column(name = "CUSTOMS_VALUE", columnDefinition = "nvarchar(50)")
    private String customsValue;

    @Column(name = "IS_CUSTOMS_DECLARABLE", columnDefinition = "nvarchar(50)")
    private String isCustomsDeclarable;

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

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "RIDER_ASSIGNMENT_ID", referencedColumnName = "RIDER_ASSIGNMENT_ID")
    private ReplicaDestinationDetails destinationDetails;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "RIDER_ASSIGNMENT_ID", referencedColumnName = "RIDER_ASSIGNMENT_ID")
    private ReplicaRiderAssignmentDestinationDetails originDetails;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "RIDER_ASSIGNMENT_ID", referencedColumnName = "RIDER_ASSIGNMENT_ID")
    private ReplicaRiderAssignmentPickupDetails pickupDetails;

}

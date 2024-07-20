package com.courier.overc360.api.midmile.primary.model.consignment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tblconsignment_entity")
public class ConsignmentEntity {
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

//    @Column(name = "STATUS_ID", columnDefinition = "nvarchar(50)")
//    private String statusId;

//    @Column(name = "STATUS_TEXT", columnDefinition = "nvarchar(100)")
//    private String statusDescription;

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

    @Column(name = "CONSIGNEE_NAME", columnDefinition = "nvarchar(50)")
    private String consigneeName;

    @Column(name = "CONSIGNEE_CIVIL_ID", columnDefinition = "nvarchar(50)")
    private String consigneeCivilId;

    @Column(name = "INVOICE_SUPPLIER_NAME", columnDefinition = "nvarchar(50)")
    private String invoiceSupplierName;

    @Column(name = "FREIGHT_CURRENCY", columnDefinition = "nvarchar(50)")
    private String freightCurrency;

    @Column(name = "FREIGHT_CHARGES", columnDefinition = "nvarchar(50)")
    private String freightCharges;

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

    @Column(name = "NO_OF_CRT", columnDefinition = "nvarchar(50)")
    private String noOfCrt;

    @Column(name = "TOTAL_SHIPMENT_WEIGHT", columnDefinition = "nvarchar(50)")
    private String totalShipmentWeight;

    @Column(name = "TOTAL_WEIGHT_HAWB", columnDefinition = "nvarchar(50)")
    private String totalWeightHawb;

    @Column(name = "ESTIMATED_DEPARTURE_TIME")
    private Date estimatedDepartureTime;

    @Column(name = "SPECIAL_APPROVAL_VALUE", columnDefinition = "nvarchar(50)")
    private String specialApprovalValue;

    @Column(name = "AIRPORT_ORIGIN_CODE", columnDefinition = "nvarchar(50)")
    private String airportOriginCode;

    @Column(name = "AIRPORT_DESTINATION_CODE", columnDefinition = "nvarchar(50)")
    private String airportDestinationCode;

    @Column(name = "INVOICE_NUMBER", columnDefinition = "nvarchar(50)")
    private String invoiceNumber;

    @Column(name = "INVOICE_DATE", columnDefinition = "nvarchar(50)")
    private String invoiceDate;

    @Column(name = "INVOICE_TYPE", columnDefinition = "nvarchar(50)")
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

    @Column(name = "NOTIFY_PARTY", columnDefinition = "nvarchar(50)")
    private String notifyParty;

    @Column(name = "ITEM_TOTAL_PRICE", columnDefinition = "nvarchar(50)")
    private String itemTotalPrice;

    @Column(name = "PackageType", columnDefinition = "nvarchar(50)")
    private String packageType;

    @Column(name = "QUANTITY", columnDefinition = "nvarchar(50)")
    private String quantity;

    @Column(name = "NET_WEIGHT", columnDefinition = "nvarchar(50)")
    private String netWeight;

    @Column(name = "GROSS_WEIGHT", columnDefinition = "nvarchar(50)")
    private String grossWeight;

    @Column(name = "IS_EXEMPTED", columnDefinition = "nvarchar(50)")
    private String isExempted;

    @Column(name = "REFERENCE_NUMBER", columnDefinition = "nvarchar(50)")
    private String referenceNumber;

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

    @Column(name = "HAWB_TYP", columnDefinition = "nvarchar(50)")
    private String hawbType;

    @Column(name = "HAWB_TYP_ID", columnDefinition = "nvarchar(50)")
    private String hawbTypeId;

    @Column(name = "HAWB_TYP_TXT", columnDefinition = "nvarchar(100)")
    private String hawbTypeDescription;

    @Column(name = "HAWB_TIMESTAMP")
    private Date hawbTimeStamp = new Date();

    @Column(name = "WORKER_CODE", columnDefinition = "nvarchar(50)")
    private String workerCode;

    @Column(name = "PAYMENT_TYPE", columnDefinition = "nvarchar(50)")
    private String paymentType;

//    @Column(name = "EVENT_CODE", columnDefinition = "nvarchar(50)")
//    private String eventCode;

//    @Column(name = "EVENT_TEXT", columnDefinition = "nvarchar(50)")
//    private String eventText;

//    @Column(name = "EVENT_TIMESTAMP")
//    private Date eventTimestamp;

//    @Column(name = "STATUS_TIMESTAMP")
//    private Date statusTimestamp;

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
    @JoinColumn(name = "CONSIGNMENT_ID", referencedColumnName = "CON_INFO_ID")
    private ConsignmentInfo consignmentInfo;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "CONSIGNMENT_ID", referencedColumnName = "CON_REF_ID")
    private ConsignmentRef consignmentRefs;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "CONSIGNMENT_ID", referencedColumnName = "DEST_DETAIL_ID")
    private DestinationDetails destinationDetails;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "CONSIGNMENT_ID", referencedColumnName = "ORIGIN_ID")
    private OriginDetails originDetails;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "CONSIGNMENT_ID", referencedColumnName = "RETURN_ID")
    private ReturnDetails returnDetails;

    //Nullvalidation column
    @Column(name = "PRE_ALERT_VALIDATION_INDIACATOR")
    private Long preAlertValidationIndicator;
}

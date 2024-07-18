package com.courier.overc360.api.midmile.primary.model.prealert;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tblprealert",
        uniqueConstraints = {
        @UniqueConstraint(
                name = "unique_key_alert",
                columnNames = {"C_ID", "LANG_ID", "PARTNER_ID", "PARTNER_HOUSE_AIRWAY_BILL","PARTNER_MASTER_AIRWAY_BILL"}
        )
        }
)
@IdClass(PreAlertCompositeKey.class)
public class PreAlert {

    @Id
    @Column(name = "C_ID", columnDefinition = "nvarchar(50)")
    private String companyId;

    @Id
    @Column(name = "LANG_ID", columnDefinition = "nvarchar(50)")
    private String languageId;

    @Id
    @Column(name = "PARTNER_ID", columnDefinition = "nvarchar(50)")
    private String partnerId;

//    @Id
    @Column(name = "MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String masterAirwayBill;

    @Id
    @Column(name = "PARTNER_HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerHouseAirwayBill;

    @Id
    @Column(name = "PARTNER_MASTER_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    private String partnerMasterAirwayBill;

    @Column(name = "C_NAME", columnDefinition = "nvarchar(50)")
    private String companyName;

    @Column(name = "LANG_TEXT", columnDefinition = "nvarchar(50)")
    private String languageDescription;

    @Column(name = "TOTAL_WEIGHT", columnDefinition = "nvarchar(50)")
    private String totalWeight;

    @Column(name = "FLIGHT_NO", columnDefinition = "nvarchar(50)")
    private String flightNo;

    @Column(name = "CONSOLE_INDICATOR")
    private Long consoleIndicator;

    @Column(name = "CON_VALUE_LOCAL", columnDefinition = "nvarchar(50)")
    private String consignmentValueLocal;

    @Column(name = "MANIFEST_INDICATOR")
    private Long manifestIndicator;

    @Column(name = "FLIGHT_NAME", columnDefinition = "nvarchar(50)")
    private String flightName;

    @Column(name = "ESTIMATED_TIME_OF_DEPARTURE")
    private Date estimatedTimeOfDeparture;

    @Column(name = "ESTIMATED_TIME_OF_ARRIVAL")
    private Date estimatedTimeOfArrival;

    @Column(name = "NO_OF_PIECES", columnDefinition = "nvarchar(50)")
    private String noOfPieces;

    @Column(name = "CONSIGNMENT_VALUE", columnDefinition = "nvarchar(50)")
    private String consignmentValue;

    @Column(name = "EXCHANGE_RATE", columnDefinition = "nvarchar(50)")
    private String exchangeRate;

    @Column(name = "IATA", columnDefinition = "nvarchar(50)")
    private String iata;

    @Column(name = "CUSTOMS_INSURANCE", columnDefinition = "nvarchar(50)")
    private String customsInsurance;

    @Column(name = "DUTY", columnDefinition = "nvarchar(50)")
    private String duty;

    @Column(name = "ADD_IATA", columnDefinition = "nvarchar(50)")
    private String addIata;

    @Column(name = "ADD_INSURANCE", columnDefinition = "nvarchar(50)")
    private String addInsurance;

    @Column(name = "CUSTOMS_VALUE", columnDefinition = "nvarchar(50)")
    private String customsValue;

    @Column(name = "CALCULATED_TOTAL_DUTY", columnDefinition = "nvarchar(50)")
    private String calculatedTotalDuty;

    @Column(name = "BAYAN_HV", columnDefinition = "nvarchar(50)")
    private String bayanHv;

    @Column(name = "CURRENCY", columnDefinition = "nvarchar(50)")
    private String currency;

    @Column(name = "DESCRIPTION", columnDefinition = "nvarchar(50)")
    private String description;

    @Column(name = "CONSIGNEE_NAME", columnDefinition = "nvarchar(50)")
    private String consigneeName;

    @Column(name = "SHIPPER", columnDefinition = "nvarchar(50)")
    private String shipper;

    @Column(name = "ORIGIN", columnDefinition = "nvarchar(50)")
    private String origin;

    @Column(name = "ORIGIN_CODE", columnDefinition = "nvarchar(50)")
    private String originCode;

//    @Column(name = "CON_VALUE_KD", columnDefinition = "nvarchar(50)")
//    private String consignmentValueKd;

    @Column(name = "HS_CODE", columnDefinition = "nvarchar(50)")
    private String hsCode;

    @Column(name = "PARTNER_TYPE", columnDefinition = "nvarchar(50)")
    private String partnerType;

    @Column(name = "INCO_TERM", columnDefinition = "nvarchar(50)")
    private String incoTerm;

    @Column(name = "HAWB_TYP", columnDefinition = "nvarchar(50)")
    private String hawbType;

    @Column(name = "HAWB_TYP_ID", columnDefinition = "nvarchar(50)")
    private String hawbTypeId;

    @Column(name = "HAWB_TYP_TXT", columnDefinition = "nvarchar(100)")
    private String hawbTypeDescription;

    @Column(name = "HAWB_TIMESTAMP")
    private Date hawbTimeStamp = new Date();

    @Column(name = "IS_DELETED")
    private Long deletionIndicator = 0L;

    @Column(name = "REF_FIELD_1", columnDefinition = "nvarchar(500)")
    private String referenceField1;

    @Column(name = "REF_FIELD_2", columnDefinition = "nvarchar(500)")
    private String referenceField2;

    @Column(name = "REF_FIELD_3", columnDefinition = "nvarchar(500)")
    private String referenceField3;

    @Column(name = "REF_FIELD_4", columnDefinition = "nvarchar(500)")
    private String referenceField4;

    @Column(name = "REF_FIELD_5", columnDefinition = "nvarchar(500)")
    private String referenceField5;

    @Column(name = "REF_FIELD_6", columnDefinition = "nvarchar(500)")
    private String referenceField6;

    @Column(name = "REF_FIELD_7", columnDefinition = "nvarchar(500)")
    private String referenceField7;

    @Column(name = "REF_FIELD_8", columnDefinition = "nvarchar(500)")
    private String referenceField8;

    @Column(name = "REF_FIELD_9", columnDefinition = "nvarchar(500)")
    private String referenceField9;

    @Column(name = "REF_FIELD_10", columnDefinition = "nvarchar(500)")
    private String referenceField10;

    @Column(name = "CTD_BY", columnDefinition = "nvarchar(50)")
    private String createdBy;

    @Column(name = "CTD_ON")
    private Date createdOn = new Date();

    @Column(name = "UTD_BY", columnDefinition = "nvarchar(50)")
    private String updatedBy;

    @Column(name = "UTD_ON")
    private Date updatedOn = new Date();
}

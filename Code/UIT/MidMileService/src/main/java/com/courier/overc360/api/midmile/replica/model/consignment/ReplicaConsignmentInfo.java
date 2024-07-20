package com.courier.overc360.api.midmile.replica.model.consignment;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "tblconsignment_info")
public class ReplicaConsignmentInfo {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "CON_INFO_ID")
        private Long consignmentInfoId;

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
        private String constraintTags;

        @Column(name = "EWAY_BILL", columnDefinition = "nvarchar(50)")
        private String ewayBill;

        @Column(name = "PRODUCT_CODE", columnDefinition = "nvarchar(50)")
        private String productCode;

        @Column(name = "CUSTOMS_VALUE", columnDefinition = "nvarchar(50)")
        private String customsValue;

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

//    @Column(name = "PACK_DETAILS", columnDefinition = "nvarchar(50)")
//    private String packDetails;

//    @Column(name = "PHONE", columnDefinition = "nvarchar(50)")
//    private String phone;

        @Column(name = "CTD_BY", columnDefinition = "nvarchar(50)")
        private String createdBy;

        @Column(name = "CTD_ON")
        private Date createdOn = new Date();

        @Column(name = "UTD_BY", columnDefinition = "nvarchar(50)")
        private String updatedBy;

        @Column(name = "UTD_ON")
        private Date updatedOn = new Date();
}

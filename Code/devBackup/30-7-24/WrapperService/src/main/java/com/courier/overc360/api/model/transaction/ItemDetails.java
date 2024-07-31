package com.courier.overc360.api.model.transaction;

import lombok.Data;

import javax.persistence.Column;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
public class ItemDetails {

    private Long itemDetailsId;

    private Set<ImageReference> referenceImageList;

    private String languageId;

    private String companyId;

    private String partnerId;

    private String pieceId;

    private String masterAirwayBill;

    private String houseAirwayBill;

    private String pieceItemId;

    private String imageRefId;

    private String quantity;

    private String unitValue;

    private String currency;

    private String languageDescription;

    private String companyName;

    private String partnerType;

    private String partnerName;

    private String partnerMasterAirwayBill;

    private String partnerHouseAirwayBill;

    private String description;

    private String consignmentCurrency;

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

    private String itemCode;

    private String hsCode;

    private String declaredValue;

    private String codAmount;

    private String length;

    private String dimensionUnit;

    private String width;

    private String height;

    private String weight;

    private String weightUnit;

    private String volume;

    private String volumeUnit;

    private Long deletionIndicator = 0L;

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

    private String createdBy;

    private Date createdOn = new Date();

    private String updatedBy;

    private Date updatedOn = new Date();

}

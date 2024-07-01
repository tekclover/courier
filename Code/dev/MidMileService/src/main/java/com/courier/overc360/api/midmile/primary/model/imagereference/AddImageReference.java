package com.courier.overc360.api.midmile.primary.model.imagereference;

import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

@Data
public class AddImageReference {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    @NotBlank(message = "MasterAirwayBill is mandatory")
    private String masterAirwayBill;

    @NotBlank(message = "HouseAirwayBill is mandatory")
    private String houseAirwayBill;

    private Long consignmentId;

    private String pieceId;

    private String pieceItemId;

    private String imageRefId;

    @NotBlank(message = "PartnerType is mandatory")
    private String partnerType;

    @NotBlank(message = "PartnerName is mandatory")
    private String partnerName;

    @NotBlank(message = "ImageRef is mandatory")
    private String imageRef;

    private String partnerMasterAirwayBill;

    private String partnerHouseAirwayBill;

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

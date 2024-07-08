package com.courier.overc360.api.midmile.primary.model.itemdetails;

import com.courier.overc360.api.midmile.primary.model.consignment.ReferenceImageList;
import lombok.Data;

import java.util.List;

@Data
public class AddItemDetails {

//    @NotBlank(message = "Language Id is mandatory")
    private String languageId;

//    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

//    @NotBlank(message = "Partner Id is mandatory")
    private String partnerId;

//    @NotBlank(message = "MasterAirwayBill is mandatory")
    private String masterAirwayBill;

//    @NotBlank(message = "HouseAirwayBill is mandatory")
    private String houseAirwayBill;

//    @NotBlank(message = "Piece Id is mandatory")
    private String pieceId;

    private String pieceItemId;

    //    @NotBlank(message = " PartnerMasterAirwayBill  is mandatory")
    private String partnerMasterAirwayBill;

    //    @NotBlank(message = " PartnerHouseAirwayBill  is mandatory")
    private String partnerHouseAirwayBill;

    private String imageRefId;

    private String quantity;

    private String unitValue;

    private String currency;

    private String partnerType;

    private String partnerName;

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

    private List<ReferenceImageList> referenceImageList;

    private String imageReferenceId;

    private String description;

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

package com.courier.overc360.api.midmile.replica.model.consignment;


import com.courier.overc360.api.midmile.primary.model.consignment.ReferenceImageList;
import com.courier.overc360.api.midmile.primary.model.itemdetails.AddItemDetails;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaAddItemDetails;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaItemDetails;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Data
public class ReplicaAddPieceDetails {

    private String languageId;

    //    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    //    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    //    @NotBlank(message = "MasterAirwayBill is mandatory")
    private String masterAirwayBill;

    //    @NotBlank(message = "HouseAirwayBill is mandatory")
    private String houseAirwayBill;

    private String pieceId;

    @NotBlank(message = "PartnerType is mandatory")
    private String partnerType;

    @NotBlank(message = "PartnerName is mandatory")
    private String partnerName;

    private String partnerMasterAirwayBill;

    private String partnerHouseAirwayBill;

    private String pieceProductCode;

    private String description;

    @NotBlank(message = "DeclaredValue is mandatory")
    private String declaredValue;

    @NotBlank(message = "CodAmount is mandatory")
    private String codAmount;

    @NotBlank(message = "Length is mandatory")
    private String length;

    @NotBlank(message = "DimensionUnit is mandatory")
    private String dimensionUnit;

    @NotBlank(message = "Width is mandatory")
    private String width;

    @NotBlank(message = "Height is mandatory")
    private String height;

    @NotBlank(message = "Weight is mandatory")
    private String weight;

    @NotBlank(message = "WeightUnit is mandatory")
    private String weight_unit;

    @NotBlank(message = "Volume is mandatory")
    private String volume;

    @NotBlank(message = "VolumeUnit is mandatory")
    private String volumeUnit;

    private List<ReferenceImageList> referenceImageList;

    private String packReferenceNumber;

    private String tags;

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
    private String consignmentId;

    private List<ReplicaAddItemDetails> itemDetails = new ArrayList<>();
}

package com.courier.overc360.api.midmile.replica.model.consignment;


import com.courier.overc360.api.midmile.primary.model.consignment.ReferenceImageList;
import com.courier.overc360.api.midmile.primary.model.itemdetails.AddItemDetails;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaAddItemDetails;
import com.courier.overc360.api.midmile.replica.model.itemdetails.ReplicaItemDetails;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
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

    private String pieceCurrency;

    private String pieceValue;

    private String partnerType;

    private String partnerName;

    private String partnerMasterAirwayBill;

    private String partnerHouseAirwayBill;

    private String pieceProductCode;

    private String description;

    private String declaredValue;

    private String codAmount;

    private String length;

    private String dimensionUnit;

    private String width;

    private String height;

    private String weight;

    private String weight_unit;

    private String volume;

    private String volumeUnit;

    private String hsCode;

    private String pieceStatusId;
    private Date pieceStatusTimestamp;

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
    private Long consignmentId;

    private List<ReplicaAddItemDetails> itemDetails = new ArrayList<>();
}
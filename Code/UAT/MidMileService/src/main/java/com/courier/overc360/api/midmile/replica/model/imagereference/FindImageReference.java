package com.courier.overc360.api.midmile.replica.model.imagereference;

import lombok.Data;

import java.util.List;

@Data
public class FindImageReference {

    private List<String> languageId;
    private List<String> companyId;
    private List<String> partnerId;
    private List<String> masterAirwayBill;
    private List<String> houseAirwayBill;
    private List<String> pieceId;
    private List<String> pieceItemId;
    private List<String> imageRefId;
}

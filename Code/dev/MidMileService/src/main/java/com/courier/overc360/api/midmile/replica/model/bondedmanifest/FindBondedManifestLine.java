package com.courier.overc360.api.midmile.replica.model.bondedmanifest;

import lombok.Data;

import java.util.List;

@Data
public class FindBondedManifestLine {

    private List<String> languageId;
    private List<String> companyId;
    private List<String> partnerId;
    private List<String> masterAirwayBill;
    private List<String> bondedId;
    private List<String> houseAirwayBill;
    private List<String> lineNo;

}

package com.courier.overc360.api.model.transaction;


import lombok.Data;

import java.util.List;

@Data
public class FindPreAlert {

    private List<String> companyId;
    private List<String> languageId;
    private List<String> masterAirwayBill;
    private List<String> partnerHouseAirwayBill;
    private List<String> partnerId;
    private List<String> hsCode;

}

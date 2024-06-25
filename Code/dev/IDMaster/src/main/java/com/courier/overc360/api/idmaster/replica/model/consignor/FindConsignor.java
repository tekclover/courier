package com.courier.overc360.api.idmaster.replica.model.consignor;

import lombok.Data;

import java.util.List;

@Data
public class FindConsignor {

    private List<String> languageId;
    private List<String> companyId;
    private List<String> subProductId;
    private List<String> productId;
    private List<String> customerId;
    private List<String> consignorId;

}

package com.courier.overc360.api.idmaster.replica.model.customer;

import lombok.Data;

import java.io.Serializable;

@Data
public class ReplicaCustomerCompositeKey implements Serializable {

    private static final long serialVersionUID = -7617672247680004647L;

    /*
     * `LANG_ID`, `C_ID`, `CUSTOMER_ID`, `PRODUCT_ID`, `SUB_PRODUCT_ID`
     */

    private String languageId;
    private String companyId;
    private String customerId;
    private String productId;
    private String subProductId;
    private String subProductValue;

}

package com.courier.overc360.api.idmaster.primary.model.consignmentType;

import lombok.Data;

import java.io.Serializable;

@Data
public class ConsignmentTypeCompositeKey implements Serializable {

    private static final long serialVersionUID = -7617672247680004647L;
    /*
     * `C_ID`, `LANG_ID`,'CN_TYPE_ID
     */
    private String companyId;
    private String languageId;
    private String consignmentTypeId;
}

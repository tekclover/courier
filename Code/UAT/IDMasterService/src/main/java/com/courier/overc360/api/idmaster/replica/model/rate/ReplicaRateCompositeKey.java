package com.courier.overc360.api.idmaster.replica.model.rate;

import lombok.Data;

import java.io.Serializable;

@Data
public class ReplicaRateCompositeKey implements Serializable {

    private static final long serialVersionUID = -7617672247680004647L;

    /**
     * `LANG_ID`, `C_ID`, `PARTNER_ID`, `RATE_PARAMETER_ID`
     */

    private String languageId;
    private String companyId;
    private String partnerId;
    private String rateParameterId;
}

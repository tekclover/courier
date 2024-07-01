package com.courier.overc360.api.midmile.replica.model.bondedmanifest;

import lombok.Data;

import java.io.Serializable;

@Data
public class ReplicaBondedManifestCompositeKey implements Serializable {

    /**
     *`LANG_ID `, `C_ID`, `PARTNER_ID`, `BONDED_ID`, `MASTER_AIRWAY_BILL`, `HOUSE_AIRWAY_BILL`
     */

    private String languageId;
    private String companyId;
    private String partnerId;
    private String bondedId;
    private String masterAirwayBill;
    private String houseAirwayBill;
}

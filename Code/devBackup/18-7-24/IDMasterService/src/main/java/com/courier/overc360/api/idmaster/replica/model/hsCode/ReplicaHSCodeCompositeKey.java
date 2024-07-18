package com.courier.overc360.api.idmaster.replica.model.hsCode;

import lombok.Data;

import java.io.Serializable;

@Data
public class ReplicaHSCodeCompositeKey  implements Serializable {

    private static final long serialVersionUID = -7617672247680004647L;

    /*
     * `C_ID`, `LANG_ID`, `HS_CODE`
     */

    private String companyId;
    private String languageId;
    private String hsCode;

}



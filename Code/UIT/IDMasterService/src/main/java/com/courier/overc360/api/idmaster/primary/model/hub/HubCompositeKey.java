package com.courier.overc360.api.idmaster.primary.model.hub;

import lombok.Data;

import java.io.Serializable;

@Data
public class HubCompositeKey implements Serializable {

    private static final long serialVersionUID = -7617672247680004647L;

    /*
     * `C_ID`, `LANG_ID`, `HUB_CODE`
     */

    private String companyId;
    private String languageId;
    private String hubCode;

}
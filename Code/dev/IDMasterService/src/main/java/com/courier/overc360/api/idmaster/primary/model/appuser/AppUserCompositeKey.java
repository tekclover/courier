package com.courier.overc360.api.idmaster.primary.model.appuser;

import java.io.Serializable;

public class AppUserCompositeKey implements Serializable {
    private static final long serialVersionUID = -7617672247680004647L;
    /*
     * `C_ID`, `LANG_ID`,'APP_USER_ID'
     */
    private String companyId;
    private String languageId;
    private String appUserId;

}

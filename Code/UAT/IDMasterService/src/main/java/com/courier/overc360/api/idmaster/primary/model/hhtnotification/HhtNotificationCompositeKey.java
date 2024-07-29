package com.courier.overc360.api.idmaster.primary.model.hhtnotification;
import lombok.Data;

import java.io.Serializable;

@Data
public class HhtNotificationCompositeKey implements Serializable {
    private static final long serialVersionUID = -7617672247680004647L;

    /*
     * `LANG_ID`,`C_ID`, `PLANT_ID`, `WH_ID`,`DEVICE_ID`,USR_ID`,`TOKEN_ID`
     */
    private String languageId;
    private String companyId;
    private String plantId;
    private String wareHouseId;
    private String deviceId;
    private String userId;
    private String tokenId;
}

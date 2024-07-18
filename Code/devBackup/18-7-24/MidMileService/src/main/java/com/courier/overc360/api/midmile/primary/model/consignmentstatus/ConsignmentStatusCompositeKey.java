package com.courier.overc360.api.midmile.primary.model.consignmentstatus;

import lombok.Data;

import java.io.Serializable;

@Data
public class ConsignmentStatusCompositeKey implements Serializable {

    private static final long serialVersionUID = -7617672247680004647L;

    /**
     * `LANG_ID` , `C_ID`, `HOUSE_AIRWAY_BILL`, `EVENT_CODE`, `PIECE_ID`, `STATUS_ID`
     */

    private String languageId;
    private String companyId;
    private String houseAirwayBill;
    private String eventCode;
    private String pieceId;
    private String statusId;

}

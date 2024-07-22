package com.courier.overc360.api.model.transaction;


import lombok.Data;


@Data
public class TransferConsole {

    private String partnerHouseAirwayBill;
    private String fromConsoleId;
    private String toConsoleId;
    private String pieceId;
//    private String pieceItemId;
}
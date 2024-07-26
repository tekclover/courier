package com.courier.overc360.api.midmile.primary.model.reports;

import lombok.Data;

import java.util.Date;

@Data
public class ConsoleTrackingReportOutput {

    private Long noOfShipmentsScanned;
    private Long noOfConsoles;
    private Long noOfUnconsolidatedShipments;

    private String scanningOfficer;
    private Date scanningDate;

}

package com.courier.overc360.api.midmile.primary.model.reports;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Calendar;
import java.util.Date;

@Data
public class ConsoleTrackingReportInput {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "PartnerId is mandatory")
    private String partnerId;

    @NotBlank(message = "Partner Master Airway Bill is mandatory")
    private String partnerMasterAirwayBill;

    //    @NotBlank(message = "Partner House Airway Bill is mandatory")
    private String partnerHouseAirwayBill;

    private Date fromDate;
    private Date toDate;

    public ConsoleTrackingReportInput() {
        setDefaultDates();
    }

    private void setDefaultDates() {
        Calendar calendar = Calendar.getInstance();

        // Set fromDate to the start of the current day
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        this.fromDate = calendar.getTime();

        // Set toDate to the end of the current day
        calendar.set(Calendar.HOUR_OF_DAY, 23);
        calendar.set(Calendar.MINUTE, 59);
        calendar.set(Calendar.SECOND, 59);
        calendar.set(Calendar.MILLISECOND, 999);
        this.toDate = calendar.getTime();
    }

}

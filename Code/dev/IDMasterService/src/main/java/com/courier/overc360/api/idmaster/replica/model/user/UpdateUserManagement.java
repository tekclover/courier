package com.courier.overc360.api.idmaster.replica.model.user;

import lombok.Data;

import java.util.Date;

@Data
public class UpdateUserManagement {

    private String userId;
    private String languageId;
    private String companyCode;
    private String plantId;
    private String warehouseId;
    private Long userRoleId;
    private Long userTypeId;
    private String password;
    private String userName;
    private String firstName;
    private String lastName;
    private Long statusId;
    private Long dateFormatId;
    private Long currencyDecimal;
    private String timeZone;
    //	private Boolean isLoggedIn;
    private Boolean portalLoggedIn;
    private Boolean createHhtUser;
    private Boolean hhtLoggedIn;
    private Boolean resetPassword;
    private String emailId;
    private Long deletionIndicator = 0L;
    private String createdBy;
    private Date createdOn = new Date();
    private String updatedBy;
    private Date updatedOn = new Date();
}

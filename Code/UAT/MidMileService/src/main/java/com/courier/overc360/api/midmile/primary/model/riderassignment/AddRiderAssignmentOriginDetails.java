package com.courier.overc360.api.midmile.primary.model.riderassignment;

import lombok.Data;

import java.util.Date;

@Data
public class AddRiderAssignmentOriginDetails {

    private Long originId;

    private String addressHubCode;

    private String accountId;

    private String email;

    private String companyName;

    private String name;

    private String phone;

    private String alternatePhone;

    private String addressLine1;

    private String addressLine2;

    private String pinCode;

    private String district;

    private String city;

    private String state;

    private String country;

    private String latitude;

    private String longitude;

    private String createdBy;

    private Date createdOn;

    private String updatedBy;

    private Date updatedOn;
}

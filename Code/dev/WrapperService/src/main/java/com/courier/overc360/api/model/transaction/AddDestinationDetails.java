package com.courier.overc360.api.model.transaction;


import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class AddDestinationDetails {

    @NotBlank(message = "AddressHubCode is mandatory")
    private String addressHubCode;

    @NotBlank(message = "Account Id mandatory")
    private String accountId;

    @NotBlank(message = "Email is mandatory")
    private String email;

    @NotBlank(message = "Company Name is mandatory")
    private String companyName;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "Phone is mandatory")
    private String phone;

    private String alternatePhone;

    @NotBlank(message = "AddressLine1 is mandatory")
    private String addressLine1;

    private String addressLine2;

    @NotBlank(message = "PinCode is mandatory")
    private String pinCode;

    @NotBlank(message = "District is mandatory")
    private String district;

    @NotBlank(message = "City is mandatory")
    private String city;

    @NotBlank(message = "State is mandatory")
    private String state;

    @NotBlank(message = "Country is mandatory")
    private String country;

    private String latitude;

    private String longitude;

}

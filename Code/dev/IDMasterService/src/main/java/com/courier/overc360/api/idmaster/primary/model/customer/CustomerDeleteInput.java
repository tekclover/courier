package com.courier.overc360.api.idmaster.primary.model.customer;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CustomerDeleteInput {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "SubProductId is mandatory")
    private String subProductId;

    @NotBlank(message = "SubProduct Value is mandatory")
    private String subProductValue;

    @NotBlank(message = "ProductId is mandatory")
    private String productId;

    @NotBlank(message = "CustomerId is mandatory")
    private String customerId;

}

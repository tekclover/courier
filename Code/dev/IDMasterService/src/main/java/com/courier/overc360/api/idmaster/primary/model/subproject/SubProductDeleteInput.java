package com.courier.overc360.api.idmaster.primary.model.subproject;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class SubProductDeleteInput {

    @NotBlank(message = "LanguageId is mandatory")
    private String languageId;

    @NotBlank(message = "CompanyId is mandatory")
    private String companyId;

    @NotBlank(message = "SubProductId is mandatory")
    private String subProductId;

}

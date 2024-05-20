package com.courier.overc360.api.idmaster.primary.model.subproject;

import lombok.Data;

import java.util.List;

@Data
public class FindSubProduct {

    private List<String> languageId;
    private List<String> companyId;
    private List<String> subProductId;

}

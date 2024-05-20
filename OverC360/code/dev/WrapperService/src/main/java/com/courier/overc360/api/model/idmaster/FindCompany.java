package com.courier.overc360.api.model.idmaster;

import lombok.Data;

import java.util.List;

@Data
public class FindCompany {

    private List<String> companyId;
    private List<String> languageId;

}

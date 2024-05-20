package com.courier.overc360.api.idmaster.replica.model.company;

import lombok.Data;

import java.util.List;

@Data
public class FindCompany {

    private List<String> languageId;
    private List<String> companyId;

}

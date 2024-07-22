package com.courier.overc360.api.idmaster.replica.model.country;

import lombok.Data;

import java.util.List;

@Data
public class FindCountry {

    private List<String> languageId;
    private List<String> companyId;
    private List<String> countryId;
    private List<String> statusId;

}
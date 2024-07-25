package com.courier.overc360.api.model.idmaster;

import lombok.Data;

import java.util.List;

@Data
public class FindCurrencyExchangeRate {

    private List<String> languageId;
    private List<String> companyId;
    private List<String> fromCurrencyId;
    private List<String> toCurrencyId;
    private List<String> statusId;

}
package com.courier.overc360.api.idmaster.primary.model.currencyExchangeRate;

import lombok.Data;

import java.io.Serializable;

@Data
public class CurrencyExchangeRateCompositeKey implements Serializable {

    private static final long serialVersionUID = -7617672247680004647L;

    private String languageId;
    private String companyId;
    private String fromCurrencyId;
    private String toCurrencyId;
}

package com.courier.overc360.api.idmaster.primary.model.hhtnotification;

import lombok.Data;

import java.util.List;

@Data
public class FindHhtNotification {
    private List<String> cityId;
    private String cityName;
    private String stateId;
    private String countryId;
    private List<String>languageId;
}
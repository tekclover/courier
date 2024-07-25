package com.courier.overc360.api.model.idmaster;

import lombok.Data;

import java.util.List;

@Data
public class FindConsignmentType {

    private List<String> companyId;
    private List<String> languageId;
    private List<String> consignmentTypeId;
    private List<String> statusId;

}
package com.courier.overc360.api.idmaster.replica.model.module;

import lombok.Data;

import java.util.List;

@Data
public class FindModule {

    private String companyId;
    private List<String> moduleId;
    private List<String> languageId;
    private List<Long> menuId;
    private List<Long> subMenuId;
    private List<String> statusId;

}

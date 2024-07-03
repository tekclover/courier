package com.courier.overc360.api.model.idmaster;


import lombok.Data;

import java.util.List;

@Data
public class FindRoleAccess {

    private String companyId;
    private List<Long> roleId;
    private List<String> languageId;
    private List<Long> menuId;
    private List<Long> subMenuId;
    private List<String> statusId;

}
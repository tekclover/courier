package com.courier.overc360.api.model.idmaster;

import lombok.Data;

import java.util.Date;

@Data
public class RoleAccess {

    private String languageId;
    private String companyId;
    private Long userRoleId;
    private Long menuId;
    private Long subMenuId;
    private Long roleId;
    private String moduleId;
    private Long authorizationObjectId;
    private String authorizationObjectValue;
    private String userRoleName;
    private String menuName;
    private String subMenuName;
    private String description;
    private Long statusId;
    private String languageIdAndDescription;
    private String companyIdAndDescription;
    private String referenceField1;
    private String referenceField2;
    private String referenceField3;
    private String referenceField4;
    private String referenceField5;
    private String referenceField6;
    private String referenceField7;
    private String referenceField8;
    private String referenceField9;
    private String referenceField10;
    private Long deletionIndicator;
    private Boolean createUpdate;
    private Boolean edit;
    private Boolean view;
    private Boolean delete;
    private String createdBy;
    private Date createdOn;
    private String updatedBy;
    private Date updatedOn;

}
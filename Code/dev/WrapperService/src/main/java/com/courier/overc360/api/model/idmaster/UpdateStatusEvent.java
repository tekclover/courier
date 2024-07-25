package com.courier.overc360.api.model.idmaster;

import lombok.Data;

@Data
public class UpdateStatusEvent {

    private String typeText;

    private String action;

    private String type;

    private String trigger;

    private String preRequisite;

    private String level;

    private String conclusive;

    private String statusId;

    private String remark;

    private Long deletionIndicator;

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
}

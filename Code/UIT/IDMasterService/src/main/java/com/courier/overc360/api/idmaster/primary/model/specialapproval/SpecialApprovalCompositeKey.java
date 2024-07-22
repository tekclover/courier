package com.courier.overc360.api.idmaster.primary.model.specialapproval;

import lombok.Data;

import java.io.Serializable;

@Data
public class SpecialApprovalCompositeKey implements Serializable {

    private static final long serialVersionUID = -7617672247680004647L;
    /*
     * `C_ID`, `LANG_ID`,'SPECIAL_APPROVAL_ID'
     */
    private String companyId;
    private String languageId;
    private String specialApprovalId;

}
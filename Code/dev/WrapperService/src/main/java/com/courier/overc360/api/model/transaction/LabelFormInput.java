package com.courier.overc360.api.model.transaction;

import lombok.Data;

import java.util.List;

@Data
public class LabelFormInput {

    private List<String> languageId;
    private List<String> companyId;
    private List<String> pieceId;
}
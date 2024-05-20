package com.courier.overc360.api.model.idmaster;
import lombok.Data;
import java.util.List;

@Data
public class FindUserTypeId {
    private String companyCodeId;
    private String plantId;
    private String warehouseId;
    private List<Long> userTypeId;
    private List<String> languageId;
}

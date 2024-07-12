package com.courier.overc360.api.common.model.consignment;

import lombok.Data;

@Data
public class FindConsignment {

//    private List<String> languageId;
//    private List<String> companyId;
//    private List<String> partnerId;
//    private List<String> masterAirwayBill;
//    private List<String> statusId;
//    private List<String> shipperId;
//    private List<String> partnerHouseAirwayBill;
//    private List<String> partnerMasterAirwayBill;
//    private List<Long> consignmentId;
//    private Date startDate;
//    private Date endDate;

        private String masterAirwayBill;
        private Long consignmentId;
}
package com.courier.overc360.api.midmile.replica.model.dto;

public interface LabelFormOutput {

    Long getConsignmentId();
    String getCustomerReferenceNumber();
    String getHouseAirwayBill();
    String getCountryOfOrigin();
    String getPartnerName();
    String getIncoTerms();
    String getServiceTypeText();
    String getTotalDuty();
    String getNoOfPieceHawb();
    String getConsignmentCurrency();
    String getPartnerHouseAirwayBill();
    String getGrossWeight();
    String getModeOfTransport();
    String getInsurance();
    String getLoadType();
    String getCod();
    String getDestinationName();
    String getDestinationPhone();
    String getDestinationAlternatePhone();
    String getDestinationAddress();
    String getDestinationCity();
    String getDestinationState();
    String getDestinationCountry();
    String getOriginName();
    String getOriginPhone();
    String getOriginAlternatePhone();
    String getOriginAddress();
    String getOriginCity();
    String getOriginState();
    String getOriginCountry();
    String getPieceId();
    String getPieceProductCode();
    String getPieceValue();

    //@Column(name = "CONSIGNMENT_ID")
    //    private Long consignmentId;
    //    @Column(name = "CUSTOMER_REFERENCE_NUMBER", columnDefinition = "nvarchar(50)")
    //    private String customerReferenceNumber;
    //    @Column(name = "HOUSE_AIRWAY_BILL", columnDefinition = "nvarchar(50)")
    //    private String houseAirwayBill;
    //    @Column(name = "COUNTRY_OF_ORIGIN", columnDefinition = "nvarchar(50)")
    //    private String countryOfOrigin;
    //    @Column(name = "PARTNER_NAME", columnDefinition = "nvarchar(50)")
    //    private String partnerName;
    //    @Column(name = "INCO_TERMS", columnDefinition = "nvarchar(50)")
    //    private String incoTerms;
    //    @Column(name = "SERVICE_TYPE_TEXT", columnDefinition = "nvarchar(50)")
    //    private String serviceTypeText;
    //    @Column(name = "TOTAL_DUTY", columnDefinition = "nvarchar(50)")
    //    private String totalDuty;
    //    @Column(name = "NO_OF_PIECE_HAWB", columnDefinition = "nvarchar(50)")
    //    private String noOfPieceHawb;
    //    @Column(name = "CONSIGNMENT_CURRENCY", columnDefinition = "nvarchar(50)")
    //    private String consignmentCurrency;
    //    @Column(name = "PARTNER_HOUSE_AB", columnDefinition = "nvarchar(50)")
    //    private String partnerHouseAirwayBill;
    //    @Column(name = "GROSS_WEIGHT", columnDefinition = "nvarchar(50)")
    //    private String grossWeight;
    //    @Column(name = "MODE_OF_TRANSPORT", columnDefinition = "nvarchar(50)")
    //    private String modeOfTransport;
    //    @Column(name = "INSURANCE", columnDefinition = "nvarchar(50)")
    //    private String insurance;
    //@Column(name = "LOAD_TYPE", columnDefinition = "nvarchar(50)")
    //        private String loadType;
    //@Column(name = "NAME", columnDefinition = "nvarchar(50)")
    //    private String name;
    //    @Column(name = "PHONE", columnDefinition = "nvarchar(50)")
    //    private String phone;
    //    @Column(name = "ALTERNATE_PHONE", columnDefinition = "nvarchar(50)")
    //    private String alternatePhone;
    //    @Column(name = "ADDRESS_LINE_1", columnDefinition = "nvarchar(50)")
    //    private String addressLine1;
    //    @Column(name = "ADDRESS_LINE_2", columnDefinition = "nvarchar(50)")
    //    private String addressLine2;
    //    @Column(name = "CITY", columnDefinition = "nvarchar(50)")
    //    private String city;
    //    @Column(name = "STATE", columnDefinition = "nvarchar(50)")
    //    private String state;
    //    @Column(name = "COUNTRY", columnDefinition = "nvarchar(50)")
    //    private String country;
    //@Column(name = "PIECE_ID" ,columnDefinition = "nvarchar(50)")
    //    private String pieceId;
    //    @Column(name = "PIECE_PRODUCT_CODE", columnDefinition = "nvarchar(50)")
    //    private String pieceProductCode;
    //    @Column(name = "PIECE_VALUE", columnDefinition = "nvarchar(50)")
    //    private String pieceValue;

}
package com.courier.overc360.api.model.idmaster;

import lombok.Data;

import java.util.Date;

@Data
public class HhtNotification {

	private String languageId;
	private String companyId;
	private String deviceId;
	private String userId;
	private String tokenId;
	private Long deletionIndicator;
	private Boolean isLoggedIn;
	private String createdBy;
	private Date createdOn = new Date();
	private String updatedBy;
	private Date updatedOn;

}

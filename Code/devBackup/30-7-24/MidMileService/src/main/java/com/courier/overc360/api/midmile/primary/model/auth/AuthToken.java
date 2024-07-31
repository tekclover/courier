package com.courier.overc360.api.midmile.primary.model.auth;

import lombok.Data;

@Data
public class AuthToken {

	private String access_token;
	private String token_type;
	private String refresh_token;
	private String expires_in;
	private String scope;
	private String jti;
}
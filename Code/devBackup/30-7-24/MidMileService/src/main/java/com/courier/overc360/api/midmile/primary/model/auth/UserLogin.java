package com.courier.overc360.api.midmile.primary.model.auth;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class UserLogin {

	private String userName;
	private String password;
	private Collection<GrantedAuthority> grantedAutoriyList = new ArrayList<>();
}

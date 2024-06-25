package com.courier.overc360.api.common.config.security;

import com.courier.overc360.api.common.service.UserAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity (prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	UserAuthService userLoginService;
	
	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userLoginService).passwordEncoder(encoder());
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		 http.cors().and()
	      	.authorizeRequests()
			.anyRequest()
			.authenticated()
			.and()
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.NEVER);
	}
	
   @Override
   public void configure(WebSecurity web) throws Exception {
       web.ignoring().antMatchers(
    		   "/v2/api-docs",
    		   "/swagger-resources/**",
               "/swagger-ui.html",
               "/webjars/**"
    		   );
   }
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
//
//	@Bean
//	public AuthenticationConfiguration authenticationConfiguration() {
//		return new AuthenticationConfiguration();
//	}
//	@Bean
//	public ObjectPostProcessor<Object> objectPostProcessor() {
//		return new ObjectPostProcessor<Object>() {
//			@Override
//			public <O> O postProcess(O object) {
//				// You can perform custom post-processing here if needed
//				return object;
//			}
//		};
//	}
//
//	@Bean
//	public List<AuthorizationServerConfigurer> authorizationServerConfigurers() {
//		return List.of();
//	}
//
//	@Bean
//	public List<String> myStringList() {
//		return new ArrayList<>();
//	}
}

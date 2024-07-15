package com.courier.overc360.api.midmile.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	/**
	 * apiKey()
	 * @return
	 */
	private ApiKey apiKey() { 
	    return new ApiKey("JWT", "Authorization", "header"); 	
	}
	
	/**
	 * securityContext()
	 * @return
	 */
	private SecurityContext securityContext() { 
	    return SecurityContext.builder().securityReferences(defaultAuth()).build(); 
	} 

	/**
	 * defaultAuth()
	 * @return
	 */
	private List<SecurityReference> defaultAuth() { 
	    AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything"); 
	    AuthorizationScope[] authorizationScopes = new AuthorizationScope[1]; 
	    authorizationScopes[0] = authorizationScope; 
	    return Arrays.asList(new SecurityReference("JWT", authorizationScopes)); 
	}
	
	/**
	 * api()
	 * @return
	 */
	@Bean
	public Docket api() {
	    return new Docket(DocumentationType.SWAGGER_2)
	      .apiInfo(apiInfo())
	      .securityContexts(Arrays.asList(securityContext()))
	      .securitySchemes(Arrays.asList(apiKey()))
	      .select()
	      .apis(RequestHandlerSelectors.basePackage("com.courier.overc360.api.midmile.controller"))
	      .paths(PathSelectors.any())
	      .build();
	    
	}

	/**
	 * apiInfo()
	 * @return
	 */
	private ApiInfo apiInfo() {
	    return new ApiInfo(
	      "Classic WMS - Enterprise Setup Services",
	      "EnterpriseSetup Service Specifications",
	      "1.0",
	      "Terms of service",
	      new Contact("Classic WMS Team", "www.tekclover.com", "classicwms@tekclover.com"),
	      "License of API",
	      "API license URL",
	      Collections.emptyList());
	}
}

package com.courier.overc360.api.service;

import com.courier.overc360.api.batch.scheduler.BatchJobScheduler;
import com.courier.overc360.api.config.PropertiesConfig;
import com.courier.overc360.api.exception.BadRequestException;
import com.courier.overc360.api.util.CommonUtils;
import com.courier.overc360.api.model.auth.AuthToken;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@Slf4j
@Service
public class CommonService {
	
	@Autowired
	PropertiesConfig propertiesConfig;
	
	@Autowired
	BatchJobScheduler batchJobScheduler;
	
	/**
	 * Returns RestTemplate Object
	 * @return
	 */
	public RestTemplate getRestTemplate() {
		RestTemplate restTemplate = new RestTemplate();

		// Object Convertor
		MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter = new MappingJackson2HttpMessageConverter();
		mappingJackson2HttpMessageConverter
				.setSupportedMediaTypes(Arrays.asList(MediaType.APPLICATION_JSON, MediaType.APPLICATION_OCTET_STREAM));
		restTemplate.getMessageConverters().add(mappingJackson2HttpMessageConverter);
		return restTemplate;
	}
	
	/**
	 * generateOAuthToken
	 * @param apiUrl
	 * @param clientId
	 * @param clientSecretKey
	 * @param grantType
	 * @param oauthUserName
	 * @param oauthPassword
	 * @return
	 */
	public AuthToken generateOAuthToken (String apiUrl, String clientId, String clientSecretKey, String grantType, String oauthUserName, String oauthPassword) {
		// Client Id and Client Secret Key to be sent as part of header for authentication
		String credentials = clientId + ":" + clientSecretKey;
		String encodedCredentials = new String(Base64.encodeBase64(credentials.getBytes()));

		RestTemplate restTemplate = new RestTemplate();
		
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		headers.add("Authorization", "Basic " + encodedCredentials);

		HttpEntity<String> request = new HttpEntity<String>(headers);
		String accessTokenUrl = apiUrl;
		
		// AuthToken URL dynamically
		if (apiUrl.equalsIgnoreCase("overc-idmaster-service")) {
			accessTokenUrl = propertiesConfig.getIdmasterAccessTokenUrl();
			log.info("accessTokenUrl : " + accessTokenUrl);
		} else if (apiUrl.equalsIgnoreCase("crmmt-enterprise-service")) {
			accessTokenUrl = propertiesConfig.getEnterpriseAccessTokenUrl();
		} else if (apiUrl.equalsIgnoreCase("crmmt-transaction-service")) {
			accessTokenUrl = propertiesConfig.getTransactionAccessTokenUrl();
		} else if (apiUrl.equalsIgnoreCase("crmmt-masters-service")) {
			accessTokenUrl = propertiesConfig.getMastersAccessTokenUrl();
		}else if (apiUrl.equalsIgnoreCase("mnr-spark-service")) {
			accessTokenUrl = propertiesConfig.getSparkAccessTokenUrl();
		} else if(apiUrl.equalsIgnoreCase("wms-connector-service")){
			accessTokenUrl = propertiesConfig.getConnectorAccessTokenUrl();
		} else {
			log.info("The given URL is not available. Quiting.");
			throw new BadRequestException("The given URL is not available. Quiting");
		}
		
		log.info("Access token url: " + accessTokenUrl);
		accessTokenUrl += "?grant_type=" + grantType
						+ "&username=" + oauthUserName
						+ "&password=" + oauthPassword;
		log.info("accessTokenUrl : " + accessTokenUrl);

		ResponseEntity<AuthToken> response = restTemplate.exchange(accessTokenUrl, HttpMethod.POST, request, AuthToken.class);
		log.info("Access Token Response ---------" + response.getBody());
		return response.getBody();
	}
	
	/**
	 * generateUUID
	 * @return
	 */
	public String generateUUID () {
		CommonUtils cUtils = new CommonUtils ();
		return cUtils.randomUUID();
	}
	
	public AXAuthToken generateAXOAuthToken() {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		
		AXUserAuth axapiUserAuth = new AXUserAuth();
		axapiUserAuth.setUsername("AxUser");
		axapiUserAuth.setPassword("Wms-@tv@ndtsc-!nt00");
		
		HttpEntity<?> entity = new HttpEntity<>(axapiUserAuth, headers);
		String accessTokenUrl = "http://168.187.214.59:8040/api/ax/gettoken";
		log.info("Access token url: " + accessTokenUrl);
		
		ResponseEntity<AXAuthToken> response = 
				restTemplate.exchange(accessTokenUrl, HttpMethod.POST, entity, AXAuthToken.class);
		log.info("AX Response ---------" + response.getBody());
		return response.getBody();
	}
}

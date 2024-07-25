package com.courier.overc360.api.service;

import com.courier.overc360.api.config.PropertiesConfig;
import com.courier.overc360.api.model.transaction.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Collections;
import java.util.List;

@Service
@Slf4j
public class MidMileService {


    @Autowired
    PropertiesConfig propertiesConfig;

    private RestTemplate getRestTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate;
    }

    private String getMidMileServiceUrl() {
        return propertiesConfig.getMidMileServiceUrl();
    }

    /*-----------------------------------------------------------------------------------------------------------------------------------*/

    // GetALl
    public ConsignmentEntity[] getAllConsignment(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<ConsignmentEntity[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, ConsignmentEntity[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    // Create new Consignment
    public ConsignmentEntity[] createConsignment(AddConsignment[] addConsignment, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", "Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(addConsignment, headers);
        ResponseEntity<ConsignmentEntity[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ConsignmentEntity[].class);
        return result.getBody();
    }

    // Update Consignment
    public ConsignmentEntity[] updateConsignment(List<UpdateConsignment> updateConsignment, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateConsignment, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/updateConsignment")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<ConsignmentEntity[]> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, ConsignmentEntity[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find ConsignmentEntity
    public ConsignmentEntity[] findConsignmentEntity(FindConsignment findConsignment, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/find");
            HttpEntity<?> entity = new HttpEntity<>(findConsignment, headers);
            ResponseEntity<ConsignmentEntity[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ConsignmentEntity[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find IConsignmentEntity - preAlertValidationIndicator
    public IConsignment[] findIConsignmentEntity(FindIConsignment findConsignment, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/find/v2");
            HttpEntity<?> entity = new HttpEntity<>(findConsignment, headers);
            ResponseEntity<IConsignment[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, IConsignment[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find PreAlertManifest - based on consignment details
    public ConsignmentEntity[] findPreAlertManifest(FindPreAlertManifest findPreAlertManifest, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/findPreAlertManifest");
            HttpEntity<?> entity = new HttpEntity<>(findPreAlertManifest, headers);
            ResponseEntity<ConsignmentEntity[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ConsignmentEntity[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find PreAlertManifest - based on Item details
    public PreAlertManifest[] findPreAlertManifestV2(FindPreAlertManifest findPreAlertManifest, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "itemDetails/findPreAlertManifest");
            HttpEntity<?> entity = new HttpEntity<>(findPreAlertManifest, headers);
            ResponseEntity<PreAlertManifest[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, PreAlertManifest[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    /**
     * DeleteConsignment
     *
     * @param languageId
     * @param companyId
     * @param partnerId
     * @param masterAirwayBill
     * @param houseAirwayBill
     * @param pieceId
     * @param pieceItemId
     * @param loginUserID
     * @param authToken
     * @return
     */
    public boolean deleteConsignment(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                     String pieceId, String pieceItemId, String loginUserID, String imageRefId, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment")
                    .queryParam("languageId", languageId)
                    .queryParam("companyId", companyId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("imageRefId", imageRefId)
                    .queryParam("pieceItemId", pieceItemId)
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.DELETE, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    /**
     * @param consignmentDeletes
     * @param loginUserID
     * @param authToken
     * @return
     */
    public boolean deleteConsignmentMultiple(List<ConsignmentDelete> consignmentDeletes, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Classic WMS's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(consignmentDeletes, headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/delete/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //=====================================================ImageReference========================================================
    // Get All ImageReference Details
    public ImageReference[] getAllImageReferences(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "imageReference");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<ImageReference[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, ImageReference[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Get ImageReference
    public ImageReference getImageReference(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String pieceId, String pieceItemId, String imageRefId, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "imageReference/" + imageRefId)
                    .queryParam("languageId", languageId)
                    .queryParam("companyId", companyId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("pieceItemId", pieceItemId);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<ImageReference> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, ImageReference.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Create ImageReference
    public ImageReference createImageReference(AddImageReference addImageReference, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", "Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "imageReference")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(addImageReference, headers);
        ResponseEntity<ImageReference> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ImageReference.class);
        return result.getBody();
    }

    // Update ImageReference
    public ImageReference updateImageReference(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String pieceId,
                                               String pieceItemId, String imageRefId, UpdateImageReference updateImageReference, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateImageReference, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "imageReference/" + imageRefId)
                    .queryParam("languageId", languageId)
                    .queryParam("companyId", companyId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("pieceItemId", pieceItemId)
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<ImageReference> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, ImageReference.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Delete ImageReference
    public boolean deleteImageReference(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill, String pieceId, String pieceItemId, String imageRefId, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "imageReference/" + imageRefId)
                    .queryParam("languageId", languageId)
                    .queryParam("companyId", companyId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("pieceItemId", pieceItemId)
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.DELETE, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find ImageReference
    public ImageReference[] findImageReference(FindImageReference findImageReference, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "imageReference/find");
            HttpEntity<?> entity = new HttpEntity<>(findImageReference, headers);
            ResponseEntity<ImageReference[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ImageReference[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //==================================================ItemDetails====================================================

    //Get All ItemDetails

    public ItemDetails[] getAllItemDetails(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Rest Template");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "itemDetails");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<ItemDetails[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, ItemDetails[].class);
            log.info("result: " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Get ItemDetails
    public ItemDetails getItemDetails(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                      String pieceId, String pieceItemId, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "itemDetails/" + pieceItemId)
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("houseAirwayBill", houseAirwayBill);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<ItemDetails> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, ItemDetails.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Create ItemDetails
    public ItemDetails createItemDetails(AddItemDetails addItemDetails, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", "Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "itemDetails")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(addItemDetails, headers);
        ResponseEntity<ItemDetails> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ItemDetails.class);
        return result.getBody();
    }

    // Update ItemDetails
    public ItemDetails updateItemDetails(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                         String pieceId, String pieceItemId, UpdateItemDetails updateItemDetails, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateItemDetails, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "itemDetails/" + pieceItemId)
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<ItemDetails> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, ItemDetails.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Delete ItemDetails
    public boolean deleteItemDetails(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                     String pieceId, String pieceItemId, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "itemDetails/" + pieceItemId)
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.DELETE, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find ItemDetails
    public ItemDetails[] findItemDetails(FindItemDetails findItemDetails, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "itemDetails/find");
            HttpEntity<?> entity = new HttpEntity<>(findItemDetails, headers);
            ResponseEntity<ItemDetails[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ItemDetails[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    //==================================================PieceDetails====================================================

    //Get All PieceDetails

    public PieceDetails[] getAllPieceDetails(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Rest Template");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "piecedetails");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<PieceDetails[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, PieceDetails[].class);
            log.info("result: " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Get PieceDetails
    public PieceDetails getPieceDetails(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                        String houseAirwayBill, String pieceId, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "piecedetails/" + pieceId)
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<PieceDetails> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, PieceDetails.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Create PieceDetails
    public PieceDetails createPieceDetails(AddPieceDetails addPieceDetails, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", "Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "piecedetails")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(addPieceDetails, headers);
        ResponseEntity<PieceDetails> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, PieceDetails.class);
        return result.getBody();
    }

    // Update PieceDetails
    public PieceDetails updatePieceDetails(String languageId, String companyId, String partnerId, String masterAirwayBill, String houseAirwayBill,
                                           String pieceId, UpdatePieceDetails updatePieceDetails, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updatePieceDetails, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "piecedetails/" + pieceId)
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<PieceDetails> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, PieceDetails.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Delete PieceDetails
    public boolean deletePieceDetails(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                      String houseAirwayBill, String pieceId, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "piecedetails/" + pieceId)
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.DELETE, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //Find PieceDetails
    public PieceDetails[] findPieceDetails(FindPieceDetails findPieceDetails, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "piecedetails/find");
            HttpEntity<?> entity = new HttpEntity<>(findPieceDetails, headers);
            ResponseEntity<PieceDetails[]> result =
                    getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, PieceDetails[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //===============================================BondedManifest====================================================
    // Get All BondedManifest Details
    public BondedManifest[] getAllBondedManifest(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "bondedManifest");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<BondedManifest[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, BondedManifest[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    // Get BondedManifest
    public BondedManifest getBondedManifest(String languageId, String companyId, String partnerId, String masterAirwayBill,
                                            String houseAirwayBill, String bondedId, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "bondedManifest/" + bondedId)
                    .queryParam("languageId", languageId)
                    .queryParam("companyId", companyId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("masterAirwayBill", masterAirwayBill)
                    .queryParam("houseAirwayBill", houseAirwayBill);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<BondedManifest> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, BondedManifest.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Create new BondedManifest
    public BondedManifest[] createBondedManifest(List<AddBondedManifest> addBondedManifest, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", "Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "bondedManifest/create/list")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(addBondedManifest, headers);
        ResponseEntity<BondedManifest[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, BondedManifest[].class);
        return result.getBody();
    }

//    // Create new BondedManifest
//    public BondedManifest[] createBondedManifestBasedOnConsignment(List<ConsignmentEntity> addConsignments, String loginUserID, String authToken) {
//        HttpHeaders headers = new HttpHeaders();
//        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//        headers.add("User-Agent", "RestTemplate");
//        headers.add("Authorization", "Bearer " + authToken);
//        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "bondedManifest/bondedmanifest/create")
//                .queryParam("loginUserID", loginUserID);
//        HttpEntity<?> entity = new HttpEntity<>(addConsignments, headers);
//        ResponseEntity<BondedManifest[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, BondedManifest[].class);
//        return result.getBody();
//    }

    // Create new BondedManifests based on PreAlert Input
    public BondedManifest[] createBondedManifestListsOnPreAlertInput(List<PreAlert> preAlertList, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "bondedManifest/create/preAlert")
                    .queryParam("loginUserID", loginUserID);
            HttpEntity<?> entity = new HttpEntity<>(preAlertList, headers);
            ResponseEntity<BondedManifest[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, BondedManifest[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public BondedManifest[] updateBondedManifest(List<UpdateBondedManifest> updateBondedManifest, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Classic WMS's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateBondedManifest, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "bondedManifest/update/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<BondedManifest[]> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, BondedManifest[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Delete BondedManifest
    public boolean deleteBondedManifest(List<BondedManifestDeleteInput> deleteInputList, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(deleteInputList, headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "bondedManifest/delete/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find BondedManifest
    public BondedManifest[] findBondedManifest(FindBondedManifest findBondedManifest, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "bondedManifest/findBondedManifest");
            HttpEntity<?> entity = new HttpEntity<>(findBondedManifest, headers);
            ResponseEntity<BondedManifest[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, BondedManifest[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    //===============================================Ccr====================================================
    // Get All Ccr Details
    public Ccr[] getAllCcr(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "ccr");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<Ccr[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, Ccr[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    // Get Ccr
    public Ccr getCcr(String languageId, String companyId, String partnerId, String partnerMasterAirwayBill,
                      String partnerHouseAirwayBill, String consoleId, String ccrId, String pieceId, String pieceItemId, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "ccr/" + ccrId)
                    .queryParam("languageId", languageId)
                    .queryParam("companyId", companyId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("partnerMasterAirwayBill", partnerMasterAirwayBill)
                    .queryParam("partnerHouseAirwayBill", partnerHouseAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("pieceItemId", pieceItemId)
                    .queryParam("consoleId", consoleId);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<Ccr> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, Ccr.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Create new Ccr
    public Ccr[] createCcr(List<AddCcr> addCcr, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", "Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "ccr/create/list")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(addCcr, headers);
        ResponseEntity<Ccr[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Ccr[].class);
        return result.getBody();
    }

    //update Ccr
    public Ccr[] updateCcr(List<UpdateCcr> updateCcr, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Classic WMS's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateCcr, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "ccr/update/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<Ccr[]> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, Ccr[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Delete Ccr
    public boolean deleteCcr(List<CcrDeleteInput> deleteInputList, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(deleteInputList, headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "ccr/delete/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find Ccr
    public Ccr[] findCcr(FindCcr findCcr, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "ccr/findCcr");
            HttpEntity<?> entity = new HttpEntity<>(findCcr, headers);
            ResponseEntity<Ccr[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Ccr[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    //===============================================Console====================================================
    // Get All Console Details
    public Console[] getAllConsole(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<Console[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, Console[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Get Console
    public Console getConsole(String languageId, String companyId, String partnerId, String partnerMasterAirwayBill,
                              String partnerHouseAirwayBill, String consoleId, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/" + consoleId)
                    .queryParam("languageId", languageId)
                    .queryParam("companyId", companyId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("partnerMasterAirwayBill", partnerMasterAirwayBill)
                    .queryParam("partnerHouseAirwayBill", partnerHouseAirwayBill);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<Console> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, Console.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Create new Console
    public Console[] createConsole(List<AddConsole> addConsole, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", "Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/create/list")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(addConsole, headers);
        ResponseEntity<Console[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Console[].class);
        return result.getBody();
    }

    // Update Console
    public Console[] updateConsole(List<UpdateConsole> updateConsole, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Classic WMS's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateConsole, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/update/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<Console[]> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, Console[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Update Console for Mobile App
    public Console[] updateConsoleForMobileApp(List<UpdateConsole> updateConsole, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Classic WMS's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateConsole, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/update/list/mobile")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<Console[]> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, Console[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    /**
     * @param updateConsoleList
     * @param loginUserID
     * @param authToken
     * @return
     */
    public Console[] updateConsoleNormal(List<UpdateConsole> updateConsoleList, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Classic WMS's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateConsoleList, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/update/list/normal")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<Console[]> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, Console[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }

    }


    // Delete Console
    public boolean deleteConsole(List<ConsoleDeleteInput> deleteInputList, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(deleteInputList, headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/delete/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find Consoles - normal
    public Console[] findConsole(FindConsole findConsole, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/findConsole");
            HttpEntity<?> entity = new HttpEntity<>(findConsole, headers);
            ResponseEntity<Console[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Console[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find Consoles By Pagination
    public PaginatedResponse<Console> findConsolesByPagination(FindConsole findConsole, Integer pageNo, Integer pageSize,
                                                               String sortBy, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/findConsole/pagination")
                    .queryParam("pageNo", pageNo)
                    .queryParam("pageSize", pageSize)
                    .queryParam("sortBy", sortBy);
            HttpEntity<?> entity = new HttpEntity<>(findConsole, headers);
            ParameterizedTypeReference<PaginatedResponse<Console>> responseType = new ParameterizedTypeReference<PaginatedResponse<Console>>() {
            };
            ResponseEntity<PaginatedResponse<Console>> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, responseType);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

//    /**
//     *
//     * @param addConsignments
//     * @param loginUserID
//     * @param authToken
//     * @return
//     */
//    public Console[] createConsoleConsignmentInput(List<ConsignmentEntity> addConsignments, String loginUserID, String authToken){
//        HttpHeaders headers = new HttpHeaders();
//        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//        headers.add("User-Agent", "RestTemplate");
//        headers.add("Authorization", " Bearer " + authToken);
//        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/create/list/con")
//                .queryParam("loginUserID", loginUserID);
//        HttpEntity<?> entity = new HttpEntity<>(addConsignments, headers);
//        ResponseEntity<Console[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Console[].class);
//        return result.getBody();
//    }

    /**
     * @param addPreAlert
     * @param loginUserID
     * @param authToken
     * @return
     */
    public Console[] createConsoleBasedOnPreAlertResponse(List<PreAlert> addPreAlert, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", " Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/create/list/con")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(addPreAlert, headers);
        ResponseEntity<Console[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Console[].class);
        return result.getBody();
    }

    /**
     * @param transferConsole
     * @param loginUserID
     * @param authToken
     * @return
     */
    public Console[] transferConsole(List<TransferConsole> transferConsole, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/transfer")
                    .queryParam("loginUserID", loginUserID);
            HttpEntity<?> entity = new HttpEntity<>(transferConsole, headers);
            ResponseEntity<Console[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Console[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //==================================================ConsignmentStatus==============================================
    // Get All ConsignmentStatus Details
    public ConsignmentStatus[] getAllConsignmentStatus(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Rest Template");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignmentStatus");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<ConsignmentStatus[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, ConsignmentStatus[].class);
            log.info("result: " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Get ConsignmentStatus
    public ConsignmentStatus getConsignmentStatus(String languageId, String companyId, String houseAirwayBill,
                                                  String pieceId, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignmentStatus/get")
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("pieceId", pieceId)
                    .queryParam("houseAirwayBill", houseAirwayBill);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<ConsignmentStatus> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, ConsignmentStatus.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Create ConsignmentStatus
    public ConsignmentStatus createConsignmentStatus(AddConsignmentStatus addConsignmentStatus, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignmentStatus")
                    .queryParam("loginUserID", loginUserID);
            HttpEntity<?> entity = new HttpEntity<>(addConsignmentStatus, headers);
            ResponseEntity<ConsignmentStatus> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ConsignmentStatus.class);
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Update ConsignmentStatus
    public ConsignmentStatus updateConsignmentStatus(String languageId, String companyId, String houseAirwayBill, String pieceId,
                                                     UpdateConsignmentStatus updateConsignmentStatus, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateConsignmentStatus, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignmentStatus/update")
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<ConsignmentStatus> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, ConsignmentStatus.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Delete ConsignmentStatus
    public boolean deleteConsignmentStatus(String languageId, String companyId, String houseAirwayBill,
                                           String pieceId, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignmentStatus/delete")
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("houseAirwayBill", houseAirwayBill)
                    .queryParam("pieceId", pieceId)
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.DELETE, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find ConsignmentStatus
    public ConsignmentStatus[] findConsignmentStatus(FindConsignmentStatus findConsignmentStatus, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignmentStatus/find");
            HttpEntity<?> entity = new HttpEntity<>(findConsignmentStatus, headers);
            ResponseEntity<ConsignmentStatus[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ConsignmentStatus[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //----------------------Upload------------------------------------------------------------------

    // POST - Consingment Upload
    public UploadApiResponse[] postConsignmentUpload(List<AddConsignment> consignmentList, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", "Bearer " + authToken);
        UriComponentsBuilder builder =
                UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/upload")
                        .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(consignmentList, headers);
        ResponseEntity<UploadApiResponse[]> result =
                getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, UploadApiResponse[].class);
        return result.getBody();
    }

    //----------------------getPdfLabelForm------------------------------------------------------------------
    // get pdf label form
    public PdfLabelFormOutput[] getPdfLabelForm(LabelFormInput labelFormInput, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "piecedetails/pdfLabel");
            HttpEntity<?> entity = new HttpEntity<>(labelFormInput, headers);
            ResponseEntity<PdfLabelFormOutput[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, PdfLabelFormOutput[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find ConsignmentInvoice
//    public ConsignmentInvoice[] findConsignmentInvoice(FindConsignmentInvoice findConsignmentInvoice, String authToken) throws Exception {
//        try {
//            HttpHeaders headers = new HttpHeaders();
//            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//            headers.add("User-Agent", "RestTemplate");
//            headers.add("Authorization", "Bearer " + authToken);
//            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/findConsignmentInvoice");
//            HttpEntity<?> entity = new HttpEntity<>(findConsignmentInvoice, headers);
//            ResponseEntity<ConsignmentInvoice[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ConsignmentInvoice[].class);
//            log.info("result : " + result.getStatusCode());
//            return result.getBody();
//        } catch (Exception e) {
//            e.printStackTrace();
//            throw e;
//        }
//    }

    // Find ConsignmentInvoice
    public InvoiceForm[] findConsignmentInvoice(FindConsignmentInvoice findConsignmentInvoice, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/consignmentInvoiceGenerate");
            HttpEntity<?> entity = new HttpEntity<>(findConsignmentInvoice, headers);
            ResponseEntity<InvoiceForm[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, InvoiceForm[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Create New PreAlert

    /**
     * @param preAlerts
     * @param loginUserID
     * @param authToken
     * @return
     */
    public UploadApiResponse[] createPreAlert(List<PreAlert> preAlerts, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", "Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/post/prealert")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(preAlerts, headers);
        ResponseEntity<UploadApiResponse[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, UploadApiResponse[].class);
        return result.getBody();
    }

    //    /**
//     *
//     * @param findPreAlert
//     * @param authToken
//     * @return
//     */
//    public PreAlert[] findPreAlert(FindPreAlert findPreAlert, String authToken) {
//        try {
//            HttpHeaders headers = new HttpHeaders();
//            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//            headers.add("User-Agent", "RestTemplate");
//            headers.add("Authorization", "Bearer " + authToken);
//            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "consignment/find/prealert");
//            HttpEntity<?> entity = new HttpEntity<>(findPreAlert, headers);
//            ResponseEntity<PreAlert[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, PreAlert[].class);
//            return result.getBody();
//        } catch (Exception e) {
//            e.printStackTrace();
//            throw e;
//        }
//    }

    //==================================================PreAlert====================================================

    // Get All PreAlert Details
    public PreAlert[] getAllPreAlert(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "prealert");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<PreAlert[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, PreAlert[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //Get PreAlert
    public PreAlert getPreAlert(String languageId, String companyId, String partnerId, String partnerHouseAirwayBill,
                                String partnerMasterAirwayBill, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "prealert/" + partnerId)
                    .queryParam("companyId", companyId)
                    .queryParam("languageId", languageId)
                    .queryParam("partnerHouseAirwayBill", partnerHouseAirwayBill)
                    .queryParam("partnerMasterAirwayBill", partnerMasterAirwayBill);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<PreAlert> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, PreAlert.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //Create PreAlert
    public PreAlert[] createPreAlerts(List<PreAlert> addPreAlert, String loginUserID, String authToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("User-Agent", "RestTemplate");
        headers.add("Authorization", " Bearer " + authToken);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "prealert/post/list")
                .queryParam("loginUserID", loginUserID);
        HttpEntity<?> entity = new HttpEntity<>(addPreAlert, headers);
        ResponseEntity<PreAlert[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, PreAlert[].class);
        return result.getBody();
    }

    // Update PreAlert
    public PreAlert[] updatePreAlert(List<UpdatePreAlert> updatePreAlert, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Classic WMS's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updatePreAlert, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "prealert/update/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<PreAlert[]> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, PreAlert[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Delete PreAlert
    public boolean deletePreAlert(List<PreAlertDeleteInput> deleteInputList, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(deleteInputList, headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "prealert/delete/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find PreAlert
    public PreAlert[] findPreAlerts(FindPreAlert findPreAlert, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "prealert/findPrealert");
            HttpEntity<?> entity = new HttpEntity<>(findPreAlert, headers);
            ResponseEntity<PreAlert[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, PreAlert[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    /**
     * Mobile-App
     *
     * @param authToken
     * @return
     */
    public MobileApp[] getAllMobileApp(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/find/mobileapp");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<MobileApp[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, MobileApp[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find PreAlert
    public Console[] updateConsoleStatus(ConsoleStatus[] consoleStatus, String loginUserID, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "console/update/status")
                    .queryParam("loginUserID", loginUserID);
            HttpEntity<?> entity = new HttpEntity<>(consoleStatus, headers);
            ResponseEntity<Console[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Console[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //===============================================Unconsolidation===================================================
    // Get All Unconsolidation Details
    public Unconsolidation[] getAllUnconsolidations(String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "unconsolidation");
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<Unconsolidation[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, Unconsolidation[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Get Unconsolidation
    public Unconsolidation getUnconsolidation(String languageId, String companyId, String partnerId, String partnerHouseAirwayBill,
                                              String partnerMasterAirwayBill, String pieceId, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "unconsolidation/get")
                    .queryParam("languageId", languageId)
                    .queryParam("companyId", companyId)
                    .queryParam("partnerId", partnerId)
                    .queryParam("pieceId", pieceId)
                    .queryParam("partnerHouseAirwayBill", partnerHouseAirwayBill)
                    .queryParam("partnerMasterAirwayBill", partnerMasterAirwayBill);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<Unconsolidation> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.GET, entity, Unconsolidation.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Create Unconsolidation
    public Unconsolidation createUnconsolidation(AddUnconsolidation addUnconsolidation, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", " Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "unconsolidation/create")
                    .queryParam("loginUserID", loginUserID);
            HttpEntity<?> entity = new HttpEntity<>(addUnconsolidation, headers);
            ResponseEntity<Unconsolidation> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Unconsolidation.class);
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Update Unconsolidation
    public Unconsolidation updateUnconsolidation(UpdateUnconsolidation updateUnconsolidation, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "Classic WMS's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(updateUnconsolidation, headers);
            HttpClient client = HttpClients.createDefault();
            RestTemplate restTemplate = getRestTemplate();
            restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(client));
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "unconsolidation/update")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<Unconsolidation> result = restTemplate.exchange(builder.toUriString(), HttpMethod.PATCH, entity, Unconsolidation.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Delete Unconsolidations - list
    public boolean deleteUnconsolidations(List<UnconsolidationDeleteInput> deleteInputList, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "MNRClara's RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            HttpEntity<?> entity = new HttpEntity<>(deleteInputList, headers);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "unconsolidation/delete/list")
                    .queryParam("loginUserID", loginUserID);
            ResponseEntity<String> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, String.class);
            log.info("result : " + result);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Find Unconsolidations
    public Unconsolidation[] findUnconsolidations(FindUnconsolidation findUnconsolidation, String authToken) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "unconsolidation/find");
            HttpEntity<?> entity = new HttpEntity<>(findUnconsolidation, headers);
            ResponseEntity<Unconsolidation[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, Unconsolidation[].class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    //=====================================================Reports=====================================================
    // GET MobileDashboard - Console count
    public MobileDashboard getMobileDashboard(String languageId, String companyId, String partnerMasterAirwayBill, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "ClassicWMS RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder
                    .fromHttpUrl(getMidMileServiceUrl() + "reports/mobileDashboard/get")
                    .queryParam("languageId", languageId)
                    .queryParam("companyId", companyId)
                    .queryParam("partnerMasterAirwayBill", partnerMasterAirwayBill);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<MobileDashboard> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, MobileDashboard.class);
            log.info("result : " + result.getStatusCode());
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Generate Location Sheet
    public LocationSheetOutput[] generateLocationSheet(List<LocationSheetInput> sheetInputs, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "reports/locationSheet")
                    .queryParam("loginUserID", loginUserID);
            HttpEntity<?> entity = new HttpEntity<>(sheetInputs, headers);
            ResponseEntity<LocationSheetOutput[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, LocationSheetOutput[].class);
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    // Generate Console Tracking Report
    public ConsoleTrackingReportOutput[] generateConsoleTrackingReport(List<ConsoleTrackingReportInput> sheetInputs, String loginUserID, String authToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.add("User-Agent", "RestTemplate");
            headers.add("Authorization", "Bearer " + authToken);
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(getMidMileServiceUrl() + "reports/consoleTrackingReport")
                    .queryParam("loginUserID", loginUserID);
            HttpEntity<?> entity = new HttpEntity<>(sheetInputs, headers);
            ResponseEntity<ConsoleTrackingReportOutput[]> result = getRestTemplate().exchange(builder.toUriString(), HttpMethod.POST, entity, ConsoleTrackingReportOutput[].class);
            return result.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


}

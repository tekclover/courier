package com.courier.overc360.api.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Data
@Configuration
@PropertySource("classpath:application-messages.properties")
public class PropertiesConfig {

    @Value("${idmaster.oauth.credentials.client_id}")
    private String clientId;

    @Value("${idmaster.oauth.credentials.client_secret_key}")
    private String clientSecretKey;

    @Value("${idmaster.oauth.grant_type}")
    private String grantType;

    @Value("${idmaster.oauth.grant_type.username}")
    private String username;

    @Value("${idmaster.oauth.grant_type.password}")
    private String password;

    //-----------------------------------------------------------------------------------
    @Value("${transaction.oauth.access_token_url}")
    private String transactionAccessTokenUrl;

    @Value("${enterprise.oauth.access_token_url}")
    private String enterpriseAccessTokenUrl;

    @Value("${masters.oauth.access_token_url}")
    private String mastersAccessTokenUrl;

    @Value("${idmaster.oauth.access_token_url}")
    private String idmasterAccessTokenUrl;

    @Value("${spark.oauth.access_token_url}")
    private String sparkAccessTokenUrl;

    @Value("${connector.oauth.access_token_url}")
    private String connectorAccessTokenUrl;

    //-----------------------------------------------------------------------------------
    @Value("${api.transaction.service.url}")
    private String transactionServiceUrl;

    @Value("${api.enterprise.service.url}")
    private String enterpriseServiceUrl;

    @Value("${api.masters.service.url}")
    private String mastersServiceUrl;

    @Value("${api.idmaster.service.url}")
    private String idmasterServiceUrl;

    @Value("${api.spark.service.url}")
    private String sparkServiceUrl;

    @Value("${api.connector.service.url}")
    private String connectorServiceUrl;
    //-----------------------------------------------------------------------------------

    @Value("${file.upload-dir}")
    private String fileUploadDir;

    @Value("${file.moveto-dir}")
    private String fileMoveToDir;

    /*
     * CSV Filenames
     * ------------------
     * file.bomheader=bomheader.csv
        file.bomline=bomline.csv
        file.binlocation=binlocation.csv
        file.businesspartner=businesspartner.csv
        file.handlingequipment=handlingequipment.csv
        file.inventory=inventory.csv
        file.imbasicdata1.110=imbasicdata1_110.csv
        file.imbasicdata1.111=imbasicdata1.111.csv
        file.imbusinesspartner_110=imbusinesspartner_110.csv
        file.imbusinesspartner_111=imbusinesspartner_111.csv
     */
    @Value("${file.bomheader}")
    private String bomheaderFileName;

    @Value("${file.bomline}")
    private String bomlineFileName;

    @Value("${file.binlocation}")
    private String binlocationFileName;

    @Value("${file.businesspartner}")
    private String businesspartnerFileName;

    @Value("${file.handlingequipment}")
    private String handlingequipmentFileName;

    @Value("${file.inventory}")
    private String inventoryFileName;

    @Value("${file.imbasicdata1}")
    private String imbasicdata1FileName;

//	@Value("${file.imbasicdata1.111}")
//	private String imbasicdata1111FileName;

    @Value("${file.impartner}")
    private String impartnerFileName;

//	@Value("${file.impartner_111}")
//	private String impartner111FileName;

    @Value("${file.imbasicdata1patch}")
    private String imbasicdata1PatchFileName;

    @Value("${file.impartnerpatch}")
    private String impartnerPatchFileName;

    @Value("${file.binlocationpatch}")
    private String binLocationPatchFileName;

    @Value("${file.inventorypatch}")
    private String inventoryPatchFileName;

    /*-----------------Report-Path------------------------*/
    @Value("${report.path}")
    private String reportPath;

    @Value("${report.path.download.inventory}")
    private String inventoryCsvDownloadPath;

    /*-----------------Document Upload------------------------*/

    @Value("${doc.storage.base.path}")
    private String docStorageBasePath;
    @Value("${doc.storage.document.path}")
    private String docStorageDocumentPath;

//--------------EMAIL-------------------------------------------------------------

    @Value("${email.from.address}")
    private String emailFromAddress;

    //-------------ErrorLog-----------------------------------------------------------------
    @Value("${errorlog.folder.name}")
    private String errorlogFolderName;

    @Value("${file.errorlog}")
    private String errorlogFileName;

}

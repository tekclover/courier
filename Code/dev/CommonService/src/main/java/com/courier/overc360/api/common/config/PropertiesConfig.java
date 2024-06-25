package com.courier.overc360.api.common.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Data
@Configuration
@PropertySource("classpath:application-messages.properties")
public class PropertiesConfig {

//--------------FILE UPLOAD-------------------------------------------------------------

    @Value("${file.upload-dir}")
    private String fileUploadDir;

    @Value("${doc.storage.base.path}")
    private String docStorageBasePath;

    @Value("${doc.storage.document.path}")
    private String docStorageDocumentPath;

}
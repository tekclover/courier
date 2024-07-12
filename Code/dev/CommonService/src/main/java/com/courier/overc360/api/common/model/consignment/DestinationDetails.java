package com.courier.overc360.api.common.model.consignment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table("tbldestinationdetails")
public class DestinationDetails {

    @Id
    @PrimaryKey
    private DestinationDetailsCompositeKey key;

    private String destinationDetails;
    private String addressHubCode;
    private String accountId;
    private String email;
    private String companyName;
    private String name;
    private String phone;
    private String alternatePhone;
    private String addressLine1;
    private String addressLine2;
    private String pinCode;
    private String district;
    private String city;
    private String state;
    private String country;
    private String latitude;
    private String longitude;
    private String createdBy;
    private Date createdOn = new Date();
    private String updatedBy;
    private Date updatedOn;
}
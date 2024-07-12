package com.courier.overc360.api.common.model.consignment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyClass;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyColumn;

import javax.persistence.Column;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@PrimaryKeyClass
public class DestinationDetailsCompositeKey {

    @PrimaryKeyColumn(name = "destinationDetailId", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
    @Column(name = "destinationDetailId")
    private Long destinationDetailId;

    @PrimaryKeyColumn(name = "consignmentId", ordinal = 1, type = PrimaryKeyType.PARTITIONED)
    private Long consignmentId;
}
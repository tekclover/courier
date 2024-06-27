import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HubComponent } from './hub/hub.component';
import { HubNewComponent } from './hub/hub-new/hub-new.component';
import { DistrictMappingComponent } from './district-mapping/district-mapping.component';
import { DistrictMappingNewComponent } from './district-mapping/district-mapping-new/district-mapping-new.component';
import { ProvinceMappingComponent } from './province-mapping/province-mapping.component';
import { ProvinceMappingNewComponent } from './province-mapping/province-mapping-new/province-mapping-new.component';
import { CountryMappingComponent } from './country-mapping/country-mapping.component';
import { CountryMappingNewComponent } from './country-mapping/country-mapping-new/country-mapping-new.component';
import { CityMappingComponent } from './city-mapping/city-mapping.component';
import { CityMappingNewComponent } from './city-mapping/city-mapping-new/city-mapping-new.component';
import { HubPartnerAssignmentComponent } from './hub-partner-assignment/hub-partner-assignment.component';
import { HubPartnerAssignmentNewComponent } from './hub-partner-assignment/hub-partner-assignment-new/hub-partner-assignment-new.component';
import { RateComponent } from './rate/rate.component';
import { RateNewComponent } from './rate/rate-new/rate-new.component';


@NgModule({
  declarations: [
    HubComponent,
    HubNewComponent,
    DistrictMappingComponent,
    DistrictMappingNewComponent,
    ProvinceMappingComponent,
    ProvinceMappingNewComponent,
    CountryMappingComponent,
    CountryMappingNewComponent,
    CityMappingComponent,
    CityMappingNewComponent,
    HubPartnerAssignmentComponent,
    HubPartnerAssignmentNewComponent,
    RateComponent,
    RateNewComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }

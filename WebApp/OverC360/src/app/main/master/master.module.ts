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


@NgModule({
  declarations: [
    HubComponent,
    HubNewComponent,
    DistrictMappingComponent,
    DistrictMappingNewComponent,
    ProvinceMappingComponent,
    ProvinceMappingNewComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }

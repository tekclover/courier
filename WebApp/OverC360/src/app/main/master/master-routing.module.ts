import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubNewComponent } from './hub/hub-new/hub-new.component';
import { HubComponent } from './hub/hub.component';
import { CountryMappingNewComponent } from './country-mapping/country-mapping-new/country-mapping-new.component';
import { CountryMappingComponent } from './country-mapping/country-mapping.component';
import { DistrictMappingNewComponent } from './district-mapping/district-mapping-new/district-mapping-new.component';
import { DistrictMappingComponent } from './district-mapping/district-mapping.component';
import { ProvinceMappingNewComponent } from './province-mapping/province-mapping-new/province-mapping-new.component';
import { ProvinceMappingComponent } from './province-mapping/province-mapping.component';
import { CityMappingNewComponent } from './city-mapping/city-mapping-new/city-mapping-new.component';
import { CityMappingComponent } from './city-mapping/city-mapping.component';
import { HubPartnerAssignmentNewComponent } from './hub-partner-assignment/hub-partner-assignment-new/hub-partner-assignment-new.component';
import { HubPartnerAssignmentComponent } from './hub-partner-assignment/hub-partner-assignment.component';
import { RateComponent } from './rate/rate.component';
import { RateNewComponent } from './rate/rate-new/rate-new.component';

const routes: Routes = [
  { path: 'hub', component: HubComponent, data: { title: 'Master', module: 'Hub' } },
  { path: 'hub-new/:code', component: HubNewComponent, data: { title: 'Master', module: 'Hub - Add New' } },

  { path: 'rate', component: RateComponent, data: { title: 'Master', module: 'Rate' } },
  { path: 'rate-new/:code', component: RateNewComponent, data: { title: 'Master', module: 'Rate - Add New' } },

  { path: 'districtMapping', component: DistrictMappingComponent, data: { title: 'Master', module: 'DistrictMapping' } },
  { path: 'districtMapping-new/:code', component: DistrictMappingNewComponent, data: { title: 'Master', module: 'DistrictMapping - Add New' } },

  { path: 'provinceMapping', component: ProvinceMappingComponent, data: { title: 'Master', module: 'ProvinceMapping' } },
  { path: 'provinceMapping-new/:code', component: ProvinceMappingNewComponent, data: { title: 'Master', module: 'ProvinceMapping - Add New' } },

  { path: 'countryMapping', component: CountryMappingComponent, data: { title: 'Master', module: 'CountryMapping' } },
  { path: 'countryMapping-new/:code', component: CountryMappingNewComponent, data: { title: 'Master', module: 'CountryMapping - Add New' } },

    {path:'countryMapping',component: CountryMappingComponent, data: { title: 'Master', module: 'CountryMapping' } },
    {path:'countryMapping-new/:code',component: CountryMappingNewComponent,data: { title: 'Master', module: 'CountryMapping - Add New' } },
  
    {path:'cityMapping',component: CityMappingComponent, data: { title: 'Master', module: 'CityMapping' } },
    {path:'cityMapping-new/:code',component: CityMappingNewComponent,data: { title: 'Master', module: 'CityMapping - Add New' } },
  
    {path:'hubPartnerAssignment',component: HubPartnerAssignmentComponent, data: { title: 'Master', module: 'HubPartnerAssignment' } },
    {path:'hubPartnerAssignment-new/:code',component: HubPartnerAssignmentNewComponent,data: { title: 'Master', module: 'HubPartnerAssignment - Add New' } },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

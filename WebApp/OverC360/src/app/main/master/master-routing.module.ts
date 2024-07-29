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
import { CustomerComponent } from './customer/customer.component';
import { CustomerNewComponent } from './customer/customer-new/customer-new.component';
import { ConsignorNewComponent } from './consignor/consignor-new/consignor-new.component';
import { ConsignorComponent } from './consignor/consignor.component';
import { CurrencyExchangeRateNewComponent } from './currency-exchange-rate/currency-exchange-rate-new/currency-exchange-rate-new.component';
import { CurrencyExchangeRateComponent } from './currency-exchange-rate/currency-exchange-rate.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { EventComponent } from './event/event.component';
import { HsCodeNewComponent } from './hs-code/hs-code-new/hs-code-new.component';
import { HsCodeComponent } from './hs-code/hs-code.component';
import { IataNewComponent } from './iata/iata-new/iata-new.component';
import { IataComponent } from './iata/iata.component';
import { NumberrangeNewComponent } from './numberrange/numberrange-new/numberrange-new.component';
import { NumberrangeComponent } from './numberrange/numberrange.component';
import { OpstatusNewComponent } from './opstatus/opstatus-new/opstatus-new.component';
import { OpstatusComponent } from './opstatus/opstatus.component';
import { SpecialApprovalNewComponent } from './special-approval/special-approval-new/special-approval-new.component';
import { SpecialApprovalComponent } from './special-approval/special-approval.component';
import { AirportCodeComponent } from './airport-code/airport-code.component';
import { AirportCodeNewComponent } from './airport-code/airport-code-new/airport-code-new.component';
import { StatusEventComponent } from './status-event/status-event.component';
import { StatusEventNewComponent } from './status-event/status-event-new/status-event-new.component';
import { RouteComponent } from './route/route.component';
import { RouteNewComponent } from './route/route-new/route-new.component';
import { BillModeComponent } from './bill-mode/bill-mode.component';
import { BillModeNewComponent } from './bill-mode/bill-mode-new/bill-mode-new.component';

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

  { path: 'cityMapping', component: CityMappingComponent, data: { title: 'Master', module: 'CityMapping' } },
  { path: 'cityMapping-new/:code', component: CityMappingNewComponent, data: { title: 'Master', module: 'CityMapping - Add New' } },

  { path: 'hubPartnerAssignment', component: HubPartnerAssignmentComponent, data: { title: 'Master', module: 'HubPartnerAssignment' } },
  { path: 'hubPartnerAssignment-new/:code', component: HubPartnerAssignmentNewComponent, data: { title: 'Master', module: 'HubPartnerAssignment - Add New' } },

  { path: 'customer', component: CustomerComponent, data: { title: 'Setup', module: 'Customer' } },
  { path: 'customer-new/:code', component: CustomerNewComponent, data: { title: 'Setup', module: 'Customer - Add New' } },

  
  { path: 'consignor', component: ConsignorComponent, data: { title: 'Setup', module: 'Consignor' } },
  { path: 'consignor-new/:code', component: ConsignorNewComponent, data: { title: 'Setup', module: 'Consignor - Add New' } },

  { path: 'hsCode', component: HsCodeComponent, data: { title: 'Setup', module: 'HS Code' } },
  { path: 'hsCode-new/:code', component: HsCodeNewComponent, data: { title: 'Setup', module: 'HS Code - Add New' } },

  { path: 'opstatus', component: OpstatusComponent, data: { title: 'Setup', module: 'Opstatus' } },
  { path: 'opstatus-new/:code', component: OpstatusNewComponent, data: { title: 'Setup', module: 'Opstatus - Add New' } },

  { path: 'numberrange', component: NumberrangeComponent, data: { title: 'Setup', module: 'NumberRange' } },
  { path: 'numberrange-new/:code', component: NumberrangeNewComponent, data: { title: 'Setup', module: 'NumberRange - Add New' } },

  { path: 'specialApproval', component: SpecialApprovalComponent, data: { title: 'Setup', module: 'Special Approval' } },
  { path: 'specialApproval-new/:code', component: SpecialApprovalNewComponent, data: { title: 'Setup', module: 'Special Approval - Add New' } },


  { path: 'event', component: EventComponent, data: { title: 'Master', module: 'Event' } },
  { path: 'event-new/:code', component: EventNewComponent, data: { title: 'Master', module: 'Event - Add New' } },

  {path:'currencyExchangeRate',component: CurrencyExchangeRateComponent, data: { title: 'Master', module: 'CurrencyExchangeRate' } },
  {path:'currencyExchangeRate-new/:code',component: CurrencyExchangeRateNewComponent,data: { title: 'Master', module: 'CurrencyExchangeRate - Add New' } },

  { path: 'iata', component: IataComponent, data: { title: 'Master', module: 'Iata' } },
  { path: 'iata-new/:code', component: IataNewComponent, data: { title: 'Master', module: 'Iata - Add New' } },
  
  { path: 'airportCode', component: AirportCodeComponent, data: { title: 'Master', module: 'AirportCode' } },
  { path: 'airportCode-new/:code', component: AirportCodeNewComponent, data: { title: 'Master', module: 'AirportCode - Add New' } },
    
  { path: 'statusevent', component: StatusEventComponent, data: { title: 'Master', module: 'Status/Event' } },
  { path: 'statusevent-new/:code', component: StatusEventNewComponent, data: { title: 'Master', module: 'Status/Event - Add New' } },
  
  { path: 'route', component: RouteComponent, data: { title: 'Master', module: 'Route' } },
  { path: 'route-new/:code', component: RouteNewComponent, data: { title: 'Master', module: 'Route - Add New' } },
  
  { path: 'billMode', component: BillModeComponent, data: { title: 'Master', module: 'Bill Mode' } },
  { path: 'billMode-new/:code', component: BillModeNewComponent, data: { title: 'Master', module: 'Bill Mode - Add New' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

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
import { EventNewComponent } from './event/event-new/event-new.component';
import { EventComponent } from './event/event.component';
import { HsCodeNewComponent } from './hs-code/hs-code-new/hs-code-new.component';
import { HsCodeComponent } from './hs-code/hs-code.component';
import { NumberrangeNewComponent } from './numberrange/numberrange-new/numberrange-new.component';
import { NumberrangeComponent } from './numberrange/numberrange.component';
import { OpstatusNewComponent } from './opstatus/opstatus-new/opstatus-new.component';
import { OpstatusComponent } from './opstatus/opstatus.component';
import { SpecialApprovalNewComponent } from './special-approval/special-approval-new/special-approval-new.component';
import { SpecialApprovalComponent } from './special-approval/special-approval.component';
import { CurrencyExchangeRateNewComponent } from './currency-exchange-rate/currency-exchange-rate-new/currency-exchange-rate-new.component';
import { CurrencyExchangeRateComponent } from './currency-exchange-rate/currency-exchange-rate.component';
import { IataNewComponent } from './iata/iata-new/iata-new.component';
import { IataComponent } from './iata/iata.component';
import { ConsignorNewComponent } from './consignor/consignor-new/consignor-new.component';
import { ConsignorComponent } from './consignor/consignor.component';
import { CustomerNewComponent } from './customer/customer-new/customer-new.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerValueComponent } from './customer/customer-value/customer-value.component';
import { AirportCodeComponent } from './airport-code/airport-code.component';
import { AirportCodeNewComponent } from './airport-code/airport-code-new/airport-code-new.component';
import { ConsignorValueComponent } from './consignor/consignor-value/consignor-value.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleNewComponent } from './vehicle/vehicle-new/vehicle-new.component';
import { RouteComponent } from './route/route.component';
import { RouteNewComponent } from './route/route-new/route-new.component';
import { BillModeComponent } from './bill-mode/bill-mode.component';
import { BillModeNewComponent } from './bill-mode/bill-mode-new/bill-mode-new.component';
import { AppUserComponent } from './app-user/app-user.component';
import { AppUserNewComponent } from './app-user/app-user-new/app-user-new.component';
import { DriverRouteAssignmentComponent } from './driver-route-assignment/driver-route-assignment.component';
import { DriverRouteAssignmentNewComponent } from './driver-route-assignment/driver-route-assignment-new/driver-route-assignment-new.component';


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
    RateNewComponent,
    HsCodeComponent,
    HsCodeNewComponent,
    OpstatusComponent,
    OpstatusNewComponent,
    NumberrangeComponent,
    NumberrangeNewComponent,
    SpecialApprovalComponent,
    SpecialApprovalNewComponent,
    EventComponent,
    EventNewComponent,
    CurrencyExchangeRateComponent,
    CurrencyExchangeRateNewComponent,
    IataComponent,
    IataNewComponent,
    ConsignorComponent,
    ConsignorNewComponent,
    CustomerComponent,
    CustomerNewComponent,
    CustomerValueComponent,
    AirportCodeComponent,
    AirportCodeNewComponent,
    ConsignorValueComponent,
    RouteComponent,
    RouteNewComponent,
    BillModeComponent,
    BillModeNewComponent,
    VehicleComponent,
    VehicleNewComponent,
    AppUserComponent,
    AppUserNewComponent,
    DriverRouteAssignmentComponent,
    DriverRouteAssignmentNewComponent,


  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }

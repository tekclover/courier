import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdMastersRoutingModule } from './id-masters-routing.module';
import { CompanyComponent } from './company/company.component';
import { SharedModule } from '../../shared/shared.module';
import { LanguageComponent } from './language/language.component';
import { LanguageNewComponent } from './language/language-new/language-new.component';
import { ConsignmentTypeComponent } from './consignment-type/consignment-type.component';
import { ConsignmentTypeNewComponent } from './consignment-type/consignment-type-new/consignment-type-new.component';
import { MenuComponent } from './menu/menu.component';
import { MenuNewComponent } from './menu/menu-new/menu-new.component';
import { CurrencyComponent } from './currency/currency.component';
import { StatusComponent } from './status/status.component';
import { StatusNewComponent } from './status/status-new/status-new.component';
import { CurrencyNewComponent } from './currency/currency-new/currency-new.component';
import { CompanyNewComponent } from './company/company-new/company-new.component';
import { SubProductComponent } from './sub-product/sub-product.component';
import { SubProductNewComponent } from './sub-product/sub-product-new/sub-product-new.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { LoadTypeComponent } from './load-type/load-type.component';
import { ServiceTypeNewComponent } from './service-type/service-type-new/service-type-new.component';
import { LoadTypeNewComponent } from './load-type/load-type-new/load-type-new.component';
import { ModuleComponent } from './module/module.component';
import { ModuleNewComponent } from './module/module-new/module-new.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { ProvinceComponent } from './province/province.component';
import { ProvinceNewComponent } from './province/province-new/province-new.component';
import { CityComponent } from './city/city.component';
import { DistrictComponent } from './district/district.component';
import { CityNewComponent } from './city/city-new/city-new.component';
import { DistrictNewComponent } from './district/district-new/district-new.component';
import { ConsignorComponent } from './consignor/consignor.component';
import { ConsignorNewComponent } from './consignor/consignor-new/consignor-new.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerNewComponent } from './customer/customer-new/customer-new.component';
import { ProductComponent } from './product/product.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { HsCodeComponent } from './hs-code/hs-code.component';
import { HsCodeNewComponent } from './hs-code/hs-code-new/hs-code-new.component';
import { OpstatusComponent } from './opstatus/opstatus.component';
import { OpstatusNewComponent } from './opstatus/opstatus-new/opstatus-new.component';
import { NumberrangeComponent } from './numberrange/numberrange.component';
import { NumberrangeNewComponent } from './numberrange/numberrange-new/numberrange-new.component';
import { SpecialApprovalComponent } from './special-approval/special-approval.component';
import { SpecialApprovalNewComponent } from './special-approval/special-approval-new/special-approval-new.component';
import { EventComponent } from './event/event.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationNewComponent } from './notification/notification-new/notification-new.component';
import { CountryComponent } from './country/country.component';
import { CountryNewComponent } from './country/country-new/country-new.component';
import { CurrencyExchangeRateComponent } from './currency-exchange-rate/currency-exchange-rate.component';
import { CurrencyExchangeRateNewComponent } from './currency-exchange-rate/currency-exchange-rate-new/currency-exchange-rate-new.component';
import { IataComponent } from './iata/iata.component';
import { UsersComponent } from './users/users.component';
import { IataNewComponent } from './iata/iata-new/iata-new.component';
import { UsersNewComponent } from './users/users-new/users-new.component';
import { RateParameterComponent } from './rate-parameter/rate-parameter.component';
import { RateParameterNewComponent } from './rate-parameter/rate-parameter-new/rate-parameter-new.component';
import { UserRoleNewComponent } from './user-role/user-role-new/user-role-new.component';


@NgModule({
  declarations: [
    CompanyComponent,
    LanguageComponent,
    LanguageNewComponent,
    ConsignmentTypeComponent,
    ConsignmentTypeNewComponent,
    MenuComponent,
    MenuNewComponent,
    CurrencyComponent,
    StatusComponent,
    StatusNewComponent,
    CurrencyNewComponent,
    CompanyNewComponent,
    SubProductComponent,
    SubProductNewComponent,
    ServiceTypeComponent,
    LoadTypeComponent,
    ServiceTypeNewComponent,
    LoadTypeNewComponent,
    ModuleComponent,
    ModuleNewComponent,
    UserRoleComponent,
    ProvinceComponent,
    ProvinceNewComponent,
    CityComponent,
    DistrictComponent,
    CityNewComponent,
    DistrictNewComponent,
    ConsignorComponent,
    ConsignorNewComponent,
    CustomerComponent,
    CustomerNewComponent,
    ProductComponent,
    ProductNewComponent,
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
    NotificationComponent,
    NotificationNewComponent,
    CountryComponent,
    CountryNewComponent,
    CurrencyExchangeRateComponent,
    CurrencyExchangeRateNewComponent,
    IataComponent,
    UsersComponent,
    IataNewComponent,
    UsersNewComponent,
    RateParameterComponent,
    RateParameterNewComponent,
    UserRoleNewComponent,
  ],
  imports: [
    CommonModule,
    IdMastersRoutingModule,
    SharedModule
  ]
})
export class IdMastersModule { }

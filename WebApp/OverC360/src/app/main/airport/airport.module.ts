import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirportRoutingModule } from './airport-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PreAlertManifestComponent } from './pre-alert-manifest/pre-alert-manifest.component';
import { ConsoleComponent } from './console/console.component';
import { BondedManifestComponent } from './bonded-manifest/bonded-manifest.component';


@NgModule({
  declarations: [
    PreAlertManifestComponent,
    ConsoleComponent,
    BondedManifestComponent
  ],
  imports: [
    CommonModule,
    AirportRoutingModule,
    SharedModule
  ]
})
export class AirportModule { }

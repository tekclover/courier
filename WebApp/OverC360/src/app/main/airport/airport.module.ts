import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirportRoutingModule } from './airport-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PreAlertManifestComponent } from './pre-alert-manifest/pre-alert-manifest.component';
import { ConsoleComponent } from './console/console.component';
import { BondedManifestComponent } from './bonded-manifest/bonded-manifest.component';
import { CcrComponent } from './ccr/ccr.component';
import { PreAlertNewComponent } from './pre-alert-manifest/pre-alert-new/pre-alert-new.component';
import { BondedManifestNewComponent } from './bonded-manifest/bonded-manifest-new/bonded-manifest-new.component';
import { CcrNewComponent } from './ccr/ccr-new/ccr-new.component';


@NgModule({
  declarations: [
    PreAlertManifestComponent,
    ConsoleComponent,
    BondedManifestComponent,
    CcrComponent,
    PreAlertNewComponent,
    BondedManifestNewComponent,
    CcrNewComponent
  ],
  imports: [
    CommonModule,
    AirportRoutingModule,
    SharedModule
  ]
})
export class AirportModule { }

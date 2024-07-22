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
import { ConsoleNewComponent } from './console/console-new/console-new.component';
import { ConsoleEditComponent } from './console/console-edit/console-edit.component';
import { ConsoleTransferComponent } from './console/console-transfer/console-transfer.component';
import { ConsoleEditpopupComponent } from './console/console-editpopup/console-editpopup.component';
import { ConsoleBulkComponent } from './console/console-bulk/console-bulk.component';
import { CcrEditComponent } from './ccr/ccr-edit/ccr-edit.component';
import { CcrEditpopupComponent } from './ccr/ccr-editpopup/ccr-editpopup.component';
import { PreAlertManifestIndicatorComponent } from './pre-alert-manifest/pre-alert-manifest-indicator/pre-alert-manifest-indicator.component';
import { PreAlertUpdateComponent } from './pre-alert-manifest/pre-alert-update/pre-alert-update.component';
import { PreAlertEditpopupComponent } from './pre-alert-manifest/pre-alert-editpopup/pre-alert-editpopup.component';
import { HubCodePoupupComponent } from './console/console-edit/hub-code-poupup/hub-code-poupup.component';
import { PreAlertBulkComponent } from './pre-alert-manifest/pre-alert-bulk/pre-alert-bulk.component';


@NgModule({
  declarations: [
    PreAlertManifestComponent,
    ConsoleComponent,
    BondedManifestComponent,
    CcrComponent,
    PreAlertNewComponent,
    BondedManifestNewComponent,
    CcrNewComponent,    
    ConsoleNewComponent, ConsoleEditComponent, ConsoleTransferComponent, ConsoleEditpopupComponent, ConsoleBulkComponent, CcrEditComponent, CcrEditpopupComponent, PreAlertManifestIndicatorComponent, PreAlertUpdateComponent, PreAlertEditpopupComponent, HubCodePoupupComponent, PreAlertBulkComponent


  ],
  imports: [
    CommonModule,
    AirportRoutingModule,
    SharedModule
  ]
})
export class AirportModule { }

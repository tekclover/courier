import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreAlertManifestComponent } from './pre-alert-manifest/pre-alert-manifest.component';
import { ConsoleComponent } from './console/console.component';
import { BondedManifestComponent } from './bonded-manifest/bonded-manifest.component';
import { CcrComponent } from './ccr/ccr.component';
import { PreAlertNewComponent } from './pre-alert-manifest/pre-alert-new/pre-alert-new.component';
import { BondedManifestNewComponent } from './bonded-manifest/bonded-manifest-new/bonded-manifest-new.component';
import { CcrNewComponent } from './ccr/ccr-new/ccr-new.component';
import { ConsoleNewComponent } from './console/console-new/console-new.component';
import { ConsoleEditComponent } from './console/console-edit/console-edit.component';
import { CcrEditComponent } from './ccr/ccr-edit/ccr-edit.component';
import { PreAlertManifestIndicatorComponent } from './pre-alert-manifest/pre-alert-manifest-indicator/pre-alert-manifest-indicator.component';
import { PreAlertUpdateComponent } from './pre-alert-manifest/pre-alert-update/pre-alert-update.component';
import { InventoryScanningReportComponent } from './inventory-scanning-report/inventory-scanning-report.component';

const routes: Routes = [
  {path:'preAlertManifest',component: PreAlertManifestComponent, data: { title: 'Mid-Mile', module: 'Pre-Alert Manifest' } },
  {path:'preAlertManifest-new/:code',component: PreAlertNewComponent, data: { title: 'Mid-Mile', module: 'Pre-Alert Manifest New' } },
  {path:'preAlertManifest-indicator/:code',component: PreAlertManifestIndicatorComponent, data: { title: 'Mid-Mile', module: 'Pre-Alert Manifest Indicator' } },
  {path:'preAlertManifest-update/:code',component: PreAlertUpdateComponent, data: { title: 'Mid-Mile', module: 'Pre-Alert Manifest Update' } },

  
  
  {path:'console',component: ConsoleComponent, data: { title: 'Mid-Mile', module: 'Console' } },
  {path:'console-new/:code',component: ConsoleNewComponent, data: { title: 'Mid-Mile', module: 'Console' } },
  {path:'console-edit/:code',component: ConsoleEditComponent, data: { title: 'Mid-Mile', module: 'Console' } },

  {path:'bondedManifest',component: BondedManifestComponent, data: { title: 'Mid-Mile', module: 'Bonded Manifest' } },
  {path:'bondedManifest-new/:code',component: BondedManifestNewComponent, data: { title: 'Mid-Mile', module: 'Bonded Manifest New' } },

  {path:'ccr',component: CcrComponent, data: { title: 'Mid-Mile', module: 'CCR' } },
  {path:'ccr-new/:code',component: CcrNewComponent, data: { title: 'Mid-Mile', module: 'CCR New' } },
  {path:'ccr-edit/:code',component: CcrEditComponent, data: { title: 'Mid-Mile', module: 'CCR New' } },

  {path:'inventory-scanning-report',component: InventoryScanningReportComponent, data: { title: 'Mid-Mile', module: 'Inventory Scanning Report' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }

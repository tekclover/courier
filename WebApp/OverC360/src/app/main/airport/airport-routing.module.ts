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

const routes: Routes = [
  {path:'preAlertManifest',component: PreAlertManifestComponent, data: { title: 'Mid-Mile', module: 'Pre-Alert Manifest' } },
  {path:'preAlertManifest-new/:code',component: PreAlertNewComponent, data: { title: 'Mid-Mile', module: 'Pre-Alert Manifest New' } },
  
  
  {path:'console',component: ConsoleComponent, data: { title: 'Mid-Mile', module: 'Console' } },
  {path:'console-new/:code',component: ConsoleNewComponent, data: { title: 'Mid-Mile', module: 'Console' } },
  {path:'console-edit/:code',component: ConsoleEditComponent, data: { title: 'Mid-Mile', module: 'Console' } },

  {path:'bondedManifest',component: BondedManifestComponent, data: { title: 'Mid-Mile', module: 'Bonded Manifest' } },
  {path:'bondedManifest-new/:code',component: BondedManifestNewComponent, data: { title: 'Mid-Mile', module: 'Bonded Manifest New' } },

  {path:'ccr',component: CcrComponent, data: { title: 'Mid-Mile', module: 'CCR' } },
  {path:'ccr-new/:code',component: CcrNewComponent, data: { title: 'Mid-Mile', module: 'CCR New' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }

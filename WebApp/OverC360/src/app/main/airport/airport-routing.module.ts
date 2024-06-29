import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreAlertManifestComponent } from './pre-alert-manifest/pre-alert-manifest.component';
import { ConsoleComponent } from './console/console.component';
import { BondedManifestComponent } from './bonded-manifest/bonded-manifest.component';
import { CcrComponent } from './ccr/ccr.component';

const routes: Routes = [
  {path:'preAlertManifest',component: PreAlertManifestComponent, data: { title: 'Airport Hub', module: 'Manifest' } },
  {path:'console',component: ConsoleComponent, data: { title: 'Airport Hub', module: 'Cosnole' } },
  {path:'bondedManifest',component: BondedManifestComponent, data: { title: 'Airport Hub', module: 'Bonded Manifest' } },
  {path:'ccr',component: CcrComponent, data: { title: 'Airport Hub', module: 'CCR' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }

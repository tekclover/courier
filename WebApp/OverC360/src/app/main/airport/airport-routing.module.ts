import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreAlertManifestComponent } from './pre-alert-manifest/pre-alert-manifest.component';

const routes: Routes = [
  {path:'preAlertManifest',component: PreAlertManifestComponent, data: { title: 'Airport Hub', module: 'Manifest' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }

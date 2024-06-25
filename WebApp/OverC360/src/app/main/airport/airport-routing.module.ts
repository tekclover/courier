import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManifestComponent } from './manifest/manifest.component';

const routes: Routes = [
  {path:'manifest',component: ManifestComponent, data: { title: 'Airport Hub', module: 'Manifest' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }

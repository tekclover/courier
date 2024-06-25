import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubNewComponent } from './hub/hub-new/hub-new.component';
import { HubComponent } from './hub/hub.component';

const routes: Routes = [
  { path: 'hub', component: HubComponent, data: { title: 'Master', module: 'Hub' } },
  { path: 'hub-new/:code', component: HubNewComponent, data: { title: 'Master', module: 'Hub - Add New' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsignmentComponent } from './consignment/consignment.component';
import { ConsignmentNewComponent } from './consignment/consignment-new/consignment-new.component';

const routes: Routes = [
  {path:'consignment',component: ConsignmentComponent, data: { title: 'Operation', module: 'Consignment' } },
  {path:'consignment-new',component: ConsignmentNewComponent, data: { title: 'Operation', module: 'Consignment' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ConsignmentComponent } from './consignment/consignment.component';
import { ConsignmentNewComponent } from './consignment/consignment-new/consignment-new.component';


@NgModule({
  declarations: [
    ConsignmentComponent,
    ConsignmentNewComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    SharedModule
  ]
})
export class OperationModule { }

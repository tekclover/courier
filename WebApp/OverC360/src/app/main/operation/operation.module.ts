import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ConsignmentComponent } from './consignment/consignment.component';
import { ConsignmentNewComponent } from './consignment/consignment-new/consignment-new.component';
import { PieceDetailsComponent } from './consignment/consignment-new/piece-details/piece-details.component';
import { DimensionComponent } from './consignment/consignment-new/dimension/dimension.component';


@NgModule({
  declarations: [
    ConsignmentComponent,
    ConsignmentNewComponent,
    PieceDetailsComponent,
    DimensionComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    SharedModule
  ]
})
export class OperationModule { }

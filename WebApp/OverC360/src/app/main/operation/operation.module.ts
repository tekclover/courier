import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ConsignmentComponent } from './consignment/consignment.component';
import { ConsignmentNewComponent } from './consignment/consignment-new/consignment-new.component';
import { ItemDetailsComponent } from './consignment/consignment-new/item-details/item-details.component';
import { DimensionComponent } from './consignment/consignment-new/dimension/dimension.component';
import { ImageUploadComponent } from './consignment/consignment-new/image-upload/image-upload.component';


@NgModule({
  declarations: [
    ConsignmentComponent,
    ConsignmentNewComponent,
    ItemDetailsComponent,
    DimensionComponent,
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    SharedModule
  ]
})
export class OperationModule { }

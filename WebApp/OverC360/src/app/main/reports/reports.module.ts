import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ConsoleTrackingComponent } from './console-tracking/console-tracking.component';
import { InventoryScanningComponent } from './inventory-scanning/inventory-scanning.component';


@NgModule({
  declarations: [
    ConsoleTrackingComponent,
    InventoryScanningComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }

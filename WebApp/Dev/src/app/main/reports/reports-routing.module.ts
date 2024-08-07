import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleTrackingComponent } from './console-tracking/console-tracking.component';
import { InventoryScanningComponent } from './inventory-scanning/inventory-scanning.component';

const routes: Routes = [
  { path: 'consoleTracking', component: ConsoleTrackingComponent, data: { title: 'Reports', module: 'Console Tracking Report' } },
  { path: 'inventoryScanning', component: InventoryScanningComponent, data: { title: 'Reports', module: 'Inventory Scanning Report' } },
  { path: 'inventoryScanning1', component: InventoryScanningComponent, data: { title: 'Reports', module: 'Inventory Scanning Report' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

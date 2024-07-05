import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { StepperModule } from 'primeng/stepper';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PickListModule } from 'primeng/picklist';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';
import { ChipsModule } from 'primeng/chips';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputIconModule,
    IconFieldModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    StepperModule,
    ToggleButtonModule,
    MenuModule,
    PaginatorModule,
    ToastModule,
    KeyFilterModule,
    PickListModule,
    CardModule,
    PasswordModule,
    TabViewModule,
    ChipsModule,
    OverlayPanelModule,
    FileUploadModule ,
    MultiSelectModule
  ], 
  exports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputIconModule,
    IconFieldModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    StepperModule,
    ToggleButtonModule,
    MenuModule,
    PaginatorModule,
    ToastModule,
    KeyFilterModule,
    PickListModule,
    CardModule,
    PasswordModule,
    TabViewModule,
    ChipsModule,
    OverlayPanelModule,
    FileUploadModule ,
    MultiSelectModule
  ]
})
export class PrimengModule { }

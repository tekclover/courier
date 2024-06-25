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
    PasswordModule
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
    PasswordModule
  ]
})
export class PrimengModule { }

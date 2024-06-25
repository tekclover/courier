import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './prime/primeng/primeng.module';
import { MaterialModule } from './material/material/material.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule
  ],
  exports: [
    PrimengModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }

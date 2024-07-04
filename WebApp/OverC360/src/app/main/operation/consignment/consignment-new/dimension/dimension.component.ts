import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../../common-service/common-service.service';
import { AuthService } from '../../../../../core/core';

@Component({
  selector: 'app-dimension',
  templateUrl: './dimension.component.html',
  styleUrl: './dimension.component.scss'
})
export class DimensionComponent {


  form = this.fb.group({
    codAmount: [''],
    declaredValue: [''],
    description: [''],
    dimensionUnit: [''],
    height: [''],
    itemDetails: this.fb.array([]),
    length: [''],
    packReferenceNumber: [''],
    partnerType: [''],
    pieceId: [''],
    volume: [''],
    volumeUnit: [''],
    weight: [''],
    weightUnit: [''],
    width: [''],
    hsCode: [''],
    pieceValue: [''],
    pieceCurrency: [''],
  });

  constructor(
    public dialogRef: MatDialogRef<DimensionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
  ) { }




  ngOnInit(): void {
    this.form.patchValue(this.data.line.value)
    }

save() {
  this.dialogRef.close(this.form.value);
}


calculateVolume(formName: any) {
  const volume = formName.controls.length.value as number * formName.controls.width.value as number * formName.controls.height.value as number;
  formName.controls.volume.patchValue(volume);
}

  }



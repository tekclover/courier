import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../../common-service/common-service.service';
import { AuthService } from '../../../../../core/core';
import { ConsignmentService } from '../../consignment.service';

@Component({
  selector: 'app-piece-details',
  templateUrl: './piece-details.component.html',
  styleUrl: './piece-details.component.scss'
})
export class PieceDetailsComponent {


  pieceForm = this.fb.group({
    items: this.fb.array([]) 
  });

  constructor(
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private router: Router,
    private fb: FormBuilder,
    private service: ConsignmentService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
    public dialogRef: MatDialogRef<PieceDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  itemForm = this.fb.group({
    itemDetails: this.fb.array([]) // Initialize an empty FormArray
  });

  
  get itemDetails(): FormArray {
    return this.itemForm.get('itemDetails') as FormArray;
  }
  addItem() {
    this.itemDetails.push(this.createItemFormGroup());
  }
  createItemFormGroup(): FormGroup {
    return this.fb.group({
      codAmount: [],
      declaredValue: [],
      description: [],
      dimensionUnit: [],
      height: [],
      hsCode: [],
      imageRefId: [],
      itemCode: [],
      length: [],
      partnerName: [],
      partnerType: [],
      pieceItemId: [],
      referenceField1: [],
      referenceField10: [],
      referenceField11: [],
      referenceField12: [],
      referenceField13: [],
      referenceField14: [],
      referenceField15: [],
      referenceField16: [],
      referenceField17: [],
      referenceField18: [],
      referenceField19: [],
      referenceField2: [],
      referenceField20: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      pdfUrl: [],
      //referenceImageList: ReferenceImageList[]
      volume: [],
      volumeUnit: [],
      weight: [],
      weightUnit: [],
      width: [],
    });
  }
  removeItem(index: number) {
    this.itemDetails.removeAt(index);
  }

  ngOnInit() {
if(this.data){
  this.data.controls.itemDetails.value.forEach((res:any) => {
    this.itemDetails.push(this.fb.group(res));
  });
}
  }
  save(){
    this.dialogRef.close(this.itemForm.controls.itemDetails.value)
  }
  calculateVolume(formName: any){
    const volume =  formName.controls.length.value as number *  formName.controls.width.value as number *  formName.controls.height.value as number;
    formName.controls.volume.patchValue(volume);
  }
}

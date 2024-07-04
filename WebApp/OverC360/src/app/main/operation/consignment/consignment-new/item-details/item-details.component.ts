import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../../common-service/common-service.service';
import { AuthService } from '../../../../../core/core';
import { ConsignmentService } from '../../consignment.service';
import { DimensionComponent } from '../dimension/dimension.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent {

  constructor(
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private router: Router,
    private fb: FormBuilder,
    private service: ConsignmentService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
    public dialogRef: MatDialogRef<ItemDetailsComponent>,
    public dialog: MatDialog,
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
      pdfUrl: [],
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
    console.log(this.data.line.value)
    this.patchForm(this.data.line.value)
  }

  selectedFiles: FileList | null = null;
  selectFiles(event: any, data: any): void {
    this.selectedFiles = event.target.files;
    const files: FileList = event.target.files!;
    const filesArray: File[] = Array.from(files);
    let filesWithData: { name: string, referenceImageUrl: string }[] = [];
    filesArray.forEach((file: File) => {
      const referenceImageUrl = `path/to/images/${file.name}`;
      const fileData = {
        name: file.name,
        referenceImageUrl: file.name,
      };
      filesWithData.push(fileData);
    });
    console.log(filesWithData);
    this.uploadFile(filesWithData);
  }

  uploadFile(data: any) {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.log('No files selected for upload.');
      return;
    }
    console.log(data)
    //this.patchReferenceImages(data)

    const location = 'test'
    this.service.uploadFiles(this.selectedFiles, location).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated',
          key: 'br',
          detail: 'File uploaded successfully',
        });
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });

  }

  
  save() {
    this.dialogRef.close(this.itemForm.controls.itemDetails.value)
  }
  calculateVolume(formName: any) {
    const volume = formName.controls.length.value as number * formName.controls.width.value as number * formName.controls.height.value as number;
    formName.controls.volume.patchValue(volume);
  }

  patchForm(shipmentData: any) {
    const itemsArray = this.itemForm.get('itemDetails') as FormArray;
    shipmentData.forEach((piece: any) => {
      itemsArray.push(this.patchItemDetail(piece));
    });
  }

  
  patchItemDetail(item: any) {
    return this.fb.group({
      codAmount: [item.codAmount],
      declaredValue: [item.declaredValue],
      description: [item.description],
      dimensionUnit: [item.dimensionUnit],
      height: [item.height],
      hsCode: [item.hsCode],
      imageRefId: [item.imageRefId],
      itemCode: [item.itemCode],
      length: [item.length],
      partnerName: [item.partnerName],
      partnerType: [item.partnerType],
      pieceItemId: [item.pieceItemId],
      referenceField1: [item.referenceField1],
      referenceField10: [item.referenceField10],
      referenceField11: [item.referenceField11],
      referenceField12: [item.referenceField12],
      referenceField13: [item.referenceField13],
      referenceField14: [item.referenceField14],
      referenceField15: [item.referenceField15],
      referenceField16: [item.referenceField16],
      referenceField17: [item.referenceField17],
      referenceField18: [item.referenceField18],
      referenceField19: [item.referenceField19],
      referenceField2: [item.referenceField2],
      referenceField20: [item.referenceField20],
      referenceField3: [item.referenceField3],
      referenceField4: [item.referenceField4],
      referenceField5: [item.referenceField5],
      referenceField6: [item.referenceField6],
      referenceField7: [item.referenceField7],
      referenceField8: [item.referenceField8],
      referenceField9: [item.referenceField9],
    //  referenceImageList: this.patchReferenceImages(item.referenceImageList),
      volume: [item.volume],
      volumeUnit: [item.volumeUnit],
      weight: [item.weight],
      weightUnit: [item.weightUnit],
      width: [item.width]
    });
  }

  dimension(type: any = 'New', module: any, index: any) {
    const dialogRef = this.dialog.open(DimensionComponent, {
      disableClose: true,
      width: '80%',
      maxWidth: '90%',
      position: { top: '6.5%', left: '25%' },
      data: { pageflow: type, module: module, line: (this.itemForm.controls.itemDetails as FormArray).at(index)},
    });

    dialogRef.afterClosed().subscribe(result => {
      const control = (this.itemForm.controls.itemDetails as FormArray).at(index)
      control.patchValue(result);
      console.log(this.itemForm)
    })}
}

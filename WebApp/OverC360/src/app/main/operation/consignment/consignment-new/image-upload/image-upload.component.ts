import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../../common-service/common-service.service';
import { AuthService } from '../../../../../core/core';
import { ConsignmentService } from '../../consignment.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {
  constructor(
    public dialogRef: MatDialogRef<ImageUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: ConsignmentService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
  ) { }

  imageForm = this.fb.group({
    referenceImageList: this.fb.array([]) // Initialize an empty FormArray
  });

  get imageDetails(): FormArray {
    return this.imageForm.get('referenceImageList') as FormArray;
  }


  removeItem(index: number) {
    this.imageDetails.removeAt(index);
  }

  ngOnInit() {
    console.log(this.data.line)
    this.patchForm(this.data.line.value)
  }



  selectedFiles: FileList | null = null;
  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;
    this.uploadFile();
  }

  imageDetailsTable: any[] = [];
  uploadFile() {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.log('No files selected for upload.');
      return;
    }
    const location = 'test'
    this.service.uploadFiles(this.selectedFiles, location).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated',
          key: 'br',
          detail: 'File uploaded successfully',
        });
        result.forEach((x:any) => {
          x['referenceImageUrl'] = x.filePath;
          x['imageRefId'] = x.fileName;
        })
        this.patchForm(result)
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  
  save() {
    this.dialogRef.close(this.imageForm.controls.referenceImageList.value);
  }


  patchForm(shipmentData: any) {
    const itemsArray = this.imageForm.get('referenceImageList') as FormArray;
    shipmentData.forEach((piece: any) => {
      itemsArray.push(this.patchReferenceImages(piece));
    });
    console.log(this.imageForm)
  }

  patchReferenceImages(image: any) {
    return this.fb.group({
      imageRefId: [image.imageRefId],
      pdfUrl: [image.pdfUrl],
      referenceImageUrl: [image.referenceImageUrl]
    });
  }
}



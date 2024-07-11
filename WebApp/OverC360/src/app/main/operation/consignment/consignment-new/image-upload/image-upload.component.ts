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
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimationStyleMetadata } from '@angular/animations';

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
    private sanitizer: DomSanitizer,
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
    console.log(this.data)
    this.patchForm(this.data.line.value)
  }



  selectedFiles: FileList | null = null;
  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;
    this.uploadFile(event);
  }

  imageDetailsTable: any[] = [];
  fileLocation:any;
  uploadFile(event:any) {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.log('No files selected for upload.');
      return;
    }
  //  if(this.data.type == 'piece'){
  //   this.fileLocation = '/' + this.data.lineDetails.value.masterAirwayBill + '/' + this.data.lineDetails.value.houseAirwayBill + '/' + this.data.lineDetails.value.pieceId + '/'
  //  }
  //  if(this.data.type == 'item'){
  //   this.fileLocation = '/' + this.data.lineDetails.value.masterAirwayBill + '/' + this.data.lineDetails.value.houseAirwayBill + '/' + this.data.lineDetails.value.itemCode + '/'
  //  }
  this.fileLocation = '/' +  (new Date().getDate()) +'-'+ (new Date().getMonth() + 1) + '-' + new Date().getFullYear()  + '_' +this.cs.timeFormat(new Date()) + '/';
    this.service.uploadFiles(this.selectedFiles, this.fileLocation).subscribe({
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
        this.patchForm(result);
        this.selectedFiles = null;
        this.clearFileInput(event.target); 
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  
  clearFileInput(input: HTMLInputElement): void {
    input.value = ''; // Reset the value of the file input field
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

  fileUrldownload: any;
  docurl: any;
  async download(element:any) {
    this.spin.show()
    const blob = await this.service.download(element.value)
      .catch((err: HttpErrorResponse) => {
        this.cs.commonerrorNew(err);
      });
    this.spin.hide();
    if (blob) {
      const blobOb = new Blob([blob], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      this.fileUrldownload = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blobOb));
      this.docurl = window.URL.createObjectURL(blob);
      const a = document.createElement('a')
      a.href = this.docurl
      a.download = element.value.imageRefId;
      a.click();
      URL.revokeObjectURL(this.docurl);

    }
    this.spin.hide();
  }
}



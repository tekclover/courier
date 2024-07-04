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

  form = this.fb.group({
    imageRefId: [''],
    pdfUrl: [''],
    referenceImageUrl: [''],
  })

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
    console.log(this.imageForm)
  }

  save() {
    this.dialogRef.close(this.form.value);
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
    //this.patchReferenceImages(data),

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

  patchForm(shipmentData: any) {
    console.log(shipmentData)
    const itemsArray = this.imageForm.get('referenceImageList') as FormArray;
    shipmentData.forEach((piece: any) => {
      itemsArray.push(this.patchReferenceImages(piece));
    });
  }

  patchReferenceImages(referenceImageList: any[]) {
    if (referenceImageList == null) {
      return
    }
    return this.fb.array(referenceImageList.map(image => this.fb.group({
      imageRefId: [image.imageRefId],
      pdfUrl: [image.pdfUrl],
      referenceImageUrl: [image.referenceImageUrl]
    })));
  }
}



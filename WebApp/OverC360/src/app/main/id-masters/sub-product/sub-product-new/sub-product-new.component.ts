import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { SubProductService } from '../sub-product.service';
import { AuthService } from '../../../../core/Auth/auth.service';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { SubProductsValuesComponent } from '../sub-products-values/sub-products-values.component';
import { MatDialog } from '@angular/material/dialog';
import { NumberrangeService } from '../../../master/numberrange/numberrange.service';

@Component({
  selector: 'app-sub-product-new',
  templateUrl: './sub-product-new.component.html',
  styleUrl: './sub-product-new.component.scss',
})
export class SubProductNewComponent {
  active: number | undefined = 0;
  status: any[] = [];

  constructor(
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private path: PathNameService,
    private fb: FormBuilder,
    private service: SubProductService,
    private numberRangeService: NumberrangeService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
    public dialog: MatDialog,
  ) {
    this.status = [
      { value: '17', label: 'Inactive' },
      { value: '16', label: 'Active' }
    ];
  }

  pageToken: any;
  numCondition: any;

  // form builder initialize
  form = this.fb.group({
    languageId: [this.auth.languageId],
    languageDescription: [],
    companyId: [this.auth.companyId],
    companyName: [],
    subProductId: [],
    subProductName: [, Validators.required],
    subProductValue: [],
    remark: [],
    statusId: ["16", ],
    statusDescription: [],
    referenceField1: [, Validators.required],
    referenceField10: [],
    referenceField2: [],
    referenceField3: [],
    referenceField4: [],
    referenceField5: [],
    referenceField6: [],
    referenceField7: [],
    referenceField8: [],
    referenceField9: [],
    createdOn: ['',],
    createdBy: [],
    updatedOn: ['',],
    updatedBy: [],
  });

  submitted = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  errorHandling(control: string, error: string = 'required') {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return ' Field should not be blank';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  nextNumber: any;
  ngOnInit() {
    let code = this.route.snapshot.params['code'];
    this.pageToken = this.cs.decrypt(code);

    const dataToSend = ['Setup', 'Sub Product', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();

    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.subProductId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
    else {
      this.spin.show();
      let obj: any = {};
      obj.numberRangeObject = ['COMPANY'];
      this.numberRangeService.search(obj).subscribe({
        next: (res: any) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.companyId.patchValue(this.nextNumber);
            this.numCondition = 'true';
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.companyId.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        },
      });
    }
  }

  languageIdList: any[] = [];
  companyIdList: any[] = [];

  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
    ]).subscribe({
      next: (results: any) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.spin.hide();
      },
      error: (err: any) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });

  }

  addValues() { }

  //   add() {
  //     const dialogRef = this.dialog.open(MasterchildComponent, {
  //       disableClose: true,
  //       width: '50%',
  //       maxWidth: '80%',
  //       data: this.resultTable.length + 1
  //     });

  //     dialogRef.afterClosed().subscribe(result => {
  //      console.log(result.length);
  //      if(result){
  //       this.resultTable

  //       if (result.length > 0) {
  //         this.resultTable.push(result);
  //       }

  //       this.resultTable.push(result);
  //     }
  //      this.resultTable=[...this.resultTable];
  //     });
  //   }


  add() {
    const dialogRef = this.dialog.open(SubProductsValuesComponent, {
      disableClose: true,
      width: '70%',
      height: '50%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: this.pieceDetails.length + 1,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result.length);
      if (result) {
        this.pieceDetails

        if (result.length > 0) {
          this.pieceDetails.push(result);
        }

        this.subProductArray.push(result);
      }
      this.subProductArray.push(result);
     });
  }

  subProductArray: any[] = [];

  piece = this.fb.group({
    pieceDetails: this.fb.array([]) // Initialize an empty FormArray
  });


  get pieceDetails(): FormArray {
    return this.piece.get('pieceDetails') as FormArray;
  }

  removeItem(index: number) {
    this.pieceDetails.removeAt(index);
  }

  fill(line: any) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }

  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
    }

    if (this.pageToken.pageflow != 'New') {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            key: 'br',
            detail: res.subProductId + ' has been updated successfully',
          });
          this.router.navigate(['/main/idMaster/subProduct']);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        },
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: 'success',
              summary: 'Created',
              key: 'br',
              detail: res.subProductId + ' has been created successfully',
            });
            this.router.navigate(['/main/idMaster/subProduct']);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        },
      });
    }
  }
}

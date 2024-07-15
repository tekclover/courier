import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';
import { ConsignorService } from '../../../master/consignor/consignor.service';
import { CustomerService } from '../../../master/customer/customer.service';
import { ConsignmentService } from '../consignment.service';

@Component({
  selector: 'app-download-template',
  templateUrl: './download-template.component.html',
  styleUrl: './download-template.component.scss'
})
export class DownloadTemplateComponent {

  partnerType: any[] = [];
  creationType: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<DownloadTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private path: PathNameService,
    private fb: FormBuilder,
    private service: ConsignmentService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
    public customerService: CustomerService,
    public consignorService: ConsignorService,
  ) {
    this.partnerType = [
      { value: 'customer', label: 'Customer' },
      { value: 'consignor', label: 'Consignor' }
    ];
    this.creationType = [
      { value: 'Single', label: 'Single' },
      { value: 'Bulk', label: 'Bulk' }
    ];
   }

   form = this.fb.group({
    partnerType: ['', ],
    partnerId: ['', ],
    creationType: ['Single', Validators.required],
    productName: [''],
    fileName: [''],
  });



  ngOnInit(): void {

  }


  partnerNameList: any[] = [];

  partnerTypeChanged() {
    if (this.form.controls.partnerType.value == 'customer') {
      let obj: any = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.partnerNameList = [];
      this.spin.show();
      this.customerService.search(obj).subscribe({
        next: (result) => {
          this.partnerNameList = this.cas.foreachlist(result, { key: 'customerId', value: 'customerName', value2: 'productName' });
          this.partnerNameList =  this.cs.removeDuplicatesFromArrayList( this.partnerNameList, ['value']);
          this.spin.hide();
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    }

    if (this.form.controls.partnerType.value == 'consignor') {
      let obj: any = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.partnerNameList = [];
      this.spin.show();
      this.consignorService.search(obj).subscribe({
        next: (result) => {
          this.partnerNameList = this.cas.foreachlist(result, { key: 'consignorId', value: 'consignorName', value2: 'productName' });
          this.partnerNameList =  this.cs.removeDuplicatesFromArrayList( this.partnerNameList, ['value']);
          this.spin.hide();
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    }
  }
  submitted = false

  save(){
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

    this.dialogRef.close(this.form.getRawValue());
  }

  productChanged(){
    const selectedPartner = this.partnerNameList.find(value => value.value === this.form.controls.partnerId.value);
    this.form.controls.productName.patchValue(selectedPartner.value2);

    if(selectedPartner.value2 == '1 - INTERNATIONALINBOUND'){
      this.form.controls.fileName.patchValue('1_-_INTERNATIONALINBOUND.xlsx');
    }
    if(selectedPartner.value2 == '2 - INTERNATIONALOUTBOUND'){
      this.form.controls.fileName.patchValue('2_-_INTERNATIONALOUTBOUND.xlsx');
    }
    if(selectedPartner.value2 == '3 - DOMESTIC'){
      this.form.controls.fileName.patchValue('3_-_DOMESTIC.xlsx');
    }
  }
}




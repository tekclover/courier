import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';
import { SubProductsValuesComponent } from '../../../id-masters/sub-product/sub-products-values/sub-products-values.component';
import { NumberrangeService } from '../../../master/numberrange/numberrange.service';
import { ConsoleService } from '../console.service';
import { ConsoleTransferComponent } from '../console-transfer/console-transfer.component';
import { ConsoleEditpopupComponent } from '../console-editpopup/console-editpopup.component';

@Component({
  selector: 'app-console-edit',
  templateUrl: './console-edit.component.html',
  styleUrl: './console-edit.component.scss'
})
export class ConsoleEditComponent {
  active: number | undefined = 0;
  status: any[] = [];
  selectedConsole: any[] = [];
  constructor(
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private path: PathNameService,
    private fb: FormBuilder,
    private service: ConsoleService,
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
    actualCurrency: [],
    actualValue: [],
    airportOriginCode: [],
    bondedId: [],
    companyId: [],
    companyName: [],
    consigneeCivilId: [],
    consigneeName: [],
    consignmentCurrency: [],
    consignmentValue: [],
    consoleId: [],
    countryOfOrigin: [],
    createdBy: [],
    createdOn: [],
    currency: [],
    customsCurrency: [],
    customsKd: [],
    customsValue: [],
    declaredValue: [],
    deletionIndicator: [],
    description: [],
    eventCode: [],
    eventText: [],
    eventTimestamp: [],
    expectedDuty: [],
    finalDestination: [],
    freightCharges: [],
    freightCurrency: [],
    goodsDescription: [],
    goodsType: [],
    grossWeight: [],
    houseAirwayBill: [],
    hsCode: [],
    iataKd: [],
    incoTerms: [],
    invoiceDate: [],
    invoiceNumber: [],
    invoiceSupplierName: [],
    invoiceType: [],
    isConsolidatedShipment: [],
    isPendingShipment: [],
    isSplitBillOfLading: [],
    landedQuantity: [],
    languageDescription: [],
    languageId: [],
    manifestedGrossWeight: [],
    manifestedQuantity: [],
    masterAirwayBill: [],
    netWeight: [],
    noOfPackageMawb: [],
    noOfPieceHawb: [],
    notifyParty: [],
    partnerHouseAirwayBill: [],
    partnerId: [],
    partnerMasterAirwayBill: [],
    partnerName: [],
    partnerType: [],
    paymentType: [],
    productId: [],
    productName: [],
    quantity: [],
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
    selectedConsole:[],
    remarks: [],
    serviceTypeId: [],
    serviceTypeName: [],
    shipmentBagId: [],
    shipperId: [],
    shipperName: [],
    specialApprovalValue: [],
    statusId: [],
    statusTimestamp: [],
    subProductId: [],
    subProductName: [],
    tareWeight: [],
    totalQuantity: [],
    updatedBy: [],
    updatedOn: [],
    volume: [],
   
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
  onChange() {
    const choosen = this.selectedConsole[this.selectedConsole.length - 1];
    this.selectedConsole.length = 0;
    this.selectedConsole.push(choosen);
  }
  nextNumber: any;
  ngOnInit() {
    let code = this.route.snapshot.params['code'];
    this.pageToken = this.cs.decrypt(code);

    const dataToSend = ['Airport', 'Console', this.pageToken.pageflow];
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

  subProductArray: any[] = [];

 

  removeItem(index: number) {
    this.subProductArray.splice(index, 1);
  }

  fill(line: any) {
    console.log(this.pageToken.line)
    this.form.patchValue(line);
    this.spin.show();
    let obj: any = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.consoleId = [line.consoleId];
    this.service.search(obj).subscribe({
      next: (res: any) => {
        console.log(res);
        this.subProductArray = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });
    // this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    // this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
lineSentforFill:any;
  save() {
    this.submitted = true;
    console.log(this.selectedConsole)
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
      if (this.selectedConsole.length==0) {
        this.messageService.add({
         severity: 'error',
         summary: 'Error',
         key: 'br',
           detail: 'Please fill required fields to continue',
         });
         return;
       }
      this.spin.show();
      this.selectedConsole.forEach((x: any) => {
        x.eventCode = 8;
      });
console.log(this.selectedConsole)
      this.service.Update(this.selectedConsole).subscribe({
        next: (res) => {
          this.messageService.add({
           severity: 'success',
            summary: 'Updated',
            key: 'br',
            detail: res[0].consoleId + ' has been updated successfully',
       });
          //this.router.navigate(['/main/airport/console']);
          let line:any={};
          line.consoleId=this.subProductArray[0].consoleId;
          this.fill(line);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
         this.cs.commonerrorNew(err);
        },
      });
   } 
  }

  editItem(data: any,item: any): void {
    console.log(item)
    const dialogRef = this.dialog.open(ConsoleEditpopupComponent, {
      disableClose: true,
      width: '70%',
      //height: '50%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: {pageflow: data,code:item},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.subProductArray.splice(item,0);
        this.subProductArray.splice(item, 1, result);
      this.subProductArray = [...this.subProductArray]
  
  }});
  }
  transfer(){
    const dialogRef = this.dialog.open(ConsoleTransferComponent, {
      disableClose: true,
      width: '70%',
      height: '40%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: this.selectedConsole,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result) {
        this.subProductArray.push(result);
      }
    });
  }
}
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
import { NumberrangeService } from '../../../master/numberrange/numberrange.service';
import { ConsoleTransferComponent } from '../../console/console-transfer/console-transfer.component';
import { CcrService } from '../ccr.service';
import { CcrEditpopupComponent } from '../ccr-editpopup/ccr-editpopup.component';

@Component({
  selector: 'app-ccr-edit',
  templateUrl: './ccr-edit.component.html',
  styleUrl: './ccr-edit.component.scss'
})
export class CcrEditComponent {
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
    private service: CcrService,
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
  airportOriginCode: [],
  bondedId: [],
  ccrId: [],
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
  customsCcrNo: [],
  customsKd: [],
  declaredValue: [],
  deletionIndicator: [],
  description: [],
  eventCode: [],
  eventText: [],
  eventTimestamp: [],
  exemptionBeneficiary: [],
  exemptionFor: [],
  exemptionReference: [],
  finalDestination: [],
  flightArrivalTime: [],
  flightNo: [],
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
  isExempted: [],
  isPendingShipment: [],
  isSplitBillOfLading: [],
  landedQuantity: [],
  languageDescription: [],
  languageId: [],
  manifestedGrossWeight: [],
  manifestedQuantity: [],
  manufacturer: [],
  masterAirwayBill: [],
  netWeight: [],
  noOfPackageMawb: [],
  noOfPieceHawb: [],
  notifyParty: [],
  packageType: [],
  partnerHouseAirwayBill: [],
  partnerId: [],
  partnerMasterAirwayBill: [],
  partnerName: [],
  partnerType: [],
  paymentType: [],
  pieceId: [],
  pieceItemId: [],
  primaryDo: [],
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
  remarks: [],
  secondaryDo: [],
  serviceTypeId: [],
  serviceTypeName: [],
  shipperId: [],
  shipperName: [],
  specialApprovalValue: [],
  statusId: [],
  statusTimestamp: [],
  subProductId: [],
  subProductName: [],
  tareWeight: [],
  totalDuty: [],
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

    const dataToSend = ['Airport', 'CCR', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();

    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.ccrId.disable();
      this.form.controls.statusId.disable();
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
    this.form.patchValue(this.pageToken.line);
    this.spin.show();
    let obj: any = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.ccrId = [line.ccrId];
    this.service.search(obj).subscribe({
      next: (res: any) => {
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
      this.service.UpdateList(this.selectedConsole).subscribe({
        next: (res) => {
          this.messageService.add({
           severity: 'success',
            summary: 'Updated',
            key: 'br',
            detail: res[0].consoleId + ' has been updated successfully',
       });
          //this.router.navigate(['/main/airport/console']);
          let line:any={};
          line.ccrId=this.subProductArray[0].ccrId;
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
    const dialogRef = this.dialog.open(CcrEditpopupComponent, {
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
      if (result) {
        this.subProductArray.push(result);
      }
    });
  }
}

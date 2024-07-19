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
import { ConsoleEditpopupComponent } from '../console-editpopup/console-editpopup.component';
import { ConsoleTransferComponent } from '../console-transfer/console-transfer.component';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';

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
    private datePipe: DatePipe,
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
    pieceId: [],
    pieceItemId: [],
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
    selectedConsole: [],
    remarks: [],
    serviceTypeId: [],
    serviceTypeName: [],
    shipmentBagId: [],
    shipperId: [],
    shipperName: [],
    specialApprovalValue: [],
    statusId: [],
    statusText: [],
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

    const dataToSend = ['Mid-Mile', 'Console', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();
    this.callTableHeader();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    this.form.controls.partnerMasterAirwayBill.disable();
    this.form.controls.statusText.disable();

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.subProductId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
      this.form.controls.statusId.disable();
    }

  }


  cols: any[] = [];
  target: any[] = [];
  callTableHeader() {
    this.cols = [
      { field:'consoleId', header:'Console No'},
      { field: 'masterAirwayBill', header: 'MAWB' },
      { field: 'houseAirwayBill', header: 'Consginment No' },
      { field: 'partnerMasterAirwayBill', header: 'Partner MAWB' },
      { field: 'partnerHouseAirwayBill', header: 'Partner HAWB' },
      { field: 'description', header: 'Commodity' },
      { field: 'quantity', header: 'No of Piece' },
      { field: 'countryOfOrigin', header: 'Origin' },
      { field: 'grossWeight', header: 'Weight' },
      { field: 'airportOriginCode', header: 'Airport Origin Code' },
      { field: 'hsCode', header: 'HS Code' },
      { field: 'consigneeName', header: 'Consignee Name' },
      { field: 'consignmentValue', header: 'Consignment Value' },
      { field: 'consignmentCurrency', header: 'Consignment Currency' },
      { field: 'customsValue', header: 'Customs Value' },
      { field: 'iata', header: 'IATA Charges' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
    ];
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
    this.form.patchValue(line);
    this.spin.show();
    let obj: any = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.partnerMasterAirwayBill = [line.partnerMasterAirwayBill];
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
  lineSentforFill: any;
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
      if (this.selectedConsole.length == 0) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          key: 'br',
          detail: 'Kindly select any row',
        });
        return;
      }
      this.spin.show();
      this.selectedConsole.forEach((x: any) => {
        x.eventCode = 10;
      });
      const a = this.subProductArray.filter(x => x.eventCode == 10);
     console.log(a)
     console.log(this.subProductArray.length)
      this.service.Update(this.selectedConsole).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            key: 'br',
            detail: res[0].consoleId + ' has been updated successfully',
          });
          if (this.subProductArray.length == a.length) {
            this.router.navigate(['/main/airport/console']);
          } else {
            setTimeout(() => {
            this.fill(this.pageToken.line);
          }, 2000);
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        },
      });
    }
  }

  saveCCR(){
    if (this.selectedConsole.length == 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Kindly select any row',
      });
      return;
    }

    this.service.createCCR(this.selectedConsole).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated',
          key: 'br',
          detail: res[0].ccrId + ' has been created successfully',
        });
        this.downloadExcelWB(res);
        this.router.navigate(['/main/airport/console']);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });
  }

  editItem(data: any, item: any): void {
    const dialogRef = this.dialog.open(ConsoleEditpopupComponent, {
      disableClose: true,
      width: '70%',
      //height: '50%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: { pageflow: data, code: item },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subProductArray.splice(item, 0);
        this.subProductArray.splice(item, 1, result);
        this.subProductArray = [...this.subProductArray]

      }
    });
  }

  transfer() {
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
    }
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
        this.fill(this.pageToken.line)
      }
    });
  }

  groupBy(array: any[], key: string) {
    return array.reduce((result: { [x: string]: any[]; }, currentValue: { [x: string]: any; }) => {
      const groupKey = currentValue[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      return result;
    }, {});
  }

  // download Excel function
  consoleManifest: any[] = [];
  invoices: any[] = [];
  invoiceItems: any[] = [];

  downloadExcelWB(res:any) {
    this.consoleManifest = [
      { field: 'partnerHouseAirwayBill', header: 'AWB' },
      { field: 'airportOriginCode', header: 'Origin' },
      { field: 'countryOfOrigin', header: 'Origin Code' },
      { field: 'shipperName', header: 'Shipper' },
      { field: 'grossWeight', header: 'WT KG' },
      { field: 'quantity', header: 'PCS' },
      { field: 'description', header: 'Description' },
      { field: 'consigneeName', header: 'Consignee Name' },
      { field: 'consignmentCurrency', header: 'Currency' },
      { field: 'consignmentValue', header: 'Value' },
      { field: 'consignmentValueLocal', header: 'Customs KD' },
      { field: 'iata', header: 'Iata KD' },
      { field: 'hsCode', header: 'HS Code' },
    ];

    this.invoices = [
      { field: 'partnerHouseAirwayBill', header: 'Airway Bill No' },
      { field: 'consigneeName', header: 'Consignee Name' },
      { field: 'consigneeCivilId', header: 'Consignee Civil ID' },
      { field: 'invoiceNumber', header: 'Invoice Number' },
      { field: 'invoiceDate', header: 'Invoice Date' },
      { field: 'invoiceType', header: 'Invoice Type' },
      { field: 'consignmentCurrency', header: 'Currency' },
      { field: 'invoiceSupplierName', header: 'Invoice Supplier Name' },
      { field: 'consignmentLocalId', header: 'Freight Currency' },
      { field: 'freightCharges', header: 'Freight Charges' },
      { field: 'countryOfOrigin', header: 'Country Of Supply' },
    ];

    this.invoiceItems = [
      { field: 'countryOfOrigin', header: 'Country Of Origin' },
      { field: 'manufacturer', header: 'Manufacturer' },
      { field: 'noOfPieceHawb', header: 'No Of Packages' },
      { field: 'consignmentValue', header: 'Item Total Price' },
      { field: 'packageType', header: 'Package Type' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'netWeight', header: 'Net Weight' },
      { field: 'grossWeight', header: 'Gross Weight' },
      { field: 'isExempted', header: 'Is Exempted' },
      { field: 'exemptionFor', header: 'Exemption For' },
      { field: 'exemptionBeneficiary', header: 'Exemption Beneficiary' },
      { field: 'exemptionReference', header: 'Exemption Reference' },
    ];

    const groupedByConsoleId = this.groupBy(res, 'consoleId');
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    for (const consoleId in groupedByConsoleId) {
      if (groupedByConsoleId.hasOwnProperty(consoleId)) {
        const consoleData = groupedByConsoleId[consoleId];
        const consoleSheetData = (Object.values(consoleData) as { [x: string]: any }[]).map(item => {
          const exportItem: any = {};
          res.forEach((col:any) => {
            if (col.format == 'date') {
              exportItem[col.header] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
            } else {
              exportItem[col.header] = item[col.field];
            }
          });
          return exportItem;
        });

        const consoleSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(consoleSheetData);
        XLSX.utils.book_append_sheet(wb, consoleSheet, `CONSOLE-${consoleId}`);

        const groupedByCcrId = this.groupBy(consoleData, 'ccrId');

        for (const ccrId in groupedByCcrId) {
          if (groupedByCcrId.hasOwnProperty(ccrId)) {
            const ccrData = groupedByCcrId[ccrId];

            const invoicesData = (Object.values(ccrData) as { [x: string]: any }[]).map(item => {
              const exportItem: any = {};
              this.invoices.forEach(col => {
                if (col.format == 'date') {
                  exportItem[col.header] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
                } else {
                  exportItem[col.header] = item[col.field];
                }
              });
              return exportItem;
            });
            const invoiceSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(invoicesData);
            XLSX.utils.book_append_sheet(wb, invoiceSheet, `INVOICE-${consoleId}`);

            const invoiceItemsData = (Object.values(ccrData) as { [x: string]: any }[]).map(item => {
              const exportItem: any = {};
              this.invoiceItems.forEach(col => {
                if (col.format && col.format == 'date') {
                  exportItem[col.header] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
                } else {
                  exportItem[col.header] = item[col.field];
                }
              });
              return exportItem;
            });
            const invoiceItemSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(invoiceItemsData);
            XLSX.utils.book_append_sheet(wb, invoiceItemSheet, `INVOICEITEM-${consoleId}`);
          }
        }
      }
    }
    XLSX.writeFile(
      wb,
      `CCR-Manifest_${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}.xlsx`
    );
  }
}

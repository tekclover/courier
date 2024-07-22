import { DatePipe } from '@angular/common';
import { AuthService } from '../../../core/core';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CustomTableComponent } from '../../../common-dialog/custom-table/custom-table.component';
import { DeleteComponent } from '../../../common-dialog/delete/delete.component';
import { CommonServiceService } from '../../../common-service/common-service.service';
import { PathNameService } from '../../../common-service/path-name.service';
import { LanguageService } from '../../id-masters/language/language.service';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ConsignmentService } from '../../operation/consignment/consignment.service';
import { BondedManifestService } from '../bonded-manifest/bonded-manifest.service';
import { ConsoleService } from '../console/console.service';
import { FormBuilder } from '@angular/forms';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ConsignmentUpdatebulkComponent } from '../../operation/consignment/consignment-updatebulk/consignment-updatebulk.component';
import { PreAlertManifestIndicatorComponent } from './pre-alert-manifest-indicator/pre-alert-manifest-indicator.component';
import * as XLSX from 'xlsx';
import { PrealertService } from './prealert.service';
import { PreAlertBulkComponent } from './pre-alert-bulk/pre-alert-bulk.component';
@Component({
  selector: 'app-pre-alert-manifest',
  templateUrl: './pre-alert-manifest.component.html',
  styleUrl: './pre-alert-manifest.component.scss',
  animations: [
    trigger('fadeLater', [
      state('fade-in', style({ opacity: 1, transform: 'translateY(0)' })),
      state('fade-out', style({ opacity: 0, transform: 'translateY(0)' })),
      transition('fade-in <=> fade-out', animate('0.6s ease-in-out'))
    ]),
  ]
})
export class PreAlertManifestComponent {

  preAlertManifestTable: any[] = [];
  selectedPreAlertManifest: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(
    private messageService: MessageService,
    private cs: CommonServiceService,
    private router: Router,
    private path: PathNameService,
    private service: ConsignmentService,
    public dialog: MatDialog,
    private datePipe: DatePipe,
    private auth: AuthService,
    private spin: NgxSpinnerService,
    private manifest: BondedManifestService,
    private console: ConsoleService,
    private fb: FormBuilder,
    private prealertService: PrealertService
  ) { }

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Mid-Mile', 'Pre-Alert Manifest '];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'companyName', header: 'Company' },
      { field: 'partnerMasterAirwayBill', header: 'Partner MAWB' },
      { field: 'partnerType', header: 'Partner Type' },
      { field: 'flightNo', header: 'Flight No' },
      { field: 'flightName', header: 'Flight Name' },
      { field: 'estimatedTimeOfDeparture', header: 'Departure Time', format: 'date' },
      { field: 'estimatedTimeOfArrival', header: 'Arrival Time', format: 'date' },
      { field: 'consoleIndicator', header: 'Console', format: 'boolean' },
      { field: 'manifestIndicator', header: 'Bonded Manifest', format: 'boolean' },
      { field: 'preAlertManifestIndicator', header: 'Pre-Alert Manifest', format: 'boolean' },
      { field: 'hawbTypeDescription', header: 'Event' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: 'languageId', header: 'Language' },
      { field: 'referenceField1', header: 'Reference Field 1' },
      { field: 'referenceField2', header: 'Reference Field 2' },
      { field: 'referenceField3', header: 'Reference Field 3' },
      { field: 'referenceField4', header: 'Reference Field 4' },
      { field: 'referenceField5', header: 'Reference Field 5' },
    ];
  }
  updateBulk() {
    const dialogRef = this.dialog.open(PreAlertBulkComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '80%',
      position: { top: '6.5%', left: '30%' },
      data: { title: 'PreAlertManifest', code: this.selectedPreAlertManifest },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.initialCall();
    });
  }
  initialCall() {
    setTimeout(() => {
      this.spin.show();
      let obj: any = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.searchPrealert(obj).subscribe({
        next: (res: any) => {
          this.preAlertManifestTable = res;
          this.preAlertManifestTable = this.cs.removeDuplicatesFromArrayList(this.preAlertManifestTable, 'partnerMasterAirwayBill')
          this.getSearchDropdown();
          this.spin.hide();
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    }, 2000);
  }


  isSelected(item: any): boolean {
    return this.selectedPreAlertManifest.includes(item);
  }

  onChange() {
    const choosen = this.selectedPreAlertManifest[this.selectedPreAlertManifest.length - 1];
    this.selectedPreAlertManifest.length = 0;
    this.selectedPreAlertManifest.push(choosen);
  }

  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '80%',
      position: { top: '6.5%', left: '30%' },
      data: { target: this.cols, source: this.target, },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleterecord(this.selectedPreAlertManifest[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    if (this.selectedPreAlertManifest.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedPreAlertManifest[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/preAlertManifest-new/' + paramdata]);
    }
  }


  openEdit(type: any = 'New', linedata: any = null): void {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedPreAlertManifest[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/preAlertManifest-update/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '60%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: { line: this.selectedPreAlertManifest, module: 'Pre Alert Manifest', body: 'This action cannot be undone. All values associated with this field will be lost.' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const partnerMasterAirwayBill = this.selectedPreAlertManifest.map(item => item.partnerMasterAirwayBill);
        this.service.searchPrealert({ partnerMasterAirwayBill: partnerMasterAirwayBill }).subscribe({
          next: (result) => {
            this.deleterecord(result);
          }
        })
      }
    });
  }

  deleterecord(lines: any) {
    this.spin.show();
    this.prealertService.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Deleted', key: 'br', detail: 'Prealert has been deleted successfully' });
       this.initialCall();
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
  }

  downloadExcel() {

    const preAlertColumn = [
      { field: 'partnerHouseAirwayBill', header: 'MAWB' },
      { field: 'partnerHouseAirwayBill', header: 'HAWB' },
      { field: 'totalWeight', header: 'Weight' },
      { field: 'noOfPieces', header: 'PCS' },
      { field: 'consignmentValue', header: 'Value' },
      { field: 'bayanHv', header: 'Bayan HV' },
      { field: 'currency', header: 'Currency' },
      { field: 'description', header: 'Description(en)' },
      { field: 'consigneeName', header: 'Cnee Name' },
      { field: 'shipper', header: 'Shipper' },
      { field: 'origin', header: 'Origin' },
      { field: 'originCode', header: 'Origin Code' },
      { field: 'customsValue', header: 'Value KD' },
      { field: 'iata', header: 'IATA' },
      { field: 'hsCode', header: 'HSCode' },
      { field: 'incoTerm', header: 'DDU & DDB' },
    ]
    const exportData = this.preAlertManifestTable.map(item => {
      const exportItem: any = {};
      preAlertColumn.forEach(col => {
        // if (col.format == 'date') {
        //   exportItem[col.header] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
        // } else {
        //   exportItem[col.header] = item[col.field];
        // }
        exportItem[col.header] = item[col.field];
      });
      return exportItem;
    });

    // Call ExcelService to export data to Excel
    this.cs.exportAsPrealertExcel(exportData, 'Pre-Alert Manifest');
  }

  onRowExpand(event: TableRowExpandEvent) {
  }
  onRowCollapse(event: TableRowCollapseEvent) {
  }

  getColspan(): number {
    return this.cols.length + 2; // +1 for the expanded content column
  }

  createConsole() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return;
    }
    this.spin.show();
    // this.console.CreateFromConsignment(this.selectedPreAlertManifest).subscribe({
    //   next: (res) => {
    //     this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: 'Console has been created successfully' });
    //     this.spin.hide();
    //     this.initialCall();
    //   }, error: (err) => {
    //     this.spin.hide();
    //     this.cs.commonerrorNew(err);
    //   }
    // })
    const consignmentId = this.selectedPreAlertManifest.map(item => item.partnerMasterAirwayBill);
    this.service.searchPrealert({ partnerMasterAirwayBill: consignmentId }).subscribe({
      next: (result) => {
        this.console.CreateFromConsignment(result).subscribe({
          next: (res) => {
            this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: 'Console has been created successfully' });
            this.spin.hide();
            this.initialCall();
          }, error: (err) => {
            this.spin.hide();
            this.cs.commonerrorNew(err);
          }
        })
      }
    })

  }

  createManifest() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return;
    }
    this.spin.show();
    // this.manifest.CreatefromPrealert(this.selectedPreAlertManifest).subscribe({
    //   next: (res) => {
    //     this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: 'Manifest has been created successfully' });
    //     this.spin.hide();
    //     this.downloadExcelByColsAndTarget(res);
    //     this.initialCall()
    //   }, error: (err) => {
    //     this.spin.hide();
    //     this.cs.commonerrorNew(err);
    //   }
    // })
    const consignmentId = this.selectedPreAlertManifest.map(item => item.partnerMasterAirwayBill);
    this.service.searchPrealert({ partnerMasterAirwayBill: consignmentId }).subscribe({
      next: (result) => {
        this.manifest.CreatefromPrealert(result).subscribe({
          next: (res) => {
            this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: 'Manifest has been created successfully' });
            this.spin.hide();
            this.initialCall();
            this.downloadExcelByColsAndTarget(res);
          }, error: (err) => {
            this.spin.hide();
            this.cs.commonerrorNew(err);
          }
        })
      }
    })
  }

  searchform = this.fb.group({
    houseAirwayBill: [],
    masterAirwayBill: [],
    partnerId: [],
    pieceId: [],
    pieceItemId: [],
    manifestIndicator: [],
    consoleIndicator: [],
    shipperId: [],
    statusId: [],
    companyId: [[this.auth.companyId],],
    languageId: [[this.auth.languageId],]
  })

  readonly fieldDisplayNames: Record<string, string> = {
    houseAirwayBill: 'Consignment No',
    masterAirwayBill: 'MAWB',
    partnerId: 'Partner',
    shipperId: 'Shipper ID',
    pieceId: 'Piece ID',
    pieceItemId: 'Piece Item ID',
    statusId: 'Status'
  };

  houseAirwayBillDropdown: any = [];
  masterAirwayBillDropdown: any = [];
  partnerDropdown: any = [];
  statusDropdown: any = [];
  indicatorDropdown: any = [];

  getSearchDropdown() {

    this.preAlertManifestTable.forEach(res => {

      if (res.houseAirwayBill != null) {
        this.houseAirwayBillDropdown.push({ value: res.houseAirwayBill, label: res.houseAirwayBill });
        this.houseAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.houseAirwayBillDropdown, 'value');
      }
      if (res.partnerId != null) {
        this.partnerDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerDropdown, 'partnerId');
      }
      if (res.masterAirwayBill != null) {
        this.masterAirwayBillDropdown.push({ value: res.masterAirwayBill, label: res.masterAirwayBill });
        this.masterAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.masterAirwayBillDropdown, 'partnerId');
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, 'statusId');
      }
    })
    this.indicatorDropdown = [{ value: 1, label: 'Created' }, { value: 0, label: 'Not Created' }];
  }

  @ViewChild('preAlertManifest') overlayPanel!: OverlayPanel;
  closeOverLay() {
    this.overlayPanel.hide();
  }

  fieldsWithValue: any
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues)
      .filter(key => formValues[key as keyof typeof formValues] !== null && formValues[key as keyof typeof formValues] !== undefined && key !== 'companyId' && key !== 'languageId')
      .map(key => this.fieldDisplayNames[key] || key);

    this.spin.show();
    this.service.searchPrealert(this.searchform.getRawValue()).subscribe({
      next: (res: any) => {
        this.preAlertManifestTable = res;
        //  this.preAlertManifestTable = this.cs.removeDuplicatesFromArrayList(this.preAlertManifestTable, 'masterAirwayBill')
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });
  }

  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      pieceId: [],
      pieceItemId: [],
      shipperId: [],
      statusId: [],
      manifestIndicator: [],
      consoleIndicator: [],
      companyId: [[this.auth.companyId],],
      languageId: [[this.auth.languageId],]
    })
    this.search();
  }

  chipClear(value: any) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find(key => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }

  getSeverity(value: number) {
    return value === 0 ? 'red' : 'green';
  }

  // preAlertIndicator(line: any[]) {
  //   const dialogRef = this.dialog.open(PreAlertManifestIndicatorComponent, {
  //     disableClose: true,
  //     width: '70%',
  //     height: '70%',
  //     maxWidth: '82%',
  //     position: { top: '6.5%', left: '30%' },
  //     data: { line: line, },
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     // if (result) {
  //     //   this.deleterecord(this.selectedPreAlertManifest[0]);
  //     // }
  //   });
  // }

  preAlertIndicator(type: any = 'Indicator', linedata: any[]) {
    console.log(linedata);

    if (this.selectedPreAlertManifest.length === 0 && type == 'Indicator') {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedPreAlertManifest[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/preAlertManifest-indicator/' + paramdata]);
    }
  }



  // Download Excel function
  bols: any[] = [];
  items: any[] = [];

  downloadExcelByColsAndTarget(res: any) {

    this.bols = [
      { field: 'bondedId', header: 'Temporary Manifest Number' },
      { field: 'partnerHouseAirwayBill', header: 'Bill of Lading No' },
      { field: 'estimatedTimeOfArrival', header: 'Bill of Lading Date', format: 'date' },
      { field: 'description', header: 'Description' },
      { field: 'billOfLadingFor', header: 'Bill of Lading For' },
      { field: 'netWeight', header: 'Net Weight (kgs)' },
      { field: 'manifestedGrossWeight', header: 'Manifested Gross Weight (Kgs)' },
      { field: 'grossWeight', header: 'Gross Weight (kgs)' },
      { field: 'tareWeight', header: 'Tare Weight (kgs)' },
      { field: 'manifestedQuantity', header: 'Manifested Quantity' },
      { field: 'landedQuantity', header: 'Landed Quantity' },
      { field: 'totalQuantity', header: 'Total Quantity' },
      { field: 'volume', header: 'Volume (cbm)' },
      { field: 'countryOfOrigin', header: 'Port Of Shipping' },
      { field: 'finalDestination', header: 'Final Destination' },
      { field: 'consigneeName', header: 'Consignee (Registered)' },
      { field: 'consigneeName', header: 'Notify' },
      { field: 'consigneeName', header: 'Consignee (Free text)' },
      { field: 'shipperName', header: 'Shipper' },
      { field: 'remarks', header: 'Remarks' },
      { field: 'isConsolidatedShipment', header: 'Is Consolidated Shipment' },
      { field: 'isSplitBillOfLading', header: 'Is Split Bill of Lading' },
      { field: 'consolidatedBillNo', header: 'Consolidate Bill Number' },
      { field: 'isPendingShipment', header: 'Is Pending shipment' },
      { field: 'bwhInvestor', header: 'BWHInvestor' },
    ];

    this.items = [
      { field: 'partnerHouseAirwayBill', header: 'Bill of Lading No' },
      { field: 'kind', header: 'Kind' },
      { field: 'goodsType', header: 'Goods Type' },
      { field: 'fclLcl', header: 'FCL/LCL' },
      { field: 'containerNo', header: 'Container No' },
      { field: 'containerType', header: 'Container Type' },
      { field: 'containerSize', header: 'Container Size' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'description', header: 'Description' },
      { field: 'grossWeight', header: 'Gross Weight (kgs)' },
      { field: 'netWeight', header: 'Net Weight (kgs)' },
      { field: 'tareWeight', header: 'Tare Weight (kgs)' },
      { field: 'volume', header: 'Volume' },
      { field: 'markId', header: 'Mark ID' },
      { field: 'markType', header: 'Mark Type' },
      { field: 'sealNo', header: 'Seal No' },
      { field: 'vehicleModel', header: 'Vehicle Model (Year)' },
      { field: 'vehicleType', header: 'Vehicle Type' },
      { field: 'chasisNo', header: 'Chasis No' },
      { field: 'engineNo', header: 'Engine No ' },
      { field: 'yearOfManufacture', header: 'Year of Manufacture' },
      { field: 'vehicleBodyColor', header: 'Vehicle Body Color' },
      { field: 'vehicleBrand', header: 'Vehicle Brand' },
      { field: 'vehicleNationality', header: 'Vehicle Nationality' },
      { field: 'load', header: 'Load' },
      { field: 'passenger', header: 'Passenger' },
      { field: 'enginePower', header: 'Engine Power' },
      { field: 'numberOfCylinders', header: 'No Of Cylinders' },
      { field: 'countryOfOrigin', header: 'Country Of Origin' },
    ];

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    let sheetNumber = 1;
    const bolsData = res.map((item: { [x: string]: any; }) => {
      const exportItem: any = {};
      this.bols.forEach(col => {
        if (col.format === 'date') {
          exportItem[col.header] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });

    const bolsSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(bolsData);
    XLSX.utils.book_append_sheet(wb, bolsSheet, `BOLs`);

    const itemsData = res.map((item: { [x: string]: any; }) => {
      const exportItem: any = {};
      this.items.forEach(col => {
        if (col.format === 'date') {
          exportItem[col.header] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    const itemsSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(itemsData);
    XLSX.utils.book_append_sheet(wb, itemsSheet, `Items`); //_${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}
    sheetNumber += 2;

    XLSX.writeFile(
      wb,
      `Bonded-Manifest_${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}.xlsx`
    );
  }
}

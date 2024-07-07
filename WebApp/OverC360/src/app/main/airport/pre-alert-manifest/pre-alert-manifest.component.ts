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
      { field: 'companyId', header: 'Company' },
      { field: 'partnerMasterAirwayBill', header: 'Partner MAWB' },
      { field: 'partnerHouseAirwayBill', header: 'Partner HAWB' },
      { field: 'goodsDescription', header: 'Commodity' },
      { field: 'hsCode', header: 'HS Code', format: 'code'},
      { field: 'consoleIndicator', header: 'Console Status',  format: 'boolean'},
      { field: 'manifestIndicator', header: 'Bonded Status', format: 'boolean' },
      { field: 'statusDescription', header: 'Status' },
      { field: 'eventText', header: 'Event' },
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
  updateBulk(){
    const dialogRef = this.dialog.open(ConsignmentUpdatebulkComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '80%',
      position: { top: '6.5%', left: '30%' },
      data: {title: 'PreAlertManifest',code :  this.selectedPreAlertManifest} ,
    });

    dialogRef.afterClosed().subscribe((result) => {
   this.initialCall();
    });
}
  initialCall() {
    this.spin.show();
    let obj: any = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    this.service.searchPrealert(obj).subscribe({
      next: (res: any) => {
        this.preAlertManifestTable = res;
        this.getSearchDropdown();
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
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
        this.deleterecord(this.selectedPreAlertManifest);
      }
    });
  }

  deleterecord(lines: any) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Deleted', key: 'br', detail:  'Selected records deleted successfully' });
        this.spin.hide();
        this.initialCall();
      }, error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    })
  }

  downloadExcel() {
    const exportData = this.preAlertManifestTable.map(item => {
      const exportItem: any = {};
      this.cols.forEach(col => {
        if (col.format == 'date') {
          console.log(3)
          exportItem[col.field] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
        } else {
          exportItem[col.field] = item[col.field];
        }

      });
      return exportItem;
    });

    // Call ExcelService to export data to Excel
    this.cs.exportAsExcel(exportData, 'Pre-Alert Manifest');
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
    this.console.CreateFromConsignment(this.selectedPreAlertManifest).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: 'Console has been created successfully' });
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
  }

  createManifest() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return;
    }
    this.spin.show();
    this.manifest.Create(this.selectedPreAlertManifest).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: 'Manifest has been created successfully' });
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
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
      .filter(key => formValues[key as keyof typeof formValues] !== null && formValues[key as keyof typeof formValues] !== undefined && key !== 'companyId' && key !== 'languageId');

    this.spin.show();
    this.service.searchPrealert(this.searchform.getRawValue()).subscribe({
      next: (res: any) => {
        this.preAlertManifestTable = res;
        this.preAlertManifestTable = this.cs.removeDuplicatesFromArrayList(this.preAlertManifestTable, 'masterAirwayBill')
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
    this.searchform.get(value.value)?.reset();
    this.search();
  }

}

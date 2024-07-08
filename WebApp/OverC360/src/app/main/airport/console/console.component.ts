import { DatePipe } from '@angular/common';
import { AuthService } from '../../../core/core';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { TableRowExpandEvent, TableRowCollapseEvent } from 'primeng/table';
import { CustomTableComponent } from '../../../common-dialog/custom-table/custom-table.component';
import { DeleteComponent } from '../../../common-dialog/delete/delete.component';
import { CommonServiceService } from '../../../common-service/common-service.service';
import { PathNameService } from '../../../common-service/path-name.service';
import { ConsoleService } from './console.service';
import { ConsoleBulkComponent } from './console-bulk/console-bulk.component';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrl: './console.component.scss'
})
export class ConsoleComponent {


  consoleTable: any[] = [];
  selectedConsole: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(private messageService: MessageService, private cs: CommonServiceService, private router: Router, private path: PathNameService, 
    public dialog: MatDialog, private datePipe: DatePipe, private fb: FormBuilder, private auth: AuthService, private spin: NgxSpinnerService,  private service: ConsoleService
  ) { }

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Mid-Mile', 'Console '];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'companyId', header: 'Company' },
      { field: 'consoleId', header: 'Console ID' },
      {  field: 'houseAirwayBill', header: 'Consignment No' },
      { field: 'partnerMasterAirwayBill', header: 'Partner MAWB' },
      { field: 'partnerHouseAirwayBill', header: 'Partner HAWB' },
      { field: 'statusId', header: 'Status' },
      { field: 'eventText', header: 'Event' }, 
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: 'statusId', header: 'Status Id' },
      { field: 'shipperId', header: 'Shipper Id' },
      { field: 'referenceField1', header: 'Reference Field 1' },
      { field: 'referenceField2', header: 'Reference Field 2' },
      { field: 'referenceField3', header: 'Reference Field 3' },
      { field: 'referenceField4', header: 'Reference Field 4' },
      { field: 'referenceField5', header: 'Reference Field 5' },
    ];
  }
  updateBulk(){
    const dialogRef = this.dialog.open(ConsoleBulkComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '80%',
      position: { top: '6.5%', left: '30%' },
      data: {title: 'Console',code :  this.selectedConsole} ,
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
    this.service.search(obj).subscribe({
      next: (res: any) => {
        res = this.cs.removeDuplicatesFromArrayList(res, 'consoleId')
        this.consoleTable = res;
        this.getSearchDropdown();
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
  }, 2000);
  }

  onChange() {
    const choosen = this.selectedConsole[this.selectedConsole.length - 1];
    this.selectedConsole.length = 0;
    this.selectedConsole.push(choosen);
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
        this.deleterecord(this.selectedConsole[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    if (this.selectedConsole.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsole[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/console-new/' + paramdata]);
    }
  }
  openEdit(type: any = 'New', linedata: any = null): void {
    if (this.selectedConsole.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsole[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/console-edit/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '60%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: { line: this.selectedConsole, module: 'Console', body: 'This action cannot be undone. All values associated with this field will be lost.' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      const consoleID = this.selectedConsole.map(item => item.consoleId);
        this.service.search({consoleId: consoleID, companyId: [this.auth.companyId]}).subscribe({
          next: (res: any) => {
          this.deleterecord(res);
          }, error: (err) => {
            this.spin.hide();
            this.cs.commonerrorNew(err);
          }
        })
      }
    });
  }

  deleterecord(lines: any) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Deleted', key: 'br', detail: 'Selected records deleted successfully' });
        this.spin.hide();
        this.initialCall();
      }, error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    })
  }

  downloadExcel() {
    const exportData = this.consoleTable.map(item => {
      const exportItem: any = {};
      this.cols.forEach(col => {
        if (col.format == 'date') {
          exportItem[col.field] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
        } else {
          exportItem[col.field] = item[col.field];
        }

      });
      return exportItem;
    });

    // Call ExcelService to export data to Excel
    this.cs.exportAsExcel(exportData, 'Console');
  }

  onRowExpand(event: TableRowExpandEvent) {
  }
  onRowCollapse(event: TableRowCollapseEvent) {
  }

  getColspan(): number {
    return this.cols.length + 2; // +1 for the expanded content column
  }
  isSelected(item:any): boolean {
    return this.selectedConsole.includes(item);
  }

  searchform = this.fb.group({
    houseAirwayBill: [],
    masterAirwayBill: [],
    partnerId: [],
    consoleId: [],
    statusId: [],
    companyId: [[this.auth.companyId],],
    languageId: [[this.auth.languageId],]
  })

  houseAirwayBillDropdown: any = [];
  masterAirwayBillDropdown: any = [];
  partnerDropdown: any = [];
  statusDropdown: any = [];
  consoleIdDropdown: any = [];

  getSearchDropdown() {

    this.consoleTable.forEach(res => {

      if (res.houseAirwayBill != null) {
        this.houseAirwayBillDropdown.push({ value: res.houseAirwayBill, label: res.houseAirwayBill });
        this.houseAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.houseAirwayBillDropdown, 'value');
      }
      if (res.partnerId != null) {
        this.partnerDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerDropdown, 'value');
      }
      if (res.masterAirwayBill != null) {
        this.masterAirwayBillDropdown.push({ value: res.masterAirwayBill, label: res.masterAirwayBill });
        this.masterAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.masterAirwayBillDropdown, 'value');
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, 'value');
      }
      if (res.consoleId != null) {
        this.consoleIdDropdown.push({ value: res.consoleId, label: res.consoleId });
        this.consoleIdDropdown = this.cs.removeDuplicatesFromArrayList(this.consoleIdDropdown, 'value');
      }
    })
    //  this.statusDropdown = [{ value: '17', label: 'Inactive' }, { value: '16', label: 'Active' }];
  }

  @ViewChild('console') overlayPanel!: OverlayPanel;
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
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res: any) => {
        this.consoleTable = res;
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
      consoleId: [],
      statusId: [],
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

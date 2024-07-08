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
import { BondedManifestService } from './bonded-manifest.service';
import { ConsignmentUpdatebulkComponent } from '../../operation/consignment/consignment-updatebulk/consignment-updatebulk.component';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bonded-manifest',
  templateUrl: './bonded-manifest.component.html',
  styleUrl: './bonded-manifest.component.scss'
})
export class BondedManifestComponent {

  bondedManifestTable: any[] = [];
  selectedBondedManifest: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(
    private messageService: MessageService, 
    private cs: CommonServiceService, 
    private router: Router, 
    private path: PathNameService, 
    private service: BondedManifestService,
    public dialog: MatDialog, 
    private datePipe: DatePipe, 
    private auth: AuthService, 
    private fb: FormBuilder,
    private spin: NgxSpinnerService, 
  ) { }

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Mid-Mile', 'Bonded Manifest'];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'companyId', header: 'Company' },
      { field: 'bondedId', header: 'Bonded ID' },
      {  field: 'houseAirwayBill', header: 'Consignment No' },
      { field: 'partnerMasterAirwayBill', header: 'Partner MAWB' },
      { field: 'partnerHouseAirwayBill', header: 'Partner HAWB' },
      { field: 'description', header: 'Commodity' },
      { field: 'hsCode', header: 'HS Code' },
      { field: 'statusDescription', header: 'Status' },
      { field: 'eventText', header: 'Event' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: 'referenceField1', header: 'Reference Field 1' },
      { field: 'referenceField2', header: 'Reference Field 2' },
      { field: 'referenceField3', header: 'Reference Field 3' },
      { field: 'referenceField4', header: 'Reference Field 4' },
      { field: 'referenceField5', header: 'Reference Field 5' },
    ];
  }

  initialCall() {
    setTimeout(() => {
    this.spin.show();
    let obj: any = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    this.service.search(obj).subscribe({
      next: (res: any) => {
        this.bondedManifestTable = res;
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
    const choosen = this.selectedBondedManifest[this.selectedBondedManifest.length - 1];
    this.selectedBondedManifest.length = 0;
    this.selectedBondedManifest.push(choosen);
  }

  updateBulk(){
    const dialogRef = this.dialog.open(ConsignmentUpdatebulkComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '80%',
      position: { top: '6.5%', left: '30%' },
      data: {title: 'Bonded Manifest',code :  this.selectedBondedManifest} ,
    });

    dialogRef.afterClosed().subscribe((result) => {
   this.initialCall();
    });
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
        this.deleterecord(this.selectedBondedManifest[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    if (this.selectedBondedManifest.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedBondedManifest[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/bondedManifest-new/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedBondedManifest.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '60%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: { line: this.selectedBondedManifest, module: 'Language', body: 'This action cannot be undone. All values associated with this field will be lost.' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleterecord(this.selectedBondedManifest);
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
    const exportData = this.bondedManifestTable.map(item => {
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
    this.cs.exportAsExcel(exportData, 'Bonded Manifest');
  }

  onRowExpand(event: TableRowExpandEvent) {
  }
  onRowCollapse(event: TableRowCollapseEvent) {
  }

  getColspan(): number {
    return this.cols.length + 2; // +1 for the expanded content column
  }
  isSelected(item:any): boolean {
    return this.selectedBondedManifest.includes(item);
  }

  searchform = this.fb.group({
    houseAirwayBill: [],
    masterAirwayBill: [],
    partnerId: [],
    bondedId: [],
    statusId: [],
    companyId: [[this.auth.companyId],],
    languageId: [[this.auth.languageId],]
  })

  houseAirwayBillDropdown: any = [];
  masterAirwayBillDropdown: any = [];
  partnerDropdown: any = [];
  statusDropdown: any = [];
  bondedIdDropdown: any = [];

  getSearchDropdown() {

    this.bondedManifestTable.forEach(res => {

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
      if (res.bondedId != null) {
        this.bondedIdDropdown.push({ value: res.bondedId, label: res.bondedId });
        this.bondedIdDropdown = this.cs.removeDuplicatesFromArrayList(this.bondedIdDropdown, 'value');
      }
    })
    //  this.statusDropdown = [{ value: '17', label: 'Inactive' }, { value: '16', label: 'Active' }];
  }

  @ViewChild('bondedmanifest') overlayPanel!: OverlayPanel;
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
        this.bondedManifestTable = res;
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
      bondedId: [],
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
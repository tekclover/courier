import { DatePipe } from '@angular/common';
import { AuthService } from '../../../core/core';
import { Component } from '@angular/core';
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

  constructor(private messageService: MessageService, private cs: CommonServiceService, private router: Router, private path: PathNameService, private service: ConsignmentService,
    public dialog: MatDialog, private datePipe: DatePipe, private auth: AuthService, private spin: NgxSpinnerService, private manifest: BondedManifestService, private console: ConsoleService
  ) { }

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Airport Hub', 'Pre-Alert Manifest - List'];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'languageId', header: 'Language' },
       { field: 'companyId', header: 'Company' },
      { field: 'partnerMasterAirwayBill', header: 'Partner MAWB' },
      { field: 'partnerHouseAirwayBill', header: 'Partner HAWB' },
      { field: 'description', header: 'Commodity' },
      { field: 'hsCode', header: 'HS Code' },
      { field: 'statusDescription', header: 'Status' },
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
    this.spin.show();
    let obj: any = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    this.service.search(obj).subscribe({
      next: (res: any) => {
        console.log(res);
        this.preAlertManifestTable = res;
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
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
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedPreAlertManifest[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/preAlertManifest-new/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: { line: this.selectedPreAlertManifest, module: 'Pre Alert Manifest', body: 'This action cannot be undone. All values associated with this field will be lost.' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleterecord(this.selectedPreAlertManifest[0]);
      }
    });
  }
  deleterecord(lines: any) {
    this.spin.show();
    this.service.DeletePreAlertManifest(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Deleted', key: 'br', detail: ' deleted successfully' });
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

  createConsole(){
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
      return;
    }
    this.spin.show();
    this.console.Create(this.selectedPreAlertManifest).subscribe({next: (res) =>{
      this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: 'Console has been created successfully' });
      this.spin.hide();
    }, error: (err) =>{
      this.spin.hide();
      this.cs.commonerrorNew(err);
    }})
  }
  createManifest(){
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
      return;
    }
    this.spin.show();
    this.manifest.Create(this.selectedPreAlertManifest).subscribe({next: (res) =>{
      this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: 'Manifest has been created successfully' });
      this.spin.hide();
    }, error: (err) =>{
      this.spin.hide();
      this.cs.commonerrorNew(err);
    }})
  }
}

import { Component } from '@angular/core';
import { CommonServiceService } from '../../../common-service/common-service.service';
import { Router } from '@angular/router';
import { PathNameService } from '../../../common-service/path-name.service';
import { IataService } from './iata.service';  
import { MessageService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../../common-dialog/delete/delete.component';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomTableComponent } from '../../../common-dialog/custom-table/custom-table.component';

@Component({
  selector: 'app-iata',
  templateUrl: './iata.component.html',
  styleUrl: './iata.component.scss'
})
export class IataComponent {

  iataTable: any[] = [];
  selectedIata: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(
    private messageService: MessageService,
    private cs: CommonServiceService, 
    private router: Router,
    private path: PathNameService,
    private service: IataService,
    public dialog: MatDialog,
    private datePipe: DatePipe,
    private spin: NgxSpinnerService,
  ) { }

  fullDate: any;
  today: any;
  ngOnInit(): void {
    const dataToSend = ['Setup', 'IATA - List'];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'languageDescription', header: 'Language Description' },
      { field: 'companyName', header: 'Company Name' },
      { field: 'origin', header: 'Origin' },
      { field: 'iataKd', header: 'IATA KD' },
      { field: 'iataCharge', header: 'Iata Charge' },
      { field: 'currencyDescription', header: 'Currency Description' },
    ];
    this.target = [
      { field: 'languageId', header: 'Language ID' },
      { field: 'companyId', header: 'Company ID' },
      { field: 'originCode', header: 'Origin Code' },
      { field: 'currencyId', header: 'Currency ID' },
      { field: 'referenceField1', header: 'Reference Field 1' },
      { field: 'referenceField2', header: 'Reference Field 2' },
      { field: 'referenceField3', header: 'Reference Field 3' },
      { field: 'referenceField4', header: 'Reference Field 4' },
      { field: 'referenceField5', header: 'Reference Field 5' },
      { field: 'referenceField6', header: 'Reference Field 6' },
      { field: 'referenceField7', header: 'Reference Field 7' },
      { field: 'referenceField8', header: 'Reference Field 8' },
      { field: 'referenceField9', header: 'Reference Field 9' },
      { field: 'referenceField10', header: 'Reference Field 10' },
    ];
  }

  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res: any) => {
        console.log(res);
        this.iataTable = res;
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
  }

  onChange() {
    const choosen = this.selectedIata[this.selectedIata.length -1];
    this.selectedIata.length = 0;
    this.selectedIata.push(choosen);
  }

  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '80%',
      position: { top: '6.5%', left: '30%' },
      data: { target: this.cols, source: this.target },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleterecord(this.selectedIata[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    if (this.selectedIata.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedIata[0] : linedata, pageflow: type });
      this.router.navigate(['/main/idMaster/iata-new/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedIata.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '80%',
      position: { top: '6.5%', left: '30%' },
      data: { line: this.selectedIata, module: 'Iata', body: 'This action cannot be undone. All values associated with this field will be lost.' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleterecord(this.selectedIata[0]);
      }
    })
  }
  deleterecord(lines: any) {
    this.spin.show(); 
    this.service.Delete(lines).subscribe({
      next: (res) =>{
        this.messageService.add({ severity: 'success', summary: 'Deleted', key: 'br', detail: lines.origin + lines.originCode + lines.companyId + lines.languageId + ' deleted successfully' });
        this.spin.hide();
        this.initialCall();
      },error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    })
  }

  downloadExcel() {
    const exportData = this.iataTable.map(item => {
      const exportItem: any = {};
      this.cols.forEach(col => {
        if (col.format == 'data') {
          console.log(3)
          exportItem[col.field] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });

    // Excel service
    this.cs.exportAsExcel(exportData, 'Iata');
  }

}

import { Component } from '@angular/core';
import { CommonServiceService } from '../../../common-service/common-service.service';
import { Router } from '@angular/router';
import { PathNameService } from '../../../common-service/path-name.service';
import { NumberrangeService } from './numberrange.service';  
import { MessageService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../../common-dialog/delete/delete.component';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomTableComponent } from '../../../common-dialog/custom-table/custom-table.component';


@Component({
  selector: 'app-numberrange',
  templateUrl: './numberrange.component.html',
  styleUrl: './numberrange.component.scss'
})
export class NumberrangeComponent {

  numberRangeTable: any[] = [];
  selectedNumberRange: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(
    private messageService: MessageService,
    private cs: CommonServiceService, 
    private router: Router,
    private path: PathNameService,
    private service: NumberrangeService,
    public dialog: MatDialog,
    private datePipe: DatePipe,
    private spin: NgxSpinnerService,
  ) { }

  fullDate: any;
  today: any;
  ngOnInit(): void {
    const dataToSend = ['Setup', 'NumberRange - List'];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'numberRangeCode', header: 'NumberRange Code' },
      { field: 'numberRangeObject', header: 'NumberRange Object' },
      { field: 'numberRangeStatus', header: 'NumberRange Status' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
      
    ];
    this.target = [
      { field: 'numberRangeFrom', header: 'NumberRange From' },
      { field: 'numberRangeTo', header: 'NumberRange To' },
      { field: 'numberRangeCurrent', header: 'NumberRangeCurrent' },
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
      { field: 'updatedBy', header: 'Updated By' },
      { field: 'updatedOn', header: 'Updated On', format: 'date' },
    ];
  }

  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res: any) => {
        console.log(res);
        this.numberRangeTable = res;
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
  }

  onChange() {
    const choosen = this.selectedNumberRange[this.selectedNumberRange.length -1];
    this.selectedNumberRange.length = 0;
    this.selectedNumberRange.push(choosen);
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
        this.deleterecord(this.selectedNumberRange[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    if (this.selectedNumberRange.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedNumberRange[0] : linedata, pageflow: type });
      this.router.navigate(['/main/idMaster/numberrange-new/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedNumberRange.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: { line: this.selectedNumberRange, module: 'Menu', body: 'This action cannot be undone. All values associated with this field will be lost.' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleterecord(this.selectedNumberRange[0]);
      }
    })
  }
  deleterecord(lines: any) {
    this.spin.show(); 
    this.service.Delete(lines).subscribe({
      next: (res) =>{
        this.messageService.add({ severity: 'success', summary: 'Deleted', key: 'br', detail: lines.numberRangeCode +' deleted successfully' });
        this.spin.hide();
        this.initialCall();
      },error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    })
  }

  downloadExcel() {
    const exportData = this.numberRangeTable.map(item => {
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
    this.cs.exportAsExcel(exportData, 'OpStatus');
  }

}

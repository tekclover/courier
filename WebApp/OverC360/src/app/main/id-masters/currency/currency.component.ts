import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { CommonServiceService } from '../../../common-service/common-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { PathNameService } from '../../../common-service/path-name.service';
import { DeleteComponent } from '../../../common-dialog/delete/delete.component';
import { CustomTableComponent } from '../../../common-dialog/custom-table/custom-table.component';
import { CurrencyService } from './currency.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent {

  
  currencyTable: any[] = [];
  selectedCurrency: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(private messageService: MessageService, private cs: CommonServiceService, private router: Router, private path: PathNameService, private service: CurrencyService,
    public dialog: MatDialog, private datePipe: DatePipe, private spin: NgxSpinnerService,
  ) { }

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Setup', 'Currency - List'];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'currencyId', header: 'ID' },
      { field: 'currencyDescription', header: 'Description' },
      { field: 'statusDescription', header: 'Status' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: 'statusId', header: 'Status Id' },
      { field: 'referenceField1', header: 'Reference Field 1' },
      { field: 'referenceField2', header: 'Reference Field 2' },
      { field: 'referenceField3', header: 'Reference Field 3' },
      { field: 'referenceField4', header: 'Reference Field 4' },
      { field: 'referenceField6', header: 'Reference Field 6' },
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
        this.currencyTable = res;
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
  }


onChange() {
  const choosen = this.selectedCurrency[this.selectedCurrency.length - 1];
  this.selectedCurrency.length = 0;
  this.selectedCurrency.push(choosen);
}

customTable() {
  const dialogRef = this.dialog.open(CustomTableComponent, {
    disableClose: true,
    width: '70%',
    maxWidth: '80%',
    position: { top: '6.5%', left: '30%' },
    data: { target: this.cols, source: this.target,},
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.deleterecord(this.selectedCurrency[0]);
    }
  });
}

openCrud(type: any = 'New', linedata: any = null): void {
  if (this.selectedCurrency.length === 0 && type != 'New') {
    this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
  } else {
    let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCurrency[0] : linedata, pageflow: type });
    this.router.navigate(['/main/idMaster/currency-new/' + paramdata]);
  }
}

deleteDialog() {
  if (this.selectedCurrency.length === 0) {
    this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
    return;
  }
  const dialogRef = this.dialog.open(DeleteComponent, {
    disableClose: true,
    width: '70%',
    maxWidth: '82%',
    position: { top: '6.5%', left: '30%' },
    data: { line: this.selectedCurrency, module: 'Currency', body: 'This action cannot be undone. All values associated with this field will be lost.' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.deleterecord(this.selectedCurrency[0]);
    }
  });
}
deleterecord(lines: any) {
  this.spin.show();
  this.service.Delete(lines.currencyId).subscribe({
    next: (res) =>{
      this.messageService.add({ severity: 'success', summary: 'Deleted', key: 'br', detail: lines.currencyId + ' deleted successfully' });
      this.spin.hide();
      this.initialCall();
    },error: (err) => {
      this.cs.commonerrorNew(err);
      this.spin.hide();
    }
  })
}

downloadExcel() {
  const exportData = this.currencyTable.map(item => {
    const exportItem: any = {};
   this.cols.forEach(col => {
    if(col.format == 'date'){
      exportItem[col.field] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
    }else{
      exportItem[col.field] = item[col.field];
    }
     
    });
    return exportItem;
  });

  // Call ExcelService to export data to Excel
 this.cs.exportAsExcel(exportData, 'Currency');
}
}


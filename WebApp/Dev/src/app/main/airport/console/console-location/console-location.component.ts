import { Component, ViewChild } from '@angular/core';
import { ConsoleService } from '../console.service';
import { DatePipe, Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { CustomTableComponent } from '../../../../common-dialog/custom-table/custom-table.component';
import { DeleteComponent } from '../../../../common-dialog/delete/delete.component';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';

@Component({
  selector: 'app-console-location',
  templateUrl: './console-location.component.html',
  styleUrl: './console-location.component.scss'
})
export class ConsoleLocationComponent {

  
  
  consoleTable: any[] = [];
  selectedConsole: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(
    private messageService: MessageService,
    private cs: CommonServiceService,
    private router: Router,
    private path: PathNameService,
    private service: ConsoleService,
    public dialog: MatDialog,
    private datePipe: DatePipe,
    private auth: AuthService,
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private spin: NgxSpinnerService,
  ) { }

  fullDate: any;
  today: any;
  pageToken: any;
  ngOnInit() {
    
    let code = this.route.snapshot.params['code'];
    this.pageToken = this.cs.decrypt(code);

    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Mid Mile', 'Console'];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.fill(this.pageToken.line);
  }

  callTableHeader() {
    this.cols = [
      
      { field: 'consoleId', header: 'Console ID' ,format:'hyperLink' },
      { field: 'totalNoOfPieces', header: 'No Of Pieces'},
      { field: 'totalSumOfWeights', header: 'Gross Weight' },
      { field: 'natureOfGoods', header: 'Nature of Goods' },
      { field: 'masterAirwayBill', header: 'MAWB' },
    ];
    this.target = [
      

    ];
  }
  
  
  fill(line: any) {
  let obj: any = {};
  obj.languageId = this.auth.languageId;
  obj.companyId = this.auth.companyId;
  obj.partnerMasterAirwayBill = this.pageToken.line.partnerMasterAirwayBill;

  this.service.searchLocation([obj]).subscribe({
    next: (res: any) => {
      this.consoleTable = res;
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    }
  })
}

  initialCall() {
    setTimeout(() => {
      this.spin.show();
      let obj: any = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res: any) => {
          this.consoleTable = res;
          this.spin.hide();
        }, error: (err: any) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    }, 1000);
  }

  onChange() {
    const choosen = this.selectedConsole[this.selectedConsole.length - 1];
    this.selectedConsole.length = 0;
    this.selectedConsole.push(choosen);
  }
  openEdit(type: any = 'New', linedata: any = null): void {
    if(linedata){
      this.selectedConsole = linedata;
    }
    if (this.selectedConsole.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsole[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/console-edit/' + paramdata]);
    }
  }

  panelOpenState = false;
  back() {
    this.location.back();
  }
  downloadExcel() {
    const exportData = this.selectedConsole.map(item => {
      const exportItem: any = {};
      this.cols.forEach(col => {
        if (col.format == 'date') {
          console.log(3)
          exportItem[col.header] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
        } else {
          exportItem[col.header] = item[col.field];
        }

      });
      return exportItem;
    });

    // Call ExcelService to export data to Excel
    this.cs.exportAsExcel(exportData, 'Bill Mode');
  }
}







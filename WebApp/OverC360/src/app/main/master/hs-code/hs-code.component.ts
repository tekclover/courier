import { Component } from '@angular/core';
import { HsCodeService } from './hs-code.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../core/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CustomTableComponent } from '../../../common-dialog/custom-table/custom-table.component';
import { DeleteComponent } from '../../../common-dialog/delete/delete.component';
import { CommonServiceService } from '../../../common-service/common-service.service';
import { PathNameService } from '../../../common-service/path-name.service';

@Component({
  selector: 'app-hs-code',
  templateUrl: './hs-code.component.html',
  styleUrl: './hs-code.component.scss'
})
export class HsCodeComponent {

  hsCodeTable: any[] = [];
  selectedHsCode: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(
    private messageService: MessageService,
    private cs: CommonServiceService,
    private router: Router,
    private path: PathNameService,
    private service: HsCodeService,
    public dialog: MatDialog,
    private datePipe: DatePipe,
    private auth: AuthService,
    private spin: NgxSpinnerService
  ) { }

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Master', 'HS Code'];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'companyName', header: 'Company' },
      { field: 'hsCode', header: 'HS Code' },
      { field: 'itemCode', header: 'Item Code' },
      { field: 'itemDescription', header: 'Item Description' },
      { field: 'itemGroup', header: 'Item Group' },
      { field: 'specialApprovalText', header: 'Special Approval' },
      { field: 'statusDescription', header: 'Status' },
      { field: 'remark', header: 'Remarks' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: 'languageId', header: 'Language ID' },
      { field: 'languageDescription', header: 'Language' },
      { field: 'companyId', header: 'Company ID' },
      { field: 'specialApprovalId', header: 'Special Approval ID' },
      { field: 'statusId', header: 'Status ID' },
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
    setTimeout(() => {
      this.spin.show();
      let obj: any = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res: any) => {
          console.log(res);
          this.hsCodeTable = res;
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        },
      });
    }, 600);
  }

  onChange() {
    const choosen = this.selectedHsCode[this.selectedHsCode.length - 1];
    this.selectedHsCode.length = 0;
    this.selectedHsCode.push(choosen);
  }

  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '80%',
      position: { top: '6.5%', left: '30%' },
      data: { target: this.cols, source: this.target },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedHsCode[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    if (this.selectedHsCode.length === 0 && type != 'New') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        key: 'br',
        detail: 'Kindly select any row',
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedHsCode[0] : linedata,
        pageflow: type,
      });
      this.router.navigate(['/main/master/hsCode-new/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedHsCode.length === 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        key: 'br',
        detail: 'Kindly select any row',
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: {
        line: this.selectedHsCode,
        module: 'HS Code',
        body: 'This action cannot be undone. All values associated with this field will be lost.',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedHsCode[0]);
      }
    });
  }

  deleterecord(lines: any) {
    this.spin.show();
    this.service.Delete(lines.hsCode).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
          key: 'br',
          detail: lines.hsCode + ' Deleted successfully',
        });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      },
    });
  }

  downloadExcel() {
    const exportData = this.hsCodeTable.map((item) => {
      const exportItem: any = {};
      this.cols.forEach((col) => {
        if (col.format == 'date') {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(
            item[col.field],
            'dd-MM-yyyy'
          );
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });

    // Call ExcelService to export data to Excel
    this.cs.exportAsExcel(exportData, 'HS Code');
  }

}

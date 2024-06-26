import { Component } from '@angular/core';
import { ConsignmentService } from './consignment.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CustomTableComponent } from '../../../common-dialog/custom-table/custom-table.component';
import { DeleteComponent } from '../../../common-dialog/delete/delete.component';
import { CommonServiceService } from '../../../common-service/common-service.service';
import { PathNameService } from '../../../common-service/path-name.service';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrl: './consignment.component.scss'
})
export class ConsignmentComponent {
  consignmentTable: any[] = [];
  selectedConsignment: any[] = [];
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
    private spin: NgxSpinnerService
  ) {}

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Operation', 'Consignment - List'];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      
      { field: 'languageDescription', header: 'Language' },
      { field: 'companyId', header: 'Company ID' },
      { field: 'companyName', header: 'Company Name' },
      { field: 'statusDescription', header: 'Status' },
      { field: 'addressLine1', header: 'Address Line 1' },
      { field: 'addressLine2', header: 'Address Line 2' },
      { field: 'addressLine3', header: 'Address Line 3' },
      { field: 'addressLine4', header: 'Address Line 4' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: 'statusId', header: 'Status ID' },
      { field: 'languageId', header: 'Language ID' },
      { field: 'countryId', header: 'Country ID' },
      { field: 'countryName', header: 'Country Name' },
      { field: 'provinceId', header: 'Province ID' },
      { field: 'provinceName', header: 'Province Name' },
      { field: 'districtId', header: 'District ID' },
      { field: 'districtName', header: 'District Name' },
      { field: 'cityId', header: 'City ID' },
      { field: 'cityName', header: 'City Name' },
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
        this.consignmentTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });
  }

  onChange() {
    const choosen = this.selectedConsignment[this.selectedConsignment.length - 1];
    this.selectedConsignment.length = 0;
    this.selectedConsignment.push(choosen);
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
        this.deleterecord(this.selectedConsignment[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    console.log(3)
    if (this.selectedConsignment.length === 0 && type != 'New') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        key: 'br',
        detail: 'Kindly select any Row',
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedConsignment[0] : linedata,
        pageflow: type,
      });
      this.router.navigate(['/main/idMaster/consignment-new/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedConsignment.length === 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        key: 'br',
        detail: 'Kindly select any Row',
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: {
        line: this.selectedConsignment,
        module: 'Consignment',
        body: 'This action cannot be undone. All values associated with this field will be lost.',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedConsignment[0]);
      }
    });
  }

  deleterecord(lines: any) {
    this.spin.show();
    this.service.Delete(lines.consignmentId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
          key: 'br',
          detail: lines.consignmentId + ' Deleted successfully',
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
    const exportData = this.consignmentTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, 'Consignment');
  }
}

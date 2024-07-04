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
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  

  notificationTable: any[] = [];
  selectedNotification: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(private messageService: MessageService, private cs: CommonServiceService, private router: Router, private path: PathNameService, private service: NotificationService,
    public dialog: MatDialog, private datePipe: DatePipe, private auth: AuthService, private spin: NgxSpinnerService,
  ) { }

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Setup', 'Notification '];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'notificationId', header: 'Notification ID' },
      { field: 'notificationText', header: 'Description' },
      { field: 'companyName', header: 'Company' },
      { field: 'productName', header: 'Product' },
      { field: 'subProductName', header: 'Sub Product' },
      { field: 'serviceTypeText', header: 'Service Type Name' },
      { field: 'userRole', header: 'User Role' },
      { field: 'userName', header: 'User Name' },
      { field: 'statusDescription', header: 'Status' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: 'languageId', header: 'Language ID' },
      { field: 'languageDescription', header: 'Language' },
      { field: 'companyId', header: 'Company ID' },
      { field: 'statusId', header: 'Status ID' },
      { field: 'productId', header: 'Product ID' },
      { field: 'subProductId', header: 'SubProduct ID' },
      { field: 'serviceTypeId', header: 'ServiceType ID' },
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
    let obj: any = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    this.service.search(obj).subscribe({
      next: (res: any) => {
        console.log(res);
        this.notificationTable = res;
        this.spin.hide();
      }, error: (err: any) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
  }

  onChange() {
    const choosen = this.selectedNotification[this.selectedNotification.length - 1];
    this.selectedNotification.length = 0;
    this.selectedNotification.push(choosen);
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
        this.deleterecord(this.selectedNotification[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    if (this.selectedNotification.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedNotification[0] : linedata, pageflow: type });
      this.router.navigate(['/main/idMaster/notification-new/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedNotification.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: { line: this.selectedNotification, module: 'Notification', body: 'This action cannot be undone. All values associated with this field will be lost.' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleterecord(this.selectedNotification[0]);
      }
    });
  }
  deleterecord(lines: any) {
    this.spin.show();
    this.service.Delete(lines.notificationId).subscribe({
      next: (res: any) =>{
        this.messageService.add({ severity: 'success', summary: 'Deleted', key: 'br', detail: lines.notificationId + ' deleted successfully' });
        this.spin.hide();
        this.initialCall();
      },error: (err: any) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    })
  }

  downloadExcel() {
    const exportData = this.notificationTable.map(item => {
      const exportItem: any = {};
     this.cols.forEach(col => {
      if(col.format == 'date'){
        console.log(3)
        exportItem[col.field] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
      }else{
        exportItem[col.field] = item[col.field];
      }
       
      });
      return exportItem;
    });

    // Call ExcelService to export data to Excel
   this.cs.exportAsExcel(exportData, 'Notification');
  }
}

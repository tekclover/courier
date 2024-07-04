import { Component } from '@angular/core';
import { ModuleService } from './module.service';
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
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss'
})
export class ModuleComponent {
  moduleTable: any[] = [];
  selectedModule: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(
    private messageService: MessageService,
    private cs: CommonServiceService,
    private router: Router,
    private path: PathNameService,
    private service: ModuleService,
    public dialog: MatDialog,
    private datePipe: DatePipe, private auth: AuthService,
    private spin: NgxSpinnerService
  ) { }

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Setup', 'Module '];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'companyIdAndDescription', header: 'Company' },
      { field: 'moduleId', header: 'Module ID' },
      { field: 'moduleDescription', header: 'Description' },
      { field: 'menuName', header: 'Menu' },
      { field: 'subMenuName', header: 'Sub Menu' },
      { field: 'statusDescription', header: 'Status' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: 'statusId', header: 'Status ID' },
      { field: 'languageId', header: 'Language ID' },
      { field: 'companyId', header: 'Company ID' },
      { field: 'menuId', header: 'Menu ID' },
      { field: 'subMenuId', header: 'Sub Menu ID' },
      { field: 'languageIdAndDescription', header: 'Language' },
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
          res = this.cs.removeDuplicatesFromArrayList(res, 'moduleId')
          this.moduleTable = res;
          this.spin.hide();
        },
        error: (err: any) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        },
      });
    }, 600);
  }

  onChange() {
    const choosen = this.selectedModule[this.selectedModule.length - 1];
    this.selectedModule.length = 0;
    this.selectedModule.push(choosen);
  }

  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '80%',
      position: { top: '6.5%', left: '30%' },
      data: { target: this.cols, source: this.target },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.deleterecord(this.selectedModule[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    console.log(3)
    if (this.selectedModule.length === 0 && type != 'New') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        key: 'br',
        detail: 'Kindly select any row',
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedModule[0] : linedata,
        pageflow: type,
      });
      this.router.navigate(['/main/idMaster/module-new/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedModule.length === 0) {
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
        line: this.selectedModule,
        module: 'Module',
        body: 'This action cannot be undone. All values associated with this field will be lost.',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedModule[0]);
      }
    });
  }

  deleterecord(lines: any) {
    this.spin.show();
    this.service.Delete(lines.moduleId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
          key: 'br',
          detail: lines.moduleId + ' Deleted successfully',
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
    const exportData = this.moduleTable.map((item) => {
      const exportItem: any = {};
      this.cols.forEach((col) => {
        if (col.format == 'date') {
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
    this.cs.exportAsExcel(exportData, 'Module Id');
  }
}

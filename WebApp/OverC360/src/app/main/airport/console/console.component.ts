import { DatePipe } from '@angular/common';
import { AuthService } from '../../../core/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { TableRowExpandEvent, TableRowCollapseEvent } from 'primeng/table';
import { CustomTableComponent } from '../../../common-dialog/custom-table/custom-table.component';
import { DeleteComponent } from '../../../common-dialog/delete/delete.component';
import { CommonServiceService } from '../../../common-service/common-service.service';
import { PathNameService } from '../../../common-service/path-name.service';
import { ConsoleService } from './console.service';
import { ConsoleBulkComponent } from './console-bulk/console-bulk.component';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FormBuilder } from '@angular/forms';
import { ConsignmentLabelComponent } from '../../pdf/consignment-label/consignment-label.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrl: './console.component.scss'
})
export class ConsoleComponent {


  consoleTable: any[] = [];
  selectedConsole: any[] = [];
  cols: any[] = [];
  target: any[] = [];

  constructor(private messageService: MessageService, private cs: CommonServiceService, private router: Router, private path: PathNameService,
    public dialog: MatDialog, private datePipe: DatePipe, private fb: FormBuilder, private auth: AuthService, private spin: NgxSpinnerService, private service: ConsoleService, private label: ConsignmentLabelComponent
  ) { }

  fullDate: any;
  today: any;
  ngOnInit() {
    //to pass the breadcrumbs value to the main component
    const dataToSend = ['Mid-Mile', 'Console '];
    this.path.setData(dataToSend);

    this.callTableHeader();
    this.initialCall();
  }

  callTableHeader() {
    this.cols = [
      { field: 'companyId', header: 'Company' },
      { field: 'partnerMasterAirwayBill', header: 'Partner MAWB' },
      //  { field: 'partnerHouseAirwayBill', header: 'Partner HAWB' },
      //  { field: 'statusText', header: 'Status' },
      { field: 'hawbTypeDescription', header: 'Event' },
      { field: 'hawbTimeStamp', header: 'Time' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: 'partnerHouseAirwayBill', header: 'Partner HAWB' },
      { field: 'shipperName', header: 'Shipper' },
      { field: 'houseAirwayBill', header: 'Consignment No' },
      { field: 'description', header: 'Commodity' },
      { field: 'quantity', header: 'No of Piece' },
      { field: 'countryOfOrigin', header: 'Origin' },
      { field: 'grossWeight', header: 'Weight' },
      { field: 'airportOriginCode', header: 'Airport Origin Code' },
      { field: 'hsCode', header: 'HS Code' },
      { field: 'consigneeName', header: 'Consignee Name' },
      { field: 'consignmentValue', header: 'Consignment Value' },
      { field: 'consignmentCurrency', header: 'Consignment Currency' },
      { field: 'customsValue', header: 'Customs Value' },
      { field: 'iata', header: 'IATA Charges' },
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
          res = this.cs.removeDuplicatesFromArrayList(res, 'partnerMasterAirwayBill')
          this.consoleTable = res;
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
    const choosen = this.selectedConsole[this.selectedConsole.length - 1];
    this.selectedConsole.length = 0;
    this.selectedConsole.push(choosen);
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
        this.deleterecord(this.selectedConsole[0]);
      }
    });
  }

  openCrud(type: any = 'New', linedata: any = null): void {
    if (this.selectedConsole.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsole[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/console-new/' + paramdata]);
    }
  }
  openEdit(type: any = 'New', linedata: any = null): void {
    if (this.selectedConsole.length === 0 && type != 'New') {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any Row' });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsole[0] : linedata, pageflow: type });
      this.router.navigate(['/main/airport/console-edit/' + paramdata]);
    }
  }

  deleteDialog() {
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: '60%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '30%' },
      data: { line: this.selectedConsole, module: 'Console', body: 'This action cannot be undone. All values associated with this field will be lost.' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const consoleID = this.selectedConsole.map(item => item.consoleId);
        this.service.search({ consoleId: consoleID, companyId: [this.auth.companyId] }).subscribe({
          next: (res: any) => {
            this.deleterecord(res);
          }, error: (err) => {
            this.spin.hide();
            this.cs.commonerrorNew(err);
          }
        })
      }
    });
  }

  deleterecord(lines: any) {
    this.spin.show();
    console.log(lines)
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

    const cols = [
      { field: 'partnerMasterAirwayBill', header: '#', format: 'number' },
      { field: 'partnerMasterAirwayBill', header: 'AWB' },
      { field: 'countryOfOrigin', header: 'Origin' },
      { field: 'airportOriginCode', header: 'Origin Code' },
      { field: 'shipperName', header: 'Shipper' },
      { field: 'grossWeight', header: 'WT KG' },
      { field: 'noOfPieces', header: 'PCS' },
      { field: 'description', header: 'Description' },
      { field: 'consigneeName', header: 'Consignee Name' },
      { field: 'consignmentCurrency', header: 'Currency' },
      { field: 'consignmentValue', header: 'Value' },
      { field: 'customsValue', header: 'Customs KD' },
      { field: 'iata', header: 'IATA KD' },
      { field: 'hsCode', header: 'HS Code' },
      { field: 'consoleId', header: 'Console ID', format : 'none' },
    ];

    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return
    }
    const consignmentId = this.selectedConsole.map(item => item.partnerMasterAirwayBill);
    this.service.search({ partnerMasterAirwayBill: consignmentId }).subscribe({
      next: (result) => {

        // const currentDate = new Date().toLocaleDateString();
        // const headerRow = {
        //   '': '#',
        //   '': 'AWB',
        //   '': 'Origin',
        //   '': 'Origin Code',
        //   currentDate: 'Shipper',
        //   '': 'WT KG',
        //   '': 'PCS',
        //   '': 'Description',
        //   '': 'Consignee Name',
        //   '': 'Currency',
        //   '': 'Value',
        //   '': 'Customs KD',
        //   '': 'IATA KD',
        //   '': 'HS Code'
        // };

        const exportData = result.map((item: any, index: any) => {
          const exportItem: any = {};
          cols.forEach(col => {
            if (col.format == 'number') {
              exportItem[col.header] = index + 1;
            }else {
              exportItem[col.header] = item[col.field];
            }
          });
          return exportItem;
        });
        this.cs.downloadExcel(exportData, 'Console', 'Console ID');
      }
    })

  }

  groupBy(array: any[], key: string) {
    return array.reduce((result: { [x: string]: any[]; }, currentValue: { [x: string]: any; }) => {
      const groupKey = currentValue[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      return result;
    }, {});
  }


 downloadExcelWB() {

    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return
    }

    const cols = [
      { field: 'partnerMasterAirwayBill', header: '#', format: 'number' },
      { field: 'partnerHouseAirwayBill', header: 'AWB' },
      { field: 'countryOfOrigin', header: 'Origin' },
      { field: 'airportOriginCode', header: 'Origin Code' },
      { field: 'shipperName', header: 'Shipper' },
      { field: 'grossWeight', header: 'WT KG' },
      { field: 'noOfPieces', header: 'PCS' },
      { field: 'description', header: 'Description' },
      { field: 'consigneeName', header: 'Consignee Name' },
      { field: 'currency', header: 'Currency' },
      { field: 'consignmentValue', header: 'Value' },
      { field: 'customsValue', header: 'Customs KD' },
      { field: 'iata', header: 'IATA KD' },
      { field: 'hsCode', header: 'HS Code' },
    ];
  
    const consignmentIds = this.selectedConsole.map(item => item.partnerMasterAirwayBill);
    this.service.search({ partnerMasterAirwayBill: consignmentIds }).subscribe({
      next: (result) => {
        const groupedByConsoleId = this.groupBy(result, 'consoleId');
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
  
        for (const consoleId in groupedByConsoleId) {
          if (groupedByConsoleId.hasOwnProperty(consoleId)) {
            const consoleData = groupedByConsoleId[consoleId];
            // New row to be added before console data
            const newRow = {
              '#': '',
              'AWB': consoleData[0].consoleGroupName != null ? consoleData[0].consoleGroupName : '',
              'Origin': consoleData[0].consoleName != null ? consoleData[0].consoleName : '',
              'Origin Code': '',
              'Shipper': '',
              'WT KG': '',
              'PCS': '',
              'Description': consoleId,
              'Consignee Name': consoleData[0].partnerMasterAirwayBill,
              'Currency': '',
              'Value': 'Date',
              'Customs KD': this.datePipe.transform(new Date, 'dd-MM-yyyy'),
              'IATA KD': '',
              'HS Code': '',
              'Console ID': '' // Include the console ID in the new row
            };
  
            const consoleSheetData: any[] = [];
  
            
            // Add new row (newRow) as the first row
            consoleSheetData.push(Object.values(newRow).map(String));
  
            // Add headers from cols as the second row
            consoleSheetData.push(cols.map(col => col.header));
  
            // Map console data and convert to array of values
            const consoleRows = Object.values(consoleData).map((item:any, index:any) => {
              const exportItem: any = {};
              cols.forEach(col => {
                // if (col.format == 'date') {
                //   exportItem[col.header] = this.datePipe.transform(item[col.field], 'dd-MM-yyyy');
                // } else {
                //   exportItem[col.header] = item[col.field];
                // }
                if (col.format == 'number') {
                  exportItem[col.header] = index + 1;
                } else {
                  exportItem[col.header] = item[col.field];
                }
              });
              return Object.values(exportItem).map(String);
            });
  
            // Add console data rows after headers
            consoleSheetData.push(...consoleRows);

            const consoleSheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(consoleSheetData);
            XLSX.utils.book_append_sheet(wb, consoleSheet, `CONSOLE-${consoleId}`);
          }
        }
  
        // Generate and download the Excel file
        XLSX.writeFile(
          wb,
          `CONSOLE_${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}.xlsx`
          );
      }
    });
  }
  
  
  

  onRowExpand(event: TableRowExpandEvent) {
  }
  onRowCollapse(event: TableRowCollapseEvent) {
  }

  getColspan(): number {
    return this.cols.length + 2; // +1 for the expanded content column
  }
  isSelected(item: any): boolean {
    return this.selectedConsole.includes(item);
  }

  searchform = this.fb.group({
    houseAirwayBill: [],
    masterAirwayBill: [],
    partnerId: [],
    consoleId: [],
    statusId: [],
    companyId: [[this.auth.companyId],],
    languageId: [[this.auth.languageId],]
  })

  readonly fieldDisplayNames: Record<string, string> = {
    houseAirwayBill: 'Consignment No',
    masterAirwayBill: 'MAWB',
    partnerId: 'Partner',
    consoleId: 'Console ID',
    statusId: 'Status'
  };

  houseAirwayBillDropdown: any = [];
  masterAirwayBillDropdown: any = [];
  partnerDropdown: any = [];
  statusDropdown: any = [];
  consoleIdDropdown: any = [];

  getSearchDropdown() {

    this.consoleTable.forEach(res => {

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
      if (res.consoleId != null) {
        this.consoleIdDropdown.push({ value: res.consoleId, label: res.consoleId });
        this.consoleIdDropdown = this.cs.removeDuplicatesFromArrayList(this.consoleIdDropdown, 'value');
      }
    })
    //  this.statusDropdown = [{ value: '17', label: 'Inactive' }, { value: '16', label: 'Active' }];
  }

  @ViewChild('console') overlayPanel!: OverlayPanel;
  closeOverLay() {
    this.overlayPanel.hide();
  }

  fieldsWithValue: any
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues)
      .filter(key => formValues[key as keyof typeof formValues] !== null && formValues[key as keyof typeof formValues] !== undefined && key !== 'companyId' && key !== 'languageId')
      .map(key => this.fieldDisplayNames[key] || key);

    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res: any) => {
        this.consoleTable = res;
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
      consoleId: [],
      statusId: [],
      companyId: [[this.auth.companyId],],
      languageId: [[this.auth.languageId],]
    })
    this.search();
  }

  chipClear(value: any) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find(key => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
  generateLabel() {
    this.uniquePieceId = [];
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return
    }
    let obj: any = {};
    obj.consoleId = [this.selectedConsole[0].consoleId];
    this.service.search(obj).subscribe({
      next: (res: any) => {
        this.uniquePieceId = this.cs.removeDuplicatesFromArrayList(res, 'pieceId');
        const pieceId = this.uniquePieceId.map(item => item.pieceId);
        this.label.getResultLabel(pieceId)
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });
  }
  houseAirwayBill: any;

  generateInvoice() {
    this.uniqueHouseAirway = [];
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return
    }
    let obj: any = {};
    obj.consoleId = [this.selectedConsole[0].consoleId];
    this.service.search(obj).subscribe({
      next: (res: any) => {
        this.uniqueHouseAirway = this.cs.removeDuplicatesFromArrayList(res, 'houseAirwayBill');
        const houseAirwayBillArray = this.uniqueHouseAirway.map(item => item.houseAirwayBill);
        this.label.getResultInvoice(houseAirwayBillArray)
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });
  }


  uniquePieceId: any[] = [];
  uniqueHouseAirway: any[] = [];
  generateMerge() {
    this.uniqueHouseAirway = [];
    this.uniquePieceId = [];
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return
    }
    let obj: any = {};
    obj.consoleId = [this.selectedConsole[0].consoleId];
    this.service.search(obj).subscribe({
      next: (res: any) => {
        this.uniquePieceId = this.cs.removeDuplicatesFromArrayList(res, 'pieceId');
        this.uniqueHouseAirway = this.cs.removeDuplicatesFromArrayList(res, 'houseAirwayBill');
        const pieceId = this.uniquePieceId.map(item => item.pieceId);
        const houseAirwayBillArray = this.uniqueHouseAirway.map(item => item.houseAirwayBill);
        this.label.generateMutiple(pieceId, houseAirwayBillArray)
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });

  }

  @ViewChild('fileInput1') fileInput1!: ElementRef;
  uploadBayan() {
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return;
    }
    this.fileInput1.nativeElement.click();
  }
  selectedFiles: File | null = null;
  onFileSelectedBayan(event: any): void {
    const filePath = '/' + this.selectedConsole[0].consoleId + '/';
    const file: File = event.target.files[0];
    this.selectedFiles = file;
    this.spin.show();
    this.service.uploadBayan(this.selectedFiles, filePath).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Uploaded',
          key: 'br',
          detail: 'File uploaded successfully',
        });
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
}

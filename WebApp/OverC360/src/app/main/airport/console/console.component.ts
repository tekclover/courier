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
import { Workbook } from 'exceljs';

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
        const partnerMasterAirwayBill = this.selectedConsole.map(item => item.partnerMasterAirwayBill);
        this.service.search({ partnerMasterAirwayBill: partnerMasterAirwayBill, companyId: [this.auth.companyId] }).subscribe({
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

  generateExcel() {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    const base64Image1 = 'data:image/png;base64iVBORw0KGgoAAAANSUhEUgAACAAAAAKPCAYAAAD5MSpzAACAAElEQVR42uzdd5gkV3mo8XfS5tzSrkJJWkmlDIOGIEAkkUQ22UQTjHH22GCMA8ZgHLHxtT3XOcC1DTY5mYyEACGUGWkUVtL2rsL25q3NaWLfP06NWckraXe6e7rq9Pt7nn6EMerpPn2q6oTvfB9IkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJki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IkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZKkzvl/MSs3ptaEadYAAAAASUVORK5CYII=,';
    // Add your logo
    const logoId = workbook.addImage({
      base64: base64Image1, 
     extension: 'png',
    });

    worksheet.addImage(logoId, {
      tl: { col: 4, row: 4 },
      ext: { width: 150, height: 100 },
    });

    // Save the workbook to a Blob
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Create a temporary anchor element
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'LogoExample.xlsx';
      document.body.appendChild(a);

      // Simulate click to trigger download
      a.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  }

  downloadExcelWBRD() {

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

}

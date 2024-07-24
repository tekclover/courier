import { Workbook } from 'exceljs';
import * as ExcelJS from 'exceljs';
import { iwExpressLogo } from "../../../../config/pdfFonts";

downloadExcelWB12() {
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', key: 'br', detail: 'Kindly select any row' });
      return;
    }
  
    const cols = [
      { field: 'partnerMasterAirwayBill', header: '#' },
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
  
        const workbook = new ExcelJS.Workbook();
        const currentDate = new Date();
        const worksheetPromises = [];
  
        for (const consoleId in groupedByConsoleId) {
          if (groupedByConsoleId.hasOwnProperty(consoleId)) {
            const consoleData = groupedByConsoleId[consoleId];
  
            const worksheet = workbook.addWorksheet(`CONSOLE-${consoleId}`);
  
            // Add image to worksheet (assuming iwExpressLogo.headerLogo is your base64 image)
            const base64Image1 = iwExpressLogo.headerLogo;
            const logoId = workbook.addImage({
              base64: base64Image1,
              extension: 'png',
            });
            worksheet.addImage(logoId, {
              tl: { col: 4, row: 0 }, // Top-left position
              ext: { width: 350, height: 100 }, // Width and height
            });
  
            // Skip 5 rows before adding headers and data
            for (let i = 0; i < 4; i++) {
              worksheet.addRow([]); // Add empty rows to skip
            }
  
            // Add headers
            worksheet.addRow(Object.values(cols.map(col => col.header)));
  
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
              'Customs KD': this.datePipe.transform(currentDate, 'dd-MM-yyyy'),
              'IATA KD': '',
              'HS Code': '',
              'Console ID': consoleId // Include the console ID in the new row
            };
  
            worksheet.addRow(Object.values(newRow));
  
            // Map console data and convert to rows
            consoleData.forEach((item:any) => {
              const exportItem: any = {};
              cols.forEach(col => {
                if (col.field === 'partnerMasterAirwayBill') {
                  exportItem[col.header] = item[col.field];
                } else if (col.field === 'grossWeight' || col.field === 'noOfPieces') {
                  exportItem[col.header] = item[col.field];
                } else {
                  exportItem[col.header] = item[col.field] || '';
                }
              });
              worksheet.addRow(Object.values(exportItem));
            });
  
            worksheetPromises.push(worksheet);
          }
        }
           // Prepare file for download
           workbook.xlsx.writeBuffer().then((data) => {
            const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
            // Create a temporary anchor element
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `CONSOLE_${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}.xlsx`;
            document.body.appendChild(a);
      
            // Simulate click to trigger download
            a.click();
      
            // Clean up
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
          });
      }
    });
  }




  downloadExcelWB1(res: any) {
    const workbook = new ExcelJS.Workbook();
    const dateStr = format(new Date(), 'dd-MM-yyyy');
  
    const consoleManifestColumns = [
      { field: 'partnerMasterAirwayBill', header: '#' },
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
  
    const invoicesColumns = [
      { header: 'Airway Bill No', field: 'partnerHouseAirwayBill' },
      { header: 'Consignee Name', field: 'consigneeName' },
      { header: 'Consignee Civil ID', field: 'consigneeCivilId' },
      { header: 'Invoice Number', field: 'invoiceNumber' },
      { header: 'Invoice Date', field: 'invoiceDate' },
      { header: 'Invoice Type', field: 'invoiceType' },
      { header: 'Currency', field: 'currency' },
      { header: 'Invoice Supplier Name', field: 'invoiceSupplierName' },
      { header: 'Freight Currency', field: 'consignmentLocalId' },
      { header: 'Freight Charges', field: 'freightCharges' },
      { header: 'Country Of Supply', field: 'countryOfOrigin' }
    ];
  
    const invoiceItemsColumns = [
      { header: 'BillNumber', field: 'partnerHouseAirwayBill' },
      { header: 'InvoiceNumber', field: 'invoiceNumber' },
      { header: 'HSCode', field: 'hsCode' },
      { header: 'GoodsDescription', field: 'goodsDescription' },
      { header: 'Country Of Origin', field: 'countryOfOrigin' },
      { header: 'Manufacturer', field: 'manufacturer' },
      { header: 'No Of Packages', field: 'noOfPieceHawb' },
      { header: 'Item Total Price', field: 'consignmentValue' },
      { header: 'Package Type', field: 'packageType' },
      { header: 'Quantity', field: 'quantity' },
      { header: 'Net Weight', field: 'netWeight' },
      { header: 'Gross Weight', field: 'grossWeight' },
      { header: 'Is Exempted', field: 'isExempted' },
      { header: 'Exemption For', field: 'exemptionFor' },
      { header: 'Exemption Beneficiary', field: 'exemptionBeneficiary' },
      { header: 'Exemption Reference', field: 'exemptionReference' }
    ];
  
    let index = 0;
    const currentDate = new Date();

    const groupedByConsoleId = this.groupBy(res, 'consoleId');
    for (const consoleId in groupedByConsoleId) {
      if (groupedByConsoleId.hasOwnProperty(consoleId)) {
        const consoleData = groupedByConsoleId[consoleId];
  
        const worksheetConsole = workbook.addWorksheet(`CONSOLE-${index + 1}`);
        worksheetConsole.columns = consoleManifestColumns;
  
        // Add new row
        const newRow = {
          index: '',
          partnerHouseAirwayBill: consoleData[0].consoleGroupName || '',
          airportOriginCode: consoleData[0].consoleName || '',
          countryOfOrigin: '',
          shipperName: '',
          grossWeight: '',
          noOfPieces: '',
          description: consoleId,
          consigneeName: consoleData[0].partnerMasterAirwayBill,
          currency: '',
          consignmentValue: 'Date',
          consignmentValueLocal: dateStr,
          iata: '',
          hsCode: '',
          consoleId: consoleId
        };
        worksheetConsole.addRow(newRow);
  
        // Add console data rows
        consoleData.forEach((item: any, idx: number) => {
          const exportItem: any = {};
          consoleManifestColumns.forEach(col => {
            if (col.field === 'partnerMasterAirwayBill') {
              exportItem[col.header] = item[col.field];
            } else if (col.field === 'grossWeight' || col.field === 'noOfPieces') {
              exportItem[col.header] = item[col.field];
            } else {
              exportItem[col.header] = item[col.field] || '';
            }
          });
          worksheetConsole.addRow(exportItem);
        });
  
        const groupedByCcrId = this.groupBy(consoleData, 'ccrId');
  
        for (const ccrId in groupedByCcrId) {
          if (groupedByCcrId.hasOwnProperty(ccrId)) {
            const ccrData = groupedByCcrId[ccrId];
  
            const worksheetInvoices = workbook.addWorksheet(`INVOICES-${index + 1}`);
            worksheetInvoices.columns = invoicesColumns;
  
            ccrData.forEach((item:any) => {
              const exportItem: any = {};
              invoicesColumns.forEach(col => {
                exportItem[col.header] = item[col.field];
              });
              
              worksheetInvoices.addRow(exportItem);
            });
  
            const worksheetInvoiceItems = workbook.addWorksheet(`INVOICEITEM-${index + 1}`);
            worksheetInvoiceItems.columns = invoiceItemsColumns;
  
            ccrData.forEach((item:any) => {
              const exportItem: any = {};
              invoiceItemsColumns.forEach(col => {
                  exportItem[col.header] = item[col.field];
              });
              worksheetInvoiceItems.addRow(exportItem);
            });
          }
        }
      }
      index++;
    }
  
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Create a temporary anchor element
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `CONSOLE_${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}.xlsx`;
      document.body.appendChild(a);

      // Simulate click to trigger download
      a.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  }
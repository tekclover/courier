import { Component, Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from "../../../../assets/font/vfs_fonts.js"
// @ts-ignore
import { iwExpressLogo } from "../../../../assets/font/iwExpress.js";
import JsBarcode from 'jsbarcode';
import { DatePipe } from '@angular/common';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
//pdfMake.fonts = fonts;
pdfMake.fonts = {
  Roboto: {
    normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf'
  }
}

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-consignment-label',
  templateUrl: './consignment-label.component.html',
  styleUrl: './consignment-label.component.scss'
})
export class ConsignmentLabelComponent {
  constructor(
    public datePipe: DatePipe) { }
  generateBarcode(text: string) {
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, text, { height: 80 });
    return canvas.toDataURL('image/png');
  }
  generatePdfBarocde(line: any) {
    let createdOn = this.datePipe.transform(line.createdOn, 'dd-MMM-yyyy HH:mm')
    var dd: any;
    let headerTable: any[] = [];

    headerTable.push([
      { image: iwExpressLogo.headerLogo, fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
    ]);

    dd = {
      pageSize: "A6",
      pageOrientation: "portrait",
      pageMargins: [10, 10, 10, 10],
      // header(currentPage: number, pageCount: number, pageSize: any): any {
      //   return [
      //     {
      //       table: {
      //         headerRows: 1,
      //         widths: ['*', '*'],
      //         body: headerTable
      //       },
      //       margin: [5, 5, 5, 5]
      //     }
      //   ]
      // },
      styles: {
        anotherStyle: {
          bordercolor: '#6102D3'
        }
      },
      footer(currentPage: number, pageCount: number, pageSize: any): any {
        return [{
          text: '', //Page ' + currentPage + ' of ' + pageCount
          style: 'header',
          alignment: 'center',
          bold: true,
          fontSize: 6
        }]
      },
      content: ['\n'],
    };


    let barcodeAWB: any[] = [];
    const barcodeImageData1 = this.generateBarcode(line.houseAirwayBill);
    barcodeAWB.push([
      { image: iwExpressLogo.headerLogo, margin: [0, -15, 0, 0], fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
      { image: barcodeImageData1, margin: [0, -15, 0, 0], fit: [100, 100], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
      { image: iwExpressLogo.jntLogo, margin: [0, -10, 0, 0], fit: [50, 50], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
    ]);

    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [95, 80, '*'],
          body: barcodeAWB,
        },
      }, '\n'
    )
    let bodyArray: any[] = [];
    bodyArray.push([
      { text: 'Label Date', bold: true, fontSize: 6, border: [false, false, false, true] },
      { text: createdOn, bold: false, fontSize: 6, border: [false, false, false, true] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, true] },
      { text: 'Cus Ref No', bold: true, fontSize: 6, border: [false, false, false, true] },
      { text: (line.originDetails.country), bold: false, fontSize: 6, border: [false, false, false, true] }
    ]);
    bodyArray.push([
      { text: 'Org Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
      { text: (line.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
      { text: 'Dest Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
      { text: (line.destinationDetails.country), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray.push([
      { text: 'Cust Name', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.consigneeName), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Dest State', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.destinationDetails.state), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray.push([
      { text: 'Mode', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.subProductName), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Dest City', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.destinationDetails.city), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray.push([
      { text: 'Declared Value', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.declaredValue), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Inco-Terms', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.incoTerms), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray.push([
      { text: 'Load Type ', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.loadType), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Weight', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.weight), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray.push([
      { text: 'COD', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: ((line.paymentType) == "COD" ? 'Yes' : 'No'), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Service Type', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.serviceTypeText), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray.push([
      { text: 'Insurance', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Yes', bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Customs Charge', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.customsValue), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray.push([
      { text: 'Piece Count', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.noOfPieceHawb), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Currency Code', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.currency), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray.push([
      { text: 'No.of items in Piece', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.noOfItemPiece), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Item Description', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.goodsDescription), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [60, 60, 5, 60, 60],
          body: bodyArray,
        },
      },
    )

    let bodyArray2: any[] = [];
    bodyArray2.push([
      { text: 'Shipper Name', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
      { text: (line.originDetails.name), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
      { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
      { text: 'Org Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
      { text: (line.originDetails.country), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] }
    ]);
    bodyArray2.push([
      { text: 'State', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.originDetails.state), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'City', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.originDetails.city), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray2.push([
      { text: 'Phone', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.originDetails.phone), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Phone 2', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.originDetails.alternatePhone), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [60, 60, 5, 60, 60],
          body: bodyArray2,
        },
      },
    )
    let bodyArray3: any[] = [];
    bodyArray3.push([
      { text: 'Addresss', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.originDetails.addressLine1 != null ? line.originDetails.addressLine1 : '') + ' ' + '' + (line.originDetails.addressLine2 != null ? line.originDetails.addressLine2 : ''), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [60, '*'],
          body: bodyArray3,
        },
      },
    )

    let bodyArray4: any[] = [];
    bodyArray4.push([
      { text: 'Recipient Name', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
      { text: (line.destinationDetails.name), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
      { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
      { text: 'Dest Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
      { text: (line.destinationDetails.country), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] }
    ]);
    bodyArray4.push([
      { text: 'State', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.destinationDetails.state), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'City', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.destinationDetails.city), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    bodyArray4.push([
      { text: 'Phone', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.destinationDetails.phone), bold: false, fontSize: 6, border: [false, false, false, false] },
      { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: 'Phone 2', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.destinationDetails.alternatePhone), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [60, 60, 5, 60, 60],
          body: bodyArray4,
        },
      },
    )
    let bodyArray5: any[] = [];
    bodyArray5.push([
      { text: 'Addresss', bold: true, fontSize: 6, border: [false, false, false, false] },
      { text: (line.destinationDetails.addressLine1 != null ? line.destinationDetails.addressLine1 : '') + '' + (line.destinationDetails.addressLine1 != null ? line.destinationDetails.addressLine1 : ''), bold: false, fontSize: 6, border: [false, false, false, false] }
    ]);
    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [60, '*'],
          body: bodyArray5,
        },
      },
    )


    let pieceId: any[] = [];
    const pieceIdcode = this.generateBarcode(line.pieceDetails.length > 0 ? line.pieceDetails[0].pieceId : null);
    const partnercode = this.generateBarcode(line.partnerHouseAirwayBill);
    pieceId.push([
      { text: 'Piece Id', bold: true, alignment: 'left', margin: [0, 5, 0, 0], fontSize: 6, border: [false, true, false, false] },
      { text: 'Partner AWB', bold: true, alignment: 'right', margin: [0, 5, 0, 0], fontSize: 6, border: [false, true, false, false] },
    ]);

    pieceId.push([
      { image: pieceIdcode, margin: [0, -5, 0, 0], fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
      { image: partnercode, margin: [0, -5, 0, 0], fit: [80, 80], alignment: 'right', bold: false, fontSize: 12, border: [false, false, false, false] },
    ]);

    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [30, '*'],
          body: pieceId,
        },
      }, '\n'
    )

    pdfMake.createPdf(dd).open();
  }

  generatePdfInvoice(line: any) {
    console.log(line)
    let createdOn = this.datePipe.transform(line.createdOn, 'dd-MMM-yyyy HH:mm')
    var dd: any;
    let headerTable: any[] = [];

    headerTable.push([
      { image: iwExpressLogo.headerLogo, fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
    ]);

    dd = {
      pageSize: "A6",
      pageOrientation: "portrait",
      pageMargins: [10, 10, 10, 10],
      // header(currentPage: number, pageCount: number, pageSize: any): any {
      //   return [
      //     {
      //       table: {
      //         headerRows: 1,
      //         widths: ['*', '*'],
      //         body: headerTable
      //       },
      //       margin: [5, 5, 5, 5]
      //     }
      //   ]
      // },
      styles: {
        anotherStyle: {
          bordercolor: '#6102D3'
        }
      },
      footer(currentPage: number, pageCount: number, pageSize: any): any {
        return [{
          text: '', //Page ' + currentPage + ' of ' + pageCount
          style: 'header',
          alignment: 'center',
          bold: true,
          fontSize: 6
        }]
      },
      content: ['\n'],
    };


    let barcodeAWB: any[] = [];
    const barcodeImageData1 = this.generateBarcode(line.houseAirwayBill);
    barcodeAWB.push([
      { image: iwExpressLogo.headerLogo, margin: [0, -15, 0, 0], fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
      { text: '', margin: [0, -15, 0, 0], fit: [100, 100], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
      { text: '', margin: [0, -10, 0, 0], fit: [50, 50], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
    ]);
    barcodeAWB.push([
      { text: '', margin: [0, -15, 0, 0], fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
      { text: 'Invoice', margin: [0, -10, 15, 0], fit: [100, 100], alignment: 'center', bold: false, fontSize: 13, border: [false, false, false, false] },
      { text: '', margin: [0, -10, 0, 0], fit: [50, 50], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
    ]);

    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [95, 80, '*'],
          body: barcodeAWB,
        },
      }, '\n'
    )
    let bodyArray67: any[] = [];
    bodyArray67.push([
      { text: 'Sender', bold: true, fontSize: 6, alignment: 'center', border: [true, true, true, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '', bold: false, fontSize: 6, alignment: 'center', border: [false, false, false, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Receiver', bold: true, fontSize: 6, alignment: 'center', border: [true, true, true, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },

    ]);
    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [127, '*', 127],
          body: bodyArray67,
        },
      }, '\n'
    )
    let bodyArray: any[] = [];
    bodyArray.push([
      { text: '1.' + (line.originDetails.addressLine1), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '', bold: false, fontSize: 6, border: [false, false, false, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '1.' + (line.destinationDetails.addressLine1), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },

    ]);
    bodyArray.push([
      { text: '2.' + (line.originDetails.addressLine2), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '', bold: false, fontSize: 6, border: [false, false, false, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '2.' + (line.destinationDetails.addressLine2 != null ? line.destinationDetails.addressLine2 : ''), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },

    ]);

    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [127, '*', 127],
          body: bodyArray,
        },
        margin: [0, -14, 0, 0],
      },
    )
    let bodyArray88: any[] = [];
    bodyArray88.push([
      { text: 'City', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.originDetails.city), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Country', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.originDetails.country), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '', bold: false, fontSize: 6, border: [false, false, false, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'City ', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.destinationDetails.city), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Country', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.destinationDetails.country), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },

    ]);
    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [30, 30, 22, 18, '*', 30, 30, 22, 18],
          body: bodyArray88,
        },
        margin: [0, -1, 0, 0],
      },
    )
    let bodyArray97: any[] = [];
    bodyArray97.push([
      { text: 'Telephone', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.originDetails.phone), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '', bold: false, fontSize: 6, border: [false, false, false, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Telephone', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.destinationDetails.phone), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },


    ]);



    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [59, 59, '*', 59, 59],
          body: bodyArray97,
        },
        margin: [0, -1, 0, 0],
      },
    )

    let bodyArray2: any[] = [];
    bodyArray2.push([
      { text: 'QTY', bold: true, margin: [0, 2, 0, 0], alignment: 'left', fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'HS Code', bold: true, margin: [0, 2, 0, 0], alignment: 'left', fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Description', bold: true, margin: [0, 2, 0, 0], alignment: 'left', fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Weight', bold: true, margin: [0, 2, 0, 0], alignment: 'left', fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Unit Value', bold: true, margin: [0, 2, 0, 0], alignment: 'left', fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Total Value', bold: true, margin: [0, 2, 0, 0], alignment: 'left', fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Currency', bold: true, margin: [0, 2, 0, 0], alignment: 'left', fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Country of Origin', bold: true, margin: [0, 2, 0, 0], alignment: 'left', fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'INCO TERMS', bold: true, margin: [0, 2, 0, 0], alignment: 'left', fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
    ]);
    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [22, 22, 22, 22, 22, 22, 22, 22, 23],
          body: bodyArray2,
        },
        margin: [0, 20, 0, 0],
      },
    )

    for (let i = 0; i < line.pieceDetails.length; i++) {
      let bodyArray6: any[] = [];
      bodyArray6.push([
        { text: (line.noOfPieceHawb), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line.pieceDetails[i].hsCode), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line.pieceDetails[i].description), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line.pieceDetails[i].weight), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line.pieceDetails[i].declaredValue), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line.pieceDetails[i].declaredValue), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line.pieceDetails[i].currency), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line.countryOfOrigin), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line.incoTerms), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      ]);


      dd.content.push(
        {
          table: {
            headerRows: 1,
            widths: [22, 22, 22, 22, 22, 22, 22, 22, 23],
            body: bodyArray6,
          },
          margin: [0, -1, 0, 0],
        },
      )
    }
    let bodyArray3: any[] = [];
    bodyArray3.push([
      { text: 'Piece', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.originDetails.noOfPackageHawb), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'DATE', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: createdOn, bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] }
    ]);
    bodyArray3.push([
      { text: 'Weight', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.weight), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'AWB', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.partnerHouseAirwayBill), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] }
    ]);
    bodyArray3.push([
      { text: 'Total Commerical Invoice Value', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.consignmentValue), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Prepaid', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line.paymentType == 'Prepaid' ? (line.paymentType) : '0'), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] }
    ]);
    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [61, 61, 61, 61],
          body: bodyArray3,
        },
        margin: [0, 20, 0, 0],
      },
    )
    let bodyArray125: any[] = [];
    bodyArray125.push([
      { text: 'I DECLARE THAT ABOVE INFORMATION IS TRUE AND CORRECT TO MY KNOWLEDGE', bold: true, fontSize: 6, alignment: 'center', border: [false, false, false, false] },



    ]);



    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: ['*'],
          body: bodyArray125,
        },
        margin: [0, 30, 0, 0],
      },
    )



    pdfMake.createPdf(dd).open();
  }


  generatePdfBarocdeMutiple(result: any) {
    let createdOn = this.datePipe.transform(result[0].createdOn, 'dd-MMM-yyyy HH:mm')
    var dd: any;
    let headerTable: any[] = [];

    headerTable.push([
      { image: iwExpressLogo.headerLogo, fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
    ]);

    dd = {
      pageSize: "A6",
      pageOrientation: "portrait",
      pageMargins: [10, 10, 10, 10],
      styles: {
        anotherStyle: {
          bordercolor: '#6102D3'
        }
      },
      footer(currentPage: number, pageCount: number, pageSize: any): any {
        return [{
          text: '', //Page ' + currentPage + ' of ' + pageCount
          style: 'header',
          alignment: 'center',
          bold: true,
          fontSize: 6
        }]
      },
      content: ['\n'],
    };


    let barcodeAWB: any[] = [];
    const barcodeImageData1 = this.generateBarcode(result[0].houseAirwayBill);
    barcodeAWB.push([
      { image: iwExpressLogo.headerLogo, margin: [0, -15, 0, 0], fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
      { image: barcodeImageData1, margin: [0, -15, 0, 0], fit: [100, 100], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
      { image: iwExpressLogo.jntLogo, margin: [0, -10, 0, 0], fit: [50, 50], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
    ]);

    dd.content.push(
      {
        table: {
          headerRows: 1,
          widths: [95, 80, '*'],
          body: barcodeAWB,
        },
      }, '\n'
    )
    result.forEach((line: any) => {
      let bodyArray: any[] = [];
      bodyArray.push([
        { text: 'Label Date', bold: true, fontSize: 6, border: [false, false, false, true] },
        { text: createdOn, bold: false, fontSize: 6, border: [false, false, false, true] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, true] },
        { text: 'Cus Ref No', bold: true, fontSize: 6, border: [false, false, false, true] },
        { text: (line.originDetails.country), bold: false, fontSize: 6, border: [false, false, false, true] }
      ]);
      bodyArray.push([
        { text: 'Org Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.country), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Cust Name', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.consigneeName), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.state), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Mode', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.subProductName), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.city), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Declared Value', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.declaredValue), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Inco-Terms', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.incoTerms), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Load Type ', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.loadType), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Weight', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.weight), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'COD', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: ((line.paymentType) == "COD" ? 'Yes' : 'No'), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Service Type', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.serviceTypeText), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Insurance', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Yes', bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Customs Charge', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.customsValue), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Piece Count', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.noOfPieceHawb), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Currency Code', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.currency), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'No.of items in Piece', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.noOfItemPiece), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Item Description', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.goodsDescription), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      dd.content.push(
        {
          table: {
            headerRows: 1,
            widths: [60, 60, 5, 60, 60],
            body: bodyArray,
          },
        },
      )

      let bodyArray2: any[] = [];
      bodyArray2.push([
        { text: 'Shipper Name', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: (line.originDetails.name), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: 'Org Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: (line.originDetails.country), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] }
      ]);
      bodyArray2.push([
        { text: 'State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.originDetails.state), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.originDetails.city), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray2.push([
        { text: 'Phone', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.originDetails.phone), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Phone 2', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.originDetails.alternatePhone), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      dd.content.push(
        {
          table: {
            headerRows: 1,
            widths: [60, 60, 5, 60, 60],
            body: bodyArray2,
          },
        },
      )
      let bodyArray3: any[] = [];
      bodyArray3.push([
        { text: 'Addresss', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.originDetails.addressLine1 != null ? line.originDetails.addressLine1 : '') + ' ' + '' + (line.originDetails.addressLine2 != null ? line.originDetails.addressLine2 : ''), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      dd.content.push(
        {
          table: {
            headerRows: 1,
            widths: [60, '*'],
            body: bodyArray3,
          },
        },
      )

      let bodyArray4: any[] = [];
      bodyArray4.push([
        { text: 'Recipient Name', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: (line.destinationDetails.name), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: 'Dest Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: (line.destinationDetails.country), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] }
      ]);
      bodyArray4.push([
        { text: 'State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.state), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.city), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray4.push([
        { text: 'Phone', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.phone), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Phone 2', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.alternatePhone), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      dd.content.push(
        {
          table: {
            headerRows: 1,
            widths: [60, 60, 5, 60, 60],
            body: bodyArray4,
          },
        },
      )
      let bodyArray5: any[] = [];
      bodyArray5.push([
        { text: 'Addresss', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.addressLine1 != null ? line.destinationDetails.addressLine1 : '') + '' + (line.destinationDetails.addressLine1 != null ? line.destinationDetails.addressLine1 : ''), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      dd.content.push(
        {
          table: {
            headerRows: 1,
            widths: [60, '*'],
            body: bodyArray5,
          },
        },
      )


      let pieceId: any[] = [];
      const pieceIdcode = this.generateBarcode(line.pieceDetails.length > 0 ? line.pieceDetails[0].pieceId : null);
      const partnercode = this.generateBarcode(line.partnerHouseAirwayBill);
      pieceId.push([
        { text: 'Piece Id', bold: true, alignment: 'left', margin: [0, 5, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: 'Partner AWB', bold: true, alignment: 'right', margin: [0, 5, 0, 0], fontSize: 6, border: [false, true, false, false] },
      ]);

      pieceId.push([
        { image: pieceIdcode, margin: [0, -5, 0, 0], fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
        { image: partnercode, margin: [0, -5, 0, 0], fit: [80, 80], alignment: 'right', bold: false, fontSize: 12, border: [false, false, false, false] },
      ]);

      dd.content.push(
        {
          table: {
            headerRows: 1,
            widths: [30, '*'],
            body: pieceId,
          },
        }, '\n'
      )
    })

    pdfMake.createPdf(dd).open();
  }
}

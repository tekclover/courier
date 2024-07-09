import { Component, Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from "../../../../assets/font/vfs_fonts.js"
// @ts-ignore
import { iwExpressLogo } from "../../../../assets/font/iwExpress.js";
import JsBarcode from 'jsbarcode';
import { DatePipe } from '@angular/common';
import { CcrService } from '../../airport/ccr/ccr.service.js';
import { CommonServiceService } from '../../../common-service/common-service.service.js';
import { ConsignmentService } from '../../operation/consignment/consignment.service.js';
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
    public datePipe: DatePipe,
  public ccrService:CcrService,
  public consginementService:ConsignmentService,
  private cs: CommonServiceService,) { }
  generateBarcode(text: string) {
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, text, { height: 80 });
    return canvas.toDataURL('image/png');
  }
  generatePdfBarocde(line: any, type: any) {
    let createdOn = this.datePipe.transform(line.createdOn, 'dd-MMM-yyyy HH:mm')
    var dd: any;
    dd = {
      pageSize: "A6",
      pageOrientation: "portrait",
      pageMargins: [10, 0, 10, 10],
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
    line.pieceDetails.forEach((x: any, i: any) => {

      let barcodeAWB: any[] = [];
      if (i != 0) {
        const barcodeImageData1 = this.generateBarcode(line.houseAirwayBill);
        barcodeAWB.push([
          { image: iwExpressLogo.headerLogo, margin: [0, 4, 0, 0], fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
          { image: barcodeImageData1, margin: [0, 4, 0, 0], fit: [100, 100], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
          //{ image: '', margin: [0, -10, 0, 0], fit: [50, 50], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
        ]);
      } else {
        const barcodeImageData1 = this.generateBarcode(line.houseAirwayBill);
        barcodeAWB.push([
          { image: iwExpressLogo.headerLogo, margin: [0, -10, 0, 0], fit: [80, 80], alignment: 'left', bold: false, fontSize: 12, border: [false, false, false, false] },
          { image: barcodeImageData1, margin: [0, -10, 0, 0], fit: [100, 100], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
          //{ image: '', margin: [0, -10, 0, 0], fit: [50, 50], alignment: 'center', bold: false, fontSize: 12, border: [false, false, false, false] },
        ]);
      }

      dd.content.push(
        {
          table: {
            headerRows: 1,
            //   widths: [95, 80, '*'],
            widths: [95, 80],
            body: barcodeAWB,
          },
        }, '\n'
      )
      //for each start
      let bodyArray: any[] = [];
      bodyArray.push([
        { text: 'Label Date', bold: true, fontSize: 6, border: [false, false, false, true] },
        { text: createdOn, bold: false, fontSize: 6, border: [false, false, false, true] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, true] },
        { text: 'Cus Ref No', bold: true, fontSize: 6, border: [false, false, false, true] },
        { text: (line.partnerHouseAirwayBill), bold: false, fontSize: 6, border: [false, false, false, true] }
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
        { text: (line.partnerName), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.state), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Mode', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.modeOfTransport), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.destinationDetails.city), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Declared Value', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.pieceValue), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Inco-Terms', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.incoTerms), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Load Type ', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.loadType), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Weight', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.grossWeight), bold: false, fontSize: 6, border: [false, false, false, false] }
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
        { text: (line.insurance), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Customs Charge', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.totalDuty), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Piece Count', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.noOfPieceHawb), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Currency Code', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.consignmentCurrency), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'No.of items in Piece', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.noOfItemPiece), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Item Description', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.pieceProductCode), bold: false, fontSize: 6, border: [false, false, false, false] }
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
      const pieceIdcode = this.generateBarcode(line.pieceDetails.length > 0 ? x.pieceId : null);
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

    if (type == 'download') {
      pdfMake.createPdf(dd).download(line.consignmentId)
    } else {
      pdfMake.createPdf(dd).print();
    }
  }

  generatePdfInvoice(line: any) {
    console.log(line)
    let createdOn = this.datePipe.transform(line[0].createdOn, 'dd-MMM-yyyy HH:mm')
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
      { text: '1.' + (line[0].orgAddressLine1), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '', bold: false, fontSize: 6, border: [false, false, false, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '1.' + (line[0].destAddressLine1), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },

    ]);
    bodyArray.push([
      { text: '2.' + (line[0].orgAddressLine2), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '', bold: false, fontSize: 6, border: [false, false, false, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '2.' + (line[0].destAddressLine2), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },

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
      { text: (line[0].orgCity), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Country', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line[0].orgCountry), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '', bold: false, fontSize: 6, border: [false, false, false, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'City ', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line[0].destCity), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Country', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line[0].destCountry), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },

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
      { text: (line[0].orgPhone), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: '', bold: false, fontSize: 6, border: [false, false, false, false], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Telephone', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line[0].destPhone), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },


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

    for (let i = 0; i < line.length; i++) {
      let bodyArray6: any[] = [];
      bodyArray6.push([
        { text: (line[i].quantity), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line[i].hsCode), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line[i].goodsDescription), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line[i].itemWeight), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line[i].unitValue), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line[i].totalValue), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line[i].currency), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line[i].countryOfOrigin), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
        { text: (line[i].incoTerms), bold: true, margin: [0, 2, 0, 0], fontSize: 5, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
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
      { text: (line[0].pieces), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'DATE', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: createdOn, bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] }
    ]);
    bodyArray3.push([
      { text: 'Weight', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line[0].weight), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'AWB', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line[0].partnerHouseAirwayBill), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] }
    ]);
    bodyArray3.push([
      { text: 'Total Commerical Invoice Value', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line[0].totalCiv), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: 'Prepaid', bold: true, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] },
      { text: (line[0].getPrepaid), bold: false, fontSize: 6, border: [true, true, true, true], borderColor: ['#808080', '#808080', '#808080', '#808080'] }
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
  labelGenerate(result:any){
    console.log(result)
    let obj: any = {};
    obj.pieceId=result
       this.ccrService.genearateLabel(obj).subscribe({
       next: (res: any) => {
       res.forEach((x:any)=>{
         this.generatePdfBarocdeMutipleCCR(x);
       }) 
       }, error: (err: any) => {
        this.cs.commonerrorNew(err);  
       }
     })
   }
   genearteInvoice(result:any){
    console.log(result)
    let obj: any = {};
    obj.houseAirwayBill=result
       this.ccrService.genearateInvoice(obj).subscribe({
       next: (res: any) => {
         this.generatePdfInvoice(res);
       }, error: (err: any) => {
        this.cs.commonerrorNew(err);  
       }
     })
   }
  generatePdfBarocdeMutipleCCR(result: any) {
    let createdOn = this.datePipe.transform(result.createdOn, 'dd-MMM-yyyy HH:mm')
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
    const barcodeImageData1 = this.generateBarcode(result.houseAirwayBill);
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
        { text: (result.customerReferenceNumber), bold: false, fontSize: 6, border: [false, false, false, true] }
      ]);
      bodyArray.push([
        { text: 'Org Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: (result.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: (result.destinationCountry), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Cust Name', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.partnerName), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.originState), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Mode', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.modeOfTransport), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.destinationCity), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Declared Value', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.pieceValue), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Inco-Terms', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.incoTerms), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Load Type ', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.loadType), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Weight', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.grossWeight), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'COD', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: ((result.paymentType) == "COD" ? 'Yes' : 'No'), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Service Type', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.serviceTypeText), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Insurance', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.insurance), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Customs Charge', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.totalDuty), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Piece Count', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.noOfPieceHawb), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Currency Code', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.consignmentCurrency), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'No.of items in Piece', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.noOfPieceHawb), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Item Description', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.pieceProductCode), bold: false, fontSize: 6, border: [false, false, false, false] }
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
        { text: (result.originName), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: 'Org Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: (result.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] }
      ]);
      bodyArray2.push([
        { text: 'State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.originState), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.originCity), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray2.push([
        { text: 'Phone', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.originPhone), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Phone 2', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.originAlternatePhone), bold: false, fontSize: 6, border: [false, false, false, false] }
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
        { text: (result.countryOfOrigin != null ? result.countryOfOrigin : '') + ' ' + '' + (result.countryOfOrigin != null ? result.countryOfOrigin : ''), bold: false, fontSize: 6, border: [false, false, false, false] }
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
        { text: (result.destinationName), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: 'Dest Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: (result.destinationCountry), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] }
      ]);
      bodyArray4.push([
        { text: 'State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.destinationState), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.destinationCity), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray4.push([
        { text: 'Phone', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.destinationPhone), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Phone 2', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (result.destinationAlternatePhone), bold: false, fontSize: 6, border: [false, false, false, false] }
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
        { text: (result.destinationAddress), bold: false, fontSize: 6, border: [false, false, false, false] }
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
      const pieceIdcode = this.generateBarcode( result.pieceId );
      const partnercode = this.generateBarcode(result.partnerHouseAirwayBill);
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
    


    //pdfMake.createPdf(dd).open();
    const pdfDocGenerator = pdfMake.createPdf(dd);
    pdfDocGenerator.getBlob((blob) => {
      var file = new File([blob], result.houseAirwayBill + ".pdf");
      console.log(file)
      var filepath=result.houseAirwayBill;
      if(file){
        this.consginementService.uploadFiles(file, filepath).subscribe((resp: any) => {});

      }
});
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
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, true] }
      ]);
      bodyArray.push([
        { text: 'Org Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Cust Name', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.partnerName), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray.push([
        { text: 'Mode', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.subProductName), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Dest City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] }
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
        { text: (line.insurance), bold: false, fontSize: 6, border: [false, false, false, false] },
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
        { text: (line.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: 'Org Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: (line.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] }
      ]);
      bodyArray2.push([
        { text: 'State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray2.push([
        { text: 'Phone', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Phone 2', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] }
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
        { text: (line.countryOfOrigin != null ? line.countryOfOrigin : '') + ' ' + '' + (line.countryOfOrigin != null ? line.countryOfOrigin : ''), bold: false, fontSize: 6, border: [false, false, false, false] }
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
        { text: (line.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: '', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: 'Dest Country', bold: true, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
        { text: (line.countryOfOrigin), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] }
      ]);
      bodyArray4.push([
        { text: 'State', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'City', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] }
      ]);
      bodyArray4.push([
        { text: 'Phone', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] },
        { text: '', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: 'Phone 2', bold: true, fontSize: 6, border: [false, false, false, false] },
        { text: (line.countryOfOrigin), bold: false, fontSize: 6, border: [false, false, false, false] }
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
        { text: (line.countryOfOrigin != null ? line.countryOfOrigin : '') + '' + (line.countryOfOrigin != null ? line.countryOfOrigin : ''), bold: false, fontSize: 6, border: [false, false, false, false] }
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

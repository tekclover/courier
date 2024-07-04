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
    public datePipe: DatePipe){}
  generateBarcode(text: string) {
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, text,{height:80});
    return canvas.toDataURL('image/png');
  }
  generatePdfBarocde(line:any){
    let createdOn = this.datePipe.transform(line.createdOn, 'dd-MMM-yyyy HH:mm')
    var dd: any;
    let headerTable: any[] = [];

    headerTable.push([      
        { image: iwExpressLogo.headerLogo, fit: [80, 80], alignment: 'left',  bold: false, fontSize: 12, border: [false, false, false, false] },
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
      { image: iwExpressLogo.headerLogo, margin: [0, -15, 0, 0],fit: [80, 80], alignment: 'left',  bold: false, fontSize: 12, border: [false, false, false, false] },
            { image: barcodeImageData1,  margin: [0, -15, 0, 0], fit: [100, 100], alignment: 'center',  bold: false, fontSize: 12, border: [false, false, false, false] },
      { image: iwExpressLogo.jntLogo, margin: [0, -10, 0, 0],fit: [50, 50], alignment: 'center',  bold: false, fontSize: 12, border: [false, false, false, false] },
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
          { text: ((line.paymentType)=="COD" ?'Yes':'No'), bold: false, fontSize: 6, border: [false, false, false, false] },
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
          { text:(line.goodsDescription), bold: false, fontSize: 6, border: [false, false, false, false] }
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
          { text: (line.shipperName), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
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
          { text:(line.originDetails.alternatePhone), bold: false, fontSize: 6, border: [false, false, false, false] }
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
          { text: (line.originDetails.addressLine1 != null ?line.originDetails.addressLine1 : '')+' '+''+(line.originDetails.addressLine2 != null ?line.originDetails.addressLine2 : ''), bold: false, fontSize: 6, border: [false, false, false, false] }
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
          { text: (line.consigneeName), bold: false, margin: [0, 2, 0, 0], fontSize: 6, border: [false, true, false, false] },
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
          { text:(line.destinationDetails.addressLine1 != null ?line.destinationDetails.addressLine1 : '')+''+(line.destinationDetails.addressLine1 != null ?line.destinationDetails.addressLine1 : ''), bold: false, fontSize: 6, border: [false, false, false, false] }
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
    const pieceIdcode = this.generateBarcode(line.pieceDetails.length>0?line.pieceDetails[0].pieceId:null);
    const partnercode = this.generateBarcode(line.partnerHouseAirwayBill);
    pieceId.push([        
      { text: 'Piece Id', bold: true, alignment: 'left',  margin: [0, 5, 0, 0], fontSize: 6, border: [false, true, false, false] },   
      { text: 'Partner AWB', bold: true, alignment: 'right',  margin: [0, 5, 0, 0],  fontSize: 6, border: [false, true, false, false] },
       ]);
   
    pieceId.push([        
      { image: pieceIdcode,  margin: [0, -5, 0, 0], fit: [80, 80], alignment: 'left',  bold: false, fontSize: 12, border: [false, false, false, false] },
        { image: partnercode,  margin: [0, -5, 0, 0], fit: [80, 80], alignment: 'right',  bold: false, fontSize: 12, border: [false, false, false, false] },
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
}

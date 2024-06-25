import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { MessageService } from 'primeng/api';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private messageService: MessageService, private datepipe: DatePipe) { }

  encrypt(storageData: any) {
    return encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(storageData), 'secret key 123').toString());

  }

  decrypt(storageData: any) {
    var deData = CryptoJS.AES.decrypt(decodeURIComponent(storageData), 'secret key 123');
    return JSON.parse(deData.toString(CryptoJS.enc.Utf8));
  }


  exportAsExcel(data: any, filename: string = "Downloaded_Excel") {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    // converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(
      wb,
      filename + `_${new Date().getDate() +
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
      new Date().getFullYear()
      }.xlsx`
    );
  }

    
  public commonerrorNew(msg: any) {
    if(msg.status != 0){
      this.messageService.add({ severity: 'error', summary: 'Error', key: 'br', detail: msg.error.error});
    }
}

day_callapiSearch(date: any) {
  const del_date = this.datepipe.transform(date, 'yyyy-MM-ddT00:00:00.000');
  return del_date;
}
datesearch(date: any): Date {
  return new Date(date);
}

dateExcel(date: any) {
  const del_date = this.datepipe.transform(date, "dd-MM-yyyy HH:mm");
  return del_date;
}

public filterArray(targetArray: any[], filters: any) {
  var filterKeys = Object.keys(filters);
  let data = targetArray.filter(function (eachObj: any) {
    return filterKeys.every(function (eachKey) {
      if (!filters[eachKey])
        return true;
      if (!eachObj[eachKey])
        return true;
      if (eachObj[eachKey] === undefined)
        return true;
      const fo: string = String(filters[eachKey])?.toLowerCase();
      const eo: string = String(eachObj[eachKey])?.toLowerCase();
      if (fo == "")
        return true;

      const folist = fo.split(',');

      return folist.includes(eo);
    });
  });

  if (filters.createdOn_from &&
    filters.createdOn_to) {
    data = data.filter(x =>
      this.datesearch(this.day_callapiSearch(new Date(x.createdOn.replace("+00:00", "")))) >= this.datesearch(this.day_callapiSearch(filters.createdOn_from))
      && this.datesearch(this.day_callapiSearch(new Date(x.createdOn.replace("+00:00", "")))) <= this.datesearch(this.day_callapiSearch(filters.createdOn_to))
    );

  }
  return data;
}


removeDuplicatesFromArrayList(list: any = [], fieldName:any) {
  let dataObj: any = {};
  for (let i = 0; i < list.length; i++) {
    dataObj[list[i][fieldName]] = list[i];
  }
  list = new Array();
  for (let key in dataObj) {
    list.push(dataObj[key]);
  }
  return list;
}

removeDuplicateObj(array1:any, array2:any){
  const array1IDs = new Set(array1.map(({ subMenuId }:any) => subMenuId));
  const combined = [
    ...array1,
    ...array2.filter(({ subMenuId }:any) => !array1IDs.has(subMenuId))
  ];
  return combined
}
}

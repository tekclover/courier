import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, of, forkJoin } from 'rxjs';
import { AuthService } from '../core/core';
import { CommonServiceService } from './common-service.service';
import { MessageService } from 'primeng/api';

export interface dropdownelement {
  key: any;
  value: any;
  referenceField?: any;
}

export interface dropdownelement1 {
  value: any;
  label: any;
  referenceField?: any;
}
export interface dropdownelement2 {
  key: any;
  value: any;
  referenceField?: any;
  languageId?: any;
  companyId?: any;

}
export interface dropdownelement3 {
  value: any;
  label: any;
  languageId?: any;
  companyId?: any;
}

@Injectable({
  providedIn: 'root'
})
export class CommonAPIService {

  constructor(private http: HttpClient, private cs: CommonServiceService, private auth: AuthService, private spin: NgxSpinnerService, public messageService: MessageService) { }

  setup = '/overc-idmaster-service/';
  dropdownlist: any = {
    setup: {
      language:{url:this.setup + 'language',key:{key:'languageId',value:'languageDescription'}},
      company:{url:this.setup + 'company',key:{key:'companyId',value:'companyName'}},
      country:{url:this.setup + 'country',key:{key:'countryId',value:'countryName', languageId :'languageId', companyId: 'companyId'}},
      province:{url:this.setup + 'province',key:{key:'provinceId',value:'provinceName', languageId :'languageId', companyId: 'companyId'}},
      menu:{url:this.setup + 'menu', key:{key:'menuId',value:'menuName', languageId :'languageId', companyId: 'companyId'}},
      subMenu:{url:this.setup + 'menu', key:{key:'subMenuId',value:'subMenuName', languageId :'languageId', companyId: 'companyId'}},
      authorizationObject:{url:this.setup + 'menu', key:{key:'authorizationObjectId',value:'authorizationObjectValue', languageId :'languageId', companyId: 'companyId'}},
      district:{url:this.setup + 'district',key:{key:'districtId',value:'districtName', languageId :'languageId', companyId: 'companyId'}},
      subProduct: { url: this.setup + 'subProduct', key: { key: 'subProductId', value: 'subProductName', languageId: 'languageId', companyId: 'companyId' } },
      product: { url: this.setup + 'product', key: { key: 'productId', value: 'productName', languageId: 'languageId', companyId: 'companyId' } },
      customer: { url: this.setup + 'customer', key: { key: 'customerId', value: 'customerName', languageId: 'languageId', companyId: 'companyId' } },
      city: { url: this.setup + 'city', key: { key: 'cityId', value: 'cityName', languageId: 'languageId', companyId: 'companyId' } },
      serviceType: { url: this.setup + 'serviceType', key: { key: 'serviceTypeId', value: 'serviceTypeText', languageId: 'languageId', companyId: 'companyId' } },
      opStatus: { url: this.setup + 'opStatus', key: { key: 'statusCode', value: 'opStatusDescription', languageId: 'languageId', companyId: 'companyId' } },

    },
  }
 


  getalldropdownlist(url: string[]) {
    let observableBatch: any[] = [];
    url.forEach((url: string) => { observableBatch.push(this.http.get<any>(url).pipe(catchError(err => of(err)))) });
    return forkJoin(observableBatch);
  }

  foreachlist(list: any, val: { key: any, value: any }, _filter: any = {}, addblank: boolean = false,) {
    let dropdownlist: dropdownelement[] = [];
    let dropdownlist1: dropdownelement1[] = [];
    let filter = list;
    if (_filter)
      filter = this.cs.filterArray(list, _filter);
    if (addblank)
      dropdownlist.push({ key: '', value: '' });
    for (const l of filter) {
      let filter2 = this.cs.filterArray(dropdownlist, { key: l[val.key] })
      if (filter2.length == 0)
      dropdownlist1.push({ value: l[val.key], label: l[val.key] + ' - ' + l[val.value] });
    }
    return dropdownlist1.sort((a, b) => (a.value > b.value) ? 1 : -1);
  }

  forLanguageFilter(list: any, val: { key: any, value: any, languageId: any, companyId: any }, _filter: any = {}, addblank: boolean = false,) {
    let dropdownlist: dropdownelement2[] = [];
    let dropdownlist1: dropdownelement3[] = [];
    let dropdownlist2: dropdownelement3[] = [];
    let filter = list;
    if (_filter)
      filter = this.cs.filterArray(list, _filter);
    if (addblank)
      dropdownlist.push({ key: '', value: '', languageId: '', companyId: '' });
    for (const l of filter) {
      let filter2 = this.cs.filterArray(dropdownlist, { key: l[val.key] })
      if (filter2.length == 0)
      dropdownlist1.push({ value: l[val.key], label: l[val.key] + ' - ' + l[val.value], languageId: l[val.languageId], companyId: l[val.companyId]});
    }
    dropdownlist1.forEach(x=> {
      if(this.auth.languageId == x.languageId && this.auth.companyId == x.companyId){
        dropdownlist2.push(x)
      }
    })
    return dropdownlist2.sort((a, b) => (a.value > b.value) ? 1 : -1);
  }

}

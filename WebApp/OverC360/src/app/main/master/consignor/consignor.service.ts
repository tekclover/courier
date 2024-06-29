import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class ConsignorService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  Get(consignorId: string, customerId: string, productId: string, subProductId: string) {
    return this.http.get<any>('/overc-idmaster-service/consignor/' + consignorId + '?customerId=' + customerId + '&productId=' + productId
      + '&subProductId=' + subProductId + '&companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/consignor', obj);
  }

  Update(obj: any) {
    return this.http.patch<any>('/overc-idmaster-service/consignor/' + obj.consignorId + '?customerId=' + obj.customerId + '&productId=' + obj.productId
      + '&subProductId=' + obj.subProductId + '&companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId, obj);
  }

  Delete(consignorId: string, customerId: string, productId: string, subProductId: string) {
    return this.http.delete<any>('/overc-idmaster-service/consignor/' + consignorId + '?customerId=' + customerId + '&productId=' + productId
      + '&subProductId=' + subProductId + '&companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/consignor/' + 'find', obj);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  Get(productId: string, subProductId: string) {
    return this.http.get<any>('/overc-idmaster-service/product/' + productId + '?subProductId=' + subProductId 
      +'&companyId=' +this.auth.companyId +'&languageId=' +this.auth.languageId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/product', obj);
  }

  Update(obj: any) {
    return this.http.patch<any>('/overc-idmaster-service/product/' + obj.productId + '?subProductId=' + obj.subProductId 
      +'&companyId=' +this.auth.companyId +'&languageId=' +this.auth.languageId, obj);
  }

  Delete(productId: string, subProductId: string) {
    return this.http.delete<any>('/overc-idmaster-service/product/' + productId + '?subProductId=' + subProductId 
      +'&companyId=' +this.auth.companyId +'&languageId=' +this.auth.languageId);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/product/' + 'find',obj);
  }

}

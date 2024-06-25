import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root',
})
export class SubProductService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  Get(subProductId: string) {
    return this.http.get<any>(
      '/overc-idmaster-service/subProduct/' + subProductId + '?companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/subProduct', obj);
  }

  Update(obj: any) {
    return this.http.patch<any>(
      '/overc-idmaster-service/subProduct/' + obj.subProductId +'?companyId=' +this.auth.companyId +'&languageId=' +this.auth.languageId,obj);
  }

  Delete(subProductId: string) {
    return this.http.delete<any>(
      '/overc-idmaster-service/subProduct/' + subProductId + '?companyId=' + this.auth.companyId +'&languageId=' + this.auth.languageId);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/subProduct/' + 'find', obj);
  }
}

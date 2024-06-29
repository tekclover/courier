import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class RateParameterService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  Get(rateParameterId: string) {
    return this.http.get<any>(
      '/overc-idmaster-service/rateParameter/' + rateParameterId + '?companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/rateParameter', obj);
  }

  Update(obj: any) {
    return this.http.patch<any>(
      '/overc-idmaster-service/rateParameter/' + obj.rateParameterId + '?companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId, obj);
  }

  Delete(rateParameterId: string) {
    return this.http.delete<any>(
      '/overc-idmaster-service/rateParameter/' + rateParameterId + '?companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/rateParameter/' + 'find', obj);
  }

}
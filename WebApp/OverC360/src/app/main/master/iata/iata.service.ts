import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class IataService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  Get(obj: any) {
    return this.http.get<any>('/overc-idmaster-service/iata' + obj.originCode + '?languageId=' + this.auth.languageId + '&companyId=' + this.auth.companyId + '&origin=' + obj.origin);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/iata', obj);
  }
  
  Update(obj: any) {
    return this.http.patch<any>('/overc-idmaster-service/iata/' + obj.originCode + '?languageId=' + this.auth.languageId + '&companyId=' + this.auth.companyId + '&origin=' + obj.origin , obj)
  }

  Delete(obj: any) {
    return this.http.delete<any>('/overc-idmaster-service/iata/' + obj.originCode + '?languageId=' + this.auth.languageId + '&companyId=' + this.auth.companyId + '&origin=' + obj.origin);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/iata/find', obj);
  }
}
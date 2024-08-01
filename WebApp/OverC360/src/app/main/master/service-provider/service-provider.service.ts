import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  Get(serviceProvidersId: string) {
    return this.http.get<any>(
      '/overc-idmaster-service/serviceprovider/' + serviceProvidersId + '?companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/serviceprovider', obj);
  }

  Update(obj: any) {
    return this.http.patch<any>(
      '/overc-idmaster-service/serviceprovider/' + obj.serviceProvidersId + '?companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId, obj);
  }

  Delete(serviceProvidersId: string) {
    return this.http.delete<any>(
      '/overc-idmaster-service/serviceprovider/' + serviceProvidersId + '?companyId=' + this.auth.companyId + '&languageId=' + this.auth.languageId);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/serviceprovider/find', obj);
  }

}

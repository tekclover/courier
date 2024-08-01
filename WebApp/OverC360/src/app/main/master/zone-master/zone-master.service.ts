import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class ZoneMasterService {

  constructor(private http: HttpClient, private auth: AuthService) { }


  Get(zoneId: string) {
    return this.http.get<any>('/overc-idmaster-service/zonemaster/' + zoneId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/zonemaster', obj);
  }

  Update(obj: any) {
    return this.http.patch<any>('/overc-idmaster-service/zonemaster/'+ obj.zoneId +'?languageId='+ this.auth.languageId 
      +'&companyId='+ this.auth.companyId , obj);
  }

  Delete(obj: any) {
    return this.http.delete<any>('/overc-idmaster-service/zonemaster/' + obj.zoneId +'?languageId='+ this.auth.languageId 
      +'&companyId='+ this.auth.companyId );
  }

  search(obj: any) {
    return this.http.post<any>('/overc-idmaster-service/zonemaster/find', obj);
  }
}



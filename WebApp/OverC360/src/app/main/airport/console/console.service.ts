import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor(private http: HttpClient, private auth: AuthService) { }


  Get(partnerId: string) {
    return this.http.get<any>('/overc-midmile-service/console/' + partnerId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-midmile-service/console/create/list', obj);
  }

  Update(obj: any) {
    return this.http.patch<any>('/overc-midmile-service/console/'+ obj.partnerId +'?languageId='+ this.auth.languageId +'&companyId='+ this.auth.companyId +'&cityId='+ obj.cityId, obj);
  }

  Delete(obj: any) {
    return this.http.delete<any>('/overc-midmile-service/console/' + obj.partnerId +'?languageId='+ this.auth.languageId +'&companyId='+ this.auth.companyId +'&cityId='+ obj.cityId);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-midmile-service/console/findConsole', obj);
  }
}


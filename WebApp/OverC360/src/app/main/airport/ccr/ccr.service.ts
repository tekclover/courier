import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class CcrService {
  constructor(private http: HttpClient, private auth: AuthService) { }


  Get(partnerId: string) {
    return this.http.get<any>('/overc-midmile-service/ccr/' + partnerId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-midmile-service/ccr/create/list', obj);  
  }

  Update(obj: any) {
    return this.http.patch<any>('/overc-midmile-service/ccr/'+ obj.partnerId +'?languageId='+ this.auth.languageId +'&companyId='+ this.auth.companyId +'&cityId='+ obj.cityId, obj);
  }

  Delete(obj: any) {
    return this.http.post<any>('/overc-midmile-service/ccr/delete/list', obj);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-midmile-service/ccr/findCcr', obj);
  }
}

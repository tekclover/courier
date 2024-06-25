import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class ManifestService {
  constructor(private http: HttpClient, private auth: AuthService) { }


  Get(languageId: string) {
    return this.http.get<any>('/overc-midmile-service/consignment/' + languageId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-midmile-service/consignment', obj);
  }

  Update(obj: any) {
    return this.http.patch<any>('/overc-midmile-service/consignment/'+ obj.languageId, obj);
  }

  Delete(languageId: string) {
    return this.http.delete<any>('/overc-midmile-service/consignment/' + languageId);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-midmile-service/consignment/find', obj);
  }
}



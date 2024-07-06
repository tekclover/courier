import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor(private http: HttpClient, private auth: AuthService) { }


  Get(consoleId: string) {
    return this.http.get<any>('/overc-midmile-service/console/' + consoleId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-midmile-service/console/create/list', obj);
  }

  CreateFromConsignment(obj: any) {
    return this.http.post<any>('/overc-midmile-service/console/consignment', obj);
  }
  
  Update(obj: any) {
    return this.http.patch<any>('/overc-midmile-service/console/update/list', obj);
  }
  UpdateCCR(obj: any) {
    return this.http.patch<any>('/overc-midmile-service/ccr/update/list', obj);
  }
  Transfer(obj: any) {
    return this.http.post<any>('/overc-midmile-service/console/transfer', obj);
  }

  Delete(obj: any) {
    return this.http.post<any>('/overc-midmile-service/console/delete/list', obj);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-midmile-service/console/findConsole', obj);
  }
}


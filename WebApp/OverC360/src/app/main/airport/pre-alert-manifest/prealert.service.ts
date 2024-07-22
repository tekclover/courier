import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrealertService {

  constructor(private http: HttpClient) { }


  Delete(obj: any) {
    return this.http.post<any>('/overc-midmile-service/prealert/delete/list', obj);
  }

  update(obj: any) {
    return this.http.post<any>('/overc-midmile-service/prealert/update/list', obj);
  }
}

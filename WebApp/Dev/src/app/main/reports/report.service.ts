import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  apiName = '/overc-midmile-service/reports';

  search(obj: any) {
    return this.http.post<any>(this.apiName + '/consoleTrackingReport', obj);
  }

}

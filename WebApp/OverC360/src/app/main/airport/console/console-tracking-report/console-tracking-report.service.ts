import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../../core/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleTrackingReportService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  apiName = '/overc-midmile-service/reports';

  search(obj: any) {
    return this.http.post<any>(this.apiName + '/consoleTrackingReport', obj);
  }

}

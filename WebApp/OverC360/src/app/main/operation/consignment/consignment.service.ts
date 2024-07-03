import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {

  constructor(private http : HttpClient) { }

  Get(languageId: string) {
    return this.http.get<any>('/overc-midmile-service/consignment/' + languageId);
  }

  Create(obj: any) {
    return this.http.post<any>('/overc-midmile-service/consignment', obj);
  }

  Update(obj: any) {
    return this.http.patch<any>('/overc-midmile-service/consignment', obj);
  }

  UpdatePreAlertManifest(obj: any) {
    return this.http.patch<any>('/overc-midmile-service/consignment', obj);
  }

  Delete(languageId: string) {
    return this.http.delete<any>('/overc-midmile-service/consignment/' + languageId);
  }

  DeletePreAlertManifest(obj: any) {
    return this.http.delete<any>('/overc-midmile-service/consignment'  +'?companyId='+ obj.companyId +'&languageId=' +obj.languageId
      + '&masterAirwayBill='+ obj.masterAirwayBill + '&houseAirwayBill='+ obj.houseAirwayBill +'&partnerId='+obj.partnerId);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-midmile-service/consignment/find', obj);
  }
}




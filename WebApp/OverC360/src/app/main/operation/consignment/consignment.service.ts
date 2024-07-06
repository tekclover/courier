import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {

  constructor(private http : HttpClient, private auth: AuthService) { }

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

  Delete(obj: any) {
    return this.http.delete<any>('/overc-midmile-service/consignment/' +'?languageId='+ this.auth.languageId  +'&companyId='+ this.auth.companyId + '&houseAirwayBill='+ obj.houseAirwayBill +'&masterAirwayBill='+ obj.masterAirwayBill
      +'&partnerId='+ obj.partnerId
    );
  }

  DeletePreAlertManifest(obj: any) {
    return this.http.delete<any>('/overc-midmile-service/consignment'  +'?languageId='+ this.auth.languageId  +'&companyId='+ this.auth.companyId
      + '&masterAirwayBill='+ obj.masterAirwayBill + '&houseAirwayBill='+ obj.houseAirwayBill +'&partnerId='+obj.partnerId);
  }

  search(obj: any) {
    return this.http.post<any>('/overc-midmile-service/consignment/find', obj);
  }

  uploadFiles(files: FileList, location: any) {
    const formData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i], files[i].name);
    }
    return this.http.post<any>('/doc-storage/multiUpload'+'?location='+ location , formData);
  }

  uploadConsignment(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>('/consignment/upload/v2', formData);
  }
}




import {
  AuthService,
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-FAB45RGZ.js";

// src/app/main/operation/consignment/consignment.service.ts
var _ConsignmentService = class _ConsignmentService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(languageId) {
    return this.http.get("/overc-midmile-service/consignment/" + languageId);
  }
  Create(obj) {
    return this.http.post("/overc-midmile-service/consignment", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-midmile-service/consignment", obj);
  }
  UpdateBondedManifest(obj) {
    return this.http.patch("/overc-midmile-service/bondedManifest/update/list", obj);
  }
  UpdatePreAlertManifest(obj) {
    return this.http.patch("/overc-midmile-service/prealert/update/list", obj);
  }
  Delete(obj) {
    return this.http.post("/overc-midmile-service/consignment/delete/list", obj);
  }
  DeletePreAlertManifest(obj) {
    return this.http.delete("/overc-midmile-service/consignment?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&masterAirwayBill=" + obj.masterAirwayBill + "&houseAirwayBill=" + obj.houseAirwayBill + "&partnerId=" + obj.partnerId);
  }
  DeletePiece(obj) {
    return this.http.delete("/overc-midmile-service/consignment?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&masterAirwayBill=" + obj.masterAirwayBill + "&houseAirwayBill=" + obj.houseAirwayBill + "&partnerId=" + obj.partnerId + "&pieceId=" + obj.pieceId);
  }
  DeleteItem(obj) {
    return this.http.delete("/overc-midmile-service/consignment?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&masterAirwayBill=" + obj.masterAirwayBill + "&houseAirwayBill=" + obj.houseAirwayBill + "&partnerId=" + obj.partnerId + "&pieceItemId=" + obj.pieceItemId);
  }
  DeleteImage(obj) {
    return this.http.delete("/overc-midmile-service/consignment?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&masterAirwayBill=" + obj.masterAirwayBill + "&houseAirwayBill=" + obj.houseAirwayBill + "&partnerId=" + obj.partnerId + "&imageRefId=" + obj.imageRefId);
  }
  search(obj) {
    return this.http.post("/overc-midmile-service/consignment/find", obj);
  }
  searchStatus(obj) {
    return this.http.post("/overc-midmile-service/consignmentStatus/find", obj);
  }
  searchItem(obj) {
    return this.http.post("/overc-midmile-service/itemDetails/find", obj);
  }
  searchPiece(obj) {
    return this.http.post("/overc-midmile-service/piecedetails/find}", obj);
  }
  searchPrealert(obj) {
    return this.http.post("/overc-midmile-service/prealert/findPrealert", obj);
  }
  uploadFiles(files, location) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i], files[i].name);
    }
    return this.http.post("/doc-storage/multiUpload?location=" + location, formData);
  }
  uploadsinglefile(file, location) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post("/document/Upload?filePath=" + location, formData);
  }
  uploadBayan(file, filePath) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post("/pdf/extract?filePath=" + filePath, formData);
  }
  uploadConsignment(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`/consignment/upload/v2?companyId=${this.auth.companyId}&loginUserID=${this.auth.userID}`, formData);
  }
  download(obj) {
    console.log(obj);
    return this.http.get(`/doc-storage/download?fileName=${obj.imageRefId}&location=${obj.referenceImageUrl}`, {
      responseType: "blob"
    }).toPromise();
  }
  findConsignmentPreAlertIndicator(obj) {
    return this.http.post(`/overc-midmile-service/consignment/find/v2`, obj);
  }
  //  pdfMerge(obj: any) {
  //   return this.http.post<any>(`/pdf/merge`, obj);
  //  }
  pdfMerge(obj) {
    return this.http.post(`/pdf/merge`, obj, {
      responseType: "blob"
    }).toPromise();
  }
  // Upload Pre-Alert Manifest
  uploadPreAlertFiles(file, obj) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`/preAlert/upload?companyId=${obj.companyId}&estimatedTimeOfArrival=${obj.estimatedTimeOfArrival}&estimatedTimeOfDeparture=${obj.estimatedDepartureTime}&flightName=${obj.flightName}&flightNo=${obj.flightNo}&partnerId=${obj.partnerId}&partnerMasterAirwayBill=${obj.partnerMasterAirwayBill}&partnerType=${obj.partnerType}&loginUserID=${this.auth.userID}`, formData);
  }
};
_ConsignmentService.\u0275fac = function ConsignmentService_Factory(t) {
  return new (t || _ConsignmentService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ConsignmentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsignmentService, factory: _ConsignmentService.\u0275fac, providedIn: "root" });
var ConsignmentService = _ConsignmentService;

export {
  ConsignmentService
};
//# sourceMappingURL=chunk-TO2VVPIT.js.map

import {
  AuthService,
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DZ5PC7PD.js";

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
  UpdatePreAlertManifest(obj) {
    return this.http.patch("/overc-midmile-service/consignment", obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-midmile-service/consignment/?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&houseAirwayBill=" + obj.houseAirwayBill + "&masterAirwayBill=" + obj.masterAirwayBill + "&partnerId=" + obj.partnerId);
  }
  DeletePreAlertManifest(obj) {
    return this.http.delete("/overc-midmile-service/consignment?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&masterAirwayBill=" + obj.masterAirwayBill + "&houseAirwayBill=" + obj.houseAirwayBill + "&partnerId=" + obj.partnerId);
  }
  search(obj) {
    return this.http.post("/overc-midmile-service/consignment/find", obj);
  }
  uploadFiles(files, location) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i], files[i].name);
    }
    return this.http.post("/doc-storage/multiUpload?location=" + location, formData);
  }
  uploadConsignment(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post("/consignment/upload/v2", formData);
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
//# sourceMappingURL=chunk-VAM35HKO.js.map

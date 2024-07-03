import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DHPTGBKC.js";

// src/app/main/operation/consignment/consignment.service.ts
var _ConsignmentService = class _ConsignmentService {
  constructor(http) {
    this.http = http;
  }
  Get(languageId) {
    return this.http.get("/overc-midmile-service/consignment/" + languageId);
  }
  Create(obj) {
    return this.http.post("/overc-midmile-service/consignment", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-midmile-service/consignment/" + obj.languageId, obj);
  }
  UpdatePreAlertManifest(obj) {
    return this.http.patch("/overc-midmile-service/consignment", obj);
  }
  Delete(languageId) {
    return this.http.delete("/overc-midmile-service/consignment/" + languageId);
  }
  DeletePreAlertManifest(obj) {
    return this.http.delete("/overc-midmile-service/consignment?companyId=" + obj.companyId + "&languageId=" + obj.languageId + "&masterAirwayBill=" + obj.masterAirwayBill + "&houseAirwayBill=" + obj.houseAirwayBill + "&partnerId=" + obj.partnerId);
  }
  search(obj) {
    return this.http.post("/overc-midmile-service/consignment/find", obj);
  }
};
_ConsignmentService.\u0275fac = function ConsignmentService_Factory(t) {
  return new (t || _ConsignmentService)(\u0275\u0275inject(HttpClient));
};
_ConsignmentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsignmentService, factory: _ConsignmentService.\u0275fac, providedIn: "root" });
var ConsignmentService = _ConsignmentService;

export {
  ConsignmentService
};
//# sourceMappingURL=chunk-BTLWT7WZ.js.map

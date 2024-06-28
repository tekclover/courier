import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-FTH33YAX.js";

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
  Delete(languageId) {
    return this.http.delete("/overc-midmile-service/consignment/" + languageId);
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
//# sourceMappingURL=chunk-E6HAR3AS.js.map

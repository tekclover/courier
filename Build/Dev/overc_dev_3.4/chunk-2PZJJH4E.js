import {
  AuthService,
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DZ5PC7PD.js";

// src/app/main/id-masters/province/province.service.ts
var _ProvinceService = class _ProvinceService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get() {
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/province", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/province/" + obj.provinceId + "?companyId=" + this.auth.companyId + "&countryId=" + obj.countryId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/province/" + obj.provinceId + "?companyId=" + this.auth.companyId + "&countryId=" + obj.countryId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/province/find", obj);
  }
};
_ProvinceService.\u0275fac = function ProvinceService_Factory(t) {
  return new (t || _ProvinceService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ProvinceService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProvinceService, factory: _ProvinceService.\u0275fac, providedIn: "root" });
var ProvinceService = _ProvinceService;

export {
  ProvinceService
};
//# sourceMappingURL=chunk-2PZJJH4E.js.map

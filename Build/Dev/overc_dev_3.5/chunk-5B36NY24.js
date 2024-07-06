import {
  AuthService,
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DZ5PC7PD.js";

// src/app/main/id-masters/district/district.service.ts
var _DistrictService = class _DistrictService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(districtId) {
    return this.http.get("/overc-idmaster-service/district/" + districtId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/district", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/district/" + obj.districtId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&countryId=" + obj.countryId + "&provinceId=" + obj.provinceId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/district/" + obj.districtId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&countryId=" + obj.countryId + "&provinceId=" + obj.provinceId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/district/find", obj);
  }
};
_DistrictService.\u0275fac = function DistrictService_Factory(t) {
  return new (t || _DistrictService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_DistrictService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DistrictService, factory: _DistrictService.\u0275fac, providedIn: "root" });
var DistrictService = _DistrictService;

export {
  DistrictService
};
//# sourceMappingURL=chunk-5B36NY24.js.map

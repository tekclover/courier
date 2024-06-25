import {
  AuthService
} from "./chunk-4HDWEJ7N.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VMREKZ45.js";

// src/app/main/id-masters/language/language.service.ts
var _LanguageService = class _LanguageService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(languageId) {
    return this.http.get("/overc-idmaster-service/language/" + languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/language", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/language/" + obj.languageId, obj);
  }
  Delete(languageId) {
    return this.http.delete("/overc-idmaster-service/language/" + languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/language/find", obj);
  }
};
_LanguageService.\u0275fac = function LanguageService_Factory(t) {
  return new (t || _LanguageService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_LanguageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
var LanguageService = _LanguageService;

export {
  LanguageService
};
//# sourceMappingURL=chunk-UUJOQBKI.js.map

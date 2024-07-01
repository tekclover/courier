import {
  AuthService,
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-AJRJ5UQL.js";

// src/app/main/id-masters/sub-product/sub-product.service.ts
var _SubProductService = class _SubProductService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(subProductId) {
    return this.http.get("/overc-idmaster-service/subProduct/" + subProductId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/subProduct", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/subProduct/" + obj.subProductId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(subProductId) {
    return this.http.delete("/overc-idmaster-service/subProduct/" + subProductId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/subProduct/find", obj);
  }
};
_SubProductService.\u0275fac = function SubProductService_Factory(t) {
  return new (t || _SubProductService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_SubProductService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubProductService, factory: _SubProductService.\u0275fac, providedIn: "root" });
var SubProductService = _SubProductService;

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

// src/app/main/id-masters/city/city.service.ts
var _CityService = class _CityService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(cityId) {
    return this.http.get("/overc-idmaster-service/city/" + cityId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/city", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/city/" + obj.cityId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&countryId=" + obj.countryId + "&provinceId=" + obj.provinceId + "&districtId=" + obj.districtId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/city/" + obj.cityId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&countryId=" + obj.countryId + "&provinceId=" + obj.provinceId + "&districtId=" + obj.districtId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/city/find", obj);
  }
};
_CityService.\u0275fac = function CityService_Factory(t) {
  return new (t || _CityService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_CityService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CityService, factory: _CityService.\u0275fac, providedIn: "root" });
var CityService = _CityService;

// src/app/main/id-masters/product/product.service.ts
var _ProductService = class _ProductService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(productId, subProductId) {
    return this.http.get("/overc-idmaster-service/product/" + productId + "?subProductId=" + subProductId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/product", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/product/" + obj.productId + "?subProductId=" + obj.subProductId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(productId, subProductId) {
    return this.http.delete("/overc-idmaster-service/product/" + productId + "?subProductId=" + subProductId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/product/find", obj);
  }
};
_ProductService.\u0275fac = function ProductService_Factory(t) {
  return new (t || _ProductService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ProductService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
var ProductService = _ProductService;

// src/app/main/id-masters/country/country.service.ts
var _CountryService = class _CountryService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(countryId) {
    return this.http.get("/overc-idmaster-service/country/" + countryId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/country", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/country/" + obj.countryId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId, obj);
  }
  Delete(countryId) {
    return this.http.delete("/overc-idmaster-service/country/" + countryId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/country/find", obj);
  }
};
_CountryService.\u0275fac = function CountryService_Factory(t) {
  return new (t || _CountryService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_CountryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CountryService, factory: _CountryService.\u0275fac, providedIn: "root" });
var CountryService = _CountryService;

export {
  SubProductService,
  ProvinceService,
  CityService,
  ProductService,
  CountryService
};
//# sourceMappingURL=chunk-N7VA522I.js.map

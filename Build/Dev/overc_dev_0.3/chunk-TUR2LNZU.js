import {
  AuthService,
  CommonServiceService,
  HttpClient,
  MessageService,
  NgxSpinnerService,
  catchError,
  forkJoin,
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UFYRWFGF.js";

// src/app/common-service/common-api.service.ts
var _CommonAPIService = class _CommonAPIService {
  constructor(http, cs, auth, spin, messageService) {
    this.http = http;
    this.cs = cs;
    this.auth = auth;
    this.spin = spin;
    this.messageService = messageService;
    this.setup = "/overc-idmaster-service/";
    this.dropdownlist = {
      setup: {
        language: { url: this.setup + "language", key: { key: "languageId", value: "languageDescription" } },
        company: { url: this.setup + "company", key: { key: "companyId", value: "companyName" } },
        country: { url: this.setup + "country", key: { key: "countryId", value: "countryName", languageId: "languageId", companyId: "companyId" } },
        province: { url: this.setup + "province", key: { key: "provinceId", value: "provinceName", languageId: "languageId", companyId: "companyId" } },
        menu: { url: this.setup + "menu", key: { key: "menuId", value: "menuName", languageId: "languageId", companyId: "companyId" } },
        subMenu: { url: this.setup + "menu", key: { key: "subMenuId", value: "subMenuName", languageId: "languageId", companyId: "companyId" } },
        authorizationObject: { url: this.setup + "menu", key: { key: "authorizationObjectId", value: "authorizationObjectValue", languageId: "languageId", companyId: "companyId" } },
        district: { url: this.setup + "district", key: { key: "districtId", value: "districtName", languageId: "languageId", companyId: "companyId" } },
        subProduct: { url: this.setup + "subProduct", key: { key: "subProductId", value: "subProductName", languageId: "languageId", companyId: "companyId" } },
        product: { url: this.setup + "product", key: { key: "productId", value: "productName", languageId: "languageId", companyId: "companyId" } },
        customer: { url: this.setup + "customer", key: { key: "customerId", value: "customerName", languageId: "languageId", companyId: "companyId" } },
        city: { url: this.setup + "city", key: { key: "cityId", value: "cityName", languageId: "languageId", companyId: "companyId" } },
        serviceType: { url: this.setup + "serviceType", key: { key: "serviceTypeId", value: "serviceTypeText", languageId: "languageId", companyId: "companyId" } }
      }
    };
  }
  getalldropdownlist(url) {
    let observableBatch = [];
    url.forEach((url2) => {
      observableBatch.push(this.http.get(url2).pipe(catchError((err) => of(err))));
    });
    return forkJoin(observableBatch);
  }
  foreachlist(list, val, _filter = {}, addblank = false) {
    let dropdownlist = [];
    let dropdownlist1 = [];
    let filter = list;
    if (_filter)
      filter = this.cs.filterArray(list, _filter);
    if (addblank)
      dropdownlist.push({ key: "", value: "" });
    for (const l of filter) {
      let filter2 = this.cs.filterArray(dropdownlist, { key: l[val.key] });
      if (filter2.length == 0)
        dropdownlist1.push({ value: l[val.key], label: l[val.key] + " - " + l[val.value] });
    }
    return dropdownlist1.sort((a, b) => a.value > b.value ? 1 : -1);
  }
  forLanguageFilter(list, val, _filter = {}, addblank = false) {
    let dropdownlist = [];
    let dropdownlist1 = [];
    let dropdownlist2 = [];
    let filter = list;
    if (_filter)
      filter = this.cs.filterArray(list, _filter);
    if (addblank)
      dropdownlist.push({ key: "", value: "", languageId: "", companyId: "" });
    for (const l of filter) {
      let filter2 = this.cs.filterArray(dropdownlist, { key: l[val.key] });
      if (filter2.length == 0)
        dropdownlist1.push({ value: l[val.key], label: l[val.key] + " - " + l[val.value], languageId: l[val.languageId], companyId: l[val.companyId] });
    }
    dropdownlist1.forEach((x) => {
      if (this.auth.languageId == x.languageId && this.auth.companyId == x.companyId) {
        dropdownlist2.push(x);
      }
    });
    return dropdownlist2.sort((a, b) => a.value > b.value ? 1 : -1);
  }
};
_CommonAPIService.\u0275fac = function CommonAPIService_Factory(t) {
  return new (t || _CommonAPIService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(CommonServiceService), \u0275\u0275inject(AuthService), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(MessageService));
};
_CommonAPIService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommonAPIService, factory: _CommonAPIService.\u0275fac, providedIn: "root" });
var CommonAPIService = _CommonAPIService;

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
  CommonAPIService,
  ProvinceService,
  CityService,
  CountryService
};
//# sourceMappingURL=chunk-TUR2LNZU.js.map

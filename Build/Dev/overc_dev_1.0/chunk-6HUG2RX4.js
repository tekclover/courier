import {
  AuthService
} from "./chunk-OGNAGBEH.js";
import {
  CommonServiceService,
  HttpClient,
  MessageService,
  NgxSpinnerService,
  catchError,
  forkJoin,
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-FTH33YAX.js";

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
        currency: { url: this.setup + "currency", key: { key: "currencyId", value: "currencyDescription" } },
        province: { url: this.setup + "province", key: { key: "provinceId", value: "provinceName", languageId: "languageId", companyId: "companyId" } },
        menu: { url: this.setup + "menu", key: { key: "menuId", value: "menuName", languageId: "languageId", companyId: "companyId" } },
        subMenu: { url: this.setup + "menu", key: { key: "subMenuId", value: "subMenuName", languageId: "languageId", companyId: "companyId" } },
        authorizationObject: { url: this.setup + "menu", key: { key: "authorizationObjectId", value: "authorizationObjectValue", languageId: "languageId", companyId: "companyId" } },
        district: { url: this.setup + "district", key: { key: "districtId", value: "districtName", languageId: "languageId", companyId: "companyId" } },
        subProduct: { url: this.setup + "subProduct", key: { key: "subProductId", value: "subProductName", languageId: "languageId", companyId: "companyId" } },
        product: { url: this.setup + "product", key: { key: "productId", value: "productName", languageId: "languageId", companyId: "companyId" } },
        customer: { url: this.setup + "customer", key: { key: "customerId", value: "customerName", languageId: "languageId", companyId: "companyId" } },
        city: { url: this.setup + "city", key: { key: "cityId", value: "cityName", languageId: "languageId", companyId: "companyId" } },
        serviceType: { url: this.setup + "serviceType", key: { key: "serviceTypeId", value: "serviceTypeText", languageId: "languageId", companyId: "companyId" } },
        opStatus: { url: this.setup + "opStatus", key: { key: "statusCode", value: "opStatusDescription", languageId: "languageId", companyId: "companyId" } },
        rateParameter: { url: this.setup + "rateParameter", key: { key: "rateParameterId", value: "rateParameterDescription", languageId: "languageId", companyId: "companyId" } },
        hub: { url: this.setup + "hub", key: { key: "hubCode", value: "hubName", languageId: "languageId", companyId: "companyId" } }
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

export {
  CommonAPIService
};
//# sourceMappingURL=chunk-6HUG2RX4.js.map
import {
  CommonServiceService,
  HttpClient,
  NgxSpinnerService,
  Router,
  Subscription,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ZBOZZXAT.js";

// src/app/core/Auth/auth.service.ts
var _AuthService = class _AuthService {
  constructor(http, router, spin, cs) {
    this.http = http;
    this.router = router;
    this.spin = spin;
    this.cs = cs;
    this.sub = new Subscription();
    this.userData = true;
  }
  get isLoggedIn() {
    return sessionStorage.getItem("user") ? true : false;
  }
  get isMenu() {
    return sessionStorage.getItem("menu") ? true : false;
  }
  get MenuData() {
    return JSON.parse(sessionStorage.getItem("menu"));
  }
  isuserdata() {
    if (!this.isLoggedIn)
      this.logout();
  }
  isMenudata() {
    if (!this.isMenu)
      this.logout();
  }
  logout() {
    this.router.navigate([""]);
    sessionStorage.clear();
  }
  ngOnDestroy() {
  }
  login(user) {
    sessionStorage.clear();
    localStorage.clear();
    return new Promise((resolve, reject) => {
      this.spin.show();
      this.sub.add(this.http.get(`/overc-idmaster-service/login?userID=${user.userName}&password=${user.password}`).subscribe({ next: (res) => {
        sessionStorage.setItem("user", JSON.stringify(res));
        this.router.navigate(["/main/idMaster/language"]);
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      } }));
    });
  }
  refreshToken(apiName) {
    return this.http.post("/auth-token", {
      clientId: "pixeltrice",
      clientSecretKey: "pixeltrice-secret-key",
      grantType: "password",
      oauthPassword: "test",
      oauthUserName: "test",
      apiName
    });
  }
  saveToken(token, apiName) {
    window.sessionStorage.removeItem(apiName);
    window.sessionStorage.setItem(apiName, token);
  }
  saveTokenfrom(token, apiName) {
    window.sessionStorage.removeItem(apiName);
    window.sessionStorage.setItem(apiName, token.access_token);
  }
  getToken(apiName) {
    return window.sessionStorage.getItem(apiName);
  }
  get userID() {
    if (sessionStorage.getItem("user"))
      return JSON.parse(sessionStorage.getItem("user")).userId;
  }
  get companyId() {
    if (sessionStorage.getItem("user"))
      return JSON.parse(sessionStorage.getItem("user")).companyId;
  }
  get languageId() {
    if (sessionStorage.getItem("user"))
      return JSON.parse(sessionStorage.getItem("user")).languageId;
  }
  get partnerId() {
    if (sessionStorage.getItem("user"))
      return JSON.parse(sessionStorage.getItem("user")).partnerId;
  }
};
_AuthService.\u0275fac = function AuthService_Factory(t) {
  return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(CommonServiceService));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;

export {
  AuthService
};
//# sourceMappingURL=chunk-LMWXRZ6A.js.map

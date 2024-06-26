import {
  CityService,
  CountryService,
  ProductService,
  ProvinceService,
  SubProductService
} from "./chunk-UTOVQBQV.js";
import {
  IataService
} from "./chunk-KGPE7L27.js";
import {
  CommonAPIService
} from "./chunk-4JBAD32B.js";
import {
  CustomTableComponent,
  DeleteComponent
} from "./chunk-RW4PVY6H.js";
import {
  PathNameService
} from "./chunk-DUUBWZYW.js";
import {
  ActivatedRoute,
  AuthService,
  Calendar,
  Checkbox,
  CommonModule,
  CommonServiceService,
  DatePipe,
  DefaultValueAccessor,
  Dropdown,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  HttpClient,
  IconField,
  InputIcon,
  InputText,
  KeyFilter,
  MatDialog,
  MatError,
  MatMenu,
  MatMenuContent,
  MatMenuItem,
  MaxLengthValidator,
  MessageService,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgxSpinnerService,
  PrimeTemplate,
  Router,
  RouterLink,
  RouterModule,
  SharedModule,
  Stepper,
  StepperPanel,
  Table,
  TableHeaderCheckbox,
  Validators,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DHPTGBKC.js";

// src/app/main/master/hub/hub.service.ts
var _HubService = class _HubService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(hubCode) {
    return this.http.get("/overc-idmaster-service/hub/" + hubCode + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/hub", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/hub/" + obj.hubCode + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(hubCode) {
    return this.http.delete("/overc-idmaster-service/hub/" + hubCode + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/hub/find", obj);
  }
};
_HubService.\u0275fac = function HubService_Factory(t) {
  return new (t || _HubService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_HubService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HubService, factory: _HubService.\u0275fac, providedIn: "root" });
var HubService = _HubService;

// src/app/main/master/hub/hub-new/hub-new.component.ts
var _c0 = () => ({ "width": "100%" });
function HubNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function HubNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function HubNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function HubNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, HubNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, HubNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function HubNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 39)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 39)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_9_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 39)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_9_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 39)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_9_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 39)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, HubNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, HubNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 18);
    \u0275\u0275text(13, "Hub Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17)(16, "p", 23);
    \u0275\u0275text(17, "Hub Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 17)(20, "p", 18);
    \u0275\u0275text(21, "Hub Category");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 17)(24, "p", 23);
    \u0275\u0275text(25, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p-dropdown", 26);
    \u0275\u0275listener("onChange", function HubNewComponent_ng_template_9_Template_p_dropdown_onChange_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.countryChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, HubNewComponent_ng_template_9_mat_error_27_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 17)(29, "p", 23);
    \u0275\u0275text(30, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p-dropdown", 27);
    \u0275\u0275listener("onChange", function HubNewComponent_ng_template_9_Template_p_dropdown_onChange_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.provinceChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, HubNewComponent_ng_template_9_mat_error_32_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 17)(34, "p", 23);
    \u0275\u0275text(35, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p-dropdown", 28);
    \u0275\u0275listener("onChange", function HubNewComponent_ng_template_9_Template_p_dropdown_onChange_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cityChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, HubNewComponent_ng_template_9_mat_error_37_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 17)(39, "p", 18);
    \u0275\u0275text(40, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 17)(43, "p", 18);
    \u0275\u0275text(44, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 17)(47, "p", 18);
    \u0275\u0275text(48, "Address Line 1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 17)(51, "p", 18);
    \u0275\u0275text(52, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 17)(55, "p", 18);
    \u0275\u0275text(56, "Address Line 3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 17)(59, "p", 18);
    \u0275\u0275text(60, "Address Line 4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 17)(63, "p", 18);
    \u0275\u0275text(64, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 36)(67, "button", 37);
    \u0275\u0275text(68, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 38);
    \u0275\u0275listener("click", function HubNewComponent_ng_template_9_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_17_0;
    let tmp_22_0;
    let tmp_28_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c0));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(37, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c0));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(39, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("hubCode")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("hubName")) == null ? null : tmp_13_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c0));
    \u0275\u0275property("options", ctx_r2.countryIdList)("disabled", true)("ngClass", ((tmp_17_0 = ctx_r2.form.get("countryId")) == null ? null : tmp_17_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(41, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c0));
    \u0275\u0275property("options", ctx_r2.provinceIdList)("ngClass", ((tmp_22_0 = ctx_r2.form.get("provinceId")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(43, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("provinceId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c0));
    \u0275\u0275property("options", ctx_r2.cityIdList)("ngClass", ((tmp_28_0 = ctx_r2.form.get("cityId")) == null ? null : tmp_28_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(45, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("cityId"));
    \u0275\u0275advance(33);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function HubNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function HubNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 40);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 41);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function HubNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 36)(18, "button", 47);
    \u0275\u0275listener("click", function HubNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 38);
    \u0275\u0275listener("click", function HubNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function HubNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, HubNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, HubNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _HubNewComponent = class _HubNewComponent {
  constructor(cs, spin, route, router, path, fb, service, countryService, provinceService, cityService, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.countryService = countryService;
    this.provinceService = provinceService;
    this.cityService = cityService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      hubCode: [],
      hubName: [, Validators.required],
      hubCategory: [],
      countryId: [],
      countryName: [],
      provinceId: [],
      provinceName: [],
      cityId: [],
      cityName: [],
      addressLine1: [],
      addressLine2: [],
      addressLine3: [],
      addressLine4: [],
      latitude: [],
      longitude: [],
      remark: [],
      referenceField1: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      referenceField10: [],
      createdOn: [""],
      createdBy: [],
      updatedOn: [""],
      updatedBy: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
    this.provinceIdList = [];
    this.cityIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Hub", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.hubCode.disable();
      this.form.controls.countryId.disable();
      this.form.controls.provinceId.disable();
      this.form.controls.cityId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.province.url,
      this.cas.dropdownlist.setup.city.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.countryIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.country.key);
        this.provinceIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.province.key);
        this.cityIdList = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.city.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res.hubCode + " has been updated successfully"
          });
          this.router.navigate(["/main/master/hub"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res.hubCode + " has been created successfully"
            });
            this.router.navigate(["/main/master/hub"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  countryChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.countryId = [this.form.controls.countryId.value];
    this.countryIdList = [];
    this.spin.show();
    this.countryService.search(obj).subscribe({
      next: (result) => {
        this.countryIdList = this.cas.foreachlist(result, { key: "countryId", value: "countryName" });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  provinceChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.provinceId = [this.form.controls.provinceId.value];
    this.provinceIdList = [];
    this.spin.show();
    this.provinceService.search(obj).subscribe({
      next: (result) => {
        this.provinceIdList = this.cas.foreachlist(result, { key: "provinceId", value: "provinceName" });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  cityChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.cityId = [this.form.controls.cityId.value];
    this.countryIdList = [];
    this.spin.show();
    this.cityService.search(obj).subscribe({
      next: (result) => {
        this.cityIdList = this.cas.foreachlist(result, { key: "cityId", value: "cityName" });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_HubNewComponent.\u0275fac = function HubNewComponent_Factory(t) {
  return new (t || _HubNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HubService), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(ProvinceService), \u0275\u0275directiveInject(CityService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_HubNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HubNewComponent, selectors: [["app-hub-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "hubCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "hubName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "hubCategory", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "onChange", "options", "disabled", "ngClass", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "provinceId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "cityId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "longitude", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "latitude", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "pInputText", "", "formControlName", "addressLine1", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "pInputText", "", "formControlName", "addressLine2", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "pInputText", "", "formControlName", "addressLine3", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "pInputText", "", "formControlName", "addressLine4", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/hub", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function HubNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function HubNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, HubNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, HubNewComponent_ng_template_9_Template, 71, 46, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, HubNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Hub - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=hub-new.component.css.map */"] });
var HubNewComponent = _HubNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HubNewComponent, { className: "HubNewComponent", filePath: "src\\app\\main\\master\\hub\\hub-new\\hub-new.component.ts", lineNumber: 20 });
})();

// src/app/main/master/hub/hub.component.ts
function HubComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function HubComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 25);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HubComponent_ng_template_25_th_3_Template, 2, 1, "th", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function HubComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function HubComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8[col_r7.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function HubComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, HubComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 30)(2, HubComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function HubComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28)(2, "p-checkbox", 29);
    \u0275\u0275listener("onChange", function HubComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HubComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedHub, $event) || (ctx_r5.selectedHub = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HubComponent_ng_template_26_td_3_Template, 4, 2, "td", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedHub[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedHub);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function HubComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 31);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _HubComponent = class _HubComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.hubTable = [];
    this.selectedHub = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Hub - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "hubCode", header: "Hub Code" },
      { field: "hubName", header: "Hub Name" },
      { field: "hubCategory", header: "Hub Category" },
      { field: "countryName", header: "Country" },
      { field: "provinceName", header: "Province" },
      { field: "cityName", header: "City" },
      { field: "latitude", header: "Latitude" },
      { field: "longitude", header: "Longitude" },
      { field: "addressLine1", header: "Address Line 1" },
      { field: "addressLine2", header: "Address Line 2" },
      { field: "addressLine3", header: "Address Line 3" },
      { field: "addressLine4", header: "Address Line 4" },
      { field: "remark", header: "Remarks" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "countryId", header: "Country ID" },
      { field: "provinceId", header: "Province ID" },
      { field: "cityId", header: "City ID" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.hubTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedHub[this.selectedHub.length - 1];
    this.selectedHub.length = 0;
    this.selectedHub.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedHub[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedHub.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedHub[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/master/hub-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedHub.length === 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: {
        line: this.selectedHub,
        module: "Hub",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedHub[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.hubCode).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines.hubCode + " Deleted successfully"
        });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.hubTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Hub");
  }
};
_HubComponent.\u0275fac = function HubComponent_Factory(t) {
  return new (t || _HubComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(HubService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_HubComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HubComponent, selectors: [["app-hub"]], decls: 28, vars: 9, consts: [["hubTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function HubComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "Hub - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "img", 5);
    \u0275\u0275listener("click", function HubComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 6);
    \u0275\u0275listener("click", function HubComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 7);
    \u0275\u0275listener("click", function HubComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 8);
    \u0275\u0275listener("click", function HubComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function HubComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 11)(13, "p-iconField", 12);
    \u0275\u0275element(14, "p-inputIcon", 13);
    \u0275\u0275elementStart(15, "input", 14);
    \u0275\u0275listener("input", function HubComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const hubTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(hubTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "p", 16);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 17)(20, "p-calendar", 18)(21, "p-dropdown", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "p-table", 21, 0);
    \u0275\u0275template(25, HubComponent_ng_template_25_Template, 4, 2, "ng-template", 22)(26, HubComponent_ng_template_26_Template, 4, 5, "ng-template", 23)(27, HubComponent_ng_template_27_Template, 4, 1, "ng-template", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.hubTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=hub.component.css.map */"] });
var HubComponent = _HubComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HubComponent, { className: "HubComponent", filePath: "src\\app\\main\\master\\hub\\hub.component.ts", lineNumber: 18 });
})();

// src/app/main/master/country-mapping/country-mapping.service.ts
var _CountryMappingService = class _CountryMappingService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(partnerId) {
    return this.http.get("/overc-idmaster-service/countryMapping/" + partnerId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/countryMapping", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/countryMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&countryId=" + obj.countryId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/countryMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&countryId=" + obj.countryId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/countryMapping/find", obj);
  }
};
_CountryMappingService.\u0275fac = function CountryMappingService_Factory(t) {
  return new (t || _CountryMappingService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_CountryMappingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CountryMappingService, factory: _CountryMappingService.\u0275fac, providedIn: "root" });
var CountryMappingService = _CountryMappingService;

// src/app/main/master/country-mapping/country-mapping-new/country-mapping-new.component.ts
var _c02 = () => ({ "width": "100%" });
function CountryMappingNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CountryMappingNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function CountryMappingNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function CountryMappingNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, CountryMappingNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, CountryMappingNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function CountryMappingNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_9_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, CountryMappingNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, CountryMappingNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, CountryMappingNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 22);
    \u0275\u0275text(18, " Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, CountryMappingNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 22);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, CountryMappingNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 22);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275template(30, CountryMappingNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 18);
    \u0275\u0275text(33, " Partner Country ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 27);
    \u0275\u0275template(35, CountryMappingNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 17)(37, "p", 18);
    \u0275\u0275text(38, " Partner Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 28);
    \u0275\u0275template(40, CountryMappingNewComponent_ng_template_9_mat_error_40_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 17)(42, "p", 18);
    \u0275\u0275text(43, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 30)(46, "button", 31);
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 32);
    \u0275\u0275listener("click", function CountryMappingNewComponent_ng_template_9_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_24_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c02));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(30, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c02));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(32, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c02));
    \u0275\u0275property("options", ctx_r2.countryIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("countryId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(34, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("partnerId")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("partnerName")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_22_0 = ctx_r2.form.get("partnerType")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerType"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_24_0 = ctx_r2.form.get("partnerCountryId")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r2.form.get("partnerCountryId")) == null ? null : tmp_24_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerCountryId"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerCountryName"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CountryMappingNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function CountryMappingNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 34);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 35);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function CountryMappingNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 30)(18, "button", 41);
    \u0275\u0275listener("click", function CountryMappingNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 32);
    \u0275\u0275listener("click", function CountryMappingNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CountryMappingNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CountryMappingNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, CountryMappingNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _CountryMappingNewComponent = class _CountryMappingNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, auth, cas) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.auth = auth;
    this.cas = cas;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      partnerId: [, Validators.required],
      partnerType: [, Validators.required],
      partnerName: [, Validators.required],
      countryId: [, Validators.required],
      countryName: [],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      partnerCountryId: [],
      partnerCountryName: [],
      remark: [],
      referenceField1: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      referenceField10: [],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Country Mapping", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.countryId.disable();
      this.form.controls.partnerId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.country.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.countryIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.country.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.partnerId + " has been updated successfully" });
          this.router.navigate(["/main/master/countryMapping"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.partnerId + " has been created successfully" });
            this.router.navigate(["/main/master/countryMapping"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_CountryMappingNewComponent.\u0275fac = function CountryMappingNewComponent_Factory(t) {
  return new (t || _CountryMappingNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CountryMappingService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_CountryMappingNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountryMappingNewComponent, selectors: [["app-country-mapping-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerCountryId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "partnerCountryName", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/countryMapping", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CountryMappingNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function CountryMappingNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, CountryMappingNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, CountryMappingNewComponent_ng_template_9_Template, 50, 35, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CountryMappingNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Country Mapping - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=country-mapping-new.component.css.map */"] });
var CountryMappingNewComponent = _CountryMappingNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountryMappingNewComponent, { className: "CountryMappingNewComponent", filePath: "src\\app\\main\\master\\country-mapping\\country-mapping-new\\country-mapping-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/country-mapping/country-mapping.component.ts
function CountryMappingComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function CountryMappingComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CountryMappingComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function CountryMappingComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function CountryMappingComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CountryMappingComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CountryMappingComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, CountryMappingComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function CountryMappingComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function CountryMappingComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CountryMappingComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedCountryMapping, $event) || (ctx_r5.selectedCountryMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CountryMappingComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedCountryMapping[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedCountryMapping);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function CountryMappingComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function CountryMappingComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CountryMappingComponent = class _CountryMappingComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.countryMappingTable = [];
    this.selectedCountryMapping = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Country Mapping - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "partnerId", header: "Partner ID" },
      { field: "companyName", header: "Company" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerName", header: "Partner Name" },
      { field: "partnerCountryName", header: "Partner Country" },
      { field: "remark", header: "Remark" },
      { field: "countryName", header: "Country" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "countryId", header: "Country ID" },
      { field: "partnerCountryId", header: "Partner Country ID" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.countryMappingTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedCountryMapping[this.selectedCountryMapping.length - 1];
    this.selectedCountryMapping.length = 0;
    this.selectedCountryMapping.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCountryMapping[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedCountryMapping.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCountryMapping[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/countryMapping-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCountryMapping.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedCountryMapping, module: "Country Mapping", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCountryMapping[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.partnerId + " deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.countryMappingTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Country Mapping");
  }
};
_CountryMappingComponent.\u0275fac = function CountryMappingComponent_Factory(t) {
  return new (t || _CountryMappingComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CountryMappingService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CountryMappingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountryMappingComponent, selectors: [["app-country-mapping"]], decls: 31, vars: 9, consts: [["CountryMappingTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CountryMappingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Country Mapping - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function CountryMappingComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const CountryMappingTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(CountryMappingTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, CountryMappingComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, CountryMappingComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, CountryMappingComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, CountryMappingComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.countryMappingTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=country-mapping.component.css.map */"] });
var CountryMappingComponent = _CountryMappingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountryMappingComponent, { className: "CountryMappingComponent", filePath: "src\\app\\main\\master\\country-mapping\\country-mapping.component.ts", lineNumber: 19 });
})();

// src/app/main/master/district-mapping/district-mapping.service.ts
var _DistrictMappingService = class _DistrictMappingService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(partnerId) {
    return this.http.get("/overc-idmaster-service/districtMapping/" + partnerId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/districtMapping", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/districtMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&districtId=" + obj.districtId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/districtMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&districtId=" + obj.districtId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/districtMapping/find", obj);
  }
};
_DistrictMappingService.\u0275fac = function DistrictMappingService_Factory(t) {
  return new (t || _DistrictMappingService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_DistrictMappingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DistrictMappingService, factory: _DistrictMappingService.\u0275fac, providedIn: "root" });
var DistrictMappingService = _DistrictMappingService;

// src/app/main/master/district-mapping/district-mapping-new/district-mapping-new.component.ts
var _c03 = () => ({ "width": "100%" });
function DistrictMappingNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function DistrictMappingNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function DistrictMappingNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, DistrictMappingNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, DistrictMappingNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function DistrictMappingNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_9_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, DistrictMappingNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, DistrictMappingNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, DistrictMappingNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 22);
    \u0275\u0275text(18, "Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, DistrictMappingNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 22);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, DistrictMappingNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 22);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275template(30, DistrictMappingNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 18);
    \u0275\u0275text(33, "Partner District ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 27);
    \u0275\u0275template(35, DistrictMappingNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 17)(37, "p", 18);
    \u0275\u0275text(38, "Partner District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 28);
    \u0275\u0275template(40, DistrictMappingNewComponent_ng_template_9_mat_error_40_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 17)(42, "p", 18);
    \u0275\u0275text(43, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 30)(46, "button", 31);
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 32);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_ng_template_9_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_26_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c03));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(31, _c03));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c03));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(33, _c03));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c03));
    \u0275\u0275property("options", ctx_r2.districtIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(35, _c03))("ngClass", ((tmp_16_0 = ctx_r2.form.get("districtId")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("districtId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("partnerId")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("partnerName")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_22_0 = ctx_r2.form.get("partnerType")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerType"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_24_0 = ctx_r2.form.get("partnerDistrictId")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r2.form.get("partnerDistrictId")) == null ? null : tmp_24_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerDistrictId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_26_0 = ctx_r2.form.get("partnerDistrictName")) == null ? null : tmp_26_0.invalid) && ((tmp_26_0 = ctx_r2.form.get("partnerDistrictName")) == null ? null : tmp_26_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerDistrictName"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function DistrictMappingNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 34);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 35);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function DistrictMappingNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 30)(18, "button", 41);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 32);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function DistrictMappingNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, DistrictMappingNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, DistrictMappingNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _DistrictMappingNewComponent = class _DistrictMappingNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      districtId: [, Validators.required],
      districtName: [],
      partnerDistrictId: [],
      partnerDistrictName: [],
      partnerId: [, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      partnerType: [, Validators.required],
      partnerName: [, Validators.required],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""],
      referenceField1: [],
      remark: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      referenceField10: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.districtIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "District Mapping", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.districtId.disable();
      this.form.controls.partnerId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.district.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.districtIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.district.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.partnerId + "has been updated successfully" });
          this.router.navigate(["/main/master/districtMapping"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.partnerId + "has been created successfully" });
            this.router.navigate(["/main/master/districtMapping"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_DistrictMappingNewComponent.\u0275fac = function DistrictMappingNewComponent_Factory(t) {
  return new (t || _DistrictMappingNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DistrictMappingService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_DistrictMappingNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistrictMappingNewComponent, selectors: [["app-district-mapping-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "districtId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle", "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerDistrictId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "partnerDistrictName", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/districtMapping", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function DistrictMappingNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function DistrictMappingNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, DistrictMappingNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, DistrictMappingNewComponent_ng_template_9_Template, 50, 36, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, DistrictMappingNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("District Mapping - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=district-mapping-new.component.css.map */"] });
var DistrictMappingNewComponent = _DistrictMappingNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistrictMappingNewComponent, { className: "DistrictMappingNewComponent", filePath: "src\\app\\main\\master\\district-mapping\\district-mapping-new\\district-mapping-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/district-mapping/district-mapping.component.ts
function DistrictMappingComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function DistrictMappingComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DistrictMappingComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function DistrictMappingComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function DistrictMappingComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function DistrictMappingComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, DistrictMappingComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, DistrictMappingComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function DistrictMappingComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function DistrictMappingComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function DistrictMappingComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedDistrictMapping, $event) || (ctx_r5.selectedDistrictMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, DistrictMappingComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedDistrictMapping[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedDistrictMapping);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function DistrictMappingComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function DistrictMappingComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _DistrictMappingComponent = class _DistrictMappingComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.districtMappingTable = [];
    this.selectedDistrictMapping = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "District Mapping - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "partnerId", header: "Partner ID" },
      { field: "districtName", header: "District" },
      { field: "companyName", header: "Company" },
      { field: "partnerName", header: "Partner Name" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerDistrictName", header: "Partner District " },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageDescription", header: "Language" },
      { field: "partnerDistrictId", header: "Partner District ID" },
      { field: "districtId", header: "District ID" },
      { field: "languageId", header: "Language Id" },
      { field: "companyId", header: "Company Id" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.districtMappingTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedDistrictMapping[this.selectedDistrictMapping.length - 1];
    this.selectedDistrictMapping.length = 0;
    this.selectedDistrictMapping.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedDistrictMapping[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedDistrictMapping.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedDistrictMapping[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/districtMapping-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedDistrictMapping.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedDistrictMapping, module: "District Mapping", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedDistrictMapping[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: " District Mapping deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.districtMappingTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "District Mapping");
  }
};
_DistrictMappingComponent.\u0275fac = function DistrictMappingComponent_Factory(t) {
  return new (t || _DistrictMappingComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(DistrictMappingService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_DistrictMappingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistrictMappingComponent, selectors: [["app-district-mapping"]], decls: 31, vars: 9, consts: [["districtMappingTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function DistrictMappingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "District Mapping - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function DistrictMappingComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const districtMappingTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(districtMappingTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, DistrictMappingComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, DistrictMappingComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, DistrictMappingComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, DistrictMappingComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.districtMappingTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=district-mapping.component.css.map */"] });
var DistrictMappingComponent = _DistrictMappingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistrictMappingComponent, { className: "DistrictMappingComponent", filePath: "src\\app\\main\\master\\district-mapping\\district-mapping.component.ts", lineNumber: 18 });
})();

// src/app/main/master/province-mapping/province-mapping.service.ts
var _ProvinceMappingService = class _ProvinceMappingService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(partnerId) {
    return this.http.get("/overc-idmaster-service/provinceMapping/" + partnerId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/provinceMapping", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/provinceMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&provinceId=" + obj.provinceId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/provinceMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&provinceId=" + obj.provinceId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/provinceMapping/find", obj);
  }
};
_ProvinceMappingService.\u0275fac = function ProvinceMappingService_Factory(t) {
  return new (t || _ProvinceMappingService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ProvinceMappingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProvinceMappingService, factory: _ProvinceMappingService.\u0275fac, providedIn: "root" });
var ProvinceMappingService = _ProvinceMappingService;

// src/app/main/master/province-mapping/province-mapping-new/province-mapping-new.component.ts
var _c04 = () => ({ "width": "100%" });
function ProvinceMappingNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ProvinceMappingNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function ProvinceMappingNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, ProvinceMappingNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, ProvinceMappingNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function ProvinceMappingNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_9_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, ProvinceMappingNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, ProvinceMappingNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, ProvinceMappingNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 22);
    \u0275\u0275text(18, "Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, ProvinceMappingNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 22);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, ProvinceMappingNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 22);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275template(30, ProvinceMappingNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 18);
    \u0275\u0275text(33, "Partner Province ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 27);
    \u0275\u0275template(35, ProvinceMappingNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 17)(37, "p", 18);
    \u0275\u0275text(38, "Partner Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 28);
    \u0275\u0275template(40, ProvinceMappingNewComponent_ng_template_9_mat_error_40_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 17)(42, "p", 18);
    \u0275\u0275text(43, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 30)(46, "button", 31);
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 32);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_ng_template_9_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_26_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c04));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(31, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c04));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(33, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c04));
    \u0275\u0275property("options", ctx_r2.provinceIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("provinceId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(35, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("provinceId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("partnerId")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("partnerName")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_22_0 = ctx_r2.form.get("partnerType")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerType"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_24_0 = ctx_r2.form.get("partnerProvinceId")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r2.form.get("partnerProvinceId")) == null ? null : tmp_24_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerProvinceId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_26_0 = ctx_r2.form.get("partnerProvinceName")) == null ? null : tmp_26_0.invalid) && ((tmp_26_0 = ctx_r2.form.get("partnerProvinceName")) == null ? null : tmp_26_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerProvinceName"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ProvinceMappingNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 34);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 35);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function ProvinceMappingNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 30)(18, "button", 41);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 32);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ProvinceMappingNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, ProvinceMappingNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, ProvinceMappingNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _ProvinceMappingNewComponent = class _ProvinceMappingNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      provinceId: [, Validators.required],
      provinceName: [],
      partnerProvinceId: [],
      partnerProvinceName: [],
      partnerId: [, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      partnerType: [, Validators.required],
      partnerName: [, Validators.required],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""],
      referenceField1: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      referenceField10: [],
      remark: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.provinceIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Province Mapping", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.provinceId.disable();
      this.form.controls.partnerId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.province.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.provinceIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.province.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.partnerId + "has been updated successfully" });
          this.router.navigate(["/main/master/provinceMapping"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.partnerId + "has been created successfully" });
            this.router.navigate(["/main/master/provinceMapping"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_ProvinceMappingNewComponent.\u0275fac = function ProvinceMappingNewComponent_Factory(t) {
  return new (t || _ProvinceMappingNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProvinceMappingService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_ProvinceMappingNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProvinceMappingNewComponent, selectors: [["app-province-mapping-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "provinceId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerProvinceId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "partnerProvinceName", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/provinceMapping", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function ProvinceMappingNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function ProvinceMappingNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, ProvinceMappingNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, ProvinceMappingNewComponent_ng_template_9_Template, 50, 36, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProvinceMappingNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Province Mapping - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=province-mapping-new.component.css.map */"] });
var ProvinceMappingNewComponent = _ProvinceMappingNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProvinceMappingNewComponent, { className: "ProvinceMappingNewComponent", filePath: "src\\app\\main\\master\\province-mapping\\province-mapping-new\\province-mapping-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/province-mapping/province-mapping.component.ts
function ProvinceMappingComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function ProvinceMappingComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProvinceMappingComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function ProvinceMappingComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function ProvinceMappingComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ProvinceMappingComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ProvinceMappingComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, ProvinceMappingComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function ProvinceMappingComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function ProvinceMappingComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ProvinceMappingComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedProvinceMapping, $event) || (ctx_r5.selectedProvinceMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ProvinceMappingComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedProvinceMapping[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedProvinceMapping);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function ProvinceMappingComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function ProvinceMappingComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _ProvinceMappingComponent = class _ProvinceMappingComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.provinceMappingTable = [];
    this.selectedProvinceMapping = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Province Mapping - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "partnerId", header: "Partner ID" },
      { field: "provinceName", header: "Province" },
      { field: "companyName", header: "Company" },
      { field: "partnerName", header: "Partner Name" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerProvinceName", header: "Partner Province " },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageDescription", header: "Language" },
      { field: "partnerProvinceId", header: "Partner Province ID" },
      { field: "provinceId", header: "Province ID" },
      { field: "languageId", header: "Language Id" },
      { field: "companyId", header: "Company Id" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.provinceMappingTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedProvinceMapping[this.selectedProvinceMapping.length - 1];
    this.selectedProvinceMapping.length = 0;
    this.selectedProvinceMapping.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedProvinceMapping[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedProvinceMapping.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedProvinceMapping[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/provinceMapping-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedProvinceMapping.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedProvinceMapping, module: "Province Mapping", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedProvinceMapping[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: " Province Mapping deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.provinceMappingTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Province Mapping");
  }
};
_ProvinceMappingComponent.\u0275fac = function ProvinceMappingComponent_Factory(t) {
  return new (t || _ProvinceMappingComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ProvinceMappingService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ProvinceMappingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProvinceMappingComponent, selectors: [["app-province-mapping"]], decls: 31, vars: 9, consts: [["provinceMappingTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function ProvinceMappingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Province Mapping - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function ProvinceMappingComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const provinceMappingTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(provinceMappingTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, ProvinceMappingComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, ProvinceMappingComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, ProvinceMappingComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, ProvinceMappingComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.provinceMappingTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=province-mapping.component.css.map */"] });
var ProvinceMappingComponent = _ProvinceMappingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProvinceMappingComponent, { className: "ProvinceMappingComponent", filePath: "src\\app\\main\\master\\province-mapping\\province-mapping.component.ts", lineNumber: 18 });
})();

// src/app/main/master/city-mapping/city-mapping.service.ts
var _CityMappingService = class _CityMappingService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(partnerId) {
    return this.http.get("/overc-idmaster-service/cityMapping/" + partnerId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/cityMapping", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/cityMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&cityId=" + obj.cityId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/cityMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&cityId=" + obj.cityId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/cityMapping/find", obj);
  }
};
_CityMappingService.\u0275fac = function CityMappingService_Factory(t) {
  return new (t || _CityMappingService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_CityMappingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CityMappingService, factory: _CityMappingService.\u0275fac, providedIn: "root" });
var CityMappingService = _CityMappingService;

// src/app/main/master/city-mapping/city-mapping-new/city-mapping-new.component.ts
var _c05 = () => ({ "width": "100%" });
function CityMappingNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CityMappingNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function CityMappingNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function CityMappingNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, CityMappingNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, CityMappingNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function CityMappingNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_9_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 33)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, CityMappingNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, CityMappingNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, CityMappingNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 22);
    \u0275\u0275text(18, " Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, CityMappingNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 22);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, CityMappingNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 22);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275template(30, CityMappingNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 18);
    \u0275\u0275text(33, " Partner City ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 27);
    \u0275\u0275template(35, CityMappingNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 17)(37, "p", 18);
    \u0275\u0275text(38, "Partner City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 28);
    \u0275\u0275template(40, CityMappingNewComponent_ng_template_9_mat_error_40_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 17)(42, "p", 18);
    \u0275\u0275text(43, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 30)(46, "button", 31);
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 32);
    \u0275\u0275listener("click", function CityMappingNewComponent_ng_template_9_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c05));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(29, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c05));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(31, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c05));
    \u0275\u0275property("options", ctx_r2.cityIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(33, _c05))("ngClass", ((tmp_16_0 = ctx_r2.form.get("cityId")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("cityId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("partnerId")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("partnerName")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_22_0 = ctx_r2.form.get("partnerType")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerType"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerCityId"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerCityName"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CityMappingNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function CityMappingNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 34);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 35);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function CityMappingNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 30)(18, "button", 41);
    \u0275\u0275listener("click", function CityMappingNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 32);
    \u0275\u0275listener("click", function CityMappingNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CityMappingNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CityMappingNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, CityMappingNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _CityMappingNewComponent = class _CityMappingNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, auth, cas) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.auth = auth;
    this.cas = cas;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      partnerId: [, Validators.required],
      partnerType: [, Validators.required],
      partnerName: [, Validators.required],
      cityId: [, Validators.required],
      cityName: [],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      partnerCityId: [],
      partnerCityName: [],
      remark: [],
      referenceField1: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      referenceField10: [],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.cityIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "City Mapping", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.cityId.disable();
      this.form.controls.partnerId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.city.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.cityIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.city.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.partnerId + " has been updated successfully" });
          this.router.navigate(["/main/master/cityMapping"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.partnerId + " has been created successfully" });
            this.router.navigate(["/main/master/cityMapping"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_CityMappingNewComponent.\u0275fac = function CityMappingNewComponent_Factory(t) {
  return new (t || _CityMappingNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CityMappingService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_CityMappingNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CityMappingNewComponent, selectors: [["app-city-mapping-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "cityId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle", "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerCityId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerCityName", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/cityMapping", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CityMappingNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function CityMappingNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, CityMappingNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, CityMappingNewComponent_ng_template_9_Template, 50, 34, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CityMappingNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("City Mapping - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=city-mapping-new.component.css.map */"] });
var CityMappingNewComponent = _CityMappingNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CityMappingNewComponent, { className: "CityMappingNewComponent", filePath: "src\\app\\main\\master\\city-mapping\\city-mapping-new\\city-mapping-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/city-mapping/city-mapping.component.ts
function CityMappingComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function CityMappingComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CityMappingComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function CityMappingComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function CityMappingComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy"), " ");
  }
}
function CityMappingComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CityMappingComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, CityMappingComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function CityMappingComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function CityMappingComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CityMappingComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedCityMapping, $event) || (ctx_r5.selectedCityMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CityMappingComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedCityMapping[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedCityMapping);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function CityMappingComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function CityMappingComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CityMappingComponent = class _CityMappingComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.cityMappingTable = [];
    this.selectedCityMapping = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "City Mapping - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "partnerId", header: "Partner ID" },
      { field: "cityName", header: "City" },
      { field: "companyName", header: "Company" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerName", header: "Partner Name" },
      { field: "partnerCityName", header: "Partner City" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "cityId", header: "City ID" },
      { field: "partnerCityId", header: "Partner City ID" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.cityMappingTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedCityMapping[this.selectedCityMapping.length - 1];
    this.selectedCityMapping.length = 0;
    this.selectedCityMapping.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCityMapping[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedCityMapping.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCityMapping[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/cityMapping-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCityMapping.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedCityMapping, module: "City Mapping", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCityMapping[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.partnerId + " deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.cityMappingTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "City Mapping");
  }
};
_CityMappingComponent.\u0275fac = function CityMappingComponent_Factory(t) {
  return new (t || _CityMappingComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CityMappingService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CityMappingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CityMappingComponent, selectors: [["app-city-mapping"]], decls: 31, vars: 9, consts: [["CityMappingTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CityMappingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "City Mapping - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function CityMappingComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function CityMappingComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function CityMappingComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function CityMappingComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function CityMappingComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function CityMappingComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const CityMappingTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(CityMappingTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, CityMappingComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, CityMappingComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, CityMappingComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, CityMappingComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.cityMappingTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=city-mapping.component.css.map */"] });
var CityMappingComponent = _CityMappingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CityMappingComponent, { className: "CityMappingComponent", filePath: "src\\app\\main\\master\\city-mapping\\city-mapping.component.ts", lineNumber: 18 });
})();

// src/app/main/master/hub-partner-assignment/hub-partner-assignment.service.ts
var _HubPartnerAssignmentService = class _HubPartnerAssignmentService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(partnerId) {
    return this.http.get("/overc-idmaster-service/partnerHubMapping/" + partnerId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/partnerHubMapping", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/partnerHubMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&hubCode=" + obj.hubCode + "&partnerType=" + obj.partnerType, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/partnerHubMapping/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&hubCode=" + obj.hubCode + "&partnerType=" + obj.partnerType);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/partnerHubMapping/find", obj);
  }
};
_HubPartnerAssignmentService.\u0275fac = function HubPartnerAssignmentService_Factory(t) {
  return new (t || _HubPartnerAssignmentService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_HubPartnerAssignmentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HubPartnerAssignmentService, factory: _HubPartnerAssignmentService.\u0275fac, providedIn: "root" });
var HubPartnerAssignmentService = _HubPartnerAssignmentService;

// src/app/main/master/hub-partner-assignment/hub-partner-assignment-new/hub-partner-assignment-new.component.ts
var _c06 = () => ({ "width": "100%" });
function HubPartnerAssignmentNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function HubPartnerAssignmentNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function HubPartnerAssignmentNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, HubPartnerAssignmentNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, HubPartnerAssignmentNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function HubPartnerAssignmentNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubPartnerAssignmentNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubPartnerAssignmentNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubPartnerAssignmentNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubPartnerAssignmentNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubPartnerAssignmentNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubPartnerAssignmentNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, HubPartnerAssignmentNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, HubPartnerAssignmentNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "Hub Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, HubPartnerAssignmentNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 22);
    \u0275\u0275text(18, " Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, HubPartnerAssignmentNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 22);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, HubPartnerAssignmentNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 22);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275template(30, HubPartnerAssignmentNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 18);
    \u0275\u0275text(33, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 28)(36, "button", 29);
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 30);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_ng_template_9_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c06));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(27, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c06));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(29, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c06));
    \u0275\u0275property("options", ctx_r2.hubCodeList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(31, _c06))("ngClass", ((tmp_16_0 = ctx_r2.form.get("hubCode")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("hubCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("partnerId")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("partnerName")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_22_0 = ctx_r2.form.get("partnerType")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerType"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function HubPartnerAssignmentNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 32);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 33);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function HubPartnerAssignmentNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 28)(18, "button", 39);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function HubPartnerAssignmentNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, HubPartnerAssignmentNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, HubPartnerAssignmentNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _HubPartnerAssignmentNewComponent = class _HubPartnerAssignmentNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, auth, cas) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.auth = auth;
    this.cas = cas;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      partnerId: [, Validators.required],
      partnerType: [, Validators.required],
      partnerName: [, Validators.required],
      hubCode: [, Validators.required],
      hubName: [],
      // hubCategory: [, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      remark: [],
      referenceField1: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      referenceField10: [],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.hubCodeList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Hub Partner Assignment", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.partnerId.disable();
      this.form.controls.hubCode.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.hub.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.hubCodeList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.hub.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.partnerId + " has been updated successfully" });
          this.router.navigate(["/main/master/hubPartnerAssignment"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.partnerId + " has been created successfully" });
            this.router.navigate(["/main/master/hubPartnerAssignment"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_HubPartnerAssignmentNewComponent.\u0275fac = function HubPartnerAssignmentNewComponent_Factory(t) {
  return new (t || _HubPartnerAssignmentNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HubPartnerAssignmentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_HubPartnerAssignmentNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HubPartnerAssignmentNewComponent, selectors: [["app-hub-partner-assignment-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "hubCode", "appendTo", "body", 3, "options", "disabled", "panelStyle", "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/hubPartnerAssignment", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function HubPartnerAssignmentNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function HubPartnerAssignmentNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, HubPartnerAssignmentNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, HubPartnerAssignmentNewComponent_ng_template_9_Template, 40, 32, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, HubPartnerAssignmentNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Hub Partner Assignment - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=hub-partner-assignment-new.component.css.map */"] });
var HubPartnerAssignmentNewComponent = _HubPartnerAssignmentNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HubPartnerAssignmentNewComponent, { className: "HubPartnerAssignmentNewComponent", filePath: "src\\app\\main\\master\\hub-partner-assignment\\hub-partner-assignment-new\\hub-partner-assignment-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/hub-partner-assignment/hub-partner-assignment.component.ts
function HubPartnerAssignmentComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function HubPartnerAssignmentComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HubPartnerAssignmentComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function HubPartnerAssignmentComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function HubPartnerAssignmentComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function HubPartnerAssignmentComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, HubPartnerAssignmentComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, HubPartnerAssignmentComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function HubPartnerAssignmentComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function HubPartnerAssignmentComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HubPartnerAssignmentComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedHubPartnerAssignment, $event) || (ctx_r5.selectedHubPartnerAssignment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HubPartnerAssignmentComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedHubPartnerAssignment[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedHubPartnerAssignment);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function HubPartnerAssignmentComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function HubPartnerAssignmentComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _HubPartnerAssignmentComponent = class _HubPartnerAssignmentComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.hubPartnerAssignmentTable = [];
    this.selectedHubPartnerAssignment = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Hub Partner Assignment - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "partnerId", header: "Partner ID" },
      { field: "companyName", header: "Company" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerName", header: "Partner Name" },
      { field: "hubName", header: "Hub Name" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "hubCode", header: "Hub Code" },
      { field: "hubCategory", header: "Hub Category" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.hubPartnerAssignmentTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedHubPartnerAssignment[this.selectedHubPartnerAssignment.length - 1];
    this.selectedHubPartnerAssignment.length = 0;
    this.selectedHubPartnerAssignment.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedHubPartnerAssignment[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedHubPartnerAssignment.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedHubPartnerAssignment[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/hubPartnerAssignment-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedHubPartnerAssignment.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedHubPartnerAssignment, module: "Hub Partner Assignment", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedHubPartnerAssignment[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.partnerId + " deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.hubPartnerAssignmentTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Hub Partner Assignment");
  }
};
_HubPartnerAssignmentComponent.\u0275fac = function HubPartnerAssignmentComponent_Factory(t) {
  return new (t || _HubPartnerAssignmentComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(HubPartnerAssignmentService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_HubPartnerAssignmentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HubPartnerAssignmentComponent, selectors: [["app-hub-partner-assignment"]], decls: 31, vars: 9, consts: [["HubPartnerAssignmentTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function HubPartnerAssignmentComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Hub Partner Assignment - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function HubPartnerAssignmentComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const HubPartnerAssignmentTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(HubPartnerAssignmentTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, HubPartnerAssignmentComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, HubPartnerAssignmentComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, HubPartnerAssignmentComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, HubPartnerAssignmentComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.hubPartnerAssignmentTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=hub-partner-assignment.component.css.map */"] });
var HubPartnerAssignmentComponent = _HubPartnerAssignmentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HubPartnerAssignmentComponent, { className: "HubPartnerAssignmentComponent", filePath: "src\\app\\main\\master\\hub-partner-assignment\\hub-partner-assignment.component.ts", lineNumber: 18 });
})();

// src/app/main/master/rate/rate.service.ts
var _RateService = class _RateService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(partnerId, rateParameterId) {
    return this.http.get("/overc-idmaster-service/rate/" + partnerId + "?rateParameterId=" + rateParameterId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/rate", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/rate/" + obj.partnerId + "?rateParameterId=" + obj.rateParameterId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(partnerId, rateParameterId) {
    return this.http.delete("/overc-idmaster-service/rate/" + partnerId + "?rateParameterId=" + rateParameterId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/rate/find", obj);
  }
};
_RateService.\u0275fac = function RateService_Factory(t) {
  return new (t || _RateService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_RateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RateService, factory: _RateService.\u0275fac, providedIn: "root" });
var RateService = _RateService;

// src/app/main/master/rate/rate.component.ts
function RateComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function RateComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 25);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RateComponent_ng_template_25_th_3_Template, 2, 1, "th", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function RateComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function RateComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8[col_r7.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function RateComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, RateComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 30)(2, RateComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function RateComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28)(2, "p-checkbox", 29);
    \u0275\u0275listener("onChange", function RateComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function RateComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedRate, $event) || (ctx_r5.selectedRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, RateComponent_ng_template_26_td_3_Template, 4, 2, "td", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedRate[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedRate);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function RateComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 31);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _RateComponent = class _RateComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.rateTable = [];
    this.selectedRate = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Rate - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "rateParameterDescription", header: "Rate Parameter" },
      { field: "partnerId", header: "Partner ID" },
      { field: "partnerName", header: "Partner Name" },
      { field: "partnerType", header: "Partner Type" },
      { field: "rangeFrom", header: "Range From" },
      { field: "rangeTo", header: "Range To" },
      { field: "remark", header: "Remarks" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "rateParameterId", header: "Rate Parameter ID" },
      { field: "statusId", header: "Status ID" },
      { field: "rate", header: "Rate" },
      { field: "rateUnit", header: "Rate Unit" },
      { field: "rateParameterUnit", header: "Rate Parameter Unit" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.rateTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedRate[this.selectedRate.length - 1];
    this.selectedRate.length = 0;
    this.selectedRate.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedRate[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedRate.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedRate[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/master/rate-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedRate.length === 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: {
        line: this.selectedRate,
        module: "Rate",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedRate[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.partnerId, lines.rateParameterId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines.partnerId + " Deleted successfully"
        });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.rateTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Rate");
  }
};
_RateComponent.\u0275fac = function RateComponent_Factory(t) {
  return new (t || _RateComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(RateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_RateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RateComponent, selectors: [["app-rate"]], decls: 28, vars: 9, consts: [["rateTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function RateComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "Rate - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "img", 5);
    \u0275\u0275listener("click", function RateComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 6);
    \u0275\u0275listener("click", function RateComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 7);
    \u0275\u0275listener("click", function RateComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 8);
    \u0275\u0275listener("click", function RateComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function RateComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 11)(13, "p-iconField", 12);
    \u0275\u0275element(14, "p-inputIcon", 13);
    \u0275\u0275elementStart(15, "input", 14);
    \u0275\u0275listener("input", function RateComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const rateTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(rateTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "p", 16);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 17)(20, "p-calendar", 18)(21, "p-dropdown", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "p-table", 21, 0);
    \u0275\u0275template(25, RateComponent_ng_template_25_Template, 4, 2, "ng-template", 22)(26, RateComponent_ng_template_26_Template, 4, 5, "ng-template", 23)(27, RateComponent_ng_template_27_Template, 4, 1, "ng-template", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.rateTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=rate.component.css.map */"] });
var RateComponent = _RateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RateComponent, { className: "RateComponent", filePath: "src\\app\\main\\master\\rate\\rate.component.ts", lineNumber: 18 });
})();

// src/app/main/master/rate/rate-new/rate-new.component.ts
var _c07 = () => ({ "width": "100%" });
function RateNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function RateNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function RateNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function RateNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, RateNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, RateNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function RateNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, RateNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, RateNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 18);
    \u0275\u0275text(13, "Rate Parameter");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 22);
    \u0275\u0275template(15, RateNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 23);
    \u0275\u0275text(18, "Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, RateNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 23);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, RateNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 23);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275template(30, RateNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 23);
    \u0275\u0275text(33, "Range From");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 27);
    \u0275\u0275template(35, RateNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 17)(37, "p", 23);
    \u0275\u0275text(38, "Range To");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 28);
    \u0275\u0275template(40, RateNewComponent_ng_template_9_mat_error_40_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 17)(42, "p", 23);
    \u0275\u0275text(43, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 29);
    \u0275\u0275template(45, RateNewComponent_ng_template_9_mat_error_45_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 17)(47, "p", 23);
    \u0275\u0275text(48, "Rate Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 30);
    \u0275\u0275template(50, RateNewComponent_ng_template_9_mat_error_50_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 17)(52, "p", 23);
    \u0275\u0275text(53, "Rate Parameter Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 31);
    \u0275\u0275template(55, RateNewComponent_ng_template_9_mat_error_55_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 17)(57, "p", 18);
    \u0275\u0275text(58, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "p-dropdown", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 17)(61, "p", 18);
    \u0275\u0275text(62, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 34)(65, "button", 35);
    \u0275\u0275text(66, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 36);
    \u0275\u0275listener("click", function RateNewComponent_ng_template_9_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_26_0;
    let tmp_28_0;
    let tmp_30_0;
    let tmp_32_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c07));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(40, _c07));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c07));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(42, _c07));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c07));
    \u0275\u0275property("options", ctx_r2.rateParameterIdList)("disabled", true)("ngClass", ((tmp_15_0 = ctx_r2.form.get("rateParameterId")) == null ? null : tmp_15_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(44, _c07));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("rateParameterId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("partnerId")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("partnerName")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_22_0 = ctx_r2.form.get("partnerType")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerType"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_24_0 = ctx_r2.form.get("rangeFrom")) == null ? null : tmp_24_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("rangeFrom"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_26_0 = ctx_r2.form.get("rangeTo")) == null ? null : tmp_26_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("rangeTo"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_28_0 = ctx_r2.form.get("rate")) == null ? null : tmp_28_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("rate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_30_0 = ctx_r2.form.get("rateUnit")) == null ? null : tmp_30_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("rateUnit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_32_0 = ctx_r2.form.get("raFteParameterUnit")) == null ? null : tmp_32_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("rateParameterUnit"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c07));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function RateNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function RateNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 38);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 39);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function RateNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 34)(18, "button", 45);
    \u0275\u0275listener("click", function RateNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 36);
    \u0275\u0275listener("click", function RateNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function RateNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, RateNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, RateNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _RateNewComponent = class _RateNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      rateParameterId: [, Validators.required],
      rateParameterDescription: [],
      partnerId: [, Validators.required],
      partnerType: [, Validators.required],
      partnerName: [, Validators.required],
      rangeFrom: [, Validators.required],
      rangeTo: [, Validators.required],
      rate: [, Validators.required],
      rateUnit: [, Validators.required],
      rateParameterUnit: [, Validators.required],
      remark: [],
      statusId: ["1"],
      statusDescription: [],
      referenceField1: [],
      referenceField10: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      createdOn: [""],
      createdBy: [],
      updatedOn: [""],
      updatedBy: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.rateParameterIdList = [];
    this.status = [
      { value: "2", label: "Inactive" },
      { value: "1", label: "Active" }
    ];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Rate", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.rateParameterId.disable();
      this.form.controls.partnerId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.rateParameter.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.rateParameterIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.rateParameter.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res.partnerId + " has been updated successfully"
          });
          this.router.navigate(["/main/master/rate"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res.partnerId + " has been created successfully"
            });
            this.router.navigate(["/main/master/rate"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_RateNewComponent.\u0275fac = function RateNewComponent_Factory(t) {
  return new (t || _RateNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RateService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_RateNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RateNewComponent, selectors: [["app-rate-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["formControlName", "rateParameterId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "ngClass", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rangeFrom", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rangeTo", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rate", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rateUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rateParameterUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select ", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/rate", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function RateNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function RateNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, RateNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, RateNewComponent_ng_template_9_Template, 69, 46, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, RateNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Rate - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=rate-new.component.css.map */"] });
var RateNewComponent = _RateNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RateNewComponent, { className: "RateNewComponent", filePath: "src\\app\\main\\master\\rate\\rate-new\\rate-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/customer/customer.service.ts
var _CustomerService = class _CustomerService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(customerId, productId, subProductId) {
    return this.http.get("/overc-idmaster-service/customer/" + customerId + "?productId=" + productId + "&subProductId=" + subProductId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/customer", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/customer/" + obj.customerId + "?productId=" + obj.productId + "&subProductId=" + obj.subProductId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(customerId, productId, subProductId) {
    return this.http.delete("/overc-idmaster-service/customer/" + customerId + "?productId=" + productId + "&subProductId=" + subProductId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/customer/find", obj);
  }
};
_CustomerService.\u0275fac = function CustomerService_Factory(t) {
  return new (t || _CustomerService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_CustomerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomerService, factory: _CustomerService.\u0275fac, providedIn: "root" });
var CustomerService = _CustomerService;

// src/app/main/master/customer/customer.component.ts
function CustomerComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function CustomerComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 25);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CustomerComponent_ng_template_25_th_3_Template, 2, 1, "th", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function CustomerComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function CustomerComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8[col_r7.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function CustomerComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CustomerComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 30)(2, CustomerComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function CustomerComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28)(2, "p-checkbox", 29);
    \u0275\u0275listener("onChange", function CustomerComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CustomerComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedCustomer, $event) || (ctx_r5.selectedCustomer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CustomerComponent_ng_template_26_td_3_Template, 4, 2, "td", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedCustomer[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedCustomer);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function CustomerComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 31);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _CustomerComponent = class _CustomerComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.customerTable = [];
    this.selectedCustomer = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Customer - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "customerId", header: "Customer ID" },
      { field: "customerName", header: "Customer Name" },
      { field: "companyName", header: "Company" },
      { field: "subProductName", header: "Sub Product" },
      { field: "productName", header: "Product" },
      { field: "remark", header: "Remarks" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "subProductId", header: "Sub Product ID" },
      { field: "productId", header: "Product ID" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.customerTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedCustomer[this.selectedCustomer.length - 1];
    this.selectedCustomer.length = 0;
    this.selectedCustomer.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCustomer[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedCustomer.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedCustomer[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/master/customer-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCustomer.length === 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: {
        line: this.selectedCustomer,
        module: "Customer",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCustomer[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.customerId, lines.productId, lines.subProductId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines.customerId + " Deleted successfully"
        });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.customerTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Customer");
  }
};
_CustomerComponent.\u0275fac = function CustomerComponent_Factory(t) {
  return new (t || _CustomerComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CustomerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerComponent, selectors: [["app-customer"]], decls: 28, vars: 9, consts: [["customerTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function CustomerComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "Customer - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "img", 5);
    \u0275\u0275listener("click", function CustomerComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 6);
    \u0275\u0275listener("click", function CustomerComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 7);
    \u0275\u0275listener("click", function CustomerComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 8);
    \u0275\u0275listener("click", function CustomerComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function CustomerComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 11)(13, "p-iconField", 12);
    \u0275\u0275element(14, "p-inputIcon", 13);
    \u0275\u0275elementStart(15, "input", 14);
    \u0275\u0275listener("input", function CustomerComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const customerTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(customerTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "p", 16);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 17)(20, "p-calendar", 18)(21, "p-dropdown", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "p-table", 21, 0);
    \u0275\u0275template(25, CustomerComponent_ng_template_25_Template, 4, 2, "ng-template", 22)(26, CustomerComponent_ng_template_26_Template, 4, 5, "ng-template", 23)(27, CustomerComponent_ng_template_27_Template, 4, 1, "ng-template", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.customerTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=customer.component.css.map */"] });
var CustomerComponent = _CustomerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerComponent, { className: "CustomerComponent", filePath: "src\\app\\main\\master\\customer\\customer.component.ts", lineNumber: 19 });
})();

// src/app/main/master/customer/customer-new/customer-new.component.ts
var _c08 = () => ({ "width": "100%" });
function CustomerNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CustomerNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function CustomerNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function CustomerNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, CustomerNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, CustomerNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function CustomerNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CustomerNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CustomerNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CustomerNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CustomerNewComponent_ng_template_9_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CustomerNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, CustomerNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, CustomerNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, CustomerNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 22);
    \u0275\u0275text(18, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-dropdown", 24);
    \u0275\u0275listener("onChange", function CustomerNewComponent_ng_template_9_Template_p_dropdown_onChange_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.productChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CustomerNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 18);
    \u0275\u0275text(23, "Customer ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 17)(26, "p", 22);
    \u0275\u0275text(27, "Customer Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 26);
    \u0275\u0275template(29, CustomerNewComponent_ng_template_9_mat_error_29_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 17)(31, "p", 18);
    \u0275\u0275text(32, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 28)(35, "button", 29);
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 30);
    \u0275\u0275listener("click", function CustomerNewComponent_ng_template_9_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_20_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c08));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(32, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c08));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(34, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c08));
    \u0275\u0275property("options", ctx_r2.subProductIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("subProductId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(36, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("subProductId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c08));
    \u0275\u0275property("options", ctx_r2.productIdList)("ngClass", ((tmp_20_0 = ctx_r2.form.get("subProductId")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(38, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("productId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_24_0 = ctx_r2.form.get("customerId")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r2.form.get("customerId")) == null ? null : tmp_24_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_25_0 = ctx_r2.form.get("customerName")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = ctx_r2.form.get("customerName")) == null ? null : tmp_25_0.dirty) ? "invalid" : "")("ngClass", ((tmp_26_0 = ctx_r2.form.get("customerName")) == null ? null : tmp_26_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("customerName"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CustomerNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function CustomerNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 32);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 33);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function CustomerNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 28)(18, "button", 39);
    \u0275\u0275listener("click", function CustomerNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function CustomerNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CustomerNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CustomerNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, CustomerNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _CustomerNewComponent = class _CustomerNewComponent {
  constructor(cs, spin, route, router, path, fb, service, subProductService, productService, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.subProductService = subProductService;
    this.productService = productService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      subProductId: [, Validators.required],
      subProductName: [],
      productId: [, Validators.required],
      productName: [],
      customerId: [],
      customerName: [, Validators.required],
      remark: [],
      referenceField1: [],
      referenceField10: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      createdOn: [""],
      createdBy: [],
      updatedOn: [""],
      updatedBy: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.subProductIdList = [];
    this.productIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Customer", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.subProductId.disable();
      this.form.controls.productId.disable();
      this.form.controls.customerId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.subProduct.url,
      this.cas.dropdownlist.setup.product.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.subProductIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.subProduct.key);
        this.productIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.product.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res.customerId + " has been updated successfully"
          });
          this.router.navigate(["/main/master/customer"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res.customerId + " has been created successfully"
            });
            this.router.navigate(["/main/master/customer"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  productChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.productId = [this.form.controls.productId.value];
    this.subProductIdList = [];
    this.spin.show();
    this.subProductService.search(obj).subscribe({
      next: (result) => {
        this.subProductIdList = this.cas.foreachlist(result, { key: "subProductId", value: "subProductName" });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_CustomerNewComponent.\u0275fac = function CustomerNewComponent_Factory(t) {
  return new (t || _CustomerNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(SubProductService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_CustomerNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerNewComponent, selectors: [["app-customer-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "subProductId", "placeholder", "Select", "filter", "true", "appendTo", "body", 3, "options", "ngClass", "disabled", "panelStyle"], ["formControlName", "productId", "placeholder", "Select", "filter", "true", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "customerId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "customerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "pInputText", "", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/customer", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CustomerNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function CustomerNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, CustomerNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, CustomerNewComponent_ng_template_9_Template, 39, 39, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CustomerNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Customer - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=customer-new.component.css.map */"] });
var CustomerNewComponent = _CustomerNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerNewComponent, { className: "CustomerNewComponent", filePath: "src\\app\\main\\master\\customer\\customer-new\\customer-new.component.ts", lineNumber: 19 });
})();

// src/app/main/master/consignor/consignor.service.ts
var _ConsignorService = class _ConsignorService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(consignorId, customerId, productId, subProductId) {
    return this.http.get("/overc-idmaster-service/consignor/" + consignorId + "?customerId=" + customerId + "&productId=" + productId + "&subProductId=" + subProductId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/consignor", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/consignor/" + obj.consignorId + "?customerId=" + obj.customerId + "&productId=" + obj.productId + "&subProductId=" + obj.subProductId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(consignorId, customerId, productId, subProductId) {
    return this.http.delete("/overc-idmaster-service/consignor/" + consignorId + "?customerId=" + customerId + "&productId=" + productId + "&subProductId=" + subProductId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/consignor/find", obj);
  }
};
_ConsignorService.\u0275fac = function ConsignorService_Factory(t) {
  return new (t || _ConsignorService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ConsignorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsignorService, factory: _ConsignorService.\u0275fac, providedIn: "root" });
var ConsignorService = _ConsignorService;

// src/app/main/master/consignor/consignor-new/consignor-new.component.ts
var _c09 = () => ({ "width": "100%" });
function ConsignorNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ConsignorNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function ConsignorNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ConsignorNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, ConsignorNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, ConsignorNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function ConsignorNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsignorNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsignorNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsignorNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsignorNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsignorNewComponent_ng_template_9_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsignorNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, ConsignorNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, ConsignorNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 18);
    \u0275\u0275text(13, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-dropdown", 22);
    \u0275\u0275listener("onChange", function ConsignorNewComponent_ng_template_9_Template_p_dropdown_onChange_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.subProductChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ConsignorNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 18);
    \u0275\u0275text(18, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-dropdown", 23);
    \u0275\u0275listener("onChange", function ConsignorNewComponent_ng_template_9_Template_p_dropdown_onChange_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.productChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ConsignorNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 18);
    \u0275\u0275text(23, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "p-dropdown", 24);
    \u0275\u0275template(25, ConsignorNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 18);
    \u0275\u0275text(28, "Consignor ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 17)(31, "p", 26);
    \u0275\u0275text(32, "Consignor Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 27);
    \u0275\u0275template(34, ConsignorNewComponent_ng_template_9_mat_error_34_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 17)(36, "p", 18);
    \u0275\u0275text(37, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 29)(40, "button", 30);
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 31);
    \u0275\u0275listener("click", function ConsignorNewComponent_ng_template_9_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_20_0;
    let tmp_26_0;
    let tmp_30_0;
    let tmp_31_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c09));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(38, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c09));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(40, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c09));
    \u0275\u0275property("options", ctx_r2.subProductIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("subProductId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(42, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("subProductId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c09));
    \u0275\u0275property("options", ctx_r2.productIdList)("ngClass", ((tmp_20_0 = ctx_r2.form.get("productId")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(44, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("productId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c09));
    \u0275\u0275property("options", ctx_r2.customerIdList)("ngClass", ((tmp_26_0 = ctx_r2.form.get("customerId")) == null ? null : tmp_26_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(46, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("customerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_30_0 = ctx_r2.form.get("consignorId")) == null ? null : tmp_30_0.invalid) && ((tmp_30_0 = ctx_r2.form.get("consignorId")) == null ? null : tmp_30_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_31_0 = ctx_r2.form.get("consignorName")) == null ? null : tmp_31_0.invalid) && ((tmp_31_0 = ctx_r2.form.get("consignorName")) == null ? null : tmp_31_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consignorName"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ConsignorNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ConsignorNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 33);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 34);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function ConsignorNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 29)(18, "button", 40);
    \u0275\u0275listener("click", function ConsignorNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function ConsignorNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ConsignorNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, ConsignorNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, ConsignorNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _ConsignorNewComponent = class _ConsignorNewComponent {
  constructor(cs, spin, route, router, path, fb, service, subProductService, productService, customerService, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.subProductService = subProductService;
    this.productService = productService;
    this.customerService = customerService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      subProductId: [, Validators.required],
      subProductName: [],
      productId: [, Validators.required],
      productName: [],
      customerId: [, Validators.required],
      customerName: [],
      consignorId: [],
      consignorName: [, Validators.required],
      remark: [],
      referenceField1: [],
      referenceField10: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      createdOn: [""],
      createdBy: [],
      updatedOn: [""],
      updatedBy: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.subProductIdList = [];
    this.productIdList = [];
    this.customerIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Consignor", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.subProductId.disable();
      this.form.controls.productId.disable();
      this.form.controls.customerId.disable();
      this.form.controls.consignorId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.subProduct.url,
      this.cas.dropdownlist.setup.product.url,
      this.cas.dropdownlist.setup.customer.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.subProductIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.subProduct.key);
        this.productIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.product.key);
        this.customerIdList = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.customer.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res.consignorId + " has been updated successfully"
          });
          this.router.navigate(["/main/master/consignor"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res.consignorId + " has been created successfully"
            });
            this.router.navigate(["/main/master/consignor"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  subProductChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.subProductId = [this.form.controls.subProductId.value];
    this.productIdList = [];
    this.spin.show();
    this.productService.search(obj).subscribe({
      next: (result) => {
        this.productIdList = this.cas.foreachlist(result, { key: "productId", value: "productName" });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  productChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.subProductId = [this.form.controls.subProductId.value];
    obj.productId = [this.form.controls.productId.value];
    this.customerIdList = [];
    this.spin.show();
    this.customerService.search(obj).subscribe({
      next: (result) => {
        this.customerIdList = this.cas.foreachlist(result, { key: "customerId", value: "customerName" });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_ConsignorNewComponent.\u0275fac = function ConsignorNewComponent_Factory(t) {
  return new (t || _ConsignorNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(SubProductService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_ConsignorNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignorNewComponent, selectors: [["app-consignor-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["formControlName", "subProductId", "placeholder", "Select", "filter", "true", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["formControlName", "productId", "placeholder", "Select", "filter", "true", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["formControlName", "customerId", "placeholder", "Select", "filter", "true", "appendTo", "body", 3, "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "consignorId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "consignorName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "pInputText", "", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/consignor", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function ConsignorNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function ConsignorNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, ConsignorNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, ConsignorNewComponent_ng_template_9_Template, 44, 47, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ConsignorNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Consignor - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=consignor-new.component.css.map */"] });
var ConsignorNewComponent = _ConsignorNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignorNewComponent, { className: "ConsignorNewComponent", filePath: "src\\app\\main\\master\\consignor\\consignor-new\\consignor-new.component.ts", lineNumber: 20 });
})();

// src/app/main/master/consignor/consignor.component.ts
var _c010 = () => ({ "width": "130rem" });
function ConsignorComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function ConsignorComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 25);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsignorComponent_ng_template_25_th_3_Template, 2, 1, "th", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function ConsignorComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function ConsignorComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8[col_r7.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsignorComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsignorComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 30)(2, ConsignorComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function ConsignorComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28)(2, "p-checkbox", 29);
    \u0275\u0275listener("onChange", function ConsignorComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsignorComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedConsignor, $event) || (ctx_r5.selectedConsignor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ConsignorComponent_ng_template_26_td_3_Template, 4, 2, "td", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedConsignor[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedConsignor);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function ConsignorComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 31);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _ConsignorComponent = class _ConsignorComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.consignorTable = [];
    this.selectedConsignor = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Consignor - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "consignorId", header: "Consignor ID" },
      { field: "consignorName", header: "Consignor Name" },
      { field: "companyName", header: "Company" },
      { field: "subProductName", header: "Sub Product" },
      { field: "productName", header: "Product" },
      { field: "customerName", header: "Customer" },
      { field: "remark", header: "Remarks" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "subProductId", header: "Sub Product ID" },
      { field: "productId", header: "Product ID" },
      { field: "customerId", header: "Customer ID" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.consignorTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedConsignor[this.selectedConsignor.length - 1];
    this.selectedConsignor.length = 0;
    this.selectedConsignor.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedConsignor[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedConsignor.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedConsignor[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/master/consignor-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedConsignor.length === 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: {
        line: this.selectedConsignor,
        module: "Consignor",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedConsignor[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.consignorId, lines.customerId, lines.productId, lines.subProductId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines.consignorId + " Deleted successfully"
        });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.consignorTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Consignor");
  }
};
_ConsignorComponent.\u0275fac = function ConsignorComponent_Factory(t) {
  return new (t || _ConsignorComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ConsignorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignorComponent, selectors: [["app-consignor"]], decls: 28, vars: 11, consts: [["consignorTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function ConsignorComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "Consignor - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "img", 5);
    \u0275\u0275listener("click", function ConsignorComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 6);
    \u0275\u0275listener("click", function ConsignorComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 7);
    \u0275\u0275listener("click", function ConsignorComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 8);
    \u0275\u0275listener("click", function ConsignorComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function ConsignorComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 11)(13, "p-iconField", 12);
    \u0275\u0275element(14, "p-inputIcon", 13);
    \u0275\u0275elementStart(15, "input", 14);
    \u0275\u0275listener("input", function ConsignorComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consignorTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(consignorTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "p", 16);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 17)(20, "p-calendar", 18)(21, "p-dropdown", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "p-table", 21, 0);
    \u0275\u0275template(25, ConsignorComponent_ng_template_25_Template, 4, 2, "ng-template", 22)(26, ConsignorComponent_ng_template_26_Template, 4, 5, "ng-template", 23)(27, ConsignorComponent_ng_template_27_Template, 4, 1, "ng-template", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.consignorTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(10, _c010));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=consignor.component.css.map */"] });
var ConsignorComponent = _ConsignorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignorComponent, { className: "ConsignorComponent", filePath: "src\\app\\main\\master\\consignor\\consignor.component.ts", lineNumber: 18 });
})();

// src/app/main/master/currency-exchange-rate/currency-exchange-rate.service.ts
var _CurrencyExchangeRateService = class _CurrencyExchangeRateService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(fromCurrencyId) {
    return this.http.get("/overc-idmaster-service/currencyExchangeRate/" + fromCurrencyId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/currencyExchangeRate", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/currencyExchangeRate/" + obj.fromCurrencyId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&toCurrencyId=" + obj.toCurrencyId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/currencyExchangeRate/" + obj.fromCurrencyId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&toCurrencyId=" + obj.toCurrencyId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/currencyExchangeRate/find", obj);
  }
};
_CurrencyExchangeRateService.\u0275fac = function CurrencyExchangeRateService_Factory(t) {
  return new (t || _CurrencyExchangeRateService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_CurrencyExchangeRateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CurrencyExchangeRateService, factory: _CurrencyExchangeRateService.\u0275fac, providedIn: "root" });
var CurrencyExchangeRateService = _CurrencyExchangeRateService;

// src/app/main/master/currency-exchange-rate/currency-exchange-rate-new/currency-exchange-rate-new.component.ts
var _c011 = () => ({ "width": "100%" });
function CurrencyExchangeRateNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CurrencyExchangeRateNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function CurrencyExchangeRateNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, CurrencyExchangeRateNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, CurrencyExchangeRateNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function CurrencyExchangeRateNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_9_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, CurrencyExchangeRateNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, CurrencyExchangeRateNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "From Currency ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275template(15, CurrencyExchangeRateNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 22);
    \u0275\u0275text(18, "To Currency ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, CurrencyExchangeRateNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 22);
    \u0275\u0275text(23, "From Currency Desciption");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, CurrencyExchangeRateNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 22);
    \u0275\u0275text(28, "To Currency Desciption");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275template(30, CurrencyExchangeRateNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 22);
    \u0275\u0275text(33, "From Currency Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 27);
    \u0275\u0275template(35, CurrencyExchangeRateNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 17)(37, "p", 22);
    \u0275\u0275text(38, "To Currency Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 28);
    \u0275\u0275template(40, CurrencyExchangeRateNewComponent_ng_template_9_mat_error_40_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 17)(42, "p", 18);
    \u0275\u0275text(43, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 17)(46, "p", 18);
    \u0275\u0275text(47, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "p-dropdown", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 31)(50, "button", 32);
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 33);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_ng_template_9_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c011));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(29, _c011));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c011));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(31, _c011));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("fromCurrencyId")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("fromCurrencyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_14_0 = ctx_r2.form.get("toCurrencyId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("toCurrencyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_16_0 = ctx_r2.form.get("fromCurrencyDescription")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("toCurrencyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("toCurrencyDescription")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("toCurrencyDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("fromCurrencyValue")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("fromCurrencyValue"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_22_0 = ctx_r2.form.get("toCurrencyValue")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("toCurrencyValue"));
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c011));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CurrencyExchangeRateNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 35);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 36);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function CurrencyExchangeRateNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 31)(18, "button", 42);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 33);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CurrencyExchangeRateNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CurrencyExchangeRateNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, CurrencyExchangeRateNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _CurrencyExchangeRateNewComponent = class _CurrencyExchangeRateNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      fromCurrencyId: [, Validators.required],
      fromCurrencyDescription: [, Validators.required],
      fromCurrencyValue: [, Validators.required],
      toCurrencyId: [, Validators.required],
      toCurrencyDescription: [, Validators.required],
      toCurrencyValue: [, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      statusDescription: [],
      createdOn: [],
      createdBy: [],
      updatedBy: [],
      updatedOn: [],
      referenceField1: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      referenceField10: [],
      remark: [],
      statusId: ["1"]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.status = [
      { value: "2", label: "Inactive" },
      { value: "1", label: "Active" }
    ];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Currency Exchange Rate", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.fromCurrencyId.disable();
      this.form.controls.toCurrencyId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: "CurrencyExchangeRate has been updated successfully" });
          this.router.navigate(["/main/master/currencyExchangeRate"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: " CurrencyExchangeRate has been created successfully" });
            this.router.navigate(["/main/master/currencyExchangeRate"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_CurrencyExchangeRateNewComponent.\u0275fac = function CurrencyExchangeRateNewComponent_Factory(t) {
  return new (t || _CurrencyExchangeRateNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CurrencyExchangeRateService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_CurrencyExchangeRateNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CurrencyExchangeRateNewComponent, selectors: [["app-currency-exchange-rate-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "fromCurrencyId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "toCurrencyId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "fromCurrencyDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "toCurrencyDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "fromCurrencyValue", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "toCurrencyValue", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select\xA0", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/currencyExchangeRate", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CurrencyExchangeRateNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function CurrencyExchangeRateNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, CurrencyExchangeRateNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, CurrencyExchangeRateNewComponent_ng_template_9_Template, 54, 33, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CurrencyExchangeRateNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Currency Exchange Rate - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=currency-exchange-rate-new.component.css.map */"] });
var CurrencyExchangeRateNewComponent = _CurrencyExchangeRateNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CurrencyExchangeRateNewComponent, { className: "CurrencyExchangeRateNewComponent", filePath: "src\\app\\main\\master\\currency-exchange-rate\\currency-exchange-rate-new\\currency-exchange-rate-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/currency-exchange-rate/currency-exchange-rate.component.ts
function CurrencyExchangeRateComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function CurrencyExchangeRateComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CurrencyExchangeRateComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function CurrencyExchangeRateComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function CurrencyExchangeRateComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CurrencyExchangeRateComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CurrencyExchangeRateComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, CurrencyExchangeRateComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function CurrencyExchangeRateComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function CurrencyExchangeRateComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CurrencyExchangeRateComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedCurrencyExchangeRate, $event) || (ctx_r5.selectedCurrencyExchangeRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CurrencyExchangeRateComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedCurrencyExchangeRate[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedCurrencyExchangeRate);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function CurrencyExchangeRateComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function CurrencyExchangeRateComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CurrencyExchangeRateComponent = class _CurrencyExchangeRateComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.currencyExchangeRateTable = [];
    this.selectedCurrencyExchangeRate = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Currency Exchange Rate - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "fromCurrencyId", header: "From Currency ID" },
      { field: "toCurrencyId", header: "To Currency ID" },
      { field: "fromCurrencyValue", header: "From Currency Value" },
      { field: "toCurrencyValue", header: "To Currency Value" },
      { field: "companyName", header: "Company" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "companyId", header: "Company ID" },
      { field: "statusId", header: "Status ID" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
      { field: "languageDescription", header: "Language" },
      { field: "toCurrencyDescription", header: "To Currency Description" },
      { field: "fromCurrencyDescription", header: "From Currency Description" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.currencyExchangeRateTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedCurrencyExchangeRate[this.selectedCurrencyExchangeRate.length - 1];
    this.selectedCurrencyExchangeRate.length = 0;
    this.selectedCurrencyExchangeRate.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCurrencyExchangeRate[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedCurrencyExchangeRate.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCurrencyExchangeRate[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/currencyExchangeRate-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCurrencyExchangeRate.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedCurrencyExchangeRate, module: "Currency Exchange Rate", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCurrencyExchangeRate[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: "CurrencyExchangeRate deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.currencyExchangeRateTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "CurrencyExchangeRate");
  }
};
_CurrencyExchangeRateComponent.\u0275fac = function CurrencyExchangeRateComponent_Factory(t) {
  return new (t || _CurrencyExchangeRateComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CurrencyExchangeRateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CurrencyExchangeRateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CurrencyExchangeRateComponent, selectors: [["app-currency-exchange-rate"]], decls: 31, vars: 9, consts: [["currencyExchangeRateTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CurrencyExchangeRateComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Currency Exchange Rate - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function CurrencyExchangeRateComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const currencyExchangeRateTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(currencyExchangeRateTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, CurrencyExchangeRateComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, CurrencyExchangeRateComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, CurrencyExchangeRateComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, CurrencyExchangeRateComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.currencyExchangeRateTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=currency-exchange-rate.component.css.map */"] });
var CurrencyExchangeRateComponent = _CurrencyExchangeRateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CurrencyExchangeRateComponent, { className: "CurrencyExchangeRateComponent", filePath: "src\\app\\main\\master\\currency-exchange-rate\\currency-exchange-rate.component.ts", lineNumber: 18 });
})();

// src/app/main/master/event/event.service.ts
var _EventService = class _EventService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(eventCode) {
    return this.http.get("/overc-idmaster-service/event/" + eventCode);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/event", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/event/" + obj.eventCode + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&statusCode=" + obj.statusCode, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/event/" + obj.eventCode + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&statusCode=" + obj.statusCode);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/event/find", obj);
  }
};
_EventService.\u0275fac = function EventService_Factory(t) {
  return new (t || _EventService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_EventService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventService, factory: _EventService.\u0275fac, providedIn: "root" });
var EventService = _EventService;

// src/app/main/master/event/event-new/event-new.component.ts
var _c012 = () => ({ "width": "100%" });
function EventNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function EventNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function EventNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function EventNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, EventNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, EventNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function EventNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 30)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function EventNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 30)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function EventNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 30)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function EventNewComponent_ng_template_9_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 30)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function EventNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, EventNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, EventNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "Op Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, EventNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 18);
    \u0275\u0275text(18, "Event Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17)(21, "p", 22);
    \u0275\u0275text(22, "Event Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 25);
    \u0275\u0275template(24, EventNewComponent_ng_template_9_mat_error_24_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 17)(26, "p", 18);
    \u0275\u0275text(27, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 27)(30, "button", 28);
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 29);
    \u0275\u0275listener("click", function EventNewComponent_ng_template_9_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_18_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c012));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c012));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c012));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(25, _c012));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c012));
    \u0275\u0275property("options", ctx_r2.statusCodeList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("statusCode")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(27, _c012));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("statusCode"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("eventDescription")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("eventDescription"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function EventNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function EventNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 31);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 32);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function EventNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 27)(18, "button", 37);
    \u0275\u0275listener("click", function EventNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 29);
    \u0275\u0275listener("click", function EventNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function EventNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, EventNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, EventNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _EventNewComponent = class _EventNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, auth, cas) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.auth = auth;
    this.cas = cas;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      eventCode: [],
      eventDescription: [, Validators.required],
      statusCode: [, Validators.required],
      opStatusDescription: [],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      remark: [],
      referenceField1: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      referenceField10: [],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.statusCodeList = [];
    this.status = [
      { value: "2", label: "Inactive" },
      { value: "1", label: "Active" }
    ];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Event", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.statusCode.disable();
      this.form.controls.eventCode.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.opStatus.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.statusCodeList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.opStatus.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.eventCode + " has been updated successfully" });
          this.router.navigate(["/main/master/event"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.eventCode + " has been created successfully" });
            this.router.navigate(["/main/master/event"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_EventNewComponent.\u0275fac = function EventNewComponent_Factory(t) {
  return new (t || _EventNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_EventNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventNewComponent, selectors: [["app-event-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "statusCode", "appendTo", "body", 3, "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "eventCode", "pInputText", "", "placeholder", "Enter"], ["maxlength", "100", "pInputText", "", "formControlName", "eventDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/event", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function EventNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function EventNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, EventNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, EventNewComponent_ng_template_9_Template, 34, 28, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, EventNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Event - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=event-new.component.css.map */"] });
var EventNewComponent = _EventNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventNewComponent, { className: "EventNewComponent", filePath: "src\\app\\main\\master\\event\\event-new\\event-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/event/event.component.ts
function EventComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function EventComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EventComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function EventComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function EventComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function EventComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, EventComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, EventComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function EventComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function EventComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function EventComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedEvent, $event) || (ctx_r5.selectedEvent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, EventComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedEvent[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedEvent);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function EventComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function EventComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _EventComponent = class _EventComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.eventTable = [];
    this.selectedEvent = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Event - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "eventCode", header: "Event ID" },
      { field: "eventDescription", header: "Event Name" },
      { field: "companyName", header: "Company" },
      { field: "opStatusDescription", header: "Op Status" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "statusCode", header: "Status Code" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.eventTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedEvent[this.selectedEvent.length - 1];
    this.selectedEvent.length = 0;
    this.selectedEvent.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedEvent[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedEvent.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedEvent[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/event-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedEvent.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedEvent, module: "Event", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedEvent[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.eventCode + " deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.eventTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Event");
  }
};
_EventComponent.\u0275fac = function EventComponent_Factory(t) {
  return new (t || _EventComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_EventComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventComponent, selectors: [["app-event"]], decls: 31, vars: 9, consts: [["EventTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function EventComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Event - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function EventComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function EventComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function EventComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function EventComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function EventComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function EventComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const EventTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(EventTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, EventComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, EventComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, EventComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, EventComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.eventTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=event.component.css.map */"] });
var EventComponent = _EventComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventComponent, { className: "EventComponent", filePath: "src\\app\\main\\master\\event\\event.component.ts", lineNumber: 18 });
})();

// src/app/main/master/hs-code/hs-code.service.ts
var _HsCodeService = class _HsCodeService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(hsCode) {
    return this.http.get("/overc-idmaster-service/hsCode/" + hsCode + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/hsCode", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/hsCode/" + obj.hsCode + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(hsCode) {
    return this.http.delete("/overc-idmaster-service/hsCode/" + hsCode + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/hsCode/find", obj);
  }
};
_HsCodeService.\u0275fac = function HsCodeService_Factory(t) {
  return new (t || _HsCodeService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_HsCodeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HsCodeService, factory: _HsCodeService.\u0275fac, providedIn: "root" });
var HsCodeService = _HsCodeService;

// src/app/main/master/hs-code/hs-code-new/hs-code-new.component.ts
var _c013 = () => ({ "width": "100%" });
function HsCodeNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function HsCodeNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function HsCodeNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function HsCodeNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, HsCodeNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, HsCodeNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function HsCodeNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 30)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HsCodeNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 30)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HsCodeNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, HsCodeNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, HsCodeNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17)(16, "p", 18);
    \u0275\u0275text(17, "Item Group");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 17)(20, "p", 18);
    \u0275\u0275text(21, "Special Approval");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "p-dropdown", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 17)(24, "p", 18);
    \u0275\u0275text(25, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 27)(28, "button", 28);
    \u0275\u0275text(29, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 29);
    \u0275\u0275listener("click", function HsCodeNewComponent_ng_template_9_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_16_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c013));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(21, _c013));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c013));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c013));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("hsCode")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("itemGroup")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r2.form.get("itemGroup")) == null ? null : tmp_13_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c013));
    \u0275\u0275property("options", ctx_r2.specialApprovalIdList)("ngClass", ((tmp_16_0 = ctx_r2.form.get("specialApprovalId")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(25, _c013));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function HsCodeNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function HsCodeNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 31);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 32);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function HsCodeNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 27)(18, "button", 38);
    \u0275\u0275listener("click", function HsCodeNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 29);
    \u0275\u0275listener("click", function HsCodeNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function HsCodeNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, HsCodeNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, HsCodeNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _HsCodeNewComponent = class _HsCodeNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      hsCode: [, Validators.required],
      itemCode: [],
      itemDescription: [],
      itemGroup: [],
      specialApprovalId: [],
      specialApprovalText: [],
      remark: [],
      referenceField1: [],
      referenceField10: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      createdOn: [""],
      createdBy: [],
      updatedOn: [""],
      updatedBy: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.specialApprovalIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "HS Code", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.hsCode.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.specialApproval.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.specialApprovalIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.specialApproval.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res.hsCode + " has been updated successfully"
          });
          this.router.navigate(["/main/master/hsCode"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res.hsCode + " has been created successfully"
            });
            this.router.navigate(["/main/master/hsCode"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_HsCodeNewComponent.\u0275fac = function HsCodeNewComponent_Factory(t) {
  return new (t || _HsCodeNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HsCodeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_HsCodeNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HsCodeNewComponent, selectors: [["app-hs-code-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "hsCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "itemGroup", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "specialApprovalId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/hsCode", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function HsCodeNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function HsCodeNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, HsCodeNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, HsCodeNewComponent_ng_template_9_Template, 32, 26, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, HsCodeNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("HS Code - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=hs-code-new.component.css.map */"] });
var HsCodeNewComponent = _HsCodeNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HsCodeNewComponent, { className: "HsCodeNewComponent", filePath: "src\\app\\main\\master\\hs-code\\hs-code-new\\hs-code-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/hs-code/hs-code.component.ts
function HsCodeComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function HsCodeComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 25);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HsCodeComponent_ng_template_25_th_3_Template, 2, 1, "th", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function HsCodeComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function HsCodeComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8[col_r7.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function HsCodeComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, HsCodeComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 30)(2, HsCodeComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function HsCodeComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28)(2, "p-checkbox", 29);
    \u0275\u0275listener("onChange", function HsCodeComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HsCodeComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedHsCode, $event) || (ctx_r5.selectedHsCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HsCodeComponent_ng_template_26_td_3_Template, 4, 2, "td", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedHsCode[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedHsCode);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function HsCodeComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 31);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _HsCodeComponent = class _HsCodeComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.hsCodeTable = [];
    this.selectedHsCode = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "HS Code - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "hsCode", header: "HS Code" },
      { field: "itemGroup", header: "Item Group" },
      { field: "specialApprovalText", header: "Special Approval Description" },
      { field: "remark", header: "Remarks" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "specialApprovalId", header: "Special Approval ID" },
      { field: "itemCode", header: "Item Code" },
      { field: "itemDescription", header: "Item Description" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.hsCodeTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedHsCode[this.selectedHsCode.length - 1];
    this.selectedHsCode.length = 0;
    this.selectedHsCode.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedHsCode[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedHsCode.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedHsCode[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/master/hsCode-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedHsCode.length === 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: {
        line: this.selectedHsCode,
        module: "HS Code",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedHsCode[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.hsCode).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines.hsCode + " Deleted successfully"
        });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.hsCodeTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "HS Code");
  }
};
_HsCodeComponent.\u0275fac = function HsCodeComponent_Factory(t) {
  return new (t || _HsCodeComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(HsCodeService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_HsCodeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HsCodeComponent, selectors: [["app-hs-code"]], decls: 28, vars: 9, consts: [["hsCodeTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function HsCodeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "HS Code - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "img", 5);
    \u0275\u0275listener("click", function HsCodeComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 6);
    \u0275\u0275listener("click", function HsCodeComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 7);
    \u0275\u0275listener("click", function HsCodeComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 8);
    \u0275\u0275listener("click", function HsCodeComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function HsCodeComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 11)(13, "p-iconField", 12);
    \u0275\u0275element(14, "p-inputIcon", 13);
    \u0275\u0275elementStart(15, "input", 14);
    \u0275\u0275listener("input", function HsCodeComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const hsCodeTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(hsCodeTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "p", 16);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 17)(20, "p-calendar", 18)(21, "p-dropdown", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "p-table", 21, 0);
    \u0275\u0275template(25, HsCodeComponent_ng_template_25_Template, 4, 2, "ng-template", 22)(26, HsCodeComponent_ng_template_26_Template, 4, 5, "ng-template", 23)(27, HsCodeComponent_ng_template_27_Template, 4, 1, "ng-template", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.hsCodeTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=hs-code.component.css.map */"] });
var HsCodeComponent = _HsCodeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HsCodeComponent, { className: "HsCodeComponent", filePath: "src\\app\\main\\master\\hs-code\\hs-code.component.ts", lineNumber: 18 });
})();

// src/app/main/master/iata/iata-new/iata-new.component.ts
var _c014 = () => ({ "width": "100%" });
function IataNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function IataNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function IataNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function IataNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, IataNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, IataNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function IataNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, IataNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, IataNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275template(15, IataNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 22);
    \u0275\u0275text(18, "Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, IataNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 22);
    \u0275\u0275text(23, "IATA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, IataNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 22);
    \u0275\u0275text(28, "IATA Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275template(30, IataNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 22);
    \u0275\u0275text(33, "Currency ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-dropdown", 27);
    \u0275\u0275template(35, IataNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 17)(37, "p", 18);
    \u0275\u0275text(38, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 29)(41, "button", 30);
    \u0275\u0275text(42, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 31);
    \u0275\u0275listener("click", function IataNewComponent_ng_template_9_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_22_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c014));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(29, _c014));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c014));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(31, _c014));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("origin")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("origin"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_14_0 = ctx_r2.form.get("originCode")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("originCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_16_0 = ctx_r2.form.get("iataKd")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("iataKd"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("iataCharge")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r2.form.get("iataCharge")) == null ? null : tmp_18_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("iataCharge"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c014));
    \u0275\u0275property("options", ctx_r2.currencyIdList)("ngClass", ((tmp_22_0 = ctx_r2.form.get("currencyId")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(33, _c014));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("currencyId"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function IataNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function IataNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 33);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 34);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function IataNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 29)(18, "button", 40);
    \u0275\u0275listener("click", function IataNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function IataNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function IataNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, IataNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, IataNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _IataNewComponent = class _IataNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.form = this.fb.group({
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      origin: [, Validators.required],
      originCode: [, Validators.required],
      iataKd: [, Validators.required],
      iataCharge: [],
      currencyId: [, Validators.required],
      currencyDescription: [],
      remark: [],
      referenceField1: [],
      referenceField10: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      createdOn: [],
      createdBy: [],
      updatedBy: [],
      updatedOn: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.currencyIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "IATA", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.originCode.disable();
      this.form.controls.origin.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.currency.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.currencyIdList = this.cas.foreachlist(results[2], this.cas.dropdownlist.setup.currency.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.originCode + " has been updated successfully" });
          this.router.navigate(["/main/master/iata"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.originCode + " has been created successfully" });
            this.router.navigate(["/main/master/iata"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_IataNewComponent.\u0275fac = function IataNewComponent_Factory(t) {
  return new (t || _IataNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(IataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_IataNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IataNewComponent, selectors: [["app-iata-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "origin", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["formControlName", "originCode", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["formControlName", "iataKd", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["formControlName", "iataCharge", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "currencyId", "appendTo", "body", 3, "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/iata", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function IataNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function IataNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, IataNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, IataNewComponent_ng_template_9_Template, 45, 34, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, IataNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("IATA - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=iata-new.component.css.map */"] });
var IataNewComponent = _IataNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IataNewComponent, { className: "IataNewComponent", filePath: "src\\app\\main\\master\\iata\\iata-new\\iata-new.component.ts", lineNumber: 18 });
})();

// src/app/main/master/iata/iata.component.ts
function IataComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function IataComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, IataComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function IataComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function IataComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function IataComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, IataComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, IataComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function IataComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function IataComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function IataComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedIata, $event) || (ctx_r5.selectedIata = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, IataComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedIata[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedIata);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function IataComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function IataComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _IataComponent = class _IataComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.iataTable = [];
    this.selectedIata = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "IATA - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "origin", header: "Origin" },
      { field: "iataKd", header: "IATA " },
      { field: "iataCharge", header: "IATA Charge" },
      { field: "currencyDescription", header: "Currency Description" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language Description" },
      { field: "companyId", header: "Company ID" },
      { field: "originCode", header: "Origin Code" },
      { field: "currencyId", header: "Currency ID" },
      { field: "languageDescription", header: "Language Description" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.iataTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedIata[this.selectedIata.length - 1];
    this.selectedIata.length = 0;
    this.selectedIata.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedIata[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedIata.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedIata[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/iata-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedIata.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedIata, module: "IATA", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedIata[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.origin + lines.originCode + lines.companyId + lines.languageId + " deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.iataTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "data") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Iata");
  }
};
_IataComponent.\u0275fac = function IataComponent_Factory(t) {
  return new (t || _IataComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(IataService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_IataComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IataComponent, selectors: [["app-iata"]], decls: 31, vars: 9, consts: [["iataTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Iata KD", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function IataComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "IATA - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function IataComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function IataComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function IataComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function IataComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function IataComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function IataComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const iataTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(iataTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, IataComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, IataComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, IataComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, IataComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.iataTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=iata.component.css.map */"] });
var IataComponent = _IataComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IataComponent, { className: "IataComponent", filePath: "src\\app\\main\\master\\iata\\iata.component.ts", lineNumber: 18 });
})();

// src/app/main/master/numberrange/numberrange.service.ts
var _NumberrangeService = class _NumberrangeService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(obj) {
    return this.http.get("/overc-idmaster-service/numberRange" + obj.numberRangeCode + "?languageId=" + obj.languageId + "&numberRangeObject=" + obj.numberRangeObject);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/numberRange", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/numberRange/" + obj.numberRangeCode + "?languageId=" + this.auth.languageId + "&numberRangeObject=" + obj.numberRangeObject, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/numberRange/" + obj.numberRangeCode + "?languageId=" + this.auth.languageId + "&numberRangeObject=" + obj.numberRangeObject);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/numberRange/find", obj);
  }
};
_NumberrangeService.\u0275fac = function NumberrangeService_Factory(t) {
  return new (t || _NumberrangeService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_NumberrangeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NumberrangeService, factory: _NumberrangeService.\u0275fac, providedIn: "root" });
var NumberrangeService = _NumberrangeService;

// src/app/main/master/numberrange/numberrange-new/numberrange-new.component.ts
var _c015 = () => ({ "width": "100%" });
function NumberrangeNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function NumberrangeNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function NumberrangeNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function NumberrangeNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, NumberrangeNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, NumberrangeNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function NumberrangeNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function NumberrangeNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function NumberrangeNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function NumberrangeNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function NumberrangeNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function NumberrangeNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function NumberrangeNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function NumberrangeNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, NumberrangeNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 21);
    \u0275\u0275text(8, "Number Range Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 22);
    \u0275\u0275template(10, NumberrangeNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 21);
    \u0275\u0275text(13, "Number Range Object");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275template(15, NumberrangeNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 21);
    \u0275\u0275text(18, "Number Range From");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, NumberrangeNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 21);
    \u0275\u0275text(23, "Number Range To");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, NumberrangeNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 21);
    \u0275\u0275text(28, "Number Range Current");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275template(30, NumberrangeNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 21);
    \u0275\u0275text(33, "Number Range Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-dropdown", 27);
    \u0275\u0275template(35, NumberrangeNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 28)(37, "button", 29);
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 30);
    \u0275\u0275listener("click", function NumberrangeNewComponent_ng_template_9_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_19_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c015));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_7_0 = ctx_r2.form.get("numberRangeCode")) == null ? null : tmp_7_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("numberRangeCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_9_0 = ctx_r2.form.get("numberRangeObject")) == null ? null : tmp_9_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("numberRangeObject"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_11_0 = ctx_r2.form.get("numberRangeFrom")) == null ? null : tmp_11_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("numberRangeFrom"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("numberRangeTo")) == null ? null : tmp_13_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("numberRangeTo"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_15_0 = ctx_r2.form.get("numberRangeCurrent")) == null ? null : tmp_15_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("numberRangeCurrent"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c015));
    \u0275\u0275property("options", ctx_r2.status)("ngClass", ((tmp_19_0 = ctx_r2.form.get("numberRangeStatus")) == null ? null : tmp_19_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("numberRangeStatus"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function NumberrangeNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function NumberrangeNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 32);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 33);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function NumberrangeNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 28)(18, "button", 39);
    \u0275\u0275listener("click", function NumberrangeNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function NumberrangeNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function NumberrangeNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, NumberrangeNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, NumberrangeNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _NumberrangeNewComponent = class _NumberrangeNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId, Validators.required],
      // languageDescription: [],
      numberRangeCode: [, Validators.required],
      numberRangeObject: [, Validators.required],
      numberRangeFrom: [, Validators.required],
      numberRangeTo: [, Validators.required],
      numberRangeCurrent: [, Validators.required],
      numberRangeStatus: ["1"],
      referenceField1: [],
      referenceField10: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.status = [
      { value: "2", label: "Inactive" },
      { value: "1", label: "Active" }
    ];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Number Range", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.numberRangeCode.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.numberRangeCode + " has been updated successfully" });
          this.router.navigate(["/main/master/numberrange"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.numberRangeCode + " has been created successfully" });
            this.router.navigate(["/main/master/numberrange"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_NumberrangeNewComponent.\u0275fac = function NumberrangeNewComponent_Factory(t) {
  return new (t || _NumberrangeNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_NumberrangeNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NumberrangeNewComponent, selectors: [["app-numberrange-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "formControlName", "numberRangeCode", "pInputText", "", "pKeyFilter", "num", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "formControlName", "numberRangeObject", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "formControlName", "numberRangeFrom", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "formControlName", "numberRangeTo", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "formControlName", "numberRangeCurrent", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "numberRangeStatus", "placeholder", "Select", "filter", "true", 3, "options", "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/numberrange", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function NumberrangeNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function NumberrangeNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, NumberrangeNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, NumberrangeNewComponent_ng_template_9_Template, 41, 25, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, NumberrangeNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Number Range - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=numberrange-new.component.css.map */"] });
var NumberrangeNewComponent = _NumberrangeNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NumberrangeNewComponent, { className: "NumberrangeNewComponent", filePath: "src\\app\\main\\master\\numberrange\\numberrange-new\\numberrange-new.component.ts", lineNumber: 18 });
})();

// src/app/main/master/numberrange/numberrange.component.ts
function NumberrangeComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function NumberrangeComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NumberrangeComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function NumberrangeComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function NumberrangeComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function NumberrangeComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, NumberrangeComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, NumberrangeComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function NumberrangeComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function NumberrangeComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function NumberrangeComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedNumberRange, $event) || (ctx_r5.selectedNumberRange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, NumberrangeComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedNumberRange[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedNumberRange);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function NumberrangeComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function NumberrangeComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _NumberrangeComponent = class _NumberrangeComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.numberRangeTable = [];
    this.selectedNumberRange = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Number Range - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "numberRangeCode", header: "Number Range Code" },
      { field: "numberRangeObject", header: "Number Range Object" },
      { field: "numberRangeStatus", header: "Number Range Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "numberRangeFrom", header: "Number Range From" },
      { field: "numberRangeTo", header: "Number Range To" },
      { field: "numberRangeCurrent", header: "Number Range Current" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.numberRangeTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedNumberRange[this.selectedNumberRange.length - 1];
    this.selectedNumberRange.length = 0;
    this.selectedNumberRange.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedNumberRange[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedNumberRange.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedNumberRange[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/numberrange-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedNumberRange.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedNumberRange, module: "Number Range", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedNumberRange[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.numberRangeCode + " deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.numberRangeTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "data") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "OpStatus");
  }
};
_NumberrangeComponent.\u0275fac = function NumberrangeComponent_Factory(t) {
  return new (t || _NumberrangeComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_NumberrangeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NumberrangeComponent, selectors: [["app-numberrange"]], decls: 31, vars: 9, consts: [["numberRangeTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Province Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function NumberrangeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Number Range - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function NumberrangeComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const numberRangeTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(numberRangeTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, NumberrangeComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, NumberrangeComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, NumberrangeComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, NumberrangeComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.numberRangeTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=numberrange.component.css.map */"] });
var NumberrangeComponent = _NumberrangeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NumberrangeComponent, { className: "NumberrangeComponent", filePath: "src\\app\\main\\master\\numberrange\\numberrange.component.ts", lineNumber: 19 });
})();

// src/app/main/master/opstatus/opstatus.service.ts
var _OpstatusService = class _OpstatusService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(obj) {
    return this.http.get("/overc-idmaster-service/opStatus/" + obj.statusCode + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/opStatus", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/opStatus/" + obj.statusCode + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/opStatus/" + obj.statusCode + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/opStatus/find", obj);
  }
};
_OpstatusService.\u0275fac = function OpstatusService_Factory(t) {
  return new (t || _OpstatusService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_OpstatusService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OpstatusService, factory: _OpstatusService.\u0275fac, providedIn: "root" });
var OpstatusService = _OpstatusService;

// src/app/main/master/opstatus/opstatus-new/opstatus-new.component.ts
var _c016 = () => ({ "width": "100%" });
function OpstatusNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function OpstatusNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function OpstatusNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function OpstatusNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, OpstatusNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, OpstatusNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function OpstatusNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 29)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function OpstatusNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 29)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function OpstatusNewComponent_ng_template_9_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 29)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function OpstatusNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, OpstatusNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, OpstatusNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 18);
    \u0275\u0275text(13, "Op Status Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17)(16, "p", 23);
    \u0275\u0275text(17, "Op Status Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 24);
    \u0275\u0275template(19, OpstatusNewComponent_ng_template_9_mat_error_19_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17)(21, "p", 18);
    \u0275\u0275text(22, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 26)(25, "button", 27);
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 28);
    \u0275\u0275listener("click", function OpstatusNewComponent_ng_template_9_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(16, _c016));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(17, _c016));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c016));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(19, _c016));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("statusCode")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r2.form.get("statusCode")) == null ? null : tmp_12_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("opStatusDescription")) == null ? null : tmp_13_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("opStatusDescription"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function OpstatusNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function OpstatusNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 30);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 31);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function OpstatusNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 26)(18, "button", 37);
    \u0275\u0275listener("click", function OpstatusNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 28);
    \u0275\u0275listener("click", function OpstatusNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function OpstatusNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, OpstatusNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, OpstatusNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _OpstatusNewComponent = class _OpstatusNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.OpStatus = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      statusCode: [],
      opStatusDescription: [, Validators.required],
      remark: [],
      referenceField1: [],
      referenceField10: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Op Status", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.statusCode.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.languageId + res.companyId + res.statusCode + " has been updated successfully" });
          this.router.navigate(["/main/master/opstatus"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.languageId + res.companyId + res.statusCode + " has been created successfully" });
            this.router.navigate(["/main/master/opstatus"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_OpstatusNewComponent.\u0275fac = function OpstatusNewComponent_Factory(t) {
  return new (t || _OpstatusNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(OpstatusService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_OpstatusNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpstatusNewComponent, selectors: [["app-opstatus-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["formControlName", "statusCode", "maxlength", "50", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "opStatusDescription", "maxlength", "100", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/opstatus", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function OpstatusNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function OpstatusNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, OpstatusNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, OpstatusNewComponent_ng_template_9_Template, 29, 20, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, OpstatusNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Op Status - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=opstatus-new.component.css.map */"] });
var OpstatusNewComponent = _OpstatusNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpstatusNewComponent, { className: "OpstatusNewComponent", filePath: "src\\app\\main\\master\\opstatus\\opstatus-new\\opstatus-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/opstatus/opstatus.component.ts
function OpstatusComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function OpstatusComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OpstatusComponent_ng_template_25_th_3_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function OpstatusComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function OpstatusComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function OpstatusComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, OpstatusComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 33)(2, OpstatusComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function OpstatusComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function OpstatusComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function OpstatusComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedOpstatus, $event) || (ctx_r5.selectedOpstatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, OpstatusComponent_ng_template_26_td_3_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedOpstatus[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedOpstatus);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function OpstatusComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 34);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function OpstatusComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _OpstatusComponent = class _OpstatusComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.opstatusTable = [];
    this.selectedOpstatus = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Op Status - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "opStatusDescription", header: "Op Status Description" },
      { field: "remark", header: "Remarks" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "companyId", header: "Company ID" },
      { field: "languageId", header: "Language ID" },
      { field: "statusCode", header: "Op Status Code" },
      { field: "languageDescription", header: "Language" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.opstatusTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedOpstatus[this.selectedOpstatus.length - 1];
    this.selectedOpstatus.length = 0;
    this.selectedOpstatus.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedOpstatus[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedOpstatus.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedOpstatus[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/opstatus-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedOpstatus.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedOpstatus, module: "Op Status", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedOpstatus[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.provinceId + lines.languageId + lines.countryId + lines.companyId + " deleted successfully" });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.opstatusTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "data") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "OpStatus");
  }
};
_OpstatusComponent.\u0275fac = function OpstatusComponent_Factory(t) {
  return new (t || _OpstatusComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(OpstatusService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_OpstatusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpstatusComponent, selectors: [["app-opstatus"]], decls: 31, vars: 9, consts: [["opstatusTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Province Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function OpstatusComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Op Status - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function OpstatusComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function OpstatusComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function OpstatusComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function OpstatusComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function OpstatusComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function OpstatusComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const opstatusTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(opstatusTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275template(25, OpstatusComponent_ng_template_25_Template, 4, 2, "ng-template", 23)(26, OpstatusComponent_ng_template_26_Template, 4, 5, "ng-template", 24)(27, OpstatusComponent_ng_template_27_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-menu", 26, 1);
    \u0275\u0275template(30, OpstatusComponent_ng_template_30_Template, 4, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.opstatusTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=opstatus.component.css.map */"] });
var OpstatusComponent = _OpstatusComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpstatusComponent, { className: "OpstatusComponent", filePath: "src\\app\\main\\master\\opstatus\\opstatus.component.ts", lineNumber: 19 });
})();

// src/app/main/master/special-approval/special-approval.service.ts
var _SpecialApprovalService = class _SpecialApprovalService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(specialApprovalId) {
    return this.http.get("/overc-idmaster-service/specialApproval/" + specialApprovalId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/specialApproval", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/specialApproval/" + obj.specialApprovalId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(specialApprovalId) {
    return this.http.delete("/overc-idmaster-service/specialApproval/" + specialApprovalId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/specialApproval/find", obj);
  }
};
_SpecialApprovalService.\u0275fac = function SpecialApprovalService_Factory(t) {
  return new (t || _SpecialApprovalService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_SpecialApprovalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpecialApprovalService, factory: _SpecialApprovalService.\u0275fac, providedIn: "root" });
var SpecialApprovalService = _SpecialApprovalService;

// src/app/main/master/special-approval/special-approval-new/special-approval-new.component.ts
var _c017 = () => ({ "width": "100%" });
function SpecialApprovalNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function SpecialApprovalNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function SpecialApprovalNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, SpecialApprovalNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, SpecialApprovalNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function SpecialApprovalNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 29)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function SpecialApprovalNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 29)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function SpecialApprovalNewComponent_ng_template_9_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 29)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function SpecialApprovalNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, SpecialApprovalNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, SpecialApprovalNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 18);
    \u0275\u0275text(13, "Special Approval ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17)(16, "p", 23);
    \u0275\u0275text(17, "Special Approval Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 24);
    \u0275\u0275template(19, SpecialApprovalNewComponent_ng_template_9_mat_error_19_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17)(21, "p", 18);
    \u0275\u0275text(22, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 26)(25, "button", 27);
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 28);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_ng_template_9_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c017));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(16, _c017));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(17, _c017));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(18, _c017));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("specialApprovalText")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("specialApprovalText"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function SpecialApprovalNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 30);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 31);
    \u0275\u0275text(6, " Admin");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function SpecialApprovalNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 26)(18, "button", 36);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 28);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function SpecialApprovalNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, SpecialApprovalNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, SpecialApprovalNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _SpecialApprovalNewComponent = class _SpecialApprovalNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      specialApprovalId: [],
      specialApprovalText: [, Validators.required],
      remark: [],
      referenceField1: [],
      referenceField10: [],
      referenceField2: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      createdOn: [""],
      createdBy: [],
      updatedOn: [""],
      updatedBy: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
  }
  errorHandling(control, error = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return " Field should not be blank";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Master", "Special Approval", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.specialApprovalId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res.specialApprovalId + " has been updated successfully"
          });
          this.router.navigate(["/main/master/specialApproval"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res.specialApprovalId + " has been created successfully"
            });
            this.router.navigate(["/main/master/specialApproval"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_SpecialApprovalNewComponent.\u0275fac = function SpecialApprovalNewComponent_Factory(t) {
  return new (t || _SpecialApprovalNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SpecialApprovalService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_SpecialApprovalNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialApprovalNewComponent, selectors: [["app-special-approval-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "specialApprovalId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "specialApprovalText", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/master/specialApproval", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function SpecialApprovalNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function SpecialApprovalNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, SpecialApprovalNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, SpecialApprovalNewComponent_ng_template_9_Template, 29, 19, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SpecialApprovalNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Special Approval - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=special-approval-new.component.css.map */"] });
var SpecialApprovalNewComponent = _SpecialApprovalNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialApprovalNewComponent, { className: "SpecialApprovalNewComponent", filePath: "src\\app\\main\\master\\special-approval\\special-approval-new\\special-approval-new.component.ts", lineNumber: 17 });
})();

// src/app/main/master/special-approval/special-approval.component.ts
function SpecialApprovalComponent_ng_template_25_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
  }
}
function SpecialApprovalComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 25);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SpecialApprovalComponent_ng_template_25_th_3_Template, 2, 1, "th", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function SpecialApprovalComponent_ng_template_26_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r7.field], " ");
  }
}
function SpecialApprovalComponent_ng_template_26_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8[col_r7.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function SpecialApprovalComponent_ng_template_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, SpecialApprovalComponent_ng_template_26_td_3_ng_container_1_Template, 2, 1, "ng-container", 30)(2, SpecialApprovalComponent_ng_template_26_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function SpecialApprovalComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28)(2, "p-checkbox", 29);
    \u0275\u0275listener("onChange", function SpecialApprovalComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function SpecialApprovalComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedSpecialApproval, $event) || (ctx_r5.selectedSpecialApproval = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SpecialApprovalComponent_ng_template_26_td_3_Template, 4, 2, "td", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedSpecialApproval[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedSpecialApproval);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function SpecialApprovalComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 31);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _SpecialApprovalComponent = class _SpecialApprovalComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.specialApprovalTable = [];
    this.selectedSpecialApproval = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Special Approval - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "specialApprovalId", header: "Special Approval ID" },
      { field: "specialApprovalText", header: "Special Approval Name" },
      { field: "companyName", header: "Company" },
      { field: "remark", header: "Remarks" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" },
      { field: "updatedBy", header: "Updated By" },
      { field: "updatedOn", header: "Updated On", format: "date" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.specialApprovalTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedSpecialApproval[this.selectedSpecialApproval.length - 1];
    this.selectedSpecialApproval.length = 0;
    this.selectedSpecialApproval.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedSpecialApproval[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedSpecialApproval.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedSpecialApproval[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/master/specialApproval-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedSpecialApproval.length === 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any Row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: {
        line: this.selectedSpecialApproval,
        module: "Special Approval",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedSpecialApproval[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.specialApprovalId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines.specialApprovalId + " Deleted successfully"
        });
        this.spin.hide();
        this.initialCall();
      },
      error: (err) => {
        this.cs.commonerrorNew(err);
        this.spin.hide();
      }
    });
  }
  downloadExcel() {
    const exportData = this.specialApprovalTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          console.log(3);
          exportItem[col.field] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.field] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Special Approval");
  }
};
_SpecialApprovalComponent.\u0275fac = function SpecialApprovalComponent_Factory(t) {
  return new (t || _SpecialApprovalComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(SpecialApprovalService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_SpecialApprovalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialApprovalComponent, selectors: [["app-special-approval"]], decls: 28, vars: 9, consts: [["specialApprovalTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function SpecialApprovalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "Special Approval - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "img", 5);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 6);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 7);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 8);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 11)(13, "p-iconField", 12);
    \u0275\u0275element(14, "p-inputIcon", 13);
    \u0275\u0275elementStart(15, "input", 14);
    \u0275\u0275listener("input", function SpecialApprovalComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const specialApprovalTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(specialApprovalTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "p", 16);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 17)(20, "p-calendar", 18)(21, "p-dropdown", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "p-table", 21, 0);
    \u0275\u0275template(25, SpecialApprovalComponent_ng_template_25_Template, 4, 2, "ng-template", 22)(26, SpecialApprovalComponent_ng_template_26_Template, 4, 5, "ng-template", 23)(27, SpecialApprovalComponent_ng_template_27_Template, 4, 1, "ng-template", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.specialApprovalTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=special-approval.component.css.map */"] });
var SpecialApprovalComponent = _SpecialApprovalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialApprovalComponent, { className: "SpecialApprovalComponent", filePath: "src\\app\\main\\master\\special-approval\\special-approval.component.ts", lineNumber: 18 });
})();

// src/app/main/master/master-routing.module.ts
var routes = [
  { path: "hub", component: HubComponent, data: { title: "Master", module: "Hub" } },
  { path: "hub-new/:code", component: HubNewComponent, data: { title: "Master", module: "Hub - Add New" } },
  { path: "rate", component: RateComponent, data: { title: "Master", module: "Rate" } },
  { path: "rate-new/:code", component: RateNewComponent, data: { title: "Master", module: "Rate - Add New" } },
  { path: "districtMapping", component: DistrictMappingComponent, data: { title: "Master", module: "DistrictMapping" } },
  { path: "districtMapping-new/:code", component: DistrictMappingNewComponent, data: { title: "Master", module: "DistrictMapping - Add New" } },
  { path: "provinceMapping", component: ProvinceMappingComponent, data: { title: "Master", module: "ProvinceMapping" } },
  { path: "provinceMapping-new/:code", component: ProvinceMappingNewComponent, data: { title: "Master", module: "ProvinceMapping - Add New" } },
  { path: "countryMapping", component: CountryMappingComponent, data: { title: "Master", module: "CountryMapping" } },
  { path: "countryMapping-new/:code", component: CountryMappingNewComponent, data: { title: "Master", module: "CountryMapping - Add New" } },
  { path: "cityMapping", component: CityMappingComponent, data: { title: "Master", module: "CityMapping" } },
  { path: "cityMapping-new/:code", component: CityMappingNewComponent, data: { title: "Master", module: "CityMapping - Add New" } },
  { path: "hubPartnerAssignment", component: HubPartnerAssignmentComponent, data: { title: "Master", module: "HubPartnerAssignment" } },
  { path: "hubPartnerAssignment-new/:code", component: HubPartnerAssignmentNewComponent, data: { title: "Master", module: "HubPartnerAssignment - Add New" } },
  { path: "customer", component: CustomerComponent, data: { title: "Setup", module: "Customer" } },
  { path: "customer-new/:code", component: CustomerNewComponent, data: { title: "Setup", module: "Customer - Add New" } },
  { path: "consignor", component: ConsignorComponent, data: { title: "Setup", module: "Consignor" } },
  { path: "consignor-new/:code", component: ConsignorNewComponent, data: { title: "Setup", module: "Consignor - Add New" } },
  { path: "hsCode", component: HsCodeComponent, data: { title: "Setup", module: "HS Code" } },
  { path: "hsCode-new/:code", component: HsCodeNewComponent, data: { title: "Setup", module: "HS Code - Add New" } },
  { path: "opstatus", component: OpstatusComponent, data: { title: "Setup", module: "Opstatus" } },
  { path: "opstatus-new/:code", component: OpstatusNewComponent, data: { title: "Setup", module: "Opstatus - Add New" } },
  { path: "numberrange", component: NumberrangeComponent, data: { title: "Setup", module: "NumberRange" } },
  { path: "numberrange-new/:code", component: NumberrangeNewComponent, data: { title: "Setup", module: "NumberRange - Add New" } },
  { path: "specialApproval", component: SpecialApprovalComponent, data: { title: "Setup", module: "Special Approval" } },
  { path: "specialApproval-new/:code", component: SpecialApprovalNewComponent, data: { title: "Setup", module: "Special Approval - Add New" } },
  { path: "event", component: EventComponent, data: { title: "Master", module: "Event" } },
  { path: "event-new/:code", component: EventNewComponent, data: { title: "Master", module: "Event - Add New" } },
  { path: "currencyExchangeRate", component: CurrencyExchangeRateComponent, data: { title: "Master", module: "CurrencyExchangeRate" } },
  { path: "currencyExchangeRate-new/:code", component: CurrencyExchangeRateNewComponent, data: { title: "Master", module: "CurrencyExchangeRate - Add New" } },
  { path: "iata", component: IataComponent, data: { title: "Master", module: "Iata" } },
  { path: "iata-new/:code", component: IataNewComponent, data: { title: "Master", module: "Iata - Add New" } }
];
var _MasterRoutingModule = class _MasterRoutingModule {
};
_MasterRoutingModule.\u0275fac = function MasterRoutingModule_Factory(t) {
  return new (t || _MasterRoutingModule)();
};
_MasterRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MasterRoutingModule });
_MasterRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var MasterRoutingModule = _MasterRoutingModule;

// src/app/main/master/master.module.ts
var _MasterModule = class _MasterModule {
};
_MasterModule.\u0275fac = function MasterModule_Factory(t) {
  return new (t || _MasterModule)();
};
_MasterModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MasterModule });
_MasterModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  MasterRoutingModule,
  SharedModule
] });
var MasterModule = _MasterModule;
export {
  MasterModule
};
//# sourceMappingURL=chunk-RVDSG734.js.map

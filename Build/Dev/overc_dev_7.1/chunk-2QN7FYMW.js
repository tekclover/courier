import {
  CityService,
  CountryService,
  ProvinceService,
  SubProductService
} from "./chunk-HX3OSCWC.js";
import {
  IataService
} from "./chunk-F25BX4XT.js";
import {
  NumberrangeService
} from "./chunk-YKZX2WQT.js";
import {
  ProductService
} from "./chunk-WXK5KZTJ.js";
import {
  ConsignorService,
  CustomerService
} from "./chunk-CFB7HIGC.js";
import {
  CommonAPIService
} from "./chunk-UPYFDWGR.js";
import {
  CustomTableComponent,
  DeleteComponent
} from "./chunk-XWT7LZBY.js";
import {
  PathNameService
} from "./chunk-OVBZLTA2.js";
import {
  ActivatedRoute,
  AuthService,
  Checkbox,
  Chips,
  CommonModule,
  CommonServiceService,
  DatePipe,
  DefaultValueAccessor,
  Dropdown,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FrozenColumn,
  HttpClient,
  IconField,
  InputIcon,
  InputText,
  KeyFilter,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatMenu,
  MatMenuContent,
  MatMenuItem,
  MaxLengthValidator,
  MessageService,
  MultiSelect,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgxSpinnerService,
  OverlayPanel,
  PrimeTemplate,
  Router,
  RouterLink,
  RouterModule,
  SharedModule,
  SortIcon,
  SortableColumn,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-Y7FSALMY.js";

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
function HubNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function HubNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function HubNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function HubNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, HubNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, HubNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function HubNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 41)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 41)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_12_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 41)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_12_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 41)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_12_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 41)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function HubNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, HubNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, HubNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Hub Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 23);
    \u0275\u0275text(17, "Hub Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18)(20, "p", 19);
    \u0275\u0275text(21, "Hub Category");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 18)(24, "p", 23);
    \u0275\u0275text(25, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p-dropdown", 27);
    \u0275\u0275listener("onChange", function HubNewComponent_ng_template_12_Template_p_dropdown_onChange_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.countryChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, HubNewComponent_ng_template_12_mat_error_27_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 18)(29, "p", 23);
    \u0275\u0275text(30, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p-dropdown", 28);
    \u0275\u0275listener("onChange", function HubNewComponent_ng_template_12_Template_p_dropdown_onChange_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.provinceChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, HubNewComponent_ng_template_12_mat_error_32_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 18)(34, "p", 23);
    \u0275\u0275text(35, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p-dropdown", 29);
    \u0275\u0275listener("onChange", function HubNewComponent_ng_template_12_Template_p_dropdown_onChange_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cityChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, HubNewComponent_ng_template_12_mat_error_37_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 18)(39, "p", 19);
    \u0275\u0275text(40, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 18)(43, "p", 19);
    \u0275\u0275text(44, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 18)(47, "p", 19);
    \u0275\u0275text(48, "Address Line 1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 18)(51, "p", 19);
    \u0275\u0275text(52, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 18)(55, "p", 19);
    \u0275\u0275text(56, "Address Line 3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 18)(59, "p", 19);
    \u0275\u0275text(60, "Address Line 4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 18)(63, "p", 19);
    \u0275\u0275text(64, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "p-dropdown", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 18)(67, "p", 19);
    \u0275\u0275text(68, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 38)(71, "button", 39);
    \u0275\u0275text(72, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "button", 40);
    \u0275\u0275listener("click", function HubNewComponent_ng_template_12_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(74);
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
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c0));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(40, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c0));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(42, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("hubCode")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("hubName")) == null ? null : tmp_13_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c0));
    \u0275\u0275property("options", ctx_r2.countryIdList)("disabled", true)("ngClass", ((tmp_17_0 = ctx_r2.form.get("countryId")) == null ? null : tmp_17_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(44, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c0));
    \u0275\u0275property("options", ctx_r2.provinceIdList)("ngClass", ((tmp_22_0 = ctx_r2.form.get("provinceId")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(46, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("provinceId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c0));
    \u0275\u0275property("options", ctx_r2.cityIdList)("ngClass", ((tmp_28_0 = ctx_r2.form.get("cityId")) == null ? null : tmp_28_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(48, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("cityId"));
    \u0275\u0275advance(28);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(49, _c0));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function HubNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function HubNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 42);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 43);
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
function HubNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 38)(18, "button", 49);
    \u0275\u0275listener("click", function HubNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 40);
    \u0275\u0275listener("click", function HubNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function HubNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, HubNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, HubNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _HubNewComponent = class _HubNewComponent {
  constructor(cs, spin, route, router, path, fb, service, countryService, provinceService, cityService, numberRangeService, messageService, cas, auth) {
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
    this.numberRangeService = numberRangeService;
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
      statusId: ["16"],
      statusDescription: [],
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
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["HUB"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.hubCode.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.hubCode.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
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
  return new (t || _HubNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HubService), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(ProvinceService), \u0275\u0275directiveInject(CityService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_HubNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HubNewComponent, selectors: [["app-hub-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "hubCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "hubName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "hubCategory", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "onChange", "options", "disabled", "ngClass", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "provinceId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "cityId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "longitude", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "latitude", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "pInputText", "", "formControlName", "addressLine1", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "pInputText", "", "formControlName", "addressLine2", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "pInputText", "", "formControlName", "addressLine3", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "2000", "pInputText", "", "formControlName", "addressLine4", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/hub", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function HubNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function HubNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, HubNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, HubNewComponent_ng_template_12_Template, 75, 50, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, HubNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Hub - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=hub-new.component.css.map */"] });
var HubNewComponent = _HubNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HubNewComponent, { className: "HubNewComponent", filePath: "src\\app\\main\\master\\hub\\hub-new\\hub-new.component.ts", lineNumber: 21 });
})();

// src/app/main/master/hub/hub.component.ts
var _c02 = ["hub"];
var _c1 = () => ({ width: "80vw" });
var _c2 = () => ({ "width": "100%" });
var _c3 = () => ({ "width": "140rem" });
function HubComponent_ng_template_44_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function HubComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 34);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HubComponent_ng_template_44_th_3_Template, 3, 3, "th", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function HubComponent_ng_template_45_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function HubComponent_ng_template_45_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9[col_r8.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function HubComponent_ng_template_45_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, HubComponent_ng_template_45_td_3_ng_container_1_Template, 2, 1, "ng-container", 42)(2, HubComponent_ng_template_45_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function HubComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 39)(2, "p-checkbox", 40);
    \u0275\u0275listener("onChange", function HubComponent_ng_template_45_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HubComponent_ng_template_45_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedHub, $event) || (ctx_r6.selectedHub = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HubComponent_ng_template_45_td_3_Template, 4, 2, "td", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedHub[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedHub);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function HubComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 43);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _HubComponent = class _HubComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, fb, auth, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.fb = fb;
    this.auth = auth;
    this.spin = spin;
    this.hubTable = [];
    this.selectedHub = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      hubCode: [],
      hubCategory: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      hubCode: "Hub",
      hubCategory: "Hub Category",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.hubCodeDropdown = [];
    this.hubCategoryDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Hub"];
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
      { field: "statusDescription", header: "Status" },
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
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.hubTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
        detail: "Kindly select any row"
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
        detail: "Kindly select any row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Hub");
  }
  getSearchDropdown() {
    this.hubTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.hubCode != null) {
        this.hubCodeDropdown.push({ value: res.hubCode, label: res.hubName });
        this.hubCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.hubCodeDropdown, "value");
      }
      if (res.hubCategory != null) {
        this.hubCategoryDropdown.push({ value: res.hubCategory, label: res.hubCategory });
        this.hubCategoryDropdown = this.cs.removeDuplicatesFromArrayList(this.hubCategoryDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.hubTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      hubCode: [],
      hubCategory: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_HubComponent.\u0275fac = function HubComponent_Factory(t) {
  return new (t || _HubComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(HubService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_HubComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HubComponent, selectors: [["app-hub"]], viewQuery: function HubComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 47, vars: 34, consts: [["hub", ""], ["hubTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "hubCode", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "hubCategory", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function HubComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Hub ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function HubComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function HubComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function HubComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function HubComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function HubComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function HubComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const hub_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(hub_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function HubComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const hubTag_r3 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(hubTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Hub");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Hub Category");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "p", 20);
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24)(33, "div")(34, "img", 25);
    \u0275\u0275listener("click", function HubComponent_Template_img_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "button", 26);
    \u0275\u0275listener("click", function HubComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 27);
    \u0275\u0275listener("click", function HubComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(39, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "p-chips", 28);
    \u0275\u0275listener("onRemove", function HubComponent_Template_p_chips_onRemove_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function HubComponent_Template_p_chips_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 29)(42, "p-table", 30, 1);
    \u0275\u0275template(44, HubComponent_ng_template_44_Template, 4, 2, "ng-template", 31)(45, HubComponent_ng_template_45_Template, 4, 5, "ng-template", 32)(46, HubComponent_ng_template_46_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c1));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c2));
    \u0275\u0275property("options", ctx.hubCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(28, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c2));
    \u0275\u0275property("options", ctx.hubCategoryDropdown)("panelStyle", \u0275\u0275pureFunction0(30, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c2));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c2));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.hubTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(33, _c3));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=hub.component.css.map */"] });
var HubComponent = _HubComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HubComponent, { className: "HubComponent", filePath: "src\\app\\main\\master\\hub\\hub.component.ts", lineNumber: 21 });
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
var _c03 = () => ({ "width": "100%" });
function CountryMappingNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CountryMappingNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function CountryMappingNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CountryMappingNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, CountryMappingNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, CountryMappingNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function CountryMappingNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_12_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CountryMappingNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, CountryMappingNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, CountryMappingNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 24);
    \u0275\u0275template(15, CountryMappingNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, " Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, CountryMappingNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, CountryMappingNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, CountryMappingNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 19);
    \u0275\u0275text(33, " Partner Country ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275template(35, CountryMappingNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18)(37, "p", 19);
    \u0275\u0275text(38, " Partner Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 29);
    \u0275\u0275template(40, CountryMappingNewComponent_ng_template_12_mat_error_40_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18)(42, "p", 19);
    \u0275\u0275text(43, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "p-dropdown", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18)(46, "p", 19);
    \u0275\u0275text(47, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 32)(50, "button", 33);
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 34);
    \u0275\u0275listener("click", function CountryMappingNewComponent_ng_template_12_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(53);
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
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c03));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(33, _c03));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c03));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(35, _c03));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c03));
    \u0275\u0275property("options", ctx_r2.countryIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("countryId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(37, _c03));
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
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c03));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CountryMappingNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CountryMappingNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 36);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 37);
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
function CountryMappingNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "button", 43);
    \u0275\u0275listener("click", function CountryMappingNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 34);
    \u0275\u0275listener("click", function CountryMappingNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function CountryMappingNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CountryMappingNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, CountryMappingNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
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
      statusId: ["16"],
      statusDescription: [],
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
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
_CountryMappingNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountryMappingNewComponent, selectors: [["app-country-mapping-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerCountryId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "partnerCountryName", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/countryMapping", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CountryMappingNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function CountryMappingNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, CountryMappingNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, CountryMappingNewComponent_ng_template_12_Template, 54, 39, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CountryMappingNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Country Mapping - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
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
var _c04 = ["countryMapping"];
var _c12 = () => ({ width: "80vw" });
var _c22 = () => ({ "width": "100%" });
var _c32 = () => ({ "width": "100rem" });
function CountryMappingComponent_ng_template_48_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function CountryMappingComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CountryMappingComponent_ng_template_48_th_3_Template, 3, 3, "th", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function CountryMappingComponent_ng_template_49_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function CountryMappingComponent_ng_template_49_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CountryMappingComponent_ng_template_49_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CountryMappingComponent_ng_template_49_td_3_ng_container_1_Template, 2, 1, "ng-container", 46)(2, CountryMappingComponent_ng_template_49_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function CountryMappingComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "p-checkbox", 44);
    \u0275\u0275listener("onChange", function CountryMappingComponent_ng_template_49_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CountryMappingComponent_ng_template_49_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedCountryMapping, $event) || (ctx_r6.selectedCountryMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CountryMappingComponent_ng_template_49_td_3_Template, 4, 2, "td", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedCountryMapping[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedCountryMapping);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function CountryMappingComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 47);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function CountryMappingComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CountryMappingComponent = class _CountryMappingComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.countryMappingTable = [];
    this.selectedCountryMapping = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      partnerId: [],
      partnerType: [],
      countryId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      countryId: "Country",
      partnerId: "Partner",
      partnerType: "Partner Type",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.countryDropdown = [];
    this.partnerIdDropdown = [];
    this.partnerTypeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Country Mapping"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "partnerId", header: "Partner ID" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerName", header: "Partner Name" },
      { field: "partnerCountryName", header: "Partner Country" },
      { field: "statusDescription", header: "Status" },
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
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.countryMappingTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCountryMapping[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/countryMapping-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCountryMapping.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Country Mapping");
  }
  getSearchDropdown() {
    this.countryMappingTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.countryId != null) {
        this.countryDropdown.push({ value: res.countryId, label: res.countryName });
        this.countryDropdown = this.cs.removeDuplicatesFromArrayList(this.countryDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerIdDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerIdDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerIdDropdown, "value");
      }
      if (res.partnerType != null) {
        this.partnerTypeDropdown.push({ value: res.partnerType, label: res.partnerType });
        this.partnerTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerTypeDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.countryMappingTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      countryId: [],
      partnerId: [],
      partnerType: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_CountryMappingComponent.\u0275fac = function CountryMappingComponent_Factory(t) {
  return new (t || _CountryMappingComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CountryMappingService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CountryMappingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountryMappingComponent, selectors: [["app-country-mapping"]], viewQuery: function CountryMappingComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 54, vars: 40, consts: [["countryMapping", ""], ["CountryMappingTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerType", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CountryMappingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Country Mapping ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const countryMapping_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(countryMapping_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function CountryMappingComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const CountryMappingTag_r3 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(CountryMappingTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "p", 21);
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 26)(37, "div")(38, "img", 27);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_img_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "button", 28);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 29);
    \u0275\u0275listener("click", function CountryMappingComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(43, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "p-chips", 30);
    \u0275\u0275listener("onRemove", function CountryMappingComponent_Template_p_chips_onRemove_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CountryMappingComponent_Template_p_chips_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31)(46, "p-table", 32, 1);
    \u0275\u0275template(48, CountryMappingComponent_ng_template_48_Template, 4, 2, "ng-template", 33)(49, CountryMappingComponent_ng_template_49_Template, 4, 5, "ng-template", 34)(50, CountryMappingComponent_ng_template_50_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "mat-menu", 36, 2);
    \u0275\u0275template(53, CountryMappingComponent_ng_template_53_Template, 4, 0, "ng-template", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c12));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c22));
    \u0275\u0275property("options", ctx.partnerIdDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c22));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c22));
    \u0275\u0275property("options", ctx.partnerTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c22));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c22));
    \u0275\u0275property("options", ctx.countryDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c22));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c22));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c22));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.countryMappingTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(39, _c32));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=country-mapping.component.css.map */"] });
var CountryMappingComponent = _CountryMappingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountryMappingComponent, { className: "CountryMappingComponent", filePath: "src\\app\\main\\master\\country-mapping\\country-mapping.component.ts", lineNumber: 22 });
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
var _c05 = () => ({ "width": "100%" });
function DistrictMappingNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function DistrictMappingNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function DistrictMappingNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, DistrictMappingNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, DistrictMappingNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function DistrictMappingNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_12_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function DistrictMappingNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, DistrictMappingNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, DistrictMappingNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 24);
    \u0275\u0275template(15, DistrictMappingNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, "Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, DistrictMappingNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, DistrictMappingNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, DistrictMappingNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 19);
    \u0275\u0275text(33, "Partner District ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275template(35, DistrictMappingNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18)(37, "p", 19);
    \u0275\u0275text(38, "Partner District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 29);
    \u0275\u0275template(40, DistrictMappingNewComponent_ng_template_12_mat_error_40_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18)(42, "p", 19);
    \u0275\u0275text(43, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "p-dropdown", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18)(46, "p", 19);
    \u0275\u0275text(47, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 32)(50, "button", 33);
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 34);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_ng_template_12_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(53);
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
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c05));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(34, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c05));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(36, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c05));
    \u0275\u0275property("options", ctx_r2.districtIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(38, _c05))("ngClass", ((tmp_16_0 = ctx_r2.form.get("districtId")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
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
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c05));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function DistrictMappingNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 36);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 37);
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
function DistrictMappingNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "button", 43);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 34);
    \u0275\u0275listener("click", function DistrictMappingNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function DistrictMappingNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, DistrictMappingNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, DistrictMappingNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
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
      statusId: ["16"],
      statusDescription: [],
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
_DistrictMappingNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistrictMappingNewComponent, selectors: [["app-district-mapping-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "districtId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle", "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerDistrictId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "partnerDistrictName", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/districtMapping", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function DistrictMappingNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function DistrictMappingNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, DistrictMappingNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, DistrictMappingNewComponent_ng_template_12_Template, 54, 40, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, DistrictMappingNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("District Mapping - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
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
var _c06 = ["districtMapping"];
var _c13 = () => ({ width: "80vw" });
var _c23 = () => ({ "width": "100%" });
var _c33 = () => ({ "width": "100rem" });
function DistrictMappingComponent_ng_template_48_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function DistrictMappingComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DistrictMappingComponent_ng_template_48_th_3_Template, 3, 3, "th", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function DistrictMappingComponent_ng_template_49_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function DistrictMappingComponent_ng_template_49_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function DistrictMappingComponent_ng_template_49_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, DistrictMappingComponent_ng_template_49_td_3_ng_container_1_Template, 2, 1, "ng-container", 46)(2, DistrictMappingComponent_ng_template_49_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function DistrictMappingComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "p-checkbox", 44);
    \u0275\u0275listener("onChange", function DistrictMappingComponent_ng_template_49_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function DistrictMappingComponent_ng_template_49_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedDistrictMapping, $event) || (ctx_r6.selectedDistrictMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, DistrictMappingComponent_ng_template_49_td_3_Template, 4, 2, "td", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedDistrictMapping[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedDistrictMapping);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function DistrictMappingComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 47);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function DistrictMappingComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _DistrictMappingComponent = class _DistrictMappingComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.districtMappingTable = [];
    this.selectedDistrictMapping = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      partnerId: [],
      partnerType: [],
      districtId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      districtId: "District",
      partnerId: "Partner",
      partnerType: "Partner Type",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.districtDropdown = [];
    this.partnerIdDropdown = [];
    this.partnerTypeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "District Mapping"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "districtName", header: "District" },
      { field: "partnerId", header: "Partner ID" },
      { field: "partnerName", header: "Partner Name" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerDistrictName", header: "Partner District" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageDescription", header: "Language" },
      { field: "partnerDistrictId", header: "Partner District ID" },
      { field: "districtId", header: "District ID" },
      { field: "languageId", header: "Language ID" },
      { field: "companyId", header: "Company ID" },
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.districtMappingTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedDistrictMapping[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/districtMapping-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedDistrictMapping.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "District Mapping");
  }
  getSearchDropdown() {
    this.districtMappingTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.districtId != null) {
        this.districtDropdown.push({ value: res.districtId, label: res.districtName });
        this.districtDropdown = this.cs.removeDuplicatesFromArrayList(this.districtDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerIdDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerIdDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerIdDropdown, "value");
      }
      if (res.partnerType != null) {
        this.partnerTypeDropdown.push({ value: res.partnerType, label: res.partnerType });
        this.partnerTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerTypeDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.districtMappingTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      districtId: [],
      partnerId: [],
      partnerType: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_DistrictMappingComponent.\u0275fac = function DistrictMappingComponent_Factory(t) {
  return new (t || _DistrictMappingComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(DistrictMappingService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_DistrictMappingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistrictMappingComponent, selectors: [["app-district-mapping"]], viewQuery: function DistrictMappingComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c06, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 54, vars: 40, consts: [["districtMapping", ""], ["districtMappingTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerType", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "districtId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function DistrictMappingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "District Mapping ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const districtMapping_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(districtMapping_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function DistrictMappingComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const districtMappingTag_r3 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(districtMappingTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "p", 21);
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 26)(37, "div")(38, "img", 27);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_img_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "button", 28);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 29);
    \u0275\u0275listener("click", function DistrictMappingComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(43, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "p-chips", 30);
    \u0275\u0275listener("onRemove", function DistrictMappingComponent_Template_p_chips_onRemove_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function DistrictMappingComponent_Template_p_chips_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31)(46, "p-table", 32, 1);
    \u0275\u0275template(48, DistrictMappingComponent_ng_template_48_Template, 4, 2, "ng-template", 33)(49, DistrictMappingComponent_ng_template_49_Template, 4, 5, "ng-template", 34)(50, DistrictMappingComponent_ng_template_50_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "mat-menu", 36, 2);
    \u0275\u0275template(53, DistrictMappingComponent_ng_template_53_Template, 4, 0, "ng-template", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c13));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c23));
    \u0275\u0275property("options", ctx.partnerIdDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c23));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c23));
    \u0275\u0275property("options", ctx.partnerTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c23));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c23));
    \u0275\u0275property("options", ctx.districtDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c23));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c23));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c23));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.districtMappingTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(39, _c33));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=district-mapping.component.css.map */"] });
var DistrictMappingComponent = _DistrictMappingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistrictMappingComponent, { className: "DistrictMappingComponent", filePath: "src\\app\\main\\master\\district-mapping\\district-mapping.component.ts", lineNumber: 21 });
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
var _c07 = () => ({ "width": "100%" });
function ProvinceMappingNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ProvinceMappingNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function ProvinceMappingNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, ProvinceMappingNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, ProvinceMappingNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function ProvinceMappingNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_12_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ProvinceMappingNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, ProvinceMappingNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, ProvinceMappingNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 24);
    \u0275\u0275template(15, ProvinceMappingNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, "Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, ProvinceMappingNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, ProvinceMappingNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, ProvinceMappingNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 19);
    \u0275\u0275text(33, "Partner Province ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275template(35, ProvinceMappingNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18)(37, "p", 19);
    \u0275\u0275text(38, "Partner Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 29);
    \u0275\u0275template(40, ProvinceMappingNewComponent_ng_template_12_mat_error_40_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18)(42, "p", 19);
    \u0275\u0275text(43, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "p-dropdown", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18)(46, "p", 19);
    \u0275\u0275text(47, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 32)(50, "button", 33);
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 34);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_ng_template_12_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(53);
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
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c07));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(34, _c07));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c07));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(36, _c07));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c07));
    \u0275\u0275property("options", ctx_r2.provinceIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("provinceId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(38, _c07));
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
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c07));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ProvinceMappingNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 36);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 37);
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
function ProvinceMappingNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "button", 43);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 34);
    \u0275\u0275listener("click", function ProvinceMappingNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function ProvinceMappingNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, ProvinceMappingNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, ProvinceMappingNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
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
      statusId: ["16"],
      statusDescription: [],
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
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.provinceIdList = [];
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
_ProvinceMappingNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProvinceMappingNewComponent, selectors: [["app-province-mapping-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "provinceId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerProvinceId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "partnerProvinceName", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/provinceMapping", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function ProvinceMappingNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function ProvinceMappingNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, ProvinceMappingNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, ProvinceMappingNewComponent_ng_template_12_Template, 54, 40, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ProvinceMappingNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Province Mapping - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
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
var _c08 = ["provinceMapping"];
var _c14 = () => ({ width: "80vw" });
var _c24 = () => ({ "width": "100%" });
var _c34 = () => ({ "width": "100rem" });
function ProvinceMappingComponent_ng_template_48_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function ProvinceMappingComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProvinceMappingComponent_ng_template_48_th_3_Template, 3, 3, "th", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function ProvinceMappingComponent_ng_template_49_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function ProvinceMappingComponent_ng_template_49_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ProvinceMappingComponent_ng_template_49_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ProvinceMappingComponent_ng_template_49_td_3_ng_container_1_Template, 2, 1, "ng-container", 46)(2, ProvinceMappingComponent_ng_template_49_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function ProvinceMappingComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "p-checkbox", 44);
    \u0275\u0275listener("onChange", function ProvinceMappingComponent_ng_template_49_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ProvinceMappingComponent_ng_template_49_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedProvinceMapping, $event) || (ctx_r6.selectedProvinceMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ProvinceMappingComponent_ng_template_49_td_3_Template, 4, 2, "td", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedProvinceMapping[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedProvinceMapping);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function ProvinceMappingComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 47);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function ProvinceMappingComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _ProvinceMappingComponent = class _ProvinceMappingComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.provinceMappingTable = [];
    this.selectedProvinceMapping = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      partnerId: [],
      partnerType: [],
      provinceId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      provinceId: "Province",
      partnerId: "Partner",
      partnerType: "Partner Type",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.provinceDropdown = [];
    this.partnerIdDropdown = [];
    this.partnerTypeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Province Mapping"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "provinceName", header: "Province" },
      { field: "partnerId", header: "Partner ID" },
      { field: "partnerName", header: "Partner Name" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerProvinceName", header: "Partner Province" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageDescription", header: "Language" },
      { field: "partnerProvinceId", header: "Partner Province ID" },
      { field: "provinceId", header: "Province ID" },
      { field: "languageId", header: "Language ID" },
      { field: "companyId", header: "Company ID" },
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
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
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedProvinceMapping[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/provinceMapping-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedProvinceMapping.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Province Mapping");
  }
  getSearchDropdown() {
    this.provinceMappingTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.provinceId != null) {
        this.provinceDropdown.push({ value: res.provinceId, label: res.provinceName });
        this.provinceDropdown = this.cs.removeDuplicatesFromArrayList(this.provinceDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerIdDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerIdDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerIdDropdown, "value");
      }
      if (res.partnerType != null) {
        this.partnerTypeDropdown.push({ value: res.partnerType, label: res.partnerType });
        this.partnerTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerTypeDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.provinceMappingTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      partnerId: [],
      partnerType: [],
      provinceId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_ProvinceMappingComponent.\u0275fac = function ProvinceMappingComponent_Factory(t) {
  return new (t || _ProvinceMappingComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ProvinceMappingService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ProvinceMappingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProvinceMappingComponent, selectors: [["app-province-mapping"]], viewQuery: function ProvinceMappingComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c08, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 54, vars: 40, consts: [["provinceMapping", ""], ["provinceMappingTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerType", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "provinceId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function ProvinceMappingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Province Mapping ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const provinceMapping_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(provinceMapping_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function ProvinceMappingComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const provinceMappingTag_r3 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(provinceMappingTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "p", 21);
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 26)(37, "div")(38, "img", 27);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_img_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "button", 28);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 29);
    \u0275\u0275listener("click", function ProvinceMappingComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(43, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "p-chips", 30);
    \u0275\u0275listener("onRemove", function ProvinceMappingComponent_Template_p_chips_onRemove_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ProvinceMappingComponent_Template_p_chips_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31)(46, "p-table", 32, 1);
    \u0275\u0275template(48, ProvinceMappingComponent_ng_template_48_Template, 4, 2, "ng-template", 33)(49, ProvinceMappingComponent_ng_template_49_Template, 4, 5, "ng-template", 34)(50, ProvinceMappingComponent_ng_template_50_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "mat-menu", 36, 2);
    \u0275\u0275template(53, ProvinceMappingComponent_ng_template_53_Template, 4, 0, "ng-template", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c14));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c24));
    \u0275\u0275property("options", ctx.partnerIdDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c24));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c24));
    \u0275\u0275property("options", ctx.partnerTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c24));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c24));
    \u0275\u0275property("options", ctx.provinceDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c24));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c24));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c24));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.provinceMappingTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(39, _c34));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=province-mapping.component.css.map */"] });
var ProvinceMappingComponent = _ProvinceMappingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProvinceMappingComponent, { className: "ProvinceMappingComponent", filePath: "src\\app\\main\\master\\province-mapping\\province-mapping.component.ts", lineNumber: 21 });
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
var _c09 = () => ({ "width": "100%" });
function CityMappingNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CityMappingNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function CityMappingNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CityMappingNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, CityMappingNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, CityMappingNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function CityMappingNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_12_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CityMappingNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, CityMappingNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, CityMappingNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 24);
    \u0275\u0275template(15, CityMappingNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, " Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, CityMappingNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, CityMappingNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, CityMappingNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 19);
    \u0275\u0275text(33, " Partner City ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275template(35, CityMappingNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18)(37, "p", 19);
    \u0275\u0275text(38, "Partner City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 29);
    \u0275\u0275template(40, CityMappingNewComponent_ng_template_12_mat_error_40_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18)(42, "p", 19);
    \u0275\u0275text(43, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "p-dropdown", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18)(46, "p", 19);
    \u0275\u0275text(47, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 32)(50, "button", 33);
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 34);
    \u0275\u0275listener("click", function CityMappingNewComponent_ng_template_12_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c09));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(32, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c09));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(34, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c09));
    \u0275\u0275property("options", ctx_r2.cityIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(36, _c09))("ngClass", ((tmp_16_0 = ctx_r2.form.get("cityId")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
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
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c09));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CityMappingNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CityMappingNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 36);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 37);
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
function CityMappingNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "button", 43);
    \u0275\u0275listener("click", function CityMappingNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 34);
    \u0275\u0275listener("click", function CityMappingNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function CityMappingNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CityMappingNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, CityMappingNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
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
      statusId: ["16"],
      statusDescription: [],
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
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
_CityMappingNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CityMappingNewComponent, selectors: [["app-city-mapping-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "cityId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle", "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerCityId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerCityName", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/cityMapping", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CityMappingNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function CityMappingNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, CityMappingNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, CityMappingNewComponent_ng_template_12_Template, 54, 38, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CityMappingNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("City Mapping - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
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
var _c010 = ["cityMapping"];
var _c15 = () => ({ width: "80vw" });
var _c25 = () => ({ "width": "100%" });
var _c35 = () => ({ "width": "100rem" });
function CityMappingComponent_ng_template_48_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function CityMappingComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CityMappingComponent_ng_template_48_th_3_Template, 3, 3, "th", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function CityMappingComponent_ng_template_49_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function CityMappingComponent_ng_template_49_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy"), " ");
  }
}
function CityMappingComponent_ng_template_49_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CityMappingComponent_ng_template_49_td_3_ng_container_1_Template, 2, 1, "ng-container", 46)(2, CityMappingComponent_ng_template_49_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function CityMappingComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "p-checkbox", 44);
    \u0275\u0275listener("onChange", function CityMappingComponent_ng_template_49_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CityMappingComponent_ng_template_49_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedCityMapping, $event) || (ctx_r6.selectedCityMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CityMappingComponent_ng_template_49_td_3_Template, 4, 2, "td", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedCityMapping[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedCityMapping);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function CityMappingComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 47);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function CityMappingComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CityMappingComponent = class _CityMappingComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.cityMappingTable = [];
    this.selectedCityMapping = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      partnerId: [],
      partnerType: [],
      cityId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      cityId: "City",
      partnerId: "Partner",
      partnerType: "Partner Type",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.cityDropdown = [];
    this.partnerIdDropdown = [];
    this.partnerTypeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "City Mapping"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "cityName", header: "City" },
      { field: "partnerId", header: "Partner ID" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerName", header: "Partner Name" },
      { field: "partnerCityName", header: "Partner City" },
      { field: "statusDescription", header: "Status" },
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
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.cityMappingTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCityMapping[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/cityMapping-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCityMapping.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "City Mapping");
  }
  getSearchDropdown() {
    this.cityMappingTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.cityId != null) {
        this.cityDropdown.push({ value: res.cityId, label: res.cityName });
        this.cityDropdown = this.cs.removeDuplicatesFromArrayList(this.cityDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerIdDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerIdDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerIdDropdown, "value");
      }
      if (res.partnerType != null) {
        this.partnerTypeDropdown.push({ value: res.partnerType, label: res.partnerType });
        this.partnerTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerTypeDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.cityMappingTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      cityId: [],
      partnerId: [],
      partnerType: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_CityMappingComponent.\u0275fac = function CityMappingComponent_Factory(t) {
  return new (t || _CityMappingComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CityMappingService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CityMappingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CityMappingComponent, selectors: [["app-city-mapping"]], viewQuery: function CityMappingComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c010, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 54, vars: 40, consts: [["cityMapping", ""], ["CityMappingTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerType", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "cityId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CityMappingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "City Mapping ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function CityMappingComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function CityMappingComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function CityMappingComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function CityMappingComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function CityMappingComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function CityMappingComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const cityMapping_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(cityMapping_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function CityMappingComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const CityMappingTag_r3 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(CityMappingTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "p", 21);
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 26)(37, "div")(38, "img", 27);
    \u0275\u0275listener("click", function CityMappingComponent_Template_img_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "button", 28);
    \u0275\u0275listener("click", function CityMappingComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 29);
    \u0275\u0275listener("click", function CityMappingComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(43, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "p-chips", 30);
    \u0275\u0275listener("onRemove", function CityMappingComponent_Template_p_chips_onRemove_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CityMappingComponent_Template_p_chips_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31)(46, "p-table", 32, 1);
    \u0275\u0275template(48, CityMappingComponent_ng_template_48_Template, 4, 2, "ng-template", 33)(49, CityMappingComponent_ng_template_49_Template, 4, 5, "ng-template", 34)(50, CityMappingComponent_ng_template_50_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "mat-menu", 36, 2);
    \u0275\u0275template(53, CityMappingComponent_ng_template_53_Template, 4, 0, "ng-template", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c15));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c25));
    \u0275\u0275property("options", ctx.partnerIdDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c25));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c25));
    \u0275\u0275property("options", ctx.partnerTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c25));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c25));
    \u0275\u0275property("options", ctx.cityDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c25));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c25));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c25));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.cityMappingTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(39, _c35));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=city-mapping.component.css.map */"] });
var CityMappingComponent = _CityMappingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CityMappingComponent, { className: "CityMappingComponent", filePath: "src\\app\\main\\master\\city-mapping\\city-mapping.component.ts", lineNumber: 21 });
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
var _c011 = () => ({ "width": "100%" });
function HubPartnerAssignmentNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function HubPartnerAssignmentNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function HubPartnerAssignmentNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, HubPartnerAssignmentNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, HubPartnerAssignmentNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function HubPartnerAssignmentNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function HubPartnerAssignmentNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function HubPartnerAssignmentNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
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
function HubPartnerAssignmentNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
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
function HubPartnerAssignmentNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
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
function HubPartnerAssignmentNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
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
function HubPartnerAssignmentNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, HubPartnerAssignmentNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, HubPartnerAssignmentNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Hub Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 24);
    \u0275\u0275template(15, HubPartnerAssignmentNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, " Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, HubPartnerAssignmentNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, HubPartnerAssignmentNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, HubPartnerAssignmentNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 19);
    \u0275\u0275text(33, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-dropdown", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 18)(36, "p", 19);
    \u0275\u0275text(37, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 30)(40, "button", 31);
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 32);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_ng_template_12_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c011));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(30, _c011));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c011));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(32, _c011));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c011));
    \u0275\u0275property("options", ctx_r2.hubCodeList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(34, _c011))("ngClass", ((tmp_16_0 = ctx_r2.form.get("hubCode")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
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
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c011));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function HubPartnerAssignmentNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 34);
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
function HubPartnerAssignmentNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 30)(18, "button", 41);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 32);
    \u0275\u0275listener("click", function HubPartnerAssignmentNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function HubPartnerAssignmentNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, HubPartnerAssignmentNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, HubPartnerAssignmentNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
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
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      statusId: ["16"],
      statusDescription: [],
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
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
_HubPartnerAssignmentNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HubPartnerAssignmentNewComponent, selectors: [["app-hub-partner-assignment-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "hubCode", "appendTo", "body", 3, "options", "disabled", "panelStyle", "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/hubPartnerAssignment", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function HubPartnerAssignmentNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function HubPartnerAssignmentNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, HubPartnerAssignmentNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, HubPartnerAssignmentNewComponent_ng_template_12_Template, 44, 36, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, HubPartnerAssignmentNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Hub Partner Assignment - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
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
var _c012 = ["hubPartnerAssignment"];
var _c16 = () => ({ width: "80vw" });
var _c26 = () => ({ "width": "100%" });
var _c36 = () => ({ "width": "100rem" });
function HubPartnerAssignmentComponent_ng_template_52_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function HubPartnerAssignmentComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 39);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HubPartnerAssignmentComponent_ng_template_52_th_3_Template, 3, 3, "th", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function HubPartnerAssignmentComponent_ng_template_53_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function HubPartnerAssignmentComponent_ng_template_53_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function HubPartnerAssignmentComponent_ng_template_53_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, HubPartnerAssignmentComponent_ng_template_53_td_3_ng_container_1_Template, 2, 1, "ng-container", 47)(2, HubPartnerAssignmentComponent_ng_template_53_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function HubPartnerAssignmentComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44)(2, "p-checkbox", 45);
    \u0275\u0275listener("onChange", function HubPartnerAssignmentComponent_ng_template_53_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HubPartnerAssignmentComponent_ng_template_53_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedHubPartnerAssignment, $event) || (ctx_r6.selectedHubPartnerAssignment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HubPartnerAssignmentComponent_ng_template_53_td_3_Template, 4, 2, "td", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedHubPartnerAssignment[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedHubPartnerAssignment);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function HubPartnerAssignmentComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 48);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function HubPartnerAssignmentComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 49);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _HubPartnerAssignmentComponent = class _HubPartnerAssignmentComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.hubPartnerAssignmentTable = [];
    this.selectedHubPartnerAssignment = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      hubCode: [],
      hubCategory: [],
      partnerId: [],
      partnerType: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      hubCode: "Hub",
      hubCategory: "Hub Category",
      partnerId: "Partner",
      partnerType: "Partner Type",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.hubCodeDropdown = [];
    this.hubCategoryDropdown = [];
    this.partnerIdDropdown = [];
    this.partnerTypeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Hub Partner Assignment"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "partnerId", header: "Partner ID" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerName", header: "Partner Name" },
      { field: "hubName", header: "Hub Name" },
      { field: "statusDescription", header: "Status" },
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
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.hubPartnerAssignmentTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedHubPartnerAssignment[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/hubPartnerAssignment-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedHubPartnerAssignment.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Hub Partner Assignment");
  }
  getSearchDropdown() {
    this.hubPartnerAssignmentTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.hubCode != null) {
        this.hubCodeDropdown.push({ value: res.hubCode, label: res.hubName });
        this.hubCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.hubCodeDropdown, "value");
      }
      if (res.hubCategory != null) {
        this.hubCategoryDropdown.push({ value: res.hubCategory, label: res.hubCategory });
        this.hubCategoryDropdown = this.cs.removeDuplicatesFromArrayList(this.hubCategoryDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerIdDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerIdDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerIdDropdown, "value");
      }
      if (res.partnerType != null) {
        this.partnerTypeDropdown.push({ value: res.partnerType, label: res.partnerType });
        this.partnerTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerTypeDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.hubPartnerAssignmentTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      hubCode: [],
      hubCategory: [],
      partnerId: [],
      partnerType: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_HubPartnerAssignmentComponent.\u0275fac = function HubPartnerAssignmentComponent_Factory(t) {
  return new (t || _HubPartnerAssignmentComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(HubPartnerAssignmentService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_HubPartnerAssignmentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HubPartnerAssignmentComponent, selectors: [["app-hub-partner-assignment"]], viewQuery: function HubPartnerAssignmentComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c012, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 58, vars: 46, consts: [["hubPartnerAssignment", ""], ["HubPartnerAssignmentTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerType", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "hubCode", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "hubCategory", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function HubPartnerAssignmentComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Hub Partner Assignment ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const hubPartnerAssignment_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(hubPartnerAssignment_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function HubPartnerAssignmentComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const HubPartnerAssignmentTag_r3 = \u0275\u0275reference(51);
      return \u0275\u0275resetView(HubPartnerAssignmentTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Hub");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "p", 21);
    \u0275\u0275text(34, "Hub Category");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 20)(37, "p", 21);
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-multiSelect", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 27)(41, "div")(42, "img", 28);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_img_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "button", 29);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(45, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 30);
    \u0275\u0275listener("click", function HubPartnerAssignmentComponent_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(47, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "p-chips", 31);
    \u0275\u0275listener("onRemove", function HubPartnerAssignmentComponent_Template_p_chips_onRemove_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function HubPartnerAssignmentComponent_Template_p_chips_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 32)(50, "p-table", 33, 1);
    \u0275\u0275template(52, HubPartnerAssignmentComponent_ng_template_52_Template, 4, 2, "ng-template", 34)(53, HubPartnerAssignmentComponent_ng_template_53_Template, 4, 5, "ng-template", 35)(54, HubPartnerAssignmentComponent_ng_template_54_Template, 4, 1, "ng-template", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "mat-menu", 37, 2);
    \u0275\u0275template(57, HubPartnerAssignmentComponent_ng_template_57_Template, 4, 0, "ng-template", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c16));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c26));
    \u0275\u0275property("options", ctx.partnerIdDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c26));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c26));
    \u0275\u0275property("options", ctx.partnerTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c26));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c26));
    \u0275\u0275property("options", ctx.hubCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(40, _c26));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c26));
    \u0275\u0275property("options", ctx.hubCategoryDropdown)("panelStyle", \u0275\u0275pureFunction0(42, _c26));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c26));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(44, _c26));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.hubPartnerAssignmentTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(45, _c36));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=hub-partner-assignment.component.css.map */"] });
var HubPartnerAssignmentComponent = _HubPartnerAssignmentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HubPartnerAssignmentComponent, { className: "HubPartnerAssignmentComponent", filePath: "src\\app\\main\\master\\hub-partner-assignment\\hub-partner-assignment.component.ts", lineNumber: 21 });
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
var _c013 = ["rate"];
var _c17 = () => ({ width: "80vw" });
var _c27 = () => ({ "width": "100%" });
var _c37 = () => ({ "width": "100rem" });
function RateComponent_ng_template_44_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function RateComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 34);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RateComponent_ng_template_44_th_3_Template, 3, 3, "th", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function RateComponent_ng_template_45_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function RateComponent_ng_template_45_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9[col_r8.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function RateComponent_ng_template_45_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, RateComponent_ng_template_45_td_3_ng_container_1_Template, 2, 1, "ng-container", 42)(2, RateComponent_ng_template_45_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function RateComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 39)(2, "p-checkbox", 40);
    \u0275\u0275listener("onChange", function RateComponent_ng_template_45_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function RateComponent_ng_template_45_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedRate, $event) || (ctx_r6.selectedRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, RateComponent_ng_template_45_td_3_Template, 4, 2, "td", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedRate[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedRate);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function RateComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 43);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _RateComponent = class _RateComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, fb, auth, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.fb = fb;
    this.auth = auth;
    this.spin = spin;
    this.rateTable = [];
    this.selectedRate = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      rateParameterId: [],
      partnerId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      rateParameterId: "Rate Parameter",
      partnerId: "Partner",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.rateParameterDropdown = [];
    this.partnerIdDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Rate"];
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.rateTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
        detail: "Kindly select any row"
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
        detail: "Kindly select any row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Rate");
  }
  getSearchDropdown() {
    this.rateTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.rateParameterId != null) {
        this.rateParameterDropdown.push({ value: res.rateParameterId, label: res.rateParameterDescription });
        this.rateParameterDropdown = this.cs.removeDuplicatesFromArrayList(this.rateParameterDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerIdDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerIdDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerIdDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.rateTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      rateParameterId: [],
      partnerId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_RateComponent.\u0275fac = function RateComponent_Factory(t) {
  return new (t || _RateComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(RateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_RateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RateComponent, selectors: [["app-rate"]], viewQuery: function RateComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c013, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 47, vars: 34, consts: [["rate", ""], ["rateTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "rateParameterId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function RateComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Rate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function RateComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function RateComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function RateComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function RateComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function RateComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function RateComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const rate_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(rate_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function RateComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const rateTag_r3 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(rateTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Rate Parameter");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "p", 20);
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24)(33, "div")(34, "img", 25);
    \u0275\u0275listener("click", function RateComponent_Template_img_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "button", 26);
    \u0275\u0275listener("click", function RateComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 27);
    \u0275\u0275listener("click", function RateComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(39, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "p-chips", 28);
    \u0275\u0275listener("onRemove", function RateComponent_Template_p_chips_onRemove_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function RateComponent_Template_p_chips_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 29)(42, "p-table", 30, 1);
    \u0275\u0275template(44, RateComponent_ng_template_44_Template, 4, 2, "ng-template", 31)(45, RateComponent_ng_template_45_Template, 4, 5, "ng-template", 32)(46, RateComponent_ng_template_46_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c17));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c27));
    \u0275\u0275property("options", ctx.partnerIdDropdown)("panelStyle", \u0275\u0275pureFunction0(28, _c27));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c27));
    \u0275\u0275property("options", ctx.rateParameterDropdown)("panelStyle", \u0275\u0275pureFunction0(30, _c27));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c27));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c27));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.rateTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(33, _c37));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=rate.component.css.map */"] });
var RateComponent = _RateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RateComponent, { className: "RateComponent", filePath: "src\\app\\main\\master\\rate\\rate.component.ts", lineNumber: 21 });
})();

// src/app/main/master/rate/rate-new/rate-new.component.ts
var _c014 = () => ({ "width": "100%" });
function RateNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function RateNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function RateNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function RateNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, RateNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, RateNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function RateNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 38)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function RateNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, RateNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, RateNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Rate Parameter");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, RateNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 24);
    \u0275\u0275text(18, "Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, RateNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 24);
    \u0275\u0275text(23, "Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, RateNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 24);
    \u0275\u0275text(28, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, RateNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 24);
    \u0275\u0275text(33, "Range From");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275template(35, RateNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18)(37, "p", 24);
    \u0275\u0275text(38, "Range To");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 29);
    \u0275\u0275template(40, RateNewComponent_ng_template_12_mat_error_40_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18)(42, "p", 24);
    \u0275\u0275text(43, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 30);
    \u0275\u0275template(45, RateNewComponent_ng_template_12_mat_error_45_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 18)(47, "p", 24);
    \u0275\u0275text(48, "Rate Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 31);
    \u0275\u0275template(50, RateNewComponent_ng_template_12_mat_error_50_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 18)(52, "p", 24);
    \u0275\u0275text(53, "Rate Parameter Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 32);
    \u0275\u0275template(55, RateNewComponent_ng_template_12_mat_error_55_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 18)(57, "p", 19);
    \u0275\u0275text(58, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "p-dropdown", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 18)(61, "p", 19);
    \u0275\u0275text(62, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 35)(65, "button", 36);
    \u0275\u0275text(66, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 37);
    \u0275\u0275listener("click", function RateNewComponent_ng_template_12_Template_button_click_67_listener() {
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
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c014));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(40, _c014));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c014));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(42, _c014));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c014));
    \u0275\u0275property("options", ctx_r2.rateParameterIdList)("disabled", true)("ngClass", ((tmp_15_0 = ctx_r2.form.get("rateParameterId")) == null ? null : tmp_15_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(44, _c014));
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
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c014));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function RateNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function RateNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 39);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 40);
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
function RateNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 35)(18, "button", 46);
    \u0275\u0275listener("click", function RateNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 37);
    \u0275\u0275listener("click", function RateNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function RateNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, RateNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, RateNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
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
      statusId: ["16"],
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
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
_RateNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RateNewComponent, selectors: [["app-rate-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["formControlName", "rateParameterId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "ngClass", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerId", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "partnerType", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rangeFrom", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rangeTo", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rate", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rateUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rateParameterUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select ", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/rate", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function RateNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function RateNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, RateNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, RateNewComponent_ng_template_12_Template, 69, 46, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, RateNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Rate - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
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

// src/app/main/master/customer/customer.component.ts
var _c015 = ["customer"];
var _c18 = () => ({ width: "80vw" });
var _c28 = () => ({ "width": "100%" });
var _c38 = () => ({ "width": "100rem" });
function CustomerComponent_ng_template_52_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function CustomerComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CustomerComponent_ng_template_52_th_3_Template, 3, 3, "th", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function CustomerComponent_ng_template_53_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function CustomerComponent_ng_template_53_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9[col_r8.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function CustomerComponent_ng_template_53_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CustomerComponent_ng_template_53_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, CustomerComponent_ng_template_53_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function CustomerComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41)(2, "p-checkbox", 42);
    \u0275\u0275listener("onChange", function CustomerComponent_ng_template_53_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CustomerComponent_ng_template_53_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedCustomer, $event) || (ctx_r6.selectedCustomer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CustomerComponent_ng_template_53_td_3_Template, 4, 2, "td", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedCustomer[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedCustomer);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function CustomerComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 45);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _CustomerComponent = class _CustomerComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, fb, auth, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.fb = fb;
    this.auth = auth;
    this.spin = spin;
    this.customerTable = [];
    this.selectedCustomer = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      subProductId: [],
      subProductValue: [],
      productId: [],
      customerId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      subProductId: "Sub Product",
      subProductValue: "Sub Product Value",
      productId: "Product",
      customerId: "Customer",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.subProductDropdown = [];
    this.subProductValueDropdown = [];
    this.productDropdown = [];
    this.customerDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Customer"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "customerId", header: "Customer ID" },
      { field: "customerName", header: "Customer Name" },
      { field: "subProductName", header: "Sub Product" },
      { field: "productName", header: "Product" },
      { field: "statusDescription", header: "Status" },
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
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          res = this.cs.removeDuplicatesFromArrayList(res, "customerId");
          this.customerTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
        detail: "Kindly select any row"
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
        detail: "Kindly select any row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
        let obj = {};
        obj.languageId = [this.auth.languageId];
        obj.companyId = [this.auth.companyId];
        obj.customerId = [this.selectedCustomer[0].customerId];
        this.service.search(obj).subscribe({
          next: (res) => {
            console.log(res);
            this.deleterecord(res);
          },
          error: (err) => {
            this.spin.hide();
            this.cs.commonerrorNew(err);
          }
        });
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.DeleteBulk(lines).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines[0].customerId + "  Deleted successfully"
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Customer");
  }
  getSearchDropdown() {
    this.customerTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.subProductId != null) {
        this.subProductDropdown.push({ value: res.subProductId, label: res.subProductName });
        this.subProductDropdown = this.cs.removeDuplicatesFromArrayList(this.subProductDropdown, "value");
      }
      if (res.subProductValue != null) {
        this.subProductValueDropdown.push({ value: res.subProductValue, label: res.referenceField1 });
        this.subProductValueDropdown = this.cs.removeDuplicatesFromArrayList(this.subProductValueDropdown, "value");
      }
      if (res.productId != null) {
        this.productDropdown.push({ value: res.productId, label: res.productName });
        this.productDropdown = this.cs.removeDuplicatesFromArrayList(this.productDropdown, "value");
      }
      if (res.customerId != null) {
        this.customerDropdown.push({ value: res.customerId, label: res.customerName });
        this.customerDropdown = this.cs.removeDuplicatesFromArrayList(this.customerDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.customerTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      subProductId: [],
      subProductValue: [],
      productId: [],
      customerId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_CustomerComponent.\u0275fac = function CustomerComponent_Factory(t) {
  return new (t || _CustomerComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CustomerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerComponent, selectors: [["app-customer"]], viewQuery: function CustomerComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c015, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 55, vars: 46, consts: [["customer", ""], ["customerTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "customerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductValue", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function CustomerComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Customer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function CustomerComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function CustomerComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function CustomerComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function CustomerComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function CustomerComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function CustomerComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const customer_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(customer_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function CustomerComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const customerTag_r3 = \u0275\u0275reference(51);
      return \u0275\u0275resetView(customerTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "p", 20);
    \u0275\u0275text(30, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19)(33, "p", 20);
    \u0275\u0275text(34, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 19)(37, "p", 20);
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-multiSelect", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 26)(41, "div")(42, "img", 27);
    \u0275\u0275listener("click", function CustomerComponent_Template_img_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "button", 28);
    \u0275\u0275listener("click", function CustomerComponent_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(45, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 29);
    \u0275\u0275listener("click", function CustomerComponent_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(47, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "p-chips", 30);
    \u0275\u0275listener("onRemove", function CustomerComponent_Template_p_chips_onRemove_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CustomerComponent_Template_p_chips_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 31)(50, "p-table", 32, 1);
    \u0275\u0275template(52, CustomerComponent_ng_template_52_Template, 4, 2, "ng-template", 33)(53, CustomerComponent_ng_template_53_Template, 4, 5, "ng-template", 34)(54, CustomerComponent_ng_template_54_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c18));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c28));
    \u0275\u0275property("options", ctx.customerDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c28));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c28));
    \u0275\u0275property("options", ctx.productDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c28));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c28));
    \u0275\u0275property("options", ctx.subProductDropdown)("panelStyle", \u0275\u0275pureFunction0(40, _c28));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c28));
    \u0275\u0275property("options", ctx.subProductValueDropdown)("panelStyle", \u0275\u0275pureFunction0(42, _c28));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c28));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(44, _c28));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.customerTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(45, _c38));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=customer.component.css.map */"] });
var CustomerComponent = _CustomerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerComponent, { className: "CustomerComponent", filePath: "src\\app\\main\\master\\customer\\customer.component.ts", lineNumber: 22 });
})();

// src/app/main/master/customer/customer-value/customer-value.component.ts
var _c016 = () => ({ "width": "100%" });
var _CustomerValueComponent = class _CustomerValueComponent {
  constructor(dialogRef, data, cs, spin, route, router, path, fb, productService, messageService, cas, auth, subProductService, customerService) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.productService = productService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.subProductService = subProductService;
    this.customerService = customerService;
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      subProductId: [, Validators.required],
      subProductName: [],
      subProductValue: [],
      productId: [, Validators.required],
      productName: [],
      customerId: [],
      customerName: [, Validators.required],
      statusId: ["16"],
      statusDescription: [],
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
    this.productIdList = [];
    this.subProductIdList = [];
    this.subProductValueList = [];
    this.status = [
      { value: "2", label: "Inactive" },
      { value: "1", label: "Active" }
    ];
  }
  ngOnInit() {
    this.form.controls.customerId.patchValue(this.data);
    if (this.data.pageflow == "Edit") {
      this.form.patchValue(this.data.code);
    }
    this.productDropdown();
  }
  save() {
    this.submitted = true;
    this.dialogRef.close(this.form.value);
  }
  productDropdown() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    this.productIdList = [];
    this.spin.show();
    this.productService.search(obj).subscribe({
      next: (result) => {
        this.productIdList = this.cas.foreachlist(result, { key: "productId", value: "productName" });
        this.productIdList = this.cs.removeDuplicatesFromArrayList(this.productIdList, "value");
        if (this.data.pageflow == "Edit") {
          this.subProductIdList = this.cas.foreachlist(result, { key: "subProductId", value: "subProductName" });
          this.subProductIdList = this.cs.removeDuplicatesFromArrayList(this.subProductIdList, "value");
          this.subProductValueList = this.cas.foreachlist(result, { key: "subProductValue", value: "subProductValue" });
        }
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
    obj.productId = [this.form.controls.productId.value];
    this.subProductIdList = [];
    this.spin.show();
    this.productService.search(obj).subscribe({
      next: (result) => {
        this.subProductIdList = this.cas.foreachlistWithoutKey(result, { key: "subProductId", value: "subProductName" });
        this.subProductIdList = this.cs.removeDuplicatesFromArrayList(this.subProductIdList, "value");
        this.subProductValueList = this.cas.foreachlistWithoutKey(result, { key: "subProductValue", value: "subProductValue" });
        this.subProductValueList = this.cs.removeDuplicatesFromArrayList(this.subProductValueList, "value");
        this.form.patchValue(result[0]);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  subProductChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.subProductId = [this.form.controls.subProductId.value];
    this.subProductValueList = [];
    this.spin.show();
    this.subProductService.search(obj).subscribe({
      next: (result) => {
        this.subProductValueList = this.cas.foreachlist(result, { key: "subProductValue", value: "referenceField1" });
        this.subProductValueList = this.cs.removeDuplicatesFromArrayList(this.subProductValueList, "value");
        this.form.patchValue(result[0]);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  subProductValueChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.subProductId = [this.form.controls.subProductId.value];
    obj.subProductValue = [this.form.controls.subProductValue.value];
    this.spin.show();
    this.subProductService.search(obj).subscribe({
      next: (result) => {
        this.form.patchValue(result[0]);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_CustomerValueComponent.\u0275fac = function CustomerValueComponent_Factory(t) {
  return new (t || _CustomerValueComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SubProductService), \u0275\u0275directiveInject(CustomerService));
};
_CustomerValueComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerValueComponent, selectors: [["app-customer-value"]], decls: 29, vars: 25, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4", "pt-2"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], ["id", "productId", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "subProductId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "subProductValue", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductValue", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "pInputText", "", "formControlName", "referenceField1", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "float-right", "py-2", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function CustomerValueComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Add Customer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-dropdown", 9);
    \u0275\u0275listener("onChange", function CustomerValueComponent_Template_p_dropdown_onChange_11_listener() {
      return ctx.productChanged();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "p", 8);
    \u0275\u0275text(14, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-dropdown", 11);
    \u0275\u0275listener("onChange", function CustomerValueComponent_Template_p_dropdown_onChange_15_listener() {
      return ctx.subProductChanged();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "p", 8);
    \u0275\u0275text(18, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-dropdown", 13);
    \u0275\u0275listener("onChange", function CustomerValueComponent_Template_p_dropdown_onChange_19_listener() {
      return ctx.subProductValueChanged();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "p", 15);
    \u0275\u0275text(22, "Value Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "button", 18);
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 19);
    \u0275\u0275listener("click", function CustomerValueComponent_Template_button_click_27_listener() {
      return ctx.save();
    });
    \u0275\u0275text(28, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_8_0;
    let tmp_13_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c016));
    \u0275\u0275property("options", ctx.productIdList)("ngClass", ((tmp_3_0 = ctx.form.get("productId")) == null ? null : tmp_3_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(20, _c016));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c016));
    \u0275\u0275property("options", ctx.subProductIdList)("ngClass", ((tmp_8_0 = ctx.form.get("subProductId")) == null ? null : tmp_8_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(22, _c016));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c016));
    \u0275\u0275property("options", ctx.subProductValueList)("ngClass", ((tmp_13_0 = ctx.form.get("subProductValue")) == null ? null : tmp_13_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(24, _c016));
  }
}, dependencies: [NgClass, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n/*# sourceMappingURL=customer-value.component.css.map */"] });
var CustomerValueComponent = _CustomerValueComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerValueComponent, { className: "CustomerValueComponent", filePath: "src\\app\\main\\master\\customer\\customer-value\\customer-value.component.ts", lineNumber: 21 });
})();

// src/app/main/master/customer/customer-new/customer-new.component.ts
var _c017 = () => ({ "width": "100%" });
var _c19 = () => ({ width: "180" });
function CustomerNewComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function CustomerNewComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function CustomerNewComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function CustomerNewComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Sub Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Sub Product Value Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function CustomerNewComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "p", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "p", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "p", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "p", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 30)(17, "img", 31);
    \u0275\u0275listener("click", function CustomerNewComponent_ng_template_45_Template_img_click_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const op_r3 = \u0275\u0275reference(19);
      return \u0275\u0275resetView(op_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p-overlayPanel", null, 0)(20, "div", 32)(21, "button", 33);
    \u0275\u0275listener("click", function CustomerNewComponent_ng_template_45_Template_button_click_21_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).rowIndex;
      const op_r3 = \u0275\u0275reference(19);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.editItem("Edit", i_r4);
      return \u0275\u0275resetView(op_r3.hide());
    });
    \u0275\u0275element(22, "img", 34);
    \u0275\u0275text(23, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 33);
    \u0275\u0275listener("click", function CustomerNewComponent_ng_template_45_Template_button_click_24_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).rowIndex;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeItem(i_r4));
    });
    \u0275\u0275element(25, "img", 35);
    \u0275\u0275text(26, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.productName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.subProductId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.subProductName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.subProductValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.referenceField1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(7, _c19));
  }
}
var _CustomerNewComponent = class _CustomerNewComponent {
  constructor(cs, spin, route, router, path, fb, service, subProductService, productService, numberRangeService, messageService, cas, auth, dialog) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.subProductService = subProductService;
    this.productService = productService;
    this.numberRangeService = numberRangeService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.dialog = dialog;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      subProductId: [],
      subProductName: [],
      productId: [],
      productName: [],
      customerId: [],
      customerName: [, Validators.required],
      statusId: ["16"],
      statusDescription: [],
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
    this.customerArray = [];
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
    } else {
      this.checkNumberRange();
    }
  }
  checkNumberRange() {
    this.spin.show();
    let obj = {};
    obj.numberRangeObject = ["CUSTOMER"];
    this.numberRangeService.search(obj).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
          this.form.controls.customerId.patchValue(this.nextNumber);
          this.numCondition = "true";
          this.form.controls.referenceField10.patchValue(this.numCondition);
          this.form.controls.customerId.disable();
        }
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
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
        console.log(this.productIdList);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  add() {
    const dialogRef = this.dialog.open(CustomerValueComponent, {
      disableClose: true,
      width: "70%",
      height: "50%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: this.customerArray.length + 1
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.customerArray.push(result);
        console.log(this.customerArray);
      }
    });
  }
  removeItem(index) {
    this.customerArray.splice(index, 1);
  }
  fill(line) {
    this.form.patchValue(line);
    this.spin.show();
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.customerId = [line.customerId];
    this.service.search(obj).subscribe({
      next: (res) => {
        console.log(res);
        this.customerArray = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.customerArray.length == 0) {
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
      this.customerArray.forEach((x) => {
        x.languageId = this.auth.languageId;
        x.companyId = this.auth.companyId;
        x.customerId = this.form.controls.customerId.value;
        x.customerName = this.form.controls.customerName.value;
        x.statusId = this.form.controls.statusId.value;
        x.remark = this.form.controls.remark.value;
      });
      this.service.UpdateBulk(this.customerArray).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].customerId + " has been updated successfully"
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
      this.customerArray.forEach((x) => {
        x.languageId = this.auth.languageId;
        x.companyId = this.auth.companyId;
        x.customerId = this.form.controls.customerId.value;
        x.customerName = this.form.controls.customerName.value;
        x.statusId = this.form.controls.statusId.value;
        x.remark = this.form.controls.remark.value;
      });
      console.log(this.customerArray);
      this.service.CreateBulk(this.customerArray).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res[0].customerId + " has been created successfully"
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
  editItem(data, i) {
    const dialogRef = this.dialog.open(CustomerValueComponent, {
      disableClose: true,
      width: "70%",
      height: "50%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { pageflow: data, code: this.customerArray[i] }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.customerArray.splice(i, 0);
        this.customerArray.splice(i, 1, result);
        console.log(result);
        this.customerArray = [...this.customerArray];
      }
    });
  }
};
_CustomerNewComponent.\u0275fac = function CustomerNewComponent_Factory(t) {
  return new (t || _CustomerNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(SubProductService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialog));
};
_CustomerNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerNewComponent, selectors: [["app-customer-new"]], decls: 51, vars: 27, consts: [["op", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "mx-auto", "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], [1, "col-4", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "customerId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "customerName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select ", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "justify-content-end", "mb-3"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], ["scrollHeight", "calc(100vh - 31.8rem)", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/customer", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "w-100", "pl-2", "ml-2"], ["pFrozenColumn", "", "alignFrozen", "right", 2, "padding-left", "1.5rem !important"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/edit.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/deletetool.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"]], template: function CustomerNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 4);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "p", 10);
    \u0275\u0275text(13, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 11);
    \u0275\u0275template(15, CustomerNewComponent_mat_error_15_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9)(17, "p", 10);
    \u0275\u0275text(18, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 13);
    \u0275\u0275template(20, CustomerNewComponent_mat_error_20_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 9)(22, "p", 10);
    \u0275\u0275text(23, "Customer ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 9)(26, "p", 15);
    \u0275\u0275text(27, "Customer Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 16);
    \u0275\u0275template(29, CustomerNewComponent_mat_error_29_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 9)(31, "p", 10);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-dropdown", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 9)(35, "p", 10);
    \u0275\u0275text(36, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 19)(39, "button", 20);
    \u0275\u0275listener("click", function CustomerNewComponent_Template_button_click_39_listener() {
      return ctx.add();
    });
    \u0275\u0275element(40, "i", 21);
    \u0275\u0275text(41, "Add Values");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 7)(43, "p-table", 22);
    \u0275\u0275template(44, CustomerNewComponent_ng_template_44_Template, 13, 0, "ng-template", 23)(45, CustomerNewComponent_ng_template_45_Template, 27, 8, "ng-template", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 25)(47, "button", 26);
    \u0275\u0275text(48, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 27);
    \u0275\u0275listener("click", function CustomerNewComponent_Template_button_click_49_listener() {
      return ctx.save();
    });
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Customer - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c017));
    \u0275\u0275property("options", ctx.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c017));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c017));
    \u0275\u0275property("options", ctx.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(25, _c017));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("companyId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx.form.get("customerName")) == null ? null : tmp_12_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("customerName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c017));
    \u0275\u0275property("options", ctx.status);
    \u0275\u0275advance(10);
    \u0275\u0275property("scrollable", true)("value", ctx.customerArray);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Table, FrozenColumn, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, OverlayPanel, MatError, MatMenuItem, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n/*# sourceMappingURL=customer-new.component.css.map */"] });
var CustomerNewComponent = _CustomerNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerNewComponent, { className: "CustomerNewComponent", filePath: "src\\app\\main\\master\\customer\\customer-new\\customer-new.component.ts", lineNumber: 22 });
})();

// src/app/main/master/consignor/consignor-value/consignor-value.component.ts
var _c018 = () => ({ "width": "100%" });
var _ConsignorValueComponent = class _ConsignorValueComponent {
  constructor(dialogRef, data, cs, spin, route, router, path, fb, productService, messageService, cas, auth, subProductService, customerService, consignorService) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.productService = productService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.subProductService = subProductService;
    this.customerService = customerService;
    this.consignorService = consignorService;
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      subProductId: [],
      subProductName: [],
      subProductValue: [],
      productId: [],
      productName: [],
      customerId: [],
      customerName: [],
      consignorId: [],
      consignorName: [, Validators.required],
      remark: [],
      statusId: ["16"],
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
    this.customerIdList = [];
    this.productIdList = [];
    this.subProductIdList = [];
    this.subProductValueList = [];
    this.status = [
      { value: "2", label: "Inactive" },
      { value: "1", label: "Active" }
    ];
  }
  ngOnInit() {
    this.form.controls.customerId.patchValue(this.data);
    if (this.data.pageflow == "Edit") {
      this.form.patchValue(this.data.code);
    }
    this.customerDropdown();
  }
  save() {
    this.submitted = true;
    this.dialogRef.close(this.form.value);
  }
  customerDropdown() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    this.customerIdList = [];
    this.spin.show();
    this.customerService.search(obj).subscribe({
      next: (result) => {
        this.customerIdList = this.cas.foreachlist(result, { key: "customerId", value: "customerName" });
        this.customerIdList = this.cs.removeDuplicatesFromArrayList(this.customerIdList, "value");
        if (this.data.pageflow == "Edit") {
          this.productIdList = this.cas.foreachlist(result, { key: "productId", value: "productName" });
          this.subProductIdList = this.cas.foreachlist(result, { key: "subProductId", value: "subProductName" });
        }
        console.log(this.customerIdList);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  customerChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.customerId = [this.form.controls.customerId.value];
    this.subProductIdList = [];
    this.spin.show();
    this.customerService.search(obj).subscribe({
      next: (result) => {
        this.form.patchValue(result[0]);
        this.productIdList = this.cas.foreachlistWithoutKey(result, { key: "productId", value: "productName" });
        this.subProductIdList = this.cas.foreachlistWithoutKey(result, { key: "subProductId", value: "subProductName" });
        this.subProductValueList = this.cas.foreachlistWithoutKey(result, { key: "subProductValue", value: "subProductValue" });
        this.productIdList = this.cs.removeDuplicatesFromArrayList(this.productIdList, "value");
        this.subProductIdList = this.cs.removeDuplicatesFromArrayList(this.subProductIdList, "value");
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  subProductChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.subProductId = [this.form.controls.subProductId.value];
    this.subProductValueList = [];
    this.spin.show();
    this.subProductService.search(obj).subscribe({
      next: (result) => {
        this.subProductValueList = this.cas.foreachlist(result, { key: "subProductValue", value: "referenceField1" });
        this.subProductValueList = this.cs.removeDuplicatesFromArrayList(this.subProductValueList, "value");
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  subProductValueChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.subProductId = [this.form.controls.subProductId.value];
    obj.subProductValue = [this.form.controls.subProductValue.value];
    this.spin.show();
    this.subProductService.search(obj).subscribe({
      next: (result) => {
        this.form.patchValue(result[0]);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_ConsignorValueComponent.\u0275fac = function ConsignorValueComponent_Factory(t) {
  return new (t || _ConsignorValueComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SubProductService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ConsignorService));
};
_ConsignorValueComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignorValueComponent, selectors: [["app-consignor-value"]], decls: 33, vars: 33, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4", "pt-2"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], ["id", "customerId", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "customerId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "productId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "subProductId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "subProductValue", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductValue", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "pInputText", "", "formControlName", "referenceField1", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "float-right", "py-2", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function ConsignorValueComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Add Consignor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-dropdown", 9);
    \u0275\u0275listener("onChange", function ConsignorValueComponent_Template_p_dropdown_onChange_11_listener() {
      return ctx.customerChanged();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "p", 8);
    \u0275\u0275text(14, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-dropdown", 11);
    \u0275\u0275listener("onChange", function ConsignorValueComponent_Template_p_dropdown_onChange_15_listener() {
      return ctx.subProductChanged();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "p", 8);
    \u0275\u0275text(18, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-dropdown", 13);
    \u0275\u0275listener("onChange", function ConsignorValueComponent_Template_p_dropdown_onChange_19_listener() {
      return ctx.subProductChanged();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "p", 8);
    \u0275\u0275text(22, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p-dropdown", 15);
    \u0275\u0275listener("onChange", function ConsignorValueComponent_Template_p_dropdown_onChange_23_listener() {
      return ctx.subProductValueChanged();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 16)(25, "p", 17);
    \u0275\u0275text(26, "Value Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 19)(29, "button", 20);
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 21);
    \u0275\u0275listener("click", function ConsignorValueComponent_Template_button_click_31_listener() {
      return ctx.save();
    });
    \u0275\u0275text(32, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_8_0;
    let tmp_13_0;
    let tmp_18_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c018));
    \u0275\u0275property("options", ctx.customerIdList)("ngClass", ((tmp_3_0 = ctx.form.get("customerId")) == null ? null : tmp_3_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(26, _c018));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c018));
    \u0275\u0275property("options", ctx.productIdList)("ngClass", ((tmp_8_0 = ctx.form.get("productId")) == null ? null : tmp_8_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(28, _c018));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c018));
    \u0275\u0275property("options", ctx.subProductIdList)("ngClass", ((tmp_13_0 = ctx.form.get("subProductId")) == null ? null : tmp_13_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(30, _c018));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c018));
    \u0275\u0275property("options", ctx.subProductValueList)("ngClass", ((tmp_18_0 = ctx.form.get("subProductValue")) == null ? null : tmp_18_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(32, _c018));
  }
}, dependencies: [NgClass, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n/*# sourceMappingURL=consignor-value.component.css.map */"] });
var ConsignorValueComponent = _ConsignorValueComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignorValueComponent, { className: "ConsignorValueComponent", filePath: "src\\app\\main\\master\\consignor\\consignor-value\\consignor-value.component.ts", lineNumber: 21 });
})();

// src/app/main/master/consignor/consignor-new/consignor-new.component.ts
var _c019 = () => ({ "width": "100%" });
var _c110 = () => ({ width: "180" });
function ConsignorNewComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignorNewComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignorNewComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignorNewComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Customer Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Sub Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Sub Product Value Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ConsignorNewComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "p", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "p", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "p", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "p", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "p", 29);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "p", 29);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "p", 29);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 30)(26, "img", 31);
    \u0275\u0275listener("click", function ConsignorNewComponent_ng_template_45_Template_img_click_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const op_r3 = \u0275\u0275reference(28);
      return \u0275\u0275resetView(op_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p-overlayPanel", null, 0)(29, "div", 32)(30, "button", 33);
    \u0275\u0275listener("click", function ConsignorNewComponent_ng_template_45_Template_button_click_30_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).rowIndex;
      const op_r3 = \u0275\u0275reference(28);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.editItem("Edit", i_r4);
      return \u0275\u0275resetView(op_r3.hide());
    });
    \u0275\u0275element(31, "img", 34);
    \u0275\u0275text(32, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 33);
    \u0275\u0275listener("click", function ConsignorNewComponent_ng_template_45_Template_button_click_33_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).rowIndex;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeItem(i_r4));
    });
    \u0275\u0275element(34, "img", 35);
    \u0275\u0275text(35, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.customerId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.customerName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.productId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.productName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.subProductId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.subProductName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.subProductValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.referenceField1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(10, _c110));
  }
}
var _ConsignorNewComponent = class _ConsignorNewComponent {
  constructor(cs, spin, route, router, path, fb, service, subProductService, numberRangeService, productService, customerService, messageService, cas, auth, dialog) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.subProductService = subProductService;
    this.numberRangeService = numberRangeService;
    this.productService = productService;
    this.customerService = customerService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.dialog = dialog;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      subProductId: [],
      subProductName: [],
      subProductValue: [],
      productId: [],
      productName: [],
      customerId: [],
      customerName: [],
      consignorId: [],
      consignorName: [, Validators.required],
      remark: [],
      statusId: ["16"],
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
    this.subProductIdList = [];
    this.productIdList = [];
    this.customerIdList = [];
    this.consignorArray = [];
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
    } else {
      this.checkNumberRange();
    }
  }
  checkNumberRange() {
    this.spin.show();
    let obj = {};
    obj.numberRangeObject = ["CONSIGNOR"];
    this.numberRangeService.search(obj).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
          this.form.controls.consignorId.patchValue(this.nextNumber);
          this.numCondition = "true";
          this.form.controls.referenceField10.patchValue(this.numCondition);
          this.form.controls.consignorId.disable();
        }
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
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
  add() {
    const dialogRef = this.dialog.open(ConsignorValueComponent, {
      disableClose: true,
      width: "70%",
      height: "50%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: this.consignorArray.length + 1
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.consignorArray.push(result);
      }
    });
  }
  removeItem(index) {
    this.consignorArray.splice(index, 1);
  }
  fill(line) {
    this.form.patchValue(line);
    this.spin.show();
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.consignorId = [line.consignorId];
    this.service.search(obj).subscribe({
      next: (res) => {
        console.log(res);
        this.consignorArray = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }
  save() {
    this.submitted = true;
    if (this.consignorArray.length == 0) {
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
      this.consignorArray.forEach((x) => {
        x.languageId = this.auth.languageId;
        x.companyId = this.auth.companyId;
        x.consignorId = this.form.controls.consignorId.value;
        x.consignorName = this.form.controls.consignorName.value;
        x.statusId = this.form.controls.statusId.value;
        x.remark = this.form.controls.remark.value;
      });
      this.service.UpdateBulk(this.consignorArray).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].consignorId + " has been updated successfully"
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
      this.consignorArray.forEach((x) => {
        x.languageId = this.auth.languageId;
        x.companyId = this.auth.companyId;
        x.consignorId = this.form.controls.consignorId.value;
        x.consignorName = this.form.controls.consignorName.value;
        x.statusId = this.form.controls.statusId.value;
        x.remark = this.form.controls.remark.value;
      });
      this.service.CreateBulk(this.consignorArray).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res[0].consignorId + " has been created successfully"
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
  editItem(data, i) {
    const dialogRef = this.dialog.open(ConsignorValueComponent, {
      disableClose: true,
      width: "70%",
      height: "50%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { pageflow: data, code: this.consignorArray[i] }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.consignorArray.splice(i, 0);
        this.consignorArray.splice(i, 1, result);
        console.log(result);
        this.consignorArray = [...this.consignorArray];
      }
    });
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
  return new (t || _ConsignorNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(SubProductService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialog));
};
_ConsignorNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignorNewComponent, selectors: [["app-consignor-new"]], decls: 51, vars: 27, consts: [["op", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "mx-auto", "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], [1, "col-4", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "consignorId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "consignorName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select ", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "justify-content-end", "mb-3"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], ["scrollHeight", "calc(100vh - 31.8rem)", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/consignor", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "w-100", "pl-2", "ml-2"], ["pFrozenColumn", "", "alignFrozen", "right", 2, "padding-left", "1.5rem !important"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/edit.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/deletetool.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"]], template: function ConsignorNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 4);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "p", 10);
    \u0275\u0275text(13, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 11);
    \u0275\u0275template(15, ConsignorNewComponent_mat_error_15_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9)(17, "p", 10);
    \u0275\u0275text(18, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 13);
    \u0275\u0275template(20, ConsignorNewComponent_mat_error_20_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 9)(22, "p", 10);
    \u0275\u0275text(23, "Consignor ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 9)(26, "p", 15);
    \u0275\u0275text(27, "Consignor Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 16);
    \u0275\u0275template(29, ConsignorNewComponent_mat_error_29_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 9)(31, "p", 10);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-dropdown", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 9)(35, "p", 10);
    \u0275\u0275text(36, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 19)(39, "button", 20);
    \u0275\u0275listener("click", function ConsignorNewComponent_Template_button_click_39_listener() {
      return ctx.add();
    });
    \u0275\u0275element(40, "i", 21);
    \u0275\u0275text(41, "Add Values");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 7)(43, "p-table", 22);
    \u0275\u0275template(44, ConsignorNewComponent_ng_template_44_Template, 19, 0, "ng-template", 23)(45, ConsignorNewComponent_ng_template_45_Template, 36, 11, "ng-template", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 25)(47, "button", 26);
    \u0275\u0275text(48, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 27);
    \u0275\u0275listener("click", function ConsignorNewComponent_Template_button_click_49_listener() {
      return ctx.save();
    });
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Consignor - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c019));
    \u0275\u0275property("options", ctx.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c019));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c019));
    \u0275\u0275property("options", ctx.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(25, _c019));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("companyId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx.form.get("consignorName")) == null ? null : tmp_12_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("consignorName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c019));
    \u0275\u0275property("options", ctx.status);
    \u0275\u0275advance(10);
    \u0275\u0275property("scrollable", true)("value", ctx.consignorArray);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Table, FrozenColumn, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, OverlayPanel, MatError, MatMenuItem, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n/*# sourceMappingURL=consignor-new.component.css.map */"] });
var ConsignorNewComponent = _ConsignorNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignorNewComponent, { className: "ConsignorNewComponent", filePath: "src\\app\\main\\master\\consignor\\consignor-new\\consignor-new.component.ts", lineNumber: 23 });
})();

// src/app/main/master/consignor/consignor.component.ts
var _c020 = ["consignor"];
var _c111 = () => ({ width: "80vw" });
var _c29 = () => ({ "width": "100%" });
var _c39 = () => ({ "width": "100rem" });
function ConsignorComponent_ng_template_56_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function ConsignorComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 37);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsignorComponent_ng_template_56_th_3_Template, 3, 3, "th", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function ConsignorComponent_ng_template_57_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function ConsignorComponent_ng_template_57_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9[col_r8.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsignorComponent_ng_template_57_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsignorComponent_ng_template_57_td_3_ng_container_1_Template, 2, 1, "ng-container", 45)(2, ConsignorComponent_ng_template_57_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function ConsignorComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "p-checkbox", 43);
    \u0275\u0275listener("onChange", function ConsignorComponent_ng_template_57_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsignorComponent_ng_template_57_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedConsignor, $event) || (ctx_r6.selectedConsignor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ConsignorComponent_ng_template_57_td_3_Template, 4, 2, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedConsignor[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedConsignor);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function ConsignorComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 46);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _ConsignorComponent = class _ConsignorComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, fb, auth, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.fb = fb;
    this.auth = auth;
    this.spin = spin;
    this.consignorTable = [];
    this.selectedConsignor = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      subProductId: [],
      subProductValue: [],
      productId: [],
      customerId: [],
      consignorId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      subProductId: "Sub Product",
      subProductValue: "Sub Product Value",
      productId: "Product",
      customerId: "Customer",
      consignorId: "Consignor",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.subProductDropdown = [];
    this.subProductValueDropdown = [];
    this.productDropdown = [];
    this.customerDropdown = [];
    this.consignorDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Consignor"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "consignorId", header: "Consignor ID" },
      { field: "consignorName", header: "Consignor Name" },
      { field: "subProductName", header: "Sub Product" },
      { field: "productName", header: "Product" },
      { field: "customerName", header: "Customer" },
      { field: "statusDescription", header: "Status" },
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
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          res = this.cs.removeDuplicatesFromArrayList(res, "consignorId");
          this.consignorTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
        detail: "Kindly select any row"
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
        detail: "Kindly select any row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
        let obj = {};
        obj.languageId = [this.auth.languageId];
        obj.companyId = [this.auth.companyId];
        obj.consignorId = [this.selectedConsignor[0].consignorId];
        this.service.search(obj).subscribe({
          next: (res) => {
            console.log(res);
            this.deleterecord(res);
          },
          error: (err) => {
            this.spin.hide();
            this.cs.commonerrorNew(err);
          }
        });
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.DeleteBulk(lines).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines[0].consignorId + " Deleted successfully"
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Consignor");
  }
  getSearchDropdown() {
    this.consignorTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.subProductId != null) {
        this.subProductDropdown.push({ value: res.subProductId, label: res.subProductName });
        this.subProductDropdown = this.cs.removeDuplicatesFromArrayList(this.subProductDropdown, "value");
      }
      if (res.subProductValue != null) {
        this.subProductValueDropdown.push({ value: res.subProductValue, label: res.referenceField1 });
        this.subProductValueDropdown = this.cs.removeDuplicatesFromArrayList(this.subProductValueDropdown, "value");
      }
      if (res.productId != null) {
        this.productDropdown.push({ value: res.productId, label: res.productName });
        this.productDropdown = this.cs.removeDuplicatesFromArrayList(this.productDropdown, "value");
      }
      if (res.customerId != null) {
        this.customerDropdown.push({ value: res.customerId, label: res.customerName });
        this.customerDropdown = this.cs.removeDuplicatesFromArrayList(this.customerDropdown, "value");
      }
      if (res.customerId != null) {
        this.customerDropdown.push({ value: res.customerId, label: res.customerName });
        this.customerDropdown = this.cs.removeDuplicatesFromArrayList(this.customerDropdown, "value");
      }
      if (res.consignorId != null) {
        this.consignorDropdown.push({ value: res.consignorId, label: res.consignorName });
        this.consignorDropdown = this.cs.removeDuplicatesFromArrayList(this.consignorDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.consignorTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      subProductId: [],
      subProductValue: [],
      productId: [],
      customerId: [],
      consignorId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_ConsignorComponent.\u0275fac = function ConsignorComponent_Factory(t) {
  return new (t || _ConsignorComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ConsignorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignorComponent, selectors: [["app-consignor"]], viewQuery: function ConsignorComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c020, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 59, vars: 52, consts: [["consignor", ""], ["consignorTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "consignorId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "customerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductValue", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function ConsignorComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Consignor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function ConsignorComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function ConsignorComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function ConsignorComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function ConsignorComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function ConsignorComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function ConsignorComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consignor_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(consignor_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function ConsignorComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consignorTag_r3 = \u0275\u0275reference(55);
      return \u0275\u0275resetView(consignorTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Consignor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "p", 20);
    \u0275\u0275text(30, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19)(33, "p", 20);
    \u0275\u0275text(34, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 19)(37, "p", 20);
    \u0275\u0275text(38, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-multiSelect", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 19)(41, "p", 20);
    \u0275\u0275text(42, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "p-multiSelect", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 27)(45, "div")(46, "img", 28);
    \u0275\u0275listener("click", function ConsignorComponent_Template_img_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div")(48, "button", 29);
    \u0275\u0275listener("click", function ConsignorComponent_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(49, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 30);
    \u0275\u0275listener("click", function ConsignorComponent_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(51, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "p-chips", 31);
    \u0275\u0275listener("onRemove", function ConsignorComponent_Template_p_chips_onRemove_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsignorComponent_Template_p_chips_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 32)(54, "p-table", 33, 1);
    \u0275\u0275template(56, ConsignorComponent_ng_template_56_Template, 4, 2, "ng-template", 34)(57, ConsignorComponent_ng_template_57_Template, 4, 5, "ng-template", 35)(58, ConsignorComponent_ng_template_58_Template, 4, 1, "ng-template", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c111));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c29));
    \u0275\u0275property("options", ctx.consignorDropdown)("panelStyle", \u0275\u0275pureFunction0(40, _c29));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c29));
    \u0275\u0275property("options", ctx.customerDropdown)("panelStyle", \u0275\u0275pureFunction0(42, _c29));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c29));
    \u0275\u0275property("options", ctx.productDropdown)("panelStyle", \u0275\u0275pureFunction0(44, _c29));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c29));
    \u0275\u0275property("options", ctx.subProductDropdown)("panelStyle", \u0275\u0275pureFunction0(46, _c29));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c29));
    \u0275\u0275property("options", ctx.subProductValueDropdown)("panelStyle", \u0275\u0275pureFunction0(48, _c29));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(49, _c29));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(50, _c29));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.consignorTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(51, _c39));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=consignor.component.css.map */"] });
var ConsignorComponent = _ConsignorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignorComponent, { className: "ConsignorComponent", filePath: "src\\app\\main\\master\\consignor\\consignor.component.ts", lineNumber: 21 });
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
var _c021 = () => ({ "width": "100%" });
function CurrencyExchangeRateNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CurrencyExchangeRateNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function CurrencyExchangeRateNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, CurrencyExchangeRateNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, CurrencyExchangeRateNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function CurrencyExchangeRateNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_12_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyExchangeRateNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, CurrencyExchangeRateNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, CurrencyExchangeRateNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "From Currency ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 24);
    \u0275\u0275template(15, CurrencyExchangeRateNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, "To Currency ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 25);
    \u0275\u0275template(20, CurrencyExchangeRateNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "From Currency Desciption");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, CurrencyExchangeRateNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "To Currency Desciption");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, CurrencyExchangeRateNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 23);
    \u0275\u0275text(33, "From Currency Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275template(35, CurrencyExchangeRateNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18)(37, "p", 23);
    \u0275\u0275text(38, "To Currency Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 29);
    \u0275\u0275template(40, CurrencyExchangeRateNewComponent_ng_template_12_mat_error_40_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18)(42, "p", 19);
    \u0275\u0275text(43, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18)(46, "p", 19);
    \u0275\u0275text(47, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "p-dropdown", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 32)(50, "button", 33);
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 34);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_ng_template_12_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_26_0;
    let tmp_28_0;
    let tmp_30_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c021));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(39, _c021));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c021));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(41, _c021));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c021));
    \u0275\u0275property("options", ctx_r2.currencyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(43, _c021))("ngClass", ((tmp_16_0 = ctx_r2.form.get("fromCurrencyId")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("fromCurrencyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c021));
    \u0275\u0275property("options", ctx_r2.currencyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(45, _c021))("ngClass", ((tmp_22_0 = ctx_r2.form.get("toCurrencyId")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("toCurrencyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_24_0 = ctx_r2.form.get("fromCurrencyDescription")) == null ? null : tmp_24_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("toCurrencyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_26_0 = ctx_r2.form.get("toCurrencyDescription")) == null ? null : tmp_26_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("toCurrencyDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_28_0 = ctx_r2.form.get("fromCurrencyValue")) == null ? null : tmp_28_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("fromCurrencyValue"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_30_0 = ctx_r2.form.get("toCurrencyValue")) == null ? null : tmp_30_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("toCurrencyValue"));
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c021));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CurrencyExchangeRateNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 36);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 37);
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
function CurrencyExchangeRateNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "button", 43);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 34);
    \u0275\u0275listener("click", function CurrencyExchangeRateNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function CurrencyExchangeRateNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CurrencyExchangeRateNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, CurrencyExchangeRateNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _CurrencyExchangeRateNewComponent = class _CurrencyExchangeRateNewComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.numberRangeService = numberRangeService;
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
      statusId: ["16"]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.currencyIdList = [];
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
    const dataToSend = ["Master", "Exchange Rate", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.fromCurrencyId.disable();
      this.form.controls.toCurrencyId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["CURRENCYEXCHANGERATE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.fromCurrencyId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.fromCurrencyId.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
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
  return new (t || _CurrencyExchangeRateNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CurrencyExchangeRateService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_CurrencyExchangeRateNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CurrencyExchangeRateNewComponent, selectors: [["app-currency-exchange-rate-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "fromCurrencyId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle", "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "toCurrencyId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle", "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "fromCurrencyDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "toCurrencyDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "num", "formControlName", "fromCurrencyValue", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "num", "formControlName", "toCurrencyValue", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/currencyExchangeRate", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CurrencyExchangeRateNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function CurrencyExchangeRateNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, CurrencyExchangeRateNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, CurrencyExchangeRateNewComponent_ng_template_12_Template, 54, 47, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CurrencyExchangeRateNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Exchange Rate - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=currency-exchange-rate-new.component.css.map */"] });
var CurrencyExchangeRateNewComponent = _CurrencyExchangeRateNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CurrencyExchangeRateNewComponent, { className: "CurrencyExchangeRateNewComponent", filePath: "src\\app\\main\\master\\currency-exchange-rate\\currency-exchange-rate-new\\currency-exchange-rate-new.component.ts", lineNumber: 18 });
})();

// src/app/main/master/currency-exchange-rate/currency-exchange-rate.component.ts
var _c022 = ["currencyExchangeRate"];
var _c112 = () => ({ width: "80vw" });
var _c210 = () => ({ "width": "100%" });
var _c310 = () => ({ "width": "100rem" });
function CurrencyExchangeRateComponent_ng_template_44_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function CurrencyExchangeRateComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 37);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CurrencyExchangeRateComponent_ng_template_44_th_3_Template, 3, 3, "th", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function CurrencyExchangeRateComponent_ng_template_45_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function CurrencyExchangeRateComponent_ng_template_45_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CurrencyExchangeRateComponent_ng_template_45_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CurrencyExchangeRateComponent_ng_template_45_td_3_ng_container_1_Template, 2, 1, "ng-container", 45)(2, CurrencyExchangeRateComponent_ng_template_45_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function CurrencyExchangeRateComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "p-checkbox", 43);
    \u0275\u0275listener("onChange", function CurrencyExchangeRateComponent_ng_template_45_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CurrencyExchangeRateComponent_ng_template_45_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedCurrencyExchangeRate, $event) || (ctx_r6.selectedCurrencyExchangeRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CurrencyExchangeRateComponent_ng_template_45_td_3_Template, 4, 2, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedCurrencyExchangeRate[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedCurrencyExchangeRate);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function CurrencyExchangeRateComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 46);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function CurrencyExchangeRateComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CurrencyExchangeRateComponent = class _CurrencyExchangeRateComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.currencyExchangeRateTable = [];
    this.selectedCurrencyExchangeRate = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      fromCurrencyId: [],
      toCurrencyId: [],
      statusId: []
    });
    this.fieldDisplayNames = {
      fromCurrencyId: "From Currency",
      toCurrencyId: "To Currency",
      statusId: "Status"
    };
    this.fromCurrencyDropdown = [];
    this.toCurrencyDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Exchange Rate"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "fromCurrencyId", header: "From Currency" },
      { field: "toCurrencyId", header: "To Currency" },
      { field: "fromCurrencyValue", header: "From Currency Value" },
      { field: "toCurrencyValue", header: "To Currency Value" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "companyId", header: "Company ID" },
      { field: "statusId", header: "Status ID" },
      { field: "remark", header: "Remark" },
      { field: "languageDescription", header: "Language" },
      { field: "fromCurrencyDescription", header: "From Currency Description" },
      { field: "toCurrencyDescription", header: "To Currency Description" },
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.currencyExchangeRateTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCurrencyExchangeRate[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/currencyExchangeRate-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCurrencyExchangeRate.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedCurrencyExchangeRate, module: "Exchange Rate", body: "This action cannot be undone. All values associated with this field will be lost." }
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Currency Exchange Rate");
  }
  getSearchDropdown() {
    this.currencyExchangeRateTable.forEach((res) => {
      if (res.fromCurrencyId != null) {
        this.fromCurrencyDropdown.push({ value: res.fromCurrencyId, label: res.fromCurrencyDescription });
        this.fromCurrencyDropdown = this.cs.removeDuplicatesFromArrayList(this.fromCurrencyDropdown, "value");
      }
      if (res.toCurrencyId != null) {
        this.toCurrencyDropdown.push({ value: res.toCurrencyId, label: res.toCurrencyDescription });
        this.toCurrencyDropdown = this.cs.removeDuplicatesFromArrayList(this.fromCurrencyDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.currencyExchangeRateTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      fromCurrencyId: [],
      toCurrencyId: [],
      statusId: []
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_CurrencyExchangeRateComponent.\u0275fac = function CurrencyExchangeRateComponent_Factory(t) {
  return new (t || _CurrencyExchangeRateComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CurrencyExchangeRateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CurrencyExchangeRateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CurrencyExchangeRateComponent, selectors: [["app-currency-exchange-rate"]], viewQuery: function CurrencyExchangeRateComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c022, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 50, vars: 34, consts: [["currencyExchangeRate", ""], ["currencyExchangeRateTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "fromCurrencyId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "toCurrencyId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CurrencyExchangeRateComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Exchange Rate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const currencyExchangeRate_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(currencyExchangeRate_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function CurrencyExchangeRateComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const currencyExchangeRateTag_r3 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(currencyExchangeRateTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "From Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "To Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25)(33, "div")(34, "img", 26);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_img_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "button", 27);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 28);
    \u0275\u0275listener("click", function CurrencyExchangeRateComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(39, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "p-chips", 29);
    \u0275\u0275listener("onRemove", function CurrencyExchangeRateComponent_Template_p_chips_onRemove_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CurrencyExchangeRateComponent_Template_p_chips_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 30)(42, "p-table", 31, 1);
    \u0275\u0275template(44, CurrencyExchangeRateComponent_ng_template_44_Template, 4, 2, "ng-template", 32)(45, CurrencyExchangeRateComponent_ng_template_45_Template, 4, 5, "ng-template", 33)(46, CurrencyExchangeRateComponent_ng_template_46_Template, 4, 1, "ng-template", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "mat-menu", 35, 2);
    \u0275\u0275template(49, CurrencyExchangeRateComponent_ng_template_49_Template, 4, 0, "ng-template", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c112));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c210));
    \u0275\u0275property("options", ctx.fromCurrencyDropdown)("panelStyle", \u0275\u0275pureFunction0(28, _c210));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c210));
    \u0275\u0275property("options", ctx.toCurrencyDropdown)("panelStyle", \u0275\u0275pureFunction0(30, _c210));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c210));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c210));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.currencyExchangeRateTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(33, _c310));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=currency-exchange-rate.component.css.map */"] });
var CurrencyExchangeRateComponent = _CurrencyExchangeRateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CurrencyExchangeRateComponent, { className: "CurrencyExchangeRateComponent", filePath: "src\\app\\main\\master\\currency-exchange-rate\\currency-exchange-rate.component.ts", lineNumber: 21 });
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
    return this.http.patch("/overc-idmaster-service/event/" + obj.eventCode + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/event/" + obj.eventCode + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
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
var _c023 = () => ({ "width": "100%" });
function EventNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function EventNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function EventNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function EventNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, EventNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, EventNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function EventNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function EventNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function EventNewComponent_ng_template_12_mat_error_23_Template(rf, ctx) {
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
function EventNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, EventNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, EventNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Op Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 19);
    \u0275\u0275text(17, "Event Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18)(20, "p", 25);
    \u0275\u0275text(21, "Event Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 26);
    \u0275\u0275template(23, EventNewComponent_ng_template_12_mat_error_23_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18)(25, "p", 19);
    \u0275\u0275text(26, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 28)(29, "button", 29);
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 30);
    \u0275\u0275listener("click", function EventNewComponent_ng_template_12_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c023));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(21, _c023));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c023));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c023));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c023));
    \u0275\u0275property("options", ctx_r2.statusCodeList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(25, _c023));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_16_0 = ctx_r2.form.get("eventDescription")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("eventDescription"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function EventNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function EventNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 32);
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
function EventNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 28)(18, "button", 38);
    \u0275\u0275listener("click", function EventNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function EventNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function EventNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, EventNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, EventNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _EventNewComponent = class _EventNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, numberRangeService, auth, cas) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.numberRangeService = numberRangeService;
    this.auth = auth;
    this.cas = cas;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      eventCode: [],
      eventDescription: [, Validators.required],
      statusCode: [],
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
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
      this.form.controls.eventCode.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["EVENT"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.eventCode.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.eventCode.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
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
  return new (t || _EventNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_EventNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventNewComponent, selectors: [["app-event-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusCode", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "eventCode", "pInputText", "", "placeholder", "Enter"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "eventDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/event", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function EventNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function EventNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, EventNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, EventNewComponent_ng_template_12_Template, 33, 26, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, EventNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Event - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=event-new.component.css.map */"] });
var EventNewComponent = _EventNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventNewComponent, { className: "EventNewComponent", filePath: "src\\app\\main\\master\\event\\event-new\\event-new.component.ts", lineNumber: 18 });
})();

// src/app/main/master/event/event.component.ts
var _c024 = ["event"];
var _c113 = () => ({ width: "80vw" });
var _c211 = () => ({ "width": "100%" });
var _c311 = () => ({ "width": "100rem" });
function EventComponent_ng_template_40_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function EventComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EventComponent_ng_template_40_th_3_Template, 3, 3, "th", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function EventComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function EventComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function EventComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, EventComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, EventComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function EventComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41)(2, "p-checkbox", 42);
    \u0275\u0275listener("onChange", function EventComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function EventComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedEvent, $event) || (ctx_r6.selectedEvent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, EventComponent_ng_template_41_td_3_Template, 4, 2, "td", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedEvent[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedEvent);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function EventComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 45);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function EventComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _EventComponent = class _EventComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.eventTable = [];
    this.selectedEvent = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      statusCode: [],
      eventCode: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      eventCode: "Event",
      statusCode: "OP Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.statusCodeDropdown = [];
    this.eventCodeDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Event"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "eventCode", header: "Event ID" },
      { field: "eventDescription", header: "Event Name" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.eventTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedEvent[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/event-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedEvent.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Event");
  }
  getSearchDropdown() {
    this.eventTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.statusCode != null) {
        this.statusCodeDropdown.push({ value: res.statusCode, label: res.opStatusDescription });
        this.statusCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.statusCodeDropdown, "value");
      }
      if (res.eventCode != null) {
        this.eventCodeDropdown.push({ value: res.eventCode, label: res.eventDescription });
        this.eventCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.eventCodeDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.eventTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      statusCode: [],
      eventCode: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_EventComponent.\u0275fac = function EventComponent_Factory(t) {
  return new (t || _EventComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_EventComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventComponent, selectors: [["app-event"]], viewQuery: function EventComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c024, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 46, vars: 28, consts: [["event", ""], ["EventTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "eventCode", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusCode", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function EventComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Event ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function EventComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function EventComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function EventComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function EventComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function EventComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function EventComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const event_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(event_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function EventComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const EventTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(EventTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Event");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "OP Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "div")(30, "img", 25);
    \u0275\u0275listener("click", function EventComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 26);
    \u0275\u0275listener("click", function EventComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275listener("click", function EventComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 28);
    \u0275\u0275listener("onRemove", function EventComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function EventComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "p-table", 30, 1);
    \u0275\u0275template(40, EventComponent_ng_template_40_Template, 4, 2, "ng-template", 31)(41, EventComponent_ng_template_41_Template, 4, 5, "ng-template", 32)(42, EventComponent_ng_template_42_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "mat-menu", 34, 2);
    \u0275\u0275template(45, EventComponent_ng_template_45_Template, 4, 0, "ng-template", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c113));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c211));
    \u0275\u0275property("options", ctx.eventCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c211));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c211));
    \u0275\u0275property("options", ctx.statusCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c211));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.eventTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c311));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=event.component.css.map */"] });
var EventComponent = _EventComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventComponent, { className: "EventComponent", filePath: "src\\app\\main\\master\\event\\event.component.ts", lineNumber: 21 });
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
var _c025 = () => ({ "width": "100%" });
function HsCodeNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function HsCodeNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function HsCodeNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function HsCodeNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, HsCodeNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, HsCodeNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function HsCodeNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function HsCodeNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function HsCodeNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, HsCodeNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, HsCodeNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 19);
    \u0275\u0275text(17, "Item Group");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18)(20, "p", 19);
    \u0275\u0275text(21, "Special Approval");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "p-dropdown", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 18)(24, "p", 19);
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "p-dropdown", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 18)(28, "p", 19);
    \u0275\u0275text(29, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 29)(32, "button", 30);
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 31);
    \u0275\u0275listener("click", function HsCodeNewComponent_ng_template_12_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_16_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c025));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(24, _c025));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c025));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(26, _c025));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("hsCode")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("itemGroup")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r2.form.get("itemGroup")) == null ? null : tmp_13_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c025));
    \u0275\u0275property("options", ctx_r2.specialApprovalIdList)("ngClass", ((tmp_16_0 = ctx_r2.form.get("specialApprovalId")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(28, _c025));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c025));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function HsCodeNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function HsCodeNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 33);
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
function HsCodeNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 29)(18, "button", 40);
    \u0275\u0275listener("click", function HsCodeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function HsCodeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function HsCodeNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, HsCodeNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, HsCodeNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _HsCodeNewComponent = class _HsCodeNewComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.numberRangeService = numberRangeService;
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
      hsCode: [, Validators.required],
      itemCode: [],
      itemDescription: [],
      itemGroup: [],
      specialApprovalId: [],
      specialApprovalText: [],
      statusId: ["16"],
      statusDescription: [],
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
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["HSCODE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.hsCode.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.hsCode.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
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
  return new (t || _HsCodeNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HsCodeService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_HsCodeNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HsCodeNewComponent, selectors: [["app-hs-code-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "num", "formControlName", "hsCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "itemGroup", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "specialApprovalId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/hsCode", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function HsCodeNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function HsCodeNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, HsCodeNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, HsCodeNewComponent_ng_template_12_Template, 36, 30, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, HsCodeNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("HS Code - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=hs-code-new.component.css.map */"] });
var HsCodeNewComponent = _HsCodeNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HsCodeNewComponent, { className: "HsCodeNewComponent", filePath: "src\\app\\main\\master\\hs-code\\hs-code-new\\hs-code-new.component.ts", lineNumber: 18 });
})();

// src/app/main/master/hs-code/hs-code.component.ts
var _c026 = ["hsCode"];
var _c114 = () => ({ width: "80vw" });
var _c212 = () => ({ "width": "100%" });
var _c312 = () => ({ "width": "100rem" });
function HsCodeComponent_ng_template_40_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function HsCodeComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 33);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HsCodeComponent_ng_template_40_th_3_Template, 3, 3, "th", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function HsCodeComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function HsCodeComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9[col_r8.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function HsCodeComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, HsCodeComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 41)(2, HsCodeComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function HsCodeComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 38)(2, "p-checkbox", 39);
    \u0275\u0275listener("onChange", function HsCodeComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HsCodeComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedHsCode, $event) || (ctx_r6.selectedHsCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, HsCodeComponent_ng_template_41_td_3_Template, 4, 2, "td", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedHsCode[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedHsCode);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function HsCodeComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 42);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _HsCodeComponent = class _HsCodeComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.hsCodeTable = [];
    this.selectedHsCode = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      hsCode: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      hsCode: "HS Code",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.hsCodeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "HS Code"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "hsCode", header: "HS Code" },
      { field: "itemGroup", header: "Item Group" },
      { field: "specialApprovalText", header: "Special Approval" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remarks" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "itemCode", header: "Item Code" },
      { field: "itemDescription", header: "Item Description" },
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "specialApprovalId", header: "Special Approval ID" },
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.hsCodeTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
        detail: "Kindly select any row"
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
        detail: "Kindly select any row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "HS Code");
  }
  getSearchDropdown() {
    this.hsCodeTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.hsCode != null) {
        this.hsCodeDropdown.push({ value: res.hsCode, label: res.hsCode });
        this.hsCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.hsCodeDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.hsCodeTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      hsCode: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_HsCodeComponent.\u0275fac = function HsCodeComponent_Factory(t) {
  return new (t || _HsCodeComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(HsCodeService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_HsCodeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HsCodeComponent, selectors: [["app-hs-code"]], viewQuery: function HsCodeComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c026, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 43, vars: 28, consts: [["hsCode", ""], ["hsCodeTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "hsCode", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function HsCodeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "HS Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function HsCodeComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function HsCodeComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function HsCodeComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function HsCodeComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function HsCodeComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function HsCodeComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const hsCode_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(hsCode_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function HsCodeComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const hsCodeTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(hsCodeTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 23)(29, "div")(30, "img", 24);
    \u0275\u0275listener("click", function HsCodeComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 25);
    \u0275\u0275listener("click", function HsCodeComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 26);
    \u0275\u0275listener("click", function HsCodeComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 27);
    \u0275\u0275listener("onRemove", function HsCodeComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function HsCodeComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 28)(38, "p-table", 29, 1);
    \u0275\u0275template(40, HsCodeComponent_ng_template_40_Template, 4, 2, "ng-template", 30)(41, HsCodeComponent_ng_template_41_Template, 4, 5, "ng-template", 31)(42, HsCodeComponent_ng_template_42_Template, 4, 1, "ng-template", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c114));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c212));
    \u0275\u0275property("options", ctx.hsCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c212));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c212));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c212));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.hsCodeTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c312));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=hs-code.component.css.map */"] });
var HsCodeComponent = _HsCodeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HsCodeComponent, { className: "HsCodeComponent", filePath: "src\\app\\main\\master\\hs-code\\hs-code.component.ts", lineNumber: 21 });
})();

// src/app/main/master/iata/iata-new/iata-new.component.ts
var _c027 = () => ({ "width": "100%" });
function IataNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function IataNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function IataNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function IataNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, IataNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, IataNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function IataNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 35)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function IataNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, IataNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, IataNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275template(15, IataNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25)(17, "p", 23);
    \u0275\u0275text(18, "Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 26);
    \u0275\u0275template(20, IataNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "IATA Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 27);
    \u0275\u0275template(25, IataNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "IATA Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 28);
    \u0275\u0275template(30, IataNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 23);
    \u0275\u0275text(33, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-dropdown", 29);
    \u0275\u0275template(35, IataNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18)(37, "p", 19);
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-dropdown", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 18)(41, "p", 19);
    \u0275\u0275text(42, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 32)(45, "button", 33);
    \u0275\u0275text(46, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 34);
    \u0275\u0275listener("click", function IataNewComponent_ng_template_12_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_16_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_26_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c027));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(37, _c027));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c027));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(39, _c027));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("origin")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("origin"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c027));
    \u0275\u0275property("options", ctx_r2.countryIdList)("ngClass", ((tmp_16_0 = ctx_r2.form.get("originCode")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(41, _c027));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("originCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("iataKd")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("iataKd"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_22_0 = ctx_r2.form.get("iataCharge")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("iataCharge"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c027));
    \u0275\u0275property("options", ctx_r2.currencyIdList)("ngClass", ((tmp_26_0 = ctx_r2.form.get("currencyId")) == null ? null : tmp_26_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(43, _c027));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("currencyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c027));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function IataNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function IataNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 36);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 37);
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
function IataNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "button", 43);
    \u0275\u0275listener("click", function IataNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 34);
    \u0275\u0275listener("click", function IataNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function IataNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, IataNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, IataNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _IataNewComponent = class _IataNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, numberRangeService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.numberRangeService = numberRangeService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      originCode: [, Validators.required],
      origin: [, Validators.required],
      iataKd: [, Validators.required],
      iataCharge: [, Validators.required],
      currencyId: [, Validators.required],
      currencyDescription: [],
      statusId: ["16"],
      statusDescription: [],
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
    this.countryIdList = [];
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
    const dataToSend = ["Master", "IATA", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["ORIGINCODE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.originCode.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.originCode.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.currency.url,
      this.cas.dropdownlist.setup.country.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.currencyIdList = this.cas.foreachlist(results[2], this.cas.dropdownlist.setup.currency.key);
        this.countryIdList = this.cas.foreachlist(results[3], this.cas.dropdownlist.setup.country.key);
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
  return new (t || _IataNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(IataService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_IataNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IataNewComponent, selectors: [["app-iata-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "origin", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "originCode", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "originCode", "appendTo", "body", "placeholder", "Select", 3, "options", "ngClass", "disabled", "panelStyle"], ["formControlName", "iataKd", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["formControlName", "iataCharge", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "currencyId", "appendTo", "body", 3, "options", "ngClass", "disabled", "panelStyle"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/iata", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function IataNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function IataNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, IataNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, IataNewComponent_ng_template_12_Template, 49, 45, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, IataNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("IATA - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=iata-new.component.css.map */"] });
var IataNewComponent = _IataNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IataNewComponent, { className: "IataNewComponent", filePath: "src\\app\\main\\master\\iata\\iata-new\\iata-new.component.ts", lineNumber: 19 });
})();

// src/app/main/master/iata/iata.component.ts
var _c028 = ["iata"];
var _c115 = () => ({ width: "80vw" });
var _c213 = () => ({ "width": "100%" });
var _c313 = () => ({ "width": "100rem" });
function IataComponent_ng_template_44_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function IataComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 37);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, IataComponent_ng_template_44_th_3_Template, 3, 3, "th", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function IataComponent_ng_template_45_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function IataComponent_ng_template_45_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function IataComponent_ng_template_45_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, IataComponent_ng_template_45_td_3_ng_container_1_Template, 2, 1, "ng-container", 45)(2, IataComponent_ng_template_45_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function IataComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "p-checkbox", 43);
    \u0275\u0275listener("onChange", function IataComponent_ng_template_45_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function IataComponent_ng_template_45_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedIata, $event) || (ctx_r6.selectedIata = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, IataComponent_ng_template_45_td_3_Template, 4, 2, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedIata[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedIata);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function IataComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 46);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function IataComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _IataComponent = class _IataComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, fb, auth, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.fb = fb;
    this.auth = auth;
    this.spin = spin;
    this.iataTable = [];
    this.selectedIata = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      originCode: [],
      origin: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      originCode: "Origin Code",
      origin: "Origin",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.statusDropdown = [];
    this.originCodeDropdown = [];
    this.originDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "IATA"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "origin", header: "Origin" },
      { field: "iataKd", header: "IATA Value " },
      { field: "iataCharge", header: "IATA Charge" },
      { field: "currencyDescription", header: "Currency" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language Description" },
      { field: "companyId", header: "Company ID" },
      { field: "country", header: "Origin Code" },
      { field: "currencyId", header: "Currency ID" },
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.iataTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedIata[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/iata-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedIata.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Iata");
  }
  getSearchDropdown() {
    this.iataTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.originCode != null) {
        this.originCodeDropdown.push({ value: res.originCode, label: res.originCode });
        this.originCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.originCodeDropdown, "value");
      }
      if (res.origin != null) {
        this.originDropdown.push({ value: res.origin, label: res.origin });
        this.originDropdown = this.cs.removeDuplicatesFromArrayList(this.originDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.iataTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      originCode: [],
      origin: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_IataComponent.\u0275fac = function IataComponent_Factory(t) {
  return new (t || _IataComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(IataService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_IataComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IataComponent, selectors: [["app-iata"]], viewQuery: function IataComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c028, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 50, vars: 34, consts: [["iata", ""], ["iataTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "originCode", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "origin", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function IataComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "IATA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function IataComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function IataComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function IataComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function IataComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function IataComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function IataComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const iata_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(iata_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function IataComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const iataTag_r3 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(iataTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25)(33, "div")(34, "img", 26);
    \u0275\u0275listener("click", function IataComponent_Template_img_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "button", 27);
    \u0275\u0275listener("click", function IataComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 28);
    \u0275\u0275listener("click", function IataComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(39, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "p-chips", 29);
    \u0275\u0275listener("onRemove", function IataComponent_Template_p_chips_onRemove_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function IataComponent_Template_p_chips_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 30)(42, "p-table", 31, 1);
    \u0275\u0275template(44, IataComponent_ng_template_44_Template, 4, 2, "ng-template", 32)(45, IataComponent_ng_template_45_Template, 4, 5, "ng-template", 33)(46, IataComponent_ng_template_46_Template, 4, 1, "ng-template", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "mat-menu", 35, 2);
    \u0275\u0275template(49, IataComponent_ng_template_49_Template, 4, 0, "ng-template", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c115));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c213));
    \u0275\u0275property("options", ctx.originCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(28, _c213));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c213));
    \u0275\u0275property("options", ctx.originDropdown)("panelStyle", \u0275\u0275pureFunction0(30, _c213));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c213));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c213));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.iataTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(33, _c313));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=iata.component.css.map */"] });
var IataComponent = _IataComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IataComponent, { className: "IataComponent", filePath: "src\\app\\main\\master\\iata\\iata.component.ts", lineNumber: 21 });
})();

// src/app/main/master/numberrange/numberrange-new/numberrange-new.component.ts
var _c029 = () => ({ "width": "100%" });
function NumberrangeNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function NumberrangeNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function NumberrangeNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function NumberrangeNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, NumberrangeNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, NumberrangeNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function NumberrangeNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function NumberrangeNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function NumberrangeNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
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
function NumberrangeNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
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
function NumberrangeNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
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
function NumberrangeNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
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
function NumberrangeNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
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
function NumberrangeNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, NumberrangeNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 22);
    \u0275\u0275text(8, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 23);
    \u0275\u0275template(10, NumberrangeNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 22);
    \u0275\u0275text(13, "Process");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275template(15, NumberrangeNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 22);
    \u0275\u0275text(18, "From Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, NumberrangeNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 22);
    \u0275\u0275text(23, "To Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, NumberrangeNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 22);
    \u0275\u0275text(28, "Current Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, NumberrangeNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 22);
    \u0275\u0275text(33, "Number Range Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-dropdown", 28);
    \u0275\u0275template(35, NumberrangeNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 29)(37, "button", 30);
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 31);
    \u0275\u0275listener("click", function NumberrangeNewComponent_ng_template_12_Template_button_click_39_listener() {
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
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c029));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c029));
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
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c029));
    \u0275\u0275property("options", ctx_r2.status)("ngClass", ((tmp_19_0 = ctx_r2.form.get("numberRangeStatus")) == null ? null : tmp_19_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("numberRangeStatus"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function NumberrangeNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function NumberrangeNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 33);
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
function NumberrangeNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 29)(18, "button", 40);
    \u0275\u0275listener("click", function NumberrangeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function NumberrangeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function NumberrangeNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, NumberrangeNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, NumberrangeNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
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
      numberRangeStatus: ["16"],
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
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
    const dataToSend = ["Master", "Number Series", this.pageToken.pageflow];
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
_NumberrangeNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NumberrangeNewComponent, selectors: [["app-numberrange-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "formControlName", "numberRangeCode", "pInputText", "", "pKeyFilter", "num", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "formControlName", "numberRangeObject", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "formControlName", "numberRangeFrom", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "formControlName", "numberRangeTo", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "formControlName", "numberRangeCurrent", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "numberRangeStatus", "placeholder", "Select", "filter", "true", 3, "options", "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/numberrange", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function NumberrangeNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function NumberrangeNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, NumberrangeNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, NumberrangeNewComponent_ng_template_12_Template, 41, 25, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, NumberrangeNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Number Series - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
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
var _c030 = ["numberRange"];
var _c116 = () => ({ width: "80vw" });
var _c214 = () => ({ "width": "100%" });
var _c314 = () => ({ "width": "100rem" });
function NumberrangeComponent_ng_template_44_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function NumberrangeComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 37);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NumberrangeComponent_ng_template_44_th_3_Template, 3, 3, "th", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function NumberrangeComponent_ng_template_45_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function NumberrangeComponent_ng_template_45_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function NumberrangeComponent_ng_template_45_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, NumberrangeComponent_ng_template_45_td_3_ng_container_1_Template, 2, 1, "ng-container", 45)(2, NumberrangeComponent_ng_template_45_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function NumberrangeComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "p-checkbox", 43);
    \u0275\u0275listener("onChange", function NumberrangeComponent_ng_template_45_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function NumberrangeComponent_ng_template_45_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedNumberRange, $event) || (ctx_r6.selectedNumberRange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, NumberrangeComponent_ng_template_45_td_3_Template, 4, 2, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedNumberRange[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedNumberRange);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function NumberrangeComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 46);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function NumberrangeComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _NumberrangeComponent = class _NumberrangeComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.numberRangeTable = [];
    this.selectedNumberRange = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      numberRangeCode: [],
      numberRangeObject: [],
      statusId: [],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      numberRangeCode: "ID",
      numberRangeObject: "Process/Master",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.numberRangeCodeDropdown = [];
    this.numberRangeObjectDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Number Series"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "numberRangeCode", header: "ID" },
      { field: "numberRangeObject", header: "Process/Master" },
      { field: "numberRangeFrom", header: "From Number" },
      { field: "numberRangeTo", header: "To Number" },
      { field: "numberRangeCurrent", header: "Current Number" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "numberRangeStatus", header: "Number Range Status" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.numberRangeTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedNumberRange[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/numberrange-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedNumberRange.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedNumberRange, module: "Number Series", body: "This action cannot be undone. All values associated with this field will be lost." }
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Number Series");
  }
  getSearchDropdown() {
    this.numberRangeTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.numberRangeCode != null) {
        this.numberRangeCodeDropdown.push({ value: res.numberRangeCode, label: res.numberRangeCode });
        this.numberRangeCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.numberRangeCodeDropdown, "value");
      }
      if (res.numberRangeObject != null) {
        this.numberRangeObjectDropdown.push({ value: res.numberRangeObject, label: res.numberRangeObject });
        this.numberRangeObjectDropdown = this.cs.removeDuplicatesFromArrayList(this.numberRangeObjectDropdown, "value");
      }
      if (res.numberRangeStatus != null) {
        this.statusDropdown.push({ value: res.numberRangeStatus, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.numberRangeTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      numberRangeCode: [],
      numberRangeObject: [],
      statusId: [],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_NumberrangeComponent.\u0275fac = function NumberrangeComponent_Factory(t) {
  return new (t || _NumberrangeComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_NumberrangeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NumberrangeComponent, selectors: [["app-numberrange"]], viewQuery: function NumberrangeComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c030, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 50, vars: 34, consts: [["numberRange", ""], ["numberRangeTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "numberRangeObject", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "numberRangeCode", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function NumberrangeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Number Series ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const numberRange_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(numberRange_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function NumberrangeComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const numberRangeTag_r3 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(numberRangeTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Process/Master");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25)(33, "div")(34, "img", 26);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_img_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "button", 27);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 28);
    \u0275\u0275listener("click", function NumberrangeComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(39, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "p-chips", 29);
    \u0275\u0275listener("onRemove", function NumberrangeComponent_Template_p_chips_onRemove_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function NumberrangeComponent_Template_p_chips_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 30)(42, "p-table", 31, 1);
    \u0275\u0275template(44, NumberrangeComponent_ng_template_44_Template, 4, 2, "ng-template", 32)(45, NumberrangeComponent_ng_template_45_Template, 4, 5, "ng-template", 33)(46, NumberrangeComponent_ng_template_46_Template, 4, 1, "ng-template", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "mat-menu", 35, 2);
    \u0275\u0275template(49, NumberrangeComponent_ng_template_49_Template, 4, 0, "ng-template", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c116));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c214));
    \u0275\u0275property("options", ctx.numberRangeObjectDropdown)("panelStyle", \u0275\u0275pureFunction0(28, _c214));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c214));
    \u0275\u0275property("options", ctx.numberRangeCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(30, _c214));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c214));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c214));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.numberRangeTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(33, _c314));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=numberrange.component.css.map */"] });
var NumberrangeComponent = _NumberrangeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NumberrangeComponent, { className: "NumberrangeComponent", filePath: "src\\app\\main\\master\\numberrange\\numberrange.component.ts", lineNumber: 22 });
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
var _c031 = () => ({ "width": "100%" });
function OpstatusNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function OpstatusNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function OpstatusNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function OpstatusNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, OpstatusNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, OpstatusNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function OpstatusNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function OpstatusNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function OpstatusNewComponent_ng_template_12_mat_error_19_Template(rf, ctx) {
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
function OpstatusNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, OpstatusNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, OpstatusNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Op Status Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 24);
    \u0275\u0275text(17, "Op Status Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275template(19, OpstatusNewComponent_ng_template_12_mat_error_19_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "p", 19);
    \u0275\u0275text(22, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 27)(25, "button", 28);
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 29);
    \u0275\u0275listener("click", function OpstatusNewComponent_ng_template_12_Template_button_click_27_listener() {
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
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(16, _c031));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(17, _c031));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c031));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(19, _c031));
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
function OpstatusNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function OpstatusNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 31);
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
function OpstatusNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 27)(18, "button", 38);
    \u0275\u0275listener("click", function OpstatusNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 29);
    \u0275\u0275listener("click", function OpstatusNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function OpstatusNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, OpstatusNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, OpstatusNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _OpstatusNewComponent = class _OpstatusNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, numberRangeService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.numberRangeService = numberRangeService;
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
      this.form.controls.statusCode.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["OPSTATUS"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.statusCode.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.statusCode.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
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
  return new (t || _OpstatusNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(OpstatusService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_OpstatusNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpstatusNewComponent, selectors: [["app-opstatus-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["formControlName", "statusCode", "maxlength", "50", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "opStatusDescription", "maxlength", "100", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/opstatus", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function OpstatusNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function OpstatusNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, OpstatusNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, OpstatusNewComponent_ng_template_12_Template, 29, 20, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, OpstatusNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Op Status - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=opstatus-new.component.css.map */"] });
var OpstatusNewComponent = _OpstatusNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpstatusNewComponent, { className: "OpstatusNewComponent", filePath: "src\\app\\main\\master\\opstatus\\opstatus-new\\opstatus-new.component.ts", lineNumber: 18 });
})();

// src/app/main/master/opstatus/opstatus.component.ts
var _c032 = ["opstatus"];
var _c117 = () => ({ width: "80vw" });
var _c215 = () => ({ "width": "100%" });
var _c315 = () => ({ "width": "100rem" });
function OpstatusComponent_ng_template_36_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function OpstatusComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 35);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OpstatusComponent_ng_template_36_th_3_Template, 3, 3, "th", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function OpstatusComponent_ng_template_37_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function OpstatusComponent_ng_template_37_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function OpstatusComponent_ng_template_37_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, OpstatusComponent_ng_template_37_td_3_ng_container_1_Template, 2, 1, "ng-container", 43)(2, OpstatusComponent_ng_template_37_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function OpstatusComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40)(2, "p-checkbox", 41);
    \u0275\u0275listener("onChange", function OpstatusComponent_ng_template_37_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function OpstatusComponent_ng_template_37_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedOpstatus, $event) || (ctx_r6.selectedOpstatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, OpstatusComponent_ng_template_37_td_3_Template, 4, 2, "td", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedOpstatus[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedOpstatus);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function OpstatusComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 44);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function OpstatusComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _OpstatusComponent = class _OpstatusComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.opstatusTable = [];
    this.selectedOpstatus = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      statusCode: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      statusCode: "OP Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.statusCodeDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Op Status"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "statusCode", header: "Op Status Code" },
      { field: "opStatusDescription", header: "Op Status Description" },
      { field: "remark", header: "Remarks" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "companyId", header: "Company ID" },
      { field: "languageId", header: "Language ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.opstatusTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedOpstatus[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/opstatus-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedOpstatus.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.statusCode + " deleted successfully" });
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "OpStatus");
  }
  getSearchDropdown() {
    this.opstatusTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.statusCode != null) {
        this.statusCodeDropdown.push({ value: res.statusCode, label: res.opStatusDescription });
        this.statusCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.statusCodeDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.opstatusTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      statusCode: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_OpstatusComponent.\u0275fac = function OpstatusComponent_Factory(t) {
  return new (t || _OpstatusComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(OpstatusService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_OpstatusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpstatusComponent, selectors: [["app-opstatus"]], viewQuery: function OpstatusComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c032, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 42, vars: 22, consts: [["opstatus", ""], ["opstatusTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "statusCode", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function OpstatusComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Op Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function OpstatusComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function OpstatusComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function OpstatusComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function OpstatusComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function OpstatusComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function OpstatusComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const opstatus_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(opstatus_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function OpstatusComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const opstatusTag_r3 = \u0275\u0275reference(35);
      return \u0275\u0275resetView(opstatusTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "OP Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23)(25, "div")(26, "img", 24);
    \u0275\u0275listener("click", function OpstatusComponent_Template_img_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "button", 25);
    \u0275\u0275listener("click", function OpstatusComponent_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(29, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 26);
    \u0275\u0275listener("click", function OpstatusComponent_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(31, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "p-chips", 27);
    \u0275\u0275listener("onRemove", function OpstatusComponent_Template_p_chips_onRemove_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function OpstatusComponent_Template_p_chips_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 28)(34, "p-table", 29, 1);
    \u0275\u0275template(36, OpstatusComponent_ng_template_36_Template, 4, 2, "ng-template", 30)(37, OpstatusComponent_ng_template_37_Template, 4, 5, "ng-template", 31)(38, OpstatusComponent_ng_template_38_Template, 4, 1, "ng-template", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "mat-menu", 33, 2);
    \u0275\u0275template(41, OpstatusComponent_ng_template_41_Template, 4, 0, "ng-template", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c117));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c215));
    \u0275\u0275property("options", ctx.statusCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(20, _c215));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.opstatusTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(21, _c315));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=opstatus.component.css.map */"] });
var OpstatusComponent = _OpstatusComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpstatusComponent, { className: "OpstatusComponent", filePath: "src\\app\\main\\master\\opstatus\\opstatus.component.ts", lineNumber: 22 });
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
var _c033 = () => ({ "width": "100%" });
function SpecialApprovalNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function SpecialApprovalNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function SpecialApprovalNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, SpecialApprovalNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, SpecialApprovalNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function SpecialApprovalNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function SpecialApprovalNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function SpecialApprovalNewComponent_ng_template_12_mat_error_19_Template(rf, ctx) {
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
function SpecialApprovalNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, SpecialApprovalNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, SpecialApprovalNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Special Approval ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 24);
    \u0275\u0275text(17, "Special Approval Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275template(19, SpecialApprovalNewComponent_ng_template_12_mat_error_19_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "p", 19);
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-dropdown", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18)(25, "p", 19);
    \u0275\u0275text(26, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 28)(29, "button", 29);
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 30);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_ng_template_12_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c033));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(19, _c033));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c033));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(21, _c033));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("specialApprovalText")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("specialApprovalText"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c033));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function SpecialApprovalNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 32);
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
function SpecialApprovalNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 28)(18, "button", 38);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function SpecialApprovalNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function SpecialApprovalNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, SpecialApprovalNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, SpecialApprovalNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _SpecialApprovalNewComponent = class _SpecialApprovalNewComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.numberRangeService = numberRangeService;
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
      specialApprovalId: [],
      specialApprovalText: [, Validators.required],
      statusId: ["16"],
      statusDescription: [],
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
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["SPECIALAPPROVAL"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.specialApprovalId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.specialApprovalId.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
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
  return new (t || _SpecialApprovalNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SpecialApprovalService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_SpecialApprovalNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialApprovalNewComponent, selectors: [["app-special-approval-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "specialApprovalId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "specialApprovalText", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/specialApproval", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function SpecialApprovalNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function SpecialApprovalNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, SpecialApprovalNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, SpecialApprovalNewComponent_ng_template_12_Template, 33, 23, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SpecialApprovalNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Special Approval - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=special-approval-new.component.css.map */"] });
var SpecialApprovalNewComponent = _SpecialApprovalNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialApprovalNewComponent, { className: "SpecialApprovalNewComponent", filePath: "src\\app\\main\\master\\special-approval\\special-approval-new\\special-approval-new.component.ts", lineNumber: 18 });
})();

// src/app/main/master/special-approval/special-approval.component.ts
var _c034 = ["specialApproval"];
var _c118 = () => ({ width: "80vw" });
var _c216 = () => ({ "width": "100%" });
var _c316 = () => ({ "width": "100rem" });
function SpecialApprovalComponent_ng_template_40_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function SpecialApprovalComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 33);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SpecialApprovalComponent_ng_template_40_th_3_Template, 3, 3, "th", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function SpecialApprovalComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function SpecialApprovalComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9[col_r8.field], "dd-MM-yyyy HH:mm"), " ");
  }
}
function SpecialApprovalComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, SpecialApprovalComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 41)(2, SpecialApprovalComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function SpecialApprovalComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 38)(2, "p-checkbox", 39);
    \u0275\u0275listener("onChange", function SpecialApprovalComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function SpecialApprovalComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedSpecialApproval, $event) || (ctx_r6.selectedSpecialApproval = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SpecialApprovalComponent_ng_template_41_td_3_Template, 4, 2, "td", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedSpecialApproval[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedSpecialApproval);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function SpecialApprovalComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 42);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
var _SpecialApprovalComponent = class _SpecialApprovalComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.specialApprovalTable = [];
    this.selectedSpecialApproval = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      specialApprovalId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      specialApprovalId: "Special Approval",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.specialApprovalDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Special Approval"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "specialApprovalId", header: "Special Approval ID" },
      { field: "specialApprovalText", header: "Special Approval Name" },
      { field: "remark", header: "Remarks" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.specialApprovalTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
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
        detail: "Kindly select any row"
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
        detail: "Kindly select any row"
      });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Special Approval");
  }
  getSearchDropdown() {
    this.specialApprovalTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.specialApprovalId != null) {
        this.specialApprovalDropdown.push({ value: res.specialApprovalId, label: res.specialApprovalText });
        this.specialApprovalDropdown = this.cs.removeDuplicatesFromArrayList(this.specialApprovalDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.specialApprovalTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      specialApprovalId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_SpecialApprovalComponent.\u0275fac = function SpecialApprovalComponent_Factory(t) {
  return new (t || _SpecialApprovalComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(SpecialApprovalService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_SpecialApprovalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialApprovalComponent, selectors: [["app-special-approval"]], viewQuery: function SpecialApprovalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c034, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 43, vars: 28, consts: [["specialApproval", ""], ["specialApprovalTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "specialApprovald", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function SpecialApprovalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Special Approval ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const specialApproval_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(specialApproval_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function SpecialApprovalComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const specialApprovalTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(specialApprovalTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Special Approval");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 23)(29, "div")(30, "img", 24);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 25);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 26);
    \u0275\u0275listener("click", function SpecialApprovalComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 27);
    \u0275\u0275listener("onRemove", function SpecialApprovalComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function SpecialApprovalComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 28)(38, "p-table", 29, 1);
    \u0275\u0275template(40, SpecialApprovalComponent_ng_template_40_Template, 4, 2, "ng-template", 30)(41, SpecialApprovalComponent_ng_template_41_Template, 4, 5, "ng-template", 31)(42, SpecialApprovalComponent_ng_template_42_Template, 4, 1, "ng-template", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c118));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c216));
    \u0275\u0275property("options", ctx.specialApprovalDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c216));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c216));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c216));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.specialApprovalTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c316));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=special-approval.component.css.map */"] });
var SpecialApprovalComponent = _SpecialApprovalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialApprovalComponent, { className: "SpecialApprovalComponent", filePath: "src\\app\\main\\master\\special-approval\\special-approval.component.ts", lineNumber: 21 });
})();

// src/app/main/master/airport-code/airport-code.service.ts
var _AirportCodeService = class _AirportCodeService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(airportCode) {
    return this.http.get("/overc-idmaster-service/airportCode/" + airportCode);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/airportCode", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/airportCode/" + obj.airportCode + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/airportCode/" + obj.airportCode + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/airportCode/find", obj);
  }
};
_AirportCodeService.\u0275fac = function AirportCodeService_Factory(t) {
  return new (t || _AirportCodeService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_AirportCodeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AirportCodeService, factory: _AirportCodeService.\u0275fac, providedIn: "root" });
var AirportCodeService = _AirportCodeService;

// src/app/main/master/airport-code/airport-code.component.ts
var _c035 = ["airportCode"];
var _c119 = () => ({ width: "80vw" });
var _c217 = () => ({ "width": "100%" });
var _c317 = () => ({ "width": "100rem" });
function AirportCodeComponent_ng_template_40_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r4.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r4.field);
  }
}
function AirportCodeComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AirportCodeComponent_ng_template_40_th_3_Template, 3, 3, "th", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function AirportCodeComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r9[col_r8.field], " ");
  }
}
function AirportCodeComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function AirportCodeComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, AirportCodeComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, AirportCodeComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function AirportCodeComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41)(2, "p-checkbox", 42);
    \u0275\u0275listener("onChange", function AirportCodeComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function AirportCodeComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedAirportCode, $event) || (ctx_r6.selectedAirportCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, AirportCodeComponent_ng_template_41_td_3_Template, 4, 2, "td", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedAirportCode[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedAirportCode);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function AirportCodeComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 45);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function AirportCodeComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _AirportCodeComponent = class _AirportCodeComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.fb = fb;
    this.spin = spin;
    this.airportCodeTable = [];
    this.selectedAirportCode = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      airportCode: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      airportCode: "Airport Code",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.airportCodeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Airport Code"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "airportCode", header: "Airport Code" },
      { field: "airportText", header: "Airport Name" },
      { field: "countryName", header: "Country" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "companyId", header: "Company ID" },
      { field: "countryId", header: "Country ID" },
      { field: "languageDescription", header: "Language" },
      { field: "statusId", header: "Status ID" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
          this.airportCodeTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 1e3);
  }
  onChange() {
    const choosen = this.selectedAirportCode[this.selectedAirportCode.length - 1];
    this.selectedAirportCode.length = 0;
    this.selectedAirportCode.push(choosen);
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
        this.deleterecord(this.selectedAirportCode[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedAirportCode.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedAirportCode[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/airportCode-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedAirportCode.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedAirportCode, module: "Airport Code", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedAirportCode[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.airportCode + " deleted successfully" });
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
    const exportData = this.airportCodeTable.map((item) => {
      const exportItem = {};
      this.cols.forEach((col) => {
        if (col.format == "date") {
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Airport Code");
  }
  getSearchDropdown() {
    this.airportCodeTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.airportCode != null) {
        this.airportCodeDropdown.push({ value: res.airportCode, label: res.airportText });
        this.airportCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.airportCodeDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.airportCodeTable = res;
        this.spin.hide();
        this.overlayPanel.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  reset() {
    this.searchform.reset();
    this.searchform = this.fb.group({
      airportCode: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
};
_AirportCodeComponent.\u0275fac = function AirportCodeComponent_Factory(t) {
  return new (t || _AirportCodeComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(AirportCodeService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_AirportCodeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AirportCodeComponent, selectors: [["app-airport-code"]], viewQuery: function AirportCodeComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c035, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 46, vars: 28, consts: [["airportCode", ""], ["airportCodeTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "airportCode", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function AirportCodeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Airport Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function AirportCodeComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function AirportCodeComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function AirportCodeComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function AirportCodeComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function AirportCodeComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function AirportCodeComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const airportCode_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(airportCode_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function AirportCodeComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const airportCodeTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(airportCodeTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Airport Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "div")(30, "img", 25);
    \u0275\u0275listener("click", function AirportCodeComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 26);
    \u0275\u0275listener("click", function AirportCodeComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275listener("click", function AirportCodeComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 28);
    \u0275\u0275listener("onRemove", function AirportCodeComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function AirportCodeComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "p-table", 30, 1);
    \u0275\u0275template(40, AirportCodeComponent_ng_template_40_Template, 4, 2, "ng-template", 31)(41, AirportCodeComponent_ng_template_41_Template, 4, 5, "ng-template", 32)(42, AirportCodeComponent_ng_template_42_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "mat-menu", 34, 2);
    \u0275\u0275template(45, AirportCodeComponent_ng_template_45_Template, 4, 0, "ng-template", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c119));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c217));
    \u0275\u0275property("options", ctx.airportCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c217));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c217));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c217));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.airportCodeTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c317));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=airport-code.component.css.map */"] });
var AirportCodeComponent = _AirportCodeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AirportCodeComponent, { className: "AirportCodeComponent", filePath: "src\\app\\main\\master\\airport-code\\airport-code.component.ts", lineNumber: 21 });
})();

// src/app/main/master/airport-code/airport-code-new/airport-code-new.component.ts
var _c036 = () => ({ "width": "100%" });
function AirportCodeNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function AirportCodeNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function AirportCodeNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function AirportCodeNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, AirportCodeNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, AirportCodeNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
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
function AirportCodeNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function AirportCodeNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function AirportCodeNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
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
function AirportCodeNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
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
function AirportCodeNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
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
function AirportCodeNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, AirportCodeNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, AirportCodeNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, AirportCodeNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 24);
    \u0275\u0275text(18, "Airport Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, AirportCodeNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 24);
    \u0275\u0275text(23, "Airport Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, AirportCodeNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 19);
    \u0275\u0275text(28, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "p-dropdown", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 18)(31, "p", 19);
    \u0275\u0275text(32, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 29)(35, "button", 30);
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 31);
    \u0275\u0275listener("click", function AirportCodeNewComponent_ng_template_12_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_17_0;
    let tmp_19_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c036));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(27, _c036));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c036));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(29, _c036));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c036));
    \u0275\u0275property("options", ctx_r2.countryIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("countryId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(31, _c036));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_17_0 = ctx_r2.form.get("airportCode")) == null ? null : tmp_17_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("airportCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_19_0 = ctx_r2.form.get("airportText")) == null ? null : tmp_19_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("airportText"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c036));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function AirportCodeNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function AirportCodeNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 33);
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
function AirportCodeNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 29)(18, "button", 40);
    \u0275\u0275listener("click", function AirportCodeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function AirportCodeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function AirportCodeNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, AirportCodeNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, AirportCodeNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _AirportCodeNewComponent = class _AirportCodeNewComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.numberRangeService = numberRangeService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      airportCode: [, Validators.required],
      airportText: [, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      countryId: [],
      countryName: [],
      statusDescription: [],
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
      remark: [],
      statusId: ["16"]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
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
    const dataToSend = ["Master", "Airport Code", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.airportCode.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["AIRPORTCODE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.airportCode.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.airportCode.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
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
        console.log(this.cas.dropdownlist.setup.language.key);
        console.log(this.cas.dropdownlist.setup.company.key);
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.airportCode + " has been updated successfully" });
          this.router.navigate(["/main/master/airportCode"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.airportCode + " has been created successfully" });
            this.router.navigate(["/main/master/airportCode"]);
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
_AirportCodeNewComponent.\u0275fac = function AirportCodeNewComponent_Factory(t) {
  return new (t || _AirportCodeNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AirportCodeService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_AirportCodeNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AirportCodeNewComponent, selectors: [["app-airport-code-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "airportCode", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "airportText", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/airportCode", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function AirportCodeNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function AirportCodeNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, AirportCodeNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, AirportCodeNewComponent_ng_template_12_Template, 39, 33, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AirportCodeNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Airport Code - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=airport-code-new.component.css.map */"] });
var AirportCodeNewComponent = _AirportCodeNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AirportCodeNewComponent, { className: "AirportCodeNewComponent", filePath: "src\\app\\main\\master\\airport-code\\airport-code-new\\airport-code-new.component.ts", lineNumber: 18 });
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
  { path: "iata-new/:code", component: IataNewComponent, data: { title: "Master", module: "Iata - Add New" } },
  { path: "airportCode", component: AirportCodeComponent, data: { title: "Master", module: "AirportCode" } },
  { path: "airportCode-new/:code", component: AirportCodeNewComponent, data: { title: "Master", module: "AirportCode - Add New" } }
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
//# sourceMappingURL=chunk-2QN7FYMW.js.map

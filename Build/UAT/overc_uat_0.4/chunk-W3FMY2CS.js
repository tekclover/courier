import {
  CityService,
  CountryService,
  ProvinceService,
  SubProductService
} from "./chunk-3ZJ4ALNU.js";
import {
  CurrencyService
} from "./chunk-YZS6YMGW.js";
import {
  NumberrangeService
} from "./chunk-JNPAXPTK.js";
import {
  ProductService
} from "./chunk-VJTCED35.js";
import {
  CommonAPIService
} from "./chunk-FUZGPTPO.js";
import {
  CustomTableComponent,
  DeleteComponent
} from "./chunk-MGAP47KZ.js";
import {
  PathNameService
} from "./chunk-OPCGGHOA.js";
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
  MatTab,
  MatTabGroup,
  MatTabLabel,
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
  Subscription,
  Table,
  TableCheckbox,
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
} from "./chunk-MNJVYEXQ.js";

// src/app/main/id-masters/company/company.service.ts
var _CompanyService = class _CompanyService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(companyId) {
    return this.http.get("/overc-idmaster-service/company/" + companyId + "?languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/company", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/company/" + obj.companyId + "?languageId=" + this.auth.languageId, obj);
  }
  Delete(companyId) {
    return this.http.delete("/overc-idmaster-service/company/" + companyId + "?languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/company/find", obj);
  }
};
_CompanyService.\u0275fac = function CompanyService_Factory(t) {
  return new (t || _CompanyService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_CompanyService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
var CompanyService = _CompanyService;

// src/app/main/id-masters/company/company.component.ts
var _c0 = ["company"];
var _c1 = () => ({ width: "80vw" });
var _c2 = () => ({ "width": "100%" });
var _c3 = () => ({ "width": "100rem" });
function CompanyComponent_ng_template_52_th_3_Template(rf, ctx) {
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
function CompanyComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CompanyComponent_ng_template_52_th_3_Template, 3, 3, "th", 38);
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
function CompanyComponent_ng_template_53_td_3_ng_container_1_Template(rf, ctx) {
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
function CompanyComponent_ng_template_53_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CompanyComponent_ng_template_53_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CompanyComponent_ng_template_53_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, CompanyComponent_ng_template_53_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function CompanyComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41)(2, "p-checkbox", 42);
    \u0275\u0275listener("onChange", function CompanyComponent_ng_template_53_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_ng_template_53_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedCompany, $event) || (ctx_r6.selectedCompany = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CompanyComponent_ng_template_53_td_3_Template, 4, 2, "td", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedCompany[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedCompany);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function CompanyComponent_ng_template_54_Template(rf, ctx) {
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
var _CompanyComponent = class _CompanyComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, spin, fb) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.spin = spin;
    this.fb = fb;
    this.companyTable = [];
    this.selectedCompany = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      countryId: [],
      provinceId: [],
      districtId: [],
      cityId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      countryId: "Country",
      provinceId: "Province",
      districtId: "District",
      cityId: "City",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.countryDropdown = [];
    this.provinceDropdown = [];
    this.districtDropdown = [];
    this.cityDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Company "];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyId", header: "Company ID" },
      { field: "companyName", header: "Company Name" },
      { field: "addressLine1", header: "Address Line 1" },
      { field: "addressLine2", header: "Address Line 2" },
      { field: "addressLine3", header: "Address Line 3" },
      { field: "addressLine4", header: "Address Line 4" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "statusId", header: "Status ID" },
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "countryId", header: "Country ID" },
      { field: "countryName", header: "Country Name" },
      { field: "provinceId", header: "Province ID" },
      { field: "provinceName", header: "Province Name" },
      { field: "districtId", header: "District ID" },
      { field: "districtName", header: "District Name" },
      { field: "cityId", header: "City ID" },
      { field: "cityName", header: "City Name" },
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
      this.service.search(obj).subscribe({
        next: (res) => {
          this.companyTable = res;
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
    const choosen = this.selectedCompany[this.selectedCompany.length - 1];
    this.selectedCompany.length = 0;
    this.selectedCompany.push(choosen);
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
        this.deleterecord(this.selectedCompany[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedCompany.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedCompany[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/idMaster/company-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCompany.length === 0) {
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
        line: this.selectedCompany,
        module: "Company",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCompany[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.companyId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines.companyId + " Deleted successfully"
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
    const exportData = this.companyTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Company");
  }
  getSearchDropdown() {
    this.companyTable.forEach((res) => {
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
      if (res.provinceId != null) {
        this.provinceDropdown.push({ value: res.provinceId, label: res.provinceName });
        this.provinceDropdown = this.cs.removeDuplicatesFromArrayList(this.provinceDropdown, "value");
      }
      if (res.districtId != null) {
        this.districtDropdown.push({ value: res.districtId, label: res.districtName });
        this.districtDropdown = this.cs.removeDuplicatesFromArrayList(this.districtDropdown, "value");
      }
      if (res.cityId != null) {
        this.cityDropdown.push({ value: res.cityId, label: res.cityName });
        this.cityDropdown = this.cs.removeDuplicatesFromArrayList(this.cityDropdown, "value");
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
        this.companyTable = res;
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
      provinceId: [],
      districtId: [],
      cityId: [],
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
_CompanyComponent.\u0275fac = function CompanyComponent_Factory(t) {
  return new (t || _CompanyComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(FormBuilder));
};
_CompanyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyComponent, selectors: [["app-company"]], viewQuery: function CompanyComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 55, vars: 46, consts: [["company", ""], ["companyTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "provinceId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "districtId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "cityId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function CompanyComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Company ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function CompanyComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function CompanyComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function CompanyComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function CompanyComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function CompanyComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function CompanyComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const company_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(company_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function CompanyComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const companyTag_r3 = \u0275\u0275reference(51);
      return \u0275\u0275resetView(companyTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "p", 20);
    \u0275\u0275text(30, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19)(33, "p", 20);
    \u0275\u0275text(34, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 19)(37, "p", 20);
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-multiSelect", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 26)(41, "div")(42, "img", 27);
    \u0275\u0275listener("click", function CompanyComponent_Template_img_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "button", 28);
    \u0275\u0275listener("click", function CompanyComponent_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(45, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 29);
    \u0275\u0275listener("click", function CompanyComponent_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(47, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "p-chips", 30);
    \u0275\u0275listener("onRemove", function CompanyComponent_Template_p_chips_onRemove_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Template_p_chips_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 31)(50, "p-table", 32, 1);
    \u0275\u0275template(52, CompanyComponent_ng_template_52_Template, 4, 2, "ng-template", 33)(53, CompanyComponent_ng_template_53_Template, 4, 5, "ng-template", 34)(54, CompanyComponent_ng_template_54_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c1));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c2));
    \u0275\u0275property("options", ctx.countryDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c2));
    \u0275\u0275property("options", ctx.provinceDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c2));
    \u0275\u0275property("options", ctx.districtDropdown)("panelStyle", \u0275\u0275pureFunction0(40, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c2));
    \u0275\u0275property("options", ctx.cityDropdown)("panelStyle", \u0275\u0275pureFunction0(42, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c2));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(44, _c2));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.companyTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(45, _c3));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.search[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2) !important;\n}\n/*# sourceMappingURL=company.component.css.map */"] });
var CompanyComponent = _CompanyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyComponent, { className: "CompanyComponent", filePath: "src\\app\\main\\id-masters\\company\\company.component.ts", lineNumber: 21 });
})();

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

// src/app/main/id-masters/language/language.component.ts
var _c02 = ["language"];
var _c12 = () => ({ width: "80vw" });
var _c22 = () => ({ "width": "100%" });
function LanguageComponent_ng_template_36_th_3_Template(rf, ctx) {
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
function LanguageComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 35);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LanguageComponent_ng_template_36_th_3_Template, 3, 3, "th", 37);
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
function LanguageComponent_ng_template_37_td_3_ng_container_1_Template(rf, ctx) {
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
function LanguageComponent_ng_template_37_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function LanguageComponent_ng_template_37_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, LanguageComponent_ng_template_37_td_3_ng_container_1_Template, 2, 1, "ng-container", 43)(2, LanguageComponent_ng_template_37_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function LanguageComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40)(2, "p-checkbox", 41);
    \u0275\u0275listener("onChange", function LanguageComponent_ng_template_37_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function LanguageComponent_ng_template_37_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedLanguage, $event) || (ctx_r6.selectedLanguage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, LanguageComponent_ng_template_37_td_3_Template, 4, 2, "td", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedLanguage[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedLanguage);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function LanguageComponent_ng_template_38_Template(rf, ctx) {
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
function LanguageComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _LanguageComponent = class _LanguageComponent {
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
    this.languageTable = [];
    this.selectedLanguage = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      languageId: "Language"
    };
    this.languageDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Language"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Description" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField1", header: "Reference Field 6" },
      { field: "referenceField2", header: "Reference Field 7" },
      { field: "referenceField3", header: "Reference Field 8" },
      { field: "referenceField4", header: "Reference Field 9" },
      { field: "referenceField5", header: "Reference Field 10" }
    ];
  }
  initialCall() {
    setTimeout(() => {
      this.spin.show();
      this.service.search({}).subscribe({
        next: (res) => {
          this.languageTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 500);
  }
  onChange() {
    const choosen = this.selectedLanguage[this.selectedLanguage.length - 1];
    this.selectedLanguage.length = 0;
    this.selectedLanguage.push(choosen);
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
        this.deleterecord(this.selectedLanguage[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedLanguage.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedLanguage[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/language-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedLanguage.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedLanguage, module: "Language", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedLanguage[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.languageId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.languageId + " deleted successfully" });
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
    const exportData = this.languageTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Language");
  }
  getSearchDropdown() {
    this.languageTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0).map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.languageTable = res;
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
_LanguageComponent.\u0275fac = function LanguageComponent_Factory(t) {
  return new (t || _LanguageComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_LanguageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageComponent, selectors: [["app-language-new"]], viewQuery: function LanguageComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 42, vars: 21, consts: [["language", ""], ["languageTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "languageId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "sortField", "createdOn", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "sortOrder", "paginator", "rows", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function LanguageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Language ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function LanguageComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function LanguageComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function LanguageComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function LanguageComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function LanguageComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function LanguageComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const language_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(language_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function LanguageComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const languageTag_r3 = \u0275\u0275reference(35);
      return \u0275\u0275resetView(languageTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23)(25, "div")(26, "img", 24);
    \u0275\u0275listener("click", function LanguageComponent_Template_img_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "button", 25);
    \u0275\u0275listener("click", function LanguageComponent_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(29, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 26);
    \u0275\u0275listener("click", function LanguageComponent_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(31, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "p-chips", 27);
    \u0275\u0275listener("onRemove", function LanguageComponent_Template_p_chips_onRemove_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function LanguageComponent_Template_p_chips_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 28)(34, "p-table", 29, 1);
    \u0275\u0275template(36, LanguageComponent_ng_template_36_Template, 4, 2, "ng-template", 30)(37, LanguageComponent_ng_template_37_Template, 4, 5, "ng-template", 31)(38, LanguageComponent_ng_template_38_Template, 4, 1, "ng-template", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "mat-menu", 33, 2);
    \u0275\u0275template(41, LanguageComponent_ng_template_41_Template, 4, 0, "ng-template", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c12));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c22));
    \u0275\u0275property("options", ctx.languageDropdown)("panelStyle", \u0275\u0275pureFunction0(20, _c22));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.languageTable)("scrollable", true)("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=language.component.css.map */"] });
var LanguageComponent = _LanguageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageComponent, { className: "LanguageComponent", filePath: "src\\app\\main\\id-masters\\language\\language.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/language/language-new/language-new.component.ts
function LanguageNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function LanguageNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function LanguageNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function LanguageNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, LanguageNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, LanguageNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function LanguageNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 26)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function LanguageNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 26)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function LanguageNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 20);
    \u0275\u0275template(5, LanguageNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 22);
    \u0275\u0275template(10, LanguageNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "button", 24);
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 25);
    \u0275\u0275listener("click", function LanguageNewComponent_ng_template_12_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_2_0 = ctx_r2.form.get("languageId")) == null ? null : tmp_2_0.invalid) && ctx_r2.submitted ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_4_0 = ctx_r2.form.get("languageDescription")) == null ? null : tmp_4_0.invalid) && ctx_r2.submitted ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageDescription"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save", "");
  }
}
function LanguageNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function LanguageNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 27);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 28);
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
function LanguageNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 29);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 29);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 29);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 29);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 33);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 23)(19, "button", 34);
    \u0275\u0275listener("click", function LanguageNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_19_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(20, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 35);
    \u0275\u0275listener("click", function LanguageNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(17, 2, ctx_r2.form.controls.updatedOn.value, "dd-MM-yyyy HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save", " ");
  }
}
function LanguageNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, LanguageNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, LanguageNewComponent_p_stepperPanel_13_ng_template_2_Template, 23, 5, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _LanguageNewComponent = class _LanguageNewComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.numberRangeService = numberRangeService;
    this.messageService = messageService;
    this.active = 0;
    this.form = this.fb.group({
      languageId: [, [Validators.required, Validators.maxLength(50)]],
      languageDescription: [, [Validators.required, Validators.maxLength(100)]],
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
    this.btnText = "Save";
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
    const dataToSend = ["Setup", "Language", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    if (this.pageToken.pageflow != "New") {
      this.btnText = "Update";
      this.fill(this.pageToken.line);
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["LANGUAGE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.languageId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.languageId.disable();
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
  fill(line) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
    this.form.controls.languageId.disable();
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.languageId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/language"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.languageId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/language"]);
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
_LanguageNewComponent.\u0275fac = function LanguageNewComponent_Factory(t) {
  return new (t || _LanguageNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService));
};
_LanguageNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageNewComponent, selectors: [["app-language-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "languageId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["maxlength", "100", "pInputText", "", "formControlName", "languageDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/language", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "value"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function LanguageNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function LanguageNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, LanguageNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, LanguageNewComponent_ng_template_12_Template, 16, 5, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, LanguageNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Language - ", ctx.pageToken.pageflow, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=language-new.component.css.map */"] });
var LanguageNewComponent = _LanguageNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageNewComponent, { className: "LanguageNewComponent", filePath: "src\\app\\main\\id-masters\\language\\language-new\\language-new.component.ts", lineNumber: 16 });
})();

// src/app/main/id-masters/consignment-type/consignment-type.service.ts
var _ConsignmentTypeService = class _ConsignmentTypeService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(consignmentTypeId) {
    return this.http.get("/overc-idmaster-service/consignmentType/" + consignmentTypeId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/consignmentType", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/consignmentType/" + obj.consignmentTypeId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId, obj);
  }
  Delete(consignmentTypeId) {
    return this.http.delete("/overc-idmaster-service/consignmentType/" + consignmentTypeId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/consignmentType/find", obj);
  }
};
_ConsignmentTypeService.\u0275fac = function ConsignmentTypeService_Factory(t) {
  return new (t || _ConsignmentTypeService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ConsignmentTypeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsignmentTypeService, factory: _ConsignmentTypeService.\u0275fac, providedIn: "root" });
var ConsignmentTypeService = _ConsignmentTypeService;

// src/app/main/id-masters/consignment-type/consignment-type.component.ts
var _c03 = ["consignmentType"];
var _c13 = () => ({ width: "80vw" });
var _c23 = () => ({ "width": "100%" });
var _c32 = () => ({ "width": "100rem" });
function ConsignmentTypeComponent_ng_template_40_th_3_Template(rf, ctx) {
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
function ConsignmentTypeComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsignmentTypeComponent_ng_template_40_th_3_Template, 3, 3, "th", 38);
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
function ConsignmentTypeComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
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
function ConsignmentTypeComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsignmentTypeComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsignmentTypeComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, ConsignmentTypeComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function ConsignmentTypeComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41)(2, "p-checkbox", 42);
    \u0275\u0275listener("onChange", function ConsignmentTypeComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsignmentTypeComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedConsignmentType, $event) || (ctx_r6.selectedConsignmentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ConsignmentTypeComponent_ng_template_41_td_3_Template, 4, 2, "td", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedConsignmentType[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedConsignmentType);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function ConsignmentTypeComponent_ng_template_42_Template(rf, ctx) {
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
function ConsignmentTypeComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _ConsignmentTypeComponent = class _ConsignmentTypeComponent {
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
    this.consignmentTypeTable = [];
    this.selectedConsignmentType = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      consignmentTypeId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      consignmentTypeId: "Consignment Type",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.consignmentTypeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Consignment Type"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "consignmentTypeId", header: "Consignment Type ID" },
      { field: "consignmentTypeText", header: "Consignment Type Name" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
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
          this.consignmentTypeTable = res;
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
    const choosen = this.selectedConsignmentType[this.selectedConsignmentType.length - 1];
    this.selectedConsignmentType.length = 0;
    this.selectedConsignmentType.push(choosen);
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
        this.deleterecord(this.selectedConsignmentType[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedConsignmentType.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsignmentType[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/consignmentType-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedConsignmentType.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedConsignmentType, module: "Consignment Type", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedConsignmentType[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.consignmentTypeId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.consignmentTypeId + " deleted successfully" });
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
    const exportData = this.consignmentTypeTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Consignment Type");
  }
  getSearchDropdown() {
    this.consignmentTypeTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.consignmentTypeId != null) {
        this.consignmentTypeDropdown.push({ value: res.consignmentTypeId, label: res.consignmentTypeText });
        this.consignmentTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.consignmentTypeDropdown, "value");
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
        this.consignmentTypeTable = res;
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
      consignmentTypeId: [],
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
_ConsignmentTypeComponent.\u0275fac = function ConsignmentTypeComponent_Factory(t) {
  return new (t || _ConsignmentTypeComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ConsignmentTypeService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ConsignmentTypeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignmentTypeComponent, selectors: [["app-consignment-type"]], viewQuery: function ConsignmentTypeComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 46, vars: 28, consts: [["consignmentType", ""], ["ConsignmentTypeTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "consignmentTypeId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function ConsignmentTypeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Consignment Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function ConsignmentTypeComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function ConsignmentTypeComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function ConsignmentTypeComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function ConsignmentTypeComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function ConsignmentTypeComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function ConsignmentTypeComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consignmentType_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(consignmentType_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function ConsignmentTypeComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ConsignmentTypeTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(ConsignmentTypeTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Consignment Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "div")(30, "img", 25);
    \u0275\u0275listener("click", function ConsignmentTypeComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 26);
    \u0275\u0275listener("click", function ConsignmentTypeComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275listener("click", function ConsignmentTypeComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 28);
    \u0275\u0275listener("onRemove", function ConsignmentTypeComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsignmentTypeComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "p-table", 30, 1);
    \u0275\u0275template(40, ConsignmentTypeComponent_ng_template_40_Template, 4, 2, "ng-template", 31)(41, ConsignmentTypeComponent_ng_template_41_Template, 4, 5, "ng-template", 32)(42, ConsignmentTypeComponent_ng_template_42_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "mat-menu", 34, 2);
    \u0275\u0275template(45, ConsignmentTypeComponent_ng_template_45_Template, 4, 0, "ng-template", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c13));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c23));
    \u0275\u0275property("options", ctx.consignmentTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c23));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c23));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c23));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.consignmentTypeTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c32));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=consignment-type.component.css.map */"] });
var ConsignmentTypeComponent = _ConsignmentTypeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignmentTypeComponent, { className: "ConsignmentTypeComponent", filePath: "src\\app\\main\\id-masters\\consignment-type\\consignment-type.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/consignment-type/consignment-type-new/consignment-type-new.component.ts
var _c04 = () => ({ "width": "100%" });
function ConsignmentTypeNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ConsignmentTypeNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function ConsignmentTypeNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ConsignmentTypeNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, ConsignmentTypeNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, ConsignmentTypeNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function ConsignmentTypeNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function ConsignmentTypeNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function ConsignmentTypeNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
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
function ConsignmentTypeNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, ConsignmentTypeNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, ConsignmentTypeNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, " Consignment Type ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275template(15, ConsignmentTypeNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 24);
    \u0275\u0275text(18, "Consignment Type Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
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
    \u0275\u0275listener("click", function ConsignmentTypeNewComponent_ng_template_12_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c04));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(20, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c04));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(22, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("consignmentTypeId")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r2.form.get("consignmentTypeId")) == null ? null : tmp_12_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consignmentTypeId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_14_0 = ctx_r2.form.get("consignmentTypeText")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c04));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ConsignmentTypeNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ConsignmentTypeNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
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
function ConsignmentTypeNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function ConsignmentTypeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function ConsignmentTypeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function ConsignmentTypeNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, ConsignmentTypeNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, ConsignmentTypeNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _ConsignmentTypeNewComponent = class _ConsignmentTypeNewComponent {
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
      consignmentTypeId: [],
      consignmentTypeText: [, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      remark: [],
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
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""],
      statusId: ["16"]
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
    const dataToSend = ["Setup", "Consignment Type", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.consignmentTypeId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["CONSIGNMENTTYPE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.consignmentTypeId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.consignmentTypeId.disable();
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.consignmentTypeId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/consignmentType"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.consignmentTypeId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/consignmentType"]);
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
_ConsignmentTypeNewComponent.\u0275fac = function ConsignmentTypeNewComponent_Factory(t) {
  return new (t || _ConsignmentTypeNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentTypeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_ConsignmentTypeNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignmentTypeNewComponent, selectors: [["app-consignment-type-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "consignmentTypeId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "consignmentTypeText", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select\xA0", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/consignmentType", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function ConsignmentTypeNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function ConsignmentTypeNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, ConsignmentTypeNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, ConsignmentTypeNewComponent_ng_template_12_Template, 33, 24, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ConsignmentTypeNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Consignment Type - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=consignment-type-new.component.css.map */"] });
var ConsignmentTypeNewComponent = _ConsignmentTypeNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignmentTypeNewComponent, { className: "ConsignmentTypeNewComponent", filePath: "src\\app\\main\\id-masters\\consignment-type\\consignment-type-new\\consignment-type-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/menu/menu.service.ts
var _MenuService = class _MenuService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(languageId, companyId, menuId, subMenuId, authorizationObjectId) {
    return this.http.get("/overc-idmaster-service/menu/" + menuId + "?languageId=" + this.auth.languageId + authorizationObjectId + companyId + subMenuId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/menu", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/menu/" + obj.menuId + "?authorizationObjectId=" + obj.authorizationObjectId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId + "&subMenuId=" + obj.subMenuId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/menu/" + obj.menuId + "?authorizationObjectId=" + obj.authorizationObjectId + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId + "&subMenuId=" + obj.subMenuId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/menu/find", obj);
  }
};
_MenuService.\u0275fac = function MenuService_Factory(t) {
  return new (t || _MenuService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_MenuService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuService, factory: _MenuService.\u0275fac, providedIn: "root" });
var MenuService = _MenuService;

// src/app/main/id-masters/menu/menu.component.ts
var _c05 = ["menu"];
var _c14 = () => ({ width: "80vw" });
var _c24 = () => ({ "width": "100%" });
var _c33 = () => ({ "width": "100rem" });
function MenuComponent_ng_template_44_th_3_Template(rf, ctx) {
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
function MenuComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 37);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MenuComponent_ng_template_44_th_3_Template, 3, 3, "th", 39);
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
function MenuComponent_ng_template_45_td_3_ng_container_1_Template(rf, ctx) {
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
function MenuComponent_ng_template_45_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function MenuComponent_ng_template_45_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, MenuComponent_ng_template_45_td_3_ng_container_1_Template, 2, 1, "ng-container", 45)(2, MenuComponent_ng_template_45_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function MenuComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "p-checkbox", 43);
    \u0275\u0275listener("onChange", function MenuComponent_ng_template_45_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function MenuComponent_ng_template_45_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedMenu, $event) || (ctx_r6.selectedMenu = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, MenuComponent_ng_template_45_td_3_Template, 4, 2, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedMenu[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedMenu);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function MenuComponent_ng_template_46_Template(rf, ctx) {
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
function MenuComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _MenuComponent = class _MenuComponent {
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
    this.menuTable = [];
    this.selectedMenu = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      menuId: [],
      subMenuId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      menuId: "Menu",
      subMenuId: "Sub Menu",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.menuDropdown = [];
    this.subMenuDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Menu"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyIdAndDescription", header: "Company" },
      { field: "menuId", header: "Menu ID" },
      { field: "menuName", header: "Menu Name" },
      { field: "subMenuName", header: "Sub Menu Name" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "companyId", header: "Company ID" },
      { field: "languageId", header: "Language ID" },
      { field: "languageIdAndDescription", header: "Language" },
      { field: "subMenuId", header: "Sub Menu ID" },
      { field: "authorizationObjectId", header: "Authorization Object ID" },
      { field: "authorizationObjectValue", header: "Authorization Object Value" },
      { field: "authorizationObject", header: "Authorization Object" },
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
          this.menuTable = res;
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
    const choosen = this.selectedMenu[this.selectedMenu.length - 1];
    this.selectedMenu.length = 0;
    this.selectedMenu.push(choosen);
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
        this.deleterecord(this.selectedMenu[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedMenu.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedMenu[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/menu-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedMenu.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedMenu, module: "Menu", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedMenu[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.menuId + " deleted successfully" });
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
    const exportData = this.menuTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Menu");
  }
  getSearchDropdown() {
    this.menuTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.menuId != null) {
        this.menuDropdown.push({ value: res.menuId, label: res.menuName });
        this.menuDropdown = this.cs.removeDuplicatesFromArrayList(this.menuDropdown, "value");
      }
      if (res.subMenuId != null) {
        this.subMenuDropdown.push({ value: res.subMenuId, label: res.subMenuName });
        this.subMenuDropdown = this.cs.removeDuplicatesFromArrayList(this.subMenuDropdown, "value");
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
        this.menuTable = res;
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
      menuId: [],
      subMenuId: [],
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
_MenuComponent.\u0275fac = function MenuComponent_Factory(t) {
  return new (t || _MenuComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(MenuService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_MenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuComponent, selectors: [["app-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c05, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 50, vars: 34, consts: [["menu", ""], ["menuTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "menuId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subMenuId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function MenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function MenuComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function MenuComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function MenuComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function MenuComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function MenuComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function MenuComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const menu_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(menu_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function MenuComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const menuTag_r3 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(menuTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Sub Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25)(33, "div")(34, "img", 26);
    \u0275\u0275listener("click", function MenuComponent_Template_img_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "button", 27);
    \u0275\u0275listener("click", function MenuComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 28);
    \u0275\u0275listener("click", function MenuComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(39, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "p-chips", 29);
    \u0275\u0275listener("onRemove", function MenuComponent_Template_p_chips_onRemove_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function MenuComponent_Template_p_chips_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 30)(42, "p-table", 31, 1);
    \u0275\u0275template(44, MenuComponent_ng_template_44_Template, 4, 2, "ng-template", 32)(45, MenuComponent_ng_template_45_Template, 4, 5, "ng-template", 33)(46, MenuComponent_ng_template_46_Template, 4, 1, "ng-template", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "mat-menu", 35, 2);
    \u0275\u0275template(49, MenuComponent_ng_template_49_Template, 4, 0, "ng-template", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c14));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c24));
    \u0275\u0275property("options", ctx.menuDropdown)("panelStyle", \u0275\u0275pureFunction0(28, _c24));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c24));
    \u0275\u0275property("options", ctx.subMenuDropdown)("panelStyle", \u0275\u0275pureFunction0(30, _c24));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c24));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c24));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.menuTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(33, _c33));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe] });
var MenuComponent = _MenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuComponent, { className: "MenuComponent", filePath: "src\\app\\main\\id-masters\\menu\\menu.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/menu/menu-new/menu-new.component.ts
var _c06 = () => ({ "width": "100%" });
function MenuNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function MenuNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function MenuNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function MenuNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, MenuNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, MenuNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function MenuNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function MenuNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function MenuNewComponent_ng_template_12_mat_error_19_Template(rf, ctx) {
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
function MenuNewComponent_ng_template_12_mat_error_28_Template(rf, ctx) {
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
function MenuNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, MenuNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, MenuNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Menu ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 23);
    \u0275\u0275text(17, "Menu Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275template(19, MenuNewComponent_ng_template_12_mat_error_19_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "p", 23);
    \u0275\u0275text(22, "Sub Menu ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18)(25, "p", 23);
    \u0275\u0275text(26, "Sub Menu Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 27);
    \u0275\u0275template(28, MenuNewComponent_ng_template_12_mat_error_28_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18)(30, "p", 19);
    \u0275\u0275text(31, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "p-dropdown", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 29)(34, "button", 30);
    \u0275\u0275text(35, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 31);
    \u0275\u0275listener("click", function MenuNewComponent_ng_template_12_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c06));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(21, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c06));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("menuName")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("menuName"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_14_0 = ctx_r2.form.get("subMenuName")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("subMenuName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c06));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function MenuNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function MenuNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
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
function MenuNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function MenuNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function MenuNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function MenuNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, MenuNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, MenuNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _MenuNewComponent = class _MenuNewComponent {
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
      languageId: [this.auth.languageId, Validators.required],
      languageIdAndDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyIdAndDescription: [],
      menuId: [, Validators.required],
      menuName: [, Validators.required],
      subMenuId: [, Validators.required],
      subMenuName: [, Validators.required],
      authorizationObject: [],
      authorizationObjectId: [],
      authorizationObjectValue: [],
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
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""]
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
    const dataToSend = ["Setup", "Menu", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.menuId.disable();
      this.form.controls.subMenuId.disable();
      this.form.controls.authorizationObjectId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.updatedBy.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["MENU"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.menuId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.menuId.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
      this.spin.show();
      let obj1 = {};
      obj1.numberRangeObject = ["SUBMENU"];
      this.numberRangeService.search(obj1).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.subMenuId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField9.patchValue(this.numCondition);
            this.form.controls.subMenuId.disable();
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.menuId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/menu"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.menuId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/menu"]);
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
_MenuNewComponent.\u0275fac = function MenuNewComponent_Factory(t) {
  return new (t || _MenuNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MenuService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_MenuNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuNewComponent, selectors: [["app-menu-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "formControlName", "menuId", "pInputText", "", "pKeyFilter", "num", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "formControlName", "menuName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "50", "formControlName", "subMenuId", "pInputText", "", "pKeyFilter", "num", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "formControlName", "subMenuName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/menu", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function MenuNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function MenuNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, MenuNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, MenuNewComponent_ng_template_12_Template, 38, 25, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, MenuNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Menu - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=menu-new.component.css.map */"] });
var MenuNewComponent = _MenuNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuNewComponent, { className: "MenuNewComponent", filePath: "src\\app\\main\\id-masters\\menu\\menu-new\\menu-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/status/status.service.ts
var _StatusService = class _StatusService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(statusId) {
    return this.http.get("/overc-idmaster-service/status/" + statusId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/status", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/status/" + obj.statusId + "?languageId=" + this.auth.languageId, obj);
  }
  Delete(statusId) {
    return this.http.delete("/overc-idmaster-service/status/" + statusId + "?languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/status/find", obj);
  }
};
_StatusService.\u0275fac = function StatusService_Factory(t) {
  return new (t || _StatusService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_StatusService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatusService, factory: _StatusService.\u0275fac, providedIn: "root" });
var StatusService = _StatusService;

// src/app/main/id-masters/status/status-new/status-new.component.ts
var _c07 = () => ({ "width": "100%" });
function StatusNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function StatusNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function StatusNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function StatusNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, StatusNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, StatusNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function StatusNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function StatusNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function StatusNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function StatusNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, StatusNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Status ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 22);
    \u0275\u0275template(10, StatusNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275template(15, StatusNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 25)(17, "button", 26);
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 27);
    \u0275\u0275listener("click", function StatusNewComponent_ng_template_12_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c07));
    \u0275\u0275property("options", ctx_r2.languageIdList)("panelStyle", \u0275\u0275pureFunction0(10, _c07));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("statusId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_7_0 = ctx_r2.form.get("statusDescription")) == null ? null : tmp_7_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("statusDescription"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function StatusNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function StatusNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 29);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 30);
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
function StatusNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 25)(18, "button", 35);
    \u0275\u0275listener("click", function StatusNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 27);
    \u0275\u0275listener("click", function StatusNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function StatusNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, StatusNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, StatusNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _StatusNewComponent = class _StatusNewComponent {
  constructor(cs, spin, route, router, path, fb, service, cas, numberRangeService, auth, messageService) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.cas = cas;
    this.numberRangeService = numberRangeService;
    this.auth = auth;
    this.messageService = messageService;
    this.active = 0;
    this.form = this.fb.group({
      statusId: [],
      statusDescription: [, Validators.required],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      referenceField1: [],
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
    const dataToSend = ["Setup", "Status", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["STATUS"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.statusId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.statusId.disable();
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.statusId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/status"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.statusId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/status"]);
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
_StatusNewComponent.\u0275fac = function StatusNewComponent_Factory(t) {
  return new (t || _StatusNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StatusService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
};
_StatusNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusNewComponent, selectors: [["app-status-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "statusId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "statusDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/status", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function StatusNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function StatusNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, StatusNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, StatusNewComponent_ng_template_12_Template, 21, 11, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, StatusNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Status - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=status-new.component.css.map */"] });
var StatusNewComponent = _StatusNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusNewComponent, { className: "StatusNewComponent", filePath: "src\\app\\main\\id-masters\\status\\status-new\\status-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/status/status.component.ts
var _c08 = ["status"];
var _c15 = () => ({ width: "80vw" });
var _c25 = () => ({ "width": "100%" });
function StatusComponent_ng_template_36_th_3_Template(rf, ctx) {
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
function StatusComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 35);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StatusComponent_ng_template_36_th_3_Template, 3, 3, "th", 37);
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
function StatusComponent_ng_template_37_td_3_ng_container_1_Template(rf, ctx) {
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
function StatusComponent_ng_template_37_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function StatusComponent_ng_template_37_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StatusComponent_ng_template_37_td_3_ng_container_1_Template, 2, 1, "ng-container", 43)(2, StatusComponent_ng_template_37_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function StatusComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40)(2, "p-checkbox", 41);
    \u0275\u0275listener("onChange", function StatusComponent_ng_template_37_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function StatusComponent_ng_template_37_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedStatus, $event) || (ctx_r6.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, StatusComponent_ng_template_37_td_3_Template, 4, 2, "td", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedStatus[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedStatus);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function StatusComponent_ng_template_38_Template(rf, ctx) {
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
function StatusComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _StatusComponent = class _StatusComponent {
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
    this.statusTable = [];
    this.selectedStatus = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      statusId: [],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Status"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "statusId", header: "Status ID" },
      { field: "statusDescription", header: "Description" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageDescription", header: "Language" },
      { field: "languageId", header: "Language ID" },
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
          this.statusTable = res;
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
    const choosen = this.selectedStatus[this.selectedStatus.length - 1];
    this.selectedStatus.length = 0;
    this.selectedStatus.push(choosen);
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
        this.deleterecord(this.selectedStatus[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedStatus.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedStatus[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/status-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedStatus.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedStatus, module: "Status", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedStatus[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.statusId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.statusId + " deleted successfully" });
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
    const exportData = this.statusTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Status");
  }
  getSearchDropdown() {
    this.statusTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
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
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.search(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.statusTable = res;
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
_StatusComponent.\u0275fac = function StatusComponent_Factory(t) {
  return new (t || _StatusComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(StatusService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_StatusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusComponent, selectors: [["app-status"]], viewQuery: function StatusComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c08, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 42, vars: 20, consts: [["status", ""], ["statusTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function StatusComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function StatusComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function StatusComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function StatusComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function StatusComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function StatusComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function StatusComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const status_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(status_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function StatusComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const statusTag_r3 = \u0275\u0275reference(35);
      return \u0275\u0275resetView(statusTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23)(25, "div")(26, "img", 24);
    \u0275\u0275listener("click", function StatusComponent_Template_img_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "button", 25);
    \u0275\u0275listener("click", function StatusComponent_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(29, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 26);
    \u0275\u0275listener("click", function StatusComponent_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(31, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "p-chips", 27);
    \u0275\u0275listener("onRemove", function StatusComponent_Template_p_chips_onRemove_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function StatusComponent_Template_p_chips_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 28)(34, "p-table", 29, 1);
    \u0275\u0275template(36, StatusComponent_ng_template_36_Template, 4, 2, "ng-template", 30)(37, StatusComponent_ng_template_37_Template, 4, 5, "ng-template", 31)(38, StatusComponent_ng_template_38_Template, 4, 1, "ng-template", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "mat-menu", 33, 2);
    \u0275\u0275template(41, StatusComponent_ng_template_41_Template, 4, 0, "ng-template", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(17, _c15));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c25));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(19, _c25));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.statusTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=status.component.css.map */"] });
var StatusComponent = _StatusComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusComponent, { className: "StatusComponent", filePath: "src\\app\\main\\id-masters\\status\\status.component.ts", lineNumber: 22 });
})();

// src/app/main/id-masters/currency/currency-new/currency-new.component.ts
var _c09 = () => ({ "width": "100%" });
function CurrencyNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CurrencyNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function CurrencyNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CurrencyNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, CurrencyNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, CurrencyNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function CurrencyNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 28)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CurrencyNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Currency ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 20);
    \u0275\u0275template(5, CurrencyNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Currency Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 22);
    \u0275\u0275template(10, CurrencyNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 25)(16, "button", 26);
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 27);
    \u0275\u0275listener("click", function CurrencyNewComponent_ng_template_12_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_2_0 = ctx_r2.form.get("currencyId")) == null ? null : tmp_2_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("currencyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_4_0 = ctx_r2.form.get("currencyDescription")) == null ? null : tmp_4_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("currencyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(8, _c09));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CurrencyNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CurrencyNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 29);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 30);
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
function CurrencyNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 23);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 23);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 23);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 23);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 25)(18, "button", 35);
    \u0275\u0275listener("click", function CurrencyNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 27);
    \u0275\u0275listener("click", function CurrencyNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function CurrencyNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CurrencyNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, CurrencyNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _CurrencyNewComponent = class _CurrencyNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, numberRangeService, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.numberRangeService = numberRangeService;
    this.auth = auth;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      currencyId: [, Validators.required],
      currencyDescription: [, Validators.required],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""],
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
      statusId: ["16"]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
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
    const dataToSend = ["Setup", "Currency", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.currencyId.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["CURRENCY"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.currencyId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.currencyId.disable();
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.currencyId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/currency"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.currencyId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/currency"]);
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
_CurrencyNewComponent.\u0275fac = function CurrencyNewComponent_Factory(t) {
  return new (t || _CurrencyNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(AuthService));
};
_CurrencyNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CurrencyNewComponent, selectors: [["app-currency-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "currencyId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["maxlength", "100", "pInputText", "", "formControlName", "currencyDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select\xA0", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/currency", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CurrencyNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function CurrencyNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, CurrencyNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, CurrencyNewComponent_ng_template_12_Template, 20, 9, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CurrencyNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Currency - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=currency-new.component.css.map */"] });
var CurrencyNewComponent = _CurrencyNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CurrencyNewComponent, { className: "CurrencyNewComponent", filePath: "src\\app\\main\\id-masters\\currency\\currency-new\\currency-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/currency/currency.component.ts
var _c010 = ["currency"];
var _c16 = () => ({ width: "80vw" });
var _c26 = () => ({ "width": "100%" });
var _c34 = () => ({ "width": "100rem" });
function CurrencyComponent_ng_template_40_th_3_Template(rf, ctx) {
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
function CurrencyComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CurrencyComponent_ng_template_40_th_3_Template, 3, 3, "th", 38);
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
function CurrencyComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
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
function CurrencyComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CurrencyComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CurrencyComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, CurrencyComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function CurrencyComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41)(2, "p-checkbox", 42);
    \u0275\u0275listener("onChange", function CurrencyComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CurrencyComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedCurrency, $event) || (ctx_r6.selectedCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CurrencyComponent_ng_template_41_td_3_Template, 4, 2, "td", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedCurrency[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedCurrency);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function CurrencyComponent_ng_template_42_Template(rf, ctx) {
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
function CurrencyComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CurrencyComponent = class _CurrencyComponent {
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
    this.currencyTable = [];
    this.selectedCurrency = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      currencyId: [],
      statusId: []
    });
    this.fieldDisplayNames = {
      currencyId: "Currency",
      statusId: "Status"
    };
    this.currencyDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Currency"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "currencyId", header: " Currency ID" },
      { field: "currencyDescription", header: "Description" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
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
          this.currencyTable = res;
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
    const choosen = this.selectedCurrency[this.selectedCurrency.length - 1];
    this.selectedCurrency.length = 0;
    this.selectedCurrency.push(choosen);
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
        this.deleterecord(this.selectedCurrency[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedCurrency.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCurrency[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/currency-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCurrency.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedCurrency, module: "Currency", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCurrency[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.currencyId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.currencyId + " deleted successfully" });
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
    const exportData = this.currencyTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Currency");
  }
  getSearchDropdown() {
    this.currencyTable.forEach((res) => {
      if (res.currencyId != null) {
        this.currencyDropdown.push({ value: res.currencyId, label: res.currencyDescription });
        this.currencyDropdown = this.cs.removeDuplicatesFromArrayList(this.currencyDropdown, "value");
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
        this.currencyTable = res;
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
      currencyId: [],
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
_CurrencyComponent.\u0275fac = function CurrencyComponent_Factory(t) {
  return new (t || _CurrencyComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CurrencyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CurrencyComponent, selectors: [["app-currency"]], viewQuery: function CurrencyComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c010, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 46, vars: 28, consts: [["currency", ""], ["currencyTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "currencyId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CurrencyComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Currency ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function CurrencyComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function CurrencyComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function CurrencyComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function CurrencyComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function CurrencyComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function CurrencyComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const currency_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(currency_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function CurrencyComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const currencyTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(currencyTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "div")(30, "img", 25);
    \u0275\u0275listener("click", function CurrencyComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 26);
    \u0275\u0275listener("click", function CurrencyComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275listener("click", function CurrencyComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 28);
    \u0275\u0275listener("onRemove", function CurrencyComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CurrencyComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "p-table", 30, 1);
    \u0275\u0275template(40, CurrencyComponent_ng_template_40_Template, 4, 2, "ng-template", 31)(41, CurrencyComponent_ng_template_41_Template, 4, 5, "ng-template", 32)(42, CurrencyComponent_ng_template_42_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "mat-menu", 34, 2);
    \u0275\u0275template(45, CurrencyComponent_ng_template_45_Template, 4, 0, "ng-template", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c16));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c26));
    \u0275\u0275property("options", ctx.currencyDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c26));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c26));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c26));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.currencyTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c34));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=currency.component.css.map */"] });
var CurrencyComponent = _CurrencyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CurrencyComponent, { className: "CurrencyComponent", filePath: "src\\app\\main\\id-masters\\currency\\currency.component.ts", lineNumber: 22 });
})();

// src/app/main/id-masters/company/company-new/company-new.component.ts
var _c011 = () => ({ "width": "100%" });
function CompanyNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CompanyNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function CompanyNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CompanyNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, CompanyNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, CompanyNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function CompanyNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function CompanyNewComponent_ng_template_12_mat_error_14_Template(rf, ctx) {
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
function CompanyNewComponent_ng_template_12_mat_error_19_Template(rf, ctx) {
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
function CompanyNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, CompanyNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 22);
    \u0275\u0275text(8, "Company ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 18)(11, "p", 22);
    \u0275\u0275text(12, " Company Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 24);
    \u0275\u0275template(14, CompanyNewComponent_ng_template_12_mat_error_14_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 22);
    \u0275\u0275text(17, " Address Line 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275template(19, CompanyNewComponent_ng_template_12_mat_error_19_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "p", 19);
    \u0275\u0275text(22, " Address Line 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18)(25, "p", 19);
    \u0275\u0275text(26, " Address Line 3 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 18)(29, "p", 19);
    \u0275\u0275text(30, " Address Line 4 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 18)(33, "p", 19);
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-dropdown", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 30)(37, "button", 31);
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 32);
    \u0275\u0275listener("click", function CompanyNewComponent_ng_template_12_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(13, _c011));
    \u0275\u0275property("options", ctx_r2.languageIdList)("panelStyle", \u0275\u0275pureFunction0(14, _c011));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_6_0 = ctx_r2.form.get("companyName")) == null ? null : tmp_6_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_8_0 = ctx_r2.form.get("addressLine1")) == null ? null : tmp_8_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("addressLine1"));
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c011));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save", " ");
  }
}
function CompanyNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CompanyNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 34);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 35);
    \u0275\u0275text(6, " Admin ");
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
function CompanyNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function CompanyNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 32);
    \u0275\u0275listener("click", function CompanyNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save", " ");
  }
}
function CompanyNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CompanyNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, CompanyNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _CompanyNewComponent = class _CompanyNewComponent {
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
      addressLine1: [, Validators.required],
      addressLine2: [],
      addressLine3: [],
      addressLine4: [],
      cityId: [],
      cityName: [],
      companyId: [],
      companyName: [, Validators.required],
      countryId: [],
      countryName: [],
      districtId: [],
      districtName: [],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      provinceId: [],
      provinceName: [],
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
      createdOn: [""],
      createdBy: [],
      updatedOn: [""],
      updatedBy: []
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
    const dataToSend = ["Setup", "Company", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.companyId.disable();
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
    obj.numberRangeObject = ["COMPANY"];
    this.numberRangeService.search(obj).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
          this.form.controls.companyId.patchValue(this.nextNumber);
          this.numCondition = "true";
          this.form.controls.referenceField10.patchValue(this.numCondition);
          this.form.controls.companyId.disable();
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
      this.cas.dropdownlist.setup.company.url
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
            detail: res.companyId + " has been updated successfully"
          });
          this.router.navigate(["/main/idMaster/company"]);
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
              detail: res.companyId + " has been created successfully"
            });
            this.router.navigate(["/main/idMaster/company"]);
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
_CompanyNewComponent.\u0275fac = function CompanyNewComponent_Factory(t) {
  return new (t || _CompanyNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_CompanyNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyNewComponent, selectors: [["app-company-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "panelStyle"], ["class", "text-danger", 4, "ngIf"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["type", "text", "formControlName", "companyId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "companyName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["type", "text", "formControlName", "addressLine1", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["type", "text", "formControlName", "addressLine2", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "addressLine3", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "addressLine4", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/company", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CompanyNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function CompanyNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, CompanyNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, CompanyNewComponent_ng_template_12_Template, 41, 16, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CompanyNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Company- ", ctx.pageToken.pageflow, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=company-new.component.css.map */"] });
var CompanyNewComponent = _CompanyNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyNewComponent, { className: "CompanyNewComponent", filePath: "src\\app\\main\\id-masters\\company\\company-new\\company-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/sub-product/sub-product.component.ts
var _c012 = ["subProduct"];
var _c17 = () => ({ width: "80vw" });
var _c27 = () => ({ "width": "100%" });
var _c35 = () => ({ "width": "100rem" });
function SubProductComponent_ng_template_44_th_3_Template(rf, ctx) {
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
function SubProductComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 33);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SubProductComponent_ng_template_44_th_3_Template, 3, 3, "th", 35);
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
function SubProductComponent_ng_template_45_td_3_ng_container_1_Template(rf, ctx) {
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
function SubProductComponent_ng_template_45_td_3_ng_template_2_Template(rf, ctx) {
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
function SubProductComponent_ng_template_45_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, SubProductComponent_ng_template_45_td_3_ng_container_1_Template, 2, 1, "ng-container", 41)(2, SubProductComponent_ng_template_45_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function SubProductComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 38)(2, "p-checkbox", 39);
    \u0275\u0275listener("onChange", function SubProductComponent_ng_template_45_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function SubProductComponent_ng_template_45_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedSubProduct, $event) || (ctx_r6.selectedSubProduct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SubProductComponent_ng_template_45_td_3_Template, 4, 2, "td", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedSubProduct[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedSubProduct);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function SubProductComponent_ng_template_46_Template(rf, ctx) {
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
var _SubProductComponent = class _SubProductComponent {
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
    this.subProductTable = [];
    this.selectedSubProduct = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      subProductId: [],
      subProductValue: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      subProductId: "Sub Product",
      subProductValue: "Sub Product Value",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.subProductDropdown = [];
    this.subProductValueDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Sub Product"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "subProductId", header: "Sub Product ID" },
      { field: "subProductName", header: "Sub Product Name" },
      { field: "remark", header: "Remark" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "subProductValue", header: "Sub Product Value" },
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "statusId", header: "Status ID" },
      { field: "subProductValue", header: "Sub Product Value" },
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
          res = this.cs.removeDuplicatesFromArrayList(res, "subProductId");
          this.subProductTable = res;
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
    const choosen = this.selectedSubProduct[this.selectedSubProduct.length - 1];
    this.selectedSubProduct.length = 0;
    this.selectedSubProduct.push(choosen);
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
        this.deleterecord(this.selectedSubProduct[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedSubProduct.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedSubProduct[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/idMaster/subProduct-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedSubProduct.length === 0) {
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
        line: this.selectedSubProduct,
        module: "Sub Product",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let obj = {};
        obj.languageId = [this.auth.languageId];
        obj.companyId = [this.auth.companyId];
        obj.subProductId = [this.selectedSubProduct[0].subProductId];
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
          detail: lines[0].subProductId + " Deleted successfully"
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
    const exportData = this.subProductTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Sub Product");
  }
  getSearchDropdown() {
    this.subProductTable.forEach((res) => {
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
        this.subProductTable = res;
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
_SubProductComponent.\u0275fac = function SubProductComponent_Factory(t) {
  return new (t || _SubProductComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(SubProductService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_SubProductComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubProductComponent, selectors: [["app-sub-product"]], viewQuery: function SubProductComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c012, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 47, vars: 34, consts: [["subProduct", ""], ["subProductTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function SubProductComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Sub Product ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function SubProductComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function SubProductComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function SubProductComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function SubProductComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function SubProductComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function SubProductComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const subProduct_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(subProduct_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function SubProductComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const subProductTag_r3 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(subProductTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "p", 20);
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23)(33, "div")(34, "img", 24);
    \u0275\u0275listener("click", function SubProductComponent_Template_img_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "button", 25);
    \u0275\u0275listener("click", function SubProductComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 26);
    \u0275\u0275listener("click", function SubProductComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(39, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "p-chips", 27);
    \u0275\u0275listener("onRemove", function SubProductComponent_Template_p_chips_onRemove_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function SubProductComponent_Template_p_chips_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 28)(42, "p-table", 29, 1);
    \u0275\u0275template(44, SubProductComponent_ng_template_44_Template, 4, 2, "ng-template", 30)(45, SubProductComponent_ng_template_45_Template, 4, 5, "ng-template", 31)(46, SubProductComponent_ng_template_46_Template, 4, 1, "ng-template", 32);
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
    \u0275\u0275property("options", ctx.subProductDropdown)("panelStyle", \u0275\u0275pureFunction0(28, _c27));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c27));
    \u0275\u0275property("options", ctx.subProductValueDropdown)("panelStyle", \u0275\u0275pureFunction0(30, _c27));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c27));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c27));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.subProductTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(33, _c35));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=sub-product.component.css.map */"] });
var SubProductComponent = _SubProductComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubProductComponent, { className: "SubProductComponent", filePath: "src\\app\\main\\id-masters\\sub-product\\sub-product.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/sub-product/sub-products-values/sub-products-values.component.ts
var _SubProductsValuesComponent = class _SubProductsValuesComponent {
  constructor(dialogRef, data, cs, spin, route, router, path, fb, service, messageService, cas, auth) {
    this.dialogRef = dialogRef;
    this.data = data;
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
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      subProductId: [],
      subProductName: [, Validators.required],
      subProductValue: [, Validators.required],
      remark: [],
      statusId: ["1"],
      statusDescription: [],
      referenceField1: [, Validators.required],
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
    this.status = [
      { value: "2", label: "Inactive" },
      { value: "1", label: "Active" }
    ];
  }
  ngOnInit() {
    this.form.controls.subProductValue.patchValue(this.data);
    if (this.data.pageflow == "Edit") {
      this.form.patchValue(this.data.code);
    }
  }
  save() {
    this.dialogRef.close(this.form.value);
  }
};
_SubProductsValuesComponent.\u0275fac = function SubProductsValuesComponent_Factory(t) {
  return new (t || _SubProductsValuesComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SubProductService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_SubProductsValuesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubProductsValuesComponent, selectors: [["app-sub-products-values"]], decls: 21, vars: 1, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "formControlName", "subProductValue", "pInputText", "", "pKeyFilter", "num", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "referenceField1", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "float-right", "py-2", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function SubProductsValuesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Add Sub Product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7)(13, "p", 8);
    \u0275\u0275text(14, "Value Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11)(17, "button", 12);
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 13);
    \u0275\u0275listener("click", function SubProductsValuesComponent_Template_button_click_19_listener() {
      return ctx.save();
    });
    \u0275\u0275text(20, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
  }
}, dependencies: [InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n/*# sourceMappingURL=sub-products-values.component.css.map */"] });
var SubProductsValuesComponent = _SubProductsValuesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubProductsValuesComponent, { className: "SubProductsValuesComponent", filePath: "src\\app\\main\\id-masters\\sub-product\\sub-products-values\\sub-products-values.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/sub-product/sub-product-new/sub-product-new.component.ts
var _c013 = () => ({ "width": "100%" });
function SubProductNewComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 27)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function SubProductNewComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 27)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function SubProductNewComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 27)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function SubProductNewComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Value Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function SubProductNewComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "p", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 29)(9, "img", 30);
    \u0275\u0275listener("click", function SubProductNewComponent_ng_template_45_Template_img_click_9_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).rowIndex;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editItem("Edit", i_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "img", 31);
    \u0275\u0275listener("click", function SubProductNewComponent_ng_template_45_Template_img_click_10_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).rowIndex;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeItem(i_r3));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r4.subProductValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r4.referenceField1, " ");
  }
}
var _SubProductNewComponent = class _SubProductNewComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService, cas, auth, dialog) {
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
    this.dialog = dialog;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      subProductId: [],
      subProductName: [, Validators.required],
      subProductValue: [],
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
    this.subProductArray = [];
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
    const dataToSend = ["Setup", "Sub Product", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.subProductId.disable();
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
    obj.numberRangeObject = ["SUBPRODUCT"];
    this.numberRangeService.search(obj).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
          this.form.controls.subProductId.patchValue(this.nextNumber);
          this.numCondition = "true";
          this.form.controls.referenceField10.patchValue(this.numCondition);
          this.form.controls.subProductId.disable();
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
  addValues() {
  }
  add() {
    const dialogRef = this.dialog.open(SubProductsValuesComponent, {
      disableClose: true,
      width: "70%",
      height: "50%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: this.subProductArray.length + 1
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.subProductArray.push(result);
      }
    });
  }
  removeItem(index) {
    this.subProductArray.splice(index, 1);
  }
  fill(line) {
    this.form.patchValue(line);
    this.spin.show();
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.subProductId = [line.subProductId];
    this.service.search(obj).subscribe({
      next: (res) => {
        console.log(res);
        this.subProductArray = res;
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
    if (this.subProductArray.length == 0) {
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
      this.subProductArray.forEach((x) => {
        x.languageId = this.auth.languageId;
        x.companyId = this.auth.companyId;
        x.subProductId = this.form.controls.subProductId.value;
        x.subProductName = this.form.controls.subProductName.value;
        x.statusId = this.form.controls.statusId.value;
        x.remark = this.form.controls.remark.value;
      });
      this.service.UpdateBulk(this.subProductArray).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].subProductId + " has been updated successfully"
          });
          this.router.navigate(["/main/idMaster/subProduct"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.subProductArray.forEach((x) => {
        x.languageId = this.auth.languageId;
        x.companyId = this.auth.companyId;
        x.subProductId = this.form.controls.subProductId.value;
        x.subProductName = this.form.controls.subProductName.value;
        x.statusId = this.form.controls.statusId.value;
        x.remark = this.form.controls.remark.value;
      });
      this.service.CreateBulk(this.subProductArray).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res[0].subProductId + " has been created successfully"
            });
            this.router.navigate(["/main/idMaster/subProduct"]);
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
    const dialogRef = this.dialog.open(SubProductsValuesComponent, {
      disableClose: true,
      width: "70%",
      height: "50%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { pageflow: data, code: this.subProductArray[i] }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.subProductArray.splice(i, 0);
        this.subProductArray.splice(i, 1, result);
        console.log(result);
        this.subProductArray = [...this.subProductArray];
      }
    });
  }
};
_SubProductNewComponent.\u0275fac = function SubProductNewComponent_Factory(t) {
  return new (t || _SubProductNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SubProductService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialog));
};
_SubProductNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubProductNewComponent, selectors: [["app-sub-product-new"]], decls: 51, vars: 27, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "mx-auto", "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-4", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "subProductId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "subProductName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select ", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "justify-content-end", "mb-3"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], ["scrollHeight", "calc(100vh - 31.8rem)", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/subProduct", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "w-100", "pl-2", "ml-2"], [1, "d-flex", "img-icon", "px-3"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "width", "24px", "height", "24px", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", "width", "24px", "height", "24px", 3, "click"]], template: function SubProductNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "p", 9);
    \u0275\u0275text(13, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 10);
    \u0275\u0275template(15, SubProductNewComponent_mat_error_15_Template, 3, 1, "mat-error", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8)(17, "p", 9);
    \u0275\u0275text(18, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 12);
    \u0275\u0275template(20, SubProductNewComponent_mat_error_20_Template, 3, 1, "mat-error", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 8)(22, "p", 9);
    \u0275\u0275text(23, "Sub Product ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 8)(26, "p", 14);
    \u0275\u0275text(27, "Sub Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 15);
    \u0275\u0275template(29, SubProductNewComponent_mat_error_29_Template, 3, 1, "mat-error", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 8)(31, "p", 9);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-dropdown", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 8)(35, "p", 9);
    \u0275\u0275text(36, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 18)(39, "button", 19);
    \u0275\u0275listener("click", function SubProductNewComponent_Template_button_click_39_listener() {
      return ctx.add();
    });
    \u0275\u0275element(40, "i", 20);
    \u0275\u0275text(41, "Add Values");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 6)(43, "p-table", 21);
    \u0275\u0275template(44, SubProductNewComponent_ng_template_44_Template, 7, 0, "ng-template", 22)(45, SubProductNewComponent_ng_template_45_Template, 11, 2, "ng-template", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 24)(47, "button", 25);
    \u0275\u0275text(48, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 26);
    \u0275\u0275listener("click", function SubProductNewComponent_Template_button_click_49_listener() {
      return ctx.save();
    });
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Sub Product - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c013));
    \u0275\u0275property("options", ctx.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c013));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c013));
    \u0275\u0275property("options", ctx.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(25, _c013));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("companyId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx.form.get("subProductName")) == null ? null : tmp_12_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("subProductName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c013));
    \u0275\u0275property("options", ctx.status);
    \u0275\u0275advance(10);
    \u0275\u0275property("scrollable", true)("value", ctx.subProductArray);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Table, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n/*# sourceMappingURL=sub-product-new.component.css.map */"] });
var SubProductNewComponent = _SubProductNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubProductNewComponent, { className: "SubProductNewComponent", filePath: "src\\app\\main\\id-masters\\sub-product\\sub-product-new\\sub-product-new.component.ts", lineNumber: 20 });
})();

// src/app/main/id-masters/load-type/load-type.service.ts
var _LoadTypeService = class _LoadTypeService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(loadTypeId) {
    return this.http.get("/overc-idmaster-service/loadType/" + loadTypeId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/loadType", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/loadType/" + obj.loadTypeId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId, obj);
  }
  Delete(loadTypeId) {
    return this.http.delete("/overc-idmaster-service/loadType/" + loadTypeId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/loadType/find", obj);
  }
};
_LoadTypeService.\u0275fac = function LoadTypeService_Factory(t) {
  return new (t || _LoadTypeService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_LoadTypeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoadTypeService, factory: _LoadTypeService.\u0275fac, providedIn: "root" });
var LoadTypeService = _LoadTypeService;

// src/app/main/id-masters/load-type/load-type.component.ts
var _c014 = ["loadType"];
var _c18 = () => ({ width: "80vw" });
var _c28 = () => ({ "width": "100%" });
var _c36 = () => ({ "width": "100rem" });
function LoadTypeComponent_ng_template_40_th_3_Template(rf, ctx) {
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
function LoadTypeComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LoadTypeComponent_ng_template_40_th_3_Template, 3, 3, "th", 38);
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
function LoadTypeComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
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
function LoadTypeComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function LoadTypeComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, LoadTypeComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, LoadTypeComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function LoadTypeComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41)(2, "p-checkbox", 42);
    \u0275\u0275listener("onChange", function LoadTypeComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function LoadTypeComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedLoadType, $event) || (ctx_r6.selectedLoadType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, LoadTypeComponent_ng_template_41_td_3_Template, 4, 2, "td", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedLoadType[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedLoadType);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function LoadTypeComponent_ng_template_42_Template(rf, ctx) {
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
function LoadTypeComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _LoadTypeComponent = class _LoadTypeComponent {
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
    this.loadTypeTable = [];
    this.selectedLoadType = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      loadTypeId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      loadTypeId: "Load Type",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.loadTypeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Load Type"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "loadTypeId", header: "Load Type ID" },
      { field: "loadTypeText", header: "Load Type Name" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageDescription", header: "Language" },
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
          this.loadTypeTable = res;
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
    const choosen = this.selectedLoadType[this.selectedLoadType.length - 1];
    this.selectedLoadType.length = 0;
    this.selectedLoadType.push(choosen);
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
        this.deleterecord(this.selectedLoadType[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedLoadType.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedLoadType[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/loadType-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedLoadType.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedLoadType, module: "Load Type", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedLoadType[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.loadTypeId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.loadTypeId + " deleted successfully" });
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
    const exportData = this.loadTypeTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Load Type");
  }
  getSearchDropdown() {
    this.loadTypeTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.loadTypeId != null) {
        this.loadTypeDropdown.push({ value: res.loadTypeId, label: res.loadTypeText });
        this.loadTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.loadTypeDropdown, "value");
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
        this.loadTypeTable = res;
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
      loadTypeId: [],
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
_LoadTypeComponent.\u0275fac = function LoadTypeComponent_Factory(t) {
  return new (t || _LoadTypeComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(LoadTypeService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_LoadTypeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadTypeComponent, selectors: [["app-load-type"]], viewQuery: function LoadTypeComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c014, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 46, vars: 28, consts: [["loadType", ""], ["loadTypeTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "loadTypeId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function LoadTypeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Load Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function LoadTypeComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function LoadTypeComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function LoadTypeComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function LoadTypeComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function LoadTypeComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function LoadTypeComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const loadType_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(loadType_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function LoadTypeComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const loadTypeTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(loadTypeTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Load Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "div")(30, "img", 25);
    \u0275\u0275listener("click", function LoadTypeComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 26);
    \u0275\u0275listener("click", function LoadTypeComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275listener("click", function LoadTypeComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 28);
    \u0275\u0275listener("onRemove", function LoadTypeComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function LoadTypeComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "p-table", 30, 1);
    \u0275\u0275template(40, LoadTypeComponent_ng_template_40_Template, 4, 2, "ng-template", 31)(41, LoadTypeComponent_ng_template_41_Template, 4, 5, "ng-template", 32)(42, LoadTypeComponent_ng_template_42_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "mat-menu", 34, 2);
    \u0275\u0275template(45, LoadTypeComponent_ng_template_45_Template, 4, 0, "ng-template", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c18));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c28));
    \u0275\u0275property("options", ctx.loadTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c28));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c28));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c28));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.loadTypeTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c36));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=load-type.component.css.map */"] });
var LoadTypeComponent = _LoadTypeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadTypeComponent, { className: "LoadTypeComponent", filePath: "src\\app\\main\\id-masters\\load-type\\load-type.component.ts", lineNumber: 21 });
})();

// src/app/config/spaceValidator.ts
function noLeadingTrailingSpacesValidator() {
  return (control) => {
    if (control.value && control.value.trim() !== control.value) {
      return { "leadingTrailingSpaces": true };
    }
    return null;
  };
}

// src/app/main/id-masters/load-type/load-type-new/load-type-new.component.ts
var _c015 = () => ({ "width": "100%" });
function LoadTypeNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function LoadTypeNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function LoadTypeNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function LoadTypeNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, LoadTypeNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, LoadTypeNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function LoadTypeNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function LoadTypeNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function LoadTypeNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, LoadTypeNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, LoadTypeNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Load Type ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 24);
    \u0275\u0275text(17, "Load Type Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18)(20, "p", 19);
    \u0275\u0275text(21, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 18)(24, "p", 19);
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "p-dropdown", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 28)(28, "button", 29);
    \u0275\u0275text(29, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 30);
    \u0275\u0275listener("click", function LoadTypeNewComponent_ng_template_12_Template_button_click_30_listener() {
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
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c015));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(19, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c015));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(21, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("loadTypeId")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r2.form.get("loadTypeId")) == null ? null : tmp_12_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("loadTypeText")) == null ? null : tmp_13_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c015));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function LoadTypeNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function LoadTypeNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
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
function LoadTypeNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function LoadTypeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function LoadTypeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function LoadTypeNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, LoadTypeNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, LoadTypeNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _LoadTypeNewComponent = class _LoadTypeNewComponent {
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
      loadTypeId: [],
      loadTypeText: [, [Validators.required, noLeadingTrailingSpacesValidator()]],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      statusId: ["16"],
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
      remark: []
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
    const dataToSend = ["Setup", "Load Type", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.loadTypeId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["LOADTYPE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.loadTypeId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.loadTypeId.disable();
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.loadTypeId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/loadType"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.loadTypeId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/loadType"]);
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
_LoadTypeNewComponent.\u0275fac = function LoadTypeNewComponent_Factory(t) {
  return new (t || _LoadTypeNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LoadTypeService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_LoadTypeNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadTypeNewComponent, selectors: [["app-load-type-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "loadTypeId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "loadTypeText", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/loadType", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function LoadTypeNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function LoadTypeNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, LoadTypeNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, LoadTypeNewComponent_ng_template_12_Template, 32, 23, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, LoadTypeNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Load Type - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=load-type-new.component.css.map */"] });
var LoadTypeNewComponent = _LoadTypeNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadTypeNewComponent, { className: "LoadTypeNewComponent", filePath: "src\\app\\main\\id-masters\\load-type\\load-type-new\\load-type-new.component.ts", lineNumber: 19 });
})();

// src/app/main/id-masters/service-type/service-type.service.ts
var _ServiceTypeService = class _ServiceTypeService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(serviceTypeId) {
    return this.http.get("/overc-idmaster-service/serviceType/" + serviceTypeId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/serviceType", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/serviceType/" + obj.serviceTypeId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId, obj);
  }
  Delete(serviceTypeId) {
    return this.http.delete("/overc-idmaster-service/serviceType/" + serviceTypeId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/serviceType/find", obj);
  }
};
_ServiceTypeService.\u0275fac = function ServiceTypeService_Factory(t) {
  return new (t || _ServiceTypeService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ServiceTypeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceTypeService, factory: _ServiceTypeService.\u0275fac, providedIn: "root" });
var ServiceTypeService = _ServiceTypeService;

// src/app/main/id-masters/service-type/service-type.component.ts
var _c016 = ["serviceType"];
var _c19 = () => ({ width: "80vw" });
var _c29 = () => ({ "width": "100%" });
var _c37 = () => ({ "width": "100rem" });
function ServiceTypeComponent_ng_template_40_th_3_Template(rf, ctx) {
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
function ServiceTypeComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ServiceTypeComponent_ng_template_40_th_3_Template, 3, 3, "th", 38);
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
function ServiceTypeComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
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
function ServiceTypeComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ServiceTypeComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ServiceTypeComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, ServiceTypeComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function ServiceTypeComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41)(2, "p-checkbox", 42);
    \u0275\u0275listener("onChange", function ServiceTypeComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ServiceTypeComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedServiceType, $event) || (ctx_r6.selectedServiceType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ServiceTypeComponent_ng_template_41_td_3_Template, 4, 2, "td", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedServiceType[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedServiceType);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function ServiceTypeComponent_ng_template_42_Template(rf, ctx) {
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
function ServiceTypeComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _ServiceTypeComponent = class _ServiceTypeComponent {
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
    this.serviceTypeTable = [];
    this.selectedServiceType = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      serviceTypeId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      serviceTypeId: "Service Type",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.serviceTypeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Service Type"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "serviceTypeId", header: "Service Type ID" },
      { field: "serviceTypeText", header: "Service Type Name" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
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
          this.serviceTypeTable = res;
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
    const choosen = this.selectedServiceType[this.selectedServiceType.length - 1];
    this.selectedServiceType.length = 0;
    this.selectedServiceType.push(choosen);
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
        this.deleterecord(this.selectedServiceType[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedServiceType.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedServiceType[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/serviceType-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedServiceType.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedServiceType, module: "Service Type", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedServiceType[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.serviceTypeId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.serviceTypeId + " deleted successfully" });
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
    const exportData = this.serviceTypeTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Service Type");
  }
  getSearchDropdown() {
    this.serviceTypeTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.serviceTypeId != null) {
        this.serviceTypeDropdown.push({ value: res.serviceTypeId, label: res.serviceTypeText });
        this.serviceTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.serviceTypeDropdown, "value");
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
        this.serviceTypeTable = res;
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
      serviceTypeId: [],
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
_ServiceTypeComponent.\u0275fac = function ServiceTypeComponent_Factory(t) {
  return new (t || _ServiceTypeComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ServiceTypeService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ServiceTypeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceTypeComponent, selectors: [["app-service-type"]], viewQuery: function ServiceTypeComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c016, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 46, vars: 28, consts: [["serviceType", ""], ["ServiceTypeTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "serviceTypeId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function ServiceTypeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Service Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function ServiceTypeComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function ServiceTypeComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function ServiceTypeComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function ServiceTypeComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function ServiceTypeComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function ServiceTypeComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const serviceType_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(serviceType_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function ServiceTypeComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ServiceTypeTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(ServiceTypeTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Service Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "div")(30, "img", 25);
    \u0275\u0275listener("click", function ServiceTypeComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 26);
    \u0275\u0275listener("click", function ServiceTypeComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275listener("click", function ServiceTypeComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 28);
    \u0275\u0275listener("onRemove", function ServiceTypeComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ServiceTypeComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "p-table", 30, 1);
    \u0275\u0275template(40, ServiceTypeComponent_ng_template_40_Template, 4, 2, "ng-template", 31)(41, ServiceTypeComponent_ng_template_41_Template, 4, 5, "ng-template", 32)(42, ServiceTypeComponent_ng_template_42_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "mat-menu", 34, 2);
    \u0275\u0275template(45, ServiceTypeComponent_ng_template_45_Template, 4, 0, "ng-template", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c19));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c29));
    \u0275\u0275property("options", ctx.serviceTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c29));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c29));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c29));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.serviceTypeTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c37));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=service-type.component.css.map */"] });
var ServiceTypeComponent = _ServiceTypeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceTypeComponent, { className: "ServiceTypeComponent", filePath: "src\\app\\main\\id-masters\\service-type\\service-type.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/service-type/service-type-new/service-type-new.component.ts
var _c017 = () => ({ "width": "100%" });
function ServiceTypeNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ServiceTypeNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function ServiceTypeNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ServiceTypeNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, ServiceTypeNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, ServiceTypeNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function ServiceTypeNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function ServiceTypeNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function ServiceTypeNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
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
function ServiceTypeNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
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
function ServiceTypeNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, ServiceTypeNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, ServiceTypeNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Service Type ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275template(15, ServiceTypeNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 24);
    \u0275\u0275text(18, "Service Type Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, ServiceTypeNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 19);
    \u0275\u0275text(23, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18)(26, "p", 19);
    \u0275\u0275text(27, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "p-dropdown", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 28)(30, "button", 29);
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 30);
    \u0275\u0275listener("click", function ServiceTypeNewComponent_ng_template_12_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c017));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(20, _c017));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c017));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(22, _c017));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("serviceTypeId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("serviceTypeText")) == null ? null : tmp_13_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("serviceTypeText"));
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c017));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ServiceTypeNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ServiceTypeNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
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
function ServiceTypeNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function ServiceTypeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function ServiceTypeNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function ServiceTypeNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, ServiceTypeNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, ServiceTypeNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _ServiceTypeNewComponent = class _ServiceTypeNewComponent {
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
      serviceTypeId: [],
      serviceTypeText: [, Validators.required],
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
      updatedOn: [""],
      statusId: ["16"]
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
    const dataToSend = ["Setup", "Service Type", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.serviceTypeId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["SERVICETYPE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.serviceTypeId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.serviceTypeId.disable();
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.serviceTypeId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/serviceType"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.serviceTypeId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/serviceType"]);
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
_ServiceTypeNewComponent.\u0275fac = function ServiceTypeNewComponent_Factory(t) {
  return new (t || _ServiceTypeNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ServiceTypeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_ServiceTypeNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceTypeNewComponent, selectors: [["app-service-type-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "serviceTypeId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "serviceTypeText", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/serviceType", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function ServiceTypeNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function ServiceTypeNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, ServiceTypeNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, ServiceTypeNewComponent_ng_template_12_Template, 34, 24, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ServiceTypeNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Service Type - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=service-type-new.component.css.map */"] });
var ServiceTypeNewComponent = _ServiceTypeNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceTypeNewComponent, { className: "ServiceTypeNewComponent", filePath: "src\\app\\main\\id-masters\\service-type\\service-type-new\\service-type-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/module/module.service.ts
var _ModuleService = class _ModuleService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(moduleId) {
    return this.http.get("/overc-idmaster-service/module/modulelist/" + moduleId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/module/bulk", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/module/" + obj[0].moduleId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId, obj);
  }
  Delete(moduleId) {
    return this.http.delete("/overc-idmaster-service/module/" + moduleId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/module/find", obj);
  }
};
_ModuleService.\u0275fac = function ModuleService_Factory(t) {
  return new (t || _ModuleService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ModuleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModuleService, factory: _ModuleService.\u0275fac, providedIn: "root" });
var ModuleService = _ModuleService;

// src/app/main/id-masters/module/module.component.ts
var _c018 = ["module"];
var _c110 = () => ({ width: "80vw" });
var _c210 = () => ({ "width": "100%" });
var _c38 = () => ({ "width": "100rem" });
function ModuleComponent_ng_template_48_th_3_Template(rf, ctx) {
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
function ModuleComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 35);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ModuleComponent_ng_template_48_th_3_Template, 3, 3, "th", 37);
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
function ModuleComponent_ng_template_49_td_3_ng_container_1_Template(rf, ctx) {
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
function ModuleComponent_ng_template_49_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ModuleComponent_ng_template_49_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ModuleComponent_ng_template_49_td_3_ng_container_1_Template, 2, 1, "ng-container", 43)(2, ModuleComponent_ng_template_49_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function ModuleComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40)(2, "p-checkbox", 41);
    \u0275\u0275listener("onChange", function ModuleComponent_ng_template_49_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ModuleComponent_ng_template_49_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedModule, $event) || (ctx_r6.selectedModule = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ModuleComponent_ng_template_49_td_3_Template, 4, 2, "td", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedModule[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedModule);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function ModuleComponent_ng_template_50_Template(rf, ctx) {
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
var _ModuleComponent = class _ModuleComponent {
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
    this.moduleTable = [];
    this.selectedModule = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      menuId: [],
      subMenuId: [],
      moduleId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      menuId: "Menu",
      subMenuId: "Sub Menu",
      moduleId: "Module",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.menuDropdown = [];
    this.subMenuDropdown = [];
    this.moduleDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Module"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyIdAndDescription", header: "Company" },
      { field: "moduleId", header: "Module ID" },
      { field: "moduleDescription", header: "Description" },
      { field: "menuName", header: "Menu" },
      { field: "subMenuName", header: "Sub Menu" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "statusId", header: "Status ID" },
      { field: "languageId", header: "Language ID" },
      { field: "companyId", header: "Company ID" },
      { field: "menuId", header: "Menu ID" },
      { field: "subMenuId", header: "Sub Menu ID" },
      { field: "languageIdAndDescription", header: "Language" },
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
          res = this.cs.removeDuplicatesFromArrayList(res, "moduleId");
          this.moduleTable = res;
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
    const choosen = this.selectedModule[this.selectedModule.length - 1];
    this.selectedModule.length = 0;
    this.selectedModule.push(choosen);
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
        this.deleterecord(this.selectedModule[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    console.log(3);
    if (this.selectedModule.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedModule[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/idMaster/module-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedModule.length === 0) {
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
        line: this.selectedModule,
        module: "Module",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedModule[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.moduleId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines.moduleId + " Deleted successfully"
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
    const exportData = this.moduleTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Module");
  }
  getSearchDropdown() {
    this.moduleTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.menuId != null) {
        this.menuDropdown.push({ value: res.menuId, label: res.menuName });
        this.menuDropdown = this.cs.removeDuplicatesFromArrayList(this.menuDropdown, "value");
      }
      if (res.subMenuId != null) {
        this.subMenuDropdown.push({ value: res.subMenuId, label: res.subMenuName });
        this.subMenuDropdown = this.cs.removeDuplicatesFromArrayList(this.subMenuDropdown, "value");
      }
      if (res.moduleId != null) {
        this.moduleDropdown.push({ value: res.moduleId, label: res.moduleDescription });
        this.moduleDropdown = this.cs.removeDuplicatesFromArrayList(this.moduleDropdown, "value");
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
        this.moduleTable = res;
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
      menuId: [],
      subMenuId: [],
      moduleId: [],
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
_ModuleComponent.\u0275fac = function ModuleComponent_Factory(t) {
  return new (t || _ModuleComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ModuleService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ModuleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleComponent, selectors: [["app-module"]], viewQuery: function ModuleComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c018, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 51, vars: 40, consts: [["module", ""], ["moduleTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "moduleId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "menuId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subMenuId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function ModuleComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Module ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function ModuleComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function ModuleComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function ModuleComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function ModuleComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function ModuleComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function ModuleComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const module_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(module_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function ModuleComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const moduleTag_r3 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(moduleTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "p", 20);
    \u0275\u0275text(30, "Sub Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19)(33, "p", 20);
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 25)(37, "div")(38, "img", 26);
    \u0275\u0275listener("click", function ModuleComponent_Template_img_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "button", 27);
    \u0275\u0275listener("click", function ModuleComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 28);
    \u0275\u0275listener("click", function ModuleComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(43, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "p-chips", 29);
    \u0275\u0275listener("onRemove", function ModuleComponent_Template_p_chips_onRemove_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ModuleComponent_Template_p_chips_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 30)(46, "p-table", 31, 1);
    \u0275\u0275template(48, ModuleComponent_ng_template_48_Template, 4, 2, "ng-template", 32)(49, ModuleComponent_ng_template_49_Template, 4, 5, "ng-template", 33)(50, ModuleComponent_ng_template_50_Template, 4, 1, "ng-template", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c110));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c210));
    \u0275\u0275property("options", ctx.moduleDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c210));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c210));
    \u0275\u0275property("options", ctx.menuDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c210));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c210));
    \u0275\u0275property("options", ctx.subMenuDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c210));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c210));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c210));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.moduleTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(39, _c38));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=module.component.css.map */"] });
var ModuleComponent = _ModuleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleComponent, { className: "ModuleComponent", filePath: "src\\app\\main\\id-masters\\module\\module.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/module/module-new/module-new.component.ts
var _c019 = () => ({ "width": "100%" });
function ModuleNewComponent_ng_template_12_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ModuleNewComponent_ng_template_12_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
}
function ModuleNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275template(2, ModuleNewComponent_ng_template_12_p_2_Template, 2, 0, "p", 15)(3, ModuleNewComponent_ng_template_12_img_3_Template, 1, 0, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 17);
    \u0275\u0275text(6, "General");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.active != 0);
  }
}
function ModuleNewComponent_ng_template_13_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ModuleNewComponent_ng_template_13_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ModuleNewComponent_ng_template_13_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ModuleNewComponent_ng_template_13_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 34)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ModuleNewComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "p", 22);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 23);
    \u0275\u0275template(5, ModuleNewComponent_ng_template_13_mat_error_5_Template, 3, 1, "mat-error", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21)(7, "p", 22);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21)(11, "p", 26);
    \u0275\u0275text(12, "Menu ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-dropdown", 27);
    \u0275\u0275listener("onChange", function ModuleNewComponent_ng_template_13_Template_p_dropdown_onChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuIdChanged($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ModuleNewComponent_ng_template_13_mat_error_14_Template, 3, 1, "mat-error", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21)(16, "p", 26);
    \u0275\u0275text(17, "Module ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 28);
    \u0275\u0275template(19, ModuleNewComponent_ng_template_13_mat_error_19_Template, 3, 1, "mat-error", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 21)(21, "p", 26);
    \u0275\u0275text(22, "Module Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 29);
    \u0275\u0275listener("keydown", function ModuleNewComponent_ng_template_13_Template_input_keydown_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.space($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ModuleNewComponent_ng_template_13_mat_error_24_Template, 3, 1, "mat-error", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21)(26, "p", 22);
    \u0275\u0275text(27, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "p-dropdown", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 31)(30, "button", 32);
    \u0275\u0275text(31, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 33);
    \u0275\u0275listener("click", function ModuleNewComponent_ng_template_13_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextToSecond());
    });
    \u0275\u0275text(33, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_15_0;
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c019));
    \u0275\u0275property("options", ctx_r1.languageIdList)("panelStyle", \u0275\u0275pureFunction0(23, _c019));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c019));
    \u0275\u0275property("options", ctx_r1.companyIdList)("panelStyle", \u0275\u0275pureFunction0(25, _c019));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c019));
    \u0275\u0275property("options", ctx_r1.menuIdList)("ngClass", ((tmp_12_0 = ctx_r1.form.get("menuId")) == null ? null : tmp_12_0.invalid) && ctx_r1.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(27, _c019));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorHandling("menuId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_15_0 = ctx_r1.form.get("moduleId")) == null ? null : tmp_15_0.invalid) && ctx_r1.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorHandling("moduleId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_17_0 = ctx_r1.form.get("moduleDescription")) == null ? null : tmp_17_0.invalid) && ctx_r1.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorHandling("moduleDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c019));
    \u0275\u0275property("options", ctx_r1.status);
  }
}
function ModuleNewComponent_ng_template_15_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function ModuleNewComponent_ng_template_15_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
}
function ModuleNewComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function ModuleNewComponent_ng_template_15_Template_div_click_0_listener() {
      const onClick_r5 = \u0275\u0275restoreView(_r4).onClick;
      return \u0275\u0275resetView(onClick_r5.emit());
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275template(2, ModuleNewComponent_ng_template_15_p_2_Template, 2, 0, "p", 15)(3, ModuleNewComponent_ng_template_15_img_3_Template, 1, 0, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 17);
    \u0275\u0275text(6, "Lines");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.active != 0);
  }
}
function ModuleNewComponent_ng_template_16_ng_template_2_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r7.header, " ");
  }
}
function ModuleNewComponent_ng_template_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 39);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ModuleNewComponent_ng_template_16_ng_template_2_th_3_Template, 2, 1, "th", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", columns_r8);
  }
}
function ModuleNewComponent_ng_template_16_ng_template_3_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r9 = \u0275\u0275nextContext().$implicit;
    const rowData_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r10[col_r9.field], " ");
  }
}
function ModuleNewComponent_ng_template_16_ng_template_3_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r10.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ModuleNewComponent_ng_template_16_ng_template_3_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ModuleNewComponent_ng_template_16_ng_template_3_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, ModuleNewComponent_ng_template_16_ng_template_3_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    const dateTemplate_r11 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r9.format !== "date")("ngIfElse", dateTemplate_r11);
  }
}
function ModuleNewComponent_ng_template_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275element(2, "p-tableCheckbox", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ModuleNewComponent_ng_template_16_ng_template_3_td_3_Template, 4, 2, "td", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r10 = ctx.$implicit;
    const columns_r12 = ctx.columns;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selectedRow", ctx_r1.selectedModule[0] === rowData_r10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r10);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r12);
  }
}
function ModuleNewComponent_ng_template_16_ng_template_4_Template(rf, ctx) {
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
function ModuleNewComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-table", 36, 1);
    \u0275\u0275twoWayListener("selectionChange", function ModuleNewComponent_ng_template_16_Template_p_table_selectionChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedModule, $event) || (ctx_r1.selectedModule = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(2, ModuleNewComponent_ng_template_16_ng_template_2_Template, 4, 1, "ng-template", 10)(3, ModuleNewComponent_ng_template_16_ng_template_3_Template, 4, 4, "ng-template", 37)(4, ModuleNewComponent_ng_template_16_ng_template_4_Template, 4, 1, "ng-template", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31)(6, "button", 32);
    \u0275\u0275text(7, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 33);
    \u0275\u0275listener("click", function ModuleNewComponent_ng_template_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("columns", ctx_r1.cols)("value", ctx_r1.moduleTable)("scrollable", true);
    \u0275\u0275twoWayProperty("selection", ctx_r1.selectedModule);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pageToken.pageflow != "New" ? "Update" : "Save", " ");
  }
}
function ModuleNewComponent_p_stepperPanel_17_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function ModuleNewComponent_p_stepperPanel_17_ng_template_1_Template_div_click_0_listener() {
      const onClick_r14 = \u0275\u0275restoreView(_r13).onClick;
      return \u0275\u0275resetView(onClick_r14.emit());
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "p", 46);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 47);
    \u0275\u0275text(6, " Admin ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.active == 2 ? "borderCircle" : "disabled text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function ModuleNewComponent_p_stepperPanel_17_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "p", 22);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21)(6, "p", 22);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21)(10, "p", 22);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 21)(14, "p", 22);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 31)(18, "button", 52);
    \u0275\u0275listener("click", function ModuleNewComponent_p_stepperPanel_17_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r16 = \u0275\u0275restoreView(_r15).prevCallback;
      return \u0275\u0275resetView(prevCallback_r16.emit());
    });
    \u0275\u0275text(19, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 33);
    \u0275\u0275listener("click", function ModuleNewComponent_p_stepperPanel_17_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pageToken.pageflow != "New" ? "Update" : "Save", " ");
  }
}
function ModuleNewComponent_p_stepperPanel_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, ModuleNewComponent_p_stepperPanel_17_ng_template_1_Template, 7, 2, "ng-template", 10)(2, ModuleNewComponent_p_stepperPanel_17_ng_template_2_Template, 22, 1, "ng-template", 11);
    \u0275\u0275elementEnd();
  }
}
var _ModuleNewComponent = class _ModuleNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, numberRangeService, auth, menuService) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.numberRangeService = numberRangeService;
    this.auth = auth;
    this.menuService = menuService;
    this.active = 0;
    this.status = [];
    this.moduleTable = [];
    this.selectedModule = [];
    this.cols = [];
    this.form = this.fb.group({
      companyId: [this.auth.companyId],
      languageId: [this.auth.languageId],
      addModule: [],
      companyIdAndDescription: [],
      createUpdate: [true],
      createdBy: [],
      createdOn: [""],
      delete: [true],
      deletionIndicator: [],
      languageIdAndDescription: [],
      menuId: [, Validators.required],
      menuName: [],
      moduleDescription: [, Validators.required],
      moduleId: [, Validators.required],
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
      subMenuId: [],
      statusId: ["16"],
      statusDescription: [],
      subMenuName: [],
      updatedBy: [],
      updatedOn: [""],
      view: [true]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.subMenuIdList = [];
    this.menuIdList = [];
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
    const dataToSend = ["Setup", "Module", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.moduleId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["MODULE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.moduleId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.moduleId.disable();
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
      this.cas.dropdownlist.setup.menu.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.menuIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.menu.key);
        this.menuIdList = this.cs.removeDuplicatesFromArrayList(this.menuIdList, "value");
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.service.Get(line.moduleId).subscribe({
      next: (res) => {
        if (res) {
          this.form.patchValue(res[0]);
          this.patchTableUpdate(res);
        }
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  patchTableUpdate(res) {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.languageId = [this.auth.languageId];
    obj.menuId = [this.form.controls.menuId.value];
    this.menuService.search(obj).subscribe({
      next: (menures) => {
        this.moduleTable = [];
        this.selectedModule = [];
        let combined = this.cs.removeDuplicateObj(res, menures);
        this.moduleTable = combined;
        this.selectedModule = res;
        this.cols = [
          { field: "menuId", header: "Menu ID" },
          { field: "menuName", header: "Menu Name" },
          { field: "subMenuId", header: "Sub Menu ID" },
          { field: "subMenuName", header: "Sub Menu Name" }
        ];
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  space(event) {
    if (event.target.selectionStart === 0 && event.code === "Space") {
      event.preventDefault();
    }
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
    this.selectedModule.forEach((x) => {
      x.moduleDescription = this.form.controls.moduleDescription.value;
      x.moduleId = this.form.controls.moduleId.value;
    });
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update(this.selectedModule).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].moduleId + " has been updated successfully"
          });
          this.router.navigate(["/main/idMaster/module"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create(this.selectedModule).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res[0].moduleId + " has been created successfully"
            });
            this.router.navigate(["/main/idMaster/module"]);
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
  menuIdChanged(event) {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.languageId = [this.auth.languageId];
    obj.menuId = [event.value];
    this.menuService.search(obj).subscribe({
      next: (res) => {
        this.moduleTable = [];
        this.selectedModule = [];
        this.moduleTable = res;
        this.selectedModule = res;
        this.cols = [
          { field: "menuId", header: "Menu ID" },
          { field: "menuName", header: "Menu Name" },
          { field: "subMenuId", header: "Sub Menu ID" },
          { field: "subMenuName", header: "Sub Menu Name" }
        ];
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  nextToSecond() {
    this.submitted = true;
    if (!this.form.controls.moduleId.value || !this.form.controls.moduleDescription.value || !this.form.controls.menuId.value) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    }
    this.active = 1;
    this.submitted = false;
  }
};
_ModuleNewComponent.\u0275fac = function ModuleNewComponent_Factory(t) {
  return new (t || _ModuleNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ModuleService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MenuService));
};
_ModuleNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleNewComponent, selectors: [["app-module-new"]], decls: 18, vars: 4, consts: [["stepper", ""], ["moduleTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "menuId", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "moduleId", "placeholder", "Enter", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "moduleDescription", "placeholder", "Enter", 1, "w-100", 3, "keydown", "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/module", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 27.8rem)", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "selection"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function ModuleNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "button", 6);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 7)(8, "form", 8)(9, "p-stepper", 9, 0);
    \u0275\u0275twoWayListener("activeStepChange", function ModuleNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(11, "p-stepperPanel");
    \u0275\u0275template(12, ModuleNewComponent_ng_template_12_Template, 7, 2, "ng-template", 10)(13, ModuleNewComponent_ng_template_13_Template, 34, 29, "ng-template", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-stepperPanel");
    \u0275\u0275template(15, ModuleNewComponent_ng_template_15_Template, 7, 2, "ng-template", 10)(16, ModuleNewComponent_ng_template_16_Template, 10, 5, "ng-template", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ModuleNewComponent_p_stepperPanel_17_Template, 3, 0, "p-stepperPanel", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Module- ", ctx.pageToken.pageflow, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgForOf, NgIf, RouterLink, PrimeTemplate, Table, TableCheckbox, TableHeaderCheckbox, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=module-new.component.css.map */"] });
var ModuleNewComponent = _ModuleNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleNewComponent, { className: "ModuleNewComponent", filePath: "src\\app\\main\\id-masters\\module\\module-new\\module-new.component.ts", lineNumber: 20 });
})();

// src/app/main/id-masters/province/province.component.ts
var _c020 = ["province"];
var _c111 = () => ({ width: "80vw" });
var _c211 = () => ({ "width": "100%" });
var _c39 = () => ({ "width": "100rem" });
function ProvinceComponent_ng_template_44_th_3_Template(rf, ctx) {
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
function ProvinceComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 37);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProvinceComponent_ng_template_44_th_3_Template, 3, 3, "th", 39);
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
function ProvinceComponent_ng_template_45_td_3_ng_container_1_Template(rf, ctx) {
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
function ProvinceComponent_ng_template_45_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ProvinceComponent_ng_template_45_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ProvinceComponent_ng_template_45_td_3_ng_container_1_Template, 2, 1, "ng-container", 45)(2, ProvinceComponent_ng_template_45_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function ProvinceComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "p-checkbox", 43);
    \u0275\u0275listener("onChange", function ProvinceComponent_ng_template_45_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ProvinceComponent_ng_template_45_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedProvince, $event) || (ctx_r6.selectedProvince = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ProvinceComponent_ng_template_45_td_3_Template, 4, 2, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedProvince[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedProvince);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function ProvinceComponent_ng_template_46_Template(rf, ctx) {
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
function ProvinceComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _ProvinceComponent = class _ProvinceComponent {
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
    this.provinceTable = [];
    this.selectedProvince = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      countryId: [],
      provinceId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      countryId: "Country",
      provinceId: "Province",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.countryDropdown = [];
    this.provinceDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Province"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "countryName", header: "Country" },
      { field: "provinceId", header: "Province ID" },
      { field: "provinceName", header: "Province Name" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "countryId", header: "Country ID" },
      { field: "companyId", header: "Company ID" },
      { field: "languageId", header: "Language ID" },
      { field: "statusId", header: "Status ID" },
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
          this.provinceTable = res;
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
    const choosen = this.selectedProvince[this.selectedProvince.length - 1];
    this.selectedProvince.length = 0;
    this.selectedProvince.push(choosen);
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
        this.deleterecord(this.selectedProvince[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedProvince.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedProvince[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/province-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedProvince.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedProvince, module: "Province", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedProvince[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.provinceId + " deleted successfully" });
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
    const exportData = this.provinceTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Province");
  }
  getSearchDropdown() {
    this.provinceTable.forEach((res) => {
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
      if (res.provinceId != null) {
        this.provinceDropdown.push({ value: res.provinceId, label: res.provinceName });
        this.provinceDropdown = this.cs.removeDuplicatesFromArrayList(this.provinceDropdown, "value");
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
        this.provinceTable = res;
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
_ProvinceComponent.\u0275fac = function ProvinceComponent_Factory(t) {
  return new (t || _ProvinceComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ProvinceService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ProvinceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProvinceComponent, selectors: [["app-province"]], viewQuery: function ProvinceComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c020, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 50, vars: 34, consts: [["province", ""], ["provinceTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "provinceId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function ProvinceComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Province ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function ProvinceComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function ProvinceComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function ProvinceComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function ProvinceComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function ProvinceComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function ProvinceComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const province_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(province_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function ProvinceComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const provinceTag_r3 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(provinceTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25)(33, "div")(34, "img", 26);
    \u0275\u0275listener("click", function ProvinceComponent_Template_img_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "button", 27);
    \u0275\u0275listener("click", function ProvinceComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 28);
    \u0275\u0275listener("click", function ProvinceComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(39, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "p-chips", 29);
    \u0275\u0275listener("onRemove", function ProvinceComponent_Template_p_chips_onRemove_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ProvinceComponent_Template_p_chips_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 30)(42, "p-table", 31, 1);
    \u0275\u0275template(44, ProvinceComponent_ng_template_44_Template, 4, 2, "ng-template", 32)(45, ProvinceComponent_ng_template_45_Template, 4, 5, "ng-template", 33)(46, ProvinceComponent_ng_template_46_Template, 4, 1, "ng-template", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "mat-menu", 35, 2);
    \u0275\u0275template(49, ProvinceComponent_ng_template_49_Template, 4, 0, "ng-template", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c111));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c211));
    \u0275\u0275property("options", ctx.countryDropdown)("panelStyle", \u0275\u0275pureFunction0(28, _c211));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c211));
    \u0275\u0275property("options", ctx.provinceDropdown)("panelStyle", \u0275\u0275pureFunction0(30, _c211));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c211));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c211));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.provinceTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(33, _c39));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=province.component.css.map */"] });
var ProvinceComponent = _ProvinceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProvinceComponent, { className: "ProvinceComponent", filePath: "src\\app\\main\\id-masters\\province\\province.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/province/province-new/province-new.component.ts
var _c021 = () => ({ "width": "100%" });
function ProvinceNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ProvinceNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function ProvinceNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ProvinceNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, ProvinceNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, ProvinceNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
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
function ProvinceNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
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
function ProvinceNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
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
function ProvinceNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
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
function ProvinceNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
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
function ProvinceNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
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
function ProvinceNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, ProvinceNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, ProvinceNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 22);
    \u0275\u0275text(13, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 23);
    \u0275\u0275template(15, ProvinceNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 22);
    \u0275\u0275text(18, "Province ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275template(20, ProvinceNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 22);
    \u0275\u0275text(23, "Province Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275template(25, ProvinceNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "p", 18);
    \u0275\u0275text(28, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 17)(31, "p", 18);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-dropdown", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 28)(35, "button", 29);
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 30);
    \u0275\u0275listener("click", function ProvinceNewComponent_ng_template_9_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c021));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(28, _c021));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c021));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(30, _c021));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c021));
    \u0275\u0275property("options", ctx_r2.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(32, _c021))("ngClass", ((tmp_16_0 = ctx_r2.form.get("countryId")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("provinceId")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("provinceId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("provinceName")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("provinceName"));
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c021));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ProvinceNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ProvinceNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
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
function ProvinceNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function ProvinceNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function ProvinceNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
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
function ProvinceNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, ProvinceNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, ProvinceNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _ProvinceNewComponent = class _ProvinceNewComponent {
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
      countryId: [, Validators.required],
      countryName: [],
      provinceId: [, Validators.required],
      provinceName: [, Validators.required],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      statusId: ["16", Validators.required],
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
      updatedBy: [],
      updatedOn: [""]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
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
    const dataToSend = ["Setup", "Province", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.countryId.disable();
      this.form.controls.provinceId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["PROVINCE"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.provinceId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.provinceId.disable();
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
      this.cas.dropdownlist.setup.province.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.countryIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.country.key);
        this.provinceIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.province.key);
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.provinceId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/province"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.provinceId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/province"]);
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
_ProvinceNewComponent.\u0275fac = function ProvinceNewComponent_Factory(t) {
  return new (t || _ProvinceNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProvinceService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_ProvinceNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProvinceNewComponent, selectors: [["app-province-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "countryId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle", "ngClass"], ["formControlName", "provinceId", "maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["pInputText", "", "formControlName", "provinceName", "maxlength", "50", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/province", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function ProvinceNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function ProvinceNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, ProvinceNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, ProvinceNewComponent_ng_template_9_Template, 39, 34, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProvinceNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Province - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=province-new.component.css.map */"] });
var ProvinceNewComponent = _ProvinceNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProvinceNewComponent, { className: "ProvinceNewComponent", filePath: "src\\app\\main\\id-masters\\province\\province-new\\province-new.component.ts", lineNumber: 18 });
})();

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

// src/app/main/id-masters/district/district.component.ts
var _c022 = ["district"];
var _c112 = () => ({ width: "80vw" });
var _c212 = () => ({ "width": "100%" });
var _c310 = () => ({ "width": "100rem" });
function DistrictComponent_ng_template_48_th_3_Template(rf, ctx) {
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
function DistrictComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DistrictComponent_ng_template_48_th_3_Template, 3, 3, "th", 40);
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
function DistrictComponent_ng_template_49_td_3_ng_container_1_Template(rf, ctx) {
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
function DistrictComponent_ng_template_49_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function DistrictComponent_ng_template_49_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, DistrictComponent_ng_template_49_td_3_ng_container_1_Template, 2, 1, "ng-container", 46)(2, DistrictComponent_ng_template_49_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function DistrictComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "p-checkbox", 44);
    \u0275\u0275listener("onChange", function DistrictComponent_ng_template_49_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function DistrictComponent_ng_template_49_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedDistrict, $event) || (ctx_r6.selectedDistrict = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, DistrictComponent_ng_template_49_td_3_Template, 4, 2, "td", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedDistrict[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedDistrict);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function DistrictComponent_ng_template_50_Template(rf, ctx) {
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
function DistrictComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _DistrictComponent = class _DistrictComponent {
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
    this.districtTable = [];
    this.selectedDistrict = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      countryId: [],
      provinceId: [],
      districtId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      countryId: "Country",
      provinceId: "Province",
      districtId: "District",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.countryDropdown = [];
    this.provinceDropdown = [];
    this.districtDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "District"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "districtId", header: "District ID" },
      { field: "districtName", header: "District Name" },
      { field: "countryName", header: "Country" },
      { field: "provinceName", header: "Province" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "countryId", header: "Country ID" },
      { field: "provinceId", header: "Province ID" },
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
          this.districtTable = res;
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
    const choosen = this.selectedDistrict[this.selectedDistrict.length - 1];
    this.selectedDistrict.length = 0;
    this.selectedDistrict.push(choosen);
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
        this.deleterecord(this.selectedDistrict[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedDistrict.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedDistrict[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/district-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedDistrict.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedDistrict, module: "District", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedDistrict[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.districtId + " deleted successfully" });
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
    const exportData = this.districtTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "District");
  }
  getSearchDropdown() {
    this.districtTable.forEach((res) => {
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
      if (res.provinceId != null) {
        this.provinceDropdown.push({ value: res.provinceId, label: res.provinceName });
        this.provinceDropdown = this.cs.removeDuplicatesFromArrayList(this.provinceDropdown, "value");
      }
      if (res.districtId != null) {
        this.districtDropdown.push({ value: res.districtId, label: res.districtName });
        this.districtDropdown = this.cs.removeDuplicatesFromArrayList(this.districtDropdown, "value");
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
        this.districtTable = res;
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
      provinceId: [],
      districtId: [],
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
_DistrictComponent.\u0275fac = function DistrictComponent_Factory(t) {
  return new (t || _DistrictComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(DistrictService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_DistrictComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistrictComponent, selectors: [["app-district"]], viewQuery: function DistrictComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c022, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 54, vars: 40, consts: [["district", ""], ["districtTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "provinceId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "districtId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function DistrictComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "District ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function DistrictComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function DistrictComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function DistrictComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function DistrictComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function DistrictComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function DistrictComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const district_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(district_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function DistrictComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const districtTag_r3 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(districtTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Province");
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
    \u0275\u0275listener("click", function DistrictComponent_Template_img_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "button", 28);
    \u0275\u0275listener("click", function DistrictComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 29);
    \u0275\u0275listener("click", function DistrictComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(43, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "p-chips", 30);
    \u0275\u0275listener("onRemove", function DistrictComponent_Template_p_chips_onRemove_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function DistrictComponent_Template_p_chips_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31)(46, "p-table", 32, 1);
    \u0275\u0275template(48, DistrictComponent_ng_template_48_Template, 4, 2, "ng-template", 33)(49, DistrictComponent_ng_template_49_Template, 4, 5, "ng-template", 34)(50, DistrictComponent_ng_template_50_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "mat-menu", 36, 2);
    \u0275\u0275template(53, DistrictComponent_ng_template_53_Template, 4, 0, "ng-template", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c112));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c212));
    \u0275\u0275property("options", ctx.countryDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c212));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c212));
    \u0275\u0275property("options", ctx.provinceDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c212));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c212));
    \u0275\u0275property("options", ctx.districtDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c212));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c212));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c212));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.districtTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(39, _c310));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=district.component.css.map */"] });
var DistrictComponent = _DistrictComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistrictComponent, { className: "DistrictComponent", filePath: "src\\app\\main\\id-masters\\district\\district.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/district/district-new/district-new.component.ts
var _c023 = () => ({ "width": "100%" });
function DistrictNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function DistrictNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function DistrictNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function DistrictNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, DistrictNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, DistrictNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function DistrictNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function DistrictNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function DistrictNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
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
function DistrictNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
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
function DistrictNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
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
function DistrictNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
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
function DistrictNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, DistrictNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, DistrictNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-dropdown", 24);
    \u0275\u0275listener("onChange", function DistrictNewComponent_ng_template_12_Template_p_dropdown_onChange_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.districtChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DistrictNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 25);
    \u0275\u0275template(20, DistrictNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "District ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 26);
    \u0275\u0275template(25, DistrictNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "District Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, DistrictNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
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
    \u0275\u0275listener("click", function DistrictNewComponent_ng_template_12_Template_button_click_42_listener() {
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
    let tmp_24_0;
    let tmp_26_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c023));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(35, _c023));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c023));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(37, _c023));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c023));
    \u0275\u0275property("options", ctx_r2.countryIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("countryId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(39, _c023));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c023));
    \u0275\u0275property("options", ctx_r2.provinceIdList)("ngClass", ((tmp_20_0 = ctx_r2.form.get("provinceId")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(41, _c023));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("provinceId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_24_0 = ctx_r2.form.get("districtId")) == null ? null : tmp_24_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("districtId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_26_0 = ctx_r2.form.get("districtName")) == null ? null : tmp_26_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("districtName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c023));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function DistrictNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function DistrictNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
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
function DistrictNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function DistrictNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 32);
    \u0275\u0275listener("click", function DistrictNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function DistrictNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, DistrictNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, DistrictNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _DistrictNewComponent = class _DistrictNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, numberRangeService, auth, provinceService) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.numberRangeService = numberRangeService;
    this.auth = auth;
    this.provinceService = provinceService;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      districtId: [, Validators.required],
      districtName: [, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      countryId: [, Validators.required],
      countryName: [],
      provinceId: [, Validators.required],
      provinceName: [],
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
    const dataToSend = ["Setup", "District", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.countryId.disable();
      this.form.controls.provinceId.disable();
      this.form.controls.districtId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["DISTRICT"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.districtId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.districtId.disable();
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
      this.cas.dropdownlist.setup.province.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.countryIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.country.key);
        this.provinceIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.province.key);
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.districtId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/district"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.districtId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/district"]);
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
  districtChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.countryId = [this.form.controls.countryId.value];
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
};
_DistrictNewComponent.\u0275fac = function DistrictNewComponent_Factory(t) {
  return new (t || _DistrictNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DistrictService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProvinceService));
};
_DistrictNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistrictNewComponent, selectors: [["app-district-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "provinceId", "appendTo", "body", 3, "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "districtId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "districtName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/district", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function DistrictNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function DistrictNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, DistrictNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, DistrictNewComponent_ng_template_12_Template, 44, 43, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, DistrictNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("District - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=district-new.component.css.map */"] });
var DistrictNewComponent = _DistrictNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistrictNewComponent, { className: "DistrictNewComponent", filePath: "src\\app\\main\\id-masters\\district\\district-new\\district-new.component.ts", lineNumber: 20 });
})();

// src/app/main/id-masters/city/city.component.ts
var _c024 = ["city"];
var _c113 = () => ({ width: "80vw" });
var _c213 = () => ({ "width": "100%" });
var _c311 = () => ({ "width": "110rem" });
function CityComponent_ng_template_52_th_3_Template(rf, ctx) {
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
function CityComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 39);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CityComponent_ng_template_52_th_3_Template, 3, 3, "th", 41);
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
function CityComponent_ng_template_53_td_3_ng_container_1_Template(rf, ctx) {
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
function CityComponent_ng_template_53_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CityComponent_ng_template_53_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CityComponent_ng_template_53_td_3_ng_container_1_Template, 2, 1, "ng-container", 47)(2, CityComponent_ng_template_53_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function CityComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44)(2, "p-checkbox", 45);
    \u0275\u0275listener("onChange", function CityComponent_ng_template_53_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CityComponent_ng_template_53_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedCity, $event) || (ctx_r6.selectedCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CityComponent_ng_template_53_td_3_Template, 4, 2, "td", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedCity[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedCity);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function CityComponent_ng_template_54_Template(rf, ctx) {
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
function CityComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 49);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CityComponent = class _CityComponent {
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
    this.cityTable = [];
    this.selectedCity = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      countryId: [],
      provinceId: [],
      districtId: [],
      cityId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      countryId: "Country",
      provinceId: "Province",
      districtId: "District",
      cityId: "City",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.countryDropdown = [];
    this.provinceDropdown = [];
    this.districtDropdown = [];
    this.cityDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "City"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "cityId", header: " City ID" },
      { field: "cityName", header: "City Name" },
      { field: "countryName", header: "Country" },
      { field: "provinceName", header: "Province" },
      { field: "districtName", header: "District" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "companyId", header: "Company ID" },
      { field: "countryId", header: "Country ID" },
      { field: "provinceId", header: "Province ID" },
      { field: "districtId", header: "District ID" },
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
          this.cityTable = res;
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
    const choosen = this.selectedCity[this.selectedCity.length - 1];
    this.selectedCity.length = 0;
    this.selectedCity.push(choosen);
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
        this.deleterecord(this.selectedCity[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedCity.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCity[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/city-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCity.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedCity, module: "City", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCity[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.cityId + " deleted successfully" });
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
    const exportData = this.cityTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "City");
  }
  getSearchDropdown() {
    this.cityTable.forEach((res) => {
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
      if (res.provinceId != null) {
        this.provinceDropdown.push({ value: res.provinceId, label: res.provinceName });
        this.provinceDropdown = this.cs.removeDuplicatesFromArrayList(this.provinceDropdown, "value");
      }
      if (res.districtId != null) {
        this.districtDropdown.push({ value: res.districtId, label: res.districtName });
        this.districtDropdown = this.cs.removeDuplicatesFromArrayList(this.districtDropdown, "value");
      }
      if (res.cityId != null) {
        this.cityDropdown.push({ value: res.cityId, label: res.cityName });
        this.cityDropdown = this.cs.removeDuplicatesFromArrayList(this.cityDropdown, "value");
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
        this.cityTable = res;
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
      provinceId: [],
      districtId: [],
      cityId: [],
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
_CityComponent.\u0275fac = function CityComponent_Factory(t) {
  return new (t || _CityComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CityService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CityComponent, selectors: [["app-city"]], viewQuery: function CityComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c024, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 58, vars: 46, consts: [["city", ""], ["cityTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "provinceId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "districtId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "cityId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CityComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "City ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function CityComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function CityComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function CityComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function CityComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function CityComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function CityComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const city_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(city_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function CityComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const cityTag_r3 = \u0275\u0275reference(51);
      return \u0275\u0275resetView(cityTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "p", 21);
    \u0275\u0275text(34, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 20)(37, "p", 21);
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-multiSelect", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 27)(41, "div")(42, "img", 28);
    \u0275\u0275listener("click", function CityComponent_Template_img_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "button", 29);
    \u0275\u0275listener("click", function CityComponent_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(45, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 30);
    \u0275\u0275listener("click", function CityComponent_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(47, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "p-chips", 31);
    \u0275\u0275listener("onRemove", function CityComponent_Template_p_chips_onRemove_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CityComponent_Template_p_chips_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 32)(50, "p-table", 33, 1);
    \u0275\u0275template(52, CityComponent_ng_template_52_Template, 4, 2, "ng-template", 34)(53, CityComponent_ng_template_53_Template, 4, 5, "ng-template", 35)(54, CityComponent_ng_template_54_Template, 4, 1, "ng-template", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "mat-menu", 37, 2);
    \u0275\u0275template(57, CityComponent_ng_template_57_Template, 4, 0, "ng-template", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c113));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c213));
    \u0275\u0275property("options", ctx.countryDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c213));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c213));
    \u0275\u0275property("options", ctx.provinceDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c213));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c213));
    \u0275\u0275property("options", ctx.districtDropdown)("panelStyle", \u0275\u0275pureFunction0(40, _c213));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c213));
    \u0275\u0275property("options", ctx.cityDropdown)("panelStyle", \u0275\u0275pureFunction0(42, _c213));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c213));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(44, _c213));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.cityTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(45, _c311));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=city.component.css.map */"] });
var CityComponent = _CityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CityComponent, { className: "CityComponent", filePath: "src\\app\\main\\id-masters\\city\\city.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/city/city-new/city-new.component.ts
var _c025 = () => ({ "width": "100%" });
function CityNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CityNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function CityNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CityNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, CityNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, CityNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function CityNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function CityNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function CityNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
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
function CityNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
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
function CityNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
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
function CityNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
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
function CityNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
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
function CityNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, CityNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, CityNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-dropdown", 24);
    \u0275\u0275listener("onChange", function CityNewComponent_ng_template_12_Template_p_dropdown_onChange_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.countryChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CityNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-dropdown", 25);
    \u0275\u0275listener("onChange", function CityNewComponent_ng_template_12_Template_p_dropdown_onChange_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.provinceChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CityNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "p-dropdown", 26);
    \u0275\u0275template(25, CityNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "City ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, CityNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 23);
    \u0275\u0275text(33, "City Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275template(35, CityNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18)(37, "p", 19);
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-dropdown", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 18)(41, "p", 19);
    \u0275\u0275text(42, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 31)(45, "button", 32);
    \u0275\u0275text(46, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 33);
    \u0275\u0275listener("click", function CityNewComponent_ng_template_12_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_20_0;
    let tmp_26_0;
    let tmp_30_0;
    let tmp_32_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c025));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(42, _c025));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c025));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(44, _c025));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c025));
    \u0275\u0275property("options", ctx_r2.countryIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("countryId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(46, _c025));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c025));
    \u0275\u0275property("options", ctx_r2.provinceIdList)("ngClass", ((tmp_20_0 = ctx_r2.form.get("provinceId")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(48, _c025));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("provinceId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(49, _c025));
    \u0275\u0275property("options", ctx_r2.districtIdList)("ngClass", ((tmp_26_0 = ctx_r2.form.get("districtId")) == null ? null : tmp_26_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(50, _c025));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("districtId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_30_0 = ctx_r2.form.get("cityId")) == null ? null : tmp_30_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("cityId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_32_0 = ctx_r2.form.get("cityName")) == null ? null : tmp_32_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("cityName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(51, _c025));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CityNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CityNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 35);
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
function CityNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 31)(18, "button", 42);
    \u0275\u0275listener("click", function CityNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 33);
    \u0275\u0275listener("click", function CityNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function CityNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CityNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, CityNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _CityNewComponent = class _CityNewComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService, cas, auth, provinceService, districtService) {
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
    this.provinceService = provinceService;
    this.districtService = districtService;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      cityId: [, Validators.required],
      cityName: [, Validators.required],
      districtId: [, Validators.required],
      districtName: [],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      countryId: [, Validators.required],
      countryName: [],
      provinceId: [, Validators.required],
      provinceName: [],
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
    this.provinceIdList = [];
    this.districtIdList = [];
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
    const dataToSend = ["Setup", "City", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.cityId.disable();
      this.form.controls.countryId.disable();
      this.form.controls.provinceId.disable();
      this.form.controls.districtId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["CITY"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.cityId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.cityId.disable();
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
      this.cas.dropdownlist.setup.district.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.countryIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.country.key);
        this.provinceIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.province.key);
        this.districtIdList = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.district.key);
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.cityId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/city"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.cityId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/city"]);
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
  provinceChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.countryId = [this.form.controls.countryId.value];
    obj.provinceId = [this.form.controls.provinceId.value];
    this.districtIdList = [];
    this.spin.show();
    this.districtService.search(obj).subscribe({
      next: (result) => {
        this.districtIdList = this.cas.foreachlist(result, { key: "districtId", value: "districtName" });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_CityNewComponent.\u0275fac = function CityNewComponent_Factory(t) {
  return new (t || _CityNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CityService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProvinceService), \u0275\u0275directiveInject(DistrictService));
};
_CityNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CityNewComponent, selectors: [["app-city-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "provinceId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "districtId", "appendTo", "body", 3, "options", "ngClass", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "cityId", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "cityName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/city", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CityNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function CityNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, CityNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, CityNewComponent_ng_template_12_Template, 49, 52, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CityNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("City - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=city-new.component.css.map */"] });
var CityNewComponent = _CityNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CityNewComponent, { className: "CityNewComponent", filePath: "src\\app\\main\\id-masters\\city\\city-new\\city-new.component.ts", lineNumber: 20 });
})();

// src/app/main/id-masters/product/product-value/product-value.component.ts
var _c026 = () => ({ "width": "100%" });
var _ProductValueComponent = class _ProductValueComponent {
  constructor(dialogRef, data, cs, spin, route, router, path, fb, service, messageService, cas, auth, subProductService) {
    this.dialogRef = dialogRef;
    this.data = data;
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
    this.subProductService = subProductService;
    this.status = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      subProductId: [, Validators.required],
      subProductName: [],
      subProductValue: [],
      productId: [],
      productName: [, Validators.required],
      productValue: [],
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
    this.subProductIdList = [];
    this.subProductValueList = [];
    this.status = [
      { value: "2", label: "Inactive" },
      { value: "1", label: "Active" }
    ];
  }
  ngOnInit() {
    if (this.data.pageflow == "Edit") {
      this.form.patchValue(this.data.code);
    }
    this.subProductDropdown();
  }
  save() {
    this.submitted = true;
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }
  subProductDropdown() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    this.subProductIdList = [];
    this.spin.show();
    this.subProductService.search(obj).subscribe({
      next: (result) => {
        this.subProductIdList = this.cas.foreachlist(result, { key: "subProductId", value: "subProductName" });
        this.subProductIdList = this.cs.removeDuplicatesFromArrayList(this.subProductIdList, "value");
        if (this.data.pageflow == "Edit") {
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
_ProductValueComponent.\u0275fac = function ProductValueComponent_Factory(t) {
  return new (t || _ProductValueComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SubProductService));
};
_ProductValueComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductValueComponent, selectors: [["app-product-value"]], decls: 25, vars: 17, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], ["id", "subProductId", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductId", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "subProductValue", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductValue", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "pInputText", "", "formControlName", "referenceField1", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "float-right", "py-2", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function ProductValueComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Add Product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-dropdown", 9);
    \u0275\u0275listener("onChange", function ProductValueComponent_Template_p_dropdown_onChange_11_listener() {
      return ctx.subProductChanged();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "p", 8);
    \u0275\u0275text(14, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-dropdown", 11);
    \u0275\u0275listener("onChange", function ProductValueComponent_Template_p_dropdown_onChange_15_listener() {
      return ctx.subProductValueChanged();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "p", 13);
    \u0275\u0275text(18, "Value Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "button", 16);
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 17);
    \u0275\u0275listener("click", function ProductValueComponent_Template_button_click_23_listener() {
      return ctx.save();
    });
    \u0275\u0275text(24, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_8_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(13, _c026));
    \u0275\u0275property("options", ctx.subProductIdList)("ngClass", ((tmp_3_0 = ctx.form.get("subProductId")) == null ? null : tmp_3_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(14, _c026));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c026));
    \u0275\u0275property("options", ctx.subProductValueList)("ngClass", ((tmp_8_0 = ctx.form.get("subProductValue")) == null ? null : tmp_8_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(16, _c026));
  }
}, dependencies: [NgClass, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n/*# sourceMappingURL=product-value.component.css.map */"] });
var ProductValueComponent = _ProductValueComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductValueComponent, { className: "ProductValueComponent", filePath: "src\\app\\main\\id-masters\\product\\product-value\\product-value.component.ts", lineNumber: 20 });
})();

// src/app/main/id-masters/product/product-new/product-new.component.ts
var _c027 = () => ({ "width": "100%" });
function ProductNewComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 27)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ProductNewComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 27)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ProductNewComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 27)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ProductNewComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Sub Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Sub Product Value Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ProductNewComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "p", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "p", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "p", 28);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 29)(15, "img", 30);
    \u0275\u0275listener("click", function ProductNewComponent_ng_template_45_Template_img_click_15_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).rowIndex;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editItem("Edit", i_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "img", 31);
    \u0275\u0275listener("click", function ProductNewComponent_ng_template_45_Template_img_click_16_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).rowIndex;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeItem(i_r3));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r4.subProductId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r4.subProductName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r4.subProductValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r4.referenceField1, " ");
  }
}
var _ProductNewComponent = class _ProductNewComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService, cas, auth, dialog) {
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
      productName: [, Validators.required],
      productValue: [],
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
    this.productArray = [];
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
    const dataToSend = ["Setup", "Product", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.subProductId.disable();
      this.form.controls.productId.disable();
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
    obj.numberRangeObject = ["PRODUCT"];
    this.numberRangeService.search(obj).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
          this.form.controls.productId.patchValue(this.nextNumber);
          this.numCondition = "true";
          this.form.controls.referenceField10.patchValue(this.numCondition);
          this.form.controls.productId.disable();
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
  add() {
    const dialogRef = this.dialog.open(ProductValueComponent, {
      disableClose: true,
      width: "70%",
      height: "50%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: this.productArray.length + 1
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productArray.push(result);
        console.log(this.productArray);
      }
    });
  }
  removeItem(index) {
    this.productArray.splice(index, 1);
  }
  save() {
    this.submitted = true;
    if (this.productArray.length == 0) {
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
      this.productArray.forEach((x) => {
        x.languageId = this.auth.languageId;
        x.companyId = this.auth.companyId;
        x.productId = this.form.controls.productId.value;
        x.productName = this.form.controls.productName.value;
        x.statusId = this.form.controls.statusId.value;
        x.remark = this.form.controls.remark.value;
      });
      this.service.UpdateBulk(this.productArray).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].productId + " has been updated successfully"
          });
          this.router.navigate(["/main/idMaster/product"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.productArray.forEach((x) => {
        x.languageId = this.auth.languageId;
        x.companyId = this.auth.companyId;
        x.productId = this.form.controls.productId.value;
        x.productName = this.form.controls.productName.value;
        x.statusId = this.form.controls.statusId.value;
        x.remark = this.form.controls.remark.value;
      });
      this.service.CreateBulk(this.productArray).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res[0].productId + " has been created successfully"
            });
            this.router.navigate(["/main/idMaster/product"]);
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
  fill(line) {
    this.form.patchValue(line);
    this.spin.show();
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.productId = [line.productId];
    this.service.search(obj).subscribe({
      next: (res) => {
        console.log(res);
        this.productArray = res;
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
  editItem(data, i) {
    const dialogRef = this.dialog.open(ProductValueComponent, {
      disableClose: true,
      width: "70%",
      height: "50%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { pageflow: data, code: this.productArray[i] }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productArray.splice(i, 0);
        this.productArray.splice(i, 1, result);
        console.log(result);
        this.productArray = [...this.productArray];
      }
    });
  }
};
_ProductNewComponent.\u0275fac = function ProductNewComponent_Factory(t) {
  return new (t || _ProductNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialog));
};
_ProductNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductNewComponent, selectors: [["app-product-new"]], decls: 51, vars: 27, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "mx-auto", "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-4", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "productId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "formControlName", "productName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select ", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "justify-content-end", "mb-3"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], ["scrollHeight", "calc(100vh - 31.8rem)", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/product", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "w-100", "pl-2", "ml-2"], [1, "d-flex", "img-icon", "px-3"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "width", "24px", "height", "24px", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", "width", "24px", "height", "24px", 3, "click"]], template: function ProductNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "p", 9);
    \u0275\u0275text(13, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 10);
    \u0275\u0275template(15, ProductNewComponent_mat_error_15_Template, 3, 1, "mat-error", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8)(17, "p", 9);
    \u0275\u0275text(18, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 12);
    \u0275\u0275template(20, ProductNewComponent_mat_error_20_Template, 3, 1, "mat-error", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 8)(22, "p", 9);
    \u0275\u0275text(23, "Product ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 8)(26, "p", 14);
    \u0275\u0275text(27, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 15);
    \u0275\u0275template(29, ProductNewComponent_mat_error_29_Template, 3, 1, "mat-error", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 8)(31, "p", 9);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-dropdown", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 8)(35, "p", 9);
    \u0275\u0275text(36, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 18)(39, "button", 19);
    \u0275\u0275listener("click", function ProductNewComponent_Template_button_click_39_listener() {
      return ctx.add();
    });
    \u0275\u0275element(40, "i", 20);
    \u0275\u0275text(41, "Add Values");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 6)(43, "p-table", 21);
    \u0275\u0275template(44, ProductNewComponent_ng_template_44_Template, 11, 0, "ng-template", 22)(45, ProductNewComponent_ng_template_45_Template, 17, 4, "ng-template", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 24)(47, "button", 25);
    \u0275\u0275text(48, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 26);
    \u0275\u0275listener("click", function ProductNewComponent_Template_button_click_49_listener() {
      return ctx.save();
    });
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Product - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c027));
    \u0275\u0275property("options", ctx.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c027));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c027));
    \u0275\u0275property("options", ctx.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(25, _c027));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("companyId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx.form.get("productName")) == null ? null : tmp_12_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("productName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c027));
    \u0275\u0275property("options", ctx.status);
    \u0275\u0275advance(10);
    \u0275\u0275property("scrollable", true)("value", ctx.productArray);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Table, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n/*# sourceMappingURL=product-new.component.css.map */"] });
var ProductNewComponent = _ProductNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductNewComponent, { className: "ProductNewComponent", filePath: "src\\app\\main\\id-masters\\product\\product-new\\product-new.component.ts", lineNumber: 20 });
})();

// src/app/main/id-masters/product/product.component.ts
var _c028 = ["product"];
var _c114 = () => ({ width: "80vw" });
var _c214 = () => ({ "width": "100%" });
var _c312 = () => ({ "width": "100rem" });
function ProductComponent_ng_template_48_th_3_Template(rf, ctx) {
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
function ProductComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 35);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductComponent_ng_template_48_th_3_Template, 3, 3, "th", 37);
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
function ProductComponent_ng_template_49_td_3_ng_container_1_Template(rf, ctx) {
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
function ProductComponent_ng_template_49_td_3_ng_template_2_Template(rf, ctx) {
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
function ProductComponent_ng_template_49_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ProductComponent_ng_template_49_td_3_ng_container_1_Template, 2, 1, "ng-container", 43)(2, ProductComponent_ng_template_49_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function ProductComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40)(2, "p-checkbox", 41);
    \u0275\u0275listener("onChange", function ProductComponent_ng_template_49_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ProductComponent_ng_template_49_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedProduct, $event) || (ctx_r6.selectedProduct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ProductComponent_ng_template_49_td_3_Template, 4, 2, "td", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedProduct[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedProduct);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function ProductComponent_ng_template_50_Template(rf, ctx) {
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
var _ProductComponent = class _ProductComponent {
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
    this.productTable = [];
    this.selectedProduct = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      subProductId: [],
      subProductValue: [],
      productId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      subProductId: "Sub Product",
      subProductValue: "Sub Product Value",
      productId: "Product",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.subProductDropdown = [];
    this.subProductValueDropdown = [];
    this.productDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Product"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "productId", header: "Product ID" },
      { field: "productName", header: "Product Name" },
      { field: "subProductName", header: "Sub Product" },
      { field: "remark", header: "Remarks" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "LanguageId" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "CompanyId" },
      { field: "subProductId", header: "Sub Product Id" },
      { field: "statusId", header: "StatusId" },
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
          res = this.cs.removeDuplicatesFromArrayList(res, "productId");
          this.productTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 500);
  }
  onChange() {
    const choosen = this.selectedProduct[this.selectedProduct.length - 1];
    this.selectedProduct.length = 0;
    this.selectedProduct.push(choosen);
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
        this.deleterecord(this.selectedProduct[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedProduct.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedProduct[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/idMaster/product-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedProduct.length === 0) {
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
        line: this.selectedProduct,
        module: "Product",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let obj = {};
        obj.languageId = [this.auth.languageId];
        obj.companyId = [this.auth.companyId];
        obj.productId = [this.selectedProduct[0].productId];
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
          detail: lines[0].productId + " Deleted successfully"
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
    const exportData = this.productTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Product");
  }
  getSearchDropdown() {
    this.productTable.forEach((res) => {
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
        this.productTable = res;
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
_ProductComponent.\u0275fac = function ProductComponent_Factory(t) {
  return new (t || _ProductComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ProductComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductComponent, selectors: [["app-product"]], viewQuery: function ProductComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c028, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 51, vars: 40, consts: [["product", ""], ["productTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductValue", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function ProductComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Product ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function ProductComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function ProductComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function ProductComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function ProductComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function ProductComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function ProductComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const product_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(product_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function ProductComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const productTag_r3 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(productTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "p", 20);
    \u0275\u0275text(30, "Sub Product Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19)(33, "p", 20);
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 25)(37, "div")(38, "img", 26);
    \u0275\u0275listener("click", function ProductComponent_Template_img_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "button", 27);
    \u0275\u0275listener("click", function ProductComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 28);
    \u0275\u0275listener("click", function ProductComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(43, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "p-chips", 29);
    \u0275\u0275listener("onRemove", function ProductComponent_Template_p_chips_onRemove_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ProductComponent_Template_p_chips_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 30)(46, "p-table", 31, 1);
    \u0275\u0275template(48, ProductComponent_ng_template_48_Template, 4, 2, "ng-template", 32)(49, ProductComponent_ng_template_49_Template, 4, 5, "ng-template", 33)(50, ProductComponent_ng_template_50_Template, 4, 1, "ng-template", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c114));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c214));
    \u0275\u0275property("options", ctx.productDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c214));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c214));
    \u0275\u0275property("options", ctx.subProductDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c214));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c214));
    \u0275\u0275property("options", ctx.subProductValueDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c214));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c214));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c214));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.productTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(39, _c312));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=product.component.css.map */"] });
var ProductComponent = _ProductComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductComponent, { className: "ProductComponent", filePath: "src\\app\\main\\id-masters\\product\\product.component.ts", lineNumber: 22 });
})();

// src/app/main/id-masters/country/country-new/country-new.component.ts
var _c029 = () => ({ "width": "100%" });
function CountryNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CountryNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function CountryNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CountryNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, CountryNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, CountryNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function CountryNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function CountryNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function CountryNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
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
function CountryNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
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
function CountryNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, CountryNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, CountryNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Country ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275template(15, CountryNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, "Country Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, CountryNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 19);
    \u0275\u0275text(23, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "p-dropdown", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18)(26, "p", 19);
    \u0275\u0275text(27, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 28)(30, "button", 29);
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 30);
    \u0275\u0275listener("click", function CountryNewComponent_ng_template_12_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c029));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(21, _c029));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c029));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c029));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("countryId")) == null ? null : tmp_12_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_14_0 = ctx_r2.form.get("countryName")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c029));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function CountryNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function CountryNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
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
function CountryNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function CountryNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function CountryNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function CountryNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, CountryNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, CountryNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _CountryNewComponent = class _CountryNewComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService, auth, cas) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.numberRangeService = numberRangeService;
    this.messageService = messageService;
    this.auth = auth;
    this.cas = cas;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      countryId: [, Validators.required],
      countryName: [, Validators.required],
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
      updatedOn: [""],
      statusId: ["16"],
      statusDescription: []
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
    const dataToSend = ["Setup", "Country", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.countryId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["COUNTRY"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.countryId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.countryId.disable();
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.countryId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/country"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.countryId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/country"]);
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
_CountryNewComponent.\u0275fac = function CountryNewComponent_Factory(t) {
  return new (t || _CountryNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_CountryNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountryNewComponent, selectors: [["app-country-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "countryId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "countryName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/country", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function CountryNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function CountryNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, CountryNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, CountryNewComponent_ng_template_12_Template, 34, 25, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CountryNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Country - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=country-new.component.css.map */"] });
var CountryNewComponent = _CountryNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountryNewComponent, { className: "CountryNewComponent", filePath: "src\\app\\main\\id-masters\\country\\country-new\\country-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/country/country.component.ts
var _c030 = ["country"];
var _c115 = () => ({ width: "80vw" });
var _c215 = () => ({ "width": "100%" });
var _c313 = () => ({ "width": "100rem" });
function CountryComponent_ng_template_40_th_3_Template(rf, ctx) {
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
function CountryComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CountryComponent_ng_template_40_th_3_Template, 3, 3, "th", 38);
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
function CountryComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
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
function CountryComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CountryComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CountryComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 44)(2, CountryComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function CountryComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41)(2, "p-checkbox", 42);
    \u0275\u0275listener("onChange", function CountryComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CountryComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedCountry, $event) || (ctx_r6.selectedCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CountryComponent_ng_template_41_td_3_Template, 4, 2, "td", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedCountry[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedCountry);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function CountryComponent_ng_template_42_Template(rf, ctx) {
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
function CountryComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CountryComponent = class _CountryComponent {
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
    this.countryTable = [];
    this.selectedCountry = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      countryId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      countryId: "Country",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.countryDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Country"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "countryId", header: "Country ID" },
      { field: "countryName", header: "Country Name" },
      { field: "statusDescription", header: "Status" },
      { field: "remark", header: "Remark" },
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
          this.countryTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 500);
  }
  onChange() {
    const choosen = this.selectedCountry[this.selectedCountry.length - 1];
    this.selectedCountry.length = 0;
    this.selectedCountry.push(choosen);
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
        this.deleterecord(this.selectedCountry[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedCountry.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCountry[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/country-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCountry.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedCountry, module: "Country", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCountry[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.countryId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.countryId + " deleted successfully" });
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
    const exportData = this.countryTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Country");
  }
  getSearchDropdown() {
    this.countryTable.forEach((res) => {
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
        this.countryTable = res;
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
_CountryComponent.\u0275fac = function CountryComponent_Factory(t) {
  return new (t || _CountryComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CountryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountryComponent, selectors: [["app-country"]], viewQuery: function CountryComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c030, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 46, vars: 28, consts: [["country", ""], ["CountryTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "countryId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CountryComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Country ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function CountryComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function CountryComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function CountryComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function CountryComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function CountryComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function CountryComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const country_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(country_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function CountryComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const CountryTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(CountryTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "div")(30, "img", 25);
    \u0275\u0275listener("click", function CountryComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 26);
    \u0275\u0275listener("click", function CountryComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275listener("click", function CountryComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 28);
    \u0275\u0275listener("onRemove", function CountryComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CountryComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "p-table", 30, 1);
    \u0275\u0275template(40, CountryComponent_ng_template_40_Template, 4, 2, "ng-template", 31)(41, CountryComponent_ng_template_41_Template, 4, 5, "ng-template", 32)(42, CountryComponent_ng_template_42_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "mat-menu", 34, 2);
    \u0275\u0275template(45, CountryComponent_ng_template_45_Template, 4, 0, "ng-template", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c115));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c215));
    \u0275\u0275property("options", ctx.countryDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c215));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c215));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c215));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.countryTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c313));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=country.component.css.map */"] });
var CountryComponent = _CountryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountryComponent, { className: "CountryComponent", filePath: "src\\app\\main\\id-masters\\country\\country.component.ts", lineNumber: 22 });
})();

// src/app/main/id-masters/notification/notification.service.ts
var _NotificationService = class _NotificationService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(notificationId) {
    return this.http.get("/overc-idmaster-service/notification/" + notificationId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/notification", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/notification/" + obj.notificationId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId, obj);
  }
  Delete(notificationId) {
    return this.http.delete("/overc-idmaster-service/notification/" + notificationId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/notification/find", obj);
  }
};
_NotificationService.\u0275fac = function NotificationService_Factory(t) {
  return new (t || _NotificationService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_NotificationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
var NotificationService = _NotificationService;

// src/app/main/id-masters/notification/notification-new/notification-new.component.ts
var _c031 = () => ({ "width": "100%" });
function NotificationNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function NotificationNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function NotificationNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function NotificationNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, NotificationNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, NotificationNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function NotificationNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function NotificationNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function NotificationNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
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
function NotificationNewComponent_ng_template_12_mat_error_24_Template(rf, ctx) {
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
function NotificationNewComponent_ng_template_12_mat_error_29_Template(rf, ctx) {
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
function NotificationNewComponent_ng_template_12_mat_error_34_Template(rf, ctx) {
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
function NotificationNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, NotificationNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, NotificationNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Notification ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275template(15, NotificationNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 24);
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "p", 19);
    \u0275\u0275text(22, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p-dropdown", 26);
    \u0275\u0275listener("onChange", function NotificationNewComponent_ng_template_12_Template_p_dropdown_onChange_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.notificationChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, NotificationNewComponent_ng_template_12_mat_error_24_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18)(26, "p", 19);
    \u0275\u0275text(27, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "p-dropdown", 27);
    \u0275\u0275template(29, NotificationNewComponent_ng_template_12_mat_error_29_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 18)(31, "p", 19);
    \u0275\u0275text(32, "Service Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-dropdown", 28);
    \u0275\u0275template(34, NotificationNewComponent_ng_template_12_mat_error_34_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 18)(36, "p", 19);
    \u0275\u0275text(37, "User Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 18)(40, "p", 19);
    \u0275\u0275text(41, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 18)(44, "p", 19);
    \u0275\u0275text(45, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "p-dropdown", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 32)(48, "button", 33);
    \u0275\u0275text(49, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 34);
    \u0275\u0275listener("click", function NotificationNewComponent_ng_template_12_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c031));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(37, _c031));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c031));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(39, _c031));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("notificationId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("notificationText")) == null ? null : tmp_13_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c031));
    \u0275\u0275property("options", ctx_r2.productIdList)("disabled", false)("panelStyle", \u0275\u0275pureFunction0(41, _c031));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("productId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c031));
    \u0275\u0275property("options", ctx_r2.subProductIdList)("disabled", false)("panelStyle", \u0275\u0275pureFunction0(43, _c031));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("subProductId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c031));
    \u0275\u0275property("options", ctx_r2.serviceTypeIdList)("disabled", false)("panelStyle", \u0275\u0275pureFunction0(45, _c031));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("serviceTypeId"));
    \u0275\u0275advance(12);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c031));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function NotificationNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function NotificationNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
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
function NotificationNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function NotificationNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 34);
    \u0275\u0275listener("click", function NotificationNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function NotificationNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, NotificationNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, NotificationNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _NotificationNewComponent = class _NotificationNewComponent {
  constructor(cs, spin, route, router, path, fb, numberRangeService, service, productService, messageService, auth, cas) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.numberRangeService = numberRangeService;
    this.service = service;
    this.productService = productService;
    this.messageService = messageService;
    this.auth = auth;
    this.cas = cas;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      notificationId: [],
      notificationText: [, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyName: [],
      subProductId: [],
      subProductName: [],
      productId: [],
      productName: [],
      serviceTypeId: [],
      serviceTypeText: [],
      statusDescription: [],
      userRole: [],
      userName: [],
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
      updatedOn: [""],
      statusId: ["16"]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.subProductIdList = [];
    this.productIdList = [];
    this.serviceTypeIdList = [];
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
    const dataToSend = ["Setup", "Notification", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.notificationId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["NOTIFICATION"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.notificationId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.notificationId.disable();
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
      this.cas.dropdownlist.setup.serviceType.url,
      this.cas.dropdownlist.setup.product.url,
      this.cas.dropdownlist.setup.subProduct.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.serviceTypeIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.serviceType.key);
        this.productIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.product.key);
        this.subProductIdList = this.cas.forLanguageFilterWithoutKey(results[4], this.cas.dropdownlist.setup.subProduct.key);
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.notificationId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/notification"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.notificationId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/notification"]);
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
  notificationChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.productId = [this.form.controls.productId.value];
    this.subProductIdList = [];
    this.spin.show();
    this.productService.search(obj).subscribe({
      next: (result) => {
        this.subProductIdList = this.cas.foreachlist(result, { key: "subProductId", value: "subProductName" });
        this.subProductIdList = this.cs.removeDuplicatesFromArrayList(this.subProductIdList, "value");
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_NotificationNewComponent.\u0275fac = function NotificationNewComponent_Factory(t) {
  return new (t || _NotificationNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_NotificationNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationNewComponent, selectors: [["app-notification-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "notificationId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "formControlName", "notificationText", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "onChange", "options", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "serviceTypeId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "userRole", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "100", "pInputText", "", "formControlName", "userName", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select\xA0", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/notification", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function NotificationNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function NotificationNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, NotificationNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, NotificationNewComponent_ng_template_12_Template, 52, 47, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, NotificationNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Notification - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=notification-new.component.css.map */"] });
var NotificationNewComponent = _NotificationNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationNewComponent, { className: "NotificationNewComponent", filePath: "src\\app\\main\\id-masters\\notification\\notification-new\\notification-new.component.ts", lineNumber: 20 });
})();

// src/app/main/id-masters/notification/notification.component.ts
var _c032 = ["notification"];
var _c116 = () => ({ width: "80vw" });
var _c216 = () => ({ "width": "100%" });
var _c314 = () => ({ "width": "100rem" });
function NotificationComponent_ng_template_52_th_3_Template(rf, ctx) {
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
function NotificationComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 39);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NotificationComponent_ng_template_52_th_3_Template, 3, 3, "th", 41);
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
function NotificationComponent_ng_template_53_td_3_ng_container_1_Template(rf, ctx) {
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
function NotificationComponent_ng_template_53_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function NotificationComponent_ng_template_53_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, NotificationComponent_ng_template_53_td_3_ng_container_1_Template, 2, 1, "ng-container", 47)(2, NotificationComponent_ng_template_53_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function NotificationComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44)(2, "p-checkbox", 45);
    \u0275\u0275listener("onChange", function NotificationComponent_ng_template_53_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function NotificationComponent_ng_template_53_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedNotification, $event) || (ctx_r6.selectedNotification = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, NotificationComponent_ng_template_53_td_3_Template, 4, 2, "td", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedNotification[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedNotification);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function NotificationComponent_ng_template_54_Template(rf, ctx) {
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
function NotificationComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 49);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _NotificationComponent = class _NotificationComponent {
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
    this.notificationTable = [];
    this.selectedNotification = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      subProductId: [],
      productId: [],
      serviceTypeId: [],
      notificationId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      subProductId: "Sub Product",
      productId: "Product",
      serviceTypeId: "Service Type",
      notificationId: "Notification",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.subProductDropdown = [];
    this.productDropdown = [];
    this.serviceTypeDropdown = [];
    this.notificationDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Notification"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "notificationId", header: "Notification ID" },
      { field: "notificationText", header: "Description" },
      { field: "productName", header: "Product" },
      { field: "subProductName", header: "Sub Product" },
      { field: "serviceTypeText", header: "Service Type" },
      { field: "userRole", header: "User Role" },
      { field: "userName", header: "User Name" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "statusId", header: "Status ID" },
      { field: "productId", header: "Product ID" },
      { field: "subProductId", header: "SubProduct ID" },
      { field: "serviceTypeId", header: "ServiceType ID" },
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
          this.notificationTable = res;
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
    const choosen = this.selectedNotification[this.selectedNotification.length - 1];
    this.selectedNotification.length = 0;
    this.selectedNotification.push(choosen);
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
        this.deleterecord(this.selectedNotification[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedNotification.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedNotification[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/notification-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedNotification.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedNotification, module: "Notification", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedNotification[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.notificationId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.notificationId + " deleted successfully" });
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
    const exportData = this.notificationTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Notification");
  }
  getSearchDropdown() {
    this.notificationTable.forEach((res) => {
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
      if (res.productId != null) {
        this.productDropdown.push({ value: res.productId, label: res.productName });
        this.productDropdown = this.cs.removeDuplicatesFromArrayList(this.productDropdown, "value");
      }
      if (res.serviceTypeId != null) {
        this.serviceTypeDropdown.push({ value: res.serviceTypeId, label: res.serviceTypeText });
        this.serviceTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.serviceTypeDropdown, "value");
      }
      if (res.notificationId != null) {
        this.notificationDropdown.push({ value: res.notificationId, label: res.notificationText });
        this.notificationDropdown = this.cs.removeDuplicatesFromArrayList(this.notificationDropdown, "value");
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
        this.notificationTable = res;
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
      productId: [],
      serviceTypeId: [],
      notificationId: [],
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
_NotificationComponent.\u0275fac = function NotificationComponent_Factory(t) {
  return new (t || _NotificationComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_NotificationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationComponent, selectors: [["app-notification"]], viewQuery: function NotificationComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c032, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 58, vars: 46, consts: [["notification", ""], ["NotificationTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "notificationId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "serviceTypeId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subProductId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function NotificationComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Notification ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function NotificationComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function NotificationComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function NotificationComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function NotificationComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function NotificationComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function NotificationComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const notification_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(notification_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function NotificationComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const NotificationTag_r3 = \u0275\u0275reference(51);
      return \u0275\u0275resetView(NotificationTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Notification");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Service Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "p", 21);
    \u0275\u0275text(34, "Sub Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 20)(37, "p", 21);
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-multiSelect", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 27)(41, "div")(42, "img", 28);
    \u0275\u0275listener("click", function NotificationComponent_Template_img_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "button", 29);
    \u0275\u0275listener("click", function NotificationComponent_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(45, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 30);
    \u0275\u0275listener("click", function NotificationComponent_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(47, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "p-chips", 31);
    \u0275\u0275listener("onRemove", function NotificationComponent_Template_p_chips_onRemove_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function NotificationComponent_Template_p_chips_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 32)(50, "p-table", 33, 1);
    \u0275\u0275template(52, NotificationComponent_ng_template_52_Template, 4, 2, "ng-template", 34)(53, NotificationComponent_ng_template_53_Template, 4, 5, "ng-template", 35)(54, NotificationComponent_ng_template_54_Template, 4, 1, "ng-template", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "mat-menu", 37, 2);
    \u0275\u0275template(57, NotificationComponent_ng_template_57_Template, 4, 0, "ng-template", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c116));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c216));
    \u0275\u0275property("options", ctx.notificationDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c216));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c216));
    \u0275\u0275property("options", ctx.serviceTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c216));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c216));
    \u0275\u0275property("options", ctx.productDropdown)("panelStyle", \u0275\u0275pureFunction0(40, _c216));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c216));
    \u0275\u0275property("options", ctx.subProductDropdown)("panelStyle", \u0275\u0275pureFunction0(42, _c216));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c216));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(44, _c216));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.notificationTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(45, _c314));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=notification.component.css.map */"] });
var NotificationComponent = _NotificationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationComponent, { className: "NotificationComponent", filePath: "src\\app\\main\\id-masters\\notification\\notification.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/users/users.service.ts
var _UsersService = class _UsersService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(obj) {
    return this.http.get("/overc-idmaster-service/usermanagement" + obj.userId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/usermanagement", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/usermanagement/" + obj.userId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/usermanagement/" + obj.userId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/usermanagement/find", obj);
  }
};
_UsersService.\u0275fac = function UsersService_Factory(t) {
  return new (t || _UsersService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_UsersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac, providedIn: "root" });
var UsersService = _UsersService;

// src/app/main/id-masters/users/users-new/users-new.component.ts
var _c033 = () => ({ "width": "100%" });
function UsersNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function UsersNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function UsersNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function UsersNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, UsersNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, UsersNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function UsersNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UsersNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, UsersNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, UsersNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "User ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275template(15, UsersNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "p", 23);
    \u0275\u0275text(18, "User Role ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 25);
    \u0275\u0275template(20, UsersNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "p", 23);
    \u0275\u0275text(23, "User Type ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "p-dropdown", 26);
    \u0275\u0275template(25, UsersNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "p", 23);
    \u0275\u0275text(28, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275template(30, UsersNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "p", 23);
    \u0275\u0275text(33, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275template(35, UsersNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18)(37, "p", 23);
    \u0275\u0275text(38, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 29);
    \u0275\u0275template(40, UsersNewComponent_ng_template_12_mat_error_40_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18)(42, "p", 19);
    \u0275\u0275text(43, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 30);
    \u0275\u0275template(45, UsersNewComponent_ng_template_12_mat_error_45_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 18)(47, "p", 19);
    \u0275\u0275text(48, "Email ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 31);
    \u0275\u0275template(50, UsersNewComponent_ng_template_12_mat_error_50_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 18)(52, "p", 19);
    \u0275\u0275text(53, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "p-dropdown", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 33)(56, "button", 34);
    \u0275\u0275text(57, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 35);
    \u0275\u0275listener("click", function UsersNewComponent_ng_template_12_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    let tmp_21_0;
    let tmp_23_0;
    let tmp_25_0;
    let tmp_27_0;
    let tmp_29_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c033));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(39, _c033));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c033));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(41, _c033));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("userId")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r2.form.get("userId")) == null ? null : tmp_12_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("userId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_14_0 = ctx_r2.form.get("userRoleId")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r2.form.get("userRoleId")) == null ? null : tmp_14_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("userRoleId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c033));
    \u0275\u0275property("options", ctx_r2.userType)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(43, _c033));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("userTypeIdAndDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_21_0 = ctx_r2.form.get("password")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx_r2.form.get("password")) == null ? null : tmp_21_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("password"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_23_0 = ctx_r2.form.get("userName")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r2.form.get("userName")) == null ? null : tmp_23_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("userName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_25_0 = ctx_r2.form.get("firstName")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = ctx_r2.form.get("firstName")) == null ? null : tmp_25_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("firstName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_27_0 = ctx_r2.form.get("lastName")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx_r2.form.get("lastName")) == null ? null : tmp_27_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("lastName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_29_0 = ctx_r2.form.get("emailId")) == null ? null : tmp_29_0.invalid) && ((tmp_29_0 = ctx_r2.form.get("emailId")) == null ? null : tmp_29_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("emailId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c033));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.form.invalid)("ngClass", ctx_r2.form.invalid ? "disabledButton" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function UsersNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function UsersNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 37);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 38);
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
function UsersNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 33)(18, "button", 44);
    \u0275\u0275listener("click", function UsersNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 35);
    \u0275\u0275listener("click", function UsersNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r2.form.invalid)("ngClass", ctx_r2.form.invalid ? "disabledButton" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function UsersNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, UsersNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, UsersNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 3, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _UsersNewComponent = class _UsersNewComponent {
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
    this.userType = [];
    this.status = [];
    this.flag = [];
    this.form = this.fb.group({
      languageId: [this.auth.languageId, Validators.required],
      languageIDAndDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      companyIdAndDescription: [],
      userId: [],
      userRoleId: [],
      userRoleIdAndDescription: [],
      userTypeIdAndDescription: [],
      userTypeId: [],
      password: [],
      userName: [],
      firstName: [],
      lastName: [],
      statusId: ["16"],
      dateFormatId: [],
      currencyDecimal: [0],
      createHhtUser: [false],
      timeZone: [],
      portalLoggedIn: [false],
      hhtLoggedIn: [false],
      resetPassword: [false],
      emailId: [],
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
    this.userType = [
      { value: 1, label: "Portal" },
      { value: 2, label: "Customer" },
      { value: 3, label: "App" }
    ];
    this.status = [
      { value: 17, label: "Inactive" },
      { value: 16, label: "Active" }
    ];
    this.flag = [
      { value: "0", label: "False" },
      { value: "1", label: "True" }
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
    const dataToSend = ["Setup", "Users", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.userId.disable();
      this.form.controls.userRoleId.disable();
      this.form.controls.userTypeId.disable();
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
      this.cas.dropdownlist.setup
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.userId + " has been updated successfully" });
          this.router.navigate(["/main/idMaster/users"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.userId + " has been created successfully" });
            this.router.navigate(["/main/idMaster/users"]);
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
_UsersNewComponent.\u0275fac = function UsersNewComponent_Factory(t) {
  return new (t || _UsersNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_UsersNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersNewComponent, selectors: [["app-users-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", "placeholder", "Select", "filter", "true", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "userId", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["formControlName", "userRoleId", "pInputText", "", "pKeyFilter", "num", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "userTypeIdAndDescription", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["formControlName", "password", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["formControlName", "userName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["formControlName", "firstName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["formControlName", "lastName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["formControlName", "emailId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select ", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/users", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click", "disabled", "ngClass"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function UsersNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function UsersNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, UsersNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, UsersNewComponent_ng_template_12_Template, 60, 45, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, UsersNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Users - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=users-new.component.css.map */"] });
var UsersNewComponent = _UsersNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersNewComponent, { className: "UsersNewComponent", filePath: "src\\app\\main\\id-masters\\users\\users-new\\users-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/users/users.component.ts
var _c034 = ["user"];
var _c117 = () => ({ width: "80vw" });
var _c217 = () => ({ "width": "100%" });
var _c315 = () => ({ "width": "100rem" });
function UsersComponent_ng_template_48_th_3_Template(rf, ctx) {
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
function UsersComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UsersComponent_ng_template_48_th_3_Template, 3, 3, "th", 40);
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
function UsersComponent_ng_template_49_td_3_ng_container_1_Template(rf, ctx) {
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
function UsersComponent_ng_template_49_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function UsersComponent_ng_template_49_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, UsersComponent_ng_template_49_td_3_ng_container_1_Template, 2, 1, "ng-container", 46)(2, UsersComponent_ng_template_49_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function UsersComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "p-checkbox", 44);
    \u0275\u0275listener("onChange", function UsersComponent_ng_template_49_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_49_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedUser, $event) || (ctx_r6.selectedUser = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, UsersComponent_ng_template_49_td_3_Template, 4, 2, "td", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedUser[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedUser);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function UsersComponent_ng_template_50_Template(rf, ctx) {
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
function UsersComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _UsersComponent = class _UsersComponent {
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
    this.userTable = [];
    this.selectedUser = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      userId: [],
      userRoleId: [],
      userTypeId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      userId: "User",
      userRoleId: "User Role",
      userTypeId: "User Type",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.userDropdown = [];
    this.userRoleDropdown = [];
    this.userTypeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Users"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyIdAndDescription", header: "Company" },
      { field: "userRoleId", header: "User Role" },
      { field: "userName", header: "User Name" },
      { field: "emailId", header: "Email Id" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "userTypeIdAndDescription", header: "User Type" },
      { field: "languageId", header: "Language ID" },
      { field: "languageIdAndDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "userId", header: "User ID" },
      { field: "userRoleId", header: "User Role ID" },
      { field: "userTypeId", header: "User Type ID" },
      { field: "password", header: "Password" },
      { field: "firstName", header: "First Name" },
      { field: "lastName", header: "Last Name" },
      { field: "timeZone", header: "Time Zone" },
      { field: "dateFormatId", header: "Date Format ID" },
      { field: "currencyDecimal", header: "Currency Decimal" },
      { field: "portalLoggedIn", header: "Portal Logged In" },
      { field: "hhtLoggedIn", header: "HHT Logged In" },
      { field: "resetPassword", header: "Reset Password" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" }
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
          this.userTable = res;
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
    const choosen = this.selectedUser[this.selectedUser.length - 1];
    this.selectedUser.length = 0;
    this.selectedUser.push(choosen);
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
        this.deleterecord(this.selectedUser[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedUser.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedUser[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/users-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedUser.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedUser, module: "Users", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedUser[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.userId + lines.companyId + lines.languageId + " deleted successfully" });
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
    const exportData = this.userTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Users");
  }
  getSearchDropdown() {
    this.userTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.userId != null) {
        this.userDropdown.push({ value: res.userId, label: res.userName });
        this.userDropdown = this.cs.removeDuplicatesFromArrayList(this.userDropdown, "value");
      }
      if (res.userRoleId != null) {
        this.userRoleDropdown.push({ value: res.userRoleId, label: res.userRoleIdAndDescription });
        this.userRoleDropdown = this.cs.removeDuplicatesFromArrayList(this.userRoleDropdown, "value");
      }
      if (res.userTypeId != null) {
        this.userTypeDropdown.push({ value: res.userTypeId, label: res.userTypeIdAndDescription });
        this.userTypeDropdown = this.cs.removeDuplicatesFromArrayList(this.userTypeDropdown, "value");
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
        this.userTable = res;
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
      userId: [],
      userRoleId: [],
      userTypeId: [],
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
_UsersComponent.\u0275fac = function UsersComponent_Factory(t) {
  return new (t || _UsersComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_UsersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c034, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 54, vars: 40, consts: [["user", ""], ["userTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "userId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "userRoleId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "userTypeId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function UsersComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Users ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function UsersComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function UsersComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function UsersComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function UsersComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function UsersComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function UsersComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const user_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(user_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function UsersComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const userTag_r3 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(userTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "User Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "User Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "p", 21);
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 26)(37, "div")(38, "img", 27);
    \u0275\u0275listener("click", function UsersComponent_Template_img_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "button", 28);
    \u0275\u0275listener("click", function UsersComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 29);
    \u0275\u0275listener("click", function UsersComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(43, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "p-chips", 30);
    \u0275\u0275listener("onRemove", function UsersComponent_Template_p_chips_onRemove_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_p_chips_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31)(46, "p-table", 32, 1);
    \u0275\u0275template(48, UsersComponent_ng_template_48_Template, 4, 2, "ng-template", 33)(49, UsersComponent_ng_template_49_Template, 4, 5, "ng-template", 34)(50, UsersComponent_ng_template_50_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "mat-menu", 36, 2);
    \u0275\u0275template(53, UsersComponent_ng_template_53_Template, 4, 0, "ng-template", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c117));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c217));
    \u0275\u0275property("options", ctx.userDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c217));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c217));
    \u0275\u0275property("options", ctx.userRoleDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c217));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c217));
    \u0275\u0275property("options", ctx.userTypeDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c217));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c217));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c217));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.userTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(39, _c315));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=users.component.css.map */"] });
var UsersComponent = _UsersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src\\app\\main\\id-masters\\users\\users.component.ts", lineNumber: 22 });
})();

// src/app/main/id-masters/rate-parameter/rate-parameter.service.ts
var _RateParameterService = class _RateParameterService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(rateParameterId) {
    return this.http.get("/overc-idmaster-service/rateParameter/" + rateParameterId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/rateParameter", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/rateParameter/" + obj.rateParameterId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  Delete(rateParameterId) {
    return this.http.delete("/overc-idmaster-service/rateParameter/" + rateParameterId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/rateParameter/find", obj);
  }
};
_RateParameterService.\u0275fac = function RateParameterService_Factory(t) {
  return new (t || _RateParameterService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_RateParameterService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RateParameterService, factory: _RateParameterService.\u0275fac, providedIn: "root" });
var RateParameterService = _RateParameterService;

// src/app/main/id-masters/rate-parameter/rate-parameter-new/rate-parameter-new.component.ts
var _c035 = () => ({ "width": "100%" });
function RateParameterNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function RateParameterNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function RateParameterNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function RateParameterNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, RateParameterNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, RateParameterNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function RateParameterNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function RateParameterNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function RateParameterNewComponent_ng_template_12_mat_error_19_Template(rf, ctx) {
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
function RateParameterNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, RateParameterNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, RateParameterNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Rate Parameter ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 24);
    \u0275\u0275text(17, "Rate Parameter Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275template(19, RateParameterNewComponent_ng_template_12_mat_error_19_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "p", 19);
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-dropdown", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18)(25, "p", 19);
    \u0275\u0275text(26, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 28)(29, "button", 29);
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 30);
    \u0275\u0275listener("click", function RateParameterNewComponent_ng_template_12_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c035));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(20, _c035));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c035));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(22, _c035));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_12_0 = ctx_r2.form.get("rateParameterId")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r2.form.get("rateParameterId")) == null ? null : tmp_12_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("rateParameterDescription")) == null ? null : tmp_13_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("rateParameterDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c035));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function RateParameterNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function RateParameterNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
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
function RateParameterNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function RateParameterNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function RateParameterNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function RateParameterNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, RateParameterNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, RateParameterNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _RateParameterNewComponent = class _RateParameterNewComponent {
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
      languageId: [this.auth.languageId],
      languageDescription: [],
      companyId: [this.auth.companyId],
      companyName: [],
      rateParameterId: [],
      rateParameterDescription: [, Validators.required],
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
    const dataToSend = ["Setup", "Rate Parameter", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.rateParameterId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["RATEPARAMETER"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.rateParameterId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.rateParameterId.disable();
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
            detail: res.rateParameterId + " has been updated successfully"
          });
          this.router.navigate(["/main/idMaster/rateParameter"]);
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
              detail: res.rateParameterId + " has been created successfully"
            });
            this.router.navigate(["/main/idMaster/rateParameter"]);
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
_RateParameterNewComponent.\u0275fac = function RateParameterNewComponent_Factory(t) {
  return new (t || _RateParameterNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RateParameterService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_RateParameterNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RateParameterNewComponent, selectors: [["app-rate-parameter-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rateParameterId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "rateParameterDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select ", 3, "options"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/rateParameter", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function RateParameterNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function RateParameterNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, RateParameterNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, RateParameterNewComponent_ng_template_12_Template, 33, 24, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, RateParameterNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Rate Parameter - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=rate-parameter-new.component.css.map */"] });
var RateParameterNewComponent = _RateParameterNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RateParameterNewComponent, { className: "RateParameterNewComponent", filePath: "src\\app\\main\\id-masters\\rate-parameter\\rate-parameter-new\\rate-parameter-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/rate-parameter/rate-parameter.component.ts
var _c036 = ["rateParameter"];
var _c118 = () => ({ width: "80vw" });
var _c218 = () => ({ "width": "100%" });
var _c316 = () => ({ "width": "100rem" });
function RateParameterComponent_ng_template_40_th_3_Template(rf, ctx) {
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
function RateParameterComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 33);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RateParameterComponent_ng_template_40_th_3_Template, 3, 3, "th", 35);
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
function RateParameterComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
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
function RateParameterComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const col_r8 = \u0275\u0275nextContext().$implicit;
    const rowData_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9[col_r8.field], "dd-MM-yyyy"), " ");
  }
}
function RateParameterComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, RateParameterComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 41)(2, RateParameterComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function RateParameterComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 38)(2, "p-checkbox", 39);
    \u0275\u0275listener("onChange", function RateParameterComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function RateParameterComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedRateParameter, $event) || (ctx_r6.selectedRateParameter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, RateParameterComponent_ng_template_41_td_3_Template, 4, 2, "td", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedRateParameter[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedRateParameter);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function RateParameterComponent_ng_template_42_Template(rf, ctx) {
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
var _RateParameterComponent = class _RateParameterComponent {
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
    this.rateParameterTable = [];
    this.selectedRateParameter = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      rateParameterId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      rateParameterId: "Rate Parameter",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.rateParameterDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "Rate Parameter"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "rateParameterId", header: "Rate Parameter ID" },
      { field: "rateParameterDescription", header: "Rate Parameter Name" },
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
          this.rateParameterTable = res;
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
    const choosen = this.selectedRateParameter[this.selectedRateParameter.length - 1];
    this.selectedRateParameter.length = 0;
    this.selectedRateParameter.push(choosen);
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
        this.deleterecord(this.selectedRateParameter[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedRateParameter.length === 0 && type != "New") {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        key: "br",
        detail: "Kindly select any row"
      });
    } else {
      let paramdata = this.cs.encrypt({
        line: linedata == null ? this.selectedRateParameter[0] : linedata,
        pageflow: type
      });
      this.router.navigate(["/main/idMaster/rateParameter-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedRateParameter.length === 0) {
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
        line: this.selectedRateParameter,
        module: "Rate Parameter",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedRateParameter[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.rateParameterId).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: lines.rateParameterId + " Deleted successfully"
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
    const exportData = this.rateParameterTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Rate Parameter");
  }
  getSearchDropdown() {
    this.rateParameterTable.forEach((res) => {
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
        this.rateParameterTable = res;
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
_RateParameterComponent.\u0275fac = function RateParameterComponent_Factory(t) {
  return new (t || _RateParameterComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(RateParameterService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_RateParameterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RateParameterComponent, selectors: [["app-rate-parameter"]], viewQuery: function RateParameterComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c036, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 43, vars: 28, consts: [["rateParameter", ""], ["rateParameterTag", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "rateParameterId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function RateParameterComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Rate Parameter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function RateParameterComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function RateParameterComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function RateParameterComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function RateParameterComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function RateParameterComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13)(14, "p-inputIcon", 14);
    \u0275\u0275listener("click", function RateParameterComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const rateParameter_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(rateParameter_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function RateParameterComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const rateParameterTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(rateParameterTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 16, 0)(18, "form", 17)(19, "div", 18)(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Rate Parameter");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 23)(29, "div")(30, "img", 24);
    \u0275\u0275listener("click", function RateParameterComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 25);
    \u0275\u0275listener("click", function RateParameterComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 26);
    \u0275\u0275listener("click", function RateParameterComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 27);
    \u0275\u0275listener("onRemove", function RateParameterComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function RateParameterComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 28)(38, "p-table", 29, 1);
    \u0275\u0275template(40, RateParameterComponent_ng_template_40_Template, 4, 2, "ng-template", 30)(41, RateParameterComponent_ng_template_41_Template, 4, 5, "ng-template", 31)(42, RateParameterComponent_ng_template_42_Template, 4, 1, "ng-template", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c118));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c218));
    \u0275\u0275property("options", ctx.rateParameterDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c218));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c218));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c218));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.rateParameterTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c316));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=rate-parameter.component.css.map */"] });
var RateParameterComponent = _RateParameterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RateParameterComponent, { className: "RateParameterComponent", filePath: "src\\app\\main\\id-masters\\rate-parameter\\rate-parameter.component.ts", lineNumber: 21 });
})();

// src/app/main/id-masters/user-role/user-role.service.ts
var _UserRoleService = class _UserRoleService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(obj) {
    return this.http.get("/overc-idmaster-service/roleAccess/" + obj + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId + "&menuId=" + obj.menuId + "&subMenuId=" + obj.subMenuId);
  }
  GetNew(code, companyId, languageId, menuId, subMenuId) {
    return this.http.get("/overc-idmaster-service/roleAccess/" + code + "?companyId=" + companyId + "&languageId=" + languageId + "&menuId=" + menuId + "&subMenuId=" + subMenuId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/roleAccess", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/roleAccess/" + obj.roleId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj + "&menuId=" + obj.menuId + "&subMenuId=" + obj.subMenuId);
  }
  Delete(obj) {
    return this.http.delete("/overc-idmaster-service/roleAccess/" + obj.roleId + "?companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId + "&menuId=" + obj.menuId + "&subMenuId=" + obj.subMenuId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/roleAccess/find", obj);
  }
  searchModule(obj) {
  }
};
_UserRoleService.\u0275fac = function UserRoleService_Factory(t) {
  return new (t || _UserRoleService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_UserRoleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserRoleService, factory: _UserRoleService.\u0275fac, providedIn: "root" });
var UserRoleService = _UserRoleService;

// src/app/main/id-masters/user-role/user-role.component.ts
var _c037 = ["userRole"];
var _c119 = () => ({ width: "80vw" });
var _c219 = () => ({ "width": "100%" });
var _c317 = () => ({ "width": "100rem" });
function UserRoleComponent_ng_template_48_th_3_Template(rf, ctx) {
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
function UserRoleComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserRoleComponent_ng_template_48_th_3_Template, 3, 3, "th", 40);
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
function UserRoleComponent_ng_template_49_td_3_ng_container_1_Template(rf, ctx) {
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
function UserRoleComponent_ng_template_49_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r9.createdOn, "dd-MM-yyyy"), " ");
  }
}
function UserRoleComponent_ng_template_49_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, UserRoleComponent_ng_template_49_td_3_ng_container_1_Template, 2, 1, "ng-container", 46)(2, UserRoleComponent_ng_template_49_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const dateTemplate_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r8.format !== "date")("ngIfElse", dateTemplate_r10);
  }
}
function UserRoleComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "p-checkbox", 44);
    \u0275\u0275listener("onChange", function UserRoleComponent_ng_template_49_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function UserRoleComponent_ng_template_49_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.selectedUserRole, $event) || (ctx_r6.selectedUserRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, UserRoleComponent_ng_template_49_td_3_Template, 4, 2, "td", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r6.selectedUserRole[0] === rowData_r9);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.selectedUserRole);
    \u0275\u0275property("value", rowData_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
  }
}
function UserRoleComponent_ng_template_50_Template(rf, ctx) {
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
function UserRoleComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _UserRoleComponent = class _UserRoleComponent {
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
    this.userRoleTable = [];
    this.selectedUserRole = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      menuId: [],
      subMenuId: [],
      roleId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      menuId: "Menu",
      subMenuId: "Sub Menu",
      roleId: "Role ID",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.menuDropdown = [];
    this.subMenuDropdown = [];
    this.roleDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Setup", "User Role"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyIdAndDescription", header: "Company" },
      { field: "roleId", header: "Role ID" },
      { field: "userRoleName", header: "User Role" },
      { field: "menuName", header: "Menu" },
      { field: "subMenuName", header: "Sub Menu" },
      { field: "description", header: "Role Description" },
      { field: "authorizationObjectValue", header: "Authorization Object Value" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageIdAndDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "userRoleId", header: "UserRole ID" },
      { field: "menuId", header: "Menu ID" },
      { field: "subMenuId", header: "Sub Menu ID" },
      { field: "moduleId", header: "Module ID" },
      { field: "statusId", header: "Status ID" },
      { field: "authorizationObjectId", header: "Authorization Object ID" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" },
      { field: "referenceField6", header: "Reference Field 6" },
      { field: "referenceField7", header: "Reference Field 7" },
      { field: "referenceField8", header: "Reference Field 8" },
      { field: "referenceField9", header: "Reference Field 9" },
      { field: "referenceField10", header: "Reference Field 10" }
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
          this.userRoleTable = res;
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
    const choosen = this.selectedUserRole[this.selectedUserRole.length - 1];
    this.selectedUserRole.length = 0;
    this.selectedUserRole.push(choosen);
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
        this.deleterecord(this.selectedUserRole[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedUserRole.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedUserRole[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/userrole-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedUserRole.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedUserRole, module: "User Role", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedUserRole[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.roleId + lines.companyId + lines.languageId + " deleted successfully" });
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
    const exportData = this.userRoleTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "UserRole");
  }
  getSearchDropdown() {
    this.userRoleTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.menuId != null) {
        this.menuDropdown.push({ value: res.menuId, label: res.menuName });
        this.menuDropdown = this.cs.removeDuplicatesFromArrayList(this.menuDropdown, "value");
      }
      if (res.subMenuId != null) {
        this.subMenuDropdown.push({ value: res.subMenuId, label: res.subMenuName });
        this.subMenuDropdown = this.cs.removeDuplicatesFromArrayList(this.subMenuDropdown, "value");
      }
      if (res.roleId != null) {
        this.roleDropdown.push({ value: res.roleId, label: res.roleId });
        this.roleDropdown = this.cs.removeDuplicatesFromArrayList(this.roleDropdown, "value");
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
        this.userRoleTable = res;
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
      menuId: [],
      subMenuId: [],
      roleId: [],
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
_UserRoleComponent.\u0275fac = function UserRoleComponent_Factory(t) {
  return new (t || _UserRoleComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(UserRoleService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService));
};
_UserRoleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserRoleComponent, selectors: [["app-user-role"]], viewQuery: function UserRoleComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c037, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 54, vars: 40, consts: [["userRole", ""], ["userRoleTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "roleId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "menuId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "subMenuId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function UserRoleComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "User Role ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function UserRoleComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function UserRoleComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function UserRoleComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function UserRoleComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function UserRoleComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function UserRoleComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const userRole_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(userRole_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function UserRoleComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const userRoleTag_r3 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(userRoleTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Role ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "p", 21);
    \u0275\u0275text(30, "Sub Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "p", 21);
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-multiSelect", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 26)(37, "div")(38, "img", 27);
    \u0275\u0275listener("click", function UserRoleComponent_Template_img_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "button", 28);
    \u0275\u0275listener("click", function UserRoleComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 29);
    \u0275\u0275listener("click", function UserRoleComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(43, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "p-chips", 30);
    \u0275\u0275listener("onRemove", function UserRoleComponent_Template_p_chips_onRemove_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function UserRoleComponent_Template_p_chips_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31)(46, "p-table", 32, 1);
    \u0275\u0275template(48, UserRoleComponent_ng_template_48_Template, 4, 2, "ng-template", 33)(49, UserRoleComponent_ng_template_49_Template, 4, 5, "ng-template", 34)(50, UserRoleComponent_ng_template_50_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "mat-menu", 36, 2);
    \u0275\u0275template(53, UserRoleComponent_ng_template_53_Template, 4, 0, "ng-template", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c119));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c219));
    \u0275\u0275property("options", ctx.roleDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c219));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c219));
    \u0275\u0275property("options", ctx.menuDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c219));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c219));
    \u0275\u0275property("options", ctx.subMenuDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c219));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c219));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c219));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.userRoleTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(39, _c317));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=user-role.component.css.map */"] });
var UserRoleComponent = _UserRoleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserRoleComponent, { className: "UserRoleComponent", filePath: "src\\app\\main\\id-masters\\user-role\\user-role.component.ts", lineNumber: 24 });
})();

// src/app/main/id-masters/user-role/user-role-new/user-role-new.component.ts
var _c038 = () => ({ "width": "100%", "margin-top": "0.3rem", "margin-bottom": "0.3rem" });
var _c120 = () => ({ "width": "20%" });
var _c220 = () => ({ "width": "100%" });
function UserRoleNewComponent_ng_template_10_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function UserRoleNewComponent_ng_template_10_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function UserRoleNewComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function UserRoleNewComponent_ng_template_10_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, UserRoleNewComponent_ng_template_10_p_2_Template, 2, 0, "p", 11)(3, UserRoleNewComponent_ng_template_10_img_3_Template, 1, 0, "img", 12);
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
function UserRoleNewComponent_ng_template_11_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UserRoleNewComponent_ng_template_11_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function UserRoleNewComponent_ng_template_11_mat_error_16_Template(rf, ctx) {
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
function UserRoleNewComponent_ng_template_11_mat_error_21_Template(rf, ctx) {
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
function UserRoleNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 16)(1, "div", 17)(2, "div", 18)(3, "p", 19);
    \u0275\u0275text(4, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-dropdown", 20);
    \u0275\u0275listener("onChange", function UserRoleNewComponent_ng_template_11_Template_p_dropdown_onChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLanguageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserRoleNewComponent_ng_template_11_mat_error_6_Template, 2, 1, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "p", 19);
    \u0275\u0275text(9, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-dropdown", 21);
    \u0275\u0275listener("onChange", function UserRoleNewComponent_ng_template_11_Template_p_dropdown_onChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCompanyChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, UserRoleNewComponent_ng_template_11_mat_error_11_Template, 2, 1, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18)(13, "p", 22);
    \u0275\u0275text(14, "Role ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 23);
    \u0275\u0275template(16, UserRoleNewComponent_ng_template_11_mat_error_16_Template, 3, 1, "mat-error", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 18)(18, "p", 22);
    \u0275\u0275text(19, "Role Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 25);
    \u0275\u0275template(21, UserRoleNewComponent_ng_template_11_mat_error_21_Template, 3, 1, "mat-error", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 18)(23, "p", 19);
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "p-dropdown", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 27)(27, "button", 28);
    \u0275\u0275text(28, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 29);
    \u0275\u0275listener("click", function UserRoleNewComponent_ng_template_11_Template_button_click_29_listener() {
      const nextCallback_r5 = \u0275\u0275restoreView(_r4).nextCallback;
      return \u0275\u0275resetView(nextCallback_r5.emit());
    });
    \u0275\u0275text(30, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_15_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c038));
    \u0275\u0275property("filter", true)("options", ctx_r2.languageIdList)("panelStyle", \u0275\u0275pureFunction0(21, _c120));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c038));
    \u0275\u0275property("filter", true)("options", ctx_r2.companyIdList)("panelStyle", \u0275\u0275pureFunction0(23, _c120));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("roleId")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r2.form.get("roleId")) == null ? null : tmp_13_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("roleId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_15_0 = ctx_r2.form.get("userRoleName")) == null ? null : tmp_15_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("userRoleName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c220));
    \u0275\u0275property("options", ctx_r2.status);
  }
}
function UserRoleNewComponent_p_stepperPanel_12_ng_template_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function UserRoleNewComponent_p_stepperPanel_12_ng_template_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function UserRoleNewComponent_p_stepperPanel_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function UserRoleNewComponent_p_stepperPanel_12_ng_template_1_Template_div_click_0_listener() {
      const onClick_r7 = \u0275\u0275restoreView(_r6).onClick;
      return \u0275\u0275resetView(onClick_r7.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, UserRoleNewComponent_p_stepperPanel_12_ng_template_1_p_2_Template, 2, 0, "p", 11)(3, UserRoleNewComponent_p_stepperPanel_12_ng_template_1_img_3_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6, "Screens");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.active == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.active != 0);
  }
}
function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 42)(1, "li", 43)(2, "p", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", element_r10.mainMenu, " ");
  }
}
function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 45);
    \u0275\u0275text(2, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 45);
    \u0275\u0275text(4, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 45);
    \u0275\u0275text(6, "Select All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 45);
    \u0275\u0275text(8, "Create / Modify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 45);
    \u0275\u0275text(10, "Display");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 45);
    \u0275\u0275text(12, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 45)(6, "p-checkbox", 46);
    \u0275\u0275listener("onChange", function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_9_Template_p_checkbox_onChange_6_listener($event) {
      const menu_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onChange(menu_r12, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 45)(8, "p-checkbox", 47);
    \u0275\u0275twoWayListener("ngModelChange", function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_9_Template_p_checkbox_ngModelChange_8_listener($event) {
      const menu_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(menu_r12.createUpdate, $event) || (menu_r12.createUpdate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 45)(10, "p-checkbox", 47);
    \u0275\u0275twoWayListener("ngModelChange", function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_9_Template_p_checkbox_ngModelChange_10_listener($event) {
      const menu_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(menu_r12.view, $event) || (menu_r12.view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 45)(12, "p-checkbox", 47);
    \u0275\u0275twoWayListener("ngModelChange", function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_9_Template_p_checkbox_ngModelChange_12_listener($event) {
      const menu_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(menu_r12.delete, $event) || (menu_r12.delete = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r12 = ctx.$implicit;
    const i_r13 = ctx.rowIndex;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r13 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r12.subMenuName);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("ngModel", menu_r12.createUpdate && menu_r12.view && menu_r12.delete);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true);
    \u0275\u0275twoWayProperty("ngModel", menu_r12.createUpdate);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true);
    \u0275\u0275twoWayProperty("ngModel", menu_r12.view);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true);
    \u0275\u0275twoWayProperty("ngModel", menu_r12.delete);
  }
}
function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab");
    \u0275\u0275template(1, UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_1_Template, 4, 1, "ng-template", 35);
    \u0275\u0275elementStart(2, "div", 36)(3, "div", 37)(4, "p-checkbox", 38);
    \u0275\u0275listener("onChange", function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_Template_p_checkbox_onChange_4_listener($event) {
      const element_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.checkUncheckAll(element_r10.mainMenu, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Select All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 39)(7, "p-table", 40);
    \u0275\u0275template(8, UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_8_Template, 13, 0, "ng-template", 6)(9, UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_ng_template_9_Template, 13, 10, "ng-template", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("binary", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", element_r10.Menu)("scrollable", true);
  }
}
function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "mat-tab-group", 32);
    \u0275\u0275template(2, UserRoleNewComponent_p_stepperPanel_12_ng_template_2_mat_tab_2_Template, 10, 3, "mat-tab", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 27)(4, "button", 34);
    \u0275\u0275listener("click", function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_Template_button_click_4_listener() {
      const prevCallback_r14 = \u0275\u0275restoreView(_r8).prevCallback;
      return \u0275\u0275resetView(prevCallback_r14.emit());
    });
    \u0275\u0275text(5, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function UserRoleNewComponent_p_stepperPanel_12_ng_template_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.menuList);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function UserRoleNewComponent_p_stepperPanel_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, UserRoleNewComponent_p_stepperPanel_12_ng_template_1_Template, 7, 2, "ng-template", 6)(2, UserRoleNewComponent_p_stepperPanel_12_ng_template_2_Template, 8, 2, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
function UserRoleNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p", 49);
    \u0275\u0275text(2, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div")(4, "p", 50);
    \u0275\u0275text(5, "Admin ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "borderCircle" : "disable text-muted");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.active == 2 ? "textBlack f600" : "text-muted");
  }
}
function UserRoleNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 27)(18, "button", 34);
    \u0275\u0275listener("click", function UserRoleNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r16 = \u0275\u0275restoreView(_r15).prevCallback;
      return \u0275\u0275resetView(prevCallback_r16.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 29);
    \u0275\u0275listener("click", function UserRoleNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r15);
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
function UserRoleNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, UserRoleNewComponent_p_stepperPanel_13_ng_template_1_Template, 6, 2, "ng-template", 6)(2, UserRoleNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
}
var _UserRoleNewComponent = class _UserRoleNewComponent {
  constructor(cs, spin, route, router, path, fb, service, moduleService, messageService, cas, auth) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.moduleService = moduleService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.userRoleTable = [];
    this.selectedUserRole = [];
    this.cols = [];
    this.target = [];
    this.active = 0;
    this.status = [];
    this.disabled = false;
    this.step = 0;
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.sub = new Subscription();
    this.languageIdList = [];
    this.companyIdList = [];
    this.isbtntext = true;
    this.btntext = "Save";
    this.menuList = [];
    this.menuListRaw = [];
    this.moduleResult = [];
    this.menuListraw = [
      {
        mainMenu: "Shortcuts",
        Menu: [
          { menuId: 1, subMenuId: 1e3, referenceField2: "Setup", referenceField1: "Company", createUpdate: true, delete: true, view: true },
          { menuId: 1, subMenuId: 1001, referenceField2: "Setup", referenceField1: "Language", createUpdate: true, delete: true, view: true }
        ]
      }
    ];
    this.form = this.fb.group({
      statusId: ["16", [Validators.required]],
      roleId: [,],
      userRoleName: [, [Validators.required]],
      languageId: [, [Validators.required]],
      companyId: [, [Validators.required]]
    });
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
    ];
  }
  setStep(index) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
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
    let obj = {};
    obj.companyId = this.auth.companyId;
    obj.languageId = this.auth.languageId;
    const dataToSend = ["Setup", "User Role", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.roleId.disable();
    }
    if (this.pageToken.pageflow == "New") {
      this.form.controls.languageId.patchValue(this.auth.languageId);
      this.form.controls.companyId.patchValue(this.auth.companyId);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.getModuleId();
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
  fill(data) {
    if (data.pageflow != "New") {
      this.btntext = "Updated";
      if (data.pageflow == "Display") {
        this.form.disable();
        this.isbtntext = false;
      }
      this.spin.show();
      console.log(data);
      this.moduleService.search({ languageId: [this.auth.languageId], companyId: [this.auth.companyId] }).subscribe((moduleRes) => {
        this.sub.add(this.service.GetNew(data.roleId, this.auth.companyId, this.auth.languageId, data.menuId, data.subMenuId).subscribe((res) => {
          console.log(res);
          this.form.patchValue(res[0]);
          let combined = this.cs.removeDuplicateObj(res, moduleRes);
          this.menuList = [];
          this.menuList.push({
            mainMenu: "Setup",
            Menu: combined.filter((x) => x.moduleId == 2e3)
          });
          this.menuList.push({
            mainMenu: "Masters",
            Menu: combined.filter((x) => x.moduleId == 3e3)
          });
          this.menuList.push({
            mainMenu: "Airport",
            Menu: combined.filter((x) => x.moduleId == 4e3)
          });
          this.menuList.push({
            mainMenu: "Customer Service",
            Menu: combined.filter((x) => x.moduleId == 5e3)
          });
          this.menuList.push({
            mainMenu: "Operations",
            Menu: combined.filter((x) => x.moduleId == 6e3)
          });
          this.menuList.push({
            mainMenu: "Billings",
            Menu: combined.filter((x) => x.moduleId == 7e3)
          });
          this.menuList.push({
            mainMenu: "Integrations",
            Menu: combined.filter((x) => x.moduleId == 8e3)
          });
          this.menuList.push({
            mainMenu: "Reports",
            Menu: combined.filter((x) => x.moduleId == 9e3)
          });
          this.spin.hide();
        }, (err) => {
          this.cs.commonerrorNew(err);
          this.spin.hide();
        }));
      });
    }
  }
  reset() {
    this.menuList = this.menuListRaw;
  }
  resetAll() {
    this.menuList.forEach((x) => {
      x.Menu.forEach((element) => {
        element.createUpdate = false, element.delete = false, element.view = false;
      });
    });
  }
  addScreens() {
    let paramdata = "";
    paramdata = this.cs.encrypt({ lines: this.menuList });
    this.router.navigate(["/main/idMaster/userrole-new/" + paramdata]);
  }
  checkUncheckAll(menu, event) {
    if (event.checked) {
      this.menuList.find((x) => x.mainMenu == menu).Menu.forEach((x) => {
        x.createUpdate = true, x.delete = true, x.view = true;
      });
    } else {
      this.menuList.find((x) => x.mainMenu == menu).Menu.forEach((x) => {
      });
    }
  }
  onChange(menu, event) {
    menu.view = event.checked;
    menu.createUpdate = event.checked;
    menu.delete = event.checked;
  }
  onLanguageChange(value) {
    this.moduleService.search({ languageId: [value.value] }).subscribe((res) => {
      this.companyIdList = [];
      res.forEach((element) => {
        this.companyIdList.push({ value: element.companyId, lable: element.companyId + "-" + element.description });
      });
    });
    this.moduleService.search({ companyId: [this.auth.companyId], languageId: [this.auth.languageId] }).subscribe((res) => {
      this.moduleResult = [];
      this.moduleResult.push(res);
      this.menuList = [];
      this.menuList.push({
        mainMenu: "Setup",
        Menu: res.filter((x) => x.module == 2e3)
      });
      this.menuList.push({
        mainMenu: "Master",
        Menu: res.filter((x) => x.module == 3e3)
      });
      this.menuList.push({
        mainMenu: "Airport",
        Menu: res.filter((x) => x.moduleId == 4e3)
      });
      this.menuList.push({
        mainMenu: "Customer Service",
        Menu: res.filter((x) => x.moduleId == 5e3)
      });
      this.menuList.push({
        mainMenu: "Operations",
        Menu: res.filter((x) => x.moduleId == 6e3)
      });
      this.menuList.push({
        mainMenu: "Billings",
        Menu: res.filter((x) => x.moduleId == 7e3)
      });
      this.menuList.push({
        mainMenu: "Integrations",
        Menu: res.filter((x) => x.moduleId == 8e3)
      });
      this.menuList.push({
        mainMenu: "Reports",
        Menu: res.filter((x) => x.moduleId == 9e3)
      });
    });
  }
  onCompanyChange(value) {
    this.moduleService.search({ companyId: [value.value], languageId: [this.auth.languageId] }).subscribe((res) => {
      this.moduleResult = [];
      this.moduleResult.push(res);
      this.menuList = [];
      this.menuList.push({
        mainMenu: "Setup",
        Menu: res.filter((x) => x.moduleId == 2e3)
      });
      this.menuList.push({
        mainMenu: "Masters",
        Menu: res.filter((x) => x.moduleId == 3e3)
      });
      this.menuList.push({
        mainMenu: "Airport",
        Menu: res.filter((x) => x.moduleId == 4e3)
      });
      this.menuList.push({
        mainMenu: "Customer Service",
        Menu: res.filter((x) => x.moduleId == 5e3)
      });
      this.menuList.push({
        mainMenu: "Operations",
        Menu: res.filter((x) => x.moduleId == 6e3)
      });
      this.menuList.push({
        mainMenu: "Billings",
        Menu: res.filter((x) => x.moduleId == 7e3)
      });
      this.menuList.push({
        mainMenu: "Integrations",
        Menu: res.filter((x) => x.moduleId == 8e3)
      });
      this.menuList.push({
        mainMenu: "Reports",
        Menu: res.filter((x) => x.moduleId == 9e3)
      });
    });
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: "warn", summary: "Error", key: "br", detail: "Please fill the required fields to continue" });
      return;
    }
    this.form.updateValueAndValidity;
    let data = [];
    this.menuList.forEach((x) => {
      x.Menu.forEach((y) => {
        y.languageId = this.form.controls.languageId.value;
        y.companyId = this.form.controls.companyId.value;
        y.statusId = this.form.controls.statusId.value;
        y.edit = true;
        data.push(y);
      });
    });
    this.spin.show();
    if (this.pageToken.pageflow != "New") {
      this.service.Update(data).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res[0].roleId.value + "has been updated successfully" });
          this.router.navigate(["/main/idMaster/userrole"]);
          this.spin.hide();
        },
        error: (err) => {
          this.form.controls.statusId.patchValue(this.form.controls.statusId.value ? "Active" : "Inactive");
          this.cs.commonerrorNew(err);
          this.spin.hide();
        }
      });
    } else {
      this.service.Create(data).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res[0].roleId.value + "has been created successfully" });
            this.router.navigate(["/main/idMaster/userrole"]);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.form.controls.statusId.patchValue(this.form.controls.statusId.value ? "Active" : "InActive");
          this.cs.commonerrorNew(err);
          this.spin.hide();
        }
      });
    }
  }
  getModuleId() {
    this.moduleService.search({ companyId: [this.auth.companyId], languageId: [this.auth.languageId] }).subscribe((res) => {
      this.moduleResult = [];
      this.moduleResult = res;
      this.menuList = [];
      this.menuList.push({
        mainMenu: "Setup",
        Menu: this.moduleResult.filter((x) => x.moduleId == 2)
      });
      this.menuList.push({
        mainMenu: "Masters",
        Menu: this.moduleResult.filter((x) => x.moduleId == 3e3)
      });
      this.menuList.push({
        mainMenu: "Airport",
        Menu: this.moduleResult.filter((x) => x.moduleId == 4e3)
      });
      this.menuList.push({
        mainMenu: "Customer Service",
        Menu: this.moduleResult.filter((x) => x.moduleId == 5e3)
      });
      this.menuList.push({
        mainMenu: "Operations",
        Menu: this.moduleResult.filter((x) => x.moduleId == 6e3)
      });
      this.menuList.push({
        mainMenu: "Billings",
        Menu: this.moduleResult.filter((x) => x.moduleId == 7e3)
      });
      this.menuList.push({
        mainMenu: "Integrations",
        Menu: this.moduleResult.filter((x) => x.moduleId == 8e3)
      });
      this.menuList.push({
        mainMenu: "Reports",
        Menu: this.moduleResult.filter((x) => x.moduleId == 9e3)
      });
    });
  }
  getModuleIDSuperAdmin() {
    this.moduleService.search({ companyId: [this.form.controls.companyId.value], languageId: this.form.controls.languageId.value }).subscribe((res) => {
      this.moduleResult = [];
      this.moduleResult.push(res);
      this.menuList = [];
      this.menuList.push({
        mainMenu: "Setup",
        Menu: res.filter((x) => x.moduleId == 2e3)
      });
      this.menuList.push({
        mainMenu: "Masters",
        Menu: res.filter((x) => x.moduleId == 3e3)
      });
      this.menuList.push({
        mainMenu: "Airport",
        Menu: res.filter((x) => x.moduleId == 4e3)
      });
      this.menuList.push({
        mainMenu: "Customer Service",
        Menu: res.filter((x) => x.moduleId == 5e3)
      });
      this.menuList.push({
        mainMenu: "Operations",
        Menu: res.filter((x) => x.moduleId == 6e3)
      });
      this.menuList.push({
        mainMenu: "Billings",
        Menu: res.filter((x) => x.moduleId == 7e3)
      });
      this.menuList.push({
        mainMenu: "Integrations",
        Menu: res.filter((x) => x.moduleId == 8e3)
      });
      this.menuList.push({
        mainMenu: "Reports",
        Menu: res.filter((x) => x.moduleId == 9e3)
      });
    });
  }
};
_UserRoleNewComponent.\u0275fac = function UserRoleNewComponent_Factory(t) {
  return new (t || _UserRoleNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserRoleService), \u0275\u0275directiveInject(ModuleService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_UserRoleNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserRoleNewComponent, selectors: [["app-user-role-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [3, "formGroup"], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "languageId", "appendTo", "body", 1, "w-100", 3, "onChange", "filter", "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "companyId", "appendTo", "body", 1, "w-100", 3, "onChange", "filter", "options", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "roleId", "pInputText", "", "pKeyFilter", "num", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "userRoleName", "pInputText", "", "pKeyFilter", "alphanum", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select ", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/idMaster/userrole", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "row", "d-flex", "justify-content"], [1, "mx-8"], [4, "ngFor", "ngForOf"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], ["mat-tab-label", ""], [1, "scrolltable", "mr-1"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "pt-3", "pb-3"], [3, "onChange", "binary"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(78vh - 19.8rem)", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "value", "scrollable"], ["pTemplate", "body"], [1, "nav"], [1, "nav-item"], ["href", "", 1, "nav-link"], [2, "text-align", "center"], [3, "onChange", "binary", "ngModel"], [3, "ngModelChange", "binary", "ngModel"], [1, "d-flex", "flex-column", "align-items-center"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"]], template: function UserRoleNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function UserRoleNewComponent_Template_p_stepper_activeStepChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(9, "p-stepperPanel");
    \u0275\u0275template(10, UserRoleNewComponent_ng_template_10_Template, 7, 2, "ng-template", 6)(11, UserRoleNewComponent_ng_template_11_Template, 31, 25, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, UserRoleNewComponent_p_stepperPanel_12_Template, 3, 0, "p-stepperPanel", 8)(13, UserRoleNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("User Role - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow == "New");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgForOf, NgIf, RouterLink, PrimeTemplate, Table, Dropdown, InputText, Checkbox, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, KeyFilter, MatError, MatTabLabel, MatTab, MatTabGroup, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n.mat-mdc-tab-group[_ngcontent-%COMP%], .mat-mdc-tab-nav-bar[_ngcontent-%COMP%] {\n  --mdc-tab-indicator-active-indicator-color: #fb4;\n  --mat-tab-header-disabled-ripple-color: black;\n  --mat-tab-header-pagination-icon-color: #000;\n  --mat-tab-header-inactive-label-text-color: black;\n  --mat-tab-header-active-label-text-color: #fb4;\n  --mat-tab-header-active-ripple-color: #fb4;\n  --mat-tab-header-inactive-ripple-color: #fb4;\n  --mat-tab-header-inactive-focus-label-text-color: black;\n  --mat-tab-header-inactive-hover-label-text-color: black;\n  --mat-tab-header-active-focus-label-text-color: #fb4;\n  --mat-tab-header-active-hover-label-text-color: #fb4;\n  --mat-tab-header-active-focus-indicator-color: #fb4;\n  --mat-tab-header-active-hover-indicator-color: #fb4;\n}\n/*# sourceMappingURL=user-role-new.component.css.map */"] });
var UserRoleNewComponent = _UserRoleNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserRoleNewComponent, { className: "UserRoleNewComponent", filePath: "src\\app\\main\\id-masters\\user-role\\user-role-new\\user-role-new.component.ts", lineNumber: 20 });
})();

// src/app/main/id-masters/id-masters-routing.module.ts
var routes = [
  { path: "company", component: CompanyComponent, data: { title: "Setup", module: "Company" } },
  { path: "company-new/:code", component: CompanyNewComponent, data: { title: "Setup", module: "Company - Add New" } },
  { path: "language", component: LanguageComponent, data: { title: "Setup", module: "Language" } },
  { path: "language-new/:code", component: LanguageNewComponent, data: { title: "Setup", module: "Language - Add New" } },
  { path: "consignmentType", component: ConsignmentTypeComponent, data: { title: "Setup", module: "ConsignmentType" } },
  { path: "consignmentType-new/:code", component: ConsignmentTypeNewComponent, data: { title: "Setup", module: "ConsignmentType - Add New" } },
  { path: "serviceType", component: ServiceTypeComponent, data: { title: "Setup", module: "ServiceType" } },
  { path: "serviceType-new/:code", component: ServiceTypeNewComponent, data: { title: "Setup", module: "ServiceType - Add New" } },
  { path: "menu", component: MenuComponent, data: { title: "Setup", module: "Menu" } },
  { path: "menu-new/:code", component: MenuNewComponent, data: { title: "Setup", module: "Menu - Add New" } },
  { path: "status", component: StatusComponent, data: { title: "Setup", module: "Status" } },
  { path: "status-new/:code", component: StatusNewComponent, data: { title: "Setup", module: "Status - Add New" } },
  { path: "currency", component: CurrencyComponent, data: { title: "Setup", module: "Currency" } },
  { path: "currency-new/:code", component: CurrencyNewComponent, data: { title: "Setup", module: "Currency - Add New" } },
  { path: "loadType", component: LoadTypeComponent, data: { title: "Setup", module: "LoadType" } },
  { path: "loadType-new/:code", component: LoadTypeNewComponent, data: { title: "Setup", module: "LoadType - Add New" } },
  { path: "subProduct", component: SubProductComponent, data: { title: "Setup", module: "Sub Product" } },
  { path: "subProduct-new/:code", component: SubProductNewComponent, data: { title: "Setup", module: "Sub Product - Add New" } },
  { path: "module", component: ModuleComponent, data: { title: "Setup", module: "Module" } },
  { path: "module-new/:code", component: ModuleNewComponent, data: { title: "Setup", module: "Module - Add New" } },
  { path: "province", component: ProvinceComponent, data: { title: "Setup", module: "Province" } },
  { path: "province-new/:code", component: ProvinceNewComponent, data: { title: "Setup", module: "Province - Add New" } },
  { path: "district", component: DistrictComponent, data: { title: "Setup", module: "District" } },
  { path: "district-new/:code", component: DistrictNewComponent, data: { title: "Setup", module: "District - Add New" } },
  { path: "city", component: CityComponent, data: { title: "Setup", module: "City" } },
  { path: "city-new/:code", component: CityNewComponent, data: { title: "Setup", module: "City - Add New" } },
  { path: "product", component: ProductComponent, data: { title: "Setup", module: "Product" } },
  { path: "product-new/:code", component: ProductNewComponent, data: { title: "Setup", module: "Product - Add New" } },
  { path: "country", component: CountryComponent, data: { title: "Setup", module: "Country" } },
  { path: "country-new/:code", component: CountryNewComponent, data: { title: "Setup", module: "Country - Add New" } },
  { path: "notification", component: NotificationComponent, data: { title: "Setup", module: "Notification" } },
  { path: "notification-new/:code", component: NotificationNewComponent, data: { title: "Setup", module: "Notification - Add New" } },
  { path: "users", component: UsersComponent, data: { title: "Master", module: "Users" } },
  { path: "users-new/:code", component: UsersNewComponent, data: { title: "Master", module: "Users - Add New" } },
  { path: "rateParameter", component: RateParameterComponent, data: { title: "Setup", module: "Rate Parameter" } },
  { path: "rateParameter-new/:code", component: RateParameterNewComponent, data: { title: "Setup", module: "Rate Parameter - Add New" } },
  { path: "userrole", component: UserRoleComponent, data: { title: "Master", module: "UserRole" } },
  { path: "userrole-new/:code", component: UserRoleNewComponent, data: { title: "Master", module: "UserRole - Add New" } }
];
var _IdMastersRoutingModule = class _IdMastersRoutingModule {
};
_IdMastersRoutingModule.\u0275fac = function IdMastersRoutingModule_Factory(t) {
  return new (t || _IdMastersRoutingModule)();
};
_IdMastersRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _IdMastersRoutingModule });
_IdMastersRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var IdMastersRoutingModule = _IdMastersRoutingModule;

// src/app/main/id-masters/id-masters.module.ts
var _IdMastersModule = class _IdMastersModule {
};
_IdMastersModule.\u0275fac = function IdMastersModule_Factory(t) {
  return new (t || _IdMastersModule)();
};
_IdMastersModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _IdMastersModule });
_IdMastersModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  IdMastersRoutingModule,
  SharedModule
] });
var IdMastersModule = _IdMastersModule;
export {
  IdMastersModule
};
//# sourceMappingURL=chunk-W3FMY2CS.js.map

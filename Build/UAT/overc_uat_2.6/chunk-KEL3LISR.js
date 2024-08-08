import {
  ConsignmentService
} from "./chunk-IH3RBTND.js";
import {
  CustomTableComponent
} from "./chunk-DQ3G76AL.js";
import {
  PathNameService
} from "./chunk-RCG76ZQ6.js";
import {
  AuthService,
  Calendar,
  Checkbox,
  Chips,
  CommonModule,
  CommonServiceService,
  DatePipe,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FrozenColumn,
  HttpClient,
  IconField,
  InputIcon,
  InputText,
  MatDialog,
  MatMenu,
  MatMenuContent,
  MatMenuItem,
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
  RouterModule,
  SharedModule,
  SortIcon,
  SortableColumn,
  Table,
  TableHeaderCheckbox,
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
  ɵɵpureFunction1,
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
} from "./chunk-GJSLL6LO.js";

// src/app/main/reports/report.service.ts
var _ReportService = class _ReportService {
  constructor(http) {
    this.http = http;
    this.apiName = "/overc-midmile-service/reports";
  }
  search(obj) {
    return this.http.post(this.apiName + "/consoleTrackingReport", obj);
  }
};
_ReportService.\u0275fac = function ReportService_Factory(t) {
  return new (t || _ReportService)(\u0275\u0275inject(HttpClient));
};
_ReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
var ReportService = _ReportService;

// src/app/main/reports/console-tracking/console-tracking.component.ts
var _c0 = ["consoleTrackingReport"];
var _c1 = () => ({ width: "80vw" });
var _c2 = () => ({ "width": "100%" });
function ConsoleTrackingComponent_ng_template_35_th_3_Template(rf, ctx) {
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
function ConsoleTrackingComponent_ng_template_35_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th")(1, "input", 38);
    \u0275\u0275listener("input", function ConsoleTrackingComponent_ng_template_35_th_7_Template_input_input_1_listener($event) {
      const col_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275nextContext(2);
      const consoleTrackingReportTag_r3 = \u0275\u0275reference(34);
      return \u0275\u0275resetView(consoleTrackingReportTag_r3.filter($event.target == null ? null : $event.target.value, col_r6.field, "contains"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const consoleTrackingReportTag_r3 = \u0275\u0275reference(34);
    \u0275\u0275advance();
    \u0275\u0275property("value", consoleTrackingReportTag_r3.filters[col_r6.field] == null ? null : consoleTrackingReportTag_r3.filters[col_r6.field].value);
  }
}
function ConsoleTrackingComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 32);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsoleTrackingComponent_ng_template_35_th_3_Template, 3, 3, "th", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tr")(5, "th", 32);
    \u0275\u0275element(6, "p-tableHeaderCheckbox", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ConsoleTrackingComponent_ng_template_35_th_7_Template, 2, 1, "th", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r7);
  }
}
function ConsoleTrackingComponent_ng_template_36_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext().$implicit;
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r11[col_r10.field], " ");
  }
}
function ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275listener("click", function ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_0_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const rowData_r11 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.noOfShipments("Edit", rowData_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r11[col_r10.field]);
  }
}
function ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275listener("click", function ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const rowData_r11 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.noOfConsoles("Edit", rowData_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r11[col_r10.field]);
  }
}
function ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275listener("click", function ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const rowData_r11 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.noOfUnconsolidated("Edit", rowData_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r11[col_r10.field]);
  }
}
function ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, rowData_r11[col_r10.field], "dd-MM-yyyy HH:mm"));
  }
}
function ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_0_Template, 2, 1, "span", 43)(1, ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_1_Template, 2, 1, "span", 43)(2, ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_2_Template, 2, 1, "span", 43)(3, ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_span_3_Template, 3, 4, "span", 44);
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", col_r10.field == "noOfShipmentsScanned");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r10.field == "noOfConsoles");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r10.field == "noOfUnconsolidatedShipments");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r10.format == "date");
  }
}
function ConsoleTrackingComponent_ng_template_36_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsoleTrackingComponent_ng_template_36_td_3_ng_container_1_Template, 2, 1, "ng-container", 42)(2, ConsoleTrackingComponent_ng_template_36_td_3_ng_template_2_Template, 4, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const dateTemplate_r15 = \u0275\u0275reference(3);
    \u0275\u0275styleMap(col_r10.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r10.format !== "date" && col_r10.format !== "hyperLink")("ngIfElse", dateTemplate_r15);
  }
}
function ConsoleTrackingComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 39)(2, "p-checkbox", 40);
    \u0275\u0275listener("onChange", function ConsoleTrackingComponent_ng_template_36_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsoleTrackingComponent_ng_template_36_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r8.selectedConsoleTracking, $event) || (ctx_r8.selectedConsoleTracking = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ConsoleTrackingComponent_ng_template_36_td_3_Template, 4, 4, "td", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r11 = ctx.$implicit;
    const columns_r16 = ctx.columns;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r8.selectedConsoleTracking[0] === rowData_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r8.selectedConsoleTracking);
    \u0275\u0275property("value", rowData_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r16);
  }
}
function ConsoleTrackingComponent_ng_template_37_Template(rf, ctx) {
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
function ConsoleTrackingComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _ConsoleTrackingComponent = class _ConsoleTrackingComponent {
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
    this.consoleTrackingReportTable = [];
    this.selectedConsoleTracking = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      partnerMasterAirwayBill: [],
      partnerHouseAirwayBill: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      partnerMasterAirwayBill: "Partner MAWB",
      partnerHouseAirwayBill: "Partner HAWB"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.partnerMAWBDropdown = [];
    this.partnerHAWBDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Mid-Mile", "Console Tracking"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "noOfShipmentsScanned", header: "Total Shipments", format: "hyperLink" },
      { field: "noOfConsoles", header: "Consolidated Shipments", format: "hyperLink" },
      { field: "noOfUnconsolidatedShipments", header: "Unconsolidated Shipments", format: "hyperLink" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "companyId", header: "Company ID" }
    ];
  }
  initialCall() {
    this.spin.show();
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    this.service.search(obj).subscribe({
      next: (res = []) => {
        this.consoleTrackingReportTable = res;
        this.getSearchDropdown();
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedConsoleTracking[this.selectedConsoleTracking.length - 1];
    this.selectedConsoleTracking.length = 0;
    this.selectedConsoleTracking.push(choosen);
  }
  customTable() {
    const dialogRef = this.dialog.open(CustomTableComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { target: this.cols, source: this.target }
    });
  }
  downloadExcel() {
    const exportData = this.consoleTrackingReportTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Console Tracking");
  }
  getSearchDropdown() {
    this.consoleTrackingReportTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.partnerMasterAirwayBill != null) {
        this.partnerMAWBDropdown.push({ value: res.partnerMasterAirwayBill, label: res.partnerMasterAirwayBill });
        this.partnerMAWBDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerMAWBDropdown, "value");
      }
      if (res.partnerHouseAirwayBill != null) {
        this.partnerHAWBDropdown.push({ value: res.partnerHouseAirwayBill, label: res.partnerHouseAirwayBill });
        this.partnerHAWBDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerHAWBDropdown, "value");
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
        this.consoleTrackingReportTable = res;
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
      partnerMasterAirwayBill: [],
      partnerHouseAirwayBill: [],
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
  noOfShipments(type = "New", linedata = null) {
    if (linedata) {
      this.selectedConsoleTracking = linedata;
    }
    if (this.selectedConsoleTracking.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsoleTracking[0] : linedata, pageflow: type, report: true });
      this.router.navigate(["/main/airport/preAlertManifest-update/" + paramdata]);
    }
  }
  noOfConsoles(type = "New", linedata = null) {
    if (linedata) {
      this.selectedConsoleTracking = linedata;
    }
    if (this.selectedConsoleTracking.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsoleTracking[0] : linedata, pageflow: type, report: true, module: "consolidated" });
      this.router.navigate(["/main/airport/console-edit/" + paramdata]);
    }
  }
  noOfUnconsolidated(type = "New", linedata = null) {
    if (linedata) {
      this.selectedConsoleTracking = linedata;
    }
    if (this.selectedConsoleTracking.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsoleTracking[0] : linedata, pageflow: type, report: true, module: "unconsolidated" });
      this.router.navigate(["/main/airport/console-edit/" + paramdata]);
    }
  }
};
_ConsoleTrackingComponent.\u0275fac = function ConsoleTrackingComponent_Factory(t) {
  return new (t || _ConsoleTrackingComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_ConsoleTrackingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleTrackingComponent, selectors: [["app-console-tracking"]], viewQuery: function ConsoleTrackingComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 41, vars: 26, consts: [["consoleTrackingReport", ""], ["consoleTrackingReportTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerMasterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerHouseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "p-column-filter", 3, "input", "value"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [3, "style", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["style", "cursor:pointer", "class", "textOrange font-weight-bold hvr-underline-from-center", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "textOrange", "font-weight-bold", "hvr-underline-from-center", 2, "cursor", "pointer", 3, "click"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function ConsoleTrackingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Console Tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function ConsoleTrackingComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function ConsoleTrackingComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 9)(8, "p-iconField", 10)(9, "p-inputIcon", 11);
    \u0275\u0275listener("click", function ConsoleTrackingComponent_Template_p_inputIcon_click_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consoleTrackingReport_r2 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(consoleTrackingReport_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 12);
    \u0275\u0275listener("input", function ConsoleTrackingComponent_Template_input_input_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consoleTrackingReportTag_r3 = \u0275\u0275reference(34);
      return \u0275\u0275resetView(consoleTrackingReportTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-overlayPanel", 13, 0)(13, "form", 14)(14, "div", 15)(15, "div", 16)(16, "p", 17);
    \u0275\u0275text(17, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "p-multiSelect", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 16)(20, "p", 17);
    \u0275\u0275text(21, "Partner HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "p-multiSelect", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 20)(24, "div")(25, "img", 21);
    \u0275\u0275listener("click", function ConsoleTrackingComponent_Template_img_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "button", 22);
    \u0275\u0275listener("click", function ConsoleTrackingComponent_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 23);
    \u0275\u0275listener("click", function ConsoleTrackingComponent_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(30, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "p-chips", 24);
    \u0275\u0275listener("onRemove", function ConsoleTrackingComponent_Template_p_chips_onRemove_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsoleTrackingComponent_Template_p_chips_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25)(33, "p-table", 26, 1);
    \u0275\u0275template(35, ConsoleTrackingComponent_ng_template_35_Template, 8, 4, "ng-template", 27)(36, ConsoleTrackingComponent_ng_template_36_Template, 4, 5, "ng-template", 28)(37, ConsoleTrackingComponent_ng_template_37_Template, 4, 1, "ng-template", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "mat-menu", 30, 2);
    \u0275\u0275template(40, ConsoleTrackingComponent_ng_template_40_Template, 4, 0, "ng-template", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c1));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c2));
    \u0275\u0275property("options", ctx.partnerMAWBDropdown)("panelStyle", \u0275\u0275pureFunction0(23, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c2));
    \u0275\u0275property("options", ctx.partnerHAWBDropdown)("panelStyle", \u0275\u0275pureFunction0(25, _c2));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.consoleTrackingReportTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=console-tracking.component.css.map */"] });
var ConsoleTrackingComponent = _ConsoleTrackingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleTrackingComponent, { className: "ConsoleTrackingComponent", filePath: "src\\app\\main\\reports\\console-tracking\\console-tracking.component.ts", lineNumber: 20 });
})();

// src/app/main/reports/inventory-scanning/inventory-scanning.component.ts
var _c02 = ["inventoryScanningReport"];
var _c12 = () => ({ width: "80vw" });
var _c22 = () => ({ "width": "100%" });
var _c3 = (a0) => ({ "selectedRow": a0 });
function InventoryScanningComponent_ng_template_49_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
  }
}
function InventoryScanningComponent_ng_template_49_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th")(1, "input", 45);
    \u0275\u0275listener("input", function InventoryScanningComponent_ng_template_49_th_7_Template_input_input_1_listener($event) {
      const col_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275nextContext(2);
      const inventoryScanningTableTag_r3 = \u0275\u0275reference(48);
      return \u0275\u0275resetView(inventoryScanningTableTag_r3.filter($event.target == null ? null : $event.target.value, col_r6.field, "contains"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const inventoryScanningTableTag_r3 = \u0275\u0275reference(48);
    \u0275\u0275advance();
    \u0275\u0275property("value", inventoryScanningTableTag_r3.filters[col_r6.field] == null ? null : inventoryScanningTableTag_r3.filters[col_r6.field].value);
  }
}
function InventoryScanningComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 40);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InventoryScanningComponent_ng_template_49_th_3_Template, 2, 1, "th", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tr")(5, "th", 43);
    \u0275\u0275element(6, "p-tableHeaderCheckbox", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InventoryScanningComponent_ng_template_49_th_7_Template, 2, 1, "th", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", columns_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r7);
  }
}
function InventoryScanningComponent_ng_template_50_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext().$implicit;
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r11[col_r10.field], " ");
  }
}
function InventoryScanningComponent_ng_template_50_td_3_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, rowData_r11[col_r10.field], "dd-MM-yyyy HH:mm"));
  }
}
function InventoryScanningComponent_ng_template_50_td_3_ng_template_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, rowData_r11[col_r10.field], "dd-MM-yyyy"));
  }
}
function InventoryScanningComponent_ng_template_50_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InventoryScanningComponent_ng_template_50_td_3_ng_template_2_span_0_Template, 3, 4, "span", 50)(1, InventoryScanningComponent_ng_template_50_td_3_ng_template_2_span_1_Template, 3, 4, "span", 50);
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", col_r10.format === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r10.format === "date1");
  }
}
function InventoryScanningComponent_ng_template_50_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, InventoryScanningComponent_ng_template_50_td_3_ng_container_1_Template, 2, 1, "ng-container", 49)(2, InventoryScanningComponent_ng_template_50_td_3_ng_template_2_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const dateTemplate_r12 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r10.format !== "date" && col_r10.format !== "date1" && col_r10.format !== "boolean" && col_r10.format !== "hyperLink")("ngIfElse", dateTemplate_r12);
  }
}
function InventoryScanningComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 46)(1, "td", 47)(2, "p-checkbox", 48);
    \u0275\u0275listener("onChange", function InventoryScanningComponent_ng_template_50_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function InventoryScanningComponent_ng_template_50_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r8.selectedInventoryScanning, $event) || (ctx_r8.selectedInventoryScanning = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, InventoryScanningComponent_ng_template_50_td_3_Template, 4, 2, "td", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r11 = ctx.$implicit;
    const columns_r13 = ctx.columns;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c3, ctx_r8.isSelected(rowData_r11)));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r8.selectedInventoryScanning);
    \u0275\u0275property("value", rowData_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r13);
  }
}
function InventoryScanningComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 51);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function InventoryScanningComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 52);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _InventoryScanningComponent = class _InventoryScanningComponent {
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
    this.inventoryScanningTable = [];
    this.selectedInventoryScanning = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      partnerHouseAirwayBill: [],
      partnerMasterAirwayBill: [],
      hawbTypeId: [],
      hawbTimeStamp: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      partnerHouseAirwayBill: "Partner HAWB",
      partnerMasterAirwayBill: "Partner MAWB",
      hawbTypeId: "Action",
      hawbTimeStamp: "Date Time"
    };
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.statusDropdown = [];
    this.timeStampDropdown = [];
  }
  ngOnInit() {
    const link = this.router.url;
    this.activeLink = link.split("/")[3];
    if (this.activeLink == "pendingCustoms") {
      const dataToSend = ["Mid-Mile", "Pending Customs"];
      this.path.setData(dataToSend);
      this.pageFlow = "Pending Customs";
    } else {
      const dataToSend = ["Mid-Mile", "Inventory Scan"];
      this.path.setData(dataToSend);
      this.pageFlow = "Inventory Scan";
    }
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      // { field: 'hawbTypeId', header: 'HAWB Type ID' },
      // { field: 'hawbType', header: 'HAWB Type' },
      // { field: 'hawbTypeDescription', header: 'HAWB Type Description' },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "houseAirwayBill", header: "Consignment No" },
      { field: "pieceId", header: "Piece ID" },
      // { field: 'masterAirwayBill', header: 'Master Airway Bill' },
      // { field: 'pieceTypeId', header: 'Piece Type ID' },
      // { field: 'pieceType', header: 'Piece Type' },
      // { field: 'pieceTypeDescription', header: 'Piece Type Description' },
      { field: "hawbTimeStamp", header: "Scanned Time", format: "date" },
      // { field: 'pieceTimeStamp', header: 'Scanned Time', format: 'date' },
      { field: "updatedBy", header: "Scanned Officer" }
      // { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
    this.target = [
      { field: "pieceId", header: "Piece ID" },
      { field: "companyName", header: "Company" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: " Company ID" },
      { field: "languageId", header: "Language ID" },
      { field: "bagId", header: "Bag ID" }
    ];
  }
  initialCall() {
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      if (this.activeLink == "pendingCustoms") {
        obj.hawbTypeId = ["6"];
      } else {
        obj.hawbTypeId = ["47"];
      }
      this.service.searchStatus(obj).subscribe({
        next: (res) => {
          this.inventoryScanningTable = res;
          this.inventoryScanningTable = this.cs.removeDuplicatesFromArrayList(this.inventoryScanningTable, "partnerMasterAirwayBill");
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
  isSelected(item) {
    return this.selectedInventoryScanning.includes(item);
  }
  onChange() {
    const choosen = this.selectedInventoryScanning[this.selectedInventoryScanning.length - 1];
    this.selectedInventoryScanning.length = 0;
    this.selectedInventoryScanning.push(choosen);
  }
  downloadExcel() {
    const inventoryScanningReport = [
      { field: "hawbTypeId", header: "HAWB Type ID" },
      { field: "hawbType", header: "HAWB Type" },
      { field: "hawbTypeDescription", header: "HAWB Type Description" },
      { field: "hawbTimeStamp", header: "Time Stamp", format: "date" },
      { field: "houseAirwayBill", header: "Consignment No" },
      { field: "masterAirwayBill", header: "Master Airway Bill" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "pieceTypeId", header: "Piece Type ID" },
      { field: "pieceType", header: "Piece Type" },
      { field: "pieceTypeDescription", header: "Piece Type Description" },
      { field: "pieceTimeStamp", header: "Time Stamp", format: "date" },
      { field: "pieceId", header: "Piece ID" },
      { field: "companyName", header: "Company" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: " Company ID" },
      { field: "languageId", header: "Language ID" },
      { field: "bagId", header: "Bag ID" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    const exportData = this.inventoryScanningTable.map((item) => {
      const exportItem = {};
      inventoryScanningReport.forEach((col) => {
        exportItem[col.header] = item[col.field];
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "Inventory Scan Report");
  }
  getSearchDropdown() {
    this.inventoryScanningTable.forEach((res) => {
      if (res.partnerHouseAirwayBill != null) {
        this.houseAirwayBillDropdown.push({ value: res.partnerHouseAirwayBill, label: res.partnerHouseAirwayBill });
        this.houseAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.houseAirwayBillDropdown, "value");
      }
      if (res.partnerMasterAirwayBill != null) {
        this.masterAirwayBillDropdown.push({ value: res.partnerMasterAirwayBill, label: res.partnerMasterAirwayBill });
        this.masterAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.masterAirwayBillDropdown, "value");
      }
      if (res.hawbTypeId != null) {
        this.statusDropdown = [{ value: 6, label: "6 - Pending Customs" }, { value: 47, label: "47 - Gateway Inventory" }];
      }
      if (res.hawbTimeStamp != null) {
        const formattedDate = this.datePipe.transform(res.hawbTimeStamp, "MMM d, y, h:mm a");
        this.timeStampDropdown.push({ value: res.hawbTimeStamp, label: formattedDate });
        this.timeStampDropdown = this.cs.removeDuplicatesFromArrayList(this.timeStampDropdown, "value");
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
    this.service.searchStatus(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.inventoryScanningTable = res;
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
      partnerHouseAirwayBill: [],
      partnerMasterAirwayBill: [],
      hawbTypeId: [],
      hawbTimeStamp: [],
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
_InventoryScanningComponent.\u0275fac = function InventoryScanningComponent_Factory(t) {
  return new (t || _InventoryScanningComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_InventoryScanningComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryScanningComponent, selectors: [["app-inventory-scanning"]], viewQuery: function InventoryScanningComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 55, vars: 37, consts: [["inventoryScanningReport", ""], ["inventoryScanningTableTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem"], ["type", "button", "disabled", "", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], [1, "d-flex", "justify-content-end", "align-items-center"], ["iconPosition", "right"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerMasterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerHouseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "hawbTypeId", "appendTo", "body", 3, "options", "panelStyle"], [1, "col-3", "marginFieldNew", "borderRadius12"], ["formControlName", "hawbTimeStamp", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "iconDisplay", "showIcon"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "sortOrder", "selection", "paginator", "rows", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3"], [4, "ngFor", "ngForOf"], ["pFrozenColumn", "", 2, "width", "5rem"], [1, "pl-3", 3, "disabled"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "p-column-filter", 3, "input", "value"], [3, "ngClass"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function InventoryScanningComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275element(5, "img", 7);
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function InventoryScanningComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "img", 9)(8, "img", 10);
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 14)(14, "p-iconField", 15)(15, "p-inputIcon", 16);
    \u0275\u0275listener("click", function InventoryScanningComponent_Template_p_inputIcon_click_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const inventoryScanningReport_r2 = \u0275\u0275reference(18);
      return \u0275\u0275resetView(inventoryScanningReport_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 17);
    \u0275\u0275listener("input", function InventoryScanningComponent_Template_input_input_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const inventoryScanningTableTag_r3 = \u0275\u0275reference(48);
      return \u0275\u0275resetView(inventoryScanningTableTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p-overlayPanel", 18, 0)(19, "form", 19)(20, "div", 20)(21, "div", 21)(22, "p", 22);
    \u0275\u0275text(23, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "p-multiSelect", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21)(26, "p", 22);
    \u0275\u0275text(27, "Partner HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "p-multiSelect", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 21)(30, "p", 22);
    \u0275\u0275text(31, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "p-multiSelect", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 26)(34, "p", 22);
    \u0275\u0275text(35, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "p-calendar", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 28)(38, "div")(39, "img", 29);
    \u0275\u0275listener("click", function InventoryScanningComponent_Template_img_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "button", 30);
    \u0275\u0275listener("click", function InventoryScanningComponent_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(42, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 31);
    \u0275\u0275listener("click", function InventoryScanningComponent_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(44, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(45, "p-chips", 32);
    \u0275\u0275listener("onRemove", function InventoryScanningComponent_Template_p_chips_onRemove_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function InventoryScanningComponent_Template_p_chips_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 33)(47, "p-table", 34, 1);
    \u0275\u0275twoWayListener("selectionChange", function InventoryScanningComponent_Template_p_table_selectionChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedInventoryScanning, $event) || (ctx.selectedInventoryScanning = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(49, InventoryScanningComponent_ng_template_49_Template, 8, 3, "ng-template", 35)(50, InventoryScanningComponent_ng_template_50_Template, 4, 6, "ng-template", 36)(51, InventoryScanningComponent_ng_template_51_Template, 4, 1, "ng-template", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "mat-menu", 38, 2);
    \u0275\u0275template(54, InventoryScanningComponent_ng_template_54_Template, 4, 0, "ng-template", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.pageFlow);
    \u0275\u0275advance(14);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c12));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c22));
    \u0275\u0275property("options", ctx.masterAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(32, _c22));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c22));
    \u0275\u0275property("options", ctx.houseAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(34, _c22));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c22));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c22));
    \u0275\u0275advance(4);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.inventoryScanningTable)("scrollable", true)("sortOrder", -1);
    \u0275\u0275twoWayProperty("selection", ctx.selectedInventoryScanning);
    \u0275\u0275property("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, FrozenColumn, TableHeaderCheckbox, InputIcon, IconField, InputText, Calendar, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem 3px 0px;\n  border-radius: 6px;\n  text-align: center;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--overcOrange);\n  border: none !important;\n  color: var(--white);\n}\n.green[_ngcontent-%COMP%] {\n  color: #00742b;\n  background-color: #8efab6;\n  font-size: 10px;\n  padding: 2px 12px !important;\n}\n.red[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background-color: #ffacac;\n  font-size: 10px;\n  padding: 2px 12px !important;\n}\n.pointer-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=inventory-scanning.component.css.map */"] });
var InventoryScanningComponent = _InventoryScanningComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryScanningComponent, { className: "InventoryScanningComponent", filePath: "src\\app\\main\\reports\\inventory-scanning\\inventory-scanning.component.ts", lineNumber: 19 });
})();

// src/app/main/reports/reports-routing.module.ts
var routes = [
  { path: "consoleTracking", component: ConsoleTrackingComponent, data: { title: "Reports", module: "Console Tracking Report" } },
  { path: "inventoryScanning", component: InventoryScanningComponent, data: { title: "Reports", module: "Inventory Scan" } },
  { path: "pendingCustoms", component: InventoryScanningComponent, data: { title: "Reports", module: "Pending Customs" } }
];
var _ReportsRoutingModule = class _ReportsRoutingModule {
};
_ReportsRoutingModule.\u0275fac = function ReportsRoutingModule_Factory(t) {
  return new (t || _ReportsRoutingModule)();
};
_ReportsRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsRoutingModule });
_ReportsRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ReportsRoutingModule = _ReportsRoutingModule;

// src/app/main/reports/reports.module.ts
var _ReportsModule = class _ReportsModule {
};
_ReportsModule.\u0275fac = function ReportsModule_Factory(t) {
  return new (t || _ReportsModule)();
};
_ReportsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsModule });
_ReportsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  ReportsRoutingModule,
  SharedModule
] });
var ReportsModule = _ReportsModule;
export {
  ReportsModule
};
//# sourceMappingURL=chunk-KEL3LISR.js.map

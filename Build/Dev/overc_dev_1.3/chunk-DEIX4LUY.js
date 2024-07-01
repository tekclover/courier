import {
  ConsignmentService
} from "./chunk-2Z2LTO62.js";
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
  Dropdown,
  ElementRef,
  FormBuilder,
  HttpClient,
  IconField,
  InputIcon,
  InputText,
  MatDialog,
  MatMenu,
  MatMenuContent,
  MatMenuItem,
  MessageService,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgxSpinnerService,
  PrimeTemplate,
  Router,
  RouterModule,
  RowToggler,
  SharedModule,
  Table,
  TableHeaderCheckbox,
  animate,
  state,
  style,
  transition,
  trigger,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DHPTGBKC.js";

// src/app/main/airport/bonded-manifest/bonded-manifest.service.ts
var _BondedManifestService = class _BondedManifestService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(partnerId) {
    return this.http.get("/overc-midmile-service/console/" + partnerId);
  }
  Create(obj) {
    return this.http.post("/overc-midmile-service/bondedManifest/create/list", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-midmile-service/console/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&cityId=" + obj.cityId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-midmile-service/console/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&cityId=" + obj.cityId);
  }
  search(obj) {
    return this.http.post("/overc-midmile-service/bondedManifest/findBondedManifest", obj);
  }
};
_BondedManifestService.\u0275fac = function BondedManifestService_Factory(t) {
  return new (t || _BondedManifestService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_BondedManifestService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BondedManifestService, factory: _BondedManifestService.\u0275fac, providedIn: "root" });
var BondedManifestService = _BondedManifestService;

// src/app/main/airport/console/console.service.ts
var _ConsoleService = class _ConsoleService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(partnerId) {
    return this.http.get("/overc-midmile-service/console/" + partnerId);
  }
  Create(obj) {
    return this.http.post("/overc-midmile-service/console/create/list", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-midmile-service/console/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&cityId=" + obj.cityId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-midmile-service/console/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&cityId=" + obj.cityId);
  }
  search(obj) {
    return this.http.post("/overc-midmile-service/console/findConsole", obj);
  }
};
_ConsoleService.\u0275fac = function ConsoleService_Factory(t) {
  return new (t || _ConsoleService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ConsoleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsoleService, factory: _ConsoleService.\u0275fac, providedIn: "root" });
var ConsoleService = _ConsoleService;

// src/app/main/airport/pre-alert-manifest/pre-alert-manifest.component.ts
function PreAlertManifestComponent_ng_template_26_th_5_Template(rf, ctx) {
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
function PreAlertManifestComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 27);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 27);
    \u0275\u0275element(4, "p-tableHeaderCheckbox", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PreAlertManifestComponent_ng_template_26_th_5_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function PreAlertManifestComponent_ng_template_27_td_5_ng_container_1_Template(rf, ctx) {
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
function PreAlertManifestComponent_ng_template_27_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy"), " ");
  }
}
function PreAlertManifestComponent_ng_template_27_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, PreAlertManifestComponent_ng_template_27_td_5_ng_container_1_Template, 2, 1, "ng-container", 34)(2, PreAlertManifestComponent_ng_template_27_td_5_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function PreAlertManifestComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "p-checkbox", 32);
    \u0275\u0275listener("onChange", function PreAlertManifestComponent_ng_template_27_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function PreAlertManifestComponent_ng_template_27_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedPreAlertManifest, $event) || (ctx_r5.selectedPreAlertManifest = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 31);
    \u0275\u0275element(4, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PreAlertManifestComponent_ng_template_27_td_5_Template, 4, 2, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const expanded_r11 = ctx.expanded;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedPreAlertManifest[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedPreAlertManifest);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", rowData_r8)("ngClass", expanded_r11 ? "bi-chevron-up" : "bi-chevron-right");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function PreAlertManifestComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "div", 36);
    \u0275\u0275element(2, "div", 37);
    \u0275\u0275elementStart(3, "div", 38)(4, "div", 39)(5, "div", 40)(6, "p", 41);
    \u0275\u0275text(7, "Origin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 40)(9, "p", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 40)(12, "p", 41);
    \u0275\u0275text(13, "Destination");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 40)(15, "p", 43);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 40)(18, "p", 41);
    \u0275\u0275text(19, "Flight No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 40)(21, "p", 42);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 40)(24, "p", 41);
    \u0275\u0275text(25, "No of Pieces");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 40)(27, "p", 43);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 40)(30, "p", 41);
    \u0275\u0275text(31, "Gross Weight");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 40)(33, "p", 42);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 40)(36, "p", 41);
    \u0275\u0275text(37, "ETA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 40)(39, "p", 43);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 40)(42, "p", 41);
    \u0275\u0275text(43, "Currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 40)(45, "p", 42);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 40)(48, "p", 41);
    \u0275\u0275text(49, "Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 40)(51, "p", 42);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 40)(54, "p", 41);
    \u0275\u0275text(55, "Invoice No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 40)(57, "p", 42);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 40)(60, "p", 41);
    \u0275\u0275text(61, "Shipper Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 40)(63, "p", 42);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 40)(66, "p", 41);
    \u0275\u0275text(67, "Consignee Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 40)(69, "p", 42);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const rowData_r12 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r5.getColspan());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(rowData_r12.countryOfOrigin);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r12.destinationDetails.country ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r12.destinationDetails.country);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.flightNo);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r12.noOfPieceHawb ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r12.noOfPieceHawb);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.grossWeight);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r12.flightArrivalTime ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r12.flightArrivalTime);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.currecy);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.consignmentValue);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.invoiceNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.shipperName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.consigneeName);
  }
}
function PreAlertManifestComponent_ng_template_29_Template(rf, ctx) {
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
function PreAlertManifestComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _PreAlertManifestComponent = class _PreAlertManifestComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin, manifest, console2) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.manifest = manifest;
    this.console = console2;
    this.preAlertManifestTable = [];
    this.selectedPreAlertManifest = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Airport Hub", "Pre-Alert Manifest - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyId", header: "Company" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "description", header: "Commodity" },
      { field: "hsCode", header: "HS Code" },
      { field: "statusId", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.preAlertManifestTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedPreAlertManifest[this.selectedPreAlertManifest.length - 1];
    this.selectedPreAlertManifest.length = 0;
    this.selectedPreAlertManifest.push(choosen);
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
        this.deleterecord(this.selectedPreAlertManifest[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedPreAlertManifest.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedPreAlertManifest[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/language-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedPreAlertManifest, module: "Language", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedPreAlertManifest[0]);
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
    const exportData = this.preAlertManifestTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Pre-Alert Manifest");
  }
  onRowExpand(event) {
  }
  onRowCollapse(event) {
  }
  getColspan() {
    return this.cols.length + 2;
  }
  createConsole() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    this.spin.show();
    this.console.Create(this.selectedPreAlertManifest[0]).subscribe({ next: (res) => {
      this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.partnerId + " has been created successfully" });
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
  createManifest() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    this.spin.show();
    this.manifest.Create(this.selectedPreAlertManifest[0]).subscribe({ next: (res) => {
      this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.partnerId + " has been created successfully" });
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
};
_PreAlertManifestComponent.\u0275fac = function PreAlertManifestComponent_Factory(t) {
  return new (t || _PreAlertManifestComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(BondedManifestService), \u0275\u0275directiveInject(ConsoleService));
};
_PreAlertManifestComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreAlertManifestComponent, selectors: [["app-pre-alert-manifest"]], decls: 33, vars: 8, consts: [["preAlertManifestTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "hoverButton", 3, "click"], [1, "bi", "bi-plus-circle", "pr-2"], [1, "tableProperties"], ["selectionMode", "single", "sortField", "createdOn", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", "dataKey", "consignmentId", "rowExpandMode", "single", 1, "custom-table", 3, "onRowExpand", "onRowCollapse", "columns", "value", "scrollable", "sortOrder", "paginator", "rows", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [1, "pl-3", "invisible", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [2, "font-size", "14px", 3, "pRowToggler", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "px-4"], [1, "d-flex", "justify-content", "animate__animated", "animate__fadeIn"], [1, "lineBorder"], [1, "contentBox"], [1, "row"], [1, "col-2", "spacingBottom"], [1, "mb-0", "headerText"], [1, "mb-0", "valueText", "chip"], [1, "mb-0", "valueText", "chip", 3, "ngClass"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function PreAlertManifestComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Pre-Alert Manifest - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function PreAlertManifestComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const preAlertManifestTag_r2 = \u0275\u0275reference(25);
      return \u0275\u0275resetView(preAlertManifestTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "button", 17);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.createConsole);
    });
    \u0275\u0275element(18, "i", 18);
    \u0275\u0275text(19, "Console");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 17);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.createManifest);
    });
    \u0275\u0275element(21, "i", 18);
    \u0275\u0275text(22, "Manifest");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 19)(24, "p-table", 20, 0);
    \u0275\u0275listener("onRowExpand", function PreAlertManifestComponent_Template_p_table_onRowExpand_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowExpand($event));
    })("onRowCollapse", function PreAlertManifestComponent_Template_p_table_onRowCollapse_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowCollapse($event));
    });
    \u0275\u0275template(26, PreAlertManifestComponent_ng_template_26_Template, 6, 3, "ng-template", 21)(27, PreAlertManifestComponent_ng_template_27_Template, 6, 7, "ng-template", 22)(28, PreAlertManifestComponent_ng_template_28_Template, 71, 15, "ng-template", 23)(29, PreAlertManifestComponent_ng_template_29_Template, 4, 1, "ng-template", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "mat-menu", 25, 1);
    \u0275\u0275template(32, PreAlertManifestComponent_ng_template_32_Template, 4, 0, "ng-template", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(24);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.preAlertManifestTable)("scrollable", true)("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, RowToggler, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem;\n  border-radius: 6px;\n  text-align: center !important;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--overcOrange);\n  border: none !important;\n  color: var(--white);\n}\n/*# sourceMappingURL=pre-alert-manifest.component.css.map */"], data: { animation: [
  trigger("fadeLater", [
    state("fade-in", style({ opacity: 1, transform: "translateY(0)" })),
    state("fade-out", style({ opacity: 0, transform: "translateY(0)" })),
    transition("fade-in <=> fade-out", animate("0.6s ease-in-out"))
  ])
] } });
var PreAlertManifestComponent = _PreAlertManifestComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreAlertManifestComponent, { className: "PreAlertManifestComponent", filePath: "src\\app\\main\\airport\\pre-alert-manifest\\pre-alert-manifest.component.ts", lineNumber: 30 });
})();

// src/app/main/airport/console/console.component.ts
function ConsoleComponent_ng_template_25_th_5_Template(rf, ctx) {
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
function ConsoleComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 29);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 29);
    \u0275\u0275element(4, "p-tableHeaderCheckbox", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ConsoleComponent_ng_template_25_th_5_Template, 2, 1, "th", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function ConsoleComponent_ng_template_26_td_5_ng_container_1_Template(rf, ctx) {
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
function ConsoleComponent_ng_template_26_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy"), " ");
  }
}
function ConsoleComponent_ng_template_26_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsoleComponent_ng_template_26_td_5_ng_container_1_Template, 2, 1, "ng-container", 36)(2, ConsoleComponent_ng_template_26_td_5_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function ConsoleComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 33)(2, "p-checkbox", 34);
    \u0275\u0275listener("onChange", function ConsoleComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsoleComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedConsole, $event) || (ctx_r5.selectedConsole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 33);
    \u0275\u0275element(4, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ConsoleComponent_ng_template_26_td_5_Template, 4, 2, "td", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const expanded_r11 = ctx.expanded;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedConsole[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedConsole);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", rowData_r8)("ngClass", expanded_r11 ? "bi-chevron-up" : "bi-chevron-right");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function ConsoleComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37)(1, "div", 38);
    \u0275\u0275element(2, "div", 39);
    \u0275\u0275elementStart(3, "div", 40)(4, "div", 41)(5, "div", 42)(6, "p", 43);
    \u0275\u0275text(7, "HAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "p", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "p", 43);
    \u0275\u0275text(13, "Origin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 42)(15, "p", 45);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 42)(18, "p", 43);
    \u0275\u0275text(19, "Airline No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42)(21, "p", 44);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 42)(24, "p", 43);
    \u0275\u0275text(25, "Console ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 42)(27, "p", 45);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 42)(30, "p", 43);
    \u0275\u0275text(31, "Currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 42)(33, "p", 44);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 42)(36, "p", 43);
    \u0275\u0275text(37, "Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 42)(39, "p", 45);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 42)(42, "p", 43);
    \u0275\u0275text(43, "Payment Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 42)(45, "p", 44);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 42)(48, "p", 43);
    \u0275\u0275text(49, "Customs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 42)(51, "p", 44);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 42)(54, "p", 43);
    \u0275\u0275text(55, "IATA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 42)(57, "p", 44);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const rowData_r12 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r5.getColspan());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(rowData_r12.houseAirwayBill);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r12.countryOfOrigin ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r12.destinationDetails.countryOfOrigin, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.flightNo);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r12.consoleId ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r12.consoleId, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.currency);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r12.actualValue ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r12.actualValue, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.paymentType);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.customsKd);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.iataKd);
  }
}
function ConsoleComponent_ng_template_28_Template(rf, ctx) {
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
function ConsoleComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _ConsoleComponent = class _ConsoleComponent {
  constructor(messageService, cs, router, path, dialog, datePipe, spin, service) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.service = service;
    this.consoleTable = [];
    this.selectedConsole = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Airport Hub", "Console - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyId", header: "Company" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "description", header: "Commodity" },
      { field: "hsCode", header: "HS Code" },
      { field: "shipperName", header: "shipper Name" },
      { field: "consigneeName", header: "Consignee Name" },
      { field: "statusId", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.consoleTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedConsole[this.selectedConsole.length - 1];
    this.selectedConsole.length = 0;
    this.selectedConsole.push(choosen);
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
        this.deleterecord(this.selectedConsole[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedConsole.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsole[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/language-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedConsole, module: "Language", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedConsole[0]);
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
    const exportData = this.consoleTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Console");
  }
  onRowExpand(event) {
  }
  onRowCollapse(event) {
  }
  getColspan() {
    return this.cols.length + 2;
  }
};
_ConsoleComponent.\u0275fac = function ConsoleComponent_Factory(t) {
  return new (t || _ConsoleComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ConsoleService));
};
_ConsoleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleComponent, selectors: [["app-console"]], decls: 32, vars: 10, consts: [["consoleTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "sortField", "createdOn", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", "dataKey", "consignmentId", "rowExpandMode", "single", 1, "custom-table", 3, "onRowExpand", "onRowCollapse", "columns", "value", "scrollable", "sortOrder", "paginator", "rows", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [1, "pl-3", "invisible", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [2, "font-size", "14px", 3, "pRowToggler", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "px-4"], [1, "d-flex", "justify-content", "animate__animated", "animate__fadeIn"], [1, "lineBorder"], [1, "contentBox"], [1, "row"], [1, "col-2", "spacingBottom"], [1, "mb-0", "headerText"], [1, "mb-0", "valueText", "chip"], [1, "mb-0", "valueText", "chip", 3, "ngClass"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function ConsoleComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Console - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function ConsoleComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consoleTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(consoleTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275listener("onRowExpand", function ConsoleComponent_Template_p_table_onRowExpand_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowExpand($event));
    })("onRowCollapse", function ConsoleComponent_Template_p_table_onRowCollapse_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowCollapse($event));
    });
    \u0275\u0275template(25, ConsoleComponent_ng_template_25_Template, 6, 3, "ng-template", 23)(26, ConsoleComponent_ng_template_26_Template, 6, 7, "ng-template", 24)(27, ConsoleComponent_ng_template_27_Template, 59, 13, "ng-template", 25)(28, ConsoleComponent_ng_template_28_Template, 4, 1, "ng-template", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "mat-menu", 27, 1);
    \u0275\u0275template(31, ConsoleComponent_ng_template_31_Template, 4, 0, "ng-template", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.consoleTable)("scrollable", true)("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, RowToggler, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem;\n  border-radius: 6px;\n  text-align: center !important;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  border: none;\n  color: var(--white);\n}\n/*# sourceMappingURL=console.component.css.map */"] });
var ConsoleComponent = _ConsoleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleComponent, { className: "ConsoleComponent", filePath: "src\\app\\main\\airport\\console\\console.component.ts", lineNumber: 19 });
})();

// src/app/main/airport/bonded-manifest/bonded-manifest.component.ts
function BondedManifestComponent_ng_template_25_th_5_Template(rf, ctx) {
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
function BondedManifestComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 29);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 29);
    \u0275\u0275element(4, "p-tableHeaderCheckbox", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BondedManifestComponent_ng_template_25_th_5_Template, 2, 1, "th", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function BondedManifestComponent_ng_template_26_td_5_ng_container_1_Template(rf, ctx) {
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
function BondedManifestComponent_ng_template_26_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy"), " ");
  }
}
function BondedManifestComponent_ng_template_26_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, BondedManifestComponent_ng_template_26_td_5_ng_container_1_Template, 2, 1, "ng-container", 36)(2, BondedManifestComponent_ng_template_26_td_5_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function BondedManifestComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 33)(2, "p-checkbox", 34);
    \u0275\u0275listener("onChange", function BondedManifestComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function BondedManifestComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedBondedManifest, $event) || (ctx_r5.selectedBondedManifest = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 33);
    \u0275\u0275element(4, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BondedManifestComponent_ng_template_26_td_5_Template, 4, 2, "td", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const expanded_r11 = ctx.expanded;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedBondedManifest[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedBondedManifest);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", rowData_r8)("ngClass", expanded_r11 ? "bi-chevron-up" : "bi-chevron-right");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function BondedManifestComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37)(1, "div", 38);
    \u0275\u0275element(2, "div", 39);
    \u0275\u0275elementStart(3, "div", 40)(4, "div", 41)(5, "div", 42)(6, "p", 43);
    \u0275\u0275text(7, "MAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "p", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "p", 43);
    \u0275\u0275text(13, "HAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 42)(15, "p", 44);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 42)(18, "p", 43);
    \u0275\u0275text(19, "Origin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42)(21, "p", 45);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 42)(24, "p", 43);
    \u0275\u0275text(25, "Bonded ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 42)(27, "p", 44);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 42)(30, "p", 43);
    \u0275\u0275text(31, "Consolidated Bill No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 42)(33, "p", 44);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 42)(36, "p", 43);
    \u0275\u0275text(37, "Bill of Landing For");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 42)(39, "p", 44);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 42)(42, "p", 43);
    \u0275\u0275text(43, "Payment Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 42)(45, "p", 44);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 42)(48, "p", 43);
    \u0275\u0275text(49, "Pcs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 42)(51, "p", 44);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 42)(54, "p", 43);
    \u0275\u0275text(55, "Weight");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 42)(57, "p", 44);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const rowData_r12 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r5.getColspan());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(rowData_r12.masterAirwayBill);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.houseAirwayBill);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r12.origin ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r12.origin);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.bondedId);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.consolidatedBillNo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.billOfLadingFor);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.paymentType);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.pcs);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.grossWeight);
  }
}
function BondedManifestComponent_ng_template_28_Template(rf, ctx) {
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
function BondedManifestComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _BondedManifestComponent = class _BondedManifestComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.bondedManifestTable = [];
    this.selectedBondedManifest = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Airport Hub", "Bonded Manifest - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyId", header: "Company" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "description", header: "Commodity" },
      { field: "hsCode", header: "HS Code" },
      { field: "shipperName", header: "shipper Name" },
      { field: "consigneeName", header: "Consignee Name" },
      { field: "statusId", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.bondedManifestTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedBondedManifest[this.selectedBondedManifest.length - 1];
    this.selectedBondedManifest.length = 0;
    this.selectedBondedManifest.push(choosen);
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
        this.deleterecord(this.selectedBondedManifest[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedBondedManifest.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedBondedManifest[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/language-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedBondedManifest.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedBondedManifest, module: "Language", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedBondedManifest[0]);
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
    const exportData = this.bondedManifestTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Bonded Manifest");
  }
  onRowExpand(event) {
  }
  onRowCollapse(event) {
  }
  getColspan() {
    return this.cols.length + 2;
  }
};
_BondedManifestComponent.\u0275fac = function BondedManifestComponent_Factory(t) {
  return new (t || _BondedManifestComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(BondedManifestService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_BondedManifestComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BondedManifestComponent, selectors: [["app-bonded-manifest"]], decls: 32, vars: 10, consts: [["bondedManifestTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "sortField", "createdOn", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", "dataKey", "consignmentId", "rowExpandMode", "single", 1, "custom-table", 3, "onRowExpand", "onRowCollapse", "columns", "value", "scrollable", "sortOrder", "paginator", "rows", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [1, "pl-3", "invisible", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [2, "font-size", "14px", 3, "pRowToggler", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "px-4"], [1, "d-flex", "justify-content", "animate__animated", "animate__fadeIn"], [1, "lineBorder"], [1, "contentBox"], [1, "row"], [1, "col-2", "spacingBottom"], [1, "mb-0", "headerText"], [1, "mb-0", "valueText", "chip"], [1, "mb-0", "valueText", "chip", 3, "ngClass"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function BondedManifestComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Bonded Manifest - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function BondedManifestComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const bondedManifestTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(bondedManifestTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275listener("onRowExpand", function BondedManifestComponent_Template_p_table_onRowExpand_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowExpand($event));
    })("onRowCollapse", function BondedManifestComponent_Template_p_table_onRowCollapse_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowCollapse($event));
    });
    \u0275\u0275template(25, BondedManifestComponent_ng_template_25_Template, 6, 3, "ng-template", 23)(26, BondedManifestComponent_ng_template_26_Template, 6, 7, "ng-template", 24)(27, BondedManifestComponent_ng_template_27_Template, 59, 11, "ng-template", 25)(28, BondedManifestComponent_ng_template_28_Template, 4, 1, "ng-template", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "mat-menu", 27, 1);
    \u0275\u0275template(31, BondedManifestComponent_ng_template_31_Template, 4, 0, "ng-template", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.bondedManifestTable)("scrollable", true)("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, RowToggler, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem;\n  border-radius: 6px;\n  text-align: center !important;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  border: none;\n  color: var(--white);\n}\n/*# sourceMappingURL=bonded-manifest.component.css.map */"] });
var BondedManifestComponent = _BondedManifestComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BondedManifestComponent, { className: "BondedManifestComponent", filePath: "src\\app\\main\\airport\\bonded-manifest\\bonded-manifest.component.ts", lineNumber: 19 });
})();

// src/app/main/airport/ccr/ccr.service.ts
var _CcrService = class _CcrService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(partnerId) {
    return this.http.get("/overc-midmile-service/ccr/" + partnerId);
  }
  Create(obj) {
    return this.http.post("/overc-midmile-service/ccr/create/list", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-midmile-service/ccr/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&cityId=" + obj.cityId, obj);
  }
  Delete(obj) {
    return this.http.delete("/overc-midmile-service/ccr/" + obj.partnerId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId + "&cityId=" + obj.cityId);
  }
  search(obj) {
    return this.http.post("/overc-midmile-service/ccr/findCcr", obj);
  }
};
_CcrService.\u0275fac = function CcrService_Factory(t) {
  return new (t || _CcrService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_CcrService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CcrService, factory: _CcrService.\u0275fac, providedIn: "root" });
var CcrService = _CcrService;

// src/app/main/airport/ccr/ccr.component.ts
function CcrComponent_ng_template_25_th_5_Template(rf, ctx) {
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
function CcrComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 29);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 29);
    \u0275\u0275element(4, "p-tableHeaderCheckbox", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CcrComponent_ng_template_25_th_5_Template, 2, 1, "th", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function CcrComponent_ng_template_26_td_5_ng_container_1_Template(rf, ctx) {
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
function CcrComponent_ng_template_26_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy"), " ");
  }
}
function CcrComponent_ng_template_26_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CcrComponent_ng_template_26_td_5_ng_container_1_Template, 2, 1, "ng-container", 36)(2, CcrComponent_ng_template_26_td_5_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function CcrComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 33)(2, "p-checkbox", 34);
    \u0275\u0275listener("onChange", function CcrComponent_ng_template_26_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CcrComponent_ng_template_26_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedCcr, $event) || (ctx_r5.selectedCcr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 33);
    \u0275\u0275element(4, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CcrComponent_ng_template_26_td_5_Template, 4, 2, "td", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const expanded_r11 = ctx.expanded;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r5.selectedCcr[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedCcr);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", rowData_r8)("ngClass", expanded_r11 ? "bi-chevron-up" : "bi-chevron-right");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function CcrComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37)(1, "div", 38);
    \u0275\u0275element(2, "div", 39);
    \u0275\u0275elementStart(3, "div", 40)(4, "div", 41)(5, "div", 42)(6, "p", 43);
    \u0275\u0275text(7, "HAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "p", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "p", 43);
    \u0275\u0275text(13, "Origin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 42)(15, "p", 45);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 42)(18, "p", 43);
    \u0275\u0275text(19, "Item Total Price");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42)(21, "p", 44);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 42)(24, "p", 43);
    \u0275\u0275text(25, "CCR ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 42)(27, "p", 44);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 42)(30, "p", 43);
    \u0275\u0275text(31, "Customs CCR No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 42)(33, "p", 44);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 42)(36, "p", 43);
    \u0275\u0275text(37, "Bill No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 42)(39, "p", 44);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 42)(42, "p", 43);
    \u0275\u0275text(43, "Payment Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 42)(45, "p", 44);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 42)(48, "p", 43);
    \u0275\u0275text(49, "Pcs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 42)(51, "p", 44);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 42)(54, "p", 43);
    \u0275\u0275text(55, "Weight");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 42)(57, "p", 44);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const rowData_r12 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r5.getColspan());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(rowData_r12.houseAirwayBill);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r12.origin ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r12.origin);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.itemTotalPrice);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.ccrId);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.customsCcrNo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.billNo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.paymentType);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.noOfPieceHawb);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r12.grossWeight);
  }
}
function CcrComponent_ng_template_28_Template(rf, ctx) {
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
function CcrComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CcrComponent = class _CcrComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, spin) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spin = spin;
    this.ccrTable = [];
    this.selectedCcr = [];
    this.cols = [];
    this.target = [];
  }
  ngOnInit() {
    const dataToSend = ["Airport Hub", "CCR - List"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyId", header: "Company" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "description", header: "Commodity" },
      { field: "hsCode", header: "HS Code" },
      { field: "shipperName", header: "shipper Name" },
      { field: "consigneeName", header: "Consignee Name" },
      { field: "statusId", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" }
    ];
  }
  initialCall() {
    this.spin.show();
    this.service.search({}).subscribe({
      next: (res) => {
        console.log(res);
        this.ccrTable = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  onChange() {
    const choosen = this.selectedCcr[this.selectedCcr.length - 1];
    this.selectedCcr.length = 0;
    this.selectedCcr.push(choosen);
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
        this.deleterecord(this.selectedCcr[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedCcr.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCcr[0] : linedata, pageflow: type });
      this.router.navigate(["/main/idMaster/language-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCcr.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedCcr, module: "Language", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCcr[0]);
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
    const exportData = this.ccrTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Bonded Manifest");
  }
  onRowExpand(event) {
  }
  onRowCollapse(event) {
  }
  getColspan() {
    return this.cols.length + 2;
  }
};
_CcrComponent.\u0275fac = function CcrComponent_Factory(t) {
  return new (t || _CcrComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CcrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(NgxSpinnerService));
};
_CcrComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CcrComponent, selectors: [["app-ccr"]], decls: 32, vars: 10, consts: [["bondedManifestTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], ["iconPosition", "left", 1, "mr-5"], ["styleClass", "pi pi-search"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Search", 2, "width", "20rem !important", 3, "input"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "mb-0", "d-flex", "f600", "float-right", "w-25", "pr-2"], ["type", "text", "id", "toolInput", "pInputText", "", "placeholder", "Customer Name", 1, "w-75"], ["id", "toolInput", "placeholder", "Filter by Date", 1, "w-75", 3, "iconDisplay", "showIcon"], ["optionLabel", "name", "placeholder", "Filter by Product", 1, "d-flex", "float-right"], [1, "tableProperties"], ["selectionMode", "single", "sortField", "createdOn", "scrollHeight", "calc(100vh - 19.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", "dataKey", "consignmentId", "rowExpandMode", "single", 1, "custom-table", 3, "onRowExpand", "onRowCollapse", "columns", "value", "scrollable", "sortOrder", "paginator", "rows", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [1, "pl-3", "invisible", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [2, "font-size", "14px", 3, "pRowToggler", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "px-4"], [1, "d-flex", "justify-content", "animate__animated", "animate__fadeIn"], [1, "lineBorder"], [1, "contentBox"], [1, "row"], [1, "col-2", "spacingBottom"], [1, "mb-0", "headerText"], [1, "mb-0", "valueText", "chip"], [1, "mb-0", "valueText", "chip", 3, "ngClass"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CcrComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "CCR - List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "img", 6);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 7);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 8);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 9);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 11);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p-iconField", 13);
    \u0275\u0275element(14, "p-inputIcon", 14);
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("input", function CcrComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const bondedManifestTag_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(bondedManifestTag_r2.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18, "Filter By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 18)(20, "p-calendar", 19)(21, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22, 0);
    \u0275\u0275listener("onRowExpand", function CcrComponent_Template_p_table_onRowExpand_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowExpand($event));
    })("onRowCollapse", function CcrComponent_Template_p_table_onRowCollapse_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowCollapse($event));
    });
    \u0275\u0275template(25, CcrComponent_ng_template_25_Template, 6, 3, "ng-template", 23)(26, CcrComponent_ng_template_26_Template, 6, 7, "ng-template", 24)(27, CcrComponent_ng_template_27_Template, 59, 11, "ng-template", 25)(28, CcrComponent_ng_template_28_Template, 4, 1, "ng-template", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "mat-menu", 27, 1);
    \u0275\u0275template(31, CcrComponent_ng_template_31_Template, 4, 0, "ng-template", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.ccrTable)("scrollable", true)("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1);
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, RowToggler, TableHeaderCheckbox, InputIcon, IconField, Dropdown, InputText, Calendar, Checkbox, NgControlStatus, NgModel, MatMenu, MatMenuItem, MatMenuContent, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem;\n  border-radius: 6px;\n  text-align: center !important;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  border: none;\n  color: var(--white);\n}\n/*# sourceMappingURL=ccr.component.css.map */"] });
var CcrComponent = _CcrComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CcrComponent, { className: "CcrComponent", filePath: "src\\app\\main\\airport\\ccr\\ccr.component.ts", lineNumber: 19 });
})();

// src/app/main/airport/pre-alert-manifest/pre-alert-new/pre-alert-new.component.ts
var _PreAlertNewComponent = class _PreAlertNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth, el, dialog) {
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
    this.el = el;
    this.dialog = dialog;
    this.OriginDetails = this.fb.group({
      name: [],
      companyName: [],
      country: []
    });
    this.DestinationDetails = this.fb.group({
      name: [],
      companyName: [],
      country: []
    });
    this.form = this.fb.group({
      partnerHouseAirwayBill: [],
      originDetails: this.OriginDetails,
      destinationDetails: this.DestinationDetails,
      goodsDescription: [],
      weight: [],
      consignmentValue: [],
      consignmentCurrency: [],
      hsCode: [],
      countryOfOrigin: [],
      countryOfDestination: [],
      flightArrivalTime: [],
      estimatedDepartureTime: [],
      noOfPackageMawb: [],
      noOfCRT: [],
      totalShipmentWeight: [],
      totalValue: []
    });
  }
};
_PreAlertNewComponent.\u0275fac = function PreAlertNewComponent_Factory(t) {
  return new (t || _PreAlertNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
};
_PreAlertNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreAlertNewComponent, selectors: [["app-pre-alert-new"]], decls: 2, vars: 0, template: function PreAlertNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "pre-alert-new works!");
    \u0275\u0275elementEnd();
  }
} });
var PreAlertNewComponent = _PreAlertNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreAlertNewComponent, { className: "PreAlertNewComponent", filePath: "src\\app\\main\\airport\\pre-alert-manifest\\pre-alert-new\\pre-alert-new.component.ts", lineNumber: 18 });
})();

// src/app/main/airport/airport-routing.module.ts
var routes = [
  { path: "preAlertManifest", component: PreAlertManifestComponent, data: { title: "Airport Hub", module: "Pre-Alert Manifest" } },
  { path: "preAlertManifest-new/:code", component: PreAlertNewComponent, data: { title: "Airport Hub", module: "Pre-Alert Manifest New" } },
  { path: "console", component: ConsoleComponent, data: { title: "Airport Hub", module: "Cosnole" } },
  { path: "bondedManifest", component: BondedManifestComponent, data: { title: "Airport Hub", module: "Bonded Manifest" } },
  { path: "ccr", component: CcrComponent, data: { title: "Airport Hub", module: "CCR" } }
];
var _AirportRoutingModule = class _AirportRoutingModule {
};
_AirportRoutingModule.\u0275fac = function AirportRoutingModule_Factory(t) {
  return new (t || _AirportRoutingModule)();
};
_AirportRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AirportRoutingModule });
_AirportRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AirportRoutingModule = _AirportRoutingModule;

// src/app/main/airport/bonded-manifest/bonded-manifest-new/bonded-manifest-new.component.ts
var _BondedManifestNewComponent = class _BondedManifestNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth, el, dialog) {
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
    this.el = el;
    this.dialog = dialog;
    this.OriginDetails = this.fb.group({
      name: [],
      companyName: [],
      country: []
    });
    this.DestinationDetails = this.fb.group({
      name: [],
      companyName: [],
      country: []
    });
    this.form = this.fb.group({
      partnerHouseAirwayBill: [],
      originDetails: this.OriginDetails,
      destinationDetails: this.DestinationDetails,
      goodsDescription: [],
      weight: [],
      consignmentValue: [],
      consignmentCurrency: [],
      hsCode: [],
      countryOfOrigin: [],
      countryOfDestination: [],
      flightArrivalTime: [],
      estimatedDepartureTime: [],
      noOfPackageMawb: [],
      noOfCRT: [],
      totalShipmentWeight: [],
      totalValue: []
    });
  }
};
_BondedManifestNewComponent.\u0275fac = function BondedManifestNewComponent_Factory(t) {
  return new (t || _BondedManifestNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(BondedManifestService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
};
_BondedManifestNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BondedManifestNewComponent, selectors: [["app-bonded-manifest-new"]], decls: 2, vars: 0, template: function BondedManifestNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "bonded-manifest-new works!");
    \u0275\u0275elementEnd();
  }
} });
var BondedManifestNewComponent = _BondedManifestNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BondedManifestNewComponent, { className: "BondedManifestNewComponent", filePath: "src\\app\\main\\airport\\bonded-manifest\\bonded-manifest-new\\bonded-manifest-new.component.ts", lineNumber: 18 });
})();

// src/app/main/airport/airport.module.ts
var _AirportModule = class _AirportModule {
};
_AirportModule.\u0275fac = function AirportModule_Factory(t) {
  return new (t || _AirportModule)();
};
_AirportModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AirportModule });
_AirportModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  AirportRoutingModule,
  SharedModule
] });
var AirportModule = _AirportModule;
export {
  AirportModule
};
//# sourceMappingURL=chunk-DEIX4LUY.js.map

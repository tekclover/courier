import {
  CurrencyService
} from "./chunk-AG3K7NZW.js";
import {
  IataService
} from "./chunk-F25BX4XT.js";
import {
  NumberrangeService
} from "./chunk-YKZX2WQT.js";
import {
  CcrService,
  ConsignmentLabelComponent,
  ConsignmentService,
  ConsignmentUpdatebulkComponent
} from "./chunk-U7HVAAFM.js";
import "./chunk-YEJP4VDZ.js";
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
  ButtonDirective,
  Calendar,
  Chips,
  CommonModule,
  CommonServiceService,
  DatePipe,
  DefaultValueAccessor,
  Dropdown,
  ElementRef,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FrozenColumn,
  HttpClient,
  IconField,
  InputGroup,
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
  NgStyle,
  NgxSpinnerService,
  OverlayPanel,
  PrimeTemplate,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RowToggler,
  SharedModule,
  SortIcon,
  SortableColumn,
  Stepper,
  StepperPanel,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  Validators,
  animate,
  state,
  style,
  transition,
  trigger,
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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/main/airport/bonded-manifest/bonded-manifest.service.ts
var _BondedManifestService = class _BondedManifestService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(obj) {
    return this.http.get("/overc-midmile-service/bondedManifest/" + obj);
  }
  Create(obj) {
    return this.http.post("/overc-midmile-service/bondedManifest/create", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-midmile-service/bondedManifest/update/list", obj);
  }
  Delete(obj) {
    return this.http.post("/overc-midmile-service/bondedManifest/delete/list", obj);
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
  Get(consoleId) {
    return this.http.get("/overc-midmile-service/console/" + consoleId);
  }
  Create(obj) {
    return this.http.post("/overc-midmile-service/console/create/list", obj);
  }
  CreateFromConsignment(obj) {
    return this.http.post("/overc-midmile-service/console/consignment", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-midmile-service/console/update/list", obj);
  }
  UpdateCCR(obj) {
    return this.http.patch("/overc-midmile-service/ccr/update/list", obj);
  }
  Transfer(obj) {
    return this.http.post("/overc-midmile-service/console/transfer", obj);
  }
  Delete(obj) {
    return this.http.post("/overc-midmile-service/console/delete/list", obj);
  }
  search(obj) {
    return this.http.post("/overc-midmile-service/console/findConsole", obj);
  }
  uploadBayan(file, filePath) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post("/pdf/extract?filePath=" + filePath, formData);
  }
};
_ConsoleService.\u0275fac = function ConsoleService_Factory(t) {
  return new (t || _ConsoleService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_ConsoleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsoleService, factory: _ConsoleService.\u0275fac, providedIn: "root" });
var ConsoleService = _ConsoleService;

// src/app/main/airport/pre-alert-manifest/pre-alert-manifest.component.ts
var _c0 = ["preAlertManifest"];
var _c1 = () => ({ width: "180" });
var _c2 = () => ({ width: "80vw" });
var _c3 = () => ({ "width": "100%" });
var _c4 = () => ({ "width": "125rem" });
var _c5 = (a0) => ({ "selectedRow": a0 });
var _c6 = () => ({ "cursor": "pointer" });
function PreAlertManifestComponent_ng_template_70_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r5.header, " ");
  }
}
function PreAlertManifestComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 47);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PreAlertManifestComponent_ng_template_70_th_3_Template, 2, 1, "th", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", columns_r6);
  }
}
function PreAlertManifestComponent_ng_template_71_td_3_ng_container_1_Template(rf, ctx) {
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
function PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275element(1, "img", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", rowData_r8[col_r7.field] == 0 ? "No" : "Yes");
    \u0275\u0275property("src", rowData_r8[col_r7.field] == 1 ? "./assets/common/okCircle.png" : "./assets/common/wrongCircle.png", \u0275\u0275sanitizeUrl);
  }
}
function PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275element(1, "img", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", rowData_r8[col_r7.field] == 0 ? "No" : "Yes");
    \u0275\u0275property("src", rowData_r8[col_r7.field] == 1 ? "./assets/common/okCircle.png" : "./assets/common/wrongCircle.png", \u0275\u0275sanitizeUrl);
  }
}
function PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275listener("click", function PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const rowData_r8 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.preAlertIndicator("Indicator", rowData_r8));
    });
    \u0275\u0275element(1, "img", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(3, _c6));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", rowData_r8[col_r7.field] == 0 ? "Yes" : "No");
    \u0275\u0275property("src", rowData_r8[col_r7.field] == 0 ? "./assets/common/okCircle.png" : "./assets/common/wrongCircle.png", \u0275\u0275sanitizeUrl);
  }
}
function PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, rowData_r8[col_r7.field], "dd-MM-yyyy HH:mm"));
  }
}
function PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_span_0_Template, 2, 2, "span", 54)(1, PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_span_1_Template, 2, 2, "span", 54)(2, PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_span_2_Template, 2, 4, "span", 55)(3, PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_span_3_Template, 3, 4, "span", 56);
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", col_r7.field === "consoleIndicator");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.field === "manifestIndicator");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.field === "preAlertManifestIndicator");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format === "date");
  }
}
function PreAlertManifestComponent_ng_template_71_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, PreAlertManifestComponent_ng_template_71_td_3_ng_container_1_Template, 2, 1, "ng-container", 53)(2, PreAlertManifestComponent_ng_template_71_td_3_ng_template_2_Template, 4, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r11 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date" && col_r7.format !== "boolean")("ngIfElse", dateTemplate_r11);
  }
}
function PreAlertManifestComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 50)(1, "td", 51);
    \u0275\u0275element(2, "p-tableCheckbox", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PreAlertManifestComponent_ng_template_71_td_3_Template, 4, 2, "td", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r12 = ctx.columns;
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c5, ctx_r9.isSelected(rowData_r8)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r12);
  }
}
function PreAlertManifestComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 60);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function PreAlertManifestComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 61);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _PreAlertManifestComponent = class _PreAlertManifestComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, spin, manifest, console2, fb) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.spin = spin;
    this.manifest = manifest;
    this.console = console2;
    this.fb = fb;
    this.preAlertManifestTable = [];
    this.selectedPreAlertManifest = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      pieceId: [],
      pieceItemId: [],
      manifestIndicator: [],
      consoleIndicator: [],
      shipperId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      houseAirwayBill: "Consignment No",
      masterAirwayBill: "MAWB",
      partnerId: "Partner",
      shipperId: "Shipper ID",
      pieceId: "Piece ID",
      pieceItemId: "Piece Item ID",
      statusId: "Status"
    };
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.partnerDropdown = [];
    this.statusDropdown = [];
    this.indicatorDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Mid-Mile", "Pre-Alert Manifest "];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerType", header: "Partner Type" },
      { field: "partnerId", header: "Partner ID" },
      { field: "flightNo", header: "Flight No" },
      { field: "flightName", header: "Flight Name" },
      { field: "estimatedDepartureTime", header: "Departure Time" },
      { field: "flightArrivalTime", header: "Arrival Time" },
      { field: "consoleIndicator", header: "Console", format: "boolean" },
      { field: "manifestIndicator", header: "Bonded Manifest", format: "boolean" },
      { field: "preAlertManifestIndicator", header: "Pre-Alert Manifest", format: "boolean" },
      { field: "eventText", header: "Event" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" }
    ];
  }
  updateBulk() {
    const dialogRef = this.dialog.open(ConsignmentUpdatebulkComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { title: "PreAlertManifest", code: this.selectedPreAlertManifest }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.initialCall();
    });
  }
  initialCall() {
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.searchPrealert(obj).subscribe({
        next: (res) => {
          this.preAlertManifestTable = res;
          this.preAlertManifestTable = this.cs.removeDuplicatesFromArrayList(this.preAlertManifestTable, "partnerMasterAirwayBill");
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 2e3);
  }
  isSelected(item) {
    return this.selectedPreAlertManifest.includes(item);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedPreAlertManifest[0] : linedata, pageflow: type });
      this.router.navigate(["/main/airport/preAlertManifest-new/" + paramdata]);
    }
  }
  openEdit(type = "New", linedata = null) {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedPreAlertManifest[0] : linedata, pageflow: type });
      this.router.navigate(["/main/airport/preAlertManifest-update/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedPreAlertManifest, module: "Pre Alert Manifest", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedPreAlertManifest);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: "Selected records deleted successfully" });
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    this.spin.show();
    const consignmentId = this.selectedPreAlertManifest.map((item) => item.houseAirwayBill);
    this.service.search({ houseAirwayBill: consignmentId }).subscribe({
      next: (result) => {
        this.console.CreateFromConsignment(result).subscribe({
          next: (res) => {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: "Console has been created successfully" });
            this.spin.hide();
            this.initialCall();
          },
          error: (err) => {
            this.spin.hide();
            this.cs.commonerrorNew(err);
          }
        });
      }
    });
  }
  createManifest() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    this.spin.show();
    const consignmentId = this.selectedPreAlertManifest.map((item) => item.houseAirwayBill);
    this.service.search({ houseAirwayBill: consignmentId }).subscribe({
      next: (result) => {
        this.manifest.Create(result).subscribe({
          next: (res) => {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: "Manifest has been created successfully" });
            this.spin.hide();
            this.initialCall();
          },
          error: (err) => {
            this.spin.hide();
            this.cs.commonerrorNew(err);
          }
        });
      }
    });
  }
  getSearchDropdown() {
    this.preAlertManifestTable.forEach((res) => {
      if (res.houseAirwayBill != null) {
        this.houseAirwayBillDropdown.push({ value: res.houseAirwayBill, label: res.houseAirwayBill });
        this.houseAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.houseAirwayBillDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerDropdown, "partnerId");
      }
      if (res.masterAirwayBill != null) {
        this.masterAirwayBillDropdown.push({ value: res.masterAirwayBill, label: res.masterAirwayBill });
        this.masterAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.masterAirwayBillDropdown, "partnerId");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "statusId");
      }
    });
    this.indicatorDropdown = [{ value: 1, label: "Created" }, { value: 0, label: "Not Created" }];
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
    this.spin.show();
    this.service.searchPrealert(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.preAlertManifestTable = res;
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
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      pieceId: [],
      pieceItemId: [],
      shipperId: [],
      statusId: [],
      manifestIndicator: [],
      consoleIndicator: [],
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
  getSeverity(value) {
    return value === 0 ? "red" : "green";
  }
  // preAlertIndicator(line: any[]) {
  //   const dialogRef = this.dialog.open(PreAlertManifestIndicatorComponent, {
  //     disableClose: true,
  //     width: '70%',
  //     height: '70%',
  //     maxWidth: '82%',
  //     position: { top: '6.5%', left: '30%' },
  //     data: { line: line, },
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     // if (result) {
  //     //   this.deleterecord(this.selectedPreAlertManifest[0]);
  //     // }
  //   });
  // }
  preAlertIndicator(type = "Indicator", linedata) {
    console.log(linedata);
    if (this.selectedPreAlertManifest.length === 0 && type == "Indicator") {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedPreAlertManifest[0] : linedata, pageflow: type });
      this.router.navigate(["/main/airport/preAlertManifest-indicator/" + paramdata]);
    }
  }
};
_PreAlertManifestComponent.\u0275fac = function PreAlertManifestComponent_Factory(t) {
  return new (t || _PreAlertManifestComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(BondedManifestService), \u0275\u0275directiveInject(ConsoleService), \u0275\u0275directiveInject(FormBuilder));
};
_PreAlertManifestComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreAlertManifestComponent, selectors: [["app-pre-alert-manifest"]], viewQuery: function PreAlertManifestComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 76, vars: 57, consts: [["op", ""], ["preAlertManifest", ""], ["preAlertManifestTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], [1, "d-flex", "justify-content-end", "align-items-center"], ["iconPosition", "right"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "consoleIndicator", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "selectionLimit", "1", "filter", "true", "formControlName", "manifestIndicator", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "hoverButton", 3, "click"], [1, "bi", "bi-plus-circle", "pr-2"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "sortOrder", "selection", "paginator", "rows", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [4, "ngIf", "ngIfElse"], ["class", "badge px-2 py-0", 4, "ngIf"], ["class", "badge px-2 py-0", 3, "ngStyle", "click", 4, "ngIf"], [4, "ngIf"], [1, "badge", "px-2", "py-0"], [2, "height", "1.1rem", "width", "1.1rem", 3, "src", "alt"], [1, "badge", "px-2", "py-0", 3, "click", "ngStyle"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function PreAlertManifestComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "p", 7);
    \u0275\u0275text(3, "Pre-Alert Manifest ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "img", 8);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openEdit("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 9);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 10);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 11);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const op_r2 = \u0275\u0275reference(10);
      return \u0275\u0275resetView(op_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-overlayPanel", null, 0)(11, "div", 12)(12, "button", 13);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateBulk());
    });
    \u0275\u0275element(13, "img", 14);
    \u0275\u0275text(14, "Bulk Update");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(16, "i", 16);
    \u0275\u0275text(17, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 17)(19, "div", 18)(20, "p-iconField", 19)(21, "p-inputIcon", 20);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_p_inputIcon_click_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const preAlertManifest_r3 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(preAlertManifest_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 21);
    \u0275\u0275listener("input", function PreAlertManifestComponent_Template_input_input_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const preAlertManifestTag_r4 = \u0275\u0275reference(69);
      return \u0275\u0275resetView(preAlertManifestTag_r4.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p-overlayPanel", 22, 1)(25, "form", 23)(26, "div", 24)(27, "div", 25)(28, "p", 26);
    \u0275\u0275text(29, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "p-multiSelect", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 25)(32, "p", 26);
    \u0275\u0275text(33, "Consignment No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-multiSelect", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 25)(36, "p", 26);
    \u0275\u0275text(37, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "p-multiSelect", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 25)(40, "p", 26);
    \u0275\u0275text(41, "Console Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "p-multiSelect", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 25)(44, "p", 26);
    \u0275\u0275text(45, "Manifest Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "p-multiSelect", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 25)(48, "p", 26);
    \u0275\u0275text(49, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "p-multiSelect", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 33)(52, "div")(53, "img", 34);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "button", 35);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(56, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 36);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(58, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "p-chips", 37);
    \u0275\u0275listener("onRemove", function PreAlertManifestComponent_Template_p_chips_onRemove_59_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function PreAlertManifestComponent_Template_p_chips_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 18)(61, "button", 38);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.createConsole());
    });
    \u0275\u0275element(62, "i", 39);
    \u0275\u0275text(63, "Console");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 38);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.createManifest());
    });
    \u0275\u0275element(65, "i", 39);
    \u0275\u0275text(66, "Bonded");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 40)(68, "p-table", 41, 2);
    \u0275\u0275twoWayListener("selectionChange", function PreAlertManifestComponent_Template_p_table_selectionChange_68_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedPreAlertManifest, $event) || (ctx.selectedPreAlertManifest = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(70, PreAlertManifestComponent_ng_template_70_Template, 4, 1, "ng-template", 42)(71, PreAlertManifestComponent_ng_template_71_Template, 4, 5, "ng-template", 43)(72, PreAlertManifestComponent_ng_template_72_Template, 4, 1, "ng-template", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "mat-menu", 45, 3);
    \u0275\u0275template(75, PreAlertManifestComponent_ng_template_75_Template, 4, 0, "ng-template", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c1));
    \u0275\u0275advance(14);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c2));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c3));
    \u0275\u0275property("options", ctx.masterAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(45, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c3));
    \u0275\u0275property("options", ctx.houseAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(47, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(48, _c3));
    \u0275\u0275property("options", ctx.partnerDropdown)("panelStyle", \u0275\u0275pureFunction0(49, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(50, _c3));
    \u0275\u0275property("options", ctx.indicatorDropdown)("panelStyle", \u0275\u0275pureFunction0(51, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(52, _c3));
    \u0275\u0275property("options", ctx.indicatorDropdown)("panelStyle", \u0275\u0275pureFunction0(53, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(54, _c3));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(55, _c3));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(9);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.preAlertManifestTable)("scrollable", true)("sortOrder", -1);
    \u0275\u0275twoWayProperty("selection", ctx.selectedPreAlertManifest);
    \u0275\u0275property("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(56, _c4));
  }
}, dependencies: [NgClass, NgForOf, NgIf, NgStyle, PrimeTemplate, Table, TableCheckbox, TableHeaderCheckbox, InputIcon, IconField, InputText, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem 3px 0px;\n  border-radius: 6px;\n  text-align: center;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--overcOrange);\n  border: none !important;\n  color: var(--white);\n}\n.green[_ngcontent-%COMP%] {\n  color: #00742b;\n  background-color: #8efab6;\n  font-size: 10px;\n  padding: 2px 12px !important;\n}\n.red[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background-color: #ffacac;\n  font-size: 10px;\n  padding: 2px 12px !important;\n}\n.pointer-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=pre-alert-manifest.component.css.map */"], data: { animation: [
  trigger("fadeLater", [
    state("fade-in", style({ opacity: 1, transform: "translateY(0)" })),
    state("fade-out", style({ opacity: 0, transform: "translateY(0)" })),
    transition("fade-in <=> fade-out", animate("0.6s ease-in-out"))
  ])
] } });
var PreAlertManifestComponent = _PreAlertManifestComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreAlertManifestComponent, { className: "PreAlertManifestComponent", filePath: "src\\app\\main\\airport\\pre-alert-manifest\\pre-alert-manifest.component.ts", lineNumber: 35 });
})();

// src/app/main/airport/console/console-bulk/console-bulk.component.ts
var _c02 = () => ({ "width": "100%" });
function ConsoleBulkComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 9);
    \u0275\u0275text(2, "HUB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-dropdown", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(4, _c02));
    \u0275\u0275property("options", ctx_r0.hubList)("panelStyle", \u0275\u0275pureFunction0(5, _c02));
  }
}
function ConsoleBulkComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 9);
    \u0275\u0275text(2, "Customs CCR NO ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 23);
    \u0275\u0275elementEnd();
  }
}
var _ConsoleBulkComponent = class _ConsoleBulkComponent {
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
    this.incoTerms = [];
    this.form = this.fb.group({
      actualCurrency: [],
      actualValue: [],
      airportOriginCode: [],
      bondedId: [],
      companyId: [],
      companyName: [],
      consigneeCivilId: [],
      consigneeName: [],
      consignmentCurrency: [],
      consignmentValue: [],
      consoleId: [],
      countryOfOrigin: [],
      createdBy: [],
      createdOn: [],
      currency: [],
      customsCurrency: [],
      customsKd: [],
      customsValue: [],
      declaredValue: [],
      deletionIndicator: [],
      description: [],
      eventCode: [],
      eventText: [],
      flightNo: [],
      eventTimestamp: [],
      expectedDuty: [],
      finalDestination: [],
      freightCharges: [],
      freightCurrency: [],
      goodsDescription: [],
      pieceId: [],
      pieceItemId: [],
      goodsType: [],
      grossWeight: [],
      houseAirwayBill: [],
      hsCode: [],
      hubCode: [],
      iataKd: [],
      incoTerms: [],
      invoiceDate: [],
      invoiceNumber: [],
      invoiceSupplierName: [],
      invoiceType: [],
      isConsolidatedShipment: [],
      isPendingShipment: [],
      isSplitBillOfLading: [],
      landedQuantity: [],
      languageDescription: [],
      languageId: [],
      manifestedGrossWeight: [],
      manifestedQuantity: [],
      masterAirwayBill: [],
      netWeight: [],
      noOfPackageMawb: [],
      noOfPieceHawb: [],
      notifyParty: [],
      partnerHouseAirwayBill: [],
      partnerId: [],
      partnerMasterAirwayBill: [],
      partnerName: [],
      partnerType: [],
      paymentType: [],
      productId: [],
      productName: [],
      quantity: [],
      referenceField1: [],
      referenceField10: [],
      referenceField11: [],
      referenceField12: [],
      referenceField13: [],
      referenceField14: [],
      referenceField15: [],
      referenceField16: [],
      referenceField17: [],
      eventDescription: [],
      referenceField18: [],
      referenceField19: [],
      referenceField2: [],
      referenceField20: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      selectedConsole: [],
      remarks: [],
      serviceTypeId: [],
      serviceTypeName: [],
      shipmentBagId: [],
      shipperId: [],
      shipperName: [],
      specialApprovalValue: [],
      statusId: [],
      statusTimestamp: [],
      customsCcrNo: [],
      subProductId: [],
      subProductName: [],
      primaryDo: [],
      secondaryDo: [],
      tareWeight: [],
      totalQuantity: [],
      updatedBy: [],
      updatedOn: [],
      volume: []
    });
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
    this.mawbList = [];
    this.hawbList = [];
    this.hsCodeList = [];
    this.originCodeList = [];
    this.statusList = [];
    this.consignorIdList = [];
    this.eventList = [];
    this.Consigment = [];
    this.hubList = [];
    this.showHub = false;
    this.incoTerms = [
      { value: "DDU", label: "DDU" },
      { value: "DDU", label: "DDU" }
    ];
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.opStatus.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.hsCode.url,
      this.cas.dropdownlist.setup.event.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.customer.url,
      this.cas.dropdownlist.setup.hub.url
    ]).subscribe({
      next: (results) => {
        this.statusList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.opStatus.key);
        this.countryIdList = this.cas.forLanguageFilter(results[1], this.cas.dropdownlist.setup.country.key);
        this.hsCodeList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.hsCode.key);
        this.eventList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.event.key);
        const consitnor = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.consignor.key);
        const customer = this.cas.forLanguageFilter(results[5], this.cas.dropdownlist.setup.customer.key);
        customer.forEach((x) => this.consignorIdList.push(x));
        consitnor.forEach((x) => this.consignorIdList.push(x));
        this.consignorIdList = this.cs.removeDuplicatesFromArrayList(this.consignorIdList, "value");
        this.hubList = this.cas.forLanguageFilter(results[6], this.cas.dropdownlist.setup.hub.key);
        this.statusList = this.cs.removeDuplicatesFromArrayList(this.statusList, "value");
        this.eventList = this.cs.removeDuplicatesFromArrayList(this.eventList, "value");
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  ngOnInit() {
    this.dropdownlist();
    this.Consigment = this.data.code;
  }
  eventChange() {
    if (this.form.controls.eventCode.value == "15" && this.data.title != "Console") {
      this.showHub = true;
      console.log();
    }
  }
  save() {
    if (this.form.controls.partnerMasterAirwayBill != null) {
      this.Consigment.forEach((x) => {
        x.partnerMasterAirwayBill = this.form.controls.partnerMasterAirwayBill.value;
      });
    }
    if (this.form.controls.countryOfOrigin != null) {
      this.Consigment.forEach((x) => {
        x.countryOfOrigin = this.form.controls.countryOfOrigin.value;
      });
    }
    if (this.form.controls.statusId != null) {
      this.Consigment.forEach((x) => {
        x.statusId = this.form.controls.statusId.value;
      });
    }
    if (this.form.controls.eventCode != null) {
      this.Consigment.forEach((x) => {
        x.eventCode = this.form.controls.eventCode.value;
      });
    }
    if (this.form.controls.flightNo != null) {
      this.Consigment.forEach((x) => {
        x.flightNo = this.form.controls.flightNo.value;
      });
    }
    if (this.form.controls.shipperId != null) {
      this.Consigment.forEach((x) => {
        x.shipperId = this.form.controls.shipperId.value;
      });
    }
    if (this.form.controls.primaryDo != null) {
      this.Consigment.forEach((x) => {
        x.primaryDo = this.form.controls.primaryDo.value;
      });
    }
    if (this.form.controls.secondaryDo != null) {
      this.Consigment.forEach((x) => {
        x.secondaryDo = this.form.controls.secondaryDo.value;
      });
    }
    if (this.form.controls.customsCcrNo != null) {
      this.Consigment.forEach((x) => {
        x.customsCcrNo = this.form.controls.customsCcrNo.value;
      });
    }
    if (this.form.controls.hubCode != null) {
      this.Consigment.forEach((x) => {
        x.hubCode = this.form.controls.hubCode.value;
      });
    }
    if (this.data.title == "Console") {
      this.service.Update(this.Consigment).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: "Selected Values has been updated successfully"
          });
          if (this.data.title == "Console") {
            this.dialogRef.close();
            this.router.navigate(["/main/airport/console"]);
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.service.UpdateCCR(this.Consigment).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: "Selected Values has been updated successfully"
          });
          this.dialogRef.close();
          this.router.navigate(["/main/airport/ccr"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  cancel() {
    if (this.data.title == "Console") {
      this.dialogRef.close();
      this.router.navigate(["/main/airport/console"]);
    } else {
      this.dialogRef.close();
      this.router.navigate(["/main/airport/ccr"]);
    }
  }
};
_ConsoleBulkComponent.\u0275fac = function ConsoleBulkComponent_Factory(t) {
  return new (t || _ConsoleBulkComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsoleService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_ConsoleBulkComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleBulkComponent, selectors: [["app-console-bulk"]], decls: 50, vars: 30, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "mt-4", "pt-2"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "pInputText", "", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["formControlName", "countryOfOrigin", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "eventCode", "appendTo", "body", 3, "onChange", "options", "panelStyle"], ["class", "col-6 marginFieldNew borderRadius12", 4, "ngIf"], ["maxlength", "50", "pInputText", "", "formControlName", "flightNo", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["formControlName", "shipperId", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "primaryDo", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "secondaryDo", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "float-right", "py-2"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1", 3, "click"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], ["placeholder", "Select", "filter", "true", "formControlName", "hubCode", "appendTo", "body", 3, "options", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "customsCcrNo", "pInputText", "", "placeholder", "Enter", 1, "w-100"]], template: function ConsoleBulkComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "p", 9);
    \u0275\u0275text(13, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 8)(16, "p", 9);
    \u0275\u0275text(17, "Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "p-dropdown", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 8)(20, "p", 9);
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "p-dropdown", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 8)(24, "p", 9);
    \u0275\u0275text(25, "Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p-dropdown", 13);
    \u0275\u0275listener("onChange", function ConsoleBulkComponent_Template_p_dropdown_onChange_26_listener() {
      return ctx.eventChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, ConsoleBulkComponent_div_27_Template, 4, 6, "div", 14);
    \u0275\u0275elementStart(28, "div", 8)(29, "p", 9);
    \u0275\u0275text(30, "Flight No ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 8)(33, "p", 9);
    \u0275\u0275text(34, "Customer/Consignor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-dropdown", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ConsoleBulkComponent_div_36_Template, 4, 0, "div", 14);
    \u0275\u0275elementStart(37, "div", 8)(38, "p", 9);
    \u0275\u0275text(39, "Primary DO ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 8)(42, "p", 9);
    \u0275\u0275text(43, "Secondary DO ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 19)(46, "button", 20);
    \u0275\u0275listener("click", function ConsoleBulkComponent_Template_button_click_46_listener() {
      return ctx.cancel();
    });
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 21);
    \u0275\u0275listener("click", function ConsoleBulkComponent_Template_button_click_48_listener() {
      return ctx.save();
    });
    \u0275\u0275text(49, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.data.title, " - Bulk Update");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(10);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c02));
    \u0275\u0275property("options", ctx.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c02));
    \u0275\u0275property("options", ctx.statusList)("panelStyle", \u0275\u0275pureFunction0(25, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c02));
    \u0275\u0275property("options", ctx.eventList)("panelStyle", \u0275\u0275pureFunction0(27, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showHub == true);
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c02));
    \u0275\u0275property("options", ctx.consignorIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(29, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data.title == "CCR");
  }
}, dependencies: [NgIf, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 20rem);\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=console-bulk.component.css.map */"] });
var ConsoleBulkComponent = _ConsoleBulkComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleBulkComponent, { className: "ConsoleBulkComponent", filePath: "src\\app\\main\\airport\\console\\console-bulk\\console-bulk.component.ts", lineNumber: 18 });
})();

// src/app/main/airport/console/console.component.ts
var _c03 = ["console"];
var _c12 = ["fileInput1"];
var _c22 = () => ({ width: "180" });
var _c32 = () => ({ width: "80vw" });
var _c42 = () => ({ "width": "100%" });
var _c52 = () => ({ "width": "100rem" });
var _c62 = (a0) => ({ "selectedRow": a0 });
function ConsoleComponent_ng_template_72_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r5.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r5.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r5.field);
  }
}
function ConsoleComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 47);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsoleComponent_ng_template_72_th_3_Template, 3, 3, "th", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", columns_r6);
  }
}
function ConsoleComponent_ng_template_73_td_4_ng_container_1_Template(rf, ctx) {
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
function ConsoleComponent_ng_template_73_td_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsoleComponent_ng_template_73_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsoleComponent_ng_template_73_td_4_ng_container_1_Template, 2, 1, "ng-container", 56)(2, ConsoleComponent_ng_template_73_td_4_ng_template_2_Template, 2, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function ConsoleComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr");
    \u0275\u0275elementStart(1, "tr", 52)(2, "td", 53);
    \u0275\u0275element(3, "p-tableCheckbox", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ConsoleComponent_ng_template_73_td_4_Template, 4, 2, "td", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r10.selectedConsole[0] === rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c62, ctx_r10.isSelected(rowData_r8)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function ConsoleComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 57);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function ConsoleComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 58);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _ConsoleComponent = class _ConsoleComponent {
  constructor(messageService, cs, router, path, dialog, datePipe, fb, auth, spin, service, label) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.fb = fb;
    this.auth = auth;
    this.spin = spin;
    this.service = service;
    this.label = label;
    this.consoleTable = [];
    this.selectedConsole = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      consoleId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      houseAirwayBill: "Consignment No",
      masterAirwayBill: "MAWB",
      partnerId: "Partner",
      consoleId: "Console ID",
      statusId: "Status"
    };
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.partnerDropdown = [];
    this.statusDropdown = [];
    this.consoleIdDropdown = [];
    this.uniquePieceId = [];
    this.uniqueHouseAirway = [];
    this.selectedFiles = null;
  }
  ngOnInit() {
    const dataToSend = ["Mid-Mile", "Console "];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyId", header: "Company" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "statusText", header: "Status" },
      { field: "eventText", header: "Event" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "shipperName", header: "Shipper" },
      { field: "houseAirwayBill", header: "Consignment No" },
      { field: "description", header: "Commodity" },
      { field: "quantity", header: "No of Piece" },
      { field: "countryOfOrigin", header: "Origin" },
      { field: "grossWeight", header: "Weight" },
      { field: "airportOriginCode", header: "Airport Origin Code" },
      { field: "hsCode", header: "HS Code" },
      { field: "consigneeName", header: "Consignee Name" },
      { field: "consignmentValue", header: "Consignment Value" },
      { field: "consignmentCurrency", header: "Consignment Currency" },
      { field: "customsValue", header: "Customs Value" },
      { field: "iata", header: "IATA Charges" }
    ];
  }
  updateBulk() {
    const dialogRef = this.dialog.open(ConsoleBulkComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { title: "Console", code: this.selectedConsole }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.initialCall();
    });
  }
  initialCall() {
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          res = this.cs.removeDuplicatesFromArrayList(res, "partnerMasterAirwayBill");
          this.consoleTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 2e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsole[0] : linedata, pageflow: type });
      this.router.navigate(["/main/airport/console-new/" + paramdata]);
    }
  }
  openEdit(type = "New", linedata = null) {
    if (this.selectedConsole.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any Row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsole[0] : linedata, pageflow: type });
      this.router.navigate(["/main/airport/console-edit/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedConsole, module: "Console", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const consoleID = this.selectedConsole.map((item) => item.consoleId);
        this.service.search({ consoleId: consoleID, companyId: [this.auth.companyId] }).subscribe({
          next: (res) => {
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
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: "Selected records deleted successfully" });
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      this.target.forEach((col) => {
        if (col.format && col.format === "date") {
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
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
  isSelected(item) {
    return this.selectedConsole.includes(item);
  }
  getSearchDropdown() {
    this.consoleTable.forEach((res) => {
      if (res.houseAirwayBill != null) {
        this.houseAirwayBillDropdown.push({ value: res.houseAirwayBill, label: res.houseAirwayBill });
        this.houseAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.houseAirwayBillDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerDropdown, "value");
      }
      if (res.masterAirwayBill != null) {
        this.masterAirwayBillDropdown.push({ value: res.masterAirwayBill, label: res.masterAirwayBill });
        this.masterAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.masterAirwayBillDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
      if (res.consoleId != null) {
        this.consoleIdDropdown.push({ value: res.consoleId, label: res.consoleId });
        this.consoleIdDropdown = this.cs.removeDuplicatesFromArrayList(this.consoleIdDropdown, "value");
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
        this.consoleTable = res;
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
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      consoleId: [],
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
  generateLabel() {
    this.uniquePieceId = [];
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    let obj = {};
    obj.consoleId = [this.selectedConsole[0].consoleId];
    this.service.search(obj).subscribe({
      next: (res) => {
        this.uniquePieceId = this.cs.removeDuplicatesFromArrayList(res, "pieceId");
        const pieceId = this.uniquePieceId.map((item) => item.pieceId);
        this.label.getResultLabel(pieceId);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  generateInvoice() {
    this.uniqueHouseAirway = [];
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    let obj = {};
    obj.consoleId = [this.selectedConsole[0].consoleId];
    this.service.search(obj).subscribe({
      next: (res) => {
        this.uniqueHouseAirway = this.cs.removeDuplicatesFromArrayList(res, "houseAirwayBill");
        const houseAirwayBillArray = this.uniqueHouseAirway.map((item) => item.houseAirwayBill);
        this.label.getResultInvoice(houseAirwayBillArray);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  generateMerge() {
    this.uniqueHouseAirway = [];
    this.uniquePieceId = [];
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    let obj = {};
    obj.consoleId = [this.selectedConsole[0].consoleId];
    this.service.search(obj).subscribe({
      next: (res) => {
        this.uniquePieceId = this.cs.removeDuplicatesFromArrayList(res, "pieceId");
        this.uniqueHouseAirway = this.cs.removeDuplicatesFromArrayList(res, "houseAirwayBill");
        const pieceId = this.uniquePieceId.map((item) => item.pieceId);
        const houseAirwayBillArray = this.uniqueHouseAirway.map((item) => item.houseAirwayBill);
        this.label.generateMutiple(pieceId, houseAirwayBillArray);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  uploadBayan() {
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    this.fileInput1.nativeElement.click();
  }
  onFileSelectedBayan(event) {
    const filePath = "/" + this.selectedConsole[0].consoleId + "/";
    const file = event.target.files[0];
    this.selectedFiles = file;
    this.spin.show();
    this.service.uploadBayan(this.selectedFiles, filePath).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: "success",
          summary: "Uploaded",
          key: "br",
          detail: "File uploaded successfully"
        });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_ConsoleComponent.\u0275fac = function ConsoleComponent_Factory(t) {
  return new (t || _ConsoleComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ConsoleService), \u0275\u0275directiveInject(ConsignmentLabelComponent));
};
_ConsoleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleComponent, selectors: [["app-console"]], viewQuery: function ConsoleComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
    \u0275\u0275viewQuery(_c12, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput1 = _t.first);
  }
}, decls: 78, vars: 45, consts: [["op", ""], ["fileInput1", ""], ["console", ""], ["consoleTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/document.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common2x/invoice.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common2x/merge.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "ConsoleId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "selection", "sortOrder", "paginator", "rows", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [3, "ngClass"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function ConsoleComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "p", 8);
    \u0275\u0275text(3, "Console ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "img", 9);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openEdit("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 10);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 11);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 12);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const op_r2 = \u0275\u0275reference(10);
      return \u0275\u0275resetView(op_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-overlayPanel", null, 0)(11, "input", 13, 1);
    \u0275\u0275listener("change", function ConsoleComponent_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileSelectedBayan($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "button", 15);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.uploadBayan());
    });
    \u0275\u0275element(15, "img", 16);
    \u0275\u0275text(16, "Upload Bayan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "button", 15);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateBulk());
    });
    \u0275\u0275element(19, "img", 16);
    \u0275\u0275text(20, "Bulk Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 14)(22, "button", 15);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateLabel());
    });
    \u0275\u0275element(23, "img", 17);
    \u0275\u0275text(24, "Label ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 14)(26, "button", 15);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateInvoice());
    });
    \u0275\u0275element(27, "img", 18);
    \u0275\u0275text(28, "Invoice ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 14)(30, "button", 15);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateMerge());
    });
    \u0275\u0275element(31, "img", 19);
    \u0275\u0275text(32, "Invoice & Label ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 20);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(34, "i", 21);
    \u0275\u0275text(35, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 22)(37, "p-iconField", 23)(38, "p-inputIcon", 24);
    \u0275\u0275listener("click", function ConsoleComponent_Template_p_inputIcon_click_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const console_r3 = \u0275\u0275reference(41);
      return \u0275\u0275resetView(console_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 25);
    \u0275\u0275listener("input", function ConsoleComponent_Template_input_input_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consoleTag_r4 = \u0275\u0275reference(71);
      return \u0275\u0275resetView(consoleTag_r4.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "p-overlayPanel", 26, 2)(42, "form", 27)(43, "div", 28)(44, "div", 29)(45, "p", 30);
    \u0275\u0275text(46, "Console ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "p-multiSelect", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 29)(49, "p", 30);
    \u0275\u0275text(50, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "p-multiSelect", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 29)(53, "p", 30);
    \u0275\u0275text(54, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "p-multiSelect", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 29)(57, "p", 30);
    \u0275\u0275text(58, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "p-multiSelect", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 35)(61, "div")(62, "img", 36);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div")(64, "button", 37);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(65, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 38);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(67, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(68, "p-chips", 39);
    \u0275\u0275listener("onRemove", function ConsoleComponent_Template_p_chips_onRemove_68_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsoleComponent_Template_p_chips_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 40)(70, "p-table", 41, 3);
    \u0275\u0275twoWayListener("selectionChange", function ConsoleComponent_Template_p_table_selectionChange_70_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedConsole, $event) || (ctx.selectedConsole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(72, ConsoleComponent_ng_template_72_Template, 4, 1, "ng-template", 42)(73, ConsoleComponent_ng_template_73_Template, 5, 7, "ng-template", 43)(74, ConsoleComponent_ng_template_74_Template, 4, 1, "ng-template", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "mat-menu", 45, 4);
    \u0275\u0275template(77, ConsoleComponent_ng_template_77_Template, 4, 0, "ng-template", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c22));
    \u0275\u0275advance(31);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c32));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c42));
    \u0275\u0275property("options", ctx.consoleIdDropdown)("panelStyle", \u0275\u0275pureFunction0(37, _c42));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c42));
    \u0275\u0275property("options", ctx.masterAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(39, _c42));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c42));
    \u0275\u0275property("options", ctx.houseAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(41, _c42));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c42));
    \u0275\u0275property("options", ctx.partnerDropdown)("panelStyle", \u0275\u0275pureFunction0(43, _c42));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.consoleTable)("scrollable", true);
    \u0275\u0275twoWayProperty("selection", ctx.selectedConsole);
    \u0275\u0275property("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(44, _c52));
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputIcon, IconField, InputText, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem 3px 0px;\n  border-radius: 6px;\n  text-align: center;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  border: none;\n  color: var(--white);\n}\n/*# sourceMappingURL=console.component.css.map */"] });
var ConsoleComponent = _ConsoleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleComponent, { className: "ConsoleComponent", filePath: "src\\app\\main\\airport\\console\\console.component.ts", lineNumber: 24 });
})();

// src/app/main/airport/bonded-manifest/bonded-manifest.component.ts
var _c04 = ["bondedmanifest"];
var _c13 = () => ({ width: "180" });
var _c23 = () => ({ width: "80vw" });
var _c33 = () => ({ "width": "100%" });
var _c43 = () => ({ "width": "110rem" });
var _c53 = (a0) => ({ "selectedRow": a0 });
function BondedManifestComponent_ng_template_58_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 47);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r5.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r5.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r5.field);
  }
}
function BondedManifestComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 44);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 44);
    \u0275\u0275text(4, " Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BondedManifestComponent_ng_template_58_th_5_Template, 3, 3, "th", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", columns_r6);
  }
}
function BondedManifestComponent_ng_template_59_td_5_ng_container_1_Template(rf, ctx) {
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
function BondedManifestComponent_ng_template_59_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function BondedManifestComponent_ng_template_59_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, BondedManifestComponent_ng_template_59_td_5_ng_container_1_Template, 2, 1, "ng-container", 54)(2, BondedManifestComponent_ng_template_59_td_5_ng_template_2_Template, 2, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function BondedManifestComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 49)(1, "td", 50);
    \u0275\u0275element(2, "p-tableCheckbox", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 50);
    \u0275\u0275element(4, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BondedManifestComponent_ng_template_59_td_5_Template, 4, 2, "td", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const expanded_r11 = ctx.expanded;
    const ctx_r11 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c53, ctx_r11.isSelected(rowData_r8)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", rowData_r8)("ngClass", expanded_r11 ? "bi-chevron-up" : "bi-chevron-right");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function BondedManifestComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55)(1, "div", 56);
    \u0275\u0275element(2, "div", 57);
    \u0275\u0275elementStart(3, "div", 58)(4, "div", 23)(5, "div", 59)(6, "p", 60);
    \u0275\u0275text(7, "MAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 59)(9, "p", 61);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 59)(12, "p", 60);
    \u0275\u0275text(13, "Partner HAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 59)(15, "p", 61);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 59)(18, "p", 60);
    \u0275\u0275text(19, "Origin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 59)(21, "p", 62);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 59)(24, "p", 60);
    \u0275\u0275text(25, "Bonded ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 59)(27, "p", 61);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 59)(30, "p", 60);
    \u0275\u0275text(31, "Bill of Lading\xA0No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 59)(33, "p", 61);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 59)(36, "p", 60);
    \u0275\u0275text(37, "Bill of Lading For");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 59)(39, "p", 61);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 59)(42, "p", 60);
    \u0275\u0275text(43, "Payment Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 59)(45, "p", 61);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 59)(48, "p", 60);
    \u0275\u0275text(49, "No of Pcs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 59)(51, "p", 61);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 59)(54, "p", 60);
    \u0275\u0275text(55, "Weight");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 59)(57, "p", 61);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const rowData_r13 = ctx.$implicit;
    const ctx_r11 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r11.getColspan());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(rowData_r13.masterAirwayBill);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.partnerHouseAirwayBill);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r13.countryOfOrigin ? "bgOrange text-dark w-75 textCenter" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r13.countryOfOrigin);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.bondedId);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.houseAirwayBill);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.billOfLadingFor);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.paymentType);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.quantity);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.grossWeight);
  }
}
function BondedManifestComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 63);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function BondedManifestComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 64);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _BondedManifestComponent = class _BondedManifestComponent {
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
    this.bondedManifestTable = [];
    this.selectedBondedManifest = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      bondedId: [],
      hsCode: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      houseAirwayBill: "Consignment No",
      masterAirwayBill: "MAWB",
      partnerId: "Partner",
      bondedId: "Bonded ID",
      hsCode: "HS Code",
      statusId: "Status"
    };
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.partnerDropdown = [];
    this.statusDropdown = [];
    this.hsCodeDropdown = [];
    this.bondedIdDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Mid-Mile", "Bonded Manifest"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyId", header: "Company" },
      { field: "bondedId", header: "Bonded ID" },
      { field: "houseAirwayBill", header: "Consignment No" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "description", header: "Commodity" },
      { field: "hsCode", header: "HS Code" },
      { field: "statusText", header: "Status" },
      { field: "eventText", header: "Event" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "bondedId", header: "Manifest Number" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "description", header: "Description" },
      { field: "billOfLadingFor", header: "Bill Of Lading For" },
      { field: "netWeight", header: "Net Weight (Kgs)" },
      { field: "manifestedGrossWeight", header: " Manifested Gross Weight (Kgs)" },
      { field: "grossWeight", header: "Gross Weight (Kgs)" },
      { field: "tareWeight", header: "Tare Weight (Kgs)" },
      { field: "manifestedQuantity", header: "Manifested Quantity" },
      { field: "landedQuantity", header: "Landed Quantity" },
      { field: "totalQuantity", header: "Total Quantity" },
      { field: "volume", header: "Volume" },
      { field: "airportOriginCode", header: "Port Of Shipping" },
      { field: "finalDestination", header: "Final Destination" },
      { field: "notifyParty", header: "Notify Party" },
      { field: "consigneeName", header: "Consignee Name" },
      { field: "shipperName", header: "Shipper" },
      { field: "remark", header: "Remark" },
      { field: "isConsolidatedShipment", header: "Is Consolidated Shipment" },
      { field: "v", header: "Is Split Bill of Lading" },
      { field: "consolidatedBillNo", header: "Consolidated Bill Number" },
      { field: "isPendingShipment", header: "Is Pending Shipment" },
      { field: "bwhInvestor", header: "BWH Investor" }
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
          this.bondedManifestTable = res;
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 2e3);
  }
  onChange() {
    const choosen = this.selectedBondedManifest[this.selectedBondedManifest.length - 1];
    this.selectedBondedManifest.length = 0;
    this.selectedBondedManifest.push(choosen);
  }
  updateBulk() {
    const dialogRef = this.dialog.open(ConsignmentUpdatebulkComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { title: "Bonded Manifest", code: this.selectedBondedManifest }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.initialCall();
    });
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedBondedManifest[0] : linedata, pageflow: type });
      this.router.navigate(["/main/airport/bondedManifest-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedBondedManifest.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedBondedManifest, module: "Bonded Manifest", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedBondedManifest);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: "Selected records deleted successfully" });
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      this.target.forEach((col) => {
        if (col.format && col.format === "date") {
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
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
  isSelected(item) {
    return this.selectedBondedManifest.includes(item);
  }
  getSearchDropdown() {
    this.bondedManifestTable.forEach((res) => {
      if (res.houseAirwayBill != null) {
        this.houseAirwayBillDropdown.push({ value: res.houseAirwayBill, label: res.houseAirwayBill });
        this.houseAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.houseAirwayBillDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerDropdown, "value");
      }
      if (res.masterAirwayBill != null) {
        this.masterAirwayBillDropdown.push({ value: res.masterAirwayBill, label: res.masterAirwayBill });
        this.masterAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.masterAirwayBillDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
      if (res.bondedId != null) {
        this.bondedIdDropdown.push({ value: res.bondedId, label: res.bondedId });
        this.bondedIdDropdown = this.cs.removeDuplicatesFromArrayList(this.bondedIdDropdown, "value");
      }
      if (res.hsCode != null) {
        this.hsCodeDropdown.push({ value: res.hsCode, label: res.hsCode });
        this.hsCodeDropdown = this.cs.removeDuplicatesFromArrayList(this.hsCodeDropdown, "value");
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
        this.bondedManifestTable = res;
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
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      bondedId: [],
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
_BondedManifestComponent.\u0275fac = function BondedManifestComponent_Factory(t) {
  return new (t || _BondedManifestComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(BondedManifestService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_BondedManifestComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BondedManifestComponent, selectors: [["app-bonded-manifest"]], viewQuery: function BondedManifestComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 65, vars: 51, consts: [["op", ""], ["bondedmanifest", ""], ["bondedManifestTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "bondedId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "hsCode", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", "dataKey", "pieceItemId", "rowExpandMode", "single", 1, "custom-table", 3, "selectionChange", "onRowExpand", "onRowCollapse", "columns", "value", "scrollable", "selection", "sortOrder", "paginator", "rows", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [3, "ngClass"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [2, "font-size", "14px", 3, "pRowToggler", "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "px-4"], [1, "d-flex", "justify-content", "animate__animated", "animate__fadeIn"], [1, "lineBorder"], [1, "contentBox"], [1, "col-2", "spacingBottom"], [1, "mb-0", "headerText"], [1, "mb-0", "valueText", "chip"], [1, "mb-0", "valueText", "chip", 3, "ngClass"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function BondedManifestComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "p", 7);
    \u0275\u0275text(3, "Bonded Manifest ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "img", 8);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 9);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 10);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 11);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const op_r2 = \u0275\u0275reference(10);
      return \u0275\u0275resetView(op_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-overlayPanel", null, 0)(11, "div", 12)(12, "button", 13);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateBulk());
    });
    \u0275\u0275element(13, "img", 14);
    \u0275\u0275text(14, "Bulk Update");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(16, "i", 16);
    \u0275\u0275text(17, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 17)(19, "p-iconField", 18)(20, "p-inputIcon", 19);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_p_inputIcon_click_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const bondedmanifest_r3 = \u0275\u0275reference(23);
      return \u0275\u0275resetView(bondedmanifest_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 20);
    \u0275\u0275listener("input", function BondedManifestComponent_Template_input_input_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const bondedManifestTag_r4 = \u0275\u0275reference(57);
      return \u0275\u0275resetView(bondedManifestTag_r4.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p-overlayPanel", 21, 1)(24, "form", 22)(25, "div", 23)(26, "div", 24)(27, "p", 25);
    \u0275\u0275text(28, "Bonded ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "p-multiSelect", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 24)(31, "p", 25);
    \u0275\u0275text(32, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-multiSelect", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 24)(35, "p", 25);
    \u0275\u0275text(36, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "p-multiSelect", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 24)(39, "p", 25);
    \u0275\u0275text(40, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "p-multiSelect", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 24)(43, "p", 25);
    \u0275\u0275text(44, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "p-multiSelect", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 31)(47, "div")(48, "img", 32);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div")(50, "button", 33);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 34);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(53, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(54, "p-chips", 35);
    \u0275\u0275listener("onRemove", function BondedManifestComponent_Template_p_chips_onRemove_54_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function BondedManifestComponent_Template_p_chips_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 36)(56, "p-table", 37, 2);
    \u0275\u0275twoWayListener("selectionChange", function BondedManifestComponent_Template_p_table_selectionChange_56_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedBondedManifest, $event) || (ctx.selectedBondedManifest = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onRowExpand", function BondedManifestComponent_Template_p_table_onRowExpand_56_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowExpand($event));
    })("onRowCollapse", function BondedManifestComponent_Template_p_table_onRowCollapse_56_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowCollapse($event));
    });
    \u0275\u0275template(58, BondedManifestComponent_ng_template_58_Template, 6, 1, "ng-template", 38)(59, BondedManifestComponent_ng_template_59_Template, 6, 7, "ng-template", 39)(60, BondedManifestComponent_ng_template_60_Template, 59, 11, "ng-template", 40)(61, BondedManifestComponent_ng_template_61_Template, 4, 1, "ng-template", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "mat-menu", 42, 3);
    \u0275\u0275template(64, BondedManifestComponent_ng_template_64_Template, 4, 0, "ng-template", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c13));
    \u0275\u0275advance(13);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c23));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c33));
    \u0275\u0275property("options", ctx.bondedIdDropdown)("panelStyle", \u0275\u0275pureFunction0(41, _c33));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c33));
    \u0275\u0275property("options", ctx.masterAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(43, _c33));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c33));
    \u0275\u0275property("options", ctx.houseAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(45, _c33));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c33));
    \u0275\u0275property("options", ctx.partnerDropdown)("panelStyle", \u0275\u0275pureFunction0(47, _c33));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(48, _c33));
    \u0275\u0275property("options", ctx.hsCodeDropdown)("panelStyle", \u0275\u0275pureFunction0(49, _c33));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.bondedManifestTable)("scrollable", true);
    \u0275\u0275twoWayProperty("selection", ctx.selectedBondedManifest);
    \u0275\u0275property("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(50, _c43));
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, RowToggler, SortIcon, TableCheckbox, TableHeaderCheckbox, InputIcon, IconField, InputText, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem 3px 0px;\n  border-radius: 6px;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  border: none;\n  color: var(--white);\n}\n/*# sourceMappingURL=bonded-manifest.component.css.map */"] });
var BondedManifestComponent = _BondedManifestComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BondedManifestComponent, { className: "BondedManifestComponent", filePath: "src\\app\\main\\airport\\bonded-manifest\\bonded-manifest.component.ts", lineNumber: 23 });
})();

// src/app/main/airport/ccr/ccr.component.ts
var _c05 = ["fileInput"];
var _c14 = ["ccr"];
var _c24 = () => ({ width: "180" });
var _c34 = () => ({ width: "80vw" });
var _c44 = () => ({ "width": "100%" });
var _c54 = () => ({ "width": "100rem" });
var _c63 = (a0) => ({ "selectedRow": a0 });
function CcrComponent_ng_template_76_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 52);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r5.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r5.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r5.field);
  }
}
function CcrComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 49);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 49);
    \u0275\u0275text(4, " Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CcrComponent_ng_template_76_th_5_Template, 3, 3, "th", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", columns_r6);
  }
}
function CcrComponent_ng_template_77_td_5_ng_container_1_Template(rf, ctx) {
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
function CcrComponent_ng_template_77_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CcrComponent_ng_template_77_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CcrComponent_ng_template_77_td_5_ng_container_1_Template, 2, 1, "ng-container", 59)(2, CcrComponent_ng_template_77_td_5_ng_template_2_Template, 2, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function CcrComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 54)(1, "td", 55);
    \u0275\u0275element(2, "p-tableCheckbox", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 55);
    \u0275\u0275element(4, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CcrComponent_ng_template_77_td_5_Template, 4, 2, "td", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const expanded_r11 = ctx.expanded;
    const ctx_r11 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c63, ctx_r11.isSelected(rowData_r8)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", rowData_r8)("ngClass", expanded_r11 ? "bi-chevron-up" : "bi-chevron-right");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function CcrComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60)(1, "div", 61);
    \u0275\u0275element(2, "div", 62);
    \u0275\u0275elementStart(3, "div", 63)(4, "div", 28)(5, "div", 64)(6, "p", 65);
    \u0275\u0275text(7, "HAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 64)(9, "p", 66);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 64)(12, "p", 65);
    \u0275\u0275text(13, "Origin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 64)(15, "p", 67);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 64)(18, "p", 65);
    \u0275\u0275text(19, "Item Total Price");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 64)(21, "p", 66);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 64)(24, "p", 65);
    \u0275\u0275text(25, "Customs CCR No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 64)(27, "p", 66);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 64)(30, "p", 65);
    \u0275\u0275text(31, "Bill No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 64)(33, "p", 66);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 64)(36, "p", 65);
    \u0275\u0275text(37, "Payment Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 64)(39, "p", 66);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 64)(42, "p", 65);
    \u0275\u0275text(43, "No of Pcs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 64)(45, "p", 66);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 64)(48, "p", 65);
    \u0275\u0275text(49, "Weight");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 64)(51, "p", 66);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const rowData_r13 = ctx.$implicit;
    const ctx_r11 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r11.getColspan());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(rowData_r13.houseAirwayBill);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r13.origin ? "bgOrange text-dark w-75 textCenter" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r13.origin);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.itemTotalPrice);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.customsCcrNo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.billNo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.paymentType);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.quantity);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.grossWeight);
  }
}
function CcrComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 68);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function CcrComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 69);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _CcrComponent = class _CcrComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, fb, spin, label) {
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
    this.label = label;
    this.actualResult = [];
    this.ccrTable = [];
    this.selectedCcr = [];
    this.cols = [];
    this.target = [];
    this.selectedFiles = null;
    this.searchform = this.fb.group({
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      ccrId: [],
      consoleId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      houseAirwayBill: "Consignment No",
      masterAirwayBill: "MAWB",
      partnerId: "Partner",
      ccrId: "CCR ID",
      consoleId: "Console ID",
      statusId: "Status"
    };
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.partnerDropdown = [];
    this.statusDropdown = [];
    this.ccrIdDropdown = [];
    this.consoleIdDropdown = [];
    this.removeDuplicated = [];
    this.uniquePieceId = [];
    this.uniqueHouseAirway = [];
  }
  ngOnInit() {
    const dataToSend = ["Mid-Mile", "CCR"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyId", header: "Company" },
      { field: "ccrId", header: "CCR ID" },
      { field: "houseAirwayBill", header: "Consignment No" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "statusText", header: "Status" },
      { field: "eventText", header: "Event" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "customsCcrNo", header: "Customs CCR No", showFooter: false },
      { field: "countryOfOrigin", header: "Origin", showFooter: false },
      { field: "airportOriginCode", header: "Airport Origin Code", showFooter: false },
      { field: "hsCode", header: "HS Code", showFooter: false },
      { field: "goodsDescription", header: "Commodity", showFooter: false },
      { field: "invoiceNumber", header: "Invoice No", showFooter: false },
      { field: "invoiceTpe", header: "Invoice Type", showFooter: false },
      { field: "invoiceDate", header: "Invoice Date", format: "date", showFooter: false },
      { field: "invoiceSupplierName", header: "Invoice Supplier Name", showFooter: false },
      { field: "isExempted", header: "Is Exempted", showFooter: false },
      { field: "exemptionFor", header: "Exempted For", showFooter: false },
      { field: "exemptionBeneficiary", header: "Exempted Beneficiary", showFooter: false },
      { field: "exemptionReference", header: "Exempted Reference", showFooter: false },
      { field: "consigneeName", header: "Consignee Name", showFooter: false },
      { field: "consignmentValue", header: "Consignment Value", showFooter: false },
      { field: "consignmentCurrency", header: "Consignment Currency", showFooter: false },
      { field: "exchangeRate", header: "Exchange Rate", showFooter: false },
      { field: "iata", header: "IATA", showFooter: false },
      { field: "customsInsurance", header: "Customs Insurance", showFooter: false },
      { field: "duty", header: "Duty", showFooter: true },
      { field: "consignmentValueLocal", header: "Consignment Value Local", showFooter: false },
      { field: "addIata", header: "Add IATA", showFooter: false },
      { field: "addInsurance", header: "Add Insurance", showFooter: false },
      { field: "customsValue", header: "Custom", showFooter: false },
      { field: "calculatedTotalDuty", header: "Calculated Total duty", showFooter: true },
      { field: "dduCharge", header: "DDU Charge", showFooter: false },
      { field: "specialApprovalCharge", header: "Spl Approval Charge", showFooter: false },
      { field: "totalDuty", header: "Duty From Bayan", showFooter: true }
    ];
  }
  updateBulk() {
    const dialogRef = this.dialog.open(ConsoleBulkComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { title: "CCR", code: this.selectedCcr }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.initialCall();
    });
  }
  initialCall() {
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          this.ccrTable = res;
          this.actualResult = res;
          this.ccrTable = this.cs.removeDuplicatesFromArrayList(this.ccrTable, "ccrId");
          this.getSearchDropdown();
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }, 2e3);
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCcr[0] : linedata, pageflow: type });
      this.router.navigate(["/main/airport/ccr-new/" + paramdata]);
    }
  }
  openEdit(type = "New", linedata = null) {
    if (this.selectedCcr.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedCcr[0] : linedata, pageflow: type });
      this.router.navigate(["/main/airport/ccr-edit/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedCcr.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedCcr, module: "CCR", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedCcr);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: "Selected records deleted successfully" });
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      this.target.forEach((col) => {
        if (col.format && col.format === "date") {
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
        }
      });
      return exportItem;
    });
    this.cs.exportAsExcel(exportData, "CCR Manifest");
  }
  onRowExpand(event) {
  }
  onRowCollapse(event) {
  }
  getColspan() {
    return this.cols.length + 2;
  }
  isSelected(item) {
    return this.selectedCcr.includes(item);
  }
  uploadBayan() {
    if (this.selectedCcr.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    this.fileInput.nativeElement.click();
  }
  onFileSelected(event) {
    const filePath = "/" + this.selectedCcr[0].ccrId + "/";
    const file = event.target.files[0];
    this.selectedFiles = file;
    this.spin.show();
    this.service.uploadBayan(this.selectedFiles, filePath).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: "success",
          summary: "Uploaded",
          key: "br",
          detail: "File uploaded successfully"
        });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  getSearchDropdown() {
    this.ccrTable.forEach((res) => {
      if (res.houseAirwayBill != null) {
        this.houseAirwayBillDropdown.push({ value: res.houseAirwayBill, label: res.houseAirwayBill });
        this.houseAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.houseAirwayBillDropdown, "value");
      }
      if (res.partnerId != null) {
        this.partnerDropdown.push({ value: res.partnerId, label: res.partnerName });
        this.partnerDropdown = this.cs.removeDuplicatesFromArrayList(this.partnerDropdown, "value");
      }
      if (res.masterAirwayBill != null) {
        this.masterAirwayBillDropdown.push({ value: res.masterAirwayBill, label: res.masterAirwayBill });
        this.masterAirwayBillDropdown = this.cs.removeDuplicatesFromArrayList(this.masterAirwayBillDropdown, "value");
      }
      if (res.statusId != null) {
        this.statusDropdown.push({ value: res.statusId, label: res.statusDescription });
        this.statusDropdown = this.cs.removeDuplicatesFromArrayList(this.statusDropdown, "value");
      }
      if (res.ccrId != null) {
        this.ccrIdDropdown.push({ value: res.ccrId, label: res.ccrId });
        this.ccrIdDropdown = this.cs.removeDuplicatesFromArrayList(this.ccrIdDropdown, "value");
      }
      if (res.consoleId != null) {
        this.consoleIdDropdown.push({ value: res.consoleId, label: res.consoleId });
        this.consoleIdDropdown = this.cs.removeDuplicatesFromArrayList(this.consoleIdDropdown, "value");
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
        this.ccrTable = res;
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
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      ccrId: [],
      consoleId: [],
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
  generateLabel() {
    this.uniquePieceId = [];
    if (this.selectedCcr.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    let obj = {};
    obj.ccrId = [this.selectedCcr[0].ccrId];
    this.service.search(obj).subscribe({
      next: (res) => {
        this.uniquePieceId = this.cs.removeDuplicatesFromArrayList(res, "pieceId");
        const pieceId = this.uniquePieceId.map((item) => item.pieceId);
        this.label.getResultLabel(pieceId);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  generateInvoice() {
    this.uniqueHouseAirway = [];
    if (this.selectedCcr.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    let obj = {};
    obj.ccrId = [this.selectedCcr[0].ccrId];
    this.service.search(obj).subscribe({
      next: (res) => {
        this.uniqueHouseAirway = this.cs.removeDuplicatesFromArrayList(res, "houseAirwayBill");
        const houseAirwayBillArray = this.uniqueHouseAirway.map((item) => item.houseAirwayBill);
        this.label.getResultInvoice(houseAirwayBillArray);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  generateMerge() {
    this.uniqueHouseAirway = [];
    this.uniquePieceId = [];
    if (this.selectedCcr.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    let obj = {};
    obj.ccrId = [this.selectedCcr[0].ccrId];
    this.service.search(obj).subscribe({
      next: (res) => {
        this.uniquePieceId = this.cs.removeDuplicatesFromArrayList(res, "pieceId");
        this.uniqueHouseAirway = this.cs.removeDuplicatesFromArrayList(res, "houseAirwayBill");
        const pieceId = this.uniquePieceId.map((item) => item.pieceId);
        const houseAirwayBillArray = this.uniqueHouseAirway.map((item) => item.houseAirwayBill);
        this.label.generateMutiple(pieceId, houseAirwayBillArray);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_CcrComponent.\u0275fac = function CcrComponent_Factory(t) {
  return new (t || _CcrComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(CcrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ConsignmentLabelComponent));
};
_CcrComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CcrComponent, selectors: [["app-ccr"]], viewQuery: function CcrComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c05, 5);
    \u0275\u0275viewQuery(_c14, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 83, vars: 51, consts: [["fileInput", ""], ["op", ""], ["ccr", ""], ["ccrTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "file", 2, "display", "none", 3, "change"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/document.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common2x/invoice.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common2x/merge.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "ccrId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "consoleId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", "dataKey", "ccrId", "rowExpandMode", "single", 1, "custom-table", 3, "selectionChange", "onRowExpand", "onRowCollapse", "columns", "value", "scrollable", "sortOrder", "selection", "paginator", "rows", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [3, "ngClass"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [2, "font-size", "14px", 3, "pRowToggler", "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "px-4"], [1, "d-flex", "justify-content", "animate__animated", "animate__fadeIn"], [1, "lineBorder"], [1, "contentBox"], [1, "col-2", "spacingBottom"], [1, "mb-0", "headerText"], [1, "mb-0", "valueText", "chip"], [1, "mb-0", "valueText", "chip", 3, "ngClass"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CcrComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "p", 8);
    \u0275\u0275text(3, "CCR ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 9, 0);
    \u0275\u0275listener("change", function CcrComponent_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "img", 10);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openEdit("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 11);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "img", 12);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "img", 13);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const op_r2 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(op_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-overlayPanel", null, 1)(13, "div", 14)(14, "button", 15);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.uploadBayan());
    });
    \u0275\u0275element(15, "img", 16);
    \u0275\u0275text(16, "Upload Bayan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "button", 15);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateBulk());
    });
    \u0275\u0275element(19, "img", 16);
    \u0275\u0275text(20, "Bulk Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 14)(22, "button", 15);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateLabel());
    });
    \u0275\u0275element(23, "img", 17);
    \u0275\u0275text(24, "Label ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 14)(26, "button", 15);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateInvoice());
    });
    \u0275\u0275element(27, "img", 18);
    \u0275\u0275text(28, "Invoice ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 14)(30, "button", 15);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateMerge());
    });
    \u0275\u0275element(31, "img", 19);
    \u0275\u0275text(32, "Invoice & Label ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 20);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(34, "i", 21);
    \u0275\u0275text(35, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 22)(37, "p-iconField", 23)(38, "p-inputIcon", 24);
    \u0275\u0275listener("click", function CcrComponent_Template_p_inputIcon_click_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ccr_r3 = \u0275\u0275reference(41);
      return \u0275\u0275resetView(ccr_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 25);
    \u0275\u0275listener("input", function CcrComponent_Template_input_input_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ccrTag_r4 = \u0275\u0275reference(75);
      return \u0275\u0275resetView(ccrTag_r4.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "p-overlayPanel", 26, 2)(42, "form", 27)(43, "div", 28)(44, "div", 29)(45, "p", 30);
    \u0275\u0275text(46, "CCR ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "p-multiSelect", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 29)(49, "p", 30);
    \u0275\u0275text(50, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "p-multiSelect", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 29)(53, "p", 30);
    \u0275\u0275text(54, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "p-multiSelect", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 29)(57, "p", 30);
    \u0275\u0275text(58, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "p-multiSelect", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 29)(61, "p", 30);
    \u0275\u0275text(62, "Console ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "p-multiSelect", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 36)(65, "div")(66, "img", 37);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div")(68, "button", 38);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(69, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 39);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(71, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(72, "p-chips", 40);
    \u0275\u0275listener("onRemove", function CcrComponent_Template_p_chips_onRemove_72_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CcrComponent_Template_p_chips_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 41)(74, "p-table", 42, 3);
    \u0275\u0275twoWayListener("selectionChange", function CcrComponent_Template_p_table_selectionChange_74_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedCcr, $event) || (ctx.selectedCcr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onRowExpand", function CcrComponent_Template_p_table_onRowExpand_74_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowExpand($event));
    })("onRowCollapse", function CcrComponent_Template_p_table_onRowCollapse_74_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowCollapse($event));
    });
    \u0275\u0275template(76, CcrComponent_ng_template_76_Template, 6, 2, "ng-template", 43)(77, CcrComponent_ng_template_77_Template, 6, 7, "ng-template", 44)(78, CcrComponent_ng_template_78_Template, 53, 10, "ng-template", 45)(79, CcrComponent_ng_template_79_Template, 4, 1, "ng-template", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "mat-menu", 47, 4);
    \u0275\u0275template(82, CcrComponent_ng_template_82_Template, 4, 0, "ng-template", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c24));
    \u0275\u0275advance(29);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c34));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c44));
    \u0275\u0275property("options", ctx.ccrIdDropdown)("panelStyle", \u0275\u0275pureFunction0(41, _c44));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c44));
    \u0275\u0275property("options", ctx.masterAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(43, _c44));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c44));
    \u0275\u0275property("options", ctx.houseAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(45, _c44));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c44));
    \u0275\u0275property("options", ctx.partnerDropdown)("panelStyle", \u0275\u0275pureFunction0(47, _c44));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(48, _c44));
    \u0275\u0275property("options", ctx.consoleIdDropdown)("panelStyle", \u0275\u0275pureFunction0(49, _c44));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.ccrTable)("scrollable", true)("sortOrder", -1);
    \u0275\u0275twoWayProperty("selection", ctx.selectedCcr);
    \u0275\u0275property("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(50, _c54));
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, RowToggler, SortIcon, TableCheckbox, TableHeaderCheckbox, InputIcon, IconField, InputText, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem 3px 0px;\n  border-radius: 6px;\n  text-align: center;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  border: none;\n  color: var(--white);\n}\n/*# sourceMappingURL=ccr.component.css.map */"] });
var CcrComponent = _CcrComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CcrComponent, { className: "CcrComponent", filePath: "src\\app\\main\\airport\\ccr\\ccr.component.ts", lineNumber: 24 });
})();

// src/app/main/airport/pre-alert-manifest/pre-alert-new/pre-alert-new.component.ts
var _c06 = () => ({ "width": "100%" });
function PreAlertNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function PreAlertNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
}
function PreAlertNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function PreAlertNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275template(2, PreAlertNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 13)(3, PreAlertNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 15);
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
function PreAlertNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_12_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "p", 20);
    \u0275\u0275text(3, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 21);
    \u0275\u0275template(5, PreAlertNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19)(7, "p", 23);
    \u0275\u0275text(8, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-dropdown", 24);
    \u0275\u0275listener("onChange", function PreAlertNewComponent_ng_template_12_Template_p_dropdown_onChange_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.partnerTypeChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PreAlertNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 25)(12, "p", 23);
    \u0275\u0275text(13, "Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 26);
    \u0275\u0275template(15, PreAlertNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 27)(17, "p", 20);
    \u0275\u0275text(18, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 28);
    \u0275\u0275template(20, PreAlertNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 29)(22, "p", 20);
    \u0275\u0275text(23, "Flight No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 30);
    \u0275\u0275template(25, PreAlertNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 31)(27, "p", 20);
    \u0275\u0275text(28, "Flight Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 32);
    \u0275\u0275template(30, PreAlertNewComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 33)(32, "p", 23);
    \u0275\u0275text(33, "Estimated Time Of Departure");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-calendar", 34);
    \u0275\u0275template(35, PreAlertNewComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 35)(37, "p", 23);
    \u0275\u0275text(38, "Estimated Time Of Arrival");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-calendar", 36);
    \u0275\u0275template(40, PreAlertNewComponent_ng_template_12_mat_error_40_Template, 3, 1, "mat-error", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 37)(42, "p", 20);
    \u0275\u0275text(43, "Upload File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p-inputGroup");
    \u0275\u0275element(45, "input", 38);
    \u0275\u0275elementStart(46, "button", 39);
    \u0275\u0275listener("click", function PreAlertNewComponent_ng_template_12_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r4);
      const fileInput_r5 = \u0275\u0275reference(49);
      return \u0275\u0275resetView(fileInput_r5.click());
    });
    \u0275\u0275element(47, "i", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "input", 41, 0);
    \u0275\u0275listener("change", function PreAlertNewComponent_ng_template_12_Template_input_change_48_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 42)(51, "button", 43);
    \u0275\u0275text(52, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_17_0;
    let tmp_19_0;
    let tmp_21_0;
    let tmp_23_0;
    let tmp_27_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(31, _c06));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(32, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c06));
    \u0275\u0275property("options", ctx_r2.partnerType)("panelStyle", \u0275\u0275pureFunction0(34, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerType"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c06));
    \u0275\u0275property("options", ctx_r2.customerIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("partnerId")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(36, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_17_0 = ctx_r2.form.get("partnerMasterAirwayBill")) == null ? null : tmp_17_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerMasterAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_19_0 = ctx_r2.form.get("flightNo")) == null ? null : tmp_19_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("flightNo"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_21_0 = ctx_r2.form.get("flightName")) == null ? null : tmp_21_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("flightName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_23_0 = ctx_r2.form.get("estimatedDepartureTimeFE")) == null ? null : tmp_23_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("estimatedDepartureTimeFE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_27_0 = ctx_r2.form.get("flightArrivalTimeFE")) == null ? null : tmp_27_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("flightArrivalTimeFE"));
  }
}
function PreAlertNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function PreAlertNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r7 = \u0275\u0275restoreView(_r6).onClick;
      return \u0275\u0275resetView(onClick_r7.emit());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "p", 45);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 46);
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
function PreAlertNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 19)(2, "p", 20);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "p", 20);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 19)(10, "p", 20);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 19)(14, "p", 20);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 42)(18, "button", 52);
    \u0275\u0275listener("click", function PreAlertNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r9 = \u0275\u0275restoreView(_r8).prevCallback;
      return \u0275\u0275resetView(prevCallback_r9.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd()();
  }
}
function PreAlertNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, PreAlertNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 8)(2, PreAlertNewComponent_p_stepperPanel_13_ng_template_2_Template, 20, 0, "ng-template", 9);
    \u0275\u0275elementEnd();
  }
}
var _PreAlertNewComponent = class _PreAlertNewComponent {
  constructor(cs, spin, route, router, path, fb, service, customerService, consignorService, messageService, cas, auth, el, dialog) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.customerService = customerService;
    this.consignorService = consignorService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.el = el;
    this.dialog = dialog;
    this.partnerType = [];
    this.active = 0;
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
      companyId: [this.auth.companyId, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      partnerHouseAirwayBill: [],
      partnerMasterAirwayBill: [],
      originDetails: this.OriginDetails,
      destinationDetails: this.DestinationDetails,
      goodsDescription: [],
      consigneeName: [],
      incoTerms: [],
      shipperName: [],
      description: [],
      weight: [,],
      flightNo: [],
      flightName: [],
      consignmentValue: [],
      masterAirwayBill: [],
      houseAirwayBill: [],
      consignmentCurrency: [],
      airportDestinationCode: [],
      hsCode: [],
      partnerType: [""],
      countryOfOrigin: [],
      countryOfDestination: [],
      flightArrivalTime: [""],
      flightArrivalTimeFE: [],
      estimatedDepartureTime: [""],
      estimatedDepartureTimeFE: [/* @__PURE__ */ new Date()],
      noOfPackageMawb: [],
      noOfCrt: [],
      upload: [],
      totalShipmentWeight: [],
      totalValue: [],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""],
      partnerId: ["", Validators.required]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.companyIdList = [];
    this.countryIdList = [];
    this.customerIdList = [];
    this.hsCodeList = [];
    this.selectedFiles = null;
    this.partnerType = [
      { value: "customer", label: "Customer" },
      { value: "consignor", label: "Consignor" }
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
    const dataToSend = ["Mid-Mile", "Pre Alert Manifest", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.companyId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.hsCode.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.customer.url
    ]).subscribe({
      next: (results) => {
        this.companyIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.company.key);
        this.countryIdList = this.cas.forLanguageFilter(results[1], this.cas.dropdownlist.setup.country.key);
        this.hsCodeList = this.cas.forLanguageFilterWithoutKey(results[2], this.cas.dropdownlist.setup.hsCode.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  fill(line) {
    this.service.search({ houseAirwayBill: [line.houseAirwayBill] }).subscribe({
      next: (res) => {
        if (res) {
          this.form.patchValue(res[0]);
          this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
          this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
          if (this.form.controls.estimatedDepartureTime.value) {
            this.form.controls.estimatedDepartureTimeFE.patchValue(this.cs.pCalendar(this.form.controls.estimatedDepartureTime.value));
          }
          this.partnerTypeChanged();
        }
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      for (const control in this.form.controls) {
        const controlInstance = this.form.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
          }
        }
      }
    }
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    const date = this.cs.jsonDate(this.form.controls.estimatedDepartureTimeFE.value);
    this.form.controls.estimatedDepartureTime.patchValue(date);
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.UpdatePreAlertManifest([this.form.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res[0].consignmentId + " has been updated successfully" });
          this.router.navigate(["/main/airport/preAlertManifest"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create([this.form.getRawValue()]).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: " has been created successfully" });
            this.router.navigate(["/main/airport/preAlertManifest"]);
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
  partnerTypeChanged() {
    if (this.form.controls.partnerType.value == "customer") {
      let obj = {};
      obj.companyId = [this.auth.companyId];
      this.customerIdList = [];
      this.spin.show();
      this.customerService.search(obj).subscribe({
        next: (result) => {
          this.customerIdList = this.cas.foreachlist(result, { key: "customerId", value: "customerName" });
          this.customerIdList = this.cs.removeDuplicatesFromArrayList(this.customerIdList, "value");
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
    if (this.form.controls.partnerType.value == "consignor") {
      let obj = {};
      obj.companyId = [this.auth.companyId];
      this.customerIdList = [];
      this.spin.show();
      this.consignorService.search(obj).subscribe({
        next: (result) => {
          this.customerIdList = this.cas.foreachlist(result, { key: "consignorId", value: "consignorName" });
          this.customerIdList = this.cs.removeDuplicatesFromArrayList(this.customerIdList, "value");
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    this.selectedFiles = file;
    this.spin.show();
    const date = this.cs.jsonDate(this.form.controls.estimatedDepartureTimeFE.value);
    this.form.controls.estimatedDepartureTime.patchValue(date);
    const date2 = this.cs.jsonDate(this.form.controls.flightArrivalTimeFE.value);
    this.form.controls.flightArrivalTime.patchValue(date2);
    this.service.uploadPreAlertFiles(this.selectedFiles, this.form.getRawValue()).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: "success",
          summary: "Uploaded",
          key: "br",
          detail: "File uploaded successfully"
        });
        this.selectedFiles = null;
        this.clearFileInput(event.target);
        this.router.navigate(["/main/airport/preAlertManifest"]);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.selectedFiles = null;
        this.clearFileInput(event.target);
        this.cs.commonerrorNew(err);
      }
    });
  }
  clearFileInput(input) {
    input.value = "";
  }
};
_PreAlertNewComponent.\u0275fac = function PreAlertNewComponent_Factory(t) {
  return new (t || _PreAlertNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
};
_PreAlertNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreAlertNewComponent, selectors: [["app-pre-alert-new"]], decls: 14, vars: 4, consts: [["fileInput", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerType", "appendTo", "body", 3, "onChange", "options", "panelStyle"], ["id", "partnerId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "partnerMasterAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "flightNo", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "flightNo", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "flightName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "flightName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "estimatedDepartureTime", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "estimatedDepartureTimeFE", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "ngClass", "iconDisplay", "showIcon"], ["id", "flightArrivalTimeFE", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "flightArrivalTimeFE", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "ngClass", "iconDisplay", "showIcon"], ["id", "upload", 1, "col-4", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "upload", "pInputText", "", "placeholder", "Enter"], ["type", "button", "pButton", "", 1, "bgBlack", "border-0", 3, "click"], [1, "bi", "bi-upload"], ["type", "file", 2, "display", "none", 3, "change"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/airport/preAlertManifest", 1, "buttom1", "textBlack", "mx-1"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function PreAlertNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 4);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "form", 6)(9, "p-stepper", 7);
    \u0275\u0275twoWayListener("activeStepChange", function PreAlertNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, PreAlertNewComponent_ng_template_11_Template, 7, 2, "ng-template", 8)(12, PreAlertNewComponent_ng_template_12_Template, 53, 37, "ng-template", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PreAlertNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pre Alert Manifest - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, ButtonDirective, PrimeTemplate, Dropdown, InputText, Calendar, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, InputGroup, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=pre-alert-new.component.css.map */"] });
var PreAlertNewComponent = _PreAlertNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreAlertNewComponent, { className: "PreAlertNewComponent", filePath: "src\\app\\main\\airport\\pre-alert-manifest\\pre-alert-new\\pre-alert-new.component.ts", lineNumber: 20 });
})();

// src/app/main/airport/bonded-manifest/bonded-manifest-new/bonded-manifest-new.component.ts
var _c07 = () => ({ "width": "100%" });
function BondedManifestNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function BondedManifestNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function BondedManifestNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function BondedManifestNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, BondedManifestNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 11)(3, BondedManifestNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 12);
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
function BondedManifestNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 73)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 73)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_12_div_11_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 73)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_12_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "p", 18);
    \u0275\u0275text(2, "Manifest Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 75);
    \u0275\u0275template(4, BondedManifestNewComponent_ng_template_12_div_11_mat_error_4_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ((tmp_3_0 = ctx_r2.form.get("bondedId")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.form.get("bondedId")) == null ? null : tmp_3_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("bondedId"));
  }
}
function BondedManifestNewComponent_ng_template_12_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 73)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_12_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 73)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_12_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 73)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_12_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 73)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_12_mat_error_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 73)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, BondedManifestNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, BondedManifestNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BondedManifestNewComponent_ng_template_12_div_11_Template, 5, 2, "div", 22);
    \u0275\u0275elementStart(12, "div", 23)(13, "p", 24);
    \u0275\u0275text(14, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 25);
    \u0275\u0275template(16, BondedManifestNewComponent_ng_template_12_mat_error_16_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 26)(18, "p", 24);
    \u0275\u0275text(19, "Partner HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 27);
    \u0275\u0275template(21, BondedManifestNewComponent_ng_template_12_mat_error_21_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 28)(23, "p", 18);
    \u0275\u0275text(24, " Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 29);
    \u0275\u0275template(26, BondedManifestNewComponent_ng_template_12_mat_error_26_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 30)(28, "p", 18);
    \u0275\u0275text(29, " Bill Of Lading For ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "p-dropdown", 31);
    \u0275\u0275template(31, BondedManifestNewComponent_ng_template_12_mat_error_31_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 32)(33, "p", 18);
    \u0275\u0275text(34, " Net Weight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 34)(37, "p", 18);
    \u0275\u0275text(38, " Manifested Gross Weight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 36)(41, "p", 18);
    \u0275\u0275text(42, " Gross Weight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 38)(45, "p", 18);
    \u0275\u0275text(46, " Tare Weight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 40)(49, "p", 18);
    \u0275\u0275text(50, " Manifested Quantity ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 42)(53, "p", 18);
    \u0275\u0275text(54, " Landed Quantity ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 44)(57, "p", 18);
    \u0275\u0275text(58, " Total Quantity ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 46)(61, "p", 18);
    \u0275\u0275text(62, " Volume ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 48)(65, "p", 18);
    \u0275\u0275text(66, " Port Of Shipping ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 50)(69, "p", 18);
    \u0275\u0275text(70, " Final Destination ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 52)(73, "p", 18);
    \u0275\u0275text(74, " Notify Party ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 54)(77, "p", 18);
    \u0275\u0275text(78, " Consignee Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 56)(81, "p", 18);
    \u0275\u0275text(82, "Shipper");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "p-dropdown", 57);
    \u0275\u0275template(84, BondedManifestNewComponent_ng_template_12_mat_error_84_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 58)(86, "p", 18);
    \u0275\u0275text(87, " Remark ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(88, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 60)(90, "p", 18);
    \u0275\u0275text(91, "Is Consolidated Shipment");
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "p-dropdown", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 62)(94, "p", 18);
    \u0275\u0275text(95, "Is Split Bill of Lading");
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "p-dropdown", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 64)(98, "p", 18);
    \u0275\u0275text(99, " Consolidated Bill Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 66)(102, "p", 18);
    \u0275\u0275text(103, " Is Pending Shipment ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "p-dropdown", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 68)(106, "p", 18);
    \u0275\u0275text(107, " BWH Investor ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(108, "input", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 70)(110, "button", 71);
    \u0275\u0275text(111, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "button", 72);
    \u0275\u0275listener("click", function BondedManifestNewComponent_ng_template_12_Template_button_click_112_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_15_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_31_0;
    let tmp_32_0;
    let tmp_33_0;
    let tmp_34_0;
    let tmp_40_0;
    let tmp_45_0;
    let tmp_48_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(55, _c07));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(56, _c07));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(57, _c07));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(58, _c07));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pageToken.pageflow != "New");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_13_0 = ctx_r2.form.get("partnerMasterAirwayBill")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r2.form.get("partnerMasterAirwayBill")) == null ? null : tmp_13_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerMasterAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_15_0 = ctx_r2.form.get("partnerHouseAirwayBill")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r2.form.get("partnerHouseAirwayBill")) == null ? null : tmp_15_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerHouseAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_17_0 = ctx_r2.form.get("description")) == null ? null : tmp_17_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("ngClass", ((tmp_18_0 = ctx_r2.form.get("description")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r2.form.get("description")) == null ? null : tmp_18_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("description"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(59, _c07));
    \u0275\u0275property("options", ctx_r2.billOfLadingFor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("billOfLadingFor"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_23_0 = ctx_r2.form.get("netWeight")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r2.form.get("netWeight")) == null ? null : tmp_23_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_24_0 = ctx_r2.form.get("manifestedGrossWeight")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r2.form.get("manifestedGrossWeight")) == null ? null : tmp_24_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_25_0 = ctx_r2.form.get("grossWeight")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = ctx_r2.form.get("grossWeight")) == null ? null : tmp_25_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_26_0 = ctx_r2.form.get("tareWeight")) == null ? null : tmp_26_0.invalid) && ((tmp_26_0 = ctx_r2.form.get("tareWeight")) == null ? null : tmp_26_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_27_0 = ctx_r2.form.get("manifestedQuantity")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx_r2.form.get("manifestedQuantity")) == null ? null : tmp_27_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_28_0 = ctx_r2.form.get("landedQuantity")) == null ? null : tmp_28_0.invalid) && ((tmp_28_0 = ctx_r2.form.get("landedQuantity")) == null ? null : tmp_28_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_29_0 = ctx_r2.form.get("totalQuantity")) == null ? null : tmp_29_0.invalid) && ((tmp_29_0 = ctx_r2.form.get("totalQuantity")) == null ? null : tmp_29_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_30_0 = ctx_r2.form.get("volume")) == null ? null : tmp_30_0.invalid) && ((tmp_30_0 = ctx_r2.form.get("volume")) == null ? null : tmp_30_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_31_0 = ctx_r2.form.get("airportOriginCode")) == null ? null : tmp_31_0.invalid) && ((tmp_31_0 = ctx_r2.form.get("airportOriginCode")) == null ? null : tmp_31_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_32_0 = ctx_r2.form.get("finalDestination")) == null ? null : tmp_32_0.invalid) && ((tmp_32_0 = ctx_r2.form.get("finalDestination")) == null ? null : tmp_32_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_33_0 = ctx_r2.form.get("notifyParty")) == null ? null : tmp_33_0.invalid) && ((tmp_33_0 = ctx_r2.form.get("notifyParty")) == null ? null : tmp_33_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_34_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_34_0.invalid) && ((tmp_34_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_34_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(60, _c07));
    \u0275\u0275property("options", ctx_r2.consignorIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(61, _c07));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("shipperId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_40_0 = ctx_r2.form.get("remark")) == null ? null : tmp_40_0.invalid) && ((tmp_40_0 = ctx_r2.form.get("remark")) == null ? null : tmp_40_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(62, _c07));
    \u0275\u0275property("options", ctx_r2.flag);
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(63, _c07));
    \u0275\u0275property("options", ctx_r2.flag);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_45_0 = ctx_r2.form.get("consolidatedBillNo")) == null ? null : tmp_45_0.invalid) && ((tmp_45_0 = ctx_r2.form.get("consolidatedBillNo")) == null ? null : tmp_45_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(64, _c07));
    \u0275\u0275property("options", ctx_r2.flag);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_48_0 = ctx_r2.form.get("bwhInvestor")) == null ? null : tmp_48_0.invalid) && ((tmp_48_0 = ctx_r2.form.get("bwhInvestor")) == null ? null : tmp_48_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save", " ");
  }
}
var _BondedManifestNewComponent = class _BondedManifestNewComponent {
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
    this.flag = [];
    this.billOfLadingFor = [];
    this.form = this.fb.group({
      bondedId: [],
      // billOfLandingNumber: [,Validators.required],
      billOfLandingDate: [],
      description: [],
      netWeigth: [],
      manifestedGrossWeight: [],
      grossWeight: [],
      tareWeight: [],
      manifestedQuantity: [],
      landedQuantity: [],
      totalQuantity: [],
      volume: [],
      airportOriginCode: [],
      portOfShipping: [],
      finalDestination: [],
      consigneeCivilId: [,],
      notifyParty: [],
      consigneeName: [],
      shipper: [,],
      remark: [],
      isConsolidatedShipment: [],
      isSplitBillOfLanding: [],
      consolidatedBillNo: [],
      isPendingShipment: [],
      bwhInvestor: [],
      createdOn: [""],
      createdBy: [],
      updatedOn: [""],
      updatedBy: [],
      actualCurrency: [],
      billOfLoadingFor: [],
      chasisNo: [],
      companyId: [this.auth.companyId],
      consignmentCurrency: [],
      consignmentValue: [],
      containerNo: [],
      containerSize: [],
      containerType: [],
      countryOfOrigin: [],
      currency: [],
      declaredValue: [],
      engineNo: [],
      enginePower: [],
      eventCode: [],
      eventText: [],
      eventTimestamp: [],
      fclLcl: [],
      freightCharges: [],
      freightCurrency: [],
      goodsDescription: [],
      goodsType: [],
      houseAirwayBill: [],
      hsCode: [],
      incoTerms: [],
      invoiceDate: [],
      invoiceNumber: [],
      invoiceSupplierName: [],
      invoiceType: [],
      kind: [],
      languageId: [this.auth.languageId],
      load: [],
      markId: [],
      markType: [],
      masterAirwayBill: [],
      billOfLadingFor: ["Import"],
      netWeight: [],
      noOfPackagesMawb: [],
      noOfPiecesHawb: [],
      numberOfCylinders: [],
      partnerHouseAirwayBill: [, Validators.required],
      partnerId: [],
      partnerMasterAirwayBill: [, Validators.required],
      partnerName: [],
      partnerType: [],
      passenger: [],
      paymentType: [],
      productId: [],
      productName: [],
      quantity: [],
      remarks: [],
      sealNo: [],
      pieceId: [],
      pieceItemId: [],
      serviceTypeId: [],
      serviceTypeName: [],
      shipperId: [],
      shipperName: [],
      statusTimestamp: [],
      subProductId: [],
      subProductName: [],
      totalDuty: [],
      vehicleBodyColor: [],
      vehicleBrand: [],
      vehicleModel: [],
      vehicleNationality: [],
      vehicleType: [],
      yearOfManufacture: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
    this.consigneeCivilIdList = [];
    this.consignorIdList = [];
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
    ];
    this.flag = [
      { value: "0", label: "False" },
      { value: "1", label: "True" }
    ];
    this.billOfLadingFor = [
      { value: "Import", label: "Import" },
      { value: "Export", label: "Export" },
      { value: "Free Zone", label: "Free Zone" },
      { value: "Transit", label: "Transit" }
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
    const dataToSend = ["Mid-Mile", "BondedManifest", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.shipper.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
      this.form.controls.bondedId.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.customer.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.countryIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.country.key);
        const consitnor = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.consignor.key);
        const customer = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.customer.key);
        customer.forEach((x) => this.consignorIdList.push(x));
        consitnor.forEach((x) => this.consignorIdList.push(x));
        this.consignorIdList = this.cs.removeDuplicatesFromArrayList(this.consignorIdList, "value");
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
      this.service.Update([this.form.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].bondedId + " has been updated successfully"
          });
          this.router.navigate(["/main/airport/bondedManifest"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create([this.form.getRawValue()]).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: "Record has been created successfully"
            });
            this.router.navigate(["/main/airport/bondedManifest"]);
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
_BondedManifestNewComponent.\u0275fac = function BondedManifestNewComponent_Factory(t) {
  return new (t || _BondedManifestNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(BondedManifestService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_BondedManifestNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BondedManifestNewComponent, selectors: [["app-bonded-manifest-new"]], decls: 13, vars: 3, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "col-6 marginFieldNew borderRadius12", "id", "bondedId", 4, "ngIf"], ["id", "partnerMasterAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", "required", "", 1, "w-100", 3, "ngClass"], ["id", "partnerHouseAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "partnerHouseAirwayBill", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", "required", "", 1, "w-100", 3, "ngClass"], ["id", "description", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "description", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "billOfLadingFor", 1, "col-6", "marginFieldNew", "borderRadius12"], ["appendTo", "body", "formControlName", "billOfLadingFor", "placeholder", "Select\xA0", 3, "options"], ["id", "netWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "netWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "manifestedGrossWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "manifestedGrossWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "grossWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "grossWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "tareWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "tareWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "manifestedQuantity", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "manifestedQuantity", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "landedQuantity", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "landedQuantity", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "totalQuantity", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "totalQuantity", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "volume", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "volume", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "airportOriginCode", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "airportOriginCode", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "finalDestination", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "finalDestination", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "notifyParty", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "notifyParty", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "consigneeName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "consigneeName", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "shipperId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "shipperId", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "remark", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "remark", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "isConsolidatedShipment", 1, "col-6", "marginFieldNew", "borderRadius12"], ["appendTo", "body", "formControlName", "isConsolidatedShipment", "placeholder", "Select\xA0", 3, "options"], ["id", "isSplitBillOfLanding", 1, "col-6", "marginFieldNew", "borderRadius12"], ["appendTo", "body", "formControlName", "isSplitBillOfLanding", "placeholder", "Select\xA0", 3, "options"], ["id", "consolidatedBillNo", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "consolidatedBillNo", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "isPendingShipment", 1, "col-6", "marginFieldNew", "borderRadius12"], ["appendTo", "body", "formControlName", "isPendingShipment", "placeholder", "Select\xA0", 3, "options"], ["id", "bwhInvestor", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "bwhInvestor", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/airport/bondedManifest", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], ["id", "bondedId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "bondedId", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", "required", "", 1, "w-100", 3, "ngClass"]], template: function BondedManifestNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function BondedManifestNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, BondedManifestNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, BondedManifestNewComponent_ng_template_12_Template, 114, 65, "ng-template", 8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Bonded Manifest - ", ctx.pageToken.pageflow, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=bonded-manifest-new.component.css.map */"] });
var BondedManifestNewComponent = _BondedManifestNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BondedManifestNewComponent, { className: "BondedManifestNewComponent", filePath: "src\\app\\main\\airport\\bonded-manifest\\bonded-manifest-new\\bonded-manifest-new.component.ts", lineNumber: 18 });
})();

// src/app/main/airport/ccr/ccr-new/ccr-new.component.ts
var _c08 = () => ({ "width": "100%" });
function CcrNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CcrNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function CcrNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function CcrNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, CcrNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 11)(3, CcrNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 12);
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
function CcrNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 78)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 78)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 78)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 78)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 78)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_12_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 78)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_12_mat_error_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 78)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, CcrNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, CcrNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22)(12, "p", 23);
    \u0275\u0275text(13, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-dropdown", 24);
    \u0275\u0275listener("onChange", function CcrNewComponent_ng_template_12_Template_p_dropdown_onChange_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mawbChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CcrNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25)(17, "p", 23);
    \u0275\u0275text(18, "Consignment No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-dropdown", 26);
    \u0275\u0275listener("onChange", function CcrNewComponent_ng_template_12_Template_p_dropdown_onChange_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hawbChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CcrNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 27)(22, "p", 18);
    \u0275\u0275text(23, " Consignee Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 28);
    \u0275\u0275template(25, CcrNewComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 29)(27, "p", 18);
    \u0275\u0275text(28, " Invoice Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 31)(31, "p", 18);
    \u0275\u0275text(32, " Invoice Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 33)(35, "p", 18);
    \u0275\u0275text(36, " Invoice Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 35)(39, "p", 23);
    \u0275\u0275text(40, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "p-dropdown", 36);
    \u0275\u0275template(42, CcrNewComponent_ng_template_12_mat_error_42_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 37)(44, "p", 18);
    \u0275\u0275text(45, " Invoice Supplier Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 39)(48, "p", 18);
    \u0275\u0275text(49, " Freight Currency ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 41)(52, "p", 18);
    \u0275\u0275text(53, " Freight Charges ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 43)(56, "p", 18);
    \u0275\u0275text(57, " Country Of Supply ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 45)(60, "p", 18);
    \u0275\u0275text(61, " Bill Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 47)(64, "p", 18);
    \u0275\u0275text(65, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "p-dropdown", 48);
    \u0275\u0275template(67, CcrNewComponent_ng_template_12_mat_error_67_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 49)(69, "p", 18);
    \u0275\u0275text(70, " Goods Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 51)(73, "p", 18);
    \u0275\u0275text(74, " Country Of Origin ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 53)(77, "p", 18);
    \u0275\u0275text(78, " Manufacturer ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 55)(81, "p", 18);
    \u0275\u0275text(82, " No Of Packages ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 57)(85, "p", 18);
    \u0275\u0275text(86, " Item Total Price ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 59)(89, "p", 18);
    \u0275\u0275text(90, " Package Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 61)(93, "p", 18);
    \u0275\u0275text(94, " Quantity ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(95, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 63)(97, "p", 18);
    \u0275\u0275text(98, " Net Wight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 65)(101, "p", 18);
    \u0275\u0275text(102, " Gross Weight ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 67)(105, "p", 18);
    \u0275\u0275text(106, " Is Exempted ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "p-dropdown", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 69)(109, "p", 18);
    \u0275\u0275text(110, " Exemption For ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(111, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 71)(113, "p", 18);
    \u0275\u0275text(114, " Exemption Beneficiary ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(115, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 73)(117, "p", 18);
    \u0275\u0275text(118, " Exemption Reference ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(119, "input", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 75)(121, "button", 76);
    \u0275\u0275text(122, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "button", 77);
    \u0275\u0275listener("click", function CcrNewComponent_ng_template_12_Template_button_click_123_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_20_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_34_0;
    let tmp_35_0;
    let tmp_36_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_41_0;
    let tmp_44_0;
    let tmp_45_0;
    let tmp_46_0;
    let tmp_47_0;
    let tmp_48_0;
    let tmp_49_0;
    let tmp_50_0;
    let tmp_51_0;
    let tmp_52_0;
    let tmp_56_0;
    let tmp_57_0;
    let tmp_58_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(65, _c08));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(66, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(67, _c08));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(68, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(69, _c08));
    \u0275\u0275property("options", ctx_r2.mawbList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("masterAirwayBill")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(70, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("masterAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(71, _c08));
    \u0275\u0275property("options", ctx_r2.hawbList)("ngClass", ((tmp_20_0 = ctx_r2.form.get("houseAirwayBill")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(72, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("houseAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_23_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_23_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("ngClass", ((tmp_24_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_24_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consigneeName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_26_0 = ctx_r2.form.get("invoiceNumber")) == null ? null : tmp_26_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("ngClass", ((tmp_27_0 = ctx_r2.form.get("invoiceNumber")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx_r2.form.get("invoiceNumber")) == null ? null : tmp_27_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_28_0 = ctx_r2.form.get("invoiceDate")) == null ? null : tmp_28_0.invalid) && ((tmp_28_0 = ctx_r2.form.get("invoiceDate")) == null ? null : tmp_28_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_29_0 = ctx_r2.form.get("invoiceType")) == null ? null : tmp_29_0.invalid) && ((tmp_29_0 = ctx_r2.form.get("invoiceType")) == null ? null : tmp_29_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(73, _c08));
    \u0275\u0275property("options", ctx_r2.currencyIdList)("panelStyle", \u0275\u0275pureFunction0(74, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("currency"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_34_0 = ctx_r2.form.get("invoiceSupplierName")) == null ? null : tmp_34_0.invalid) && ((tmp_34_0 = ctx_r2.form.get("invoiceSupplierName")) == null ? null : tmp_34_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_35_0 = ctx_r2.form.get("freightCurrency")) == null ? null : tmp_35_0.invalid) && ((tmp_35_0 = ctx_r2.form.get("freightCurrency")) == null ? null : tmp_35_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_36_0 = ctx_r2.form.get("freightCharges")) == null ? null : tmp_36_0.invalid) && ((tmp_36_0 = ctx_r2.form.get("freightCharges")) == null ? null : tmp_36_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_37_0 = ctx_r2.form.get("countryOfSupply")) == null ? null : tmp_37_0.invalid) && ((tmp_37_0 = ctx_r2.form.get("countryOfSupply")) == null ? null : tmp_37_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_38_0 = ctx_r2.form.get("billNumber")) == null ? null : tmp_38_0.invalid) && ((tmp_38_0 = ctx_r2.form.get("billNumber")) == null ? null : tmp_38_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(75, _c08));
    \u0275\u0275property("options", ctx_r2.hsCodeList)("ngClass", ((tmp_41_0 = ctx_r2.form.get("hsCode")) == null ? null : tmp_41_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(76, _c08));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("hsCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_44_0 = ctx_r2.form.get("goodsDescription")) == null ? null : tmp_44_0.invalid) && ((tmp_44_0 = ctx_r2.form.get("goodsDescription")) == null ? null : tmp_44_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_45_0 = ctx_r2.form.get("countryOfOrigin")) == null ? null : tmp_45_0.invalid) && ((tmp_45_0 = ctx_r2.form.get("countryOfOrigin")) == null ? null : tmp_45_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_46_0 = ctx_r2.form.get("manufacturer")) == null ? null : tmp_46_0.invalid) && ((tmp_46_0 = ctx_r2.form.get("manufacturer")) == null ? null : tmp_46_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_47_0 = ctx_r2.form.get("noOfPackages")) == null ? null : tmp_47_0.invalid) && ((tmp_47_0 = ctx_r2.form.get("noOfPackages")) == null ? null : tmp_47_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_48_0 = ctx_r2.form.get("itemTotalPrice")) == null ? null : tmp_48_0.invalid) && ((tmp_48_0 = ctx_r2.form.get("itemTotalPrice")) == null ? null : tmp_48_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_49_0 = ctx_r2.form.get("packageType")) == null ? null : tmp_49_0.invalid) && ((tmp_49_0 = ctx_r2.form.get("packageType")) == null ? null : tmp_49_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_50_0 = ctx_r2.form.get("quantity")) == null ? null : tmp_50_0.invalid) && ((tmp_50_0 = ctx_r2.form.get("quantity")) == null ? null : tmp_50_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_51_0 = ctx_r2.form.get("netWeight")) == null ? null : tmp_51_0.invalid) && ((tmp_51_0 = ctx_r2.form.get("netWeight")) == null ? null : tmp_51_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_52_0 = ctx_r2.form.get("grossWeight")) == null ? null : tmp_52_0.invalid) && ((tmp_52_0 = ctx_r2.form.get("grossWeight")) == null ? null : tmp_52_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(77, _c08));
    \u0275\u0275property("options", ctx_r2.value)("panelStyle", \u0275\u0275pureFunction0(78, _c08));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_56_0 = ctx_r2.form.get("exemptionFor")) == null ? null : tmp_56_0.invalid) && ((tmp_56_0 = ctx_r2.form.get("exemptionFor")) == null ? null : tmp_56_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_57_0 = ctx_r2.form.get("exemptionBeneficiary")) == null ? null : tmp_57_0.invalid) && ((tmp_57_0 = ctx_r2.form.get("exemptionBeneficiary")) == null ? null : tmp_57_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_58_0 = ctx_r2.form.get("exemptionReference")) == null ? null : tmp_58_0.invalid) && ((tmp_58_0 = ctx_r2.form.get("exemptionReference")) == null ? null : tmp_58_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save", " ");
  }
}
var _CcrNewComponent = class _CcrNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth, consignmentService) {
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
    this.consignmentService = consignmentService;
    this.active = 0;
    this.status = [];
    this.flag = [];
    this.value = [];
    this.form = this.fb.group({
      masterAirwayBill: [, Validators.required],
      houseAirwayBill: [, Validators.required],
      consigneeName: [, Validators.required],
      consigneeCivilId: [],
      invoiceNumber: [],
      invoiceDate: [],
      invoiceType: [],
      currency: [],
      invoiceSupplierName: [],
      freightCurrency: [],
      freightCharges: [],
      countryOfSupply: [],
      billNumber: [],
      hsCode: [, Validators.required],
      goodsDescription: [],
      countryOfOrigin: [],
      manufacturer: [],
      noOfPackages: [],
      itemTotalPrice: [],
      packageType: [],
      quantity: [],
      netWeight: [],
      grossWeight: [],
      isExempted: [],
      exemptionFor: [],
      exemptionBeneficiary: [],
      exemptionReference: [],
      partnerHouseAirwayBil: [],
      partnerMasterAirwayBill: [],
      createdOn: [""],
      createdBy: [],
      updatedOn: [""],
      updatedBy: [],
      pieceId: [],
      pieceItemId: [],
      airportOriginCode: [],
      actualCurrency: [],
      companyId: [this.auth.companyId],
      consignmentCurrency: [],
      consignmentValue: [],
      consoleId: [],
      customsCcrNo: [],
      customsKd: [],
      declaredValue: [],
      description: [],
      eventCode: [],
      eventText: [],
      eventTimestamp: [],
      finalDestination: [],
      flightArrivalTime: [],
      flightNo: [],
      iataKd: [],
      incoTerms: [],
      isConsolidatedShipment: [],
      isPendingShipment: [],
      isSplitBillOfLading: [],
      landedQuantity: [],
      languageId: [this.auth.languageId],
      manifestedGrossWeight: [],
      manifestedQuantity: [],
      noOfPackageMawb: [],
      noOfPieceHawb: [],
      notifyParty: [],
      partnerHouseAirwayBill: [],
      partnerId: [],
      partnerName: [],
      partnerType: [],
      paymentType: [],
      productId: [],
      productName: [],
      remarks: [],
      serviceTypeId: [],
      serviceTypeName: [],
      shipperId: [],
      shipperName: [],
      specialApprovalValue: [],
      statusTimestamp: [],
      subProductId: [],
      subProductName: [],
      tareWeight: [],
      totalDuty: [],
      totalQuantity: [],
      volume: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
    this.mawbList = [];
    this.hawbList = [];
    this.hsCodeList = [];
    this.currencyIdList = [];
    this.consignorIdList = [];
    this.status = [
      { value: "2", label: "Inactive" },
      { value: "1", label: "Active" }
    ];
    this.flag = [
      { value: "0", label: "False" },
      { value: "1", label: "True" }
    ];
    this.value = [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" }
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
    const dataToSend = ["Mid-Mile", "CCR", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.mawbDropdown();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.masterAirwayBill.disable();
      this.form.controls.houseAirwayBill.disable();
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
      this.cas.dropdownlist.setup.currency.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.hsCode.url,
      this.cas.dropdownlist.setup.hsCode.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.currencyIdList = this.cas.foreachlist(results[2], this.cas.dropdownlist.setup.currency.key);
        this.countryIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.country.key);
        this.consignorIdList = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.consignor.key);
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
      this.service.Update([this.form.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].ccrId + " has been updated successfully"
          });
          this.router.navigate(["/main/airport/ccr"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create([this.form.getRawValue()]).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Created",
              key: "br",
              detail: res.partnerId + " has been created successfully"
            });
            this.router.navigate(["/main/airport/ccr"]);
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
  mawbDropdown() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    this.mawbList = [];
    this.spin.show();
    this.consignmentService.search(obj).subscribe({ next: (result) => {
      this.mawbList = this.cas.foreachlist(result, { key: "masterAirwayBill", value: "masterAirwayBill" });
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
  mawbChanged() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.masterAirwayBill = [this.form.controls.masterAirwayBill.value];
    this.hawbList = [];
    this.spin.show();
    this.consignmentService.search(obj).subscribe({ next: (result) => {
      this.hawbList = this.cas.foreachlist(result, { key: "houseAirwayBill", value: "houseAirwayBill" });
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
  hawbChanged() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.masterAirwayBill = [this.form.controls.masterAirwayBill.value];
    obj.houseAirwayBill = [this.form.controls.houseAirwayBill.value];
    this.spin.show();
    this.consignmentService.search(obj).subscribe({ next: (result) => {
      this.form.patchValue(result[0]);
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
};
_CcrNewComponent.\u0275fac = function CcrNewComponent_Factory(t) {
  return new (t || _CcrNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CcrService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ConsignmentService));
};
_CcrNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CcrNewComponent, selectors: [["app-ccr-new"]], decls: 13, vars: 3, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["id", "masterAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "houseAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "consigneeName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "consigneeName", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "invoiceNumber", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceNumber", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "invoiceDate", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceDate", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "invoiceType", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceType", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "currency", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "currency", "appendTo", "body", 3, "options", "panelStyle"], ["id", "invoiceSupplierName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceSupplierName", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "freightCurrency", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "freightCurrency", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "freightCharges", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "freightCharges", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "countryOfSupply", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "countryOfSupply", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "billNumber", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "billNumber", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "hsCode", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "hsCode", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "goodsDescription", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "goodsDescription", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "countryOfOrigin", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "countryOfOrigin", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "manufacturer", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "manufacturer", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "noOfPackages", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "noOfPackages", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "itemTotalPrice", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "itemTotalPrice", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "packageType", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "packageType", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "quantity", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "quantity", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "netWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "netWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "grossWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "grossWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "isExempted", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "isExempted", "appendTo", "body", "placeholder", "Select", 3, "options", "panelStyle"], ["id", "exemptionFor", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "exemptionFor", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "exemptionBeneficiary", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "exemptionBeneficiary", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "exemptionReference", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "exemptionReference", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/airport/ccr", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"]], template: function CcrNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function CcrNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, CcrNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, CcrNewComponent_ng_template_12_Template, 125, 79, "ng-template", 8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" CCR - ", ctx.pageToken.pageflow, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=ccr-new.component.css.map */"] });
var CcrNewComponent = _CcrNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CcrNewComponent, { className: "CcrNewComponent", filePath: "src\\app\\main\\airport\\ccr\\ccr-new\\ccr-new.component.ts", lineNumber: 19 });
})();

// src/app/main/airport/console/console-new/console-new.component.ts
var _c09 = () => ({ "width": "100%" });
function ConsoleNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ConsoleNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function ConsoleNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ConsoleNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, ConsoleNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, ConsoleNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function ConsoleNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 54)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, ConsoleNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, ConsoleNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "p", 24);
    \u0275\u0275text(13, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-dropdown", 25);
    \u0275\u0275listener("onChange", function ConsoleNewComponent_ng_template_12_Template_p_dropdown_onChange_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mawbChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ConsoleNewComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 26)(17, "p", 24);
    \u0275\u0275text(18, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-dropdown", 27);
    \u0275\u0275listener("onChange", function ConsoleNewComponent_ng_template_12_Template_p_dropdown_onChange_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hawbChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ConsoleNewComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 28)(22, "p", 19);
    \u0275\u0275text(23, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "p-dropdown", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 30)(26, "p", 24);
    \u0275\u0275text(27, "Airport Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "p-dropdown", 31);
    \u0275\u0275template(29, ConsoleNewComponent_ng_template_12_mat_error_29_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 32)(31, "p", 19);
    \u0275\u0275text(32, "Shipper");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-dropdown", 33);
    \u0275\u0275template(34, ConsoleNewComponent_ng_template_12_mat_error_34_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 34)(36, "p", 19);
    \u0275\u0275text(37, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 35);
    \u0275\u0275template(39, ConsoleNewComponent_ng_template_12_mat_error_39_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 36)(41, "p", 19);
    \u0275\u0275text(42, "Number of Pieces");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 37);
    \u0275\u0275template(44, ConsoleNewComponent_ng_template_12_mat_error_44_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 38)(46, "p", 19);
    \u0275\u0275text(47, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 39);
    \u0275\u0275template(49, ConsoleNewComponent_ng_template_12_mat_error_49_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 40)(51, "p", 19);
    \u0275\u0275text(52, "Consignee Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 41);
    \u0275\u0275template(54, ConsoleNewComponent_ng_template_12_mat_error_54_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 42)(56, "p", 24);
    \u0275\u0275text(57, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "p-dropdown", 43);
    \u0275\u0275template(59, ConsoleNewComponent_ng_template_12_mat_error_59_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 44)(61, "p", 24);
    \u0275\u0275text(62, "Consignment Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 45);
    \u0275\u0275template(64, ConsoleNewComponent_ng_template_12_mat_error_64_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 46)(66, "p", 24);
    \u0275\u0275text(67, "Customs KD");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 47);
    \u0275\u0275template(69, ConsoleNewComponent_ng_template_12_mat_error_69_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 48)(71, "p", 24);
    \u0275\u0275text(72, "IATA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "p-dropdown", 49);
    \u0275\u0275template(74, ConsoleNewComponent_ng_template_12_mat_error_74_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 18)(76, "p", 19);
    \u0275\u0275text(77, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "p-dropdown", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 51)(80, "button", 52);
    \u0275\u0275text(81, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 53);
    \u0275\u0275listener("click", function ConsoleNewComponent_ng_template_12_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_20_0;
    let tmp_37_0;
    let tmp_39_0;
    let tmp_41_0;
    let tmp_43_0;
    let tmp_49_0;
    let tmp_51_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(68, _c09));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(69, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(70, _c09));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(71, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(72, _c09));
    \u0275\u0275property("options", ctx_r2.mawbList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("masterAirwayBill")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(73, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("masterAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(74, _c09));
    \u0275\u0275property("options", ctx_r2.hawbList)("ngClass", ((tmp_20_0 = ctx_r2.form.get("houseAirwayBill")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(75, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("houseAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(76, _c09));
    \u0275\u0275property("options", ctx_r2.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(77, _c09));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(78, _c09));
    \u0275\u0275property("options", ctx_r2.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(79, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("airportOriginCode"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(80, _c09));
    \u0275\u0275property("options", ctx_r2.consignorIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(81, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("shipperId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_37_0 = ctx_r2.form.get("grossWeight")) == null ? null : tmp_37_0.invalid) && ((tmp_37_0 = ctx_r2.form.get("grossWeight")) == null ? null : tmp_37_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("grossWeight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_39_0 = ctx_r2.form.get("noOfPieceHawb")) == null ? null : tmp_39_0.invalid) && ((tmp_39_0 = ctx_r2.form.get("noOfPieceHawb")) == null ? null : tmp_39_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("noOfPieceHawb"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_41_0 = ctx_r2.form.get("goodsDescription")) == null ? null : tmp_41_0.invalid) && ((tmp_41_0 = ctx_r2.form.get("goodsDescription")) == null ? null : tmp_41_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("goodsDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_43_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_43_0.invalid) && ((tmp_43_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_43_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consigneeName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(82, _c09));
    \u0275\u0275property("options", ctx_r2.currencyIdList)("panelStyle", \u0275\u0275pureFunction0(83, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("currency"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_49_0 = ctx_r2.form.get("consignmentValue")) == null ? null : tmp_49_0.invalid) && ((tmp_49_0 = ctx_r2.form.get("consignmentValue")) == null ? null : tmp_49_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consignmentValue"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_51_0 = ctx_r2.form.get("customsKd")) == null ? null : tmp_51_0.invalid) && ((tmp_51_0 = ctx_r2.form.get("customsKd")) == null ? null : tmp_51_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("customsKd"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(84, _c09));
    \u0275\u0275property("options", ctx_r2.iataList)("panelStyle", \u0275\u0275pureFunction0(85, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("iata"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(86, _c09));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ConsoleNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ConsoleNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 55);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 56);
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
function ConsoleNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 51)(18, "button", 62);
    \u0275\u0275listener("click", function ConsoleNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 53);
    \u0275\u0275listener("click", function ConsoleNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function ConsoleNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, ConsoleNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, ConsoleNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _ConsoleNewComponent = class _ConsoleNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth, consignmentService, currencyService, iataService) {
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
    this.consignmentService = consignmentService;
    this.currencyService = currencyService;
    this.iataService = iataService;
    this.active = 0;
    this.status = [];
    this.form = this.fb.group({
      actualCurrency: [],
      actualValue: [],
      airportOriginCode: [],
      bondedId: [],
      consoleId: [],
      languageId: [this.auth.languageId],
      companyName: [],
      consigneeCivilId: [],
      consigneeName: [],
      consignmentCurrency: [],
      consignmentValue: [],
      countryOfOrigin: [],
      createdBy: [],
      pieceId: [],
      pieceItemId: [],
      createdOn: [""],
      currency: [],
      customsCurrency: [],
      customsKd: [],
      customsValue: [],
      declaredValue: [],
      deletionIndicator: [],
      description: [],
      expectedDuty: [],
      finalDestination: [],
      freightCharges: [],
      freightCurrency: [],
      goodsDescription: [],
      goodsType: [],
      grossWeight: [],
      houseAirwayBill: [, Validators.required],
      hsCode: [],
      iata: [],
      incoTerms: [],
      invoiceDate: [],
      invoiceNumber: [],
      invoiceSupplierName: [],
      invoiceType: [],
      isConsolidatedShipment: [],
      isPendingShipment: [],
      isSplitBillOfLading: [],
      landedQuantity: [],
      languageDescription: [],
      companyId: [this.auth.companyId],
      manifestedGrossWeight: [],
      manifestedQuantity: [],
      masterAirwayBill: [, Validators.required],
      netWeight: [],
      noOfPackageMawb: [],
      noOfPieceHawb: [],
      notifyParty: [],
      partnerHouseAirwayBill: [],
      partnerId: [],
      partnerMasterAirwayBill: [],
      partnerName: [],
      partnerType: [],
      productId: [],
      productName: [],
      quantity: [],
      referenceField1: [],
      referenceField10: [],
      referenceField11: [],
      referenceField12: [],
      referenceField13: [],
      referenceField14: [],
      referenceField15: [],
      referenceField16: [],
      referenceField17: [],
      referenceField18: [],
      referenceField19: [],
      referenceField2: [],
      referenceField20: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      remarks: [],
      serviceTypeId: [],
      serviceTypeName: [],
      shipperId: [],
      shipperName: [],
      specialApprovalValue: [],
      statusId: ["16"],
      subProductId: [],
      subProductName: [],
      tareWeight: [],
      totalQuantity: [],
      updatedBy: [],
      updatedOn: [""],
      volume: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
    this.mawbList = [];
    this.hawbList = [];
    this.iataList = [];
    this.originCodeList = [];
    this.currencyIdList = [];
    this.consignorIdList = [];
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
    const dataToSend = ["Airport ", "Console", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.mawbDropdown();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.masterAirwayBill.disable();
      this.form.controls.houseAirwayBill.disable();
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
      this.cas.dropdownlist.setup.currency.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.iata.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.currencyIdList = this.cas.foreachlist(results[2], this.cas.dropdownlist.setup.currency.key);
        this.countryIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.country.key);
        this.consignorIdList = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.consignor.key);
        this.iataList = this.cas.forLanguageFilter(results[5], this.cas.dropdownlist.setup.iata.key);
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
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: " Please fill required fields to continue" });
      return;
    }
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update([this.form.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res[0].consoleId + " has been updated successfully" });
          this.router.navigate(["/main/airport/console"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create([this.form.getRawValue()]).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res[0].consoleId + " has been created successfully" });
            this.router.navigate(["/main/airport/console"]);
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
  mawbDropdown() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    this.mawbList = [];
    this.spin.show();
    this.consignmentService.search(obj).subscribe({ next: (result) => {
      this.mawbList = this.cas.foreachlist(result, { key: "masterAirwayBill", value: "masterAirwayBill" });
      this.hawbList = this.cas.foreachlist(result, { key: "houseAirwayBill", value: "houseAirwayBill" });
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
  mawbChanged() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.masterAirwayBill = [this.form.controls.masterAirwayBill.value];
    this.hawbList = [];
    this.spin.show();
    this.consignmentService.search(obj).subscribe({ next: (result) => {
      this.hawbList = this.cas.foreachlist(result, { key: "houseAirwayBill", value: "houseAirwayBill" });
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
  hawbChanged() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.masterAirwayBill = [this.form.controls.masterAirwayBill.value];
    obj.houseAirwayBill = [this.form.controls.houseAirwayBill.value];
    this.spin.show();
    this.consignmentService.search(obj).subscribe({ next: (result) => {
      this.form.patchValue(result[0]);
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
};
_ConsoleNewComponent.\u0275fac = function ConsoleNewComponent_Factory(t) {
  return new (t || _ConsoleNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsoleService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(IataService));
};
_ConsoleNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleNewComponent, selectors: [["app-console-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["id", "masterAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "houseAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "countryOfOrigin", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "countryOfOrigin", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "airportOriginCode", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "airportOriginCode", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "shipperId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "shipperId", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "grossWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "grossWeight", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "noOfPieceHawb", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "noOfPieceHawb", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "goodsDescription", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "goodsDescription", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consigneeName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "consigneeName", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "currency", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "currency", "appendTo", "body", 3, "options", "panelStyle"], ["id", "consignmentValue", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "consignmentValue", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "customsKd", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "customsKd", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "iata", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "iata", "appendTo", "body", 3, "options", "panelStyle"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/airport/console", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function ConsoleNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function ConsoleNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, ConsoleNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, ConsoleNewComponent_ng_template_12_Template, 84, 87, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ConsoleNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Console - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=console-new.component.css.map */"] });
var ConsoleNewComponent = _ConsoleNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleNewComponent, { className: "ConsoleNewComponent", filePath: "src\\app\\main\\airport\\console\\console-new\\console-new.component.ts", lineNumber: 20 });
})();

// src/app/main/airport/console/console-editpopup/console-editpopup.component.ts
var _c010 = () => ({ "width": "100%" });
var _ConsoleEditpopupComponent = class _ConsoleEditpopupComponent {
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
      actualCurrency: [],
      actualValue: [],
      airportOriginCode: [],
      bondedId: [],
      companyId: [],
      companyName: [],
      consigneeCivilId: [],
      consigneeName: [],
      consignmentCurrency: [],
      consignmentValue: [],
      consoleId: [],
      countryOfOrigin: [],
      createdBy: [],
      createdOn: [],
      currency: [],
      customsCurrency: [],
      customsKd: [],
      customsValue: [],
      declaredValue: [],
      deletionIndicator: [],
      description: [],
      eventCode: [],
      eventText: [],
      eventTimestamp: [],
      expectedDuty: [],
      finalDestination: [],
      freightCharges: [],
      freightCurrency: [],
      goodsDescription: [],
      goodsType: [],
      grossWeight: [],
      houseAirwayBill: [],
      hsCode: [],
      iata: [],
      incoTerms: [],
      invoiceDate: [],
      invoiceNumber: [],
      invoiceSupplierName: [],
      invoiceType: [],
      isConsolidatedShipment: [],
      isPendingShipment: [],
      isSplitBillOfLading: [],
      landedQuantity: [],
      languageDescription: [],
      languageId: [],
      manifestedGrossWeight: [],
      manifestedQuantity: [],
      masterAirwayBill: [],
      netWeight: [],
      noOfPackageMawb: [],
      noOfPieceHawb: [],
      notifyParty: [],
      partnerHouseAirwayBill: [],
      partnerId: [],
      partnerMasterAirwayBill: [],
      partnerName: [],
      partnerType: [],
      paymentType: [],
      productId: [],
      productName: [],
      quantity: [],
      referenceField1: [],
      referenceField10: [],
      referenceField11: [],
      referenceField12: [],
      referenceField13: [],
      referenceField14: [],
      referenceField15: [],
      referenceField16: [],
      referenceField17: [],
      referenceField18: [],
      referenceField19: [],
      referenceField2: [],
      referenceField20: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      selectedConsole: [],
      remarks: [],
      serviceTypeId: [],
      serviceTypeName: [],
      shipmentBagId: [],
      shipperId: [],
      shipperName: [],
      specialApprovalValue: [],
      statusId: [],
      statusTimestamp: [],
      subProductId: [],
      subProductName: [],
      tareWeight: [],
      totalQuantity: [],
      updatedBy: [],
      updatedOn: [],
      volume: []
    });
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
    this.mawbList = [];
    this.hawbList = [];
    this.iataList = [];
    this.originCodeList = [];
    this.currencyIdList = [];
    this.consignorIdList = [];
    this.selecetedTrasnfer = [];
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.currency.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.iata.url
    ]).subscribe({
      next: (results) => {
        this.currencyIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.currency.key);
        this.countryIdList = this.cas.forLanguageFilter(results[1], this.cas.dropdownlist.setup.country.key);
        this.consignorIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.consignor.key);
        this.iataList = this.cas.forLanguageFilterWithoutKey(results[3], this.cas.dropdownlist.setup.iata.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  ngOnInit() {
    this.dropdownlist();
    if (this.data.pageflow == "Edit") {
      this.form.patchValue(this.data.code);
      this.form.controls.masterAirwayBill.disable();
      this.form.controls.partnerHouseAirwayBill.disable();
      this.form.controls.houseAirwayBill.disable();
      this.form.controls.partnerMasterAirwayBill.disable();
    }
  }
  save() {
    this.dialogRef.close(this.form.getRawValue());
  }
};
_ConsoleEditpopupComponent.\u0275fac = function ConsoleEditpopupComponent_Factory(t) {
  return new (t || _ConsoleEditpopupComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsoleService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_ConsoleEditpopupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleEditpopupComponent, selectors: [["app-console-editpopup"]], decls: 76, vars: 21, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "mt-4", "pt-2"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "formControlName", "houseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "masterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "partnerHouseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "formControlName", "airportOriginCode", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "goodsDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "grossWeight", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "noOfPieceHawb", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["formControlName", "countryOfOrigin", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "hsCode", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "consigneeName", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "consignmentValue", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["placeholder", "Select", "filter", "true", "formControlName", "consignmentCurrency", "appendTo", "body", 3, "options", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "customsValue", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "iata", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "float-right", "py-2"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function ConsoleEditpopupComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, " Console - Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "p", 9);
    \u0275\u0275text(13, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 8)(16, "p", 9);
    \u0275\u0275text(17, "MWAB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 8)(20, "p", 9);
    \u0275\u0275text(21, "Partner HWAB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 8)(24, "p", 9);
    \u0275\u0275text(25, "Partner MWAB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 8)(28, "p", 14);
    \u0275\u0275text(29, "Airport Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 8)(32, "p", 9);
    \u0275\u0275text(33, "Commodity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 8)(36, "p", 9);
    \u0275\u0275text(37, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 8)(40, "p", 9);
    \u0275\u0275text(41, "No Of Piece");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 8)(44, "p", 9);
    \u0275\u0275text(45, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "p-dropdown", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 8)(48, "p", 9);
    \u0275\u0275text(49, "HS Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 8)(52, "p", 9);
    \u0275\u0275text(53, "Consignee Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 8)(56, "p", 9);
    \u0275\u0275text(57, "Consignment Value ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 8)(60, "p", 14);
    \u0275\u0275text(61, "Consignment Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "p-dropdown", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 8)(64, "p", 14);
    \u0275\u0275text(65, "Customs Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 8)(68, "p", 14);
    \u0275\u0275text(69, "IATA Charges");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "p-dropdown", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 26)(72, "button", 27);
    \u0275\u0275text(73, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 28);
    \u0275\u0275listener("click", function ConsoleEditpopupComponent_Template_button_click_74_listener() {
      return ctx.save();
    });
    \u0275\u0275text(75, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(38);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c010));
    \u0275\u0275property("options", ctx.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(16, _c010));
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(17, _c010));
    \u0275\u0275property("options", ctx.currencyIdList)("panelStyle", \u0275\u0275pureFunction0(18, _c010));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_8_0 = ctx.form.get("customsValue")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.form.get("customsKd")) == null ? null : tmp_8_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c010));
    \u0275\u0275property("options", ctx.iataList)("panelStyle", \u0275\u0275pureFunction0(20, _c010));
  }
}, dependencies: [NgClass, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 20rem);\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=console-editpopup.component.css.map */"] });
var ConsoleEditpopupComponent = _ConsoleEditpopupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleEditpopupComponent, { className: "ConsoleEditpopupComponent", filePath: "src\\app\\main\\airport\\console\\console-editpopup\\console-editpopup.component.ts", lineNumber: 19 });
})();

// src/app/main/airport/console/console-transfer/console-transfer.component.ts
var _c011 = () => ({ "width": "100%" });
var _ConsoleTransferComponent = class _ConsoleTransferComponent {
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
      fromConsoleId: [],
      houseAirwayBill: [],
      toConsoleId: []
    });
    this.consoleList = [];
    this.selecetedTrasnfer = [];
    this.selecetedTrasnfer2 = [];
  }
  ngOnInit() {
    this.getConsoleDropdown();
    this.selecetedTrasnfer = this.data;
    if (this.data.pageflow == "Edit") {
      this.form.patchValue(this.data.code);
    }
  }
  getConsoleDropdown() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.languageId = [this.auth.languageId];
    this.spin.show();
    this.service.search(obj).subscribe({
      next: (result) => {
        this.consoleList = this.cas.forLanguageFilterWithoutKey(result, { key: "consoleId", value: "consoleId", languageId: "languageId", companyId: "companyId" });
        this.consoleList = this.cs.removeDuplicatesFromArrayList(this.consoleList, "value");
        this.consoleList = this.consoleList.filter((item) => item.value !== this.data[0].consoleId);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  save() {
    this.spin.show();
    for (let i = 0; i < this.selecetedTrasnfer.length; i++) {
      this.selecetedTrasnfer[i].fromConsoleId = this.selecetedTrasnfer[i].consoleId;
      this.selecetedTrasnfer[i].houseAirwayBill = this.selecetedTrasnfer[i].houseAirwayBill;
      this.selecetedTrasnfer[i].toConsoleId = this.form.controls.toConsoleId.value;
    }
    this.service.Transfer(this.selecetedTrasnfer).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Updated",
          key: "br",
          detail: "Selcted Values has been Transfered successfully"
        });
        this.dialogRef.close();
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
};
_ConsoleTransferComponent.\u0275fac = function ConsoleTransferComponent_Factory(t) {
  return new (t || _ConsoleTransferComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsoleService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_ConsoleTransferComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleTransferComponent, selectors: [["app-console-transfer"]], decls: 20, vars: 8, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "mt-4", "pt-2"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "toConsoleId", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], [1, "d-flex", "float-right", "py-2", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function ConsoleTransferComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Transfer Console");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "p", 9);
    \u0275\u0275text(13, "To Console");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 13);
    \u0275\u0275listener("click", function ConsoleTransferComponent_Template_button_click_18_listener() {
      return ctx.save();
    });
    \u0275\u0275text(19, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c011));
    \u0275\u0275property("options", ctx.consoleList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(7, _c011));
  }
}, dependencies: [Dropdown, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=console-transfer.component.css.map */"] });
var ConsoleTransferComponent = _ConsoleTransferComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleTransferComponent, { className: "ConsoleTransferComponent", filePath: "src\\app\\main\\airport\\console\\console-transfer\\console-transfer.component.ts", lineNumber: 18 });
})();

// src/app/main/airport/console/console-edit/console-edit.component.ts
var _c012 = () => ({ "width": "100%" });
var _c15 = () => ({ "width": "190rem" });
var _c25 = () => ({ width: "180" });
function ConsoleEditComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ConsoleEditComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.transfer());
    });
    \u0275\u0275text(1, "Transfer");
    \u0275\u0275elementEnd();
  }
}
function ConsoleEditComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 26)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleEditComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 26)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleEditComponent_ng_template_31_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 32);
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
function ConsoleEditComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 27);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsoleEditComponent_ng_template_31_th_3_Template, 3, 3, "th", 29);
    \u0275\u0275elementStart(4, "th", 30);
    \u0275\u0275text(5, " Actions ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const columns_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", columns_r5);
  }
}
function ConsoleEditComponent_ng_template_32_td_3_ng_container_1_Template(rf, ctx) {
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
function ConsoleEditComponent_ng_template_32_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsoleEditComponent_ng_template_32_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsoleEditComponent_ng_template_32_td_3_ng_container_1_Template, 2, 1, "ng-container", 42)(2, ConsoleEditComponent_ng_template_32_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function ConsoleEditComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275element(2, "p-tableCheckbox", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsoleEditComponent_ng_template_32_td_3_Template, 4, 2, "td", 35);
    \u0275\u0275elementStart(4, "td", 36)(5, "img", 37);
    \u0275\u0275listener("click", function ConsoleEditComponent_ng_template_32_Template_img_click_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const op_r10 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(op_r10.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-overlayPanel", null, 1)(8, "div", 38)(9, "button", 39);
    \u0275\u0275listener("click", function ConsoleEditComponent_ng_template_32_Template_button_click_9_listener() {
      const rowData_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const op_r10 = \u0275\u0275reference(7);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.editItem("Edit", rowData_r8);
      return \u0275\u0275resetView(op_r10.hide());
    });
    \u0275\u0275element(10, "img", 40);
    \u0275\u0275text(11, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 39);
    \u0275\u0275listener("click", function ConsoleEditComponent_ng_template_32_Template_button_click_12_listener() {
      const rowData_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(rowData_r8));
    });
    \u0275\u0275element(13, "img", 41);
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r11 = ctx.columns;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r2.selectedConsole[0] === rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r11);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c25));
  }
}
function ConsoleEditComponent_ng_template_33_Template(rf, ctx) {
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
var _ConsoleEditComponent = class _ConsoleEditComponent {
  constructor(cs, spin, route, router, path, fb, service, numberRangeService, messageService, cas, auth, dialog, datePipe) {
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
    this.datePipe = datePipe;
    this.active = 0;
    this.status = [];
    this.selectedConsole = [];
    this.form = this.fb.group({
      actualCurrency: [],
      actualValue: [],
      airportOriginCode: [],
      bondedId: [],
      companyId: [],
      companyName: [],
      consigneeCivilId: [],
      consigneeName: [],
      consignmentCurrency: [],
      consignmentValue: [],
      consoleId: [],
      countryOfOrigin: [],
      createdBy: [],
      createdOn: [],
      currency: [],
      customsCurrency: [],
      customsKd: [],
      customsValue: [],
      declaredValue: [],
      deletionIndicator: [],
      description: [],
      eventCode: [],
      eventText: [],
      eventTimestamp: [],
      expectedDuty: [],
      finalDestination: [],
      freightCharges: [],
      freightCurrency: [],
      goodsDescription: [],
      goodsType: [],
      grossWeight: [],
      houseAirwayBill: [],
      hsCode: [],
      iataKd: [],
      pieceId: [],
      pieceItemId: [],
      incoTerms: [],
      invoiceDate: [],
      invoiceNumber: [],
      invoiceSupplierName: [],
      invoiceType: [],
      isConsolidatedShipment: [],
      isPendingShipment: [],
      isSplitBillOfLading: [],
      landedQuantity: [],
      languageDescription: [],
      languageId: [],
      manifestedGrossWeight: [],
      manifestedQuantity: [],
      masterAirwayBill: [],
      netWeight: [],
      noOfPackageMawb: [],
      noOfPieceHawb: [],
      notifyParty: [],
      partnerHouseAirwayBill: [],
      partnerId: [],
      partnerMasterAirwayBill: [],
      partnerName: [],
      partnerType: [],
      paymentType: [],
      productId: [],
      productName: [],
      quantity: [],
      referenceField1: [],
      referenceField10: [],
      referenceField11: [],
      referenceField12: [],
      referenceField13: [],
      referenceField14: [],
      referenceField15: [],
      referenceField16: [],
      referenceField17: [],
      referenceField18: [],
      referenceField19: [],
      referenceField2: [],
      referenceField20: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      selectedConsole: [],
      remarks: [],
      serviceTypeId: [],
      serviceTypeName: [],
      shipmentBagId: [],
      shipperId: [],
      shipperName: [],
      specialApprovalValue: [],
      statusId: [],
      statusText: [],
      statusTimestamp: [],
      subProductId: [],
      subProductName: [],
      tareWeight: [],
      totalQuantity: [],
      updatedBy: [],
      updatedOn: [],
      volume: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.cols = [];
    this.target = [];
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
  onChange() {
    const choosen = this.selectedConsole[this.selectedConsole.length - 1];
    this.selectedConsole.length = 0;
    this.selectedConsole.push(choosen);
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Mid-Mile", "Console", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.callTableHeader();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    this.form.controls.partnerMasterAirwayBill.disable();
    this.form.controls.statusText.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.subProductId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
      this.form.controls.statusId.disable();
    }
  }
  callTableHeader() {
    this.cols = [
      { field: "consoleId", header: "Console No" },
      { field: "masterAirwayBill", header: "MAWB" },
      { field: "houseAirwayBill", header: "Consginment No" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "description", header: "Commodity" },
      { field: "quantity", header: "No of Piece" },
      { field: "countryOfOrigin", header: "Origin" },
      { field: "grossWeight", header: "Weight" },
      { field: "airportOriginCode", header: "Airport Origin Code" },
      { field: "hsCode", header: "HS Code" },
      { field: "consigneeName", header: "Consignee Name" },
      { field: "consignmentValue", header: "Consignment Value" },
      { field: "consignmentCurrency", header: "Consignment Currency" },
      { field: "customsValue", header: "Customs Value" },
      { field: "iata", header: "IATA Charges" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [];
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
  removeItem(index) {
    this.subProductArray.splice(index, 1);
  }
  fill(line) {
    this.form.patchValue(line);
    this.spin.show();
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.partnerMasterAirwayBill = [line.partnerMasterAirwayBill];
    this.service.search(obj).subscribe({
      next: (res) => {
        this.subProductArray = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
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
      if (this.selectedConsole.length == 0) {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          key: "br",
          detail: "Kindly select any row"
        });
        return;
      }
      this.spin.show();
      this.selectedConsole.forEach((x) => {
        x.eventCode = 10;
      });
      const a = this.subProductArray.filter((x) => x.eventCode == 10);
      console.log(a);
      console.log(this.subProductArray.length);
      this.service.Update(this.selectedConsole).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].consoleId + " has been updated successfully"
          });
          if (this.subProductArray.length == a.length) {
            this.router.navigate(["/main/airport/console"]);
          } else {
            setTimeout(() => {
              this.fill(this.pageToken.line);
            }, 2e3);
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  editItem(data, item) {
    const dialogRef = this.dialog.open(ConsoleEditpopupComponent, {
      disableClose: true,
      width: "70%",
      //height: '50%',
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { pageflow: data, code: item }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.subProductArray.splice(item, 0);
        this.subProductArray.splice(item, 1, result);
        this.subProductArray = [...this.subProductArray];
      }
    });
  }
  transfer() {
    if (this.selectedConsole.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    }
    const dialogRef = this.dialog.open(ConsoleTransferComponent, {
      disableClose: true,
      width: "70%",
      height: "40%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: this.selectedConsole
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fill(this.pageToken.line);
      }
    });
  }
  downloadExcel() {
    let exportData = [];
    if (this.selectedConsole && this.selectedConsole.length > 0) {
      exportData = this.selectedConsole.map((item) => {
        const exportItem = {};
        this.cols.forEach((col) => {
          if (col.format == "date") {
            exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
          } else {
            exportItem[col.header] = item[col.field];
          }
        });
        this.target.forEach((col) => {
          if (col.format && col.format === "date") {
            exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
          } else {
            exportItem[col.header] = item[col.field];
          }
        });
        return exportItem;
      });
    } else {
      exportData = this.subProductArray.map((item) => {
        const exportItem = {};
        this.cols.forEach((col) => {
          if (col.format == "date") {
            exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
          } else {
            exportItem[col.header] = item[col.field];
          }
        });
        this.target.forEach((col) => {
          if (col.format && col.format === "date") {
            exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
          } else {
            exportItem[col.header] = item[col.field];
          }
        });
        return exportItem;
      });
    }
    this.cs.downloadExcel(exportData, "Console", "Console ID");
  }
};
_ConsoleEditComponent.\u0275fac = function ConsoleEditComponent_Factory(t) {
  return new (t || _ConsoleEditComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsoleService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe));
};
_ConsoleEditComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleEditComponent, selectors: [["app-console-edit"]], decls: 37, vars: 27, consts: [["ccrTag", ""], ["op", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "class", "buttom1 bgBlack text-white ml-2", 3, "click", 4, "ngIf"], [1, "mx-auto", "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-3", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "statusText", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 23rem)", "sortField", "createdOn", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "sortOrder", "selection", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/airport/console", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "ml-2", 3, "click"], [1, "text-danger"], ["pFrozenColumn", "", 2, "width", "5rem"], [1, "pl-3"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], ["pFrozenColumn", "", "alignFrozen", "right", 2, "width", "5rem"], [3, "pSortableColumn"], [3, "field"], ["pFrozenColumn", "", 2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [4, "ngFor", "ngForOf"], ["pFrozenColumn", "", "alignFrozen", "right", 2, "padding-left", "1.5rem !important"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/edit.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/deletetool.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function ConsoleEditComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275template(5, ConsoleEditComponent_button_5_Template, 2, 0, "button", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "form", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "p", 12);
    \u0275\u0275text(12, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "p-dropdown", 13);
    \u0275\u0275template(14, ConsoleEditComponent_mat_error_14_Template, 3, 1, "mat-error", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "p", 12);
    \u0275\u0275text(17, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "p-dropdown", 15);
    \u0275\u0275template(19, ConsoleEditComponent_mat_error_19_Template, 3, 1, "mat-error", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "p", 12);
    \u0275\u0275text(22, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "p", 12);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 18)(29, "p-table", 19, 0);
    \u0275\u0275twoWayListener("selectionChange", function ConsoleEditComponent_Template_p_table_selectionChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedConsole, $event) || (ctx.selectedConsole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(31, ConsoleEditComponent_ng_template_31_Template, 6, 1, "ng-template", 20)(32, ConsoleEditComponent_ng_template_32_Template, 15, 7, "ng-template", 21)(33, ConsoleEditComponent_ng_template_33_Template, 4, 1, "ng-template", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 23)(35, "button", 24);
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Console - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow == "Edit");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c012));
    \u0275\u0275property("options", ctx.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c012));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c012));
    \u0275\u0275property("options", ctx.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(25, _c012));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("companyId"));
    \u0275\u0275advance(10);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.subProductArray)("scrollable", true)("sortOrder", -1);
    \u0275\u0275twoWayProperty("selection", ctx.selectedConsole);
    \u0275\u0275property("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(26, _c15));
  }
}, dependencies: [NgForOf, NgIf, RouterLink, PrimeTemplate, Table, SortableColumn, FrozenColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, OverlayPanel, MatError, MatMenuItem, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n/*# sourceMappingURL=console-edit.component.css.map */"] });
var ConsoleEditComponent = _ConsoleEditComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleEditComponent, { className: "ConsoleEditComponent", filePath: "src\\app\\main\\airport\\console\\console-edit\\console-edit.component.ts", lineNumber: 23 });
})();

// src/app/main/airport/ccr/ccr-editpopup/ccr-editpopup.component.ts
var _c013 = () => ({ "width": "100%" });
var _CcrEditpopupComponent = class _CcrEditpopupComponent {
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
      actualCurrency: [],
      airportOriginCode: [, Validators.required],
      bondedId: [],
      ccrId: [],
      companyId: [],
      companyName: [],
      consigneeCivilId: [],
      consigneeName: [],
      consignmentCurrency: [, Validators.required],
      consignmentValue: [],
      consignmentValueLocal: [],
      consoleId: [],
      countryOfOrigin: [],
      createdBy: [],
      createdOn: [],
      currency: [],
      customsCcrNo: [],
      customsKd: [, Validators.required],
      customsValue: [],
      customsInsurance: [],
      calculatedTotalDuty: [],
      declaredValue: [],
      deletionIndicator: [],
      description: [],
      duty: [],
      dduCharge: [],
      eventCode: [],
      eventText: [],
      eventTimestamp: [],
      exemptionBeneficiary: [],
      exemptionFor: [],
      exemptionReference: [],
      exchangeRate: [],
      finalDestination: [],
      flightArrivalTime: [],
      flightNo: [],
      freightCharges: [],
      freightCurrency: [],
      goodsDescription: [],
      goodsType: [],
      grossWeight: [],
      houseAirwayBill: [],
      hsCode: [],
      iata: [, Validators.required],
      addIata: [],
      addInsurance: [],
      incoTerms: [],
      invoiceDate: [],
      invoiceNumber: [],
      invoiceSupplierName: [],
      invoiceType: [],
      isConsolidatedShipment: [],
      isExempted: [],
      isPendingShipment: [],
      isSplitBillOfLading: [],
      landedQuantity: [],
      languageDescription: [],
      languageId: [],
      manifestedGrossWeight: [],
      manifestedQuantity: [],
      manufacturer: [],
      masterAirwayBill: [],
      netWeight: [],
      noOfPackageMawb: [],
      noOfPieceHawb: [],
      notifyParty: [],
      packageType: [],
      partnerHouseAirwayBill: [],
      partnerId: [],
      partnerMasterAirwayBill: [],
      partnerName: [],
      partnerType: [],
      paymentType: [],
      pieceId: [],
      pieceItemId: [],
      primaryDo: [],
      productId: [],
      productName: [],
      quantity: [],
      referenceField1: [],
      referenceField10: [],
      referenceField11: [],
      referenceField12: [],
      referenceField13: [],
      referenceField14: [],
      referenceField15: [],
      referenceField16: [],
      referenceField17: [],
      referenceField18: [],
      referenceField19: [],
      referenceField2: [],
      referenceField20: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      remarks: [],
      secondaryDo: [],
      serviceTypeId: [],
      serviceTypeName: [],
      shipperId: [],
      shipperName: [],
      specialApprovalValue: [],
      statusId: [],
      statusTimestamp: [],
      subProductId: [],
      subProductName: [],
      tareWeight: [],
      totalDuty: [],
      totalQuantity: [],
      updatedBy: [],
      updatedOn: [],
      volume: []
    });
    this.languageIdList = [];
    this.companyIdList = [];
    this.countryIdList = [];
    this.mawbList = [];
    this.hawbList = [];
    this.iataList = [];
    this.originCodeList = [];
    this.currencyIdList = [];
    this.consignorIdList = [];
    this.selecetedTrasnfer = [];
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.currency.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.iata.url
    ]).subscribe({
      next: (results) => {
        this.currencyIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.currency.key);
        this.countryIdList = this.cas.forLanguageFilter(results[1], this.cas.dropdownlist.setup.country.key);
        this.consignorIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.consignor.key);
        this.iataList = this.cas.forLanguageFilterWithoutKey(results[3], this.cas.dropdownlist.setup.iata.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  ngOnInit() {
    this.dropdownlist();
    if (this.data.pageflow == "Edit") {
      this.form.patchValue(this.data.code);
      this.form.controls.houseAirwayBill.disable();
      this.form.controls.masterAirwayBill.disable();
      this.form.controls.partnerHouseAirwayBill.disable();
      this.form.controls.partnerMasterAirwayBill.disable();
    }
  }
  save() {
    if (this.form.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    }
    this.dialogRef.close(this.form.getRawValue());
  }
};
_CcrEditpopupComponent.\u0275fac = function CcrEditpopupComponent_Factory(t) {
  return new (t || _CcrEditpopupComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CcrService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_CcrEditpopupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CcrEditpopupComponent, selectors: [["app-ccr-editpopup"]], decls: 149, vars: 21, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4", "pt-2"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "formControlName", "houseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "masterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "partnerHouseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "customsCcrNo", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["maxlength", "50", "pInputText", "", "formControlName", "airportOriginCode", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["formControlName", "countryOfOrigin", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "hsCode", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "goodsDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "invoiceNumber", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "invoiceType", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "invoiceDate", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "invoiceSupplierName", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "isExempted", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "exemptionFor", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "exemptionBeneficiary", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "exemptionReference", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "consigneeName", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "consignmentValue", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["placeholder", "Select", "filter", "true", "formControlName", "consignmentCurrency", "appendTo", "body", 3, "options", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "exchangeRate", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "customsInsurance", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "duty", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "consignmentValueLocal", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "addIATA", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "addInsurance", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "customsValue", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "calculatedTotalDuty", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "dduCharge", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "specialApprovalCharge", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "totalDuty", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "customsKd", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "iata", "appendTo", "body", 3, "options", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "float-right", "py-2"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function CcrEditpopupComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, " CCR - Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "Consignment No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7)(13, "p", 8);
    \u0275\u0275text(14, "MWAB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 7)(17, "p", 8);
    \u0275\u0275text(18, "Partner HWAB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 7)(21, "p", 8);
    \u0275\u0275text(22, "Partner MWAB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 7)(25, "p", 8);
    \u0275\u0275text(26, "Customs CCR No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 7)(29, "p", 14);
    \u0275\u0275text(30, "Airport Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 7)(33, "p", 8);
    \u0275\u0275text(34, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "p-dropdown", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 7)(37, "p", 8);
    \u0275\u0275text(38, "HS Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 7)(41, "p", 8);
    \u0275\u0275text(42, "Commodity ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 7)(45, "p", 8);
    \u0275\u0275text(46, "Invoice No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 7)(49, "p", 8);
    \u0275\u0275text(50, "Invoice Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 7)(53, "p", 8);
    \u0275\u0275text(54, "Invoice Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 7)(57, "p", 8);
    \u0275\u0275text(58, "Invoice Supplier Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 7)(61, "p", 8);
    \u0275\u0275text(62, "Is Exempted");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 7)(65, "p", 8);
    \u0275\u0275text(66, "Exempted For");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 7)(69, "p", 8);
    \u0275\u0275text(70, "Exempted Beneficiary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 7)(73, "p", 8);
    \u0275\u0275text(74, "Exempted Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 7)(77, "p", 8);
    \u0275\u0275text(78, "Consignee Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 7)(81, "p", 8);
    \u0275\u0275text(82, "Consignment Value ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 7)(85, "p", 14);
    \u0275\u0275text(86, "Consignment Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "p-dropdown", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 7)(89, "p", 8);
    \u0275\u0275text(90, "Exchange Rate ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 7)(93, "p", 8);
    \u0275\u0275text(94, "Customs Insurance ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(95, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 7)(97, "p", 8);
    \u0275\u0275text(98, "Duty ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 7)(101, "p", 8);
    \u0275\u0275text(102, "Consignment Value Local ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 7)(105, "p", 8);
    \u0275\u0275text(106, "Add IATA ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 7)(109, "p", 8);
    \u0275\u0275text(110, "Add Insurance ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(111, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 7)(113, "p", 8);
    \u0275\u0275text(114, "Custom ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(115, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 7)(117, "p", 8);
    \u0275\u0275text(118, "Calculated Total Duty ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(119, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 7)(121, "p", 8);
    \u0275\u0275text(122, "DDU Charge ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(123, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 7)(125, "p", 8);
    \u0275\u0275text(126, "Spl Approval Charge ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(127, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 7)(129, "p", 8);
    \u0275\u0275text(130, "Duty From Bayan ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(131, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 7)(133, "p", 14);
    \u0275\u0275text(134, "Customs KD");
    \u0275\u0275elementEnd();
    \u0275\u0275element(135, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 7)(137, "p", 14);
    \u0275\u0275text(138, "IATA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(139, "p-dropdown", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "div", 7)(141, "p", 8);
    \u0275\u0275text(142, "Created On ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(143, "input", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "div", 44)(145, "button", 45);
    \u0275\u0275text(146, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "button", 46);
    \u0275\u0275listener("click", function CcrEditpopupComponent_Template_button_click_147_listener() {
      return ctx.save();
    });
    \u0275\u0275text(148, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(30);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c013));
    \u0275\u0275property("options", ctx.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(16, _c013));
    \u0275\u0275advance(52);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(17, _c013));
    \u0275\u0275property("options", ctx.currencyIdList)("panelStyle", \u0275\u0275pureFunction0(18, _c013));
    \u0275\u0275advance(48);
    \u0275\u0275property("ngClass", ((tmp_8_0 = ctx.form.get("customsKd")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.form.get("customsKd")) == null ? null : tmp_8_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c013));
    \u0275\u0275property("options", ctx.iataList)("panelStyle", \u0275\u0275pureFunction0(20, _c013));
  }
}, dependencies: [NgClass, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 20rem);\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=ccr-editpopup.component.css.map */"] });
var CcrEditpopupComponent = _CcrEditpopupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CcrEditpopupComponent, { className: "CcrEditpopupComponent", filePath: "src\\app\\main\\airport\\ccr\\ccr-editpopup\\ccr-editpopup.component.ts", lineNumber: 18 });
})();

// src/app/main/airport/ccr/ccr-edit/ccr-edit.component.ts
var _c014 = () => ({ "width": "100%" });
var _c16 = () => ({ "width": "350rem" });
var _c26 = () => ({ width: "180" });
function CcrEditComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 29)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function CcrEditComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 29)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function CcrEditComponent_ng_template_40_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r3.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r3.field);
  }
}
function CcrEditComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 30);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CcrEditComponent_ng_template_40_th_3_Template, 3, 3, "th", 32);
    \u0275\u0275elementStart(4, "th", 33);
    \u0275\u0275text(5, " Actions ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", columns_r4);
  }
}
function CcrEditComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r6 = \u0275\u0275nextContext().$implicit;
    const rowData_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r7[col_r6.field], " ");
  }
}
function CcrEditComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r7.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CcrEditComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CcrEditComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 45)(2, CcrEditComponent_ng_template_41_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const dateTemplate_r8 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r6.format !== "date")("ngIfElse", dateTemplate_r8);
  }
}
function CcrEditComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275element(2, "p-tableCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CcrEditComponent_ng_template_41_td_3_Template, 4, 2, "td", 38);
    \u0275\u0275elementStart(4, "td", 39)(5, "img", 40);
    \u0275\u0275listener("click", function CcrEditComponent_ng_template_41_Template_img_click_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const op_r9 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(op_r9.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-overlayPanel", null, 1)(8, "div", 41)(9, "button", 42);
    \u0275\u0275listener("click", function CcrEditComponent_ng_template_41_Template_button_click_9_listener() {
      const rowData_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const op_r9 = \u0275\u0275reference(7);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.editItem("Edit", rowData_r7);
      return \u0275\u0275resetView(op_r9.hide());
    });
    \u0275\u0275element(10, "img", 43);
    \u0275\u0275text(11, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 42);
    \u0275\u0275listener("click", function CcrEditComponent_ng_template_41_Template_button_click_12_listener() {
      const rowData_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeItem(rowData_r7));
    });
    \u0275\u0275element(13, "img", 44);
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const rowData_r7 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r1.selectedCcr[0] === rowData_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c26));
  }
}
function CcrEditComponent_ng_template_42_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.calculateFooterTotal(col_r11.field), " ");
  }
}
function CcrEditComponent_ng_template_42_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "td");
    \u0275\u0275elementContainerEnd();
  }
}
function CcrEditComponent_ng_template_42_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CcrEditComponent_ng_template_42_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 46)(2, CcrEditComponent_ng_template_42_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 46);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r11.showFooter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !col_r11.showFooter);
  }
}
function CcrEditComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "td");
    \u0275\u0275template(2, CcrEditComponent_ng_template_42_ng_container_2_Template, 3, 2, "ng-container", 38);
    \u0275\u0275element(3, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", columns_r12);
  }
}
function CcrEditComponent_ng_template_43_Template(rf, ctx) {
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
var _CcrEditComponent = class _CcrEditComponent {
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
    this.selectedCcr = [];
    this.form = this.fb.group({
      actualCurrency: [],
      airportOriginCode: [],
      bondedId: [],
      ccrId: [],
      companyId: [],
      companyName: [],
      consigneeCivilId: [],
      consigneeName: [],
      consignmentCurrency: [],
      consignmentValue: [],
      consoleId: [],
      countryOfOrigin: [],
      createdBy: [],
      createdOn: [],
      currency: [],
      customsCcrNo: [],
      customsKd: [],
      declaredValue: [],
      deletionIndicator: [],
      description: [],
      eventCode: [],
      eventText: [],
      eventTimestamp: [],
      exemptionBeneficiary: [],
      exemptionFor: [],
      exemptionReference: [],
      finalDestination: [],
      flightArrivalTime: [],
      flightNo: [],
      freightCharges: [],
      freightCurrency: [],
      goodsDescription: [],
      goodsType: [],
      grossWeight: [],
      houseAirwayBill: [],
      hsCode: [],
      iataKd: [],
      incoTerms: [],
      invoiceDate: [],
      invoiceNumber: [],
      invoiceSupplierName: [],
      invoiceType: [],
      isConsolidatedShipment: [],
      isExempted: [],
      isPendingShipment: [],
      isSplitBillOfLading: [],
      landedQuantity: [],
      languageDescription: [],
      languageId: [],
      manifestedGrossWeight: [],
      manifestedQuantity: [],
      manufacturer: [],
      masterAirwayBill: [],
      netWeight: [],
      noOfPackageMawb: [],
      noOfPieceHawb: [],
      notifyParty: [],
      packageType: [],
      partnerHouseAirwayBill: [],
      partnerId: [],
      partnerMasterAirwayBill: [],
      partnerName: [],
      partnerType: [],
      paymentType: [],
      pieceId: [],
      pieceItemId: [],
      primaryDo: [],
      productId: [],
      productName: [],
      quantity: [],
      referenceField1: [],
      referenceField10: [],
      referenceField11: [],
      referenceField12: [],
      referenceField13: [],
      referenceField14: [],
      referenceField15: [],
      referenceField16: [],
      referenceField17: [],
      referenceField18: [],
      referenceField19: [],
      referenceField2: [],
      referenceField20: [],
      referenceField3: [],
      referenceField4: [],
      referenceField5: [],
      referenceField6: [],
      referenceField7: [],
      referenceField8: [],
      referenceField9: [],
      remarks: [],
      secondaryDo: [],
      serviceTypeId: [],
      serviceTypeName: [],
      shipperId: [],
      shipperName: [],
      specialApprovalValue: [],
      statusId: [],
      statusText: [],
      statusTimestamp: [],
      subProductId: [],
      subProductName: [],
      tareWeight: [],
      totalDuty: [],
      totalQuantity: [],
      updatedBy: [],
      updatedOn: [],
      volume: [],
      iata: [],
      dduCharge: [],
      customsValue: [],
      specialApprovalCharge: [],
      exchangeRate: [],
      consignmentValueLocal: [],
      duty: ["5%"],
      addInsurance: [],
      customsInsurance: [],
      addIATA: [],
      actualDuty: [],
      calculatedTotalDuty: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.cols = [];
    this.target = [];
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
  onChange() {
    const choosen = this.selectedCcr[this.selectedCcr.length - 1];
    this.selectedCcr.length = 0;
    this.selectedCcr.push(choosen);
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Mid-Mile", "CCR", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.callTableHeader();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.ccrId.disable();
      this.form.controls.statusId.disable();
      this.form.controls.statusText.disable();
    }
  }
  callTableHeader() {
    this.cols = [
      { field: "masterAirwayBill", header: "MAWB", showFooter: false },
      { field: "houseAirwayBill", header: "Consignment No", showFooter: false },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB", showFooter: false },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB", showFooter: false },
      { field: "customsCcrNo", header: "Customs CCR No", showFooter: false },
      { field: "countryOfOrigin", header: "Origin", showFooter: false },
      { field: "airportOriginCode", header: "Airport Origin Code", showFooter: false },
      { field: "hsCode", header: "HS Code", showFooter: false },
      { field: "goodsDescription", header: "Commodity", showFooter: false },
      { field: "invoiceNumber", header: "Invoice No", showFooter: false },
      { field: "invoiceType", header: "Invoice Type", showFooter: false },
      { field: "invoiceDate", header: "Invoice Date", showFooter: false },
      { field: "invoiceSupplierName", header: "Invoice Supplier Name", showFooter: false },
      { field: "isExempted", header: "Is Exempted", showFooter: false },
      { field: "exemptionFor", header: "Exempted For", showFooter: false },
      { field: "exemptionBeneficiary", header: "Exempted Beneficiary", showFooter: false },
      { field: "exemptionReference", header: "Exempted Reference", showFooter: false },
      { field: "consigneeName", header: "Consignee Name", showFooter: false },
      { field: "consignmentValue", header: "Consignment Value", showFooter: false },
      { field: "consignmentCurrency", header: "Consignment Currency", showFooter: false },
      { field: "exchangeRate", header: "Exchange Rate", showFooter: false },
      { field: "iata", header: "IATA", showFooter: false },
      { field: "customsInsurance", header: "Customs Insurance", showFooter: false },
      { field: "duty", header: "Duty", showFooter: true },
      { field: "consignmentValueLocal", header: "Consignment Value Local", showFooter: false },
      { field: "addIata", header: "Add IATA", showFooter: false },
      { field: "addInsurance", header: "Add Insurance", showFooter: false },
      { field: "customsValue", header: "Custom", showFooter: false },
      { field: "calculatedTotalDuty", header: "Calculated Total duty", showFooter: true },
      { field: "dduCharge", header: "DDU Charge", showFooter: false },
      { field: "specialApprovalCharge", header: "Spl Approval Charge", showFooter: false },
      { field: "totalDuty", header: "Duty From Bayan", showFooter: true },
      { field: "createdOn", header: "Created On", format: "date", showFooter: false }
    ];
    this.target = [];
  }
  dropdownlist() {
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  addValues() {
  }
  removeItem(index) {
    this.subProductArray.splice(index, 1);
  }
  fill(line) {
    this.spin.show();
    this.form.patchValue(this.pageToken.line);
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.ccrId = [line.ccrId];
    this.service.search(obj).subscribe({
      next: (res) => {
        this.subProductArray = res;
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
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
      if (this.selectedCcr.length == 0) {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          key: "br",
          detail: "Kindly select any row"
        });
        return;
      }
      this.spin.show();
      const a = this.subProductArray.filter((x) => x.eventCode == 10);
      this.service.UpdateList(this.selectedCcr).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].consoleId + " has been updated successfully"
          });
          if (this.subProductArray.length == a.length) {
            this.router.navigate(["/main/airport/ccr"]);
          } else {
            setTimeout(() => {
              this.fill(this.pageToken.line);
            }, 2e3);
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  editItem(data, item) {
    const dialogRef = this.dialog.open(CcrEditpopupComponent, {
      disableClose: true,
      width: "70%",
      //height: '50%',
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { pageflow: data, code: item }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.subProductArray.splice(item, 0);
        this.subProductArray.splice(item, 1, result);
        this.subProductArray = [...this.subProductArray];
      }
    });
  }
  transfer() {
    if (this.selectedCcr.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    }
    const dialogRef = this.dialog.open(ConsoleTransferComponent, {
      disableClose: true,
      width: "70%",
      height: "40%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: this.selectedCcr
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.subProductArray.push(result);
      }
    });
  }
  calculateFooterTotal(field) {
    let total = 0;
    this.subProductArray.forEach((item) => {
      total += Number.parseFloat(item[field]) || 0;
    });
    return parseFloat(total.toFixed(3));
  }
};
_CcrEditComponent.\u0275fac = function CcrEditComponent_Factory(t) {
  return new (t || _CcrEditComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CcrService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialog));
};
_CcrEditComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CcrEditComponent, selectors: [["app-ccr-edit"]], decls: 49, vars: 27, consts: [["ccrTag", ""], ["op", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "mx-auto", "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-3", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "ccrId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "primaryDo", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "secondaryDo", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "statusText", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 28.8rem)", "sortField", "createdOn", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "sortOrder", "selection", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], ["pTemplate", "emptymessage"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/airport/ccr", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], ["pFrozenColumn", "", 2, "width", "5rem"], [1, "pl-3"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], ["pFrozenColumn", "", "alignFrozen", "right", 2, "width", "5rem"], [3, "pSortableColumn"], [3, "field"], ["pFrozenColumn", "", 2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [4, "ngFor", "ngForOf"], ["pFrozenColumn", "", "alignFrozen", "right", 2, "padding-left", "1.5rem !important"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/edit.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/deletetool.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "my-2", "w-100", "pl-3"]], template: function CcrEditComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "button", 6);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 7)(8, "form", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "p", 12);
    \u0275\u0275text(13, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 13);
    \u0275\u0275template(15, CcrEditComponent_mat_error_15_Template, 3, 1, "mat-error", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "p", 12);
    \u0275\u0275text(18, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 15);
    \u0275\u0275template(20, CcrEditComponent_mat_error_20_Template, 3, 1, "mat-error", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11)(22, "p", 12);
    \u0275\u0275text(23, "CCR ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 11)(26, "p", 12);
    \u0275\u0275text(27, "Primary DO");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 11)(30, "p", 12);
    \u0275\u0275text(31, "Secondary DO");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 11)(34, "p", 12);
    \u0275\u0275text(35, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 20)(38, "p-table", 21, 0);
    \u0275\u0275twoWayListener("selectionChange", function CcrEditComponent_Template_p_table_selectionChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedCcr, $event) || (ctx.selectedCcr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(40, CcrEditComponent_ng_template_40_Template, 6, 1, "ng-template", 22)(41, CcrEditComponent_ng_template_41_Template, 15, 7, "ng-template", 23)(42, CcrEditComponent_ng_template_42_Template, 4, 1, "ng-template", 24)(43, CcrEditComponent_ng_template_43_Template, 4, 1, "ng-template", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 26)(45, "button", 27);
    \u0275\u0275text(46, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 28);
    \u0275\u0275listener("click", function CcrEditComponent_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.save());
    });
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("CCR - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c014));
    \u0275\u0275property("options", ctx.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(23, _c014));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c014));
    \u0275\u0275property("options", ctx.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(25, _c014));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("companyId"));
    \u0275\u0275advance(18);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.subProductArray)("scrollable", true)("sortOrder", -1);
    \u0275\u0275twoWayProperty("selection", ctx.selectedCcr);
    \u0275\u0275property("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(26, _c16));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}, dependencies: [NgForOf, NgIf, RouterLink, PrimeTemplate, Table, SortableColumn, FrozenColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, OverlayPanel, MatError, MatMenuItem, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n.scrollHorizontal[_ngcontent-%COMP%] {\n  width: 115rem !important;\n  overflow-x: scroll !important;\n}\n.scroll2[_ngcontent-%COMP%] {\n  overflow-y: scroll !important;\n  height: calc(100vh - 27.2px) !important;\n}\n/*# sourceMappingURL=ccr-edit.component.css.map */"] });
var CcrEditComponent = _CcrEditComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CcrEditComponent, { className: "CcrEditComponent", filePath: "src\\app\\main\\airport\\ccr\\ccr-edit\\ccr-edit.component.ts", lineNumber: 21 });
})();

// src/app/main/airport/pre-alert-manifest/pre-alert-manifest-indicator/pre-alert-manifest-indicator.component.ts
function PreAlertManifestIndicatorComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.preAlertManifestIndicatorTable[0].declaredValue, " ");
  }
}
function PreAlertManifestIndicatorComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Null");
    \u0275\u0275elementEnd();
  }
}
function PreAlertManifestIndicatorComponent_tr_221_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const piece_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", piece_r2.partnerHouseAirwayBill, " ");
  }
}
function PreAlertManifestIndicatorComponent_tr_221_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Null");
    \u0275\u0275elementEnd();
  }
}
function PreAlertManifestIndicatorComponent_tr_221_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4, "Partner Hawb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, PreAlertManifestIndicatorComponent_tr_221_ng_container_6_Template, 2, 1, "ng-container", 13)(7, PreAlertManifestIndicatorComponent_tr_221_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const piece_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const nullOrUndefined_r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", piece_r2.partnerHouseAirwayBill !== null && piece_r2.partnerHouseAirwayBill !== void 0)("ngIfElse", nullOrUndefined_r4);
  }
}
function PreAlertManifestIndicatorComponent_tr_222_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const piece_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", piece_r5.description, " ");
  }
}
function PreAlertManifestIndicatorComponent_tr_222_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Null");
    \u0275\u0275elementEnd();
  }
}
function PreAlertManifestIndicatorComponent_tr_222_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, PreAlertManifestIndicatorComponent_tr_222_ng_container_6_Template, 2, 1, "ng-container", 13)(7, PreAlertManifestIndicatorComponent_tr_222_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const piece_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const nullOrUndefined_r7 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", piece_r5.description !== null && piece_r5.description !== void 0)("ngIfElse", nullOrUndefined_r7);
  }
}
function PreAlertManifestIndicatorComponent_tr_223_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const piece_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", piece_r8.declaredValue, " ");
  }
}
function PreAlertManifestIndicatorComponent_tr_223_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Null");
    \u0275\u0275elementEnd();
  }
}
function PreAlertManifestIndicatorComponent_tr_223_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4, "Declared Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, PreAlertManifestIndicatorComponent_tr_223_ng_container_6_Template, 2, 1, "ng-container", 13)(7, PreAlertManifestIndicatorComponent_tr_223_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const piece_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const nullOrUndefined_r10 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", piece_r8.declaredValue !== null && piece_r8.declaredValue !== void 0)("ngIfElse", nullOrUndefined_r10);
  }
}
function PreAlertManifestIndicatorComponent_tr_224_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const piece_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", piece_r11.weight, " ");
  }
}
function PreAlertManifestIndicatorComponent_tr_224_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Null");
    \u0275\u0275elementEnd();
  }
}
function PreAlertManifestIndicatorComponent_tr_224_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, PreAlertManifestIndicatorComponent_tr_224_ng_container_6_Template, 2, 1, "ng-container", 13)(7, PreAlertManifestIndicatorComponent_tr_224_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const piece_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const nullOrUndefined_r13 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", piece_r11.weight !== null && piece_r11.weight !== void 0)("ngIfElse", nullOrUndefined_r13);
  }
}
function PreAlertManifestIndicatorComponent_tr_225_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const piece_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", piece_r14.hsCode, " ");
  }
}
function PreAlertManifestIndicatorComponent_tr_225_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Null");
    \u0275\u0275elementEnd();
  }
}
function PreAlertManifestIndicatorComponent_tr_225_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, PreAlertManifestIndicatorComponent_tr_225_ng_container_6_Template, 2, 1, "ng-container", 13)(7, PreAlertManifestIndicatorComponent_tr_225_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const piece_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const nullOrUndefined_r16 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r15 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", piece_r14.hsCode !== null && piece_r14.hsCode !== void 0)("ngIfElse", nullOrUndefined_r16);
  }
}
var _PreAlertManifestIndicatorComponent = class _PreAlertManifestIndicatorComponent {
  constructor(cs, spin, route, router, path, fb, consignmentService, customerService, consignorService, messageService, cas, auth, el, dialog) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.consignmentService = consignmentService;
    this.customerService = customerService;
    this.consignorService = consignorService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.el = el;
    this.dialog = dialog;
    this.cols = [];
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
    this.preAlertManifestIndicatorTable = [];
    this.selectedPreAlertManifestIndicator = [];
    this.indicator = [];
    this.reorderedIndicator = [];
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Mid-Mile", "Pre Alert Manifest", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.preAlertValidation();
  }
  callTableHeader() {
    this.cols = [
      { field: "declaredValue", header: "Declared Value" },
      { field: "consignmentId", header: "Consignment Id" },
      { field: "noOfPieceHawb", header: "No of Piece HAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "noOfPackageHawb", header: "No of Package HAWB" },
      { field: "consignmentCurrency", header: "Consignment Currency" },
      { field: "incoTerms", header: "Inco Terms" },
      { field: "countryOfOrigin", header: "Country Of Origin" },
      { field: "grossWeight", header: "Gross Weight" },
      { field: "paymentType", header: "Payment Type" },
      { field: "createdOn", header: "Created On", format: "date" },
      { field: "originDetails.name", header: "Origin Name", subChild: true },
      { field: "originDetails.phone", header: "Origin Phone No", subChild: true },
      { field: "originDetails.addressLine1", header: "Origin Address Line 1", subChild: true },
      { field: "originDetails.addressLine2", header: "Origin Address Line 2", subChild: true },
      { field: "originDetails.city", header: "Origin City", subChild: true },
      { field: "originDetails.country", header: "Origin Country", subChild: true },
      { field: "destinationDetails.name", header: "Destination Name", subChild: true },
      { field: "destinationDetails.phone", header: "Destination Phone No", subChild: true },
      { field: "destinationDetails.addressLine1", header: "Destination Address Line 1", subChild: true },
      { field: "destinationDetails.addressLine2", header: "Destination Address Line 2", subChild: true },
      { field: "destinationDetails.city", header: "Destination City", subChild: true },
      { field: "destinationDetails.country", header: "Destination Country", subChild: true },
      { field: "pieceDetails[0].partnerHouseAirwayBill", header: "Partner HAWB", subChild: true },
      { field: "pieceDetails[0].description", header: "Description", subChild: true },
      { field: "pieceDetails[0].declaredValue", header: "Declared Value", subChild: true },
      { field: "pieceDetails[0].weight", header: "Weight", subChild: true },
      { field: "pieceDetails[0].hsCode", header: "HS Code", subChild: true },
      { field: "pieceDetails[0].consignmentId", header: "Consignment ID", subChild: true }
    ];
  }
  preAlertValidation() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.houseAirwayBill = [this.pageToken.line.houseAirwayBill];
    this.consignmentService.findConsignmentPreAlertIndicator(obj).subscribe({
      next: (res) => {
        this.preAlertManifestIndicatorTable = res;
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  getNestedValue(obj, path) {
    const value = path.split(".").reduce((acc, part) => acc && acc[part], obj);
    return value === null || value === void 0 ? "Null" : value;
  }
  reorderFields(obj) {
    const reordered = {};
    const nullFields = [];
    const nonNullFields = [];
    for (const key in obj) {
      if (obj[key] === null || obj[key] === "") {
        nullFields.push({ [key]: obj[key] });
      } else {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          nonNullFields.push({ [key]: this.reorderFields(obj[key]) });
        } else if (Array.isArray(obj[key])) {
          nonNullFields.push({ [key]: obj[key].map((item) => this.reorderFields(item)) });
        } else {
          nonNullFields.push({ [key]: obj[key] });
        }
      }
    }
    nullFields.forEach((field) => Object.assign(reordered, field));
    nonNullFields.forEach((field) => Object.assign(reordered, field));
    return reordered;
  }
};
_PreAlertManifestIndicatorComponent.\u0275fac = function PreAlertManifestIndicatorComponent_Factory(t) {
  return new (t || _PreAlertManifestIndicatorComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
};
_PreAlertManifestIndicatorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreAlertManifestIndicatorComponent, selectors: [["app-pre-alert-manifest-indicator"]], decls: 229, vars: 33, consts: [["nullOrUndefined", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "mx-auto", "mt-4"], [1, "d-flex-row", "scrollNew"], [1, "componentTableHeader", "f400", "mb-0"], [1, "table"], [1, "table-style"], ["scope", "col"], [1, "table-style-body"], ["scope", "row", 2, "font-weight", "normal"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "d-flex", "float-right", "py-2", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/airport/preAlertManifest/", 1, "buttom1", "textBlack", "mx-1"], [1, "null-value"]], template: function PreAlertManifestIndicatorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 4);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "p", 7);
    \u0275\u0275text(10, "Consignment Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "table", 8)(12, "thead", 9)(13, "tr")(14, "th", 10);
    \u0275\u0275text(15, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 10);
    \u0275\u0275text(17, "Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 10);
    \u0275\u0275text(19, "Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody", 11)(21, "tr")(22, "th", 12);
    \u0275\u0275text(23, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25, "Consignment Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "tr")(29, "th", 12);
    \u0275\u0275text(30, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32, "Consignment ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "tr")(36, "th", 12);
    \u0275\u0275text(37, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39, "Country Of Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 12);
    \u0275\u0275text(44, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "tr")(51, "th", 12);
    \u0275\u0275text(52, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54, "Declared Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275template(56, PreAlertManifestIndicatorComponent_ng_container_56_Template, 2, 1, "ng-container", 13)(57, PreAlertManifestIndicatorComponent_ng_template_57_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "tr")(60, "th", 12);
    \u0275\u0275text(61, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63, "Gross Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "tr")(67, "th", 12);
    \u0275\u0275text(68, "7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70, "Inco Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "tr")(74, "th", 12);
    \u0275\u0275text(75, "8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "td");
    \u0275\u0275text(77, "No Of Package Hawb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "tr")(81, "th", 12);
    \u0275\u0275text(82, "9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "td");
    \u0275\u0275text(84, "No Of Piece Hawb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "td");
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "tr")(88, "th", 12);
    \u0275\u0275text(89, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "td");
    \u0275\u0275text(91, "Partner Hawb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "td");
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "tr")(95, "th", 12);
    \u0275\u0275text(96, "11");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "td");
    \u0275\u0275text(98, "Payment Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "td");
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(101, "p", 7);
    \u0275\u0275text(102, "Origin Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "table", 8)(104, "thead", 9)(105, "tr")(106, "th", 10);
    \u0275\u0275text(107, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "th", 10);
    \u0275\u0275text(109, "Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "th", 10);
    \u0275\u0275text(111, "Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "tbody", 11)(113, "tr")(114, "th", 12);
    \u0275\u0275text(115, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "td");
    \u0275\u0275text(117, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "td");
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "tr")(121, "th", 12);
    \u0275\u0275text(122, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "td");
    \u0275\u0275text(124, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "td");
    \u0275\u0275text(126);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "tr")(128, "th", 12);
    \u0275\u0275text(129, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "td");
    \u0275\u0275text(131, "Address Line 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "td");
    \u0275\u0275text(133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "tr")(135, "th", 12);
    \u0275\u0275text(136, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "td");
    \u0275\u0275text(138, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "td");
    \u0275\u0275text(140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "tr")(142, "th", 12);
    \u0275\u0275text(143, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "td");
    \u0275\u0275text(145, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "td");
    \u0275\u0275text(147);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "tr")(149, "th", 12);
    \u0275\u0275text(150, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "td");
    \u0275\u0275text(152, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "td");
    \u0275\u0275text(154);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(155, "p", 7);
    \u0275\u0275text(156, "Destination Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "table", 8)(158, "thead", 9)(159, "tr")(160, "th", 10);
    \u0275\u0275text(161, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "th", 10);
    \u0275\u0275text(163, "Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "th", 10);
    \u0275\u0275text(165, "Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(166, "tbody", 11)(167, "tr")(168, "th", 12);
    \u0275\u0275text(169, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "td");
    \u0275\u0275text(171, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "td");
    \u0275\u0275text(173);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "tr")(175, "th", 12);
    \u0275\u0275text(176, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "td");
    \u0275\u0275text(178, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "td");
    \u0275\u0275text(180);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(181, "tr")(182, "th", 12);
    \u0275\u0275text(183, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "td");
    \u0275\u0275text(185, "Address Line 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "td");
    \u0275\u0275text(187);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "tr")(189, "th", 12);
    \u0275\u0275text(190, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "td");
    \u0275\u0275text(192, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "td");
    \u0275\u0275text(194);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(195, "tr")(196, "th", 12);
    \u0275\u0275text(197, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "td");
    \u0275\u0275text(199, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "td");
    \u0275\u0275text(201);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(202, "tr")(203, "th", 12);
    \u0275\u0275text(204, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "td");
    \u0275\u0275text(206, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "td");
    \u0275\u0275text(208);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(209, "p", 7);
    \u0275\u0275text(210, "Piece Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "table", 8)(212, "thead", 9)(213, "tr")(214, "th", 10);
    \u0275\u0275text(215, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "th", 10);
    \u0275\u0275text(217, "Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "th", 10);
    \u0275\u0275text(219, "Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(220, "tbody", 11);
    \u0275\u0275template(221, PreAlertManifestIndicatorComponent_tr_221_Template, 9, 3, "tr", 14)(222, PreAlertManifestIndicatorComponent_tr_222_Template, 9, 3, "tr", 14)(223, PreAlertManifestIndicatorComponent_tr_223_Template, 9, 3, "tr", 14)(224, PreAlertManifestIndicatorComponent_tr_224_Template, 9, 3, "tr", 14)(225, PreAlertManifestIndicatorComponent_tr_225_Template, 9, 3, "tr", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(226, "div", 15)(227, "button", 16);
    \u0275\u0275text(228, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const nullOrUndefined_r17 = \u0275\u0275reference(58);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pre Alert Manifest - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(24);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].consignmentCurrency);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].consignmentId);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].countryOfOrigin);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 30, ctx.preAlertManifestIndicatorTable[0].createdOn, "dd-MM-yyyy HH:mm"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx.preAlertManifestIndicatorTable[0].declaredValue !== null && ctx.preAlertManifestIndicatorTable[0].declaredValue !== void 0)("ngIfElse", nullOrUndefined_r17);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].grossWeight);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].incoTerms);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].noOfPackageHawb);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].noOfPieceHawb);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].partnerHouseAirwayBill);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].paymentType);
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].originDetails.name);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].originDetails.phone);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].originDetails.addressLine1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].originDetails.addressLine2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].originDetails.city);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].originDetails.country);
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].destinationDetails.name);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].destinationDetails.phone);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].destinationDetails.addressLine1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].destinationDetails.addressLine2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].destinationDetails.city);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.preAlertManifestIndicatorTable[0].destinationDetails.country);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx.preAlertManifestIndicatorTable[0].pieceDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.preAlertManifestIndicatorTable[0].pieceDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.preAlertManifestIndicatorTable[0].pieceDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.preAlertManifestIndicatorTable[0].pieceDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.preAlertManifestIndicatorTable[0].pieceDetails);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, DatePipe], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 20rem);\n  overflow-y: scroll;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  font-size: 14px;\n  line-height: 30px;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem 3px 0px;\n  border-radius: 6px;\n  text-align: center;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--overcOrange);\n  border: none !important;\n  color: var(--white);\n}\n.pointer-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.componentTableHeader[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  padding-bottom: 20px;\n}\n.null-value[_ngcontent-%COMP%] {\n  color: #EB5757 !important;\n  font-weight: bolder !important;\n}\n/*# sourceMappingURL=pre-alert-manifest-indicator.component.css.map */"] });
var PreAlertManifestIndicatorComponent = _PreAlertManifestIndicatorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreAlertManifestIndicatorComponent, { className: "PreAlertManifestIndicatorComponent", filePath: "src\\app\\main\\airport\\pre-alert-manifest\\pre-alert-manifest-indicator\\pre-alert-manifest-indicator.component.ts", lineNumber: 21 });
})();

// src/app/main/airport/pre-alert-manifest/pre-alert-update/pre-alert-update.component.ts
var _c015 = () => ({ "width": "100%" });
function PreAlertUpdateComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function PreAlertUpdateComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function PreAlertUpdateComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function PreAlertUpdateComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, PreAlertUpdateComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, PreAlertUpdateComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function PreAlertUpdateComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_mat_error_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 69)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertUpdateComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, PreAlertUpdateComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, PreAlertUpdateComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 23);
    \u0275\u0275text(13, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-dropdown", 24);
    \u0275\u0275listener("onChange", function PreAlertUpdateComponent_ng_template_12_Template_p_dropdown_onChange_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.partnerTypeChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PreAlertUpdateComponent_ng_template_12_mat_error_15_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25)(17, "p", 23);
    \u0275\u0275text(18, "Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 26);
    \u0275\u0275template(20, PreAlertUpdateComponent_ng_template_12_mat_error_20_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 27)(22, "p", 19);
    \u0275\u0275text(23, "Bayan HV");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 28);
    \u0275\u0275template(25, PreAlertUpdateComponent_ng_template_12_mat_error_25_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 29)(27, "p", 19);
    \u0275\u0275text(28, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 30);
    \u0275\u0275template(30, PreAlertUpdateComponent_ng_template_12_mat_error_30_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 31)(32, "p", 19);
    \u0275\u0275text(33, "Partner HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 32);
    \u0275\u0275template(35, PreAlertUpdateComponent_ng_template_12_mat_error_35_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 33)(37, "p", 19);
    \u0275\u0275text(38, "Shipper Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 34);
    \u0275\u0275template(40, PreAlertUpdateComponent_ng_template_12_mat_error_40_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 35)(42, "p", 19);
    \u0275\u0275text(43, "Consignee Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 36);
    \u0275\u0275template(45, PreAlertUpdateComponent_ng_template_12_mat_error_45_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 37)(47, "p", 19);
    \u0275\u0275text(48, "Inco Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 38);
    \u0275\u0275template(50, PreAlertUpdateComponent_ng_template_12_mat_error_50_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 39)(52, "p", 19);
    \u0275\u0275text(53, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "p-dropdown", 40);
    \u0275\u0275template(55, PreAlertUpdateComponent_ng_template_12_mat_error_55_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 41)(57, "p", 19);
    \u0275\u0275text(58, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 42);
    \u0275\u0275template(60, PreAlertUpdateComponent_ng_template_12_mat_error_60_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 43)(62, "p", 19);
    \u0275\u0275text(63, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "p-dropdown", 44);
    \u0275\u0275template(65, PreAlertUpdateComponent_ng_template_12_mat_error_65_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 45)(67, "p", 19);
    \u0275\u0275text(68, "IATA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "p-dropdown", 46);
    \u0275\u0275template(70, PreAlertUpdateComponent_ng_template_12_mat_error_70_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 47)(72, "p", 19);
    \u0275\u0275text(73, "Flight Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "input", 48);
    \u0275\u0275template(75, PreAlertUpdateComponent_ng_template_12_mat_error_75_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 49)(77, "p", 19);
    \u0275\u0275text(78, "Flight Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 50);
    \u0275\u0275template(80, PreAlertUpdateComponent_ng_template_12_mat_error_80_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 39)(82, "p", 19);
    \u0275\u0275text(83, "Origin Port");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "input", 51);
    \u0275\u0275template(85, PreAlertUpdateComponent_ng_template_12_mat_error_85_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 52)(87, "p", 19);
    \u0275\u0275text(88, "Number of pieces");
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "input", 53);
    \u0275\u0275template(90, PreAlertUpdateComponent_ng_template_12_mat_error_90_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 54)(92, "p", 19);
    \u0275\u0275text(93, "Estimated Time Of Departure");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "p-calendar", 55);
    \u0275\u0275template(95, PreAlertUpdateComponent_ng_template_12_mat_error_95_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 56)(97, "p", 19);
    \u0275\u0275text(98, "Estimated Time Of Arrival");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "p-calendar", 57);
    \u0275\u0275template(100, PreAlertUpdateComponent_ng_template_12_mat_error_100_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 58)(102, "p", 19);
    \u0275\u0275text(103, "Total Shipment Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "input", 59);
    \u0275\u0275template(105, PreAlertUpdateComponent_ng_template_12_mat_error_105_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 60)(107, "p", 19);
    \u0275\u0275text(108, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(109, "input", 61);
    \u0275\u0275template(110, PreAlertUpdateComponent_ng_template_12_mat_error_110_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 62)(112, "p", 19);
    \u0275\u0275text(113, "ConsignmentValueLocal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "input", 63);
    \u0275\u0275template(115, PreAlertUpdateComponent_ng_template_12_mat_error_115_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 64)(117, "p", 19);
    \u0275\u0275text(118, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(119, "input", 65);
    \u0275\u0275template(120, PreAlertUpdateComponent_ng_template_12_mat_error_120_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 66)(122, "button", 67);
    \u0275\u0275text(123, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "button", 68);
    \u0275\u0275listener("click", function PreAlertUpdateComponent_ng_template_12_Template_button_click_124_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_18_0;
    let tmp_21_0;
    let tmp_23_0;
    let tmp_25_0;
    let tmp_27_0;
    let tmp_29_0;
    let tmp_31_0;
    let tmp_38_0;
    let tmp_42_0;
    let tmp_47_0;
    let tmp_50_0;
    let tmp_52_0;
    let tmp_54_0;
    let tmp_56_0;
    let tmp_58_0;
    let tmp_62_0;
    let tmp_66_0;
    let tmp_68_0;
    let tmp_70_0;
    let tmp_72_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(80, _c015));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(81, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(82, _c015));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(83, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(84, _c015));
    \u0275\u0275property("options", ctx_r2.partnerType)("panelStyle", \u0275\u0275pureFunction0(85, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerType"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(86, _c015));
    \u0275\u0275property("options", ctx_r2.customerIdList)("ngClass", ((tmp_18_0 = ctx_r2.form.get("partnerId")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(87, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_21_0 = ctx_r2.form.get("bayanHv")) == null ? null : tmp_21_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("bayanHv"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_23_0 = ctx_r2.form.get("partnerMasterAirwayBill")) == null ? null : tmp_23_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerMasterAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_25_0 = ctx_r2.form.get("partnerHouseAirwayBill")) == null ? null : tmp_25_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerHouseAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_27_0 = ctx_r2.form.get("shipperName")) == null ? null : tmp_27_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("shipperName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_29_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_29_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consigneeName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_31_0 = ctx_r2.form.get("incoTerms")) == null ? null : tmp_31_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("incoTerms"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(88, _c015));
    \u0275\u0275property("options", ctx_r2.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(89, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryOfOrigin"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_38_0 = ctx_r2.form.get("description")) == null ? null : tmp_38_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("description"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(90, _c015));
    \u0275\u0275property("options", ctx_r2.hsCodeList)("ngClass", ((tmp_42_0 = ctx_r2.form.get("hsCode")) == null ? null : tmp_42_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(91, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("hsCode"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(92, _c015));
    \u0275\u0275property("options", ctx_r2.iataIdList)("ngClass", ((tmp_47_0 = ctx_r2.form.get("iataId")) == null ? null : tmp_47_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(93, _c015));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("iataId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_50_0 = ctx_r2.form.get("flightNo")) == null ? null : tmp_50_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("flightNo"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_52_0 = ctx_r2.form.get("flightName")) == null ? null : tmp_52_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("flightName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_54_0 = ctx_r2.form.get("countryOfOrigin")) == null ? null : tmp_54_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryOfOrigin"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_56_0 = ctx_r2.form.get("numberOfPieces")) == null ? null : tmp_56_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("numberOfPieces"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_58_0 = ctx_r2.form.get("estimatedDepartureTimeFE")) == null ? null : tmp_58_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("estimatedDepartureTime"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_62_0 = ctx_r2.form.get("flightArrivalTimeFE")) == null ? null : tmp_62_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("estimatedDepartureTime"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_66_0 = ctx_r2.form.get("totalShipmentWeight")) == null ? null : tmp_66_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("totalShipmentWeight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_68_0 = ctx_r2.form.get("consignmentValue")) == null ? null : tmp_68_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consignmentValue"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_70_0 = ctx_r2.form.get("consignmentValueLocal")) == null ? null : tmp_70_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consignmentValueLocal"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_72_0 = ctx_r2.form.get("consignmentCurrency")) == null ? null : tmp_72_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consignmentCurrency"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function PreAlertUpdateComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function PreAlertUpdateComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "p", 70);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 71);
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
function PreAlertUpdateComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "p", 19);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "p", 19);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "p", 19);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 66)(18, "button", 77);
    \u0275\u0275listener("click", function PreAlertUpdateComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 68);
    \u0275\u0275listener("click", function PreAlertUpdateComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function PreAlertUpdateComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, PreAlertUpdateComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, PreAlertUpdateComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _PreAlertUpdateComponent = class _PreAlertUpdateComponent {
  constructor(cs, spin, route, router, path, fb, service, customerService, consignorService, messageService, cas, auth, el, dialog) {
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.path = path;
    this.fb = fb;
    this.service = service;
    this.customerService = customerService;
    this.consignorService = consignorService;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.el = el;
    this.dialog = dialog;
    this.partnerType = [];
    this.active = 0;
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
      companyId: [this.auth.companyId, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      partnerHouseAirwayBill: [],
      partnerMasterAirwayBill: [],
      originDetails: this.OriginDetails,
      destinationDetails: this.DestinationDetails,
      goodsDescription: [],
      consigneeName: [],
      incoTerms: [],
      shipperName: [],
      description: [],
      weight: [,],
      consignmentValue: [],
      consignmentValueLocal: [],
      masterAirwayBill: [],
      houseAirwayBill: [],
      consignmentCurrency: [],
      airportDestinationCode: [],
      hsCode: [],
      iata: [],
      flightNo: [],
      flightName: [],
      bayanHv: [],
      partnerType: [""],
      countryOfOrigin: [],
      countryOfDestination: [],
      flightArrivalTime: [],
      flightArrivalTimeFE: [/* @__PURE__ */ new Date()],
      estimatedDepartureTime: [""],
      estimatedDepartureTimeFE: [/* @__PURE__ */ new Date()],
      noOfPackageMawb: [],
      noOfCrt: [],
      totalShipmentWeight: [],
      totalValue: [],
      createdOn: [""],
      createdBy: [],
      updatedBy: [],
      updatedOn: [""],
      partnerId: ["", Validators.required]
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.companyIdList = [];
    this.languageIdList = [];
    this.iataIdList = [];
    this.countryIdList = [];
    this.customerIdList = [];
    this.hsCodeList = [];
    this.partnerType = [
      { value: "customer", label: "Customer" },
      { value: "consignor", label: "Consignor" }
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
    const dataToSend = ["Mid-Mile", "Pre Alert Manifest", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.iata.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.hsCode.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.customer.url
    ]).subscribe({
      next: (results) => {
        this.companyIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.company.key);
        this.languageIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.language.key);
        this.countryIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.country.key);
        this.hsCodeList = this.cas.forLanguageFilterWithoutKey(results[3], this.cas.dropdownlist.setup.hsCode.key);
        this.iataIdList = this.cas.forLanguageFilterWithoutKey(results[4], this.cas.dropdownlist.setup.iata.key);
        const consitnor = this.cas.forLanguageFilter(results[5], this.cas.dropdownlist.setup.consignor.key);
        const customer = this.cas.forLanguageFilter(results[6], this.cas.dropdownlist.setup.customer.key);
        customer.forEach((x) => this.customerIdList.push(x));
        consitnor.forEach((x) => this.customerIdList.push(x));
        this.customerIdList = this.cs.removeDuplicatesFromArrayList(this.customerIdList, "value");
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
    if (this.form.controls.estimatedDepartureTime.value) {
      this.form.controls.estimatedDepartureTimeFE.patchValue(this.cs.pCalendar(this.form.controls.estimatedDepartureTime.value));
    }
    if (this.form.controls.flightArrivalTime.value) {
      this.form.controls.flightArrivalTimeFE.patchValue(this.cs.pCalendar(this.form.controls.flightArrivalTime.value));
    }
    this.partnerTypeChanged();
  }
  save() {
    this.submitted = true;
    if (this.form.invalid) {
      for (const control in this.form.controls) {
        const controlInstance = this.form.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
          }
        }
      }
    }
    if (this.form.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    const date = this.cs.jsonDate(this.form.controls.estimatedDepartureTimeFE.value);
    this.form.controls.estimatedDepartureTime.patchValue(date);
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.UpdatePreAlertManifest([this.form.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res[0].consignmentId + " has been updated successfully" });
          this.router.navigate(["/main/airport/preAlertManifest"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create([this.form.getRawValue()]).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: " has been created successfully" });
            this.router.navigate(["/main/airport/preAlertManifest"]);
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
  partnerTypeChanged() {
    if (this.form.controls.partnerType.value == "customer") {
      let obj = {};
      obj.companyId = [this.auth.companyId];
      this.customerIdList = [];
      this.spin.show();
      this.customerService.search(obj).subscribe({
        next: (result) => {
          this.customerIdList = this.cas.foreachlist(result, { key: "customerId", value: "customerName" });
          this.shipperType = "Customer";
          this.form.controls.shipperName.patchValue(this.shipperType);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      let obj = {};
      obj.companyId = [this.auth.companyId];
      this.customerIdList = [];
      this.spin.show();
      this.consignorService.search(obj).subscribe({
        next: (result) => {
          this.customerIdList = this.cas.foreachlist(result, { key: "consignorId", value: "consignorName" });
          this.shipperType = "Consignor";
          this.form.controls.shipperName.patchValue(this.shipperType);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
};
_PreAlertUpdateComponent.\u0275fac = function PreAlertUpdateComponent_Factory(t) {
  return new (t || _PreAlertUpdateComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
};
_PreAlertUpdateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreAlertUpdateComponent, selectors: [["app-pre-alert-update"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerType", "appendTo", "body", 3, "onChange", "options", "panelStyle"], ["id", "partnerId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "bayanHv", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "num", "formControlName", "bayanHv", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "partnerMasterAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "partnerHouseAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "partnerHouseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "shipperName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "shipperName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consigneeName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "consigneeName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "incoTerms", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "incoTerms", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "countryOfOrigin", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "countryOfOrigin", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "description", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "goodsDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "hsCode", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "hsCode", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "iataId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "iataId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "flightNo", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "flightNo", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "flightName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "flightName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["maxlength", "100", "pInputText", "", "formControlName", "countryOfOrigin", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "numberOfPieces", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "numberOfPieces", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "estimatedDepartureTimeFE", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "estimatedDepartureTimeFE", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "ngClass", "iconDisplay", "showIcon"], ["id", "flightArrivalTimeFE", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "flightArrivalTimeFE", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "ngClass", "iconDisplay", "showIcon"], ["id", "totalShipmentWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "totalShipmentWeight", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentValue", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "consignmentValue", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentValueLocal", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "consignmentValueLocal", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentCurrency", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "consignmentCurrency", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/airport/preAlertManifest", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function PreAlertUpdateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function PreAlertUpdateComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, PreAlertUpdateComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, PreAlertUpdateComponent_ng_template_12_Template, 126, 94, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PreAlertUpdateComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pre Alert Manifest - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Calendar, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=pre-alert-update.component.css.map */"] });
var PreAlertUpdateComponent = _PreAlertUpdateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreAlertUpdateComponent, { className: "PreAlertUpdateComponent", filePath: "src\\app\\main\\airport\\pre-alert-manifest\\pre-alert-update\\pre-alert-update.component.ts", lineNumber: 20 });
})();

// src/app/main/airport/airport-routing.module.ts
var routes = [
  { path: "preAlertManifest", component: PreAlertManifestComponent, data: { title: "Mid-Mile", module: "Pre-Alert Manifest" } },
  { path: "preAlertManifest-new/:code", component: PreAlertNewComponent, data: { title: "Mid-Mile", module: "Pre-Alert Manifest New" } },
  { path: "preAlertManifest-indicator/:code", component: PreAlertManifestIndicatorComponent, data: { title: "Mid-Mile", module: "Pre-Alert Manifest Indicator" } },
  { path: "preAlertManifest-update/:code", component: PreAlertUpdateComponent, data: { title: "Mid-Mile", module: "Pre-Alert Manifest Update" } },
  { path: "console", component: ConsoleComponent, data: { title: "Mid-Mile", module: "Console" } },
  { path: "console-new/:code", component: ConsoleNewComponent, data: { title: "Mid-Mile", module: "Console" } },
  { path: "console-edit/:code", component: ConsoleEditComponent, data: { title: "Mid-Mile", module: "Console" } },
  { path: "bondedManifest", component: BondedManifestComponent, data: { title: "Mid-Mile", module: "Bonded Manifest" } },
  { path: "bondedManifest-new/:code", component: BondedManifestNewComponent, data: { title: "Mid-Mile", module: "Bonded Manifest New" } },
  { path: "ccr", component: CcrComponent, data: { title: "Mid-Mile", module: "CCR" } },
  { path: "ccr-new/:code", component: CcrNewComponent, data: { title: "Mid-Mile", module: "CCR New" } },
  { path: "ccr-edit/:code", component: CcrEditComponent, data: { title: "Mid-Mile", module: "CCR New" } }
];
var _AirportRoutingModule = class _AirportRoutingModule {
};
_AirportRoutingModule.\u0275fac = function AirportRoutingModule_Factory(t) {
  return new (t || _AirportRoutingModule)();
};
_AirportRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AirportRoutingModule });
_AirportRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AirportRoutingModule = _AirportRoutingModule;

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
//# sourceMappingURL=chunk-JUHAEYG3.js.map

import {
  CurrencyService
} from "./chunk-CXE2PHXZ.js";
import {
  IataService
} from "./chunk-CLHBKYLI.js";
import {
  NumberrangeService
} from "./chunk-BKFSZDT3.js";
import {
  ConsignmentLabelComponent,
  ConsignmentService,
  ConsignmentUpdatebulkComponent
} from "./chunk-MLEXC6QF.js";
import "./chunk-6FHNFBBZ.js";
import {
  ConsignorService,
  CustomerService
} from "./chunk-VEPCFHWA.js";
import {
  CommonAPIService
} from "./chunk-KY24VKGR.js";
import {
  CustomTableComponent,
  DeleteComponent
} from "./chunk-LCHNJ277.js";
import {
  PathNameService
} from "./chunk-ETNI3O5T.js";
import {
  ActivatedRoute,
  AuthService,
  Calendar,
  Checkbox,
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
  FormGroupName,
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
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RowToggler,
  SharedModule,
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
} from "./chunk-QFBII7ZR.js";

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
var _c4 = () => ({ "width": "100rem" });
var _c5 = (a0) => ({ "selectedRow": a0 });
function PreAlertManifestComponent_ng_template_70_th_5_Template(rf, ctx) {
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
    \u0275\u0275elementStart(0, "tr")(1, "th", 48);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 48);
    \u0275\u0275text(4, " Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PreAlertManifestComponent_ng_template_70_th_5_Template, 2, 1, "th", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", columns_r6);
  }
}
function PreAlertManifestComponent_ng_template_71_td_5_ng_container_1_Template(rf, ctx) {
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
function PreAlertManifestComponent_ng_template_71_td_5_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r8[col_r7.field] == 0 ? "No" : "yes");
  }
}
function PreAlertManifestComponent_ng_template_71_td_5_ng_template_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r8[col_r7.field] == 0 ? "No" : "yes");
  }
}
function PreAlertManifestComponent_ng_template_71_td_5_ng_template_2_span_2_Template(rf, ctx) {
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
function PreAlertManifestComponent_ng_template_71_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PreAlertManifestComponent_ng_template_71_td_5_ng_template_2_span_0_Template, 2, 1, "span", 56)(1, PreAlertManifestComponent_ng_template_71_td_5_ng_template_2_span_1_Template, 2, 1, "span", 56)(2, PreAlertManifestComponent_ng_template_71_td_5_ng_template_2_span_2_Template, 3, 4, "span", 56);
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", col_r7.field === "consoleIndicator");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.field === "manifestIndicator");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format === "date");
  }
}
function PreAlertManifestComponent_ng_template_71_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, PreAlertManifestComponent_ng_template_71_td_5_ng_container_1_Template, 2, 1, "ng-container", 55)(2, PreAlertManifestComponent_ng_template_71_td_5_ng_template_2_Template, 3, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date" && col_r7.format !== "boolean")("ngIfElse", dateTemplate_r9);
  }
}
function PreAlertManifestComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 52);
    \u0275\u0275element(2, "p-tableCheckbox", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 52);
    \u0275\u0275element(4, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PreAlertManifestComponent_ng_template_71_td_5_Template, 4, 2, "td", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const expanded_r11 = ctx.expanded;
    const ctx_r11 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c5, ctx_r11.isSelected(rowData_r8)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", rowData_r8)("ngClass", expanded_r11 ? "bi-chevron-up" : "bi-chevron-right");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function PreAlertManifestComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 57)(1, "div", 58);
    \u0275\u0275element(2, "div", 59);
    \u0275\u0275elementStart(3, "div", 60)(4, "div", 24)(5, "div", 61)(6, "p", 62);
    \u0275\u0275text(7, "Origin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 61)(9, "p", 63);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 61)(12, "p", 62);
    \u0275\u0275text(13, "Destination");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 61)(15, "p", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 61)(18, "p", 62);
    \u0275\u0275text(19, "Flight No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 61)(21, "p", 63);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 61)(24, "p", 62);
    \u0275\u0275text(25, "No of Pieces");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 61)(27, "p", 64);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 61)(30, "p", 62);
    \u0275\u0275text(31, "Gross Weight");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 61)(33, "p", 63);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 61)(36, "p", 62);
    \u0275\u0275text(37, "ETA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 61)(39, "p", 64);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 61)(43, "p", 62);
    \u0275\u0275text(44, "Consignment Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 61)(46, "p", 63);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 61)(49, "p", 62);
    \u0275\u0275text(50, "Currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 61)(52, "p", 63);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 61)(55, "p", 62);
    \u0275\u0275text(56, "Invoice No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 61)(58, "p", 63);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 61)(61, "p", 62);
    \u0275\u0275text(62, "Sender");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 61)(64, "p", 63);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 61)(67, "p", 62);
    \u0275\u0275text(68, "Receiver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 61)(70, "p", 63);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 61)(73, "p", 62);
    \u0275\u0275text(74, "Inco Terms");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 61)(76, "p", 63);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const rowData_r13 = ctx.$implicit;
    const ctx_r11 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r11.getColspan());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(rowData_r13.countryOfOrigin);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r13.destinationDetails.country ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r13.destinationDetails.country, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.flightNo);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r13.noOfPieceHawb ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r13.noOfPieceHawb, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.grossWeight);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r13.flightArrivalTime ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 16, rowData_r13.flightArrivalTime, "dd-MM-yyyy HH:mm"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(rowData_r13.consignmentValue);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.consignmentCurrency);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.invoiceNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.originDetails.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.destinationDetails.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.incoTerms);
  }
}
function PreAlertManifestComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 65);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function PreAlertManifestComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 66);
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
      { field: "companyId", header: "Company" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "goodsDescription", header: "Commodity" },
      { field: "hsCode", header: "HS Code", format: "code" },
      { field: "consoleIndicator", header: "Console Status", format: "boolean" },
      { field: "manifestIndicator", header: "Bonded Status", format: "boolean" },
      { field: "statusDescription", header: "Status" },
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
    this.spin.show();
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    this.service.searchPrealert(obj).subscribe({
      next: (res) => {
        this.preAlertManifestTable = res;
        this.getSearchDropdown();
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
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
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    this.spin.show();
    this.console.CreateFromConsignment(this.selectedPreAlertManifest).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: "Console has been created successfully" });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  createManifest() {
    if (this.selectedPreAlertManifest.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    this.spin.show();
    this.manifest.Create(this.selectedPreAlertManifest).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: "Manifest has been created successfully" });
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
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
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId");
    this.spin.show();
    this.service.searchPrealert(this.searchform.getRawValue()).subscribe({
      next: (res) => {
        this.preAlertManifestTable = res;
        this.preAlertManifestTable = this.cs.removeDuplicatesFromArrayList(this.preAlertManifestTable, "masterAirwayBill");
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
    this.searchform.get(value.value)?.reset();
    this.search();
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
}, decls: 77, vars: 57, consts: [["op", ""], ["preAlertManifest", ""], ["preAlertManifestTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-between", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], [1, "d-flex", "justify-content-end", "align-items-center"], ["iconPosition", "right"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "consoleIndicator", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "selectionLimit", "1", "filter", "true", "formControlName", "manifestIndicator", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "hoverButton", 3, "click"], [1, "bi", "bi-plus-circle", "pr-2"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 18.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", "dataKey", "consignmentId", "rowExpandMode", "single", 1, "custom-table", 3, "selectionChange", "onRowExpand", "onRowCollapse", "columns", "value", "scrollable", "sortOrder", "selection", "paginator", "rows", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [2, "font-size", "14px", 3, "pRowToggler", "ngClass"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "px-4"], [1, "d-flex", "justify-content", "animate__animated", "animate__fadeIn"], [1, "lineBorder"], [1, "contentBox"], [1, "col-2", "spacingBottom"], [1, "mb-0", "headerText"], [1, "mb-0", "valueText", "chip"], [1, "mb-0", "valueText", "chip", 3, "ngClass"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function PreAlertManifestComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "p", 7);
    \u0275\u0275text(3, "Pre-Alert Manifest ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "img", 8);
    \u0275\u0275listener("click", function PreAlertManifestComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
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
    \u0275\u0275text(33, "HAWB");
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
    \u0275\u0275listener("onRowExpand", function PreAlertManifestComponent_Template_p_table_onRowExpand_68_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowExpand($event));
    })("onRowCollapse", function PreAlertManifestComponent_Template_p_table_onRowCollapse_68_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowCollapse($event));
    });
    \u0275\u0275template(70, PreAlertManifestComponent_ng_template_70_Template, 6, 1, "ng-template", 42)(71, PreAlertManifestComponent_ng_template_71_Template, 6, 7, "ng-template", 43)(72, PreAlertManifestComponent_ng_template_72_Template, 78, 19, "ng-template", 44)(73, PreAlertManifestComponent_ng_template_73_Template, 4, 1, "ng-template", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "mat-menu", 46, 3);
    \u0275\u0275template(76, PreAlertManifestComponent_ng_template_76_Template, 4, 0, "ng-template", 47);
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
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, RowToggler, TableCheckbox, TableHeaderCheckbox, InputIcon, IconField, InputText, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem;\n  border-radius: 6px;\n  text-align: center !important;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--overcOrange);\n  border: none !important;\n  color: var(--white);\n}\n/*# sourceMappingURL=pre-alert-manifest.component.css.map */"], data: { animation: [
  trigger("fadeLater", [
    state("fade-in", style({ opacity: 1, transform: "translateY(0)" })),
    state("fade-out", style({ opacity: 0, transform: "translateY(0)" })),
    transition("fade-in <=> fade-out", animate("0.6s ease-in-out"))
  ])
] } });
var PreAlertManifestComponent = _PreAlertManifestComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreAlertManifestComponent, { className: "PreAlertManifestComponent", filePath: "src\\app\\main\\airport\\pre-alert-manifest\\pre-alert-manifest.component.ts", lineNumber: 34 });
})();

// src/app/main/airport/console/console-bulk/console-bulk.component.ts
var _c02 = () => ({ "width": "100%" });
function ConsoleBulkComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 8);
    \u0275\u0275text(2, "Customs CCR NO ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 21);
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
      this.cas.dropdownlist.setup.customer.url
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
    console.log(this.data);
    this.Consigment = this.data.code;
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
_ConsoleBulkComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleBulkComponent, selectors: [["app-console-bulk"]], decls: 46, vars: 29, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "pInputText", "", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["formControlName", "countryOfOrigin", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "eventCode", "appendTo", "body", 3, "options", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "flightNo", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["formControlName", "shipperId", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["class", "col-6 marginFieldNew borderRadius12", 4, "ngIf"], ["maxlength", "50", "pInputText", "", "formControlName", "primaryDo", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "secondaryDo", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "float-right", "py-2"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1", 3, "click"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], ["maxlength", "50", "pInputText", "", "formControlName", "customsCcrNo", "pInputText", "", "placeholder", "Enter", 1, "w-100"]], template: function ConsoleBulkComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7)(13, "p", 8);
    \u0275\u0275text(14, "Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "p-dropdown", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 7)(17, "p", 8);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "p-dropdown", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 7)(21, "p", 8);
    \u0275\u0275text(22, "Event");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-dropdown", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 7)(25, "p", 8);
    \u0275\u0275text(26, "Flight No ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 7)(29, "p", 8);
    \u0275\u0275text(30, "Customer/Consignor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "p-dropdown", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ConsoleBulkComponent_div_32_Template, 4, 0, "div", 15);
    \u0275\u0275elementStart(33, "div", 7)(34, "p", 8);
    \u0275\u0275text(35, "Primary DO ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 7)(38, "p", 8);
    \u0275\u0275text(39, "Secondary DO ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 18)(42, "button", 19);
    \u0275\u0275listener("click", function ConsoleBulkComponent_Template_button_click_42_listener() {
      return ctx.cancel();
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 20);
    \u0275\u0275listener("click", function ConsoleBulkComponent_Template_button_click_44_listener() {
      return ctx.save();
    });
    \u0275\u0275text(45, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.data.title, " - Bulk Update");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(10);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c02));
    \u0275\u0275property("options", ctx.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(22, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c02));
    \u0275\u0275property("options", ctx.statusList)("panelStyle", \u0275\u0275pureFunction0(24, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c02));
    \u0275\u0275property("options", ctx.eventList)("panelStyle", \u0275\u0275pureFunction0(26, _c02));
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c02));
    \u0275\u0275property("options", ctx.consignorIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(28, _c02));
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
var _c12 = () => ({ width: "180" });
var _c22 = () => ({ width: "80vw" });
var _c32 = () => ({ "width": "100%" });
var _c42 = () => ({ "width": "100rem" });
var _c52 = (a0) => ({ "selectedRow": a0 });
function ConsoleComponent_ng_template_54_th_3_Template(rf, ctx) {
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
function ConsoleComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 42);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsoleComponent_ng_template_54_th_3_Template, 2, 1, "th", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", columns_r6);
  }
}
function ConsoleComponent_ng_template_55_td_4_ng_container_1_Template(rf, ctx) {
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
function ConsoleComponent_ng_template_55_td_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsoleComponent_ng_template_55_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsoleComponent_ng_template_55_td_4_ng_container_1_Template, 2, 1, "ng-container", 48)(2, ConsoleComponent_ng_template_55_td_4_ng_template_2_Template, 2, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function ConsoleComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr");
    \u0275\u0275elementStart(1, "tr", 45)(2, "td", 46);
    \u0275\u0275element(3, "p-tableCheckbox", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ConsoleComponent_ng_template_55_td_4_Template, 4, 2, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const columns_r10 = ctx.columns;
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r10.selectedConsole[0] === rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c52, ctx_r10.isSelected(rowData_r8)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r10);
  }
}
function ConsoleComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 49);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function ConsoleComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 50);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _ConsoleComponent = class _ConsoleComponent {
  constructor(messageService, cs, router, path, dialog, datePipe, fb, auth, spin, service) {
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
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.partnerDropdown = [];
    this.statusDropdown = [];
    this.consoleIdDropdown = [];
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
      { field: "consoleId", header: "Console ID" },
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "goodsDescription", header: "Commodity" },
      { field: "hsCode", header: "HS Code" },
      { field: "statusId", header: "Status" },
      { field: "eventText", header: "Event" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "statusId", header: "Status Id" },
      { field: "shipperId", header: "Shipper Id" },
      { field: "referenceField1", header: "Reference Field 1" },
      { field: "referenceField2", header: "Reference Field 2" },
      { field: "referenceField3", header: "Reference Field 3" },
      { field: "referenceField4", header: "Reference Field 4" },
      { field: "referenceField5", header: "Reference Field 5" }
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
          console.log(res);
          res = this.cs.removeDuplicatesFromArrayList(res, "consoleId");
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
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId");
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
    this.searchform.get(value.value)?.reset();
    this.search();
  }
};
_ConsoleComponent.\u0275fac = function ConsoleComponent_Factory(t) {
  return new (t || _ConsoleComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ConsoleService));
};
_ConsoleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleComponent, selectors: [["app-console"]], viewQuery: function ConsoleComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 60, vars: 45, consts: [["op", ""], ["console", ""], ["consoleTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "ConsoleId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 18.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "selection", "sortOrder", "paginator", "rows", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function ConsoleComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "p", 7);
    \u0275\u0275text(3, "Console ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "img", 8);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openEdit("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 9);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 10);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 11);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const op_r2 = \u0275\u0275reference(10);
      return \u0275\u0275resetView(op_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-overlayPanel", null, 0)(11, "div", 12)(12, "button", 13);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateBulk());
    });
    \u0275\u0275element(13, "img", 14);
    \u0275\u0275text(14, "Bulk Update");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(16, "i", 16);
    \u0275\u0275text(17, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 17)(19, "p-iconField", 18)(20, "p-inputIcon", 19);
    \u0275\u0275listener("click", function ConsoleComponent_Template_p_inputIcon_click_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const console_r3 = \u0275\u0275reference(23);
      return \u0275\u0275resetView(console_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 20);
    \u0275\u0275listener("input", function ConsoleComponent_Template_input_input_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consoleTag_r4 = \u0275\u0275reference(53);
      return \u0275\u0275resetView(consoleTag_r4.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p-overlayPanel", 21, 1)(24, "form", 22)(25, "div", 23)(26, "div", 24)(27, "p", 25);
    \u0275\u0275text(28, "Console ID");
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
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 30)(43, "div")(44, "img", 31);
    \u0275\u0275listener("click", function ConsoleComponent_Template_img_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "button", 32);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 33);
    \u0275\u0275listener("click", function ConsoleComponent_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(49, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "p-chips", 34);
    \u0275\u0275listener("onRemove", function ConsoleComponent_Template_p_chips_onRemove_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsoleComponent_Template_p_chips_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 35)(52, "p-table", 36, 2);
    \u0275\u0275twoWayListener("selectionChange", function ConsoleComponent_Template_p_table_selectionChange_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedConsole, $event) || (ctx.selectedConsole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(54, ConsoleComponent_ng_template_54_Template, 4, 1, "ng-template", 37)(55, ConsoleComponent_ng_template_55_Template, 5, 7, "ng-template", 38)(56, ConsoleComponent_ng_template_56_Template, 4, 1, "ng-template", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "mat-menu", 40, 3);
    \u0275\u0275template(59, ConsoleComponent_ng_template_59_Template, 4, 0, "ng-template", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c12));
    \u0275\u0275advance(13);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c22));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c32));
    \u0275\u0275property("options", ctx.consoleIdDropdown)("panelStyle", \u0275\u0275pureFunction0(37, _c32));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c32));
    \u0275\u0275property("options", ctx.masterAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(39, _c32));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c32));
    \u0275\u0275property("options", ctx.houseAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(41, _c32));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c32));
    \u0275\u0275property("options", ctx.partnerDropdown)("panelStyle", \u0275\u0275pureFunction0(43, _c32));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.consoleTable)("scrollable", true);
    \u0275\u0275twoWayProperty("selection", ctx.selectedConsole);
    \u0275\u0275property("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(44, _c42));
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, TableCheckbox, TableHeaderCheckbox, InputIcon, IconField, InputText, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem;\n  border-radius: 6px;\n  text-align: center !important;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  border: none;\n  color: var(--white);\n}\n/*# sourceMappingURL=console.component.css.map */"] });
var ConsoleComponent = _ConsoleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleComponent, { className: "ConsoleComponent", filePath: "src\\app\\main\\airport\\console\\console.component.ts", lineNumber: 23 });
})();

// src/app/main/airport/bonded-manifest/bonded-manifest.component.ts
var _c04 = ["bondedmanifest"];
var _c13 = () => ({ width: "180" });
var _c23 = () => ({ width: "80vw" });
var _c33 = () => ({ "width": "100%" });
var _c43 = () => ({ "width": "100rem" });
var _c53 = (a0) => ({ "selectedRow": a0 });
function BondedManifestComponent_ng_template_54_th_5_Template(rf, ctx) {
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
function BondedManifestComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 43);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 43);
    \u0275\u0275text(4, " Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BondedManifestComponent_ng_template_54_th_5_Template, 2, 1, "th", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", columns_r6);
  }
}
function BondedManifestComponent_ng_template_55_td_5_ng_container_1_Template(rf, ctx) {
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
function BondedManifestComponent_ng_template_55_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r8.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function BondedManifestComponent_ng_template_55_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, BondedManifestComponent_ng_template_55_td_5_ng_container_1_Template, 2, 1, "ng-container", 50)(2, BondedManifestComponent_ng_template_55_td_5_ng_template_2_Template, 2, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const dateTemplate_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r7.format !== "date")("ngIfElse", dateTemplate_r9);
  }
}
function BondedManifestComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 46)(1, "td", 47);
    \u0275\u0275element(2, "p-tableCheckbox", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 47);
    \u0275\u0275element(4, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BondedManifestComponent_ng_template_55_td_5_Template, 4, 2, "td", 45);
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
function BondedManifestComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51)(1, "div", 52);
    \u0275\u0275element(2, "div", 53);
    \u0275\u0275elementStart(3, "div", 54)(4, "div", 23)(5, "div", 55)(6, "p", 56);
    \u0275\u0275text(7, "MAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 55)(9, "p", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 55)(12, "p", 56);
    \u0275\u0275text(13, "Partner HAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 55)(15, "p", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 55)(18, "p", 56);
    \u0275\u0275text(19, "Origin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 55)(21, "p", 58);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 55)(24, "p", 56);
    \u0275\u0275text(25, "Bonded ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 55)(27, "p", 57);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 55)(30, "p", 56);
    \u0275\u0275text(31, "Bill of Lading\xA0No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 55)(33, "p", 57);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 55)(36, "p", 56);
    \u0275\u0275text(37, "Bill of Lading For");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 55)(39, "p", 57);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 55)(42, "p", 56);
    \u0275\u0275text(43, "Payment Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 55)(45, "p", 57);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 55)(48, "p", 56);
    \u0275\u0275text(49, "No of Pcs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 55)(51, "p", 57);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 55)(54, "p", 56);
    \u0275\u0275text(55, "Weight");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 55)(57, "p", 57);
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
    \u0275\u0275property("ngClass", rowData_r13.countryOfOrigin ? "bgOrange text-dark" : "");
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
    \u0275\u0275textInterpolate(rowData_r13.noOfPieceHawb);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r13.grossWeight);
  }
}
function BondedManifestComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 59);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function BondedManifestComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 60);
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
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.partnerDropdown = [];
    this.statusDropdown = [];
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
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "description", header: "Commodity" },
      { field: "hsCode", header: "HS Code" },
      { field: "statusDescription", header: "Status" },
      { field: "eventText", header: "Event" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.service.search(obj).subscribe({
        next: (res) => {
          console.log(res);
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
      data: { line: this.selectedBondedManifest, module: "Language", body: "This action cannot be undone. All values associated with this field will be lost." }
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
    });
  }
  closeOverLay() {
    this.overlayPanel.hide();
  }
  search() {
    this.fieldsWithValue = null;
    const formValues = this.searchform.value;
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId");
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
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.search();
  }
  chipClear(value) {
    this.searchform.get(value.value)?.reset();
    this.search();
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
}, decls: 61, vars: 45, consts: [["op", ""], ["bondedmanifest", ""], ["bondedManifestTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "bondedId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "multiple", "sortField", "createdOn", "scrollHeight", "calc(100vh - 18.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", "dataKey", "partnerHouseAirwayBill", "rowExpandMode", "single", 1, "custom-table", 3, "selectionChange", "onRowExpand", "onRowCollapse", "columns", "value", "scrollable", "selection", "sortOrder", "paginator", "rows", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [2, "font-size", "14px", 3, "pRowToggler", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "px-4"], [1, "d-flex", "justify-content", "animate__animated", "animate__fadeIn"], [1, "lineBorder"], [1, "contentBox"], [1, "col-2", "spacingBottom"], [1, "mb-0", "headerText"], [1, "mb-0", "valueText", "chip"], [1, "mb-0", "valueText", "chip", 3, "ngClass"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function BondedManifestComponent_Template(rf, ctx) {
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
      const bondedManifestTag_r4 = \u0275\u0275reference(53);
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
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 30)(43, "div")(44, "img", 31);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_img_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "button", 32);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 33);
    \u0275\u0275listener("click", function BondedManifestComponent_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(49, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "p-chips", 34);
    \u0275\u0275listener("onRemove", function BondedManifestComponent_Template_p_chips_onRemove_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function BondedManifestComponent_Template_p_chips_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 35)(52, "p-table", 36, 2);
    \u0275\u0275twoWayListener("selectionChange", function BondedManifestComponent_Template_p_table_selectionChange_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedBondedManifest, $event) || (ctx.selectedBondedManifest = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onRowExpand", function BondedManifestComponent_Template_p_table_onRowExpand_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowExpand($event));
    })("onRowCollapse", function BondedManifestComponent_Template_p_table_onRowCollapse_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowCollapse($event));
    });
    \u0275\u0275template(54, BondedManifestComponent_ng_template_54_Template, 6, 1, "ng-template", 37)(55, BondedManifestComponent_ng_template_55_Template, 6, 7, "ng-template", 38)(56, BondedManifestComponent_ng_template_56_Template, 59, 11, "ng-template", 39)(57, BondedManifestComponent_ng_template_57_Template, 4, 1, "ng-template", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "mat-menu", 41, 3);
    \u0275\u0275template(60, BondedManifestComponent_ng_template_60_Template, 4, 0, "ng-template", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c13));
    \u0275\u0275advance(13);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c23));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c33));
    \u0275\u0275property("options", ctx.bondedIdDropdown)("panelStyle", \u0275\u0275pureFunction0(37, _c33));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c33));
    \u0275\u0275property("options", ctx.masterAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(39, _c33));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c33));
    \u0275\u0275property("options", ctx.houseAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(41, _c33));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c33));
    \u0275\u0275property("options", ctx.partnerDropdown)("panelStyle", \u0275\u0275pureFunction0(43, _c33));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.bondedManifestTable)("scrollable", true);
    \u0275\u0275twoWayProperty("selection", ctx.selectedBondedManifest);
    \u0275\u0275property("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(44, _c43));
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, RowToggler, TableCheckbox, TableHeaderCheckbox, InputIcon, IconField, InputText, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem;\n  border-radius: 6px;\n  text-align: center !important;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  border: none;\n  color: var(--white);\n}\n/*# sourceMappingURL=bonded-manifest.component.css.map */"] });
var BondedManifestComponent = _BondedManifestComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BondedManifestComponent, { className: "BondedManifestComponent", filePath: "src\\app\\main\\airport\\bonded-manifest\\bonded-manifest.component.ts", lineNumber: 23 });
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
    return this.http.post("/overc-midmile-service/ccr/delete/list", obj);
  }
  search(obj) {
    return this.http.post("/overc-midmile-service/ccr/findCcr", obj);
  }
  uploadBayan(file, filePath) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post("/pdf/extract?filePath=" + filePath, formData);
  }
};
_CcrService.\u0275fac = function CcrService_Factory(t) {
  return new (t || _CcrService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_CcrService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CcrService, factory: _CcrService.\u0275fac, providedIn: "root" });
var CcrService = _CcrService;

// src/app/main/airport/ccr/ccr.component.ts
var _c05 = ["fileInput"];
var _c14 = ["ccr"];
var _c24 = () => ({ width: "180" });
var _c34 = () => ({ width: "80vw" });
var _c44 = () => ({ "width": "100%" });
var _c54 = () => ({ "width": "100rem" });
function CcrComponent_ng_template_68_th_5_Template(rf, ctx) {
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
function CcrComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 47);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 47);
    \u0275\u0275text(4, " Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CcrComponent_ng_template_68_th_5_Template, 2, 1, "th", 49);
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
function CcrComponent_ng_template_69_td_5_ng_container_1_Template(rf, ctx) {
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
function CcrComponent_ng_template_69_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r10.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function CcrComponent_ng_template_69_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CcrComponent_ng_template_69_td_5_ng_container_1_Template, 2, 1, "ng-container", 53)(2, CcrComponent_ng_template_69_td_5_ng_template_2_Template, 2, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    const dateTemplate_r11 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r9.format !== "date")("ngIfElse", dateTemplate_r11);
  }
}
function CcrComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 50)(2, "p-checkbox", 51);
    \u0275\u0275listener("onChange", function CcrComponent_ng_template_69_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CcrComponent_ng_template_69_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r7 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r7.selectedCcr, $event) || (ctx_r7.selectedCcr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 50);
    \u0275\u0275element(4, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CcrComponent_ng_template_69_td_5_Template, 4, 2, "td", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r10 = ctx.$implicit;
    const columns_r12 = ctx.columns;
    const expanded_r13 = ctx.expanded;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r7.selectedCcr[0] === rowData_r10);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r7.selectedCcr);
    \u0275\u0275property("value", rowData_r10);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", rowData_r10)("ngClass", expanded_r13 ? "bi-chevron-up" : "bi-chevron-right");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r12);
  }
}
function CcrComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 54)(1, "div", 55);
    \u0275\u0275element(2, "div", 56);
    \u0275\u0275elementStart(3, "div", 57)(4, "div", 26)(5, "div", 58)(6, "p", 59);
    \u0275\u0275text(7, "HAWB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 58)(9, "p", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 58)(12, "p", 59);
    \u0275\u0275text(13, "Origin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 58)(15, "p", 61);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 58)(18, "p", 59);
    \u0275\u0275text(19, "Item Total Price");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 58)(21, "p", 60);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 58)(24, "p", 59);
    \u0275\u0275text(25, "Customs CCR No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 58)(27, "p", 60);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 58)(30, "p", 59);
    \u0275\u0275text(31, "Bill No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 58)(33, "p", 60);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 58)(36, "p", 59);
    \u0275\u0275text(37, "Payment Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 58)(39, "p", 60);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 58)(42, "p", 59);
    \u0275\u0275text(43, "No of Pcs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 58)(45, "p", 60);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 58)(48, "p", 59);
    \u0275\u0275text(49, "Weight");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 58)(51, "p", 60);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const rowData_r14 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r7.getColspan());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(rowData_r14.houseAirwayBill);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", rowData_r14.origin ? "bgOrange text-dark" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rowData_r14.origin);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r14.itemTotalPrice);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r14.customsCcrNo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r14.billNo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r14.paymentType);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r14.noOfPieceHawb);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rowData_r14.grossWeight);
  }
}
function CcrComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 62);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function CcrComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 63);
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
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.partnerDropdown = [];
    this.statusDropdown = [];
    this.ccrIdDropdown = [];
    this.consoleIdDropdown = [];
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
      { field: "partnerMasterAirwayBill", header: "Partner MAWB" },
      { field: "partnerHouseAirwayBill", header: "Partner HAWB" },
      { field: "description", header: "Commodity" },
      { field: "hsCode", header: "HS Code" },
      { field: "statusDescription", header: "Status" },
      { field: "eventText", header: "Event" },
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
      data: { line: this.selectedCcr, module: "Language", body: "This action cannot be undone. All values associated with this field will be lost." }
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
    const filePath = this.selectedCcr[0].ccrId + "/";
    const file = event.target.files[0];
    this.selectedFiles = file;
    this.service.uploadBayan(this.selectedFiles, filePath).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: "success",
          summary: "Uploaded",
          key: "br",
          detail: "File uploaded successfully"
        });
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
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId");
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
    this.searchform.get(value.value)?.reset();
    this.search();
  }
  generateLabel() {
    const filterResult = this.cs.removeDuplicatesFromArrayList(this.actualResult, "houseAirwayBill");
    console.log(filterResult);
    this.label.generatePdfBarocdeMutiple(filterResult);
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
}, decls: 75, vars: 50, consts: [["fileInput", ""], ["op", ""], ["ccr", ""], ["ccrTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "file", 2, "display", "none", 3, "change"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/document.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "ccrId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "consoleId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "sortField", "createdOn", "scrollHeight", "calc(100vh - 18.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", "dataKey", "partnerHouseAirwayBill", "rowExpandMode", "single", 1, "custom-table", 3, "onRowExpand", "onRowCollapse", "columns", "value", "scrollable", "sortOrder", "paginator", "rows", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [2, "font-size", "14px", 3, "pRowToggler", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "px-4"], [1, "d-flex", "justify-content", "animate__animated", "animate__fadeIn"], [1, "lineBorder"], [1, "contentBox"], [1, "col-2", "spacingBottom"], [1, "mb-0", "headerText"], [1, "mb-0", "valueText", "chip"], [1, "mb-0", "valueText", "chip", 3, "ngClass"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function CcrComponent_Template(rf, ctx) {
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
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 18);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(26, "i", 19);
    \u0275\u0275text(27, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 20)(29, "p-iconField", 21)(30, "p-inputIcon", 22);
    \u0275\u0275listener("click", function CcrComponent_Template_p_inputIcon_click_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ccr_r3 = \u0275\u0275reference(33);
      return \u0275\u0275resetView(ccr_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 23);
    \u0275\u0275listener("input", function CcrComponent_Template_input_input_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ccrTag_r4 = \u0275\u0275reference(67);
      return \u0275\u0275resetView(ccrTag_r4.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p-overlayPanel", 24, 2)(34, "form", 25)(35, "div", 26)(36, "div", 27)(37, "p", 28);
    \u0275\u0275text(38, "CCR ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "p-multiSelect", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 27)(41, "p", 28);
    \u0275\u0275text(42, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "p-multiSelect", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 27)(45, "p", 28);
    \u0275\u0275text(46, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "p-multiSelect", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 27)(49, "p", 28);
    \u0275\u0275text(50, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "p-multiSelect", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 27)(53, "p", 28);
    \u0275\u0275text(54, "Console ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "p-multiSelect", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 34)(57, "div")(58, "img", 35);
    \u0275\u0275listener("click", function CcrComponent_Template_img_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div")(60, "button", 36);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(61, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 37);
    \u0275\u0275listener("click", function CcrComponent_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(63, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(64, "p-chips", 38);
    \u0275\u0275listener("onRemove", function CcrComponent_Template_p_chips_onRemove_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CcrComponent_Template_p_chips_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 39)(66, "p-table", 40, 3);
    \u0275\u0275listener("onRowExpand", function CcrComponent_Template_p_table_onRowExpand_66_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowExpand($event));
    })("onRowCollapse", function CcrComponent_Template_p_table_onRowCollapse_66_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowCollapse($event));
    });
    \u0275\u0275template(68, CcrComponent_ng_template_68_Template, 6, 2, "ng-template", 41)(69, CcrComponent_ng_template_69_Template, 6, 7, "ng-template", 42)(70, CcrComponent_ng_template_70_Template, 53, 10, "ng-template", 43)(71, CcrComponent_ng_template_71_Template, 4, 1, "ng-template", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "mat-menu", 45, 4);
    \u0275\u0275template(74, CcrComponent_ng_template_74_Template, 4, 0, "ng-template", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c24));
    \u0275\u0275advance(21);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c34));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c44));
    \u0275\u0275property("options", ctx.ccrIdDropdown)("panelStyle", \u0275\u0275pureFunction0(40, _c44));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c44));
    \u0275\u0275property("options", ctx.masterAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(42, _c44));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c44));
    \u0275\u0275property("options", ctx.houseAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(44, _c44));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c44));
    \u0275\u0275property("options", ctx.partnerDropdown)("panelStyle", \u0275\u0275pureFunction0(46, _c44));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c44));
    \u0275\u0275property("options", ctx.consoleIdDropdown)("panelStyle", \u0275\u0275pureFunction0(48, _c44));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.ccrTable)("scrollable", true)("sortOrder", -1)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(49, _c54));
  }
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, RowToggler, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 0px 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.contentBox[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  color: var(--white);\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 3px 1rem;\n  border-radius: 6px;\n  text-align: center !important;\n}\n.headerText[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n  padding-bottom: 3px;\n}\n.valueText[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.3;\n  letter-spacing: normal;\n  text-align: left;\n}\n.spacingBottom[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n}\n.hoverButton[_ngcontent-%COMP%] {\n  border: 1px solid var(--black) !important;\n  color: var(--black);\n}\n.hoverButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--black);\n  border: none;\n  color: var(--white);\n}\n/*# sourceMappingURL=ccr.component.css.map */"] });
var CcrComponent = _CcrComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CcrComponent, { className: "CcrComponent", filePath: "src\\app\\main\\airport\\ccr\\ccr.component.ts", lineNumber: 24 });
})();

// src/app/main/airport/pre-alert-manifest/pre-alert-new/pre-alert-new.component.ts
var _c06 = () => ({ "width": "100%" });
function PreAlertNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function PreAlertNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function PreAlertNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function PreAlertNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, PreAlertNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, PreAlertNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
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
function PreAlertNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_mat_error_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 66)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function PreAlertNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, PreAlertNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 21);
    \u0275\u0275text(8, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-dropdown", 22);
    \u0275\u0275listener("onChange", function PreAlertNewComponent_ng_template_9_Template_p_dropdown_onChange_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.partnerTypeChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PreAlertNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "p", 21);
    \u0275\u0275text(13, "Partner ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-dropdown", 24);
    \u0275\u0275template(15, PreAlertNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25)(17, "p", 18);
    \u0275\u0275text(18, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 26);
    \u0275\u0275template(20, PreAlertNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 27)(22, "p", 18);
    \u0275\u0275text(23, "Partner HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 28);
    \u0275\u0275template(25, PreAlertNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 29)(27, "p", 18);
    \u0275\u0275text(28, "Inco Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 30);
    \u0275\u0275template(30, PreAlertNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 31)(32, "p", 18);
    \u0275\u0275text(33, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 32);
    \u0275\u0275template(35, PreAlertNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 33)(37, "p", 18);
    \u0275\u0275text(38, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 32);
    \u0275\u0275template(40, PreAlertNewComponent_ng_template_9_mat_error_40_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 34)(42, "p", 18);
    \u0275\u0275text(43, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "p-dropdown", 35);
    \u0275\u0275template(45, PreAlertNewComponent_ng_template_9_mat_error_45_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 36)(47, "p", 18);
    \u0275\u0275text(48, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "p-dropdown", 37);
    \u0275\u0275template(50, PreAlertNewComponent_ng_template_9_mat_error_50_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 38)(52, "p", 18);
    \u0275\u0275text(53, "Commodity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 39);
    \u0275\u0275template(55, PreAlertNewComponent_ng_template_9_mat_error_55_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 40)(57, "p", 18);
    \u0275\u0275text(58, "Goods Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 41);
    \u0275\u0275template(60, PreAlertNewComponent_ng_template_9_mat_error_60_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 42)(62, "p", 18);
    \u0275\u0275text(63, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 43);
    \u0275\u0275template(65, PreAlertNewComponent_ng_template_9_mat_error_65_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 44)(67, "p", 18);
    \u0275\u0275text(68, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "p-dropdown", 45);
    \u0275\u0275template(70, PreAlertNewComponent_ng_template_9_mat_error_70_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 34)(72, "p", 18);
    \u0275\u0275text(73, "Origin Port");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "input", 46);
    \u0275\u0275template(75, PreAlertNewComponent_ng_template_9_mat_error_75_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 47)(77, "p", 18);
    \u0275\u0275text(78, "Destination Port");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 48);
    \u0275\u0275template(80, PreAlertNewComponent_ng_template_9_mat_error_80_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 49)(82, "p", 21);
    \u0275\u0275text(83, "Estimated Time Of Departure");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "p-calendar", 50);
    \u0275\u0275template(85, PreAlertNewComponent_ng_template_9_mat_error_85_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 51)(87, "p", 18);
    \u0275\u0275text(88, "Estimated Time Of Arrival");
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "input", 52);
    \u0275\u0275template(90, PreAlertNewComponent_ng_template_9_mat_error_90_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 53)(92, "p", 18);
    \u0275\u0275text(93, "Total Shipments");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "input", 54);
    \u0275\u0275template(95, PreAlertNewComponent_ng_template_9_mat_error_95_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 55)(97, "p", 18);
    \u0275\u0275text(98, "Number Of CRT");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 56);
    \u0275\u0275template(100, PreAlertNewComponent_ng_template_9_mat_error_100_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 57)(102, "p", 18);
    \u0275\u0275text(103, "Total Shipment Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "input", 58);
    \u0275\u0275template(105, PreAlertNewComponent_ng_template_9_mat_error_105_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 59)(107, "p", 18);
    \u0275\u0275text(108, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(109, "input", 60);
    \u0275\u0275template(110, PreAlertNewComponent_ng_template_9_mat_error_110_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 61)(112, "p", 18);
    \u0275\u0275text(113, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "input", 62);
    \u0275\u0275template(115, PreAlertNewComponent_ng_template_9_mat_error_115_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 63)(117, "button", 64);
    \u0275\u0275text(118, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "button", 65);
    \u0275\u0275listener("click", function PreAlertNewComponent_ng_template_9_Template_button_click_119_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(120);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_36_0;
    let tmp_38_0;
    let tmp_40_0;
    let tmp_44_0;
    let tmp_47_0;
    let tmp_49_0;
    let tmp_51_0;
    let tmp_55_0;
    let tmp_57_0;
    let tmp_59_0;
    let tmp_61_0;
    let tmp_63_0;
    let tmp_65_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(72, _c06));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(73, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(74, _c06));
    \u0275\u0275property("options", ctx_r2.partnerType)("panelStyle", \u0275\u0275pureFunction0(75, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerType"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(76, _c06));
    \u0275\u0275property("options", ctx_r2.customerIdList)("ngClass", ((tmp_13_0 = ctx_r2.form.get("partnerId")) == null ? null : tmp_13_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(77, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_16_0 = ctx_r2.form.get("partnerMasterAirwayBill")) == null ? null : tmp_16_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerMasterAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_18_0 = ctx_r2.form.get("partnerHouseAirwayBill")) == null ? null : tmp_18_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("partnerHouseAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_20_0 = ctx_r2.form.get("incoTerms")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("incoTerms"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_22_0 = ctx_r2.form.get("name")) == null ? null : tmp_22_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("name"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_24_0 = ctx_r2.form.get("name")) == null ? null : tmp_24_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("name"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(78, _c06));
    \u0275\u0275property("options", ctx_r2.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(79, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryOfOrigin"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(80, _c06));
    \u0275\u0275property("options", ctx_r2.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(81, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryOfDestination"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_36_0 = ctx_r2.form.get("description")) == null ? null : tmp_36_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("description"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_38_0 = ctx_r2.form.get("goodsDescription")) == null ? null : tmp_38_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("goodsDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_40_0 = ctx_r2.form.get("weight")) == null ? null : tmp_40_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("weight"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(82, _c06));
    \u0275\u0275property("options", ctx_r2.hsCodeList)("ngClass", ((tmp_44_0 = ctx_r2.form.get("hsCode")) == null ? null : tmp_44_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(83, _c06));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("hsCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_47_0 = ctx_r2.form.get("countryOfOrigin")) == null ? null : tmp_47_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryOfOrigin"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_49_0 = ctx_r2.form.get("airportDestinationCode")) == null ? null : tmp_49_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("airportDestinationCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_51_0 = ctx_r2.form.get("estimatedDepartureTimeFE")) == null ? null : tmp_51_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("estimatedDepartureTime"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_55_0 = ctx_r2.form.get("flightArrivalTime")) == null ? null : tmp_55_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("flightArrivalTime"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_57_0 = ctx_r2.form.get("noOfPackageMawb")) == null ? null : tmp_57_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("noOfPackageMawb"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_59_0 = ctx_r2.form.get("noOfCrt")) == null ? null : tmp_59_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("noOfCrt"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_61_0 = ctx_r2.form.get("totalShipmentWeight")) == null ? null : tmp_61_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("totalShipmentWeight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_63_0 = ctx_r2.form.get("consignmentValue")) == null ? null : tmp_63_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consignmentValue"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_65_0 = ctx_r2.form.get("consignmentCurrency")) == null ? null : tmp_65_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consignmentCurrency"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function PreAlertNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function PreAlertNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 67);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 68);
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
function PreAlertNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 63)(18, "button", 74);
    \u0275\u0275listener("click", function PreAlertNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 65);
    \u0275\u0275listener("click", function PreAlertNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
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
function PreAlertNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, PreAlertNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, PreAlertNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
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
      consignmentValue: [],
      masterAirwayBill: [],
      houseAirwayBill: [],
      consignmentCurrency: [],
      airportDestinationCode: [],
      hsCode: [],
      partnerType: [""],
      countryOfOrigin: [],
      countryOfDestination: [],
      flightArrivalTime: [],
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
    const dataToSend = ["Airport", "Pre Alert Manifest", this.pageToken.pageflow];
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
        const consitnor = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.consignor.key);
        const customer = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.customer.key);
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
      console.log(this.form.getRawValue());
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
      this.customerService.search(obj).subscribe({ next: (result) => {
        this.customerIdList = this.cas.foreachlist(result, { key: "customerId", value: "customerName" });
        this.shipperType = "Customer";
        this.form.controls.shipperName.patchValue(this.shipperType);
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      } });
    } else {
      let obj = {};
      obj.companyId = [this.auth.companyId];
      this.customerIdList = [];
      this.spin.show();
      this.consignorService.search(obj).subscribe({ next: (result) => {
        this.customerIdList = this.cas.foreachlist(result, { key: "consignorId", value: "consignorName" });
        this.shipperType = "Consignor";
        this.form.controls.shipperName.patchValue(this.shipperType);
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      } });
    }
  }
};
_PreAlertNewComponent.\u0275fac = function PreAlertNewComponent_Factory(t) {
  return new (t || _PreAlertNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
};
_PreAlertNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreAlertNewComponent, selectors: [["app-pre-alert-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerType", "appendTo", "body", 3, "onChange", "options", "panelStyle"], ["id", "partnerId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "partnerMasterAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "num", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "partnerHouseAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "pKeyFilter", "num", "formControlName", "partnerHouseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "incoTerms", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "incoTerms", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "name", "formGroupName", "originDetails", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "name", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "name", "formGroupName", "destinationDetails", 1, "col-6", "marginFieldNew", "borderRadius12"], ["id", "countryOfOrigin", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "countryOfOrigin", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "countryOfDestination", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "countryOfDestination", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "commodity", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "description", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "goodsDescription", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "goodsDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "weight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "weight", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "hsCode", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "hsCode", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["maxlength", "100", "pInputText", "", "formControlName", "countryOfOrigin", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "airportDestinationCode", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "airportDestinationCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "estimatedDepartureTime", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "estimatedDepartureTimeFE", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "ngClass", "iconDisplay", "showIcon"], ["id", "flightArrivalTime", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "flightArrivalTime", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "noOfPackageMawb", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "noOfPackageMawb", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "noOfCrt", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "noOfCrt", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "totalShipmentWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "totalShipmentWeight", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentValue", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "consignmentValue", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentCurrency", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "100", "pInputText", "", "formControlName", "consignmentCurrency", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/airport/preAlertManifest", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function PreAlertNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function PreAlertNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, PreAlertNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, PreAlertNewComponent_ng_template_9_Template, 121, 84, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PreAlertNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pre Alert Manifest - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Calendar, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName, FormGroupName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=pre-alert-new.component.css.map */"] });
var PreAlertNewComponent = _PreAlertNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreAlertNewComponent, { className: "PreAlertNewComponent", filePath: "src\\app\\main\\airport\\pre-alert-manifest\\pre-alert-new\\pre-alert-new.component.ts", lineNumber: 20 });
})();

// src/app/main/airport/bonded-manifest/bonded-manifest-new/bonded-manifest-new.component.ts
var _c07 = () => ({ "width": "100%" });
function BondedManifestNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function BondedManifestNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
}
function BondedManifestNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function BondedManifestNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275template(2, BondedManifestNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 10)(3, BondedManifestNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 12);
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
function BondedManifestNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 72)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 72)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_9_div_11_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 72)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "p", 17);
    \u0275\u0275text(2, "Manifest Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 74);
    \u0275\u0275template(4, BondedManifestNewComponent_ng_template_9_div_11_mat_error_4_Template, 3, 1, "mat-error", 19);
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
function BondedManifestNewComponent_ng_template_9_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 72)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_9_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 72)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_9_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 72)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_9_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 72)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_9_mat_error_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 72)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function BondedManifestNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "p", 17);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 18);
    \u0275\u0275template(5, BondedManifestNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "p", 17);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 20);
    \u0275\u0275template(10, BondedManifestNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BondedManifestNewComponent_ng_template_9_div_11_Template, 5, 2, "div", 21);
    \u0275\u0275elementStart(12, "div", 22)(13, "p", 23);
    \u0275\u0275text(14, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 24);
    \u0275\u0275template(16, BondedManifestNewComponent_ng_template_9_mat_error_16_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 25)(18, "p", 23);
    \u0275\u0275text(19, "Partner HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 26);
    \u0275\u0275template(21, BondedManifestNewComponent_ng_template_9_mat_error_21_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 27)(23, "p", 17);
    \u0275\u0275text(24, " Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 28);
    \u0275\u0275template(26, BondedManifestNewComponent_ng_template_9_mat_error_26_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 29)(28, "p", 17);
    \u0275\u0275text(29, " Bill Of Landing For ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "p-dropdown", 30);
    \u0275\u0275template(31, BondedManifestNewComponent_ng_template_9_mat_error_31_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 31)(33, "p", 17);
    \u0275\u0275text(34, " Net Weight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 33)(37, "p", 17);
    \u0275\u0275text(38, " Manifested Gross Weight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 35)(41, "p", 17);
    \u0275\u0275text(42, " Gross Weight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 37)(45, "p", 17);
    \u0275\u0275text(46, " Tare Weight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 39)(49, "p", 17);
    \u0275\u0275text(50, " Manifested Quantity ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 41)(53, "p", 17);
    \u0275\u0275text(54, " Landed Quantity ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 43)(57, "p", 17);
    \u0275\u0275text(58, " Total Quantity ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 45)(61, "p", 17);
    \u0275\u0275text(62, " Volume ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 47)(65, "p", 17);
    \u0275\u0275text(66, " Port Of Shipping ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 49)(69, "p", 17);
    \u0275\u0275text(70, " Final Destination ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 51)(73, "p", 17);
    \u0275\u0275text(74, " Notify Party ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 53)(77, "p", 17);
    \u0275\u0275text(78, " Consignee Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 55)(81, "p", 17);
    \u0275\u0275text(82, "Shipper");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "p-dropdown", 56);
    \u0275\u0275template(84, BondedManifestNewComponent_ng_template_9_mat_error_84_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 57)(86, "p", 17);
    \u0275\u0275text(87, " Remark ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(88, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 59)(90, "p", 17);
    \u0275\u0275text(91, "Is Consolidated Shipment");
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "p-dropdown", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 61)(94, "p", 17);
    \u0275\u0275text(95, "Is Split Bill of Lading");
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "p-dropdown", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 63)(98, "p", 17);
    \u0275\u0275text(99, " Consolidated Bill Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 65)(102, "p", 17);
    \u0275\u0275text(103, " Is Pending Shipment ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "p-dropdown", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 67)(106, "p", 17);
    \u0275\u0275text(107, " BWHInvestor ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(108, "input", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 69)(110, "button", 70);
    \u0275\u0275text(111, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "button", 71);
    \u0275\u0275listener("click", function BondedManifestNewComponent_ng_template_9_Template_button_click_112_listener() {
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
    \u0275\u0275property("ngClass", ((tmp_31_0 = ctx_r2.form.get("portOfShipping")) == null ? null : tmp_31_0.invalid) && ((tmp_31_0 = ctx_r2.form.get("portOfShipping")) == null ? null : tmp_31_0.dirty) ? "invalid" : "");
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
    const dataToSend = ["Airport", "BondedManifest", this.pageToken.pageflow];
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
_BondedManifestNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BondedManifestNewComponent, selectors: [["app-bonded-manifest-new"]], decls: 10, vars: 3, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "col-6 marginFieldNew borderRadius12", "id", "bondedId", 4, "ngIf"], ["id", "partnerMasterAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", "required", "", 1, "w-100", 3, "ngClass"], ["id", "partnerHouseAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "partnerHouseAirwayBill", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", "required", "", 1, "w-100", 3, "ngClass"], ["id", "description", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "description", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "billOfLadingFor", 1, "col-6", "marginFieldNew", "borderRadius12"], ["appendTo", "body", "formControlName", "billOfLadingFor", "placeholder", "Select\xA0", 3, "options"], ["id", "netWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "netWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "manifestedGrossWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "manifestedGrossWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "grossWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "grossWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "tareWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "tareWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "manifestedQuantity", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "manifestedQuantity", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "landedQuantity", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "landedQuantity", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "totalQuantity", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "totalQuantity", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "volume", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "volume", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "portOfShipping", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "portOfShipping", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "finalDestination", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "finalDestination", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "notifyParty", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "notifyParty", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "consigneeName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "consigneeName", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "shipperId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "shipperId", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "remark", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "remark", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "isConsolidatedShipment", 1, "col-6", "marginFieldNew", "borderRadius12"], ["appendTo", "body", "formControlName", "isConsolidatedShipment", "placeholder", "Select\xA0", 3, "options"], ["id", "isSplitBillOfLanding", 1, "col-6", "marginFieldNew", "borderRadius12"], ["appendTo", "body", "formControlName", "isSplitBillOfLanding", "placeholder", "Select\xA0", 3, "options"], ["id", "consolidatedBillNo", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "consolidatedBillNo", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "isPendingShipment", 1, "col-6", "marginFieldNew", "borderRadius12"], ["appendTo", "body", "formControlName", "isPendingShipment", "placeholder", "Select\xA0", 3, "options"], ["id", "bwhInvestor", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "bwhInvestor", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/airport/bondedManifest", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], ["id", "bondedId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "bondedId", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", "required", "", 1, "w-100", 3, "ngClass"]], template: function BondedManifestNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function BondedManifestNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, BondedManifestNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, BondedManifestNewComponent_ng_template_9_Template, 114, 65, "ng-template", 7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Bonded Manifest - ", ctx.pageToken.pageflow, " ");
    \u0275\u0275advance(2);
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
function CcrNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CcrNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
}
function CcrNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function CcrNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275template(2, CcrNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 10)(3, CcrNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 12);
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
function CcrNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 77)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 77)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 77)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 77)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 77)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_9_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 77)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_9_mat_error_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 77)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function CcrNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "p", 17);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 18);
    \u0275\u0275template(5, CcrNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "p", 17);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 20);
    \u0275\u0275template(10, CcrNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 21)(12, "p", 22);
    \u0275\u0275text(13, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-dropdown", 23);
    \u0275\u0275listener("onChange", function CcrNewComponent_ng_template_9_Template_p_dropdown_onChange_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mawbChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CcrNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 24)(17, "p", 22);
    \u0275\u0275text(18, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-dropdown", 25);
    \u0275\u0275listener("onChange", function CcrNewComponent_ng_template_9_Template_p_dropdown_onChange_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hawbChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CcrNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 26)(22, "p", 17);
    \u0275\u0275text(23, " Consignee Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 27);
    \u0275\u0275template(25, CcrNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 28)(27, "p", 17);
    \u0275\u0275text(28, " Invoice Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 30)(31, "p", 17);
    \u0275\u0275text(32, " Invoice Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 32)(35, "p", 17);
    \u0275\u0275text(36, " Invoice Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 34)(39, "p", 22);
    \u0275\u0275text(40, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "p-dropdown", 35);
    \u0275\u0275template(42, CcrNewComponent_ng_template_9_mat_error_42_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 36)(44, "p", 17);
    \u0275\u0275text(45, " Invoice Supplier Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 38)(48, "p", 17);
    \u0275\u0275text(49, " Freight Currency ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 40)(52, "p", 17);
    \u0275\u0275text(53, " Freight Charges ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 42)(56, "p", 17);
    \u0275\u0275text(57, " Country Of Supply ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 44)(60, "p", 17);
    \u0275\u0275text(61, " Bill Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 46)(64, "p", 17);
    \u0275\u0275text(65, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "p-dropdown", 47);
    \u0275\u0275template(67, CcrNewComponent_ng_template_9_mat_error_67_Template, 3, 1, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 48)(69, "p", 17);
    \u0275\u0275text(70, " Goods Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 50)(73, "p", 17);
    \u0275\u0275text(74, " Country Of Origin ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 52)(77, "p", 17);
    \u0275\u0275text(78, " Manufacturer ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 54)(81, "p", 17);
    \u0275\u0275text(82, " No Of Packages ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 56)(85, "p", 17);
    \u0275\u0275text(86, " Item Total Price ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 58)(89, "p", 17);
    \u0275\u0275text(90, " Package Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 60)(93, "p", 17);
    \u0275\u0275text(94, " Quantity ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(95, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 62)(97, "p", 17);
    \u0275\u0275text(98, " Net Wight (Kgs) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 64)(101, "p", 17);
    \u0275\u0275text(102, " Gross Weight ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 66)(105, "p", 17);
    \u0275\u0275text(106, " Is Exempted ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "p-dropdown", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 68)(109, "p", 17);
    \u0275\u0275text(110, " Exemption For ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(111, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 70)(113, "p", 17);
    \u0275\u0275text(114, " Exemption Beneficiary ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(115, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 72)(117, "p", 17);
    \u0275\u0275text(118, " Exemption Reference ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(119, "input", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 74)(121, "button", 75);
    \u0275\u0275text(122, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "button", 76);
    \u0275\u0275listener("click", function CcrNewComponent_ng_template_9_Template_button_click_123_listener() {
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
    const dataToSend = ["Airport", "CCR", this.pageToken.pageflow];
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
_CcrNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CcrNewComponent, selectors: [["app-ccr-new"]], decls: 10, vars: 3, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["id", "masterAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "houseAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "consigneeName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "consigneeName", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "invoiceNumber", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceNumber", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "invoiceDate", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceDate", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "invoiceType", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceType", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "currency", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "currency", "appendTo", "body", 3, "options", "panelStyle"], ["id", "invoiceSupplierName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceSupplierName", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "freightCurrency", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "freightCurrency", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "freightCharges", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "freightCharges", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "countryOfSupply", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "countryOfSupply", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "billNumber", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "billNumber", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "num", 1, "w-100", 3, "ngClass"], ["id", "hsCode", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "hsCode", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "goodsDescription", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "goodsDescription", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "countryOfOrigin", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "countryOfOrigin", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "manufacturer", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "manufacturer", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "noOfPackages", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "noOfPackages", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "itemTotalPrice", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "itemTotalPrice", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "packageType", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "packageType", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "quantity", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "quantity", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "netWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "netWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "grossWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "grossWeight", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "isExempted", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "isExempted", "appendTo", "body", "placeholder", "Select", 3, "options", "panelStyle"], ["id", "exemptionFor", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "exemptionFor", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "exemptionBeneficiary", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "exemptionBeneficiary", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], ["id", "exemptionReference", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "exemptionReference", "pInputText", "", "placeholder", "Enter", "pInputText", "", "pKeyFilter", "alphanum", 1, "w-100", 3, "ngClass"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/airport/ccr", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"]], template: function CcrNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function CcrNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, CcrNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, CcrNewComponent_ng_template_9_Template, 125, 79, "ng-template", 7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" CCR - ", ctx.pageToken.pageflow, " ");
    \u0275\u0275advance(2);
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
function ConsoleNewComponent_ng_template_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ConsoleNewComponent_ng_template_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
function ConsoleNewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ConsoleNewComponent_ng_template_8_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, ConsoleNewComponent_ng_template_8_p_2_Template, 2, 0, "p", 11)(3, ConsoleNewComponent_ng_template_8_img_3_Template, 1, 0, "img", 12);
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
function ConsoleNewComponent_ng_template_9_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_mat_error_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 53)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getErrorMessage());
  }
}
function ConsoleNewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 19);
    \u0275\u0275template(5, ConsoleNewComponent_ng_template_9_mat_error_5_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 21);
    \u0275\u0275template(10, ConsoleNewComponent_ng_template_9_mat_error_10_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22)(12, "p", 23);
    \u0275\u0275text(13, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-dropdown", 24);
    \u0275\u0275listener("onChange", function ConsoleNewComponent_ng_template_9_Template_p_dropdown_onChange_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mawbChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ConsoleNewComponent_ng_template_9_mat_error_15_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25)(17, "p", 23);
    \u0275\u0275text(18, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-dropdown", 26);
    \u0275\u0275listener("onChange", function ConsoleNewComponent_ng_template_9_Template_p_dropdown_onChange_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hawbChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ConsoleNewComponent_ng_template_9_mat_error_20_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 27)(22, "p", 18);
    \u0275\u0275text(23, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 28);
    \u0275\u0275template(25, ConsoleNewComponent_ng_template_9_mat_error_25_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 29)(27, "p", 23);
    \u0275\u0275text(28, "Airport Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "p-dropdown", 30);
    \u0275\u0275template(30, ConsoleNewComponent_ng_template_9_mat_error_30_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 31)(32, "p", 18);
    \u0275\u0275text(33, "Shipper");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-dropdown", 32);
    \u0275\u0275template(35, ConsoleNewComponent_ng_template_9_mat_error_35_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 33)(37, "p", 18);
    \u0275\u0275text(38, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 34);
    \u0275\u0275template(40, ConsoleNewComponent_ng_template_9_mat_error_40_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 35)(42, "p", 18);
    \u0275\u0275text(43, "Number of Pieces");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 36);
    \u0275\u0275template(45, ConsoleNewComponent_ng_template_9_mat_error_45_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 37)(47, "p", 18);
    \u0275\u0275text(48, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 38);
    \u0275\u0275template(50, ConsoleNewComponent_ng_template_9_mat_error_50_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 39)(52, "p", 18);
    \u0275\u0275text(53, "Consignee Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 40);
    \u0275\u0275template(55, ConsoleNewComponent_ng_template_9_mat_error_55_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 41)(57, "p", 23);
    \u0275\u0275text(58, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "p-dropdown", 42);
    \u0275\u0275template(60, ConsoleNewComponent_ng_template_9_mat_error_60_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 43)(62, "p", 23);
    \u0275\u0275text(63, "Consignment Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 44);
    \u0275\u0275template(65, ConsoleNewComponent_ng_template_9_mat_error_65_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 45)(67, "p", 23);
    \u0275\u0275text(68, "Customs KD");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 46);
    \u0275\u0275template(70, ConsoleNewComponent_ng_template_9_mat_error_70_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 47)(72, "p", 23);
    \u0275\u0275text(73, "IATA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "p-dropdown", 48);
    \u0275\u0275template(75, ConsoleNewComponent_ng_template_9_mat_error_75_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 17)(77, "p", 18);
    \u0275\u0275text(78, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "p-dropdown", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 50)(81, "button", 51);
    \u0275\u0275text(82, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "button", 52);
    \u0275\u0275listener("click", function ConsoleNewComponent_ng_template_9_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_20_0;
    let tmp_23_0;
    let tmp_35_0;
    let tmp_37_0;
    let tmp_39_0;
    let tmp_41_0;
    let tmp_47_0;
    let tmp_49_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(65, _c09));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(66, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(67, _c09));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(68, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(69, _c09));
    \u0275\u0275property("options", ctx_r2.mawbList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("masterAirwayBill")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(70, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("masterAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(71, _c09));
    \u0275\u0275property("options", ctx_r2.hawbList)("ngClass", ((tmp_20_0 = ctx_r2.form.get("houseAirwayBill")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(72, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("houseAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_23_0 = ctx_r2.form.get("countryOfOrigin")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r2.form.get("countryOfOrigin")) == null ? null : tmp_23_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("countryOfOrigin"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(73, _c09));
    \u0275\u0275property("options", ctx_r2.countryIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(74, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("airportOriginCode"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(75, _c09));
    \u0275\u0275property("options", ctx_r2.consignorIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(76, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("shipperId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_35_0 = ctx_r2.form.get("grossWeight")) == null ? null : tmp_35_0.invalid) && ((tmp_35_0 = ctx_r2.form.get("grossWeight")) == null ? null : tmp_35_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("grossWeight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_37_0 = ctx_r2.form.get("noOfPieceHawb")) == null ? null : tmp_37_0.invalid) && ((tmp_37_0 = ctx_r2.form.get("noOfPieceHawb")) == null ? null : tmp_37_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("noOfPieceHawb"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_39_0 = ctx_r2.form.get("goodsDescription")) == null ? null : tmp_39_0.invalid) && ((tmp_39_0 = ctx_r2.form.get("goodsDescription")) == null ? null : tmp_39_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("goodsDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_41_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_41_0.invalid) && ((tmp_41_0 = ctx_r2.form.get("consigneeName")) == null ? null : tmp_41_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consigneeName"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(77, _c09));
    \u0275\u0275property("options", ctx_r2.currencyIdList)("panelStyle", \u0275\u0275pureFunction0(78, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("currency"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_47_0 = ctx_r2.form.get("consignmentValue")) == null ? null : tmp_47_0.invalid) && ((tmp_47_0 = ctx_r2.form.get("consignmentValue")) == null ? null : tmp_47_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("consignmentValue"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_49_0 = ctx_r2.form.get("customsKd")) == null ? null : tmp_49_0.invalid) && ((tmp_49_0 = ctx_r2.form.get("customsKd")) == null ? null : tmp_49_0.dirty) ? "invalid" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("customsKd"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(79, _c09));
    \u0275\u0275property("options", ctx_r2.iataList)("panelStyle", \u0275\u0275pureFunction0(80, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("iataKd"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(81, _c09));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function ConsoleNewComponent_p_stepperPanel_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ConsoleNewComponent_p_stepperPanel_10_ng_template_1_Template_div_click_0_listener() {
      const onClick_r6 = \u0275\u0275restoreView(_r5).onClick;
      return \u0275\u0275resetView(onClick_r6.emit());
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "p", 54);
    \u0275\u0275text(3, " 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 55);
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
function ConsoleNewComponent_p_stepperPanel_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "p", 18);
    \u0275\u0275text(7, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Updated By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "p", 18);
    \u0275\u0275text(15, "Updated On");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 50)(18, "button", 61);
    \u0275\u0275listener("click", function ConsoleNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 52);
    \u0275\u0275listener("click", function ConsoleNewComponent_p_stepperPanel_10_ng_template_2_Template_button_click_20_listener() {
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
function ConsoleNewComponent_p_stepperPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, ConsoleNewComponent_p_stepperPanel_10_ng_template_1_Template, 7, 2, "ng-template", 6)(2, ConsoleNewComponent_p_stepperPanel_10_ng_template_2_Template, 22, 1, "ng-template", 7);
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
_ConsoleNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleNewComponent, selectors: [["app-console-new"]], decls: 11, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["id", "masterAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "onChange", "options", "ngClass", "disabled", "panelStyle"], ["id", "houseAirwayBill", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "countryOfOrigin", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "countryOfOrigin", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "airportOriginCode", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "airportOriginCode", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "shipperId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "shipperId", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], ["id", "grossWeight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "grossWeight", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "noOfPieceHawb", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "noOfPieceHawb", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "goodsDescription", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "goodsDescription", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consigneeName", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "consigneeName", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "currency", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "currency", "appendTo", "body", 3, "options", "panelStyle"], ["id", "consignmentValue", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "consignmentValue", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "customsKd", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pInputText", "", "formControlName", "customsKd", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "iataKd", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "iataKd", "appendTo", "body", 3, "options", "panelStyle"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/airport/console", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function ConsoleNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "p-stepper", 5);
    \u0275\u0275twoWayListener("activeStepChange", function ConsoleNewComponent_Template_p_stepper_activeStepChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(7, "p-stepperPanel");
    \u0275\u0275template(8, ConsoleNewComponent_ng_template_8_Template, 7, 2, "ng-template", 6)(9, ConsoleNewComponent_ng_template_9_Template, 85, 82, "ng-template", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ConsoleNewComponent_p_stepperPanel_10_Template, 3, 0, "p-stepperPanel", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Console - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
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

// src/app/main/airport/console/console-transfer/console-transfer.component.ts
var _c010 = () => ({ "width": "100%" });
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
  }
  ngOnInit() {
    this.getConsoleDropdown();
    console.log(this.data);
    this.form.controls.fromConsoleId.patchValue(this.data[0].consoleId);
    this.form.controls.houseAirwayBill.patchValue(this.data[0].houseAirwayBill);
    if (this.data.pageflow == "Edit") {
      this.form.patchValue(this.data.code);
    }
  }
  getConsoleDropdown() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.languageId = [this.auth.languageId];
    this.spin.show();
    this.service.search(obj).subscribe({ next: (result) => {
      this.consoleList = this.cas.forLanguageFilterWithoutKey(result, { key: "consoleId", value: "consoleId", languageId: "languageId", companyId: "companyId" });
      this.consoleList = this.cs.removeDuplicatesFromArrayList(this.consoleList, "value");
      this.spin.hide();
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
  save() {
    this.spin.show();
    this.selecetedTrasnfer.push(this.form.getRawValue());
    this.service.Transfer(this.selecetedTrasnfer).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Updated",
          key: "br",
          detail: res[0].consoleId + " has been Transfered successfully"
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
_ConsoleTransferComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleTransferComponent, selectors: [["app-console-transfer"]], decls: 17, vars: 8, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "toConsoleId", "appendTo", "body", "placeholder", "Select", 3, "options", "disabled", "panelStyle"], [1, "d-flex", "float-right", "py-2", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function ConsoleTransferComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Transfer Console");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "To Console");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-dropdown", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 12);
    \u0275\u0275listener("click", function ConsoleTransferComponent_Template_button_click_15_listener() {
      return ctx.save();
    });
    \u0275\u0275text(16, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c010));
    \u0275\u0275property("options", ctx.consoleList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(7, _c010));
  }
}, dependencies: [Dropdown, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=console-transfer.component.css.map */"] });
var ConsoleTransferComponent = _ConsoleTransferComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleTransferComponent, { className: "ConsoleTransferComponent", filePath: "src\\app\\main\\airport\\console\\console-transfer\\console-transfer.component.ts", lineNumber: 18 });
})();

// src/app/main/airport/console/console-editpopup/console-editpopup.component.ts
var _c011 = () => ({ "width": "100%" });
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
_ConsoleEditpopupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleEditpopupComponent, selectors: [["app-console-editpopup"]], decls: 57, vars: 20, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "formControlName", "houseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "masterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "partnerHouseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["formControlName", "airportOriginCode", "appendTo", "body", "placeholder", "Select", 3, "options", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "hsCode", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "consigneeName", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "formControlName", "consignmentValue", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["placeholder", "Select", "filter", "true", "formControlName", "consignmentCurrency", "appendTo", "body", 3, "options", "panelStyle"], ["maxlength", "50", "pInputText", "", "formControlName", "customsKd", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "iataKd", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "float-right", "py-2"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function ConsoleEditpopupComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, " Console - Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "HAWB");
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
    \u0275\u0275elementStart(24, "div", 7)(25, "p", 13);
    \u0275\u0275text(26, "Airport Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-dropdown", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 7)(29, "p", 8);
    \u0275\u0275text(30, "HS Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 7)(33, "p", 8);
    \u0275\u0275text(34, "Consignee Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 7)(37, "p", 8);
    \u0275\u0275text(38, "Consginment Value ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 7)(41, "p", 13);
    \u0275\u0275text(42, "Consginment Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "p-dropdown", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 7)(45, "p", 13);
    \u0275\u0275text(46, "Customs KD");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 7)(49, "p", 13);
    \u0275\u0275text(50, "IATA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "p-dropdown", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 21)(53, "button", 22);
    \u0275\u0275text(54, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 23);
    \u0275\u0275listener("click", function ConsoleEditpopupComponent_Template_button_click_55_listener() {
      return ctx.save();
    });
    \u0275\u0275text(56, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(22);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(14, _c011));
    \u0275\u0275property("options", ctx.countryIdList)("panelStyle", \u0275\u0275pureFunction0(15, _c011));
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(16, _c011));
    \u0275\u0275property("options", ctx.currencyIdList)("panelStyle", \u0275\u0275pureFunction0(17, _c011));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_7_0 = ctx.form.get("customsKd")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.form.get("customsKd")) == null ? null : tmp_7_0.dirty) ? "invalid" : "");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c011));
    \u0275\u0275property("options", ctx.iataList)("panelStyle", \u0275\u0275pureFunction0(19, _c011));
  }
}, dependencies: [NgClass, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 20rem);\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=console-editpopup.component.css.map */"] });
var ConsoleEditpopupComponent = _ConsoleEditpopupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleEditpopupComponent, { className: "ConsoleEditpopupComponent", filePath: "src\\app\\main\\airport\\console\\console-editpopup\\console-editpopup.component.ts", lineNumber: 19 });
})();

// src/app/main/airport/console/console-edit/console-edit.component.ts
var _c012 = () => ({ "width": "100%" });
function ConsoleEditComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 21)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsoleEditComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 21)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsoleEditComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 22);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "MAWB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "HAWB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Partner HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Airport Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Consignee Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Consginment Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Consginment Currency ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Custom KD ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "IATA KD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Created On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ConsoleEditComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275element(2, "p-tableCheckbox", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "p", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "p", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "p", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "p", 26);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "p", 26);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "p", 26);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "p", 26);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "p", 26);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "p", 26);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td")(31, "p", 26);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td")(34, "p", 26);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "td")(37, "p", 26);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "td")(41, "div", 27)(42, "img", 28);
    \u0275\u0275listener("click", function ConsoleEditComponent_ng_template_29_Template_img_click_42_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editItem("Edit", item_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "img", 29);
    \u0275\u0275listener("click", function ConsoleEditComponent_ng_template_29_Template_img_click_43_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeItem(item_r3));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", item_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.masterAirwayBill, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.houseAirwayBill, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.partnerMasterAirwayBill, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.partnerHouseAirwayBill, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.airportOriginCode, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.hsCode, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.consigneeName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.consignmentValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.consignmentCurrency, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.customsKd, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.iataKd, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(39, 13, item_r3.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsoleEditComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ConsoleEditComponent_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.transfer());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate("Transfer");
  }
}
var _ConsoleEditComponent = class _ConsoleEditComponent {
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
  onChange() {
    const choosen = this.selectedConsole[this.selectedConsole.length - 1];
    this.selectedConsole.length = 0;
    this.selectedConsole.push(choosen);
  }
  ngOnInit() {
    let code = this.route.snapshot.params["code"];
    this.pageToken = this.cs.decrypt(code);
    const dataToSend = ["Airport", "Console", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    this.form.controls.consoleId.disable();
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
    console.log(this.pageToken.line);
    this.form.patchValue(line);
    this.spin.show();
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.consoleId = [line.consoleId];
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
  }
  save() {
    this.submitted = true;
    console.log(this.selectedConsole);
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
          detail: "Please fill required fields to continue"
        });
        return;
      }
      this.spin.show();
      this.selectedConsole.forEach((x) => {
        x.eventCode = 10;
      });
      this.service.Update(this.selectedConsole).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res[0].consoleId + " has been updated successfully"
          });
          let line = {};
          line.consoleId = this.subProductArray[0].consoleId;
          this.fill(line);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  editItem(data, item) {
    console.log(item);
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
    const dialogRef = this.dialog.open(ConsoleTransferComponent, {
      disableClose: true,
      width: "70%",
      height: "40%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: this.selectedConsole
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.subProductArray.push(result);
      }
    });
  }
};
_ConsoleEditComponent.\u0275fac = function ConsoleEditComponent_Factory(t) {
  return new (t || _ConsoleEditComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsoleService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialog));
};
_ConsoleEditComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleEditComponent, selectors: [["app-console-edit"]], decls: 36, vars: 23, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mx-auto", "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row", "scrollNew"], [1, "col-4", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "consoleId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "statusId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["scrollHeight", "calc(100vh - 31.8rem)", "selectionMode", "multiple", 3, "selectionChange", "scrollable", "value", "selection"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "5%"], ["routerLink", "/main/airport/console", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], ["class", "buttom1 bgBlack text-white mx-1", 3, "click", 4, "ngIf"], [1, "text-danger"], [2, "width", "5rem"], [1, "pl-3"], [2, "text-align", "center"], [3, "value"], [1, "w-100", "pl-2", "ml-2"], [1, "d-flex", "img-icon", "px-3"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "width", "24px", "height", "24px", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", "width", "24px", "height", "24px", 3, "click"]], template: function ConsoleEditComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-dropdown", 9);
    \u0275\u0275template(12, ConsoleEditComponent_mat_error_12_Template, 3, 1, "mat-error", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7)(14, "p", 8);
    \u0275\u0275text(15, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "p-dropdown", 11);
    \u0275\u0275template(17, ConsoleEditComponent_mat_error_17_Template, 3, 1, "mat-error", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 7)(19, "p", 8);
    \u0275\u0275text(20, "Console ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 7)(23, "p", 8);
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 5)(27, "p-table", 14);
    \u0275\u0275twoWayListener("selectionChange", function ConsoleEditComponent_Template_p_table_selectionChange_27_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedConsole, $event) || (ctx.selectedConsole = $event);
      return $event;
    });
    \u0275\u0275template(28, ConsoleEditComponent_ng_template_28_Template, 29, 0, "ng-template", 15)(29, ConsoleEditComponent_ng_template_29_Template, 44, 16, "ng-template", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 17)(31, "button", 18);
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 19);
    \u0275\u0275listener("click", function ConsoleEditComponent_Template_button_click_33_listener() {
      return ctx.save();
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, ConsoleEditComponent_button_35_Template, 2, 1, "button", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Console - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c012));
    \u0275\u0275property("options", ctx.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(20, _c012));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c012));
    \u0275\u0275property("options", ctx.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(22, _c012));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandling("companyId"));
    \u0275\u0275advance(10);
    \u0275\u0275property("scrollable", true)("value", ctx.subProductArray);
    \u0275\u0275twoWayProperty("selection", ctx.selectedConsole);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.pageToken.pageflow != "New" ? "Confirm" : "Save");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow == "Edit");
  }
}, dependencies: [NgIf, RouterLink, PrimeTemplate, Table, TableCheckbox, TableHeaderCheckbox, Dropdown, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.img-icon[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n/*# sourceMappingURL=console-edit.component.css.map */"] });
var ConsoleEditComponent = _ConsoleEditComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleEditComponent, { className: "ConsoleEditComponent", filePath: "src\\app\\main\\airport\\console\\console-edit\\console-edit.component.ts", lineNumber: 22 });
})();

// src/app/main/airport/airport-routing.module.ts
var routes = [
  { path: "preAlertManifest", component: PreAlertManifestComponent, data: { title: "Mid-Mile", module: "Pre-Alert Manifest" } },
  { path: "preAlertManifest-new/:code", component: PreAlertNewComponent, data: { title: "Mid-Mile", module: "Pre-Alert Manifest New" } },
  { path: "console", component: ConsoleComponent, data: { title: "Mid-Mile", module: "Console" } },
  { path: "console-new/:code", component: ConsoleNewComponent, data: { title: "Mid-Mile", module: "Console" } },
  { path: "console-edit/:code", component: ConsoleEditComponent, data: { title: "Mid-Mile", module: "Console" } },
  { path: "bondedManifest", component: BondedManifestComponent, data: { title: "Mid-Mile", module: "Bonded Manifest" } },
  { path: "bondedManifest-new/:code", component: BondedManifestNewComponent, data: { title: "Mid-Mile", module: "Bonded Manifest New" } },
  { path: "ccr", component: CcrComponent, data: { title: "Mid-Mile", module: "CCR" } },
  { path: "ccr-new/:code", component: CcrNewComponent, data: { title: "Mid-Mile", module: "CCR New" } }
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
//# sourceMappingURL=chunk-ZTUEVPPT.js.map

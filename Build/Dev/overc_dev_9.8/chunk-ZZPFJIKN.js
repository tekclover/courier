import {
  NumberrangeService
} from "./chunk-4GQGQ3CR.js";
import {
  CommonAPIService
} from "./chunk-3HOSZZPC.js";
import {
  CustomTableComponent,
  DeleteComponent
} from "./chunk-SK5AN2PK.js";
import {
  PathNameService
} from "./chunk-4CTM7S7U.js";
import {
  ActivatedRoute,
  AuthService,
  Checkbox,
  Chips,
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
} from "./chunk-4DL5P5IX.js";

// src/app/main/master/status-event/status-event.service.ts
var _StatusEventService = class _StatusEventService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(typeId) {
    return this.http.get("/overc-idmaster-service/statusevent/" + typeId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/statusevent", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/statusevent/" + obj.typeId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId, obj);
  }
  Delete(typeId) {
    return this.http.delete("/overc-idmaster-service/statusevent/" + typeId + "?languageId=" + this.auth.languageId + "&companyId=" + this.auth.companyId);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/statusevent/find", obj);
  }
};
_StatusEventService.\u0275fac = function StatusEventService_Factory(t) {
  return new (t || _StatusEventService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_StatusEventService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatusEventService, factory: _StatusEventService.\u0275fac, providedIn: "root" });
var StatusEventService = _StatusEventService;

// src/app/main/master/status-event/status-event.component.ts
var _c0 = ["statusEvent"];
var _c1 = () => ({ width: "80vw" });
var _c2 = () => ({ "width": "100%" });
var _c3 = () => ({ "width": "100rem" });
function StatusEventComponent_ng_template_40_th_3_Template(rf, ctx) {
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
function StatusEventComponent_ng_template_40_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th")(1, "input", 42);
    \u0275\u0275listener("input", function StatusEventComponent_ng_template_40_th_7_Template_input_input_1_listener($event) {
      const col_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275nextContext(2);
      const StatusEventTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(StatusEventTag_r3.filter($event.target == null ? null : $event.target.value, col_r6.field, "contains"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const StatusEventTag_r3 = \u0275\u0275reference(39);
    \u0275\u0275advance();
    \u0275\u0275property("value", StatusEventTag_r3.filters[col_r6.field] == null ? null : StatusEventTag_r3.filters[col_r6.field].value);
  }
}
function StatusEventComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StatusEventComponent_ng_template_40_th_3_Template, 3, 3, "th", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tr")(5, "th", 36);
    \u0275\u0275element(6, "p-tableHeaderCheckbox", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StatusEventComponent_ng_template_40_th_7_Template, 2, 1, "th", 39);
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
function StatusEventComponent_ng_template_41_td_3_ng_container_1_Template(rf, ctx) {
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
function StatusEventComponent_ng_template_41_td_3_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275listener("click", function StatusEventComponent_ng_template_41_td_3_ng_template_2_span_0_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const rowData_r11 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.openCrud("Edit", rowData_r11));
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
function StatusEventComponent_ng_template_41_td_3_ng_template_2_span_1_Template(rf, ctx) {
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
function StatusEventComponent_ng_template_41_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StatusEventComponent_ng_template_41_td_3_ng_template_2_span_0_Template, 2, 1, "span", 47)(1, StatusEventComponent_ng_template_41_td_3_ng_template_2_span_1_Template, 3, 4, "span", 48);
  }
  if (rf & 2) {
    const col_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", col_r10.format == "hyperLink");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r10.format == "date");
  }
}
function StatusEventComponent_ng_template_41_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StatusEventComponent_ng_template_41_td_3_ng_container_1_Template, 2, 1, "ng-container", 46)(2, StatusEventComponent_ng_template_41_td_3_ng_template_2_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const dateTemplate_r13 = \u0275\u0275reference(3);
    \u0275\u0275styleMap(col_r10.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r10.format !== "date" && col_r10.format !== "hyperLink")("ngIfElse", dateTemplate_r13);
  }
}
function StatusEventComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "p-checkbox", 44);
    \u0275\u0275listener("onChange", function StatusEventComponent_ng_template_41_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function StatusEventComponent_ng_template_41_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r8.selectedStatusEvent, $event) || (ctx_r8.selectedStatusEvent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, StatusEventComponent_ng_template_41_td_3_Template, 4, 4, "td", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r11 = ctx.$implicit;
    const columns_r14 = ctx.columns;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selectedRow", ctx_r8.selectedStatusEvent[0] === rowData_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r8.selectedStatusEvent);
    \u0275\u0275property("value", rowData_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r14);
  }
}
function StatusEventComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 50);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function StatusEventComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 51);
    \u0275\u0275text(3, "Confirm");
    \u0275\u0275elementEnd();
  }
}
var _StatusEventComponent = class _StatusEventComponent {
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
    this.statusEventTable = [];
    this.selectedStatusEvent = [];
    this.cols = [];
    this.target = [];
    this.searchform = this.fb.group({
      typeId: [],
      // statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.fieldDisplayNames = {
      typeId: "Status/Event",
      statusId: "Status"
    };
    this.languageDropdown = [];
    this.companyDropdown = [];
    this.typeDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Master", "Status/Event"];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "companyName", header: "Company" },
      { field: "typeId", header: "Type ID", format: "hyperLink" },
      { field: "preRequisite", header: "Pre Requisite" },
      { field: "type", header: "Type" },
      { field: "action", header: "Action" },
      { field: "trigger", header: "Trigger" },
      { field: "level", header: "Level" },
      { field: "conclusive", header: "Conclusive" },
      { field: "remark", header: "Remark" },
      { field: "statusDescription", header: "Status" },
      { field: "createdBy", header: "Created By" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "languageId", header: "Language ID" },
      { field: "languageDescription", header: "Language" },
      { field: "companyId", header: "Company ID" },
      { field: "statusId", header: "Status ID" },
      { field: "typeText", header: "Type Name" },
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
          this.statusEventTable = res;
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
    const choosen = this.selectedStatusEvent[this.selectedStatusEvent.length - 1];
    this.selectedStatusEvent.length = 0;
    this.selectedStatusEvent.push(choosen);
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
        this.deleterecord(this.selectedStatusEvent[0]);
      }
    });
  }
  openCrud(type = "New", linedata = null) {
    if (linedata) {
      this.selectedStatusEvent = linedata;
    }
    if (this.selectedStatusEvent.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedStatusEvent[0] : linedata, pageflow: type });
      this.router.navigate(["/main/master/statusevent-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedStatusEvent.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      disableClose: true,
      width: "60%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "30%" },
      data: { line: this.selectedStatusEvent, module: "Status/Event", body: "This action cannot be undone. All values associated with this field will be lost." }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedStatusEvent[0]);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines.typeId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Deleted", key: "br", detail: lines.typeId + " deleted successfully" });
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
    const exportData = this.statusEventTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Status/Event");
  }
  getSearchDropdown() {
    this.statusEventTable.forEach((res) => {
      if (res.languageId != null) {
        this.languageDropdown.push({ value: res.languageId, label: res.languageDescription });
        this.languageDropdown = this.cs.removeDuplicatesFromArrayList(this.languageDropdown, "value");
      }
      if (res.companyId != null) {
        this.companyDropdown.push({ value: res.companyId, label: res.companyName });
        this.companyDropdown = this.cs.removeDuplicatesFromArrayList(this.companyDropdown, "value");
      }
      if (res.typeId != null) {
        this.typeDropdown.push({ value: res.typeId, label: res.typeId });
        this.typeDropdown = this.cs.removeDuplicatesFromArrayList(this.typeDropdown, "value");
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
        this.statusEventTable = res;
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
      typeId: [],
      // statusId: [],
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
_StatusEventComponent.\u0275fac = function StatusEventComponent_Factory(t) {
  return new (t || _StatusEventComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(StatusEventService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService));
};
_StatusEventComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusEventComponent, selectors: [["app-status-event"]], viewQuery: function StatusEventComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 46, vars: 28, consts: [["statusEvent", ""], ["StatusEventTag", ""], ["menu", "matMenu"], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "typeId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "createdOn", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "customClass"], ["matMenuContent", ""], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "p-column-filter", 3, "input", "value"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "onChange", "ngModelChange", "ngModel", "value"], [3, "style", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["style", "cursor:pointer", "class", "textOrange font-weight-bold hvr-underline-from-center", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "textOrange", "font-weight-bold", "hvr-underline-from-center", 2, "cursor", "pointer", 3, "click"], [1, "my-2", "w-100", "pl-3"], ["mat-menu-item", ""]], template: function StatusEventComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3, "Status/Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "img", 7);
    \u0275\u0275listener("click", function StatusEventComponent_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "img", 8);
    \u0275\u0275listener("click", function StatusEventComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 9);
    \u0275\u0275listener("click", function StatusEventComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 10);
    \u0275\u0275listener("click", function StatusEventComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.customTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function StatusEventComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "p-iconField", 14)(14, "p-inputIcon", 15);
    \u0275\u0275listener("click", function StatusEventComponent_Template_p_inputIcon_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const statusEvent_r2 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(statusEvent_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 16);
    \u0275\u0275listener("input", function StatusEventComponent_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const StatusEventTag_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(StatusEventTag_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-overlayPanel", 17, 0)(18, "form", 18)(19, "div", 19)(20, "div", 20)(21, "p", 21);
    \u0275\u0275text(22, "Type ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-multiSelect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "p", 21);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "p-multiSelect", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "div")(30, "img", 25);
    \u0275\u0275listener("click", function StatusEventComponent_Template_img_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "button", 26);
    \u0275\u0275listener("click", function StatusEventComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275listener("click", function StatusEventComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(35, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "p-chips", 28);
    \u0275\u0275listener("onRemove", function StatusEventComponent_Template_p_chips_onRemove_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function StatusEventComponent_Template_p_chips_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "p-table", 30, 1);
    \u0275\u0275template(40, StatusEventComponent_ng_template_40_Template, 8, 4, "ng-template", 31)(41, StatusEventComponent_ng_template_41_Template, 4, 5, "ng-template", 32)(42, StatusEventComponent_ng_template_42_Template, 4, 1, "ng-template", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "mat-menu", 34, 2);
    \u0275\u0275template(45, StatusEventComponent_ng_template_45_Template, 4, 0, "ng-template", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c1));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c2));
    \u0275\u0275property("options", ctx.typeDropdown)("panelStyle", \u0275\u0275pureFunction0(24, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c2));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(26, _c2));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.statusEventTable)("scrollable", true)("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(27, _c3));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, SortIcon, TableHeaderCheckbox, InputIcon, IconField, InputText, Checkbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenu, MatMenuItem, MatMenuContent, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=status-event.component.css.map */"] });
var StatusEventComponent = _StatusEventComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusEventComponent, { className: "StatusEventComponent", filePath: "src\\app\\main\\master\\status-event\\status-event.component.ts", lineNumber: 21 });
})();

// src/app/main/master/status-event/status-event-new/status-event-new.component.ts
var _c02 = () => ({ "width": "100%" });
function StatusEventNewComponent_ng_template_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function StatusEventNewComponent_ng_template_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function StatusEventNewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function StatusEventNewComponent_ng_template_11_Template_div_click_0_listener() {
      const onClick_r2 = \u0275\u0275restoreView(_r1).onClick;
      return \u0275\u0275resetView(onClick_r2.emit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, StatusEventNewComponent_ng_template_11_p_2_Template, 2, 0, "p", 12)(3, StatusEventNewComponent_ng_template_11_img_3_Template, 1, 0, "img", 13);
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
function StatusEventNewComponent_ng_template_12_mat_error_5_Template(rf, ctx) {
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
function StatusEventNewComponent_ng_template_12_mat_error_10_Template(rf, ctx) {
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
function StatusEventNewComponent_ng_template_12_mat_error_19_Template(rf, ctx) {
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
function StatusEventNewComponent_ng_template_12_mat_error_24_Template(rf, ctx) {
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
function StatusEventNewComponent_ng_template_12_mat_error_29_Template(rf, ctx) {
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
function StatusEventNewComponent_ng_template_12_mat_error_34_Template(rf, ctx) {
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
function StatusEventNewComponent_ng_template_12_mat_error_39_Template(rf, ctx) {
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
function StatusEventNewComponent_ng_template_12_mat_error_44_Template(rf, ctx) {
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
function StatusEventNewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-dropdown", 20);
    \u0275\u0275template(5, StatusEventNewComponent_ng_template_12_mat_error_5_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19);
    \u0275\u0275text(8, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-dropdown", 22);
    \u0275\u0275template(10, StatusEventNewComponent_ng_template_12_mat_error_10_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275text(13, "Type ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 24);
    \u0275\u0275text(17, "Pre Requisite");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "p-dropdown", 25);
    \u0275\u0275template(19, StatusEventNewComponent_ng_template_12_mat_error_19_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "p", 24);
    \u0275\u0275text(22, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-dropdown", 26);
    \u0275\u0275template(24, StatusEventNewComponent_ng_template_12_mat_error_24_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18)(26, "p", 24);
    \u0275\u0275text(27, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "p-dropdown", 27);
    \u0275\u0275template(29, StatusEventNewComponent_ng_template_12_mat_error_29_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 18)(31, "p", 24);
    \u0275\u0275text(32, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-dropdown", 28);
    \u0275\u0275template(34, StatusEventNewComponent_ng_template_12_mat_error_34_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 18)(36, "p", 19);
    \u0275\u0275text(37, "Trigger");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 29);
    \u0275\u0275template(39, StatusEventNewComponent_ng_template_12_mat_error_39_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 18)(41, "p", 19);
    \u0275\u0275text(42, "Conclusive");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "p-dropdown", 30);
    \u0275\u0275template(44, StatusEventNewComponent_ng_template_12_mat_error_44_Template, 3, 1, "mat-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18)(46, "p", 19);
    \u0275\u0275text(47, "Remark");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 18)(50, "p", 19);
    \u0275\u0275text(51, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "p-dropdown", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 33)(54, "button", 34);
    \u0275\u0275text(55, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 35);
    \u0275\u0275listener("click", function StatusEventNewComponent_ng_template_12_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_20_0;
    let tmp_25_0;
    let tmp_30_0;
    let tmp_33_0;
    let tmp_37_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(49, _c02));
    \u0275\u0275property("options", ctx_r2.languageIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(50, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("languageId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(51, _c02));
    \u0275\u0275property("options", ctx_r2.companyIdList)("disabled", true)("panelStyle", \u0275\u0275pureFunction0(52, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("companyId"));
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(53, _c02));
    \u0275\u0275property("options", ctx_r2.typeIdList)("ngClass", ((tmp_14_0 = ctx_r2.form.get("preRequisite")) == null ? null : tmp_14_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("disabled", true)("panelStyle", \u0275\u0275pureFunction0(54, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("preRequisite"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(55, _c02));
    \u0275\u0275property("options", ctx_r2.type)("ngClass", ((tmp_20_0 = ctx_r2.form.get("type")) == null ? null : tmp_20_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(56, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("type"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(57, _c02));
    \u0275\u0275property("options", ctx_r2.action)("ngClass", ((tmp_25_0 = ctx_r2.form.get("action")) == null ? null : tmp_25_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(58, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("action"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(59, _c02));
    \u0275\u0275property("options", ctx_r2.level)("ngClass", ((tmp_30_0 = ctx_r2.form.get("level")) == null ? null : tmp_30_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(60, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("level"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_33_0 = ctx_r2.form.get("trigger")) == null ? null : tmp_33_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("trigger"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(61, _c02));
    \u0275\u0275property("options", ctx_r2.conclusive)("ngClass", ((tmp_37_0 = ctx_r2.form.get("conclusive")) == null ? null : tmp_37_0.invalid) && ctx_r2.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(62, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorHandling("conclusive"));
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(63, _c02));
    \u0275\u0275property("options", ctx_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageToken.pageflow != "New" ? "Update" : "Save");
  }
}
function StatusEventNewComponent_p_stepperPanel_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function StatusEventNewComponent_p_stepperPanel_13_ng_template_1_Template_div_click_0_listener() {
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
function StatusEventNewComponent_p_stepperPanel_13_ng_template_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function StatusEventNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_18_listener() {
      const prevCallback_r8 = \u0275\u0275restoreView(_r7).prevCallback;
      return \u0275\u0275resetView(prevCallback_r8.emit());
    });
    \u0275\u0275text(19, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 35);
    \u0275\u0275listener("click", function StatusEventNewComponent_p_stepperPanel_13_ng_template_2_Template_button_click_20_listener() {
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
function StatusEventNewComponent_p_stepperPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-stepperPanel");
    \u0275\u0275template(1, StatusEventNewComponent_p_stepperPanel_13_ng_template_1_Template, 7, 2, "ng-template", 7)(2, StatusEventNewComponent_p_stepperPanel_13_ng_template_2_Template, 22, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
}
var _StatusEventNewComponent = class _StatusEventNewComponent {
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
    this.action = [];
    this.level = [];
    this.conclusive = [];
    this.type = [];
    this.form = this.fb.group({
      typeId: [, Validators.required],
      type: [, Validators.required],
      languageId: [this.auth.languageId, Validators.required],
      languageDescription: [],
      companyId: [this.auth.companyId, Validators.required],
      typeText: [],
      trigger: [],
      conclusive: [],
      level: [, Validators.required],
      action: [, Validators.required],
      preRequisite: [, Validators.required],
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
    this.typeIdList = [];
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
    ];
    this.action = [
      { value: "Automatic", label: "Automatic" },
      { value: "Manual", label: "Manual" }
    ];
    this.level = [
      { value: "Bag", label: "Bag" },
      { value: "Shipment", label: "Shipment" },
      { value: "Both", label: "Both" }
    ];
    this.conclusive = [
      { value: "No", label: "No" },
      { value: "Yes", label: "Yes" }
    ];
    this.type = [
      { value: "Status", label: "Status" },
      { value: "Event", label: "Event" }
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
    const dataToSend = ["Master", "Status/Event", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
      this.form.controls.typeId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    } else {
      this.spin.show();
      let obj = {};
      obj.numberRangeObject = ["STATUSEVENT"];
      this.numberRangeService.search(obj).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.typeId.patchValue(this.nextNumber);
            this.numCondition = "true";
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.typeId.disable();
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
      this.cas.dropdownlist.setup.statusevent.url
    ]).subscribe({
      next: (results) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.typeIdList = this.cas.forLanguageFilterWithoutKey(results[2], this.cas.dropdownlist.setup.statusevent.key);
        this.typeIdList.push({ value: 0, label: 0 });
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
          this.messageService.add({ severity: "success", summary: "Updated", key: "br", detail: res.typeId + " has been updated successfully" });
          this.router.navigate(["/main/master/statusevent"]);
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
            this.messageService.add({ severity: "success", summary: "Created", key: "br", detail: res.typeId + " has been created successfully" });
            this.router.navigate(["/main/master/statusevent"]);
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
_StatusEventNewComponent.\u0275fac = function StatusEventNewComponent_Factory(t) {
  return new (t || _StatusEventNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StatusEventService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NumberrangeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonAPIService));
};
_StatusEventNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusEventNewComponent, selectors: [["app-status-event-new"]], decls: 14, vars: 4, consts: [[1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "invisible", "buttom1", "bgBlack", "text-white", "ml-2"], [1, "w-75", "mt-4", "mx-auto"], [3, "formGroup"], [3, "activeStepChange", "activeStep"], ["pTemplate", "header"], ["pTemplate", "content"], [4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "circle borderCircle mb-0", 4, "ngIf"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", "", 4, "ngIf"], [1, "mb-0", "mt-2", "f600", "textBlack"], [1, "circle", "borderCircle", "mb-0"], ["src", "./assets/dashboard/tick.png", "alt", "", "srcset", ""], [1, "row", "scrollNew"], [1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "languageId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "companyId", "appendTo", "body", 3, "options", "disabled", "panelStyle"], ["maxlength", "50", "pInputText", "", "pKeyFilter", "alphanum", "formControlName", "typeId", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "preRequisite", "appendTo", "body", 3, "options", "ngClass", "disabled", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "type", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "action", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "level", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["pInputText", "", "formControlName", "trigger", "maxlength", "50", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["placeholder", "Select", "filter", "true", "formControlName", "conclusive", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["maxlength", "2000", "formControlName", "remark", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["appendTo", "body", "formControlName", "statusId", "placeholder", "Select", "filter", "true", 3, "options"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/master/statusevent", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "text-danger"], [1, "circle", "mb-0", 3, "ngClass"], [1, "mb-0", "mt-2", "f600", 3, "ngClass"], [1, "row"], ["type", "text", "formControlName", "createdBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "createdOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedBy", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["type", "text", "formControlName", "updatedOn", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "buttom1", "textBlack", "mx-1", 3, "click"]], template: function StatusEventNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1)(5, "button", 3);
    \u0275\u0275text(6, "Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "p-stepper", 6);
    \u0275\u0275twoWayListener("activeStepChange", function StatusEventNewComponent_Template_p_stepper_activeStepChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return $event;
    });
    \u0275\u0275elementStart(10, "p-stepperPanel");
    \u0275\u0275template(11, StatusEventNewComponent_ng_template_11_Template, 7, 2, "ng-template", 7)(12, StatusEventNewComponent_ng_template_12_Template, 58, 64, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, StatusEventNewComponent_p_stepperPanel_13_Template, 3, 0, "p-stepperPanel", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Status/Event - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeStep", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Dropdown, InputText, Stepper, StepperPanel, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatError, FormGroupDirective, FormControlName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=status-event-new.component.css.map */"] });
var StatusEventNewComponent = _StatusEventNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusEventNewComponent, { className: "StatusEventNewComponent", filePath: "src\\app\\main\\master\\status-event\\status-event-new\\status-event-new.component.ts", lineNumber: 18 });
})();

// src/app/main/id-masters/sub-product/sub-product.service.ts
var _SubProductService = class _SubProductService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  Get(subProductId, subProductValue) {
    return this.http.get("/overc-idmaster-service/subProduct/" + subProductId + "?subProductValue=" + subProductValue + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  Create(obj) {
    return this.http.post("/overc-idmaster-service/subProduct", obj);
  }
  CreateBulk(obj) {
    return this.http.post("/overc-idmaster-service/subProduct/create/list", obj);
  }
  Update(obj) {
    return this.http.patch("/overc-idmaster-service/subProduct/" + obj.subProductId + "?subProductValue=" + obj.subProductValue + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId, obj);
  }
  UpdateBulk(obj) {
    return this.http.patch("/overc-idmaster-service/subProduct/update/list", obj);
  }
  Delete(subProductId, subProductValue) {
    return this.http.delete("/overc-idmaster-service/subProduct/" + subProductId + "?subProductValue=" + subProductValue + "&companyId=" + this.auth.companyId + "&languageId=" + this.auth.languageId);
  }
  DeleteBulk(obj) {
    return this.http.post("/overc-idmaster-service/subProduct/delete/list", obj);
  }
  search(obj) {
    return this.http.post("/overc-idmaster-service/subProduct/find", obj);
  }
};
_SubProductService.\u0275fac = function SubProductService_Factory(t) {
  return new (t || _SubProductService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
};
_SubProductService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubProductService, factory: _SubProductService.\u0275fac, providedIn: "root" });
var SubProductService = _SubProductService;

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
  SubProductService,
  ProvinceService,
  CityService,
  CountryService,
  StatusEventComponent,
  StatusEventNewComponent
};
//# sourceMappingURL=chunk-ZZPFJIKN.js.map

import {
  ProductService
} from "./chunk-RIMWLZ4P.js";
import {
  ConsignmentLabelComponent,
  ConsignmentService,
  ConsignmentUpdatebulkComponent
} from "./chunk-R4BCLR3R.js";
import "./chunk-H6TAJSNF.js";
import {
  ConsignorService,
  CustomerService
} from "./chunk-HCIL5YXP.js";
import {
  CommonAPIService
} from "./chunk-HWI3WUKS.js";
import {
  CustomTableComponent,
  DeleteComponent
} from "./chunk-65BPJ6MG.js";
import {
  PathNameService
} from "./chunk-PNHOKMWE.js";
import {
  ActivatedRoute,
  AuthService,
  Calendar,
  Chips,
  CommonModule,
  CommonServiceService,
  DatePipe,
  DefaultValueAccessor,
  DomSanitizer,
  Dropdown,
  ElementRef,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  IconField,
  InputIcon,
  InputText,
  KeyFilter,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatInput,
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
  TabPanel,
  TabView,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
} from "./chunk-PUK22JM5.js";

// src/app/main/operation/consignment/consignment.component.ts
var _c0 = ["consignment"];
var _c1 = () => ({ width: "180" });
var _c2 = () => ({ width: "80vw" });
var _c3 = () => ({ "width": "100%" });
var _c4 = () => ({ "width": "130rem" });
function ConsignmentComponent_ng_template_59_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    \u0275\u0275styleMap(col_r6.style);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r6.header, " ");
  }
}
function ConsignmentComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 42);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 42);
    \u0275\u0275text(4, " Label ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ConsignmentComponent_ng_template_59_th_5_Template, 2, 3, "th", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r7 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", columns_r7);
  }
}
function ConsignmentComponent_ng_template_60_td_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r12 = \u0275\u0275nextContext().$implicit;
    const rowData_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r10[col_r12.field], " ");
  }
}
function ConsignmentComponent_ng_template_60_td_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r10.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsignmentComponent_ng_template_60_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsignmentComponent_ng_template_60_td_14_ng_container_1_Template, 2, 1, "ng-container", 50)(2, ConsignmentComponent_ng_template_60_td_14_ng_template_2_Template, 2, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    const dateTemplate_r13 = \u0275\u0275reference(3);
    \u0275\u0275styleMap(col_r12.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r12.format !== "date")("ngIfElse", dateTemplate_r13);
  }
}
function ConsignmentComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275element(2, "p-tableCheckbox", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45)(4, "img", 47);
    \u0275\u0275listener("click", function ConsignmentComponent_ng_template_60_Template_img_click_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const label_r9 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(label_r9.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-overlayPanel", null, 4)(7, "div", 14)(8, "button", 15);
    \u0275\u0275listener("click", function ConsignmentComponent_ng_template_60_Template_button_click_8_listener() {
      const rowData_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const label_r9 = \u0275\u0275reference(6);
      const ctx_r10 = \u0275\u0275nextContext();
      label_r9.hide();
      return \u0275\u0275resetView(ctx_r10.downloadLabel(rowData_r10, "download"));
    });
    \u0275\u0275element(9, "img", 48);
    \u0275\u0275text(10, "Download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function ConsignmentComponent_ng_template_60_Template_button_click_11_listener() {
      const rowData_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const label_r9 = \u0275\u0275reference(6);
      const ctx_r10 = \u0275\u0275nextContext();
      label_r9.hide();
      return \u0275\u0275resetView(ctx_r10.downloadLabel(rowData_r10, "print"));
    });
    \u0275\u0275element(12, "img", 49);
    \u0275\u0275text(13, "Print");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(14, ConsignmentComponent_ng_template_60_td_14_Template, 4, 4, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r10 = ctx.$implicit;
    const columns_r14 = ctx.columns;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r10);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", columns_r14);
  }
}
function ConsignmentComponent_ng_template_61_Template(rf, ctx) {
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
var _ConsignmentComponent = class _ConsignmentComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, spin, pdf, fb) {
    this.messageService = messageService;
    this.cs = cs;
    this.router = router;
    this.path = path;
    this.service = service;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.auth = auth;
    this.spin = spin;
    this.pdf = pdf;
    this.fb = fb;
    this.consignmentTable = [];
    this.selectedConsignment = [];
    this.cols = [];
    this.target = [];
    this.selectedFiles = null;
    this.searchform = this.fb.group({
      houseAirwayBill: [],
      masterAirwayBill: [],
      partnerId: [],
      pieceId: [],
      pieceItemId: [],
      shipperId: [],
      statusId: [],
      companyId: [[this.auth.companyId]],
      languageId: [[this.auth.languageId]]
    });
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.partnerDropdown = [];
    this.statusDropdown = [];
  }
  ngOnInit() {
    const dataToSend = ["Operations", "Consignment "];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "houseAirwayBill", header: "CN", style: "min-width: 5rem" },
      { field: "statusDescription", header: "Status", style: "min-width: 5rem" },
      { field: "eventText", header: "Event", style: "min-width: 5rem" },
      { field: "partnerName", header: "Partner", style: "min-width: 5rem" },
      { field: "productName", header: "Product", style: "min-width: 10rem" },
      //   { field: 'subProductName', header: 'Sub Product', style: 'min-width: 10rem' },
      { field: "countryOfOrigin", header: "Origin", style: "min-width: 5rem" },
      { field: "countryOfDestination", header: "Destination", style: "min-width: 5rem" },
      { field: "serviceTypeText", header: "Service Type", style: "min-width: 5rem" },
      { field: "paymentType", header: "Payment Type", style: "min-width: 5rem" },
      { field: "incoTerms", header: "Inco Terms", style: "min-width: 5rem" },
      { field: "createdBy", header: "Created By", style: "min-width: 5rem" },
      { field: "createdOn", header: "Created On", format: "date" }
    ];
    this.target = [
      { field: "statusId", header: "Status ID" },
      { field: "languageId", header: "Language ID" },
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
    this.spin.show();
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.houseAirwayBill = [20000000001];
    this.service.search(obj).subscribe({
      next: (res) => {
        this.consignmentTable = res;
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
    const choosen = this.selectedConsignment[this.selectedConsignment.length - 1];
    this.selectedConsignment.length = 0;
    this.selectedConsignment.push(choosen);
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
        this.deleterecord(this.selectedConsignment[0]);
      }
    });
  }
  updateBulk() {
    const dialogRef = this.dialog.open(ConsignmentUpdatebulkComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" },
      data: { title: "Consignment", code: this.selectedConsignment }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.initialCall();
    });
  }
  openCrud(type = "New", linedata = null) {
    if (this.selectedConsignment.length === 0 && type != "New") {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
    } else {
      let paramdata = this.cs.encrypt({ line: linedata == null ? this.selectedConsignment[0] : linedata, pageflow: type });
      this.router.navigate(["/main/operation/consignment-new/" + paramdata]);
    }
  }
  deleteDialog() {
    if (this.selectedConsignment.length === 0) {
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
        line: this.selectedConsignment,
        module: "Consignment",
        body: "This action cannot be undone. All values associated with this field will be lost."
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleterecord(this.selectedConsignment);
      }
    });
  }
  deleterecord(lines) {
    this.spin.show();
    this.service.Delete(lines).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Deleted",
          key: "br",
          detail: "Selected records deleted successfully"
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
    const exportData = this.consignmentTable.map((item) => {
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
    this.cs.exportAsExcel(exportData, "Consignment");
  }
  downloadLabel(line, type) {
    this.pdf.generatePdfBarocde(line, type);
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    this.selectedFiles = file;
    this.spin.show();
    this.service.uploadConsignment(this.selectedFiles).subscribe({
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
    this.consignmentTable.forEach((res) => {
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
        this.consignmentTable = res;
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
_ConsignmentComponent.\u0275fac = function ConsignmentComponent_Factory(t) {
  return new (t || _ConsignmentComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ConsignmentLabelComponent), \u0275\u0275directiveInject(FormBuilder));
};
_ConsignmentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignmentComponent, selectors: [["app-consignment"]], viewQuery: function ConsignmentComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 62, vars: 44, consts: [["fileInput", ""], ["op", ""], ["consignment", ""], ["consignmentTag", ""], ["label", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "file", 2, "display", "none", 3, "change"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "consignmentId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "selection", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3"], [3, "style", 4, "ngFor", "ngForOf"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], ["type", "button", "src", "./assets/common/document.png", "alt", "", "srcset", "", 2, "margin", "0 5px", "height", "1.3rem", 3, "click"], ["src", "./assets/common/download.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/print.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function ConsignmentComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "p", 8);
    \u0275\u0275text(3, "Consignment ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "input", 9, 0);
    \u0275\u0275listener("change", function ConsignmentComponent_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "img", 10);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_img_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("Edit"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "img", 11);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadExcel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "img", 12);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_img_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "img", 13);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_img_click_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const op_r2 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(op_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-overlayPanel", null, 1)(13, "div", 14)(14, "button", 15);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r3 = \u0275\u0275reference(6);
      const op_r2 = \u0275\u0275reference(12);
      op_r2.hide();
      return \u0275\u0275resetView(fileInput_r3.click());
    });
    \u0275\u0275element(15, "img", 16);
    \u0275\u0275text(16, "Upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 15);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const op_r2 = \u0275\u0275reference(12);
      op_r2.hide();
      return \u0275\u0275resetView(ctx.updateBulk());
    });
    \u0275\u0275element(18, "img", 16);
    \u0275\u0275text(19, "Bulk Update");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 17);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openCrud("New"));
    });
    \u0275\u0275element(21, "i", 18);
    \u0275\u0275text(22, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 19)(24, "p-iconField", 20)(25, "p-inputIcon", 21);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_p_inputIcon_click_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consignment_r4 = \u0275\u0275reference(28);
      return \u0275\u0275resetView(consignment_r4.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 22);
    \u0275\u0275listener("input", function ConsignmentComponent_Template_input_input_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consignmentTag_r5 = \u0275\u0275reference(58);
      return \u0275\u0275resetView(consignmentTag_r5.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "p-overlayPanel", 23, 2)(29, "form", 24)(30, "div", 25)(31, "div", 26)(32, "p", 27);
    \u0275\u0275text(33, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-multiSelect", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 26)(36, "p", 27);
    \u0275\u0275text(37, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "p-multiSelect", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 26)(40, "p", 27);
    \u0275\u0275text(41, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "p-multiSelect", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 26)(44, "p", 27);
    \u0275\u0275text(45, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "p-multiSelect", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 32)(48, "div")(49, "img", 33);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_img_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "button", 34);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(52, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 35);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(54, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "p-chips", 36);
    \u0275\u0275listener("onRemove", function ConsignmentComponent_Template_p_chips_onRemove_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsignmentComponent_Template_p_chips_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 37)(57, "p-table", 38, 3);
    \u0275\u0275twoWayListener("selectionChange", function ConsignmentComponent_Template_p_table_selectionChange_57_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedConsignment, $event) || (ctx.selectedConsignment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(59, ConsignmentComponent_ng_template_59_Template, 6, 1, "ng-template", 39)(60, ConsignmentComponent_ng_template_60_Template, 15, 5, "ng-template", 40)(61, ConsignmentComponent_ng_template_61_Template, 4, 1, "ng-template", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c1));
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c2));
    \u0275\u0275property("dismissable", false)("styleClass", "custom-overlay-panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.searchform);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c3));
    \u0275\u0275property("options", ctx.masterAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(36, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c3));
    \u0275\u0275property("options", ctx.houseAirwayBillDropdown)("panelStyle", \u0275\u0275pureFunction0(38, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c3));
    \u0275\u0275property("options", ctx.partnerDropdown)("panelStyle", \u0275\u0275pureFunction0(40, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c3));
    \u0275\u0275property("options", ctx.statusDropdown)("panelStyle", \u0275\u0275pureFunction0(42, _c3));
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fieldsWithValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx.cols)("value", ctx.consignmentTable)("scrollable", true);
    \u0275\u0275twoWayProperty("selection", ctx.selectedConsignment);
    \u0275\u0275property("paginator", true)("rows", 100)("showCurrentPageReport", true)("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(43, _c4));
  }
}, dependencies: [NgForOf, NgIf, PrimeTemplate, Table, TableCheckbox, TableHeaderCheckbox, InputIcon, IconField, InputText, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenuItem, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=consignment.component.css.map */"] });
var ConsignmentComponent = _ConsignmentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignmentComponent, { className: "ConsignmentComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment.component.ts", lineNumber: 23 });
})();

// src/app/main/operation/consignment/consignment-new/dimension/dimension.component.ts
var _DimensionComponent = class _DimensionComponent {
  constructor(dialogRef, data, cs, spin, route, router, fb, messageService, cas, auth) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.form = new FormGroup({});
  }
  ngOnInit() {
    if (this.data.module == "piece") {
      this.form = this.fb.group({
        codAmount: [""],
        declaredValue: [""],
        description: [""],
        dimensionUnit: [""],
        height: [""],
        itemDetails: this.fb.array([]),
        length: [""],
        packReferenceNumber: [""],
        partnerType: [""],
        pieceId: [""],
        volume: [""],
        volumeUnit: [""],
        weight: [""],
        weightUnit: [""],
        width: [""],
        hsCode: [""],
        pieceValue: [""],
        pieceCurrency: [""]
      });
    }
    if (this.data.module == "item") {
      this.form = this.fb.group({
        codAmount: [],
        declaredValue: [],
        description: [],
        dimensionUnit: [],
        height: [],
        hsCode: [],
        imageRefId: [],
        itemCode: [],
        length: [],
        partnerName: [],
        partnerType: [],
        pieceItemId: [],
        pdfUrl: [],
        volume: [],
        volumeUnit: [],
        weight: [],
        weightUnit: [],
        width: []
      });
    }
    this.form.patchValue(this.data.line.value);
  }
  save() {
    this.dialogRef.close(this.form.value);
  }
  calculateVolume(formName) {
    const volume = formName.controls.length.value * formName.controls.width.value * formName.controls.height.value;
    formName.controls.volume.patchValue(volume);
  }
};
_DimensionComponent.\u0275fac = function DimensionComponent_Factory(t) {
  return new (t || _DimensionComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_DimensionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DimensionComponent, selectors: [["app-dimension"]], decls: 45, vars: 1, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], ["id", "length", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "length", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change"], ["id", "width", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "width", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change"], ["id", "height", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "height", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change"], ["id", "dimensionUnit", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "dimensionUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["id", "volume", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "volume", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "formControlName", "volumeUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["id", "weight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "weight", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["id", "weightUnit", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "weightUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "float-right", "py-2"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function DimensionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Dimension");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
    \u0275\u0275text(10, "Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 9);
    \u0275\u0275listener("change", function DimensionComponent_Template_input_change_11_listener() {
      return ctx.calculateVolume(ctx.form);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "p", 8);
    \u0275\u0275text(14, "Width");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 11);
    \u0275\u0275listener("change", function DimensionComponent_Template_input_change_15_listener() {
      return ctx.calculateVolume(ctx.form);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "p", 8);
    \u0275\u0275text(18, "Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 13);
    \u0275\u0275listener("change", function DimensionComponent_Template_input_change_19_listener() {
      return ctx.calculateVolume(ctx.form);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "p", 8);
    \u0275\u0275text(22, "Dimension Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16)(25, "p", 8);
    \u0275\u0275text(26, "Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 16)(29, "p", 8);
    \u0275\u0275text(30, "Volume Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19)(33, "p", 8);
    \u0275\u0275text(34, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 21)(37, "p", 8);
    \u0275\u0275text(38, "Weight Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 23)(41, "button", 24);
    \u0275\u0275text(42, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 25);
    \u0275\u0275listener("click", function DimensionComponent_Template_button_click_43_listener() {
      return ctx.save();
    });
    \u0275\u0275text(44, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
  }
}, dependencies: [InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n/*# sourceMappingURL=dimension.component.css.map */"] });
var DimensionComponent = _DimensionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DimensionComponent, { className: "DimensionComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment-new\\dimension\\dimension.component.ts", lineNumber: 16 });
})();

// src/app/main/operation/consignment/consignment-new/image-upload/image-upload.component.ts
var _c02 = () => ({ width: "180" });
function ImageUploadComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "File Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ImageUploadComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 15)(1, "td");
    \u0275\u0275element(2, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "img", 18);
    \u0275\u0275listener("click", function ImageUploadComponent_ng_template_12_Template_img_click_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const op_r4 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(op_r4.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-overlayPanel", null, 1)(9, "div", 19)(10, "button", 20);
    \u0275\u0275listener("click", function ImageUploadComponent_ng_template_12_Template_button_click_10_listener() {
      const i_r5 = \u0275\u0275restoreView(_r3).rowIndex;
      const op_r4 = \u0275\u0275reference(8);
      const ctx_r5 = \u0275\u0275nextContext();
      op_r4.hide();
      return \u0275\u0275resetView(ctx_r5.removeItem(i_r5));
    });
    \u0275\u0275element(11, "img", 21);
    \u0275\u0275text(12, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 20);
    \u0275\u0275listener("click", function ImageUploadComponent_ng_template_12_Template_button_click_13_listener() {
      const rowData_r7 = \u0275\u0275restoreView(_r3).$implicit;
      const op_r4 = \u0275\u0275reference(8);
      const ctx_r5 = \u0275\u0275nextContext();
      op_r4.hide();
      return \u0275\u0275resetView(ctx_r5.download(rowData_r7));
    });
    \u0275\u0275element(14, "img", 22);
    \u0275\u0275text(15, "Download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("formGroup", item_r8);
    \u0275\u0275advance(7);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(3, _c02));
  }
}
var _ImageUploadComponent = class _ImageUploadComponent {
  constructor(dialogRef, data, cs, spin, route, sanitizer, router, fb, service, messageService, cas, auth) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.cs = cs;
    this.spin = spin;
    this.route = route;
    this.sanitizer = sanitizer;
    this.router = router;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.imageForm = this.fb.group({
      referenceImageList: this.fb.array([])
      // Initialize an empty FormArray
    });
    this.selectedFiles = null;
    this.imageDetailsTable = [];
  }
  get imageDetails() {
    return this.imageForm.get("referenceImageList");
  }
  removeItem(index) {
    this.imageDetails.removeAt(index);
  }
  ngOnInit() {
    console.log(this.data);
    this.patchForm(this.data.line.value);
  }
  selectFiles(event) {
    this.selectedFiles = event.target.files;
    this.uploadFile();
  }
  uploadFile() {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.log("No files selected for upload.");
      return;
    }
    this.fileLocation = "/" + (/* @__PURE__ */ new Date()).getDate() + "-" + ((/* @__PURE__ */ new Date()).getMonth() + 1) + "-" + (/* @__PURE__ */ new Date()).getFullYear() + "_" + this.cs.timeFormat(/* @__PURE__ */ new Date()) + "/";
    this.service.uploadFiles(this.selectedFiles, this.fileLocation).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: "success",
          summary: "Updated",
          key: "br",
          detail: "File uploaded successfully"
        });
        result.forEach((x) => {
          x["referenceImageUrl"] = x.filePath;
          x["imageRefId"] = x.fileName;
        });
        this.patchForm(result);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  save() {
    this.dialogRef.close(this.imageForm.controls.referenceImageList.value);
  }
  patchForm(shipmentData) {
    const itemsArray = this.imageForm.get("referenceImageList");
    shipmentData.forEach((piece) => {
      itemsArray.push(this.patchReferenceImages(piece));
    });
    console.log(this.imageForm);
  }
  patchReferenceImages(image) {
    return this.fb.group({
      imageRefId: [image.imageRefId],
      pdfUrl: [image.pdfUrl],
      referenceImageUrl: [image.referenceImageUrl]
    });
  }
  download(element) {
    return __async(this, null, function* () {
      this.spin.show();
      const blob = yield this.service.download(element.value).catch((err) => {
        this.cs.commonerrorNew(err);
      });
      this.spin.hide();
      if (blob) {
        const blobOb = new Blob([blob], {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });
        this.fileUrldownload = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blobOb));
        this.docurl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = this.docurl;
        a.download = element.value.imageRefId;
        a.click();
        URL.revokeObjectURL(this.docurl);
      }
      this.spin.hide();
    });
  }
};
_ImageUploadComponent.\u0275fac = function ImageUploadComponent_Factory(t) {
  return new (t || _ImageUploadComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService));
};
_ImageUploadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageUploadComponent, selectors: [["app-image-upload"]], decls: 18, vars: 2, consts: [["fileInput", ""], ["op", ""], [1, "bgWhite", "text-black", "w-93", "h-100", "mx-4", "my-2", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "mt-4"], ["scrollHeight", "calc(100vh - 24.8rem)", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "my-3", "justify-content-end"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [3, "formGroup"], ["type", "text", "matInput", "", "formControlName", "imageRefId", 1, "inputborderLess", "pl-3"], ["type", "text", "formControlName", "referenceImageUrl", 1, "inputborderLess", "pl-3"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/delete1x.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/download.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"]], template: function ImageUploadComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "Image Upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 5, 0);
    \u0275\u0275listener("change", function ImageUploadComponent_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectFiles($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275listener("click", function ImageUploadComponent_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r2 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(fileInput_r2.click());
    });
    \u0275\u0275element(7, "i", 7);
    \u0275\u0275text(8, " Add New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "p-table", 9);
    \u0275\u0275template(11, ImageUploadComponent_ng_template_11_Template, 7, 0, "ng-template", 10)(12, ImageUploadComponent_ng_template_12_Template, 16, 4, "ng-template", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "button", 13);
    \u0275\u0275text(15, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 14);
    \u0275\u0275listener("click", function ImageUploadComponent_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.save());
    });
    \u0275\u0275text(17, "Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("scrollable", true)("value", ctx.imageDetails.controls);
  }
}, dependencies: [PrimeTemplate, Table, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, OverlayPanel, MatInput, MatMenuItem, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.inputborderLess[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=image-upload.component.css.map */"] });
var ImageUploadComponent = _ImageUploadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageUploadComponent, { className: "ImageUploadComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment-new\\image-upload\\image-upload.component.ts", lineNumber: 19 });
})();

// src/app/main/operation/consignment/consignment-new/item-details/item-details.component.ts
var _c03 = () => ({ "width": "100%" });
var _c12 = () => ({ width: "180" });
function ItemDetailsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "HS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Unit Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ItemDetailsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 15)(1, "td")(2, "p-dropdown", 16, 0);
    \u0275\u0275listener("onChange", function ItemDetailsComponent_ng_template_11_Template_p_dropdown_onChange_2_listener() {
      const rowData_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const hscode_r3 = \u0275\u0275reference(3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hsCodeChange(hscode_r3, rowData_r2));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "input", 18);
    \u0275\u0275listener("change", function ItemDetailsComponent_ng_template_11_Template_input_change_7_listener() {
      const rowData_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.calculateTotalValue(rowData_r2));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 19);
    \u0275\u0275listener("change", function ItemDetailsComponent_ng_template_11_Template_input_change_9_listener() {
      const rowData_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.calculateTotalValue(rowData_r2));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "p-dropdown", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "img", 22);
    \u0275\u0275listener("click", function ItemDetailsComponent_ng_template_11_Template_img_click_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const op_r5 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(op_r5.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p-overlayPanel", null, 1)(18, "div", 23)(19, "button", 24);
    \u0275\u0275listener("click", function ItemDetailsComponent_ng_template_11_Template_button_click_19_listener() {
      const i_r6 = \u0275\u0275restoreView(_r1).rowIndex;
      const op_r5 = \u0275\u0275reference(17);
      const ctx_r3 = \u0275\u0275nextContext();
      op_r5.hide();
      return \u0275\u0275resetView(ctx_r3.dimension(ctx_r3.data.pageflow, "item", i_r6));
    });
    \u0275\u0275element(20, "img", 25);
    \u0275\u0275text(21, "Dimension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 24);
    \u0275\u0275listener("click", function ItemDetailsComponent_ng_template_11_Template_button_click_22_listener() {
      const ctx_r6 = \u0275\u0275restoreView(_r1);
      const i_r6 = ctx_r6.rowIndex;
      const rowData_r2 = ctx_r6.$implicit;
      const op_r5 = \u0275\u0275reference(17);
      const ctx_r3 = \u0275\u0275nextContext();
      op_r5.hide();
      return \u0275\u0275resetView(ctx_r3.removeItem(i_r6, rowData_r2));
    });
    \u0275\u0275element(23, "img", 26);
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 24);
    \u0275\u0275listener("click", function ItemDetailsComponent_ng_template_11_Template_button_click_25_listener() {
      const i_r6 = \u0275\u0275restoreView(_r1).rowIndex;
      const op_r5 = \u0275\u0275reference(17);
      const ctx_r3 = \u0275\u0275nextContext();
      op_r5.hide();
      return \u0275\u0275resetView(ctx_r3.imageupload(ctx_r3.data.pageflow, i_r6));
    });
    \u0275\u0275element(26, "img", 27);
    \u0275\u0275text(27, "Image");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", item_r8);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(11, _c03));
    \u0275\u0275property("options", ctx_r3.hsCodeList)("panelStyle", \u0275\u0275pureFunction0(12, _c03));
    \u0275\u0275advance(11);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(13, _c03));
    \u0275\u0275property("options", ctx_r3.currencyDropdown)("panelStyle", \u0275\u0275pureFunction0(14, _c03));
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c12));
  }
}
var _ItemDetailsComponent = class _ItemDetailsComponent {
  constructor(cs, spin, router, fb, service, messageService, cas, auth, dialogRef, dialog, data) {
    this.cs = cs;
    this.spin = spin;
    this.router = router;
    this.fb = fb;
    this.service = service;
    this.messageService = messageService;
    this.cas = cas;
    this.auth = auth;
    this.dialogRef = dialogRef;
    this.dialog = dialog;
    this.data = data;
    this.itemForm = this.fb.group({
      itemDetails: this.fb.array([])
      // Initialize an empty FormArray
    });
    this.hsCodeList = [];
    this.currencyDropdown = [];
  }
  get itemDetails() {
    return this.itemForm.get("itemDetails");
  }
  addItem() {
    this.itemDetails.push(this.createItemFormGroup());
  }
  createItemFormGroup() {
    return this.fb.group({
      codAmount: [],
      declaredValue: [],
      description: [],
      dimensionUnit: [],
      height: [],
      hsCode: [],
      imageRefId: [],
      itemCode: [],
      length: [],
      partnerName: [],
      partnerType: [],
      pieceItemId: [],
      pdfUrl: [],
      volume: [],
      volumeUnit: [],
      weight: [],
      weightUnit: [],
      width: [],
      quantity: [""],
      unitValue: [""],
      currency: [""],
      masterAirwayBill: [""],
      houseAirwayBill: [""],
      partnerId: [""],
      referenceImageList: this.fb.array([])
    });
  }
  removeItem(index, data) {
    this.itemDetails.removeAt(index);
    this.service.DeleteItem(data.getRawValue()).subscribe({ next: (res) => {
    } });
  }
  ngOnInit() {
    this.dropdownlist();
    this.patchForm(this.data.line.value);
  }
  save() {
    this.dialogRef.close(this.itemForm.controls.itemDetails.value);
  }
  calculateVolume(formName) {
    const volume = formName.controls.length.value * formName.controls.width.value * formName.controls.height.value;
    formName.controls.volume.patchValue(volume);
  }
  patchForm(shipmentData) {
    const itemsArray = this.itemForm.get("itemDetails");
    shipmentData.forEach((piece) => {
      itemsArray.push(this.patchItemDetail(piece));
    });
  }
  patchItemDetail(item) {
    return this.fb.group({
      codAmount: [item.codAmount],
      declaredValue: [item.declaredValue],
      description: [item.description],
      dimensionUnit: [item.dimensionUnit],
      height: [item.height],
      hsCode: [item.hsCode],
      imageRefId: [item.imageRefId],
      itemCode: [item.itemCode],
      length: [item.length],
      partnerName: [item.partnerName],
      partnerType: [item.partnerType],
      pieceItemId: [item.pieceItemId],
      referenceField1: [item.referenceField1],
      referenceField10: [item.referenceField10],
      referenceField11: [item.referenceField11],
      referenceField12: [item.referenceField12],
      referenceField13: [item.referenceField13],
      referenceField14: [item.referenceField14],
      referenceField15: [item.referenceField15],
      referenceField16: [item.referenceField16],
      referenceField17: [item.referenceField17],
      referenceField18: [item.referenceField18],
      referenceField19: [item.referenceField19],
      referenceField2: [item.referenceField2],
      referenceField20: [item.referenceField20],
      referenceField3: [item.referenceField3],
      referenceField4: [item.referenceField4],
      referenceField5: [item.referenceField5],
      referenceField6: [item.referenceField6],
      referenceField7: [item.referenceField7],
      referenceField8: [item.referenceField8],
      referenceField9: [item.referenceField9],
      masterAirwayBill: [item.masterAirwayBill],
      partnerId: [item.partnerId],
      houseAirwayBill: [item.houseAirwayBill],
      referenceImageList: this.patchReferenceImages(item.referenceImageList),
      volume: [item.volume],
      volumeUnit: [item.volumeUnit],
      weight: [item.weight],
      weightUnit: [item.weightUnit],
      width: [item.width],
      quantity: [item.quantity],
      unitValue: [item.unitValue],
      currency: [item.currency]
    });
  }
  patchReferenceImages(referenceImageList) {
    if (referenceImageList == null) {
      return;
    }
    return this.fb.array(referenceImageList.map((image) => this.fb.group({
      imageRefId: [image.imageRefId],
      pdfUrl: [image.pdfUrl],
      referenceImageUrl: [image.referenceImageUrl]
    })));
  }
  dimension(type = "New", module, index) {
    const dialogRef = this.dialog.open(DimensionComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "25%" },
      data: { pageflow: type, module, line: this.itemForm.controls.itemDetails.at(index) }
    });
    dialogRef.afterClosed().subscribe((result) => {
      const control = this.itemForm.controls.itemDetails.at(index);
      control.patchValue(result);
    });
  }
  imageupload(type = "New", index) {
    const dialogRef = this.dialog.open(ImageUploadComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "25%" },
      data: { pageflow: type, line: this.itemForm.controls.itemDetails.at(index).get("referenceImageList"), lineDetails: this.itemForm.controls.itemDetails.at(index), type: "item" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const imageDetailsFormArray = this.itemForm.controls.itemDetails.at(index).get("referenceImageList");
        imageDetailsFormArray.clear();
        result.forEach((image) => {
          imageDetailsFormArray.push(this.fb.group({
            imageRefId: image.imageRefId,
            pdfUrl: image.pdfUrl,
            referenceImageUrl: image.referenceImageUrl
          }));
        });
        console.log(this.itemForm);
      }
    });
  }
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.hsCode.url,
      this.cas.dropdownlist.setup.currency.url
    ]).subscribe({
      next: (results) => {
        this.hsCodeList = this.cas.forLanguageFilter(results[0], { key: "hsCode", value: "itemGroup", languageId: "languageId", companyId: "companyId" });
        this.currencyDropdown = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.currency.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  calculateTotalValue(value) {
    value.controls.declaredValue.patchValue(value.controls.quantity.value * value.controls.unitValue.value);
  }
  hsCodeChange(value, control) {
    let desc = this.hsCodeList.find((option) => option.value === control.controls.hsCode.value)?.label;
    control.controls.description.patchValue(desc);
  }
};
_ItemDetailsComponent.\u0275fac = function ItemDetailsComponent_Factory(t) {
  return new (t || _ItemDetailsComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_ItemDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemDetailsComponent, selectors: [["app-item-details"]], decls: 17, vars: 3, consts: [["hscode", ""], ["op", ""], [1, "bgWhite", "text-black", "w-93", "h-100", "mx-4", "my-2", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "mt-4"], [1, "mt-1", "mx-3", 3, "formGroup"], ["scrollHeight", "calc(100vh - 24.8rem)", 1, "paddingZero", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "my-3", "justify-content-end"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [3, "formGroup"], ["placeholder", "Select", "filter", "true", "formControlName", "hsCode", "appendTo", "body", 3, "onChange", "options", "panelStyle"], ["placeholder", "Enter", "formControlName", "description", 1, "inputborderLess", "pl-3"], ["placeholder", "Enter", "formControlName", "quantity", 1, "inputborderLess", "pl-3", 3, "change"], ["placeholder", "Enter", "formControlName", "unitValue", 1, "inputborderLess", "pl-3", 3, "change"], ["placeholder", "Enter", "formControlName", "declaredValue", 1, "inputborderLess", "pl-3"], ["placeholder", "Select", "filter", "true", "formControlName", "currency", "appendTo", "body", 3, "options", "panelStyle"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/dimension.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/delete1x.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/image.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"]], template: function ItemDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "List Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function ItemDetailsComponent_Template_button_click_4_listener() {
      return ctx.addItem();
    });
    \u0275\u0275element(5, "i", 6);
    \u0275\u0275text(6, " Add New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "form", 8)(9, "p-table", 9);
    \u0275\u0275template(10, ItemDetailsComponent_ng_template_10_Template, 15, 0, "ng-template", 10)(11, ItemDetailsComponent_ng_template_11_Template, 28, 16, "ng-template", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "button", 13);
    \u0275\u0275text(14, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 14);
    \u0275\u0275listener("click", function ItemDetailsComponent_Template_button_click_15_listener() {
      return ctx.save();
    });
    \u0275\u0275text(16, "Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.itemForm);
    \u0275\u0275advance();
    \u0275\u0275property("scrollable", true)("value", ctx.itemDetails.controls);
  }
}, dependencies: [PrimeTemplate, Table, Dropdown, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, OverlayPanel, MatMenuItem, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.inputborderLess[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=item-details.component.css.map */"] });
var ItemDetailsComponent = _ItemDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemDetailsComponent, { className: "ItemDetailsComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment-new\\item-details\\item-details.component.ts", lineNumber: 19 });
})();

// src/app/main/operation/consignment/consignment-new/consignment-new.component.ts
var _c04 = () => ({ "width": "100%" });
var _c13 = () => ({ width: "180" });
function ConsignmentNewComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_div_90_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 180)(1, "p", 10);
    \u0275\u0275text(2, "COD Collection Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-dropdown", 181);
    \u0275\u0275template(4, ConsignmentNewComponent_div_90_mat_error_4_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c04));
    \u0275\u0275property("options", ctx_r0.codCollectionMode)("ngClass", ((tmp_3_0 = ctx_r0.shipmentInfo.get("codCollectionMode")) == null ? null : tmp_3_0.invalid) && ctx_r0.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(7, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorHandlingShipment("codCollectionMode"));
  }
}
function ConsignmentNewComponent_div_91_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182)(1, "p", 10);
    \u0275\u0275text(2, "COD Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 183);
    \u0275\u0275template(4, ConsignmentNewComponent_div_91_mat_error_4_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ((tmp_1_0 = ctx_r0.shipmentInfo.get("codAmount")) == null ? null : tmp_1_0.invalid) && ctx_r0.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorHandlingShipment("codAmount"));
  }
}
function ConsignmentNewComponent_div_92_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184)(1, "p", 10);
    \u0275\u0275text(2, "COD Favor Of");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 185);
    \u0275\u0275template(4, ConsignmentNewComponent_div_92_mat_error_4_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ((tmp_1_0 = ctx_r0.shipmentInfo.get("codFavorOf")) == null ? null : tmp_1_0.invalid) && ctx_r0.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorHandlingShipment("codFavorOf"));
  }
}
function ConsignmentNewComponent_mat_error_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_190_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_205_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_ng_template_216_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Piece No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Product Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "No of Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 186);
    \u0275\u0275text(12, " Actions");
    \u0275\u0275elementEnd()();
  }
}
function ConsignmentNewComponent_ng_template_217_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 7)(1, "td");
    \u0275\u0275element(2, "input", 187);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "input", 188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "input", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "input", 190);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "p-dropdown", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "img", 192);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_217_Template_img_click_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const op_r3 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(op_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-overlayPanel", null, 0)(15, "div", 193)(16, "button", 194);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_217_Template_button_click_16_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).rowIndex;
      const op_r3 = \u0275\u0275reference(14);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.dimension(ctx_r0.pageToken.pageflow, "piece", i_r4);
      return \u0275\u0275resetView(op_r3.hide());
    });
    \u0275\u0275element(17, "img", 195);
    \u0275\u0275text(18, "Dimension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 194);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_217_Template_button_click_19_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).rowIndex;
      const op_r3 = \u0275\u0275reference(14);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.opendialog(ctx_r0.pageToken.pageflow, i_r4);
      return \u0275\u0275resetView(op_r3.hide());
    });
    \u0275\u0275element(20, "img", 196);
    \u0275\u0275text(21, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 194);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_217_Template_button_click_22_listener() {
      const ctx_r4 = \u0275\u0275restoreView(_r2);
      const i_r4 = ctx_r4.rowIndex;
      const rowData_r6 = ctx_r4.$implicit;
      const op_r3 = \u0275\u0275reference(14);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.removePieceDetail(i_r4, rowData_r6);
      return \u0275\u0275resetView(op_r3.hide());
    });
    \u0275\u0275element(23, "img", 197);
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 194);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_217_Template_button_click_25_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).rowIndex;
      const op_r3 = \u0275\u0275reference(14);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.imageupload(ctx_r0.pageToken.pageflow, i_r4);
      return \u0275\u0275resetView(op_r3.hide());
    });
    \u0275\u0275element(26, "img", 198);
    \u0275\u0275text(27, "Image");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", item_r7);
    \u0275\u0275advance(10);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(7, _c04));
    \u0275\u0275property("options", ctx_r0.currencyDropdown)("panelStyle", \u0275\u0275pureFunction0(8, _c04));
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c13));
  }
}
function ConsignmentNewComponent_mat_error_236_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_241_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_246_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_251_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_256_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_261_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_266_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_271_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_276_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_281_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_286_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_291_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_296_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_301_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_306_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_311_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_326_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_331_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_336_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_341_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_346_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_351_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_356_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_361_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_366_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_371_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_376_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_381_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_386_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_391_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_396_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_401_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_424_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_429_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_434_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_439_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_444_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_449_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_454_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_459_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_464_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_469_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_474_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_479_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 179)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage());
  }
}
var _ConsignmentNewComponent = class _ConsignmentNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth, el, dialog, productService, customerService, consignorService) {
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
    this.productService = productService;
    this.customerService = customerService;
    this.consignorService = consignorService;
    this.activeIndex = 0;
    this.status = [];
    this.partnerType = [];
    this.paymentType = [];
    this.incoTerms = [];
    this.codCollectionMode = [];
    this.disabledCarrier = true;
    this.disabledSender = true;
    this.disabledDelivery = true;
    this.disabledBilling = true;
    this.disabledConsignment = true;
    this.disabledPiece = true;
    this.disabledDelivered = true;
    this.disabledReturn = true;
    this.shipmentInfo = this.fb.group({
      companyId: [this.auth.companyId],
      priority: [],
      incoTerms: [],
      partnerType: ["", Validators.required],
      consignmentId: [],
      partnerId: [, Validators.required],
      partnerName: [,],
      statusId: [,],
      paymentType: [,],
      productId: [],
      productName: [],
      subProductId: [],
      subProductName: [],
      serviceTypeId: [, Validators.required],
      serviceTypeText: [],
      manufacturer: [],
      masterAirwayBill: [],
      houseAirwayBill: [],
      noOfPieceHawb: [],
      noOfPackageMawb: [],
      countryOfOrigin: [],
      countryOfDestination: [],
      consignmentType: [,],
      customerCode: [],
      customerId: [],
      codAmount: [],
      codCollectionMode: [],
      codFavorOf: [],
      customerReferenceNumber: [],
      actionType: [],
      movementType: [],
      forwardReferenceNumber: [],
      workerCode: [],
      loadType: [, Validators.required],
      courierAccount: [],
      courierPartner: [],
      invoiceNumber: [],
      courierPartnerReferenceNumber: [],
      invoiceAmount: [],
      invoiceUrl: []
    });
    this.carrierInfo = this.fb.group({});
    this.OriginDetails = this.fb.group({
      accountId: [],
      addressHubCode: [,],
      addressLine1: [],
      addressLine2: [],
      alternatePhone: [],
      city: [],
      companyName: [],
      country: [],
      district: [],
      email: [],
      latitude: [],
      longitude: [],
      name: [],
      phone: [],
      pinCode: [],
      state: []
    });
    this.DestinationDetails = this.fb.group({
      accountId: [,],
      addressHubCode: [],
      addressLine1: [],
      addressLine2: [],
      alternatePhone: [],
      city: [,],
      companyName: [],
      country: [],
      district: [],
      email: [],
      latitude: [],
      longitude: [],
      name: [],
      phone: [],
      pinCode: [],
      state: []
    });
    this.senderInfo = this.fb.group({
      shipperId: [],
      shipperName: [],
      originDetails: this.OriginDetails
    });
    this.deliveryInfo = this.fb.group({
      consigneeName: [,],
      consigneeCivilId: [],
      destinationDetails: this.DestinationDetails
    });
    this.billing = this.fb.group({
      // incoTerms: [],
      // paymentType: [],
      //currency: [],
      // freightCurrency: [],
      //freightCharges: [],
      countryOfSupply: [],
      declaredValue: [],
      // consignmentCurrency: [],
      // consignmentValue: [],
      //actualCurrency: [],
      totalDuty: [],
      customsCurrency: [],
      specialApprovalValue: [],
      specialApprovalCharge: [],
      iataCharge: [],
      dduCharge: [],
      exchangeRate: [],
      dutyPercentage: ["5%"],
      // codAmount: [],
      // codFavorOf: [],
      // codCollectionMode: [],
      declaredValueWithoutTax: [],
      // invoiceAmount: [],
      // invoiceUrl: [],
      productCode: [],
      customsValue: [],
      //  amount: [],
      //isCustomsDeclarable: [],
      consignmentValueLocal: [],
      consignmentInsurance: [],
      customsInsurance: [],
      consignmentValuwithIATA: [],
      actualDuty: [],
      calculatedTotalDuty: []
    });
    this.consignment = this.fb.group({
      length: [],
      width: [],
      height: [],
      dimensionUnit: [],
      volume: [],
      volumeUnit: [],
      weight: [],
      weightUnit: [],
      invoiceDate: [/* @__PURE__ */ new Date()],
      invoiceDateFE: [/* @__PURE__ */ new Date()],
      invoiceSupplierName: [],
      goodsDescription: [],
      notifyParty: [],
      consignmentCurrency: [],
      consignmentValue: [],
      partnerHouseAirwayBill: [],
      partnerMasterAirwayBill: [],
      airportOriginCode: [],
      flightArrivalTime: [],
      noOfPackages: [],
      flightName: [],
      flightNo: [],
      packageType: [],
      netWeight: [],
      grossWeight: []
    });
    this.piece = this.fb.group({
      pieceDetails: this.fb.array([])
    });
    this.form = this.fb.group({
      updatedBy: [,],
      updatedOn: [""],
      createdOn: [""],
      createdBy: [,],
      originDetails: []
    });
    this.submitted = false;
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.companyIdList = [];
    this.districtIdList = [];
    this.productIdList = [];
    this.subProductIdList = [];
    this.serviceTypeIdList = [];
    this.consignmentTypeIdList = [];
    this.loadTypeIdList = [];
    this.countryIdListOrigin = [];
    this.countryIdListDestination = [];
    this.cityIdList = [];
    this.provinceIdList = [];
    this.partnerName = [];
    this.currencyDropdown = [];
    this.partnerNameList = [];
    this.mainForm = new FormGroup({});
    this.showPaymentTypeFields = false;
    this.subProductValueList = [];
    this.status = [
      { value: "17", label: "Inactive" },
      { value: "16", label: "Active" }
    ];
    this.partnerType = [
      { value: "customer", label: "Customer" },
      { value: "consignor", label: "Consignor" }
    ];
    this.paymentType = [
      { value: "Prepaid", label: "Prepaid" },
      { value: "COD", label: "COD" }
    ];
    this.incoTerms = [
      { value: "DDU", label: "DDU" },
      { value: "DDP", label: "DDP" }
    ];
    this.codCollectionMode = [
      { value: "Cash", label: "Cash" },
      { value: "Cheque", label: "Cheque" },
      { value: "Online", label: "Online" },
      { value: "Card", label: "Card" }
    ];
  }
  initPieceDetail() {
    const control = this.piece.controls.pieceDetails;
    return this.fb.group({
      codAmount: [""],
      declaredValue: [""],
      description: [""],
      dimensionUnit: [""],
      height: [""],
      itemDetails: this.fb.array([]),
      length: [""],
      packReferenceNumber: [control.value.length + 1],
      masterAirwayBill: [""],
      partnerId: [""],
      houseAirwayBill: [""],
      pieceProductCode: [""],
      tags: [""],
      partnerType: [""],
      pieceId: [""],
      referenceField1: [""],
      referenceField10: [""],
      referenceField11: [""],
      referenceField12: [""],
      referenceField13: [""],
      referenceField14: [""],
      referenceField15: [""],
      referenceField16: [""],
      referenceField17: [""],
      referenceField18: [""],
      referenceField19: [""],
      referenceField2: [""],
      referenceField20: [""],
      referenceField3: [""],
      referenceField4: [""],
      referenceField5: [""],
      referenceField6: [""],
      referenceField7: [""],
      referenceField8: [""],
      referenceField9: [""],
      referenceImageList: this.fb.array([]),
      volume: [""],
      volumeUnit: [""],
      weight: [""],
      weightUnit: [""],
      width: [""],
      hsCode: [""],
      pieceValue: [""],
      pieceCurrency: [""]
    });
  }
  initItemDetail() {
    return this.fb.group({
      codAmount: [""],
      declaredValue: [""],
      description: [""],
      dimensionUnit: [""],
      height: [""],
      hsCode: [""],
      imageRefId: [""],
      itemCode: [""],
      length: [""],
      partnerName: [""],
      partnerType: [""],
      pieceItemId: [""],
      referenceField1: [""],
      referenceField10: [""],
      referenceField11: [""],
      referenceField12: [""],
      referenceField13: [""],
      referenceField14: [""],
      referenceField15: [""],
      referenceField16: [""],
      referenceField17: [""],
      referenceField18: [""],
      referenceField19: [""],
      referenceField2: [""],
      referenceField20: [""],
      referenceField3: [""],
      referenceField4: [""],
      referenceField5: [""],
      referenceField6: [""],
      referenceField7: [""],
      referenceField8: [""],
      referenceField9: [""],
      referenceImageList: this.fb.array([]),
      volume: [""],
      volumeUnit: [""],
      weight: [""],
      weightUnit: [""],
      width: [""],
      quantity: [""],
      unitValue: [""],
      currency: [""]
    });
  }
  addPieceDetail() {
    const control = this.piece.controls.pieceDetails;
    control.push(this.initPieceDetail());
  }
  removePieceDetail(index, data) {
    const control = this.piece.controls.pieceDetails;
    control.removeAt(index);
    this.service.DeletePiece(data.getRawValue()).subscribe({ next: (res) => {
    } });
  }
  addItemDetail(pieceIndex) {
    const control = this.piece.controls.pieceDetails.at(pieceIndex).get("itemDetails");
    control.push(this.initItemDetail());
  }
  removeItemDetail(pieceIndex, itemIndex) {
    const control = this.piece.controls.pieceDetails.at(pieceIndex).get("itemDetails");
    control.removeAt(itemIndex);
  }
  patchForm(shipmentData) {
    const piecesArray = this.piece.get("pieceDetails");
    shipmentData.pieceDetails.forEach((piece) => {
      piecesArray.push(this.patchPieceDetail(piece));
    });
  }
  patchPieceDetail(piece) {
    return this.fb.group({
      codAmount: [piece.codAmount],
      declaredValue: [piece.declaredValue],
      description: [piece.description],
      dimensionUnit: [piece.dimensionUnit],
      height: [piece.height],
      itemDetails: this.patchItemDetails(piece.itemDetails),
      length: [piece.length],
      packReferenceNumber: [piece.packReferenceNumber],
      masterAirwayBill: [piece.masterAirwayBill],
      houseAirwayBill: [piece.houseAirwayBill],
      partnerId: [piece.partnerId],
      partnerType: [piece.partnerType],
      pieceId: [piece.pieceId],
      referenceField1: [piece.referenceField1],
      referenceField10: [piece.referenceField10],
      referenceField11: [piece.referenceField11],
      referenceField12: [piece.referenceField12],
      referenceField13: [piece.referenceField13],
      referenceField14: [piece.referenceField14],
      referenceField15: [piece.referenceField15],
      referenceField16: [piece.referenceField16],
      referenceField17: [piece.referenceField17],
      referenceField18: [piece.referenceField18],
      referenceField19: [piece.referenceField19],
      referenceField2: [piece.referenceField2],
      referenceField20: [piece.referenceField20],
      referenceField3: [piece.referenceField3],
      referenceField4: [piece.referenceField4],
      referenceField5: [piece.referenceField5],
      referenceField6: [piece.referenceField6],
      referenceField7: [piece.referenceField7],
      referenceField8: [piece.referenceField8],
      referenceField9: [piece.referenceField9],
      referenceImageList: this.patchReferenceImages(piece.referenceImageList),
      volume: [piece.volume],
      volumeUnit: [piece.volumeUnit],
      weight: [piece.weight],
      weightUnit: [piece.weightUnit],
      width: [piece.width],
      hsCode: [piece.hsCode],
      pieceValue: [piece.pieceValue],
      pieceCurrency: [piece.pieceCurrency],
      pieceProductCode: [piece.pieceProductCode],
      tags: [piece.tags]
    });
  }
  patchItemDetails(itemDetails) {
    return this.fb.array(itemDetails.map((item) => this.patchItemDetail(item)));
  }
  patchItemDetail(item) {
    return this.fb.group({
      codAmount: [item.codAmount],
      declaredValue: [item.declaredValue],
      description: [item.description],
      dimensionUnit: [item.dimensionUnit],
      height: [item.height],
      hsCode: [item.hsCode],
      imageRefId: [item.imageRefId],
      itemCode: [item.itemCode],
      length: [item.length],
      partnerName: [item.partnerName],
      partnerType: [item.partnerType],
      pieceItemId: [item.pieceItemId],
      referenceField1: [item.referenceField1],
      referenceField10: [item.referenceField10],
      referenceField11: [item.referenceField11],
      referenceField12: [item.referenceField12],
      referenceField13: [item.referenceField13],
      referenceField14: [item.referenceField14],
      referenceField15: [item.referenceField15],
      referenceField16: [item.referenceField16],
      referenceField17: [item.referenceField17],
      referenceField18: [item.referenceField18],
      referenceField19: [item.referenceField19],
      referenceField2: [item.referenceField2],
      referenceField20: [item.referenceField20],
      referenceField3: [item.referenceField3],
      referenceField4: [item.referenceField4],
      referenceField5: [item.referenceField5],
      referenceField6: [item.referenceField6],
      referenceField7: [item.referenceField7],
      referenceField8: [item.referenceField8],
      referenceField9: [item.referenceField9],
      referenceImageList: this.patchReferenceImages(item.referenceImageList),
      volume: [item.volume],
      volumeUnit: [item.volumeUnit],
      weight: [item.weight],
      weightUnit: [item.weightUnit],
      width: [item.width],
      quantity: [item.quantity],
      unitValue: [item.unitValue],
      currency: [item.currency],
      masterAirwayBill: [item.masterAirwayBill],
      houseAirwayBill: [item.houseAirwayBill],
      partnerId: [item.partnerId]
    });
  }
  patchReferenceImages(referenceImageList) {
    if (referenceImageList == null) {
      return;
    }
    return this.fb.array(referenceImageList.map((image) => this.fb.group({
      imageRefId: [image.imageRefId],
      pdfUrl: [image.pdfUrl],
      referenceImageUrl: [image.referenceImageUrl]
    })));
  }
  errorHandlingShipment(control, error = "required") {
    const controlInstance = this.shipmentInfo.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingCarrier(control, error = "required") {
    const controlInstance = this.carrierInfo.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingSender(control, error = "required") {
    const controlInstance = this.senderInfo.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingDelivery(control, error = "required") {
    const controlInstance = this.deliveryInfo.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingBilling(control, error = "required") {
    const controlInstance = this.billing.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingConsignment(control, error = "required") {
    const controlInstance = this.consignment.get(control);
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
    const dataToSend = ["Operations", "Consignment", this.pageToken.pageflow];
    this.path.setData(dataToSend);
    this.dropdownlist();
    this.shipmentInfo.controls.companyId.disable();
    if (this.pageToken.pageflow != "New") {
      this.fill(this.pageToken.line);
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
      this.cas.dropdownlist.setup.district.url,
      this.cas.dropdownlist.setup.product.url,
      this.cas.dropdownlist.setup.subProduct.url,
      this.cas.dropdownlist.setup.serviceType.url,
      this.cas.dropdownlist.setup.consignmentType.url,
      this.cas.dropdownlist.setup.loadType.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.city.url,
      this.cas.dropdownlist.setup.province.url,
      this.cas.dropdownlist.setup.currency.url
    ]).subscribe({
      next: (results) => {
        this.companyIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.company.key);
        this.districtIdList = this.cas.forLanguageFilter(results[1], this.cas.dropdownlist.setup.district.key);
        this.productIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.product.key);
        this.subProductIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.subProduct.key);
        this.serviceTypeIdList = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.serviceType.key);
        this.consignmentTypeIdList = this.cas.forLanguageFilter(results[5], this.cas.dropdownlist.setup.consignmentType.key);
        this.loadTypeIdList = this.cas.forLanguageFilter(results[6], this.cas.dropdownlist.setup.loadType.key);
        this.countryIdListOrigin = this.cas.forLanguageFilter(results[7], this.cas.dropdownlist.setup.country.key);
        this.countryIdListDestination = this.cas.forLanguageFilter(results[7], this.cas.dropdownlist.setup.country.key);
        this.cityIdList = this.cas.forLanguageFilter(results[8], this.cas.dropdownlist.setup.city.key);
        this.provinceIdList = this.cas.forLanguageFilter(results[9], this.cas.dropdownlist.setup.province.key);
        this.currencyDropdown = this.cas.foreachlist(results[10], this.cas.dropdownlist.setup.currency.key);
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  partnerTypeChanged() {
    if (this.shipmentInfo.controls.partnerType.value == "customer") {
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.partnerNameList = [];
      this.spin.show();
      this.customerService.search(obj).subscribe({
        next: (result) => {
          this.partnerNameList = this.cas.foreachlist(result, { key: "customerId", value: "customerName" });
          this.partnerNameList = this.cs.removeDuplicatesFromArrayList(this.partnerNameList, "value");
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
    if (this.shipmentInfo.controls.partnerType.value == "consignor") {
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.partnerNameList = [];
      this.spin.show();
      this.consignorService.search(obj).subscribe({
        next: (result) => {
          this.partnerNameList = this.cas.foreachlist(result, { key: "consignorId", value: "consignorName" });
          this.partnerNameList = this.cs.removeDuplicatesFromArrayList(this.partnerNameList, "value");
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
    this.disabledConsignment = false;
    this.disabledPiece = false;
    this.disabledSender = false;
    this.disabledDelivery = false;
    this.disabledBilling = false;
    this.shipmentInfo.patchValue(line), this.consignment.patchValue(line), this.senderInfo.patchValue(line), this.deliveryInfo.patchValue(line), this.billing.patchValue(line);
    this.consignmentCurrency = this.consignment.controls.consignmentCurrency.value;
    this.consignmentValue = this.consignment.controls.consignmentValue.value;
    this.patchForm(line);
    if (this.consignment.controls.invoiceDate.value) {
      this.consignment.controls.invoiceDateFE.patchValue(this.cs.pCalendar(this.consignment.controls.invoiceDate.value));
    }
    this.partnerTypeChanged();
    this.shipmentInfo.controls.masterAirwayBill.disable();
    this.shipmentInfo.controls.houseAirwayBill.disable();
  }
  opendialog(type = "New", index) {
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      disableClose: true,
      width: "90%",
      maxWidth: "95%",
      position: { top: "6.5%", left: "10%" },
      data: { pageflow: type, line: this.piece.controls.pieceDetails.at(index).get("itemDetails") }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        const itemDetailsFormArray = this.piece.controls.pieceDetails.at(index).get("itemDetails");
        itemDetailsFormArray.clear();
        result.forEach((item) => {
          itemDetailsFormArray.push(this.fb.group({
            codAmount: item.codAmount,
            declaredValue: item.declaredValue,
            description: item.description,
            dimensionUnit: item.dimensionUnit,
            height: item.height,
            hsCode: item.hsCode,
            imageRefId: item.imageRefId,
            itemCode: item.itemCode,
            length: item.length,
            partnerName: item.partnerName,
            partnerType: item.partnerType,
            pieceItemId: item.pieceItemId,
            volume: item.volume,
            volumeUnit: item.volumeUnit,
            weight: item.weight,
            weightUnit: item.weightUnit,
            width: item.width,
            quantity: item.quantity,
            unitValue: item.unitValue,
            currency: item.currency,
            masterAirwayBill: item.masterAirwayBill,
            partnerId: item.partnerId,
            houseAirwayBill: item.houseAirwayBill,
            referenceImageList: this.patchReferenceImages(item.referenceImageList)
          }));
        });
        console.log(this.piece);
      }
    });
  }
  dimension(type = "New", module, index) {
    const dialogRef = this.dialog.open(DimensionComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "25%" },
      data: { pageflow: type, module, line: this.piece.controls.pieceDetails.at(index) }
    });
    dialogRef.afterClosed().subscribe((result) => {
      const control = this.piece.controls.pieceDetails.at(index);
      control.patchValue(result);
    });
  }
  imageupload(type = "New", index) {
    const dialogRef = this.dialog.open(ImageUploadComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "82%",
      position: { top: "6.5%", left: "25%" },
      data: { pageflow: type, line: this.piece.controls.pieceDetails.at(index).get("referenceImageList"), lineDetails: this.piece.controls.pieceDetails.at(index), type: "piece" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const imageDetailsFormArray = this.piece.controls.pieceDetails.at(index).get("referenceImageList");
        imageDetailsFormArray.clear();
        result.forEach((image) => {
          imageDetailsFormArray.push(this.fb.group({
            imageRefId: image.imageRefId,
            pdfUrl: image.pdfUrl,
            referenceImageUrl: image.referenceImageUrl
          }));
        });
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
          console.log(invalidControl);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
          }
        }
      }
    }
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
            detail: res.consignmentId + " has been updated successfully"
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
              detail: res.consignmentId + " has been created successfully"
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
  calculateVolume(formName) {
    const volume = formName.controls.length.value * formName.controls.width.value * formName.controls.height.value;
    formName.controls.volume.patchValue(volume);
  }
  saveShipment() {
    this.submitted = true;
    if (this.shipmentInfo.invalid) {
      for (const control in this.shipmentInfo.controls) {
        const controlInstance = this.shipmentInfo.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
          }
        }
      }
    }
    if (this.shipmentInfo.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    } else {
      this.activeIndex = 1;
      this.disabledConsignment = false;
      this.submitted = false;
    }
  }
  saveConsignment() {
    this.submitted = true;
    if (this.consignment.invalid) {
      for (const control in this.consignment.controls) {
        const controlInstance = this.consignment.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
          }
        }
      }
    }
    if (this.consignment.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    } else {
      this.activeIndex = 2;
      this.submitted = false;
      this.disabledPiece = false;
    }
  }
  savePiece() {
    this.activeIndex = 3;
    this.submitted = false;
    this.disabledSender = false;
  }
  saveSender() {
    this.submitted = true;
    if (this.senderInfo.invalid) {
      for (const control in this.senderInfo.controls) {
        const controlInstance = this.senderInfo.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
          }
        }
      }
    }
    if (this.senderInfo.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    } else {
      this.activeIndex = 4;
      this.disabledDelivery = false;
      this.submitted = false;
    }
  }
  saveDelivery() {
    this.submitted = true;
    if (this.deliveryInfo.invalid) {
      for (const control in this.deliveryInfo.controls) {
        const controlInstance = this.deliveryInfo.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
          }
        }
      }
    }
    if (this.deliveryInfo.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    } else {
      this.activeIndex = 5;
      this.submitted = false;
      this.disabledBilling = false;
    }
  }
  saveBilling() {
    this.submitted = true;
    if (this.billing.invalid) {
      for (const control in this.billing.controls) {
        const controlInstance = this.billing.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
          }
        }
      }
    }
    if (this.billing.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        key: "br",
        detail: "Please fill required fields to continue"
      });
      return;
    } else {
      this.saveFinal();
    }
  }
  saveFinal() {
    this.mainForm = this.fb.group(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.shipmentInfo.getRawValue()), this.consignment.getRawValue()), this.senderInfo.getRawValue()), this.deliveryInfo.getRawValue()), this.billing.getRawValue()), {
      pieceDetails: this.piece.controls.pieceDetails,
      updatedBy: [,],
      updatedOn: [""],
      createdOn: [""],
      createdBy: [,],
      companyId: [this.auth.companyId],
      languageId: [this.auth.languageId],
      invoiceDate: this.cs.jsonDate(this.consignment.controls.invoiceDateFE.value)
    }));
    if (this.pageToken.pageflow != "New") {
      this.spin.show();
      this.service.Update([this.mainForm.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res.consignmentId + " has been updated successfully"
          });
          this.spin.hide();
          this.router.navigate(["/main/operation/consignment"]);
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    } else {
      this.spin.show();
      this.service.Create([this.mainForm.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Updated",
            key: "br",
            detail: res.consignmentId + " has been created successfully"
          });
          this.spin.hide();
          this.router.navigate(["/main/operation/consignment"]);
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  paymentChange() {
    const paymentTypeValue = this.shipmentInfo.controls.paymentType.value;
    if (typeof paymentTypeValue === "string" && paymentTypeValue === "COD") {
      this.showPaymentTypeFields = true;
    } else {
      this.showPaymentTypeFields = false;
    }
  }
  productChanged() {
    let obj = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.productId = [this.shipmentInfo.controls.productId.value];
    this.subProductIdList = [];
    this.spin.show();
    this.productService.search(obj).subscribe({
      next: (result) => {
        this.subProductIdList = this.cas.foreachlist(result, { key: "subProductName", value: "referenceField1" });
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
_ConsignmentNewComponent.\u0275fac = function ConsignmentNewComponent_Factory(t) {
  return new (t || _ConsignmentNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ConsignorService));
};
_ConsignmentNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignmentNewComponent, selectors: [["app-consignment-new"]], decls: 485, vars: 304, consts: [["op", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4", "mx-auto"], [3, "activeIndexChange", "activeIndex"], ["header", "Shipment Info"], [3, "formGroup"], [1, "row", "scrollNew22"], [1, "col-3", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "companyId", "appendTo", "body", 3, "options", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["id", "productId", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "serviceTypeId", 1, "col-3", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "serviceTypeId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "partnerType", 1, "col-3", "marginFieldNew", "borderRadius12"], ["formControlName", "partnerType", "appendTo", "body", "placeholder", "Select", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "partnerId", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "consignmentType", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "serviceTypeId", "appendTo", "body", 3, "options", "panelStyle"], ["id", "loadType", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "loadType", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "customerReferenceNumber", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "customerReferenceNumber", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "noOfPieceHawb", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "noOfPieceHawb", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "countryOfOrigin", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "countryOfOrigin", "appendTo", "body", 3, "options", "panelStyle"], ["id", "countryOfDestination", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "countryOfDestination", "appendTo", "body", 3, "options", "panelStyle"], ["id", "invoiceNumber", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "invoiceNumber", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "invoiceAmount", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "invoiceAmount", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "invoiceUrl", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "500", "formControlName", "invoiceUrl", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "incoTerms", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "incoTerms", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "paymentType", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "paymentType", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["class", "col-3 marginFieldNew borderRadius12", "id", "codCollectionMode", 4, "ngIf"], ["class", "col-3 marginFieldNew borderRadius12", "id", "codAmount", 4, "ngIf"], ["class", "col-3 marginFieldNew borderRadius12", "id", "codFavorOf", 4, "ngIf"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "5%", "bottom", "7%"], ["routerLink", "/main/operation/consignment", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], ["header", "Consignment", 3, "disabled"], ["id", "partnerMasterAirwayBill", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "partnerHouseAirwayBill", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "partnerHouseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "airportOriginCode", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "airportOriginCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "flightNo", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "flightNo", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "flightArrivalTime", 1, "col-3", "marginFieldNew", "borderRadius12"], ["formControlName", "flightArrivalTime", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "ngClass", "iconDisplay", "showIcon"], ["id", "noOfPackages", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "noOfPackages", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "flightName", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "flightName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "length", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "length", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change", "ngClass"], ["id", "width", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "width", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change", "ngClass"], ["id", "height", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "height", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change", "ngClass"], ["id", "dimensionUnit", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "dimensionUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "weight", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "weight", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "weightUnit", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "weightUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "volume", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "volume", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "volumeUnit", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "volumeUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "netWeight", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "netWeight", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "grossWeight", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "grossWeight", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "invoiceDateFE", 1, "col-3", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceDateFE", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "ngClass", "iconDisplay", "showIcon"], ["id", "goodsDescription", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "500", "formControlName", "goodsDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentValue", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "500", "formControlName", "consignmentValue", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentCurrency", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "consignmentCurrency", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], ["header", "Package Details", 3, "disabled"], [1, "mt-1", 3, "formGroup"], ["scrollHeight", "calc(100vh - 24.8rem)", 1, "paddingZero", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "mt-1", "justify-content-center", 2, "position", "absolute", "right", "50%", "bottom", "7%"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgOrange", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], ["header", "Origin", 3, "disabled"], ["id", "name", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "name", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "companyName", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "companyName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "addressLine1", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "addressLine1", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "addressLine2", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "addressLine2", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "country", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "country", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "state", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "state", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "district", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "district", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "city", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "city", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "pinCode", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "pinCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "latitude", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "latitude", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "longitude", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "longitude", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "phone", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "phone", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "alternatePhone", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "alternatePhone", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "email", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "email", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "addressHubCode", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "addressHubCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "accountId", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "accountId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["header", "Destination", 3, "disabled"], ["id", "name", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "addressLine1", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "addressLine2", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "country", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "state", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "district", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "city", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "pinCode", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "latitude", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "longitude", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "phone", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "alternatePhone", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "email", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "companyName", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "addressHubCode", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "accountId", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["header", "Billing", 3, "disabled"], [1, "row"], ["maxlength", "500", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "value", "disabled"], ["id", "exchangeRate", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "exchangeRate", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "iataCharge", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "iataCharge", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "customsInsurance", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "customsInsurance", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "dutyPercentage", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "dutyPercentage", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentValueLocal", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "consignmentValueLocal", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentValuwithIATA", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "consignmentValuwithIATA", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentInsurance", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "consignmentInsurance", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "customsValue", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "customsValue", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "calculatedTotalDuty", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "calculatedTotalDuty", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "dduCharge", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "dduCharge", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "specialApprovalCharge", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "specialApprovalCharge", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "actualDuty", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "actualDuty", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [1, "text-danger"], ["id", "codCollectionMode", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "codCollectionMode", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "codAmount", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "codAmount", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "codFavorOf", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "codFavorOf", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [2, "min-width", "9rem", "justify-content", "center"], ["placeholder", "Enter", "formControlName", "packReferenceNumber", 1, "inputborderLess", "pl-3"], ["placeholder", "Enter", "formControlName", "pieceProductCode", 1, "inputborderLess", "pl-3"], ["placeholder", "Enter", "formControlName", "tags", 1, "inputborderLess", "pl-3"], ["placeholder", "Enter", "formControlName", "pieceValue", 1, "inputborderLess", "pl-3"], ["placeholder", "Select", "filter", "true", "formControlName", "pieceCurrency", "appendTo", "body", 3, "options", "panelStyle"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/dimension.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/add.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/delete1x.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/image.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"]], template: function ConsignmentNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "p-tabView", 5);
    \u0275\u0275twoWayListener("activeIndexChange", function ConsignmentNewComponent_Template_p_tabView_activeIndexChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.activeIndex, $event) || (ctx.activeIndex = $event);
      return $event;
    });
    \u0275\u0275elementStart(6, "p-tabPanel", 6)(7, "form", 7)(8, "div", 8)(9, "div", 9)(10, "p", 10);
    \u0275\u0275text(11, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "p-dropdown", 11);
    \u0275\u0275template(13, ConsignmentNewComponent_mat_error_13_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13)(15, "p", 10);
    \u0275\u0275text(16, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-dropdown", 14);
    \u0275\u0275listener("onChange", function ConsignmentNewComponent_Template_p_dropdown_onChange_17_listener() {
      return ctx.productChanged();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ConsignmentNewComponent_mat_error_18_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15)(20, "p", 16);
    \u0275\u0275text(21, "Service Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "p-dropdown", 17);
    \u0275\u0275template(23, ConsignmentNewComponent_mat_error_23_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18)(25, "p", 16);
    \u0275\u0275text(26, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p-dropdown", 19);
    \u0275\u0275listener("onChange", function ConsignmentNewComponent_Template_p_dropdown_onChange_27_listener() {
      return ctx.partnerTypeChanged();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ConsignmentNewComponent_mat_error_28_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 20)(30, "p", 16);
    \u0275\u0275text(31, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "p-dropdown", 21);
    \u0275\u0275template(33, ConsignmentNewComponent_mat_error_33_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 22)(35, "p", 10);
    \u0275\u0275text(36, "Consignment Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "p-dropdown", 23);
    \u0275\u0275template(38, ConsignmentNewComponent_mat_error_38_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 24)(40, "p", 16);
    \u0275\u0275text(41, "Load Type ");
    \u0275\u0275element(42, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "p-dropdown", 25);
    \u0275\u0275template(44, ConsignmentNewComponent_mat_error_44_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 26)(46, "p", 10);
    \u0275\u0275text(47, "Customer Ref No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 27);
    \u0275\u0275template(49, ConsignmentNewComponent_mat_error_49_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 28)(51, "p", 10);
    \u0275\u0275text(52, "No of packages");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 29);
    \u0275\u0275template(54, ConsignmentNewComponent_mat_error_54_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 30)(56, "p", 10);
    \u0275\u0275text(57, "Country of Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "p-dropdown", 31);
    \u0275\u0275template(59, ConsignmentNewComponent_mat_error_59_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 32)(61, "p", 10);
    \u0275\u0275text(62, "Country of Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "p-dropdown", 33);
    \u0275\u0275template(64, ConsignmentNewComponent_mat_error_64_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 34)(66, "p", 10);
    \u0275\u0275text(67, "Invoice Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 35);
    \u0275\u0275template(69, ConsignmentNewComponent_mat_error_69_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 36)(71, "p", 10);
    \u0275\u0275text(72, "Invoice Amount ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 37);
    \u0275\u0275template(74, ConsignmentNewComponent_mat_error_74_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 38)(76, "p", 10);
    \u0275\u0275text(77, "Invoice URL ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "input", 39);
    \u0275\u0275template(79, ConsignmentNewComponent_mat_error_79_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 40)(81, "p", 10);
    \u0275\u0275text(82, "Inco Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "p-dropdown", 41);
    \u0275\u0275template(84, ConsignmentNewComponent_mat_error_84_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 42)(86, "p", 10);
    \u0275\u0275text(87, "Payment Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "p-dropdown", 43);
    \u0275\u0275listener("onChange", function ConsignmentNewComponent_Template_p_dropdown_onChange_88_listener() {
      return ctx.paymentChange();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, ConsignmentNewComponent_mat_error_89_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(90, ConsignmentNewComponent_div_90_Template, 5, 8, "div", 44)(91, ConsignmentNewComponent_div_91_Template, 5, 2, "div", 45)(92, ConsignmentNewComponent_div_92_Template, 5, 2, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 47)(94, "button", 48);
    \u0275\u0275text(95, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 49);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_96_listener() {
      return ctx.saveShipment();
    });
    \u0275\u0275text(97, "Next");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "p-tabPanel", 50)(99, "form", 7)(100, "div", 8)(101, "div", 51)(102, "p", 10);
    \u0275\u0275text(103, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "input", 52);
    \u0275\u0275template(105, ConsignmentNewComponent_mat_error_105_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 53)(107, "p", 10);
    \u0275\u0275text(108, "Partner HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(109, "input", 54);
    \u0275\u0275template(110, ConsignmentNewComponent_mat_error_110_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 55)(112, "p", 10);
    \u0275\u0275text(113, "Airport Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "input", 56);
    \u0275\u0275template(115, ConsignmentNewComponent_mat_error_115_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 57)(117, "p", 10);
    \u0275\u0275text(118, "Flight No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(119, "input", 58);
    \u0275\u0275template(120, ConsignmentNewComponent_mat_error_120_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 59)(122, "p", 10);
    \u0275\u0275text(123, "Flight ETA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(124, "p-calendar", 60);
    \u0275\u0275template(125, ConsignmentNewComponent_mat_error_125_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 61)(127, "p", 10);
    \u0275\u0275text(128, "No of Packages");
    \u0275\u0275elementEnd();
    \u0275\u0275element(129, "input", 62);
    \u0275\u0275template(130, ConsignmentNewComponent_mat_error_130_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "div", 63)(132, "p", 10);
    \u0275\u0275text(133, "Flight Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(134, "input", 64);
    \u0275\u0275template(135, ConsignmentNewComponent_mat_error_135_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 65)(137, "p", 10);
    \u0275\u0275text(138, "Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "input", 66);
    \u0275\u0275listener("change", function ConsignmentNewComponent_Template_input_change_139_listener() {
      return ctx.calculateVolume(ctx.consignment);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(140, ConsignmentNewComponent_mat_error_140_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div", 67)(142, "p", 10);
    \u0275\u0275text(143, "Width");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "input", 68);
    \u0275\u0275listener("change", function ConsignmentNewComponent_Template_input_change_144_listener() {
      return ctx.calculateVolume(ctx.consignment);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(145, ConsignmentNewComponent_mat_error_145_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "div", 69)(147, "p", 10);
    \u0275\u0275text(148, "Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "input", 70);
    \u0275\u0275listener("change", function ConsignmentNewComponent_Template_input_change_149_listener() {
      return ctx.calculateVolume(ctx.consignment);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(150, ConsignmentNewComponent_mat_error_150_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div", 71)(152, "p", 10);
    \u0275\u0275text(153, "Dimension Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(154, "input", 72);
    \u0275\u0275template(155, ConsignmentNewComponent_mat_error_155_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "div", 73)(157, "p", 10);
    \u0275\u0275text(158, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(159, "input", 74);
    \u0275\u0275template(160, ConsignmentNewComponent_mat_error_160_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "div", 75)(162, "p", 10);
    \u0275\u0275text(163, "Weight Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(164, "input", 76);
    \u0275\u0275template(165, ConsignmentNewComponent_mat_error_165_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "div", 77)(167, "p", 10);
    \u0275\u0275text(168, "Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275element(169, "input", 78);
    \u0275\u0275template(170, ConsignmentNewComponent_mat_error_170_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "div", 79)(172, "p", 10);
    \u0275\u0275text(173, "Volume Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(174, "input", 80);
    \u0275\u0275template(175, ConsignmentNewComponent_mat_error_175_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "div", 81)(177, "p", 10);
    \u0275\u0275text(178, "Net Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(179, "input", 82);
    \u0275\u0275template(180, ConsignmentNewComponent_mat_error_180_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "div", 83)(182, "p", 10);
    \u0275\u0275text(183, "Gross Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(184, "input", 84);
    \u0275\u0275template(185, ConsignmentNewComponent_mat_error_185_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "div", 85)(187, "p", 10);
    \u0275\u0275text(188, "Invoice Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(189, "p-calendar", 86);
    \u0275\u0275template(190, ConsignmentNewComponent_mat_error_190_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "div", 87)(192, "p", 10);
    \u0275\u0275text(193, "Goods Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(194, "input", 88);
    \u0275\u0275template(195, ConsignmentNewComponent_mat_error_195_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "div", 89)(197, "p", 10);
    \u0275\u0275text(198, "Consignment Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(199, "input", 90);
    \u0275\u0275template(200, ConsignmentNewComponent_mat_error_200_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "div", 91)(202, "p", 10);
    \u0275\u0275text(203, "Consignment Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(204, "p-dropdown", 92);
    \u0275\u0275template(205, ConsignmentNewComponent_mat_error_205_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(206, "div", 47)(207, "button", 48);
    \u0275\u0275text(208, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "button", 93);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_209_listener() {
      return ctx.activeIndex = ctx.activeIndex - 1;
    });
    \u0275\u0275text(210, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "button", 49);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_211_listener() {
      return ctx.saveConsignment();
    });
    \u0275\u0275text(212, "Next");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(213, "p-tabPanel", 94)(214, "form", 95)(215, "p-table", 96);
    \u0275\u0275template(216, ConsignmentNewComponent_ng_template_216_Template, 13, 0, "ng-template", 97)(217, ConsignmentNewComponent_ng_template_217_Template, 28, 10, "ng-template", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(218, "div", 99)(219, "button", 100);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_219_listener() {
      return ctx.addPieceDetail();
    });
    \u0275\u0275element(220, "i", 101);
    \u0275\u0275text(221, " Add New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(222, "div", 47)(223, "button", 48);
    \u0275\u0275text(224, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "button", 93);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_225_listener() {
      return ctx.activeIndex = ctx.activeIndex - 1;
    });
    \u0275\u0275text(226, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(227, "button", 49);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_227_listener() {
      return ctx.savePiece();
    });
    \u0275\u0275text(228, "Next");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(229, "p-tabPanel", 102)(230, "form", 7)(231, "div", 8)(232, "div", 103)(233, "p", 10);
    \u0275\u0275text(234, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(235, "input", 104);
    \u0275\u0275template(236, ConsignmentNewComponent_mat_error_236_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "div", 105)(238, "p", 10);
    \u0275\u0275text(239, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(240, "input", 106);
    \u0275\u0275template(241, ConsignmentNewComponent_mat_error_241_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(242, "div", 107)(243, "p", 10);
    \u0275\u0275text(244, "Address Line 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(245, "input", 108);
    \u0275\u0275template(246, ConsignmentNewComponent_mat_error_246_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(247, "div", 109)(248, "p", 10);
    \u0275\u0275text(249, "Address Line 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(250, "input", 110);
    \u0275\u0275template(251, ConsignmentNewComponent_mat_error_251_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(252, "div", 111)(253, "p", 10);
    \u0275\u0275text(254, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(255, "p-dropdown", 112);
    \u0275\u0275template(256, ConsignmentNewComponent_mat_error_256_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "div", 113)(258, "p", 10);
    \u0275\u0275text(259, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(260, "p-dropdown", 114);
    \u0275\u0275template(261, ConsignmentNewComponent_mat_error_261_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(262, "div", 115)(263, "p", 10);
    \u0275\u0275text(264, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(265, "p-dropdown", 116);
    \u0275\u0275template(266, ConsignmentNewComponent_mat_error_266_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "div", 117)(268, "p", 10);
    \u0275\u0275text(269, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(270, "p-dropdown", 118);
    \u0275\u0275template(271, ConsignmentNewComponent_mat_error_271_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(272, "div", 119)(273, "p", 10);
    \u0275\u0275text(274, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(275, "input", 120);
    \u0275\u0275template(276, ConsignmentNewComponent_mat_error_276_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(277, "div", 121)(278, "p", 10);
    \u0275\u0275text(279, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(280, "input", 122);
    \u0275\u0275template(281, ConsignmentNewComponent_mat_error_281_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(282, "div", 123)(283, "p", 10);
    \u0275\u0275text(284, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(285, "input", 124);
    \u0275\u0275template(286, ConsignmentNewComponent_mat_error_286_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(287, "div", 125)(288, "p", 10);
    \u0275\u0275text(289, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(290, "input", 126);
    \u0275\u0275template(291, ConsignmentNewComponent_mat_error_291_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(292, "div", 127)(293, "p", 10);
    \u0275\u0275text(294, "Alternate Phone No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(295, "input", 128);
    \u0275\u0275template(296, ConsignmentNewComponent_mat_error_296_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(297, "div", 129)(298, "p", 10);
    \u0275\u0275text(299, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(300, "input", 130);
    \u0275\u0275template(301, ConsignmentNewComponent_mat_error_301_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(302, "div", 131)(303, "p", 10);
    \u0275\u0275text(304, "Address Hub Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(305, "input", 132);
    \u0275\u0275template(306, ConsignmentNewComponent_mat_error_306_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(307, "div", 133)(308, "p", 10);
    \u0275\u0275text(309, "Account ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(310, "input", 134);
    \u0275\u0275template(311, ConsignmentNewComponent_mat_error_311_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(312, "div", 47)(313, "button", 48);
    \u0275\u0275text(314, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(315, "button", 93);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_315_listener() {
      return ctx.activeIndex = ctx.activeIndex - 1;
    });
    \u0275\u0275text(316, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(317, "button", 49);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_317_listener() {
      return ctx.saveSender();
    });
    \u0275\u0275text(318, "Next");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(319, "p-tabPanel", 135)(320, "form", 7)(321, "div", 8)(322, "div", 136)(323, "p", 10);
    \u0275\u0275text(324, "Consignee Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(325, "input", 104);
    \u0275\u0275template(326, ConsignmentNewComponent_mat_error_326_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(327, "div", 137)(328, "p", 10);
    \u0275\u0275text(329, "Address Line 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(330, "input", 108);
    \u0275\u0275template(331, ConsignmentNewComponent_mat_error_331_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(332, "div", 138)(333, "p", 10);
    \u0275\u0275text(334, "Address Line 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(335, "input", 110);
    \u0275\u0275template(336, ConsignmentNewComponent_mat_error_336_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(337, "div", 139)(338, "p", 10);
    \u0275\u0275text(339, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(340, "p-dropdown", 112);
    \u0275\u0275template(341, ConsignmentNewComponent_mat_error_341_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(342, "div", 140)(343, "p", 10);
    \u0275\u0275text(344, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(345, "p-dropdown", 114);
    \u0275\u0275template(346, ConsignmentNewComponent_mat_error_346_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(347, "div", 141)(348, "p", 10);
    \u0275\u0275text(349, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(350, "p-dropdown", 116);
    \u0275\u0275template(351, ConsignmentNewComponent_mat_error_351_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(352, "div", 142)(353, "p", 10);
    \u0275\u0275text(354, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(355, "p-dropdown", 118);
    \u0275\u0275template(356, ConsignmentNewComponent_mat_error_356_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(357, "div", 143)(358, "p", 10);
    \u0275\u0275text(359, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(360, "input", 120);
    \u0275\u0275template(361, ConsignmentNewComponent_mat_error_361_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(362, "div", 144)(363, "p", 10);
    \u0275\u0275text(364, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(365, "input", 122);
    \u0275\u0275template(366, ConsignmentNewComponent_mat_error_366_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(367, "div", 145)(368, "p", 10);
    \u0275\u0275text(369, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(370, "input", 124);
    \u0275\u0275template(371, ConsignmentNewComponent_mat_error_371_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(372, "div", 146)(373, "p", 10);
    \u0275\u0275text(374, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(375, "input", 126);
    \u0275\u0275template(376, ConsignmentNewComponent_mat_error_376_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(377, "div", 147)(378, "p", 10);
    \u0275\u0275text(379, "Alternate Phone No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(380, "input", 128);
    \u0275\u0275template(381, ConsignmentNewComponent_mat_error_381_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(382, "div", 148)(383, "p", 10);
    \u0275\u0275text(384, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(385, "input", 130);
    \u0275\u0275template(386, ConsignmentNewComponent_mat_error_386_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(387, "div", 149)(388, "p", 10);
    \u0275\u0275text(389, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(390, "input", 106);
    \u0275\u0275template(391, ConsignmentNewComponent_mat_error_391_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(392, "div", 150)(393, "p", 10);
    \u0275\u0275text(394, "Address Hub Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(395, "input", 132);
    \u0275\u0275template(396, ConsignmentNewComponent_mat_error_396_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(397, "div", 151)(398, "p", 10);
    \u0275\u0275text(399, "Account ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(400, "input", 134);
    \u0275\u0275template(401, ConsignmentNewComponent_mat_error_401_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(402, "div", 47)(403, "button", 48);
    \u0275\u0275text(404, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(405, "button", 93);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_405_listener() {
      return ctx.activeIndex = ctx.activeIndex - 1;
    });
    \u0275\u0275text(406, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(407, "button", 49);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_407_listener() {
      return ctx.saveDelivery();
    });
    \u0275\u0275text(408, "Next");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(409, "p-tabPanel", 152)(410, "form", 7)(411, "div", 153)(412, "div", 9)(413, "p", 10);
    \u0275\u0275text(414, "Consignment Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(415, "input", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(416, "div", 9)(417, "p", 10);
    \u0275\u0275text(418, "Consignment Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(419, "input", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(420, "div", 155)(421, "p", 10);
    \u0275\u0275text(422, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(423, "input", 156);
    \u0275\u0275template(424, ConsignmentNewComponent_mat_error_424_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(425, "div", 157)(426, "p", 10);
    \u0275\u0275text(427, "IATA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(428, "input", 158);
    \u0275\u0275template(429, ConsignmentNewComponent_mat_error_429_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(430, "div", 159)(431, "p", 10);
    \u0275\u0275text(432, "Customs Insurance");
    \u0275\u0275elementEnd();
    \u0275\u0275element(433, "input", 160);
    \u0275\u0275template(434, ConsignmentNewComponent_mat_error_434_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(435, "div", 161)(436, "p", 10);
    \u0275\u0275text(437, "Duty Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275element(438, "input", 162);
    \u0275\u0275template(439, ConsignmentNewComponent_mat_error_439_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(440, "div", 163)(441, "p", 10);
    \u0275\u0275text(442, "Consignment Value Local");
    \u0275\u0275elementEnd();
    \u0275\u0275element(443, "input", 164);
    \u0275\u0275template(444, ConsignmentNewComponent_mat_error_444_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(445, "div", 165)(446, "p", 10);
    \u0275\u0275text(447, "Consignment Value with IATA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(448, "input", 166);
    \u0275\u0275template(449, ConsignmentNewComponent_mat_error_449_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(450, "div", 167)(451, "p", 10);
    \u0275\u0275text(452, "Consignment Insurance");
    \u0275\u0275elementEnd();
    \u0275\u0275element(453, "input", 168);
    \u0275\u0275template(454, ConsignmentNewComponent_mat_error_454_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(455, "div", 169)(456, "p", 10);
    \u0275\u0275text(457, "Customs Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(458, "input", 170);
    \u0275\u0275template(459, ConsignmentNewComponent_mat_error_459_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(460, "div", 171)(461, "p", 10);
    \u0275\u0275text(462, "Calculated Total Duty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(463, "input", 172);
    \u0275\u0275template(464, ConsignmentNewComponent_mat_error_464_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(465, "div", 173)(466, "p", 10);
    \u0275\u0275text(467, "DDU Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275element(468, "input", 174);
    \u0275\u0275template(469, ConsignmentNewComponent_mat_error_469_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(470, "div", 175)(471, "p", 10);
    \u0275\u0275text(472, "Special Approval Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275element(473, "input", 176);
    \u0275\u0275template(474, ConsignmentNewComponent_mat_error_474_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(475, "div", 177)(476, "p", 10);
    \u0275\u0275text(477, "Actual Duty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(478, "input", 178);
    \u0275\u0275template(479, ConsignmentNewComponent_mat_error_479_Template, 3, 1, "mat-error", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(480, "div", 47)(481, "button", 93);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_481_listener() {
      return ctx.activeIndex = ctx.activeIndex - 1;
    });
    \u0275\u0275text(482, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(483, "button", 49);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_483_listener() {
      return ctx.saveBilling();
    });
    \u0275\u0275text(484, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_14_0;
    let tmp_19_0;
    let tmp_24_0;
    let tmp_33_0;
    let tmp_36_0;
    let tmp_38_0;
    let tmp_48_0;
    let tmp_50_0;
    let tmp_52_0;
    let tmp_56_0;
    let tmp_61_0;
    let tmp_69_0;
    let tmp_71_0;
    let tmp_73_0;
    let tmp_75_0;
    let tmp_77_0;
    let tmp_81_0;
    let tmp_83_0;
    let tmp_85_0;
    let tmp_87_0;
    let tmp_89_0;
    let tmp_91_0;
    let tmp_93_0;
    let tmp_95_0;
    let tmp_97_0;
    let tmp_99_0;
    let tmp_101_0;
    let tmp_103_0;
    let tmp_105_0;
    let tmp_109_0;
    let tmp_111_0;
    let tmp_115_0;
    let tmp_124_0;
    let tmp_126_0;
    let tmp_128_0;
    let tmp_130_0;
    let tmp_134_0;
    let tmp_139_0;
    let tmp_144_0;
    let tmp_149_0;
    let tmp_152_0;
    let tmp_154_0;
    let tmp_156_0;
    let tmp_158_0;
    let tmp_160_0;
    let tmp_162_0;
    let tmp_164_0;
    let tmp_166_0;
    let tmp_170_0;
    let tmp_172_0;
    let tmp_174_0;
    let tmp_178_0;
    let tmp_183_0;
    let tmp_188_0;
    let tmp_193_0;
    let tmp_196_0;
    let tmp_198_0;
    let tmp_200_0;
    let tmp_202_0;
    let tmp_204_0;
    let tmp_206_0;
    let tmp_208_0;
    let tmp_210_0;
    let tmp_212_0;
    let tmp_220_0;
    let tmp_222_0;
    let tmp_224_0;
    let tmp_226_0;
    let tmp_228_0;
    let tmp_230_0;
    let tmp_232_0;
    let tmp_234_0;
    let tmp_236_0;
    let tmp_238_0;
    let tmp_240_0;
    let tmp_242_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Consignment - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("activeIndex", ctx.activeIndex);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.shipmentInfo);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(264, _c04));
    \u0275\u0275property("options", ctx.companyIdList)("panelStyle", \u0275\u0275pureFunction0(265, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(266, _c04));
    \u0275\u0275property("options", ctx.productIdList)("ngClass", ((tmp_9_0 = ctx.shipmentInfo.get("productId")) == null ? null : tmp_9_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(267, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("productId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(268, _c04));
    \u0275\u0275property("options", ctx.serviceTypeIdList)("ngClass", ((tmp_14_0 = ctx.shipmentInfo.get("serviceTypeId")) == null ? null : tmp_14_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(269, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("serviceTypeId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(270, _c04));
    \u0275\u0275property("options", ctx.partnerType)("ngClass", ((tmp_19_0 = ctx.shipmentInfo.get("partnerType")) == null ? null : tmp_19_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(271, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("partnerType"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(272, _c04));
    \u0275\u0275property("options", ctx.partnerNameList)("ngClass", ((tmp_24_0 = ctx.shipmentInfo.get("partnerId")) == null ? null : tmp_24_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(273, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(274, _c04));
    \u0275\u0275property("options", ctx.consignmentTypeIdList)("panelStyle", \u0275\u0275pureFunction0(275, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("consignmentType"));
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(276, _c04));
    \u0275\u0275property("options", ctx.loadTypeIdList)("ngClass", ((tmp_33_0 = ctx.shipmentInfo.get("loadType")) == null ? null : tmp_33_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(277, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("loadType"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_36_0 = ctx.shipmentInfo.get("customerReferenceNumber")) == null ? null : tmp_36_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("customerReferenceNumber"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_38_0 = ctx.shipmentInfo.get("noOfPieceHawb")) == null ? null : tmp_38_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("noOfPieceHawb"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(278, _c04));
    \u0275\u0275property("options", ctx.countryIdListOrigin)("panelStyle", \u0275\u0275pureFunction0(279, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("countryOfOrigin"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(280, _c04));
    \u0275\u0275property("options", ctx.countryIdListOrigin)("panelStyle", \u0275\u0275pureFunction0(281, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("countryOfDestination"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_48_0 = ctx.consignment.get("invoiceNumber")) == null ? null : tmp_48_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("invoiceNumber"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_50_0 = ctx.shipmentInfo.get("invoiceAmount")) == null ? null : tmp_50_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("invoiceAmount"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_52_0 = ctx.shipmentInfo.get("invoiceUrl")) == null ? null : tmp_52_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("invoiceUrl"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(282, _c04));
    \u0275\u0275property("options", ctx.incoTerms)("ngClass", ((tmp_56_0 = ctx.shipmentInfo.get("incoTerms")) == null ? null : tmp_56_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(283, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("incoTerms"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(284, _c04));
    \u0275\u0275property("options", ctx.paymentType)("ngClass", ((tmp_61_0 = ctx.shipmentInfo.get("paymentType")) == null ? null : tmp_61_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(285, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("paymentType"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showPaymentTypeFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showPaymentTypeFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showPaymentTypeFields);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.disabledConsignment);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.consignment);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ((tmp_69_0 = ctx.consignment.get("partnerMasterAirwayBill")) == null ? null : tmp_69_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("partnerMasterAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_71_0 = ctx.consignment.get("partnerHouseAirwayBill")) == null ? null : tmp_71_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("partnerHouseAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_73_0 = ctx.consignment.get("airportOriginCode")) == null ? null : tmp_73_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("airportOriginCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_75_0 = ctx.consignment.get("flightNo")) == null ? null : tmp_75_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("flightNo"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_77_0 = ctx.consignment.get("flightArrivalTime")) == null ? null : tmp_77_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("flightArrivalTime"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_81_0 = ctx.consignment.get("noOfPackages")) == null ? null : tmp_81_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("noOfPackages"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_83_0 = ctx.consignment.get("flightName")) == null ? null : tmp_83_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("flightName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_85_0 = ctx.consignment.get("length")) == null ? null : tmp_85_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("length"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_87_0 = ctx.consignment.get("width")) == null ? null : tmp_87_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("width"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_89_0 = ctx.consignment.get("height")) == null ? null : tmp_89_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("height"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_91_0 = ctx.consignment.get("dimensionUnit")) == null ? null : tmp_91_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("dimensionUnit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_93_0 = ctx.consignment.get("weight")) == null ? null : tmp_93_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("weight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_95_0 = ctx.consignment.get("weightUnit")) == null ? null : tmp_95_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("weightUnit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_97_0 = ctx.consignment.get("volume")) == null ? null : tmp_97_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("volume"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_99_0 = ctx.consignment.get("volumeUnit")) == null ? null : tmp_99_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("volumeUnit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_101_0 = ctx.consignment.get("netWeight")) == null ? null : tmp_101_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("netWeight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_103_0 = ctx.consignment.get("grossWeight")) == null ? null : tmp_103_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("grossWeight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_105_0 = ctx.consignment.get("invoiceDateFE")) == null ? null : tmp_105_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("invoiceDateFE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_109_0 = ctx.consignment.get("goodsDescription")) == null ? null : tmp_109_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("goodsDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_111_0 = ctx.consignment.get("consignmentValue")) == null ? null : tmp_111_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("consignmentValue"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(286, _c04));
    \u0275\u0275property("options", ctx.currencyDropdown)("ngClass", ((tmp_115_0 = ctx.consignment.get("consignmentCurrency")) == null ? null : tmp_115_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(287, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("consignmentCurrency"));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx.disabledPiece);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.piece);
    \u0275\u0275advance();
    \u0275\u0275property("scrollable", true)("value", ctx.piece.controls.pieceDetails.controls);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx.disabledSender);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.senderInfo);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ((tmp_124_0 = ctx.senderInfo.get("originDetails.name")) == null ? null : tmp_124_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.name"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_126_0 = ctx.senderInfo.get("companyName")) == null ? null : tmp_126_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("companyName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_128_0 = ctx.senderInfo.get("originDetails.addressLine1")) == null ? null : tmp_128_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.addressLine1"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_130_0 = ctx.senderInfo.get("originDetails.addressLine2")) == null ? null : tmp_130_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.addressLine2"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(288, _c04));
    \u0275\u0275property("options", ctx.countryIdListOrigin)("ngClass", ((tmp_134_0 = ctx.senderInfo.get("originDetails.country")) == null ? null : tmp_134_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(289, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.country"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(290, _c04));
    \u0275\u0275property("options", ctx.provinceIdList)("ngClass", ((tmp_139_0 = ctx.senderInfo.get("originDetails.state")) == null ? null : tmp_139_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(291, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.state"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(292, _c04));
    \u0275\u0275property("options", ctx.districtIdList)("ngClass", ((tmp_144_0 = ctx.senderInfo.get("originDetails.district")) == null ? null : tmp_144_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(293, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.district"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(294, _c04));
    \u0275\u0275property("options", ctx.cityIdList)("ngClass", ((tmp_149_0 = ctx.senderInfo.get("originDetails.city")) == null ? null : tmp_149_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(295, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.city"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_152_0 = ctx.senderInfo.get("originDetails.pinCode")) == null ? null : tmp_152_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.pinCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_154_0 = ctx.senderInfo.get("originDetails.latitude")) == null ? null : tmp_154_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.latitude"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_156_0 = ctx.senderInfo.get("originDetails.longitude")) == null ? null : tmp_156_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.longitude"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_158_0 = ctx.senderInfo.get("originDetails.phone")) == null ? null : tmp_158_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.phone"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_160_0 = ctx.senderInfo.get("originDetails.alternatePhone")) == null ? null : tmp_160_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.alternatePhone"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_162_0 = ctx.senderInfo.get("originDetails.email")) == null ? null : tmp_162_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.email"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_164_0 = ctx.senderInfo.get("originDetails.addressHubCode")) == null ? null : tmp_164_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.addressHubCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_166_0 = ctx.senderInfo.get("originDetails.accountId")) == null ? null : tmp_166_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.accountId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx.disabledDelivery);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.deliveryInfo);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ((tmp_170_0 = ctx.deliveryInfo.get("destinationDetails.name")) == null ? null : tmp_170_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.name"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_172_0 = ctx.deliveryInfo.get("destinationDetails.addressLine1")) == null ? null : tmp_172_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.addressLine1"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_174_0 = ctx.deliveryInfo.get("destinationDetails.addressLine2")) == null ? null : tmp_174_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.addressLine2"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(296, _c04));
    \u0275\u0275property("options", ctx.countryIdListDestination)("ngClass", ((tmp_178_0 = ctx.deliveryInfo.get("destinationDetails.country")) == null ? null : tmp_178_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(297, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.country"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(298, _c04));
    \u0275\u0275property("options", ctx.provinceIdList)("ngClass", ((tmp_183_0 = ctx.deliveryInfo.get("destinationDetails.state")) == null ? null : tmp_183_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(299, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.state"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(300, _c04));
    \u0275\u0275property("options", ctx.districtIdList)("ngClass", ((tmp_188_0 = ctx.deliveryInfo.get("destinationDetails.district")) == null ? null : tmp_188_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(301, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.district"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(302, _c04));
    \u0275\u0275property("options", ctx.cityIdList)("ngClass", ((tmp_193_0 = ctx.deliveryInfo.get("destinationDetails.city")) == null ? null : tmp_193_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(303, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.city"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_196_0 = ctx.senderInfo.get("destinationDetails.pinCode")) == null ? null : tmp_196_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("destinationDetails.pinCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_198_0 = ctx.deliveryInfo.get("destinationDetails.latitude")) == null ? null : tmp_198_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.latitude"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_200_0 = ctx.deliveryInfo.get("destinationDetails.longitude")) == null ? null : tmp_200_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.longitude"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_202_0 = ctx.deliveryInfo.get("destinationDetails.phone")) == null ? null : tmp_202_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.phone"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_204_0 = ctx.deliveryInfo.get("destinationDetails.alternatePhone")) == null ? null : tmp_204_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.alternatePhone"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_206_0 = ctx.deliveryInfo.get("destinationDetails.email")) == null ? null : tmp_206_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.email"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_208_0 = ctx.deliveryInfo.get("destinationDetails.companyName")) == null ? null : tmp_208_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.companyName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_210_0 = ctx.deliveryInfo.get("destinationDetails.addressHubCode")) == null ? null : tmp_210_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.addressHubCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_212_0 = ctx.deliveryInfo.get("destinationDetails.accountId")) == null ? null : tmp_212_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.accountId"));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx.disabledBilling);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.billing);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx.consignmentCurrency)("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.consignmentValue)("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_220_0 = ctx.billing.get("exchangeRate")) == null ? null : tmp_220_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("exchangeRate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_222_0 = ctx.billing.get("iataCharge")) == null ? null : tmp_222_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("iataCharge"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_224_0 = ctx.billing.get("customsInsurance")) == null ? null : tmp_224_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("customsInsurance"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_226_0 = ctx.billing.get("dutyPercentage")) == null ? null : tmp_226_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("dutyPercentage"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_228_0 = ctx.billing.get("consignmentValueLocal")) == null ? null : tmp_228_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("consignmentValueLocal"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_230_0 = ctx.billing.get("consignmentValuwithIATA")) == null ? null : tmp_230_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("consignmentValuwithIATA"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_232_0 = ctx.billing.get("consignmentInsurance")) == null ? null : tmp_232_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("consignmentInsurance"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_234_0 = ctx.billing.get("customsValue")) == null ? null : tmp_234_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("customsValue"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_236_0 = ctx.billing.get("calculatedTotalDuty")) == null ? null : tmp_236_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("calculatedTotalDuty"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_238_0 = ctx.billing.get("dduCharge")) == null ? null : tmp_238_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("dduCharge"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_240_0 = ctx.billing.get("specialApprovalCharge")) == null ? null : tmp_240_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("specialApprovalCharge"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_242_0 = ctx.billing.get("actualDuty")) == null ? null : tmp_242_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("actualDuty"));
  }
}, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, Table, Dropdown, InputText, Calendar, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, TabView, TabPanel, OverlayPanel, MatError, MatMenuItem, FormGroupDirective, FormControlName, FormGroupName], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew22[_ngcontent-%COMP%] {\n  height: calc(100vh - 22rem);\n  overflow-y: scroll;\n}\n.inputborderLess[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.small-calendar[_ngcontent-%COMP%]   .p-datepicker[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 200px;\n  max-width: 100%;\n  max-height: 300px;\n}\n/*# sourceMappingURL=consignment-new.component.css.map */"] });
var ConsignmentNewComponent = _ConsignmentNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignmentNewComponent, { className: "ConsignmentNewComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment-new\\consignment-new.component.ts", lineNumber: 25 });
})();

// src/app/main/operation/operation-routing.module.ts
var routes = [
  { path: "consignment", component: ConsignmentComponent, data: { title: "Operations", module: "Consignment" } },
  { path: "consignment-new/:code", component: ConsignmentNewComponent, data: { title: "Operations", module: "Consignment" } }
];
var _OperationRoutingModule = class _OperationRoutingModule {
};
_OperationRoutingModule.\u0275fac = function OperationRoutingModule_Factory(t) {
  return new (t || _OperationRoutingModule)();
};
_OperationRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OperationRoutingModule });
_OperationRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var OperationRoutingModule = _OperationRoutingModule;

// src/app/main/operation/operation.module.ts
var _OperationModule = class _OperationModule {
};
_OperationModule.\u0275fac = function OperationModule_Factory(t) {
  return new (t || _OperationModule)();
};
_OperationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OperationModule });
_OperationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  OperationRoutingModule,
  SharedModule
] });
var OperationModule = _OperationModule;
export {
  OperationModule
};
//# sourceMappingURL=chunk-O43DFF5D.js.map

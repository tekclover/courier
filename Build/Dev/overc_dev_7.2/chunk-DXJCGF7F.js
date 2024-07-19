import {
  ProductService
} from "./chunk-WXK5KZTJ.js";
import {
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
  DomSanitizer,
  Dropdown,
  ElementRef,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FrozenColumn,
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
  SortIcon,
  SortableColumn,
  TabPanel,
  TabView,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  Validators,
  __spreadProps,
  __spreadValues,
  animate,
  state,
  style,
  transition,
  trigger,
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
} from "./chunk-Y7FSALMY.js";

// src/app/main/operation/consignment/download-template/download-template.component.ts
var _c0 = () => ({ "width": "100%" });
function DownloadTemplateComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 10);
    \u0275\u0275text(2, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-dropdown", 19);
    \u0275\u0275listener("onChange", function DownloadTemplateComponent_div_12_Template_p_dropdown_onChange_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.partnerTypeChanged());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275property("options", ctx_r1.partnerType)("ngClass", ((tmp_3_0 = ctx_r1.form.get("partnerType")) == null ? null : tmp_3_0.invalid) && ctx_r1.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(6, _c0));
  }
}
function DownloadTemplateComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "p", 10);
    \u0275\u0275text(2, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-dropdown", 21, 0);
    \u0275\u0275listener("onChange", function DownloadTemplateComponent_div_13_Template_p_dropdown_onChange_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.partnerChanged());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275property("options", ctx_r1.partnerNameList)("ngClass", ((tmp_4_0 = ctx_r1.form.get("partnerId")) == null ? null : tmp_4_0.invalid) && ctx_r1.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(6, _c0));
  }
}
function DownloadTemplateComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 10);
    \u0275\u0275text(2, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-dropdown", 23, 1);
    \u0275\u0275listener("onChange", function DownloadTemplateComponent_div_14_Template_p_dropdown_onChange_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.productChanged());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275property("options", ctx_r1.productNameList)("ngClass", ((tmp_4_0 = ctx_r1.form.get("productName")) == null ? null : tmp_4_0.invalid) && ctx_r1.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(6, _c0));
  }
}
var _DownloadTemplateComponent = class _DownloadTemplateComponent {
  constructor(dialogRef, data, cs, spin, route, router, path, fb, service, messageService, cas, auth, customerService, consignorService, productService) {
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
    this.customerService = customerService;
    this.consignorService = consignorService;
    this.productService = productService;
    this.partnerType = [];
    this.creationType = [];
    this.form = this.fb.group({
      partnerType: [""],
      partnerId: [""],
      creationType: ["Single", Validators.required],
      consignorId: [],
      customerId: [],
      productId: [""],
      productName: [""],
      fileName: [""]
    });
    this.partnerNameList = [];
    this.productNameList = [];
    this.submitted = false;
    this.partnerType = [
      { value: "customer", label: "Customer" },
      { value: "consignor", label: "Consignor" }
    ];
    this.creationType = [
      { value: "Single", label: "Single" },
      { value: "Bulk", label: "Bulk" }
    ];
  }
  ngOnInit() {
  }
  partnerTypeChanged() {
    if (this.form.controls.partnerType.value == "customer") {
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.partnerNameList = [];
      this.productNameList = [];
      this.spin.show();
      this.customerService.search(obj).subscribe({
        next: (result) => {
          this.partnerNameList = this.cas.foreachlist(result, { key: "customerId", value: "customerName", value2: "productName" });
          this.partnerNameList = this.cs.removeDuplicatesFromArrayList(this.partnerNameList, ["value"]);
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
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.partnerNameList = [];
      this.productNameList = [];
      this.spin.show();
      this.consignorService.search(obj).subscribe({
        next: (result) => {
          this.partnerNameList = this.cas.foreachlist(result, { key: "consignorId", value: "consignorName", value2: "productName" });
          this.partnerNameList = this.cs.removeDuplicatesFromArrayList(this.partnerNameList, ["value"]);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
    }
  }
  partnerChanged() {
    if (this.form.controls.partnerType.value == "customer") {
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.productNameList = [];
      this.spin.show();
      this.customerService.search(obj).subscribe({
        next: (result) => {
          this.productNameList = this.cas.foreachlistWithoutKey(result, { key: "productId", value: "productName" });
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
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      this.productNameList = [];
      this.spin.show();
      this.consignorService.search(obj).subscribe({
        next: (result) => {
          this.productNameList = this.cas.foreachlistWithoutKey(result, { key: "productId", value: "productName" });
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      });
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
    this.dialogRef.close(this.form.getRawValue());
  }
  productChanged() {
    const selectedPartner = this.partnerNameList.find((value) => value.value === this.form.controls.productId.value);
    this.form.controls.productName.patchValue(selectedPartner.value2);
    if (selectedPartner.value2 == "1 - INTERNATIONALINBOUND") {
      this.form.controls.fileName.patchValue("1_-_INTERNATIONALINBOUND.xlsx");
    }
    if (selectedPartner.value2 == "2 - INTERNATIONALOUTBOUND") {
      this.form.controls.fileName.patchValue("2_-_INTERNATIONALOUTBOUND.xlsx");
    }
    if (selectedPartner.value2 == "3 - DOMESTIC") {
      this.form.controls.fileName.patchValue("3_-_DOMESTIC.xlsx");
    }
  }
};
_DownloadTemplateComponent.\u0275fac = function DownloadTemplateComponent_Factory(t) {
  return new (t || _DownloadTemplateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(ProductService));
};
_DownloadTemplateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DownloadTemplateComponent, selectors: [["app-download-template"]], decls: 20, vars: 12, consts: [["partnerChange", ""], ["productChange", ""], [1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4", "pt-2"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], ["id", "creationType", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["formControlName", "creationType", "appendTo", "body", "placeholder", "Select", 3, "options", "ngClass", "panelStyle"], ["class", "col-6 marginFieldNew borderRadius12", "id", "partnerType", 4, "ngIf"], ["class", "col-6 marginFieldNew borderRadius12", "id", "partnerId", 4, "ngIf"], ["class", "col-6 marginFieldNew borderRadius12", "id", "productId", 4, "ngIf"], [1, "d-flex", "float-right", "py-2"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], ["id", "partnerType", 1, "col-6", "marginFieldNew", "borderRadius12"], ["formControlName", "partnerType", "appendTo", "body", "placeholder", "Select", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "partnerId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "productId", 1, "col-6", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"]], template: function DownloadTemplateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "Create Consignment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5)(5, "form", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "p", 10);
    \u0275\u0275text(10, "Creation Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-dropdown", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, DownloadTemplateComponent_div_12_Template, 4, 7, "div", 12)(13, DownloadTemplateComponent_div_13_Template, 5, 7, "div", 13)(14, DownloadTemplateComponent_div_14_Template, 5, 7, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 15)(16, "button", 16);
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 17);
    \u0275\u0275listener("click", function DownloadTemplateComponent_Template_button_click_18_listener() {
      return ctx.save();
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275property("options", ctx.creationType)("ngClass", ((tmp_3_0 = ctx.form.get("creationType")) == null ? null : tmp_3_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form.controls.creationType.value == "Bulk");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form.controls.creationType.value == "Bulk");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form.controls.creationType.value == "Bulk");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.form.controls.creationType.value == "Single" ? "Create" : "Download");
  }
}, dependencies: [NgClass, NgIf, Dropdown, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 20rem);\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=download-template.component.css.map */"] });
var DownloadTemplateComponent = _DownloadTemplateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadTemplateComponent, { className: "DownloadTemplateComponent", filePath: "src\\app\\main\\operation\\consignment\\download-template\\download-template.component.ts", lineNumber: 21 });
})();

// src/app/main/operation/consignment/consignment.component.ts
var _c02 = ["consignment"];
var _c1 = () => ({ width: "180" });
var _c2 = () => ({ width: "80vw" });
var _c3 = () => ({ "width": "100%" });
var _c4 = () => ({ "width": "130rem" });
var _c5 = (a0) => ({ "selectedRow": a0 });
function ConsignmentComponent_ng_template_65_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 48);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    \u0275\u0275property("pSortableColumn", col_r6.field);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r6.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r6.field);
  }
}
function ConsignmentComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 44);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsignmentComponent_ng_template_65_th_3_Template, 3, 3, "th", 46);
    \u0275\u0275elementStart(4, "th", 47);
    \u0275\u0275text(5, " Actions ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const columns_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", columns_r7);
  }
}
function ConsignmentComponent_ng_template_66_td_3_ng_container_1_Template(rf, ctx) {
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
function ConsignmentComponent_ng_template_66_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r10.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsignmentComponent_ng_template_66_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsignmentComponent_ng_template_66_td_3_ng_container_1_Template, 2, 1, "ng-container", 58)(2, ConsignmentComponent_ng_template_66_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    const dateTemplate_r11 = \u0275\u0275reference(3);
    \u0275\u0275styleMap(col_r9.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r9.format !== "date")("ngIfElse", dateTemplate_r11);
  }
}
function ConsignmentComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 50)(1, "td", 51);
    \u0275\u0275element(2, "p-tableCheckbox", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsignmentComponent_ng_template_66_td_3_Template, 4, 4, "td", 53);
    \u0275\u0275elementStart(4, "td", 54)(5, "img", 55);
    \u0275\u0275listener("click", function ConsignmentComponent_ng_template_66_Template_img_click_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const label_r12 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(label_r12.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-overlayPanel", null, 4)(8, "div", 14)(9, "button", 15);
    \u0275\u0275listener("click", function ConsignmentComponent_ng_template_66_Template_button_click_9_listener() {
      const rowData_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const label_r12 = \u0275\u0275reference(7);
      const ctx_r12 = \u0275\u0275nextContext();
      label_r12.hide();
      return \u0275\u0275resetView(ctx_r12.downloadLabel(rowData_r10, "download"));
    });
    \u0275\u0275element(10, "img", 56);
    \u0275\u0275text(11, "Download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 15);
    \u0275\u0275listener("click", function ConsignmentComponent_ng_template_66_Template_button_click_12_listener() {
      const rowData_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const label_r12 = \u0275\u0275reference(7);
      const ctx_r12 = \u0275\u0275nextContext();
      label_r12.hide();
      return \u0275\u0275resetView(ctx_r12.downloadLabel(rowData_r10, "print"));
    });
    \u0275\u0275element(13, "img", 57);
    \u0275\u0275text(14, "Print");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const rowData_r10 = ctx.$implicit;
    const columns_r14 = ctx.columns;
    const ctx_r12 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c5, ctx_r12.isSelected(rowData_r10)));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rowData_r10);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r14);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(7, _c1));
  }
}
function ConsignmentComponent_ng_template_67_Template(rf, ctx) {
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
var _ConsignmentComponent = class _ConsignmentComponent {
  constructor(messageService, cs, router, path, service, dialog, datePipe, auth, spin, pdf, fb, label) {
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
    this.label = label;
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
    this.fieldDisplayNames = {
      houseAirwayBill: "Consignment No",
      masterAirwayBill: "MAWB",
      partnerId: "Partner",
      pieceId: "Piece",
      pieceItemId: "Piece Item",
      shipperId: "Shipper",
      statusId: "Status"
    };
    this.houseAirwayBillDropdown = [];
    this.masterAirwayBillDropdown = [];
    this.partnerDropdown = [];
    this.statusDropdown = [];
    this.uniqueHouseAirway = [];
    this.uniquePieceId = [];
  }
  ngOnInit() {
    const dataToSend = ["Operations", "Consignment "];
    this.path.setData(dataToSend);
    this.callTableHeader();
    this.initialCall();
  }
  callTableHeader() {
    this.cols = [
      { field: "houseAirwayBill", header: "Consignment No", style: "min-width: 5rem" },
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
    setTimeout(() => {
      this.spin.show();
      let obj = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
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
    }, 2e3);
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
          exportItem[col.header] = this.datePipe.transform(item[col.field], "dd-MM-yyyy");
        } else {
          exportItem[col.header] = item[col.field];
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
    console.log(event.target.files);
    this.selectedFiles = file;
    console.log(this.selectedFiles);
    this.spin.show();
    this.service.uploadConsignment(this.selectedFiles).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: "success",
          summary: "Uploaded",
          key: "br",
          detail: "File uploaded successfully"
        });
        this.selectedFiles = null;
        this.clearFileInput(event.target);
        this.initialCall();
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
    this.fieldsWithValue = Object.keys(formValues).filter((key) => formValues[key] !== null && formValues[key] !== void 0 && key !== "companyId" && key !== "languageId").map((key) => this.fieldDisplayNames[key] || key);
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
    const formControlKey = Object.keys(this.fieldDisplayNames).find((key) => this.fieldDisplayNames[key] === value.value);
    if (formControlKey) {
      this.searchform.get(formControlKey)?.reset();
      this.search();
    }
  }
  isSelected(item) {
    return this.selectedConsignment.includes(item);
  }
  generateInvoice() {
    this.uniqueHouseAirway = [];
    if (this.selectedConsignment.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    this.uniqueHouseAirway = this.selectedConsignment.map((item) => item.houseAirwayBill);
    this.label.getResultInvoice(this.uniqueHouseAirway);
  }
  generateLabel() {
    this.uniquePieceId = [];
    if (this.selectedConsignment.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", key: "br", detail: "Kindly select any row" });
      return;
    }
    this.uniqueHouseAirway = this.selectedConsignment.map((item) => item.houseAirwayBill);
    this.label.getResultLabelFromConsignment(this.uniqueHouseAirway);
  }
  downloadTemplate() {
    const dialogRef = this.dialog.open(DownloadTemplateComponent, {
      disableClose: true,
      width: "70%",
      maxWidth: "80%",
      position: { top: "6.5%", left: "30%" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.creationType == "Single") {
          this.openCrud("New");
        } else {
          let obj = {};
          obj.value = { imageRefId: result.fileName, referenceImageUrl: "/consignment/templates/" };
          this.label.downloadDocument(obj);
        }
      }
    });
  }
};
_ConsignmentComponent.\u0275fac = function ConsignmentComponent_Factory(t) {
  return new (t || _ConsignmentComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ConsignmentLabelComponent), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentLabelComponent));
};
_ConsignmentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignmentComponent, selectors: [["app-consignment"]], viewQuery: function ConsignmentComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayPanel = _t.first);
  }
}, decls: 68, vars: 44, consts: [["fileInput", ""], ["op", ""], ["consignment", ""], ["consignmentTag", ""], ["label", ""], ["dateTemplate", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "file", 2, "display", "none", 3, "change"], ["type", "button", "src", "./assets/common/edit.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/download.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/deletetool.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", "src", "./assets/common/settings.png", "alt", "", "srcset", "", 2, "margin-left", "19px", "margin-right", "28px", "height", "1.5rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/upload.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/document.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common2x/invoice.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "d-flex", "justify-content-start", "align-items-center", 2, "margin-bottom", "1.1rem !important", "margin-top", "0.8rem"], ["iconPosition", "right", 1, "mr-2"], ["type", "button", "styleClass", "pi pi-filter", 3, "click"], ["type", "text", "id", "toolInput1", "pInputText", "", "placeholder", "Advance filter", 3, "input"], ["appendTo", "body", 3, "dismissable", "styleClass"], [2, "padding", "2rem", 3, "formGroup"], [1, "row"], [1, "col-3", "mb-3", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "masterAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "houseAirwayBill", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "panelStyle"], ["placeholder", "Select", "filter", "true", "formControlName", "statusId", "appendTo", "body", 3, "options", "panelStyle"], [1, "d-flex", "justify-content-between"], ["type", "button", "src", "./assets/common/reset.png", "alt", "", "srcset", "", 3, "click"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [1, "inputborderLess", 3, "onRemove", "ngModelChange", "ngModel"], [1, "tableProperties"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 20.8rem)", "sortField", "consignmentId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "selection", "paginator", "rows", "showCurrentPageReport", "sortOrder", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pFrozenColumn", "", 2, "width", "5rem"], [1, "pl-3"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], ["pFrozenColumn", "", "alignFrozen", "right", 2, "width", "5rem"], [3, "pSortableColumn"], [3, "field"], [3, "ngClass"], ["pFrozenColumn", "", 2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "value"], [3, "style", 4, "ngFor", "ngForOf"], ["pFrozenColumn", "", "alignFrozen", "right", 2, "width", "5rem", "justify-content", "center"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], ["src", "./assets/common/download.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/print.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"]], template: function ConsignmentComponent_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 15);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateLabel());
    });
    \u0275\u0275element(21, "img", 17);
    \u0275\u0275text(22, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 15);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateInvoice());
    });
    \u0275\u0275element(24, "img", 18);
    \u0275\u0275text(25, "Invoice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 19);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadTemplate());
    });
    \u0275\u0275element(27, "i", 20);
    \u0275\u0275text(28, " Add New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 21)(30, "p-iconField", 22)(31, "p-inputIcon", 23);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_p_inputIcon_click_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consignment_r4 = \u0275\u0275reference(34);
      return \u0275\u0275resetView(consignment_r4.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 24);
    \u0275\u0275listener("input", function ConsignmentComponent_Template_input_input_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const consignmentTag_r5 = \u0275\u0275reference(64);
      return \u0275\u0275resetView(consignmentTag_r5.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "p-overlayPanel", 25, 2)(35, "form", 26)(36, "div", 27)(37, "div", 28)(38, "p", 29);
    \u0275\u0275text(39, "MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "p-multiSelect", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 28)(42, "p", 29);
    \u0275\u0275text(43, "HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "p-multiSelect", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 28)(46, "p", 29);
    \u0275\u0275text(47, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "p-multiSelect", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 28)(50, "p", 29);
    \u0275\u0275text(51, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "p-multiSelect", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 34)(54, "div")(55, "img", 35);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_img_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div")(57, "button", 36);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeOverLay());
    });
    \u0275\u0275text(58, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 37);
    \u0275\u0275listener("click", function ConsignmentComponent_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search());
    });
    \u0275\u0275text(60, "Apply");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(61, "p-chips", 38);
    \u0275\u0275listener("onRemove", function ConsignmentComponent_Template_p_chips_onRemove_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.chipClear($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ConsignmentComponent_Template_p_chips_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fieldsWithValue, $event) || (ctx.fieldsWithValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 39)(63, "p-table", 40, 3);
    \u0275\u0275twoWayListener("selectionChange", function ConsignmentComponent_Template_p_table_selectionChange_63_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.selectedConsignment, $event) || (ctx.selectedConsignment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(65, ConsignmentComponent_ng_template_65_Template, 6, 1, "ng-template", 41)(66, ConsignmentComponent_ng_template_66_Template, 15, 8, "ng-template", 42)(67, ConsignmentComponent_ng_template_67_Template, 4, 1, "ng-template", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(33, _c1));
    \u0275\u0275advance(22);
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
}, dependencies: [NgClass, NgForOf, NgIf, PrimeTemplate, Table, SortableColumn, FrozenColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputIcon, IconField, InputText, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, Chips, OverlayPanel, MultiSelect, MatMenuItem, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n  .customClass {\n  border-radius: 12px !important;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.3rem) !important;\n  overflow-y: scroll !important;\n}\n/*# sourceMappingURL=consignment.component.css.map */"] });
var ConsignmentComponent = _ConsignmentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignmentComponent, { className: "ConsignmentComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment.component.ts", lineNumber: 24 });
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
_DimensionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DimensionComponent, selectors: [["app-dimension"]], decls: 45, vars: 1, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "mt-4", "pt-2"], [3, "formGroup"], [1, "d-flex-row"], [1, "row"], ["id", "length", 1, "col-6", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "length", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change"], ["id", "width", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "width", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change"], ["id", "height", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "height", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change"], ["id", "dimensionUnit", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "dimensionUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["id", "volume", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "volume", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["maxlength", "50", "formControlName", "volumeUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["id", "weight", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "weight", "pInputText", "", "placeholder", "Enter", 1, "w-100"], ["id", "weightUnit", 1, "col-6", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "weightUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100"], [1, "d-flex", "float-right", "py-2"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], ["type", "button", 1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"]], template: function DimensionComponent_Template(rf, ctx) {
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
var _c03 = () => ({ width: "180" });
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
    \u0275\u0275elementStart(5, "td", 18)(6, "img", 19);
    \u0275\u0275listener("click", function ImageUploadComponent_ng_template_12_Template_img_click_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const op_r4 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(op_r4.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-overlayPanel", null, 1)(9, "div", 20)(10, "button", 21);
    \u0275\u0275listener("click", function ImageUploadComponent_ng_template_12_Template_button_click_10_listener() {
      const i_r5 = \u0275\u0275restoreView(_r3).rowIndex;
      const op_r4 = \u0275\u0275reference(8);
      const ctx_r5 = \u0275\u0275nextContext();
      op_r4.hide();
      return \u0275\u0275resetView(ctx_r5.removeItem(i_r5));
    });
    \u0275\u0275element(11, "img", 22);
    \u0275\u0275text(12, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 21);
    \u0275\u0275listener("click", function ImageUploadComponent_ng_template_12_Template_button_click_13_listener() {
      const rowData_r7 = \u0275\u0275restoreView(_r3).$implicit;
      const op_r4 = \u0275\u0275reference(8);
      const ctx_r5 = \u0275\u0275nextContext();
      op_r4.hide();
      return \u0275\u0275resetView(ctx_r5.download(rowData_r7));
    });
    \u0275\u0275element(14, "img", 23);
    \u0275\u0275text(15, "Download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("formGroup", item_r8);
    \u0275\u0275advance(7);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(3, _c03));
  }
}
var _ImageUploadComponent = class _ImageUploadComponent {
  constructor(dialogRef, data, cs, spin, route, sanitizer, router, fb, service, messageService, cas, auth, download1) {
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
    this.download1 = download1;
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
    this.uploadFile(event);
  }
  uploadFile(event) {
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
        this.selectedFiles = null;
        this.clearFileInput(event.target);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  clearFileInput(input) {
    input.value = "";
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
    this.download1.downloadDocument(element);
  }
};
_ImageUploadComponent.\u0275fac = function ImageUploadComponent_Factory(t) {
  return new (t || _ImageUploadComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ConsignmentLabelComponent));
};
_ImageUploadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageUploadComponent, selectors: [["app-image-upload"]], decls: 18, vars: 2, consts: [["fileInput", ""], ["op", ""], [1, "bgWhite", "text-black", "w-93", "h-100", "mx-4", "my-2", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "mt-4", "pt-2"], ["scrollHeight", "calc(100vh - 24.8rem)", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "my-3", "justify-content-end"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [3, "formGroup"], ["type", "text", "matInput", "", "formControlName", "imageRefId", 1, "inputborderLess", "pl-3"], ["type", "text", "formControlName", "referenceImageUrl", 1, "inputborderLess", "pl-3"], [2, "padding-left", "1.5rem !important"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/delete1x.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/download.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"]], template: function ImageUploadComponent_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageUploadComponent, { className: "ImageUploadComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment-new\\image-upload\\image-upload.component.ts", lineNumber: 21 });
})();

// src/app/main/operation/consignment/consignment-new/item-details/item-details.component.ts
var _c04 = () => ({ "width": "100%" });
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
function ItemDetailsComponent_ng_template_11_p_dropdown_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 30, 1);
    \u0275\u0275listener("dblclick", function ItemDetailsComponent_ng_template_11_p_dropdown_2_Template_p_dropdown_dblclick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleInput());
    })("onChange", function ItemDetailsComponent_ng_template_11_p_dropdown_2_Template_p_dropdown_onChange_0_listener() {
      \u0275\u0275restoreView(_r2);
      const hscode_r4 = \u0275\u0275reference(1);
      const rowData_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hsCodeChange(hscode_r4, rowData_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(4, _c04));
    \u0275\u0275property("options", ctx_r2.hsCodeList)("panelStyle", \u0275\u0275pureFunction0(5, _c04));
  }
}
function ItemDetailsComponent_ng_template_11_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 31);
    \u0275\u0275listener("dblclick", function ItemDetailsComponent_ng_template_11_input_3_Template_input_dblclick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleInput());
    });
    \u0275\u0275elementEnd();
  }
}
function ItemDetailsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 15)(1, "td");
    \u0275\u0275template(2, ItemDetailsComponent_ng_template_11_p_dropdown_2_Template, 2, 6, "p-dropdown", 16)(3, ItemDetailsComponent_ng_template_11_input_3_Template, 1, 0, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "input", 19);
    \u0275\u0275listener("change", function ItemDetailsComponent_ng_template_11_Template_input_change_7_listener() {
      const rowData_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.calculateTotalValue(rowData_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 20);
    \u0275\u0275listener("change", function ItemDetailsComponent_ng_template_11_Template_input_change_9_listener() {
      const rowData_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.calculateTotalValue(rowData_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "p-dropdown", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 23)(15, "img", 24);
    \u0275\u0275listener("click", function ItemDetailsComponent_ng_template_11_Template_img_click_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const op_r7 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(op_r7.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p-overlayPanel", null, 0)(18, "div", 25)(19, "button", 26);
    \u0275\u0275listener("click", function ItemDetailsComponent_ng_template_11_Template_button_click_19_listener() {
      const i_r8 = \u0275\u0275restoreView(_r1).rowIndex;
      const op_r7 = \u0275\u0275reference(17);
      const ctx_r2 = \u0275\u0275nextContext();
      op_r7.hide();
      return \u0275\u0275resetView(ctx_r2.dimension(ctx_r2.data.pageflow, "item", i_r8));
    });
    \u0275\u0275element(20, "img", 27);
    \u0275\u0275text(21, "Dimension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 26);
    \u0275\u0275listener("click", function ItemDetailsComponent_ng_template_11_Template_button_click_22_listener() {
      const ctx_r8 = \u0275\u0275restoreView(_r1);
      const i_r8 = ctx_r8.rowIndex;
      const rowData_r5 = ctx_r8.$implicit;
      const op_r7 = \u0275\u0275reference(17);
      const ctx_r2 = \u0275\u0275nextContext();
      op_r7.hide();
      return \u0275\u0275resetView(ctx_r2.removeItem(i_r8, rowData_r5));
    });
    \u0275\u0275element(23, "img", 28);
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 26);
    \u0275\u0275listener("click", function ItemDetailsComponent_ng_template_11_Template_button_click_25_listener() {
      const i_r8 = \u0275\u0275restoreView(_r1).rowIndex;
      const op_r7 = \u0275\u0275reference(17);
      const ctx_r2 = \u0275\u0275nextContext();
      op_r7.hide();
      return \u0275\u0275resetView(ctx_r2.imageupload(ctx_r2.data.pageflow, i_r8));
    });
    \u0275\u0275element(26, "img", 29);
    \u0275\u0275text(27, "Image");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", item_r10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.showInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showInput);
    \u0275\u0275advance(10);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c04));
    \u0275\u0275property("options", ctx_r2.currencyDropdown)("panelStyle", \u0275\u0275pureFunction0(10, _c04));
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(11, _c12));
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
    this.showInput = true;
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
    const control = this.itemForm.controls.itemDetails;
    const pieceValue = control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.declaredValue), 0);
    const length = control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.length), 0);
    const width = control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.width), 0);
    const height = control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.height), 0);
    const weight = control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.weight), 0);
    const volume = control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.volume), 0);
    let obj = {};
    obj.lines = this.itemForm.controls.itemDetails.value;
    obj.pieceValue = pieceValue;
    obj.length = length;
    obj.width = width;
    obj.height = height;
    obj.weight = weight;
    obj.volume = volume;
    obj.tags = control.length;
    obj.volumeUnit = control.value[0].volumeUnit;
    obj.dimensionUnit = control.value[0].dimensionUnit;
    obj.weightUnit = control.value[0].weightUnit;
    obj.currency = control.value[0].currency;
    this.dialogRef.close(obj);
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
  toggleInput() {
    this.showInput = !this.showInput;
    console.log(this.showInput);
  }
};
_ItemDetailsComponent.\u0275fac = function ItemDetailsComponent_Factory(t) {
  return new (t || _ItemDetailsComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_ItemDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemDetailsComponent, selectors: [["app-item-details"]], decls: 17, vars: 3, consts: [["op", ""], ["hscode", ""], [1, "bgWhite", "text-black", "w-93", "h-100", "mx-4", "my-2", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click"], [1, "bi", "bi-plus-square", "pr-2"], [1, "mt-4", "pt-2"], [1, "mt-1", "mx-3", 3, "formGroup"], ["scrollHeight", "calc(100vh - 24.8rem)", 1, "paddingZero", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "my-3", "justify-content-end"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], [3, "formGroup"], ["placeholder", "Select", "filter", "true", "formControlName", "hsCode", "appendTo", "body", 3, "options", "style", "panelStyle", "dblclick", "onChange", 4, "ngIf"], ["class", "inputborderLess pl-3", "placeholder", "Enter", "formControlName", "hsCode", 3, "dblclick", 4, "ngIf"], ["placeholder", "Enter", "formControlName", "description", 1, "inputborderLess", "pl-3"], ["placeholder", "Enter", "formControlName", "quantity", 1, "inputborderLess", "pl-3", 3, "change"], ["placeholder", "Enter", "formControlName", "unitValue", 1, "inputborderLess", "pl-3", 3, "change"], ["placeholder", "Enter", "formControlName", "declaredValue", 1, "inputborderLess", "pl-3"], ["placeholder", "Select", "filter", "true", "formControlName", "currency", "appendTo", "body", 3, "options", "panelStyle"], [2, "padding-left", "1.5rem !important"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/dimension.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/delete1x.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/image.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["placeholder", "Select", "filter", "true", "formControlName", "hsCode", "appendTo", "body", 3, "dblclick", "onChange", "options", "panelStyle"], ["placeholder", "Enter", "formControlName", "hsCode", 1, "inputborderLess", "pl-3", 3, "dblclick"]], template: function ItemDetailsComponent_Template(rf, ctx) {
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
    \u0275\u0275template(10, ItemDetailsComponent_ng_template_10_Template, 15, 0, "ng-template", 10)(11, ItemDetailsComponent_ng_template_11_Template, 28, 12, "ng-template", 11);
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
}, dependencies: [NgIf, PrimeTemplate, Table, Dropdown, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, OverlayPanel, MatMenuItem, MatDialogClose, FormGroupDirective, FormControlName], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 35rem);\n  overflow-y: scroll;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.inputborderLess[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=item-details.component.css.map */"] });
var ItemDetailsComponent = _ItemDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemDetailsComponent, { className: "ItemDetailsComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment-new\\item-details\\item-details.component.ts", lineNumber: 19 });
})();

// src/app/main/operation/consignment/consignment-new/consignment-status-popup/consignment-status-popup.component.ts
function ConsignmentStatusPopupComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.pieceId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.bagId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.pieceStatusType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.pieceStatusId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.pieceStatusText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.pieceEventCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.pieceEventText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 8, item_r1.pieceEventTimestamp, "dd-MM-yyyy HH:mm"));
  }
}
var _ConsignmentStatusPopupComponent = class _ConsignmentStatusPopupComponent {
  constructor(dialogRef, data, cs, spin, service, auth) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.cs = cs;
    this.spin = spin;
    this.service = service;
    this.auth = auth;
    this.cnTable = [];
  }
  ngOnInit() {
    this.callCNTable();
  }
  callCNTable() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.languageId = [this.auth.languageId];
    obj.pieceId = [this.data.code.pieceId];
    this.service.searchStatus(obj).subscribe({ next: (res) => {
      this.cnTable = res;
      console.log(this.cnTable);
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
};
_ConsignmentStatusPopupComponent.\u0275fac = function ConsignmentStatusPopupComponent_Factory(t) {
  return new (t || _ConsignmentStatusPopupComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(AuthService));
};
_ConsignmentStatusPopupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignmentStatusPopupComponent, selectors: [["app-consignment-status-popup"]], decls: 29, vars: 1, consts: [[1, "bgWhite", "text-black", "w-93", "h-100", "m-4", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], [1, "d-flex", "scrollNew", "table-responsive", "mt-4"], [1, "table", 2, "width", "150rem"], [1, "sticky-top", "table-style"], ["scope", "col"], [1, "table-style-body"], [4, "ngFor", "ngForOf"], [1, "d-flex", "float-right", "py-2", 2, "position", "absolute", "right", "3.5%", "bottom", "5%"], ["mat-dialog-close", "", 1, "buttom1", "textBlack", "mx-1"]], template: function ConsignmentStatusPopupComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Piece Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "table", 4)(6, "thead", 5)(7, "tr")(8, "th", 6);
    \u0275\u0275text(9, "Piece ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 6);
    \u0275\u0275text(11, "Bag ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 6);
    \u0275\u0275text(13, "Piece Status Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 6);
    \u0275\u0275text(15, "Piece Status ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 6);
    \u0275\u0275text(17, "Piece Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 6);
    \u0275\u0275text(19, "Piece Event Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 6);
    \u0275\u0275text(21, "Piece Event Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 6);
    \u0275\u0275text(23, "Piece Event Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody", 7);
    \u0275\u0275template(25, ConsignmentStatusPopupComponent_tr_25_Template, 18, 11, "tr", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 9)(27, "button", 10);
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx.cnTable);
  }
}, dependencies: [NgForOf, MatDialogClose, DatePipe], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 1rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.scrollNew[_ngcontent-%COMP%] {\n  height: calc(100vh - 33rem);\n  overflow-y: scroll;\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.sticky-top[_ngcontent-%COMP%] {\n  position: sticky;\n  top: -1px;\n  z-index: 1020;\n}\n/*# sourceMappingURL=consignment-status-popup.component.css.map */"] });
var ConsignmentStatusPopupComponent = _ConsignmentStatusPopupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignmentStatusPopupComponent, { className: "ConsignmentStatusPopupComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment-new\\consignment-status-popup\\consignment-status-popup.component.ts", lineNumber: 13 });
})();

// src/app/main/operation/consignment/consignment-new/consignment-new.component.ts
var _c05 = () => ({ "width": "100%" });
var _c13 = () => ({ width: "180" });
var _c22 = () => ({ "width": "84rem" });
var _c32 = () => ({ "width": "130rem" });
function ConsignmentNewComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_div_104_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "p", 18);
    \u0275\u0275text(2, "COD Collection Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-dropdown", 177);
    \u0275\u0275template(4, ConsignmentNewComponent_div_104_mat_error_4_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c05));
    \u0275\u0275property("options", ctx_r1.codCollectionMode)("ngClass", ((tmp_4_0 = ctx_r1.shipmentInfo.get("codCollectionMode")) == null ? null : tmp_4_0.invalid) && ctx_r1.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(7, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorHandlingShipment("codCollectionMode"));
  }
}
function ConsignmentNewComponent_div_105_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "p", 18);
    \u0275\u0275text(2, "COD Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 179);
    \u0275\u0275template(4, ConsignmentNewComponent_div_105_mat_error_4_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ((tmp_2_0 = ctx_r1.shipmentInfo.get("codAmount")) == null ? null : tmp_2_0.invalid) && ctx_r1.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorHandlingShipment("codAmount"));
  }
}
function ConsignmentNewComponent_div_106_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 180)(1, "p", 18);
    \u0275\u0275text(2, "COD Favor Of");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 181);
    \u0275\u0275template(4, ConsignmentNewComponent_div_106_mat_error_4_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ((tmp_2_0 = ctx_r1.shipmentInfo.get("codFavorOf")) == null ? null : tmp_2_0.invalid) && ctx_r1.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorHandlingShipment("codFavorOf"));
  }
}
function ConsignmentNewComponent_ng_template_115_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "th", 182);
    \u0275\u0275text(12, " Actions");
    \u0275\u0275elementEnd()();
  }
}
function ConsignmentNewComponent_ng_template_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 15)(1, "td");
    \u0275\u0275element(2, "input", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "input", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "input", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "input", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "p-dropdown", 187);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 188)(12, "img", 189);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_116_Template_img_click_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const op_r5 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(op_r5.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-overlayPanel", null, 1)(15, "div", 190)(16, "button", 191);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_116_Template_button_click_16_listener() {
      const i_r6 = \u0275\u0275restoreView(_r4).rowIndex;
      const op_r5 = \u0275\u0275reference(14);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.dimension(ctx_r1.pageToken.pageflow, "piece", i_r6);
      return \u0275\u0275resetView(op_r5.hide());
    });
    \u0275\u0275element(17, "img", 192);
    \u0275\u0275text(18, "Dimension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 191);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_116_Template_button_click_19_listener() {
      const i_r6 = \u0275\u0275restoreView(_r4).rowIndex;
      const op_r5 = \u0275\u0275reference(14);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.opendialog(ctx_r1.pageToken.pageflow, i_r6);
      return \u0275\u0275resetView(op_r5.hide());
    });
    \u0275\u0275element(20, "img", 193);
    \u0275\u0275text(21, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 191);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_116_Template_button_click_22_listener() {
      const ctx_r6 = \u0275\u0275restoreView(_r4);
      const i_r6 = ctx_r6.rowIndex;
      const rowData_r8 = ctx_r6.$implicit;
      const op_r5 = \u0275\u0275reference(14);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.removePieceDetail(i_r6, rowData_r8);
      return \u0275\u0275resetView(op_r5.hide());
    });
    \u0275\u0275element(23, "img", 194);
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 191);
    \u0275\u0275listener("click", function ConsignmentNewComponent_ng_template_116_Template_button_click_25_listener() {
      const i_r6 = \u0275\u0275restoreView(_r4).rowIndex;
      const op_r5 = \u0275\u0275reference(14);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.imageupload(ctx_r1.pageToken.pageflow, i_r6);
      return \u0275\u0275resetView(op_r5.hide());
    });
    \u0275\u0275element(26, "img", 195);
    \u0275\u0275text(27, "Image");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", item_r9);
    \u0275\u0275advance(10);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(7, _c05));
    \u0275\u0275property("options", ctx_r1.currencyDropdown)("panelStyle", \u0275\u0275pureFunction0(8, _c05));
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c13));
  }
}
function ConsignmentNewComponent_mat_error_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_204_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_209_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_219_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_224_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_229_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_242_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_247_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_252_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_257_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_262_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_267_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_272_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_277_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_282_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_287_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_292_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_297_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_302_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_307_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_312_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_317_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_330_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_335_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_340_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_345_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_350_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_355_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_360_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_365_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_370_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_375_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_380_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_385_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_390_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_395_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_400_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_405_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_p_tabPanel_411_ng_template_3_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r11.header, " ");
  }
}
function ConsignmentNewComponent_p_tabPanel_411_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 199);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 200);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsignmentNewComponent_p_tabPanel_411_ng_template_3_th_3_Template, 2, 1, "th", 201);
    \u0275\u0275elementStart(4, "th", 202);
    \u0275\u0275text(5, " Piece Details ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const columns_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r12);
  }
}
function ConsignmentNewComponent_p_tabPanel_411_ng_template_4_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r14 = \u0275\u0275nextContext().$implicit;
    const rowData_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r15[col_r14.field], " ");
  }
}
function ConsignmentNewComponent_p_tabPanel_411_ng_template_4_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r15.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsignmentNewComponent_p_tabPanel_411_ng_template_4_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsignmentNewComponent_p_tabPanel_411_ng_template_4_td_3_ng_container_1_Template, 2, 1, "ng-container", 207)(2, ConsignmentNewComponent_p_tabPanel_411_ng_template_4_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r14 = ctx.$implicit;
    const dateTemplate_r16 = \u0275\u0275reference(3);
    \u0275\u0275styleMap(col_r14.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r14.format !== "date")("ngIfElse", dateTemplate_r16);
  }
}
function ConsignmentNewComponent_p_tabPanel_411_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 203);
    \u0275\u0275element(2, "p-tableCheckbox", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsignmentNewComponent_p_tabPanel_411_ng_template_4_td_3_Template, 4, 4, "td", 205);
    \u0275\u0275elementStart(4, "td", 203)(5, "img", 206);
    \u0275\u0275listener("click", function ConsignmentNewComponent_p_tabPanel_411_ng_template_4_Template_img_click_5_listener() {
      const rowData_r15 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cnTablePopup("Popup", rowData_r15));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rowData_r15 = ctx.$implicit;
    const columns_r17 = ctx.columns;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true)("value", rowData_r15);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r17);
  }
}
function ConsignmentNewComponent_p_tabPanel_411_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 208);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function ConsignmentNewComponent_p_tabPanel_411_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tabPanel", 196)(1, "p-table", 197, 2);
    \u0275\u0275twoWayListener("selectionChange", function ConsignmentNewComponent_p_tabPanel_411_Template_p_table_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCNTable, $event) || (ctx_r1.selectedCNTable = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, ConsignmentNewComponent_p_tabPanel_411_ng_template_3_Template, 6, 2, "ng-template", 65)(4, ConsignmentNewComponent_p_tabPanel_411_ng_template_4_Template, 6, 3, "ng-template", 66)(5, ConsignmentNewComponent_p_tabPanel_411_ng_template_5_Template, 4, 1, "ng-template", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 59)(7, "button", 67);
    \u0275\u0275listener("click", function ConsignmentNewComponent_p_tabPanel_411_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeIndex = ctx_r1.activeIndex - 1);
    });
    \u0275\u0275text(8, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 61);
    \u0275\u0275listener("click", function ConsignmentNewComponent_p_tabPanel_411_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeIndex = ctx_r1.activeIndex + 1);
    });
    \u0275\u0275text(10, "Next");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.cnCols)("value", ctx_r1.cnTable)("scrollable", true);
    \u0275\u0275twoWayProperty("selection", ctx_r1.selectedCNTable);
    \u0275\u0275property("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(6, _c22));
  }
}
function ConsignmentNewComponent_mat_error_427_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_432_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_437_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_mat_error_442_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 175)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage());
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_3_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r19.header, " ");
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 199);
    \u0275\u0275element(2, "p-tableHeaderCheckbox", 200);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsignmentNewComponent_p_tabPanel_448_ng_template_3_th_3_Template, 2, 1, "th", 201);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r20);
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_4_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r21 = \u0275\u0275nextContext().$implicit;
    const rowData_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rowData_r22[col_r21.field], " ");
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_4_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const rowData_r22 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, rowData_r22.createdOn, "dd-MM-yyyy HH:mm"), " ");
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_4_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, ConsignmentNewComponent_p_tabPanel_448_ng_template_4_td_3_ng_container_1_Template, 2, 1, "ng-container", 207)(2, ConsignmentNewComponent_p_tabPanel_448_ng_template_4_td_3_ng_template_2_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r21 = ctx.$implicit;
    const dateTemplate_r23 = \u0275\u0275reference(3);
    \u0275\u0275styleMap(col_r21.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r21.format !== "date")("ngIfElse", dateTemplate_r23);
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 203);
    \u0275\u0275element(2, "p-tableCheckbox", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConsignmentNewComponent_p_tabPanel_448_ng_template_4_td_3_Template, 4, 4, "td", 205);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r22 = ctx.$implicit;
    const columns_r24 = ctx.columns;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true)("value", rowData_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", columns_r24);
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_5_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.calculateFooterTotal(col_r25.field), " ");
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_5_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "td");
    \u0275\u0275elementContainerEnd();
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ConsignmentNewComponent_p_tabPanel_448_ng_template_5_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 211)(2, ConsignmentNewComponent_p_tabPanel_448_ng_template_5_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 211);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r25.showFooter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !col_r25.showFooter);
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "td");
    \u0275\u0275template(2, ConsignmentNewComponent_p_tabPanel_448_ng_template_5_ng_container_2_Template, 3, 2, "ng-container", 201);
    \u0275\u0275element(3, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r26 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", columns_r26);
  }
}
function ConsignmentNewComponent_p_tabPanel_448_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p", 208);
    \u0275\u0275text(3, "No records found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function ConsignmentNewComponent_p_tabPanel_448_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tabPanel", 209)(1, "p-table", 197, 4);
    \u0275\u0275twoWayListener("selectionChange", function ConsignmentNewComponent_p_tabPanel_448_Template_p_table_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedConsignment, $event) || (ctx_r1.selectedConsignment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, ConsignmentNewComponent_p_tabPanel_448_ng_template_3_Template, 4, 2, "ng-template", 65)(4, ConsignmentNewComponent_p_tabPanel_448_ng_template_4_Template, 4, 3, "ng-template", 66)(5, ConsignmentNewComponent_p_tabPanel_448_ng_template_5_Template, 4, 1, "ng-template", 210)(6, ConsignmentNewComponent_p_tabPanel_448_ng_template_6_Template, 4, 1, "ng-template", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 59)(8, "button", 67);
    \u0275\u0275listener("click", function ConsignmentNewComponent_p_tabPanel_448_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeIndex = ctx_r1.activeIndex - 1);
    });
    \u0275\u0275text(9, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 61);
    \u0275\u0275listener("click", function ConsignmentNewComponent_p_tabPanel_448_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBilling());
    });
    \u0275\u0275text(11, "Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.cols)("value", ctx_r1.billingTable)("scrollable", true);
    \u0275\u0275twoWayProperty("selection", ctx_r1.selectedConsignment);
    \u0275\u0275property("sortOrder", -1)("tableStyle", \u0275\u0275pureFunction0(6, _c32));
  }
}
var _ConsignmentNewComponent = class _ConsignmentNewComponent {
  constructor(cs, spin, route, router, path, fb, service, messageService, cas, auth, el, dialog, productService, customerService, consignorService, download) {
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
    this.download = download;
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
      loadType: [,],
      loadTypeId: [, Validators.required],
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
      // codAmount: [],
      // codFavorOf: [],
      // codCollectionMode: [],
      declaredValueWithoutTax: [],
      // invoiceAmount: [],
      // invoiceUrl: [],
      productCode: [],
      //  amount: [],
      //isCustomsDeclarable: [],
      iata: [],
      dduCharge: [],
      customsValue: [],
      specialApprovalCharge: [],
      exchangeRate: [],
      consignmentValueLocal: [],
      duty: ["5%"],
      addInsurance: [],
      customsInsurance: [],
      addIata: [],
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
      invoiceDate: [,],
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
    this.billingTable = [];
    this.selectedConsignment = [];
    this.cols = [];
    this.cnTable = [];
    this.selectedCNTable = [];
    this.cnCols = [];
    this.mainForm = new FormGroup({});
    this.showPaymentTypeFields = false;
    this.subProductValueList = [];
    this.selectedFiles = null;
    this.imageDetailsTable = [];
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
    this.callCNTable();
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
    this.callCNTableHeader();
    this.callItemLevel(line);
    this.callTableHeader();
  }
  // CN Tracking Code
  callCNTableHeader() {
    this.cnCols = [
      { fiedl: "type", header: "Type" },
      { field: "bagId", header: "Bag ID" },
      { field: "description", header: "Description" },
      { field: "time", header: "Time" },
      { field: "createdBy", header: "User" }
      // { field: 'pieceDetails', header: 'Piece Details' },
      // { field: 'companyName', header: 'Company' },
      // { field: 'statusId', header: 'Status ID' },
      // { field: 'statusText', header: 'Status' },
      // { field: 'statusTimestamp', header: 'Status Time', format: 'date' },
      // { field: 'pieceId', header: 'Piece ID' },
      // { field: 'pieceStatusId', header: 'Piece Status ID' },
      // { field: 'pieceStatusText', header: 'Piece Status'},
      // { field: 'pieceEventCode', header: 'Piece Event Code'},
      // { field: 'pieceEventText', header: 'Piece Event'},
      // { field: 'pieceEventTimestamp', header: 'Piece Event Time', format: 'date' },
      // { field: 'eventCode', header: 'Event Code' },
      // { field: 'eventText', header: 'Event Text' },
      // { field: 'eventTimestamp', header: 'Event Time', format: 'date' }, 
      // { field: 'masterAirwayBill', header: 'Mawb' },
      // { field: 'houseAirwayBill', header: 'Hawb' },
      // { field: 'languageDescription', header: 'Language' },
    ];
  }
  onRowExpand(event) {
  }
  onRowCollapse(event) {
  }
  getColspan() {
    return this.cols.length + 2;
  }
  callCNTable() {
    let obj = {};
    obj.companyId = [this.auth.companyId];
    obj.languageId = [this.auth.languageId];
    this.service.searchStatus(obj).subscribe({ next: (res) => {
      console.log(res);
      res = this.cs.removeDuplicatesFromArrayList(res, "houseAirwayBill");
      this.cnTable = res;
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
  cnTablePopup(data, line) {
    const dialogRef = this.dialog.open(ConsignmentStatusPopupComponent, {
      disableClose: true,
      width: "100%",
      height: "50%",
      maxWidth: "95%",
      position: { top: "6.5%", left: "10%" },
      data: { pageflow: data, code: line }
    });
  }
  callTableHeader() {
    this.cols = [
      { field: "pieceId", header: "Piece ID", showFooter: false },
      { field: "consignmentValue", header: "Consignment Value", showFooter: true },
      { field: "currency", header: "Consignment Currency", showFooter: false },
      { field: "exchangeRate", header: "Exchange Rate", showFooter: false },
      { field: "iata", header: "IATA", showFooter: false },
      { field: "customsInsurance", header: "Customs Insurance", showFooter: true },
      { field: "duty", header: "Duty", showFooter: true },
      { field: "consignmentValueLocal", header: "Consignment Value Local", showFooter: true },
      { field: "addIata", header: "Add IATA", showFooter: true },
      { field: "addInsurance", header: "Add Insurance", showFooter: true },
      { field: "customsValue", header: "Custom", showFooter: true },
      { field: "calculatedTotalDuty", header: "Calculated Total duty", showFooter: true },
      { field: "dduCharge", header: "DDU Charge", showFooter: true },
      { field: "specialApprovalCharge", header: "Spl Approval Charge", showFooter: false },
      { field: "totalDuty", header: "Duty From Bayan", showFooter: false }
    ];
  }
  callItemLevel(line) {
    this.service.searchItem({ houseAirwayBill: [line.houseAirwayBill] }).subscribe({ next: (res) => {
      this.billingTable = res;
    }, error: (err) => {
      this.spin.hide();
      this.cs.commonerrorNew(err);
    } });
  }
  calculateFooterTotal(field) {
    let total = 0;
    this.billingTable.forEach((item) => {
      total += Number.parseFloat(item[field]) || 0;
    });
    return parseFloat(total.toFixed(2));
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
        const itemDetailsFormArray = this.piece.controls.pieceDetails.at(index).get("itemDetails");
        itemDetailsFormArray.clear();
        const getPieceForm = this.piece.controls.pieceDetails.at(index);
        getPieceForm.patchValue({
          pieceValue: result.pieceValue,
          length: result.length,
          width: result.width,
          height: result.height,
          weight: result.weight,
          tags: result.tags,
          volume: result.volume,
          weightUnit: result.weightUnit,
          volumeUnit: result.volumeUnit,
          dimensionUnit: result.dimensionUnit,
          pieceCurrency: result.currency
        });
        result.lines.forEach((item) => {
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
      this.disabledPiece = false;
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
      this.activeIndex = 3;
      this.submitted = false;
      this.disabledSender = false;
    }
  }
  savePiece() {
    const control = this.piece.controls.pieceDetails;
    if (control.value.length > 0) {
      this.consignment.controls.length.patchValue(control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.length), 0));
      this.consignment.controls.width.patchValue(control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.width), 0));
      this.consignment.controls.height.patchValue(control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.height), 0));
      this.consignment.controls.volume.patchValue(control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.volume), 0));
      this.consignment.controls.weight.patchValue(control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.weight), 0));
      this.consignment.controls.consignmentValue.patchValue(control.value.reduce((acc, item) => parseInt(acc) + parseInt(item.pieceValue), 0));
      this.consignment.controls.volumeUnit.patchValue(control.value[0].volumeUnit);
      this.consignment.controls.dimensionUnit.patchValue(control.value[0].dimensionUnit);
      this.consignment.controls.weightUnit.patchValue(control.value[0].weightUnit);
      this.consignment.controls.consignmentCurrency.patchValue(control.value[0].pieceCurrency);
    }
    this.activeIndex = 2;
    this.submitted = false;
    this.disabledConsignment = false;
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
            detail: res[0].houseAirwayBill + " has been updated successfully"
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
            summary: "Created",
            key: "br",
            detail: res[0].houseAirwayBill + " has been created successfully"
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
  selectFiles(event) {
    this.selectedFiles = event.target.files;
    this.uploadFile(event);
  }
  uploadFile(event) {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.log("No files selected for upload.");
      return;
    }
    this.fileLocation = "/Invoice/";
    this.service.uploadFiles(this.selectedFiles, this.fileLocation).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: "success",
          summary: "Updated",
          key: "br",
          detail: "File uploaded successfully"
        });
        this.shipmentInfo.controls.invoiceUrl.patchValue(result[0].fileName);
        this.selectedFiles = null;
        this.clearFileInput(event.target);
      },
      error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });
  }
  clearFileInput(input) {
    input.value = "";
  }
  downloadInvoice(value) {
    let obj = {};
    obj.value = { imageRefId: value, referenceImageUrl: "/Invoice/" };
    this.download.downloadDocument(obj);
  }
};
_ConsignmentNewComponent.\u0275fac = function ConsignmentNewComponent_Factory(t) {
  return new (t || _ConsignmentNewComponent)(\u0275\u0275directiveInject(CommonServiceService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PathNameService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConsignmentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonAPIService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ConsignorService), \u0275\u0275directiveInject(ConsignmentLabelComponent));
};
_ConsignmentNewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsignmentNewComponent, selectors: [["app-consignment-new"]], decls: 449, vars: 293, consts: [["fileInput", ""], ["op", ""], ["consignmentStatusTag", ""], ["dateTemplate", ""], ["consignmentTag", ""], [1, "componentBody"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "componentHeader", "f600", "mb-0"], ["type", "button", "routerLink", "/main/operation/consignment", "src", "./assets/common2x/close1.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem"], ["type", "button", "src", "./assets/common2x/tick.png", "alt", "", "srcset", "", 2, "margin", "0 17px", "height", "1.5rem", 3, "click"], ["type", "button", 1, "btn", "ml-2", "addNewbuttom", "bgBlack", "text-white", 3, "click", "disabled"], [1, "bi", "bi-plus-square", "pr-2"], [1, "mt-4", "mx-auto"], [3, "activeIndexChange", "activeIndex"], ["header", "Shipment Info"], [3, "formGroup"], [1, "row", "scrollNew22"], [1, "col-3", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0"], ["placeholder", "Select", "filter", "true", "formControlName", "companyId", "appendTo", "body", 3, "options", "panelStyle"], ["class", "text-danger", 4, "ngIf"], ["id", "productId", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "productId", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "serviceTypeId", 1, "col-3", "marginFieldNew", "borderRadius12"], [1, "formControlLabel", "f600", "textBlack", "mb-0", "required"], ["placeholder", "Select", "filter", "true", "formControlName", "serviceTypeId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "partnerType", 1, "col-3", "marginFieldNew", "borderRadius12"], ["formControlName", "partnerType", "appendTo", "body", "placeholder", "Select", 3, "onChange", "options", "ngClass", "panelStyle"], ["id", "partnerId", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "partnerId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "consignmentType", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "serviceTypeId", "appendTo", "body", 3, "options", "panelStyle"], ["id", "loadTypeId", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "loadTypeId", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "customerReferenceNumber", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "customerReferenceNumber", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "noOfPieceHawb", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "noOfPieceHawb", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "countryOfOrigin", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "countryOfOrigin", "appendTo", "body", 3, "options", "panelStyle"], ["id", "countryOfDestination", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "countryOfDestination", "appendTo", "body", 3, "options", "panelStyle"], ["id", "invoiceNumber", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "invoiceNumber", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], ["type", "button", "pButton", "", 1, "bgBlack", "border-0", 3, "click"], [1, "bi", "bi-upload"], ["type", "file", 2, "display", "none", 3, "change"], ["id", "invoiceAmount", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "invoiceAmount", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "invoiceUrl", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "invoiceUrl", "pInputText", "", "placeholder", "Enter", 3, "ngClass"], [1, "bi", "bi-download"], ["id", "incoTerms", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "incoTerms", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "paymentType", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "paymentType", "appendTo", "body", 3, "onChange", "options", "ngClass", "panelStyle"], ["class", "col-3 marginFieldNew borderRadius12", "id", "codCollectionMode", 4, "ngIf"], ["class", "col-3 marginFieldNew borderRadius12", "id", "codAmount", 4, "ngIf"], ["class", "col-3 marginFieldNew borderRadius12", "id", "codFavorOf", 4, "ngIf"], [1, "d-flex", "mt-1", "justify-content-end", 2, "position", "absolute", "right", "3.5%", "bottom", "7%"], ["routerLink", "/main/operation/consignment", 1, "buttom1", "textBlack", "mx-1"], [1, "buttom1", "bgBlack", "text-white", "mx-1", 3, "click"], ["header", "Package Details", 3, "disabled"], [1, "mt-1", 3, "formGroup"], ["scrollHeight", "calc(100vh - 24.8rem)", 1, "paddingZero", 3, "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "buttom1", "textBlack", "mx-1", 3, "click"], ["header", "Consignment", 3, "disabled"], ["id", "partnerMasterAirwayBill", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "partnerMasterAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "partnerHouseAirwayBill", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "partnerHouseAirwayBill", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "airportOriginCode", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "airportOriginCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "flightNo", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "flightNo", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "flightArrivalTime", 1, "col-3", "marginFieldNew", "borderRadius12"], ["formControlName", "flightArrivalTime", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "ngClass", "iconDisplay", "showIcon"], ["id", "noOfPackages", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "noOfPackages", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "flightName", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "flightName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "length", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "length", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change", "ngClass"], ["id", "width", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "width", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change", "ngClass"], ["id", "height", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "height", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "change", "ngClass"], ["id", "dimensionUnit", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "dimensionUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "weight", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "pKeyFilter", "num", "formControlName", "weight", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "weightUnit", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "weightUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "volume", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "volume", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "volumeUnit", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "volumeUnit", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "netWeight", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "netWeight", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "grossWeight", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "grossWeight", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "invoiceDateFE", 1, "col-3", "marginFieldNew", "borderRadius12"], ["formControlName", "invoiceDateFE", "appendTo", "body", "placeholder", "Filter by Date", 1, "w-100", "small-calendar", 3, "ngClass", "iconDisplay", "showIcon"], ["id", "goodsDescription", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "500", "formControlName", "goodsDescription", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentValue", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "500", "formControlName", "consignmentValue", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "consignmentCurrency", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "consignmentCurrency", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["header", "Origin", 3, "disabled"], ["id", "name", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "name", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "companyName", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "companyName", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "addressLine1", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "addressLine1", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "addressLine2", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "addressLine2", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "country", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "country", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "state", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "state", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "district", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "district", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "city", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "city", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "pinCode", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "pinCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "latitude", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "latitude", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "longitude", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "longitude", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "phone", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "phone", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "alternatePhone", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "alternatePhone", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "email", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "email", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "addressHubCode", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "addressHubCode", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "accountId", "formGroupName", "originDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "accountId", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["header", "Destination", 3, "disabled"], ["id", "name", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "addressLine1", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "addressLine2", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "country", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "state", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "district", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "city", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "pinCode", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "latitude", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "longitude", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "phone", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "alternatePhone", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "email", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "companyName", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "addressHubCode", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["id", "accountId", "formGroupName", "destinationDetails", 1, "col-3", "marginFieldNew", "borderRadius12"], ["header", "CN Tracking", 4, "ngIf"], ["header", "Billing", 3, "disabled"], [1, "row"], [1, "col-3", "marginFieldNew", "borderRadius12", 3, "formGroup"], ["maxlength", "500", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "value", "disabled"], ["id", "customsInsurance", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "customsInsurance", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "duty", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "duty", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "dduCharge", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "dduCharge", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "specialApprovalCharge", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "specialApprovalCharge", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["header", "Duty Charges", 4, "ngIf"], [1, "text-danger"], ["id", "codCollectionMode", 1, "col-3", "marginFieldNew", "borderRadius12"], ["placeholder", "Select", "filter", "true", "formControlName", "codCollectionMode", "appendTo", "body", 3, "options", "ngClass", "panelStyle"], ["id", "codAmount", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "codAmount", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], ["id", "codFavorOf", 1, "col-3", "marginFieldNew", "borderRadius12"], ["maxlength", "50", "formControlName", "codFavorOf", "pInputText", "", "placeholder", "Enter", 1, "w-100", 3, "ngClass"], [2, "min-width", "9rem", "justify-content", "center"], ["placeholder", "Enter", "formControlName", "packReferenceNumber", 1, "inputborderLess", "pl-3"], ["placeholder", "Enter", "formControlName", "pieceProductCode", 1, "inputborderLess", "pl-3"], ["placeholder", "Enter", "formControlName", "tags", 1, "inputborderLess", "pl-3"], ["placeholder", "Enter", "formControlName", "pieceValue", 1, "inputborderLess", "pl-3"], ["placeholder", "Select", "filter", "true", "formControlName", "pieceCurrency", "appendTo", "body", 3, "options", "panelStyle"], [2, "padding-left", "1.5rem !important"], ["type", "button", "src", "./assets/common/actions.png", "alt", "", "srcset", "", 2, "height", "1.4rem", 3, "click"], [1, "d-flex", "flex-column"], ["mat-menu-item", "", 1, "w-100", 2, "width", "8rem", 3, "click"], ["src", "./assets/common/dimension.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/add.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/delete1x.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["src", "./assets/common/image.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem"], ["header", "CN Tracking"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 22.8rem)", "sortField", "consignmentId", "styleClass", "p-datatable-sm", 1, "custom-table", 3, "selectionChange", "columns", "value", "scrollable", "selection", "sortOrder", "tableStyle"], ["pTemplate", "emptymessage"], [2, "width", "5rem"], [1, "pl-3", 3, "disabled"], [4, "ngFor", "ngForOf"], [2, "width", "6rem"], [2, "width", "5rem", "justify-content", "center"], [1, "pl-3", 3, "disabled", "value"], [3, "style", 4, "ngFor", "ngForOf"], ["src", "./assets/common/document.png", "srcset", "", 2, "padding-right", "10px", "width", "2rem", "cursor", "pointer", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "my-2", "w-100", "pl-3"], ["header", "Duty Charges"], ["pTemplate", "footer"], [4, "ngIf"]], template: function ConsignmentNewComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "p", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275element(5, "img", 8);
    \u0275\u0275elementStart(6, "img", 9);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_img_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveFinal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addPieceDetail());
    });
    \u0275\u0275element(8, "i", 11);
    \u0275\u0275text(9, " Add Piece");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 12)(11, "p-tabView", 13);
    \u0275\u0275twoWayListener("activeIndexChange", function ConsignmentNewComponent_Template_p_tabView_activeIndexChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.activeIndex, $event) || (ctx.activeIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "p-tabPanel", 14)(13, "form", 15)(14, "div", 16)(15, "div", 17)(16, "p", 18);
    \u0275\u0275text(17, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "p-dropdown", 19);
    \u0275\u0275template(19, ConsignmentNewComponent_mat_error_19_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 21)(21, "p", 18);
    \u0275\u0275text(22, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p-dropdown", 22);
    \u0275\u0275listener("onChange", function ConsignmentNewComponent_Template_p_dropdown_onChange_23_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.productChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ConsignmentNewComponent_mat_error_24_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 23)(26, "p", 24);
    \u0275\u0275text(27, "Service Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "p-dropdown", 25);
    \u0275\u0275template(29, ConsignmentNewComponent_mat_error_29_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 26)(31, "p", 24);
    \u0275\u0275text(32, "Partner Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p-dropdown", 27);
    \u0275\u0275listener("onChange", function ConsignmentNewComponent_Template_p_dropdown_onChange_33_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.partnerTypeChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ConsignmentNewComponent_mat_error_34_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 28)(36, "p", 24);
    \u0275\u0275text(37, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "p-dropdown", 29);
    \u0275\u0275template(39, ConsignmentNewComponent_mat_error_39_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 30)(41, "p", 18);
    \u0275\u0275text(42, "Consignment Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "p-dropdown", 31);
    \u0275\u0275template(44, ConsignmentNewComponent_mat_error_44_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 32)(46, "p", 24);
    \u0275\u0275text(47, "Load Type ");
    \u0275\u0275element(48, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "p-dropdown", 33);
    \u0275\u0275template(50, ConsignmentNewComponent_mat_error_50_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 34)(52, "p", 18);
    \u0275\u0275text(53, "Customer Ref No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 35);
    \u0275\u0275template(55, ConsignmentNewComponent_mat_error_55_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 36)(57, "p", 18);
    \u0275\u0275text(58, "No of packages");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 37);
    \u0275\u0275template(60, ConsignmentNewComponent_mat_error_60_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 38)(62, "p", 18);
    \u0275\u0275text(63, "Country of Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "p-dropdown", 39);
    \u0275\u0275template(65, ConsignmentNewComponent_mat_error_65_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 40)(67, "p", 18);
    \u0275\u0275text(68, "Country of Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "p-dropdown", 41);
    \u0275\u0275template(70, ConsignmentNewComponent_mat_error_70_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 42)(72, "p", 18);
    \u0275\u0275text(73, "Invoice Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p-inputGroup");
    \u0275\u0275element(75, "input", 43);
    \u0275\u0275elementStart(76, "button", 44);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r3 = \u0275\u0275reference(80);
      return \u0275\u0275resetView(fileInput_r3.click());
    });
    \u0275\u0275element(77, "i", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(78, ConsignmentNewComponent_mat_error_78_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "input", 46, 0);
    \u0275\u0275listener("change", function ConsignmentNewComponent_Template_input_change_79_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectFiles($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 47)(82, "p", 18);
    \u0275\u0275text(83, "Invoice Amount ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "input", 48);
    \u0275\u0275template(85, ConsignmentNewComponent_mat_error_85_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 49)(87, "p", 18);
    \u0275\u0275text(88, "Invoice URL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "p-inputGroup");
    \u0275\u0275element(90, "input", 50);
    \u0275\u0275elementStart(91, "button", 44);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadInvoice(ctx.shipmentInfo.controls.invoiceUrl.value));
    });
    \u0275\u0275element(92, "i", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(93, ConsignmentNewComponent_mat_error_93_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 52)(95, "p", 18);
    \u0275\u0275text(96, "Inco Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "p-dropdown", 53);
    \u0275\u0275template(98, ConsignmentNewComponent_mat_error_98_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 54)(100, "p", 18);
    \u0275\u0275text(101, "Payment Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "p-dropdown", 55);
    \u0275\u0275listener("onChange", function ConsignmentNewComponent_Template_p_dropdown_onChange_102_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.paymentChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, ConsignmentNewComponent_mat_error_103_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(104, ConsignmentNewComponent_div_104_Template, 5, 8, "div", 56)(105, ConsignmentNewComponent_div_105_Template, 5, 2, "div", 57)(106, ConsignmentNewComponent_div_106_Template, 5, 2, "div", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 59)(108, "button", 60);
    \u0275\u0275text(109, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "button", 61);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_110_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveShipment());
    });
    \u0275\u0275text(111, "Next");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "p-tabPanel", 62)(113, "form", 63)(114, "p-table", 64);
    \u0275\u0275template(115, ConsignmentNewComponent_ng_template_115_Template, 13, 0, "ng-template", 65)(116, ConsignmentNewComponent_ng_template_116_Template, 28, 10, "ng-template", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "div", 59)(118, "button", 67);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_118_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.activeIndex = ctx.activeIndex - 1);
    });
    \u0275\u0275text(119, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "button", 61);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_120_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.savePiece());
    });
    \u0275\u0275text(121, "Next");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(122, "p-tabPanel", 68)(123, "form", 15)(124, "div", 16)(125, "div", 69)(126, "p", 18);
    \u0275\u0275text(127, "Partner MAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(128, "input", 70);
    \u0275\u0275template(129, ConsignmentNewComponent_mat_error_129_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 71)(131, "p", 18);
    \u0275\u0275text(132, "Partner HAWB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(133, "input", 72);
    \u0275\u0275template(134, ConsignmentNewComponent_mat_error_134_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "div", 73)(136, "p", 18);
    \u0275\u0275text(137, "Airport Origin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(138, "input", 74);
    \u0275\u0275template(139, ConsignmentNewComponent_mat_error_139_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "div", 75)(141, "p", 18);
    \u0275\u0275text(142, "Flight No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(143, "input", 76);
    \u0275\u0275template(144, ConsignmentNewComponent_mat_error_144_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "div", 77)(146, "p", 18);
    \u0275\u0275text(147, "Flight ETA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(148, "p-calendar", 78);
    \u0275\u0275template(149, ConsignmentNewComponent_mat_error_149_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "div", 79)(151, "p", 18);
    \u0275\u0275text(152, "No of Packages");
    \u0275\u0275elementEnd();
    \u0275\u0275element(153, "input", 80);
    \u0275\u0275template(154, ConsignmentNewComponent_mat_error_154_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "div", 81)(156, "p", 18);
    \u0275\u0275text(157, "Flight Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(158, "input", 82);
    \u0275\u0275template(159, ConsignmentNewComponent_mat_error_159_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "div", 83)(161, "p", 18);
    \u0275\u0275text(162, "Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "input", 84);
    \u0275\u0275listener("change", function ConsignmentNewComponent_Template_input_change_163_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.calculateVolume(ctx.consignment));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(164, ConsignmentNewComponent_mat_error_164_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "div", 85)(166, "p", 18);
    \u0275\u0275text(167, "Width");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "input", 86);
    \u0275\u0275listener("change", function ConsignmentNewComponent_Template_input_change_168_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.calculateVolume(ctx.consignment));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(169, ConsignmentNewComponent_mat_error_169_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "div", 87)(171, "p", 18);
    \u0275\u0275text(172, "Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "input", 88);
    \u0275\u0275listener("change", function ConsignmentNewComponent_Template_input_change_173_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.calculateVolume(ctx.consignment));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(174, ConsignmentNewComponent_mat_error_174_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "div", 89)(176, "p", 18);
    \u0275\u0275text(177, "Dimension Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(178, "input", 90);
    \u0275\u0275template(179, ConsignmentNewComponent_mat_error_179_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "div", 91)(181, "p", 18);
    \u0275\u0275text(182, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(183, "input", 92);
    \u0275\u0275template(184, ConsignmentNewComponent_mat_error_184_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "div", 93)(186, "p", 18);
    \u0275\u0275text(187, "Weight Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(188, "input", 94);
    \u0275\u0275template(189, ConsignmentNewComponent_mat_error_189_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "div", 95)(191, "p", 18);
    \u0275\u0275text(192, "Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275element(193, "input", 96);
    \u0275\u0275template(194, ConsignmentNewComponent_mat_error_194_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "div", 97)(196, "p", 18);
    \u0275\u0275text(197, "Volume Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(198, "input", 98);
    \u0275\u0275template(199, ConsignmentNewComponent_mat_error_199_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "div", 99)(201, "p", 18);
    \u0275\u0275text(202, "Net Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(203, "input", 100);
    \u0275\u0275template(204, ConsignmentNewComponent_mat_error_204_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "div", 101)(206, "p", 18);
    \u0275\u0275text(207, "Gross Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(208, "input", 102);
    \u0275\u0275template(209, ConsignmentNewComponent_mat_error_209_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "div", 103)(211, "p", 18);
    \u0275\u0275text(212, "Invoice Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(213, "p-calendar", 104);
    \u0275\u0275template(214, ConsignmentNewComponent_mat_error_214_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "div", 105)(216, "p", 18);
    \u0275\u0275text(217, "Goods Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(218, "input", 106);
    \u0275\u0275template(219, ConsignmentNewComponent_mat_error_219_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "div", 107)(221, "p", 18);
    \u0275\u0275text(222, "Consignment Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(223, "input", 108);
    \u0275\u0275template(224, ConsignmentNewComponent_mat_error_224_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "div", 109)(226, "p", 18);
    \u0275\u0275text(227, "Consignment Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(228, "p-dropdown", 110);
    \u0275\u0275template(229, ConsignmentNewComponent_mat_error_229_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(230, "div", 59)(231, "button", 67);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_231_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.activeIndex = ctx.activeIndex - 1);
    });
    \u0275\u0275text(232, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "button", 61);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_233_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveConsignment());
    });
    \u0275\u0275text(234, "Next");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(235, "p-tabPanel", 111)(236, "form", 15)(237, "div", 16)(238, "div", 112)(239, "p", 18);
    \u0275\u0275text(240, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(241, "input", 113);
    \u0275\u0275template(242, ConsignmentNewComponent_mat_error_242_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "div", 114)(244, "p", 18);
    \u0275\u0275text(245, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(246, "input", 115);
    \u0275\u0275template(247, ConsignmentNewComponent_mat_error_247_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(248, "div", 116)(249, "p", 18);
    \u0275\u0275text(250, "Address Line 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(251, "input", 117);
    \u0275\u0275template(252, ConsignmentNewComponent_mat_error_252_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(253, "div", 118)(254, "p", 18);
    \u0275\u0275text(255, "Address Line 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(256, "input", 119);
    \u0275\u0275template(257, ConsignmentNewComponent_mat_error_257_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(258, "div", 120)(259, "p", 18);
    \u0275\u0275text(260, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(261, "p-dropdown", 121);
    \u0275\u0275template(262, ConsignmentNewComponent_mat_error_262_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(263, "div", 122)(264, "p", 18);
    \u0275\u0275text(265, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(266, "p-dropdown", 123);
    \u0275\u0275template(267, ConsignmentNewComponent_mat_error_267_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(268, "div", 124)(269, "p", 18);
    \u0275\u0275text(270, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(271, "p-dropdown", 125);
    \u0275\u0275template(272, ConsignmentNewComponent_mat_error_272_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(273, "div", 126)(274, "p", 18);
    \u0275\u0275text(275, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(276, "p-dropdown", 127);
    \u0275\u0275template(277, ConsignmentNewComponent_mat_error_277_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(278, "div", 128)(279, "p", 18);
    \u0275\u0275text(280, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(281, "input", 129);
    \u0275\u0275template(282, ConsignmentNewComponent_mat_error_282_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(283, "div", 130)(284, "p", 18);
    \u0275\u0275text(285, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(286, "input", 131);
    \u0275\u0275template(287, ConsignmentNewComponent_mat_error_287_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(288, "div", 132)(289, "p", 18);
    \u0275\u0275text(290, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(291, "input", 133);
    \u0275\u0275template(292, ConsignmentNewComponent_mat_error_292_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(293, "div", 134)(294, "p", 18);
    \u0275\u0275text(295, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(296, "input", 135);
    \u0275\u0275template(297, ConsignmentNewComponent_mat_error_297_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "div", 136)(299, "p", 18);
    \u0275\u0275text(300, "Alternate Phone No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(301, "input", 137);
    \u0275\u0275template(302, ConsignmentNewComponent_mat_error_302_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(303, "div", 138)(304, "p", 18);
    \u0275\u0275text(305, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(306, "input", 139);
    \u0275\u0275template(307, ConsignmentNewComponent_mat_error_307_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(308, "div", 140)(309, "p", 18);
    \u0275\u0275text(310, "Address Hub Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(311, "input", 141);
    \u0275\u0275template(312, ConsignmentNewComponent_mat_error_312_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(313, "div", 142)(314, "p", 18);
    \u0275\u0275text(315, "Account ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(316, "input", 143);
    \u0275\u0275template(317, ConsignmentNewComponent_mat_error_317_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(318, "div", 59)(319, "button", 67);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_319_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.activeIndex = ctx.activeIndex - 1);
    });
    \u0275\u0275text(320, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(321, "button", 61);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_321_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveSender());
    });
    \u0275\u0275text(322, "Next");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(323, "p-tabPanel", 144)(324, "form", 15)(325, "div", 16)(326, "div", 145)(327, "p", 18);
    \u0275\u0275text(328, "Consignee Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(329, "input", 113);
    \u0275\u0275template(330, ConsignmentNewComponent_mat_error_330_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(331, "div", 146)(332, "p", 18);
    \u0275\u0275text(333, "Address Line 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(334, "input", 117);
    \u0275\u0275template(335, ConsignmentNewComponent_mat_error_335_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(336, "div", 147)(337, "p", 18);
    \u0275\u0275text(338, "Address Line 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(339, "input", 119);
    \u0275\u0275template(340, ConsignmentNewComponent_mat_error_340_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(341, "div", 148)(342, "p", 18);
    \u0275\u0275text(343, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(344, "p-dropdown", 121);
    \u0275\u0275template(345, ConsignmentNewComponent_mat_error_345_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(346, "div", 149)(347, "p", 18);
    \u0275\u0275text(348, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(349, "p-dropdown", 123);
    \u0275\u0275template(350, ConsignmentNewComponent_mat_error_350_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(351, "div", 150)(352, "p", 18);
    \u0275\u0275text(353, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275element(354, "p-dropdown", 125);
    \u0275\u0275template(355, ConsignmentNewComponent_mat_error_355_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(356, "div", 151)(357, "p", 18);
    \u0275\u0275text(358, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(359, "p-dropdown", 127);
    \u0275\u0275template(360, ConsignmentNewComponent_mat_error_360_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(361, "div", 152)(362, "p", 18);
    \u0275\u0275text(363, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(364, "input", 129);
    \u0275\u0275template(365, ConsignmentNewComponent_mat_error_365_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(366, "div", 153)(367, "p", 18);
    \u0275\u0275text(368, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(369, "input", 131);
    \u0275\u0275template(370, ConsignmentNewComponent_mat_error_370_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(371, "div", 154)(372, "p", 18);
    \u0275\u0275text(373, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(374, "input", 133);
    \u0275\u0275template(375, ConsignmentNewComponent_mat_error_375_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(376, "div", 155)(377, "p", 18);
    \u0275\u0275text(378, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(379, "input", 135);
    \u0275\u0275template(380, ConsignmentNewComponent_mat_error_380_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(381, "div", 156)(382, "p", 18);
    \u0275\u0275text(383, "Alternate Phone No");
    \u0275\u0275elementEnd();
    \u0275\u0275element(384, "input", 137);
    \u0275\u0275template(385, ConsignmentNewComponent_mat_error_385_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(386, "div", 157)(387, "p", 18);
    \u0275\u0275text(388, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(389, "input", 139);
    \u0275\u0275template(390, ConsignmentNewComponent_mat_error_390_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(391, "div", 158)(392, "p", 18);
    \u0275\u0275text(393, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(394, "input", 115);
    \u0275\u0275template(395, ConsignmentNewComponent_mat_error_395_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(396, "div", 159)(397, "p", 18);
    \u0275\u0275text(398, "Address Hub Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(399, "input", 141);
    \u0275\u0275template(400, ConsignmentNewComponent_mat_error_400_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(401, "div", 160)(402, "p", 18);
    \u0275\u0275text(403, "Account ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(404, "input", 143);
    \u0275\u0275template(405, ConsignmentNewComponent_mat_error_405_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(406, "div", 59)(407, "button", 67);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_407_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.activeIndex = ctx.activeIndex - 1);
    });
    \u0275\u0275text(408, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(409, "button", 61);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_409_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveDelivery());
    });
    \u0275\u0275text(410, "Next");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(411, ConsignmentNewComponent_p_tabPanel_411_Template, 11, 7, "p-tabPanel", 161);
    \u0275\u0275elementStart(412, "p-tabPanel", 162)(413, "form", 15)(414, "div", 163)(415, "div", 164)(416, "p", 18);
    \u0275\u0275text(417, "Consignment Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(418, "input", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(419, "div", 164)(420, "p", 18);
    \u0275\u0275text(421, "Consignment Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(422, "input", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(423, "div", 166)(424, "p", 18);
    \u0275\u0275text(425, "Customs Insurance");
    \u0275\u0275elementEnd();
    \u0275\u0275element(426, "input", 167);
    \u0275\u0275template(427, ConsignmentNewComponent_mat_error_427_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(428, "div", 168)(429, "p", 18);
    \u0275\u0275text(430, "Duty Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275element(431, "input", 169);
    \u0275\u0275template(432, ConsignmentNewComponent_mat_error_432_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(433, "div", 170)(434, "p", 18);
    \u0275\u0275text(435, "DDU Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275element(436, "input", 171);
    \u0275\u0275template(437, ConsignmentNewComponent_mat_error_437_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(438, "div", 172)(439, "p", 18);
    \u0275\u0275text(440, "Special Approval Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275element(441, "input", 173);
    \u0275\u0275template(442, ConsignmentNewComponent_mat_error_442_Template, 3, 1, "mat-error", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(443, "div", 59)(444, "button", 67);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_444_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.activeIndex = ctx.activeIndex - 1);
    });
    \u0275\u0275text(445, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(446, "button", 61);
    \u0275\u0275listener("click", function ConsignmentNewComponent_Template_button_click_446_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveBilling());
    });
    \u0275\u0275text(447, "Save");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(448, ConsignmentNewComponent_p_tabPanel_448_Template, 12, 7, "p-tabPanel", 174);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_16_0;
    let tmp_21_0;
    let tmp_26_0;
    let tmp_35_0;
    let tmp_38_0;
    let tmp_40_0;
    let tmp_50_0;
    let tmp_52_0;
    let tmp_54_0;
    let tmp_58_0;
    let tmp_63_0;
    let tmp_75_0;
    let tmp_77_0;
    let tmp_79_0;
    let tmp_81_0;
    let tmp_83_0;
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
    let tmp_107_0;
    let tmp_109_0;
    let tmp_111_0;
    let tmp_115_0;
    let tmp_117_0;
    let tmp_121_0;
    let tmp_126_0;
    let tmp_128_0;
    let tmp_130_0;
    let tmp_132_0;
    let tmp_136_0;
    let tmp_141_0;
    let tmp_146_0;
    let tmp_151_0;
    let tmp_154_0;
    let tmp_156_0;
    let tmp_158_0;
    let tmp_160_0;
    let tmp_162_0;
    let tmp_164_0;
    let tmp_166_0;
    let tmp_168_0;
    let tmp_172_0;
    let tmp_174_0;
    let tmp_176_0;
    let tmp_180_0;
    let tmp_185_0;
    let tmp_190_0;
    let tmp_195_0;
    let tmp_198_0;
    let tmp_200_0;
    let tmp_202_0;
    let tmp_204_0;
    let tmp_206_0;
    let tmp_208_0;
    let tmp_210_0;
    let tmp_212_0;
    let tmp_214_0;
    let tmp_225_0;
    let tmp_227_0;
    let tmp_229_0;
    let tmp_231_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Consignment - ", ctx.pageToken.pageflow, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.activeIndex != 1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("activeIndex", ctx.activeIndex);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.shipmentInfo);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(253, _c05));
    \u0275\u0275property("options", ctx.companyIdList)("panelStyle", \u0275\u0275pureFunction0(254, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("companyId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(255, _c05));
    \u0275\u0275property("options", ctx.productIdList)("ngClass", ((tmp_11_0 = ctx.shipmentInfo.get("productId")) == null ? null : tmp_11_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(256, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("productId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(257, _c05));
    \u0275\u0275property("options", ctx.serviceTypeIdList)("ngClass", ((tmp_16_0 = ctx.shipmentInfo.get("serviceTypeId")) == null ? null : tmp_16_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(258, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("serviceTypeId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(259, _c05));
    \u0275\u0275property("options", ctx.partnerType)("ngClass", ((tmp_21_0 = ctx.shipmentInfo.get("partnerType")) == null ? null : tmp_21_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(260, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("partnerType"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(261, _c05));
    \u0275\u0275property("options", ctx.partnerNameList)("ngClass", ((tmp_26_0 = ctx.shipmentInfo.get("partnerId")) == null ? null : tmp_26_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(262, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("partnerId"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(263, _c05));
    \u0275\u0275property("options", ctx.consignmentTypeIdList)("panelStyle", \u0275\u0275pureFunction0(264, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("consignmentType"));
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(265, _c05));
    \u0275\u0275property("options", ctx.loadTypeIdList)("ngClass", ((tmp_35_0 = ctx.shipmentInfo.get("loadTypeId")) == null ? null : tmp_35_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(266, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("loadTypeId"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_38_0 = ctx.shipmentInfo.get("customerReferenceNumber")) == null ? null : tmp_38_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("customerReferenceNumber"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_40_0 = ctx.shipmentInfo.get("noOfPieceHawb")) == null ? null : tmp_40_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("noOfPieceHawb"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(267, _c05));
    \u0275\u0275property("options", ctx.countryIdListOrigin)("panelStyle", \u0275\u0275pureFunction0(268, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("countryOfOrigin"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(269, _c05));
    \u0275\u0275property("options", ctx.countryIdListOrigin)("panelStyle", \u0275\u0275pureFunction0(270, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("countryOfDestination"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ((tmp_50_0 = ctx.shipmentInfo.get("invoiceNumber")) == null ? null : tmp_50_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("invoiceNumber"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ((tmp_52_0 = ctx.consignment.get("invoiceAmount")) == null ? null : tmp_52_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("invoiceAmount"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ((tmp_54_0 = ctx.shipmentInfo.get("invoiceUrl")) == null ? null : tmp_54_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("invoiceUrl"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(271, _c05));
    \u0275\u0275property("options", ctx.incoTerms)("ngClass", ((tmp_58_0 = ctx.shipmentInfo.get("incoTerms")) == null ? null : tmp_58_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(272, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("incoTerms"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(273, _c05));
    \u0275\u0275property("options", ctx.paymentType)("ngClass", ((tmp_63_0 = ctx.shipmentInfo.get("paymentType")) == null ? null : tmp_63_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(274, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingShipment("paymentType"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showPaymentTypeFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showPaymentTypeFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showPaymentTypeFields);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.disabledPiece);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.piece);
    \u0275\u0275advance();
    \u0275\u0275property("scrollable", true)("value", ctx.piece.controls.pieceDetails.controls);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx.disabledConsignment);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.consignment);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ((tmp_75_0 = ctx.consignment.get("partnerMasterAirwayBill")) == null ? null : tmp_75_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("partnerMasterAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_77_0 = ctx.consignment.get("partnerHouseAirwayBill")) == null ? null : tmp_77_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("partnerHouseAirwayBill"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_79_0 = ctx.consignment.get("airportOriginCode")) == null ? null : tmp_79_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("airportOriginCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_81_0 = ctx.consignment.get("flightNo")) == null ? null : tmp_81_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("flightNo"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_83_0 = ctx.consignment.get("flightArrivalTime")) == null ? null : tmp_83_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("flightArrivalTime"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_87_0 = ctx.consignment.get("noOfPackages")) == null ? null : tmp_87_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("noOfPackages"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_89_0 = ctx.consignment.get("flightName")) == null ? null : tmp_89_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("flightName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_91_0 = ctx.consignment.get("length")) == null ? null : tmp_91_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("length"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_93_0 = ctx.consignment.get("width")) == null ? null : tmp_93_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("width"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_95_0 = ctx.consignment.get("height")) == null ? null : tmp_95_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("height"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_97_0 = ctx.consignment.get("dimensionUnit")) == null ? null : tmp_97_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("dimensionUnit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_99_0 = ctx.consignment.get("weight")) == null ? null : tmp_99_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("weight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_101_0 = ctx.consignment.get("weightUnit")) == null ? null : tmp_101_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("weightUnit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_103_0 = ctx.consignment.get("volume")) == null ? null : tmp_103_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("volume"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_105_0 = ctx.consignment.get("volumeUnit")) == null ? null : tmp_105_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("volumeUnit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_107_0 = ctx.consignment.get("netWeight")) == null ? null : tmp_107_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("netWeight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_109_0 = ctx.consignment.get("grossWeight")) == null ? null : tmp_109_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("grossWeight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_111_0 = ctx.consignment.get("invoiceDateFE")) == null ? null : tmp_111_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("iconDisplay", "input")("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("invoiceDateFE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_115_0 = ctx.consignment.get("goodsDescription")) == null ? null : tmp_115_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("goodsDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_117_0 = ctx.consignment.get("consignmentValue")) == null ? null : tmp_117_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("consignmentValue"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(275, _c05));
    \u0275\u0275property("options", ctx.currencyDropdown)("ngClass", ((tmp_121_0 = ctx.consignment.get("consignmentCurrency")) == null ? null : tmp_121_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(276, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingConsignment("consignmentCurrency"));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.disabledSender);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.senderInfo);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ((tmp_126_0 = ctx.senderInfo.get("originDetails.name")) == null ? null : tmp_126_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.name"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_128_0 = ctx.senderInfo.get("companyName")) == null ? null : tmp_128_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("companyName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_130_0 = ctx.senderInfo.get("originDetails.addressLine1")) == null ? null : tmp_130_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.addressLine1"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_132_0 = ctx.senderInfo.get("originDetails.addressLine2")) == null ? null : tmp_132_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.addressLine2"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(277, _c05));
    \u0275\u0275property("options", ctx.countryIdListOrigin)("ngClass", ((tmp_136_0 = ctx.senderInfo.get("originDetails.country")) == null ? null : tmp_136_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(278, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.country"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(279, _c05));
    \u0275\u0275property("options", ctx.provinceIdList)("ngClass", ((tmp_141_0 = ctx.senderInfo.get("originDetails.state")) == null ? null : tmp_141_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(280, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.state"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(281, _c05));
    \u0275\u0275property("options", ctx.districtIdList)("ngClass", ((tmp_146_0 = ctx.senderInfo.get("originDetails.district")) == null ? null : tmp_146_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(282, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.district"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(283, _c05));
    \u0275\u0275property("options", ctx.cityIdList)("ngClass", ((tmp_151_0 = ctx.senderInfo.get("originDetails.city")) == null ? null : tmp_151_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(284, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.city"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_154_0 = ctx.senderInfo.get("originDetails.pinCode")) == null ? null : tmp_154_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.pinCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_156_0 = ctx.senderInfo.get("originDetails.latitude")) == null ? null : tmp_156_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.latitude"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_158_0 = ctx.senderInfo.get("originDetails.longitude")) == null ? null : tmp_158_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.longitude"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_160_0 = ctx.senderInfo.get("originDetails.phone")) == null ? null : tmp_160_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.phone"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_162_0 = ctx.senderInfo.get("originDetails.alternatePhone")) == null ? null : tmp_162_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.alternatePhone"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_164_0 = ctx.senderInfo.get("originDetails.email")) == null ? null : tmp_164_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.email"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_166_0 = ctx.senderInfo.get("originDetails.addressHubCode")) == null ? null : tmp_166_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.addressHubCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_168_0 = ctx.senderInfo.get("originDetails.accountId")) == null ? null : tmp_168_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("originDetails.accountId"));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.disabledDelivery);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.deliveryInfo);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ((tmp_172_0 = ctx.deliveryInfo.get("destinationDetails.name")) == null ? null : tmp_172_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.name"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_174_0 = ctx.deliveryInfo.get("destinationDetails.addressLine1")) == null ? null : tmp_174_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.addressLine1"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_176_0 = ctx.deliveryInfo.get("destinationDetails.addressLine2")) == null ? null : tmp_176_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.addressLine2"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(285, _c05));
    \u0275\u0275property("options", ctx.countryIdListDestination)("ngClass", ((tmp_180_0 = ctx.deliveryInfo.get("destinationDetails.country")) == null ? null : tmp_180_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(286, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.country"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(287, _c05));
    \u0275\u0275property("options", ctx.provinceIdList)("ngClass", ((tmp_185_0 = ctx.deliveryInfo.get("destinationDetails.state")) == null ? null : tmp_185_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(288, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.state"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(289, _c05));
    \u0275\u0275property("options", ctx.districtIdList)("ngClass", ((tmp_190_0 = ctx.deliveryInfo.get("destinationDetails.district")) == null ? null : tmp_190_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(290, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.district"));
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(291, _c05));
    \u0275\u0275property("options", ctx.cityIdList)("ngClass", ((tmp_195_0 = ctx.deliveryInfo.get("destinationDetails.city")) == null ? null : tmp_195_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "")("panelStyle", \u0275\u0275pureFunction0(292, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.city"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_198_0 = ctx.senderInfo.get("destinationDetails.pinCode")) == null ? null : tmp_198_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingSender("destinationDetails.pinCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_200_0 = ctx.deliveryInfo.get("destinationDetails.latitude")) == null ? null : tmp_200_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.latitude"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_202_0 = ctx.deliveryInfo.get("destinationDetails.longitude")) == null ? null : tmp_202_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.longitude"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_204_0 = ctx.deliveryInfo.get("destinationDetails.phone")) == null ? null : tmp_204_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.phone"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_206_0 = ctx.deliveryInfo.get("destinationDetails.alternatePhone")) == null ? null : tmp_206_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.alternatePhone"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_208_0 = ctx.deliveryInfo.get("destinationDetails.email")) == null ? null : tmp_208_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.email"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_210_0 = ctx.deliveryInfo.get("destinationDetails.companyName")) == null ? null : tmp_210_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.companyName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_212_0 = ctx.deliveryInfo.get("destinationDetails.addressHubCode")) == null ? null : tmp_212_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.addressHubCode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_214_0 = ctx.deliveryInfo.get("destinationDetails.accountId")) == null ? null : tmp_214_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingDelivery("destinationDetails.accountId"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.disabledBilling);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.billing);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.consignment);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx.consignment.controls.consignmentCurrency.value)("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.consignment);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx.consignment.controls.consignmentValue.value)("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_225_0 = ctx.billing.get("customsInsurance")) == null ? null : tmp_225_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("customsInsurance"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_227_0 = ctx.billing.get("duty")) == null ? null : tmp_227_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("duty"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_229_0 = ctx.billing.get("dduCharge")) == null ? null : tmp_229_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("dduCharge"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ((tmp_231_0 = ctx.billing.get("specialApprovalCharge")) == null ? null : tmp_231_0.invalid) && ctx.submitted ? "ng-invalid ng-dirty" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorHandlingBilling("specialApprovalCharge"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.pageToken.pageflow != "New");
  }
}, dependencies: [NgClass, NgForOf, NgIf, RouterLink, ButtonDirective, PrimeTemplate, Table, TableCheckbox, TableHeaderCheckbox, Dropdown, InputText, Calendar, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, KeyFilter, TabView, TabPanel, OverlayPanel, InputGroup, MatError, MatMenuItem, FormGroupDirective, FormControlName, FormGroupName, DatePipe], styles: ["\n\n.circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-grow: 0;\n  margin: 0 6px 12px;\n  border-radius: 100%;\n  padding: 12px 17px 11px;\n  background-color: var(--white);\n}\n.borderCircle[_ngcontent-%COMP%] {\n  border: solid 1.5px var(--black);\n}\n.marginFieldNew[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.scrollNew22[_ngcontent-%COMP%] {\n  height: calc(100vh - 22rem);\n  overflow-y: scroll;\n}\n.inputborderLess[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.contentBox[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  margin: 10px 10px 10px 0px;\n  flex-direction: row;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 16px;\n  border: solid 1px var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  transition: background-color 0.3s ease;\n}\n.lineBorder[_ngcontent-%COMP%] {\n  width: 8px;\n  flex-grow: 0;\n  margin: 10px 7px 10px 0;\n  border-radius: 20px;\n  background-color: var(--overcOrange);\n}\n.small-calendar[_ngcontent-%COMP%]   .p-datepicker[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 200px;\n  max-width: 100%;\n  max-height: 300px;\n}\n/*# sourceMappingURL=consignment-new.component.css.map */"], data: { animation: [
  trigger("fadeLater", [
    state("fade-in", style({ opacity: 1, transform: "translateY(0)" })),
    state("fade-out", style({ opacity: 0, transform: "translateY(0)" })),
    transition("fade-in <=> fade-out", animate("0.6s ease-in-out"))
  ])
] } });
var ConsignmentNewComponent = _ConsignmentNewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsignmentNewComponent, { className: "ConsignmentNewComponent", filePath: "src\\app\\main\\operation\\consignment\\consignment-new\\consignment-new.component.ts", lineNumber: 37 });
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
//# sourceMappingURL=chunk-DXJCGF7F.js.map

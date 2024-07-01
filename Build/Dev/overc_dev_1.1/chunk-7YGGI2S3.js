import {
  ChangeDetectorRef,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
  PickList,
  PrimeTemplate,
  TabPanel,
  TabView,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AJRJ5UQL.js";

// src/app/common-dialog/delete/delete.component.ts
var _DeleteComponent = class _DeleteComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  delete() {
    this.dialogRef.close("delete");
  }
};
_DeleteComponent.\u0275fac = function DeleteComponent_Factory(t) {
  return new (t || _DeleteComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_DeleteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteComponent, selectors: [["app-delete"]], decls: 12, vars: 2, consts: [[1, "bgBlack", "w-100", "text-white", "deleteDialog"], [1, "d-flex", "justify-content-center"], ["src", "./assets/common/delete.png", "alt", "", "srcset", "", 1, "text-center", 2, "width", "3rem"], [1, "deleteHeader", "mb-0", "text-center", "mt-3"], [1, "deleteBody", "px-3", "mb-0", "text-center"], [1, "d-flex", "justify-content-center", "align-items-center", "py-2"], ["mat-dialog-close", "", "type", "button", 1, "btn", "mr-2", "cancelButton"], ["type", "button", 1, "btn", "ml-2", "saveButton", 3, "click"]], template: function DeleteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275text(9, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function DeleteComponent_Template_button_click_10_listener() {
      return ctx.delete();
    });
    \u0275\u0275text(11, "Yes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Are you sure, Delete ", ctx.data.module, "?");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.data.body);
  }
}, dependencies: [MatDialogClose], styles: ["\n\n.deleteBody[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  padding-bottom: 2rem;\n}\n.deleteHeader[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 31.2px;\n  text-align: left;\n  padding-bottom: 1rem;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n.deleteDialog[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n/*# sourceMappingURL=delete.component.css.map */"] });
var DeleteComponent = _DeleteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteComponent, { className: "DeleteComponent", filePath: "src\\app\\common-dialog\\delete\\delete.component.ts", lineNumber: 9 });
})();

// src/app/common-dialog/custom-table/custom-table.component.ts
function CustomTableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3, " Amy Elsner ");
    \u0275\u0275elementEnd()();
  }
}
function CustomTableComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3, " Onyama Limba ");
    \u0275\u0275elementEnd()();
  }
}
function CustomTableComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3, " Ioni Bowcher ");
    \u0275\u0275elementEnd()();
  }
}
function CustomTableComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", product_r1.field, " ");
  }
}
var _CustomTableComponent = class _CustomTableComponent {
  constructor(cdr, dialogRef, data) {
    this.cdr = cdr;
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {
    console.log(this.data);
    this.sourceProducts = this.data.source;
    console.log(this.sourceProducts);
    this.targetProducts = this.data.target;
  }
};
_CustomTableComponent.\u0275fac = function CustomTableComponent_Factory(t) {
  return new (t || _CustomTableComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CustomTableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomTableComponent, selectors: [["app-custom-table"]], decls: 21, vars: 4, consts: [["styleClass", "tabview-custom"], ["pTemplate", "header"], ["header", "Header II"], ["header", "Header III"], [1, ""], ["sourceHeader", "Available Columns", "targetHeader", "Shown Columns", "filterBy", "field", 3, "source", "target", "dragdrop", "responsive"], ["pTemplate", "item"], [1, "d-flex", "justify-content-center", "align-items-center", "py-2"], ["mat-dialog-close", "", "type", "button", 1, "btn", "mr-2", "cancelButton"], ["type", "button", 1, "btn", "ml-2", "saveButton"], [1, "flex", "align-items-center", "gap-2"], [1, "bi", "bi-sliders"], [1, "font-bold", "white-space-nowrap", "m-0"], [1, "flex", "flex-wrap", "p-2", "align-items-center", "gap-3"], [1, "flex-1", "flex", "flex-column", "gap-2"], [1, "font-bold"]], template: function CustomTableComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabView", 0)(1, "p-tabPanel");
    \u0275\u0275template(2, CustomTableComponent_ng_template_2_Template, 4, 0, "ng-template", 1);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Lorem ipsum dolor sit amet... ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-tabPanel", 2);
    \u0275\u0275template(6, CustomTableComponent_ng_template_6_Template, 4, 0, "ng-template", 1);
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium... ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-tabPanel", 3);
    \u0275\u0275template(10, CustomTableComponent_ng_template_10_Template, 4, 0, "ng-template", 1);
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, " At vero eos et accusamus et iusto odio dignissimos... ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 4)(14, "p-pickList", 5);
    \u0275\u0275template(15, CustomTableComponent_ng_template_15_Template, 4, 1, "ng-template", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 7)(17, "button", 8);
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 9);
    \u0275\u0275text(20, "Yes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("source", ctx.sourceProducts)("target", ctx.targetProducts)("dragdrop", true)("responsive", true);
  }
}, dependencies: [PrimeTemplate, PickList, TabView, TabPanel, MatDialogClose], styles: ["\n\n.p-picklist[_ngcontent-%COMP%]   .p-picklist-list-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--black) !important;\n  color: white;\n}\n.header[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20.8px;\n  text-align: center;\n}\n.cancelButton[_ngcontent-%COMP%] {\n  padding: 7px 25px 7px 25px;\n  gap: 10px;\n  border-radius: 6px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  background-color: var(--white);\n  color: var(--black);\n}\n.saveButton[_ngcontent-%COMP%] {\n  padding: 7px 35px 7px 35px;\n  gap: 10px;\n  border-radius: 6px;\n  opacity: 0px;\n  background-color: var(--overcOrange);\n  color: var(--black);\n}\n  .mat-mdc-dialog-container .mdc-dialog__surface {\n  border-radius: 12px !important;\n}\n/*# sourceMappingURL=custom-table.component.css.map */"] });
var CustomTableComponent = _CustomTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomTableComponent, { className: "CustomTableComponent", filePath: "src\\app\\common-dialog\\custom-table\\custom-table.component.ts", lineNumber: 9 });
})();

export {
  DeleteComponent,
  CustomTableComponent
};
//# sourceMappingURL=chunk-7YGGI2S3.js.map

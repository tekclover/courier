import {
  AuthService,
  CommonModule,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  InputText,
  MatButton,
  MessageService,
  NgControlStatus,
  NgControlStatusGroup,
  Password,
  Router,
  RouterModule,
  SharedModule,
  Validators,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-OJ6LURCA.js";

// src/app/login/login.component.ts
var _LoginComponent = class _LoginComponent {
  constructor(router, fb, messageService, auth) {
    this.router = router;
    this.fb = fb;
    this.messageService = messageService;
    this.auth = auth;
    this.hide = true;
    this.lgForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  login() {
    if (this.lgForm.invalid) {
      this.messageService.add({ severity: "error", summary: "Error", key: "br", detail: "Please fill required fields to continue" });
      return;
    }
    this.auth.login(this.lgForm.value);
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 13, vars: 3, consts: [[1, "card", "flex", "justify-content-center", "align-items-center"], [1, "d-flex", "justify-content-center", "align-items-center", "mt-5", 3, "ngSubmit", "formGroup"], [1, "mx-auto"], [1, "form-group", "mb-0", "mt-3", 2, "color", "#006990"], [1, "mb-1", "text-white", 2, "font-size", "19px"], ["type", "text", "placeholder", "Enter", "pInputText", "", "formControlName", "userName", 1, "w-100"], [1, "form-group", "mb-0", 2, "color", "#006990"], ["placeholder", "Password", "formControlName", "password", 1, "w-100", 3, "feedback", "toggleMask"], ["mat-button", "", "type", "Submit", 1, "btn-lg", "btn-block", "py-2", "mt-2", "mb-2", 2, "background-color", "#006990", "color", "white", "width", "21rem"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
      return ctx.login();
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5, "User ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "h3", 4);
    \u0275\u0275text(9, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "p-password", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275text(12, "Login");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.lgForm);
    \u0275\u0275advance(9);
    \u0275\u0275property("feedback", false)("toggleMask", true);
  }
}, dependencies: [InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, Password, MatButton, FormGroupDirective, FormControlName] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\login\\login.component.ts", lineNumber: 12 });
})();

// src/app/login/login-routing.module.ts
var routes = [{ path: "", component: LoginComponent }];
var _LoginRoutingModule = class _LoginRoutingModule {
};
_LoginRoutingModule.\u0275fac = function LoginRoutingModule_Factory(t) {
  return new (t || _LoginRoutingModule)();
};
_LoginRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginRoutingModule });
_LoginRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var LoginRoutingModule = _LoginRoutingModule;

// src/app/login/login.module.ts
var _LoginModule = class _LoginModule {
};
_LoginModule.\u0275fac = function LoginModule_Factory(t) {
  return new (t || _LoginModule)();
};
_LoginModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginModule });
_LoginModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  LoginRoutingModule,
  SharedModule
] });
var LoginModule = _LoginModule;
export {
  LoginModule
};
//# sourceMappingURL=chunk-FLFCSYQK.js.map

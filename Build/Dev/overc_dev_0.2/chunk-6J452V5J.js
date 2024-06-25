import {
  CommonModule,
  RouterModule,
  SharedModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-VMREKZ45.js";

// src/app/main/master/master-routing.module.ts
var routes = [];
var _MasterRoutingModule = class _MasterRoutingModule {
};
_MasterRoutingModule.\u0275fac = function MasterRoutingModule_Factory(t) {
  return new (t || _MasterRoutingModule)();
};
_MasterRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MasterRoutingModule });
_MasterRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var MasterRoutingModule = _MasterRoutingModule;

// src/app/main/master/master.module.ts
var _MasterModule = class _MasterModule {
};
_MasterModule.\u0275fac = function MasterModule_Factory(t) {
  return new (t || _MasterModule)();
};
_MasterModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MasterModule });
_MasterModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  MasterRoutingModule,
  SharedModule
] });
var MasterModule = _MasterModule;
export {
  MasterModule
};
//# sourceMappingURL=chunk-6J452V5J.js.map

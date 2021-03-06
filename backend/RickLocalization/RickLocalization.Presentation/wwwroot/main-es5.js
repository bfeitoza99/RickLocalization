function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _rick_details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rick/details/details.component */
    "./src/app/rick/details/details.component.ts");
    /* harmony import */


    var _rick_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rick/list/list.component */
    "./src/app/rick/list/list.component.ts");
    /* harmony import */


    var _rick_navigation_history_navigation_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./rick/navigation-history/navigation-history.component */
    "./src/app/rick/navigation-history/navigation-history.component.ts");

    var routes = [{
      path: "",
      redirectTo: "rick",
      pathMatch: "full"
    }, {
      path: "rick",
      component: _rick_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }, {
      path: "rick/details/:id",
      component: _rick_details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"]
    }, {
      path: "rick/navigation-history/:id",
      component: _rick_navigation_history_navigation_history_component__WEBPACK_IMPORTED_MODULE_4__["NavigationHistoryComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'rick-localization';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _rick_services_swagger_generated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rick/services/swagger-generated */
    "./src/app/rick/services/swagger-generated/index.ts");
    /* harmony import */


    var _rick_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rick/list/list.component */
    "./src/app/rick/list/list.component.ts");
    /* harmony import */


    var _rick_services_swagger_generated_api_rick_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./rick/services/swagger-generated/api/rick.service */
    "./src/app/rick/services/swagger-generated/api/rick.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _rick_details_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./rick/details/details.component */
    "./src/app/rick/details/details.component.ts");
    /* harmony import */


    var _rick_navigation_history_navigation_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./rick/navigation-history/navigation-history.component */
    "./src/app/rick/navigation-history/navigation-history.component.ts");
    /* harmony import */


    var _rick_create_navigation_create_navigation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./rick/create-navigation/create-navigation.component */
    "./src/app/rick/create-navigation/create-navigation.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _rick_services_swagger_generated__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"],
        useValue: 'https://localhost:5001'
      }, _rick_services_swagger_generated_api_rick_service__WEBPACK_IMPORTED_MODULE_7__["RickService"], _rick_services_swagger_generated__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _rick_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _rick_details_details_component__WEBPACK_IMPORTED_MODULE_19__["DetailsComponent"], _rick_navigation_history_navigation_history_component__WEBPACK_IMPORTED_MODULE_20__["NavigationHistoryComponent"], _rick_create_navigation_create_navigation_component__WEBPACK_IMPORTED_MODULE_21__["CreateNavigationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _rick_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _rick_details_details_component__WEBPACK_IMPORTED_MODULE_19__["DetailsComponent"], _rick_navigation_history_navigation_history_component__WEBPACK_IMPORTED_MODULE_20__["NavigationHistoryComponent"], _rick_create_navigation_create_navigation_component__WEBPACK_IMPORTED_MODULE_21__["CreateNavigationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"]],
          entryComponents: [_rick_create_navigation_create_navigation_component__WEBPACK_IMPORTED_MODULE_21__["CreateNavigationComponent"]],
          providers: [{
            provide: _rick_services_swagger_generated__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"],
            useValue: 'https://localhost:5001'
          }, _rick_services_swagger_generated_api_rick_service__WEBPACK_IMPORTED_MODULE_7__["RickService"], _rick_services_swagger_generated__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/create-navigation/create-navigation.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/rick/create-navigation/create-navigation.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CreateNavigationComponent */

  /***/
  function srcAppRickCreateNavigationCreateNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateNavigationComponent", function () {
      return CreateNavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_localize_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/localize/init */
    "./node_modules/@angular/localize/fesm2015/init.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_facade_navigation_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/facade/navigation-facade.service */
    "./src/app/rick/services/facade/navigation-facade.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function CreateNavigationComponent_div_0_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " A Dimens\xE3o Destino \xE9 obrigat\xF3ria! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function CreateNavigationComponent_div_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, CreateNavigationComponent_div_0_div_10_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.dimensionDestiny.errors.required);
      }
    }

    function CreateNavigationComponent_div_0_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "mat-progress-bar", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function CreateNavigationComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Dimens\xE3o Atual");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Dimens\xE3o Destino");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, CreateNavigationComponent_div_0_div_10_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CreateNavigationComponent_div_0_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r4.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Adicionar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CreateNavigationComponent_div_0_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r6.closeDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " Voltar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, CreateNavigationComponent_div_0_div_16_Template, 2, 0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx_r0.createNavigationForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.dimensionDestiny.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.submitting);
      }
    }

    var CreateNavigationComponent = /*#__PURE__*/function () {
      function CreateNavigationComponent(navigationService, dialogRef, data, formBuilder, _snackBar) {
        _classCallCheck(this, CreateNavigationComponent);

        this.navigationService = navigationService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.submitting = false;
        this.showCreateResultMessage = false;
      }

      _createClass(CreateNavigationComponent, [{
        key: "dimensionOrigin",
        get: function get() {
          return this.createNavigationForm.get("dimensionOrigin");
        }
      }, {
        key: "dimensionDestiny",
        get: function get() {
          return this.createNavigationForm.get("dimensionDestiny");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.createNavigationForm = this.formBuilder.group({
                      dimensionOrigin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                      dimensionDestiny: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
                    });
                    _context.next = 3;
                    return this.navigationService.getLastNavigationByRickIdAsync(this.data.id);

                  case 3:
                    this.lastDimension = _context.sent;
                    this.dimensionOrigin.setValue(this.lastDimension.currentDimension);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "getFields",
        value: function getFields() {
          return {
            rickId: this.data.id,
            dimensionDestiny: this.dimensionDestiny.value,
            dimensionOrigin: this.dimensionOrigin.value
          };
        }
      }, {
        key: "onValueChanges",
        value: function onValueChanges() {
          var controls = [this.dimensionDestiny, this.dimensionOrigin];
          controls.forEach(function (control) {
            control.valueChanges.subscribe(function () {});
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var message, className, result, snackBarRef;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.onValueChanges();
                    console.log(this.createNavigationForm);
                    console.log(this.dimensionDestiny);

                    if (!this.createNavigationForm.invalid) {
                      _context2.next = 5;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 5:
                    message = "";
                    className = "";
                    this.submitting = true;
                    _context2.next = 10;
                    return this.navigationService.createNavigationAsync(this.getFields());

                  case 10:
                    result = _context2.sent;
                    this.submitting = false;
                    message = "Sucesso!";
                    className = "snackBarSucces";

                    if (!result.isSucess) {
                      className = "snackBarFailed";
                      message = "N??o foi poss??vel completar sua requis??o, por favor contate um administrador do sistema.";
                    }

                    snackBarRef = this._snackBar.open(message, "", {
                      duration: 500,
                      panelClass: [className]
                    });
                    snackBarRef.afterDismissed().subscribe(function (info) {
                      _this.closeDialog();
                    });

                  case 17:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CreateNavigationComponent;
    }();

    CreateNavigationComponent.??fac = function CreateNavigationComponent_Factory(t) {
      return new (t || CreateNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_facade_navigation_facade_service__WEBPACK_IMPORTED_MODULE_5__["NavigationFacadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    CreateNavigationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: CreateNavigationComponent,
      selectors: [["app-create-navigation"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "formGroup"], ["appearance", "outline", 2, "display", "revert !important"], [2, "font-size", "15px"], ["matInput", "", "readonly", "", "formControlName", "dimensionOrigin", 2, "color", "black", "font-weight", "bold"], ["matInput", "", "formControlName", "dimensionDestiny", 2, "color", "black", "font-weight", "bold"], ["class", "invalid-feedback", 4, "ngIf"], [1, "center-button-modal"], ["mat-flat-button", "", 2, "background-color", "#2b193E", "color", "white", "float", "right", 3, "click"], ["mat-flat-button", "", 2, "background-color", "#2b193E", "color", "white", 3, "click"], ["style", "margin-top: 5px", 4, "ngIf"], [1, "invalid-feedback"], [2, "margin-top", "5px"], ["mode", "query", 2, "color", "#2b193E"]],
      template: function CreateNavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, CreateNavigationComponent_div_0_Template, 17, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.lastDimension);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"]],
      styles: [".background-color-dialog[_ngcontent-%COMP%]{\r\n  background-color: white !important;\r\n}\r\n .mat-dialog-container {\r\n  background-color: white !important;\r\n  border: 1px solid black;\r\n}\r\n  .mat-progress-bar-fill::after {\r\n  background-color: #2b193E;\r\n}\r\n  mat-progress-bar .mat-progress-bar-buffer {\r\n  background: #E4E8EB;\r\n}\r\n   .mat-form-field-label {\r\n    \r\n    color: #2b193E !important;\r\n    font-weight: bold  !important;\r\n    font-size: 20px !important;\r\n   }\r\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n    color: #2b193E !important;\r\n  }\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color: #2b193E !important;\r\n     opacity: 0.7!important;\r\n}\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 0.25rem;\r\n  margin-bottom: 0.25rem;\r\n  font-size: 80%;\r\n  color: #f86c6b;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmljay9jcmVhdGUtbmF2aWdhdGlvbi9jcmVhdGUtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFRzs7SUFFQyx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLDBCQUEwQjtHQUMzQjtBQUVBO0lBQ0MseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSx5QkFBeUI7S0FDeEIsc0JBQXNCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JpY2svY3JlYXRlLW5hdmlnYXRpb24vY3JlYXRlLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmFja2dyb3VuZC1jb2xvci1kaWFsb2d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIxOTNFO1xyXG59XHJcblxyXG46Om5nLWRlZXAgbWF0LXByb2dyZXNzLWJhciAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gIGJhY2tncm91bmQ6ICNFNEU4RUI7XHJcbn1cclxuXHJcbiAgIDo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIFxyXG4gICAgY29sb3I6ICMyYjE5M0UgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuXHJcbiAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICAgIGNvbG9yOiAjMmIxOTNFICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICBjb2xvcjogIzJiMTkzRSAhaW1wb3J0YW50O1xyXG4gICAgIG9wYWNpdHk6IDAuNyFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgY29sb3I6ICNmODZjNmI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](CreateNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-create-navigation',
          templateUrl: './create-navigation.component.html',
          styleUrls: ['./create-navigation.component.css']
        }]
      }], function () {
        return [{
          type: _services_facade_navigation_facade_service__WEBPACK_IMPORTED_MODULE_5__["NavigationFacadeService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/details/details.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/rick/details/details.component.ts ***!
    \***************************************************/

  /*! exports provided: DetailsComponent */

  /***/
  function srcAppRickDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
      return DetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _create_navigation_create_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../create-navigation/create-navigation.component */
    "./src/app/rick/create-navigation/create-navigation.component.ts");
    /* harmony import */


    var _services_facade_rick_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/facade/rick-facade.service */
    "./src/app/rick/services/facade/rick-facade.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function DetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Dimens\xE3o Original");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Detalhes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "textarea", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DetailsComponent_div_0_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r1.createNavigation(ctx_r1.data.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " Adicionar Viagem ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DetailsComponent_div_0_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r3.navigationHistory(ctx_r3.data.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, " Hist\xF3rico Navega\xE7\xE3o ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r0.data.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx_r0.data.dimensionOriginName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx_r0.data.details);
      }
    }

    var DetailsComponent = /*#__PURE__*/function () {
      function DetailsComponent(rickService, activatedRoute, router, dialog) {
        _classCallCheck(this, DetailsComponent);

        this.rickService = rickService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dialog = dialog;
      }

      _createClass(DetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.id = this.activatedRoute.snapshot.params.id;
                    _context3.next = 3;
                    return this.rickService.getByIdAsync(this.id);

                  case 3:
                    this.data = _context3.sent;

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "createNavigation",
        value: function createNavigation(id) {
          var dialogRef = this.dialog.open(_create_navigation_create_navigation_component__WEBPACK_IMPORTED_MODULE_2__["CreateNavigationComponent"], {
            width: '300px',
            height: '270px',
            backdropClass: 'background-color-dialog',
            data: {
              id: id
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }, {
        key: "navigationHistory",
        value: function navigationHistory(id) {
          this.router.navigate(["rick/navigation-history", id]);
        }
      }]);

      return DetailsComponent;
    }();

    DetailsComponent.??fac = function DetailsComponent_Factory(t) {
      return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_facade_rick_facade_service__WEBPACK_IMPORTED_MODULE_3__["RickFacadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    DetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: DetailsComponent,
      selectors: [["app-details"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "center-img-background"], [3, "src"], [1, "center-form"], ["appearance", "legacy", 1, ""], ["matInput", "", 2, "color", "black", "font-weight", "bold", 3, "value"], ["appearance", "legacy", 1, "text-area"], ["rows", "1", "matInput", "", 2, "color", "black", "font-weight", "bold", 3, "value"], [1, "center-button"], ["mat-flat-button", "", 2, "background-color", "#2b193E", "color", "white", 3, "click"], ["mat-flat-button", "", 2, "margin-left", "36%  !important", "background-color", "#2b193E", "color", "white", 3, "click"]],
      template: function DetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, DetailsComponent_div_0_Template, 18, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
      styles: [".background-style[_ngcontent-%COMP%] {\r\n   background-color: gray  !important; \r\n   height: 50%; \r\n   width: 40%;\r\n   opacity: 0.9;\r\n}\r\n\r\n.center-img-background[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    height: auto;\r\n    width: auto;\r\n    width: 70%;\r\n    top : 50%;\r\n    left: 50%;\r\n    transform    : translate(-50%, -50%); \r\n    text-align: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 450px  !important;\r\n    width: 60%  !important;\r\n    margin: 8px;\r\n    filter: blur(2px);\r\n    opacity: 0.65;\r\n    cursor: auto !important;\r\n    border-radius: 10%;\r\n    border: 3px solid white;\r\n    \r\n    \r\n  }\r\n\r\n.center-form[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: auto;\r\n    width: auto;\r\n    width: 63%;\r\n    top : 45%;\r\n    left: 50%;\r\n    transform    : translate(-50%, -50%); \r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n.center-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: auto;\r\n    width: auto;\r\n    width: 63%;\r\n    top : 70%;\r\n    left: 50%;\r\n    transform    : translate(-50%, -50%); \r\n    text-align: center;\r\n}\r\n\r\n.text-area[_ngcontent-%COMP%]{\r\n    margin: 25px;\r\n    width: 38%;\r\n}\r\n\r\n  .mat-focused .mat-form-field-label {\r\n    \r\n    color:  #2b193E !important;\r\n   }\r\n\r\n   .mat-form-field-label {\r\n    \r\n    color: #2b193E !important;\r\n    font-weight: bold  !important;\r\n    font-size: 20px !important;\r\n   }\r\n\r\n .mat-form-field-underline {\r\n    \r\n    background-color:  #2b193E !important;\r\n  }\r\n\r\n .mat-form-field-ripple {\r\n\r\n   background-color:  #2b193E !important;\r\n  }\r\n\r\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmljay9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGtDQUFrQztHQUNsQyxXQUFXO0dBQ1gsVUFBVTtHQUNWLFlBQVk7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUVULG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsdUJBQXVCOzs7RUFHekI7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFFVCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFFVCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSwwQkFBMEI7R0FDM0I7O0FBRUE7O0lBRUMseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QiwwQkFBMEI7R0FDM0I7O0FBRUE7O0lBRUMscUNBQXFDO0VBQ3ZDOztBQUVBOztHQUVDLHFDQUFxQztFQUN0Qzs7QUFFQTtJQUNFLHdDQUF3QztFQUMxQyIsImZpbGUiOiJzcmMvYXBwL3JpY2svZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1zdHlsZSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGdyYXkgICFpbXBvcnRhbnQ7IFxyXG4gICBoZWlnaHQ6IDUwJTsgXHJcbiAgIHdpZHRoOiA0MCU7XHJcbiAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmNlbnRlci1pbWctYmFja2dyb3VuZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHRvcCA6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybSAgICA6IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4ICAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDYwJSAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgICBvcGFjaXR5OiAwLjY1O1xyXG4gICAgY3Vyc29yOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuLmNlbnRlci1mb3JtIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYzJTtcclxuICAgIHRvcCA6IDQ1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybSAgICA6IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jZW50ZXItYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYzJTtcclxuICAgIHRvcCA6IDcwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybSAgICA6IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udGV4dC1hcmVhe1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgd2lkdGg6IDM4JTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgXHJcbiAgICBjb2xvcjogICMyYjE5M0UgIWltcG9ydGFudDtcclxuICAgfVxyXG5cclxuICAgOjpuZy1kZWVwICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzJiMTkzRSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gIFxyXG4gICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMyYjE5M0UgIWltcG9ydGFudDtcclxuICB9IFxyXG4gIFxyXG4gIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG5cclxuICAgYmFja2dyb3VuZC1jb2xvcjogICMyYjE5M0UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-details',
          templateUrl: './details.component.html',
          styleUrls: ['./details.component.css']
        }]
      }], function () {
        return [{
          type: _services_facade_rick_facade_service__WEBPACK_IMPORTED_MODULE_3__["RickFacadeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/list/list.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/rick/list/list.component.ts ***!
    \*********************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppRickListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_facade_rick_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/facade/rick-facade.service */
    "./src/app/rick/services/facade/rick-facade.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    function ListComponent_div_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ListComponent_div_2_ng_container_2_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

          var rick_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          return ctx_r3.detail(rick_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var rick_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", rick_r2.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
      }
    }

    var _c0 = function _c0() {
      return [4, 8, 12];
    };

    function ListComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, ListComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-paginator", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("page", function ListComponent_div_2_Template_mat_paginator_page_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r5.getData($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.formatedData);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("length", ctx_r0.data.ricks.length)("pageSize", ctx_r0.size)("pageIndex", ctx_r0.page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](5, _c0));
      }
    }

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(rickService, router, activatedRoute) {
        _classCallCheck(this, ListComponent);

        this.rickService = rickService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formatedData = [];
        this.page = 0;
        this.size = 4;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.rickService.getAllAsync();

                  case 2:
                    this.data = _context4.sent;
                    this.getData({
                      pageIndex: this.page,
                      pageSize: this.size
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData(obj) {
          var index = 0,
              startingIndex = obj.pageIndex * obj.pageSize,
              endingIndex = startingIndex + obj.pageSize;
          this.formatedData = this.data.ricks.filter(function () {
            index++;
            return index > startingIndex && index <= endingIndex ? true : false;
          });
        }
      }, {
        key: "detail",
        value: function detail(id) {
          this.router.navigate(["details", id], {
            relativeTo: this.activatedRoute
          });
        }
      }]);

      return ListComponent;
    }();

    ListComponent.??fac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_facade_rick_facade_service__WEBPACK_IMPORTED_MODULE_2__["RickFacadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 3,
      vars: 1,
      consts: [[1, "background-grid", "center"], [1, "center"], ["fxFill", "", "fxLayout", "column", "fxLayoutAlign", "space-between", 4, "ngIf"], ["fxFill", "", "fxLayout", "column", "fxLayoutAlign", "space-between"], ["fxLayout", "row wrap"], [4, "ngFor", "ngForOf"], [2, "opacity", "1", "background-color", "transparent", "color", "black", "font-weight", "bold", "font-size", "15px", 3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [3, "src", "click"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, ListComponent_div_2_Template, 4, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.formatedData && ctx.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]],
      styles: [".mat-select-value {\r\n    color: black;\r\n      font-weight: bold;\r\n      font-size: 15px;\r\n  }\r\n    .mat-select-arrow {\r\n      color: black;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmljay9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFO0lBQ0UsWUFBWTtNQUNWLGlCQUFpQjtNQUNqQixlQUFlO0VBQ25CO0VBQ0E7TUFDSSxZQUFZO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmljay9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.css']
        }]
      }], function () {
        return [{
          type: _services_facade_rick_facade_service__WEBPACK_IMPORTED_MODULE_2__["RickFacadeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/navigation-history/navigation-history.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/rick/navigation-history/navigation-history.component.ts ***!
    \*************************************************************************/

  /*! exports provided: NavigationHistoryComponent */

  /***/
  function srcAppRickNavigationHistoryNavigationHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationHistoryComponent", function () {
      return NavigationHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_facade_rick_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/facade/rick-facade.service */
    "./src/app/rick/services/facade/rick-facade.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_facade_navigation_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/facade/navigation-facade.service */
    "./src/app/rick/services/facade/navigation-facade.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    function NavigationHistoryComponent_div_0_mat_header_cell_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Dimens\xE3o Origem ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function NavigationHistoryComponent_div_0_mat_cell_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r7.dimensionOrigin, " ");
      }
    }

    function NavigationHistoryComponent_div_0_mat_header_cell_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Dimens\xE3o Destino ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function NavigationHistoryComponent_div_0_mat_cell_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r8.dimensionDestiny, " ");
      }
    }

    function NavigationHistoryComponent_div_0_mat_header_row_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "mat-header-row");
      }
    }

    function NavigationHistoryComponent_div_0_mat_row_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "mat-row");
      }
    }

    var _c0 = function _c0() {
      return [5];
    };

    function NavigationHistoryComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](5, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, NavigationHistoryComponent_div_0_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, NavigationHistoryComponent_div_0_mat_cell_7_Template, 2, 1, "mat-cell", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](8, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, NavigationHistoryComponent_div_0_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, NavigationHistoryComponent_div_0_mat_cell_10_Template, 2, 1, "mat-cell", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, NavigationHistoryComponent_div_0_mat_header_row_11_Template, 1, 0, "mat-header-row", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, NavigationHistoryComponent_div_0_mat_row_12_Template, 1, 0, "mat-row", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-paginator", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("page", function NavigationHistoryComponent_div_0_Template_mat_paginator_page_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r10.getData($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r0.data.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dataSource", ctx_r0.formatedData);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", ctx_r0.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matRowDefColumns", ctx_r0.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("length", ctx_r0.dataSource.length)("pageSize", ctx_r0.size)("pageIndex", ctx_r0.page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](8, _c0));
      }
    }

    var NavigationHistoryComponent = /*#__PURE__*/function () {
      function NavigationHistoryComponent(rickService, activatedRoute, navigationService) {
        _classCallCheck(this, NavigationHistoryComponent);

        this.rickService = rickService;
        this.activatedRoute = activatedRoute;
        this.navigationService = navigationService;
        this.displayedColumns = ['dimensionOrigin', 'dimensionDestiny'];
        this.resultsLength = 0;
        this.formatedData = [];
        this.page = 0;
        this.size = 5;
      }

      _createClass(NavigationHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.id = this.activatedRoute.snapshot.params.id;
                    _context5.next = 3;
                    return this.rickService.getByIdAsync(this.id);

                  case 3:
                    this.data = _context5.sent;
                    _context5.next = 6;
                    return this.navigationService.getNavigationsByRickIdAsync(this.id);

                  case 6:
                    this.table = _context5.sent;
                    this.dataSource = this.table.navigations;
                    this.getData({
                      pageIndex: this.page,
                      pageSize: this.size
                    });

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData(obj) {
          var index = 0,
              startingIndex = obj.pageIndex * obj.pageSize,
              endingIndex = startingIndex + obj.pageSize;
          this.formatedData = this.dataSource.filter(function () {
            index++;
            return index > startingIndex && index <= endingIndex ? true : false;
          });
        }
      }]);

      return NavigationHistoryComponent;
    }();

    NavigationHistoryComponent.??fac = function NavigationHistoryComponent_Factory(t) {
      return new (t || NavigationHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_facade_rick_facade_service__WEBPACK_IMPORTED_MODULE_2__["RickFacadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_facade_navigation_facade_service__WEBPACK_IMPORTED_MODULE_4__["NavigationFacadeService"]));
    };

    NavigationHistoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: NavigationHistoryComponent,
      selectors: [["app-navigation-history"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "center-img-background"], [3, "src"], [1, "center-table"], ["mat-table", "", 2, "background-color", "rgba(117, 111, 117, 0.25)", 3, "dataSource"], ["matColumnDef", "dimensionOrigin", "sticky", ""], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "dimensionDestiny", "sticky", ""], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [2, "opacity", "1", "background-color", "transparent", "color", "black", "font-weight", "bold", "font-size", "15px", "margin-right", "255px", 3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"]],
      template: function NavigationHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, NavigationHistoryComponent_div_0_Template, 15, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.data && ctx.table);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]],
      styles: [".center-img-background[_ngcontent-%COMP%]{\r\n     position: absolute;\r\n     height: auto;\r\n     width: auto;\r\n     width: 70%;\r\n     top : 50%;\r\n     left: 50%;\r\n     transform    : translate(-50%, -50%); \r\n     text-align: center;\r\n }\r\n \r\n img[_ngcontent-%COMP%] {\r\n     height: 450px  !important;\r\n     width: 60%  !important;\r\n     margin: 8px;\r\n     filter: blur(2px);\r\n     opacity: 0.65;\r\n     cursor: auto !important;\r\n     border-radius: 10%;\r\n     border: 3px solid white;\r\n     \r\n     \r\n   }\r\n \r\n .mat-header-cell[_ngcontent-%COMP%] {\r\n    color:white ; \r\n    font-weight: bold; \r\n    font-size: 18px; \r\n    background-color: #2b193E;\r\n   }\r\n \r\n .mat-cell[_ngcontent-%COMP%] {\r\n    color: black;\r\n    border-collapse: collapse;\r\n    font-size: 16px;\r\n    }\r\n \r\n table[_ngcontent-%COMP%]{\r\n     width: 40%  !important;\r\n     margin: 0 auto;   \r\n }\r\n \r\n .center-table[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 400px;\r\n    width: 70%;\r\n    top : 50%;\r\n    left: 50%;\r\n    transform    : translate(-50%, -50%); \r\n    text-align: center;\r\n    overflow: auto  !important;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmljay9uYXZpZ2F0aW9uLWhpc3RvcnkvbmF2aWdhdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Q0FFQztLQUNJLGtCQUFrQjtLQUNsQixZQUFZO0tBQ1osV0FBVztLQUNYLFVBQVU7S0FDVixTQUFTO0tBQ1QsU0FBUztLQUVULG9DQUFvQztLQUNwQyxrQkFBa0I7Q0FDdEI7O0NBRUE7S0FDSSx5QkFBeUI7S0FDekIsc0JBQXNCO0tBQ3RCLFdBQVc7S0FDWCxpQkFBaUI7S0FDakIsYUFBYTtLQUNiLHVCQUF1QjtLQUN2QixrQkFBa0I7S0FDbEIsdUJBQXVCOzs7R0FHekI7O0NBRUE7SUFDQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7R0FDMUI7O0NBRUE7SUFDQyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZjs7Q0FFSDtLQUNJLHNCQUFzQjtLQUN0QixjQUFjO0NBQ2xCOztDQUdBO0lBQ0csa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFFVCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL3JpY2svbmF2aWdhdGlvbi1oaXN0b3J5L25hdmlnYXRpb24taGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiBcclxuIC5jZW50ZXItaW1nLWJhY2tncm91bmR7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGhlaWdodDogYXV0bztcclxuICAgICB3aWR0aDogYXV0bztcclxuICAgICB3aWR0aDogNzAlO1xyXG4gICAgIHRvcCA6IDUwJTtcclxuICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgIHRyYW5zZm9ybSAgICA6IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiBpbWcge1xyXG4gICAgIGhlaWdodDogNDUwcHggICFpbXBvcnRhbnQ7XHJcbiAgICAgd2lkdGg6IDYwJSAgIWltcG9ydGFudDtcclxuICAgICBtYXJnaW46IDhweDtcclxuICAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxuICAgICBvcGFjaXR5OiAwLjY1O1xyXG4gICAgIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgICBcclxuICAgICBcclxuICAgfVxyXG5cclxuICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBjb2xvcjp3aGl0ZSA7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjE5M0U7XHJcbiAgIH1cclxuXHJcbiAgIC5tYXQtY2VsbCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gXHJcbiB0YWJsZXtcclxuICAgICB3aWR0aDogNDAlICAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbjogMCBhdXRvOyAgIFxyXG4gfVxyXG5cclxuICBcclxuIC5jZW50ZXItdGFibGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICB0b3AgOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm0gICAgOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8gICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gXHJcbiBcclxuICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](NavigationHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-navigation-history',
          templateUrl: './navigation-history.component.html',
          styleUrls: ['./navigation-history.component.css']
        }]
      }], function () {
        return [{
          type: _services_facade_rick_facade_service__WEBPACK_IMPORTED_MODULE_2__["RickFacadeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_facade_navigation_facade_service__WEBPACK_IMPORTED_MODULE_4__["NavigationFacadeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/services/facade/navigation-facade.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/rick/services/facade/navigation-facade.service.ts ***!
    \*******************************************************************/

  /*! exports provided: NavigationFacadeService */

  /***/
  function srcAppRickServicesFacadeNavigationFacadeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationFacadeService", function () {
      return NavigationFacadeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _swagger_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../swagger-generated */
    "./src/app/rick/services/swagger-generated/index.ts");

    var NavigationFacadeService = /*#__PURE__*/function () {
      function NavigationFacadeService(navigationService) {
        _classCallCheck(this, NavigationFacadeService);

        this.navigationService = navigationService;
      }

      _createClass(NavigationFacadeService, [{
        key: "getNavigationsByRickIdAsync",
        value: function getNavigationsByRickIdAsync(id) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            var successCallback = function successCallback(data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        resolve(data);

                      case 1:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
            };

            var errorCallback = function errorCallback(error) {
              return reject(error);
            };

            _this2.navigationService.navigationsRickIdGet(id).subscribe(successCallback, errorCallback);
          });
        }
      }, {
        key: "getLastNavigationByRickIdAsync",
        value: function getLastNavigationByRickIdAsync(id) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            var successCallback = function successCallback(data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        resolve(data);

                      case 1:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));
            };

            var errorCallback = function errorCallback(error) {
              return reject(error);
            };

            _this3.navigationService.lastNavigationRickIdGet(id).subscribe(successCallback, errorCallback);
          });
        }
      }, {
        key: "createNavigationAsync",
        value: function createNavigationAsync(rickNavigation) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            var successCallback = function successCallback(data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        resolve(data);

                      case 1:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));
            };

            var errorCallback = function errorCallback(error) {
              reject(error);
            };

            _this4.navigationService.createPost(rickNavigation).subscribe(successCallback, errorCallback);
          });
        }
      }]);

      return NavigationFacadeService;
    }();

    NavigationFacadeService.??fac = function NavigationFacadeService_Factory(t) {
      return new (t || NavigationFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_swagger_generated__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]));
    };

    NavigationFacadeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
      token: NavigationFacadeService,
      factory: NavigationFacadeService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](NavigationFacadeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _swagger_generated__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/services/facade/rick-facade.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/rick/services/facade/rick-facade.service.ts ***!
    \*************************************************************/

  /*! exports provided: RickFacadeService */

  /***/
  function srcAppRickServicesFacadeRickFacadeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RickFacadeService", function () {
      return RickFacadeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _swagger_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../swagger-generated */
    "./src/app/rick/services/swagger-generated/index.ts");

    var RickFacadeService = /*#__PURE__*/function () {
      function RickFacadeService(rickService) {
        _classCallCheck(this, RickFacadeService);

        this.rickService = rickService;
      }

      _createClass(RickFacadeService, [{
        key: "getByIdAsync",
        value: function getByIdAsync(id) {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            var successCallback = function successCallback(data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        resolve(data);

                      case 1:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));
            };

            var errorCallback = function errorCallback(error) {
              return reject(error);
            };

            _this5.rickService.detailsRickIdGet(id).subscribe(successCallback, errorCallback);
          });
        }
      }, {
        key: "getAllAsync",
        value: function getAllAsync() {
          var _this6 = this;

          return new Promise(function (resolve, reject) {
            var successCallback = function successCallback(data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        resolve(data);

                      case 1:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));
            };

            var errorCallback = function errorCallback(error) {
              return reject(error);
            };

            _this6.rickService.rickGet().subscribe(successCallback, errorCallback);
          });
        }
      }]);

      return RickFacadeService;
    }();

    RickFacadeService.??fac = function RickFacadeService_Factory(t) {
      return new (t || RickFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_swagger_generated__WEBPACK_IMPORTED_MODULE_2__["RickService"]));
    };

    RickFacadeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
      token: RickFacadeService,
      factory: RickFacadeService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](RickFacadeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _swagger_generated__WEBPACK_IMPORTED_MODULE_2__["RickService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/services/swagger-generated/api.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/rick/services/swagger-generated/api.module.ts ***!
    \***************************************************************/

  /*! exports provided: ApiModule */

  /***/
  function srcAppRickServicesSwaggerGeneratedApiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return ApiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/rick/services/swagger-generated/configuration.ts");
    /* harmony import */


    var _api_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api/navigation.service */
    "./src/app/rick/services/swagger-generated/api/navigation.service.ts");
    /* harmony import */


    var _api_rick_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api/rick.service */
    "./src/app/rick/services/swagger-generated/api/rick.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiModule = /*#__PURE__*/function () {
      function ApiModule(parentModule, http) {
        _classCallCheck(this, ApiModule);

        if (parentModule) {
          throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }

        if (!http) {
          throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
        }
      }

      _createClass(ApiModule, null, [{
        key: "forRoot",
        value: function forRoot(configurationFactory) {
          return {
            ngModule: ApiModule,
            providers: [{
              provide: _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"],
              useFactory: configurationFactory
            }]
          };
        }
      }]);

      return ApiModule;
    }();

    ApiModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ApiModule
    });
    ApiModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ApiModule_Factory(t) {
        return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], 8));
      },
      providers: [_api_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"], _api_rick_service__WEBPACK_IMPORTED_MODULE_3__["RickService"]],
      imports: [[]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [],
          declarations: [],
          exports: [],
          providers: [_api_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"], _api_rick_service__WEBPACK_IMPORTED_MODULE_3__["RickService"]]
        }]
      }], function () {
        return [{
          type: ApiModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/services/swagger-generated/api/api.ts":
  /*!************************************************************!*\
    !*** ./src/app/rick/services/swagger-generated/api/api.ts ***!
    \************************************************************/

  /*! exports provided: NavigationService, RickService, APIS */

  /***/
  function srcAppRickServicesSwaggerGeneratedApiApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return APIS;
    });
    /* harmony import */


    var _navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./navigation.service */
    "./src/app/rick/services/swagger-generated/api/navigation.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return _navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"];
    });
    /* harmony import */


    var _rick_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./rick.service */
    "./src/app/rick/services/swagger-generated/api/rick.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RickService", function () {
      return _rick_service__WEBPACK_IMPORTED_MODULE_1__["RickService"];
    });

    var APIS = [_navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"], _rick_service__WEBPACK_IMPORTED_MODULE_1__["RickService"]];
    /***/
  },

  /***/
  "./src/app/rick/services/swagger-generated/api/navigation.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/rick/services/swagger-generated/api/navigation.service.ts ***!
    \***************************************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcAppRickServicesSwaggerGeneratedApiNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../variables */
    "./src/app/rick/services/swagger-generated/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/rick/services/swagger-generated/configuration.ts");
    /**
     * RickLocalization
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var NavigationService = /*#__PURE__*/function () {
      function NavigationService(httpClient, basePath, configuration) {
        _classCallCheck(this, NavigationService);

        this.httpClient = httpClient;
        this.basePath = '/';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(NavigationService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator = _createForOfIteratorHelper(consumes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var consume = _step.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return false;
        }
      }, {
        key: "createPost",
        value: function createPost(body) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json', 'text/json', 'application/_*+json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/create"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "lastNavigationRickIdGet",
        value: function lastNavigationRickIdGet(rickId) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (rickId === null || rickId === undefined) {
            throw new Error('Required parameter rickId was null or undefined when calling lastNavigationRickIdGet.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/last-navigation/").concat(encodeURIComponent(String(rickId))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "navigationsRickIdGet",
        value: function navigationsRickIdGet(rickId) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (rickId === null || rickId === undefined) {
            throw new Error('Required parameter rickId was null or undefined when calling navigationsRickIdGet.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/navigations/").concat(encodeURIComponent(String(rickId))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return NavigationService;
    }();

    NavigationService.??fac = function NavigationService_Factory(t) {
      return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    NavigationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: NavigationService,
      factory: NavigationService.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/services/swagger-generated/api/rick.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/rick/services/swagger-generated/api/rick.service.ts ***!
    \*********************************************************************/

  /*! exports provided: RickService */

  /***/
  function srcAppRickServicesSwaggerGeneratedApiRickServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RickService", function () {
      return RickService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../variables */
    "./src/app/rick/services/swagger-generated/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/rick/services/swagger-generated/configuration.ts");
    /**
     * RickLocalization
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var RickService = /*#__PURE__*/function () {
      function RickService(httpClient, basePath, configuration) {
        _classCallCheck(this, RickService);

        this.httpClient = httpClient;
        this.basePath = '/';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(RickService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator2 = _createForOfIteratorHelper(consumes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var consume = _step2.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return false;
        }
      }, {
        key: "detailsRickIdGet",
        value: function detailsRickIdGet(rickId) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (rickId === null || rickId === undefined) {
            throw new Error('Required parameter rickId was null or undefined when calling detailsRickIdGet.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/details/").concat(encodeURIComponent(String(rickId))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "rickGet",
        value: function rickGet() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/rick"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return RickService;
    }();

    RickService.??fac = function RickService_Factory(t) {
      return new (t || RickService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    RickService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: RickService,
      factory: RickService.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RickService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rick/services/swagger-generated/configuration.ts":
  /*!******************************************************************!*\
    !*** ./src/app/rick/services/swagger-generated/configuration.ts ***!
    \******************************************************************/

  /*! exports provided: Configuration */

  /***/
  function srcAppRickServicesSwaggerGeneratedConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });

    var Configuration = /*#__PURE__*/function () {
      function Configuration() {
        var configurationParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Configuration);

        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
      }
      /**
       * Select the correct content-type to use for a request.
       * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
       * If no content type is found return the first found type if the contentTypes is not empty
       * @param contentTypes - the array of content types that are available for selection
       * @returns the selected content-type or <code>undefined</code> if no selection could be made.
       */


      _createClass(Configuration, [{
        key: "selectHeaderContentType",
        value: function selectHeaderContentType(contentTypes) {
          var _this7 = this;

          if (contentTypes.length == 0) {
            return undefined;
          }

          var type = contentTypes.find(function (x) {
            return _this7.isJsonMime(x);
          });

          if (type === undefined) {
            return contentTypes[0];
          }

          return type;
        }
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */

      }, {
        key: "selectHeaderAccept",
        value: function selectHeaderAccept(accepts) {
          var _this8 = this;

          if (accepts.length == 0) {
            return undefined;
          }

          var type = accepts.find(function (x) {
            return _this8.isJsonMime(x);
          });

          if (type === undefined) {
            return accepts[0];
          }

          return type;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */

      }, {
        key: "isJsonMime",
        value: function isJsonMime(mime) {
          var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
          return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
      }]);

      return Configuration;
    }();
    /***/

  },

  /***/
  "./src/app/rick/services/swagger-generated/index.ts":
  /*!**********************************************************!*\
    !*** ./src/app/rick/services/swagger-generated/index.ts ***!
    \**********************************************************/

  /*! exports provided: NavigationService, RickService, APIS, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */

  /***/
  function srcAppRickServicesSwaggerGeneratedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./api/api */
    "./src/app/rick/services/swagger-generated/api/api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["NavigationService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RickService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["RickService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"];
    });
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./variables */
    "./src/app/rick/services/swagger-generated/variables.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_FORMATS"];
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/rick/services/swagger-generated/configuration.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"];
    });
    /* harmony import */


    var _api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.module */
    "./src/app/rick/services/swagger-generated/api.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return _api_module__WEBPACK_IMPORTED_MODULE_3__["ApiModule"];
    });
    /***/

  },

  /***/
  "./src/app/rick/services/swagger-generated/variables.ts":
  /*!**************************************************************!*\
    !*** ./src/app/rick/services/swagger-generated/variables.ts ***!
    \**************************************************************/

  /*! exports provided: BASE_PATH, COLLECTION_FORMATS */

  /***/
  function srcAppRickServicesSwaggerGeneratedVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return BASE_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return COLLECTION_FORMATS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
    var COLLECTION_FORMATS = {
      'csv': ',',
      'tsv': '   ',
      'ssv': ' ',
      'pipes': '|'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Bruno\Documents\Teste\RickLocalization\frontend\rick-localization\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
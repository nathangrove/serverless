webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<md-card>\n  <md-card-title>Serverless</md-card-title> \n  <md-tab-group>\n    <md-tab label=\"Users\" routerLinkActive='active' routerLink=\"/admin/users\">Users</md-tab>\n    <md-tab label=\"Packages\" routerLinkActive='active' routerLink=\"/admin/packages\">Packages</md-tab>\n    <md-tab label=\"Calls\" routerLinkActive='active' routerLink=\"/users/calls\">Calls</md-tab>\n  </md-tab-group>\n</md-card>\n-->\n\n<div>\n  <md-toolbar color=\"primary\">\n    <span>Serve This!</span>\n    \n    <div class=\"pull-right\">\n      <button md-icon-button [md-menu-trigger-for]=\"menu\" *ngIf=\"authService.isLoggedIn()\">\n        <md-icon>more_vert</md-icon>\n      </button>\n    </div>\n    \n    <div class=\"clearfix\"></div>\n  </md-toolbar>\n  <md-menu x-position=\"before\" #menu=\"mdMenu\">\n    <button md-menu-item [routerLink]=\"['/calls']\" routeLinkAcitve=\"active\" >Calls</button>\n    <button md-menu-item *ngIf=\"authService.isAdmin()\" [routerLink]=\"['/admin/packages']\">Packages</button>\n    <button md-menu-item *ngIf=\"authService.isAdmin()\" [routerLink]=\"['/admin/users']\">Users</button>\n    <button md-menu-item (click)=\"authService.logout()\">Logout</button>\n  </md-menu>\n\n  <md-card>\n    <router-outlet></router-outlet>\n  </md-card>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_codemirror__ = __webpack_require__("../../../../ng2-codemirror/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_user_guard__ = __webpack_require__("../../../../../src/app/guards/user.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_client_service__ = __webpack_require__("../../../../../src/app/services/http-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_package_service__ = __webpack_require__("../../../../../src/app/services/package.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_call_service__ = __webpack_require__("../../../../../src/app/services/call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_package_package_list_package_list_component__ = __webpack_require__("../../../../../src/app/components/package/package-list/package-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_package_package_detail_package_detail_component__ = __webpack_require__("../../../../../src/app/components/package/package-detail/package-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_calls_call_list_call_list_component__ = __webpack_require__("../../../../../src/app/components/calls/call-list/call-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_calls_call_detail_call_detail_component__ = __webpack_require__("../../../../../src/app/components/calls/call-detail/call-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// routing

// authentication




// services



// components









var appRoutes = [
    {
        path: '',
        children: [
            {
                path: 'admin',
                children: [
                    { path: '', redirectTo: 'users', pathMatch: 'full' },
                    {
                        path: 'users',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_admin_guard__["a" /* AdminGuard */]],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_19__components_user_user_list_user_list_component__["a" /* UserListComponent */] },
                            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_20__components_user_user_detail_user_detail_component__["a" /* UserDetailComponent */] }
                        ]
                    }, {
                        path: 'packages',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_admin_guard__["a" /* AdminGuard */]],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_21__components_package_package_list_package_list_component__["a" /* PackageListComponent */] },
                            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_22__components_package_package_detail_package_detail_component__["a" /* PackageDetailComponent */] }
                        ]
                    }
                ]
            }, {
                path: 'user',
                children: [
                    { path: '', redirectTo: 'calls', pathMatch: 'full' },
                ]
            }
        ]
    }, {
        path: 'calls',
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_user_guard__["a" /* UserGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_23__components_calls_call_list_call_list_component__["a" /* CallListComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_24__components_calls_call_detail_call_detail_component__["a" /* CallDetailComponent */] }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_18__components_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '404' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_user_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_user_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_package_package_list_package_list_component__["a" /* PackageListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_package_package_detail_package_detail_component__["a" /* PackageDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_calls_call_list_call_list_component__["a" /* CallListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_calls_call_detail_call_detail_component__["a" /* CallDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_cdk__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_codemirror__["CodemirrorModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false, useHash: true } // <-- debugging purposes only
            )
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__guards_admin_guard__["a" /* AdminGuard */],
            __WEBPACK_IMPORTED_MODULE_10__guards_user_guard__["a" /* UserGuard */],
            __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__services_call_service__["a" /* CallService */],
            __WEBPACK_IMPORTED_MODULE_14__services_package_service__["a" /* PackageService */],
            __WEBPACK_IMPORTED_MODULE_12__services_http_client_service__["a" /* HttpClient */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/call.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Call; });
var Call = (function () {
    function Call(_id, runs, last, created, active, name, code) {
        if (_id === void 0) { _id = ''; }
        if (runs === void 0) { runs = 0; }
        if (last === void 0) { last = 0; }
        if (created === void 0) { created = new Date().getTime(); }
        if (active === void 0) { active = true; }
        if (name === void 0) { name = ''; }
        if (code === void 0) { code = ''; }
        this._id = _id;
        this.runs = runs;
        this.last = new Date(last);
        this.created = new Date(created);
        this.active = active;
        this.name = name;
        this.code = code;
    }
    /**
     * turn a call into a savable object
     */
    Call.prototype.toSaveObject = function () {
        var copy = {};
        if (this.code != '')
            copy.code = this.code;
        copy.name = this.name;
        copy.active = this.active;
        return copy;
    };
    return Call;
}());

//# sourceMappingURL=call.js.map

/***/ }),

/***/ "../../../../../src/app/classes/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pkg; });
var Pkg = (function () {
    function Pkg(id, name, version, created) {
        if (id === void 0) { id = ''; }
        if (name === void 0) { name = ''; }
        if (version === void 0) { version = ''; }
        if (created === void 0) { created = new Date().getTime(); }
        this._id = id;
        this.name = name;
        this.version = version;
        this.created = new Date(created);
    }
    Pkg.prototype.toSaveObject = function () {
        var pkg = {};
        pkg.name = this.name;
        pkg.version = this.version;
        return pkg;
    };
    return Pkg;
}());

//# sourceMappingURL=package.js.map

/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, username, active, created, admin) {
        if (id === void 0) { id = ''; }
        if (username === void 0) { username = ''; }
        if (active === void 0) { active = false; }
        if (created === void 0) { created = new Date().getTime(); }
        if (admin === void 0) { admin = false; }
        this._id = id;
        this.username = username;
        this.admin = admin;
        this.created = new Date(created);
        this.active = active;
    }
    User.prototype.toSaveobject = function () {
        var user = {};
        user.username = this.username;
        if (this.password)
            user.password = this.password;
        user.active = this.active;
        user.admin = this.admin;
        return user;
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/components/calls/call-detail/call-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n* @Author: Nathan Grove\n* @Date:   2017-07-13 22:02:10\n* @Last Modified by:   Nathan Grove\n* @Last Modified time: 2017-07-17 20:19:06\n*/\n.name-control {\n  width: 75%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calls/call-detail/call-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"call\">\n  \n  <md-card-title *ngIf=\"call._id == 'new'\">New System Call</md-card-title>\n  <md-card-title *ngIf=\"call._id != 'new'\">{{ 'System Call | ' + call.name }}</md-card-title>\n\n  <md-card-content>\n\n    <md-input-container class=\"name-control\">\n      <input mdInput placeholder=\"Name\" value=\"\" [(ngModel)]=\"call.name\">\n    </md-input-container>\n\n    <md-checkbox align=\"right\" [(ngModel)]=\"call.active\" class=\"pull-right\">Active</md-checkbox>\n\n    <codemirror [(ngModel)]=\"code\" *ngIf=\"call._id == 'new'\" [config]=\"codemirrorconfig\"></codemirror>\n\n    <md-input-container class=\"form-control\" *ngIf=\"call.encryptedCode\">\n      <p>Your encrypted code. Save this code. It <b>CANNOT</b> be retreived, only regenerated.</p>\n      <textarea mdInput name=\"Save this code. It cannot be retreived.\" id=\"\" cols=\"30\" rows=\"10\">{{ call.encryptedCode }}</textarea>\n    </md-input-container> \n\n    <md-card-actions>\n      <button md-raised-button color=\"primary\" class=\"pull-right\" (click)=\"save()\"><md-icon>done</md-icon> SAVE</button>\n    </md-card-actions>\n\n\n  </md-card-content>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/calls/call-detail/call-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_call_service__ = __webpack_require__("../../../../../src/app/services/call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_call__ = __webpack_require__("../../../../../src/app/classes/call.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CallDetailComponent = (function () {
    function CallDetailComponent(snackBar, callService, route, router) {
        this.snackBar = snackBar;
        this.callService = callService;
        this.route = route;
        this.router = router;
        this.code = 'module.exports = function(request,response){\n  \/\/Implement call response here.\n};';
        this.subs = [];
        this.codemirrorconfig = {
            mode: "javascript",
            theme: "monokai",
            lineNumbers: true,
            tabSize: 2
        };
    }
    CallDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // wait for a route param and the callservice to be ready
        this.subs.push(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].combineLatest(this.route.params, this.callService.dataChange, function (p, d) { return d.length > 0 ? p : false; }).subscribe(function (params) {
            if (!params)
                return;
            var id = params.id;
            if (id == 'new')
                _this.call = new __WEBPACK_IMPORTED_MODULE_6__classes_call__["a" /* Call */]('new');
            else
                _this.call = _this.callService.data.find(function (c) { return c._id == id; });
            if (!_this.call)
                _this.router.navigate(['/calls']);
        }));
    };
    CallDetailComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    CallDetailComponent.prototype.save = function () {
        var _this = this;
        if (this.call._id == 'new')
            this.call.code = this.code;
        this.callService.save(this.call).subscribe(function (encryptedCode) {
            if (encryptedCode.text() !== '')
                _this.call.encryptedCode = encryptedCode.text();
            else
                _this.router.navigate(['/calls']);
            _this.snackBar.open('The call has been saved.', 'Done');
        }, function (err) {
            _this.snackBar.open(err._body, 'Fix it');
        });
    };
    return CallDetailComponent;
}());
CallDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-call-detail',
        template: __webpack_require__("../../../../../src/app/components/calls/call-detail/call-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/calls/call-detail/call-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_call_service__["a" /* CallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_call_service__["a" /* CallService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CallDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=call-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/calls/call-list/call-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calls/call-list/call-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card-title>My API Calls</md-card-title>\n\n\n<md-card-content>\n\n \n  <div class=\"example-container mat-elevation-z8\">\n    <md-table #table [dataSource]=\"callService\">\n\n      <ng-container cdkColumnDef=\"name\">\n        <md-header-cell *cdkHeaderCellDef> Name </md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">{{ row.name }}</md-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"active\">\n        <md-header-cell *cdkHeaderCellDef> Active </md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">{{ row.active }}</md-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"runs\">\n        <md-header-cell *cdkHeaderCellDef> Runs </md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">{{ row.runs }}</md-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"last\">\n        <md-header-cell *cdkHeaderCellDef>Last Run</md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">{{ row.last.getTime() ? row.last.toLocaleString() : 'Never' }}</md-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"created\">\n        <md-header-cell *cdkHeaderCellDef>Created</md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">{{ row.created.toLocaleString() }}</md-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"actions\">\n        <md-header-cell *cdkHeaderCellDef></md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">\n          <a [routerLink]=\"['/calls',row._id]\"><md-icon>edit</md-icon></a>\n          <a (click)=\"callService.delete(row._id)\"><md-icon>delete</md-icon></a>\n        </md-cell>>\n      </ng-container>\n\n      <md-header-row *cdkHeaderRowDef=\"['name','active','runs','last','created','actions']\"></md-header-row>\n      <md-row *cdkRowDef=\"let row; columns: ['name','active','runs','last','created','actions'];\"></md-row>\n    </md-table>\n  </div>\n\n  <md-card-actions>\n    <button class='pull-right' md-fab md-raised-button [routerLink]=\"['/calls/new']\"><md-icon>add</md-icon></button>\n    <div class=\"clearfix\"></div>\n  </md-card-actions>\n\n</md-card-content>\n"

/***/ }),

/***/ "../../../../../src/app/components/calls/call-list/call-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_call_service__ = __webpack_require__("../../../../../src/app/services/call.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallListComponent = (function () {
    function CallListComponent(callService) {
        this.callService = callService;
    }
    CallListComponent.prototype.ngOnInit = function () {
        this.callService.get();
    };
    return CallListComponent;
}());
CallListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-call-list',
        template: __webpack_require__("../../../../../src/app/components/calls/call-list/call-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/calls/call-list/call-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_call_service__["a" /* CallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_call_service__["a" /* CallService */]) === "function" && _a || Object])
], CallListComponent);

var _a;
//# sourceMappingURL=call-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Login</md-card-title>\n  <md-input-container>\n    <input mdInput placeholder=\"Username\" [(ngModel)]=\"username\">\n  </md-input-container>\n  <md-input-container>\n    <input mdInput placeholder=\"Password\" type='password' [(ngModel)]=\"password\">\n  </md-input-container>\n  <button md-raised-button (click)=\"login()\">Login</button>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, authService, http) {
        this.router = router;
        this.authService = authService;
        this.http = http;
        this.username = '';
        this.password = '';
        this.error = '';
        if (this.authService.isLoggedIn())
            this.router.navigate(['/']);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/login", { username: this.username, password: this.password }).subscribe(function (response) {
            var result = response.json();
            if (!result.token)
                _this.error = response.toString();
            else {
                _this.error = '';
                localStorage.setItem('token', result.token);
                localStorage.setItem('profile', atob(result.token.split('.')[1]));
                _this.router.navigate(['/']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <h1>Not Found</h1>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/components/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/package/package-detail/package-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/package/package-detail/package-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pkg\">\n  \n  <md-card-title *ngIf=\"pkg._id == 'new'\">Install new NPM package</md-card-title>\n  <md-card-title *ngIf=\"pkg._id != 'new'\">{{ 'NPM Package | ' + pkg.name }}</md-card-title>\n\n  <md-card-content>\n\n    <md-input-container class=\"form-control\">\n      <input mdInput placeholder=\"Name\" value=\"\" [(ngModel)]=\"pkg.name\">\n    </md-input-container>\n\n    <md-input-container class=\"form-control\">\n      <input mdInput placeholder=\"Version\" value=\"\" [(ngModel)]=\"pkg.version\">\n    </md-input-container>\n\n\n    <md-card-actions>\n      <button md-raised-button color=\"primary\" class=\"pull-right\" (click)=\"save()\"><md-icon>done</md-icon> SAVE</button>\n    </md-card-actions>\n\n\n  </md-card-content>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/package/package-detail/package-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_package_service__ = __webpack_require__("../../../../../src/app/services/package.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_package__ = __webpack_require__("../../../../../src/app/classes/package.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PackageDetailComponent = (function () {
    function PackageDetailComponent(snackBar, packageService, route, router) {
        this.snackBar = snackBar;
        this.packageService = packageService;
        this.route = route;
        this.router = router;
        this.subs = [];
    }
    PackageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // wait for a route param and the packageservice to be ready
        this.subs.push(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].combineLatest(this.route.params, this.packageService.dataChange, function (p, d) { return d.length > 0 ? p : false; }).subscribe(function (params) {
            if (!params)
                return;
            var id = params.id;
            if (id == 'new')
                _this.pkg = new __WEBPACK_IMPORTED_MODULE_6__classes_package__["a" /* Pkg */]('new');
            else
                _this.pkg = _this.packageService.data.find(function (c) { return c._id == id; });
            if (!_this.pkg)
                _this.router.navigate(['/admin/packages']);
        }));
    };
    PackageDetailComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    PackageDetailComponent.prototype.save = function () {
        var _this = this;
        this.packageService.save(this.pkg).subscribe(function (pkg) {
            _this.router.navigate(['/packages']);
            _this.snackBar.open('The package has been saved.', 'Done');
        }, function (err) {
            _this.snackBar.open(err._body, 'Fix it');
        });
    };
    return PackageDetailComponent;
}());
PackageDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-package-detail',
        template: __webpack_require__("../../../../../src/app/components/package/package-detail/package-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/package/package-detail/package-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_package_service__["a" /* PackageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_package_service__["a" /* PackageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PackageDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=package-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/package/package-list/package-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/package/package-list/package-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card-title>Installed NPM Packages</md-card-title>\n\n\n<div class=\"example-container mat-elevation-z8\">\n  <md-table #table [dataSource]=\"packageService\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Progress Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <md-header-cell *cdkHeaderCellDef> Name </md-header-cell>\n      <md-cell *cdkCellDef=\"let row\">{{ row.name }}</md-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"version\">\n      <md-header-cell *cdkHeaderCellDef> Version </md-header-cell>\n      <md-cell *cdkCellDef=\"let row\">{{ row.version }}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"created\">\n      <md-header-cell *cdkHeaderCellDef>Created</md-header-cell>\n      <md-cell *cdkCellDef=\"let row\">{{ row.created.toLocaleString() }}</md-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"actions\">\n      <md-header-cell *cdkHeaderCellDef></md-header-cell>\n      <md-cell *cdkCellDef=\"let row\">\n        <a [routerLink]=\"['/admin/packages',row._id]\"><md-icon>edit</md-icon></a>\n        <a (click)=\"packageService.delete(row._id)\"><md-icon>delete</md-icon></a>\n      </md-cell>>\n    </ng-container>\n\n    <md-header-row *cdkHeaderRowDef=\"['name','version','created','actions']\"></md-header-row>\n    <md-row *cdkRowDef=\"let row; columns: ['name','version','created','actions'];\"></md-row>\n  </md-table>\n</div>\n\n<md-card-actions>\n  <button class='pull-right' md-fab md-raised-button [routerLink]=\"['/admin/packages/new']\"><md-icon>add</md-icon></button>\n  <div class=\"clearfix\"></div>\n</md-card-actions>\n"

/***/ }),

/***/ "../../../../../src/app/components/package/package-list/package-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_package_service__ = __webpack_require__("../../../../../src/app/services/package.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageListComponent = (function () {
    function PackageListComponent(packageService) {
        this.packageService = packageService;
    }
    PackageListComponent.prototype.ngOnInit = function () {
        this.packageService.get();
    };
    return PackageListComponent;
}());
PackageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-package-list',
        template: __webpack_require__("../../../../../src/app/components/package/package-list/package-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/package/package-list/package-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_package_service__["a" /* PackageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_package_service__["a" /* PackageService */]) === "function" && _a || Object])
], PackageListComponent);

var _a;
//# sourceMappingURL=package-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  \n  <md-card-title *ngIf=\"user._id == 'new'\">New System User</md-card-title>\n  <md-card-title *ngIf=\"user._id != 'new'\">{{ 'System User | ' + user.username }}</md-card-title>\n\n  <md-card-content>\n\n    <md-input-container class=\"form-control\">\n      <input mdInput placeholder=\"Username\" value=\"\" [(ngModel)]=\"user.username\">\n    </md-input-container>\n\n    <md-input-container class=\"form-control\">\n      <input mdInput placeholder=\"Password\" value=\"\" type='password' [(ngModel)]=\"user.password\">\n    </md-input-container>\n\n\n    <md-checkbox align=\"left\" [(ngModel)]=\"user.active\" class=\"\">Active</md-checkbox><br/>\n    <md-checkbox align=\"left\" [(ngModel)]=\"user.admin\" class=\"\">Admin</md-checkbox>\n\n    <md-card-actions>\n      <button md-raised-button color=\"primary\" class=\"pull-right\" (click)=\"save()\"><md-icon>done</md-icon> SAVE</button>\n    </md-card-actions>\n\n\n  </md-card-content>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserDetailComponent = (function () {
    function UserDetailComponent(snackBar, userService, route, router) {
        this.snackBar = snackBar;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.subs = [];
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // wait for a route param and the userservice to be ready
        this.subs.push(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].combineLatest(this.route.params, this.userService.dataChange, function (p, d) { return d.length > 0 ? p : false; }).subscribe(function (params) {
            if (!params)
                return;
            var id = params.id;
            if (id == 'new')
                _this.user = new __WEBPACK_IMPORTED_MODULE_6__classes_user__["a" /* User */]('new', '', true);
            else
                _this.user = _this.userService.data.find(function (c) { return c._id == id; });
            if (!_this.user)
                _this.router.navigate(['/admin/users']);
        }));
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        this.userService.save(this.user).subscribe(function (user) {
            _this.router.navigate(['/users']);
            _this.snackBar.open('The user has been saved.', 'Done');
        }, function (err) {
            _this.snackBar.open(err._body, 'Fix it');
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-detail',
        template: __webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], UserDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card-title>System Users</md-card-title>\n\n<md-card-content>\n\n  <div class=\"example-container mat-elevation-z8\">\n    <md-table #table [dataSource]=\"userService\">\n\n      <ng-container cdkColumnDef=\"username\">\n        <md-header-cell *cdkHeaderCellDef> Username </md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">{{ row.username }}</md-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"active\">\n        <md-header-cell *cdkHeaderCellDef> Active </md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">{{ row.active }}</md-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"admin\">\n        <md-header-cell *cdkHeaderCellDef> Admin </md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">{{ row.admin }}</md-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"create\">\n        <md-header-cell *cdkHeaderCellDef>Created</md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">{{ row.created.toLocaleString() }}</md-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"actions\">\n        <md-header-cell *cdkHeaderCellDef></md-header-cell>\n        <md-cell *cdkCellDef=\"let row\">\n          <a [routerLink]=\"['/admin/users',row._id]\"><md-icon>edit</md-icon></a>\n          <a (click)=\"userService.delete(row._id)\"><md-icon>delete</md-icon></a>\n        </md-cell>>\n      </ng-container>\n\n      <md-header-row *cdkHeaderRowDef=\"['username','active','admin','create','actions']\"></md-header-row>\n      <md-row *cdkRowDef=\"let row; columns: ['username','active','admin','create','actions'];\"></md-row>\n    </md-table>\n  </div>\n\n  <md-card-actions>\n    <button class='pull-right' md-fab md-raised-button [routerLink]=\"['/admin/users/new']\"><md-icon>add</md-icon></button>\n    <div class=\"clearfix\"></div>\n  </md-card-actions>\n\n\n</md-card-content>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.userService.get();
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/*
* @Author: Nathan Grove
* @Date:   2017-07-13 21:43:08
* @Last Modified by:   Nathan Grove
* @Last Modified time: 2017-07-13 22:42:35
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = (function () {
    function AdminGuard(authService) {
        this.authService = authService;
    }
    AdminGuard.prototype.canActivate = function () {
        return this.authService.isLoggedIn() && this.authService.isAdmin();
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AdminGuard);

var _a;
//# sourceMappingURL=admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/user.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGuard; });
/*
* @Author: Nathan Grove
* @Date:   2017-07-13 21:43:08
* @Last Modified by:   Nathan Grove
* @Last Modified time: 2017-07-13 23:38:05
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGuard = (function () {
    function UserGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserGuard.prototype.canActivate = function () {
        console.log("user authservice");
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
        }
    };
    UserGuard.prototype.canDeactivate = function () {
        return this.authService.isLoggedIn();
    };
    return UserGuard;
}());
UserGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserGuard);

var _a, _b;
//# sourceMappingURL=user.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.getProfile = function () {
        var profile = localStorage.getItem('profile');
        if (profile)
            profile = JSON.parse(profile);
        return profile;
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getProfile() ? true : false;
    };
    AuthService.prototype.isAdmin = function () {
        var profile = this.getProfile();
        return (profile && profile['admin']) ? true : false;
    };
    AuthService.prototype.logout = function () {
        delete localStorage['profile'];
        this.router.navigate(['login']);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/call.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_client_service__ = __webpack_require__("../../../../../src/app/services/http-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_call__ = __webpack_require__("../../../../../src/app/classes/call.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CallService = (function () {
    function CallService(http) {
        this.http = http;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.get();
    }
    // implement the connect method for cdk
    CallService.prototype.connect = function () { return this.dataChange; };
    // implement disconnect for cdk - no-op
    CallService.prototype.disconnect = function () { return; };
    CallService.prototype.get = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/mycalls").subscribe(function (res) {
            var calls = res.json().map(function (c) { return new __WEBPACK_IMPORTED_MODULE_2__classes_call__["a" /* Call */](c._id, c.runs, c.last, c.created, c.active, c.name); }).sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.data = calls;
            _this.dataChange.next(calls);
        });
    };
    CallService.prototype.save = function (call) {
        if (call._id == 'new') {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/mycalls", call.toSaveObject());
        }
        else {
            return this.http.put(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/mycalls/" + call._id, call.toSaveObject());
        }
    };
    CallService.prototype.delete = function (_id) {
        var _this = this;
        this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/mycalls/" + _id).subscribe(function () { return _this.get(); });
    };
    return CallService;
}());
CallService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_client_service__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_client_service__["a" /* HttpClient */]) === "function" && _a || Object])
], CallService);

var _a;
//# sourceMappingURL=call.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClient = (function () {
    function HttpClient(http) {
        this.http = http;
    }
    HttpClient.prototype.request = function (url, options) {
        return this.http.request(url, options);
    };
    HttpClient.prototype.get = function (url, options) {
        return this.http.get(url, this.getRequestOptionArgs(options));
    };
    HttpClient.prototype.post = function (url, body, options) {
        return this.http.post(url, body, this.getRequestOptionArgs(options));
    };
    HttpClient.prototype.put = function (url, body, options) {
        return this.http.put(url, body, this.getRequestOptionArgs(options));
    };
    HttpClient.prototype.delete = function (url, options) {
        return this.http.delete(url, this.getRequestOptionArgs(options));
    };
    HttpClient.prototype.getRequestOptionArgs = function (options) {
        if (options == null)
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
        if (options.headers == null)
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', "Bearer " + localStorage['token']);
        return options;
    };
    return HttpClient;
}());
HttpClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HttpClient);

var _a;
//# sourceMappingURL=http-client.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/package.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_client_service__ = __webpack_require__("../../../../../src/app/services/http-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_package__ = __webpack_require__("../../../../../src/app/classes/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PackageService = (function () {
    function PackageService(http) {
        this.http = http;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.get();
    }
    // implement the connect method for cdk
    PackageService.prototype.connect = function () { return this.dataChange; };
    // implement disconnect for cdk - no-op
    PackageService.prototype.disconnect = function () { return; };
    PackageService.prototype.get = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/packages").subscribe(function (res) {
            var packages = res.json().map(function (pkg) { return new __WEBPACK_IMPORTED_MODULE_2__classes_package__["a" /* Pkg */](pkg._id, pkg.name, pkg.version, pkg.created); }).sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.data = packages;
            _this.dataChange.next(packages);
        });
    };
    PackageService.prototype.save = function (pkg) {
        var saveable = pkg.toSaveObject();
        if (pkg._id == 'new') {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/packages", saveable);
        }
        else {
            return this.http.put(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/packages/" + pkg._id, saveable);
        }
    };
    PackageService.prototype.delete = function (_id) {
        var _this = this;
        this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/packages/" + _id).subscribe(function () { return _this.get(); });
    };
    return PackageService;
}());
PackageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_client_service__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_client_service__["a" /* HttpClient */]) === "function" && _a || Object])
], PackageService);

var _a;
//# sourceMappingURL=package.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_client_service__ = __webpack_require__("../../../../../src/app/services/http-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.get();
    }
    // implement the connect method for cdk
    UserService.prototype.connect = function () { return this.dataChange; };
    // implement disconnect for cdk - no-op
    UserService.prototype.disconnect = function () { return; };
    UserService.prototype.get = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/users").subscribe(function (res) {
            var users = res.json().map(function (user) { return new __WEBPACK_IMPORTED_MODULE_2__classes_user__["a" /* User */](user._id, user.username, user.active, user.created, user.admin); }).sort(function (a, b) {
                if (a.username < b.username)
                    return -1;
                if (a.username > b.username)
                    return 1;
                return 0;
            });
            _this.data = users;
            _this.dataChange.next(users);
        });
    };
    UserService.prototype.save = function (user) {
        var saveable = user.toSaveObject();
        if (user._id == 'new') {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/users", saveable);
        }
        else {
            return this.http.put(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/users/" + user._id, saveable);
        }
    };
    UserService.prototype.delete = function (_id) {
        var _this = this;
        this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api + "/users/" + _id).subscribe(function () { return _this.get(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_client_service__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_client_service__["a" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    api: 'https://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
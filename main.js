(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin {\r\n    margin-left:auto; \r\n    margin-right: auto;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container w3-padding-large margin\" style=\"width:75%;\">\r\n\r\n    <app-timeline></app-timeline>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n  }\r\n  \r\n  a {\r\n    color: blue;\r\n    transition: color .2s ease-in-out;\r\n  }\r\n  \r\n  a.active {\r\n    color: darkblue;\r\n    background-color: #ffffff;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container1\">\n  <div class=\"navbar\">\n  <app-nav></app-nav>\n</div>\n<div class=\"main\">\n    <sn-scroll-spy-section id=\"section1\" for=\"foo\" class=\"bg-1\">\n      <div background=\"#b2ebf2\">\n      <app-main-area></app-main-area>\n      </div>\n    </sn-scroll-spy-section>\n    <sn-scroll-spy-section id=\"section2\" for=\"foo\" class=\"bg-2\">\n       <app-about></app-about>\n    </sn-scroll-spy-section>\n    <sn-scroll-spy-section id=\"section3\" for=\"foo\" class=\"bg-3\">\n      <app-contact></app-contact>\n    </sn-scroll-spy-section>\n    <sn-scroll-spy-section id=\"section4\" for=\"foo\" class=\"bg-1\">\n        <app-skills></app-skills>\n      </sn-scroll-spy-section>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _main_area_main_area_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-area/main-area.component */ "./src/app/main-area/main-area.component.ts");
/* harmony import */ var _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @thisissoon/angular-inviewport */ "./node_modules/@thisissoon/angular-inviewport/esm5/thisissoon-angular-inviewport.js");
/* harmony import */ var _thisissoon_angular_scrollspy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @thisissoon/angular-scrollspy */ "./node_modules/@thisissoon/angular-scrollspy/fesm5/thisissoon-angular-scrollspy.js");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var getWindow = function () { return window; };
var providers = [{ provide: _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_9__["WindowRef"], useFactory: getWindow }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _main_area_main_area_component__WEBPACK_IMPORTED_MODULE_8__["MainAreaComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_9__["InViewportModule"].forRoot(providers),
                _thisissoon_angular_scrollspy__WEBPACK_IMPORTED_MODULE_10__["ScrollSpyModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container margin\" style=\"width:75%\">\n  <section>\n  \n  <h1>Contact Info</h1>\n  <div>My email address is: katyapesh@gmail.com </div>\n  <br>\n  <br>\n  <br>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/main-area/main-area.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-area/main-area.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 500px;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.title {\r\n    color: grey;\r\n    font-size: 18px;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.img {\r\n padding: 10px !important;\r\n}\r\n\r\n.btnMargin {\r\n  margin: 5px;\r\n}\r\n\r\n.content {\r\n    height: 900px;\r\n    margin-top: 20px;\r\n}\r\n\r\nsection {\r\n    background-image: url('galaxy.jpg');\r\n}"

/***/ }),

/***/ "./src/app/main-area/main-area.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-area/main-area.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"content margin\">\n    <div class=\"card\">\n      <img src=\"assets\\images\\profilepic.jpg\" alt=\"Katya\" class=\"img w3-hover-opacity\" style=\"width:100%\">\n      <h1>Katya Peshkov</h1>\n      <p class=\"title\">Full Stack Developer</p>\n      <p>Bar-Ilan University</p>\n    <div>\n      <a href=\"#\"><i class=\"fa fa-github btnMargin\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"GitHub\"></i></a>\n      <a href=\"https://www.linkedin.com/in/katya-peshkov-8340b68b/\"><i class=\"fa fa-linkedin btnMargin\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"></i></a>\n      <a href=\"mailto:katyapesh@gmail.com\"><i class=\"fa fa-envelope btnMargin\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Email\"></i></a>\n    </div>\n      <!-- <p><button>Contact</button></p> -->\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/main-area/main-area.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-area/main-area.component.ts ***!
  \**************************************************/
/*! exports provided: MainAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAreaComponent", function() { return MainAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainAreaComponent = /** @class */ (function () {
    function MainAreaComponent() {
    }
    MainAreaComponent.prototype.ngOnInit = function () {
    };
    MainAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-area',
            template: __webpack_require__(/*! ./main-area.component.html */ "./src/app/main-area/main-area.component.html"),
            styles: [__webpack_require__(/*! ./main-area.component.css */ "./src/app/main-area/main-area.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainAreaComponent);
    return MainAreaComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-mobile\">\n<ul role=\"navigation\" snScrollSpy id=\"foo\">\n  <li>\n    <!-- <a snScrollSpyItem for=\"foo\" href=\"#section1\" routerLink=\"/\">Home</a> -->\n    <a snScrollSpyItem for=\"foo\" href=\"#section1\">Home</a>\n\n  </li>\n  <li>\n    <!-- <a snScrollSpyItem for=\"foo\" href=\"#section2\" routerLink=\"/about\">About</a> -->\n    <a snScrollSpyItem for=\"foo\" href=\"#section2\" >Experience</a>\n\n  </li>\n  <li>\n    <!-- <a snScrollSpyItem for=\"foo\" href=\"#section3\" routerLink='/contact'>Contact</a> -->\n      <a snScrollSpyItem for=\"foo\" href=\"#section3\">Contact</a>\n  </li>\n\n  <li>\n      <!-- <a snScrollSpyItem for=\"foo\" href=\"#section3\" routerLink='/contact'>Contact</a> -->\n        <a snScrollSpyItem for=\"foo\" href=\"#section4\">Skills</a>\n    </li>\n</ul>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}\r\n\r\n/* section {\r\n    background-image: url(\"..\\..\\assets\\images\\galaxy2.jpg\");\r\n    background-color: grey;\r\n    opacity: 0.5;\r\n} */"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n<div class=\"w3-container margin\" style=\"width:75%\">\n \n    <h1>Skills</h1>\n      <div>\n          <div class=\"w3-light-grey w3-round\">\n              <div class=\"w3-container w3-round w3-blue\" style=\"width:90%\">C#</div>\n            </div>\n            <br>\n            <div class=\"w3-light-grey w3-round\">\n                <div class=\"w3-container w3-round w3-blue\" style=\"width:80%\">SQL</div>\n              </div>\n              <br>\n              <div class=\"w3-light-grey w3-round\">\n                  <div class=\"w3-container w3-round w3-blue\" style=\"width:95%\">HTML</div>\n                </div>\n                <br>\n                <div class=\"w3-light-grey w3-round\">\n                    <div class=\"w3-container w3-round w3-blue\" style=\"width:60%\">CSS</div>\n                  </div>\n                  <br>\n                  <div class=\"w3-light-grey w3-round\">\n                      <div class=\"w3-container w3-round w3-blue\" style=\"width:70%\">JavaScript</div>\n                    </div>\n                    <br>\n                    <div class=\"w3-light-grey w3-round\">\n                        <div class=\"w3-container w3-round w3-blue\" style=\"width:30%\">Angular</div>\n                      </div>\n                      <br>\n\n      </div>\n \n</div>\n</section>"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.css":
/*!*************************************************!*\
  !*** ./src/app/timeline/timeline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\r\n    list-style: none;\r\n    padding: 20px 0 20px;\r\n    position: relative;\r\n}\r\n\r\n    .timeline:before {\r\n        top: 0;\r\n        bottom: 0;\r\n        position: absolute;\r\n        content: \" \";\r\n        width: 3px;\r\n        background-color: #eeeeee;\r\n        left: 50%;\r\n        margin-left: -1.5px;\r\n    }\r\n\r\n    .timeline > li {\r\n        margin-bottom: 20px;\r\n        position: relative;\r\n    }\r\n\r\n    .timeline > li:before,\r\n        .timeline > li:after {\r\n            content: \" \";\r\n            display: table;\r\n        }\r\n\r\n    .timeline > li:after {\r\n            clear: both;\r\n        }\r\n\r\n    .timeline > li:before,\r\n        .timeline > li:after {\r\n            content: \" \";\r\n            display: table;\r\n        }\r\n\r\n    .timeline > li:after {\r\n            clear: both;\r\n        }\r\n\r\n    .timeline > li > .timeline-panel {\r\n            width: 46%;\r\n            float: left;\r\n            border: 1px solid #d4d4d4;\r\n            border-radius: 2px;\r\n            padding: 20px;\r\n            position: relative;\r\n            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n        }\r\n\r\n    .timeline > li > .timeline-panel:before {\r\n                position: absolute;\r\n                top: 26px;\r\n                right: -15px;\r\n                display: inline-block;\r\n                border-top: 15px solid transparent;\r\n                border-left: 15px solid #ccc;\r\n                border-right: 0 solid #ccc;\r\n                border-bottom: 15px solid transparent;\r\n                content: \" \";\r\n            }\r\n\r\n    .timeline > li > .timeline-panel:after {\r\n                position: absolute;\r\n                top: 27px;\r\n                right: -14px;\r\n                display: inline-block;\r\n                border-top: 14px solid transparent;\r\n                border-left: 14px solid #fff;\r\n                border-right: 0 solid #fff;\r\n                border-bottom: 14px solid transparent;\r\n                content: \" \";\r\n            }\r\n\r\n    .timeline > li > .timeline-badge {\r\n            color: #fff;\r\n            width: 50px;\r\n            height: 50px;\r\n            line-height: 50px;\r\n            font-size: 1.4em;\r\n            text-align: center;\r\n            position: absolute;\r\n            top: 16px;\r\n            left: 50%;\r\n            margin-left: -25px;\r\n            background-color: #999999;\r\n            z-index: 100;\r\n            border-top-right-radius: 50%;\r\n            border-top-left-radius: 50%;\r\n            border-bottom-right-radius: 50%;\r\n            border-bottom-left-radius: 50%;\r\n        }\r\n\r\n    .timeline > li.timeline-inverted > .timeline-panel {\r\n            float: right;\r\n        }\r\n\r\n    .timeline > li.timeline-inverted > .timeline-panel:before {\r\n                border-left-width: 0;\r\n                border-right-width: 15px;\r\n                left: -15px;\r\n                right: auto;\r\n            }\r\n\r\n    .timeline > li.timeline-inverted > .timeline-panel:after {\r\n                border-left-width: 0;\r\n                border-right-width: 14px;\r\n                left: -14px;\r\n                right: auto;\r\n            }\r\n\r\n    .timeline-badge.primary {\r\n    background-color: #2e6da4 !important;\r\n}\r\n\r\n    .timeline-badge.success {\r\n    background-color: #3f903f !important;\r\n}\r\n\r\n    .timeline-badge.warning {\r\n    background-color: #f0ad4e !important;\r\n}\r\n\r\n    .timeline-badge.danger {\r\n    background-color: #d9534f !important;\r\n}\r\n\r\n    .timeline-badge.info {\r\n    background-color: #5bc0de !important;\r\n}\r\n\r\n    .timeline-title {\r\n    margin-top: 0;\r\n    color: inherit;\r\n}\r\n\r\n    .timeline-body > p,\r\n.timeline-body > ul {\r\n    margin-bottom: 0;\r\n}\r\n\r\n    .timeline-body > p + p {\r\n        margin-top: 5px;\r\n    }\r\n\r\n    @media (max-width: 767px) {\r\n    ul.timeline:before {\r\n        left: 40px;\r\n    }\r\n\r\n    ul.timeline > li > .timeline-panel {\r\n        width: calc(100% - 90px);\r\n        width: -webkit-calc(100% - 90px);\r\n    }\r\n\r\n    ul.timeline > li > .timeline-badge {\r\n        left: 15px;\r\n        margin-left: 0;\r\n        top: 16px;\r\n    }\r\n\r\n    ul.timeline > li > .timeline-panel {\r\n        float: right;\r\n    }\r\n\r\n        ul.timeline > li > .timeline-panel:before {\r\n            border-left-width: 0;\r\n            border-right-width: 15px;\r\n            left: -15px;\r\n            right: auto;\r\n        }\r\n\r\n        ul.timeline > li > .timeline-panel:after {\r\n            border-left-width: 0;\r\n            border-right-width: 14px;\r\n            left: -14px;\r\n            right: auto;\r\n        }\r\n}\r\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <div class=\"page-header\">\n      <h1 id=\"timeline\">Experience</h1>\n  </div>\n  <ul class=\"timeline\">\n      <li>\n        <div class=\"timeline-badge\"><i class=\"fa fa-code\"></i></div>\n        <div class=\"timeline-panel\">\n          <div class=\"timeline-heading\">\n            <h4 class=\"timeline-title\">Full Stack Developer</h4>\n            <p><small class=\"text-muted\"><i class=\"glyphicon glyphicon-time\"></i>Britannica Knowledge Systems - 2017 – Present</small></p>\n          </div>\n          <div class=\"timeline-body\">\n            <b>Part of a team that develops the Optimization Scheduling Tool of Britannica's Fox system.</b>\n            <br>\n          <li>\n            <ul>* Developing new features for a large-scale web-based application with ASP.NET web forms in C#.</ul>\n            <ul>* Maintaining dynamic web pages using JavaScript, JQuery, AJAX, CSS, HTML.</ul>\n            <ul>* Working with relational database MS SQL, writing procedures and queries.</ul>\n            <ul>* Supporting multi-threaded processes.</ul>\n            <ul>* Working in an agile environment (sprints), with the ability to work under pressure and prioritize tasks.</ul>\n          </li>\n          </div>\n        </div>\n      </li>\n      <li class=\"timeline-inverted\">\n        <div class=\"timeline-badge warning\"><i class=\"fa fa-laptop\"></i></div>\n        <div class=\"timeline-panel\">\n          <div class=\"timeline-heading\">\n            <h4 class=\"timeline-title\">Automation Developer</h4>\n            <p><small class=\"text-muted\"><i class=\"glyphicon glyphicon-time\"></i>Britannica Knowledge Systems - 2016 – 2017</small></p>\n          </div>\n          <div class=\"timeline-body\">\n            <b>A part of a team that was responsible for developing the automation's project infrastructure from scratch.</b>\n            <br>\n          <li>\n            <ul>* Designing tests using Object Oriented Programming concepts.</ul>\n            <ul>* Developing automated tests using Selenium in C# language.</ul>\n            <ul>* Maintenance of continuous integration: tracking regression bugs as well as handling automation bugs.</ul>\n            <ul>* Adjustment and improvement of the tests to fit multiple application versions.</ul>\n            <ul>* Verifications of tests using UI and DB validations.</ul>\n          </li>\n          </div>\n        </div>\n      </li>\n      <li>\n        <div class=\"timeline-badge danger\"><i class=\"fa fa-bug\"></i></div>\n        <div class=\"timeline-panel\">\n          <div class=\"timeline-heading\">\n            <h4 class=\"timeline-title\">QA Tester</h4>\n            <p><small class=\"text-muted\"><i class=\"glyphicon glyphicon-time\"></i>Britannica Knowledge Systems - 2015 – 2016</small></p>\n          </div>\n          <div class=\"timeline-body\">\n            <b>Manual tester of a web application.</b>\n            <br>\n          <li>\n            <ul>* Writing and executing test scenarios in a large-scale system.</ul>\n            <ul>* Using JIRA for bug reporting, planning test cycles and managing tasks.</ul>\n            <ul>* Executing sanity and regression tests.</ul>\n            <ul>* Working in an agile development environment.</ul>\n          </li>\n          </div>\n        </div>\n      </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(http) {
        this.http = http;
        this.url = 'http://webapikatya20180706120053.azurewebsites.net/api/Cv/';
        this.cvInfo = [];
    }
    TimelineComponent.prototype.ngOnInit = function () {
        // this.getCvInfo();
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\almog\Documents\newWebsite\KatyaWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
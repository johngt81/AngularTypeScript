"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _dashboard_1 = require('./+dashboard');
var router_1 = require('@angular/router');
var shared_1 = require('./shared');
var Angular2ProjectAppComponent = (function () {
    function Angular2ProjectAppComponent() {
        this.title = 'angular2-project works!';
    }
    Angular2ProjectAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular2-project-app',
            templateUrl: 'angular2-project.component.html',
            styleUrls: ['angular2-project.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, shared_1.ProductService]
        }),
        router_1.Routes([
            { path: '/dashboard', component: _dashboard_1.DashboardComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], Angular2ProjectAppComponent);
    return Angular2ProjectAppComponent;
}());
exports.Angular2ProjectAppComponent = Angular2ProjectAppComponent;
//# sourceMappingURL=angular2-project.component.js.map
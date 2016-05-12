"use strict";
var testing_1 = require('@angular/core/testing');
var angular2_project_component_1 = require('../app/angular2-project.component');
testing_1.beforeEachProviders(function () { return [angular2_project_component_1.Angular2ProjectAppComponent]; });
testing_1.describe('App: Angular2Project', function () {
    testing_1.it('should create the app', testing_1.inject([angular2_project_component_1.Angular2ProjectAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angular2-project works!\'', testing_1.inject([angular2_project_component_1.Angular2ProjectAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angular2-project works!');
    }));
});
//# sourceMappingURL=angular2-project.component.spec.js.map
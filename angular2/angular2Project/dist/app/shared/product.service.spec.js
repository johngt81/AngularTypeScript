"use strict";
var testing_1 = require('@angular/core/testing');
var product_service_1 = require('./product.service');
testing_1.describe('Product Service', function () {
    testing_1.beforeEachProviders(function () { return [product_service_1.ProductService]; });
    testing_1.it('should ...', testing_1.inject([product_service_1.ProductService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=product.service.spec.js.map
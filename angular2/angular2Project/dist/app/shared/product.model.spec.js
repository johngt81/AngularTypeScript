"use strict";
var testing_1 = require('@angular/core/testing');
var product_model_1 = require('./product.model');
testing_1.describe('Product', function () {
    testing_1.it('should create an instance', function () {
        testing_1.expect(new product_model_1.Product(1, 'fff', 'ddd', new Date(), 12, 'asdasdsa', 'asdasd')).toBeTruthy();
    });
});
//# sourceMappingURL=product.model.spec.js.map
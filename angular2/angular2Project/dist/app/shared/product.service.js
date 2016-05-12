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
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return Promise.resolve(PRODUCTS);
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
var PRODUCTS = [
    {
        id: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        releaseDate: new Date(2009, 2, 19),
        description: "Leaf rake with 48-inch wooden handle.",
        price: 19.95,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        id: 2,
        productName: "Garden Cart",
        productCode: "GDN-0023",
        releaseDate: new Date(2010, 2, 18),
        description: "15 gallon capacity rolling garden cart",
        price: 32.99,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        id: 5,
        productName: "Hammer",
        productCode: "TBX-0048",
        releaseDate: new Date(2013, 4, 21),
        description: "Curved claw steel hammer",
        price: 8.99,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
]
    .map(function (product, index) {
    product.id = index + 1;
    return product;
});
//# sourceMappingURL=product.service.js.map
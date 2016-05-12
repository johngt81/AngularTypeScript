"use strict";
var Product = (function () {
    function Product(id, productName, productCode, releaseDate, price, description, imageUrl) {
        this.id = id;
        this.productName = productName;
        this.productCode = productCode;
        this.releaseDate = releaseDate;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.model.js.map
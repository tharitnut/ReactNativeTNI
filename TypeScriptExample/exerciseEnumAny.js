var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "OutOfStock";
    ProductStatus["Discontinues"] = "Discontinues";
})(ProductStatus || (ProductStatus = {}));
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinues, price: 300 },
];
function displayProductDetails(productsdetail) {
    productsdetail.forEach(function (product) {
        console.log("Product: ".concat(product.name, ", Status: ").concat(product.status, ", Price: ").concat(product.price));
    });
}
displayProductDetails(products);

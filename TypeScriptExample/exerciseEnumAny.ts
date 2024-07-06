enum ProductStatus {
  Available = "Available",
  OutOfStock = "OutOfStock",
  Discontinues = "Discontinues",
}

let products: any[] = [
  { name: "Laptop", status: ProductStatus.Available, price: 1200 },
  { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
  { name: "Tablet", status: ProductStatus.Discontinues, price: 300 },
];

function displayProductDetails(productsdetail: any) {
  productsdetail.forEach((product) => {
    console.log(
      `Product: ${product.name}, Status: ${product.status}, Price: ${product.price}`
    );
  });
}

displayProductDetails(products);

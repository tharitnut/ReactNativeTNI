// declare enum
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}
// function
function displayOrderStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Your order is pending.");
      break;
    case OrderStatus.Shipped:
      console.log("Your order has been shipped.");
      break;
    case OrderStatus.Cancelled:
      console.log("Your order has been cancelled.");
      break;
    default:
      console.log("Unknown order status.");
  }
} // end of function

// test
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled)
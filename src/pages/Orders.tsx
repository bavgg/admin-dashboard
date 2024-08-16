import { ordersData } from "../data/data";
function Orders() {

  return (
    <div>
      {/* header */}
      <div className="grid  grid-cols-6 mb-4">
        <span>Image</span>
        <span>Item</span>
        <span>Customer Name</span>
        <span>Total Amount</span>
        <span>Status</span>
        <span>Order ID</span>
      </div>

      {/* orders */}
      <div className="flex flex-col gap-4">
        {ordersData.map((od) => (
          <div key={od.order_id} className="grid grid-cols-6">
            <img
              height={"70"}
              width={"70"}
              src={od.product_image}
              className=" rounded-md"
            />
            <span>{od.product_name}</span>
            <span>{od.customer_name}</span>
            <span>{od.total_amount}</span>
            <button
              style={{ backgroundColor: od.status_background }}
              className=" w-fit px-4 rounded-md h-fit"
            >
              {od.status}
            </button>
            <span>{od.order_id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

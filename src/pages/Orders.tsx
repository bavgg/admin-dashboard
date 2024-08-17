import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { ordersData } from "../data/data";
import { useContext, useEffect, useState } from "react";
import { PaginationContext } from "../contexts/PaginationContext";

function Orders() {
  const [orders, setOrders] = useState(ordersData);
  console.log("🚀 ~ Orders ~ orders:", orders);
  const context = useContext(PaginationContext);
  if (!context) throw new Error("Provide cotext first");
  const { setTotalPages, contentPerPage, currentPage } = context;

  useEffect(() => {
    const ordersLength = ordersData.length;
    const totalPages = Math.ceil(ordersLength / contentPerPage);
    setTotalPages(totalPages);
  });

  const start = (currentPage - 1) * contentPerPage;
  const end = start + contentPerPage;

  type ordersType = {
    order_id: number;
    customer_name: string;
    total_amount: number;
    product_name: string;
    location: string;
    status: string;
    status_background: string;
    product_image: string;
  };
  function sortOrdersByItem(orders: ordersType[]): ordersType[] {
    return [...orders].sort((a, b) => {
      if (a.product_name < b.product_name) return -1;
      if (a.product_name > b.product_name) return 1;
      return 0;
    });
  }
  function sortOrdersByCustomer(orders: ordersType[]): ordersType[] {
    return [...orders].sort((a, b) => {
      if (a.customer_name < b.customer_name) return -1;
      if (a.customer_name > b.customer_name) return 1;
      return 0;
    });
  }
  function sortOrdersByTotalAmount(orders: ordersType[]): ordersType[] {
    return [...orders].sort((a, b) => {
      if (a.total_amount < b.total_amount) return -1;
      if (a.total_amount > b.total_amount) return 1;
      return 0;
    });
  }

  function handleSort(orders: ordersType[], sortBy: string) {
    if (sortBy === "item") {
      const sortedOrders = sortOrdersByItem(orders);
      setOrders(sortedOrders);
    } else if (sortBy === "customer") {
      const sortedOrders = sortOrdersByCustomer(orders);
      setOrders(sortedOrders);
    } else if (sortBy === "amount") {
      const sortedOrders = sortOrdersByTotalAmount(orders);
      setOrders(sortedOrders);
    }
  }

  return (
    <div>
      {/* header */}
      <div className="grid  grid-cols-6 mb-10">
        <span>Image</span>
        <div
          onClick={() => handleSort(orders, "item")}
          className="flex gap-4 items-center"
        >
          <span>Item</span>
          <ChevronUpIcon fill="none" width="20" height="20" />
        </div>
        <div
          onClick={() => handleSort(orders, "customer")}
          className="flex gap-4 items-center"
        >
          <span>Customer Name</span>
          <ChevronUpIcon fill="none" width="20" height="20" />
        </div>
        <div
          onClick={() => handleSort(orders, "amount")}
          className="flex gap-4 items-center"
        >
          <span>Total Amount</span>
          <ChevronUpIcon fill="none" width="20" height="20" />
        </div>

        <span>Status</span>
        <span>Order ID</span>
      </div>

      {/* orders */}
      <div className="flex flex-col gap-4">
        {orders.slice(start, end).map((order) => (
          <div className="grid grid-cols-6">
            <img
              width={"70"}
              src={order.product_image}
              className=" object-cover object-center rounded-md h-[70px]"
            />
            <span>{order.product_name}</span>
            <span>{order.customer_name}</span>
            <span>{order.total_amount}</span>
            <button
              style={{ backgroundColor: order.status_background }}
              className=" w-fit px-4 rounded-md h-fit"
            >
              {order.status}
            </button>
            <span>{order.order_id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

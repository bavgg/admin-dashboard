import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { ordersData } from "../data/data";
import { useContext, useEffect } from "react";
import { PaginationContext } from "../contexts/PaginationContext";

function Orders() {
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

  return (
    <div>
      {/* header */}
      <div className="grid  grid-cols-6 mb-10">
        <span>Image</span>
        <div className="flex gap-4 items-center">
          <span>Item</span>
          <ChevronUpIcon fill="none" width="20" height="20" />
        </div>
        <div className="flex gap-4 items-center">
          <span>Customer Name</span>
          <ChevronUpIcon fill="none" width="20" height="20" />
        </div>
        <div className="flex gap-4 items-center">
          <span>Total Amount</span>
          <ChevronUpIcon fill="none" width="20" height="20" />
        </div>

        <span>Status</span>
        <span>Order ID</span>
      </div>

      {/* orders */}
      <div className="flex flex-col gap-4">
        {ordersData.slice(start, end).map((od) => (
          <div className="grid grid-cols-6">
            <img
              width={"70"}
              src={od.product_image}
              className=" object-cover object-center rounded-md h-[70px]"
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

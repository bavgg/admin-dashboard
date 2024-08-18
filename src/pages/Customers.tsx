import { useState } from "react";
import { customersData } from "../data/data";
import { TrashIcon } from "@heroicons/react/24/outline";
function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isMainChecked, setIsMainChecked] = useState<boolean>(false);

  function handleCheckboxChange(customer_id: number) {
    // first check if the customer_id is already in selectedIds array
    // then delete if it is, else add it to the array.
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(customer_id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== customer_id)
        : [...prevSelectedIds, customer_id]
    );
  }

  function handleMainCheckboxChange() {
    if (isMainChecked) {
      setSelectedIds([]);
    } else {
      setSelectedIds(customers.map((customer) => customer.customer_id));
    }
    setIsMainChecked(!isMainChecked);
  }

  function handleDeleteButton() {
    setCustomers(prevCustomers => prevCustomers.filter(customer => !selectedIds.includes(customer.customer_id) ))
    setSelectedIds([]); 
    setIsMainChecked(false);
  }

  return (
    <div className="mt-6 p-8">
      {/* delete */}
      <div onClick={handleDeleteButton} className="mb-6 flex gap-4 cursor-pointer">
        <TrashIcon fill="none" height='24' width='24' />
        <span>Delete</span>
      </div>

      {/* header */}
      <div className="grid  grid-cols-[0.2fr,1fr,1fr,1fr,1fr,0.4fr] mb-10 mt-4">
        {/* main checkbox */}
        <input
          onChange={handleMainCheckboxChange}
          type="checkbox"
          className=" h-[20px] w-[20px]"
        />
        <span>Name</span>
        <span>Project Name</span>
        <span>Status</span>
        <span>Weeks</span>
        <span>Budget</span>
      </div>

      {/* customers */}
      <div className="flex flex-col gap-4">
        {customers.map((customer) => (
          <div className="grid grid-cols-[0.2fr,1fr,1fr,1fr,1fr,0.4fr] items-center">
            <input
              onChange={() => handleCheckboxChange(customer.customer_id)}
              checked={selectedIds.includes(customer.customer_id)}
              type="checkbox"
              className=" h-[20px] w-[20px]"
            />

            {/* customer name */}
            <div className="flex gap-4">
              <img
                src={customer.customer_image}
                width="50"
                height="50"
                className=" rounded-full object-cover object-center"
              />
              <div className="flex flex-col gap-1">
                <div>{customer.customer_name}</div>
                <div>{customer.customer_email}</div>
              </div>
            </div>

            <div>{customer.project_name}</div>

            <button
              style={{ backgroundColor: customer.status_bg }}
              className=" w-fit px-4 rounded-md h-fit"
            >
              {customer.status}
            </button>

            <div>{customer.weeks}</div>

            <div>{customer.budget}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;

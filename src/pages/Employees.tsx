import { useState } from "react";

import { employeesData } from "../data/data";
import { useContext, useEffect } from "react";
import { PaginationContext } from "../contexts/PaginationContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Employees() {
    const [employees, setEmployees] = useState(employeesData);

  const context = useContext(PaginationContext);
  if (!context) throw new Error("Provide cotext first");
  const { setTotalPages, contentPerPage, currentPage } = context;

  useEffect(() => {
    const ordersLength = employees.length;
    const totalPages = Math.ceil(ordersLength / contentPerPage);
    setTotalPages(totalPages);
  });

  const start = (currentPage - 1) * contentPerPage;
  const end = start + contentPerPage;

  function filterEmployeesByName(search_input: string) {
    return employeesData.filter(employee => 
      employee.employee_name.toLowerCase().includes(search_input.toLowerCase())
    );
  };

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchInputValue = event.target.value;
    const filteredEmployees = filterEmployeesByName(searchInputValue);
    setEmployees(filteredEmployees);
  }

  return (
    <div className="flex flex-col p-4 mt-4">
        {/* searchbar */}
        <div className="relative flex gap-4 justify-end">
            <input onChange={handleSearch} placeholder="Search" className=" focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent border rounded-md px-4 py-1 "/>
            <div className="absolute top-1 right-1">
                <MagnifyingGlassIcon fill="none" width='24' height='24' />
            </div>
        </div>

      {/* header */}
      <div className="grid  grid-cols-[1fr,1fr,0.5fr,0.7fr,0.6fr] mb-10 mt-4">
        <span>Employee</span>
        <span>Designation</span>
        <span>Country</span>
        <span>Hire Date</span>
        <span>Reports To</span>
      </div>

      {/* orders */}
      <div className="flex flex-col gap-4">
        {employees.slice(start, end).map((employee) => (
          <div className="grid grid-cols-[1fr,1fr,0.5fr,0.7fr,0.6fr]">
            {/* employee */}
            <div className="flex gap-4">
              <img
                style={{ width: "50px", height: "50px" }}
                src={employee.employee_image}
                className=" rounded-md object-cover object-center"
              />
              <span>{employee.employee_name}</span>
            </div>
            <div>{employee.employee_title}</div>
            <div>{employee.employee_country}</div>
            <div>{employee.hire_date}</div>
            <div>{employee.reports_to}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employees;

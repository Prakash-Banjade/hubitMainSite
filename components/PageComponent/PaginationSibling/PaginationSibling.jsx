import React, { useState } from "react";

function PaginationSibling() {
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  return (
    <div className="flex">
      {totalnumbers.map((val, i) => {
        return (
          <div
            key={i}
            className="bg-main px-5 py-3 mx-2 my-8 cursor-pointer text-white"
            onClick={() => handleCLick(i)}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}

export default PaginationSibling;

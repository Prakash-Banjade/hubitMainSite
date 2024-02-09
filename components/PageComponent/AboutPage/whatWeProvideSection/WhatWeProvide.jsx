import React, { useCallback, useEffect, useState } from "react";
import CompanyProvide from "./CompanyProvide";
import axios from "../../../UI/Axios/Axios"

function WhatWeProvide() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("/provide");
      setData(response.data?.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div className="py-5 text-center">
        <div className=" text-main capitalize Poppins font-bold">
          <h1 className="text-2xl">What We Provide</h1>
        </div>
        <div className="capitalize Poppins   my-3 text-xs  font-light text-gray-700  ">
          We offer courses in web development, Microsoft Office, graphic design, AutoCAD, networking, and security. Join our educational institute to enhance your skills!
        </div>
      </div>
      <div className="grid   py-0   xl:grid-cols-3  xxl:grid-cols-3">
        {data?.map((val, i) => {
          return (
            <CompanyProvide
              key={i}
              title={val.title}
              description={val.description}
              image={`${process.env.NEXT_PUBLIC_API_URL}/public/${val?.image}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WhatWeProvide;

import React from "react";
import { TbCertificate } from "react-icons/tb";
import CompanyProvide from "./CompanyProvide";

function WhatWeProvide() {
  const data = [
    {
      icon: <TbCertificate />,
      title: "Top Courses",
      description: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text  Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      textLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      textLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type
                   .`,
    },
    {
      icon: <TbCertificate />,
      title: "Certified Teachers",
      description: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text  Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      textLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      textLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type
                   .`,
    },
    {
      icon: <TbCertificate />,
      title: "Book and Libraries",
      description: `Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   text  Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   text Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   textLorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   text Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   textLorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   text ever since the 1500s, when an unknown printer took a galley of type 
                   .`,
    },
  ];

  return (
    <div>
      <div className="py-5   text-center">
        <div className=" text-main capitalize Poppins font-bold">
          <h1 className="text-2xl">What We Provide</h1>
        </div>
        <div className="capitalize Poppins   my-3 text-xs  font-light text-gray-700  ">
          Lorem ipsum dolor sit met, consectetur adipiscing elit
        </div>
      </div>
      <div className="grid   py-0   xl:grid-cols-3  xxl:grid-cols-3">
        {data?.map((val, i) => {
          return (
            <CompanyProvide
              key={i}
              title={val.title}
              description={val.description}
              icon={val.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WhatWeProvide;

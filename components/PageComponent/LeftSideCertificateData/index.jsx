import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {
  MdArrowBackIosNew,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdSettings,
} from "react-icons/md";
function LeftSideCertificateData({
  overview,
  references,
  requirements,
  title,
}) {
  const points = [
    {
      title: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dolor eos officiis null dignissimos suscipit. Optio, iure.`,
    },
    {
      title: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dolor eos officiis null dignissimos suscipit. Optio, iure.`,
    },
    {
      title: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dolor eos officiis null dignissimos suscipit. Optio, iure.`,
    },
    {
      title: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dolor eos officiis null dignissimos suscipit. Optio, iure.`,
    },
    {
      title: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dolor eos officiis null dignissimos suscipit. Optio, iure.`,
    },
    {
      title: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dolor eos officiis null dignissimos suscipit. Optio, iure.`,
    },
  ];
  return (
    <div>
      <div className=" px-4 md:px-20 py-8">
        <div className="">
          <div className=" mb-5 flex gap-4 capitalize font-medium text-mainColor">
            <div>
              {" "}
              <FaGraduationCap className="h-12 w-12" />
            </div>{" "}
            <div className="text-4xl text-main">{title} web developer</div>
          </div>
          <div className="text-3xl  mb-4 capitalize font-light text-mainColor">
            Program Overview
          </div>
          <div
            className={`font-normal text-[15px]  text-gray-500 
          ${overview?.length > 500 ? "h-100  overflow-scroll" : "h-fit "}
          `}
          >
            {overview} HUB IT is recognized as one of Nepal’s best global skill
            development and IT training centers. The journey of HUB IT started
            in 2017 with a big dream to bring applied education to the mass
            population at an affordable cost. The main purpose of HUB IT is to
            facilitate, with the best IT-related skills.
          </div>
          <div className="bg-gray-200 w-full h-[1px] my-6"></div>
          <div
            className={`${
              requirements?.length > 500 ? "h-100  overflow-scroll" : "h-32 "
            }`}
          >
            <div className="text-2xl  font-light text-mainColor mb-1 mt-4 ">
              Requirements
            </div>
            <div className="text-sm  font-light text-mainColor mb-3 ">
              Major: Core and Selective Requirements
            </div>
            <div className="font-normal text-[15px] my-5 text-gray-500">
              {requirements} HUB IT is recognized as one of Nepal’s best global
              skill development and IT training centers. The journey of HUB IT
              started in 2017 with a big dream to bring applied education to the
              mass population at an affordable cost. The main purpose of HUB IT
              is to facilitate, with the best IT-related skills.
            </div>
            {/* <div className="px-5 py-1 text-[15px] font-light leading-7 ">
              {points.map((val, i) => {
                return (
                  <div key={i}>
                    {i + 1}.{val.title}
                  </div>
                );
              })}
            </div> */}
          </div>

          {/* <div className="bg-mainColor text-white  rounded-[4px]  w-full px-5 h-44 my-16 ">
            <div className="text-3xl capitalize font-light py-5 text-ainColor">
              expertise
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-white text-6xl">
                <MdSettings />
              </div>
              <div>
                <div className="text-2xl capitalize font-light  ">
                  tools & technology
                </div>
                <div className="text-lg capitalize font-light  mt-3">
                  reactjs, nodejs, flutter, .net, javaScript, swagger, nextjs
                </div>
              </div>
            </div>
          </div> */}
          <div className="bg-gray-200 w-full h-[1px] my-6"></div>
          <div
            className={`${
              references?.length > 500 ? "h-100  overflow-scroll" : "h-32 "
            }`}
          >
            <div className="text-2xl capitalize font-light text-mainColor">
              References
            </div>
            <div className="text-sm  font-light text-mainColor mb-3 ">
              Note: References about your topic
            </div>
            <div className="font-normal text-[15px] my-5 text-gray-500">
              {references} HUB IT is recognized as one of Nepal’s best global
              skill development and IT training centers. The journey of HUB IT
              started in 2017 with a big dream to bring applied education to the
              mass population at an affordable cost. The main purpose of HUB IT
              is to facilitate, with the best IT-related skills.
            </div>
            {/* <div className="px-5 py-1 text-[15px] font-light leading-7 ">
            {points.map((val, i) => {
              return (
                <div key={i}>
                  {i + 1}.{val.title}
                </div>
              );
            })}
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideCertificateData;

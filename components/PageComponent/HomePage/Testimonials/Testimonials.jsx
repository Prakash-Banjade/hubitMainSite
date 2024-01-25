import React, { useRef, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
//import "/images/japan.jpg" from "/images/japan.jpg";
import TestimonialsCard from "./TestimonialsCard";

import "slick-carousel/slick/slick.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import "slick-carousel/slick/slick-theme.css";
function Testimonials() {
  const Data = [
    {
      icon: (
        <FaQuoteRight className="text-blue-500 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      ),
      description:
        "We've cooked up some examples of how you could use the “quote-left” icon in your projects, whether they're apps, interfaces, or print designs.",
      image: "/images/japan.jpg",
      name: "john doe",
      post: "manager",
    },
    {
      icon: (
        <FaQuoteRight className="text-blue-500  w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      ),
      description:
        "We've cooked up some examples of how you could use the “quote-left” icon in your projects, whether they're apps, interfaces, or print designs.",
      image: "/images/japan.jpg",
      name: "john doe",
      post: "manager",
    },
    {
      icon: (
        <FaQuoteRight className="text-blue-500  w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      ),
      description:
        "We've cooked up some examples of how you could use the “quote-left” icon in your projects, whether they're apps, interfaces, or print designs.",
      image: "/images/japan.jpg",
      name: "john doe",
      post: "manager",
    },
  ];
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div className="w-full px-4 md:px-8 lg:px-20 xl:px-24 overflow-hidden">
      <div className="w-full my-5">
        <div className="text-left">
          <h2 className="text-primary text-2xl Poppins font-semibold">
            Testimonials
          </h2>
          <h1 className=" text-2xl  lg:text-3xl Poppins xl:text-3xl xxl:text-3xl">
            What does Customers Say About Us ?
          </h1>
        </div>
        <div className="flex items-center justify-between mt-5 mb-12 mx-1">
          <div className="flex items-center space-x-4 xl:space-x-">
            <p className="text-primary-200 font-bold cursor-pointer">Regular</p>
            <p className="transition hover:text-primary-100 cursor-pointer">
              Facebook
            </p>
            <p className="transition hover:text-primary-100 cursor-pointer">
              Google
            </p>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4 mr-4">
            <div className="h-10 w-10 rounded-full bg-primary-200 text-white cursor-pointer transition opacity-60 hover:opacity-100 shadow-lg text-center flex flex-col items-center justify-center">
              <FaAngleLeft
                className="mx-auto text-xl"
                onClick={() => sliderRef.current.slickPrev()}
              />
            </div>
            <div className="h-10 w-10 rounded-full  bg-primary-200 text-white cursor-pointer transition opacity-60 hover:opacity-100 shadow-lg text-center flex flex-col items-center justify-center">
              <FaAngleRight
                className="mx-auto text-xl"
                onClick={() => sliderRef.current.slickNext()}
              />
            </div>
          </div>
        </div>
        <div className="  my-8  ">
          {/* <Slider {...sliderSetting} ref={sliderRef}> */}
          <div className="grid  h-full bg-gray-100 p-10 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3   xxl:grid-cols-3   gap-5 xl:gap-6 xxl:gap-6  ">
            {Data.map((val, i) => {
              return (
                <div key={i} className="">
                  <TestimonialsCard
                    icon={val.icon}
                    description={val.description}
                    image={val.image}
                    name={val.name}
                    post={val.post}
                  />
                </div>
              );
            })}
          </div>
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

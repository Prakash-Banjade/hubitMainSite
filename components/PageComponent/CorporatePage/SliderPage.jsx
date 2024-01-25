import React, { useState, useEffect } from "react";
// import image from "../../Resources/japan.jpg";
import image from "../../Resources/careerpic.jpg";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import slider from "react-slick/lib/slider";

function SliderPage() {
  const dataa = [
    { images: image },
    { images: image },
    { images: image },
    { images: image },
    { images: image },
    { images: image },
    { images: image },
    { images: image },
  ];

  const PreviousClick = () => {
    // setCount(count > 0 ? count - 1 : dataa.length - 1);
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - window.innerWidth;
  };
  const NextClick = () => {
    // setCount(count >= dataa.length - 1 ? 0 : count + 1);
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + window.innerWidth;
  };
  return (
    <div className=" mb-12 md:mb-24 lg:mb-24 xl:mb-24 xxl:mb-24  h-[540px]">
      <div>
        {/* <h1 className="text-center text-xl md:text-3xl xl:text-3xl   xxl:text-3xl   text-main capitalize ">
          Training Slider
        </h1> */}
        <div className="flex items-center justify-center gap-4  px-1 md:px-10 lg:px-10 xl:px-10 xxl:px-10">
          <div
            className=" text-3xl cursor-pointer hover:bg-gray-300
           transition-all ease-in-out duration-200 delay-75  hover:text-black bg-main rounded-full text-white"
            onClick={() => PreviousClick()}
          >
            <MdKeyboardArrowLeft />
          </div>
          <div
            className="flex  md:gap-16   lg:gap-16 xl:gap-16 xxl:gap-16  h-fit  
          items-center md:my-16 lg:my-16  xl:my-16  xxl:my-16   scroll-smooth scroll"
            id="slider"
          >
            {dataa.map((val, i) => {
              return (
                <div
                  key={i}
                  className={`md:w-[260px]   ${
                    i % 2 === 0
                      ? "mt-0"
                      : "md:mt-60 lg:mt-60  xl:mt-60  xxl:mt-60  w-full "
                  } `}
                >
                  <div
                    className={` w-[300px] md:w-[272px] lg:w-[272px] xl:w-[272px] xxl:w-[272px] h-fit   `}
                  >
                    <Image
                      src={val.images}
                      layout="responsive"
                      height={350}
                      width={300}
                      // objectfit="cover"
                      // objectPosition={"center"}
                      alt="Loading ..."
                      className="  h-fit object-cover object-center"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className=" text-3xl cursor-pointer hover:bg-gray-300 transition-all 
          ease-in-out duration-200 delay-75 hover:text-black bg-main rounded-full text-white"
            onClick={() => NextClick()}
          >
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderPage;

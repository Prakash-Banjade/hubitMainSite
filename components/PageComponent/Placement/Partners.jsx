import React from "react";
import { SiMicrosoft } from "react-icons/si";

const Partners = () => {
  return (
    <>
    
      <div className="px-4 sm:pb-0 md:pb-3 lg:pb-12 xl:m-20 md:px-8 lg:px-20 xl:px-24 xxl:px-32 mt-20 flex flex-col items-center justify-center">
        <div className="w-max text-main text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold">
          Our Placement Partners
        </div>
        <div className="w-full flex flex-row flex-wrap gap-10 justify-center my-6 pb-20">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div
                key={item}
                className="flex flex-row h-max items-center py-1 px-2 border border-gray-500 shadow-md "
              >
                <span className="text-base xl:text-lg xxl:text-xl">
                  <SiMicrosoft />
                </span>
                <span className="ml-2 text-xs xl:text-sm xxl:text-base">
                  Bright IT
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Partners;

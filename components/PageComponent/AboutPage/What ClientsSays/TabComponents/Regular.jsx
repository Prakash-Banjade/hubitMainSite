import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

function Regular({ clientDetails, StartValue, EndValue, prev, next }) {
  return (
    <div>
      <div className="flex justify-center  items-center px-8">
        <div
          className=" bg-gray-100 p-0.5 rounded-full text-main cursor-pointer"
          onClick={() => prev(clientDetails)}
        >
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </div>
        <div className="w-11/12 h-11/12 md:h-[20vh] lg:h-[20vh] xl:w-11/12 xxl:w-11/12">
          <div
            className="grid gap-2 text-center md:grid-cols-1
         lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2  pt-12"
          >
            {clientDetails?.slice(StartValue, EndValue)?.map((val, i) => {
              return (
                <div key={i} className="flex w-full relative">
                  <div
                    className="w-20 h-20 absolute left-8 top-5 border-2 lg:w-12 xl:w-20 xxl:w-20
                 border-white rounded-full "
                  >
                    <Image
                      src={val.image}
                      height={70}
                      width={70}
                      alt="Loading ..."
                      layout="responsive"
                      objectFit={"cover"}
                      className="rounded-full "
                    />
                  </div>
                  {/* testing lai height fit rakhya chu hai */}
                  <div className="  h-32 w-9/12 mx-auto rounded-2xl px-16 py-3 text-center bg-slate-200 ">
                    <div className="text-main Poppins font-medium capitalize text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-xl">
                      {val.name}
                    </div>
                    <div className="text-sm my-.5 font-medium capitalize">
                      {val.title}
                    </div>
                    <div className="text-xs h-16 text-gray-600 pb-4 w-full overflow-scroll info ">
                      {val.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className=" bg-gray-100 p-0.5 rounded-full text-main cursor-pointer"
          onClick={() => next(clientDetails)}
        >
          <MdKeyboardArrowRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Regular;

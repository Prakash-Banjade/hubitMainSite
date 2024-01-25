import Image from "next/image";
import React from "react";
import image from "../../Resources/careerpic.jpg";
const TopSection = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="relative z-10">
          <div className=" w-full h-80  bg-main ">
            <Image
              src={image}
              layout="fill"
              // objectfit="cover"
              // objectPosition={"center"}
              alt="Loading daata"
              className=" opacity-75  object-cover object-center"
            />
          </div>
          <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 text-white capitalize">
            <div className="font-bold text-xl md:text-3xl xl:text-3xl  xxl:text-3xl">
              co-operate training
            </div>
            <div className="Poppins text-xs md:text-sm xl:text-sm  xxl:text-sm mt-2">
              home/co-operating training
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10  lg:px-10  xl:px-10 xxl:px-10">
          <div className="md:grid  xl:grid xxl:grid grid-cols-12  h-full ">
            <div className="md:flex flex-col  col-span-8 xs:w-full sm:w-full md:w-full lg:w-[60vh] xl:w-[60vh] xxl:w-9/12 xxxl:w-9/12">
              <h1 className="text-main font-bold text-lg md:text-3xl xl:text-3xl xxl:text-3xl">
                What is Corporate Training?
              </h1>
              <p className="text-xs md:text-base xl:text-base  xxl:text-base">
              Corporate training is exclusively for your organization. 
              Training can be delivered onsite (at your company site), or virtually for your organization. 
              Dates, times, and agenda can be tailored to your organization’s needs.
              </p>
            </div>
            <div className="xs:hidden sm:hidden  col-span-4  w-[300px] relative z-20 -mt-20">
              <Image
                src={image}
                layout="fill"
                alt="data loading"
                className="object-cover  object-center"
              />
            </div>
          </div>
        </div>
        <div
          className="md:flex xl:flex xxl:flex justify-between bg-main 
        px-4 md:px-14 xl:px-14 xxl:px-14 font-bold  uppercase py-2 items-center 
        my-10 md:my-20 lg:my-20 xl:my-20 xxl:my-20"
        >
          <div className="text-white  text-xs md:text-sm xl:text-sm  xxl:text-sm">
           We can help you to train your employee and students to get your dream result
          </div>
          <div className="bg-yellow-400  w-fit mt-7 md:mt-0 lg:mt-0 xl:mt-0 xxl:mt-0 cursor-pointer px-5 py-2 rounded-3xl text-base capitalize font-medium ">
            contact us
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;

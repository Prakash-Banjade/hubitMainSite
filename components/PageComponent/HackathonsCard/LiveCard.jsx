import React, { useState } from "react";
import Image from "next/image";
import image1 from "../../Resources/bg.png";
function LiveCard() {
  const [Data, setData] = useState([
    {
      image: image1,
      name: "certificate of achivements",
      endTime: "Hub-IT Institute ",
      day: "6",
      hour: "18",
      min: "32",
    },
    {
      image: image1,
      name: "certificate of achivements",
      endTime: "king Institute",
      day: "9",
      hour: "10",
      min: "40",
    },
    {
      image: image1,
      name: "certificate of achivements",
      endTime: "expert Institute",

      day: "1",
      hour: "4",
      min: "10",
    },
    {
      image: image1,
      name: "certificate of achivements",
      endTime: "jhapa education institute",
      day: "4",
      hour: "7",
      min: "5",
    },
  ]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  xxl:grid-cols-4  xxxl:grid-cols-4  my-8  px-5 md:px-20 xl:px-20 xxl:px-20 xxxl:px-20  ">
        {Data.map((val, i) => {
          return (
            <div
              key={i}
              // onClick={() => RedirectToNextPage()}
              className=" 
    transition-all cursor-pointer duration-300 ease-linear  w-fit   
      pb-5 rounded-lg border"
            >
              <div className="w-full  overflow-hidden bg-black  hover:bg-gradient-to-t from-[#ad079c] to-[#c7ce76] borderRadiusTop">
                <Image
                  //   src={`https://cmsback.e-aribt.com/public/${image}`}
                  src={val.image}
                  height={200}
                  width={300}
                  alt="Loading ..."
                  // layout="responsive"
                  // objectFit="cover"
                  placeholder="blur"
                  blurDataURL={val.image}
                  className="borderRadiusTop  opacity-80  h-60 object-cover  "
                />
              </div>
              <div className=" px-3 flex flex-col items-centr justify-center my-6  ">
                <div className="Poppins capitalize font-bold  text-main  text-[18px]">
                  {val.name}
                </div>
                <div className=" capitalize text-center text-gray-600  w-[275px] line-clamp-2 h-11 font-semibold text-[14px]">
                  Ends in: {val.endTime}
                </div>
                <div className=" capitalize  flex gap-5 items-center justify-center text-gray-600    ">
                  <div className="   text-gray-600  text-center ">
                    <div className="text-gray-400 text-[15px]  ">days</div>
                    <div className="text-[17px]"> {val.day}</div>{" "}
                  </div>
                  <div className="   text-gray-600   text-center ">
                    {" "}
                    <div className="text-gray-400 text-[17px]  ">hours</div>
                    <div className="text-[15px]"> {val.hour}</div>{" "}
                  </div>
                  <div className="   text-gray-600 text-center   ">
                    {" "}
                    <div className="text-gray-400 text-[17px]  ">minutes</div>
                    <div className="text-[15px]"> {val.min}</div>{" "}
                  </div>
                </div>
                <div className="text-gray-500  flex justify-center  font-medium  text-[12px]">
                  <button
                    className="bg-main rounded-md capitalize hover:opacity-70 mt-10
                  hover:scale-[1.05] transition-all ease-in-out delay-75 duration-300 text-white px-8 py-2"
                  >
                    start now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LiveCard;

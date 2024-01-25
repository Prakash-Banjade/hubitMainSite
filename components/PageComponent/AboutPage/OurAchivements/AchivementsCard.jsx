import React from "react";
import Image from "next/image";

function AchivementsCard({ image, name, from, date }) {
  return (
    <div
      className=" 
    transition-all cursor-pointer duration-300 ease-linear  w-fit  
      pb-5 rounded-lg"
    >
      <div className="w-60 h-52 ">
        <Image
          src={image}
          height={45}
          width={60}
          alt="Loading ..."
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image}
          className="borderRadiusTop  "
        />
      </div>
      <div className=" px-4  flex flex-col items-center justify-center my-6  ">
        <div className="Poppins capitalize font-medium text-gray-800 text-[16px]">
          {name}
        </div>
        <div className="text-gray-600 font-medium text-[14px]">
          From: {from}
        </div>
        <div className="text-gray-500 font-regular capitalize text-[12px]">
          {date}
        </div>
      </div>
    </div>
  );
}

export default AchivementsCard;

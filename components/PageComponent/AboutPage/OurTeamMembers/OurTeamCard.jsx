import React from "react";

function OurTeamCard({ image, as, name }) {
  return (
    <div
      className="shadow-xl shadow-gray-400 hover:scale-105 
    transition-all cursor-pointer duration-300 ease-linear  w-fit  
     capitalize pb-5 rounded-lg"
    >
      <div className="w-60 h-52 hover: borderRadiusTopHover">
        {/* <Image
          src={image}
          height={45}
          width={60}
          alt="Loading ..."
          layout="responsive"
          objectFit="cover"
          className="borderRadiusTop"
        /> */}
        <div className="borderRadiusTop w-60 h-52 bg-gray-600">
          {/* <img src={image} alt="" className="borderRadiusTop" /> */}
        </div>
      </div>
      <div className=" px-4  flex flex-col items-center justify-center h-20   ">
        <div className="Poppins text-gray-700 text-[16px]">{name}</div>
        <div className="text-gray-400 text-[14px]">{as}</div>
      </div>
    </div>
  );
}

export default OurTeamCard;

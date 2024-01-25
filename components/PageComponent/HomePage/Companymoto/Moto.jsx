import React from "react";

function Moto({ icon, title, description }) {
  return (
    <div
      className="ml-8 mr-8 border-b lg:border-b-0 xl:border-b-0
      xxl:border-b-0 lg:border-r xl:border-r xxl:border-r
       border-gray-300 bg-white transition-all duration-200 ease-linear
    hover:border-b-4 hover:border-b-main  px-4 sm:px-6
     md:px-4 lg:px-4 xl:px-16 xxl:px-16 pt-4 "
    >
      <div className="flex gap-2 md:gap-2 lg:gap-2 xl:gap-3 xxl:gap-3 items-center ">
        <div className=" text-3xl xl:text-4xl xxl:text-5xl text-main">
          {icon}
        </div>
        <div className=" Poppins xl:text-base xxl:text-lg ">
          <h1 className="text-lg">{title}</h1>
        </div>
      </div>
      <div
        className="text-xs xl:text-sm xxl:text-base text-gray-600
       text-justify mb-4 h-36 xl:h-40 xxl:h-52 py-2 scroll overflow-auto"
      >
        {description}
      </div>
    </div>
  );
}

export default Moto;

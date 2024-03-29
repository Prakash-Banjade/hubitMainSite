import React from "react";
import image from "../../../Resources/designnoBg.png";
import Image from "next/image";
function UpcomingTraining() {
  const dataa = [
    { images: image, name: "nischal karki" },
    { images: image, name: "nischal karki" },
    { images: image, name: "nischal karki" },
    { images: image, name: "nischal karki" },
    { images: image, name: "nischal karki" },
  ];
  return (
    <div>
      <div className="md:flex xl:flex xxl:flex flex-wrap gap-5  items-center justify- my-16 ">
        {dataa.map((val, i) => {
          return (
            <div
              key={i}
              className="shadow-xl shadow-[#aeadad] cursor-pointer 
            hover:scale-105 transition-all ease-in-out duration-200 delay-75  
            w-[200px] md:w-fit xl:w-fit xxl:w-fit my-6 xl:my-0 xxl:my-0"
            >
              <div className="w-[200px] md:w-[250px] xl:w-[250px] xxl:w-[250px]">
                {/* <Image
                  src={val.images}
                  layout="responsive"
                  height={150}
                  width={200}
                  // objectfit="cover"
                  // objectPosition={"center"}
                  alt="Loading ..."
                  className="   object-cover object-center"
                />{" "} */}
                <div className="w-full h-[150px] bg-gray-300"></div>
              </div>
              <div className="px-4  mt-4 capitalize text-sm">training name</div>
              <div className="w-11/12 h-[1px] bg-gray-300 my-4 mx-auto"></div>
              <div className="flex justify-between items-center px-4 pb-3">
                <div className="w-10 h-10 bg-gray-300  rounded-full">
                  {/* <Image
                    src={val.images}
                    layout="responsive"
                    // objectfit="cover"
                    width={100}
                    height={100}
                    alt="Loading ..."
                    className=" object-cover rounded-full object-center"
                  /> */}
                  <div className="w-full h-full bg-gray-600"></div>
                </div>
                <div className="capitalize text-sm">{val.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingTraining;

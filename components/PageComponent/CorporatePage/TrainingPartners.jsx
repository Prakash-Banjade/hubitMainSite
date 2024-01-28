import React from "react";
import image1 from "../../Resources/netTv.jpeg";
import image2 from "../../Resources/khaltii.jpeg";
import image3 from "../../Resources/vianet.jpeg";
import image4 from "../../Resources/subisu.jpeg";
import Image from "next/image";

function TrainingPartners() {
  const dataa = [
    { images: image1 },
    { images: image2 },
    { images: image3 },
    { images: image4 },
  ];
  return (
    <div className=" my-20 md:my-44 lg:my-44 xl:my-44 xxl:my-44">
      <div>
        <h1 className="text-center text-xl md:text-3xl xl:text-3xl   xxl:text-3xl   text-main capitalize ">
          our  partners we have work with
        </h1>

        <div className="w-fit mx-auto md:flex xl:flex xxl:flex flex-wrap  md:gap-6  lg:gap-7 xl:gap-10 xxl:gap-10 items-center justify-center md:my-16 lg:my-16  xl:my-16  xxl:my-16  px-10">
          {dataa.map((val, i) => {
            return (
              <div
                className=" w-[150px] md:w-44  lg:w-44  xl:w-44  xxl:w-44 my-10 md:my-0 xl:my-0 xxl:my-0 "
                key={i}
              >
                {/* <Image
                  src={val.images}
                  layout="responsive"
                  // objectfit="cover"
                  // objectPosition={"center"}
                  quality={100}
                  alt="Loading ..."
                  className="   object-cover object-center"
                /> */}
                <div className="w-full h-72 bg-gray-600"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrainingPartners;

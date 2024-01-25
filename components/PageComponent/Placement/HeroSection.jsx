import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="relative">
      <div className="w-full h-80 bg-main">
        <Image
          src="/images/Rectangle 35.png"
          layout="fill"
          objectfit="cover"
          alt="attractive background image for placement page"
          className="opacity-75"
        />
      </div>
      <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 text-white capitalize">
        <div className="font-bold  text-3xl">Placements</div>
        <div className="Poppins text-sm mt-2">home/placements</div>
      </div>
    </div>
  );
};

export default HeroSection;

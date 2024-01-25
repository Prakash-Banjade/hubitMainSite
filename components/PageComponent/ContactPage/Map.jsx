import React from "react";

const Map = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-0">
        <h1 className="text-main font-bold h-[36px]">Find us on Google Maps</h1>
        <p className="font-medium mb-4 ">
          You can also find us on google map by using this map
        </p>
        <div className="relative text-right xs:w-[400px] sm:w-[600px]  h-[400px] md:w-[700px] lg:w-[900px]xl:w-[1000px] xxl:w-[1100px] mb-20">
          <div className="overflow-hidden bg-none h-[400px]  xs:w-[400px] sm:w-[600px]   md:w-[700px] lg:w-[900px]xl:w-[1000px] xxl:w-[1100px]">
            <iframe
              width="1100"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=hubit%20training%20solution&t=&z=13&ie=UTF8&iwloc=&output=embed"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;

import React from "react";
import Image from "next/image";
import backGround_2 from "../../../Resources/frame_1.png";
function BottomSection() {
  return (
    <div className="relative ">
      <div
        className="flex items-end  text-white text-3xl Poppins p-5 md:px-20 xl:px-20 xxl:px-20 xxxl:px-20 gap-10  w-full  "
        style={{
          position: "relative",
          height: "250px",
          background: `url(${backGround_2.src})`,
        }}
      >
        Need More help?
      </div>
      <div className=" -mt-24 right-3  xxl:-mt-12 absolute xl:right-64 xxl:right-64">
        <button className="rounded-3xl px-5 py-2 bg-yellow-400 Poppins">
          contact us
        </button>
      </div>
    </div>
  );
}

export default BottomSection;

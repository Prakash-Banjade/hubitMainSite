import Image from "next/image";
import React from "react";
import backGround from "../../../Resources/bg.png";
import { AiOutlineArrowDown } from "react-icons/ai";
function Career() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center md:items-start lg:items-start xl:items-start xxl:items-start xxxl:items-start p-5 md:p-20 xl:p-20 xxl:p-20 xxxl:p-20  gap-y-5   w-full  "
        style={{
          position: "relative",
          height: "250px",
          background: `url(${backGround.src})`,
        }}
      >
        <div className="">
          <div className="text-2xl Poppins font-bold capitalize">
            {" "}
            check certificate
          </div>
          <div className="text-sm Poppins capitalize">
            home/check certificte
          </div>
        </div>
        {/* <div className="flex items-center gap-1 w-fit border-2 border-black px-5 rounded-full py-1">
          <button className=" w-fit h-fit     text-lg Poppins">
            View Vacancy
          </button>
          <AiOutlineArrowDown />
        </div> */}
      </div>
    </>
  );
}

export default Career;

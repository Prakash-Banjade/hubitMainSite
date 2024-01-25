import Image from "next/image";
import React from "react";
import { SiMicrosoft } from "react-icons/si";
const BottomSection = () => {
  return (
    <>
      <div className="my-8 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  xxl:grid-cols-4  gap-5">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              className="rounded-lg overflow-hidden shadow-lg group p-2 cursor-pointer"
              key={index}
            >
              <Image
                className="w-10/12 group-hover:scale-105 transition-all duration-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXzIgxiHN9Ktcb5hqKCr_ezUySvhoawPrUQ&usqp=CAU"
                alt="image"
                layout="responsive"
                height="100"
                width="100"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Placement At Hubit Pvt . Ltd
                </div>
              </div>
              <hr />
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-1 py-1 text-sm font-semibold mr-2 mb-2">
                  Roshika Chettri
                </span>
                <span className=" px-1 py-1 text-sm font-semibold text-[#a0047d]  mb-2">
                  Web Design
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BottomSection;

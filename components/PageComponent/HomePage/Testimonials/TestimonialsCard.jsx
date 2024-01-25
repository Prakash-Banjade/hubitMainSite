import React from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

function TestimonialsCard({ description, image, name, post }) {
  return (
    <div className="space-y-5">
      <div className="flex bg-white lg:py-11 xl:py-14 xxl:py-16  h-full rounded-sm p-8 lg:p-10   gap-2 lg:gap-4 xl:gap-4 xxl:gap-4">
        <div className="my-1 lg:my-2">
          {" "}
          <FaQuoteRight className="text-blue-500 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 xxl:w-5 xxl:h-5" />
        </div>
        <div className="text-sm"> {description}</div>
      </div>
      <div className="flex items-center  gap-4">
        <div className="w-8 lg:w-10 xxl:w-12 xl:w-12">
          <Image
            height={100}
            width={100}
            src={image}
            alt={"images"}
            // objectFit="cover"
            // layout="responsive"
            className=" rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center capitalize">
          <div className="font-bold text-sm lg:text-base"> {name}</div>
          <div className="text-gray-500 text-xs lg:text-sm"> {post}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;

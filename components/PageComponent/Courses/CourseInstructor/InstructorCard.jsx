import React from "react";
import Image from "next/image";
import { IoMail } from "react-icons/io5";

function InstructorCard({ instructor }) {
  console.log(instructor, 'lsadjf;iwe;');

  return (
    <div className="flex flex-col lg:flex-row xl:flex-row xxl:flex-row gap-14 ">
      <div
        className="shadow-sm shadow-gray-400 hover:scale-1 
    transition-all cursor-pointer duration-300 ease-linear  w-fit  
      pb-5 rounded-lg hover:opacity-80 "
      >
        <div className=" w-full lg:w-72 xl:w-72 xxl:w-72   borderRadiusTopHover ">
          <Image
            src={`https://hubmainback.hubit.com.np/public/${instructor?.avatar}`}
            height={400}
            width={400}
            alt="Loading ..."
            // layout="fil"
            objectFit="cover"
            className="borderRadiusTop "
          />
        </div>
        <div className=" px-4  flex flex-col items-center justify-center h-20   ">
          <div className="Poppins capitalize text-gray-700 text-[18px]">
            {instructor?.name}
          </div>
          <div className="text-gray-500 capitalize text-[14px]">{instructor?.phone}</div>
          <div className="text-gray-400 text-[13px] flex gap-1.5">
            <div>
              <IoMail className="w-5 h-5" />
            </div>
            <div>{instructor?.email}</div>
          </div>
        </div>
      </div>
      <div className="max-h-80 overflow-y-auto">
        <div className="Poppins font-bold capitalize text-lg text-gray-800">
          about me
        </div>
        <div className="text-sm text-gray-500 text-justify">
          <div dangerouslySetInnerHTML={{ __html: instructor?.bio }} className="prose xl:prose-xl whitespace-pre-wrap break-words" />
        </div>
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>
        <div className="Poppins font-bold capitalize text-lg text-gray-800 ">
          skills
        </div>
        <ul className="capitalize">{instructor?.skills?.map(skill => <li key={skill?.id}>{skill?.name}</li>)}</ul>
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>

        <div className="Poppins font-bold capitalize text-lg text-gray-800 ">
          experience
        </div>
        <div className="text-sm text-gray-500 text-justify">{instructor?.experience} year(s)</div>
      </div>
    </div>
  );
}

export default InstructorCard;

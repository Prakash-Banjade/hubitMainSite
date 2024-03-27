import React, { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Icons from "../../components/Navigation/Navitem/iconitem";
import Link from "next/link";
import Image from "next/image"

function Home({ homeContent }) {

  return (
    <>
      <div
        className="flex flex-col lg:flex-row xl:flex-row xxl:flex-row
          w-full justify-center items-center pb-20 pt-10
        md:px-8 lg:px-20 xl:px-24 xxl:px-32 px-4 bg-[#fafafa]"
      >
        <div className="h-max md:w-3/6 lg:w-3/6 xl:w-3/6 xxl:w-3/ 6 w-full ">
          <div className="flex mb-3">
            {Icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="p-1 rounded-full bg-transparent flex justify-center items-center border border-[#A0047D] hover:border-none mr-2"
                >
                  <span className="text-[#A0047D] cursor-pointer hover:scale-90 duration-300 delay-200 transition-all text-base xl:text-lg xxl:text-xl">
                    <Link href={icon.path} passHref>
                      <a target={"_blank"}>{icon.icon}</a>
                    </Link>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col font-bold xl:text-xl xxl:text-2xl text-[#A0047D] ">
            <h2>
              {homeContent?.heading}
            </h2>
          </div>
          <div className="text-xs xl:text-sm xxl:text-base text-gray-700 pr-6 text-justify">
            <p>
              {homeContent?.description}
            </p>
          </div>
          <div className="flex py-8">
            <button
              className={
                "border-[1.5px] border-[#A0047D] rounded-full mr-6 px-2 text-sm xl:text-base xxl:text-lg text-main "
              }
            >
              Explore More...
            </button>
            <div className="">
              <div className="flex gap-1 items-center border-[1.5px] border-main rounded-full py-1 ">
                <div>
                  <AiFillPlayCircle className="text-3xl text-main ml-1    " />
                </div>
                <button className="text-main text-sm xl:text-base xxl:text-lg mr-1    ">
                  watch now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full mt-8  md:mt-4 lg:mt-0 xl:mt-0 mx-auto lg:w-3/6 xl:w-3/6 xxl:w-3/6">
          <div className="relative">
            <div className="ml-[3vw]">

              <Image
                src={"/images/girl.jpeg"}
                alt={"/images/girl.jpeg"}
                placeholder="blur"
                blurDataURL={"/images/girl.jpeg"}
                height={50}
                width={50}
                objectFit="cover"
                objectPosition="right"
                layout="responsive"
                className="opacity-80"
              />
            </div>

            <div className="bg-white shadow-[0px_1px_10px_1px_black] h-max py-3 absolute top-[50%] left-[22%]  w-[200px] ">
              <div className="h-full w-full  relative">
                <div className=" h-full w-full flex flex-col justify-center px-4 ml-3">
                  <div className="text-[12px] font-bold text-[#a0047d] Poppins">
                    Featured Course
                  </div>
                  <div className="text-[10px] font-semibold text-black Poppins">
                    Become a Full Stack Developer with MERN Stack
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

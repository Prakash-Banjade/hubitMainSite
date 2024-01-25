// import Link from "next/link";
import Image from "next/image";
import React from "react";
import image from "../../Resources/bg.png";
import { IoMdCopy } from "react-icons/io";
const Body = () => {
  const dataa = [
    {
      images: image,
      name: "nischal karki",
      topic: "learn AI for begineer",
      numbers: "10",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn python for begineer",
      numbers: "1",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn javascript for begineer",
      numbers: "3",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn photoshop for begineer",
      numbers: "5",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn data Science for begineer sss sss ss",
      numbers: "8",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn AI for begineer",
      numbers: "10",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn data Science for begineer sss sss ss",
      numbers: "8",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn AI for begineer",
      numbers: "10",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn python for begineer",
      numbers: "1",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn data Science for begineer sss sss ss",
      numbers: "8",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn javascript for begineer",
      numbers: "3",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn photoshop for begineer",
      numbers: "5",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn AI for begineer",
      numbers: "10",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn data Science for begineer sss sss ss",
      numbers: "8",
    },
    {
      images: image,
      name: "nischal karki",
      topic: "learn java for begineer",
      numbers: "26",
    },
  ];
  return (
    <>
      <section className="">
        <div className=" items-center justify-center  xl:mt-16 xxl:mt-16">
          <h1 className="text-center text-main font-bold text-xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
            Our Library
          </h1>
          <h3 className="text-center text-base font-medium text-gray-600 w-7/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quisquam, officiis eveniet deserunt nemo at repellendus nam delectus
            ratione, quos suscipit.
          </h3>
        </div>

        <div>
          <div className="p-10  md:flex xl:flex xxl:flex  flex-wrap gap-x-5 gap-y-10 w-full items-center my-16 ">
            {dataa.map((val, i) => {
              return (
                <div
                  key={i}
                  className="shadow-xl shadow-[#aeadad] cursor-pointer 
            hover:scale-105 transition-all ease-in-out duration-200 delay-75 
             w-[300px] md:w-[250px] xl:w-[250px] xxl:w-[250px] my-6 xl:my-0 xxl:my-0  "
                >
                  <div className="w-[300px] md:w-[250px] xl:w-[250px] xxl:w-[250px]  ">
                    <Image
                      src={val.images}
                      layout="responsive"
                      // objectfit="cover"
                      // objectPosition={"center"}
                      alt="Loading ..."
                      className="   object-cover object-center"
                    />{" "}
                  </div>
                  <div className="px-4  mt-4 capitalize text-sm line-clamp-1 w-11/12 ">
                    {val.topic}
                  </div>
                  <div className="w-11/12 h-[1px] bg-gray-300 my-4 mx-auto"></div>
                  <div className="flex justify-between items-center px-4 pb-3">
                    <div className="w-10 h-10 bg-gray-300  rounded-full">
                      <Image
                        src={val.images}
                        layout="responsive"
                        // objectfit="cover"
                        width={100}
                        height={100}
                        alt="Loading ..."
                        className=" object-cover rounded-full object-center"
                      />{" "}
                    </div>
                    <div className="capitalize text-sm">{val.name}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg">
                        <IoMdCopy />
                      </div>
                      <div className="text-sm">{val.numbers}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;

import Image from "next/image";
import React from "react";
// import MidSectionNav from "./MidSectionNav";
import image from "../../Resources/bg.png";
import PaginationSibling from "../PaginationSibling/PaginationSibling";
const MidSection = () => {
  const Data = [
    {
      image: image,
      date: "jan10,2023 ",
      title: "holiday concern with prithivi jyanthi for tommorrow ",
      desc: `HUB IT is recognized as one of Nepal’s best global skill development and IT training centers. The journey of HUB IT started in 2017 with a big dream to bring applied education to the mass population at an affordable cost. The main purpose of HUB IT is to facilitate, with the best IT-related skills.`,
    },
    {
      image: image,
      date: "jan10,2023 ",
      title: "holiday concern with prithivi jyanthi for tommorrow ",
      desc: `HUB IT is recognized as one of Nepal’s best global skill development and IT training centers. The journey of HUB IT started in 2017 with a big dream to bring applied education to the mass population at an affordable cost. The main purpose of HUB IT is to facilitate, with the best IT-related skills.`,
    },
    {
      image: image,
      date: "jan10,2023 ",
      title: "holiday concern with prithivi jyanthi for tommorrow ",
      desc: `HUB IT is recognized as one of Nepal’s best global skill development and IT training centers. The journey of HUB IT started in 2017 with a big dream to bring applied education to the mass population at an affordable cost. The main purpose of HUB IT is to facilitate, with the best IT-related skills.`,
    },
    {
      image: image,
      date: "jan10,2023 ",
      title: "holiday concern with prithivi jyanthi for tommorrow ",
      desc: `HUB IT is recognized as one of Nepal’s best global skill development and IT training centers. The journey of HUB IT started in 2017 with a big dream to bring applied education to the mass population at an affordable cost. The main purpose of HUB IT is to facilitate, with the best IT-related skills.`,
    },
    {
      image: image,
      date: "jan10,2023 ",
      title: "holiday concern with prithivi jyanthi for tommorrow ",
      desc: `HUB IT is recognized as one of Nepal’s best global skill development and IT training centers. The journey of HUB IT started in 2017 with a big dream to bring applied education to the mass population at an affordable cost. The main purpose of HUB IT is to facilitate, with the best IT-related skills.`,
    },
    {
      image: image,
      date: "jan10,2023 ",
      title: "holiday concern with prithivi jyanthi for tommorrow ",
      desc: `HUB IT is recognized as one of Nepal’s best global skill development and IT training centers. The journey of HUB IT started in 2017 with a big dream to bring applied education to the mass population at an affordable cost. The main purpose of HUB IT is to facilitate, with the best IT-related skills.`,
    },
  ];
  const numbers = [1, 2];
  return (
    <div className=" px-4 md:px-28 lg:px-28  xl:px-28  xxl:px-28  md:py-20 lg:py-20 xl:py-20 xxl:py-20 py-12">
      {/* <MidSectionNav />
      <div classNameName="flex flex-col gap-2 items-center justify-center">
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <div
              className="bg-[#DCDCDC] rounded-lg flex items-center mx-auto border-b-2 pb-10  border-gray-300 w-[80vw]   xl:w-[60vw] xxl:w-[60vw] lg:w-[80vw]"
              key={i}
            >
              <div className=" sm:mr-10 inline-flex items-center justify-center   flex-shrink-0">
                <image
                  src="https://wallpaperaccess.com/full/8044061.jpg"
                  alt=""
                  className="ml-10 mt-10 rounded-lg  h-20 w-24"
                />
              </div>
              <div></div>
            </div>
          );
        })}
      </div> */}
      {/* <PaginationSibling /> */}
      <div className=" md:flex lg:flex xl:flex xxl:flex  ">
        <div>
          {Data.map((val, i) => {
            return (
              <div key={i}>
                <div className="md:flex lg:flex xl:flex xxl:flex gap-10 items-start mb-10">
                  <div className="w-[360px] md:w-[250px] xl:w-[250px] xxl:w-[300px] mb-5 md:mb-0 xl:mb-0 xxl:mb-0 ">
                    <Image
                      src={val.image}
                      layout="responsive"
                      height={350}
                      width={400}
                      // objectfit="cover"
                      // objectPosition={"center"}
                      alt="Loading ..."
                      className="   object-cover object-center"
                    />{" "}
                  </div>
                  <div className="md:w-7/12 lg:w-7/12 xl:w-7/12 xxl:w-7/12 ">
                    <div className="font-medium capitalize text-lg Poppins">
                      {val.date}/ <span className="text-main">category</span>
                    </div>{" "}
                    <div className="font-normal capitalize text-xl Poppins mt-2">
                      {val.title}
                    </div>
                    <div className="text-gray-600 text-[15px] mt-2 ">
                      {val.desc}
                    </div>
                    <div className="capitalize font-medium border-b-2 mt-5 text-lg hover:text-pink-600 hover:border-pink-600 text-gray-700 cursor-pointer w-fit ">
                      read more
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#e0e0e0]  md:w-[700px] lg:w-[700px]xl:w-[700px]  xxl:w-[700px]  w-fit h-fit px-5 py-5 rounded-[7px]">
          <div className="font-medium capitalize">newsletter</div>
          <div className="w-11/12 font-normal text-sm mt-3 mb-1">
            Subscribe our newsletter to get notification of new updates.
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              className="border border-[#969595] rounded-[19px] placeholder:capitalize font-light outline-none w-full my-3 py-2 px-4 bg-[#e0e0e0] "
            />
          </div>
          <div>
            <button className=" bg-main w-full font-medium text-white  p-2 capitalize rounded-[19px] ">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center my-10 ">
        <div className="bg-main mx-3 px-5 py-3 text-white font-medium rounded-[4px] cursor-pointer ">
          prev
        </div>
        <div className="flex ">
          {numbers.map((val, i) => {
            return (
              <div key={i} className="bg-main mx-3 px-5 py-3 text-white font-medium rounded-[4px] cursor-pointer ">
                {" "}
                {val}
              </div>
            );
          })}
        </div>
        <div className="bg-main mx-3 px-5 py-3 text-white font-medium rounded-[4px] cursor-pointer ">
          next
        </div>
      </div>
    </div>
  );
};

export default MidSection;

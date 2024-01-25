import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AchivementsCard from "./AchivementsCard";


function OurAchivements() {
  const OurAchivementsCard = [
    {
      image: "/images/hero.jpg",

      name: "certificate of achivements",
      from: "Kings college of academy",
      date: "20 aug,2022",
    },
    {
      image: "/images/hero.jpg",

      name: "certificate of achivements",
      from: "Kings college of academy",
      date: "20 aug,2022",
    },
    {
      image: "/images/hero.jpg",

      name: "certificate of achivements",
      from: "Kings college of academy",
      date: "20 aug,2022",
    },
    {
      image: "/images/hero.jpg",

      name: "certificate of achivements",
      from: "Kings college of academy",
      date: "20 aug,2022",
    },
  ];
  return (
    <div className="flex flex-col px-20 pt-24 w-full ">
      <div className="md:flex lg:flex xl:flex xxl:flex  items-center  w-full  justify-center ">
        <div className="text-2xl  text-main Poppins font-bold capitalize">
          our achivement
        </div>
      </div>
      <div
        className="grid grid-cols-1 place-content-center place-items-center gap-y-8 my-0 mx-auto gap-8 md:grid-cols-2 md:gap-y-8
       lg:gap-y-8 xl:gap-y-0 xxl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4
       xxl:grid-cols-4 pt-11"
      >
        {OurAchivementsCard.map((val, i) => {
          return (
            <div key={i}>
              <AchivementsCard
                image={val.image}
                name={val.name}
                from={val.from}
                date={val.date}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center gap-3 mt-5 md:mt-0 lg:mt-0 xl:mt-0 xxl:mt-0 md:px-11 lg:px-11 xl:px-11 xxl:px-11">
          <div
            className=" p-1.5  flex items-center justify-center  bg-main w-fit rounded-full hover:cursor-pointer"
            // onClick={() => prev()}
          >
            <FaChevronLeft className="w-3 h-3  text-white" />
          </div>
          <div
            // onClick={() => next()}
            className=" p-1.5  flex items-center justify-center  bg-main w-fit rounded-full text-white  hover:cursor-pointer"
          >
            <FaChevronRight className="w-3 h-3  text-white" />
          </div>
        </div>
    </div>
  );
}

export default OurAchivements;


import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AchivementsCard from "./AchivementsCard";
import axios from "../../../UI/Axios/Axios"
import { format } from "date-fns";



function OurAchivements() {
  const [achievements, setAchievements] = useState([])

  const getAchievements = async () => {
    try {
      const response = await axios.get("/achievements")
      setAchievements(response?.data?.result)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAchievements()
  }, [])

  return (
    <div className="flex flex-col px-20 pt-24 w-full ">
      <div className="md:flex lg:flex xl:flex xxl:flex  items-center  w-full  justify-center ">
        <div className="text-2xl  text-main Poppins font-bold capitalize">
          our achievement
        </div>
      </div>
      <div
        className="flex justify-center pt-11 gap-4 flex-wrap"
      >
        {achievements.map((val, i) => {
          return (
            <div key={i} className="">
              <AchivementsCard
                image={`${process.env.NEXT_PUBLIC_API_URL}/public/${val.image}`}
                name={val.name}
                from={val.from}
                date={format(new Date(val.date), 'MMM d yyyy')}
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


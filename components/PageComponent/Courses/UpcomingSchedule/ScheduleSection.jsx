import React from "react";
import EnquiryForm from "../UpcomingSchedule/EnquiryForm";
import {
  FaUserPlus,
  FaRegCalendar,
  FaClock,
  FaSignal,
  FaTag,
} from "react-icons/fa";
const Right = () => {
  const data = [
    {
      rIcon: <FaUserPlus />,
      title: "Students",
      data: "250+",
    },
    {
      rIcon: <FaClock />,
      title: "Duration",
      data: "2 Months",
    },
    {
      rIcon: <FaSignal />,
      title: "Chapters",
      data: "20",
    },
    {
      rIcon: <FaUserPlus />,
      title: "Skill Level",
      data: "Beginner",
    },
    {
      rIcon: <FaTag />,
      title: "Category",
      data: "Programming",
    },
  ];
  const subData = [
    {
      rIcon: <FaRegCalendar />,
      title: "1 June, 2022",
      data: "Morning Day Shifts",
    },
    {
      rIcon: <FaRegCalendar />,
      title: "20 June, 2022",
      data: "Evening Shifts",
    },
  ];
  return (
    <div>
      <div className=" shadow-md shadow-gray-200 mt-4 pb-4 lg:pb-6 xl:pb-7 xxl:pb-8">
        <div
          className="text-center md:text-left md:text-xl md:px-4 
        lg:text-3xl text-white font-bold text-md bg-main py-4"
        >
          Upcomming Class Schedule
        </div>
        <div className=" px-4 pt-4 font-medium">
          <div className="">
            {data?.map((val, i) => {
              return (
                <div
                  key={i}
                  className="flex text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-sm my-4 lg:my-5 xl:my-6 xxl:my-7  justify-between"
                >
                  <div className="flex items-center gap-2">
                    {val.rIcon}
                    <p className="">{val.title}</p>
                  </div>
                  <div className="">{val.data}</div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-0.5 bg-gray-300"></div>
          <div className="mt-4">
            {" "}
            <div className="text-left  text-xl lg:text-2xl xl:text-2xl xxl:text-2xl">
              Upcomming Classes
            </div>
            {subData?.map((val, i) => {
              return (
                <div
                  key={i}
                  className="flex text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-sm  my-4 lg:my-5 xl:my-6 xxl:my-7 justify-between"
                >
                  <div className="flex items-center gap-2">
                    {val.rIcon}
                    <p className=""> {val.title}</p>
                  </div>
                  <div className="">{val.data}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;

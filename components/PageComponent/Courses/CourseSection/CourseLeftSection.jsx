import React from "react";
// import Buttom from "../CourseSection/Buttom";

// import Leftbanner from "../CourseSection/LeftBanner";
const CourseLeftSection = () => {
  const data = [
    {
      title: "Overview",
    },
    {
      title: "Curiculam",
    },
    {
      title: "Instructions",
    },
    {
      title: "Reviews",
    },
  ];
  return (
    <div className="w-full">
      <div className=" flex justify-Start bg-stone-200 shadow-sm rounded-sm">
        {data?.map((val, i) => {
          return (
            <div
              key={i}
              className=" hover:bg-pink-600 hover:drop-shadow-lg px-3 py-2 mr-4 duration-500"
            >
              {val.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseLeftSection;

import React, { useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { MdArrowLeft } from "react-icons/md";
import TrainingAccomplished from "./TrainingTabs/TrainingAccomplished";
import TrainingRunning from "./TrainingTabs/TrainingRunning";
import UpcomingTraining from "./TrainingTabs/UpcomingTraining";

function TrainingTabs() {
  const [ActiveTab, setActiveTab] = useState("training accomplished");
  const Tabs = [
    { title: "training accomplished" },
    { title: "training running" },
    { title: "upcoming training" },
  ];
  const handleClick = (title) => {
    setActiveTab(title);
  };
  let mod;
  switch (ActiveTab) {
    case "training accomplished":
      mod = <TrainingAccomplished />;
      break;
    case "training running":
      mod = <TrainingRunning />;
      break;
    case "upcoming training":
      mod = <UpcomingTraining />;
      break;
    default:
      break;
  }
  return (
    <div className="px-12  w-full mx-auto">
      <div
        className={`md:flex xl:flex xxl:flex  gap-5 items-center capitalize mt-14 md:mt-28 xl:mt-28 xxl:mt-28  `}
      >
        {Tabs.map((val, i) => {
          return (
            <div key={i}>
              <button
                onClick={() => handleClick(val.title)}
                className={`${
                  ActiveTab === val.title
                    ? "text-main  border-b py-1 border-main"
                    : ""
                } capitalize font-medium my-2 md:my-0  xl:my-0 xxl:my-0  outline-none`}
              >
                {/* {val.title} */}
                {val.title}
              </button>
            </div>
          );
        })}
      </div>
      <div>{mod}</div>{" "}
      <div className="flex w-fit mx-auto items-center justify-center cursor-pointer capitalize">
        <div className="">show more</div>
        <div className="">
          <MdArrowLeft className="h-9 w-9 rotate-[270deg]" />
        </div>
      </div>
    </div>
  );
}

export default TrainingTabs;

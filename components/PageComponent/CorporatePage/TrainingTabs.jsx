import React, { useEffect, useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { MdArrowLeft } from "react-icons/md";
import TrainingAccomplished from "./TrainingTabs/TrainingAccomplished";
import TrainingRunning from "./TrainingTabs/TrainingRunning";
import UpcomingTraining from "./TrainingTabs/UpcomingTraining";

function TrainingTabs({ trainings }) {
  const [activeTab, setActiveTab] = useState("completed");

  const [currentTrainings, setCurrentTrainings] = useState(trainings?.filter(training => training?.status === activeTab))

  const Tabs = [
    { title: "completed" },
    { title: "running" },
    { title: "upcomming" },
  ];

  useEffect(() => {
    setCurrentTrainings(trainings?.filter(training => training?.status === activeTab))
  }, [activeTab, trainings])

  return (
    <div className="px-12  w-full mx-auto">
      <div
        className={`md:flex xl:flex xxl:flex  gap-5 items-center capitalize mt-14 md:mt-28 xl:mt-28 xxl:mt-28  `}
      >
        {Tabs.map((val, i) => {
          return (
            <div key={i}>
              <button
                onClick={() => setActiveTab(val.title)}
                className={`${activeTab === val.title
                  ? "text-main  border-b py-1 border-main"
                  : ""
                  } capitalize font-medium my-2 md:my-0 text-2xl xl:my-0 xxl:my-0  outline-none`}
              >
                {val.title}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <TrainingAccomplished trainings={currentTrainings} />
        {
          currentTrainings?.length === 0 && <span className="text-gray-500 italic my-4">**No trainings for this category**</span>
        }

      </div>
    </div>
  );
}

export default TrainingTabs;

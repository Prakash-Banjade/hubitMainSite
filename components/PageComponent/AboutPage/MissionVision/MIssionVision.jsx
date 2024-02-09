//import { data } from "autoprefixer";
import React from "react";
import { GiBinoculars } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { TbClipboardText } from "react-icons/tb";

function MIssionVision({ vision, objectives, mission }) {
  const data = [
    {
      color: "#F2C351",
      icon: <GiBinoculars />,
      title: "vision",
      description: vision || ""
    },
    {
      margin: "300px",
      color: "#1FA67A",
      icon: <IoIosRocket />,
      title: "mission",
      description: mission || ""
    },
    {
      color: '#5A5ECA',
      icon: <TbClipboardText />,
      title: "objectives",
      description: objectives || ""
    },
  ];
  return (
    <div className="px-12 lg:px-20 xl:px-36 xxl:px-24">
      <div className="flex flex-col gap-12">
        <div>
          {data.map((val, i) => {
            return (
              <div key={i} className="flex  capitalize my-20 ">
                <div className=" text-4xl w-fit h-fit p-5 mt-5 rotate-45   rounded-md text-white" style={{ background: val.color, marginLeft: val.margin }}>
                  <div className="-rotate-45" >
                    {val.icon}
                  </div>
                </div>
                <div>
                  <div className="my-1 Poppins text-main text-xl">
                    {val.title}
                  </div>
                  <div className="Poppins font-regular my-1 w-full  pl-5 text-xs text-gray-600 ">
                    <p className="">{val.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div>pics & videos</div> */}
      </div>
    </div>
  );
}

export default MIssionVision;

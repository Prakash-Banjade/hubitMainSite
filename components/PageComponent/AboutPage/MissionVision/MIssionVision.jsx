//import { data } from "autoprefixer";
import React from "react";
import { GiBinoculars } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { TbClipboardText } from "react-icons/tb";

function MIssionVision() {
  const data = [
    {
      color:"#F2C351",
      icon: <GiBinoculars />,
      title: "vision",
      description:
        "Our vision at the HIGPL is to empower individuals and organizations with the knowledge and skills they need to get started in digital Nepal. We are glad to be the leading provider of quality education and services in the field of information technology.",
    },
    {
      margin:"300px",
      color:"#1FA67A",
      icon: <IoIosRocket />,
      title: "mission",
      description:
        "Our mission at the HIGPL is to provide high-quality education, services and proper infrastructure to individuals and organizations in information technology. We aim to achieve this through offering a range of updated courses, proper infrastructure, and best quality services and make the dream of digital Nepal true.",
    },
    {
      color:'#5A5ECA',
      icon: <TbClipboardText />,
      title: "objectives",
      description:
        " Our mission at the HIGPL is to provide high-quality education, services and proper infrastructure to individuals and organizations in information technology. We aim to achieve this through offering a range of updated courses, proper infrastructure, and best quality services and make the dream of digital Nepal true.        ",
    },
  ];
  return (
    <div className="px-12 lg:px-20 xl:px-36 xxl:px-24">
      <div className="flex flex-col gap-12">
        <div>
          {data.map((val, i) => {
            return (
              <div key={i} className="flex  capitalize my-20 ">
                <div className=" text-4xl w-fit h-fit p-5 mt-5 rotate-45   rounded-md text-white" style={{background:val.color, marginLeft:val.margin}}>
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

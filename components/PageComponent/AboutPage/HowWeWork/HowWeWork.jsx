import React from "react";
import { BsPeopleFill, BsShareFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { ImPriceTags } from "react-icons/im";

function HowWeWork({ howwework, image }) {
  const data = [
    {
      color_1: "#A0047D",
      text_color: "#FFFFFF",
      color_2: "#7D0061",
      icon: <BsPeopleFill />,
      title: "create a team",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
    {
      color_1: "#EEEAEA",
      text_color: "#000000",
      color_2: "#BDBBBB",
      icon: <IoMail />,
      title: "add inbox",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
    {
      color_1: "#EEEAEA",
      text_color: "#000000",
      color_2: "#BDBBBB",
      icon: <ImPriceTags />,
      title: "create tags",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
    {
      color_1: "#A0047D",
      text_color: "#FFFFFF",
      color_2: "#7D0061",
      icon: <BsShareFill />,
      title: "share the work load",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
  ];
  const working = [
    {
      image: ''
    }
  ]
  return (
    <div className="px-5 lg:px-20 xl:px-20 xxl:px-20">
      <div>
        <div className="text-2xl text-center  text-main Poppins font-bold capitalize">
          how we work
        </div>

        <div className=" Poppins max-w-none prose text-sm text-center mx-auto  mt-5 text-gray-400   capitalize">
          <div dangerouslySetInnerHTML={{ __html: howwework }} />
        </div>

        {

          working.map((val, i) => {
            return (<div key={i} className="relative w-40 h-40 mx-auto my-6 ">
              {/* <Image src={val.image} alt='' className='' layout="fill" /> */}
              <div className="h-24 w-24 bg-gray-600"></div>
            </div>
            )
          })

        }


      </div>

      <div>
        <div className=" grid grid-cols-2 mx-auto w-5/6  place-items-center  " >
          {data.map((val, i) => {
            return (
              <div key={i} className="flex flex-col my-5 h-32 w-96 capitalize rounded-lg p-3 "
                style={{
                  background: val.color_1,
                  color: val.text_color
                }}>
                <div className="flex w-fit items-center  gap-2  p-2 rounded-lg" style={{ background: val.color_2 }}>
                  <div className=" text-lg w-fit h-fit   ">
                    {val.icon}
                  </div>
                  <div className="flex Poppins text-md" >{val.title}</div>
                </div>
                <div>

                  <div className="my-1  text-[10px] Poppins ">
                    {val.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
}

export default HowWeWork;

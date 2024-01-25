import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Collapse from "@kunukn/react-collapse";
import { HiCheckCircle } from "react-icons/hi";
function RightSideCertificateData() {
  const [IDs, setIDs] = useState("");
  const [toggle, setToggle] = useState("related degrees");
  //   var coll = document.getElementsByClassName("collapsible");
  const toggleCollapse = (id) => {
    // setToggle(!toggle);
    setIDs(id);
  };
  const Collapsable = [
    {
      title: "related degrees",
      subTitles: [
        {
          subtitle: "software engineer",
          subdatas: [
            {
              subdata: "3D Animation and Videogame Art",
              units: "69units",
            },
            { subdata: "Digital Art and Animation", units: "60units" },
          ],
        },
        {
          subtitle: "software engineer",
          subdatas: [
            {
              subdata: "3D Animation and Videogame Art",
              units: "69units",
            },
            { subdata: "Digital Art and Animation", units: "60units" },
          ],
        },
        {
          subtitle: "software engineer",
          subdatas: [
            {
              subdata: "3D Animation and Videogame Art",
              units: "69units",
            },
            { subdata: "Digital Art and Animation", units: "60units" },
          ],
        },
      ],
    },
    {
      title: "carrer opportunities",
      description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, labore aut! Perspiciatis atque adipisci quaerat tenetur fugit voluptatem quas placeat, labore assumenda, odio, animi veritatis! Labore quae mollitia enim ex!
      This certificate prepares students for the career of web design. Web designers are typically responsible for the design, interface, navigation, and update of websites. Web designers use a number of graphic and web creation computer software to create these websites. The Multimedia program provides the latest software and hardware to students in the web design certificate program. Faculty members have extensive industry experience and their expertise is critical to the success of students in this exciting and creative field.`,
    },
    {
      title: "program learning",
      subTitles: [
        {
          subtitle: "Students completing this program will be able to:",
          subdatas: [
            {
              subdata:
                "Communicate design concepts clearly and concisely (i.e. visual, oral, and written).",
            },
            {
              subdata:
                "Develop competitive industry standard skills in the respective fields.",
            },
            {
              subdata:
                "Understand the elements and principles of design through discipline-specific implementation.",
            },
          ],
        },
        {
          subtitle: "Students completing this program will be able to:",
          subdatas: [
            {
              subdata:
                "Communicate design concepts clearly and concisely (i.e. visual, oral, and written).",
            },
            {
              subdata:
                "Develop competitive industry standard skills in the respective fields.",
            },
            {
              subdata:
                "Understand the elements and principles of design through discipline-specific implementation.",
            },
          ],
        },
        {
          subtitle: "Students completing this program will be able to:",
          subdatas: [
            {
              subdata:
                "Communicate design concepts clearly and concisely (i.e. visual, oral, and written).",
            },
            {
              subdata:
                "Develop competitive industry standard skills in the respective fields.",
            },
            {
              subdata:
                "Understand the elements and principles of design through discipline-specific implementation.",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="">
      {" "}
      {Collapsable.map((val, i) => {
        if (val.subTitles) {
          return (
            <div
              key={i}
              className=" border bg-white rounded-[2px]  my-3 w-[100%]"
            >
              <div
                onClick={() => toggleCollapse(i)}
                className={` bg-main bg-opacity-95 text-white cursor-pointer flex justify-between capitalize
                text-lg px-3 py-3 rounded-[3px]`}
              >
                <div> {val.title}</div>
                <div>
                  {IDs == i ? (
                    <MdKeyboardArrowUp className="w-7 h-7" />
                  ) : (
                    <MdKeyboardArrowDown className="w-7 h-7" />
                  )}
                </div>
              </div>
              <Collapse
                isOpen={IDs == i}
                // state ko value yeha change huni raicha like true or false
                className={
                  "app__collapse app__collapse--gradient " +
                  (IDs ? "app__collapse--active UserProfile " : "UserProfile ")
                }
                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                aria-hidden={IDs ? "false" : "true"}
                elementType="article"
                render={() => (
                  <React.Fragment>
                    <div>
                      {val?.subTitles?.map((subval, ind) => {
                        return (
                          <div key={ind} className="">
                            <div className="px-3 py-2 m-1  flex gap-2 bg-[#c5ef0] items-center">
                              {" "}
                              <div className="uppercase font-medium bg-main bg-opacity-90 text-white w-8 h-8 flex justify-center items-center">
                                {subval.subtitle[0]}
                              </div>
                              <div className="capitalize text-mainColor  text-lg font-medium line-clamp-1">
                                {subval.subtitle}
                              </div>
                            </div>
                            <div>
                              {subval?.subdatas?.map((sub, ind) => {
                                return (
                                  <div
                                    key={ind}
                                    className="flex gap-5  items-center border-b px-3 py-1 text-gray-600 text-sm"
                                  >
                                    <div className="flex gap-1 items-center text-[#656565] p-1">
                                      <div>
                                        <HiCheckCircle className="h-5 w-5" />
                                      </div>
                                      <div>{sub.subdata}</div>
                                    </div>
                                    <div className="text-[#a9a8a8]">
                                      {sub.units}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </React.Fragment>
                )}
              />
            </div>
          );
        } else {
          return (
            <div key={i} className=" border   my-3 w-[100%]">
              <div
                onClick={() => toggleCollapse(i)}
                className={`bg-main text-white bg-opacity-95cursor-pointer flex justify-between capitalize
                 text-lg px-3 py-3 rounded-[2px] `}
              >
                <span>{val.title}</span>
                <div>
                  {IDs === i ? (
                    <MdKeyboardArrowUp className="w-7 h-7" />
                  ) : (
                    <MdKeyboardArrowDown className="w-7 h-7" />
                  )}
                </div>
              </div>
              <Collapse
                isOpen={IDs === i}
                // state ko value yeha change huni raicha like true or false
                className={
                  "app__collapse app__collapse--gradient " +
                  (IDs ? "app__collapse--active UserProfile " : "UserProfile ")
                }
                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                aria-hidden={IDs ? "false" : "true"}
                elementType="article"
                render={() => (
                  <React.Fragment>
                    {/* {(toggle && IDs === i) || ( */}
                    <div className="p-4  bg-white text-justify text-gray-600 text-sm">
                      {val.description}
                    </div>
                    {/* )} */}
                  </React.Fragment>
                )}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default RightSideCertificateData;

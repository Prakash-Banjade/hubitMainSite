import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { fadeInLeft } from "react-animations";
// import Radium, { StyleRoot } from "radium";
import { NavData } from "../NavData";
import Link from "next/link";
import { useRouter } from "next/router";
function SideBar({ iconClick, setIconClick }) {
  const router = useRouter();
  console.log(router);

  // const styles = {
  //   fadeInLeft: {
  //     animation: "x 1s",
  //     animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  //   },
  // };
  return (
    <div className="lg:hidden xl:hidden xxl:hidden bg-black bg-opacity-50 grid grid-cols-12  z-50 fixed top-0 bottom-0 left-0 right-0 w-full  h-full">
      {/* for mobile devices */}

      <div className="py-3 px-3 col-span-4">
        {/* <StyleRoot> */}
          {iconClick ? (
            <div
              className="capitalize flex flex-col  h-full w-64  absolute top-0 bottom-0 z-50 left-0 gap-4 py-10  bg-gray-700 "
              // style={styles.fadeInLeft}
            >
              {NavData.map((val, i) => {
                return (
                  <div className="w-full " key={i}>
                    <Link href={val.path} passHref>
                      <div
                        className={`${
                          val.path === router.asPath
                            ? "bg-white text-gray-900"
                            : "text-white"
                        }  w-56 mx-auto py-2 px-5 Poppins hover:bg-white hover:text-gray-900  rounded-md cursor-pointer`}
                      >
                        {val.title}
                      </div>
                    </Link>

                    {/* {val.path !== "/notice" ? (
                  <div className="w-0.5 h-3.5 bg-gray-600"></div>
                ) : (
                  ""
                )} */}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        {/* </StyleRoot> */}
      </div>
      <div className="col-span-8 " onClick={() => setIconClick(false)}>
        <div className=" md:mt-3 md:ml-2 flex justify-end md:justify-start w-full p-2">
          <AiOutlineClose
            className="w-10 h-10 text-white  cursor-pointer
            rounded-full p-1.5 border-2 hover:scale-105 transition-all ease-in-out duration-300 "
            onClick={() => setIconClick(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;

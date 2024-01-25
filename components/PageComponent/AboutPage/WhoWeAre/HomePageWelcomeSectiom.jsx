import React from "react";
import { FaPlay } from "react-icons/fa";
import { CgQuote } from "react-icons/cg";

function HomePageWelcomeSection({ play }) {
  return (
    <div className=" relative  h-full">
      <div
        className="h-96  lg:h-full xl:h-full xxl:h-full lg:w-full py-32 text-main bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(190,9,206,0.425973389355743) 20%, rgba(0,0,0,0.00979166666666667) 55%, rgba(0,0,0,0.00129586834733894) 80%, rgba(0,0,0,0.00295973389355743) 100%), url(https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHN2ZyUyMHN0dWRlbnQlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",

          // "linear-gradient(0deg, rgba(2,0,36,0.8995973389355743) 20%, rgba(1,85,124,0.6979166666666667) 55%, rgba(0,179,221,0.3029586834733894) 80%, rgba(0,212,255,0) 100%), url(https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        }}
      >
        <div className="text-center flex flex-col justify-center items-center  h-full ">
          <h1 className=" text-2xl md:text-5xl font-openSansEight">
            {" "}
            WELCOME TO HUB IT
          </h1>
          {/* <p className=" text-xs md:text-xl  animate-pulse  font-openSansFive  -mt-2 md:-mt-8">
            hello world
          </p> */}
          <div
            className="flex flex-col items-center my-4 md:my-8 
          justify-center "
          >
            <div
              className="absolute  bg-white h-10 w-10
              
              rounded-full p-3 transition animate-pulse  cursor-pointer "
              onClick={play}
            >
              <FaPlay className="text-primary " />
            </div>
          </div>
        </div>
      </div>
      <div className="  borer-gray-500 h-28   w-10/12  md:w-10/12 xxl:w-11/12 relative z-30 md:left-16 xxl:left-6 rounded-xl bottom-14">
        <div className="  border-2 border-gray-200 h-full w-full   bg-white  opacity-70 rounded-lg    "></div>
        <div className="absolute  left-5 md:left-5 xxl:left-5 md:w-11/12 xxl:w-11/12   bottom-3 flex   mx-auto ">
          <div>
            {" "}
            <CgQuote />
          </div>
          <div className="w-12/12 mx-auto text-justify">
            ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores
            tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt
            delectus, alias veniam dolorem fugiat temporibus quasi, animi
            maxime!
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageWelcomeSection;

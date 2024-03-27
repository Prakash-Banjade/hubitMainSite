import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "../../../UI/Axios/Axios"
//import HomePageWelcomeSection from "./HomePageWelcomeSectiom";
// import ReactPlayer from "react-player";

function WhoWeAre({ description, videolink }) {
  // const nextVideo = useRef(null);
  // const [show, setshow] = useState(false);
  // const play = (e) => {
  //   setshow(true);
  // };
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);


  return (
    <div className="px-4 lg:px-20 xl:px-24 xxl:px-32 pt-8 pb-20">
      <div className="Poppins xl:text-xl xxl:text-2xl text-main">
        <h1 className=" font-bold">Who We Are ?</h1>
      </div>
      <div className="grid grid-cols-1 gap-12 mt-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 ">
        <div className="row-start-2 lg:row-start-1  xl:row-start-1 text-justify xxl:row-start-1">
          <div className="text-sm prose xl:text-sm xxl:text-base text-gray-700 text-justify">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
        <div className="">
          {hasWindow && (
            <ReactPlayer
              url={videolink}
              loop={true}
              controls={true}
              width="100%"
              height="320px"
            />
          )}
        </div>
      </div>
    </div >
  );
}

export default WhoWeAre;

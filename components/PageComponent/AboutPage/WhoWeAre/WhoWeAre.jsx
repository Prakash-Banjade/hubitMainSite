import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
//import HomePageWelcomeSection from "./HomePageWelcomeSectiom";
// import ReactPlayer from "react-player";

function WhoWeAre() {
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
          <div className="text-sm xl:text-sm xxl:text-base text-gray-700 text-justify">
            <p>
            Welcome to our HUB IT Group Pvt.Ltd. We have 
            started our service journey from 2017 for then 
            till now it has been a wonderful journey.
            We are thrilled to have you visiting
            our website and learning more about our institution
              <br />
              <br />
              {`At our cooperation, we believe that information technology
               is the backbone of any successful organization, and we 
               are committed to providing the highest quality education 
               and training,services and tech support to every aspect of 
               life. We understand that the IT industry is constantly changing, 
               and our goal is to stay ahead of the curve by providing our clients 
               with the skills and knowledge they need to succeed in today's digital age`}
              <br />
              <br />
              Our all tech teams are among the best in the industry, and they 
              are committed to provide best and market demanding skills to 
              students with a well-rounded education that combines both 
              theoretical and practical knowledge. Also we provide best tech 
              support and services to the clients if they need us and our services. 
              Which is why we provide our students with the opportunity to work on 
              real-world projects and case studies that gives them an edge in market 
              and personal growth.
              <br />
              <br />
              We are proud of the many accomplishments of our 
              alumni and the impact they have made in the field of IT. 
              We are dedicated to helping our students reach their full 
              potential and achieve their career goals and create impact towards 
              changing life and lifestyle
            </p>
          </div>
        </div>
        <div className="">
          {hasWindow && (
            <ReactPlayer
              url="https://youtu.be/sKA1hmPkcTA"
              loop={true}
              controls={true}
              width="100%"
              height="320px"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;

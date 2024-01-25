import React, { useState, useEffect } from "react";
// import /japan.jpg from "";
import Regular from "./TabComponents/Regular";
function WhatClientsSays() {
  const [Active, setActive] = useState("regular");
  const tabs = [
    { title: "regular" },
    { title: "facebook" },
    { title: "google" },
  ];

  const Regulars = [
    {
      image: "/images/japan.jpg",
      name: "Gayatri Malla",
      title: "Python",
      description: `I have been studying Python Programming Language at Hub IT since 2 months. It has been a knowledgeable learning also build-up my confidence towards programming. Hub IT has a friendly environment and our Python Teacher is great in teaching.`,
    },
    {
      image: "/images/japan.jpg",
      name: "Saroj GC",
      title: "CCNA",
      description: `Hub IT, for me, is one of the best places for learners (specially IT). I am happy to choose the institute for enhancing my Computer Networking knowledge with CCNA course. Thumbs UP!`,
    },
    {
      image: "/images/japan.jpg",
      name: "Prayab Maharjan",
      title: "MERN",
      description: `My time in the Institute was very satisfying. Teachers were very friendly and cooperative. Learning environment was also very suitable for beginners as well as veterans.
      Thank you a lot HUB IT for providing a perfect learning experience to me.`,
    },
    {
      image: "/images/japan.jpg",
      name: "Jenish Shrestha",
      title: "Web Designing",
      description: `It's a nice place to study IT related subjects it has a wide range of courses available I've been studying here for last 2 and a half months it's been a very fruitfull journey`,
    },
  ];

  const Facebook = [
    {
      image: "/images/japan.jpg",
      name: "rajiv das",
      title: "student",
      description: `Lorem Ipsindustry. dummy text ever .`,
    },
    {
      image: "/images/japan.jpg",
      name: "raymant das",
      title: "student",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: "/images/japan.jpg",
      name: "kavi vai",
      title: "teacher",
      description: `ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: "/images/japan.jpg",
      name: "sahil sainju",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
  ];
  const Google = [
    {
      image: "/images/japan.jpg",
      name: "rohit karki",
      title: "student",
      description: `Lorem Ipsindustry. dummy text ever .`,
    },
    {
      image: "/images/japan.jpg",
      name: "nischal karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: "/images/japan.jpg",
      name: "pratik karki",
      title: "teacher",
      description: `ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: "/images/japan.jpg",
      name: "goma  karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: "/images/japan.jpg",
      name: "ramchandra  karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: "/images/japan.jpg",
      name: "mickey  karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
  ];
  const [counter, setCounter] = useState(1);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 2,
  });
  // logic starts for slicing card for dynamic numbers
  let EndValue = counter * pagination.end;
  let StartValue = EndValue - pagination.end;

  const prev = (val) => {
    // console.log(StartValue, EndValue, counter, clientDetails);
    // perPageChange
    let PageChange = Math.ceil(val.length / pagination.end);
    // setCounter ko increment and decrement login implementation
    let counterDecrement = counter > 1 ? counter - 1 : PageChange;
    // let counterIncrement = counter < PageChange ? counter + 1 : PageChange;
    setCounter(counterDecrement);
  };
  const next = (val) => {
    console.log(StartValue, EndValue, counter, val.length, val);
    // perPageChange

    let PageChange = Math.ceil(val.length / pagination.end);
    // setCounter ko increment and decrement login implementation
    // let counterDecrement = counter > 1 ? counter - 1 : counter;
    let counterIncrement = counter < PageChange ? counter + 1 : 1;
    setCounter(counterIncrement);
  };

  const tabClick = () => {
    switch (Active) {
      case "regular":
        return (
          <Regular
            clientDetails={Regulars}
            StartValue={StartValue}
            EndValue={EndValue}
            prev={prev}
            next={next}
          />
        );
        break;
      case "facebook":
        return (
          <Regular
            clientDetails={Facebook}
            StartValue={StartValue}
            EndValue={EndValue}
            prev={prev}
            next={next}
          />
        );
        break;
      case "google":
        return (
          <Regular
            clientDetails={Google}
            StartValue={StartValue}
            EndValue={EndValue}
            prev={prev}
            next={next}
          />
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className=" py-8">
      <div className=" text-center">
        <div className=" md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl text-main capitalize Poppins font-bold">
          <h2 className="text-[18px]">What our students say about us</h2>
        </div>
        <div className="Poppins  font-light my-3 text-sm  text-gray-700  ">
          <p className="text-xs">
            Here some testimonials about the experience of our students in
            <span className="text-main font-medium">HUB IT TRAINING</span>
          </p>
        </div>
      </div>
      <div className="flex gap-3 px-[6rem] capitalize Popppins font-semibold">
        {tabs.map((val, i) => {
          return (
            <div
              key={i}
              className={`cursor-pointer ${
                Active === val.title ? "text-main" : ""
              }`}
              onClick={() => setActive(val.title)}
            >
              {val.title}
            </div>
          );
        })}
      </div>
      {tabClick()}
    </div>
  );
}

export default WhatClientsSays;

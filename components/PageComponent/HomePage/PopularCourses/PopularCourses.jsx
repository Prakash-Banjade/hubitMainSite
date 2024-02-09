import React, { useState, useEffect, useRef } from "react";
import { GiGraduateCap } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "../../../UI/Axios/Axios";
function PopularCourses({ card: courses, value }) {
  const [category, setCategory] = useState([]);

  //get category
  const getCategory = () => {
    try {
      axios
        .get("/category")
        .then((res) => {
          setCategory(res.data?.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const color = (c) => {
    switch (c) {
      case "programming":
        return "text-blue-500";
      case "account & finance":
        return "text-green-600";
      case "Basic Computer":
        return "text-[#a0047d]";
      case "Graphic Designing":
        return "text-orange-500";
      case "default":
        return "text-black";
    }
  };

  // for multiplesearchfilter
  const handleFilter = (e) => {
    return e.filter((option) => {
      return (
        option?.name.toLowerCase().includes(e.target.value.toLowerCase()),
        option.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });
  };

  let currentPageRef = useRef(0);

  const [counter, setCounter] = useState(1);
  const [pagination, setPagination] = useState(
    value === "onlyTag"
      ? {
        // start: 0,
        end: 4,
      }
      : {
        // start: 0,
        end: 8,
        pageCount: [],
      }
  );

  // logic starts for slicing courses for dynamic numbers
  let EndValue = counter * pagination.end;
  let StartValue = EndValue - pagination.end;
  // perPageChange
  let PageChange = Math.ceil(courses?.length / pagination.end);
  // setCounter ko increment and decrement login implementation

  const prev = () => {
    // console.log(StartValue, EndValue, counter, courses);
    let counterDecrement = counter > 1 ? counter - 1 : PageChange;
    setCounter(counterDecrement);
    value === "onlyTag"
      ? (currentPageRef.current.style.animation = "prevPage 1s forwards")
      : "";
  };
  const next = () => {
    // console.log(StartValue, EndValue, counter, courses.length);
    let counterIncrement = counter < PageChange ? counter + 1 : 1;
    setCounter(counterIncrement);
    value === "onlyTag"
      ? (currentPageRef.current.style.animation = "nextPage 1s forwards")
      : "";
  };

  const HandleMultipleLoopPerClick = () => {
    for (let i = 1; i <= PageChange; i++) {
      pagination.pageCount.push(i);
    }
  };
  const handleClick = (val) => {
    setCounter(val);
  };

  useEffect(() => {
    let interval = setTimeout(() => {
      if (value === "onlyTag") {
        currentPageRef.current.style.animation = "nextpage .5s forwards";
        next();
      }
    }, 3000);
    return () => clearTimeout(interval);
  });

  return (
    <div className="overflow-hidden">
      <div
        className={`flex flex-col justify-between ${value === "onlyTag"
          ? "px-4 md:px-8 lg:px-12 xl:px-14 xxl:px-16"
          : "p-0"
          } `}
      >
        {value === "onlyTag" ? (
          <div className=" flex flex-col justify-between items-center">
            {" "}
            <div className="bg-main rounded-full mt-10 p-1">
              <GiGraduateCap className="text-2xl xl:text-3xl xxl:text-4xl text-white" />
            </div>
            <div className="text-lg xl:text-xl xxl:text-2xl my-1 capitalize Poppins font-bold">
              our popular courses
            </div>
            <div className="capitalize Poppins mb-5  bg-gray-100 font-semibold px-4 py-1.5 mt-2  rounded-full text-[8px] xl:text-[10px] xxl:text-xs  text-gray-800 cursor-pointer">
              explore more courses
            </div>
          </div>
        ) : value === "courses" ? (
          ""
        ) : (
          ""
        )}
        {value === "onlyTag" ? (
          <div className="flex px-5 justify-center  gap-2  ">
            <div>
              <FaChevronLeft
                onClick={() => {
                  prev();
                }}
                color="white"
                className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6  p-1.5 flex items-center justify-center
                  bg-main rounded-full mr-2 hover:cursor-pointer"
              />
            </div>
            <div>
              <FaChevronRight
                onClick={() => {
                  next();
                }}
                color="white"
                className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6 p-1.5  flex items-center justify-center  bg-main rounded-full hover:cursor-pointer"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {value === "onlyTag" ? (
          <div
            onAnimationEnd={() => {
              if (currentPageRef.current) {
                currentPageRef.current.style.animation = "";
              }
            }}
            ref={currentPageRef}
            className={` grid grid-cols-4 sm:grid-cols-1 mt-8 md:mb-8 gap-5 w-full`}
          >
            {courses?.slice(StartValue, EndValue)?.map((val, i) => {
              return (
                <Link
                  key={i}
                  href={{
                    pathname: `/OurCourses/${val.id}`,
                  }}
                >
                  <div
                    className="shadow-md h-fit  pb-4 w-full rounded-md flex flex-col justify-centre  cursor-pointer"
                  >
                    <div className="h-60  bg-white relative">
                      {val?.image ?
                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/public/${val.image}`} alt={"images"}
                          className="max-h-200 w-full object-cover" layout="fill" /> : ""
                      }


                    </div>
                    <div className="flex h-2/6 items-center pt-2">
                      <div className="px-2 Poppins capitalize h-max">
                        <div
                          className={`py-1 xs:py-2 ${color(
                            val.category?.name
                          )} text-sm bg-main text-white w-fit px-4  rounded-md
                           xxl:text-sm  font-light`}
                        >
                          {val.category?.name}
                        </div>
                        <div
                          className="font-semibold w-full
                         h-max line-clamp-2 text-xs xl:text-sm
                          xxl:text-base "
                        >
                          <h1 className="text-xl p-0 pt-1 m-0 font-semibold">
                            {val?.title}
                          </h1>
                        </div>
                        <div className="py-1 xs:py-2">
                          <span
                            className="text-gray-500 text-[12px]
                           xl:text-[11px] xxl:text-sm"
                          >
                            Duration :
                          </span>
                          <span
                            className="text-[12px] 
                           xxl:text-sm mx-1"
                          >
                            {val?.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div
            className="grid grid-cols-1  md:mb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-5 w-full">
            {courses?.slice(StartValue, EndValue).map((val, i) => {
              return (
                <Link
                  key={i}
                  href={{
                    pathname: `/OurCourses/${val.id}`,
                  }}
                >
                  <div
                    className="shadow-md h-fit  pb-4 w-full  
              overflow-hidden rounded-md shadow-gray-200 flex flex-col justify-centre  cursor-pointer"
                  >
                    <div
                      className="h-60  bg-white relative"
                      style={{
                        backgroundImage: `url(${val.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <Image src={`https://hubmainback.hubit.com.np/public/${val.image}`} alt={"images"}
                        className="max-h-200 w-full object-cover" layout="fill" />
                    </div>
                    <div className="flex h-2/6 items-center pt-2">
                      <div className="px-2 Poppins capitalize h-max">
                        <div
                          className={`py-1 xs:py-2 ${color(
                            val?.category?.name
                          )} text-xs bg-main text-white w-fit px-2 rounded-md font-light`}
                        >
                          {val?.category?.name}
                        </div>
                        <div
                          className="font-semibold w-full
                         h-max line-clamp-2 text-xs xl:text-sm
                          xxl:text-base "
                        >
                          <h1 className="p-0 pt-1 m-0 font-semibold w-full h-max line-clamp-1 text-xs xl:text-base xxl:text-lg">
                            {val?.title}
                          </h1>
                        </div>
                        <div className="py-1 xs:py-2">
                          <span
                            className="text-gray-500 text-[12px]
                           xl:text-[11px] xxl:text-sm"
                          >
                            Duration :
                          </span>
                          <span
                            className="text-[12px] 
                           xxl:text-sm mx-1"
                          >
                            {val.duration}
                          </span>
                        </div>
                        {/* <div className="line-clamp-2 pt-3  ">
                      {val.description}
                    </div> */}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      {value === "courses" ? (
        <div className=" flex gap-3 px-16 my-8">
          {pagination.pageCount.length === 0 && HandleMultipleLoopPerClick()}
          <div
            className=" px-4 py-2  flex items-center justify-center  bg-gray-300  hover:cursor-pointer"
            onClick={() => prev()}
          >
            <FaChevronLeft className="w-5 h-5  text-white" />
          </div>
          <div className="flex gap-3">
            {pagination.pageCount.map((val, i) => {
              return (
                <div
                  onClick={() => handleClick(val)}
                  key={i}
                  className={` w-14  h-14 flex items-center hover:bg-main hover:text-white text-lg ${counter === val ? "bg-main text-white" : " bg-gray-200 "
                    } justify-center   hover:cursor-pointer`}
                >
                  {val}
                </div>
              );
            })}
          </div>
          <div
            onClick={() => next()}
            className=" px-4  flex items-center justify-center  bg-gray-300 text-white  hover:cursor-pointer"
          >
            <FaChevronRight className="w-5 h-5  text-white" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PopularCourses;

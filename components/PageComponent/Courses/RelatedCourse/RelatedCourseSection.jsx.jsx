import React, { useState, useEffect } from "react";
//import image from "../../../Resources/images/python1.webp";
import Image from "next/image";
import axios from "../../../UI/Axios/Axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const RelatedCourseSection = () => {
  // const data = [
  //   {
  //     image: ../../../Resources/images/python1.webp,
  //     id: 1,
  //     title: "Python",
  //     subTitle: "MERN with Full Stack",
  //     course: "python",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 2,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 3,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 4,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 5,
  //     title: "Python",
  //     subTitle: "MERN with Full Stack",
  //     course: "python",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 6,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 7,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 8,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 9,
  //     title: "Python",
  //     subTitle: "MERN with Full Stack",
  //     course: "python",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 10,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 11,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 12,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  //   {
  //     image: image,
  //     id: 13,
  //     title: "Web Design",
  //     subTitle: "MERN with Full Stack",
  //     course: "webdesign",
  //     category: "beginner",
  //   },
  // ];
  // counter shows page 1 and set counter increment the shown page +1 .s
  // o this can be called PageCount perclicked
  const [data, setData] = useState([]);
  const getData = () => {
    try {
      axios
        .get("/courses")
        .then((res) => {
          console.log(res.data.data);
          // setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [counter, setCounter] = useState(1);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 2,
  });
  // logic starts for slicing data for dynamic numbers
  let EndValue = counter * pagination.end;
  let StartValue = EndValue - pagination.end;
  // perPageChange
  let PageChange = Math.ceil(data.length / pagination.end);
  // setCounter ko increment and decrement login implementation
  let counterDecrement = counter > 1 ? counter - 1 : counter;
  let counterIncrement = counter < PageChange ? counter + 1 : PageChange;

  const prev = () => {
    // console.log(StartValue, EndValue, counter);

    setCounter(counterDecrement);
  };
  const next = () => {
    // console.log(StartValue, EndValue);
    setCounter(counterIncrement);
  };
  return (
    <div>
      <div className=" my-8">
        <div className="text-xl md:text-3xl font-bold">Related Courses</div>

        <div className=" flex flex-col ">
          <div className="flex  justify-end px-24 gap-2">
            <div>
              <FaChevronLeft
                onClick={() => prev()}
                color="white"
                className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6  p-1.5 flex items-center justify-center
                  bg-main rounded-full mr-2 hover:cursor-pointer"
              />
            </div>
            <div>
              <FaChevronRight
                onClick={() => next()}
                color="white"
                className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6 p-1.5  flex items-center justify-center  bg-main rounded-full hover:cursor-pointer"
              />
            </div>
          </div>
          <div
            className="grid md:grid-cols-2  lg:grid-cols-2 xl:lg:grid-cols-2
           xxl:grid-cols-2  mx-auto gap-3 mt-10 mb-5"
          >
            {data?.slice(StartValue, EndValue)?.map((val, i) => {
              return (
                <Link
                  key={i}
                  href={{
                    pathname: `/OurCourses/${val._id}`,
                    query: { image: val.image, description: val.description },
                  }}
                >
                  <div
                    className="shadow-lg h-fit  pb-4 w-full  
                overflow-hidden rounded-md shadow-gray-400 flex flex-col justify-centre  cursor-pointer"
                  >
                    <div className="h-60 w-80 relative">
                      {val.image ? (
                        <Image
                          src={val.image}
                          alt={"images"}
                          objectFit="cover"
                          objectPosition="top"
                          layout="fill"
                          className=" "
                        />
                      ) : (
                        <Image
                          src={val.image}
                          alt={val.course_name}
                          height="200"
                          width={200}
                        />
                      )}
                    </div>
                    <div className="flex h-2/6 items-center pt-2">
                      <div className="px-2 Poppins capitalize h-max">
                        <div
                          className={`py-1 xs:py-2 text-[9px] xl:text-[11px] xxl:text-sm font-semibold`}
                        >
                          {val.course_category}
                        </div>
                        <div className="font-semibold w-full h-max line-clamp-2 text-xs xl:text-sm xxl:text-base ">
                          {val.course_name}
                        </div>
                        <div className="py-1 xs:py-2">
                          <span className="text-gray-500 text-[9px] xl:text-[11px] xxl:text-sm">
                            Duration :
                          </span>
                          <span className="text-[9px] xl:text-[11px] xxl:text-sm mx-1">
                            {val.duration} months
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
        </div>
      </div>
    </div>
  );
};

export default RelatedCourseSection;

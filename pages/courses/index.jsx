// import React, { useState, useEffect } from "react";
import { useEffect } from "react";
import Image from "next/image";

import Layout from "../../HOC/Layout/Layout";
import RecommendedCourse from "../../components/PageComponent/Courses/RecommendedCourse/RecommendedCourse";
import axios from "../../components/UI/Axios/Axios";
import FeaturedCourses from "../../components/PageComponent/Courses/FeaturedCourses/FeaturedCourses";
// import PopularCourses from "../../components/PageComponent/HomePage/PopularCourses/PopularCourses";
import CourseDesign from "../../components/PageComponent/Courses/CoursesDesign/CourseDesign";
// import axios from "axios";
function Course() {
  const getData = () => {
    try {
      axios
        .get("/courses")
        .then((res) => {
          console.log("jjjjjjjjj", res.data.data);
          setCard(res.data.data);
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
  return (
    <Layout>
      <div>
        {/* <div className="relative">
          <div className=" w-full h-80  bg-main ">
            <Image
              src={"/images/Rectangle 27.jpg"}
              layout="fill"
              objectfit="cover"
              alt="Loading ..."
              className=" opacity-75 "
            />
          </div>
          <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 text-white capitalize">
            <div className="font-bold  text-3xl">our courses</div>
            <div className="Poppins text-sm mt-2">home / courses</div>
          </div>
        </div> */}
        {/* <FeaturedCourses /> */}
        <div className="pb-10 w-11/12 mx-auto ">
          <CourseDesign />
          {/* <PopularCourses card={card} value="courses" /> */}
        </div>
        <RecommendedCourse />
      </div>
    </Layout>
  );
}

export default Course;

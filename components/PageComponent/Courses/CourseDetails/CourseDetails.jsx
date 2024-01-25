import React, { useEffect, useState } from "react";
import Buttom from "../../../PageComponent/Courses/CourseSection/Buttom";
import ScheduleSection from "../../../PageComponent/Courses/UpcomingSchedule/ScheduleSection";
import Layout from "../../../../HOC/Layout/Layout";
import RelatedCourseCard from "../../../PageComponent/Courses/RelatedCourse/RelatedCourseSection.jsx";
import EnquiryForm from "../../../PageComponent/Courses/UpcomingSchedule/EnquiryForm";
import { useRouter } from "next/router";
import OverView from "../Overview/OverView";
import CourseCuriculum from "../Curiculum/CourseCuriculum";
import CourseInstructor from "../CourseInstructor/CourseInstructor";
import axiosInstance from "../../../UI/Axios/Axios.jsx";

const CourseDetails = ({ detail }) => {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [description, setDes] = useState(null);
  const [ID, setID] = useState("");
  const [active, setActive] = useState("overview");

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;

      axiosInstance.get(`/courses/${id}`).then((res) => {
        console.log(res?.data, 'courses from course detail');
        setData(res?.data);
      })
      
    }
  }, [router.isReady, router.query]);
  const tabs = [
    { title: "overview" },
    { title: "curiculum" },
    { title: "instructor" },
    { title: "review" },
  ];

  const Tabs = () => {
    switch (active) {
      case "overview":
        return <OverView detail={detail} id={ID} description={data?.description} />;
        break;
      case "curiculum":
        return <CourseCuriculum />;
        break;
      case "instructor":
        return <CourseInstructor instructors={data?.instructor} />;
        break;
      case "review":
        return <div className="text-xl font-normal p-3">No reviews yet!<br /> Be the first to review.</div>
        break;

      default:
        break;
    }
  };
  return (
    <Layout>
      <div className=" px-5 pt-5 md:px-5 lg:px-20 xl:px-20  xxl:px-20 ">
        <div
          className="   lg:grid  lg:grid-cols-3 xl:grid  xl:grid-cols-3 xxl:grid 
       xxl:grid-cols-3   gap-12"
        >
          <div className=" col-span-2 ">
            <div className="my-5 flex gap-6  items-center ">
              <div className="bg-gray-100 px-.5 w-fit lg:w-full xl:w-full xxl:w-full flex gap-4">
                {tabs.map((val, i) => {
                  return (
                    <div
                      key={i}
                      className={` ${
                        active === val.title ? "text-white tipDown" : ""
                      } capitalize px-1 lg:px-4 xl:px-4 xxl:px-4 py-2 cursor-pointer `}
                      onClick={() => setActive(val.title)}
                    >
                      {val.title}
                    </div>
                  );
                })}
              </div>
              <div className="w-80 hidden lg:block xl:block xxl:block">
                <Buttom />
              </div>
            </div>

            {Tabs()}

            <div className="">
              <div className=" mt-8 mb-4">
                {" "}
                <Buttom />
              </div>
              <RelatedCourseCard />
            </div>
          </div>
          <div>
            <ScheduleSection />
            <EnquiryForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetails;

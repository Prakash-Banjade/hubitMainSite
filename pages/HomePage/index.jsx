import React, { useState, useEffect } from "react";
import WhyHub from "../../components/PageComponent/HomePage/WhyHub/whyHub";
// import CompanyMoto from "../../components/PageComponent/HomePage/Companymoto/Moto";
import WelcomePortal from "../../components/PageComponent/HomePage/WelcomePortal/WelcomePortal";
import image1 from "../../public/images/Rectangle 25.svg";
import image2 from "../../public/images/Rectangle 26aa.svg";
//import images1 from "../../components/Resources/images/python.avif";
import image from "../../public/images/Group 7.png";
import PopularCourses from "../../components/PageComponent/HomePage/PopularCourses/PopularCourses";
import { TbCertificate } from "react-icons/tb";
import Home from "./Home";
import CallSection from "../../components/PageComponent/HomePage/LetsCallSection/CallSection";
import PlacementPartners from "../../components/PageComponent/HomePage/PlacementPartners/placementPartners";
import CourseStatus from "../../components/PageComponent/HomePage/courseStatus.jsx/CourseStatus";
import axios from "../../components/UI/Axios/Axios";
import WhatClientsSays from "../../components/PageComponent/AboutPage/What ClientsSays/WhatClientsSays";
import OurAchievements from "../../components/PageComponent/AboutPage/OurAchivements/OurAchievements";
import SuccessStories from "../../components/PageComponent/HomePage/SuccessStories/SuccessStories";
import FindUsOn from "../../components/PageComponent/HomePage/FindUsOn/finUsOn";

function Index() {
  const [card, setCard] = useState([]);
  const [Moto, setMoto] = useState([
    {
      icon: <TbCertificate />,
      title: "Top Courses",
      description: `Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity.`,
    },
    {
      icon: <TbCertificate />,
      title: "Certified Instructor",
      description: `All instructor are a thorough understanding of the subject matter, strong communication skills, and the ability to adapt to the needs of individual students. They are highly qualified and experienced professionals who are committed to helping others learn and grow in their chosen areas of study.`,
    },
    {
      icon: <TbCertificate />,
      title: "Book and Libraries",
      description: `Students can search our online library to find specific Books & materials needed for present and their future.
      Our library provide access to online Books, e-books, and other resources that students can access remotely. 
      These resources may include Book, Project, Assignments, and language learning tools`,
    },
  ]);
  const images = [{ image: image1 }, { image: image2 }];

  const getData = () => {
    try {
      axios.get('/courses').then(res => {
        console.log(res.data.data, 'courses from index');
        setCard(res.data?.data);
      })
    } catch (e) {
      console.log(e);
    }
  }
  // const getReview = () => {
  //   let placeId = "ChIJU6XiOYiGljkRv4xyNSswlBE";
  //   let apiKey = "AIzaSyAKQo1DhCmxNhzHWqelTUs_T3jS_pGiBG4";
  //   try {
  //     axios
  //       .get(
  //         `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
  //       )
  //       .then((res) => {
  //         console.log(res);
  //         setCard(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    getData();
    // getReview();
  }, []);
  return (
    <div className="">
      <Home image={image} />

      <div className=" pt-8 pb-20">
        <PopularCourses card={card} value="onlyTag" />
      </div>

      <CourseStatus />

      <WelcomePortal images={images} />
      <WhyHub />
      <WhatClientsSays />
      <OurAchievements />
      <PlacementPartners />
      <SuccessStories />
      <FindUsOn />
      <CallSection />
    </div>
  );
}

export default Index;

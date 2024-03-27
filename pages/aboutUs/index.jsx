import Head from "next/head";
import React, { useEffect, useState } from "react";
import HowWeWork from "../../components/PageComponent/AboutPage/HowWeWork/HowWeWork";
import MIssionVision from "../../components/PageComponent/AboutPage/MissionVision/MIssionVision";
import OurAchievements from "../../components/PageComponent/AboutPage/OurAchivements/OurAchievements";
import OurTeamMembers from "../../components/PageComponent/AboutPage/OurTeamMembers/OurTeamMembers";
import WhatClientsSays from "../../components/PageComponent/AboutPage/What ClientsSays/WhatClientsSays";
import WhatWeProvide from "../../components/PageComponent/AboutPage/whatWeProvideSection/WhatWeProvide";
import WhoWeAre from "../../components/PageComponent/AboutPage/WhoWeAre/WhoWeAre";
import FindUsOn from "../../components/PageComponent/HomePage/FindUsOn/finUsOn";
import Layout from "../../HOC/Layout/Layout";
import GroupStatus from "../../components/PageComponent/AboutPage/GroupStatus/GroupStatus";
import TouchButton from "../../components/PageComponent/AboutPage/GetIntouchButton/TouchButton";
import axios from "../../components/UI/Axios/Axios"
function AboutUs() {

  const [about, setAbout] = useState({})

  useEffect(() => {

    const fetchAbout = async () => {
      try {
        const response = await axios.get("/about")
        setAbout(response?.data?.result[0] || {})
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchAbout()
  }, []);

  console.log(about.videolink)


  return (
    <div>
      <Layout>
        <div className=" pt-8 pb-24">
          {/* <div className={styles.container}> */}
          <Head>
            <title>
              About us
            </title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
          </Head>
          <WhoWeAre description={about?.description} videolink={about?.videolink} />
          <GroupStatus />
          <MIssionVision mission={about?.mission} vision={about?.vision} objectives={about?.objectives} />
          <TouchButton />
          <WhatWeProvide />
          <WhatClientsSays />
          <OurTeamMembers />
          <HowWeWork image={about?.image} howwework={about?.howwework} />
          <OurAchievements />
          <FindUsOn />
          {/* </div> */}
        </div>
      </Layout>
    </div>
  );
}

export default AboutUs;

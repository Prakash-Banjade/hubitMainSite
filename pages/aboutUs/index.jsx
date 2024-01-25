import Head from "next/head";
import React from "react";
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

function AboutUs() {
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
            <meta name="keywords" content=""/>
          </Head>
          <WhoWeAre />
          <GroupStatus/>
          <MIssionVision />
          <TouchButton/>
          <WhatWeProvide />
          <WhatClientsSays />
          <OurTeamMembers />
          <HowWeWork />
          <OurAchievements />
          <FindUsOn />
          {/* </div> */}
        </div>
      </Layout>
    </div>
  );
}

export default AboutUs;

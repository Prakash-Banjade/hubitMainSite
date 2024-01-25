import React from "react";
import Layout from "../../HOC/Layout/Layout";
import Head from "next/head";
import BottomSection from "../../components/PageComponent/CareerPage/Career/BottomSection";
import TopSectionHackathon from "../../components/PageComponent/HackathonsDatas/TopSectionHackathon";
import HackathonsCard from "../../components/PageComponent/HackathonsCard";
const Hackathons = () => {
  return (
    <>
      <Head>
        <title>Corporate Training - Hub IT</title>
      </Head>
      <Layout>
        <TopSectionHackathon />
        <HackathonsCard />
        <BottomSection />
      </Layout>
    </>
  );
};

export default Hackathons;

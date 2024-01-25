import React from "react";
import MidSection from "../components/PageComponent/CorporatePage/MidSection";
import TopSection from "../components/PageComponent/CorporatePage/TopSection";
import Layout from "../HOC/Layout/Layout";
import Head from "next/head";
import TrainingPartners from "../components/PageComponent/CorporatePage/TrainingPartners";
import TrainingTabs from "../components/PageComponent/CorporatePage/TrainingTabs";
import SliderPage from "../components/PageComponent/CorporatePage/SliderPage";
const coperateTraning = () => {
  return (
    <>
      <Head>
        <title>Corporate Training - Hub IT</title>
      </Head>
      <Layout>
        <TopSection />
        <MidSection />
        <TrainingTabs />
        <SliderPage />
        <TrainingPartners />
      </Layout>
    </>
  );
};

export default coperateTraning;

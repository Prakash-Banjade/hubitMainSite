import React, { useEffect, useState } from "react";
import MidSection from "../components/PageComponent/CorporatePage/MidSection";
import TopSection from "../components/PageComponent/CorporatePage/TopSection";
import Layout from "../HOC/Layout/Layout";
import Head from "next/head";
import TrainingPartners from "../components/PageComponent/CorporatePage/TrainingPartners";
import TrainingTabs from "../components/PageComponent/CorporatePage/TrainingTabs";
import SliderPage from "../components/PageComponent/CorporatePage/SliderPage";
import axiosInstance from "../components/UI/Axios/Axios";

const CorporateTraining = () => {
  const [trainings, setTrainings] = useState([])

  useEffect(() => {
    axiosInstance.get('/trainings').then(res => {
      setTrainings(res?.data?.result);
    }).catch(err => {
      if (err instanceof Error) return console.error(err.message);
      console.log(err);
    })
  }, [])

  return (
    <>
      <Head>
        <title>Corporate Training - Hub IT</title>
      </Head>
      <Layout>
        <TopSection />
        <MidSection trainings={trainings} />
        <TrainingTabs trainings={trainings} />
        <SliderPage />
        <TrainingPartners />
      </Layout>
    </>
  );
};

export default CorporateTraining;

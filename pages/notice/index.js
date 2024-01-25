import React from "react";
import Banner from "../../components/PageComponent/NoticePage/Banner";
import MidSection from "../../components/PageComponent/NoticePage/MidSection";
import Layout from "../../HOC/Layout/Layout";
const index = () => {
  return (
    <>
      <Layout>
        <Banner />
        <MidSection />
      </Layout>
    </>
  );
};

export default index;

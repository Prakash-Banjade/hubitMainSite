import React from "react";
import Banner from "../../components/PageComponent/ContactPage/Banner";
import Body from "../../components/PageComponent/ContactPage/Body";
import Layout from "../../HOC/Layout/Layout";
import Head from "next/head"
import Map from "../../components/PageComponent/ContactPage/Map";
const index = () => {
  return (
    <>
    <Head><title>Contact Us</title></Head>
      <Layout>
        <Banner />
        <Body />
        <Map />
      </Layout>
    </>
  );
};

export default index;

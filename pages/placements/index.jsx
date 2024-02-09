import Head from "next/head";

import Layout from "../../HOC/Layout/Layout";
import MidSection from "../../components/PageComponent/Placement/MidSection";
// import HeroSection from "../../components/PageComponent/Placement/HeroSection";
import ContentSection from "../../components/PageComponent/Placement/contentSection";
// import PlacementPartners from "../../components/PageComponent/HomePage/PlacementPartners/placementPartners";

const Placement = () => {
  return (
    <>
      <Head>
        <title>Placement-Hub IT</title>
      </Head>
      <Layout>
        {/* <HeroSection /> */}
        <div className='mt-24'>
          <ContentSection />
          {/* <PlacementPartners /> */}
          <MidSection />
        </div>
      </Layout>
    </>
  );
};

export default Placement;

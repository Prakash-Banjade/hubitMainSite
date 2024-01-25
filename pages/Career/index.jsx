import React from "react";
import Career from "../../components/PageComponent/CareerPage/Career/TopSection";
import InfoSection from "../../components/PageComponent/CareerPage/Career/InfoSection";
import Layout from "../../HOC/Layout/Layout";
import Vacancy from "../../components/PageComponent/CareerPage/Career/vacancy";
import BottomSection from "../../components/PageComponent/CareerPage/Career/BottomSection";
function Index() {
  return (
    <div>
      <Layout>
        <Career />
        <InfoSection />
        <Vacancy />
        <BottomSection />
      </Layout>
    </div>
  );
}

export default Index;

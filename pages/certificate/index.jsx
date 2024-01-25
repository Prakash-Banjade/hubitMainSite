import React from "react";
import Career from "../../components/PageComponent/CareerPage/Career/TopSection";
import InfoSection from "../../components/PageComponent/CareerPage/Career/InfoSection";
import Layout from "../../HOC/Layout/Layout";
import Vacancy from "../../components/PageComponent/CareerPage/Career/vacancy";
import BottomSection from "../../components/PageComponent/CareerPage/Career/BottomSection";
import CertificateMid from "../../components/PageComponent/CertificateMid";
function Index() {
  return (
    <div>
      <Layout>
        <Career />
        <CertificateMid />
        <BottomSection />
      </Layout>
    </div>
  );
}

export default Index;

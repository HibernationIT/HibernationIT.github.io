import React from "react";

import styled from "styled-components";

import FirstSection from "components/page/Home/FirstSection";
import SecondSection from "components/page/Home/SecondSection";
import Footer from "components/page/Home/Footer";

export default function Home() {
  return (
    <s.Layout>
      <FirstSection />
      <SecondSection />
      <Footer />
    </s.Layout>
  );
}

const s = {
  Layout: styled.main``,
};

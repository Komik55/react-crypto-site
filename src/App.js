import React from "react";
import { Wrap, Container } from "./components/Elements";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import BannerFooterBottom from "./components/TopBanner/BannerFooterBottom";
import Faq from "./components/Faq";
import Schedule from "./components/Schedule";
import Post from "./components/Cost";
import CostAbout from "./components/Cost/CostAbout";
import Footer from "./components/Footer";
function App() {
  return (
    <Wrap>
      <Container>
        <Navbar />
        <TopBanner />
      </Container>
      <BannerFooterBottom />
      <Faq />
      <Schedule />
      <Post />
      <CostAbout />
      <Footer />
    </Wrap>
  );
}

export default App;

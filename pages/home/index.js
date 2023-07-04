import React from 'react';
import Banner from "@/pages/home/banner/banner";
import Service from "@/pages/home/service/service";
import Header from "@/pages/header/header";
import Suggestions from "@/pages/home/suggestion/suggestion";
import Steps from "@/pages/home/steps/steps";
import Review from "@/pages/home/review/review";
import Staff from "@/pages/home/staff/staff";
import Blog from "@/pages/home/blog/blog";
import FooterBanner from "@/pages/home/footerBanner/footerBanner";
import Footer from "@/pages/footer/footer";

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Service/>
      <Suggestions/>
      <Steps/>
      <Review/>
      <Staff/>
      <Blog/>
      <FooterBanner/>
      <Footer/>
    </div>
  );
};

export default HomePage;
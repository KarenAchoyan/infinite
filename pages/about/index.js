import React from 'react';
import Details from "@/pages/about/details";
import Suggestions from "@/pages/home/suggestion/suggestion";
import Staff from "@/pages/home/staff/staff";
import BannerText from "@/pages/about/bannerText/bannerText";
import Header from "@/pages/header/header";
import Footer from "@/pages/footer/footer";

const About = () => {
  return (
    <div>
      <Header/>

      <BannerText text={'About us'}/>
      <div className="row-about">
        <Details/>
        <Details reverse={true}/>
      </div>
      <Suggestions/>
      <Staff/>
      <Footer/>
    </div>
  );
};

export default About;
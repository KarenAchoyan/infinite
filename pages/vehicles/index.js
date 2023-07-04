import React from 'react';
import BannerText from "@/pages/about/bannerText/bannerText";
import Details from "@/pages/vehicles/details";
import Header from "@/pages/header/header";
import Footer from "@/pages/footer/footer";
const Vehicles = () => {
  return (
    <div>
      <Header/>
      <BannerText text={"Our Vehicles"}/>
      <div className="vehicles-row">
        <div>
          <Details type={'reverse'}/>
        </div>
        <div>
          <Details/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Vehicles;
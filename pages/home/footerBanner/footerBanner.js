import React from 'react';
import Button from "@/pages/Elements/Button/button";

const FooterBanner = ({attachment=false}) => {
  return (
    <div className={'image-footer-banner'} style={{backgroundImage:`url(${'background-banner.png'})`, backgroundAttachment:attachment ? "fixed" : ""}}>
      <div className="container-footer-banner">
        <div className="image-left">
          <img src={'car.png'} alt="car"/>
        </div>
        <div className="right-banner-footer">
          <h1>Your Nex Travel
            With Us?</h1>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
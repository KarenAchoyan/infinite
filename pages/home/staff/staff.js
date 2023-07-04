import React from 'react';
const Staff = () => {
  return (
    <div className={'container-staff'}>
      <h3>Our Crew</h3>
      <h2>Take A Look At Our Drivers</h2>
      <div className="row-staff ">
        <div className="item-staff position-down">
          <img src={'staff-1.png'} alt=""/>
          <h2>John John</h2>
        </div>
        <div className="item-staff">
          <img src={'staff-1.png'} alt=""/>
          <h2>John John</h2>

        </div>
        <div className="item-staff position-down">
          <img src={'staff-1.png'} alt=""/>
          <h2>John John</h2>
        </div>
        <div className="item-staff">
          <img src={'staff-1.png'} alt=""/>
          <h2>John John</h2>
        </div>
      </div>
    </div>
  );
};

export default Staff;
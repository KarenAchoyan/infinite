import React, {useEffect, useState} from 'react';

const Service = () => {
  const [images, setImages] = useState([
    {id: 1, image: 'car1.png'},
    {id: 2, image: 'car2.png'},
    {id: 3, image: 'car3.png'},
    {id: 4, image: 'car4.png'},
  ])
  const [smallImages, setSmallImages] = useState(() => {
    images.shift();
    return images;
  })
  const [avatar, setAvatar] = useState(() => {
    return images[0].image;
  })

  function changeToAvatar(id) {
    let img = images.find(x => x.id === id).image;
    setAvatar(img);
  }


  return (
    <div className={'service-container'}>
      <h3>Our Fleet</h3>
      <h2>Brand New Cars At Your Service</h2>

      <div className="car-service-content">
        <h1>Mercedes Benz S Class 2022</h1>
        <h2>Luxury Sedan</h2>

        <div className="row-car-service">
          <div>
                        <span className={'item-row'}>
                            <img src={'passenger.png'} alt=""/>
                            Passengers
                            3
                        </span>
            <span className={'item-row'}>
                            <img src={'Frame.svg'} alt=""/>
                            Bags
                            3
                        </span>
            <span className={'item-row'}>
                            <img src={'wifi.svg'} alt=""/>
                            On Board Wi-Fi
                        </span>
            <span className={'item-row'}>
                            <img src={'image2.svg'} alt=""/>
                            Black Leather
                        </span>
          </div>
        </div>
        <div className="car-service">
          <div className="car-avatar">
            <img src={avatar} alt=""/>
          </div>
          <div className="cars-choose">
            {smallImages.map((item) => {
              return (
                <div className="item-choose">
                  <img src={item.image} key={item.id} onClick={() => changeToAvatar(item.id)} alt=""/>
                </div>
              )
            })}
          </div>
        </div>
        <div className="row-infos-btns">
          <div className="info-show-btn danger">
            135$
          </div>
          <div className="info-show-btn primary">
            Show All Vehicles
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
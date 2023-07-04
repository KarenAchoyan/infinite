import React, {useState} from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([
    {id: 1, review: "Been using them for a decade at least for runs to/from LAX. Quality service. Nice cars. Well prepared for the trip. Always on time or early. I’d never Uber to LAX. Chances of trunk not having sufficient space is high. This is a Limo service for businessman.1", fullName: "Nick Nicname", stars: 4},
    {id: 2, review: "Been using them for a decade at least for runs to/from LAX. Quality service. Nice cars. Well prepared for the trip. Always on time or early. I’d never Uber to LAX. Chances of trunk not having sufficient space is high. This is a Limo service for businessman.2", fullName: "Nick Nicname", stars: 4},
    {id: 3, review: "Been using them for a decade at least for runs to/from LAX. Quality service. Nice cars. Well prepared for the trip. Always on time or early. I’d never Uber to LAX. Chances of trunk not having sufficient space is high. This is a Limo service for businessman.3", fullName: "Nick Nicname", stars: 4},
    {id: 4, review: "Been using them for a decade at least for runs to/from LAX. Quality service. Nice cars. Well prepared for the trip. Always on time or early. I’d never Uber to LAX. Chances of trunk not having sufficient space is high. This is a Limo service for businessman.4", fullName: "Nick Nicname", stars: 4},
  ])
  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? reviews.length - 1 : prevImage - 1));
  };

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage === reviews.length - 1 ? 0 : prevImage + 1));
  };
  function Stars(count){
    let html = ``;
    for(let i=0; i<count; i++){
      html+= <img src={'star.png'} alt=""/>
    }
    console.log(html)
    return(
      html
    )
  }
  return (
    <div className={'container-review'}>
      <h3>TESTIMONIALS</h3>
      <div className="slider-review">
        <div className="slide-step review">
          <div className="slide-items review">
            {reviews.map((item, index) => (
              <div
                key={index}
                className={`slide-item review ${index === currentImage ? 'active' : ''}`}
              >
                <div className="container-step-review">
                  <h3>What people say about us?</h3>
                  <h5>{item.review}</h5>
                  <h2>Nick Mancini</h2>
                  <div className="stars-review">
                    <Stars count={item.stars}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slide-buttons-review">
            <img src={'arrow-left.png'} onClick={goToPrevious} alt=""/>
            <img src={'arrow-right.png'} onClick={goToNext} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "@/store/review/actions";

const Review = () => {
  const reviews = useSelector(state => state.review.reviews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews.request());
  }, [dispatch]);

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
                  <h5>{item.content}</h5>
                  <h2>{item.author}</h2>
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
import React from "react";
import "../Styles/Sliding.css";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

const Sliding = () => {
  const navigate = useNavigate();
  return (
    <div className="sliding">
      <Carousel infiniteLoop autoPlay>
        <div className="image-div" onClick={() => navigate("/kindmoments")}>
          <img
            src="https://www.kindmeal.my/photos/deal/7/700-4802-m.jpg"
            alt="img1"
            className="image"
          />
          <p className="bottom-text">Lovely fahion meals 20% off - Ins meals</p>
          <img
            src="https://www.kindmeal.my/photos/shop/3/392-2513-m.jpg"
            alt="logo"
            className="logo"
          />
        </div>

        <div className="image-div" onClick={() => navigate("/recipes")}>
          <img
            src="https://www.kindmeal.my/photos/deal/6/681-4353-m.jpg"
            alt="img2"
          />
          <p className="bottom-text">
            Fusion garments couisine 30% off - Red House
          </p>
          <img
            src="https://www.kindmeal.my/photos/shop/5/567-4252-m.jpg"
            alt="img2"
          />
        </div>

        <div className="image-div" onClick={() => navigate("/hotpicks")}>
          <img
            src="https://www.kindmeal.my/photos/deal/6/635-3704-l.jpg"
            alt="img1"
            className="image img3"
          />
          <p className="bottom-text">
            Vaggielicious Thai couisine 25% off - Vaggielicious
          </p>
          <img
            src="https://www.kindmeal.my/photos/shop/5/514-3571-m.jpg"
            alt="img2"
          />
        </div>

        <div className="image-div" onClick={() => navigate("/deals")}>
          <img
            src="https://www.kindmeal.my/photos/deal/5/553-2769-l.jpg"
            alt="img1"
            className="image"
          />
          <p className="bottom-text">
            Wise crafter Delicious meals 20% off - Wise Crafter
          </p>
          <img
            src="https://www.kindmeal.my/photos/shop/5/591-4421-m.jpg"
            alt="img2"
          />
        </div>
        <div className="image-div" onClick={() => navigate("/kindmoments")}>
          <img
            src="https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img1"
            className="image"
          />
          <p className="bottom-text">
            Natural delicios food Destinations 25% off - Moment of Joy
          </p>
          <img
            src="https://www.kindmeal.my/photos/shop/5/593-4434-m.jpg"
            alt="img2"
          />
        </div>
        <div className="image-div" onClick={() => navigate("/recipes")}>
          <img
            src="https://www.kindmeal.my/photos/deal/6/610-3386-l.jpg"
            alt="img1"
            className="image "
          />
          <p className="bottom-text">
            Fleaver around the world 23% off- Soul Green
          </p>
          <img
            src="https://www.kindmeal.my/photos/shop/5/545-4170-m.jpg"
            alt="img2"
          />
        </div>
        <div className="image-div" onClick={() => navigate("/directory")}>
          <img
            src="https://www.kindmeal.my/photos/deal/6/626-3611-m.jpg"
            alt="img1"
            className="image"
          />
          <p className="bottom-text">
            Veggeterian healthy couisine 30% off - SANDALO
          </p>
          <img
            src="https://www.kindmeal.my/photos/shop/4/432-2809-m.jpg"
            alt="img2"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Sliding;

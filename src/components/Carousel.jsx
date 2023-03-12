import React, { useEffect, useState } from "react";
import { carouselData } from "../helpers/data";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./Carousel.css";

const Carousel = () => {
  const [currentImga, setCurrentImga] = useState(0);

  const changeCurrentImg = (forward) => {
    let carouselLength = carouselData.length - 1;

    if (forward === "forward") {
      if (currentImga === carouselLength) {
        setCurrentImga(0);
      } else {
        setCurrentImga(currentImga + 1);
      }
    } else if (forward === "backward") {
      if (currentImga === 0) {
        setCurrentImga(carouselLength);
      } else {
        setCurrentImga(currentImga - 1);
      }
    }
  };

  return (
    <div className="carousel">
      <div
        className={`carousel__wrapper ${
          currentImga !== carouselData[currentImga] ? "show" : "hide"
        }`}
        style={{
          backgroundImage: `url(${carouselData[currentImga].img})`,
        }}
      >
        <div className="left" onClick={() => changeCurrentImg("backward")}>
          <IoIosArrowBack size={24} color="#fff" />
        </div>
        <div className="middle">
          <div className="middle__text">
            <h1 className="">{carouselData[currentImga].title}</h1>
          </div>

          <div className="dots">
            {carouselData.map((item, index) => (
              <span
                key={item.title}
                className={`dot ${index === currentImga && 'active'}`}
                onClick={() => setCurrentImga(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="right" onClick={() => changeCurrentImg("forward")}>
          <IoIosArrowForward size={24} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

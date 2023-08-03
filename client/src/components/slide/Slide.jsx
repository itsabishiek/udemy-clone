import React from "react";
import Carousel from "react-elastic-carousel";
import "./Slide.css";

const Slide = ({ children }) => {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div className="slide">
      <div className="slideContainer">
        <Carousel
          breakPoints={breakpoints}
          pagination={false}
          enableSwipe
          enableMouseSwipe
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;

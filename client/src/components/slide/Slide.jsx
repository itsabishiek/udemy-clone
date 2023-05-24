import React from "react";
import Carousel from "react-elastic-carousel";
import "./Slide.css";

const Slide = ({ children }) => {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1024, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <div className="slide">
      <div className="slideContainer">
        <Carousel breakPoints={breakpoints} pagination={false}>
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;

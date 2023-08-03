import React from "react";
import Carousel from "better-react-carousel";

const Slide = ({ children }) => {
  const breakpoints = [
    {
      breakpoint: 650,
      cols: 2,
      rows: 1,
      gap: 10,
    },
    {
      breakpoint: 800,
      cols: 3,
      rows: 1,
      gap: 10,
    },
    {
      breakpoint: 1000,
      cols: 3,
      rows: 1,
      gap: 10,
    },
    {
      breakpoint: 1500,
      cols: 5,
      rows: 1,
      gap: 10,
    },
    {
      breakpoint: 2560,
      cols: 6,
      rows: 1,
      gap: 10,
    },
  ];

  return (
    <div className="slide">
      <div className="slideContainer">
        <Carousel responsiveLayout={breakpoints} mobileBreakpoint={500}>
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;

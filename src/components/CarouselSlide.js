import React, { memo } from "react";


const CarouselSlide = ({ children, index, currentSlideIndex }) => {
  return (
    <div
      className={`container flex justify-center flex-col absolute top-0 bottom-0 left-0 right-0 m-auto w-100 h-full ${
        index === currentSlideIndex ? "fadeIn" : "fadeOut"
      }`}
    >
      {children}
    </div>
  );
};

export default memo(CarouselSlide);

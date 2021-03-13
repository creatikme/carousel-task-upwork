import React, { memo, useState } from "react";
import CarouselDots from "./CarouselDots";
import CarouselSlide from "./CarouselSlide";

const Carousel = ({ slides = [], height = 500 }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <>
      <div className="h-auto my-4 relative overflow-hidden" style={{height:height}}>
        {slides.map((slide, i) => (
          <CarouselSlide key={i} index={i} currentSlideIndex={activeSlide}>
            {slide.content}
          </CarouselSlide>
        ))}
      </div>
      <CarouselDots
        length={slides.length}
        currentSlideIndex={activeSlide}
        onChange={setActiveSlide}
      />
    </>
  );
};

export default memo(Carousel);

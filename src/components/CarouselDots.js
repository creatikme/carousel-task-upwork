import React, { memo } from "react";

const CarouselDots = ({ length, currentSlideIndex, onChange }) => {
  const getDots = () => {
    const dots = [];
    for (let i = 0; i < length; i++) {
      dots.push(
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`bg-blue-600 rounded-full w-4 p-2 mx-2 ${
            i !== currentSlideIndex && "opacity-50"
          }`}
        ></button>
      );
    }
    return dots;
  };
  return (
    <div className="flex justify-center w-12 mx-auto pb-2 mt-4 relative">
      {getDots()}
    </div>
  );
};

export default memo(CarouselDots);

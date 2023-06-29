import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Slider = (props) => {
  const { id } = useParams();
  const locationList = props.locationList;
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = locationList.find((location) => location.id === id);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? location.pictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === location.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!location) {
    return <div>Location non trouvée</div>;
  }

  return (
    <div className="slider">
      <div className="leftArrow" onClick={previousSlide}>
        ❮
      </div>
      <div className="rightArrow" onClick={nextSlide}>
        ❯
      </div>
      {location.pictures.map((url, index) => {
        return (
          <div
            className={index === currentIndex ? "slideActive" : "slide"}
            key={index}
          >
            {index === currentIndex && (
              <img
                key={index}
                src={url}
                alt={`Intérieur de ${location.title}`}
                className="slidesImage"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

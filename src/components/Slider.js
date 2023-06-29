import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Slider = (props) => {
  const { id } = useParams();
  const locationList = props.locationList;
  const [currentIndex, setCurrentIndex] = useState(1);

  const location = locationList.find((location) => location.id === id);

  if (!location) {
    return <div>Location non trouvée</div>;
  }

  return (
    <div>
      <div className="slidesContainer">
        {location.pictures.map((url, currentIndex) => (
          <img
            key={currentIndex}
            src={url}
            alt={`Intérieur de ${location.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

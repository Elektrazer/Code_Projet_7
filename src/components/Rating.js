import React from "react";
import { useParams } from "react-router-dom";
import locationList from "../datas/LocationList";

const Rating = () => {
  const maxRating = 5;
  const { id } = useParams();

  const getLocationRating = () => {
    const location = locationList.find((location) => location.id === id);
    return location ? parseInt(location.rating) : 0;
  };

  const locationRating = getLocationRating();

  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    const starClass = i < locationRating ? "star-filled" : "star";
    stars.push(
      <span key={i} className={starClass}>
        &#9733;
      </span>
    );
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;

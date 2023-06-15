import React from "react";

const Card = ({ location }) => {
  return (
    <li className="card">
      <img src={location.cover} alt={"photo de" + location.title} />
      <div className="infos">
        <h3>{location.title}</h3>
      </div>
    </li>
  );
};

export default Card;

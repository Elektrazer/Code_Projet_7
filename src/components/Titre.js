import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import locationList from "../datas/LocationList";
import Rating from "./Rating";

const Titre = () => {
  const { id } = useParams();
  const location = locationList.find((location) => location.id === id);

  return (
    <div className="Location">
      <div className="LocationTitle">
        <h2>{location.title}</h2>
        <span>{location.location}</span>
        <div className="Tags">
          {location.tags.map((tag, index) => (
            <button key={index}>{tag}</button>
          ))}
        </div>
      </div>
      <div className="InfosHote">
        <div className="HoteNP">
          <span className="HoteName">{location.host.name}</span>
          <div className="ImageHote">
            <img src={location.host.picture} alt="Portrait de l'hôte" />
          </div>
        </div>
        <Rating />
      </div>
    </div>
  );
};

export default Titre;

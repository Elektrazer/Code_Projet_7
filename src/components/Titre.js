import React from "react";
import { useParams } from "react-router-dom";
import locationList from "../datas/LocationList";

const Titre = () => {
  const { id } = useParams();
  const location = locationList.find((location) => location.id === id);

  if (!location) {
    return <div>Location introuvable.</div>;
  }

  return (
    <div>
      <div>
        <h2>{location.title}</h2>
        <span>{location.location}</span>
      </div>
      <div>
        <span>{location.host.name}</span>
        <div>
          <i src={location.host.picture} alt="Photo de l'hôte" />
        </div>
      </div>
      <div>
        {location.tags.map((tag, index) => (
          <button key={index}>{tag}</button>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Titre;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import locationList from "../datas/LocationList";

const Infos = () => {
  const { id } = useParams();
  const location = locationList.find((location) => location.id === id);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const handleDescriptionToggle = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <div className="DropdownInfos">
      <div className="DropdownMenuInfos">
        <span className="DropdownTitle">Description</span>
        <button
          onClick={handleDescriptionToggle}
          className="buttonDropdownInfos"
        >
          {isDescriptionOpen ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
        {isDescriptionOpen && (
          <div className="DropdownTextInfos">
            <p>{location.description}</p>
          </div>
        )}
      </div>
      <div className="DropdownMenuInfos">
        <span className="DropdownTitle">Equipements</span>
        <button
          onClick={handleDescriptionToggle}
          className="buttonDropdownInfos"
        >
          {isDescriptionOpen ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
        {isDescriptionOpen && (
          <div className="DropdownTextInfos">
            <ul>
              {location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Infos;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import locationList from "../datas/LocationList";

const Infos = () => {
  const { id } = useParams();
  const location = locationList.find((location) => location.id === id);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  const handleDescriptionToggle = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  const handleEquipmentsToggle = () => {
    setEquipmentsOpen(!isEquipmentsOpen);
  };

  return (
    <div className="DropdownInfos">
      <div className="DropdownMenuInfos" onClick={handleDescriptionToggle}>
        <span className="DropdownTitle">Description</span>
        <button className="buttonDropdownInfos">
          {isDescriptionOpen ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
        {isDescriptionOpen && (
          <div className="DropdownTextInfos">
            <p>{location.description}</p>
          </div>
        )}
      </div>
      <div className="DropdownMenuInfos" onClick={handleEquipmentsToggle}>
        <span className="DropdownTitle">Equipements</span>
        <button className="buttonDropdownInfos">
          {isEquipmentsOpen ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
        {isEquipmentsOpen && (
          <div className="DropdownContent">
            <ul className="DropdownList">
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

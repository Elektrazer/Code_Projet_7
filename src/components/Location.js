import React from "react";
import locationlist from "../datas/LocationList";
import Card from "../components/Card";

const Location = () => {
  return (
    <div>
      <ul className="CardList">
        {locationlist.map((location) => (
          <Card key={location.id} location={location} />
        ))}
      </ul>
    </div>
  );
};

export default Location;

import React from "react";
import locationlist from "../datas/LocationList";
import Card from "./Card";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="CardContainer">
      <ul className="CardList">
        {locationlist.map((location) => (
          <Link to={`/location/${location.id}`}>
            <Card key={location.id} location={location} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Location;

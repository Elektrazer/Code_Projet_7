import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "../components/Slider";
import Titre from "../components/Titre";
import Infos from "../components/Infos";
import locationList from "../datas/LocationList";

const Location = () => {
  const { id } = useParams();
  const location = locationList.find((location) => location.id === id);
  const navigate = useNavigate();
  useEffect(() => {
    if (!location) {
      navigate("/error");
    }
  });

  if (!location) {
    return null;
  }
  return (
    <div>
      <Slider locationList={locationList} />
      <Titre />
      <Infos />
    </div>
  );
};

export default Location;

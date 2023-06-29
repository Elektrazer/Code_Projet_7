import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Titre from "../components/Titre";
import Infos from "../components/Infos";
import locationList from "../datas/LocationList";

const Location = () => {
  return (
    <div>
      <Header />
      <Slider locationList={locationList} />
      <Titre />
      <Infos />
    </div>
  );
};

export default Location;

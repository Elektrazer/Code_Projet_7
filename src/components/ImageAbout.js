import React from "react";
import PhotoAbout from "../assets/ImageAbout.png";

const ImageAbout = () => {
  return (
    <div className="ContainerPhoto">
      <img src={PhotoAbout} alt="Paysage montagneux" className="PhotoAbout" />
    </div>
  );
};

export default ImageAbout;

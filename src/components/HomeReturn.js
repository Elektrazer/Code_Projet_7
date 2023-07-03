import React from "react";
import { NavLink } from "react-router-dom";

const HomeReturn = () => {
  return (
    <div className="Home">
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default HomeReturn;

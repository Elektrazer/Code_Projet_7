import React from "react";
import logo from ".././assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="kasa-header">
      <div className="kasa-logo">
        <img src={logo} alt="Kasa" />
      </div>

      <div className="Navigation">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/About">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;

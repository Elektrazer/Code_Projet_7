import React from "react";
import logo from ".././assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="kasa-header">
      <div className="kasa-logo">
        <img src={logo} alt="Kasa" />
      </div>

      <div className="Navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              style={isActivePage("/") ? { textDecoration: "underline" } : {}}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              style={
                isActivePage("/About") ? { textDecoration: "underline" } : {}
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

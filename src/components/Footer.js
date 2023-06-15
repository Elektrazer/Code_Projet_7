import React from "react";
import logoFooter from "../assets/kasaFooter.PNG";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <img src={logoFooter} alt="Logo Kasa" className="logoFooter" />
      </div>
      <span className="copyrightFooter">© 2020 Kasa. All rights reserved</span>
    </div>
  );
};

export default Footer;

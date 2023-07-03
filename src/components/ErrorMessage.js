import React from "react";
import HomeReturn from "./HomeReturn";

const Error = () => {
  return (
    <div className="Error">
      <div className="ErrorNumber">404</div>
      <div className="ErrorExp">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <HomeReturn />
    </div>
  );
};

export default Error;

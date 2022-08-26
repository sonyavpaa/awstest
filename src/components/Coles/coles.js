import React from "react";
import backgroundVideo from "./backgroundVideo.mp4";
import "./coles.css";

const Coles = () => {
  return (
    <div>
      <h2>Eric Coles Coded Here</h2>
      <h2>Relax and have a cocktail on us</h2>
      <div className="video">
        <video autoPlay muted loop src={backgroundVideo} type="video/mp4" />
      </div>
    </div>
  );
};

export default Coles;

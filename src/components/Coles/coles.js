import React from "react";
import BackgroundVideo from "./BackgroundVideo.mp4";
import "./coles.css";

const Coles = () => {
  return (
    <div>
      <h2>Eric Coles Coded Here</h2>
      <h2>Relax and have a cocktail on us</h2>
      <div className="video">
        <video autoPlay muted loop src={BackgroundVideo} type="video/mp4" />
      </div>
    </div>
  );
};

export default Coles;

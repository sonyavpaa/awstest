import React from "react";
import "./coles.css";
import ReactPlayer from "react-player";

const Coles = () => {
  return (
    <div>
      <h2>Eric Coles Coded Here</h2>
      <h2>Relax and have a cocktail on us</h2>
      <ReactPlayer
        url="https://colesbucket22.s3.eu-central-1.amazonaws.com/cocktail.mp4"
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        className="video"
      />
    </div>
  );
};

export default Coles;

import React from "react";
import BackgroundVideo from "./BackgroundVideo.mp4";
import "./coles.css";

const Coles = () => {
  return (
    <div>
      <h2>Eric Coles Coded Here</h2>
      <h2>Relax and have a cocktail on us</h2>
      <ReactPlayer
        className="video"
        url="s3://colesbucket22/cocktail.mp4"
        playing={true}
        loop={true}
        muted={true}
        controls={false}
      />
    </div>
  );
};

export default Coles;

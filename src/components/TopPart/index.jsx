import React from "react";
import "./index.css";
import video from "../Assets/glihed_exe.webm";

const TopPart = () => {
  return (
    <div className="parent">
      <video className="b_v" autoPlay loop muted playsInline>
        <source src={video} type="video/webm" />
      </video>
      <div className="hold">
        <div className="h1">
          <h1>Gaming community with an artistic touch</h1>
          <p>
            We organize esports tournaments and related events, and also actively assist in the development of esports
            in Uzbekistan
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopPart;

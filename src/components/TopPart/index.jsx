import React from "react";
import "./index.css";
import logo from "../Assets/logo.png";
import video from "../Assets/glihed_exe.mp4";

const TopPart = () => {
  return (
    <div className="parent">
      <video autoPlay loop muted src={video} className="b_v"></video>
      <div className="hold">
        <img src={logo} alt="" />
        <div className="h1">
          <h1>Glitched</h1>
          <h1>.exe</h1>
        </div>
      </div>
    </div>
  );
};

export default TopPart;

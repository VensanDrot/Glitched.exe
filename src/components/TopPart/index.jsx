import React from "react";
import "./index.css";
import logo from "../Assets/logo.png";

const TopPart = () => {
  return (
    <div className="parent">
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

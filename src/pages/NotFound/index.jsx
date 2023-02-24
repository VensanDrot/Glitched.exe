import React from "react";
import "./index.css";
import { BsTools } from "react-icons/bs";
import jh from "../../Assets/jh.png";
import jh1 from "../../Assets/jh1.png";

const NotFoundPage = () => {
  const rand = () => {
    if (Math.floor(Math.random() * 3) === 0) {
      return jh1;
    } else {
      return jh;
    }
  };

  return (
    <>
      <div className="NotFound">
        <h1 className="gear">
          <BsTools />
        </h1>
        <h1>Тут ничего нет :(</h1>
        <img src={rand()} className="jh" alt="No mechanic here" />
      </div>
    </>
  );
};

export default NotFoundPage;

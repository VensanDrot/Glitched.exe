import React from "react";
import "./index.css";
import { BsTools } from "react-icons/bs";
import jh from "../../Assets/jh.png";

const NotFoundPage = () => {
  return (
    <>
      <div className="NotFound">
        <h1 className="gear">
          <BsTools />
        </h1>
        <h1>Тут ничего нет :(</h1>
        <img src={jh} className="jh" alt="No mechanic here" />
      </div>
    </>
  );
};

export default NotFoundPage;

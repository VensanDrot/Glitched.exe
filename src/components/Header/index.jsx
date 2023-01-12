import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "./logo.svg";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="holder">
          <div className="img_text">
            <img src={logo} alt="" />
            Glitched.exe
          </div>
          <div className="links">
            <Link>О Нас</Link>
            <Link>Турниры</Link>
            <Link>Партнеры</Link>
            <Link>Контанты</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

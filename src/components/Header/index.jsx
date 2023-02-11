import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../Assets/logo.svg";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="header_container">
        <div className="holder">
          <Link to="/">
            <div className="img_text">
              <img src={logo} alt="" />
              Glitched.exe
            </div>
          </Link>
          <div className="ham">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="links">
            <Link to="/NotFound">О Нас</Link>
            <Link to="/NotFound">Турниры</Link>
            <Link to="/NotFound">Партнеры</Link>
            <Link to="/NotFound">Контанты</Link>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "ham_menu_active" : ""} ham_menu`}>
        <Link onClick={() => setOpen(!isOpen)}>О Нас</Link>
        <Link onClick={() => setOpen(!isOpen)}>Турниры</Link>
        <Link onClick={() => setOpen(!isOpen)}>Партнеры</Link>
        <Link onClick={() => setOpen(!isOpen)}>Контанты</Link>
      </div>
    </>
  );
};

export default Header;

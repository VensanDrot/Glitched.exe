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
            <Link to="/">Главная</Link>
            <Link to="/NotFound">Турниры</Link>
            <Link to="/NotFound">Сотрудничество</Link>
            <Link to="/NotFound">Контанты</Link>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "ham_menu_active" : ""} ham_menu`}>
        <Link to="/" onClick={() => setOpen(!isOpen)}>
          Главная
        </Link>
        <Link to="/NotFound" onClick={() => setOpen(!isOpen)}>
          Турниры
        </Link>
        <Link to="/NotFound" onClick={() => setOpen(!isOpen)}>
          Сотрудничество
        </Link>
        <Link to="/NotFound" onClick={() => setOpen(!isOpen)}>
          Контанты
        </Link>
      </div>
    </>
  );
};

export default Header;

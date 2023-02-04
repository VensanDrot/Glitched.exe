import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../Assets/logo.svg";
import { TbBrandTelegram } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { FiInstagram } from "react-icons/fi";
import { BsTwitch } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="f_container">
        <div className="img_name">
          <img src={logo} alt="" />
          <div className="text_hold">
            <p>GLITCHED.EXE</p>
            <p>Gaming community</p>
          </div>
        </div>
        <div className="links_b">
          <Link>О Нас</Link>
          <Link>Турниры</Link>
          <Link>Партнеры</Link>
          <Link>Контанты</Link>
        </div>
        <div className="socials_b">
          <p>Следите за новостями</p>
          <div className="icons">
            <a href="https://instagram.com/glitched.exe.inst/" target="_blank">
              <FiInstagram />
            </a>
            <a href="https://t.me/glitched_exe" target="_blank">
              <TbBrandTelegram />
            </a>
            <a href="https://www.twitch.tv/glitched_media" target="_blank">
              <BsTwitch />
            </a>
            <a href="https://discord.gg/75YWWfNZkd" target="_blank">
              <RxDiscordLogo />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

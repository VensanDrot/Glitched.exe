import React from "react";
import "./index.css";
import TopPart from "../../components/TopPart";
import SwiperRes from "../../components/Swiper";
import { TbBrandTelegram } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { FiInstagram } from "react-icons/fi";
import { BsTwitch } from "react-icons/bs";
import g1 from "../../Assets/g1.png";
import g2 from "../../Assets/g2.png";

const MainPage = (props) => {
  /*
  tg://resolve?domain=glitched_exe/
  https://instagram.com/glitched.exe.inst/
  https://www.twitch.tv/glitched_media
  tg://resolve?domain=Glitchedexe/
  https://discord.com/https://discord.gg/75YWWfNZkd
  */

  return (
    <>
      <TopPart></TopPart>
      {/*
      <div className="info_container">
        <hr className=" hr top"></hr>
        <div className="socials data_cont">
          <h1>Наши социальные сети</h1>
          <div className="flex_cont_soc">
            <a href="https://t.me/glitched_exe" target="_blank">
              <div className="aligner">
                <p>Новости и анонсы турниров</p>
                <TbBrandTelegram />
              </div>
            </a>
            <a href="https://t.me/Glitchedexe" target="_blank">
              <div className="aligner">
                <p>Поболтаем?</p>
                <TbBrandTelegram />
              </div>
            </a>
            <a href="https://instagram.com/glitched.exe.inst/" target="_blank">
              <div className="aligner">
                <p>Instagram</p>
                <FiInstagram />
              </div>
            </a>
            <a href="https://www.twitch.tv/glitched_media" target="_blank">
              <div className="aligner">
                <p>Трансляции тут</p>
                <BsTwitch />
              </div>
            </a>
            <a href="https://discord.gg/75YWWfNZkd" target="_blank">
              <div className="aligner">
                <p>Discord</p>
                <RxDiscordLogo />
              </div>
            </a>
          </div>
        </div>
        <div className="info_spec data_cont">
          <h1>Glitched.exe</h1>
          <p>
            Glitched.exe - игровой комьюнити клуб основанный в Вестминстерском университете, целью которого является
            организовывать киберспортивные турниры и другие события по разным дисциплинам, ежегодно проводящий более 10
            мероприятий в год
          </p>
        </div>
        <hr className=" hr btm"></hr>
      </div>
       */}

      <div className="container info_holder">
        <div className="holder left">
          <hr className="info_holder_hr l" />
          <div className="text l">
            <h1 className="info_holder_head">О нас</h1>
            <p className="info_holder_text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, quaerat. Accusamus nulla officia eum!
              Laboriosam iure optio magni, obcaecati veritatis eaque quis deserunt natus voluptatem? Consequatur quidem
              quo aperiam nemo?
              <br />
              <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, quaerat. Accusamus nulla officia
              eum! Laboriosam iure optio magni, obcaecati veritatis eaque quis deserunt natus voluptatem? Consequatur
              quidem quo aperiam nemo?
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, quaerat. Accusamus nulla officia eum!
              Laboriosam iure optio magni, obcaecati veritatis eaque quis deserunt natus voluptatem? Consequatur quidem
              quo aperiam nemo?
            </p>
          </div>
          <img className="img" src={g1} alt="" />
        </div>
        <div className="holder right">
          <img className="img " src={g2} alt="" />
          <div className="text r">
            <h1 className="info_holder_head">Наша миссия</h1>
            <p className="info_holder_text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, quaerat. Accusamus nulla officia eum!
              Laboriosam iure optio magni, obcaecati veritatis eaque quis deserunt natus voluptatem? Consequatur quidem
              quo aperiam nemo?
              <br />
              <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, quaerat. Accusamus nulla officia
              eum! Laboriosam iure optio magni, obcaecati veritatis eaque quis deserunt natus voluptatem? Consequatur
              quidem quo aperiam nemo?
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, quaerat. Accusamus nulla officia eum!
              Laboriosam iure optio magni, obcaecati veritatis eaque quis deserunt natus voluptatem? Consequatur quidem
              quo aperiam nemo?
            </p>
          </div>
          <hr className="info_holder_hr r" />
        </div>
      </div>
    </>
  );
};

export default MainPage;

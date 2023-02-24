import React from "react";
import "./index.css";
import TopPart from "../../components/TopPart";
import SwiperRes from "../../components/Swiper";
import { TbBrandTelegram } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { FiInstagram } from "react-icons/fi";
import { BsTwitch } from "react-icons/bs";
import SVG1 from "../../Assets/Vector.svg";
import SVG2 from "../../Assets/Vector(1).svg";
import SVG3 from "../../Assets/Vector(2).svg";
import SVG4 from "../../Assets/Vector(3).svg";
import SVG5 from "../../Assets/Vector(4).svg";
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

      <div className="container info_holder">
        <div className="holder left">
          <hr className="info_holder_hr l" />
          <div className="text l">
            <h1 className="info_holder_head">О нас</h1>
            <p className="info_holder_text">
              Наша организация начало свою деятельность в 2019 году, под тэгом "Banana Gaming". Целью и задачами было
              проведение внутренних турниров и мероприятий для студентов в университете WIUT. В конце 2021 года у нас
              произошел ребрендинг и организация начала выступать под название "Glitched.exe"(с англ - сбой). Свою
              турнирную деятельность организация начала осуществлять в начале 2022 года, и своим первым шагом в мир
              киберспорта устроила меджу-университетский турнир между Вестминстер и Вебстер.
            </p>
          </div>
          <img className="img" src={g1} alt="" />
        </div>
        <div className="holder right">
          <img className="img " src={g2} alt="" />
          <div className="text r">
            <h1 className="info_holder_head">Наша миссия</h1>
            <p className="info_holder_text">
              В нынешняя время целью "Glitched.exe" является развитие киберспорта в Узбекистане, организация ежемесячно
              проводит множество мероприятий как: турниры по всяким дисциплинам, викторины о киберспорте, а также
              гостевые лекции с опытными специалистами в этой сфере.
            </p>
          </div>
          <hr className="info_holder_hr r" />
        </div>
      </div>

      {/* Grided part */}

      <div className="incorporation">
        <h1>Преимущества сотрудничества с нами</h1>
        <div className="top_inc">
          <div className="inc_box">
            <div className="inc_svg">
              <img src={SVG1} alt="" />
            </div>
            <div className="inc_text">
              <h2>Качество</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quas reiciendis unde cum nulla
                quam consectetur esse iure consequatur accusamus placeat modi, hic nesciunt reprehenderit repellat porro
                rerum amet totam.
              </p>
            </div>
          </div>

          <div className="inc_box">
            <div className="inc_svg">
              <img src={SVG2} alt="" />
            </div>
            <div className="inc_text">
              <h2>Поддержка</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quas reiciendis unde cum nulla
                quam consectetur esse iure consequatur accusamus placeat modi, hic nesciunt reprehenderit repellat porro
                rerum amet totam.
              </p>
            </div>
          </div>

          <div className="inc_box">
            <div className="inc_svg">
              <img src={SVG3} alt="" />
            </div>
            <div className="inc_text">
              <h2>Цена</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quas reiciendis unde cum nulla
                quam consectetur esse iure consequatur accusamus placeat modi, hic nesciunt reprehenderit repellat porro
                rerum amet totam.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom_inc">
          <div className="inc_box">
            <div className="inc_svg">
              <img src={SVG4} alt="" />
            </div>
            <div className="inc_text">
              <h2>Безопасность</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quas reiciendis unde cum nulla
                quam consectetur esse iure consequatur accusamus placeat modi, hic nesciunt reprehenderit repellat porro
                rerum amet totam.
              </p>
            </div>
          </div>

          <div className="inc_box">
            <div className="inc_svg">
              <img src={SVG5} alt="" />
            </div>
            <div className="inc_text">
              <h2>Медиа</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quas reiciendis unde cum nulla
                quam consectetur esse iure consequatur accusamus placeat modi, hic nesciunt reprehenderit repellat porro
                rerum amet totam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

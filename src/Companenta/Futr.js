import React from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/futr.css";
import logo from "../Assets/Images/Haqiqy.png"
import tg from "../Assets/Images/telegram.png"
import yt from "../Assets/Images/youtube.png"
import fb from "../Assets/Images/facebook.png"
import ins from "../Assets/Images/instagram.png"

export function Futr() {
  return (
    <div id="futr">
      <div id="futer">
        <div id="lagatip">
        <Link to="/" ><div id="log"><img src={logo} alt="" /><span>Namangan viloyati hududiy inovatsiya faoliyati va texnologiyalar trasfer markazi</span></div></Link>
        </div>
        <div id="linklar">
          <Link to="/bizhaqimizda">Biz haqimizda</Link>
          <Link to="/loyihalar">Loyihalar</Link>
          <Link to="/tanlovlar">Tanlovlar</Link>
          <Link to="/yangiliklar">Yangiliklar</Link>
          <Link to="/aloqa">Aloqa</Link>
        </div>
        <div id="tell">
          <h3>Biz bilan bog'lanish</h3>
          <span>naminomarkaz@gmail.com</span><br /><br />
          <h4>+(998) 69 232 90 44</h4>
          <div id="ikonlar">
          <img src={tg} alt="" />
          <img src={yt} alt="" />
          <img src={fb} alt="" />
          <img src={ins} alt="" />
          </div>    
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../Assets/CSS/CottonProjectNames.css";
// import { Link } from "react-router-dom";
import { Navbar } from "../Companenta/Navbar";
import { useNavigate } from "react-router-dom";

export function CottonProjectNames() {

  const navigate = useNavigate()
  return (
    <div id="CotonProName">
      <Navbar />
      <div id="cotonProNamesTittle">
        <h3>
          Paxta xom ashyosini datlabki ishlash texnologiyasi bo'yicha loyihalar
          jamlanmasi
        </h3>
      </div>
      <div id="coton-pages">
        
          <ul id="lii">
            <li  onClick={()=>{navigate("/cottonProNames")}}>
              PАXTА XOM-АSHYOSI UCHUN KO'P CHO'NTАKLI MАGNITLI TOSHTUTGICH
            </li>
          </ul>
        
      </div>
      <div id="coton-pages">
      <ul>
            <li>
              PAXTA TARKIBIDAGI OG'IR JISMLARNI AJRATUVCHI GORIZANTAL
              TOSHTUTGICH
            </li>
          </ul>
      </div>
      <div id="coton-pages">
      <ul>
            <li>TO'RLI BARABANLI PAXTA SEPARATORI</li>
          </ul>
      </div>
      <div id="coton-pages">
      <ul>
            <li>PАXTА SEPАRАTORINING KONSTRUKTSIYASINI TАKOMILLАSHTIRISH</li>
          </ul>
      </div>
      <div id="coton-pages">
      <ul>
            <li>АRRАLI JIN UCHUN АRIQCHАLI KOLOSNIK</li>
          </ul>
      </div>
      <div id="coton-pages">
      <ul>
            <li>YANGI TАKOMILLАSHTIRILGАN JIN MАSHINАSI</li>
          </ul>
      </div>
    </div>
  );
}

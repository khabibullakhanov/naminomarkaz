import React from "react";
import "../Assets/CSS/loyihalar.css";
// import { Link } from "react-router-dom";
import { Navbar } from "../Companenta/Navbar";
import { Futr } from "../Companenta/Futr";
import { useNavigate } from "react-router-dom";

export function Loyihalar() {
  const navigate = useNavigate();
  return (
    <div id="loyiha">
      <div>
        <Navbar />
      </div>
      <div id="loyih">
        <h1>Loyihalar</h1>
      </div>

      <div id="project-main">
        <div
          onClick={() => {
            navigate("/qishloq");
          }}
          to="/qishloq"
          id="project-kard"
        >
          <div id="project-product">
            <span>10</span>
          </div>
          <div id="project-img">
            <i class="fa-solid fa-building-wheat"></i>
          </div>
          <div id="project-name">
            <span>Qishloq xo'jaligi</span>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/kimyoTex");
          }}
          id="project-kard"
        >
          <div id="project-product">
            <span>2</span>
          </div>
          <div id="project-img">
            <i class="fa-solid fa-flask-vial text-danger"></i>
          </div>
          <div id="project-name">
            <span>Kimyo-texnologiya</span>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/talim");
          }}
          id="project-kard"
        >
          <div id="project-product">
            <span>5</span>
          </div>
          <div id="project-img">
            <i class="fa-solid fa-graduation-cap text-dark"></i>
          </div>
          <div id="project-name">
            <span>Ta'lim</span>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/suv");
          }}
          id="project-kard"
        >
          <div id="project-product">
            <span>5</span>
          </div>
          <div id="project-img">
            <i class="fa-solid fa-faucet-drip text-info"></i>
          </div>
          <div id="project-name">
            <span>Suv xo'jaligi</span>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/toqimachilik");
          }}
          id="project-kard"
        >
          <div id="project-product">
            <span>5</span>
          </div>
          <div id="project-img">
            <i class="fa-solid fa-rug test-actual text-warning"></i>
          </div>
          <div id="project-name">
            <span>To'qimachilik va yengil sanoat</span>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/elektr");
          }}
          id="project-kard"
        >
          <div id="project-product">
            <span>5</span>
          </div>
          <div id="project-img">
            <i class="fa-solid fa-bolt text-primary"></i>
          </div>
          <div id="project-name">
            <span>Elektr-energiya</span>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/paxtaTex");
          }}
          id="project-kard"
        >
          <div id="project-product">
            <span>5</span>
          </div>
          <div id="project-img">
            <i class="fa-brands fa-cotton-bureau"></i>
          </div>
          <div id="project-name">
            <span>Paxtani dastlabki ishlash</span>
          </div>
        </div>

        <div onClick={()=>{navigate("/dastur")}} id="project-kard">
          <div id="project-product">
            <span>5</span>
          </div>
          <div id="project-img">
            <i class="fa-solid fa-code text-secondary"></i>
          </div>
          <div id="project-name">
            <span>Dasturiy ishlanmalar</span>
          </div>
        </div>
      </div>

      <Futr />
    </div>
  );
}

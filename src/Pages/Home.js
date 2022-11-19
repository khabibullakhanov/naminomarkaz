import React from "react";
import "../Assets/CSS/home.css"
import amaliy from "../Assets/Images/amaliy.png";
import fundamental from "../Assets/Images/icon-2.png"
import tijorat from "../Assets/Images/icon-1.png"
import inovat from "../Assets/Images/icon-3.png"
import {Navbar} from '../Companenta/Navbar'
import { Futr } from "../Companenta/Futr";
export function Home(){
  return(
    <div id="home">
    <div id="homee">
      <div><Navbar/></div> 
      <div data-aos="zoom-out-down">
      <div id="tittle">
        <h1>INNOVATSIYA MARKAZI</h1>
        <span>Ixtirolarni hayotga tadbiq etish</span>
      </div>
      </div>
    </div>

    <div id="qismlar">
        <div id="kardd">
          <div id="im">
            <img id="amal" src={amaliy} alt="" />
          </div>
          <div id="matnn">
              <h2>Amaliy</h2><br />
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                Corporis excepturi sed cupiditate!
              </span>
            </div>
        </div>

        <div id="kardd">
          <div id="im">
            <img id="amal" src={fundamental} alt="" />
          </div>
          <div id="matnn">
              <h2>Fundamental</h2><br />
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                Corporis excepturi sed cupiditate!
              </span>
            </div>
        </div>

        <div id="kardd">
          <div id="im">
            <img id="amal" src={tijorat} alt="" />
          </div>
          <div id="matnn">
              <h2>Tijoratlashtirilgan</h2><br />
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                Corporis excepturi sed cupiditate!
              </span>
            </div>
        </div>

        <div id="kardd">
          <div id="im">
            <img id="amal" src={inovat} alt="" />
          </div>
          <div id="matnn">
              <h2>Innovatsion</h2><br />
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                Corporis excepturi sed cupiditate!
              </span>
            </div>
        </div>
      </div>
 <Futr/>
    </div>
    
  )
}

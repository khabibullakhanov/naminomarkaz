import React from "react"
import {Navbar} from '../Companenta/Navbar'
import { Futr } from "../Companenta/Futr";
import nishon from "../Assets/Images/yetakchi.jpg"
import olim from "../Assets/Images/olim.jpg"
import ayol from "../Assets/Images/ayol.jpg"
import "../Assets/CSS/tanlovlar.css"
export function Tanlovlar() {
 
    return (
      <div id="tanlovlar">
         <Navbar/>
         <div id="sarlv">
              <h1>Tanlovlar</h1>
         </div>
         <div id="yetakchi">
              <div id="tanl">
                <img src={nishon} alt="" />
                <p>“Innovatsion gʻoyalar yetakchisi” maqomiga ega boʻlish imkoniyatini qoʻldan boy bermang!</p>
                <span>🌐 Innovatsion gʻoya va texnologiyalarni rivojlantirish, amaliyotga tatbiq etishga munosib hissa qoʻshgan iqtidorli yoshlarni jalb qilish, ularning innovatsion faoliyatini ragʻbatlantirish va erishgan yutuqlarini munosib taqdirlash</span>
               <a target="_blank" href="https://yoshlarakademiyasi.uz/2022/04/18/innovatsion-g%ca%bboyalar-yetakchisi-maqomiga-ega-bo%ca%bblish-imkoniyatini-qo%ca%bbldan-boy-bermang-2/"> <button>Batafsil &#8594; </button></a>
              </div>

              <div id="tanl">
                <img src={olim} alt="" />
                <p>Yoshlar akademiyasi “Boʻlajak olim” tanlovi 3-mavsumini eʼlon qiladi</p>
                <span>“Boʻlajak olim” tanlovning asosiy maqsadi – iqtidorli va isteʼdodli yosh olimlarning innovatsion faoliyati natijalari va tashabbuslarini davlat tomonidan qoʻllab-quvvatlash, ularning ilmiy izlanishlari uchun zarur shart-sharoitlarni yaratib berish hamda</span>
               <a target="_blank" href="https://yoshlarakademiyasi.uz/2022/04/12/yoshlar-akademiyasi-bo%ca%bblajak-olim-tanlovi-3-mavsumini-e%ca%bclon-qiladi/"> <button>Batafsil &#8594; </button></a>
              </div>

              <div id="tanl">
                <img src={ayol} alt="" />
                <p>“Boʻlajak olim” tanlovi doirasida “Ayollar biznesi uchun birinchi qadam” tanlovi eʼlon qilinadi</p>
                <span>“Ayollar biznesi uchun birinchi qadam” tanlovning asosiy maqsadi – iqtidorli va isteʼdodli xotin-qizlar, ayollar va yosh olimalarning innovatsion faoliyati natijalari va tashabbuslarini davlat tomonidan qoʻllab-quvvatlash, ularning ilmiy izlanishlari uchun</span>
               <a target="_blank" href="http://https://yoshlarakademiyasi.uz/2022/05/05/bo%ca%bblajak-olim-tanlovi-doirasida-ayollar-biznesi-uchun-birinchi-qadam-tanlovi-e%ca%bclon-qilinadi/"> <button>Batafsil &#8594; </button></a>
              </div>
         </div>
         <Futr/>
      </div>
    )
  }
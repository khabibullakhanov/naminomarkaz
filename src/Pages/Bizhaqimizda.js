import React from "react"
import "../Assets/CSS/bizhaqimzda.css"
import men from "../Assets/Images/img_avatar.png"
import women from "../Assets/Images/img_avatar2.png"
import markaz from "../Assets/Images/markaz.jpg"
import {Navbar} from '../Companenta/Navbar'
import { Futr } from "../Companenta/Futr";

export function Bizhaqimizda() {
 
    return (
      <div id="biz">
        <div id="navv"><Navbar/></div> 
          <div id="sarlavha">
              <h1>Biz haqimizda</h1>
          </div>
          <div id="rah"><h1>Bizning jamoa</h1></div>
          <div id="rahbaryat">
            <div id="card">
              <img src={men} alt="" /><br />
              <h4>Rustam Murodov</h4>
              <span>Markaz rahbari</span><br />
              <span>Tel: +998 94 272 94 56</span>
            </div>
            <div id="card">
              <img src={men} alt="" /><br />
              <h4>Rahimov Fayzullo</h4>
              <span>Ilmiy kotib</span><br />
              <span>Tel: +998 97 320 95 65</span>
            </div>
            <div id="card">
              <img src={women} alt="" /><br />
              <h4>Salomova Mashxura</h4>
              <span>Markaz hodimi</span><br />
              <span>Tel: +998 90 050 03 25</span>
            </div>
            <div id="card">
              <img src={men} alt="" /><br />
              <h4>Mamadaliyev Nodirbek</h4>
              <span>Markaz hodimi</span><br />
              <span>Tel: +998 97 595 85 54</span>
            </div>
          </div>
          <div >
          <div id="vazifa">
              <div id="mar" data-aos="fade-up">
                <img src={markaz} alt="" />
              </div>
              <div id="malumot"  data-aos="fade-up">
                <h1>Markazning maqsad va vazifalari</h1>
                  <li>
                    mintaqada innovatsiya faoliyatini rivojlantirishga ko'maklashish, ishlab chiqarish salohiyatini rivojlantirish maqsadida mahalliy va xorijiy texnologiyalar transferini tashkil etish
                  </li>
                  <li>ilmiy va konstruktorlik tashkilotlari, oliy o'quv yurtlari, korxonalar va birlashmalarning, mintaqaviy, ilmiy, ilmiy-texnik loyihalari hamda dasturlarini ishlab chiqish va bajarish borasidagi faoliyatlarini muvofiqlashtirish. Ularni natijalarini tijoratlashishga ko'maklashish</li>
                  <li>viloyatda fan va texnologiyalarni barcha masalalari bo'yicha maslahatlar berish hamda metodik yordam ko'rsatish </li>
                  <li>mintaqaning ijtimoiy-iqtisodiy muammolarini tez va samarali hal qilish uchun ilmiy xizmat ko'rsatishini tashkil etish hamda muvaqqat ijodiy jamoalar tuzish yo'li bilan innovatsion loyihalarini shakllantirish;</li>
                  <li>mahalliy xom-ashyolardan foydalanib innovatsion texnologiyalarni qo'llagan holda  eksportga mahsulotlar chiqarishga ko'maklashish;</li>
                  <li>ilmiy va ilmiy-ishlab chiqarish muassasalarining moddiy-texnika bazasini mustahkamlash ishlariga ko'maklashish</li>
              </div>
          </div>
          </div>
          <Futr/>
      </div>
    )
  }


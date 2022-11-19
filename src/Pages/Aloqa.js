import React from "react";
import "../Assets/CSS/aloqa.css";
import {Navbar} from '../Companenta/Navbar'
import { Futr } from "../Companenta/Futr";
export function Aloqa() {
  
  return (
    <div id="container-fluid">
            <div><Navbar/></div> 
    <div id="container">
      <form id="call">
        <h2>Savollaringgiz bormi? <br /> Keling biz siz bilan bog'lanamiz</h2>
        <label>
          <input type="text" placeholder="Isminggiz" />
        </label>
        <label>
          <input type="text" placeholder="Familyanggiz" />
        </label>
        <label>
          <input type="number" placeholder="Telefon raqaminggiz" />
        </label>
          <select name="" id="">
            <option value="tanlang">--Tanlang--</option>
            <option value="--Tanlang--">Tugallanmagan oliy ma'lumot</option>
            <option value="oqituvchi">
              Oliy ma'lumotli o'qituvchi yoki xodim
            </option>
            <option value="oqituvchi">Texnologiya va biznes rahbari</option>
            <option value="boshqa">Boshqa</option>
          </select>
        <textarea placeholder="Savolinggizni qisqacha mazmuni" name="" id="" cols="30" rows="10"></textarea>
        <button id="send">Yuborish</button>
      </form>
      <div id="map">
        <div id="location">
          <div>
            <h3>Manzil</h3>
            <span>Namangan viloyati Namangan shahar <br /> Do'stlik shoh ko'chasi</span>
          </div>
          <div id="al">
            <h3>Aloqa uchun</h3>
            <span>Tel: (69) 232 90 44</span>
          </div>
        </div><br /><br />
        <iframe
        tittle="tittile"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.322741360889!2d71.58999361525103!3d40.996308679302025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4befaa7bc9bd%3A0x90c50cefb1c1d46b!2sNamangan%20muhandislik%20texnologiya%20instituti%20akademik%20litseyi!5e0!3m2!1sru!2s!4v1650689969445!5m2!1sru!2s"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <Futr/>
    </div>
  );
}

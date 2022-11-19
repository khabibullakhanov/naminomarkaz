import React from "react";
import "../Assets/CSS/yangilik.css";
// import { Link } from "react-router-dom";
import { Navbar } from "../Companenta/Navbar";
import { Futr } from "../Companenta/Futr";
import e from "../Assets/Images/elon.jpg";
import el from "../Assets/Images/elon2.jpg";
import ell from "../Assets/Images/ell.jpg"
import t from "../Assets/Images/taqdirlash.jpg";
export function Yangiliklar() {
  return (
    <div id="umumiy">
      <div>
        <Navbar />
      </div>
      <div id="yangilik" className="mx-0">
        <h1>Yangiliklar</h1>
      </div>
      <div id="elon">
        <div id="elonlar">
          {/* <img src={el} alt="" />
          <h2>Ilmiy-innovatsion loyihalar ko‘rgazmasi o‘tkazildi</h2>
          <span>
            Namangan muhandislik-texnologiya institutida ilmiy-innovatsion
            loyihalar ko’rgazmasi bo’lib o’tdi. Mazkur ko’rgazmada institut
            rektori Odiljon Mamatkarimov, prorektorlar, fakultet dekanlari,
            institutning professor-o’qituvchilari va talabalar ishtirok etib,
            tadqiqotchilar tomonidan o‘rganilayotgan ishlanmalar bilan yaqindan
            tanishdilar. Aytish kerakki, tashkil etilayotgan bunday ko’rgazmalar
            ilm-fan sohasidagi o’zaro tajribalarni o’rtoqlashish uchun muhim
            omil bo‘lib xizmat qiladi.
          </span>
          <p>26.04.2022</p> */}
          <div id="demo" className="carousel slide imglar" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"
              ></button>
            </div>

            <div className="carousel-inner ">
              <div className="carousel-item active slayd">
                <img src={e} alt="Los Angeles" className="d-block sl w-100" />
              </div>
              <div className="carousel-item">
                <img src={el} alt="Chicago" className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={ell} alt="New York" className="d-block w-100" />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>

          <div className="container-fluid mt-4">
            <h3 className="text-primary">Ilmiy-innovatsion loyihalar ko‘rgazmasi o‘tkazildi</h3>
            <p>
            Namangan muhandislik-texnologiya institutida ilmiy-innovatsion
            loyihalar ko’rgazmasi bo’lib o’tdi. Mazkur ko’rgazmada institut
            rektori Odiljon Mamatkarimov, prorektorlar, fakultet dekanlari,
            institutning professor-o’qituvchilari va talabalar ishtirok etib,
            tadqiqotchilar tomonidan o‘rganilayotgan ishlanmalar bilan yaqindan
            tanishdilar. Aytish kerakki, tashkil etilayotgan bunday ko’rgazmalar
            ilm-fan sohasidagi o’zaro tajribalarni o’rtoqlashish uchun muhim
            omil bo‘lib xizmat qiladi.
            </p>
          </div>
        </div>
        <div id="line"></div>

        <div id="elonlar-1">
          <div id="xabarlar">
            <img src={t} alt="" />
            <h3>Eng yaxshi intellektual mulk tanlovi g‘oliblari taqdirlandi</h3>
            <span>27.04.2022</span>
          </div>

          <div id="xabarlar">
            <img src={t} alt="" />
            <h3>Eng yaxshi intellektual mulk tanlovi g‘oliblari taqdirlandi</h3>
            <span>27.04.2022</span>
          </div>

          <div id="xabarlar">
            <img src={t} alt="" />
            <h3>Eng yaxshi intellektual mulk tanlovi g‘oliblari taqdirlandi</h3>
            <span>27.04.2022</span>
          </div>
        </div>
      </div>
      <div>
        <Futr />
      </div>

      {/* <div id="demo" className="carousel slide" data-bs-ride="carousel">

 
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={e} alt="Los Angeles" className="d-block" />
    </div>
    <div className="carousel-item">
      <img src={el} alt="Chicago" className="d-block"  />
    </div>
    <div className="carousel-item">
      <img src={elo} alt="New York" className="d-block" />
    </div>
  </div>
  
 
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

<div className="container-fluid mt-3">
  <h3>Carousel Example</h3>
  <p>The following example shows how to create a basic carousel with indicators and controls.</p>
</div> */}
    </div>
  );
}

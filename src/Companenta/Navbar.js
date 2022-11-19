import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/navbar.css";
import logo from "../Assets/Images/Haqiqy.png";
import { useLocation } from "react-router-dom";
// import icon from "../Assets/Images/menu.icon.svg";

export function Navbar() {
  const [rang, setRang] = useState(false);
  const location = useLocation();
  // const [qosh, setqosh] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      setRang(true);
    }
  }, [location]);

  // function modal() {
  //   setqosh(!qosh);
  //   console.log(qosh);
  // }


  return (
    <div id="navv">

<nav className="navbar navbar-expand-sm navbar-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img id="imagess" src={logo} alt="" /><span style={rang ? { color: "#171717" } : {}} className="fs-6"> Innovatsion texnologiyalar <br /> transfer markazi </span></Link>
    <button  className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link style={rang ? { color: "#171717" } : {}} to="/bizhaqimizda" className="nav-link" >Biz haqimizda</Link>
        </li>
        <li className="nav-item">
          <Link style={rang ? { color: "#171717" } : {}} to="/loyihalar" className="nav-link" >Loyihalar</Link>
        </li>
        <li className="nav-item">
          <Link style={rang ? { color: "#171717" } : {}} to="/tanlovlar" className="nav-link" >Tanlovlar</Link>
        </li>
        <li className="nav-item">
          <Link style={rang ? { color: "#171717" } : {}} to="/yangiliklar" className="nav-link" >Yangiliklar</Link>
        </li>
        <li className="nav-item">
          <Link style={rang ? { color: "#171717" } : {}} to="/aloqa" className="nav-link" >Aloqa</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control  me-2" type="text" placeholder="Search"/>
        <button className="btn btn-dark " type="button">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  );
}

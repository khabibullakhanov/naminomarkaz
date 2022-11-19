import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Assets/CSS/App.css";
import { Bizhaqimizda } from "./Pages/Bizhaqimizda";
import { Home } from "./Pages/Home";
import { Loyihalar } from "./Pages/Loyihalar";
import { Tanlovlar } from "./Pages/Tanlovlar";
import { Yangiliklar } from "./Pages/Yangiliklar";
import { Aloqa } from "./Pages/Aloqa";
import { Qishloq } from "./Pages/Qishloq";
import { KimyoTex } from "./Pages/Kimyo-tex";
import { Talim } from "./Pages/Talim";
import { Suv } from "./Pages/Suv";
import { Toqimachilik } from "./Pages/Toqimachilik";
import { ElektrEnergiya } from "./Pages/Elektr-energiya";
import { Paxta } from "./Pages/Paxta";
import { Dastur } from "./Pages/Dastur";
import { CottonProjectNames } from "./Pages/CottonProjectNames";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { acLoading } from "./Redux/Loading";
// import { useLocation } from "react-router-dom";

function App() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  // setTimeout(() => {
  //   dispatch(acLoading(true));
  // }, 1);
  // setTimeout(() => {
  //   dispatch(acLoading(false));
  // }, 2000);

  // const inter = setInterval(() => {
  //   dispatch(acLoading(true));
  // }, 1000);
  
  // setTimeout(() => {
  //   clearInterval(inter);
  // });
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bizhaqimizda" element={<Bizhaqimizda />} />
            <Route path="/loyihalar" element={<Loyihalar />} />
            <Route path="/tanlovlar" element={<Tanlovlar />} />
            <Route path="/yangiliklar" element={<Yangiliklar />} />
            <Route path="/aloqa" element={<Aloqa />} />
            <Route path="/qishloq" element={<Qishloq />} />
            <Route path="/kimyoTex" element={<KimyoTex />} />
            <Route path="/talim" element={<Talim />} />
            <Route path="/suv" element={<Suv />} />
            <Route path="/toqimachilik" element={<Toqimachilik />} />
            <Route path="/elektr" element={<ElektrEnergiya />} />
            <Route path="/paxtaTex" element={<CottonProjectNames />} />
            <Route path="/dastur" element={<Dastur />} />
            <Route path="/cottonProNames" element={<Paxta />} />
          </Routes>
        </div>
      </Router>
      <Backdrop sx={{ color: "#fff", zIndex: "99999999999999" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default App;

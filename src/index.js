import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  
);
AOS.init();




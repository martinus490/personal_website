import React from "react";
import ReactDOM from "react-dom";
import {Route} from 'react-router';
import {Switch, BrowserRouter} from 'react-router-dom';
import "./index.css";
import MainScreen from "./main-screen";
import reportWebVitals from "./reportWebVitals";

import "semantic-ui-css/semantic.min.css"
import Home from "./screens/home/react";

ReactDOM.render(
  <React.StrictMode>
    <MainScreen />
    {/* <BrowserRouter>
      <MainScreen />
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

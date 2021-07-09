import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.css";
import img1 from './image/sss.jpg';
import Bar from "./Bar";

ReactDOM.render(
        <BrowserRouter>
        
            <App  />
        </BrowserRouter>
    ,document.getElementById("root")
);

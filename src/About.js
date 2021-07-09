import React from 'react';
import {BrowserRouter,Route,Router,Switch} from "react-router-dom";
import { Button} from "react-bootstrap";
import Learnmore from "./Learnmore";
import { NavLink } from "react-router-dom";

const About = () => {
    return(
         <>
         <div className="about">
         <h3 className='h3'> About us</h3>
          <p className="p_about"> Learning Together From the Comfort of Your Home </p>
          <img  src="./image/ts.png" className="img_2" />
          <a href="#Learnmore" ><button type="button" class="btn btn-light">Learn More </button></a>
          </div>
          </>
    );
};
export default About;

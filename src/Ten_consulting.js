import React from "react";
// import "./About.css"
import vedio from "./vedio/vedio.mp4";
const Ten_consulting = () => {
    return(
    <div class="Ten_consulting">
        <vedio className="vedio" autoplay muted loop>
        <source src={vedio} type="vedio/mp4"/>
        </vedio>

          <h1 className="consulting_heading">Power of TEN Consulting</h1>
          <hr className="line1"/>
          <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-outline-dark welcome_button">join TEN Virtual Compus</button>
          </div>
        </div>


    
     );
 };
 export default Ten_consulting;
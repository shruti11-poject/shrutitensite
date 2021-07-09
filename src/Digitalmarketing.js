import React from "react";
import "./About.css"
import dm from "./image/digital_marketing.jpg";
import dm2 from "./image/digital_marimg2.jpg";
const Digitalmarketing = () => {
    return(<>
    <div className="d-flex justify-content-center mt-0 h-100">
     <div className="col-11 d-flex mt-0 Marketing">
         <div className="col-6  pl-0">
             <img height="434" width="650" src={dm} alt="image"/>
         </div>
         <div className="col-3 text-center content-marketing py-4">
             <h1>Digital</h1>
             <h1>Marketing</h1>
             <button type="button" class="btn btn-dark ">Explore Here</button>
         </div>
         <div className="col-3 pl-0">
             <img className="ml-0"  height="434" width="300"src={dm2} alt="image2"/>
         </div>
     </div>

    </div>
    </>);
};
export default Digitalmarketing;
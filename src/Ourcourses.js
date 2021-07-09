import React from "react";
import oc from "./image/oc.jpg";
const Ourcourses = () => {
    return(<>
    <div className="d-flex justify-content-center mt-5 h-100">
     <div className="col-11 d-flex Marketing">
         <div className="col-8  pl-0">
             <img height="450px" width="813px"  src={oc} alt="image"/>
         </div>
         <div className="col-4 text-center content-marketing py-4">
             <a href=" "><h1>Entrepreneurship</h1>
             <h3>made fun</h3>
             </a>
             <button type="button" class="btn btn-dark ">Explore Here</button>
         </div>
         
     </div>

    </div>
    </>);
};
export default Ourcourses;

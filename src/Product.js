import React from "react";
// import "./About.css"
import pd from "./image/product_management.jpg";
const Product = () => {
    return(
    <>
    <div className="d-flex justify-content-center mt-0 h-100 ">
     <div className="col-11 d-flex Marketing">
         <div className="col-6  text-center content-marketing py-4">
             <h1>
             Product Management </h1>
             <h1>like a pro</h1>
             <button type="button" class="btn btn-dark ">Explore Here</button>
         </div>
         <div className="col-6 pl-0 ">
             <img height="433" width="600 " src={pd} alt="image"/>
         </div>
         </div>
        </div>
        

    </>
    );
};
export default Product;
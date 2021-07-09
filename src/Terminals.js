import react from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { HiChip } from "react-icons/hi";
const Terminals=()=>{
return(
    <>
        <div className="ribbon-body">
           <a href="#"><span class="button ribbon">Our Course Benifits</span></a>    
        </div>
        <div className=" terminal_bg  mx-auto d-flex justify-content-center ">
            <div className="col-11 d-flex Marketing">
                <div className="col-4 text-center">
                    <div className="globe_main  mx-5 my-5">

                    <DiReact className="globe m-3 p-0"/>
                    </div>
                    <h3>Expert Teachers</h3>
                    <hr className="line-3 mx-auto mt-0"/>
                    <p className="px-4">Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
                      We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.
                   </p>
                    
                </div>
                <div className="col-4  text-center ">
                     <div className="globe_main  mx-5 my-5">
                     <AiOutlineGlobal className="globe m-3 p-0"/>
                     </div> 
                     <h3>Online Community</h3>
                     <hr className="line-3 mx-auto mt-0"/>
                     <p className="px-4"> Feel like home, with a "family of invisible friends".</p>
                </div>
                <div className="col-4 text-center ">
                    <div className="globe_main  mx-5 my-5">
                    <HiChip className= "globe m-3 p-0"/>
                    </div> 
                    <h3>Flexible Curriculum</h3>
                    <hr className="line-3 mx-auto mt-0"/>
                    <p className="px-4">Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.</p>
                </div>
                
            </div>

        </div>
          
    </>

);
};
export default Terminals;
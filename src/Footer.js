import react from "react";
import {GrFacebook} from "react-icons/gr";
import {GrTwitter} from "react-icons/gr";
import {GrInstagram} from "react-icons/gr";
import { Form, FormControl,Button,InputGroup} from "react-bootstrap";
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const Footer = ()=>{
  return(
    <>
     <div className="footer mx-auto mt-2">
    <h4 className="text-center mt-1">Subscribe to our newsletter</h4>
    <div className="col-11 d-flex mx-auto">
    <div className="col-4 text-center">
     <GrFacebook className="facebook_icon " /> <GrTwitter className="twitter_icon" /> <GrInstagram className="instagram_icon"/>          
    </div>
     <div className="col-5 ">
        
        <Form inline>
          <Form.Label htmlFor="inlineFormInputName2" srOnly>
            Name
          </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2 mt-2 "
           id="inlineFormInputName2"
           placeholder="Full Name"
          />
         <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
          Username
         </Form.Label>
         <InputGroup className="mb-2 mr-sm-2">
         <InputGroup.Prepend>
          </InputGroup.Prepend>
          <FormControl id="inlineFormInputGroupUsername2" placeholder="College Name" />
        </InputGroup>
       </Form>
       <Form inline>
          <Form.Label htmlFor="inlineFormInputName2" srOnly>
            Name
          </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2 mt-1 "
           id="inlineFormInputName2"
           placeholder="Mobile.no"
          />
         <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
          Username
         </Form.Label>
         <InputGroup className="mb-2 mr-sm-2">
         <InputGroup.Prepend>
          </InputGroup.Prepend>
          <FormControl id="inlineFormInputGroupUsername2" placeholder="Email" />
        </InputGroup>
       </Form>
       <CheckBoxIcon className="checkbox" /> Join TEN's Discord Comunity
       <div className="sumbit_button">
       <Button variant="outline-dark" className="sumbit_button"> Sumbit</Button> 
        </div>  
    </div>
      <div className="col-4 ">
        <a href="" ><h3 className=" about_heading">About Us</h3> </a>
         <a href="" ><h3 className=" FAQ_heading">FAQ'S</h3> </a>
         <a href="" ><h3 className=" Contact_heading">Contact Us</h3> </a> 
      </div>
      </div>
      </div>
      <div className="border">
       <p> 2020 Limitless Technologies-The Entrepreneurship Network</p>
      </div>
    </>
  );
};
export default Footer;
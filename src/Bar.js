import React from "react";
import { Navbar ,Nav ,NavDropdown,Button,FormControl,Form} from "react-bootstrap";
import {BrowserRouter} from "react-router-dom";

const navbar=()=>{
return(
   < div className="nav">
     <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
             <Nav.Link className="home" href="#home">HOME</Nav.Link>
              <Nav.Link  className="OC" href="#home">ONLINE COURSES</Nav.Link>
              <Nav.Link className="WH" href="#home">We're Hiring</Nav.Link>                       
                <NavDropdown className="more" title="MORE" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
                        </Navbar.Collapse>
      </Navbar>
   </div>
);
};
export  default navbar;
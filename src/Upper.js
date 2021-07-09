import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import {BrowserRouter} from "react-router-dom";
import {  navbar, Nav, NavDropdown,Button,FormControl,Form } from 'react-bootstrap';

const BI=()=>{
    return(
    <>
<div className="NavBar">
   <div className="NavBar_Icon"> 
        <Button className="login"><AccountCircleIcon/> LOGIN</Button>
        <Button className="icon" variant="danger">< ShoppingCartIcon /> </Button>  
    </div>
 <FormControl type="text" placeholder =  "Search" className="search"  />
</div> 
 <div className="heading">
        <h5> <span className="letter">T</span>he</h5>
        <h5><span className="letter">E</span>ntrepreneurship</h5>
        <h5><span className="letter">N</span>etwork</h5>
        <img src="./image/logo.png"  className="logo"/>
 </div>
  </>

    );
};
export  default BI ;

import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  navbar, Nav, NavDropdown,Button,FormControl,Form } from 'react-bootstrap';
import './index.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Bar from "./Bar";
import SearchIcon from '@material-ui/icons/Search';
import Upper from "./Upper";
import About from "./About";
import Welcome from "./Welcome";
import Ourcourses from "./Ourcourses";
import  Digitalmarketing from "./Digitalmarketing";
import Product from "./Product";
import Ten_consulting from "./Ten_consulting";
import Image_slider from "./Image_slider";
import Terminals from "./Terminals";
import Footer from "./Footer";


const App = () => {
    return(
         <>
    <Upper />     
    <Bar />
    <div className="img_1">
    <img src="./image/images.Jpg " className="img1"/>
    <h1 className="h1">A World of Knowledge at Your Fingertips</h1>
    </div>
    <About/>
    <Welcome />
    <Ourcourses />
    <Digitalmarketing />
    <Product />
    <Terminals />
    {/* <Ten_consulting/> */}
    <Image_slider />
    <Footer />
                 </>
    );
};
export default App;

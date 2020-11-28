import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link  to="/" style={{fontSize:"25px",color: "white",fontWeight:"bold",textDecoration:"none",marginRight:"20px",marginLeft:"100px"}}>Home</Link>
                <Link  to="/contact-us" style={{fontSize:"25px",color: "white",fontWeight:"bold",textDecoration:"none"}}>Contact-us</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
    );
};

export default Header;
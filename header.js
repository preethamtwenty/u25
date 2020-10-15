import React from 'react';
import './header.css';
import { Link, useHistory } from "react-router-dom";
import {  Avatar, makeStyles, Modal, Input, IconButton } from "@material-ui/core";

import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { useStateValue } from "./stateprovider";
import { actionTypes } from "./reducer";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import firebase from 'firebase';



function Header() {
    const [{user},dispatch]=useStateValue();

    
    return (
        <div className="header">
        <Navbar className="custom_navbar"  expand="lg">
        <Navbar.Brand className="custom_navbar_brand">YESSS</Navbar.Brand>
        
        
        <Nav className="mr-auto">
       
        <Nav.Link href="#link">
        
        
        </Nav.Link>
        
        
      
        <p><Link to= '/login'> 
        <Button variant="outline-danger">{user ? 'Sign Out' : 'Sign In'}</Button>
        </Link></p>
      
        
        
        </Nav>
        
        </Navbar>

            
        </div>
    )
}

export default Header;

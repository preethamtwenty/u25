import React, { useState, useEffect } from "react";
import './Login.css';
import { Avatar, makeStyles, Modal, Input } from "@material-ui/core";
import {auth, provider} from './firebase';
import { Link, useHistory } from "react-router-dom";
import {actionTypes} from './reducer';
import {useStateValue} from './stateprovider';
import reducer from './reducer'; 
import Button from 'react-bootstrap/Button'




function Login() {
    const history = useHistory();
    const [{},dispatch]=useStateValue();

    const signin=()=>{
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
           console.log(result)
           history.push('/posts')
        })
        .catch((error)=>alert(error.message))


    };
    return(

    
    <div className="login">
        
    <div className="login_header">
    <center>
    YESSS
    </center>
     
    
    </div>
    <div className="login_text">
    <center>
    <img src="./google.png" width="100px" height="100px"/> 
    <center>
    <Button onClick={signin} variant="danger">Log in with Google</Button>
    
    </center>
    </center>
     
    
    </div>

    
    <div className="">
   
    
    
    
    </div>
    </div>
    )
    
   
     


   
}

export default Login

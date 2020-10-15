import React,{forwardRef} from 'react';
import './Comments.css';
import {Avatar, makeStyles, modal, Input } from "@material-ui/core";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStateValue } from "./stateprovider";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import db from './firebase';
import MyVerticallyCenteredModal from './Commentmodal';
import {Link,useParams} from "react-router-dom";







const  Comments=(({c_name,c_avatar,c_text,name,avatar,caption},ref) =>{
    
    

    return (

        <div class="comment_main" >

        

        
        <div className="comment">
        
        <div className="comment_header">
        <Avatar className="post_avatar" alt={c_name} src={c_avatar} />
        
        <div className="comment_user">
        {c_name}
        </div>
        
        <div className="comment_delete">
        <MoreVertIcon>
        
        </MoreVertIcon>
        </div>
        


        </div>
        
        
        <div className="comeent_body">
        <div className="comment_text">
        {c_text}
        </div>
        <div >
        
        
        </div>
        
        </div>
        <div className="comment_body_border">
        </div>




        
        

            
        </div>
        </div>
    )
})

export default Comments;

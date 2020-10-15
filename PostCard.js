import React, { useState, useEffect, forwardRef,postcardcomment } from "react";
import './PostCard.css';
import {Avatar, makeStyles, modal, Input } from "@material-ui/core";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStateValue } from "./stateprovider";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import db from './firebase';
import MyVerticallyCenteredModal from './Commentmodal';
import {Link,useParams} from "react-router-dom";
import firebase from 'firebase';






const PostCard=forwardRef(({name,caption,postId,avatar},ref) =>{
  const[{user},dispatch]=useStateValue();
  const [comment,setComment]=useState();

  const[rcomment,setrcomment]=useState();


  



    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => {
        db.collection('posts').doc(postId).delete().then(function() {
            console.log("Document successfully deleted!");
            
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        }); setShow(false);
  }
    const Close = () => setShow(false);
    const handleShow = () => setShow(true);


    const postComment = (e) => {
      e.preventDefault();
      db.collection("posts").doc(postId).collection("comments").add({
        text: comment,
        username: user?.displayName,
        avatarimage:user?.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setComment("");
      


      
      
    };

   
   return (
        <div className="postcard" ref={ref}>
        <div className="postcard_header">
        <Avatar className="post_avatar" alt={name} src={avatar} />
        <div className="postcard_user">
        {name}
        </div>
        
        <div className="postcard_delete">
        <MoreVertIcon  onClick={handleShow}>
        </MoreVertIcon>
        </div>
        </div>
       
       <div className="postcard_body">
        <div className="postcard_text">
        {caption}
        </div>
        <div >
        </div>
        </div>
        <div className="postcard_body_border">
        </div>
        
        <div className="postcard_footer1">
        
        
        <Link className="view_comment" to= {'posts/'+postId}><ChatBubbleIcon/></Link>
        
        
        
       
        
       
        </div>
        
        <div className="postcard_comment">
        {postcardcomment}
        </div>



       
        <Modal show={show} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post  ?</Modal.Title>
        </Modal.Header>
       
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
        </Modal>

      

        



      
        
        


        
    
            
        </div>
    )
})

export default PostCard;

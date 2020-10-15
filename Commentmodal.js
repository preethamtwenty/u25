import React,{useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useStateValue } from './stateprovider';
import db from './firebase';
import { useParams } from 'react-router';
import firebase from 'firebase';







function MyVerticallyCenteredModal(props) {
    const[{user},dispatch]=useStateValue();
    const [comment,setComment]=useState();
    const {postId}=useParams();
    
    

    const postComment = (e) => {
      
        console.log(postId);
        
      };


 

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Comment here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Comment Box</h4>
          <p>
          <input rows="4" cols="50" className="input_textarea" 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment here"
          ></input>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={postComment}>Post</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default MyVerticallyCenteredModal;
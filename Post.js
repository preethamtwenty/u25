  import React, { useState, useEffect } from "react"
import './Post.css';
import PhotoIcon from '@material-ui/icons/Photo';

import {  Avatar, makeStyles, Modal, Input, IconButton } from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import db  from './firebase';
import firebase from 'firebase';
import {storage} from './firebase';
import { useStateValue } from "./stateprovider";




function Post() {
    const [{user},disptach]=useStateValue();


    const[posttext,setposttext]=useState();
    
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);


    


    const upload=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            text:posttext,
            name:user?.displayName,
            avatarimage:user?.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            
        })
        setposttext('');
    }
    

    
    
    return (
      
        <div className="post">
        
        <div className="post_header">
        <Avatar className="post_avatar" alt="Remy Sharp" src={user?.photoURL} />
        <div className="post_input">
        <textarea rows="4" cols="50" className="input_textarea" placeholder="Wassup"
        value={posttext}
        onChange={(e) => setposttext(e.target.value)}
        ></textarea>
            
        </div>
        
            
            

        </div>
        <div>
        
        </div>
        
        <div className="post_footer">
        <div className="post_footer_border">
        
        </div>
        <PhotoIcon className="PhotoIcon"/>
        <div className="post_footer_button">
        {user &&
        <button onClick={upload} disabled={!posttext}className="post_button">Post</button>}
        
        </div>
        
        
        </div>
        
        
        </div>
        
        
    )
}

export default Post;

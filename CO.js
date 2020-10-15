import React,{useState,useEffect} from 'react';
import {Link,useParams} from "react-router-dom";
import db from './firebase';
import Comment from './Comments';
import { Button, Avatar, makeStyles, Modal, Input } from "@material-ui/core";
import './CO.css';
import ReplyIcon from '@material-ui/icons/Reply';
import { useStateValue } from './stateprovider';
import firebase from 'firebase';



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    height: "300px",
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function CO() {
    const[{user},dispatch]=useStateValue();
    const{ postId }=useParams();
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const[postcomment,setpostComment]=useState();
    const[messages,setmessages]=useState([]);
    const[post,setPost]=useState([]);
    const[name,setName]=useState([]);
    const[avatar,setAvatar]=useState([]);
    const [comment,setComment]=useState([]);
  useEffect(() => {
   if(postId){


   
   
    db.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
         setmessages(snapshot.docs.map((doc) => (
          { c_id: doc.id, 
            message: doc.data() 
          })))
      );}
}, [postId])
   
useEffect(()=>{
  db.collection("posts")
            .doc(postId)
            .onSnapshot((snapshot) => {
                setPost(snapshot.data().text);
                setName(snapshot.data().name);
                setAvatar(snapshot.data().avatarimage);
            });


},[])


const handlePost = (e) => {
  e.preventDefault();
  
  db.collection("posts").doc(postId).collection("comments").add({
    text: comment,
    username: user?.displayName,
    image:user?.photoURL,
    
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });

  setOpen(false);
};

   
    return (
        <div className="co">

       
     
          <div className="postcard_post" ><div className="postcard_header">
          <Avatar className="post_avatar" alt={name} src={avatar} />
          <div className="postcard_user">
          {name}
          </div>
        
          </div>
          <div className="postcard_body">
          <div className="postcard_text">
          {post}
          </div>
          <div className="co_reply" >
           <center>
            {user &&<ReplyIcon onClick={setOpen}/>}
           </center>
           
          </div>
          </div>



          </div>

          
       
        
        
        
        {messages.map(({c_id,message}) => (
          <Comment
            
            
            c_text={message.text}
            c_name={message.username}
            c_avatar={message.image}
            
            
          />
        ))}
        <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
        <div className="modal_header">
        
        <div className="modal_avatar">
        
        
        </div>
        
        </div>
         
            
             
           
            <textarea rows="10" cols="35" className="input_comment" placeholder="comment here" type="text" value={comment}

             onChange={(e) => setComment(e.target.value)}></textarea>
             

             
            <center>
            <Button onClick={handlePost}>Post</Button>
            </center>
          
        </div>
      </Modal>
        
        

        </div>
    )
}

export default CO;

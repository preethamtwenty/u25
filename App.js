import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Post from './Post';
import PostCard from './PostCard';
import db from './firebase';
import FlipMove from "react-flip-move";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from "./stateprovider";
import CO from './CO';
import Sidebar from './Leftsidebar';





function App() {
  const [posts, setPosts] = useState([]);
  const [{user},dispatch]=useStateValue();



  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => (
          { id: doc.id, 
            post: doc.data() 
          })))
      );
  }, []);

  

 


  return (
    <Router>
    <Switch>
    <div className="app">
    
    
    <div className="app_body">
    
    
   
    
    
    <Route path="/posts" exact>
    <Header/>
    <div className="app_sidebar">
    <Sidebar/>
    </div>
   
    <div className="app_post">
    {user&&
    
    <Post/>}
    <FlipMove>
    {posts.map(({ id, post }) => (
      <PostCard
        
        key={id}
        postId={id}
        name={post.name}
        caption={post.text}
        avatar={post.avatarimage}
        
      />
    ))}
    </FlipMove>
    </div>
    <div className="app_rightsidebar">
    ok
    </div>
    </Route>
   
    </div>
    <div className="posts_comment">
    <Route path="/posts/:postId">
    <Header/>
    <CO/>
    
    </Route>
    <Route path="/login">
    <Login/>
    </Route>
    </div>
  
    
    </div>
    
    </Switch>
    </Router>

    
  );
}

export default App;

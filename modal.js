function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      height: "500px",
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 600,
      height: 300,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Login() {
    const history = useHistory();

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    
    const [registerOpen, setRegisterOpen] = useState(false);
    const [{},dispatch]=useStateValue();


    const handleLogin = (e) => {
       
        
        e.preventDefault();
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
                
            });
            history.push('/posts')
        })
        .catch(error => alert(error.message))
      };

      
        
    
      const Signup = (e) => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
  
        setRegisterOpen(false);
        setUsername('');
        setEmail('');
        setPassword('');
        
         
    
        setRegisterOpen(false);
      };

     


    return (
        <div className="login">
        
        <div className="login_header">
        <center>
        YESSS
        </center>
         
        
        </div>
        <div className="login_text">
        <center>
        
        </center>
         
        
        </div>

        
        <div className="login_box">
        
        <div className="login_email">
        <input className="input_email" type="text" placeholder="Enter email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        ></input>
        
        </div>
        <div className="login_password">
        <input  className="input_password" type="password" placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ></input>
        
        </div>
        <center>
        <button onClick={handleLogin}  className="button_login">Login</button>
        </center>
        <center>
        <div className="border_footer">
       
        </div>
        
        </center>
       
        <div className="login_footer">
        <center>
        <button  onClick={() => setOpen(true)} className="button_createaccount">Create Account</button>

        </center>

        <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
        <center>
        
        
        <div className="login_header">
         YESS</div>
         </center>
          <div className="app_login">
            <center>
            <div>
            <Input
              
            placeholder="Username"
            className="sign_name"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           />
           </div>
              
            

            <Input
              
              placeholder="email"
              className="sign_email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
            <Input
              placeholder="password"
              className="sign_email"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <Button onClick={Signup}>Sign up</Button>
            </center>
          </div>
        </div>
      </Modal>
       
        
        </div>
            
        
        </div>
       
            
        </div>
    )
}

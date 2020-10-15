import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  

  apiKey: "AIzaSyBRnD1erk5o2djp7vLParE9o3tVMxzDcJ4",
  authDomain: "under25-7ba21.firebaseapp.com",
  databaseURL: "https://under25-7ba21.firebaseio.com",
  projectId: "under25-7ba21",
  storageBucket: "under25-7ba21.appspot.com",
  messagingSenderId: "755924237391",
  appId: "1:755924237391:web:d9fc120a39b3ba9fb3fe3a",
  measurementId: "G-HELCN0V74N"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();
  
export {provider,auth,storage};
export default db ;
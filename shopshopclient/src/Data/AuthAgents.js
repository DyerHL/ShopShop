
import axios from 'axios';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { auth, firebaseConfig } from './APIKeys';

const baseUrl = "https://localhost:7045/api"
;

const agentExisitsinDB = () => {
    const idToken = sessionStorage.getItem("token");
    console.warn("API Storage", sessionStorage);
    console.warn("API Token", idToken);
    axios.get(`${baseUrl}/Agents/Auth`, { headers: { Authorization: "Bearer " + idToken, idToken: idToken}});
};

const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    //console.log(auth.currentUser.uid);
  };

  const signOutUser = () =>
  new Promise((resolve, reject) => {
    getAuth().signOut().then(resolve).catch(reject);
  });
  
  export { 
    agentExisitsinDB,
    signInUser, 
    signOutUser
};
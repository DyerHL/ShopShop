
import axios from 'axios';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { auth } from './APIKeys';

const baseUrl = "https://localhost:7045/api"
;

const agentExisitsinDB = () => new Promise((resolve, reject) => {
    const idToken = sessionStorage.getItem("token");
    axios.get(`${baseUrl}/Agents/Auth`, { headers: { Authorization: "Bearer " + idToken, idToken: idToken}})
    .then(response => resolve((response)))
    .catch(reject);
});

const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
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

import axios from 'axios';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { auth, firebaseConfig } from './APIKeys';

const baseUrl = firebaseConfig.dbUrl;

const agentExisitsinDB = () => {
    const token = sessionStorage.getItem("idToken");
    console.log(baseUrl);
    axios.get(`${baseUrl}/Agents`, { headers: { Authorization: "Bearer " + token, idToken: token}});
};

const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOutUser = () =>
  new Promise((resolve, reject) => {
    getAuth().signOut().then(resolve).catch(reject);
  });

// const SignupAgent = (agent) => new Promise((resolve, reject) => {
//     axios.post(`${dbUrl}/Agents`, agent)
//     .then(resp => resolve(resp.data))
//     .catch(err => reject(err));
// });

// const SignupAgent = (formInput) => {
//     console.warn('SA' , {...formInput})
//    const email = formInput.email.value;
//    const password = formInput.password.value;

//    createUserWithEmailAndPassword(auth, email, password)
//     .then(cred => {
//         const user = cred.user;

//         console.warn('USER CREATED', cred.user)
//     })
//     .catch(err => {
//         console.warn('AGENT CREATION ERROR', err.message)
//     })

// }

// const signInUser = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider);
//   };
//   const signOutUser = () => new Promise((resolve, reject) => {
//     firebase.auth().signOut().then(resolve).catch(reject);
//   });
  
  export { 
    agentExisitsinDB,
    signInUser, 
    signOutUser
};
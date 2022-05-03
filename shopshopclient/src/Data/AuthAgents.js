import { initializeApp } from 'firebase/app';
import firebaseConfig from './APIKeys';
import { 
    getAuth,
    createUserWithEmailAndPassword,
 } from 'firebase/auth';

initializeApp(firebaseConfig);

const auth = getAuth();

const SignupAgent = (formInput) => {
    console.warn('SA' , {...formInput})
   const email = formInput.email.value;
   const password = formInput.password.value;

   createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
        console.warn('AGENT CREATED', cred.user)
    })
    .catch(err => {
        console.warn('AGENT CREATION ERROR', err.message)
    })

}


// const signInUser = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider);
//   };
//   const signOutUser = () => new Promise((resolve, reject) => {
//     firebase.auth().signOut().then(resolve).catch(reject);
//   });
  export { 
    // signInUser, 
    // signOutUser, 
    SignupAgent 
};
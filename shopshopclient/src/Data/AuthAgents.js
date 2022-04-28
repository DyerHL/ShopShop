import { 
    getAuth,
    createUserWithEmailAndPassword,
 } from 'firebase/auth';

const auth = getAuth()

// Create New Agent Accounts
const signupForm = document.querySelector('.signUp')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signupForm.email.value;
    const password = signupForm.email.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.warn('USER CREATED', cred.user)
        signupForm.reset();
    })
    .catch((err) => {
        console.warn('AGENT CREATION ERROR')
    })
});


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
    signupForm 
};
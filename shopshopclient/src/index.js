import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseConfig from './Data/APIKeys';
import { initializeApp } from 'firebase/app';
import Initialize from './Initialize';
import 'bootstrap/dist/css/bootstrap.css';
// import { getAuth } from 'firebase/auth';

initializeApp(firebaseConfig)
// const auth = getAuth()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Initialize />  
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

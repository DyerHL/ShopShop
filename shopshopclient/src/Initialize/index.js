import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import About from '../Views/About';
import Footer from '../components/Footer';

function Initialize() {
  return (
    <div>
        <Navbar />
        {/*Routing*/}
        <Footer />
    </div>
  );
}

export default Initialize;
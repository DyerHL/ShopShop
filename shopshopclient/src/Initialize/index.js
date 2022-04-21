import React from 'react';
import Navbar from '../Components/Navbar';
import Routing from '../Routes';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Components/Footer';

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
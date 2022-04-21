import React from 'react';
import Navbar from '../Components/Navbar';
import Routing from '../Routes';
import Footer from '../Components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function Initialize() {
  return (
    <div>
        <Navbar />
        <Routing />
        <Footer />
    </div>
  );
}

export default Initialize;
import React from 'react';
import Navbar from '../Components/Navbar';
import Routing from '../Routes';
import Footer from '../Components/Footer';

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
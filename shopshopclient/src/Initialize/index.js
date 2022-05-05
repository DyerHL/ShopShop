import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Routing from '../Routes';
import Footer from '../Components/Footer';
import auth from '../Data/APIKeys';

function Initialize() {
  
  useEffect(() => {
    
  })

  return (
    <div>
        <Navbar />
        <Routing />
        <Footer />
    </div>
  );
}

export default Initialize;
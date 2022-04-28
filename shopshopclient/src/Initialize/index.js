import React from 'react';
import Navbar from '../Components/Navbar';
import Routing from '../Routes';
import Footer from '../Components/Footer';
import Agents from '../Views/Agents';

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
import React from 'react';
import Navbar from '../Components/Navbar';
import Routing from '../Routes';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Components/Footer';
import Agents from '../Views/Agents';

function Initialize() {
  return (
    <div>
        <Navbar />
        <Agents />
        <Routing />
        <Footer />
    </div>
  );
}

export default Initialize;
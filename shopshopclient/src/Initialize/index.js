import React from 'react';
import Navbar from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import About from '../Views/About';

function Initialize() {
  return (
    <div>
        <Navbar />
        <p>"Initialize file is working"</p>
        <About />
        {/*Routing*/}
        {/*Footer*/}
    </div>
  );
}

export default Initialize;
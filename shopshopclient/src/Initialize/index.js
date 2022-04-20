import React from 'react';
import Navbar from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import About from '../Views/About';
import Footer from '../Components/Footer';
=======
import Footer from '../components/Footer';
import EditListingView from '../Views/EditListing';
import AgentsListingsView from '../Views/Agent\'sListings';
import About from '../Views/About';
>>>>>>> e4933546ffd95c11f26f7dd9a408106cf7f7c729

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
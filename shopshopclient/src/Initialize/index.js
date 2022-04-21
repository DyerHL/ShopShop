import React from 'react';
import Navbar from '../Components/Navbar';
import Routing from '../Routes';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Components/Footer';
// import ListingsView from '../Views/ListingsView';
// import EditListingView from '../Views/EditListing';
// import AgentsListingsView from '../Views/Agent\'sListings';
// import About from '../Views/About';

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
import React from 'react';
import Navbar from '../Components/Navbar';
import Routing from '../Routes';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Components/Footer';
<<<<<<< HEAD
// import ListingsView from '../Views/ListingsView';
// import EditListingView from '../Views/EditListing';
// import AgentsListingsView from '../Views/Agent\'sListings';
// import About from '../Views/About';
=======
import ListingsView from '../Views/ListingsView';
import EditListingView from '../Views/EditListing';
import AgentsListingsView from '../Views/Agent\'sListings';
import About from '../Views/About';
import CreateListing from '../Views/CreateListing';
import ListingForm from '../Components/ListingForm';
>>>>>>> master

function Initialize() {
  return (
    <div>
        <Navbar />
<<<<<<< HEAD
        <Routing />
=======
        {/*Routing*/}
>>>>>>> master
        <Footer />
    </div>
  );
}

export default Initialize;
import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer';
import ListingsView from '../views/ListingsView';

function Initialize() {
  return (
    <div>
        <Navbar />
        {/*Routing*/}
        <ListingsView></ListingsView>
        <Footer />
    </div>
  );
}

export default Initialize;
import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function ListingsView() {
  return (
    <div>
        <Navbar></Navbar>
        <div id="listingBanner"></div>
        <h2>Listings</h2>
        <div class="listing-div">
          <img src="" alt="listing-img" />
          <h2>Location Listing Location</h2>
          <h2>Price Listing Price</h2>
          <h2>Square Footage Listing SqFt</h2>
          <h2>Year Built Listing Year</h2>
          <h2>Description Listing Desc</h2>
          <h2>Agent Listing Agent Name</h2>
        </div>
        <Footer></Footer>
    </div>
  )
}

import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
// import nashSkyline from "../Assets";

export default function ListingsView() {
  return (
    <div className="body">
      <Navbar></Navbar>
      {/* <img src={nashSkyline} className="img" /> */}
      <div className="title">
        SHOP SHOP
        <hr className="hr" />
      </div>
      <h2>Listings</h2>
      <div class="div-body">
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
  );
}

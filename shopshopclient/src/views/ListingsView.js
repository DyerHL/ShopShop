import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


export default function ListingsView() {
  return (
    <div className="body">
      <Navbar></Navbar>
      <div className="title">
        SHOP SHOP
        <hr className="hr" />
      </div>
      <h2>Listings</h2>
      <div class="div-body">
        <img src="https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/ListingViewImage.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvTGlzdGluZ1ZpZXdJbWFnZS5qcGciLCJpYXQiOjE2NTA0OTc5MDIsImV4cCI6MTk2NTg1NzkwMn0.g7BVed0bJPnszxGLWGytOMCxISDAyXRalTUrrQa_DdU" alt="listing-img" />
        <h2>Location Listing Location</h2>
        <h2>Price Listing Price</h2>
        <h2>Square Footage Listing SqFt</h2>
        <h2>Year Built Listing Year</h2>
        <h2>Description Listing Desc</h2>
        <h2>Agent Listing Agent Name</h2>
      </div>
    </div>
  );
}

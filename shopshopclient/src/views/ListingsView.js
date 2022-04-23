import React from "react";
<<<<<<< HEAD
=======
import Footer from "../Components/Footer";
import ListingCard from "../Components/ListingCard";
>>>>>>> 1702239c7371b144a891b53942a97065ca99edbc
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
        <ListingCard></ListingCard>
      </div>
    </div>
  );
}

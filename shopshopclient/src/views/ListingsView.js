import React from "react";
import ListingCard from "../Components/ListingCard";

export default function ListingsView() {
  return (
    <div className="body">
      <div className="title">
        SHOP SHOP
        <hr className="hr" />
      </div>
      <h2>Listings</h2>
      <div className="div-body">
        <img src="https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/ListingViewImage.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvTGlzdGluZ1ZpZXdJbWFnZS5qcGciLCJpYXQiOjE2NTA0OTc5MDIsImV4cCI6MTk2NTg1NzkwMn0.g7BVed0bJPnszxGLWGytOMCxISDAyXRalTUrrQa_DdU" alt="listing-img" />
        <ListingCard></ListingCard>
      </div>
    </div>
  );
}

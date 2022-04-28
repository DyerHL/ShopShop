<<<<<<< HEAD
import React from "react";
import ListingCard from "../Components/ListingCard";
=======
import React, { useState, useEffect } from "react";
import ListingCard from "../Components/ListingCard";
import getListings from "../Data/ListingsData";
>>>>>>> 171b618b6946050871a581a641306227831afc85

export default function ListingsView() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getListings().then(setListings);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  console.warn(listings);

  return (
    <div className="body">
      <div className="title">
        SHOP SHOP
        <hr className="hr" />
      </div>
      <h2>Listings</h2>
      <div className="div-body">
<<<<<<< HEAD
        <img src="https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/ListingViewImage.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvTGlzdGluZ1ZpZXdJbWFnZS5qcGciLCJpYXQiOjE2NTA0OTc5MDIsImV4cCI6MTk2NTg1NzkwMn0.g7BVed0bJPnszxGLWGytOMCxISDAyXRalTUrrQa_DdU" alt="listing-img" />
        <ListingCard></ListingCard>
=======
        <img
          src="https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/ListingViewImage.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvTGlzdGluZ1ZpZXdJbWFnZS5qcGciLCJpYXQiOjE2NTA0OTc5MDIsImV4cCI6MTk2NTg1NzkwMn0.g7BVed0bJPnszxGLWGytOMCxISDAyXRalTUrrQa_DdU"
          alt="listing-img"
        />
        <div className="cards">
          {listings.map((listing) => (
            <ListingCard
              key= {listing.id}
              setListings={setListings}
              listing={listing}
            />
          ))}
        </div>
>>>>>>> 171b618b6946050871a581a641306227831afc85
      </div>
    </div>
  );
}

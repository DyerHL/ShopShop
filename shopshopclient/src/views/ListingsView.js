import React, {useState, useEffect} from "react";
import ListingCard from "../Components/ListingCard";
import Navbar from "../Components/Navbar";
import getListings from "../Data/ListingsData";


export default function ListingsView() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getListings().then((listingArr) => {
      if (isMounted) {
        setListings(listingArr);
      }
    })
  
    return () => {
     isMounted = false;
    }
  }, [])
  
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
        {listings.map((listing) => (
          <h4> {listing.Address} </h4>
        ))}
        <ListingCard></ListingCard>
      </div>
    </div>
  );
}

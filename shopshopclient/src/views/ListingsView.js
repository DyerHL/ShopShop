import React, { useState, useEffect } from "react";
import ListingCard from "../Components/ListingCard";
import {getListings} from "../Data/ListingsData";

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

  return (
    <div className="body">
      <img className="img"
      src="https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/ListingViewImageCr.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvTGlzdGluZ1ZpZXdJbWFnZUNyLnBuZyIsImlhdCI6MTY1MTI2NDUxNCwiZXhwIjoxOTY2NjI0NTE0fQ.cP5YKURZdhD6GboCSxNHhtK3GmBHeakY1aALV5ZBOCg"
      alt="listing-img"/>
      <div className="title">
        Listings
      <hr className="hr" />
      </div>

      <div className="div-body">
      </div>
      <div className="cards">
        {listings.map((listing) => (
          <ListingCard
            key= {listing.id}
            setListings={setListings}
            listing={listing}
          />
        ))}
      </div>

    </div>
  );
}

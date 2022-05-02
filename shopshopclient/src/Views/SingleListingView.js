import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getListingsById } from '../Data/ListingsData';

export default function SingleListingView() {
    const [listing, setListing] = useState({});
    const { id } = useParams();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
          getListingsById(id).then((listing) => setListing(listing));
        }
        return () => {
          isMounted = false;
        };
      }, [id]);

  return (
    <div className='body'>
      <h1>Test</h1>
      <h6>{listing.address}</h6>
        <h6>{listing.city}</h6>
        <h6>{listing.details}</h6>
        <h6>${listing.rent}</h6>
        <h6>Square Feet: {listing.squareFoot}</h6>
        <h6>Year Built: {listing.yearBuilt}</h6>
    </div>
  )
}

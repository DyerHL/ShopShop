import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getListingsById } from '../Data/ListingsData';

export default function SingleListingView() {
    const [listing, setListing] = useState({});
    const { id } = useParams();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
          getListingsById(id).then(setListing);
        }
        return () => {
          isMounted = false;
        };
      }, [id]);

      console.warn(listing);

  return (
    <div>
      <h1>{listing.city}</h1>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

export default function ListingCard({listing}) {
  return (
    <div className='listing-card'>
      <img class="img" src={listing.imgUrl} alt="img" />
      <div className='listing-card-body'>
        <h6>{listing.address}</h6>
        <h6>{listing.city}</h6>
        <h6>{listing.details}</h6>
        <h6>${listing.rent}</h6>
        <h6>Square Feet: {listing.squareFoot}</h6>
        <h6>Year Built: {listing.yearBuilt}</h6>
        <Link
              type="button"
              className="btn btn-primary"
              to={`/Listings/Listings/${listing.id}`}
            >
              Details
        </Link>
      </div>
    </div>
  )
}

ListingCard.Proptype = {
  listing: PropTypes.shape(PropTypes.obj).isRequired
}

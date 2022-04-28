import React from 'react'
import PropTypes from "prop-types";

export default function ListingCard({listing}) {
  return (
    <div>
        <h2>{listing.address}</h2>
        <h2>{listing.city}</h2>
        <h2>{listing.details}</h2>
        <h2>${listing.rent}</h2>
        <h2>{listing.squareFoot}</h2>
        <h2>{listing.yearBuilt}</h2>
    </div>
  )
}

ListingCard.Proptype = {
  listing: PropTypes.shape(PropTypes.obj).isRequired
}

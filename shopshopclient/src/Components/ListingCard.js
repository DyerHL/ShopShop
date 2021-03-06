import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { Button } from 'reactstrap';
import { deleteListing } from '../Data/ListingsData';

export default function ListingCard({listing, setListings}) {

  const handleDelete = (e) => {
    e.preventDefault();
    deleteListing(listing.id).then(setListings);
  }
  return (
    <div className='listing-card'>
      <img className="img" src={listing.imgUrl} alt="img" />
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
              to={`/listings/${listing.id}`}
            >
              Details
        </Link>
        <Button type="button" className='btn-danger' onClick={(e) => handleDelete(e)}>DELETE</Button>
      </div>
    </div>
  )
}

ListingCard.Proptype = {
  listing: PropTypes.shape(PropTypes.obj).isRequired,
  setListings: PropTypes.func.isRequired
}

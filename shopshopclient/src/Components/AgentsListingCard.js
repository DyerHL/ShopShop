import React from 'react'
import { Link, useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import { Button } from 'reactstrap';
import { deleteListing } from '../Data/ListingsData';

export default function AgentListingCard({card, setListings}) {

  const handleDelete = (e) => {
    e.preventDefault();
    deleteListing(card.id).then(setListings);
  }
  return (
    <div className='listing-card'>
      <img className="img" src={card.imgUrl} alt="img" />
      <div className='listing-card-body'>
        <h6>{card.address}</h6>
        <h6>{card.city}</h6>
        <h6>{card.details}</h6>
        <h6>${card.rent}</h6>
        <h6>Square Feet: {card.squareFoot}</h6>
        <h6>Year Built: {card.yearBuilt}</h6>
        <Link
              type="button"
              className="btn btn-primary"
              to={`/listings/${card.id}`}
            >
              Details
        </Link>
        <Button type="button" className='btn-danger' onClick={(e) => handleDelete(e)}>DELETE</Button>
      </div>
    </div>
  )
}

AgentListingCard.Proptype = {
  listing: PropTypes.shape(PropTypes.obj).isRequired,
  setListings: PropTypes.func.isRequired
}
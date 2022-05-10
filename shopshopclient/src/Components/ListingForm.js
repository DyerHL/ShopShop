import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { createListing } from '../Data/ListingsData';

const initialState = {
    address: '',
    squareFoot: '',
    rent: '',
    city: '',
    yearBuilt: '',
    description: '',
    imageUrl: '',
    agent: '',
}

export default function ListingForm(listing = {}) {
    const [formInput, setFormInput] = useState(initialState);
    let navigation = useNavigate();

    useEffect(() => {
        if(listing.id){

            setFormInput({
                address: listing.address,
                squareFoot: listing.squareFoot,
                rent: listing.rent,
                city: listing.city,
                yearBuilt: listing.yearBuilt,
                description: listing.description,
                imageUrl: listing.imageUrl,
                agent: listing.agent
            });
        }
      }, [listing]);
    

    const handleChange = (e) => {
        setFormInput((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));    
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            createListing(formInput).then(navigation('/listings', { replace: true }))
        }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="address">
            Address:
            <input type="text" id="address" value={formInput.address || ""} onChange={handleChange}/>
        </label>
        <label htmlFor="squareFoot">
            Square Foot:
            <input type="text" id="squareFoot" value={formInput.squareFoot || ""} onChange={handleChange}/>
        </label>
        <label htmlFor="rent">
            Rent:
            <input type="text" id="rent" value={formInput.rent || ""} onChange={handleChange}/>
        </label>
        <label htmlFor="city">
            City:
            <input type="text" id="city" value={formInput.city || ""} onChange={handleChange}/>
        </label>
        <label htmlFor="yearBuilt">
            Year Built:
            <input type="text" id="yearBuilt" value={formInput.yearBuilt || ""} onChange={handleChange}/>
        </label>
        <label htmlFor="description">
            Description:
            <input type="text" id="description" value={formInput.description || ""} onChange={handleChange}/>
        </label>
        <label htmlFor="imageUrl">
            ImageUrl:
            <input type="text" id="imageUrl" value={formInput.imageUrl || ""} onChange={handleChange}/>
        </label>
        <label htmlFor="agent">
            Agent:
            <input type="text" id="agent" value={formInput.agent || ""} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}

ListingForm.Proptype = {
    listing: PropTypes.shape(PropTypes.obj).isRequired,
    setListings: PropTypes.func.isRequired
  }
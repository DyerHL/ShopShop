import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { createListing, getListings } from '../Data/ListingsData';

const initialState = {
    address: '',
    squareFoot: 0,
    rent: 0,
    city: '',
    yearBuilt: 0,
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
                squareFoot: Number(listing.squareFoot),
                rent: Number(listing.rent),
                city: listing.city,
                yearBuilt: Number(listing.yearBuilt),
                description: listing.description,
                imageUrl: listing.imageUrl,
                agentId: Number(listing.agentId)
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
            console.warn(formInput);
            const newObject = {
                address: formInput.address,
                squareFoot: Number(formInput.squareFoot),
                rent: Number(formInput.rent),
                city: formInput.city,
                yearBuilt: Number(formInput.yearBuilt),
                Details: formInput.description,
                ImgUrl: formInput.imageUrl,
                agentId: Number(formInput.agentId)
            }
            console.warn(newObject);
            createListing(newObject).then(getListings().then(navigation('/listings', { replace: true })))
        }

  return (
    <form className='form-body' onSubmit={handleSubmit}>
        <div className='form-group'>

        <label className='form-label' htmlFor="address">
            Address:
        </label>
            <input type="text" id="address" className='form-input' value={formInput.address || ""} onChange={handleChange}/>
        </div>
        <label className='form-label' htmlFor="squareFoot">
            Square Foot:
<<<<<<< HEAD
=======
            <input type="number" id="squareFoot" className='form-input' value={Number(formInput.squareFoot) || ""} onChange={handleChange}/>
>>>>>>> master
        </label>
            <input type="text" id="squareFoot" className='form-input' value={formInput.squareFoot || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="rent">
            Rent:
<<<<<<< HEAD
=======
            <input type="number" id="rent" className='form-input' value={formInput.rent || ""} onChange={handleChange}/>
>>>>>>> master
        </label>
            <input type="text" id="rent" className='form-input' value={formInput.rent || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="city">
            City:
        </label>
            <input type="text" id="city" className='form-input' value={formInput.city || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="yearBuilt">
            Year Built:
<<<<<<< HEAD
=======
            <input type="number" id="yearBuilt" className='form-input' min="1900" max="2022" value={formInput.yearBuilt || ""} onChange={handleChange}/>
>>>>>>> master
        </label>
            <input type="text" id="yearBuilt" className='form-input' value={formInput.yearBuilt || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="description">
            Description:
        </label>
<<<<<<< HEAD
            <input type="text" id="description" className='form-input' value={formInput.description || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="agent">
            Agent:
=======
        <label htmlFor="imageUrl">
            ImageUrl:
            <input type="text" id="imageUrl" value={formInput.imageUrl || ""} onChange={handleChange}/>
        </label>
        <label className='form-label' htmlFor="agentId">
            Agent:
            <input type="number" id="agentId" className='form-input' value={formInput.agentId || ""} onChange={handleChange}/>
>>>>>>> master
        </label>
        <input type="text" id="agent" className='form-input' value={formInput.agent || ""} onChange={handleChange}/>
        <input type="submit" value="Submit" className='form-submit'/>
    </form>
  )
}

ListingForm.Proptype = {
    listing: PropTypes.shape(PropTypes.obj).isRequired,
    setListings: PropTypes.func.isRequired
  }
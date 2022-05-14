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
        <div className='form-group'>
            <label className='form-label' htmlFor="squareFoot">
                Square Foot:
            </label>
            <input type="number" id="squareFoot" className='form-input' value={Number(formInput.squareFoot) || ""} onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <label className='form-label' htmlFor="rent">
                Rent:
            </label>
            <input type="number" id="rent" className='form-input' value={formInput.rent || ""} onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <label className='form-label' htmlFor="city">
                City:
            </label>
            <input type="text" id="city" className='form-input' value={formInput.city || ""} onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <label className='form-label' htmlFor="yearBuilt">
                Year Built:
            </label>
            <input type="number" id="yearBuilt" className='form-input' 
            min="1900"
            max="2022" 
             value={formInput.yearBuilt || ""} onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <label className='form-label' htmlFor="description">
                Description:
            </label>
            <input type="text" id="description" className='form-input' value={formInput.description || ""} onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <label className='form-label' htmlFor="imageUrl">
                ImageUrl:
            </label>
            <input type="text" id="imageUrl" className='form-input' value={formInput.imageUrl || ""} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor="agentId">
                Agent:
           </label>
           <input type="number" id="agentId" className='form-input' value={formInput.agentId || ""} onChange={handleChange}/>
        </div>
        <input type="submit" className='form-btn' value="Submit" />
    </form>
  )
}

ListingForm.Proptype = {
    listing: PropTypes.shape(PropTypes.obj).isRequired,
    setListings: PropTypes.func.isRequired
  }
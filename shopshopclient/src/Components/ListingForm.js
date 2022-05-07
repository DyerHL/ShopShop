import React, { useState } from 'react'

const initialState = {
    address: '',
    squareFoot: '',
    rent: '',
    city: '',
    yearBuilt: '',
    description: '',
    agent: '',
}

export default function ListingForm() {
    const [formInput, setFormInput] = useState(initialState);

    const handleChange = (e) => {
        setFormInput((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));    
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            console.warn(formInput);
        }

  return (
    <form className='form-body' onSubmit={handleSubmit}>
        <label className='form-label' htmlFor="address">
            Address:
            <input type="text" id="address" className='form-input' value={formInput.address || ""} onChange={handleChange}/>
        </label>
        <label className='form-label' htmlFor="squareFoot">
            Square Foot:
            <input type="text" id="squareFoot" className='form-input' value={formInput.squareFoot || ""} onChange={handleChange}/>
        </label>
        <label className='form-label' htmlFor="rent">
            Rent:
            <input type="text" id="rent" className='form-input' value={formInput.rent || ""} onChange={handleChange}/>
        </label>
        <label className='form-label' htmlFor="city">
            City:
            <input type="text" id="city" className='form-input' value={formInput.city || ""} onChange={handleChange}/>
        </label>
        <label className='form-label' htmlFor="yearBuilt">
            Year Built:
            <input type="text" id="yearBuilt" className='form-input' value={formInput.yearBuilt || ""} onChange={handleChange}/>
        </label>
        <label className='form-label' htmlFor="description">
            Description:
            <input type="text" id="description" className='form-input' value={formInput.description || ""} onChange={handleChange}/>
        </label>
        <label className='form-label' htmlFor="agent">
            Agent:
            <input type="text" id="agent" className='form-input' value={formInput.agent || ""} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}

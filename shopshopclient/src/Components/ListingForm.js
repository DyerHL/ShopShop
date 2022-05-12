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
        <div className='form-group'>

        <label className='form-label' htmlFor="address">
            Address:
        </label>
            <input type="text" id="address" className='form-input' value={formInput.address || ""} onChange={handleChange}/>
        </div>
        <label className='form-label' htmlFor="squareFoot">
            Square Foot:
        </label>
            <input type="text" id="squareFoot" className='form-input' value={formInput.squareFoot || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="rent">
            Rent:
        </label>
            <input type="text" id="rent" className='form-input' value={formInput.rent || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="city">
            City:
        </label>
            <input type="text" id="city" className='form-input' value={formInput.city || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="yearBuilt">
            Year Built:
        </label>
            <input type="text" id="yearBuilt" className='form-input' value={formInput.yearBuilt || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="description">
            Description:
        </label>
            <input type="text" id="description" className='form-input' value={formInput.description || ""} onChange={handleChange}/>
        <label className='form-label' htmlFor="agent">
            Agent:
        </label>
        <input type="text" id="agent" className='form-input' value={formInput.agent || ""} onChange={handleChange}/>
        <input type="submit" value="Submit" className='form-submit'/>
    </form>
  )
}

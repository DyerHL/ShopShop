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
        <label htmlFor="agent">
            Agent:
            <input type="text" id="agent" value={formInput.agent || ""} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}

import React, { useState } from 'react'

const initialState = {
    picture: '',
    firstName: '',
    lastName: '',
    phoneNum: '',
    email: '',
    password: '',
}

export default function AgentProfileForm() {
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
            <label htmlFor='username'>
                Picture:
                <input type='text' id='picture' value={formInput.picture || ''} onChange={handleChange} />
            </label>
            <label htmlFor='firstName'>
                Password:
                <input type='text' id='firstName' value={formInput.firstName || ''} onChange={handleChange} />
            </label>
            <label htmlFor='lastName'>
                Picture:
                <input type='text' id='lastName' value={formInput.lastName || ''} onChange={handleChange} />
            </label>
            <label htmlFor='phoneNum'>
                Password:
                <input type='text' id='phoneNum' value={formInput.phoneNum || ''} onChange={handleChange} />
            </label>
            <label htmlFor='email'>
            Username:
            <input type='text' id='email' value={formInput.email || ''} onChange={handleChange} />
        </label>
        <label htmlFor='password'>
            Password:
            <input type='text' id='password' value={formInput.password || ''} onChange={handleChange} />
        </label>
            <input type="submit" value="Submit" />
        </form>
      )
    }

import React, { useState } from 'react';
import { SignupAgent } from '../Data/AuthAgents';

const initialState = {
    email: '',
    password: '',
}

export default function CreateAgentForm() {
    const [formInput, setFormInput] = useState(initialState);

    const resetForm = () => {
        setFormInput(initialState);
      };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.warn( 'submited', {...formInput});
        SignupAgent({ ...formInput});
        resetForm();
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
            Username:
            <input type='text' id='email' name='email' required value={formInput.email || ''} onChange={handleChange} />
        </label>
        <label htmlFor='password'>
            Password:
            <input type='text' id='password' name='password' required value={formInput.password || ''} onChange={handleChange} />
        </label>
        <button type="submit" className ='btn btn-info form-btn'>
            Submit Cred
        </button>
    </form>
  )
}
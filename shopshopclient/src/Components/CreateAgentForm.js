import React, { useState, useRef } from 'react';

const initialState = {
    email: '',
    password: '',
}

export default function CreateAgentForm() {
    const [formInput, setFormInput] = useState(initialState);

    const emailRef = useRef();
    const passwordRef = useRef();

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
        //SignInUser({ ...formInput});
        resetForm();
    }
    
  return (
    <form className='form-body' onSubmit={handleSubmit}>
        <label className='form-label' htmlFor='username'>
            Username:
            <input type='email' ref={emailRef}  className='form-input' name='email' required value={formInput.email || ''} onChange={handleChange} />
        </label>
        <label className='form-label' htmlFor='password'>
            Password:
            <input type='password' ref={passwordRef} className='form-input' name='password' required value={formInput.password || ''} onChange={handleChange} />
        </label>
        <button type="submit" className ='btn btn-info form-btn'>
            Submit Cred
        </button>
    </form>
  )
}
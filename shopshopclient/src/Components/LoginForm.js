import React, { useState, useRef } from 'react'

const initialState = {
    username: '',
    password: '',
}

export default function LoginForm() {
    const [formInput, setFormInput] = useState(initialState);

    // const emailRef = useRef();
    // const passwordRef = useRef();

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
        <label className='form-label' htmlFor='username'>
            Username:
            <input type='text' id='username' className='form-input' value={formInput.username || ''} onChange={handleChange} />
        </label>
        <label className='form-label' htmlFor='password'>
            Password:
            <input type='text' id='password' className='form-input' value={formInput.password || ''} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}
